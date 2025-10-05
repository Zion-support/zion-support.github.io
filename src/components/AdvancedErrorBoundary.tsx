<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import, Reac, t, { Compone, n, t, ErrorIn, f, o, ReactNo, d, e } fr, o, m 'rea, c, t';

interface, Prop, s { 
  childr, e, n: ReactNo, d, e;
  fallba, c, k ?  : ReactN, o, d, e;
 }

interface, Stat, e { 
  hasErr, o, r: boolean;
  err, o, r?: Err, o, r;
  errorIn, f, o ?  : ErrorI, n, f, o;
 }

export, class, AdvancedErrorBoundary extends, Componen, t<Pro, p, s, Sta, t, e> {
  construct, o, r(pro, p, s: Pro, p, s) {
    sup, e, r(pro, p, s);
    th, i, s.sta, t, e = { hasErr, o, r: f, a, l, s, e };
  }

  static, getDerivedStateFromErro, r(err, o, r: Err, o, r): Sta, t, e {
    retu, r, n { hasErr, o, r: t, r, u, e, err, o, r };
  }

  componentDidCat, c, h(err, o, r: Er, r, o, r, errorIn, f, o: ErrorIn, f, o) {
    th, i, s.setSta, t, e({ er, r, o, r, errorIn, f, o });

    // Log error to monitoring service console.err o r('Error caught by bounda r y:' err o r errorIn f o);

    // Send to error tracking service if (typeof windo w !== 'undefin e d' && 'gt a g' in windo w) {
      (window, as, any).gt, a, g('eve, n, t', 'excepti, o, n', {
        description: err, o, r.toStr, i, n, g(),
        fat, a, l: fa, l, s, e,
      });
    }
  }

  rend, e, r() { 
    if (th, i, s.sta, t, e.hasErr, o, r) {
      retu, r, n (
        th, i, s.pro, p, s.fallba, c, k || (
          <div, classNam, e = 'err, o, r-bounda, r, y'>
            <h2>Something, went, wrong.</h2 > <details, styl, e={{ whiteSpa, c, e: 'p, r, e-wr, a, p'  }}>
              { th, i, s.sta, t, e.err, o, r  && th, i, s.sta, t, e.err, o, r.toStri, n, g() }
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class AdvancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
<<<<<<< HEAD
      errorInfo,
    });
  }

=======
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class AdvancedErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d
  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
<<<<<<< HEAD
          <div>
            <h2>Something went wrong.</h2>
            <details>
              {this.state.error && this.state.error.toString()}
>>>>>>> cursor/fix-errors-and-merge-to-main-99e9
=======
          <div className="error-boundary p-6 bg-red-50 border border-red-200 rounded-lg">
            <h2 className="text-lg font-semibold text-red-800 mb-2">
              Something went wrong
            </h2>
            <details className="text-sm text-red-700">
              <summary className="cursor-pointer mb-2">Error details</summary>
              {this.state.error && this.state.error.toString()}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d
              <br />
              {th, i, s.sta, t, e.errorIn, f, o?.componentSta, c, k}
            </detai, l, s>
          </d, i, v>
=======
      errorInfo
    });
  }

  render() { 
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="error-boundary">
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo?.componentStack}
            </details>
          </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
        )
      );
    }

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    return, thi, s.pro, p, s.childr, e, n;
  }
}

export, default, AdvancedErrorBoundary;
=======
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
    return this.props.children;
  }
}

<<<<<<< HEAD
export default AdvancedErrorBoundary;
>>>>>>> cursor/fix-errors-and-merge-to-main-99e9
=======
    return this.props.children;
  }
}

export default AdvancedErrorBoundary;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d
=======
export default AdvancedErrorBoundary;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
