'use client'
import { Metadata } from 'next';
import React from 'react'
import { ArrowRight, Brain, BarChart, Target, TrendingUp } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

interface PerformanceMetrics {}
  onMetricsUpdate,
  enableRealTimeMonitoring = true,
  logToConsole = false
}) => {}
  const [metrics, setMetrics] = useState<PerformanceMetrics>({)}
    fcp: null,
    lcp: null,
    fid= null,
    cls: null,
    ttfb: null,
    fmp: null,
    memory: null,

      return;
    const newMetrics: PerformanceMetrics  =  {}
      fcp: null,
      lcp: null,
      fid= null,
      cls: null,
      ttfb: null,
      fmp: null,
      memory: null,
    if (fcpEntry) {}
      newMetrics.fcp = fcpEntry.startTime


    // Largest Contentful Paint (LCP)
    if (lcpEntries.length > 0) {}
      newMetrics.lcp = lcpEntries[lcpEntries.length - 1].startTime


    // First Input Delay (FID)
    clsEntries.forEach((entry: any) => {}
      if (!entry.hadRecentInput) {}
        clsValue += entry.value

    })
    newMetrics.cls = clsValue
    // Time to First Byte (TTFB)
    if (navigationEntry) {}
      newMetrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart
      newMetrics.navigation = {}
        loadEventEnd: navigationEntry.loadEventEnd,
        domContentLoadedEventEnd: navigationEntry.domContentLoadedEventEnd,
        domContentLoadedEventStart: navigationEntry.domContentLoadedEventStart,
        loadEventStart: navigationEntry.loadEventStart

    }

;
const Component = () => {
  
  return (
    <>
      
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight"></h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Advanced Performance Monitor</h1 />
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed" />
              Advanced Performance Monitor solution for modern businesses.
            </p />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center" />
                Get Started;
                <ArrowRight className="ml-2 h-5 w-5" / />
              </button />
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200" />Learn More</button />
            </div />
          </div />
        </section />
        {/* Features Section  */
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2 />
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" />Powerful AI-driven features designed to transform your business operations</p />
            </div />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, index) =</ (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20" />
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" / />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3 />
                  <p className="text-gray-300 mb-4">{feature.description}</p />
                  <ul className="space-y-2" />{feature.benefits.map((benefit, idx) =</ (
                      <li key={idx} className="flex items-center text-sm text-gray-300" />
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" / />
                        {benefit}
                      </li />
                    ))}
                  </ul />
                </div />
              ))}
            </div />
          </div />
        </section />
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2 />
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" />Experience the benefits of cutting-edge AI technology</p />
            </div />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{benefits.map((benefit, index) =</ (
                <div key={index} className="flex items-start space-x-4" />
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" / />
                  <p className="text-gray-300 text-lg">{benefit}</p />
                </div />
              ))}
            </div />
          </div />
        </section />
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2 />
            <p className="text-xl text-gray-300 mb-8" />Join thousands of businesses already using our AI solutions</p />
            <div className="$1"></div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200" />Start Free Trial</button />
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200" />Contact Sales</button />
            </div />
          </div />
        </section />
      </div />
      <Footer / />
    </ />
  )
, }

export default AdvancedPerformanceMonitor;

};