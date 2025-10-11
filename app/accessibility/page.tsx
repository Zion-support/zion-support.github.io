import React from 'react';
import {  Helmet  } from 'react-helmet-async';
import {  Eye, MousePointer, Volume2, Shield, Users, Globe, CheckCircle   } from 'lucide-react';

const AccessibilityPage: React.FC = () => {
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
        <title>Accessibility - Zion Tech Group</title>
        <meta name="description" content="AI-powered accessibility solution for intelligent automation and optimization" />
        <meta name="keywords" content="AI, accessibility, automation, artificial intelligence, business solutions" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section></section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center"></div></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1></h1>
              Accessibility <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"></span></span>Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p></p>
              Creating inclusive digital experiences that work for everyone. Our accessibility solutions ensure your applications are usable by people of all abilities and comply with international standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"></button>
                Get Accessibility Audit
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"></button>
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4"></section></section>
          <div className="container mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-4xl font-bold text-white mb-4"></h2></h2>
                Comprehensive Accessibility Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
                Our accessibility solutions cover all aspects of digital inclusion, ensuring your applications 
                work seamlessly for users with diverse needs and abilities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div></div>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4"></h3></h3>{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4"></p></p>{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2"></ul>
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-400 flex items-center"></li>
                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
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

        {/* Standards Compliance Section */}
        <section className="py-20 px-4"></section></section>
          <div className="container mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-4xl font-bold text-white mb-4"></h2></h2>
                Standards Compliance
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
                We ensure full compliance with international accessibility standards and regulations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div>
              {standards.map((standard, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"></div></div>
                  <h3 className="text-xl font-bold text-white mb-2"></h3></h3>{standard.name}</h3>
                  <p className="text-gray-300 text-sm mb-4"></p></p>{standard.description}</p>
                  <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium"></span></span>
                    {standard.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4"></section></section>
          <div className="container mx-auto text-center"></div></div>
            <h2 className="text-4xl font-bold text-white mb-6"></h2></h2>
              Ready to Make Your App Accessible?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p></p>
              Contact us today to get a comprehensive accessibility audit and implementation plan for your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"></button>
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"></button>
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AccessibilityPage