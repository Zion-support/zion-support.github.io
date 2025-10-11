'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Leaf, BarChart, Shield, Zap, CheckCircle, ArrowRight, Brain, Target, TrendingUp, FileText} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AIAgriculturalIntelligenceProPage: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Crop Monitoring',
      description: 'Advanced AI-powered crop monitoring with real-time analysis and predictive insights.',
      benefits: ['Real-time monitoring', 'Disease detection', 'Growth tracking', 'Yield prediction']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analytics for optimizing agricultural operations and decision making.',
      benefits: ['Data visualization', 'Trend analysis', 'Performance metrics', 'Predictive modeling']
    },
    {
      icon: Shield,
      title: 'Pest & Disease Control',
      description: 'AI-driven pest and disease detection with automated treatment recommendations.',
      benefits: ['Early detection', 'Treatment plans', 'Prevention strategies', 'Cost optimization']
    },
    {
      icon: Zap,
      title: 'Automated Irrigation',
      description: 'Smart irrigation systems that optimize water usage based on AI analysis.',
      benefits: ['Water optimization', 'Weather integration', 'Soil monitoring', 'Energy efficiency']
    },
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'Machine learning models that predict crop yields, weather patterns, and market trends.',
      benefits: ['Yield forecasting', 'Weather prediction', 'Market analysis', 'Risk assessment']
    },
    {
      icon: Target,
      title: 'Precision Agriculture',
      description: 'GPS-guided precision farming techniques for maximum efficiency and minimal waste.',
      benefits: ['GPS guidance', 'Variable rate application', 'Field mapping', 'Resource optimization']
    }
  ]

return (
    <>
      <Helmet></Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" /></meta>
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" /></meta>
      </Helmet>
      <Navigation /></Navigation>
        <title>AI Agricultural Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered agricultural intelligence platform for precision farming, crop monitoring, and yield optimization." /></meta>
        <meta name="keywords" content="AI agriculture, precision farming, crop monitoring, agricultural intelligence, smart farming" /></meta>
      </Helmet>

      <Navigation /></Navigation>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4"></section>
          <div className="container mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6"></h1>
              AI <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Agricultural Intelligence Pro</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
              Transform your farming operations with AI-powered precision agriculture. Monitor crops, optimize yields, and maximize profits with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center"></button>
                Start Free Trial;
                <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"></button>
                Schedule Demo;
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Advanced Features;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Cutting-edge AI technology for modern agriculture;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {features.map((feature, index) => {
                const Icon = feature.icon;
  return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300"></div>
                    <div className="text-green-400 mb-4"></div>
                      <Icon className="w-8 h-8" /></Icon>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2"></ul>
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircle>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-slate-800/50"></section>
          <div className="container mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Comprehensive agricultural intelligence solutions;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="text-center"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                      <Icon className="w-8 h-8 text-white" /></Icon>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2"></ul>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300"></li>
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircle>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Pricing Plans;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Choose the plan that fits your agricultural needs;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 ${></div>
                  tier.name === 'Professional' 
                    ? 'border-green-400/50 scale-105' 
                    : 'border-white/20 hover:border-green-400/50'>
                }`}>
                  <div className="text-center mb-6"></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center"></div>
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-300 ml-1">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8"></ul>
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300"></li>
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${></button>
                    tier.name === 'Professional'
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                      : 'border border-white text-white hover:bg-white hover:text-green-600'>
                  }`}>
                    {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Ready to Revolutionize Your Agriculture?
            </h2>
            <p className="text-xl text-gray-300 mb-8"></p>
              Join the future of farming with AI-powered agricultural intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"></button>
                Start Free Trial;
                <ArrowRight className="ml-2 w-5 h-5" /></ArrowRight>
              </button>
              <button className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300"></button>
                Contact Sales;
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer /></Footer>
    </div>
  )
}

export default AIAgriculturalIntelligenceProPage;