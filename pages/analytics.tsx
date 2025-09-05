import React from 'react',
import Head from 'next/head',
import { BarChart3, TrendingUp, PieChart, Activity, ArrowRight, Check, Eye } from 'lucide-react',


export default function AnalyticsPage() {
  const features = [
    {
      icon: <BarChart3 className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Real-time Dashboards',
      description: 'Live monitoring and visualization of your key metrics'
    },
    {
      icon: <TrendingUp className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Predictive Analytics',
      description: 'AI-powered forecasting and trend analysis'
    },
    {
      icon: <PieChart className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Custom Reports',
      description: 'Build and schedule personalized reports'
    },
    {
      icon: <Activity className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Performance Monitoring',
      description: 'Track system performance and user behavior'
    }
  ],

  const benefits = [
    'Make data-driven decisionsIdentify growth opportunitiesOptimize user experienceMonitor system healthTrack business metricsGenerate actionable insights'
  ],

  return (
    <>
      <Head>
        <title>Analytics - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Comprehensive analytics platform with real-time insights, predictive analytics, and custom reporting capabilities.&quot; />
      </Head>

      <div className=&quot;min-h-screen bg-black&quot;>
        {/* Hero Section */}
        <section className=&quot;pt-32 pb-20 relative overflow-hidden&quot;>
          <div className=&quot;absolute inset-0&quot;>
            <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]&quot; />
            <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]&quot; />
          </div>
          
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10&quot;>
            <div className=&quot;mb-8&quot;>
              <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6&quot;>
                <BarChart3 className=&quot;w-4 h-4 mr-2&quot; />
                Data-Driven Insights
              </div>
            </div>
            
            <h1 className=&quot;text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight&quot;>
              Analytics Platform
            </h1>
            <p className=&quot;text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed&quot;>
              Comprehensive analytics platform with real-time insights, predictive analytics, and custom reporting capabilities.
            </p>

            <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
              <a
                href=&quot;/contact&quot; className=&quot;shadow-2xl shadow-blue-500/25&quot;>
                Start Analyzing
                <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
              </Link>
              <a
                href=&quot;/contact&quot; className=&quot;border-white/20 hover:border-white/40&quot;>
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className=&quot;py-24&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;text-center mb-20&quot;>
              <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
                Analytics Features
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                Powerful tools to understand your data and make better decisions
              </p>
            </div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
              {features.map((feature, index) => (
                <div
                  key={index} className=&quot;p-8 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-blue-500/30 hover:bg-gray-900/80 transition-all duration-300&quot;>
                  <div className=&quot;w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center&quot;>
                    {feature.icon}
                  </div>
                  <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>
                    {feature.title}
                  </h3>
                  <p className=&quot;text-gray-400 leading-relaxed&quot;>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className=&quot;py-24 bg-gray-900&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-16 items-center&quot;>
              <div>
                <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-8&quot;>
                  Transform Data into Action
                </h2>
                <div className=&quot;space-y-6&quot;>
                  {benefits.map((benefit, index) => (
                    <div key={index} className=&quot;flex items-start&quot;>
                      <div className=&quot;w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1&quot;>
                        <Check className=&quot;w-4 h-4 text-blue-500&quot; />
                      </div>
                      <span className=&quot;text-gray-300 text-lg&quot;>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className=&quot;relative&quot;>
                <div className=&quot;bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20&quot;>
                  <div className=&quot;text-center&quot;>
                    <Eye className=&quot;w-24 h-24 mx-auto mb-6 text-blue-400&quot; />
                    <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>
                      Visual Insights
                    </h3>
                    <p className=&quot;text-gray-300 mb-6&quot;>
                      Beautiful charts and graphs that make complex data easy to understand
                    </p>
                    <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm&quot;>
                      <TrendingUp className=&quot;w-4 h-4 mr-2&quot; />
                      Interactive dashboards
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
=======
        <section className=&quot;py-24 bg-gradient-to-r from-blue-600 to-blue-700&quot;>
          <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              Ready to Unlock Your Data?
            </h2>
            <p className=&quot;text-xl text-blue-100 mb-8&quot;>
              Start gaining insights from your data today
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <a
                href=&quot;/contact&quot; className=&quot;bg-white text-blue-600 hover:bg-gray-100&quot;>
                Start Free Trial
              </Link>
              <a
                href=&quot;/contact&quot; className=&quot;border-white text-white hover:bg-white hover:text-blue-600&quot;>
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}