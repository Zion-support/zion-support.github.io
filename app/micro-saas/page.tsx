'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Zap, Star, Users, Clock, Shield, Globe, Database, BarChart, Code, Smartphone, CreditCard, Headphones, Lock, Rocket, Target, TrendingUp, Award } from 'lucide-react'

const MicroSaaSPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: BarChart,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights and predictive analytics.',
      features: ['Real-time dashboards', 'AI predictions', 'Custom reports', 'Data visualization'],
      pricing: '$99/month',
      category: 'Analytics',
      popular: true
    },
    {
      icon: Users,
      title: 'Customer Relationship Manager',
      description: 'AI-powered CRM with automated lead scoring and customer journey mapping.',
      features: ['Lead management', 'AI scoring', 'Email automation', 'Sales pipeline'],
      pricing: '$149/month',
      category: 'CRM',
      popular: false
    },
    {
      icon: Code,
      title: 'API Management Platform',
      description: 'Complete API lifecycle management with monitoring, security, and analytics.',
      features: ['API gateway', 'Rate limiting', 'Security policies', 'Usage analytics'],
      pricing: '$199/month',
      category: 'Development',
      popular: false
    },
    {
      icon: Smartphone,
      title: 'Mobile App Builder',
      description: 'No-code mobile app development platform with AI-assisted design.',
      features: ['Drag & drop builder', 'AI templates', 'Cross-platform', 'App store deployment'],
      pricing: '$299/month',
      category: 'Mobile',
      popular: true
    },
    {
      icon: Database,
      title: 'Database as a Service',
      description: 'Managed database solutions with automated backups and scaling.',
      features: ['Auto-scaling', 'Backup & recovery', 'Performance monitoring', 'Multi-cloud'],
      pricing: '$79/month',
      category: 'Infrastructure',
      popular: false
    },
    {
      icon: Shield,
      title: 'Cybersecurity Scanner',
      description: 'Automated security vulnerability scanning and compliance monitoring.',
      features: ['Vulnerability scanning', 'Compliance checks', 'Threat detection', 'Security reports'],
      pricing: '$179/month',
      category: 'Security',
      popular: false
    },
    {
      icon: Globe,
      title: 'Content Management System',
      description: 'Headless CMS with AI content generation and multi-channel publishing.',
      features: ['AI content generation', 'Multi-channel', 'SEO optimization', 'Workflow automation'],
      pricing: '$129/month',
      category: 'Content',
      popular: false
    },
    {
      icon: CreditCard,
      title: 'Payment Processing Suite',
      description: 'Complete payment solution with fraud detection and global payment methods.',
      features: ['Global payments', 'Fraud detection', 'Subscription billing', 'Financial reporting'],
      pricing: '$249/month',
      category: 'Payments',
      popular: true
    },
    {
      icon: Headphones,
      title: 'Customer Support Bot',
      description: 'AI-powered customer support with multilingual capabilities and sentiment analysis.',
      features: ['24/7 support', 'Multi-language', 'Sentiment analysis', 'Ticket management'],
      pricing: '$89/month',
      category: 'Support',
      popular: false
    },
    {
      icon: Lock,
      title: 'Identity & Access Management',
      description: 'Secure user authentication and authorization with SSO and MFA.',
      features: ['SSO integration', 'Multi-factor auth', 'Role management', 'Audit logs'],
      pricing: '$159/month',
      category: 'Security',
      popular: false
    },
    {
      icon: Rocket,
      title: 'Deployment Automation',
      description: 'CI/CD pipeline automation with testing, staging, and production deployment.',
      features: ['Automated testing', 'Zero-downtime deployment', 'Rollback capability', 'Environment management'],
      pricing: '$199/month',
      category: 'DevOps',
      popular: false
    },
    {
      icon: Target,
      title: 'Marketing Automation',
      description: 'AI-driven marketing campaigns with personalization and A/B testing.',
      features: ['Email campaigns', 'Personalization', 'A/B testing', 'Lead nurturing'],
      pricing: '$169/month',
      category: 'Marketing',
      popular: true
    }
  ]

  const features = [
    'Rapid deployment and setup',
    'Scalable architecture',
    'Built-in analytics and monitoring',
    'Custom branding options',
    'API integration capabilities',
    'Multi-tenant support',
    'Automated billing and subscriptions',
    '24/7 technical support',
    'AI-powered automation',
    'Real-time monitoring',
    'Global CDN delivery',
    'Enterprise-grade security'
  ]

  const categories = ['All', 'Analytics', 'CRM', 'Development', 'Mobile', 'Infrastructure', 'Security', 'Content', 'Payments', 'Support', 'DevOps', 'Marketing']

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-pulse">
              Micro <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent neon-text">SaaS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Launch your software-as-a-service business quickly with our pre-built micro-SaaS platform. 
              Choose from 12+ ready-to-deploy solutions with real market value.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Users className="w-5 h-5 text-cyan-400 mr-2" />
                <span className="text-white font-medium">500+ Active Users</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Award className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-white font-medium">99.9% Uptime</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <TrendingUp className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-white font-medium">$2M+ Revenue Generated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-cyan-500/20 transition-all duration-300 border border-white/20 hover:border-cyan-400/50"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready-to-Deploy <span className="text-cyan-400">Micro SaaS</span> Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Choose from our collection of proven micro-SaaS solutions, each designed to solve real business problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{service.pricing}</div>
                    <div className="text-sm text-gray-400">{service.category}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <Rocket className="w-4 h-4 mr-2" />
                    Deploy Now
                  </button>
                  <button className="px-4 py-3 border border-white/30 text-white hover:bg-white/10 rounded-lg transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to Launch
            </h2>
            <p className="text-xl text-gray-300">
              Our micro-SaaS platform provides all the essential components for a successful SaaS business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-gray-300 bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compare with <span className="text-cyan-400">Market Leaders</span>
            </h2>
            <p className="text-xl text-gray-300">
              Our micro-SaaS solutions offer better value than traditional enterprise software.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Traditional Enterprise</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Setup Cost</span>
                  <span className="text-red-400 font-bold">$50,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Monthly Cost</span>
                  <span className="text-red-400 font-bold">$2,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Setup Time</span>
                  <span className="text-red-400 font-bold">6-12 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Customization</span>
                  <span className="text-red-400 font-bold">Limited</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Our Micro SaaS
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Zion Micro SaaS</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Setup Cost</span>
                  <span className="text-green-400 font-bold">$0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Monthly Cost</span>
                  <span className="text-green-400 font-bold">$99-299</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Setup Time</span>
                  <span className="text-green-400 font-bold">24-48 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Customization</span>
                  <span className="text-green-400 font-bold">Unlimited</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Build from Scratch</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Development Cost</span>
                  <span className="text-yellow-400 font-bold">$100,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Monthly Cost</span>
                  <span className="text-yellow-400 font-bold">$500+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Development Time</span>
                  <span className="text-yellow-400 font-bold">12-24 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Maintenance</span>
                  <span className="text-yellow-400 font-bold">Ongoing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Launch Your <span className="text-cyan-400">Micro SaaS</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our micro-SaaS platform and launch your software business in days, not months.
            Join 500+ successful entrepreneurs who chose Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-2xl shadow-cyan-500/25">
              <Rocket className="w-5 h-5 mr-2" />
              Start Your Micro SaaS
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 flex items-center justify-center">
              <Clock className="w-5 h-5 mr-2" />
              Schedule Demo
            </button>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default MicroSaaSPage