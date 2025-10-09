'use client';
import React, { memo } from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Receipt, DollarSign, Clock as ClockIcon, CheckSquare, FileText as FileTextIcon, Download, Send, Edit, Trash2, Plus, Minus, Percent, Calculator as CalculatorIcon } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOOptimizer from '../../components/SEOOptimizer';

const AIInvoiceGeneratorPage: React.FC = memo(() => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Invoice Generation',
      description: 'Automatically generate professional invoices using AI that understands your business context and client needs.',
      benefits: ['Smart template selection', 'Automatic data population', 'Context-aware pricing', 'Brand consistency']
    },
    {
      icon: Zap,
      title: 'Instant Processing',
      description: 'Generate invoices in seconds with our advanced AI algorithms that learn from your business patterns.',
      benefits: ['Real-time generation', 'Batch processing', 'Template optimization', 'Error reduction']
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Bank-level security with automatic compliance checking for tax regulations and business requirements.',
      benefits: ['GDPR compliant', 'Tax calculation', 'Audit trails', 'Data encryption']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Track payment patterns, identify trends, and get AI-powered insights to improve your cash flow.',
      benefits: ['Payment analytics', 'Trend analysis', 'Cash flow predictions', 'Client insights']
    },
    {
      icon: Globe,
      title: 'Multi-Currency Support',
      description: 'Generate invoices in any currency with automatic exchange rate updates and local formatting.',
      benefits: ['150+ currencies', 'Real-time rates', 'Local formatting', 'Tax calculations']
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Create, send, and manage invoices on any device with our responsive mobile interface.',
      benefits: ['Mobile-first design', 'Offline capability', 'Touch optimization', 'Push notifications']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for freelancers and small businesses',
      features: [
        'Up to 100 invoices/month',
        '5 AI templates',
        'Basic analytics',
        'Email support',
        'Mobile app access',
        'PDF export'
      ],
      popular: false,
      color: 'blue'
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Unlimited invoices',
        '20+ AI templates',
        'Advanced analytics',
        'Priority support',
        'Custom branding',
        'API access',
        'Multi-user accounts',
        'Automated reminders'
      ],
      popular: true,
      color: 'purple'
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Professional',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Advanced integrations',
        'Custom workflows',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false,
      color: 'green'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Freelance Designer',
      company: 'Creative Studio',
      content: 'AI Invoice Generator has saved me 10+ hours per week. The AI understands my clients and creates perfect invoices every time.',
      rating: 5,
      avatar: '👩‍🎨'
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'TechStart Inc.',
      content: 'The analytics insights helped us identify payment patterns and improve our cash flow by 40%. Game changer!',
      rating: 5,
      avatar: '👨‍💼'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Accountant',
      company: 'Finance Pro',
      content: 'Compliance features are outstanding. Never worry about tax calculations or regulatory requirements again.',
      rating: 5,
      avatar: '👩‍💻'
    }
  ];

  const useCases = [
    {
      title: 'Freelancers & Consultants',
      description: 'Streamline invoicing for project-based work with AI that understands your service offerings.',
      icon: Briefcase,
      benefits: ['Project-based invoicing', 'Time tracking integration', 'Client management', 'Expense tracking']
    },
    {
      title: 'E-commerce Businesses',
      description: 'Automate invoice generation for online sales with AI-powered order processing.',
      icon: ShoppingCart,
      benefits: ['Order integration', 'Inventory tracking', 'Tax calculations', 'Customer management']
    },
    {
      title: 'Service Providers',
      description: 'Create professional invoices for recurring services with smart scheduling and automation.',
      icon: Settings,
      benefits: ['Recurring billing', 'Service tracking', 'Client portals', 'Payment processing']
    },
    {
      title: 'Agencies & Studios',
      description: 'Manage complex client billing with AI that handles multiple projects and billing structures.',
      icon: Building,
      benefits: ['Multi-client management', 'Project tracking', 'Team collaboration', 'Advanced reporting']
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Invoice Generator - Automated Invoice Creation | Zion Tech Group"
        description="Generate professional invoices instantly with AI-powered automation. Save time, reduce errors, and improve cash flow with our intelligent invoice generation platform."
        keywords={['AI invoice generator', 'automated invoicing', 'invoice automation', 'AI billing', 'smart invoicing', 'invoice management', 'business automation']}
        canonicalUrl="https://ziontechgroup.com/ai-invoice-generator"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-6">
                <Receipt className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-400 text-sm font-medium">AI Invoice Generator</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Generate Professional Invoices with{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Intelligence
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your invoicing process with AI-powered automation. Create, send, and track invoices 
                effortlessly while gaining valuable insights into your business performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="#pricing"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 inline-flex items-center"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Start Free Trial
                </a>
                <a
                  href="#demo"
                  className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  Watch Demo
                </a>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
                  <div className="text-gray-300">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>
                  <div className="text-gray-300">Invoices Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">40%</div>
                  <div className="text-gray-300">Faster Payments</div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-slate-800/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Powerful AI Features
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI invoice generator combines cutting-edge technology with user-friendly design 
                  to revolutionize your billing process.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
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

          {/* Use Cases Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Perfect for Every Business
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Whether you're a freelancer or a large enterprise, our AI invoice generator 
                  adapts to your specific needs and industry requirements.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {useCases.map((useCase, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4">{useCase.description}</p>
                    <ul className="space-y-2 text-left">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
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
          <section id="pricing" className="py-16 bg-slate-800/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Simple, Transparent Pricing
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your business needs. All plans include our core AI features 
                  with no hidden fees or setup costs.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div key={index} className={`relative rounded-lg p-8 ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-400' 
                      : 'bg-slate-800/50 border border-slate-700'
                  }`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 ml-1">{plan.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}>
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Loved by Businesses Worldwide
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how our AI invoice generator is transforming businesses across industries.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-2xl mr-3">{testimonial.avatar}</div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
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
          <section className="py-16 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Invoicing?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using AI to streamline their invoicing process. 
                Start your free trial today and experience the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
});

AIInvoiceGeneratorPage.displayName = 'AIInvoiceGeneratorPage';
export default AIInvoiceGeneratorPage;