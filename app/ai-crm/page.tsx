'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Target, 
  BarChart3, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  TrendingUp,
  Brain,
  MessageSquare,
  Settings,
  Database,
  Cloud,
  Lock,
  Award,
  Globe,
  Smartphone,
  Monitor,
  Headphones,
  FileText,
  Calendar,
  DollarSign,
  PieChart,
  Activity,
  UserCheck,
  MailCheck,
  PhoneCall,
  MessageCircle,
  CalendarCheck,
  TargetIcon,
  Zap as Lightning,
  Shield as Security,
  Globe as World,
  Smartphone as Mobile,
  Monitor as Desktop,
  Headphones as Support,
  FileText as Document,
  Calendar as Schedule,
  DollarSign as Money,
  PieChart as Chart,
  Activity as Analytics,
  UserCheck as Verified,
  MailCheck as EmailVerified,
  PhoneCall as Call,
  MessageCircle as Chat,
  CalendarCheck as Scheduled
} from 'lucide-react';

const AiCrmPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Lead Scoring',
      description: 'Automatically score and prioritize leads using machine learning algorithms',
      details: ['Predictive scoring', 'Behavioral analysis', 'Engagement tracking', 'Conversion probability']
    },
    {
      icon: MessageSquare,
      title: 'Automated Follow-ups',
      description: 'Intelligent follow-up sequences that adapt based on customer behavior',
      details: ['Smart sequences', 'Behavioral triggers', 'Multi-channel follow-up', 'Personalization']
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Advanced analytics to forecast sales and identify opportunities',
      details: ['Sales forecasting', 'Revenue prediction', 'Trend analysis', 'Performance insights']
    },
    {
      icon: Users,
      title: 'Contact Management',
      description: 'Comprehensive contact database with AI-powered insights',
      details: ['Unified profiles', 'Relationship mapping', 'Communication history', 'Smart suggestions']
    },
    {
      icon: Target,
      title: 'Sales Pipeline',
      description: 'Visual pipeline management with AI-driven recommendations',
      details: ['Pipeline visualization', 'Stage optimization', 'Deal progression', 'Bottleneck identification']
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and streamline sales processes',
      details: ['Task automation', 'Process optimization', 'Rule-based actions', 'Integration workflows']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 users',
        '10,000 contacts',
        'Basic AI features',
        'Email integration',
        'Mobile app',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 users',
        '50,000 contacts',
        'Advanced AI features',
        'Full integrations',
        'Custom fields',
        'Priority support',
        'Advanced analytics',
        'API access',
        'Custom workflows'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Unlimited contacts',
        'Premium AI features',
        'White-label solution',
        'Custom development',
        'Dedicated support',
        'Advanced security',
        'SLA guarantee',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const integrations = [
    { name: 'Email Marketing', icon: Mail, description: 'Sync with your email campaigns' },
    { name: 'Phone Systems', icon: Phone, description: 'Integrate with VoIP systems' },
    { name: 'Calendar', icon: Calendar, description: 'Sync meetings and appointments' },
    { name: 'Social Media', icon: MessageCircle, description: 'Track social interactions' },
    { name: 'E-commerce', icon: Globe, description: 'Connect with online stores' },
    { name: 'Analytics', icon: BarChart3, description: 'Advanced reporting tools' },
    { name: 'Document Management', icon: FileText, description: 'Store and organize files' },
    { name: 'Accounting', icon: DollarSign, description: 'Financial integration' }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase Sales by 40%',
      description: 'AI-powered insights help your team close more deals'
    },
    {
      icon: Clock,
      title: 'Save 10+ Hours/Week',
      description: 'Automation reduces manual tasks and administrative work'
    },
    {
      icon: Target,
      title: 'Improve Lead Quality',
      description: 'AI scoring ensures you focus on the most promising prospects'
    },
    {
      icon: Users,
      title: 'Better Team Collaboration',
      description: 'Unified platform keeps everyone aligned and informed'
    }
  ];

  const stats = [
    { value: '40%', label: 'Sales Increase', description: 'Average improvement' },
    { value: '10+', label: 'Hours Saved', description: 'Per week per user' },
    { value: '99.9%', label: 'Uptime', description: 'Reliable service' },
    { value: '50+', label: 'Integrations', description: 'Available connections' },
    { value: '24/7', label: 'Support', description: 'Always available' },
    { value: '10K+', label: 'Companies', description: 'Trust our platform' }
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered CRM - Zion Tech Group | Intelligent Customer Management</title>
        <meta name="description" content="Revolutionary AI-powered CRM with lead scoring, automated follow-ups, and predictive analytics. Increase sales by 40% and save 10+ hours per week." />
        <meta name="keywords" content="AI CRM, customer relationship management, lead scoring, sales automation, predictive analytics, CRM software" />
        <meta property="og:title" content="AI-Powered CRM - Zion Tech Group" />
        <meta property="og:description" content="Intelligent CRM platform with AI-powered lead scoring and sales automation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-crm" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-8">
              <Users className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">AI-Powered CRM</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered CRM
              </span>
              <br />
              <span className="text-white">Intelligent Customer Management</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionize your sales process with AI-powered lead scoring, automated follow-ups, 
              and predictive analytics. Increase sales by 40% and save 10+ hours per week.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                  <div className="text-gray-500 text-xs">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to manage customers and grow your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our AI-powered CRM transforms businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Seamless Integrations
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and streamline your workflow
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 text-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <integration.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{integration.name}</h3>
                  <p className="text-gray-400 text-sm">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20 scale-105' 
                    : 'border-white/10 hover:border-cyan-500/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Sales Process?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our AI-powered CRM 
                to increase sales and streamline operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-gray-300">Ready to revolutionize your customer management?</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      +1 (302) 464-0950
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Address</p>
                    <p className="text-white font-semibold">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Request a Demo</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      placeholder="Tell us about your CRM needs"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Request Demo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiCrmPage;