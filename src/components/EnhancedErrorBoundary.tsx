import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Generate unique error ID for tracking
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      hasError: true,
      error,
      errorId,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo,
    });

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error Boundary caught an error:', error, errorInfo);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Send error to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      this.reportError(error, errorInfo);
    }
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    // In a real application, you would send this to your error monitoring service
    // For now, we'll just log it
    console.error('Production Error Report:', {
      errorId: this.state.errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    });
  };

  private handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: '',
    });
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  private handleReportBug = () => {
    const errorReport = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
    };

    // Create a mailto link with error details
    const subject = encodeURIComponent(`Bug Report - Error ID: ${this.state.errorId}`);
    const body = encodeURIComponent(`
Error Details:
- Error ID: ${errorReport.errorId}
- Message: ${errorReport.message}
- URL: ${errorReport.url}
- Timestamp: ${errorReport.timestamp}
- User Agent: ${errorReport.userAgent}

Stack Trace:
${errorReport.stack}

Component Stack:
${errorReport.componentStack}
    `);

    window.open(`mailto:support@ziontechgroup.com?subject=${subject}&body=${body}`);
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
          <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Oops! Something went wrong
              </h1>
              
              <p className="text-gray-600 mb-6">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left">
                  <h3 className="text-sm font-medium text-red-800 mb-2">Error Details:</h3>
                  <p className="text-sm text-red-700 mb-2">
                    <strong>Message:</strong> {this.state.error.message}
                  </p>
                  <details className="text-sm text-red-700">
                    <summary className="cursor-pointer font-medium">Stack Trace</summary>
                    <pre className="mt-2 whitespace-pre-wrap text-xs">
                      {this.state.error.stack}
                    </pre>
                  </details>
                  {this.state.errorInfo && (
                    <details className="text-sm text-red-700 mt-2">
                      <summary className="cursor-pointer font-medium">Component Stack</summary>
                      <pre className="mt-2 whitespace-pre-wrap text-xs">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800">
                  <strong>Error ID:</strong> {this.state.errorId}
                </p>
                <p className="text-sm text-blue-700 mt-1">
                  Please include this ID when reporting the issue.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={this.handleRetry}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Try Again
                </button>
                
                <button
                  onClick={this.handleGoHome}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </button>
                
                <button
                  onClick={this.handleReportBug}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  <Bug className="h-4 w-4 mr-2" />
                  Report Bug
                </button>
                
                <button
                  onClick={this.handleReload}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Reload Page
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;
import, Reac, t, { Compone, n, t, ErrorIn, f, o, ReactNo, d, e } fr, o, m "rea, c, t";'; impo, r, t {} fr, o, m "luci, d, e-rea, c, t"; interface, Prop, s { childr, e, n: ReactNo, d, e ' } fr, o, m "luci, d, e-rea, c, t";'; interface, Prop, s { childr, e, n: ReactNo, d, e; fallba, c, k?: ReactNo, d, e; onErr, o, r?: (er, r, o r: Err, o, r, errorIn, f, o: ErrorIn, f, o) => vo, i, d; } interface, Stat, e { hasErr, o, r: boole, a, n; err, o, r: Err, o, r | nu, l, l; errorIn, f, o: ErrorIn, f, o | nu, l, l; erro, r, I d: stri, n, g; } class, EnhancedErrorBoundary, extends Compone, n, t<Pro, p, s, Sta, t, e> { construct, o, r(pro, p, s: Pro, p, s) { sup, e, r(pro, p, s); th, i, s.sta, t, e = { hasErr, o, r: fal, s, e err, o, r: nu, l, l errorIn, f, o: nu, l, l' error, I, d: '}; ' error, I, d: '' }; } static, getDerivedStateFromErro, r(err, o, r: Err, o, r): Parti, a, l<Sta, t, e> { retu, r, n { hasErr, o, r: tr, u, e err, o, r error, I, d: `erro, r, _${Da, t, e.n, o, w()}_${Ma, t, h.rand, o, m().toStri, n, g(36).subs, t, r(2, 9)}`` }; } componentDidCat, c, h(err, o, r: Err, o, r, errorIn, f, o: ErrorIn, f, o) { th, i, s.setSta, t, e({ err, o, r errorIn, f, o; }); // Log, error, to console, in, development' if (proce, s, s.e, n, v.NODE_E, N, V === 'developme, n, t') {;' conso, l, e.err, o, r('Error, Boundary, caught an, erro, r: ', err, o, r, errorIn, f, o);' ' if (proce, s, s.e, n, v.NODE_E, N, V === 'developme, n, t') {';' conso, l, e.err, o, r('Error, Boundary, caught an, erro, r: ', err, o, r, errorIn, f, o);'; } // Report, error, to external, servic, e th, i, s.reportErr, o, r(err, o, r, errorIn, f, o); // Call, custom, error handler, if, provided if (th, i, s.pro, p, s.onErr, o, r) { th, i, s.pro, p, s.onErr, o, r(err, o, r, errorIn, f, o); } } reportErr, o, r = (err, o, r: Err, o, r, errorIn, f, o: ErrorIn, f, o) => { // In, a, real applicati, o, n, you, would, send this, to, an error, reporting, service; // like, Sentr, y, LogRock, e, t, or, Bugsna, g const, errorRepor, t = { error, I, d: th, i, s.sta, t, e.error, I, d messa, g, e: err, o, r.messa, g, e sta, c, k: err, o, r.sta, c, k componentSta, c, k: errorIn, f, o.componentSta, c, k timesta, m, p: new, Dat, e().toISOStri, n, g() userAge, n, t: navigat, o, r.userAge, n, t u, r, l: wind, o, w.locati, o, n.hr, e, f user, I, d: th, i, s.getUser, I, d() session, I, d: th, i, s.getSession, I, d() };' // For, no, w, we'll, just, log it;' conso, l, e.err, o, r('Error, Repor, t: ', errorRepo, r, t);' // In, productio, n, send, to, error reporting, servic, e:' // fet, c, h('/a, p, i/erro, r, s', {' // meth, o, d: 'PO, S, T' // head, e, r' s: { 'Conte, n, t-Ty, p, e': 'applicati, o, n/js, o, n' } // bo, d, y: JS, O, N.stringi, f, y(errorRepo, r, t) ' // For, no, w, we'll, just, log it';' conso, l, e.err, o, r('Error, Repor, t: ', errorRepo, r, t);';' // In, productio, n, send, to, error reporting, servic, e: // fet, c, h('/a, p, i/erro, r, s', {';' // meth, o, d: 'PO, S, T',';' // heade, r, s: { 'Conte, n, t-Ty, p, e': 'applicati, o, n/js, o, n' },'; // bo, d, y: JS, O, N.stringi, f, y(errorRepo, r, t) // }); }; getUser, I, d = (): stri, n, g | nu, l, l => { // Get, user, ID from, localStorag, e, cooki, e, s, or, auth, context' return, localStorag, e.getIt, e, m('user, I, d');'; }; getSession, I, d = (): stri, n, g => {' let, sessionI, d = sessionStora, g, e.getIt, e, m('session, I, d');'; if (!session, I, d) { session, I, d = `sessio, n, _${Da, t, e.n, o, w()}_${Ma, t, h.rand, o, m().toStri, n, g(36).subs, t, r(2, 9)}`;`;`' sessionStora, g, e.setIt, e, m('session, I, d', session, I, d); ' sessionStora, g, e.setIt, e, m('session, I, d', session, I, d);'; } return, sessionI, d; }; handleRet, r, y = () => { th, i, s.setSta, t, e({ hasErr, o, r: fal, s, e err, o, r: nu, l, l errorIn, f, o: nu, l, l' error, I, d: '}); ' error, I, d: '' }); }; handleRelo, a, d = () => { wind, o, w.locati, o, n.relo, a, d(); }; handleGoHo, m, e = () => {' wind, o, w.locati, o, n.hr, e, f = '/';'; }; handleReportErr, o, r = () => { const, errorRepor, t = { error, I, d: th, i, s.sta, t, e.error, I, d messa, g, e: th, i, s.sta, t, e.err, o, r?.messa, g, e sta, c, k: th, i, s.sta, t, e.err, o, r?.sta, c, k u, r, l: wind, o, w.locati, o, n.hr, e, f timesta, m, p: new, Dat, e().toISOStri, n, g() }; // Open, email, client with, error, details const, subjec, t = encodeURICompone, n, t(`Error, Repor, t - ${th, i, s.sta, t, e.error, I, d}`);`;` const, bod, y = encodeURICompone, n, t(`` Error, I, D: ${th, i, s.sta, t, e.error, I, d} Error, Messag, e: ${th, i, s.sta, t, e.err, o, r?.messa, g, e} U, R, L: ${wind, o, w.locati, o, n.hr, e, f} Timesta, m, p: ${new, Dat, e().toISOStri, n, g()} Please, describe, what you, were, doing when, this, error occurr, e, d: [Your, description, here]  UR L: ${wind, o, w.locati, o, n.hr, e, f} Timesta, m, p: ${new, Dat, e().toISOStri, n, g()} Please, describe, what you, were, doing when, this, error occurr, e, d: [Your, description, here] Stack, Trac, e: ${th, i, s.sta, t, e.err, o, r?.sta, c, k} `);`;` wind, o, w.op, e, n(`mail, t, o:kleb, e, r@ziontechgro, u, p.c, o, m?subje, c, t=${subje, c, t}&bo, d, y=${bo, d, y}`);`;` }; rend, e, r() { if (th, i, s.sta, t, e.hasErr, o, r) { // Custom, fallback, UI if (th, i, s.pro, p, s.fallba, c, k) { return, thi, s.pro, p, s.fallba, c, k; } // Default, error, UI return ( <div, className="m, i, n-h-screen, b, g-gr, a, y-50, flex, items-center, justif, y-center, p, x-4" > <div, className="m, a, x-w-2x, l, w-full, b, g-white, rounde, d-lg, shado, w-l, g, p-8, tex, t-cent, e, r" > <div, className="mb-6" > <AlertTriangle, className="w-1, 6, h-16, tex, t-r, e, d-500, m, x-auto, m, b-4 /> <h1, className=" te, x, t-2xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2"> Oo, p, s! Something, went, wrong; </h1> <p, className="te, x, t-gr, a, y-600, m, b-4" >' We're, sorr, y, but, something, unexpected happen, e, d. Our, team, has been, notifie, d ;  <div, className="m, i, n-h-screen, b, g-gr, a, y-50, flex, items-center, justif, y-center, p, x-4" >"; <div, className="m, a, x-w-2x, l, w-full, b, g-white, rounde, d-lg, shado, w-l, g, p-8, tex, t-cent, e, r" >"; <div, className="mb-6" >"; <AlertTriangle, className="w-1, 6, h-16, tex, t-r, e, d-500, m, x-auto, m, b-4" />"; <h1, className="te, x, t-2xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2" >"; Oo, p, s! Something, went, wrong; </h1> <p, className="te, x, t-gr, a, y-600, m, b-4" >";' We're, sorr, y, but, something, unexpected happen, e, d. Our, team, has been, notifie, d '; and, is, working to, fix, this iss, u, e. </p> </d, i, v> <div, className="bg-gr, a, y-100, rounde, d-l, g, p-4, m, b-6, tex, t-le, f, t" > <h3, className="fo, n, t-semibold, tex, t-gr, a, y-900, m, b-2" >Error, Detail, s: </h3>" <p, className="te, x, t-sm, tex, t-gr, a, y-600, m, b-2" > <stro, n, g>Error, I, D:</stro, n, g> {th, i, s.sta, t, e.error, I, d} </p> <p, className="te, x, t-sm, tex, t-gr, a, y-6, 0, 0" >' <stro, n, g>Messa, g, e:</stro, n, g> {th, i, s.sta, t, e.err, o, r?.messa, g, e || 'Unknown, erro, r'}; </p> </d, i, v> <div, className="flex, fle, x-col, s, m: fl, e, x-row, ga, p-3, justif, y-cent, e, r" >"  <div, className="bg-gr, a, y-100, rounde, d-l, g, p-4, m, b-6, tex, t-le, f, t" >"; <h3, className="fo, n, t-semibold, tex, t-gr, a, y-900, m, b-2" >Error, Detail, s: </h3>"; <p, className="te, x, t-sm, tex, t-gr, a, y-600, m, b-2" >"; <stro, n, g>Erro, r, I D:</stro, n, g> {th, i, s.sta, t, e.error, I, d} </p> <p, className="te, x, t-sm, tex, t-gr, a, y-6, 0, 0" >";' <stro, n, g>Messa, g, e:</stro, n, g> {th, i, s.sta, t, e.err, o, r?.messa, g, e || 'Unknown, erro, r'}'; </p> </d, i, v> <div, className="flex, fle, x-col, s, m: fl, e, x-row, ga, p-3, justif, y-cent, e, r" >"; <butt, o, n onCli, c, k={th, i, s.handleRet, r, y} classNa, m, e="inli, n, e-flex, item, s-center, p, x-4, p, y-2, b, g-bl, u, e-600, tex, t-white, rounde, d-lg, hove, r: bg-bl, u, e-700, transitio, n-colo, r, s" > <RefreshCw, className="w-4 h-4, m, r-2 />  <RefreshCw, className=" w-4 h-4, m, r-2" />"; Try, Agai, n; </butt, o, n> <butt, o, n onCli, c, k={th, i, s.handleGoHo, m, e} classNa, m, e="inli, n, e-flex, item, s-center, p, x-4, p, y-2, b, g-gr, a, y-600, tex, t-white, rounde, d-lg, hove, r: bg-gr, a, y-700, transitio, n-colo, r, s" > <Home, className="w-4 h-4, m, r-2 />  <Home, className=" w-4 h-4, m, r-2" />"; Go, Hom, e; </butt, o, n> <butt, o, n onCli, c, k={th, i, s.handleRelo, a, d} classNa, m, e="inli, n, e-flex, item, s-center, p, x-4, p, y-2, border, border-gr, a, y-300, tex, t-gr, a, y-700, rounde, d-lg, hove, r: bg-gr, a, y-50, transitio, n-colo, r, s" > <RefreshCw, className="w-4 h-4, m, r-2 />  <RefreshCw, className=" w-4 h-4, m, r-2" />"; Reload, Pag, e; </butt, o, n> </d, i, v> <div, className="mt-6, p, t-6, borde, r-t, borde, r-gr, a, y-2, 0, 0" >"; <p, className="te, x, t-sm, tex, t-gr, a, y-500, m, b-3" >"; If, this, problem persis, t, s, please, report, it to, our, support te, a, m. </p> <butt, o, n onCli, c, k={th, i, s.handleReportErr, o, r} classNa, m, e="inli, n, e-flex, item, s-center, p, x-4, p, y-2, tex, t-bl, u, e-600, hove, r: te, x, t-bl, u, e-700, transitio, n-colo, r, s" > <Mail, className="w-4 h-4, m, r-2 />  <Mail, className=" w-4 h-4, m, r-2" />"; Report, Erro, r; </butt, o, n> </d, i, v> {' proce, s, s.e, n, v.NODE_E, N, V === 'developme, n, t' && th, i, s.sta, t, e.errorIn, f, o && (; <details, className="mt-6, tex, t-le, f, t" > <summary, className="curs, o, r-pointer, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, hove, r: te, x, t-gr, a, y-9, 0, 0" > ' proce, s, s.e, n, v.NODE_E, N, V === 'developme, n, t' && th, i, s.sta, t, e.errorIn, f, o && ('; <details, className="mt-6, tex, t-le, f, t" >"; <summary, className="curs, o, r-pointer, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, hov, e r: te, x, t-gr, a, y-9, 0, 0" >,"; Development, Detail, s; </summa, r, y> <pre, className="mt-2, tex, t-xs, tex, t-gr, a, y-600, b, g-gr, a, y-10, 0, p-3, rounded, overflow-auto, ma, x-h-64" >"; {th, i, s.sta, t, e.err, o, r?.sta, c, k; } {th, i, s.sta, t, e.errorIn, f, o.componentSta, c, k} </p, r, e> </detai, l, s> )} </d, i, v> </d, i, v> ); } return, thi, s.pro, p, s.childr, e, n; } } export default EnhancedErrorBoundary;'
