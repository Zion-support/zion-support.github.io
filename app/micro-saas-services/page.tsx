'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Code, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Mail,
  MessageSquare,
  FileText,
  Cpu,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Phone,
  MapPin
} from 'lucide-react';

export default function MicroSaasServicesPage() {
  const microSaasServices = [
    {
      name: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with AI insights, lead scoring, and automated follow-ups',
      price: '$99/month',
      features: ['Lead scoring & qualification', 'Automated follow-ups', 'Sales forecasting', 'Integration APIs', 'Custom dashboards', 'Mobile app'],
      icon: Users,
      path: '/ai-crm',
      category: 'Customer Management',
      rating: 4.8,
      reviews: 156,
      freeTrial: '14 days'
    },
    {
      name: 'Smart Analytics Platform',
      description: 'Business intelligence with AI-powered insights, custom dashboards, and predictive analytics',
      price: '$149/month',
      features: ['Custom dashboards', 'Predictive analytics', 'Data visualization', 'Export capabilities', 'Real-time monitoring', 'API integration'],
      icon: BarChart3,
      path: '/smart-analytics',
      category: 'Analytics',
      rating: 4.9,
      reviews: 203,
      freeTrial: '30 days'
    },
    {
      name: 'Automated Testing Suite',
      description: 'AI-driven automated testing for web and mobile applications with comprehensive reporting',
      price: '$199/month',
      features: ['Cross-browser testing', 'Performance testing', 'API testing', 'Test reporting', 'CI/CD integration', 'Parallel execution'],
      icon: Cpu,
      path: '/ai-automated-testing',
      category: 'Quality Assurance',
      rating: 4.7,
      reviews: 134,
      freeTrial: '7 days'
    },
    {
      name: 'Content Management System',
      description: 'AI-enhanced CMS with intelligent content optimization, SEO tools, and multi-language support',
      price: '$79/month',
      features: ['SEO optimization', 'Content scheduling', 'Multi-language support', 'Analytics integration', 'User management', 'Template library'],
      icon: FileText,
      path: '/ai-content-management',
      category: 'Content Management',
      rating: 4.6,
      reviews: 98,
      freeTrial: '14 days'
    },
    {
      name: 'Email Marketing Automation',
      description: 'Intelligent email campaigns with personalization, A/B testing, and comprehensive analytics',
      price: '$129/month',
      features: ['A/B testing', 'Behavioral triggers', 'Deliverability optimization', 'ROI tracking', 'Template builder', 'List segmentation'],
      icon: Mail,
      path: '/ai-email-marketing',
      category: 'Marketing',
      rating: 4.8,
      reviews: 187,
      freeTrial: '14 days'
    },
    {
      name: 'Social Media Manager',
      description: 'AI-powered social media management with content suggestions, scheduling, and engagement analytics',
      price: '$89/month',
      features: ['Multi-platform posting', 'Content suggestions', 'Engagement analytics', 'Hashtag optimization', 'Scheduling tools', 'Influencer tracking'],
      icon: MessageSquare,
      path: '/ai-social-media-manager',
      category: 'Social Media',
      rating: 4.7,
      reviews: 145,
      freeTrial: '7 days'
    },
    {
      name: 'Project Management Hub',
      description: 'AI-enhanced project management with smart task assignment, progress tracking, and resource optimization',
      price: '$119/month',
      features: ['Smart task assignment', 'Progress tracking', 'Resource optimization', 'Team collaboration', 'Time tracking', 'Budget management'],
      icon: TrendingUp,
      path: '/ai-project-management',
      category: 'Project Management',
      rating: 4.8,
      reviews: 167,
      freeTrial: '14 days'
    },
    {
      name: 'Customer Support Bot',
      description: 'Intelligent customer support automation with multi-channel support and sentiment analysis',
      price: '$159/month',
      features: ['Multi-channel support', 'Sentiment analysis', 'Knowledge base', 'Ticket management', 'Live chat integration', 'Performance analytics'],
      icon: MessageSquare,
      path: '/ai-customer-support',
      category: 'Customer Support',
      rating: 4.9,
      reviews: 234,
      freeTrial: '14 days'
    },
    {
      name: 'Financial Analytics Tool',
      description: 'AI-powered financial analysis with forecasting, budgeting, and investment insights',
      price: '$179/month',
      features: ['Financial forecasting', 'Budget planning', 'Investment insights', 'Risk analysis', 'Compliance reporting', 'Custom reports'],
      icon: BarChart3,
      path: '/ai-financial-analytics',
      category: 'Finance',
      rating: 4.8,
      reviews: 112,
      freeTrial: '30 days'
    }
  ];

  const categories = [
    { name: 'All Services', count: microSaasServices.length, active: true },
    { name: 'Customer Management', count: microSaasServices.filter(s => s.category === 'Customer Management').length, active: false },
    { name: 'Analytics', count: microSaasServices.filter(s => s.category === 'Analytics').length, active: false },
    { name: 'Quality Assurance', count: microSaasServices.filter(s => s.category === 'Quality Assurance').length, active: false },
    { name: 'Content Management', count: microSaasServices.filter(s => s.category === 'Content Management').length, active: false },
    { name: 'Marketing', count: microSaasServices.filter(s => s.category === 'Marketing').length, active: false },
    { name: 'Social Media', count: microSaasServices.filter(s => s.category === 'Social Media').length, active: false },
    { name: 'Project Management', count: microSaasServices.filter(s => s.category === 'Project Management').length, active: false },
    { name: 'Customer Support', count: microSaasServices.filter(s => s.category === 'Customer Support').length, active: false },
    { name: 'Finance', count: microSaasServices.filter(s => s.category === 'Finance').length, active: false }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our intuitive setup process and pre-built templates'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance, and data protection for your business'
    },
    {
      icon: Globe,
      title: 'Scalable Solutions',
      description: 'Grow with confidence - our solutions scale seamlessly as your business expands'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team to ensure your success'
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$49/month',
      description: 'Perfect for small businesses getting started',
      features: ['Up to 5 users', 'Basic features', 'Email support', '5GB storage', 'Standard integrations'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149/month',
      description: 'Ideal for growing businesses with advanced needs',
      features: ['Up to 25 users', 'Advanced features', 'Priority support', '50GB storage', 'Premium integrations', 'Custom reports'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299/month',
      description: 'Complete solution for large organizations',
      features: ['Unlimited users', 'All features', '24/7 phone support', 'Unlimited storage', 'Custom integrations', 'Dedicated account manager'],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | Powerful Business Solutions</title>
        <meta name="description" content="Comprehensive micro SAAS solutions including CRM, analytics, testing, content management, email marketing, and project management. Streamline your business processes." />
        <meta name="keywords" content="micro SAAS, business software, CRM, analytics, testing, content management, email marketing, project management, customer support" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-teal-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Micro SAAS Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Powerful, scalable micro SAAS platforms designed to streamline your business processes, 
                enhance productivity, and drive growth across all departments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SAAS platforms are designed to deliver maximum value with minimal complexity.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include free trials and no setup fees.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 ${
                  tier.popular 
                    ? 'border-green-500/50 bg-green-500/10' 
                    : 'border-white/20 hover:border-white/40'
                }`}>
                  {tier.popular && (
                    <div className="text-center mb-4">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-green-400 mb-2">{tier.price}</div>
                    <p className="text-gray-300">{tier.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700'
                      : 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50'
                  }`}>
                    {tier.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    category.active
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl group-hover:scale-110 transition-transform">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <Star className="h-4 w-4 text-yellow-400 mr-1" />
                        <span className="text-white font-semibold">{service.rating}</span>
                      </div>
                      <div className="text-sm text-gray-400">{service.reviews} reviews</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {service.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-3xl font-bold text-green-400">{service.price}</div>
                    <div className="text-sm text-gray-400">Free trial: {service.freeTrial}</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Streamline Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Start your free trial today and discover how our micro SAAS solutions can transform your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
                >
                  Start Free Trial
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}