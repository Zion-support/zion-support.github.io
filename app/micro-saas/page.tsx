'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Zap, 
  Brain, 
  Shield, 
  BarChart, 
  Users, 
  Mail, 
  Calendar, 
  FileText, 
  Image, 
  Video, 
  Music, 
  Code, 
  Database, 
  Cloud, 
  Smartphone,
  Globe,
  Lock,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail as MailIcon,
  MapPin,
  Clock
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSAASServices = [
    // AI-Powered Tools
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      category: 'ai-tools',
      icon: Brain,
      description: 'Generate high-quality blog posts, social media content, and marketing copy using advanced AI.',
      features: [
        '50+ content templates',
        'Multi-language support',
        'SEO optimization',
        'Brand voice training',
        'Plagiarism detection',
        'Content scheduling'
      ],
      pricing: '$29/month',
      popular: true,
      link: 'https://ziontechgroup.com/ai-content-generator',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-image-generator',
      name: 'AI Image Generator Studio',
      category: 'ai-tools',
      icon: Image,
      description: 'Create stunning images, logos, and graphics using AI-powered image generation.',
      features: [
        'DALL-E 3 integration',
        'Custom style training',
        'Batch processing',
        'High-resolution output',
        'Commercial license',
        'API access'
      ],
      pricing: '$39/month',
      popular: false,
      link: 'https://ziontechgroup.com/ai-image-generator',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-video-editor',
      name: 'AI Video Editor Pro',
      category: 'ai-tools',
      icon: Video,
      description: 'Automated video editing with AI-powered features for content creators.',
      features: [
        'Auto-editing algorithms',
        'Voice-over generation',
        'Subtitle automation',
        'Music synchronization',
        'Social media formats',
        'Cloud rendering'
      ],
      pricing: '$49/month',
      popular: true,
      link: 'https://ziontechgroup.com/ai-video-editor',
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 'ai-music-composer',
      name: 'AI Music Composer',
      category: 'ai-tools',
      icon: Music,
      description: 'Generate royalty-free music and sound effects for your projects.',
      features: [
        'Multiple genres',
        'Custom length',
        'Mood-based generation',
        'Instrument selection',
        'Commercial use',
        'Download in multiple formats'
      ],
      pricing: '$19/month',
      popular: false,
      link: 'https://ziontechgroup.com/ai-music-composer',
      color: 'from-green-500 to-teal-500'
    },

    // Business Tools
    {
      id: 'smart-crm',
      name: 'Smart CRM Pro',
      category: 'business-tools',
      icon: Users,
      description: 'AI-powered customer relationship management with predictive analytics.',
      features: [
        'Lead scoring',
        'Email automation',
        'Sales forecasting',
        'Customer segmentation',
        'Integration hub',
        'Mobile app'
      ],
      pricing: '$79/month',
      popular: true,
      link: 'https://ziontechgroup.com/smart-crm',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'analytics-dashboard',
      name: 'Analytics Dashboard Pro',
      category: 'business-tools',
      icon: BarChart,
      description: 'Comprehensive business analytics with AI-powered insights and predictions.',
      features: [
        'Real-time dashboards',
        'Custom reports',
        'Data visualization',
        'Predictive analytics',
        'API integrations',
        'White-label options'
      ],
      pricing: '$59/month',
      popular: false,
      link: 'https://ziontechgroup.com/analytics-dashboard',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'email-marketing-suite',
      name: 'Email Marketing Suite',
      category: 'business-tools',
      icon: Mail,
      description: 'Advanced email marketing with AI-powered personalization and automation.',
      features: [
        'AI subject line optimization',
        'Send time optimization',
        'A/B testing',
        'Segmentation tools',
        'Template library',
        'Analytics & reporting'
      ],
      pricing: '$39/month',
      popular: true,
      link: 'https://ziontechgroup.com/email-marketing-suite',
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'project-management-ai',
      name: 'Project Management AI',
      category: 'business-tools',
      icon: Calendar,
      description: 'Intelligent project management with AI-powered task optimization and resource allocation.',
      features: [
        'Smart task assignment',
        'Risk prediction',
        'Resource optimization',
        'Timeline forecasting',
        'Team collaboration',
        'Progress tracking'
      ],
      pricing: '$69/month',
      popular: false,
      link: 'https://ziontechgroup.com/project-management-ai',
      color: 'from-teal-500 to-blue-500'
    },

    // Developer Tools
    {
      id: 'ai-code-assistant',
      name: 'AI Code Assistant Pro',
      category: 'developer-tools',
      icon: Code,
      description: 'AI-powered coding assistant with code generation, debugging, and optimization.',
      features: [
        'Code generation',
        'Bug detection',
        'Performance optimization',
        'Documentation generation',
        'Multi-language support',
        'IDE integration'
      ],
      pricing: '$49/month',
      popular: true,
      link: 'https://ziontechgroup.com/ai-code-assistant',
      color: 'from-gray-500 to-slate-500'
    },
    {
      id: 'api-testing-suite',
      name: 'API Testing Suite Pro',
      category: 'developer-tools',
      icon: Database,
      description: 'Comprehensive API testing and monitoring with automated test generation.',
      features: [
        'Automated test generation',
        'Performance monitoring',
        'Load testing',
        'Security scanning',
        'Documentation generation',
        'CI/CD integration'
      ],
      pricing: '$39/month',
      popular: false,
      link: 'https://ziontechgroup.com/api-testing-suite',
      color: 'from-emerald-500 to-green-500'
    },
    {
      id: 'cloud-deployment-ai',
      name: 'Cloud Deployment AI',
      category: 'developer-tools',
      icon: Cloud,
      description: 'Intelligent cloud deployment and infrastructure management.',
      features: [
        'Auto-scaling',
        'Cost optimization',
        'Security monitoring',
        'Performance tuning',
        'Multi-cloud support',
        'Disaster recovery'
      ],
      pricing: '$89/month',
      popular: true,
      link: 'https://ziontechgroup.com/cloud-deployment-ai',
      color: 'from-sky-500 to-blue-500'
    },

    // Productivity Tools
    {
      id: 'ai-meeting-assistant',
      name: 'AI Meeting Assistant',
      category: 'productivity-tools',
      icon: Users,
      description: 'AI-powered meeting transcription, summarization, and action item tracking.',
      features: [
        'Real-time transcription',
        'Meeting summaries',
        'Action item extraction',
        'Sentiment analysis',
        'Integration with calendars',
        'Multi-language support'
      ],
      pricing: '$29/month',
      popular: true,
      link: 'https://ziontechgroup.com/ai-meeting-assistant',
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'smart-document-processor',
      name: 'Smart Document Processor',
      category: 'productivity-tools',
      icon: FileText,
      description: 'AI-powered document processing, OCR, and intelligent data extraction.',
      features: [
        'OCR technology',
        'Data extraction',
        'Document classification',
        'Form processing',
        'Batch processing',
        'API integration'
      ],
      pricing: '$39/month',
      popular: false,
      link: 'https://ziontechgroup.com/smart-document-processor',
      color: 'from-amber-500 to-yellow-500'
    },
    {
      id: 'ai-scheduler-pro',
      name: 'AI Scheduler Pro',
      category: 'productivity-tools',
      icon: Calendar,
      description: 'Intelligent scheduling with conflict resolution and optimization.',
      features: [
        'Smart scheduling',
        'Conflict resolution',
        'Time zone handling',
        'Recurring events',
        'Team coordination',
        'Calendar integration'
      ],
      pricing: '$19/month',
      popular: false,
      link: 'https://ziontechgroup.com/ai-scheduler-pro',
      color: 'from-rose-500 to-pink-500'
    },

    // Security Tools
    {
      id: 'ai-security-scanner',
      name: 'AI Security Scanner Pro',
      category: 'security-tools',
      icon: Shield,
      description: 'AI-powered security scanning and vulnerability assessment.',
      features: [
        'Vulnerability scanning',
        'Threat detection',
        'Compliance checking',
        'Security recommendations',
        'Real-time monitoring',
        'Incident response'
      ],
      pricing: '$99/month',
      popular: true,
      link: 'https://ziontechgroup.com/ai-security-scanner',
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'password-manager-ai',
      name: 'Password Manager AI',
      category: 'security-tools',
      icon: Lock,
      description: 'AI-enhanced password management with security recommendations.',
      features: [
        'Password generation',
        'Security analysis',
        'Breach monitoring',
        'Multi-device sync',
        'Biometric login',
        'Family sharing'
      ],
      pricing: '$9/month',
      popular: false,
      link: 'https://ziontechgroup.com/password-manager-ai',
      color: 'from-green-500 to-emerald-500'
    },

    // Mobile Tools
    {
      id: 'mobile-app-builder',
      name: 'Mobile App Builder AI',
      category: 'mobile-tools',
      icon: Smartphone,
      description: 'AI-powered mobile app development with no-code/low-code platform.',
      features: [
        'Drag-and-drop builder',
        'AI code generation',
        'Cross-platform support',
        'App store deployment',
        'Analytics integration',
        'Push notifications'
      ],
      pricing: '$79/month',
      popular: true,
      link: 'https://ziontechgroup.com/mobile-app-builder',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder',
      category: 'mobile-tools',
      icon: MessageCircle,
      description: 'Create intelligent chatbots for websites and mobile apps.',
      features: [
        'Natural language processing',
        'Multi-channel deployment',
        'Custom training',
        'Analytics dashboard',
        'Integration APIs',
        'Voice support'
      ],
      pricing: '$49/month',
      popular: false,
      link: 'https://ziontechgroup.com/ai-chatbot-builder',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Tools', count: microSAASServices.length },
    { id: 'ai-tools', name: 'AI Tools', count: microSAASServices.filter(s => s.category === 'ai-tools').length },
    { id: 'business-tools', name: 'Business Tools', count: microSAASServices.filter(s => s.category === 'business-tools').length },
    { id: 'developer-tools', name: 'Developer Tools', count: microSAASServices.filter(s => s.category === 'developer-tools').length },
    { id: 'productivity-tools', name: 'Productivity Tools', count: microSAASServices.filter(s => s.category === 'productivity-tools').length },
    { id: 'security-tools', name: 'Security Tools', count: microSAASServices.filter(s => s.category === 'security-tools').length },
    { id: 'mobile-tools', name: 'Mobile Tools', count: microSAASServices.filter(s => s.category === 'mobile-tools').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Header */}
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Micro SAAS Solutions">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            100+ AI-Powered Tools for Modern Businesses
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover our comprehensive suite of micro SAAS applications designed to streamline your business operations, 
            boost productivity, and drive growth with cutting-edge AI technology.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
              <div className="text-gray-300">Ready-to-Use Apps</div>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">50K+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white cyber-glow'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-cyan-400'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Popular
                  </div>
                )}
                
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="text-sm text-gray-400">
                        +{service.features.length - 3} more features
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-cyan-400">{service.pricing}</div>
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="ml-1 text-sm text-gray-300">(4.9)</span>
                  </div>
                </div>
                
                <a
                  href={service.link}
                  className="w-full cyber-button text-center inline-flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="cyber-card hologram-card p-12 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            We can build custom micro SAAS applications tailored to your specific business needs. 
            Get a personalized solution with our expert development team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              <MailIcon className="w-4 h-4 mr-2 inline" />
              Email Us
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="cyber-card hologram-card p-6 text-center">
            <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
            <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300">
              {contactInfo.phone}
            </a>
          </div>
          <div className="cyber-card hologram-card p-6 text-center">
            <MailIcon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300">
              {contactInfo.email}
            </a>
          </div>
          <div className="cyber-card hologram-card p-6 text-center">
            <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
            <p className="text-gray-300 text-sm">{contactInfo.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSAASPage;