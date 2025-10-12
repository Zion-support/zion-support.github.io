'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  BarChart3, MessageCircle, Shield, Cloud, Palette, Users, 
  Sync, Magnet, Briefcase, Mail, Package, FileText, Video,
  Workflow, Monitor, CheckCircle, Clock, Zap, Star,
  ArrowRight, CheckCircle2, DollarSign, Phone, Mail as MailIcon, MapPin
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      title: 'Zion Analytics Pro',
      description: 'Advanced business intelligence and data analytics platform with AI-powered insights.',
      price: '$99/month',
      features: ['Real-time dashboards', 'AI predictions', 'Custom reports', 'API integration'],
      link: '/zion-analytics-pro',
      category: 'Analytics',
      popular: true
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-emerald-400" />,
      title: 'Zion Chat AI',
      description: 'Intelligent chatbot platform with natural language processing and multi-channel support.',
      price: '$49/month',
      features: ['Multi-language support', 'Custom training', 'API integration', 'Analytics dashboard'],
      link: '/zion-chat-ai',
      category: 'AI Assistant'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection for small to medium businesses.',
      price: '$199/month',
      features: ['24/7 monitoring', 'Threat detection', 'Compliance reports', 'Incident response'],
      link: '/zion-security-shield',
      category: 'Security'
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage and file management with advanced encryption and collaboration tools.',
      price: '$29/month',
      features: ['1TB storage', 'End-to-end encryption', 'Team collaboration', 'Version control'],
      link: '/zion-cloud-vault',
      category: 'Storage'
    },
    {
      icon: <Palette className="w-8 h-8 text-purple-400" />,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, and marketing materials.',
      price: '$79/month',
      features: ['AI writing assistant', 'Image generation', 'SEO optimization', 'Content calendar'],
      link: '/zion-content-studio',
      category: 'Content'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: 'Zion CRM Intelligence',
      description: 'Smart customer relationship management with AI insights and automation.',
      price: '$149/month',
      features: ['Lead scoring', 'Automated follow-ups', 'Sales forecasting', 'Integration hub'],
      link: '/zion-crm-intelligence',
      category: 'CRM'
    },
    {
      icon: <Sync className="w-8 h-8 text-pink-400" />,
      title: 'Zion Data Sync',
      description: 'Automated data synchronization across multiple platforms and databases.',
      price: '$39/month',
      features: ['Real-time sync', 'Data transformation', 'Error handling', 'Monitoring dashboard'],
      link: '/zion-data-sync',
      category: 'Integration'
    },
    {
      icon: <Magnet className="w-8 h-8 text-yellow-400" />,
      title: 'Zion Lead Magnet',
      description: 'Lead generation and nurturing platform with automated email campaigns.',
      price: '$59/month',
      features: ['Landing pages', 'Email automation', 'Lead scoring', 'A/B testing'],
      link: '/zion-lead-magnet',
      category: 'Marketing'
    },
    {
      icon: <Briefcase className="w-8 h-8 text-green-400" />,
      title: 'Zion Project Master',
      description: 'Project management and team collaboration platform with AI-powered insights.',
      price: '$89/month',
      features: ['Task management', 'Time tracking', 'Resource planning', 'Progress analytics'],
      link: '/zion-project-master',
      category: 'Project Management'
    },
    {
      icon: <Mail className="w-8 h-8 text-indigo-400" />,
      title: 'Zion Email Automation',
      description: 'Advanced email marketing automation with personalization and analytics.',
      price: '$69/month',
      features: ['Email templates', 'Segmentation', 'A/B testing', 'Performance analytics'],
      link: '/zion-email-automation',
      category: 'Email Marketing'
    },
    {
      icon: <Package className="w-8 h-8 text-teal-400" />,
      title: 'Zion Inventory Smart',
      description: 'Intelligent inventory management with demand forecasting and optimization.',
      price: '$119/month',
      features: ['Stock tracking', 'Demand forecasting', 'Reorder alerts', 'Supplier management'],
      link: '/zion-inventory-smart',
      category: 'Inventory'
    },
    {
      icon: <FileText className="w-8 h-8 text-rose-400" />,
      title: 'Zion Invoice Genius',
      description: 'Automated invoicing and payment processing with smart reminders.',
      price: '$39/month',
      features: ['Auto-invoicing', 'Payment tracking', 'Tax calculations', 'Client portal'],
      link: '/zion-invoice-genius',
      category: 'Finance'
    },
    {
      icon: <Video className="w-8 h-8 text-pink-400" />,
      title: 'Zion AI Video Generator',
      description: 'Create professional videos from text prompts using advanced AI technology.',
      price: '$79/month',
      features: ['AI video generation', '4K export', 'Voice synthesis', 'Custom branding'],
      link: '/zion-ai-video-generator',
      category: 'AI Content',
      popular: true
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-400" />,
      title: 'Zion Blockchain Analytics',
      description: 'Comprehensive blockchain analytics for DeFi, NFTs, and crypto trading.',
      price: '$399/month',
      features: ['Real-time monitoring', 'Risk assessment', 'Compliance reporting', 'API access'],
      link: '/zion-blockchain-analytics',
      category: 'Blockchain'
    }
  ];

  const categories = ['All', 'Analytics', 'AI Assistant', 'Security', 'Storage', 'Content', 'CRM', 'Integration', 'Marketing', 'Project Management', 'Email Marketing', 'Inventory', 'Finance', 'AI Content', 'Blockchain'];

  const stats = [
    { number: '50+', label: 'Micro SAAS Solutions', icon: <Zap className="w-6 h-6 text-cyan-400" /> },
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6 text-emerald-400" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-blue-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-purple-400" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Innovative Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS solutions designed to streamline your business operations. From AI analytics to project management, we have the tools you need." />
        <meta name="keywords" content="micro saas, business tools, AI solutions, project management, CRM, analytics, automation, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,197,94,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-purple-400/30">
              <Zap className="w-4 h-4" />
              <span>Innovative Micro SAAS Solutions</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Powerful <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Micro SAAS
              </span> Solutions
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Streamline your business operations with our comprehensive suite of micro SAAS tools. 
              From AI-powered analytics to automated workflows, we have everything you need to succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:scale-105"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/pricing" 
                className="group border-2 border-purple-400 text-purple-400 px-10 py-4 rounded-xl font-semibold hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              >
                <span>View Pricing</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Micro SAAS Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of business tools designed to optimize your workflow and boost productivity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className={`group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative ${service.popular ? 'ring-2 ring-purple-400/50' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="mb-2">
                    <span className="inline-block bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-4">
                    <div className="text-purple-400 font-semibold text-lg">
                      {service.price}
                    </div>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link 
                      to={service.link}
                      className="block w-full mt-6 bg-gradient-to-r from-purple-500 to-cyan-600 text-white text-center py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/25"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="relative max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Start your free trial today and experience the power of our micro SAAS solutions. 
                  No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                  >
                    Start Free Trial
                  </Link>
                  <Link 
                    to="/pricing"
                    className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    View All Pricing
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Need Help Choosing?</h3>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-purple-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <MailIcon className="w-5 h-5 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;