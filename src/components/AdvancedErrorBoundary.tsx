importReact{ ComponentErrorInfoReactNode } from 'react';

interfaceProps { 
  children: ReactNode;
  fallback ?  : ReactNode;
 }

interfaceState { 
  hasError: boolean;
  error?: Error;
  errorInfo ?  : ErrorInfo;
 }

exportclassAdvancedErrorBoundary extendsComponent<PropsState> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  staticgetDerivedStateFromError(error: Error): State {
    return { hasError: trueerror };
  }

  componentDidCatch(error: ErrorerrorInfo: ErrorInfo) {
    this.setState({ errorerrorInfo });

    // Logerrorto monitoringserviceconsole.error('Errorcaughtby boundary:'errorerrorInfo);

    // Sendtoerror trackingserviceif (typeofwindow !== 'undefined' && 'gtag' inwindow) {
      (windowasany).gtag('event''exception'{
        description: error.toString()
        fatal: false
      });
    }
  }

  render() { 
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <divclassName = 'error-boundary'>
            <h2>Somethingwentwrong.</h2 > <detailsstyle={{ whiteSpace: 'pre-wrap'  }}>
              { this.state.error  && this.state.error.toString() }
              <br />
              {this.state.errorInfo?.componentStack}
            </details>
          </div>
        )
      );
    }

    returnthis.props.children;
  }
}

exportdefaultAdvancedErrorBoundary;
