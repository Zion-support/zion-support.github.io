'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Brain, Calendar, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar as CalendarIcon, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Receipt, FileText as InvoiceIcon, CreditCard as PaymentIcon, DollarSign as MoneyIcon, Calculator as CalcIcon, Clock as TimeIcon, Send, Download, Print, Share2, Edit, Trash2, Save, RefreshCw, Plus, Minus, X, CheckSquare, AlertCircle, Info, ExternalLink, Copy, Upload, Folder, FolderOpen, Search as SearchIcon, Filter, SortAsc, SortDesc, MoreHorizontal, MoreVertical, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, ChevronUpDown, ArrowUpDown, ArrowUp, ArrowDown, ArrowLeft, ArrowRight as ArrowRightIcon, Maximize, Minimize, RotateCcw, RotateCw, ZoomIn, ZoomOut, Move, Hand, MousePointer, Cursor, Type, Bold, Italic, Underline, Strikethrough, AlignLeft, AlignCenter, AlignRight, AlignJustify, List, ListOrdered, Quote, Code as CodeIcon, Link, Unlink, Image, Table, Columns, Rows, Grid, Layout, Sidebar, SidebarClose, SidebarOpen, PanelLeft, PanelRight, PanelTop, PanelBottom, Split, SplitSquareHorizontal, SplitSquareVertical, Square, Circle, Triangle, Hexagon, Pentagon, Octagon, Diamond, Heart as HeartIcon, Star as StarIcon2, Moon, Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Wind, Droplets, Flame, Snowflake, Zap as ZapIcon, Thunderstorm, Tornado, Hurricane, Earthquake, Volcano, Mountain, Tree, Leaf, Flower, Seedling, Sprout, Cactus, Palm, Pine, Oak, Maple, Cherry, Apple, Orange, Lemon, Banana, Grapes, Strawberry, Watermelon, Pineapple, Mango, Avocado, Coconut, Kiwi, Peach, Pear, Plum, Apricot, Fig, Date, Raisin, Cranberry, Blueberry, Raspberry, Blackberry, Gooseberry, Elderberry, Mulberry, Boysenberry, Loganberry, Cloudberry, Huckleberry, Lingonberry, Barberry, Currant } from 'lucide-react';

const AIInvoiceGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Invoice Creation',
      description: 'Generate professional invoices automatically using AI that understands your business context',
      benefits: ['Smart template selection', 'Automatic data extraction', 'Custom branding', 'Multi-language support']
    },
    {
      icon: Zap,
      title: 'Instant Processing',
      description: 'Create and send invoices in seconds with our lightning-fast AI processing engine',
      benefits: ['Real-time generation', 'Bulk processing', 'Template optimization', 'Error detection']
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Bank-level security with automatic compliance checking for tax regulations worldwide',
      benefits: ['GDPR compliance', 'Tax calculation', 'Audit trails', 'Data encryption']
    },
    {
      icon: BarChart,
      title: 'Smart Analytics',
      description: 'Get insights into your invoicing patterns and payment trends with AI analytics',
      benefits: ['Payment tracking', 'Revenue forecasting', 'Client insights', 'Performance metrics']
    },
    {
      icon: CreditCard,
      title: 'Payment Integration',
      description: 'Accept payments directly through integrated payment gateways and crypto options',
      benefits: ['Multiple payment methods', 'Automated reminders', 'Payment tracking', 'Refund management']
    },
    {
      icon: Users,
      title: 'Client Management',
      description: 'Maintain detailed client profiles with automated communication and follow-ups',
      benefits: ['Client database', 'Communication history', 'Automated follow-ups', 'Relationship tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Solo',
      price: '$29',
      period: '/month',
      description: 'Perfect for freelancers and solo entrepreneurs',
      features: [
        'Up to 50 invoices/month',
        'Basic AI templates',
        'Email delivery',
        'PDF generation',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Business',
      price: '$79',
      period: '/month',
      description: 'Ideal for small to medium businesses',
      features: [
        'Unlimited invoices',
        'Advanced AI features',
        'Custom branding',
        'Payment integration',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Multi-user accounts'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited everything',
        'Custom AI models',
        'White-label solution',
        'Advanced integrations',
        'Dedicated support',
        'Custom workflows',
        'On-premise option',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Freelancers',
      description: 'Streamline invoicing for creative professionals, consultants, and independent contractors',
      icon: Briefcase,
      benefits: ['Quick invoice creation', 'Time tracking integration', 'Client management', 'Payment reminders']
    },
    {
      title: 'E-commerce',
      description: 'Automate invoice generation for online stores with inventory and order management',
      icon: ShoppingCart,
      benefits: ['Order integration', 'Inventory tracking', 'Tax calculation', 'Shipping management']
    },
    {
      title: 'Service Providers',
      description: 'Manage recurring invoices for subscription services and maintenance contracts',
      icon: Settings,
      benefits: ['Recurring billing', 'Contract management', 'Service tracking', 'Renewal automation']
    },
    {
      title: 'Agencies',
      description: 'Handle complex billing for marketing agencies, law firms, and consulting companies',
      icon: Building,
      benefits: ['Project billing', 'Time tracking', 'Expense management', 'Client reporting']
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Freelance Designer',
      company: 'Creative Solutions',
      content: 'AI Invoice Generator has saved me hours every week. The AI automatically suggests the right templates and pricing based on my previous work.',
      rating: 5
    },
    {
      name: 'David Thompson',
      role: 'CEO',
      company: 'TechStart Inc.',
      content: 'The payment integration is seamless. Our clients can pay directly from the invoice, and we get instant notifications. Revenue increased by 25%.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      role: 'Accountant',
      company: 'Financial Services LLC',
      content: 'The compliance features are excellent. It automatically handles different tax rates and generates proper documentation for audits.',
      rating: 5
    }
  ];

  const integrations = [
    { name: 'QuickBooks', icon: Calculator, description: 'Sync with QuickBooks for seamless accounting' },
    { name: 'Stripe', icon: CreditCard, description: 'Accept payments with Stripe integration' },
    { name: 'PayPal', icon: PaymentIcon, description: 'Process payments through PayPal' },
    { name: 'Xero', icon: BarChart, description: 'Connect with Xero accounting software' },
    { name: 'FreshBooks', icon: FileText, description: 'Integrate with FreshBooks for time tracking' },
    { name: 'HubSpot', icon: Users, description: 'Sync client data with HubSpot CRM' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Invoice Generator - Zion Tech Group</title>
        <meta name="description" content="AI-powered invoice generation with smart templates, payment integration, and automated compliance. Starting at $29/month." />
        <meta name="keywords" content="ai invoice generator, invoice software, automated invoicing, payment processing, invoice templates, billing software" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Receipt className="w-4 h-4" />
            <span>AI-Powered Invoice Generation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Invoice Generator
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create professional invoices in seconds with AI-powered automation. Generate, send, and track invoices 
            with intelligent templates, payment integration, and automated compliance checking.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">25%</div>
              <div className="text-gray-300">Faster Payments</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">$29</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
              <div className="text-gray-300">Templates</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Invoice Generator Demo Request"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:from-green-600 hover:to-blue-700 transition-all inline-flex items-center"
            >
              <Receipt className="w-5 h-5 mr-2" />
              Try Free Demo
            </a>
            <a
              href="tel:+13024640950"
              className="bg-transparent border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg font-medium hover:bg-green-400 hover:text-white transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
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

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600/10 to-blue-600/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card relative ${plan.popular ? 'ring-2 ring-green-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=AI Invoice Generator - ${plan.name} Plan`}
                  className={`w-full text-center py-3 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                      : 'bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Perfect for Every Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                <ul className="space-y-1">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-xs text-gray-400">
                      • {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600/10 to-blue-600/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Seamless Integrations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card text-center">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <integration.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{integration.name}</h3>
                <p className="text-xs text-gray-400">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-600 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Streamline Your Invoicing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using AI Invoice Generator to save time and get paid faster.
          </p>
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 cyber-card">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Invoice Generator Inquiry"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="tel:+13024640950"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-green-600 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIInvoiceGeneratorPage;