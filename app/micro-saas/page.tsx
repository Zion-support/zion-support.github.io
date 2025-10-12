import React, { useState } from 'react';
import { Brain, Mail, ArrowRight, Database, MessageSquare, Camera, Palette, EyeOff } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
'use client';








const MicroSaasPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const microSaasServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      category: 'ai',
      price: '$29/month',
      features: ['Unlimited content generation', 'SEO optimization', 'Multi-language support', 'Brand voice training'],
      status: 'live',
      users: '2,500+',
      rating: 4.9,
      link: '/micro-saas/ai-content-generator'
    },
    {
      id: 'expense-tracker',
      name: 'Smart Expense Tracker',
      description: 'AI-powered expense tracking with automatic categorization and financial insights.',
      icon: <CreditCard className="w-8 h-8 text-green-400" />,
      category: 'finance',
      price: '$19/month',
      features: ['Auto-categorization', 'Receipt scanning', 'Budget alerts', 'Financial reports'],
      status: 'live',
      users: '1,800+',
      rating: 4.8,
      link: '/micro-saas/expense-tracker'
    },
    {
      id: 'social-scheduler',
      name: 'Social Media Scheduler',
      description: 'Schedule and manage all your social media posts across multiple platforms.',
      icon: <Share2 className="w-8 h-8 text-purple-400" />,
      category: 'social',
      price: '$39/month',
      features: ['Multi-platform posting', 'Content calendar', 'Analytics dashboard', 'Team collaboration'],
      status: 'live',
      users: '3,200+',
      rating: 4.7,
      link: '/micro-saas/social-scheduler'
    },
    {
      id: 'ai-chatbot',
      name: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for your website without coding knowledge.',
      icon: <MessageSquare className="w-8 h-8 text-blue-400" />,
      category: 'ai',
      price: '$49/month',
      features: ['No-code builder', 'Multi-language support', 'Analytics tracking', 'Custom integrations'],
      status: 'live',
      users: '1,900+',
      rating: 4.9,
      link: '/micro-saas/ai-chatbot'
    },
    {
      id: 'invoice-generator',
      name: 'AI Invoice Generator',
      description: 'Generate professional invoices automatically with AI-powered suggestions.',
      icon: <FileText className="w-8 h-8 text-orange-400" />,
      category: 'business',
      price: '$24/month',
      features: ['Auto-generation', 'Payment tracking', 'Tax calculations', 'Client management'],
      status: 'live',
      users: '1,500+',
      rating: 4.6,
      link: '/micro-saas/invoice-generator'
    },
    {
      id: 'analytics-dashboard',
      name: 'Business Analytics Dashboard',
      description: 'Comprehensive analytics dashboard for tracking business metrics and KPIs.',
      icon: <BarChart3 className="w-8 h-8 text-pink-400" />,
      category: 'analytics',
      price: '$59/month',
      features: ['Real-time data', 'Custom dashboards', 'Automated reports', 'Data visualization'],
      status: 'live',
      users: '2,100+',
      rating: 4.8,
      link: '/micro-saas/analytics-dashboard'
    },
    {
      id: 'password-manager',
      name: 'Secure Password Manager',
      description: 'Enterprise-grade password management with AI-powered security features.',
      icon: <Lock className="w-8 h-8 text-red-400" />,
      category: 'security',
      price: '$15/month',
      features: ['Zero-knowledge encryption', 'Password generator', 'Breach monitoring', 'Team sharing'],
      status: 'live',
      users: '4,500+',
      rating: 4.9,
      link: '/micro-saas/password-manager'
    },
    {
      id: 'email-marketing',
      name: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing with AI-powered personalization and automation.',
      icon: <Mail className="w-8 h-8 text-indigo-400" />,
      category: 'marketing',
      price: '$79/month',
      features: ['AI personalization', 'Automation workflows', 'A/B testing', 'Advanced analytics'],
      status: 'live',
      users: '2,800+',
      rating: 4.7,
      link: '/micro-saas/email-marketing'
    },
    {
      id: 'task-manager',
      name: 'AI Task Manager',
      description: 'Smart task management with AI-powered prioritization and time tracking.',
      icon: <Target className="w-8 h-8 text-teal-400" />,
      category: 'productivity',
      price: '$34/month',
      features: ['AI prioritization', 'Time tracking', 'Team collaboration', 'Progress analytics'],
      status: 'live',
      users: '3,600+',
      rating: 4.8,
      link: '/micro-saas/task-manager'
    },
    {
      id: 'video-generator',
      name: 'AI Video Generator',
      description: 'Create professional videos from text using advanced AI technology.',
      icon: <Camera className="w-8 h-8 text-yellow-400" />,
      category: 'ai',
      price: '$89/month',
      features: ['Text-to-video', 'Multiple templates', 'Voice synthesis', 'HD export'],
      status: 'beta',
      users: '800+',
      rating: 4.5,
      link: '/micro-saas/video-generator'
    },
    {
      id: 'music-composer',
      name: 'AI Music Composer',
      description: 'Generate original music tracks for your projects using AI composition.',
      icon: <Music className="w-8 h-8 text-violet-400" />,
      category: 'creative',
      price: '$69/month',
      features: ['Original compositions', 'Multiple genres', 'Custom length', 'Commercial license'],
      status: 'beta',
      users: '600+',
      rating: 4.4,
      link: '/micro-saas/music-composer'
    },
    {
      id: 'design-assistant',
      name: 'AI Design Assistant',
      description: 'Create stunning graphics and designs with AI-powered design tools.',
      icon: <Palette className="w-8 h-8 text-rose-400" />,
      category: 'creative',
      price: '$54/month',
      features: ['Logo generation', 'Social media graphics', 'Brand kits', 'Template library'],
      status: 'live',
      users: '2,300+',
      rating: 4.6,
      link: '/micro-saas/design-assistant'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: microSaasServices.length },
    { id: 'ai', name: 'AI Services', count: microSaasServices.filter(s => s.category === 'ai').length },
    { id: 'finance', name: 'Finance', count: microSaasServices.filter(s => s.category === 'finance').length },
    { id: 'social', name: 'Social Media', count: microSaasServices.filter(s => s.category === 'social').length },
    { id: 'business', name: 'Business', count: microSaasServices.filter(s => s.category === 'business').length },
    { id: 'analytics', name: 'Analytics', count: microSaasServices.filter(s => s.category === 'analytics').length },
    { id: 'security', name: 'Security', count: microSaasServices.filter(s => s.category === 'security').length },
    { id: 'marketing', name: 'Marketing', count: microSaasServices.filter(s => s.category === 'marketing').length },
    { id: 'productivity', name: 'Productivity', count: microSaasServices.filter(s => s.category === 'productivity').length },
    { id: 'creative', name: 'Creative', count: microSaasServices.filter(s => s.category === 'creative').length }
  ];

  const filteredServices = microSaasServices.filter(service => {
    const matchesCategory = activeTab === 'all' || service.category === activeTab;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group | AI-Powered Business Solutions</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS services. AI-powered tools for content generation, expense tracking, social media management, and more. Start your free trial today!" />
        <meta name="keywords" content="micro saas, ai services, business tools, content generation, expense tracking, social media management, ai chatbot, invoice generator, analytics dashboard" />
      </Helmet>

      <FuturisticBackground variant="services">
        <div className="pt-20 px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Micro SAAS Services;
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Powerful, AI-driven micro services designed to streamline your business operations and boost productivity.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input;
                  type="text"
                  placeholder="Search services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button;
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === category.id;
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredServices.map((service) => (
                <FuturisticCard;
                  key={service.id}
                  variant="service"
                  className="h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {service.icon}
                      <div>
                        <h3 className="text-xl font-semibold text-white">{service.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            service.status === 'live' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-yellow-500/20 text-yellow-400'
                          }`}>
                            {service.status === 'live' ? 'Live' : 'Beta'}
                          </span>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-gray-300">{service.rating}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-sm text-gray-400">{service.users} users</div>
                  </div>

                  <div className="flex space-x-2">
                    <FuturisticButton;
                      variant="primary"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(service.link, '_blank')}
                    >
                      Try Free;
                    </FuturisticButton>
                    <FuturisticButton;
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(service.link, '_blank')}
                    >
                      <Eye className="w-4 h-4" />
                    </FuturisticButton>
                  </div>
                </FuturisticCard>
              ))}
            </div>

            {/* CTA Section */}
            <FuturisticCard variant="feature" className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our micro SAAS services to boost productivity and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton;
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial;
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton;
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Schedule Demo;
                </FuturisticButton>
              </div>
            </FuturisticCard>
          </div>
        </div>
      </FuturisticBackground>
    </>
  );
}