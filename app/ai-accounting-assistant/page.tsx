import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Calculator,
  FileText,
  BarChart3,
  Shield,
  Clock,
  TrendingUp,
  DollarSign,
  Receipt,
  CreditCard,
  PieChart,
  Target,
  Zap,
  Smartphone,
  Globe,
  Users,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AIAccountingAssistantPage: React.FC = () => {
  const features = [
    {
      icon: <Calculator className="w-6 h-6 text-green-400" />,
      title: 'Automated Bookkeeping',
      description: 'AI-powered transaction categorization and reconciliation',
      benefits: ['Save 20+ hours monthly', '99.9% accuracy', 'Real-time processing']
    },
    {
      icon: <Receipt className="w-6 h-6 text-blue-400" />,
      title: 'Smart Receipt Processing',
      description: 'OCR technology extracts data from receipts and invoices',
      benefits: ['Instant data entry', 'Multi-format support', 'Tax compliance ready']
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: 'Financial Analytics',
      description: 'Advanced reporting and insights for better decision making',
      benefits: ['Custom dashboards', 'Predictive analytics', 'ROI tracking']
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: 'Tax Compliance',
      description: 'Automated tax calculations and filing assistance',
      benefits: ['Multi-jurisdiction support', 'Audit trail', 'Deadline reminders']
    },
    {
      icon: <CreditCard className="w-6 h-6 text-orange-400" />,
      title: 'Expense Management',
      description: 'Track and categorize business expenses automatically',
      benefits: ['Policy enforcement', 'Approval workflows', 'Spend analytics']
    },
    {
      icon: <PieChart className="w-6 h-6 text-cyan-400" />,
      title: 'Budget Planning',
      description: 'AI-driven budget forecasting and variance analysis',
      benefits: ['Smart predictions', 'Scenario planning', 'Cost optimization']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for freelancers and small businesses',
      features: [
        'Up to 100 transactions/month',
        'Basic reporting',
        'Email support',
        'Mobile app access',
        'Bank integration (2 accounts)',
        'Receipt scanning (50/month)'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 1,000 transactions/month',
        'Advanced analytics',
        'Priority support',
        'Multi-user access (5 users)',
        'Bank integration (10 accounts)',
        'Receipt scanning (500/month)',
        'Tax preparation tools',
        'Custom reporting'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited transactions',
        'Full AI suite',
        '24/7 dedicated support',
        'Unlimited users',
        'Unlimited bank accounts',
        'Unlimited receipt scanning',
        'Advanced tax compliance',
        'Custom integrations',
        'White-label options'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CFO',
      content: 'AI Accounting Assistant reduced our bookkeeping time by 80%. The accuracy is incredible and the insights help us make better financial decisions.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Michael Chen',
      company: 'Global Enterprises',
      role: 'Accounting Manager',
      content: 'The automated categorization and tax compliance features are game-changers. We save hours every week and our accuracy has improved significantly.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateCorp',
      role: 'Finance Director',
      content: 'The predictive analytics and budget planning tools have transformed how we approach financial planning. Highly recommended for any business.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const integrations = [
    { name: 'QuickBooks', logo: 'QB' },
    { name: 'Xero', logo: 'X' },
    { name: 'Stripe', logo: 'S' },
    { name: 'PayPal', logo: 'PP' },
    { name: 'Bank of America', logo: 'BOA' },
    { name: 'Chase', logo: 'C' },
    { name: 'Wells Fargo', logo: 'WF' },
    { name: 'Square', logo: 'SQ' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Accounting Assistant - Automated Bookkeeping & Financial Management | Zion Tech Group</title>
        <meta name="description" content="Transform your accounting with our AI-powered assistant. Automated bookkeeping, receipt processing, tax compliance, and financial analytics. Start your free trial today." />
        <meta name="keywords" content="AI accounting, automated bookkeeping, financial management, receipt processing, tax compliance, business accounting software" />
        <meta property="og:title" content="AI Accounting Assistant - Automated Bookkeeping & Financial Management" />
        <meta property="og:description" content="Transform your accounting with our AI-powered assistant. Automated bookkeeping, receipt processing, tax compliance, and financial analytics." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-accounting-assistant" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-accounting-assistant" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
              <Calculator className="w-4 h-4 mr-2" />
              AI-Powered Accounting Solution
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Accounting
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                {' '}Assistant
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Automate your bookkeeping, streamline expense management, and gain powerful financial insights 
              with our intelligent accounting assistant powered by advanced AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/25 flex items-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#pricing"
                className="border-2 border-white/30 hover:border-green-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                View Pricing
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
                <div className="text-gray-300 text-sm">Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for Modern Accounting
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI accounting assistant combines cutting-edge technology with user-friendly design 
              to revolutionize your financial management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-700/50 rounded-xl p-8 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group">
                <div className="mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-green-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
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

      {/* Integrations Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and services for a complete accounting ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">{integration.logo}</span>
                </div>
                <div className="text-gray-300 font-medium text-sm">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include 14-day free trial and no setup fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-700/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-green-500 bg-slate-600/50' : ''
              }`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white'
                      : 'border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of businesses that have transformed their accounting with our AI assistant.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-green-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Accounting?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses using our AI accounting assistant to streamline their financial management 
            and make better business decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AIAccountingAssistantPage;