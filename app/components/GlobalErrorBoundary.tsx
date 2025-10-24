<<<<<<< HEAD
import React from 'react';

<<<<<<< HEAD
const GlobalErrorBoundary: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="globalerrorboundary">
      <h2>GlobalErrorBoundary</h2>
      <p>GlobalErrorBoundary component.</p>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>GlobalErrorBoundary | Zion Tech Group</title>
        <meta name="description" content="Professional GlobalErrorBoundary services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="GlobalErrorBoundary, AI solutions, IT services, Zion Tech Group, globalerrorboundary" />
      </Helmet>
=======


                Go Home
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f


<<<<<<< HEAD
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our GlobalErrorBoundary?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our globalerrorboundary solutions deliver unmatched performance, security, and scalability.
=======
class GlobalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });

    // Log error to console in development;
    if (process.env.NODE_ENV === 'development') {
      }

    // Call onError callback if provided;
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // In production, you might want to send this to an error reporting service;
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to error reporting service;
      // errorReportingService.captureException(error, { extra: errorInfo });
    }
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI;
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI;
      return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4"></div>
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20"></div>
            <div className="text-6xl mb-4">⚠️<h1 className="text-2xl font-bold text-white mb-4">Something went wrong<p className="text-gray-300 mb-6">We're sorry, but something unexpected happened. Please try refreshing the page.</p>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4"></div>
          <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center border border-white/20"></div>
            <div className="text-6xl mb-4">⚠️</div><h1 className="text-2xl font-bold text-white mb-4">Something went wrong</h1><p className="text-gray-300 mb-6">We're sorry, but something unexpected happened. Please try refreshing the page.</p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </p>
          </div></div></div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div></div></div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our globalerrorboundary solutions for your business.
            </p>
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div></div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your globalerrorboundary needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
=======
            {process.env.NODE_ENV === 'development' && this.state.error && ()
              <details className="text-left bg-black/20 rounded-lg p-4 mb-6">)
                <summary className="cursor-pointer text-cyan-400 font-medium mb-2">)
                  Error Details (Development Only)
                </summary>
                <pre className="text-xs text-red-400 overflow-auto"></pre>
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}

            <div className="space-y-3"></div>
              <button
                onClick={() =>window.location.reload()}</button></<<<butto>className</butto></butto>="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              ></<<<button>Refresh</button></<<button>Page</button><button
                onClick={() =>this.setState({ hasError: false, error: undefined, errorInfo: undefined })}</button></<<<butto>className</butto></butto>="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              ></<<<button>Try</button></<<button>Again</button><a
                href="/"
                className="block w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >Go Home</a>
              <button;
                onClick={() => window.location.reload()}
                className="w-full bg-cyan-600 hover: bg-cyan-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Refresh Page;
              </button>,
,
              <button;
                onClick={() => this.setState({ hasError: false, error: undefined, errorInfo: undefined })}
                className="w-full bg-purple-600 hover: bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Try Again;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div></div></div>
          </div>
        </div>
      </section>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    </div>
  );
};

<<<<<<< HEAD
export default GlobalErrorBoundary;
=======
              <a;
                href="/"
                className="block w-full bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
              ></a>
                Go Home;
              </a>
            </div>
          </div>,
        </div>);
    }

    return this.props.children;
  }
}

export { GlobalErrorBoundary };
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
