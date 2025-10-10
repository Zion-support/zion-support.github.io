import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FileText, 
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
  CreditCard,
  Smartphone,
  Shield,
  PieChart,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Edit,
  Trash2,
  Copy,
  Eye,
  Plus,
  Minus,
  Calculator
} from 'lucide-react';

export default function AIInvoiceGeneratorPage() {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Generation',
      description: 'Generate professional invoices in seconds using natural language processing and smart templates',
      benefit: 'Create invoices 10x faster than traditional methods'
    },
    {
      icon: FileText,
      title: 'Smart Templates',
      description: 'AI learns your business style and creates personalized invoice templates automatically',
      benefit: 'Maintain consistent branding across all invoices'
    },
    {
      icon: Calculator,
      title: 'Automatic Calculations',
      description: 'AI handles complex tax calculations, discounts, and multi-currency conversions',
      benefit: 'Eliminate calculation errors and save time'
    },
    {
      icon: Send,
      title: 'Automated Delivery',
      description: 'Send invoices via email, SMS, or client portal with automated follow-ups',
      benefit: 'Reduce payment delays by 40%'
    },
    {
      icon: BarChart3,
      title: 'Payment Analytics',
      description: 'Track payment patterns, predict late payments, and optimize collection strategies',
      benefit: 'Improve cash flow management'
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'GDPR compliant with bank-level security and automated tax reporting',
      benefit: 'Stay compliant with minimal effort'
    }
  ];

  const pricingPlans = [
    {
      name: 'Solo',
      price: '$19',
      period: '/month',
      description: 'Perfect for freelancers and solo entrepreneurs',
      features: [
        'Up to 50 invoices/month',
        'Basic AI templates',
        'Email delivery',
        'Payment tracking',
        'Basic analytics',
        'Mobile app',
        'Email support'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Business',
      price: '$49',
      period: '/month',
      description: 'Most popular for small to medium businesses',
      features: [
        'Up to 500 invoices/month',
        'Advanced AI templates',
        'Multi-channel delivery',
        'Automated follow-ups',
        'Advanced analytics',
        'Client portal',
        'API access',
        'Priority support',
        'Team collaboration (3 users)'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$129',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited invoices',
        'Custom AI models',
        'White-label solution',
        'Advanced automation',
        'Custom integrations',
        'Dedicated support',
        'Unlimited team members',
        'Advanced reporting',
        'Custom compliance tools'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'David Martinez',
      role: 'Freelance Consultant',
      content: 'AI Invoice Generator cut my invoicing time from 2 hours to 15 minutes. The AI templates are incredibly accurate and professional.',
      rating: 5,
      company: 'Martinez Consulting'
    },
    {
      name: 'Lisa Thompson',
      role: 'CEO, Creative Agency',
      content: 'The automated follow-ups feature increased our payment collection rate by 60%. Our cash flow has never been better.',
      rating: 5,
      company: 'Thompson Creative'
    },
    {
      name: 'James Wilson',
      role: 'Small Business Owner',
      content: 'The multi-currency support and tax calculations are spot-on. It handles all the complexity so I can focus on my business.',
      rating: 5,
      company: 'Wilson Enterprises'
    }
  ];

  const integrations = [
    { name: 'QuickBooks', logo: 'QB' },
    { name: 'Xero', logo: 'X' },
    { name: 'Stripe', logo: 'S' },
    { name: 'PayPal', logo: 'PP' },
    { name: 'Square', logo: 'SQ' },
    { name: 'Wise', logo: 'W' },
    { name: 'FreshBooks', logo: 'FB' },
    { name: 'Wave', logo: 'W' }
  ];

  const useCases = [
    {
      title: 'Freelancers & Consultants',
      description: 'Generate professional invoices instantly and track payments efficiently',
      icon: Users,
      benefits: ['Time savings', 'Professional appearance', 'Payment tracking']
    },
    {
      title: 'E-commerce Businesses',
      description: 'Automate invoice generation for online sales and subscription billing',
      icon: Globe,
      benefits: ['Automation', 'Scalability', 'Multi-currency support']
    },
    {
      title: 'Service Agencies',
      description: 'Manage complex project billing with AI-powered time tracking and invoicing',
      icon: BarChart3,
      benefits: ['Project management', 'Time tracking', 'Client portals']
    },
    {
      title: 'SaaS Companies',
      description: 'Handle subscription billing and usage-based invoicing with AI optimization',
      icon: Zap,
      benefits: ['Subscription management', 'Usage tracking', 'Revenue optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Invoice Generator - Smart Invoicing & Payment Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered invoice generation with smart templates, automated delivery, and payment analytics. Start your free trial today!" />
        <meta name="keywords" content="AI invoice generator, smart invoicing, payment management, automated billing, invoice templates" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-invoice-generator" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="absolute inset-0 cyber-grid-enhanced"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text-enhanced neon-pulse">
              AI Invoice Generator
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Revolutionary AI-powered invoicing that generates professional invoices in seconds, 
              automates delivery, and optimizes payment collection with intelligent analytics.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
                <CheckCircle className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">10x Faster Generation</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">40% Faster Payments</span>
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
              Intelligent Invoicing Features
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Powered by advanced AI to transform your invoicing process
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

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Perfect for Every Business Type
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              From freelancers to enterprise companies, AI Invoice Generator adapts to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="futuristic-card p-6 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center justify-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
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
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Trusted by 15,000+ Businesses
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See what our customers say about AI Invoice Generator
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite accounting and payment tools
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
            Ready to Revolutionize Your Invoicing?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already saving time and getting paid faster with AI-powered invoicing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              <FileText className="w-5 h-5 mr-2" />
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