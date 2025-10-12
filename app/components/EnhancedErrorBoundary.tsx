'useclient';
import { Component, ErrorInfo, ReactNode  } from 'react';
import { Home   } from 'lucide-react';
import { Link   } from 'react-router-dom';
interfaceProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interfaceState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

classEnhancedErrorBoundaryextendsComponent<Props, State /> {
  constructor(props: Props) {
    super(props);
    this.conststate = { hasError: false };
  }

  staticgetDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Logerrortomonitoringserviceconsole.error('Errorcaughtbyboundary: ', error, errorInfo);
  }

  consthandleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        returnthis.props.fallback;
      }

      return (
        <divclassName="m in-h-screenbg-gradient-to-brfrom-slate-900 via-red-900 to-slate-900 flexitems-centerjustify-centerpx-4">
          <divclassName="m a x-w-mdw-fullbg-gray-800 rounded-xlp-8 text-centerborderborder-gray-700">
            <divclassName="w-16 h-16 b g-gradient-to-rfrom-red-500 to-orange-500 rounded-fullflexitems-centerjustify-centermx-automb-6">
              <AlertTriangleclassName="h-8w-8t e xt-white" />
            </div>
            <h1 className="t e xt-2 xlfont-boldtext-whitemb-4"  />Oops! Somethingwentwrong</h1>
            <pclassName="t e xt-gray-300 mb-6">Weencounteredanunexpectederror. Don'tworry, ourteamhasbeennotifiedandwe'reworkingtofixit.</p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <divclassName="b g-gray-900 rounded-lgp-4mb-6text-left">
                <h3 className="t e xt-red-400font-semiboldmb-2"  >ErrorDetails:</h3>
                <preclassName="t e xt-xstext-gray-300overflow-auto"  />{this.state.error.toString()}
                </pre>
                {this.state.errorInfo && (
    <>
                  <preclassName="t e xt-xstext-gray-400mt-2overflow-auto">{this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}

            <divclassName="s p ace-y-3">
              <buttononClick="{this.handleRetry}"
                className="w-f u llinline-flexitems-centerjustify-centerpx-6 py-3 bg-gradient-to-rfrom-purple-600 to-pink-600 text-whitefont-semiboldrounded-lghover:from-purple-700 hover:to-pink-700 transition-allduration-300transformhover:scale-105" />
                <RefreshCwclassName="h-4w-4m r-2" />
                TryAgain
              </button>
              <Linkto="/" className="w-f u llinline-flexitems-centerjustify-centerpx-6 py-3 borderborder-gray-600 text-gray-300 font-semiboldrounded-lghover:bg-gray-700 hover:text-whitetransition-allduration-300">
          <HomeclassName="h-4w-4m r-2" /  />
        </Link>
                GoHome
    <>
              </Link>
            </div>
            <divclassName="m t-8 pt-6border-tborder-gray-700">
              <pclassName="t e xt-smtext-gray-400mb-4">Stillhavingissues? Contactoursupportteam:</p>
              <divclassName="f l exflex-colsm:flex-rowgap-2justify-center">
                <ahref="mailto:kleber@ziontechgroup.com"
                  className="i n line-flexitems-centertext-smtext-purple-400hover:text-purple-300transition-colors" />
                  <MailclassName="h-4w-4m r-1" />
                  kleber@ziontechgroup.com
    <>
                </a>
                <spanclassName="h i ddensm:inlinetext-gray-500">•</span>
                <ahref="tel:+13024640950"
                  className="i n line-flexitems-centertext-smtext-purple-400hover:text-purple-300transition-colors" />
    <>
                  <span>+1 302 464 0950</span>
                </a>
              </div>
    </div>
  );
    }

    returnthis.props.children;
  }
}

exportdefaultEnhancedErrorBoundary;
    </>
