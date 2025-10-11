import { BarChart, TrendingUp, PieChart, ArrowRight, CheckCircle, Zap, Shield, Target } from 'lucide-react';
=======
import React from 'react'
import {  Helmet  } from 'react-helmet-async'import {  Smartphone, Code, Zap, Shield, Globe, ArrowRight, CheckCircle, Star, Users, Clock, DollarSign   } from 'lucide-react'
const MobileAppDevelopmentPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI-powered insights to optimize your business performance.',
      benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable insights.',
      benefits: ['Interactive charts', 'Custom reports', 'Data export', 'Visual storytelling']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    }
  ];
  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section></section>
          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <div className="flex justify-center mb-6"></div></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center"></div></div>
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1></h1>
                Mobile App Development
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p></p>
                Professional mobile app development for iOS and Android. 
                Create engaging, high-performance mobile applications that drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                  Start Project
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
                  View Portfolio
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
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
{/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need to succeed with AI</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
=======
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
                Why Choose Our Mobile Development?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
                Professional mobile solutions with proven results
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
                Development Packages
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
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-gray-300 mb-8"></p></p>
              Let's discuss your mobile app requirements and create something amazing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                Start Your Project
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
                Contact Us
              </button>
            </div>
          </div>
        </section>
</main>
      <Footer />
    </div>
  );
};
export default MobileAppDevelopmentPage;