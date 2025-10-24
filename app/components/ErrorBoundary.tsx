import React, { Component, ErrorInfo, ReactNode } from 'react';
interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}
interface State {
  hasError: boolean;
  error?: Error;
}
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Something went wrong</h1>
            <p className="text-gray-300 mb-8">We're sorry, but something unexpected happened.</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
<<<<<<< HEAD
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <>
      <Helmet>
        <title>ErrorBoundary</title>
        <meta name="description" content="Advanced ErrorBoundary solution for modern businesses." />
        <meta name="keywords" content="AI, artificial intelligence, ErrorBoundary, AI solutions, intelligent automation" />
      </Helmet>
      <Navigation />
      <div className="[^"]*">{/* Hero Section */}
        <section className="py-20 px-4"><div className="text-center mb-16">><div className="[^"]*"><h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ErrorBoundary
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced ErrorBoundary solution for modern businesses.
            </p>
            <div className="[^"]*"><button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4"><div className="text-center mb-16">><div className="[^"]*"><h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="[^"]*">{features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"></div>
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4"><div className="text-center mb-16">><div className="[^"]*"><h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="[^"]*">{benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"></div>
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">><div className="[^"]*"><h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="[^"]*"><button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ErrorBoundaryPage;
error?: Error
errorInfo?: ErrorInfo}
class ErrorBoundary extends Component<Props, State>{constructor(props: Props) {
super(props)
this.state= { hasError: false}
}
static getDerivedStateFromError(error: Error): State {return { hasError: true, error}
}
componentDidCatch(error: Error, errorInfo: ErrorInfo) {// Log error for monitoring in production
if (process.env.NODE_ENV=== 'production') {
// In production, you would send this to an error reporting service
// Example: errorReportingService.captureException(error, { extra: errorInfo})
}
this.setState({errorerrorInfo})
}
handleReload= () => {windo w.location.reload()}
handleGoHome= () => {windo w.location.href= '/'}
render() {if (this.state.hasError) {
if (this.props.fallback) {
return this.props.fallback
}
return (
<div className="text-center mb-16"><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">><div className="text-center mb-16"></div>
<AlertTriangle className="w-8 h-8 text-red-400" />
</div>
<h1 className="text-2xl font-bold text-white mb-4">Oops! Something went wrong</h1>
<p className="text-gray-300 mb-6">We're sorry, but something unexpected happened. Please try refreshing the page or go back to the home page.</p>p>
{process.env.NODE_ENV === 'development' && this.state.error && (
<details className="mb-6 text-left">
<summary className="text-sm text-gray-400 cursor-pointer mb-2">
Error Details (Development)
</summary>
<pre className="text-xs text-red-400 bg-slate-900/50 p-3 rounded overflow-auto"></p>
{this.state.error.toString()}
{this.state.errorInfo?.componentStack}
</pre>
</details>
)}
<div className="[^"]*"><button
onClick={this.handleReload}
className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
></button>
<RefreshCw className="w-4 h-4" />
<span>Reload Page</span>
</button>
<button
onClick={this.handleGoHome}
className="flex items-center justify-center space-x-2 border border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
></button>
<Home className="w-4 h-4" />
<span>Go Home</span>
</button>
</div>
<div className="[^"]*"><p className="text-sm text-gray-400 mb-3">Still having trouble? Contact our support team:</p>p>
<a
href="mailto:kleber@ziontechgroup.com"
className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
<Phone className="w-4 h-4 mr-2" />
kleber@ziontechgroup.com
</a>
</div>
</div>
</div>
=======
    return this.props.children;
  }
}
export default ErrorBoundary;
>>>>>>> origin/main
