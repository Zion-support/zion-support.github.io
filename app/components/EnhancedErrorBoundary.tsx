import {Component, ErrorInfo, ReactNode} from 'react';
import {Home} from 'lucide-react';
import {Link} from 'react-router-dom';
'use client';

interface Props {
  children: React Node;
  fallback?: React Node;
}

interface State {
  hasError: boolean;
  error?: Error;
  error Info?: Error Info;
}

class Enhanced Error Boundary extends Component<Props, State /> {
  constructor(props: Props) {
    super(props);
    this.conststate = { hasError: false };
  }

  static get Derived State From Error(error: Error): State {
    return { hasError: true, error };
  }

  component Did Catch(error: Error, errorInfo: ErrorInfo) {
    this.set State({
      error,
      errorInfo
    });

    // Log error to monitoring service
    console.error('Errorcaught byboundary: ', error, errorInfo);
  }

  const handleRetry = () => {
    this.set State({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flexitems-centerjustify-centerpx-4" />
          <div className ="max-w-mdw-fullbg-gray-800 rounded-xlp-8 text-centerborderborder-gray-700" />
            <div className ="w-16 h-16 bg-gradient-to-rfrom-red-500 to-orange-500 rounded-fullflex items-centerjustify-centermx-automb-6" />
              <Alert Triangleclass Name="h-8w-8text-white" / />
            </div>
            
            <h1className ="text-2 xlfont-boldtext-whitemb-4"  />Oops! Somethingwent wrong
            </h1>
            
            <pclassName ="text-gray-300mb-6" />
              Weencountered anunexpected error. Don'tworry, ourteam hasbeen notifiedand we'reworking tofix it.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className ="bg-gray-900 rounded-lgp-4mb-6text-left" />
                <h3className ="text-red-400font-semiboldmb-2"  >ErrorDetails:</h3>
                <preclassName ="text-xstext-gray-300overflow-auto"  />{this.state.error.toString()}
                </pre>
                {this.state.error Info && (
                  <preclassName ="text-xstext-gray-400mt-2overflow-auto"  />{this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}

            <div className ="space-y-3" />
              <button
                onClick ="{this.handle Retry}"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300transformhover:scale-105" />
                <Refresh Cwclass Name="h-4w-4mr-2" / />
                Try Again
              </button>
              
              <Link to ="/" className="w-full inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-700 hover:text-whitetransition-allduration-300" />
                <Homeclass Name ="h-4w-4mr-2" / />
                Go Home
              </Link>
            </div>

            <div className ="mt-8 pt-6border-t border-gray-700" />
              <pclassName ="text-smtext-gray-400mb-4" />
                Still having issues? Contact our support team:
              </p>
              <div className ="flex flex-col sm:flex-rowgap-2justify-center" />
                <ahref ="mailto:kleber@ziontechgroup.com"
                  className="inline-flex items-center text-sm text-purple-400hover:text-purple-300transition-colors" />
                  <Mailclass Name ="h-4w-4mr-1" / />
                  kleber@ziontechgroup.com
                </a>
                <spanclassName ="hiddensm:inlinetext-gray-500"  >•</span>
                <ahref ="tel:+13024640950"
                  className="inline-flex items-center text-sm text-purple-400hover:text-purple-300transition-colors" />
                  <span  >+1 302 464 0950</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default Enhanced Error Boundary;