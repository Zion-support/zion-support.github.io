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
      benefits: ['Transaction categorization', 'Receipt scanning', 'Expense tracking', 'Invoice processing']} ,
    { icon: BarChart,
      title: 'Financial Analytics',
      description: 'Advanced analytics and reporting to help you understand your financial performance.',
      benefits: ['Profit & loss reports', 'Cash flow analysis', 'Budget tracking', 'Financial forecasting']} ,
    { icon: Shield,
      title: 'Compliance & Security',
      description: 'Ensure compliance with accounting standards and maintain the highest security standards.',
      benefits: ['Tax compliance', 'Audit trails', 'Data encryption', 'Regulatory reporting']} ,
    { icon: Zap,
      title: 'Real-Time Processing',
      description: 'Process financial data in real-time for up-to-date insights and decision making.',
      benefits: ['Live updates', 'Instant reporting', 'Real-time alerts', 'Automated workflows']} ,
    { icon: Brain,
      title: 'Intelligent Insights',
      description: 'AI-driven insights and recommendations to optimize your financial management.',
      benefits: ['Spending analysis', 'Cost optimization', 'Revenue insights', 'Predictive analytics']} ,
    { icon: Target,
      title: 'Goal Tracking',
      description: 'Set and track financial goals with AI-powered monitoring and recommendations.',
      benefits: ['Goal setting', 'Progress tracking', 'Milestone alerts', 'Achievement insights']} ]

  const capabilities = [
    { title: 'Invoice Management',
      description: 'Automated invoice processing, approval workflows, and payment tracking.',
      icon: FileText,
      benefits: ['Invoice scanning', 'Approval workflows', 'Payment tracking', 'Vendor management']} ,
    { title: 'Expense Management',
      description: 'Streamlined expense reporting and reimbursement processes.',
      icon: TrendingUp,
      benefits: ['Expense categorization', 'Receipt capture', 'Policy compliance', 'Reimbursement processing']} ,
    { title: 'Financial Reporting',
      description: 'Comprehensive financial reports and dashboards for better decision making.',
      icon: BarChart,
      benefits: ['Custom reports', 'Interactive dashboards', 'Data visualization', 'Export capabilities']} ,
    { title: 'Tax Preparation',
      description: 'Automated tax calculations and preparation assistance.',
      icon: Calculator,
      benefits: ['Tax calculations', 'Deduction optimization', 'Form generation', 'Filing assistance']} ]

  const pricingTiers = [
    { name: 'Basic',
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
      popular: false} ,
    { name: 'Professional',
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
      popular: true} ,
    { name: 'Enterprise',
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
      popular: false} ]

  return (
    <>
      <Helmet />
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />
      </Helmet>
      <Navigation />
      <div>
      <Helmet />
        <title>AI Accounting Assistant - Zion Tech Group</title>
        <meta name="description" content="Streamline your accounting with our AI-powered assistant. Automated bookkeeping, financial analytics, and compliance management."
      </Helmet>
      
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        {/* Hero Section */}

        <section className="
    g: px-8"
          <div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"
                Transform your accounting processes with our intelligent AI assistant. Automate bookkeeping, gain insights, and ensure compliance with ease.
              </p>
              <div>
                <button className="
    ,
    r: bg-purple-400 hove, r: text-white transition-all duration-300"
                  Watch Demo
                </button>
              </div>
      
      <Footer />
    </>
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        {/* Features Section */}

            </div>
      
      <Footer />
    </>
            <div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
                  <feature.icon className="w-12 h-12 text-purple-400 mb-4"
                  <h3 className="text-xl font-semibold text-white mb-3"
                  <p className="text-gray-300 mb-4"
                  <ul className="space-y-2"
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300"
                        <CheckCircle />
                        {benefit}

                      </li>
                    )
    </>
  )
                  </ul>
              ))}

            </div>

        <section className="py-20 bg-gray-100"
          <div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto"
                Tailored solutions for different business types
              </p>
            
            <div className="
    ,
    d: grid-cols-2 l, g: grid-cols-4 gap-8"
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon
                return (
    <div>
                    <h3 className="text-xl font-semibold text-white mb-4"
                    <p className="text-gray-300"
                  </div>
      
      <Footer />
    </>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle />
                        {benefit}

                      </li>
                    ))}

                  </ul>
                </div>
      
      <Footer />
    </>
              ))}

        <section className="py-20 px-4 sm: px-6 lg: px-8">
          <div>
          <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Accounting Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Advanced AI technology for modern accounting needs
              </p>
            </div>
      
      <Footer />
    </>
            <div>
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
    <div>
          <div>
                      <Icon />
                    </div>
      
      <Footer />
    </>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle />
                          {benefit}

                        </li>
                      ))}

                    </ul>
                  </div>
      
      <Footer />
    </>
                )
              })}

            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        {/* Use Cases Section */}

        <section className="py-20 px-4 sm: px-6 lg: px-8 bg-slate-800/50">
          <div>
          <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Perfect For
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Tailored solutions for different business types
              </p>
            </div>
      
      <Footer />
    </>
            <div>
              {useCases.map((useCase, index) => {
                const Icon = useCase.icon
                return (
    <div>
          <div>
                      <Icon />
                    </div>
      
      <Footer />
    </>
                    <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
      
      <Footer />
    </>
                )
              })}

            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        {/* Benefits Section */}

        <section className="py-20 px-4 sm: px-6 lg: px-8">
          <div>
          <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Accounting Assistant?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Transform your accounting workflow with intelligent automation
              </p>
            </div>
      
      <Footer />
    </>
            <div>
              {benefits.map((benefit, index) => (
                <div>
          <div>
                    <Zap />
                  </div>
      
      <Footer />
    </>
                  <p className="text-gray-300">{benefit}</p>
                </div>
      
      <Footer />
    </>
              ))}

            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        {/* CTA Section */}

        <section className="py-20 px-4 sm: px-6 lg: px-8">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Automate Your Accounting?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our advanced AI analytics platform
              </p>
            <div>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>
      </div>
      
      <Footer />
    </>
      <Footer />
    </>
  );
};

export default AiAccountingAssistantPage;
