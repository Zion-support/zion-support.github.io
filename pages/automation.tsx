import React from 'react',
import Head from 'next/head',
import { RefreshCw, Zap, Bot, Workflow, ArrowRight, Check, BarChart3 } from 'lucide-react',

export default function AutomationPage() {_const _features = [
    {
      icon: <Workflow className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Workflow Automation',
      description: 'Create complex workflows with drag-and-drop interface'
    },
    {
      icon: <Bot className=&quot;w-8 h-8 text-white&quot; />,
      title: 'AI-Powered Bots',
      description: 'Intelligent automation agents that learn and adapt'
    },
    {
      icon: <BarChart3 className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Process Analytics',
      description: 'Real-time insights into your automation performance'
    },
    {
      icon: <Zap className=&quot;w-8 h-8 text-white&quot; />,
      title: 'Smart Triggers',
      description: 'Automated responses based on events and conditions'
    }
  ],

  const benefits = [
    'Reduce manual tasks by 80%Improve process accuracyScale operations efficiently24/7 automated operationsReal-time monitoringCustom integration support'
  ],
  return (
    <>
      <Head>
        <title>Automation Hub - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;AI-powered workflow automation platform that streamlines your business processes and increases efficiency.&quot; />
      </Head>

      <div className=&quot;min-h-screen bg-black&quot;>
        {/* Hero Section */}
        <section className=&quot;pt-32 pb-20 relative overflow-hidden&quot;>
          <div className=&quot;absolute inset-0&quot;>
            <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]&quot; />
            <div className=&quot;absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.08),transparent_50%)]&quot; />          </div>
          
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10&quot;>
            <div className=&quot;mb-8&quot;>
              <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6&quot;>
                <RefreshCw className=&quot;w-4 h-4 mr-2&quot; />
                Intelligent Automation
              </div>
            </div>
            
            <h1 className=&quot;text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight&quot;>
              Automation Hub
            </h1>
            <p className=&quot;text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed&quot;>
              AI-powered workflow automation platform that streamlines your business processes and increases efficiency.
            </p>

            <div className=&quot;flex flex-col sm:flex-row gap-6 justify-center&quot;>
              <a
                href=&quot;/contact&quot; className=&quot;shadow-2xl shadow-blue-500/25&quot;>
                Start Automating
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
              <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>                Automation Features
              </h2>
              <p className=&quot;text-xl text-gray-400 max-w-3xl mx-auto&quot;>
                Powerful tools to automate any business process
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
                    {feature.description}                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className=&quot;py-24 bg-gray-900&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-16 items-center&quot;>              <div>
                <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-8&quot;>
                  Transform Your Business with Automation
                </h2>
                <div className=&quot;space-y-6&quot;>
                  {benefits.map((benefit, index) => (
                    <div key={index} className=&quot;flex items-start&quot;>
                      <div className=&quot;w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-4 mt-1&quot;>
                        <Check className=&quot;w-4 h-4 text-blue-500&quot; />
                      </div>
                      <span className=&quot;text-gray-300 text-lg&quot;>{benefit}</span>                    </div>
                  ))}
                </div>
              </div>
              
              <div className=&quot;relative&quot;>
                <div className=&quot;bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-blue-500/20&quot;>
                  <div className=&quot;text-center&quot;>
                    <RefreshCw className=&quot;w-24 h-24 mx-auto mb-6 text-blue-400&quot; />
                    <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>
                      Smart Workflows
                    </h3>
                    <p className=&quot;text-gray-300 mb-6&quot;>
                      Create intelligent automation workflows that adapt to your business needs
                    </p>
                    <div className=&quot;inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400 text-sm&quot;>
                      <Zap className=&quot;w-4 h-4 mr-2&quot; />
                      AI-powered optimization
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
        <section className=&quot;py-24 bg-gradient-to-r from-blue-600 to-blue-700&quot;>
          <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;>
            <h2 className=&quot;text-3xl sm:text-4xl font-bold text-white mb-6&quot;>
              Ready to Automate Your Workflows?
            </h2>
            <p className=&quot;text-xl text-blue-100 mb-8&quot;>
              Start automating your business processes today
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