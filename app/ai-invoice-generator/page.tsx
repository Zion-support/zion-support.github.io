'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FileText, 
  Calculator, 
  CreditCard, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Globe, 
  Smartphone, 
  Laptop, 
  Database, 
  AlertTriangle,
  ArrowRight,
  Download,
  Upload,
  Settings,
  Bell,
  Shield,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  Brain,
  Activity,
  Eye,
  EyeOff,
  Target,
  BarChart3,
  DollarSign,
  Receipt,
  Send,
  Edit,
  Trash2,
  Copy,
  Share
} from 'lucide-react';

const AIInvoiceGeneratorPro: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('features');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      category: 'AI-Powered Generation',
      items: [
        'Smart invoice template selection',
        'Automatic pricing suggestions',
        'Tax calculation and compliance',
        'Multi-currency support',
        'Recurring invoice automation',
        'Payment term optimization'
      ]
    },
    {
      category: 'Professional Templates',
      items: [
        '50+ customizable templates',
        'Brand customization options',
        'Logo and branding integration',
        'Professional layouts',
        'Mobile-responsive designs',
        'Print-ready formats'
      ]
    },
    {
      category: 'Payment & Tracking',
      items: [
        'Online payment integration',
        'Payment status tracking',
        'Automated payment reminders',
        'Late payment handling',
        'Payment analytics',
        'Revenue reporting'
      ]
    },
    {
      category: 'Business Management',
      items: [
        'Client management system',
        'Project tracking',
        'Expense management',
        'Time tracking integration',
        'Financial reporting',
        'Tax preparation tools'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for freelancers and small businesses',
      features: [
        'Up to 50 invoices per month',
        'Basic AI features',
        '5 invoice templates',
        'Payment tracking',
        'Email delivery',
        'Mobile app access',
        'Email support'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'For growing businesses and agencies',
      features: [
        'Everything in Starter',
        'Unlimited invoices',
        'Advanced AI features',
        'All 50+ templates',
        'Advanced analytics',
        'Team collaboration (5 users)',
        'Priority support',
        'API access'
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
        'Everything in Professional',
        'Unlimited team members',
        'Custom integrations',
        'White-label solution',
        'Dedicated support',
        'On-premise deployment',
        'Custom reporting',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: '90% Time Savings',
      description: 'Automated invoice generation saves hours of manual work'
    },
    {
      icon: DollarSign,
      title: '30% Faster Payments',
      description: 'Professional invoices lead to quicker payments'
    },
    {
      icon: Shield,
      title: 'Tax Compliant',
      description: 'Automatic tax calculations ensure compliance'
    },
    {
      icon: BarChart3,
      title: 'Better Cash Flow',
      description: 'Advanced analytics help optimize revenue'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Thompson',
      role: 'Freelance Designer, CreativeStudio',
      content: 'AI Invoice Generator Pro has saved me 10+ hours per week. The AI suggestions are spot-on and my clients love the professional invoices.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, TechStartup',
      content: 'The automated recurring invoices and payment tracking have improved our cash flow by 40%. Highly recommended!',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Accountant, FinancePro',
      content: 'The tax compliance features and reporting tools make my job so much easier. Our clients are impressed with the professional invoices.',
      rating: 5
    }
  ];

  const invoiceTypes = [
    { name: 'Service Invoices', count: '15,000+', icon: FileText },
    { name: 'Product Invoices', count: '12,000+', icon: Receipt },
    { name: 'Recurring Bills', count: '8,500+', icon: Clock },
    { name: 'Project Invoices', count: '6,200+', icon: Target },
    { name: 'Consulting Fees', count: '9,800+', icon: Users },
    { name: 'Subscription Billing', count: '11,300+', icon: CreditCard }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>AI Invoice Generator Pro - Automated Invoice Creation | Zion Tech Group</title>
        <meta name="description" content="Create professional invoices with AI Invoice Generator Pro. Automated generation, payment tracking, and tax compliance. Save 90% of billing time." />
        <meta name="keywords" content="invoice generator, AI billing, invoice automation, payment tracking, tax compliance, business invoicing" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-invoice-generator" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4 mr-2" />
              AI-Powered Billing
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Invoice Generator
              <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create professional invoices in seconds with AI-powered automation. 
              Save 90% of billing time with smart templates, payment tracking, and tax compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales
              </button>
            </div>
          </div>

          {/* Invoice Types */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {invoiceTypes.map((type, index) => (
              <div key={index} className="text-center bg-slate-800/50 rounded-xl p-6">
                <type.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-lg font-semibold text-white mb-1">{type.name}</div>
                <div className="text-sm text-gray-400">{type.count} generated</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Billing Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to streamline your invoicing process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((category, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-8 border border-slate-700">
                <h3 className="text-xl font-semibold text-green-400 mb-6">{category.category}</h3>
                <ul className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Billing-Focused Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your invoicing needs. All plans include 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800 rounded-xl p-8 border-2 ${
                plan.popular ? 'border-green-400' : 'border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                    : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI Invoice Generator Pro?
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of businesses who trust our AI for their invoicing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Business Professionals
            </h2>
            <p className="text-xl text-gray-300">
              See what our users say about AI Invoice Generator Pro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-green-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Streamline Your Invoicing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 30,000+ businesses who trust AI Invoice Generator Pro for their billing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center">
              <Download className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300 flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300">
              Have questions about our AI invoicing platform? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300 mb-2">+1 302 464 0950</p>
              <p className="text-sm text-gray-400">24/7 Support Available</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300 mb-2">kleber@ziontechgroup.com</p>
              <p className="text-sm text-gray-400">Primary Contact</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300 mb-2">364 E Main St STE 1008</p>
              <p className="text-sm text-gray-400">Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIInvoiceGeneratorPro;