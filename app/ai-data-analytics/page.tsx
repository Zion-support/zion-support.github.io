'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings} from 'lucide-react'
const AiDataAnalyticsPage: React.FC = () => {
    const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions'
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
        }
    {
      icon: Zap,
      title: 'High Performance'
      description: 'Lightning-fast processing and real-time analytics for optimal results'
        }
    {
      icon: Shield,
      title: 'Enterprise Security'
      description: 'Bank-level security with encryption and compliance standards'
        }
    {
      icon: Globe,
      title: 'Global Reach'
      description: 'Worldwide deployment and support for international businesses'
    }
    ];
  const benefits = [
    'Advanced AI technology integration'
    'Real-time processing and analytics'
    'Enterprise-grade security and compliance'
    'Scalable and flexible solutions'
    '24/7 technical support'
    'Easy integration with existing systems'
    'Cost-effective pricing plans'
    'Proven track record of success'
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']    }
    {
      icon: BarChart
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics'
      description: 'Comprehensive analytics dashboard with real-time data visualization.'
      details: ['Predictive Analytics', 'Anomaly Detection', 'Pattern Recognition', 'Automated Insights'  ];
        }
    {
      icon: BarChart,
      title: 'Real-Time Dashboards'
      description: 'Interactive visualizations that update in real-time with your business data'
      details: ['Live Data Streaming', 'Custom Dashboards', 'Interactive Charts', 'Mobile Responsive'  ];
        }
    {
      icon: Target,
      title: 'Predictive Modeling'
      description: 'Forecast future trends and outcomes with advanced statistical models'
      details: ['Sales Forecasting', 'Demand Planning', 'Risk Assessment', 'Trend Analysis'  ];
        }
    {
    icon: TrendingUp,
      title: 'Growth Optimization'
      description: 'Optimize your business growth with data-driven strategies.'
  }
      ];
const benefits = [
    'Increase efficiency by up to 50%'
    'Reduce costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases'
    'Gain competitive advantage with advanced technology'
    ];
return (
    <>)
      
    ];
  return (
    <>
  </>
      <Helmet>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
      </Helmet>
        <title>Ai Data Analytics - Zion Tech Group</title>
    'Gain competitive advantage with advanced technology'
    ];
  return (
    <>
      <Helmet>
        <title>Page Title</title>
        <meta name="description" content="Page description" />
      </Helmet>
        <title>Ai Data Analytics - Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      

      {/* Hero Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h1 className="...">
              <span className="...">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="...">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="...">
              <button className="...">
        {/* Hero Section */} <section className="...">
          <div className="...">
            <div className="...">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
        <section>
        <div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="...">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Ai Data Analytics
              </h1>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
        </div>
      </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" /></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1>Ai Data Analytics;</h1>
            </h1>
            <p>Advanced AI-powered ai data analytics solution for modern businesses.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button>Get Started;</button>
              </button>
              <button>View Demo,</button>
                Get Started
              </button>
              <button></button>
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Why Choose Our Page?
            </h2>
            <p className="...">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="...">
            {features.map((feature, index) => (
              <div key={index} className="...">
                <div className="...">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Key Benefits
            </h2>
            <p className="...">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="...">
            {benefits.map((benefit, index) => (
              <div key={index} className="...">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Ready to Get Started?
            </h2>
            <p className="...">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>

        {/* Features Section */}
        <section className="...">
        </section>
        {/* Features Section */} <section className="...">
          <div className="...">
            <div className="...">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
        <section className="...">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="...">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">Ai Data Analytics
            <p className="...">
              Advanced AI-powered ai data analytics solution for modern businesses.
            <div className="...">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Get Started
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">View Demo
        {/* Features Section */}
        <section className="...">
          </section>< className=" />
            </div><div className="...">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </div>
      </section>
    </div>
      )
}
export default PagePage
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>Key Features;</h2>
              </h2>
              <p>Advanced AI technology that drives results;</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>
                    <feature />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description</p>}</p>
                  {feature.benefits && (
                    <ul>
                      {feature.benefits.map((benefit, idx) => (} <li>
                          <CheckCircle />

                          {benefit} </li>
                      ))}
                    </ul>
                  )}
      icon: Database,
      title: 'Data Integration'
      description: 'Connect and analyze data from multiple sources seamlessly'
      details: ['API Integrations', 'Database Connections', 'File Uploads', 'Cloud Storage'  ];
        }
    {
      icon: Shield,
      title: 'Enterprise Security'
      description: 'Bank-level security with full compliance and data protection'
      details: ['End-to-End Encryption', 'GDPR Compliance', 'SOC 2 Certified', 'Role-Based Access'  ];
        }
    {
      icon: Zap,
      title: 'Automated Reports'
      description: 'Generate comprehensive reports automatically on your schedule'
      details: ['Scheduled Reports', 'Custom Templates', 'Email Delivery', 'PDF Export'  ];
    }
    ];
  const pricingPlans = [
    {
      name: 'Starter'
      price: ''
      period: '/month'
      description: 'Perfect for small teams'
      features: [
        'Up to 1M data points'
        '5 data sources'
        'Basic AI insights'
        'Standard dashboards'
        'Email support'
        '1 user'
        ];
      popular: false
    },
    {
      name: 'Professional'
      price: ''
      period: '/month'
      description: 'Ideal for growing businesses'
      features: [
        'Up to 10M data points'
        'Unlimited data sources'
        'Advanced AI analytics'
        'Custom dashboards'
        'Priority support'
        '5 users'
        'API access'
        ];
      popular: true
    },
    {
      name: 'Enterprise'
      price: ',299'
      period: '/month'
      description: 'For large organizations'
      features: [
        'Unlimited data points'
        'Unlimited data sources'
        'Custom AI models'
        'White-label solution'
        'Dedicated support'
        'Unlimited users'
        'Custom integrations'
        'On-premise deployment'
        ];
      popular: false
    }
    ];
  const stats = [
    { value: '40%', label: 'Faster Decision Making', icon: <Clock className="w-8 h-8 text-green-400" />     }
    { value: '85%', label: 'Accuracy Improvement', icon: <Target className="w-8 h-8 text-blue-400" />     }
    { value: '60%', label: 'Cost Reduction', icon: <DollarSign className="w-8 h-8 text-purple-400" />     }
    { value: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-8 h-8 text-cyan-400" /> }
    ];
  const useCases = [
    {
      title: 'Sales Analytics'
      description: 'Track sales performance, identify top performers, and predict future revenue'
      icon: <TrendingUp className="w-8 h-8 text-green-400" />
        }
    {
      title: 'Customer Insights'
      description: 'Understand customer behavior, preferences, and lifetime value'
      icon: <Users className="w-8 h-8 text-blue-400" />
        }
    {
      title: 'Operational Efficiency'
      description: 'Optimize processes, reduce waste, and improve productivity'
      icon: <Zap className="w-8 h-8 text-yellow-400" />
        }
    {
      title: 'Financial Forecasting'
      description: 'Predict cash flow, budget planning, and financial performance'
      icon: <DollarSign className="w-8 h-8 text-purple-400" />
    }
    ];
  const testimonials = [
    {
      name: 'David Kim'
      role: 'Chief Data Officer, FinanceFlow'
      content: 'AI Data Analytics helped us identify M in cost savings opportunities within the first month.'
      rating: 5,
      company: 'FinanceFlow'
        }
    {
      name: 'Lisa Wang'
      role: 'VP Analytics, RetailMax'
      content: 'The predictive models are incredibly accurate. We can now forecast demand with 95% accuracy.'
      rating: 5,
      company: 'RetailMax'
        }
    {
      name: 'James Rodriguez'
      role: 'Head of BI, TechStart'
      content: 'Implementation was smooth and the insights are game-changing. ROI was achieved in 3 months.'
      rating: 5,
      company: 'TechStart'
    }
    ];
  return (
    <div className="...">
      <Navigation />
      
      {/* Hero Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h1 className="...">
              AI-Powered <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Data Analytics</span>
            </h1>
            <p className="...">
              Transform your data into actionable insights with advanced AI analytics. 
              Make smarter decisions, predict trends, and drive business growth.
            </p>
            <div className="...">
              <button className="...">
                Start Free Trial
              </button>
              <button className="...">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            {stats.map((stat, index) => (
              <div key={index} className="...">
                <div className="...">
                  {stat.icon}
                </div>
                <div className="...">
                  {stat.value}
                </div>
                <div className="...">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Advanced AI Analytics Features
            </h2>
            <p className="...">
              Powerful tools designed to extract maximum value from your data.
            </p>
          </div>
        </section>
        {/* Benefits Section */} <section className="...">
          <div className="...">
            <div className="...">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Key Features
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Advanced AI technology that drives results
            <div className="...">
              {features.map((feature, index) => (
                <div key={index} className="...">
                  <div className="...">
                    <feature.icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}
                  <p className="text-gray-300 mb-4">{feature.description}
                  {feature.benefits && (
                    <ul className="...">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="...">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>
                    <CheckCircle />
                  <p className="text-lg text-white font-medium">{benefit</p>}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

        {/* Benefits Section */}
        <section>
        <div>
            <div className="...">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" / /></div>
              {benefits.map((benefit, index) => ()
              ))}
        {/* CTA Section */}
        <section className="...">
          </section>< className=" />
            </div><div className="...">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          ))
        </section>

        {/* CTA Section */}
        <section>
        <div>
            <div className="...">
              <h2 className="...">
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2>Ready to Get Started?</h2>
              </h2>
              <p>Contact our experts to discuss your requirements and get started today.</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
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
      <Footer />

  )
}
export default AiDataAnalyticsPage
          <div className="...">
            {features.map((feature, index) => (
              <div key={index} className="...">
                <div className="...">
                  <div className="...">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="...">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="...">
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
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Use Cases
            </h2>
            <p className="...">
              See how AI analytics can transform different aspects of your business.
            </p>
          </div>
          
          <div className="...">
            {useCases.map((useCase, index) => (
              <div key={index} className="...">
                <div className="...">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Choose Your Plan
            </h2>
            <p className="...">
              Flexible pricing options to fit your data analytics needs.
            </p>
          </div>
          
          <div className="...">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                plan.popular ? 'ring-2 ring-cyan-400 bg-white/15' : ''
              }`}>
                {plan.popular && (
                  <div className="...">
                    <span className="...">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="...">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="...">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="...">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="...">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transform hover:scale-105' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Customer Success Stories
            </h2>
            <p className="...">
              See how companies are using AI analytics to drive growth.
            </p>
          </div>
          
          <div className="...">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="...">
                <div className="...">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="...">
        <div className="...">
          <h2 className="...">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="...">
            Start your free trial today and discover insights that will transform your business.
          </p>
          <div className="...">
            <button className="...">
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="...">
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
