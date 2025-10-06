<<<<<<< HEAD
impo, r, t { Compone, n, t, ErrorIn, f, o, ReactNo, d, e } fr, o, m 'rea, c, t';
impo, r, t { AlertTriang, l, e, Refresh, C, w, Ho, m, e, Ma, i, l } fr, o, m 'luci, d, e-rea, c, t';

interface, Prop, s {  
      hasErr, o, r: f, a, l, s, e,
      err, o, r: n, u, l, l,
      errorIn, f, o: n, u, l, l,
      error, I, d: '',

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

    // Log to console in development if (impo r t.me t a.e n v.D E V) {
      // esli n t-disab l e-ne x t-line n o-console consol e.err o r('Error Repor t:' errorRepo r t);
    }

    // In productio n send to error reporting servic e: // fet c h('/a p i/err o r s' {
    //   meth o d: 'P O S T' 
    //   heade r s: { 'Conte n t-Ty p e': 'applicati o n/j s o n' } 
    //   bo d y: JS O N.stringi f y(errorRep o r t)

  getSession, I, d = (): string =  > {
    let, sessionI, d = sessionStora, g, e.getIt, e, m('sessio, n, I, d'); if() { session, I, d = `sessio, n, _${Da, t, e.no, w() }, _${Ma, t, h.rand, o, m().toStri, n, g(36).subs, t, r(2, 9)}`; sessionStora, g, e.setIt, e, m('session, I, d', session, I, d);
    th, i, s.retryCou, n, t++; th, i, s.setSta, t, e({
      hasErr, o, r: fa, l, s, e,
      err, o, r: n, u, l, l,
      errorIn, f, o: n, u, l, l,
      error, I, d: '',

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
              <p, classNam, e='te, x, t-gr, a, y-600, m, b-4'>
                We're, sor, r, y, but, something, unexpected happen, e, d. Our, team, has
                been, notified, and is, working, to fix, this, issue.

            <div, classNam, e = 'flex, fle, x-col, s, m: fl, e, x-row, ga, p-3, justif, y-cent, e, r'>
              <button, onClic, k = { th, i, s.handleR, e, t, r, y }, classNa, m, e = 'inli, n, e-flex, item, s-center, p, x-4, p, y-2, b, g-bl, u, e-600, tex, t-white, rounde, d-lg, hove, r: bg-bl, u, e-700, transitio, n-colo, r, s'
              >
                <RefreshCw, classNam, e='w-4 h-4, m, r-2' />
                Try, Agai, n
                <Home, classNam, e='w-4 h-4, m, r-2' />
                Go, Hom, e
                <RefreshCw, classNam, e='w-4 h-4, m, r-2' />
                Reload, Pag, e
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
=======
/**
 * Enhanced Error Boundary Component
 * Comprehensive error handling with performance monitoring and user feedback
 */

import React, { Component, ReactNode, ErrorInfo } from 'react';
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
  errorId: string;
}

// Analytics utilities (mock implementation)
const analyticsUtils = {
  trackEvent: (event: string, data: Record<string, unknown>) => {
    console.log('Analytics Event:', event, data);
  }
};
class EnhancedErrorBoundary extends Component<Props, State> {
  private retryCount = 0;
  private maxRetries = 3;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      errorId: ''
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Generate unique error ID
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      hasError: true,
      error,
      errorId
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { onError } = this.props;

    // Update state with error info
    this.setState({ errorInfo });

    // Generate unique error ID
    const errorId = `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Create error details object for potential future use
    const _errorDetails = {
      errorId,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href,
      retryCount: this.retryCount
    };
    console.log('Error details:', _errorDetails);


    // Send to analytics
    analyticsUtils.trackEvent('error_boundary_caught', {
      error_id: errorId,
      error_message: error.message,
      error_stack: error.stack?.substring(0, 500), // Truncate for analytics
      component_stack: errorInfo.componentStack?.substring(0, 500) || '',
      retry_count: this.retryCount
    });

    // Log security event if suspicious
    // if (securityMonitoring.detectSuspiciousActivity(errorDetails)) {
    //   securityMonitoring.logSecurityEvent('suspicious_error', errorDetails);
    // }

    // Call custom error handler
    if (onError) {
      onError(error, errorInfo);
    }
  }

  handleRetry = () => {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
        errorId: ''
      });

      // Track retry attempt
      analyticsUtils.trackEvent('error_boundary_retry', {
        error_id: this.state.errorId,
        retry_count: this.retryCount
      });
    }
  };

  handleReportError = () => {
    const { error, errorInfo, errorId } = this.state;
    
    // In a real application, this would send to an error reporting service
    const errorReport = {
      errorId,
      message: error?.message,
      stack: error?.stack,
      componentStack: errorInfo?.componentStack,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // Track error report
    analyticsUtils.trackEvent('error_boundary_report', {
      error_id: errorId,
      reported: true
    });

    // For demo purposes, copy to clipboard
    if (navigator.clipboard) {
      navigator.clipboard.writeText(JSON.stringify(errorReport, null, 2));
      alert('Error details copied to clipboard');
    } else {
      console.log('Error Report:', errorReport);
      alert('Error details logged to console');
    }
  };

  render() {
    const { hasError } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      // Use custom fallback if provided
      if (fallback) {
        return fallback;
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-md w-full mx-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-gray-600 mb-6">
                We're sorry for the inconvenience. Please try refreshing the page.
              </p>
              <div className="space-y-3">
                <button
                  onClick={this.handleRetry}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                  disabled={this.retryCount >= this.maxRetries}
                >
                  {this.retryCount >= this.maxRetries ? 'Max Retries Reached' : 'Retry'}
                </button>
                <button
                  onClick={this.handleReportError}
                  className="w-full border-2 border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3 px-6 rounded-lg transition-colors">
                  Report Error
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return children;
  }
}

export default EnhancedErrorBoundary;
>>>>>>> origin/fix-errors-and-merge-final
