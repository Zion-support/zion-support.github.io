'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Star,
  BarChart3,
  Receipt,
  CreditCard,
  PieChart
} from 'lucide-react';

const AIAccountingAssistantPage: React.FC = () => {
  const features = [
    {
      icon: Calculator,
      title: 'Automated Bookkeeping',
      description: 'AI-powered bookkeeping that categorizes transactions, reconciles accounts, and maintains accurate records',
      benefits: ['99% accuracy rate', 'Real-time processing', 'Auto-categorization', 'Bank reconciliation']
    },
    {
      icon: FileText,
      title: 'Tax Preparation',
      description: 'Automated tax preparation with compliance checking and optimization suggestions',
      benefits: ['Tax optimization', 'Compliance checking', 'Form generation', 'Deduction maximization']
    },
    {
      icon: BarChart3,
      title: 'Financial Reporting',
      description: 'Generate comprehensive financial reports with insights and recommendations',
      benefits: ['Real-time reports', 'Custom dashboards', 'Trend analysis', 'KPI tracking']
    },
    {
      icon: Receipt,
      title: 'Expense Management',
      description: 'Intelligent expense tracking with receipt scanning and approval workflows',
      benefits: ['Receipt scanning', 'Expense categorization', 'Approval workflows', 'Policy compliance']
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Ensure regulatory compliance with automated checks and enterprise-grade security',
      benefits: ['Regulatory compliance', 'Data encryption', 'Audit trails', 'Access controls']
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate repetitive accounting tasks and streamline financial processes',
      benefits: ['Process automation', 'Workflow optimization', 'Time savings', 'Error reduction']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses and freelancers with basic accounting needs',
      features: [
        'Up to 1,000 transactions/month',
        'Basic bookkeeping',
        'Tax preparation',
        'Expense tracking',
        'Email support',
        'Standard reporting',
        '99% uptime SLA'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses with complex accounting requirements',
      features: [
        'Up to 5,000 transactions/month',
        'Advanced bookkeeping',
        'Comprehensive tax prep',
        'Advanced expense management',
        'Priority support',
        'Advanced reporting',
        '99.5% uptime SLA',
        'API integration',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'Complete accounting solution for large organizations',
      features: [
        'Unlimited transactions',
        'AI-powered accounting',
        'Enterprise tax management',
        'Full automation suite',
        '24/7 dedicated support',
        'Enterprise reporting',
        '99.9% uptime SLA',
        'Custom AI training',
        'White-label options',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Small Businesses',
      description: 'Streamline accounting for small businesses with automated bookkeeping and tax preparation',
      metrics: 'Save 20 hours/week',
      icon: Calculator
    },
    {
      title: 'E-commerce',
      description: 'Handle complex e-commerce accounting with multi-channel sales tracking and inventory management',
      metrics: 'Reduce errors by 90%',
      icon: CreditCard
    },
    {
      title: 'Professional Services',
      description: 'Manage project-based accounting with time tracking and client billing automation',
      metrics: 'Improve cash flow by 35%',
      icon: FileText
    },
    {
      title: 'Manufacturing',
      description: 'Complex cost accounting with inventory management and production cost tracking',
      metrics: 'Optimize costs by 25%',
      icon: PieChart
    }
  ];

  const benefits = [
    {
      title: 'Save Time',
      description: 'Automate repetitive accounting tasks and focus on strategic financial decisions',
      value: '20 hours/week saved'
    },
    {
      title: 'Reduce Errors',
      description: 'AI-powered accuracy reduces human errors and ensures compliance',
      value: '90% fewer errors'
    },
    {
      title: 'Improve Cash Flow',
      description: 'Better financial insights and automated processes improve cash flow management',
      value: '35% better cash flow'
    },
    {
      title: 'Ensure Compliance',
      description: 'Automated compliance checking ensures you meet all regulatory requirements',
      value: '100% compliance'
    }
  ];

  const testimonials = [
    {
      name: 'David Martinez',
      company: 'Small Business Solutions',
      role: 'Owner',
      content: 'The AI accounting assistant has transformed my business. I save 25 hours per week and my books are always accurate and up-to-date.',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Jennifer Liu',
      company: 'E-commerce Plus',
      role: 'CFO',
      content: 'Handling multi-channel sales accounting used to be a nightmare. Now it\'s completely automated and 100% accurate.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Robert Thompson',
      company: 'Professional Services Inc',
      role: 'Accounting Manager',
      content: 'The tax preparation feature is incredible. We\'ve maximized our deductions and never missed a deadline.',
      rating: 5,
      avatar: '👨‍💻'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Accounting Assistant - Zion Tech Group | Automate Your Accounting with AI</title>
        <meta name="description" content="Automate your accounting with AI-powered bookkeeping, tax preparation, and financial reporting. Save 20 hours/week and reduce errors by 90%." />
        <meta name="keywords" content="AI accounting, automated bookkeeping, tax preparation, financial reporting, accounting software, expense management" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-accounting-assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text">
                AI Accounting Assistant
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Automate your accounting with AI-powered bookkeeping, tax preparation, and financial reporting. 
                Save 20 hours per week and reduce errors by 90% with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button w-full sm:w-auto text-center"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  📧 Start Free Trial
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">20</div>
                <div className="text-gray-300">Hours Saved/Week</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">90%</div>
                <div className="text-gray-300">Error Reduction</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">35%</div>
                <div className="text-gray-300">Better Cash Flow</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Comprehensive Accounting Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI-powered tools that handle every aspect of your accounting needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Proven Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your accounting operations with measurable improvements and better financial control
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-8 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-4">{benefit.value}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored accounting solutions for different business types and industries
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card hologram-card p-8">
                  <div className="flex items-start mb-6">
                    <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                      <useCase.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                      <p className="text-cyan-400 font-semibold">{useCase.metrics}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Simple Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your accounting needs. Start with a free trial.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card hologram-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600' 
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    Start Free Trial
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how businesses are transforming their accounting with AI
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card hologram-card p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Automate Your Accounting?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Start your free trial today and see how AI can revolutionize your accounting process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button w-full sm:w-auto text-center"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  📧 Start Free Trial
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
                <p>⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIAccountingAssistantPage;