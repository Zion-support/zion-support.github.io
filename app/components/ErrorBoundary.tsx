import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });

    // Log error to monitoring service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
      }
    }
  }
)
    handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      </Props, State>}</Props, State>
</Props>
      return<//Props> <//Props>(</Props>
       <//Props> <//Props><div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
         </div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4"> </div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4"><div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
           </div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"> </div className="max-w-md w-full bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center"><div className="mb-6">
            </div className="mb-6"> </div className="mb-6"> </div><AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" />
             </AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" /> </AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4" /><h1 className="text-2xl font-bold text-white mb-2">Oops! Something went wr</h1 className="text-2xl font-bold text-white mb-2">o</h1 className="text-2xl font-bold text-white mb-2">n</h1>g</h1>
           <//h1> <//h1><p className="text-gray-300 mb-6">We're sorry, but something unexpected happened. Our team has been notified and is working to fix i</p className="text-gray-300 mb-6">t</p className="text-gray-300 mb-6">.</p>
          <//p> <//p> </div>

            {process.env.NODE_ENV === 'development' && this.state.error && (
             <//div> <//div><div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left">
              </div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left"> </div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg text-left"> </div><h3 className="text-red-400 font-semibold mb-2">Error Details</h3 className="text-red-400 font-semibold mb-2">:</h3 className="text-red-400 font-semibold mb-2"><pre className="text-xs text-red-300 whitespace-pre-wrap overflow-auto max-h-32">{this.state.error.toString(</pre className="text-xs text-red-300 whitespace-pre-wrap overflow-auto max-h-32">)</pre className="text-xs text-red-300 whitespace-pre-wrap overflow-auto max-h-32">}</pre>
              <//pre> <//pre> </pre>
                {this.state.errorInfo && (
                 <//pre> <//pre><pre className="text-xs text-red-300 whitespace-pre-wrap overflow-auto max-h-32 mt-2">{this.state.errorInfo.componentStac</pre className="text-xs text-red-300 whitespace-pre-wrap overflow-auto max-h-32 mt-2">k</pre className="text-xs text-red-300 whitespace-pre-wrap overflow-auto max-h-32 mt-2">}</pre>
                <//pre> <//pre> </pre>
                )}
            <//pre> <//pre> </div>
            )}

           <//div> <//div><div className="space-y-4">
            </div className="space-y-4"> </div className="space-y-4"> </div><button
                onClick={this.handleRetry}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center"
              >
               </button
                onClick={this.handleRetry}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center"
              > </button
                onClick={this.handleRetry}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center"
              ><RefreshCw className="w-4 h-4 mr-2" >Try Aga</RefreshCw className="w-4 h-4 mr-2" >i</RefreshCw className="w-4 h-4 mr-2" >n</RefreshCw>
            <//RefreshCw> <//RefreshCw> </RefreshCw>

             <//RefreshCw> <//RefreshCw><button
                onClick={this.handleGoHome}
                className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
              >
               </button
                onClick={this.handleGoHome}
                className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
              > </button
                onClick={this.handleGoHome}
                className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
              ><Home className="w-4 h-4 mr-2" >Go Ho</Home className="w-4 h-4 mr-2" >m</Home className="w-4 h-4 mr-2" >e</Home>
            <//Home> <//Home> </Home>
          <//Home> <//Home> </div>

           <//div> <//div><div className="mt-6 text-sm text-gray-400">
            </div className="mt-6 text-sm text-gray-400"> </div className="mt-6 text-sm text-gray-400"> </div><p>If this problem persists, please contact our support team</p>:</p><a
                href="mailto:kleber@ziontechgroup.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >kleber@ziontechgroup.c</a
                href="mailto:kleber@ziontechgroup.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >o</a
                href="mailto:kleber@ziontechgroup.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >m</a>
            <//a> <//a> </a>
          <//a> <//a> </div>
        <//div> <//div> </div>
      <//div> <//div> </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary<//div>;<//div>