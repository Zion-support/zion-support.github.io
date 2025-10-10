import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CreditCard, 
  TrendingUp, 
  PieChart, 
  Smartphone, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  DollarSign,
  Calendar,
  Receipt,
  BarChart3,
  Target,
  Users,
  Globe,
  Lock,
  Download,
  Upload,
  Bell,
  Settings,
  FileText,
  Camera,
  Mail,
  Phone,
  MapPin,
  Clock
} from 'lucide-react';

export default function AIExpenseTrackerPage() {
  const features = [
    {
      icon: Camera,
      title: 'Smart Receipt Scanning',
      description: 'AI-powered OCR automatically extracts data from receipts, invoices, and bills with 99.5% accuracy',
      benefit: 'Save 2-3 hours per week on manual data entry'
    },
    {
      icon: PieChart,
      title: 'Intelligent Categorization',
      description: 'Machine learning automatically categorizes expenses and learns from your patterns',
      benefit: 'Reduce categorization errors by 95%'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI forecasts spending patterns and suggests budget optimizations',
      benefit: 'Save 15-25% on unnecessary expenses'
    },
    {
      icon: BarChart3,
      title: 'Real-time Insights',
      description: 'Advanced analytics dashboard with actionable business intelligence',
      benefit: 'Make data-driven decisions instantly'
    },
    {
      icon: Shield,
      title: 'Fraud Detection',
      description: 'AI monitors transactions for suspicious patterns and alerts',
      benefit: 'Prevent financial fraud and unauthorized spending'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Native mobile apps with offline sync and instant processing',
      benefit: 'Track expenses anywhere, anytime'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 transactions/month',
        'Basic AI categorization',
        'Receipt scanning (50/month)',
        'Standard reports',
        'Email support',
        'Mobile app access'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Most popular for growing businesses',
      features: [
        'Up to 10,000 transactions/month',
        'Advanced AI categorization',
        'Unlimited receipt scanning',
        'Advanced analytics & insights',
        'Fraud detection alerts',
        'Priority support',
        'API access',
        'Team collaboration (5 users)'
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
        'Custom AI models',
        'Advanced fraud detection',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 phone support',
        'White-label options',
        'Unlimited team members',
        'Advanced compliance tools'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CFO, TechStart Inc.',
      content: 'AI Expense Tracker reduced our expense processing time by 80% and helped us identify $50K in savings opportunities.',
      rating: 5,
      company: 'TechStart Inc.'
    },
    {
      name: 'Michael Chen',
      role: 'Finance Director, Global Corp',
      content: 'The predictive analytics feature is incredible. We can now forecast our quarterly expenses with 95% accuracy.',
      rating: 5,
      company: 'Global Corp'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Small Business Owner',
      content: 'Finally, an expense tracker that actually understands my business. The AI categorization is spot-on every time.',
      rating: 5,
      company: 'Rodriguez Consulting'
    }
  ];

  const integrations = [
    { name: 'QuickBooks', logo: 'QB' },
    { name: 'Xero', logo: 'X' },
    { name: 'Sage', logo: 'S' },
    { name: 'Stripe', logo: 'S' },
    { name: 'PayPal', logo: 'PP' },
    { name: 'Bank APIs', logo: '🏦' },
    { name: 'Slack', logo: 'S' },
    { name: 'Microsoft Teams', logo: 'MT' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Expense Tracker - Intelligent Financial Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered expense tracking with smart receipt scanning, predictive analytics, and fraud detection. Start your free trial today!" />
        <meta name="keywords" content="AI expense tracker, financial management, receipt scanning, expense analytics, business intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-expense-tracker" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="absolute inset-0 cyber-grid-enhanced"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text-enhanced neon-pulse">
              AI Expense Tracker
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Revolutionary AI-powered expense management that learns from your business patterns, 
              automates categorization, and provides predictive insights to optimize your finances.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">99.5% OCR Accuracy</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Bank-Level Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Save 15-25% on Expenses</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="neon-button-enhanced hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="/demo"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-bold hover:bg-cyan-400 hover:text-slate-900 transition-colors inline-flex items-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Intelligent Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Powered by advanced AI and machine learning to transform your expense management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="futuristic-card-enhanced p-6 group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="bg-cyan-500/10 p-3 rounded-lg">
                  <p className="text-cyan-400 text-sm font-medium">{feature.benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`futuristic-card-enhanced p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full text-center py-3 px-6 rounded-lg font-bold transition-all ${
                    plan.popular
                      ? 'neon-button-enhanced'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by 10,000+ Businesses
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See what our customers say about AI Expense Tracker
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="futuristic-card-enhanced p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite business tools and accounting software
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="futuristic-card p-6 text-center group hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold">{integration.logo}</span>
                </div>
                <div className="text-white font-medium">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Expense Management?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already saving time and money with AI-powered expense tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/demo"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-300">
            <p className="mb-4">
              <strong>Contact us:</strong> <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 (302) 464-0950</a> | 
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 ml-2">kleber@ziontechgroup.com</a>
            </p>
            <p className="text-sm">
              364 E Main St STE 1008, Middletown, DE 19709 | <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">ziontechgroup.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}