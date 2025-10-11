import React from 'react';
import Footer from '../components/Footer';

const AiBlockchainAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations for blockchain data.',
      benefits: ['Pattern recognition', 'Anomaly detection', 'Predictive analytics', 'Smart recommendations']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization and reporting.',
      benefits: ['Real-time monitoring', 'Custom dashboards', 'Data visualization', 'Performance metrics']
    },
    {
      icon: TrendingUp,
      title: 'Market Intelligence',
      description: 'Deep market analysis and trend identification for informed decision making.',
      benefits: ['Market trends', 'Price analysis', 'Volume patterns', 'Trading insights']
    },
    {
      icon: Shield,
      title: 'Security Analytics',
      description: 'Advanced security monitoring and threat detection for blockchain networks.',
      benefits: ['Threat detection', 'Risk assessment', 'Security monitoring', 'Compliance tracking']
    }
  ]

  const benefits = [

const PagePage: React.FC = () => {
  return (

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Blockchain <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">Analytics</span>
            </h1>

                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}

          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency through intelligent analytics
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}

            </div>
          </div>

        </section>

      <Footer />
    </>
  )
}

