import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import { Brain, BarChart, Target, TrendingUp, FileText, Zap, Shield, CheckCircle } from 'lucide-react'

const AiDataAnalyticsPage: React.FC = () => {
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
        </Helmet><title>Ai Data Analytics - Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
              <p className="text-xl text-gray-300"></p></p>Section description</p>
            </div>
          </div>
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" /></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} /></div>
          <div className="relative max-w-7xl mx-auto text-center"></div></div></div>
            <h1>Ai Data Analytics;</h1>
            </h1>
                Get Started
              </button>
              <button></button>
                View Demo,
              </button>
            </div>
          </div>
          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-4xl font-bold text-white mb-4"></h2></h2>Section Title</h2>
        <section className="relative py-20 px-4 overflow-hidden"></section></section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center"></div></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1></h1>Ai Data Analytics
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p></p>
              Advanced AI-powered ai data analytics solution for modern businesses.
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>Get Started
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>View Demo
        {/* Features Section */}
        <section className="py-20 px-4"></section></section>
          </section>< className="$2 />
            </div><div className="text-center mb-16"></div></div>
              </div><h2 className="text-4xl font-bold text-white mb-4"></h2></h2>Section Title</h2>
              <p className="text-xl text-gray-300"></p></p>Section description</p>
            </div>
          </div>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div></div></div>,
              {features.map((feature, index) => (
                <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div></div></div>,
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div></div></div>,
                    <feature />
                  <h3 className="text-xl font-bold text-white mb-4"></h3></h3>{feature.title}</h3>

                          {benefit} </li>
                      ))}
                    </ul>
                  )}
      icon: Database,
      title: 'Data Integration',
      description: 'Connect and analyze data from multiple sources seamlessly',
      details: ['API Integrations', 'Database Connections', 'File Uploads', 'Cloud Storage']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with full compliance and data protection',
      details: ['End-to-End Encryption', 'GDPR Compliance', 'SOC 2 Certified', 'Role-Based Access']
    },
    {
      icon: Zap,
      title: 'Automated Reports',
      description: 'Generate comprehensive reports automatically on your schedule',
      details: ['Scheduled Reports', 'Custom Templates', 'Email Delivery', 'PDF Export']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 1M data points',
        '5 data sources',
        'Basic AI insights',
        'Standard dashboards',
        'Email support',
        '1 user'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10M data points',
        'Unlimited data sources',
        'Advanced AI analytics',
        'Custom dashboards',
        'Priority support',
        '5 users',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data points',
        'Unlimited data sources',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Unlimited users',
        'Custom integrations',
        'On-premise deployment'
      ],
      popular: false
    }
  ]

  const stats = [
    { value: '40%', label: 'Faster Decision Making', icon: <Clock className="w-8 h-8 text-green-400" /&gt; },
    { value: '85%', label: 'Accuracy Improvement', icon: <Target className="w-8 h-8 text-blue-400" /&gt; },
    { value: '60%', label: 'Cost Reduction', icon: <DollarSign className="w-8 h-8 text-purple-400" /&gt; },
    { value: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-8 h-8 text-cyan-400" /&gt; }
  ]

  const useCases = [
    {
      title: 'Sales Analytics',
      description: 'Track sales performance, identify top performers, and predict future revenue',
      icon: <TrendingUp className="w-8 h-8 text-green-400" /&gt;
    },
    {
      title: 'Customer Insights',
      description: 'Understand customer behavior, preferences, and lifetime value',
      icon: <Users className="w-8 h-8 text-blue-400" /&gt;
    },
    {
      title: 'Operational Efficiency',
      description: 'Optimize processes, reduce waste, and improve productivity',
      icon: <Zap className="w-8 h-8 text-yellow-400" /&gt;
    },
    {
      title: 'Financial Forecasting',
      description: 'Predict cash flow, budget planning, and financial performance',
      icon: <DollarSign className="w-8 h-8 text-purple-400" /&gt;
    }
  ]

  const testimonials = [
    {
      name: 'David Kim',
      role: 'Chief Data Officer, FinanceFlow',
      content: 'AI Data Analytics helped us identify $2M in cost savings opportunities within the first month.',
      rating: 5,
      company: 'FinanceFlow'
    },
    {
      name: 'Lisa Wang',
      role: 'VP Analytics, RetailMax',
      content: 'The predictive models are incredibly accurate. We can now forecast demand with 95% accuracy.',
      rating: 5,
      company: 'RetailMax'
    },
    {
      name: 'James Rodriguez',
      role: 'Head of BI, TechStart',
      content: 'Implementation was smooth and the insights are game-changing. ROI was achieved in 3 months.',
      rating: 5,
      company: 'TechStart'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ai Data Analytics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AI-powered ai data analytics solution for intelligent automation and optimization
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

                </div>
              </div>
            ))}
          </div>
        </section>

          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2></h2>Key Features
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>Advanced AI technology that drives results
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div></div>
                    <feature.icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-white mb-4"></h3></h3>{feature.title}
                  <p className="text-gray-300 mb-4"></p></p>{feature.description}
                  {feature.benefits && (
                    <ul className="space-y-2"></ul>
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400"></li>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
          <div className="max-w-7xl mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-4xl font-bold text-white mb-4"></h2></h2>Section Title</h2>
          <div className="max-w-7xl mx-auto" / /></div>
            <div className="text-center mb-16" / /></div>
              <h2></h2>
                Why Choose Our Solution?
              </h2>
              <p></p>
                Proven results that drive business growth and efficiency
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" / /></div>
              {benefits.map((benefit, index) =&gt; ()
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4"></section></section>
          </section>< className="$2 />
            </div><div className="text-center mb-16"></div></div>
              </div><h2 className="text-4xl font-bold text-white mb-4"></h2></h2>Section Title</h2>
              <p className="text-xl text-gray-300"></p></p>Section description</p>
            </div>
          </div>
        </section>
      </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"></div></div>
                <div className="flex items-center mb-4"></div></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4"></div></div>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white"></h3></h3>{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6"></p></p>{feature.description}</p>
                <ul className="space-y-2"></ul>
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center mb-16"></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
              Use Cases
            </h2>
            <p className="text-xl text-gray-300"></p></p>
              See how AI analytics can transform different aspects of your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div>
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"></div></div>
                <div className="flex justify-center mb-4"></div></div>
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4"></h3></h3>{useCase.title}</h3>
                <p className="text-gray-300"></p></p>{useCase.description}</p>
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
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300"></p></p>
              Flexible pricing options to fit your data analytics needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div></div>
            {pricingPlans.map((plan, index) => (
              <div key={index} className="{`bg-white/10" backdrop-blur-sm rounded-2xl p-8 relative ${
                plan.popular ? 'ring-2 ring-cyan-400 bg-white/15' : ''
              }`}></div></div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"&gt;</div&gt;
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium"&gt;</span&gt;
                      Most Popular
                    </span&gt;
                  </div&gt;
                )}
                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-2"></h3></h3>{plan.name}</h3>
                  <p className="text-gray-300 mb-4"></p></p>{plan.description}</p>
                  <div className="flex items-baseline justify-center"></div></div>
                    <span className="text-4xl font-bold text-white"></span></span>{plan.price}</span>
                    <span className="text-gray-300 ml-1"></span></span>{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8"></ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="{`w-full" py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transform hover:scale-105' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}></button>
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center mb-16"></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
              Customer Success Stories
            </h2>
            <p className="text-xl text-gray-300"></p></p>
              See how companies are using AI analytics to drive growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div></div>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"></div></div>
                <div className="flex items-center mb-4"></div></div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic"></p></p>"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white"></div></div>{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm"></div></div>{testimonial.role}</div>
                  <div className="text-gray-400 text-sm"></div></div>{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-4xl mx-auto text-center"></div></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2></h2>
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl text-gray-300 mb-8"></p></p>
            Start your free trial today and discover insights that will transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"></button>
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AiDataAnalyticsPage
