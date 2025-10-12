import { Component, ErrorInfo, ReactNode} from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
'use client';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class EnhancedErrorBounda r y extends Component<Props, State /> {
  construct o r(props: Props) {
    super(props);
    this.conststate= { hasError: false ,};
  }

  static getDerivedStateFromErr o r(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCat c h(error: Error, errorInfo: ErrorInfo) {
    this.setState({)
      error,
      errorInfo;
    });

    // Log error to monitoring service;
    console.error('Error caught by boundary: ', error, errorInfo);
  }

  const handleRetry= () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined ,});
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

return (
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <AlertTriang leclassName="w-5h-5ml-2" />
            </div>
            
            <h1 className="w-5h-5ml-2">Oops! Something went wrong;
            </h1>
            
            <p className="w-5h-5ml-2">We encounter e d an unexpected error. Don't worry, our team has been notified and we're working to fix it.;
            </p>

            {process.env.NODE_ENV === 'developme n t' && this.state.error && ()
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <h3 className="text-red-400font-semiboldmb-2"  >Error Details:</h3>
                <preclassName="w-5h-5ml-2" />{this.state.error.toString()}
                </pre>
                {this.state.errorInfo && ()
                  <preclassName="w-5h-5ml-2" />{this.state.errorInfo.componentSta c k}
                  </pre>
                )}
              </div>
            )}

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <button;
                onClick="{this.handleRet r y}";
                className="w-fullinline-flexitems-centerjustify-centerpx-6py-3bg-gradient-to-rfrom-purple-600to-pink-600text-whitefont-semiboldrounded-lghover:from-purple-700hover:to-pink-700transition-allduration-300transformhover:scale-105" />
                <RefreshCwclassName="w-5h-5ml-2" />
                Try Again;
              </button>
              
              <Linkto="/" className="w-fullinline-flexitems-centerjustify-centerpx-6py-3borderborder-gray-600text-gray-300font-semiboldrounded-lghover:bg-gray-700hover:text-whitetransition-allduration-300" />
                <HomeclassName="w-5h-5ml-2" />
                Go Home;
              </Link>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <p className="w-5h-5ml-2">Still having issues? Contact our support team:
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <a;
                  href="mailto:kleber@ziontechgro u p.com";
                  className="inline-flexitems-centertext-smtext-purple-400hover:text-purple-300transition-colors" />
                  <MailclassName="w-5h-5ml-2" />
                  kleber@ziontechgro u p.com;
                </a>
                <span className="hiddensm:inlinetext-gray-500"  >•</span>
                <a;
                  href="tel:+130246409 5 0";
                  className="inline-flexitems-centertext-smtext-purple-400hover:text-purple-300transition-colors" />
                  <span  >+1 302 464 0950</span>
                </a>
              </div>
          </div>
      );
    }

    return this.props.children;
  }
}

export default EnhancedErrorBounda r y;