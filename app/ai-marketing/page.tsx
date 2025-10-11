'use client';
import React from 'react';
import { Link  } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiMarketingPage: React.FC = () => {
  return (

  const services = [{
      title: 'AI-Powered Ad Optimization', description: 'Maximize ROI with intelligent ad targeting and bidding', features: ['Real-time Optimization', 'Audience Targeting', 'Budget Management'],
      price: 'Starting at $199/month',
      icon: '🎯'
    
  );
},
    {
      title: 'Content Generation',
      description: 'AI-generated marketing content that converts',
      features: ['Blog Posts', 'Social Media', 'Email Campaigns'],
      price: 'Starting at $299/month',
      icon: '✍️'
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast customer behavior and market trends',
      features: ['Customer Insights', 'Sales Forecasting', 'Market Analysis'],
      price: 'Starting at $399/month',
      icon: '📊'
    },
    {
      title: 'Chatbot Marketing',
      description: 'Intelligent chatbots for customer engagement',
      features: ['24/7 Support', 'Lead Qualification', 'Personalized Responses'],
      price: 'Starting at $149/month',
      icon: '💬'
    },
    {
      title: 'Email Marketing AI',
      description: 'Personalized email campaigns that drive results',
      features: ['Send Time Optimization', 'Subject Line Testing', 'Content Personalization'],
      price: 'Starting at $249/month',
      icon: '📧'
    },
    {
      title: 'Social Media AI',
      description: 'Automated social media management and posting',
      features: ['Content Scheduling', 'Engagement Analysis', 'Trend Monitoring'],
      price: 'Starting at $179/month',
      icon: '📱'
    }
  ];

  const results = [{ metric: '300%', description: 'Average Increase in Conversion Rates' }, { metric: '50%', description: 'Reduction in Marketing Costs' }, { metric: '85%', description: 'Improvement in Campaign Performance' }, { metric: '24/7', description: 'Automated Marketing Operations' }
    const features = [
    {
      icon: Brain, title: 'AI-Powered Solutions', description: 'Advanced AI technology to transform your business operations and improve efficiency'
    }, {
      icon: Zap, title: 'High Performance', description: 'Lightning-fast processing and real-time analytics for optimal results'
    }, {
      icon: Shield, title: 'Enterprise Security', description: 'Bank-level security with encryption and compliance standards'
    }, {
      icon: Globe, title: 'Global Reach', description: 'Worldwide deployment and support for international businesses'
    }];

  const benefits = ['Advanced AI technology integration', 'Real-time processing and analytics', 'Enterprise-grade security and compliance', 'Scalable and flexible solutions', '24/7 technical support', 'Easy integration with existing systems', 'Cost-effective pricing plans', 'Proven track record of success'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation /></Navigation>
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text">
            AI Marketing Solutions
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Revolutionize your marketing with AI-powered automation, personalization, 
            and optimization that delivers measurable results.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button"></Link>
              Get Free Marketing Audit
            </Link>
            <Link to="/case-studies" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}></Link>
              View Success Stories
            </Link>
          </div>
        </section>

        {/* Results Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Proven Results</h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center cyber-card">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{result.metric}</div>
                <div className="text-gray-300">{result.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">AI Marketing Services</h2>
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <span className="text-pink-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-pink-400 mb-3">{service.price}</div>
                  <Link to="/contact" className="text-pink-400 hover: text-pink-300 font-medium"></Link>
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="grid md: grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why AI Marketing Works</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Personalization at Scale</h3>
                    <p className="text-gray-300">Deliver personalized experiences to thousands of customers simultaneously</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Real-time Optimization</h3>
                    <p className="text-gray-300">Continuously optimize campaigns based on real-time performance data</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Predictive Insights</h3>
                    <p className="text-gray-300">Anticipate customer needs and market trends before they happen</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cyber-card hologram-card p-8">
              <h3 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Schedule a free consultation to discover how AI can transform your marketing strategy.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <span className="text-pink-400 mr-2">✓</span>
                  Free marketing audit
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-pink-400 mr-2">✓</span>
                  Custom AI strategy
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-pink-400 mr-2">✓</span>
                  Implementation roadmap
                </div>
              </div>
              <Link to="/contact" className="cyber-button mt-6 inline-block"></Link>
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cyber-card hologram-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Transform Your Marketing with AI
          </h2>
          <p className="text-gray-300 mb-6">
            Join hundreds of businesses already using AI to revolutionize their marketing efforts.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <Link to="/contact" className="cyber-button"></Link>
              Start Your AI Marketing Journey
            </Link>
            <a href="tel:+13024640950" className="cyber-button" style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}>
              Call: (302) 464-0950
            </a>
          </div>
        </section>
      </main>
      
      <Footer /></Footer>
    </div>
  );
};

export default AiMarketingPage;
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']},
    {icon: BarChart,
  },
    {
    icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']},
    {icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']},
    {icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']}]
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
const benefits = ['Increase efficiency by up to 50%', 'Reduce costs by 30% with automation', 'Improve decision-making with AI insights', 'Scale operations without proportional staff increases', 'Gain competitive advantage with advanced technology';]
return(<>
  )
</>
      <Helmet /></Helmet>
      <Helmet ></Helmet>
        <title>Ai Marketing - Zion Tech Group</title>
    'Gain competitive advantage with advanced technology'
  ]
return (
    <>
      <Helmet ></Helmet>
        </Helmet><title>Ai Marketing - Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
        {/* Hero Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
        <section className="relative py-20 px-4 overflow-hidden">
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%, rgba(147, 51, 234, 0.3)_0%, transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%, rgba(59, 130, 246, 0.3)_0%, transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">
              Ai Marketing
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%, rgba(147, 51, 234, 0.3)_0%, transparent_50%)] animate-pulse" /></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%, rgba(59, 130, 246, 0.3)_0%, transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} /></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1>Ai Marketing;</h1>
            </h1>
            <p>Advanced AI-powered ai marketing solution for modern businesses.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
              <button>Get Started;</button>
              </button>
              <button>View Demo,</button>
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
        </section>
        {/* Features Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%, rgba(147, 51, 234, 0.3)_0%, transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%, rgba(59, 130, 246, 0.3)_0%, transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight">Ai Marketing
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai marketing solution for modern businesses.
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Get Started
              <button className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">View Demo
        {/* Features Section */}
        <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Key Features;</h2>
              </h2>
              <p>Advanced AI technology that drives results;</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
              {features.map((feature, index) => (
                <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>,
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>,
                    <feature />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description</p>}</p>
                  {feature.benefits && (;
                    <ul>
                      {feature.benefits.map((benefit, idx) => (} <li>
                          <CheckCircle /></CheckCircle>
                          {benefit} </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

            </div>
          </div>
        </section>
        {/* Benefits Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">Key Features
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Advanced AI technology that drives results
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}
                  <p className="text-gray-300 mb-4">{feature.description}
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle>
                          {benefit}
                      ))}
                    </ul>
                  </div>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Why Choose Our Solution?</h2>
              </h2>
              <p>Proven results that drive business growth and efficiency;</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>,
              {benefits.map((benefit, index) => (
                <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>,
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>,
                    <CheckCircle /></CheckCircle>
                  <p className="text-lg text-white font-medium">{benefit</p>}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
          <div className="max-w-7xl mx-auto" / /></div>
            <div className="text-center mb-16" / /></div>
              <h2></h2>
                Why Choose Our Solution?
              </h2>
              <p></p>
                Proven results that drive business growth and efficiency
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8" / /></div>
              {benefits.map((benefit, index) => ()
              ))}
        {/* CTA Section */}
        <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          ))
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
        </section>
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2>Ready to Get Started?</h2>
              </h2>
              <p>Contact our experts to discuss your requirements and get started today.</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
                <button>Contact Us;</button>
                </button>
                <button>Learn More;</button>
                Ready to Get Started?
              </h2>
              <p></p>
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center" / /></div>
                <button></button>
                  Contact Us
                </button>
                <button></button>
                  Learn More
                </button>
              </div>
            </div>
          ))
        </section>
      </div>
      <Footer /></Footer>
  );
};

export default PagePage;
