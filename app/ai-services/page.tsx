'use client';
import React, { useState } from 'react';

import { Brain, MessageSquare, Mail, Camera, Palette, Mic, Database, ArrowRight, EyeOff, Database as DatabaseIcon, Code, Mail as MailIcon, Mail as MailIcon } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

export default function AiServicesPage() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices = [
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation Suite',
      description: 'Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      category: 'content',
      price: '$99/month',
      features: ['Unlimited content generation', 'SEO optimization', 'Multi-language support', 'Brand voice training', 'Content templates', 'Plagiarism detection'],
      status: 'live',
      users: '5,200+',
      rating: 4.9,
      link: '/ai-content-generation',
      capabilities: ['Text generation', 'Content optimization', 'SEO analysis', 'Multi-language translation']
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder Pro',
      description: 'Create intelligent, conversational chatbots for your website and applications without coding.',
      icon: <MessageSquare className="w-8 h-8 text-green-400" />,
      category: 'conversational',
      price: '$149/month',
      features: ['No-code builder', 'Multi-language support', 'Analytics dashboard', 'Custom integrations', 'Voice support', 'Live chat handoff'],
      status: 'live',
      users: '3,800+',
      rating: 4.8,
      link: '/ai-chatbot-builder',
      capabilities: ['Natural language processing', 'Intent recognition', 'Context management', 'Multi-platform deployment']
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Advanced analytics platform with AI-powered insights, predictions, and automated reporting.',
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      category: 'analytics',
      price: '$199/month',
      features: ['Real-time analytics', 'AI predictions', 'Automated reports', 'Custom dashboards', 'Data visualization', 'Alert system'],
      status: 'live',
      users: '2,900+',
      rating: 4.7,
      link: '/ai-analytics-dashboard',
      capabilities: ['Predictive analytics', 'Anomaly detection', 'Trend analysis', 'Automated insights']
    },
    {
      id: 'ai-email-assistant',
      name: 'AI Email Assistant',
      description: 'Intelligent email management with AI-powered responses, scheduling, and organization.',
      icon: <Mail className="w-8 h-8 text-blue-400" />,
      category: 'productivity',
      price: '$79/month',
      features: ['Smart email responses', 'Auto-scheduling', 'Email organization', 'Priority detection', 'Follow-up reminders', 'Template library'],
      status: 'live',
      users: '4,100+',
      rating: 4.6,
      link: '/ai-email-assistant',
      capabilities: ['Email classification', 'Response generation', 'Sentiment analysis', 'Priority scoring']
    },
    {
      id: 'ai-image-generator',
      name: 'AI Image Generator Pro',
      description: 'Create stunning images, graphics, and artwork using advanced AI image generation models.',
      icon: <Camera className="w-8 h-8 text-pink-400" />,
      category: 'creative',
      price: '$129/month',
      features: ['High-resolution images', 'Multiple art styles', 'Text-to-image', 'Image editing', 'Batch processing', 'Commercial license'],
      status: 'live',
      users: '6,500+',
      rating: 4.8,
      link: '/ai-image-generator',
      capabilities: ['Text-to-image generation', 'Style transfer', 'Image enhancement', 'Object removal']
    },
    {
      id: 'ai-video-generator',
      name: 'AI Video Generator',
      description: 'Create professional videos from text, images, or audio using cutting-edge AI technology.',
      icon: <Video className="w-8 h-8 text-orange-400" />,
      category: 'creative',
      price: '$199/month',
      features: ['Text-to-video', 'Voice synthesis', 'Multiple templates', 'HD export', 'Auto-subtitles', 'Background music'],
      status: 'beta',
      users: '1,200+',
      rating: 4.5,
      link: '/ai-video-generator',
      capabilities: ['Video synthesis', 'Voice cloning', 'Motion graphics', 'Scene generation']
    },
    {
      id: 'ai-music-composer',
      name: 'AI Music Composer',
      description: 'Generate original music tracks, sound effects, and audio content for your projects.',
      icon: <Music className="w-8 h-8 text-violet-400" />,
      category: 'creative',
      price: '$89/month',
      features: ['Original compositions', 'Multiple genres', 'Custom length', 'Commercial license', 'Royalty-free', 'High-quality audio'],
      status: 'live',
      users: '2,300+',
      rating: 4.4,
      link: '/ai-music-composer',
      capabilities: ['Music generation', 'Genre adaptation', 'Mood-based composition', 'Instrument synthesis']
    },
    {
      id: 'ai-design-assistant',
      name: 'AI Design Assistant',
      description: 'Create logos, graphics, and designs with AI-powered design tools and templates.',
      icon: <Palette className="w-8 h-8 text-rose-400" />,
      category: 'creative',
      price: '$109/month',
      features: ['Logo generation', 'Social media graphics', 'Brand kits', 'Template library', 'Color palette suggestions', 'Font recommendations'],
      status: 'live',
      users: '3,600+',
      rating: 4.6,
      link: '/ai-design-assistant',
      capabilities: ['Logo design', 'Color theory', 'Typography selection', 'Layout optimization']
    },
    {
      id: 'ai-code-assistant',
      name: 'AI Code Assistant',
      description: 'Intelligent coding assistant that helps write, debug, and optimize code in multiple languages.',
      icon: <Code className="w-8 h-8 text-emerald-400" />,
      category: 'development',
      price: '$159/month',
      features: ['Code generation', 'Bug detection', 'Code optimization', 'Documentation generation', 'Multi-language support', 'IDE integration'],
      status: 'live',
      users: '4,800+',
      rating: 4.7,
      link: '/ai-code-assistant',
      capabilities: ['Code completion', 'Error detection', 'Refactoring suggestions', 'Documentation generation']
    },
    {
      id: 'ai-data-analyst',
      name: 'AI Data Analyst',
      description: 'Automated data analysis and insights generation for business intelligence and decision making.',
      icon: <Database className="w-8 h-8 text-indigo-400" />,
      category: 'analytics',
      price: '$179/month',
      features: ['Automated analysis', 'Pattern recognition', 'Predictive modeling', 'Data visualization', 'Report generation', 'API integration'],
      status: 'live',
      users: '2,700+',
      rating: 4.8,
      link: '/ai-data-analyst',
      capabilities: ['Statistical analysis', 'Machine learning models', 'Data preprocessing', 'Insight extraction']
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant',
      description: 'Build custom voice assistants and voice-enabled applications with natural language processing.',
      icon: <Mic className="w-8 h-8 text-teal-400" />,
      category: 'conversational',
      price: '$139/month',
      features: ['Voice recognition', 'Text-to-speech', 'Custom wake words', 'Multi-language support', 'API integration', 'Real-time processing'],
      status: 'live',
      users: '1,900+',
      rating: 4.5,
      link: '/ai-voice-assistant',
      capabilities: ['Speech recognition', 'Voice synthesis', 'Intent understanding', 'Conversation management']
    },
    {
      id: 'ai-security-monitor',
      name: 'AI Security Monitor',
      description: 'Advanced threat detection and security monitoring using AI-powered analysis.',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      category: 'security',
      price: '$299/month',
      features: ['Threat detection', 'Anomaly detection', 'Real-time monitoring', 'Incident response', 'Compliance reporting', 'API security'],
      status: 'live',
      users: '1,500+',
      rating: 4.9,
      link: '/ai-security-monitor',
      capabilities: ['Threat intelligence', 'Behavioral analysis', 'Risk assessment', 'Automated response']
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', count: aiServices.length },
    { id: 'content', name: 'Content Generation', count: aiServices.filter(s => s.category === 'content').length },
    { id: 'conversational', name: 'Conversational AI', count: aiServices.filter(s => s.category === 'conversational').length },
    { id: 'analytics', name: 'Analytics & Insights', count: aiServices.filter(s => s.category === 'analytics').length },
    { id: 'productivity', name: 'Productivity', count: aiServices.filter(s => s.category === 'productivity').length },
    { id: 'creative', name: 'Creative AI', count: aiServices.filter(s => s.category === 'creative').length },
    { id: 'development', name: 'Development', count: aiServices.filter(s => s.category === 'development').length },
    { id: 'security', name: 'Security', count: aiServices.filter(s => s.category === 'security').length }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = activeTab === 'all' || service.category === activeTab;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Discover our comprehensive AI services including content generation, chatbots, analytics, and creative tools. Powered by cutting-edge AI technology to transform your business." />
        <meta name="keywords" content="ai services, artificial intelligence, content generation, ai chatbot, ai analytics, ai video generator, ai image generator, machine learning, deep learning" />
      </Helmet>

      <FuturisticBackground variant="services">
        <div className="pt-20 px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AI Services
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Harness the power of artificial intelligence with our comprehensive suite of AI services designed to transform your business operations.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === category.id
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
                <FuturisticCard
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

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">AI Capabilities:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.capabilities.map((capability, index) => (
                        <span key={index} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded">
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                    <div className="text-sm text-gray-400">{service.users} users</div>
                  </div>

                  <div className="flex space-x-2">
                    <FuturisticButton
                      variant="primary"
                      size="sm"
                      className="flex-1"
                      onClick={() => window.open(service.link, '_blank')}
                    >
                      Try Free
                    </FuturisticButton>
                    <FuturisticButton
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
                Ready to Harness AI Power?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our AI services to automate processes, generate content, and gain intelligent insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  variant="secondary"
                  size="lg"
                  onClick={() => window.open('/contact', '_blank')}
                >
                  Schedule Demo
                </FuturisticButton>
              </div>
            </FuturisticCard>
          </div>
        </div>
      </FuturisticBackground>
    </>
  );
}