'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ChartBarIcon, 
  CheckCircleIcon,
  StarIcon,
  SparklesIcon,
  CpuChipIcon,
  ReceiptRefundIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';

const ExpenseTrackerProPage: React.FC = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Categorization',
      description: 'Automatically categorize expenses using machine learning that learns from your spending patterns.',
      benefits: ['95% accuracy rate', 'Automatic categorization', 'Learning algorithms', 'Custom rules']
    },
    {
      icon: ChartBarIcon,
      title: 'Smart Analytics',
      description: 'Get insights into your spending habits with predictive analytics and budget recommendations.',
      benefits: ['Spending predictions', 'Budget optimization', 'Trend analysis', 'Financial health score']
    },
    {
      icon: ReceiptRefundIcon,
      title: 'Receipt Management',
      description: 'Scan and store receipts with OCR technology for easy expense tracking and tax preparation.',
      benefits: ['OCR receipt scanning', 'Cloud storage', 'Tax categorization', 'Expense verification']
    },
    {
      icon: BanknotesIcon,
      title: 'Multi-Currency Support',
      description: 'Track expenses in multiple currencies with real-time exchange rates and automatic conversions.',
      benefits: ['150+ currencies', 'Real-time rates', 'Auto conversion', 'Travel expenses']
    }
  ];

  const pricingPlans = [
    {
      name: 'Personal',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Unlimited transactions',
        'Basic categorization',
        'Mobile app access',
        'Email support',
        '5GB receipt storage'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$19',
      period: '/month',
      description: 'Ideal for freelancers',
      features: [
        'AI categorization',
        'Advanced analytics',
        'Receipt scanning',
        'Priority support',
        '50GB receipt storage',
        'Tax reports',
        'Multi-currency'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: '$49',
      period: '/month',
      description: 'For small businesses',
      features: [
        'Team collaboration',
        'Custom categories',
        'API access',
        'Dedicated support',
        'Unlimited storage',
        'Advanced reporting',
        'Integration support'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'Bank Accounts', description: 'Connect to 10,000+ banks worldwide' },
    { name: 'Credit Cards', description: 'Sync with all major credit card providers' },
    { name: 'PayPal', description: 'Automatic PayPal transaction import' },
    { name: 'Stripe', description: 'Business payment integration' },
    { name: 'QuickBooks', description: 'Seamless accounting software sync' },
    { name: 'Xero', description: 'Cloud accounting integration' },
    { name: 'Tax Software', description: 'Export to TurboTax, H&R Block' },
    { name: 'Excel/CSV', description: 'Import/export data in any format' }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'Freelance Consultant',
      role: 'Independent Contractor',
      content: 'Expense Tracker Pro has revolutionized how I manage my business expenses. The AI categorization saves me hours every month.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'Small Business Owner',
      role: 'Restaurant Owner',
      content: 'The receipt scanning feature is incredible. I can just snap a photo and everything is automatically categorized and stored.',
      rating: 5
    },
    {
      name: 'John Smith',
      company: 'Digital Nomad',
      role: 'Remote Worker',
      content: 'Multi-currency support is perfect for my international travels. The real-time exchange rates make expense tracking effortless.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="Expense Tracker Pro - AI-Powered Expense Management | Zion Tech Group"
        description="Streamline expense tracking with AI-powered categorization, receipt scanning, and smart analytics. Perfect for individuals and businesses."
        keywords="expense tracker, expense management, receipt scanning, AI categorization, financial tracking, budget management"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-slate-900 to-teal-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <SparklesIcon className="w-5 h-5 text-emerald-400 mr-2" />
                <span className="text-emerald-300 text-sm font-medium">AI-Powered Expense Management</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Expense Tracker Pro
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Take control of your finances with AI-powered expense tracking, receipt scanning, and smart analytics.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-emerald-400 text-emerald-300 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">95%</div>
                  <div className="text-gray-300 text-sm">AI Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">150+</div>
                  <div className="text-gray-300 text-sm">Currencies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">10K+</div>
                  <div className="text-gray-300 text-sm">Banks</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">OCR</div>
                  <div className="text-gray-300 text-sm">Receipt Scan</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage your expenses efficiently and gain valuable financial insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Seamless Integrations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite financial tools and services for a complete expense management solution.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {integration.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {integration.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your expense tracking needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-emerald-500 shadow-emerald-500/20' 
                    : 'border-slate-700 hover:border-emerald-500 hover:shadow-emerald-500/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-emerald-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700'
                      : 'border-2 border-emerald-400 text-emerald-300 hover:bg-emerald-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                What Our <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of users who trust Expense Tracker Pro for their financial management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-900/40 via-slate-900 to-teal-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Ready to Take Control of Your Expenses?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-powered expense management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-emerald-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ExpenseTrackerProPage;