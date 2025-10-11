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
    {icon: BarChart,
      title: 'Financial Analytics',
      description: 'Advanced analytics and reporting to help you understand your financial performance.',
      benefits: ['Profit & loss reports', 'Cash flow analysis', 'Budget tracking', 'Financial forecasting']},
    {icon: Shield,
      title: 'Compliance & Security',
      description: 'Ensure compliance with accounting standards and maintain the highest security standards.',
      benefits: ['Tax compliance', 'Audit trails', 'Data encryption', 'Regulatory reporting']},
    {icon: Zap,
      title: 'Real-Time Processing',
      description: 'Process financial data in real-time for up-to-date insights and decision making.',
      benefits: ['Live updates', 'Instant reporting', 'Real-time alerts', 'Automated workflows']},
    {icon: Brain,
      title: 'Intelligent Insights',
      description: 'AI-driven insights and recommendations to optimize your financial management.',
      benefits: ['Spending analysis', 'Cost optimization', 'Revenue insights', 'Predictive analytics']},
    {icon: Target,
      title: 'Goal Tracking',
      description: 'Set and track financial goals with AI-powered monitoring and recommendations.',
      benefits: ['Goal setting', 'Progress tracking', 'Milestone alerts', 'Achievement insights']}
  ]
  const capabilities = [
    {title: 'Invoice Management',
      description: 'Automated invoice processing, approval workflows, and payment tracking.',
      icon: FileText,
      benefits: ['Invoice scanning', 'Approval workflows', 'Payment tracking', 'Vendor management']},
    {title: 'Expense Management',
      description: 'Streamlined expense reporting and reimbursement processes.',
      icon: TrendingUp,
      benefits: ['Expense categorization', 'Receipt capture', 'Policy compliance', 'Reimbursement processing']},
    {title: 'Financial Reporting',
      description: 'Comprehensive financial reports and dashboards for better decision making.',
      icon: BarChart,
      benefits: ['Custom reports', 'Interactive dashboards', 'Data visualization', 'Export capabilities']},
    {title: 'Tax Preparation',
      description: 'Automated tax calculations and preparation assistance.',
      icon: Calculator,
      benefits: ['Tax calculations', 'Deduction optimization', 'Form generation', 'Filing assistance']}
  ]
  const pricingTiers = [
    {name: 'Basic',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and freelancers',
      features: [
        'Up to 100 transactions/month',
        'Basic reporting',
        'Email support',
        'Mobile app access',
        'Cloud storage'
      ],
      popular: false},
    {name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 1000 transactions/month',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom reports',
        'Multi-user access'
      ],
      popular: true},
    {name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored for large organizations',
      features: [
        'Unlimited transactions',
        'Custom integrations',
        'Dedicated support',
        'On-premise deployment',
        'Advanced security',
        'Custom workflows'
      ],
      popular: false}
  ]
  return (
    <>
<Helmet>
        <title>AI Accounting Assistant - Zion Tech Group</title>
        <meta name="description" content="Streamline your accounting with our AI-powered assistant. Automated bookkeeping, financial analytics, and compliance management." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">AI Accounting Assistant</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your accounting processes with our intelligent AI assistant. Automate bookkeeping, gain insights, and ensure compliance with ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Powerful AI Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage advanced AI technology to automate and optimize your accounting processes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    )
    </>
  )
                  </ul>
                </div>
              ))}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Accounting Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced AI technology for modern accounting needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="text-cyan-400 mb-4">
                      <Icon className="h-8 w-8" />
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
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect For
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Tailored solutions for different business types
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Comprehensive Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage your finances efficiently and accurately.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <capability.icon className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-300 mb-4">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pricing Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your accounting needs. Start free and scale as you grow.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 relative ${tier.popular ? 'ring-2 ring-purple-400' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{tier.price}</span>
                      <span className="text-gray-300 ml-1">{tier.period}</span>
                    </div>
                    <p className="text-gray-300 mt-2">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600' 
                      : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                  }`}>
                    {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Accounting?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI accounting assistant to streamline their financial management.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center mx-auto">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
export default AIAccountingAssistantPage
                          </Footer>
                        </ArrowRight>
                      </CheckCircle>
                    </CheckCircle>
                  </Icon>
                </CheckCircle>
              </Icon>
            </CheckCircle>
          </div>
        </div>
      </section>
    </ArrowRight>
  </Navigation>