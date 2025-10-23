'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Helmet} from 'lucide-react';
    }
  ]
  constbenefits= [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '2 4/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]
  return (
    <divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900"><Helme t><titl e>EnhancedErrorBoundary | ZionTechGroup</titl><metaname="description"content="Professional EnhancedErrorBoundary services by Zion Tech Group. Advanced AI and IT solutions for yourbusiness." /><metaname="keywords"content="EnhancedErrorBoundary, AI solutions, IT services, Zion Tech Group,enhancederrorboundary" /></Helme>{/* FeaturesSection */}
    <sectionclassName="py-20px-4sm:px-6lg:px-8"><divclassName="max-w-7xlmx-auto"><divclassName="text-centermb-16"><spanclassName="text-3 xlmd:text-4 xl font-boldtext-whitemb-4"></spa></className="text-3 xlmd:text-4 xl font-boldtext-whitemb-4">Why Choose Our EnhancedErrorBoundary?
          </h><spanclassName="text-xl text-gray-300max-w-3xlmx-auto"></spa></className="text-xl text-gray-300max-w-3xlmx-auto">Our enhancederrorboundary solutions deliver unmatched performance, security, and scalability.
          </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{features.map((featureindex) => (
           <divkey={index}className="bg-white/10backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300"><divclassName="flex items-center justify-center w-12h-12bg-gradient-to-r from-purple-50 0to-blue-600rounded-lgmb-4"><feature.iconclassName="h-6w-6text-white" /></di><h3className="text-xl font-semiboldtext-whitemb-3">{feature.title}</h><pclassName="text-gray-300">{feature.description}</p></di>))}
        </di></di></sectio>{/* BenefitsSection */}
    <sectionclassName="py-20px-4 sm:px-6lg:px-8bg-white/5"><divclassName="max-w-7xlmx-auto"><divclassName="text-centermb-16"><spanclassName="text-3 xlmd:text-4 xl font-boldtext-whitemb-4"></spa></className="text-3 xlmd:text-4 xl font-boldtext-whitemb-4">Key Benefits

          <spanclassName="text-xl text-gray-300max-w-3xlmx-auto"></spa></className="text-xl text-gray-300max-w-3xlmx-auto">Experience the power of our enhancederrorboundary solutions for your business.
          </p></di><divclassName="grid grid-cols-1md:grid-cols-2gap-6">{benefits.map((benefitindex) => (
           <divkey={index}className="flexitems-startspace-x-3"><CheckCircleclassName="h-6 w-6text-purple-400mt-1flex-shrink-0" /><pclassName="text-gray-300text-lg">{benefit}</p></di>))}
        </di></di></sectio>{/* CTASection */}
    <sectionclassName="py-20px-4sm:px-6lg:px-8"><divclassName="max-w-4 xlmx-autotext-center"><divclassName="bg-gradient-to-r from-purple-600to-blue-600rounded-2 xl p-8md:p-12"><spanclassName="text-3 xlmd:text-4 xl font-boldtext-whitemb-4"></spa></className="text-3 xlmd:text-4 xl font-boldtext-whitemb-4">Ready to Get Started?
          </h><spanclassName="text-xl text-purple-100mb-8"></spa></className="text-xl text-purple-100mb-8">Contact our experts to discuss your enhancederrorboundary needs and get a customized solution.
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-gradient-to-r from-emerald-500to-blue-600 hover:from-emerald-600 hover:to-blue-700text-white font-bold py-4 px-8 rounded-lg transition-allduration-300transformhover:scale-105"></spa></className="bg-gradient-to-r from-emerald-500to-blue-600 hover:from-emerald-600 hover:to-blue-700text-white font-bold py-4 px-8 rounded-lg transition-allduration-300transformhover:scale-105"><PhoneclassName="mr-2h-5w-5" />Call Now

            <spanclassName="bg-gradient-to-r from-emerald-500to-blue-600 hover:from-emerald-600 hover:to-blue-700text-white font-bold py-4 px-8 rounded-lg transition-allduration-300transformhover:scale-105"></spa></className="bg-gradient-to-r from-emerald-500to-blue-600 hover:from-emerald-600 hover:to-blue-700text-white font-bold py-4 px-8 rounded-lg transition-allduration-300transformhover:scale-105"><MailclassName="mr-2h-5w-5" />Email Us

          </di></di></di></sectio></di>)
}
export defaultEnhancedErrorBoundaryPage</butto></butto></h>import React, {Component, ErrorInfo, ReactNode} from 'react'
import {AlertTriangle, RefreshCw, Home, Mail} from 'lucide-react'
interface Prop s {children: ReactNode
  fallback?: ReactNode}
interface Stat e {hasError: boolean
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
  handleRetry= () => {this.setState({ hasError: false, error: undefined, errorInfo: undefined})
  }
  handleReload= () => {windo w.location.reload()
 }
  render() {if (this.state.hasError) {
      if (this.props.fallback) {
        return thi s.props.fallback
     }
      return (
      <divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900flex items-centerjustify-centerp-4"><divclassName="max-w-md w-full bg-white/10backdrop-blur-sm rounded-2 xlp-8text-center"><divclassName="w-16h-16bg-red-50 0/20rounded-2 xl flex items-center justify-centermb-6mx-auto"><AlertTriangleclassName="w-8 h-8text-red-400" /></di><spanclassName="text-2 xl font-boldtext-whitemb-4"></className="text-2 xl font-boldtext-whitemb-4">Oops! Something went wrong
          </spa></h><spanclassName="text-gray-300mb-6"></className="text-gray-300mb-6">We're sorry, but something unexpected happened. Our team has been notified and is working to fix this issue.
          </p>{process.env.NODE_ENV=== 'development' && this.state.error && (
            <detailsclassName="mb-6text-left"><summaryclassName="text-smtext-gray-400cursor-pointermb-2">Error Details (Development)
              </summar><reclassName="text-xs text-red-300bg-black/20p-3roundedoverflow-auto"></reclassName="text-xstext-red-300bg-black/20p-3roundedoverflow-auto">{this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
              </pr></detail>)}
          <divclassName="space-y-3"><
                onClick={this.handleRetry}
               className="w-full bg-gradient-to-r from-blue-500to-purple-600 hover:from-blue-600 hover:to-purple-700text-white font-bold py-3 px-6 rounded-lg transition-all duration-300flexitems-centerjustify-center"
              ></
                onClick={this.handleRetry}
               className="w-full bg-gradient-to-r from-blue-500to-purple-600 hover:from-blue-600 hover:to-purple-700text-white font-bold py-3 px-6 rounded-lg transition-all duration-300flexitems-centerjustify-center"
              ><RefreshCwclassName="w-4h-4mr-2" />Try Again
            </butto><
                onClick={this.handleReload}
               className="w-full border border-blue-400text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300flexitems-centerjustify-center"
              ></
                onClick={this.handleReload}
               className="w-full border border-blue-400text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300flexitems-centerjustify-center"
              ><HomeclassName="w-4h-4mr-2" />Reload Page
            </butto></di><divclassName="mt-6 pt-6 border-tborder-gray-700"><spanclassName="text-sm text-gray-400mb-3"></className="text-sm text-gray-400mb-3">Still having issues? Contact our supportteam:
            </spa></p><ahref="mailto:support@ziontechgroup.com"
               className="inline-flex items-center text-blue-400 hover:text-blue-300text-sm"
              ><MailclassName="w-4h-4mr-2" />support@ziontechgroup.com
            </a></di></di></di>
      )
    }
    return thi s.props.children
  }
}
export default EnhancedErrorBoundary