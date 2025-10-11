'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import {Calculator, BarChart, Shield, Zap, CheckCircle, ArrowRight, Brain, Target, TrendingUp, FileText} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AIAccountingAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Calculator,
      title: 'Automated Bookkeeping',
      description: 'AI-powered bookkeeping that automatically categorizes transactions and maintains accurate records.',
      benefits: ['Transaction categorization', 'Receipt scanning', 'Expense tracking', 'Invoice processing']
    },
    {
      icon: BarChart,
      title: 'Financial Analytics',
      description: 'Advanced analytics and reporting to help you understand your financial performance.',
      benefits: ['Profit & loss reports', 'Cash flow analysis', 'Budget tracking', 'Financial forecasting']
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Ensure compliance with accounting standards and maintain the highest security standards.',
      benefits: ['Tax compliance', 'Audit trails', 'Data encryption', 'Regulatory reporting']
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Process transactions and generate reports in real-time for immediate insights.',
      benefits: ['Live data sync', 'Instant reporting', 'Real-time alerts', 'Automated workflows']
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictions based on your financial data.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Anomaly detection', 'Trend analysis']
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Set and track financial goals with AI-powered monitoring and suggestions.',
      benefits: ['Goal setting', 'Progress tracking', 'Milestone alerts', 'Achievement insights']
    }
  ]

  const services = [
    {
      title: 'Bookkeeping Automation',
      description: 'Complete automation of your bookkeeping processes with AI accuracy.',
      icon: Calculator,
      benefits: ['Transaction categorization', 'Receipt processing', 'Invoice management', 'Reconciliation']
    },
    {
      title: 'Financial Reporting',
      description: 'Comprehensive financial reports generated automatically from your data.',
      icon: BarChart,
      benefits: ['P&L statements', 'Balance sheets', 'Cash flow reports', 'Custom dashboards']
    },
    {
      title: 'Tax Preparation',
      description: 'Streamlined tax preparation with automated calculations and compliance checks.',
      icon: FileText,
      benefits: ['Tax calculations', 'Compliance monitoring', 'Document preparation', 'Filing assistance']
    },
    {
      title: 'Audit Support',
      description: 'Complete audit trail and documentation for regulatory compliance.',
      icon: Shield,
      benefits: ['Audit trails', 'Documentation', 'Compliance reports', 'Regulatory support']
    }
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and freelancers',
      features: [
        'Up to 100 transactions/month',
        'Basic reporting',
        'Email support',
        'Mobile app access'
      ]
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 1000 transactions/month',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom integrations'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited transactions',
        'Custom reporting',
        'Dedicated support',
        'White-label options',
        'On-premise deployment'
      ]
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <meta name="description" content="Revolutionary AI-powered accounting assistant that automates bookkeeping, financial reporting, and compliance for businesses of all sizes." /></meta>
        <meta name="keywords" content="AI accounting, automated bookkeeping, financial software, accounting assistant, business finance" /></meta>
      </Helmet>

      <Navigation /></Navigation>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></main>
        {/* Hero Section */}

              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
                Transform your accounting processes with our intelligent AI assistant. Automate bookkeeping, gain insights, and ensure compliance with ease.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center"></button>
                  Start Free Trial;
                  <ArrowRight className="w-5 h-5 ml-2" /></ArrowRight>
                </button>
                <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"></button>
                  Watch Demo;
                </button>
              </div>

          </div>
        </section>

        {/* Features Section */}
            </div>

      <Footer /></Footer>
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6"></div>
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4"></feature>
                  <h3 className="text-xl font-semibold text-white mb-3"></h3>
                  <p className="text-gray-300 mb-4"></p>
                  <ul className="space-y-2"></ul>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2"></CheckCircle>
                        {benefit}
                      </li>
                    )
    </>
  )
                  </ul>
              ))}
            </div>

        <section className="py-20 bg-gray-100"></section>
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"></h2>
                Why Choose Us;
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
                Tailored solutions for different business types;
              </p>

            <div className="></div>
    ,>
    d: grid-cols-2 l, g:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon;
                return (
                  <div key={index} className="text-center"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                      <Icon className="w-8 h-8 text-white"></Icon>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4"></h3>
                    <p className="text-gray-300"></p>
                  </div>

      <Footer /></Footer>
    </>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2"></ul>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300"></li>
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" /></CheckCircle>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

      <Footer /></Footer>
    </>
              ))}

            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Powerful Features;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Everything you need to manage your finances with AI precision;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"></div>
                    <div className="text-purple-400 mb-4"></div>
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
                Comprehensive accounting solutions powered by artificial intelligence;
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="text-center"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                      <Icon className="w-8 h-8 text-white" /></Icon>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <ul className="space-y-2"></ul>
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300"></li>
                          <CheckCircle className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0" /></CheckCircle>
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
                Choose the plan that fits your business needs;
              </p>
            </div>

      <Footer /></Footer>
    </>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3"></div>
                  <div className="flex-shrink-0"></div>
                    <Zap className="h-6 w-6 text-cyan-400" /></Zap>
                  </div>

      <Footer /></Footer>
    </>
                  <p className="text-gray-300">{benefit}</p>
                </div>

      <Footer /></Footer>
    </>
              ))}
            </div>

      <Footer /></Footer>
    </>
          </div>

      <Footer /></Footer>
    </>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Automate Your Accounting?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                Transform your data into actionable insights with our advanced AI analytics platform;
              </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"></button>
                Start Free Trial;
                <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"></button>
                Contact Sales;
              </button>
            </div>

      <Footer /></Footer>
    </>
  );
};
