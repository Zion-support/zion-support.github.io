      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and recommendations powered by advanced machine learning algorithms.',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Trend analysis', 'Smart recommendations']
    },
    {
      icon: BarChart,
      title: 'Real-Time Dashboards',
      description: 'Monitor your business metrics in real-time with customizable, interactive dashboards.',
      benefits: ['Live data updates', 'Custom widgets', 'Interactive charts', 'Mobile responsive']
    },
    {
      icon: Target,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with AI-optimized content and visualizations.',
      benefits: ['Scheduled reports', 'Custom templates', 'PDF export', 'Email delivery']
    },
    {
      icon: TrendingUp,
    }
  ],

  const benefits = [

  const useCases = [
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights',
      icon: '📊'
    },
    {
      title: 'Performance Monitoring',
      description: 'Track and monitor business performance in real-time',
      icon: '📈'
    },
    {
      title: 'Predictive Analytics',
      description: 'Predict future trends and outcomes with AI',
      icon: '🔮'
    },
    {
    },
    {
      title: 'Financial Analytics',
      description: 'Monitor financial performance and predict trends',
      icon: '💰'
    },
    {
      title: 'Operational Analytics',
      description: 'Optimize operations with data-driven insights',
      icon: '⚙️'
    }
  ],

  return (
    <>
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our AI Analytics solution. Advanced analytics, real-time monitoring, and predictive modeling for better business decisions." />
        <meta name="keywords" content="AI analytics, business intelligence, data analysis, predictive analytics, real-time monitoring, data visualization" />
      </Helmet>

      <Navigation />
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our advanced AI Analytics solution. 
              Real-time monitoring, predictive modeling, and intelligent reporting for better business decisions.
            </p>
            </div>
          </div>
        </section>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From startups to enterprises, our AI Analytics solution serves diverse industries
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Analytics?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of data analytics with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Join thousands of businesses who are already using our AI Analytics solution
              </p>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  ),
},

