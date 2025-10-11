'use client'
  return (
    <>
      <Helmet>
        <title>Ai Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="AI-powered ai analytics dashboard solution for intelligent automation and optimization" />
        <meta name="keywords" content="AI, ai, analytics, dashboard, automation, artificial intelligence, business solutions" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ai Analytics Dashboard
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AI-powered ai analytics dashboard solution for intelligent automation and optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300"></p></p>
                Everything you need to analyze and visualize your data
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div>
              {features.map((feature, index) =&gt; (
                </div&gt;
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
                Why Choose AI Analytics?
              </h2>
              <p className="text-xl text-gray-300"></p></p>
                Transform your business with intelligent data analysis
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"></div></div>
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg"></p></p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

          <div className="max-w-4xl mx-auto text-center"></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2></h2>
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8"></p></p>
              Start analyzing your data with AI-powered insights today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"></button>
                Get Started
              </button>
              <button className="border border-gray-300 text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"></button>
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AiAnalyticsDashboardPage