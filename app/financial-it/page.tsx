import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import { Brain, BarChart, Target, TrendingUp, FileText, Zap, Shield, CheckCircle } from 'lucide-react'

const FinancialItPage: React.FC = () => {
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
        <title>Financial It - Zion Tech Group</title>
        <meta name="description" content="AI-powered financial it solution for intelligent automation and optimization" />
        <meta name="keywords" content="AI, financial, it, automation, artificial intelligence, business solutions" />
      </Helmet>
      <Navigation />
      {/* Hero Section */} <section className="py-20 px-4"></section></section>
          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-4xl font-bold text-white mb-4"></h2></h2>Section Title</h2>
    'Advanced Analytics'
  ]
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900"></div></div></div>
      <Helmet>
        </Helmet><title>Financial IT Solutions | Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      <Navigation>
      {/* Hero Section */}
      </Navigation><section className="py-20 px-4"></section></section>
          </section>< className="$2 />
            </div><div className="text-center mb-16"></div></div>
              </div><h2 className="text-4xl font-bold text-white mb-4"></h2></h2>Section Title</h2>
              <p className="text-xl text-gray-300"></p></p>Section description</p>
            </div>
          </div>
        </section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.3)_0%,transparent_50%)] animate-pulse" /></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} /></div>
        <div className="relative max-w-7xl mx-auto text-center"></div></div></div>
            </button>
          </div>
        </div>
      </section>
              <p className="text-xl text-gray-300"></p></p>Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto" / /></div>
          <div className="text-center mb-16" / /></div>
            <h2 className="text-4xl font-bold text-white mb-4"></h2></h2>Financial IT Solutions</h2>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div></div></div>,
            {features.map((feature, index) => (
                <div key={index}className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover: border-green-400/50 transition-all duration-300 group"></div></div></div>,
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover: scale-110 transition-transform duration-300"></div></div></div>,
                  <feature />
                <h3 className="text-xl font-semibold text-white mb-3"></h3></h3>{feature.title}</h3>
                <p className="text-gray-300 mb-4"></p></p>{feature.description</p&gt;}</p>
                <ul>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Financial It?</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

          </div>
        </div>
      </section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center mb-16"></div></div>
            <h2 className="text-4xl font-bold text-white mb-4"></h2></h2>Financial IT Solutions
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>Comprehensive IT solutions designed specifically for financial services industry
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-green-400/50 transition-all duration-300 group"></div></div>
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"></div></div>
                  <feature.icon className="w-6 h-6 text-white" />
                <ul className="space-y-2"></ul>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                  ))}
            ))}
      {/* Services Section */}
      <section className="py-20 px-4"></section></section>
          </section>< className="$2 />
            </div><div className="text-center mb-16"></div></div>
              </div><h2 className="text-4xl font-bold text-white mb-4"></h2></h2>Section Title</h2>
              <p className="text-xl text-gray-300"></p></p>Section description</p>
            </div>
          </div>
      <section className="py-20 px-4"></section></section>
        </section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center mb-16"></div></div>
            <h2 className="text-4xl font-bold text-white mb-4"></h2></h2>
              Financial Services
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our Financial It and experience the future of intelligent automation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" / /></div>
            {
    services.map((service, index) => ()
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center mb-16"></div></div>
            <h2 className="text-4xl font-bold text-white mb-4"></h2></h2>Financial Services
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
              Comprehensive IT solutions for all aspects of financial services and banking operations.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div>
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"></div></div>
                <div className="text-4xl mb-4"></div></div>{service.icon}
                <h3 className="text-xl font-semibold text-white mb-3"></h3></h3>{service.title}
                <p className="text-gray-300"></p></p>{service.description}
            ))}
      {/* Benefits Section */}
      <section className="py-20 px-4"></section></section>
              <p className="text-xl text-gray-300"></p></p>Section description</p>
            </div>
          </div>
        </section>
            </h2>
            <p>Experience the benefits of modern financial technology with our proven solutions.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6"></div></div></div>,
            {benefits.map((benefit, index) => (
                <div key={index}className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"></div></div></div>
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div></div></div>
                  <CheckCircle />
                <h3 className="text-lg font-semibold text-white"></h3></h3>{benefit}</h3>
              </div>
            ))}
          </div>
        ))
      </section>
              <p className="text-xl text-gray-300"></p></p>Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-4xl mx-auto text-center" / /></div>
          <h2 className="text-4xl font-bold text-white mb-6"></h2></h2>Ready for Financial IT Excellence?</h2>
            </button>
          </div>
        ))
      </section>
      <Footer /></Footer>
  ),
}
export default FinancialITPage
        <div className="max-w-4xl mx-auto text-center"></div></div>
          <h2 className="text-4xl font-bold text-white mb-6"></h2></h2>Ready for Financial IT Excellence?
          <p className="text-xl text-gray-300 mb-8"></p></p>Join leading financial institutions using our specialized IT solutions for compliance and security
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
            <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>Start Free Trial
            <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>Contact Sales
      <Footer />
  )
}

export default FinancialItPage