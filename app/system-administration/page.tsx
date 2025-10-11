import React from 'react'
import {  Helmet  } from 'react-helmet-async'import {  Settings, Server, Shield, Monitor, ArrowRight, CheckCircle, Star, Clock, DollarSign, Zap   } from 'lucide-react'

const SystemAdministrationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics'],
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics'],
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'],
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <>
      <Helmet>
        <title>System Administration - Zion Tech Group</title>
        <meta name="description" content="AI-powered system administration solution for intelligent automation and optimization" />
        <meta name="keywords" content="AI, system, administration, automation, artificial intelligence, business solutions" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section></section>
          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <div className="flex justify-center mb-6"></div></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center"></div></div>
                  <Settings className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1></h1>
                System Administration
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p></p>
                Professional system administration services for your IT infrastructure. 
                Server management, monitoring, security, and optimization to keep your systems running smoothly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                  Get Started
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
                  View Services
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
                Comprehensive system administration solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"></div></div>
                  <div className="flex items-center mb-4"></div></div>
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <h3 className="text-xl font-bold text-white"></h3></h3>{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5"></section></section>
          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
                Why Choose Our System Administration?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
                Expert administration with proven results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4"></div></div>
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"></div></div>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2"></h3></h3>{benefit}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
                Service Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
                Choose the package that fits your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div></div>
              {pricing.map((plan, index) => (
                <div key={index} className="{`bg-white/10" backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}></div></div>
                  {plan.popular && (
                    <div className="text-center mb-4"&gt;</div&gt;
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold"&gt;</span&gt;
                        Most Popular
                      </span&gt;
                    </div&gt;
                  )}
                  <div className="text-center mb-8"></div>
                    <h3 className="text-2xl font-bold text-white mb-2"></h3></h3>{plan.plan}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2"></div></div>{plan.price}</div>
                    {plan.price === 'Custom' && <div className="text-gray-300"&gt;</div&gt;Contact us for pricing</div&gt;}
                  </div>
                  <ul className="space-y-4 mb-8"></ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300"></li>
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="{`w-full" py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white' 
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}></button>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
          <div className="max-w-4xl mx-auto text-center"></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2></h2>
              Ready to Optimize Your Systems?
            </h2>
            <p className="text-xl text-gray-300 mb-8"></p></p>
              Let our experts manage your IT infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                Start Service
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default SystemAdministrationPage