import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Zap, Shield, Clock, Users, BarChart, Code, Brain, Cloud, Smartphone, Mail, FileText, Image, Video, Globe, Database, Settings, Lock, ArrowRight, Play, Download, ExternalLink } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSAASServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      category: 'content',
      icon: FileText,
      description: 'Advanced AI-powered content creation tool that generates high-quality articles, blog posts, social media content, and marketing copy.',
      features: [
        '50+ content templates',
        'Multi-language support',
        'SEO optimization',
        'Plagiarism detection',
        'Brand voice customization',
        'Bulk content generation',
        'API integration',
        'Analytics dashboard'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['10,000 words/month', '5 templates', 'Basic analytics'] },
        pro: { price: 79, period: 'month', features: ['50,000 words/month', 'All templates', 'Advanced analytics', 'API access'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited words', 'Custom templates', 'White-label', 'Priority support'] }
      },
      rating: 4.9,
      reviews: 1247,
      status: 'popular'
    },
    {
      id: 'ai-image-generator',
      name: 'AI Image Generator Studio',
      category: 'design',
      icon: Image,
      description: 'Professional AI image generation tool with advanced editing capabilities, style transfer, and batch processing.',
      features: [
        '20+ AI models',
        'High-resolution output',
        'Style transfer',
        'Background removal',
        'Image upscaling',
        'Batch processing',
        'Commercial license',
        'API access'
      ],
      pricing: {
        starter: { price: 19, period: 'month', features: ['100 images/month', 'HD quality', '5 styles'] },
        pro: { price: 49, period: 'month', features: ['500 images/month', '4K quality', 'All styles', 'API access'] },
        enterprise: { price: 149, period: 'month', features: ['Unlimited images', 'Custom models', 'White-label', 'Priority support'] }
      },
      rating: 4.8,
      reviews: 892,
      status: 'trending'
    },
    {
      id: 'ai-video-generator',
      name: 'AI Video Creator',
      category: 'video',
      icon: Video,
      description: 'Revolutionary AI video generation platform that creates professional videos from text, images, and audio inputs.',
      features: [
        'Text-to-video generation',
        'Voice synthesis',
        'Multiple video formats',
        'Template library',
        'Auto-subtitles',
        'Background music',
        'Brand customization',
        'Cloud rendering'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['10 videos/month', '1080p quality', '5 minutes max'] },
        pro: { price: 99, period: 'month', features: ['50 videos/month', '4K quality', '15 minutes max', 'API access'] },
        enterprise: { price: 299, period: 'month', features: ['Unlimited videos', 'Custom models', 'White-label', 'Dedicated support'] }
      },
      rating: 4.7,
      reviews: 634,
      status: 'new'
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder',
      category: 'automation',
      icon: Brain,
      description: 'No-code AI chatbot creation platform with advanced natural language processing and multi-channel deployment.',
      features: [
        'Drag-and-drop builder',
        'Multi-language support',
        'Integration APIs',
        'Analytics dashboard',
        'A/B testing',
        'Live chat handoff',
        'Custom training',
        'White-label options'
      ],
      pricing: {
        starter: { price: 49, period: 'month', features: ['1 chatbot', '1,000 conversations', 'Basic analytics'] },
        pro: { price: 149, period: 'month', features: ['5 chatbots', '10,000 conversations', 'Advanced analytics', 'API access'] },
        enterprise: { price: 399, period: 'month', features: ['Unlimited chatbots', 'Unlimited conversations', 'Custom training', 'Priority support'] }
      },
      rating: 4.9,
      reviews: 1156,
      status: 'popular'
    },
    {
      id: 'ai-data-analyzer',
      name: 'AI Data Analyzer',
      category: 'analytics',
      icon: BarChart,
      description: 'Intelligent data analysis platform that automatically generates insights, reports, and predictions from your data.',
      features: [
        'Auto-data cleaning',
        'Predictive analytics',
        'Interactive dashboards',
        'Report generation',
        'Data visualization',
        'ML model training',
        'API integration',
        'Real-time processing'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['1M rows/month', '5 dashboards', 'Basic reports'] },
        pro: { price: 99, period: 'month', features: ['10M rows/month', 'Unlimited dashboards', 'Advanced reports', 'API access'] },
        enterprise: { price: 299, period: 'month', features: ['Unlimited rows', 'Custom models', 'White-label', 'Dedicated support'] }
      },
      rating: 4.8,
      reviews: 743,
      status: 'trending'
    },
    {
      id: 'ai-email-marketer',
      name: 'AI Email Marketing Suite',
      category: 'marketing',
      icon: Mail,
      description: 'Complete AI-powered email marketing platform with automated campaigns, personalization, and advanced analytics.',
      features: [
        'AI campaign optimization',
        'Personalization engine',
        'A/B testing',
        'Email templates',
        'List segmentation',
        'Deliverability optimization',
        'Analytics dashboard',
        'CRM integration'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['5,000 subscribers', 'Unlimited emails', 'Basic templates'] },
        pro: { price: 79, period: 'month', features: ['25,000 subscribers', 'Advanced templates', 'A/B testing', 'API access'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited subscribers', 'Custom templates', 'White-label', 'Priority support'] }
      },
      rating: 4.7,
      reviews: 987,
      status: 'popular'
    },
    {
      id: 'ai-code-assistant',
      name: 'AI Code Assistant Pro',
      category: 'development',
      icon: Code,
      description: 'Advanced AI coding assistant that helps developers write, debug, and optimize code across multiple programming languages.',
      features: [
        'Multi-language support',
        'Code completion',
        'Bug detection',
        'Code optimization',
        'Documentation generation',
        'Test case creation',
        'Code review',
        'IDE integration'
      ],
      pricing: {
        starter: { price: 19, period: 'month', features: ['100 requests/day', '5 languages', 'Basic features'] },
        pro: { price: 49, period: 'month', features: ['1,000 requests/day', 'All languages', 'Advanced features', 'API access'] },
        enterprise: { price: 149, period: 'month', features: ['Unlimited requests', 'Custom models', 'White-label', 'Dedicated support'] }
      },
      rating: 4.9,
      reviews: 2156,
      status: 'popular'
    },
    {
      id: 'ai-website-builder',
      name: 'AI Website Builder',
      category: 'web',
      icon: Globe,
      description: 'Intelligent website builder that creates professional websites using AI, with automatic optimization and SEO features.',
      features: [
        'AI design generation',
        'Mobile optimization',
        'SEO optimization',
        'Performance monitoring',
        'Content management',
        'E-commerce integration',
        'Analytics integration',
        'Custom domains'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['1 website', '5 pages', 'Basic templates'] },
        pro: { price: 99, period: 'month', features: ['5 websites', 'Unlimited pages', 'All templates', 'API access'] },
        enterprise: { price: 299, period: 'month', features: ['Unlimited websites', 'Custom templates', 'White-label', 'Priority support'] }
      },
      rating: 4.6,
      reviews: 1456,
      status: 'trending'
    },
    {
      id: 'ai-database-manager',
      name: 'AI Database Manager',
      category: 'database',
      icon: Database,
      description: 'Smart database management platform with AI-powered optimization, monitoring, and automated maintenance.',
      features: [
        'Auto-optimization',
        'Performance monitoring',
        'Query optimization',
        'Backup automation',
        'Security scanning',
        'Capacity planning',
        'Alert system',
        'Multi-database support'
      ],
      pricing: {
        starter: { price: 49, period: 'month', features: ['1 database', 'Basic monitoring', 'Email alerts'] },
        pro: { price: 149, period: 'month', features: ['5 databases', 'Advanced monitoring', 'SMS alerts', 'API access'] },
        enterprise: { price: 399, period: 'month', features: ['Unlimited databases', 'Custom monitoring', 'White-label', 'Dedicated support'] }
      },
      rating: 4.8,
      reviews: 567,
      status: 'new'
    },
    {
      id: 'ai-mobile-app-builder',
      name: 'AI Mobile App Builder',
      category: 'mobile',
      icon: Smartphone,
      description: 'No-code mobile app development platform powered by AI, supporting both iOS and Android app creation.',
      features: [
        'Drag-and-drop interface',
        'iOS & Android support',
        'AI design suggestions',
        'App store deployment',
        'Push notifications',
        'Analytics integration',
        'Backend services',
        'White-label options'
      ],
      pricing: {
        starter: { price: 59, period: 'month', features: ['1 app', 'Basic features', 'App store listing'] },
        pro: { price: 149, period: 'month', features: ['5 apps', 'Advanced features', 'Custom branding', 'API access'] },
        enterprise: { price: 399, period: 'month', features: ['Unlimited apps', 'Custom features', 'White-label', 'Priority support'] }
      },
      rating: 4.7,
      reviews: 823,
      status: 'trending'
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      category: 'automation',
      icon: Settings,
      description: 'Intelligent workflow automation platform that learns from your processes and suggests optimizations.',
      features: [
        'Visual workflow builder',
        'AI process optimization',
        'Integration library',
        'Conditional logic',
        'Error handling',
        'Performance analytics',
        'Team collaboration',
        'Custom triggers'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['10 workflows', 'Basic integrations', 'Email support'] },
        pro: { price: 99, period: 'month', features: ['50 workflows', 'All integrations', 'Priority support', 'API access'] },
        enterprise: { price: 299, period: 'month', features: ['Unlimited workflows', 'Custom integrations', 'White-label', 'Dedicated support'] }
      },
      rating: 4.8,
      reviews: 678,
      status: 'popular'
    },
    {
      id: 'ai-security-monitor',
      name: 'AI Security Monitor',
      category: 'security',
      icon: Shield,
      description: 'Advanced AI-powered security monitoring platform that detects threats and provides real-time protection.',
      features: [
        'Threat detection',
        'Real-time monitoring',
        'Incident response',
        'Compliance reporting',
        'Vulnerability scanning',
        'User behavior analysis',
        'API security',
        'Custom rules'
      ],
      pricing: {
        starter: { price: 79, period: 'month', features: ['Basic monitoring', 'Email alerts', 'Standard reports'] },
        pro: { price: 199, period: 'month', features: ['Advanced monitoring', 'SMS alerts', 'Custom reports', 'API access'] },
        enterprise: { price: 499, period: 'month', features: ['Full monitoring', 'Custom alerts', 'White-label', 'Dedicated support'] }
      },
      rating: 4.9,
      reviews: 445,
      status: 'new'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap },
    { id: 'content', name: 'Content Creation', icon: FileText },
    { id: 'design', name: 'Design & Media', icon: Image },
    { id: 'video', name: 'Video Production', icon: Video },
    { id: 'automation', name: 'Automation', icon: Settings },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'marketing', name: 'Marketing', icon: Mail },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'web', name: 'Web Development', icon: Globe },
    { id: 'database', name: 'Database', icon: Database },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'security', name: 'Security', icon: Shield }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  const getStatusBadge = (status: string) => {
    const badges = {
      popular: 'bg-green-100 text-green-800 border-green-200',
      trending: 'bg-blue-100 text-blue-800 border-blue-200',
      new: 'bg-purple-100 text-purple-800 border-purple-200'
    };
    return badges[status as keyof typeof badges] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid particle-bg">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-lg sm:text-xl text-cyan-400 mb-8 font-medium">
              Powerful AI-driven tools for modern businesses
            </p>
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover our comprehensive suite of micro SAAS applications designed to streamline your business operations, 
              boost productivity, and drive growth with cutting-edge AI technology.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto mb-12">
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300 text-xs sm:text-sm">AI-Powered Tools</div>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">10K+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Active Users</div>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-xs sm:text-sm">Uptime</div>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300 text-xs sm:text-sm">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-400'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">
                          {service.rating} ({service.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusBadge(service.status)}`}>
                    {service.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-cyan-400">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Pricing:</h4>
                  <div className="space-y-2">
                    {Object.entries(service.pricing).map(([plan, details]) => (
                      <div key={plan} className="flex justify-between items-center">
                        <span className="text-sm text-gray-300 capitalize">{plan}:</span>
                        <span className="text-sm font-semibold text-cyan-400">
                          ${details.price}/{details.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center">
                    <Play className="w-4 h-4 mr-2" />
                    Try Free
                  </button>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="cyber-card hologram-card p-8 sm:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our micro SAAS solutions to streamline operations, 
              boost productivity, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;
