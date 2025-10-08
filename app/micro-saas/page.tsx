import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, ArrowRight, Zap, Shield, Clock, Users, TrendingUp, Globe, Smartphone, Database, BarChart3, Mail, Calendar, FileText, Image, Video, Music, Code, Palette, Search, Filter, Download, Upload, Share, Lock, Unlock, Eye, EyeOff, Settings, Bell, Heart, ThumbsUp, MessageCircle, Phone, MapPin, ExternalLink } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Services', icon: '🌟' },
    { id: 'ai', name: 'AI-Powered', icon: '🤖' },
    { id: 'productivity', name: 'Productivity', icon: '⚡' },
    { id: 'marketing', name: 'Marketing', icon: '📈' },
    { id: 'analytics', name: 'Analytics', icon: '📊' },
    { id: 'communication', name: 'Communication', icon: '💬' },
    { id: 'design', name: 'Design & Media', icon: '🎨' },
    { id: 'development', name: 'Development', icon: '💻' },
    { id: 'security', name: 'Security', icon: '🔒' }
  ];

  const microSAASServices = [
    // AI-Powered Services
    {
      id: 1,
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool that generates high-quality articles, blog posts, social media content, and marketing copy in seconds.',
      category: 'ai',
      price: '$29/month',
      features: [
        'Unlimited content generation',
        '50+ content templates',
        'Multi-language support',
        'SEO optimization',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Analytics dashboard'
      ],
      icon: '📝',
      color: 'from-blue-500 to-purple-600',
      popular: true,
      rating: 4.9,
      users: '10K+',
      link: 'https://ziontechgroup.com/ai-content-generator'
    },
    {
      id: 2,
      name: 'AI Code Assistant',
      description: 'Intelligent coding companion that helps developers write, debug, and optimize code across multiple programming languages.',
      category: 'ai',
      price: '$49/month',
      features: [
        'Code completion & suggestions',
        'Bug detection & fixing',
        'Code documentation generation',
        'Refactoring assistance',
        'Multi-language support',
        'Git integration',
        'Code review automation',
        'Performance optimization'
      ],
      icon: '💻',
      color: 'from-green-500 to-teal-600',
      popular: false,
      rating: 4.8,
      users: '5K+',
      link: 'https://ziontechgroup.com/ai-code-assistant'
    },
    {
      id: 3,
      name: 'AI Customer Support Bot',
      description: 'Intelligent chatbot that provides 24/7 customer support with natural language processing and seamless human handoff.',
      category: 'ai',
      price: '$39/month',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Sentiment analysis',
        'Human handoff capability',
        'Knowledge base integration',
        'Custom training',
        'Analytics & insights',
        'API integration'
      ],
      icon: '🤖',
      color: 'from-purple-500 to-pink-600',
      popular: true,
      rating: 4.7,
      users: '8K+',
      link: 'https://ziontechgroup.com/ai-support-bot'
    },

    // Productivity Services
    {
      id: 4,
      name: 'Smart Task Manager',
      description: 'AI-powered task management system that prioritizes tasks, suggests optimal schedules, and tracks productivity metrics.',
      category: 'productivity',
      price: '$19/month',
      features: [
        'AI task prioritization',
        'Smart scheduling',
        'Time tracking',
        'Team collaboration',
        'Progress analytics',
        'Deadline reminders',
        'Mobile app',
        'Integrations'
      ],
      icon: '✅',
      color: 'from-orange-500 to-red-600',
      popular: false,
      rating: 4.6,
      users: '15K+',
      link: 'https://ziontechgroup.com/smart-task-manager'
    },
    {
      id: 5,
      name: 'Email Automation Suite',
      description: 'Advanced email marketing automation platform with AI-driven personalization and behavioral triggers.',
      category: 'productivity',
      price: '$25/month',
      features: [
        'AI personalization',
        'Behavioral triggers',
        'A/B testing',
        'Email templates',
        'List segmentation',
        'Analytics dashboard',
        'CRM integration',
        'Compliance tools'
      ],
      icon: '📧',
      color: 'from-indigo-500 to-blue-600',
      popular: true,
      rating: 4.8,
      users: '12K+',
      link: 'https://ziontechgroup.com/email-automation'
    },

    // Marketing Services
    {
      id: 6,
      name: 'Social Media Scheduler',
      description: 'AI-powered social media management tool that schedules posts, analyzes performance, and suggests optimal posting times.',
      category: 'marketing',
      price: '$35/month',
      features: [
        'Multi-platform posting',
        'AI content suggestions',
        'Optimal timing analysis',
        'Hashtag optimization',
        'Performance analytics',
        'Content calendar',
        'Team collaboration',
        'Brand monitoring'
      ],
      icon: '📱',
      color: 'from-pink-500 to-rose-600',
      popular: true,
      rating: 4.7,
      users: '20K+',
      link: 'https://ziontechgroup.com/social-scheduler'
    },
    {
      id: 7,
      name: 'SEO Optimizer Pro',
      description: 'Comprehensive SEO analysis and optimization tool that provides actionable insights and automated improvements.',
      category: 'marketing',
      price: '$45/month',
      features: [
        'Keyword research',
        'On-page optimization',
        'Technical SEO audit',
        'Competitor analysis',
        'Rank tracking',
        'Content suggestions',
        'Link building tools',
        'Performance monitoring'
      ],
      icon: '🔍',
      color: 'from-yellow-500 to-orange-600',
      popular: false,
      rating: 4.9,
      users: '7K+',
      link: 'https://ziontechgroup.com/seo-optimizer'
    },

    // Analytics Services
    {
      id: 8,
      name: 'Business Intelligence Dashboard',
      description: 'Real-time business analytics platform that transforms data into actionable insights with AI-powered recommendations.',
      category: 'analytics',
      price: '$59/month',
      features: [
        'Real-time dashboards',
        'AI insights',
        'Custom reports',
        'Data visualization',
        'Predictive analytics',
        'Alert system',
        'API integration',
        'White-label options'
      ],
      icon: '📊',
      color: 'from-cyan-500 to-blue-600',
      popular: true,
      rating: 4.8,
      users: '6K+',
      link: 'https://ziontechgroup.com/bi-dashboard'
    },
    {
      id: 9,
      name: 'Website Analytics Pro',
      description: 'Advanced website analytics tool with heatmaps, user behavior tracking, and conversion optimization insights.',
      category: 'analytics',
      price: '$29/month',
      features: [
        'Heatmap analysis',
        'User behavior tracking',
        'Conversion funnels',
        'A/B testing tools',
        'Real-time monitoring',
        'Custom events',
        'Goal tracking',
        'Privacy compliance'
      ],
      icon: '📈',
      color: 'from-emerald-500 to-green-600',
      popular: false,
      rating: 4.6,
      users: '9K+',
      link: 'https://ziontechgroup.com/website-analytics'
    },

    // Communication Services
    {
      id: 10,
      name: 'Video Conferencing AI',
      description: 'AI-enhanced video conferencing platform with automatic transcription, meeting summaries, and smart scheduling.',
      category: 'communication',
      price: '$39/month',
      features: [
        'AI transcription',
        'Meeting summaries',
        'Smart scheduling',
        'Background noise reduction',
        'Virtual backgrounds',
        'Screen sharing',
        'Recording & playback',
        'Integration tools'
      ],
      icon: '🎥',
      color: 'from-violet-500 to-purple-600',
      popular: true,
      rating: 4.7,
      users: '11K+',
      link: 'https://ziontechgroup.com/video-ai'
    },
    {
      id: 11,
      name: 'Team Collaboration Hub',
      description: 'All-in-one team collaboration platform with project management, file sharing, and real-time communication tools.',
      category: 'communication',
      price: '$25/month',
      features: [
        'Project management',
        'File sharing & storage',
        'Real-time chat',
        'Video calls',
        'Task tracking',
        'Document collaboration',
        'Mobile apps',
        'Third-party integrations'
      ],
      icon: '👥',
      color: 'from-slate-500 to-gray-600',
      popular: false,
      rating: 4.5,
      users: '18K+',
      link: 'https://ziontechgroup.com/team-hub'
    },

    // Design & Media Services
    {
      id: 12,
      name: 'AI Design Studio',
      description: 'AI-powered design tool that creates logos, graphics, and marketing materials with professional quality results.',
      category: 'design',
      price: '$35/month',
      features: [
        'AI logo generation',
        'Graphic design tools',
        'Template library',
        'Brand kit management',
        'Image editing',
        'Vector graphics',
        'Export options',
        'Collaboration tools'
      ],
      icon: '🎨',
      color: 'from-rose-500 to-pink-600',
      popular: true,
      rating: 4.8,
      users: '13K+',
      link: 'https://ziontechgroup.com/ai-design-studio'
    },
    {
      id: 13,
      name: 'Video Editor AI',
      description: 'Intelligent video editing platform with automatic editing, AI-powered effects, and professional templates.',
      category: 'design',
      price: '$49/month',
      features: [
        'AI auto-editing',
        'Smart trimming',
        'Effect library',
        'Template collection',
        'Audio enhancement',
        'Color correction',
        'Export options',
        'Cloud storage'
      ],
      icon: '🎬',
      color: 'from-red-500 to-pink-600',
      popular: false,
      rating: 4.6,
      users: '5K+',
      link: 'https://ziontechgroup.com/video-editor-ai'
    },

    // Development Services
    {
      id: 14,
      name: 'API Gateway Manager',
      description: 'Comprehensive API management platform with monitoring, security, and analytics for modern applications.',
      category: 'development',
      price: '$45/month',
      features: [
        'API monitoring',
        'Rate limiting',
        'Authentication',
        'Analytics dashboard',
        'Documentation generator',
        'Testing tools',
        'Version control',
        'Developer portal'
      ],
      icon: '🔌',
      color: 'from-blue-500 to-indigo-600',
      popular: true,
      rating: 4.7,
      users: '4K+',
      link: 'https://ziontechgroup.com/api-gateway'
    },
    {
      id: 15,
      name: 'Database Optimizer',
      description: 'AI-powered database performance optimization tool that analyzes queries and suggests improvements.',
      category: 'development',
      price: '$39/month',
      features: [
        'Query optimization',
        'Performance monitoring',
        'Index suggestions',
        'Slow query detection',
        'Capacity planning',
        'Backup automation',
        'Security scanning',
        'Multi-database support'
      ],
      icon: '🗄️',
      color: 'from-teal-500 to-cyan-600',
      popular: false,
      rating: 4.5,
      users: '3K+',
      link: 'https://ziontechgroup.com/database-optimizer'
    },

    // Security Services
    {
      id: 16,
      name: 'Security Scanner Pro',
      description: 'Comprehensive security scanning tool that identifies vulnerabilities and provides remediation guidance.',
      category: 'security',
      price: '$55/month',
      features: [
        'Vulnerability scanning',
        'Penetration testing',
        'Compliance checking',
        'Threat monitoring',
        'Security reports',
        'Remediation guidance',
        'API security',
        'Cloud security'
      ],
      icon: '🛡️',
      color: 'from-red-500 to-orange-600',
      popular: true,
      rating: 4.9,
      users: '2K+',
      link: 'https://ziontechgroup.com/security-scanner'
    },
    {
      id: 17,
      name: 'Password Manager Enterprise',
      description: 'Enterprise-grade password management solution with advanced security features and team collaboration.',
      category: 'security',
      price: '$25/month',
      features: [
        'Secure password storage',
        'Team sharing',
        'Two-factor authentication',
        'Password generation',
        'Breach monitoring',
        'Compliance tools',
        'SSO integration',
        'Audit logs'
      ],
      icon: '🔐',
      color: 'from-gray-500 to-slate-600',
      popular: false,
      rating: 4.6,
      users: '8K+',
      link: 'https://ziontechgroup.com/password-manager'
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Powerful, Affordable, AI-Enhanced Tools
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover our comprehensive suite of micro SAAS solutions designed to streamline your business operations, 
              boost productivity, and drive growth with cutting-edge AI technology.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">17+</div>
                <div className="text-gray-300">Micro SAAS Tools</div>
              </div>
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">150K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div className="cyber-card hologram-card text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button"
                aria-label="Call us at (302) 464-0950"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-600 text-white shadow-lg'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="cyber-card hologram-card group hover:scale-105 transition-all duration-300">
                {/* Service Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <span className="text-3xl mr-3">{service.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      {service.popular && (
                        <span className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full mt-1">
                          ⭐ POPULAR
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Service Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Pricing & Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-white">{service.price}</div>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {service.rating}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {service.users}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 text-center"
                  >
                    Try Free
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="px-4 py-2 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300"
                  >
                    Call
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Micro SAAS */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            Why Choose Our Micro SAAS Solutions?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-4">Lightning Fast Setup</h3>
              <p className="text-gray-300">
                Get started in minutes with our intuitive setup process. No complex configurations or lengthy onboarding.
              </p>
            </div>
            
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security with end-to-end encryption, compliance certifications, and regular security audits.
              </p>
            </div>
            
            <div className="cyber-card hologram-card text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-4">Proven ROI</h3>
              <p className="text-gray-300">
                Our clients see an average 300% ROI within the first 6 months of implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 neon-text">
            Competitive Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$19<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Up to 3 tools
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Basic support
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Standard features
                </li>
              </ul>
              <a href="tel:+13024640950" className="w-full cyber-button text-center block">
                Get Started
              </a>
            </div>
            
            <div className="cyber-card hologram-card border-2 border-cyan-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$49<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Up to 10 tools
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Advanced features
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  API access
                </li>
              </ul>
              <a href="tel:+13024640950" className="w-full cyber-button text-center block">
                Get Started
              </a>
            </div>
            
            <div className="cyber-card hologram-card">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$99<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited tools
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  24/7 support
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  All features
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <Check className="w-5 h-5 text-green-400 mr-3" />
                  White-label options
                </li>
              </ul>
              <a href="tel:+13024640950" className="w-full cyber-button text-center block">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free initial consultation</p>
            <p>✓ Custom solution design</p>
            <p>✓ 24/7 support available</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;