
'use client'
import React from 'react'
import React from 'react'

import Footer from '@/components/Footer';interface Props {
  
}

  children: ReactNod,e;
}

  children: ReactNod,e;
}

interface State {
  
}

  hasError: boolea,n;,
  error: Error | undefine,d;
}

    // Log error to console in development only;
    if(process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console;
      console.error('Error caught by boundary: ', error, errorInfo,)
    }

  }

  public render() {
    if(this.state.hasError) {
      return (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    </di>
        <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-6">
    </di> </div><div className="text-center">
    </di>
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
    </di> </div><svg;
)
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
    </sv> </svg><path;
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth = {
2;
}

                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
    </pat> </path></svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">
    </h>Something went wrong;
              </h2></h2>
              <p>We're sorry, but something unexpected happened. Please try refreshing the page.</p>
              <div className="space-y-2">
    </di> </div><button;
                  onClick={() =>
    </butto> window.location.reload()}

                  className="w-full bg-purple-600 hover: bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >,
                  Refresh Page;
                </button>
                <button;
                  onClick={() =>
    </butto> window.location.href = '/'}

                  className="w-full bg-gray-600 hover: bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >,
                  Try Again;
                </button>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-4 text-left">
    </detail> </details><summary className="text-gray-400 cursor-pointer">
    </summar>Error Details (Development)
                  </summary></summary>
                  <pre className="mt-2 text-xs text-red-400 bg-gray-900 p-2 rounded overflow-auto">
    </pr>{this.state.error.toString()}

                  </pre></pre>
                </details>
              )}

        </section>
        {/* Features Section */}

        <section className=&quot;py-20 px-4&quot>
    </sectio> </section><div className=&quot;max-w-7xl mx-auto&quot>
    </di>
        <div className=&quot;text-center mb-16&quot>
    </di> </div><h2 className=&quot;text-4xl font-bold text-white mb-4&quot>
    </h>Key Features</h2>
              <p>Powerful AI-driven features designed to transform your business operations</p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-4 gap-8&quo,t>
    </di>
              {features.map((feature, index) => (
                </div><div key={index} className=&quot;bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20&quot>
    </di> </div><feature.icon className=&quot;h-12 w-12 text-emerald-400 mb-4&quot; />
    </featur> </feature><h3 className=&quot;text-xl font-semibold text-white mb-3&quot>
    </h>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot>
    </u>{feature.benefits.map((benefit, idx) => (
                      </ul><li key={idx} className=&quot;flex items-center text-sm text-gray-300&quot>
    </l> </li><CheckCircle className=&quot;h-4 w-4 text-emerald-400 mr-2 flex-shrink-0&quot; />
    </CheckCircl>{benefit}

                      </CheckCircle></li>
                    ))}

                  </ul>
                
              ))}

        </section>
        {/* Benefits Section */}

        <section className=&quot;py-20 px-4 bg-white/5&quot>
    </sectio> </section><div className=&quot;max-w-7xl mx-auto&quot>
    </di>
        <div className=&quot;text-center mb-16&quot>
    </di> </div><h2 className=&quot;text-4xl font-bold text-white mb-4&quot>
    </h>Why Choose Our Solution</h2>
              <p>Experience the benefits of cutting-edge AI technology</p>
            </div>
            <div className=&quot;grid md: grid-cols-2 lg:grid-cols-3 gap-8&quo,t>
    </di>
              {benefits.map((benefit, index) => (
                </div><div key={index} className=&quot;flex items-start space-x-4&quot>
    </di> </div><CheckCircle className=&quot;h-6 w-6 text-emerald-400 mt-1 flex-shrink-0&quot; />
    </CheckCircl> </CheckCircle><p className=&quot;text-gray-300 text-lg&quot>{benefit}</p>
                </div>
              ))}

            </div>
          </div>
        </section>
        {/* CTA Section */}

        <section className=&quot;py-20 px-4&quot>
    </sectio> </section><div className=&quot;max-w-4xl mx-auto text-center&quot>
    </di> </div><h2 className=&quot;text-4xl font-bold text-white mb-6&quot>
    </h>Ready to Transform Your Business?</h2>
            <p>Join thousands of businesses already using our AI solutions</p>
            <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quo,t>
    </di>
              </div><button className=&quot;bg-emerald-600 hover: bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quo,t>
    </butto>,
                Start Free Trial;
              </button>
              <button className=&quot;border border-emerald-400 text-emerald-400 hover: bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200&quo,t>
    </butto>,
                Contact Sales;
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </Foote>

</Footer></>
  )
}

export default ErrorBoundaryPage;
error?: Error;
errorInfo?: ErrorInfo}

class ErrorBoundary extends Component<Props, State>
    </Prop>{constructor(props: Props) ,{,
super(props)
this.state= { hasError: false}

static getDerivedStateFromError(error: Error): State {return { hasError: true, error}

}

componentDidCatch(error: Error, errorInfo: ErrorInfo) {// Log error for monitoring in productio,n,
if (process.env.NODE_ENV=== 'production') {
// In production, you would send this to an error reporting service;
// Example: errorReportingService.captureException(error, { extra: errorInfo},)
this.setState({errorerrorInfo})

}

handleReload = ($2) => {
$3;
}

handleGoHome = ($2) => {
$3;
}

render() {
  if(this.state.hasError) {
if(this.props.fallback) {
return this.props.fallback;
return (
<div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4&quot>
    </di>
        <div className=&quot;max-w-md w-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center&quot>
    </di>
</div><div className=&quot;w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6&quot>
    </di>
</div><AlertTriangle className=&quot;w-8 h-8 text-red-400&quot; />
    </AlertTriangl>
</AlertTriangle></div>
<h1 className=&quot;text-2xl font-bold text-white mb-4&quot>
    </h>Oops! Something went wrong</h1>
<p className=&quot;text-gray-300 mb-6&quot>We're sorry, but something unexpected happened. Please try refreshing the page or go back to the home page.</p>p>
{process.env.NODE_ENV === 'development' && this.state.error && (
<details className=&quot;mb-6 text-left&quot>
    </detail>
</details><summary className=&quot;text-sm text-gray-400 cursor-pointer mb-2&quot>
    </summar>Error Details (Development)
</summary></summary>
<pre className=&quot;text-xs text-red-400 bg-slate-900/50 p-3 rounded overflow-auto&quot>
    </pr>{this.state.error.toString()}

{this.state.errorInfo?.componentStack}

</pre>
</details>
)}

<div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quo,t>
    </di>
</div><button;
onClick={this.handleReload}

className=&quot;flex items-center justify-center space-x-2 bg-cyan-600 hover: bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200&quo,t;
>
    </butto>
</button><RefreshCw className=&quot;w-4 h-4&quot; />
    </RefreshC>
</RefreshCw><span>
    </spa>Reload Page</span>
</button>
<button;
onClick={this.handleGoHome}

className=&quot;flex items-center justify-center space-x-2 border border-cyan-600 text-cyan-400 hover: bg-cyan-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200&quo,t;
>
    </butto>
</button><Home className=&quot;w-4 h-4&quot; />
    </Hom>
</Home><span>
    </spa>Go Home</span>
</button>
</div>
<div className=&quot;mt-6 pt-6 border-t border-white/20&quot>
    </di>
</div><p className=&quot;text-sm text-gray-400 mb-3&quot>Still having trouble? Contact our support team: </p>p>
<,a;
href=&quot;mailto: kleber@ziontechgroup.com&quo,t;,
className=&quot;inline-flex items-center text-cyan-400 hover: text-cyan-300 transition-colors&quo,t>
<Phone className=&quot;w-4 h-4 mr-2&quot; />
    </Phon>kleber@ziontechgroup.com;
</Phone></a>
</div>
</div>
</div>
</Props>
</Props>
}}}}}
