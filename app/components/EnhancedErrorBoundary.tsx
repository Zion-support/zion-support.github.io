'use client'
import React from 'react'
  ]

  return (
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{benefits.map((benefit, index) => (</div>
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>h2>
            <p className="text-xl text-purple-100 mb-8">Contact our experts to discuss your enhancederrorboundary needs and get a customized solution.</p>p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div>
          </div>
  error?: Error
  errorInfo?: ErrorInfo}
class EnhancedErrorBoundaryextendsComponent<Props, State>{constructor(props: Props) {
    super(props)
    this.state= { hasError: false}
  }
  static getDerivedStateFromError(error: Error): State {return { hasError: true, error}
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {this.setState({errorerrorInfo})
    // Log error to monitoring service
  }
  handleReload= () => {windo w.location.reload()
 }
  render() {if (this.state.hasError) {
      if (this.props.fallback) {
        return thi s.props.fallback
     }
      return (
=======
      <divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900flex items-centerjustify-centerp-4"><divclassName="max-w-md w-full bg-white/10backdrop-blur-sm rounded-2 xlp-8text-center"><divclassName="w-16h-16bg-red-50 0/20rounded-2 xl flex items-center justify-centermb-6mx-auto"><AlertTriangleclassName="w-8 h-8text-red-400" /></di><spanclassName="text-2 xl font-boldtext-whitemb-4"></className="text-2 xl font-boldtext-whitemb-4">Oops! Something went wrong
          </spa></h><spanclassName="text-gray-300mb-6"></className="text-gray-300mb-6">We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
          </p>{process.env.NODE_ENV=== 'development' && this.state.error && (
            <detailsclassName="mb-6text-left"><summaryclassName="text-smtext-gray-400cursor-pointermb-2">Error Details (Development)
              </summar><reclassName="text-xs text-red-300bg-black/20p-3roundedoverflow-auto"></reclassName="text-xstext-red-300bg-black/20p-3roundedoverflow-auto">{this.state.error.toString()}
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
                  {this.state.errorInfo?.componentStack}
              </pr></detail>)}
          <divclassName="space-y-3"><
                onClick={this.handleRetry}
      )
    }
    return thi s.props.children
  }
}
export default EnhancedErrorBoundary
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
