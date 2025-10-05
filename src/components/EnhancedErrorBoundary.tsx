<<<<<<< HEAD
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string | null;
}

class EnhancedErrorBoundary extends Component<Props, State> {
  private retryCount = 0;
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: null
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Update state so the next render will show the fallback UI
    return {
      hasError: true,
      error,
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error details
    console.error('EnhancedErrorBoundary caught an error:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo
    });

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Report error to monitoring service
    this.reportError(error, errorInfo);
  }

  private reportError = (error: Error, errorInfo: ErrorInfo) => {
    const errorReport = {
      errorId: this.state.errorId,
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      retryCount: this.retryCount
    };

    // Send to error reporting service
    if (typeof window !== 'undefined' && 'fetch' in window) {
      fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorReport)
      }).catch(console.error);
    }

    // Store in localStorage for debugging
    try {
      const existingErrors = JSON.parse(localStorage.getItem('errorLogs') || '[]');
      existingErrors.push(errorReport);
      // Keep only last 10 errors
      if (existingErrors.length > 10) {
        existingErrors.splice(0, existingErrors.length - 10);
      }
      localStorage.setItem('errorLogs', JSON.stringify(existingErrors));
    } catch (e) {
      console.warn('Failed to store error in localStorage:', e);
    }
  };

  private handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: null
      });
    }
  };

  private handleReload = () => {
    window.location.reload();
  };

  private handleReportBug = () => {
    const errorDetails = {
      errorId: this.state.errorId,
      message: this.state.error?.message,
      stack: this.state.error?.stack,
      componentStack: this.state.errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      url: window.location.href
    };

    // Create a mailto link with error details
    const subject = `Bug Report - Error ID: ${this.state.errorId}`;
    const body = `Error Details:\n\n${JSON.stringify(errorDetails, null, 2)}`;
    const mailtoLink = `mailto:support@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.open(mailtoLink);
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 text-red-500">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                Oops! Something went wrong
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                We're sorry, but something unexpected happened. Our team has been notified.
              </p>
              {this.state.errorId && (
                <p className="mt-1 text-xs text-gray-500">
                  Error ID: {this.state.errorId}
                </p>
              )}
            </div>

            <div className="space-y-4">
              <div className="flex space-x-4">
                {this.retryCount < this.maxRetries && (
                  <button
                    onClick={this.handleRetry}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Try Again ({this.maxRetries - this.retryCount} attempts left)
                  </button>
                )}
                <button
                  onClick={this.handleReload}
                  className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Reload Page
                </button>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={this.handleReportBug}
                  className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Report Bug
                </button>
                <button
                  onClick={() => window.history.back()}
                  className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Go Back
                </button>
              </div>
            </div>

            {this.props.showDetails && this.state.error && (
              <details className="mt-8">
                <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
                  Technical Details
                </summary>
                <div className="mt-2 p-4 bg-gray-100 rounded-md">
                  <pre className="text-xs text-gray-600 whitespace-pre-wrap overflow-auto">
                    {this.state.error.message}
                    {'\n\n'}
                    {this.state.error.stack}
                    {'\n\n'}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBoundary;
=======
impo, r, t { Compone, n, t, ErrorIn, f, o, ReactNo, d, e } fr, o, m 'rea, c, t';
impo, r, t { AlertTriang, l, e, Refresh, C, w, Ho, m, e, Ma, i, l } fr, o, m 'luci, d, e-rea, c, t';

interface, Prop, s {  
  childr, e, n: ReactNo, d, e;
  fallba, c, k?: ReactNo, d, e;
  onErr, o, r?: (err, o, r: Er, r, o, r, errorIn, f, o: ErrorIn, f, o) = > vo, i, d;
  showDetai, l, s ?  : bool, e, a, n;
  }

interface, Stat, e {
  hasErr, o, r: boolean;
  err, o, r: Err, o, r | nu, l, l;
  errorIn, f, o: ErrorIn, f, o | nu, l, l;
  error, I, d: str, i, n, g;
}

class, EnhancedErrorBoundary, extends Compone, n, t<Pro, p, s, Sta, t, e> {
  private, retryCoun, t = 0; construct, o, r(pro, p, s: Pr, o, p, s) {
    sup, e, r(pro, p, s);
    th, i, s.sta, t, e = {
      hasErr, o, r: f, a, l, s, e,
      err, o, r: n, u, l, l,
      errorIn, f, o: n, u, l, l,
      error, I, d: '',
    };
  }

  static, getDerivedStateFromErro, r(err, o, r: Err, o, r): Parti, a, l<Sta, t, e> {
    retu, r, n {
      hasErr, o, r: t, r, u, e,
      err, o, r,
      error, I, d: `erro, r, _${Da, t, e.no, w()}_${Ma, t, h.rand, o, m().toStri, n, g(36).subs, t, r(2, 9)}`,
    };
  }

  componentDidCat, c, h(err, o, r: Er, r, o, r, errorIn, f, o: ErrorIn, f, o) {
    con, s, t { onEr, r, o, r } = th, i, s.pro, p, s;
    con, s, t { error, I, d } = th, i, s.sta, t, e;

    // Update state with error info this.setSta t e({ errorIn f o });

    // Log error details
    const, errorDetail, s = {
      erro, r, I, d,
      messa, g, e: err, o, r.mess, a, g, e,
      sta, c, k: err, o, r.st, a, c, k,
      componentSta, c, k: errorIn, f, o.componentSt, a, c, k,
      timesta, m, p: new, Dat, e().toISOStr, i, n, g(),
      userAge, n, t: navigat, o, r.userAg, e, n, t,
      u, r, l: wind, o, w.locati, o, n.h, r, e, f,
      retryCou, n, t: th, i, s.retryCo, u, n, t,
    };

    // Log to console in development if (impo r t.me t a.e n v.D E V) {
      // esli n t-disab l e-ne x t-line n o-console consol e.err o r('Error Boundary caught an erro r:' errorDetai l s);
    }

    // Report error to external service this.reportErr o r(err o r errorIn f o);

    // Call custom error handler if provided
    if (onErr, o, r) {
      onErr, o, r(err, o, r, errorIn, f, o);
    }
  }

  reportErr, o, r = (err, o, r: E, r, r, o, r, errorIn, f, o: ErrorIn, f, o) => {
    // In a real applicat i o n you would send this to an error reporting service
    // like Sentr y LogRock e t or Bugsnag const errorRepo r t = {
      error, I, d: th, i, s.sta, t, e.err, o, r, I, d,
      messa, g, e: err, o, r.mess, a, g, e,
      sta, c, k: err, o, r.st, a, c, k,
      componentSta, c, k: errorIn, f, o.componentSt, a, c, k,
      timesta, m, p: new, Dat, e().toISOStr, i, n, g(),
      userAge, n, t: navigat, o, r.userAg, e, n, t,
      u, r, l: wind, o, w.locati, o, n.h, r, e, f,
      user, I, d: th, i, s.getUse, r, I, d(),
      session, I, d: th, i, s.getSessio, n, I, d(),
    };

    // Log to console in development if (impo r t.me t a.e n v.D E V) {
      // esli n t-disab l e-ne x t-line n o-console consol e.err o r('Error Repor t:' errorRepo r t);
    }

    // In productio n send to error reporting servic e: // fet c h('/a p i/err o r s' {
    //   meth o d: 'P O S T' 
    //   heade r s: { 'Conte n t-Ty p e': 'applicati o n/j s o n' } 
    //   bo d y: JS O N.stringi f y(errorRep o r t)
    // });
  };

  getUser, I, d = (): string | nu, l, l = > {
    // Get user ID from localStora g e cooki e s or auth context
    return, localStorag, e.getIt, e, m('user, I, d');
  };

  getSession, I, d = (): string =  > {
    let, sessionI, d = sessionStora, g, e.getIt, e, m('sessio, n, I, d'); if() { session, I, d = `sessio, n, _${Da, t, e.no, w() }, _${Ma, t, h.rand, o, m().toStri, n, g(36).subs, t, r(2, 9)}`; sessionStora, g, e.setIt, e, m('session, I, d', session, I, d);
    }
    return, sessionI, d;
  };

  handleRet, r, y = () => {
    th, i, s.retryCou, n, t++; th, i, s.setSta, t, e({
      hasErr, o, r: fa, l, s, e,
      err, o, r: n, u, l, l,
      errorIn, f, o: n, u, l, l,
      error, I, d: '',
    });
  };

  handleRelo, a, d = () => {
    wind, o, w.locati, o, n.relo, a, d();
  };

  handleGoHo, m, e = () => {
    wind, o, w.locati, o, n.hr, e, f = '/';
  };

  handleReportEr, r, o, r = () => {
    con, s, t { err, o, r, errorIn, f, o, error, I, d } = th, i, s.sta, t, e;

    // In a real applicati o n this would send to an error reporting service const errorRepo r t = { 
      erro, r, I, d,
      messa, g, e: err, o, r?.mess, a, g, e,
      sta, c, k: err, o, r?.st, a, c, k,
      componentSta, c, k: errorIn, f, o ? .componentSt, a, c, k,
      timesta, m, p: new, Dat, e().toISOStr, i, n, g(),
      userAge, n, t: navigat, o, r.userAg, e, n, t,
      u, r, l : wind, o, w.locati, o, n.h, r, e, f,
     };

    // For demo purposes copy to clipboard
    if() { navigat, o, r.clipboa, r, d.writeTe, x, t(JS, O, N.stringi, f, y(errorRepo, r, t, nu, l, l, 2));
      ale, r, t('Error, details, copied to, clipboar, d');
     }, el, s, e {
      // esli n t-disab l e-ne x t-line n o-console consol e.l o g('Error Repor t:' errorRepo r t);
      ale, r, t('Error, details, logged to, consol, e');
    }
  };

  rend, e, r() {
    con, s, t { hasErr, o, r, err, o, r, error, I, d } = th, i, s.sta, t, e;
    con, s, t { childr, e, n, fallba, c, k, showDetai, l, s } = th, i, s.pro, p, s;

    if (hasErr, o, r) {
      // Use custom fallback if provided if (fallba c k) {
        return, fallbac, k;
      }

      // Default error UI
      retu, r, n (
        <div, classNam, e = 'm, i, n-h-screen, b, g-gr, a, y-50, flex, items-center, justif, y-center, p, x-4'>
          <div, classNam, e='m, a, x-w-2x, l, w-full, b, g-white, rounde, d-lg, shado, w-l, g, p-8, tex, t-cent, e, r'>
            <div, classNam, e='mb-6'>
              <AlertTriangle, classNam, e='w-1, 6, h-16, tex, t-r, e, d-500, m, x-auto, m, b-4' />
              <h1, classNam, e='te, x, t-2xl, fon, t-bold, tex, t-gr, a, y-900, m, b-2'>
                Oo, p, s! Something, went, wrong
              </h1>
              <p, classNam, e='te, x, t-gr, a, y-600, m, b-4'>
                We're, sor, r, y, but, something, unexpected happen, e, d. Our, team, has
                been, notified, and is, working, to fix, this, issue.
              </p>
            </d, i, v>

            <div, classNam, e = 'bg-gr, a, y-100, rounde, d-l, g, p-4, m, b-6, tex, t-le, f, t'>
              <h3, classNam, e='fo, n, t-semibold, tex, t-gr, a, y-900, m, b-2'>
                Error, Detail, s: </h3>
              <p, classNam, e='te, x, t-sm, tex, t-gr, a, y-600, m, b-2'>
                <stro, n, g>Error, I, D:</stro, n, g> {err, o, r, I, d}
              </p>
              <p, classNam, e = 'te, x, t-sm, tex, t-gr, a, y-6, 0, 0'>
                <stro, n, g>Messa, g, e: </stro, n, g> {err, o, r?.messa, g, e || 'Unknown, er, r, o, r'}
              </p>
            </d, i, v>

            <div, classNam, e = 'flex, fle, x-col, s, m: fl, e, x-row, ga, p-3, justif, y-cent, e, r'>
              <button, onClic, k = { th, i, s.handleR, e, t, r, y }, classNa, m, e = 'inli, n, e-flex, item, s-center, p, x-4, p, y-2, b, g-bl, u, e-600, tex, t-white, rounde, d-lg, hove, r: bg-bl, u, e-700, transitio, n-colo, r, s'
              >
                <RefreshCw, classNam, e='w-4 h-4, m, r-2' />
                Try, Agai, n
              </butt, o, n>
              <button, onClic, k = { th, i, s.handleGo, H, o, m, e }, classNa, m, e = 'inli, n, e-flex, item, s-center, p, x-4, p, y-2, b, g-gr, a, y-600, tex, t-white, rounde, d-lg, hove, r: bg-gr, a, y-700, transitio, n-colo, r, s'
              >
                <Home, classNam, e='w-4 h-4, m, r-2' />
                Go, Hom, e
              </butt, o, n>
              <button, onClic, k = { th, i, s.handleRe, l, o, a, d }, classNa, m, e = 'inli, n, e-flex, item, s-center, p, x-4, p, y-2, border, border-gr, a, y-300, tex, t-gr, a, y-700, rounde, d-lg, hove, r: bg-gr, a, y-50, transitio, n-colo, r, s'
              >
                <RefreshCw, classNam, e='w-4 h-4, m, r-2' />
                Reload, Pag, e
              </butt, o, n>
            </d, i, v>

            <div, classNam, e='mt-6, p, t-6, borde, r-t, borde, r-gr, a, y-2, 0, 0'>
              <p, classNam, e='te, x, t-sm, tex, t-gr, a, y-500, m, b-3'>
                If, this, problem pers, i, s, t, s, please, report, it to, our, support te, a, m.
              </p>
              <button, onClic, k = { th, i, s.handleReportEr, r, o, r }, classNa, m, e = 'inli, n, e-flex, item, s-center, p, x-4, p, y-2, tex, t-bl, u, e-600, hove, r: te, x, t-bl, u, e-700, transitio, n-colo, r, s'
              >
                <Mail, classNam, e='w-4 h-4, m, r-2' />
                Report, Erro, r
              </butt, o, n>
            </d, i, v>

            {  showDetai, l, s && th, i, s.sta, t, e.errorIn, f, o  && (
              <details, classNam, e='mt-6, tex, t-le, f, t'>
                <summary, classNam, e='curs, o, r-pointer, tex, t-sm, fon, t-medium, tex, t-gr, a, y-700, hove, r:te, x, t-gr, a, y-9, 0, 0'>
                  Development, Detail, s
                </summa, r, y>
                <pre, classNam, e='mt-2, tex, t-xs, tex, t-gr, a, y-600, b, g-gr, a, y-10, 0, p-3, rounded, overflow-auto, ma, x-h-64' > {err, o, r?.s, t, a, c, k  }
                  {th, i, s.sta, t, e.errorIn, f, o.componentSta, c, k}
                </p, r, e>
              </detai, l, s>
            )}
          </d, i, v>
        </d, i, v>
      );
    }

    return, childre, n;
  }
}

export, default, EnhancedErrorBoundary;
>>>>>>> 31330b606ffa8add68612abb144b6508c148ddf4
