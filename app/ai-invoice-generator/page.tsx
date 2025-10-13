  const features = [
const features = [
import Navigation from '../components
import Footer from '../components
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';
;
const AiInvoiceGeneratorPage: React.FC = () => {
const features = [
];
};
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'AI-Powered Generation',
      description: 'Automatically generate professional invoices with smart data extraction and formatting'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: 'Automated Billing',
      description: 'Set up recurring invoices and automated payment reminders to streamline your billing process'
    },
    {
      icon: <CreditCard className="w-6 h-6 text-yellow-400" />,
      title: 'Payment Integration',
      description: 'Accept payments directly through invoices with integrated payment gateways'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: 'Financial Analytics',
      description: 'Track revenue, outstanding payments, and financial performance with detailed reports'
    }
  ]

  const invoiceFeatures = [
    {
      category: 'Invoice Creation',
      items: ['AI Template Generation', 'Custom Branding', 'Multi-currency Support', 'Tax Calculations', 'Line Item Management', 'Discount Application']
    },
    {
      category: 'Automation',
      items: ['Recurring Invoices', 'Auto-reminders', 'Payment Tracking', 'Status Updates', 'Expense Integration', 'Time Tracking']
    },
    {
      category: 'Payment Processing',
      items: ['Online Payments', 'Credit Card Processing', 'Bank Transfers', 'Payment Links', 'Mobile Payments', 'International Payments']
    },
    {
      category: 'Reporting',
      items: ['Revenue Reports', 'Outstanding Invoices', 'Payment History', 'Tax Reports', 'Client Analytics', 'Export Options']
    }
const benefits = [
];
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for freelancers and small businesses',
      features: [
        'Up to 50 invoices/month',
        'Basic AI features',
        'Standard templates',
        'Email support',
        'Basic reporting',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 500 invoices/month',
        'Advanced AI features',
        'Custom branding',
        'Priority support',
        'Advanced reporting',
        'Payment integration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited invoices',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Mark Thompson',
      company: 'Freelance Designer',
      content: 'AI Invoice Generator saves me 5 hours per week. The automated reminders ensure I get paid on time.',
      rating: 5
    },
    {
      name: 'Sarah Wilson',
      company: 'Consulting Firm',
      content: 'Professional invoices with zero effort. Our clients love the automated payment options.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Service Provider',
      content: 'The financial analytics help us track our business performance. Highly recommended!',
      rating: 5
    }
  ]

  return (
    <Layout
      title="AI Invoice Generator - Automated Invoice Creation | Zion Tech Group"
      description="Transform your invoicing with AI-powered generation, automated billing, and payment integration. Create professional invoices in seconds. Start your free trial today."
      keywords="invoice generator, automated billing, invoice software, payment processing, financial management, invoice automation"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
                <FileText className="w-4 h-4 mr-2" />
                AI-Powered Invoicing
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                AI Invoice Generator
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your invoicing with AI-powered generation, automated billing, and payment integration. 
                Create professional invoices in seconds and get paid faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-emerald-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="#demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Try Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Intelligent Invoice Management
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                AI-powered features that streamline your invoicing and payment process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Invoice Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Complete Invoice Solution
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Everything you need to manage invoices and payments efficiently
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {invoiceFeatures.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.category}</h3>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
  ];
  return (
    <React .Fragment>
      <Helmet>
        <title>Ai Invoice Generator - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" /></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Ai Invoice Generator</h1>
            <p>
              Advanced AI-powered ai invoice generator solution for modern businesses.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">Get Started
              </button>
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">View Demo,
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p>
                Advanced AI technology that drives results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {
    feature.benefits && (
                    <ul>
                      {feature.benefits.map((benefit, idx) => (
  }
                        <li>
                          <CheckCircle>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Simple Pricing Plans
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your invoicing needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-emerald-400/40 scale-105 shadow-2xl shadow-emerald-500/20' 
                    : 'border-emerald-500/20 hover:border-emerald-400/40'
                }`}>
                  {plan.popular && (
                    <div className="inline-flex items-center px-3 py-1 bg-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-4">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-500 to-purple-600 text-white hover:from-emerald-600 hover:to-purple-700'
                        : 'border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Trusted by Businesses Worldwide
              </h2>
              <p className="text-gray-300">
                See how our AI Invoice Generator transforms billing processes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                    <CheckCircle>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
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
      <Footer />

  );
};

export default AiInvoiceGeneratorPage;
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
}
