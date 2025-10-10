'use client',

const AIAnalyticsPage: React.FC = () => {
const [isLoaded, setIsLoaded] = useState(false),

  useEffect(() => {
    setIsLoaded(true),
  }, []),

const features = [
    {
      title: 'Performance Tracking',
      description: 'Track KPIs and performance metrics with advanced analytics and benchmarking.',
      benefits: ['KPI monitoring', 'Goal tracking', 'Benchmarking', 'Performance alerts']
    }
  ]
const analyticsTypes = [
    {
      title: 'Sales Analytics',
      description: 'Track sales performance, pipeline health, and revenue trends.',
      icon: TrendingUp,
      metrics: ['Revenue tracking', 'Sales forecasting', 'Pipeline analysis', 'Conversion rates']
>>>>>>> origin/main
    },
    {
    }
  ],

const benefits = [
    'Reduce data analysis time by 90%',
    'Increase decision-making speed by 5x',
    'Improve accuracy with AI-powered insights',
    'Automate reporting and dashboards',
    'Scale analytics across all departments',
    'Integrate with existing systems seamlessly'
  ],

const pricing = [
    {
        'Standard reports',
        'Email support',
        '1GB data storage',
        'Real-time processing'
      ],
        'Custom reports',
        'Priority support',
        '10GB data storage',
        'AI-powered insights',
        'API access',
        'Team collaboration'
      ],
    }
              </button>
            </div>,
          </div>,
,
          {/* Stats */}
            </div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div><div className="text-gray-300">Integrations</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div><div className="text-gray-300">Uptime</div>
            </div>
            </div>
          </div>
        </div>
      </section>

              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-300">Real-time Data</div>
            </div>,
          </div>,
        </div>,
      </section>,
,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
      {/* Features Section */}
      <section className="py-16 px-4">
              <div key={index} className="cyber-card p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Analytics Features</h2><p className="text-xl text-gray-300">Everything you need to understand your business data</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="cyber-card p-6"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p><ul className="space-y-2" role="list">{feature.benefits.map((benefit, idx) => (</ul>
                    <li key={idx} className="flex items-center text-sm text-gray-400" style={{ color: "#9CA3AF" }}>
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-16 px-4 bg-slate-800/50">
              <div key={index} className="cyber-card p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Analytics Coverage</h2><p className="text-xl text-gray-300">Track every aspect of your business with specialized analytics</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{analyticsTypes.map((type, index) => (</div>
              <div key={index} className="cyber-card p-6"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p><ul className="space-y-1" role="list">{type.metrics.map((metric, idx) => (<li key={idx} className="text-sm text-gray-400" style={{ color: "#9CA3AF" }}>• {metric}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

      {/* Integrations Section */}
      <section className="py-16 px-4">
              <div key={index} className="cyber-card p-4 text-center">
                <div className="text-3xl mb-2">{integration.icon}<div className="text-sm text-gray-300">{integration.name}</div>
>>>>>>> origin/main
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-6ffe
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 neon-text mb-2">24/7</div>
                <div className="text-gray-300">Real-time Monitoring</div>
              </div>
            </div>
          </section>

                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"><span className="sr-only">Screen reader: </span>
                      Most Popular,
                    </span>,
                  </div>,
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h2><p className="text-xl text-gray-300">Choose the plan that fits your analytics needs</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"></span><span className="sr-only">Screen reader: </span>
                      Most Popular
                    </span>
                  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    <span className="text-lg text-gray-400" style={{ color: "#9CA3AF" }}></span><span className="sr-only">Screen reader: </span>{plan.period}<p className="text-gray-300">{plan.description}</p><ul className="space-y-3 mb-8" role="list">{plan.features.map((feature, idx) => (</ul>
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center"></section>
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Data?</h2><p className="text-xl text-gray-300 mb-8">Join thousands of businesses using AI analytics to make smarter decisions and drive growth.</p>
          </p>
            <button className="cyber-button px-8 py-4 text-lg" aria-label="Start Free Trial" tabIndex="0">Start Free Trial<button className="cyber-button-outline px-8 py-4 text-lg" aria-label="Contact Sales" tabIndex="0">Contact Sales</button>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <button className="cyber-button px-8 py-4 text-lg" aria-label="Start Free Trial" tabIndex="0">
              Start Free Trial,
            </button>
            <button className="cyber-button-outline px-8 py-4 text-lg" aria-label="Contact Sales" tabIndex="0">
              Contact Sales,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-6ffe
  ),
},

export default AIAnalyticsPage,