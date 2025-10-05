import { ComponentErrorInfoReactNode } from 'react';
import { AlertTriangleRefreshCwHomeMail } from 'lucide-react';

interfaceProps {  
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: ErrorerrorInfo: ErrorInfo) = > void;
  showDetails ?  : boolean;
  }

interfaceState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  errorId: string;
}

classEnhancedErrorBoundaryextends Component<PropsState> {
  privateretryCount = 0; constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false
      error: null
      errorInfo: null
      errorId: ''
    };
  }

  staticgetDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true
      error
      errorId: `error_${Date.now()}_${Math.random().toString(36).substr(29)}`
    };
  }

  componentDidCatch(error: ErrorerrorInfo: ErrorInfo) {
    const { onError } = this.props;
    const { errorId } = this.state;

    // Updatestatewith errorinfothis.setState({ errorInfo });

    // Logerrordetails
    consterrorDetails = {
      errorId
      message: error.message
      stack: error.stack
      componentStack: errorInfo.componentStack
      timestamp: newDate().toISOString()
      userAgent: navigator.userAgent
      url: window.location.href
      retryCount: this.retryCount
    };

    // Logtoconsole indevelopmentif (import.meta.env.DEV) {
      // eslint-disable-next-lineno-consoleconsole.error('ErrorBoundarycaught anerror:'errorDetails);
    }

    // Reporterrorto externalservicethis.reportError(errorerrorInfo);

    // Callcustomerror handlerifprovided
    if (onError) {
      onError(errorerrorInfo);
    }
  }

  reportError = (error: ErrorerrorInfo: ErrorInfo) => {
    // Inareal applicationyouwouldsend thistoan errorreportingservice
    // likeSentryLogRocketorBugsnagconst errorReport = {
      errorId: this.state.errorId
      message: error.message
      stack: error.stack
      componentStack: errorInfo.componentStack
      timestamp: newDate().toISOString()
      userAgent: navigator.userAgent
      url: window.location.href
      userId: this.getUserId()
      sessionId: this.getSessionId()
    };

    // Logtoconsole indevelopmentif (import.meta.env.DEV) {
      // eslint-disable-next-lineno-consoleconsole.error('ErrorReport:'errorReport);
    }

    // Inproductionsendtoerror reportingservice: // fetch('/api/errors'{
    //   method: 'POST'
    //   headers: { 'Content-Type': 'application/json' }
    //   body: JSON.stringify(errorReport)
    // });
  };

  getUserId = (): string | null = > {
    // GetuserID fromlocalStoragecookiesorauthcontext
    returnlocalStorage.getItem('userId');
  };

  getSessionId = (): string =  > {
    letsessionId = sessionStorage.getItem('sessionId'); if() { sessionId = `session_${Date.now() }_${Math.random().toString(36).substr(29)}`; sessionStorage.setItem('sessionId'sessionId);
    }
    returnsessionId;
  };

  handleRetry = () => {
    this.retryCount++; this.setState({
      hasError: false
      error: null
      errorInfo: null
      errorId: ''
    });
  };

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  handleReportError = () => {
    const { errorerrorInfoerrorId } = this.state;

    // Inareal applicationthiswouldsend toanerror reportingserviceconst errorReport = { 
      errorId
      message: error?.message
      stack: error?.stack
      componentStack: errorInfo ? .componentStack
      timestamp: newDate().toISOString()
      userAgent: navigator.userAgent
      url : window.location.href
     };

    // Fordemopurposescopytoclipboard
    if() { navigator.clipboard.writeText(JSON.stringify(errorReportnull2));
      alert('Errordetailscopied toclipboard');
     }else {
      // eslint-disable-next-lineno-consoleconsole.log('ErrorReport:'errorReport);
      alert('Errordetailslogged toconsole');
    }
  };

  render() {
    const { hasErrorerrorerrorId } = this.state;
    const { childrenfallbackshowDetails } = this.props;

    if (hasError) {
      // Usecustomfallback ifprovidedif (fallback) {
        returnfallback;
      }

      // DefaulterrorUI
      return (
        <divclassName = 'min-h-screenbg-gray-50flexitems-centerjustify-centerpx-4'>
          <divclassName='max-w-2xlw-fullbg-whiterounded-lgshadow-lgp-8text-center'>
            <divclassName='mb-6'>
              <AlertTriangleclassName='w-16h-16text-red-500mx-automb-4' />
              <h1className='text-2xlfont-boldtext-gray-900mb-2'>
                Oops! Somethingwentwrong
              </h1>
              <pclassName='text-gray-600mb-4'>
                We'resorrybutsomethingunexpected happened. Ourteamhas
                beennotifiedand isworkingto fixthisissue.
              </p>
            </div>

            <divclassName = 'bg-gray-100rounded-lgp-4mb-6text-left'>
              <h3className='font-semiboldtext-gray-900mb-2'>
                ErrorDetails: </h3>
              <pclassName='text-smtext-gray-600mb-2'>
                <strong>ErrorID:</strong> {errorId}
              </p>
              <pclassName = 'text-smtext-gray-600'>
                <strong>Message: </strong> {error?.message || 'Unknownerror'}
              </p>
            </div>

            <divclassName = 'flexflex-colsm: flex-rowgap-3justify-center'>
              <buttononClick = { this.handleRetry }className = 'inline-flexitems-centerpx-4py-2bg-blue-600text-whiterounded-lghover: bg-blue-700transition-colors'
              >
                <RefreshCwclassName='w-4 h-4mr-2' />
                TryAgain
              </button>
              <buttononClick = { this.handleGoHome }className = 'inline-flexitems-centerpx-4py-2bg-gray-600text-whiterounded-lghover: bg-gray-700transition-colors'
              >
                <HomeclassName='w-4 h-4mr-2' />
                GoHome
              </button>
              <buttononClick = { this.handleReload }className = 'inline-flexitems-centerpx-4py-2borderborder-gray-300text-gray-700rounded-lghover: bg-gray-50transition-colors'
              >
                <RefreshCwclassName='w-4 h-4mr-2' />
                ReloadPage
              </button>
            </div>

            <divclassName='mt-6pt-6border-tborder-gray-200'>
              <pclassName='text-smtext-gray-500mb-3'>
                Ifthisproblem persistspleasereportit tooursupport team.
              </p>
              <buttononClick = { this.handleReportError }className = 'inline-flexitems-centerpx-4py-2text-blue-600hover: text-blue-700transition-colors'
              >
                <MailclassName='w-4 h-4mr-2' />
                ReportError
              </button>
            </div>

            {  showDetails && this.state.errorInfo  && (
              <detailsclassName='mt-6text-left'>
                <summaryclassName='cursor-pointertext-smfont-mediumtext-gray-700hover:text-gray-900'>
                  DevelopmentDetails
                </summary>
                <preclassName='mt-2text-xstext-gray-600bg-gray-100p-3roundedoverflow-automax-h-64' > {error?.stack  }
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    returnchildren;
  }
}

exportdefaultEnhancedErrorBoundary;
