'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Zap, 
  Shield, 
  Brain, 
  Cloud, 
  Code, 
  BarChart, 
  MessageCircle, 
  FileText, 
  Workflow, 
  Users, 
  Lock, 
  Globe, 
  Smartphone, 
  Database, 
  Settings, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  CreditCard,
  Clock,
  Award,
  Target,
  TrendingUp,
  Cpu,
  Wifi,
  Eye,
  Mic,
  Calendar,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const MicroSaasServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const microSaasServices = [
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform with multi-language support, SEO optimization, and brand voice training.',
      price: '$29/month',
      originalPrice: '$49/month',
      features: [
        'Multi-language content generation',
        'SEO optimization and keyword research',
        'Brand voice training and customization',
        'Content scheduling and automation',
        'Plagiarism detection and originality scoring',
        'Social media content optimization',
        'Blog post and article generation',
        'Email marketing content creation'
      ],
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      category: 'AI & Content',
      popularity: 'Most Popular',
      trialDays: 14,
      setupTime: '5 minutes',
      integrations: ['WordPress', 'HubSpot', 'Mailchimp', 'Social Media APIs']
    },
    {
      id: 'cyber-security-monitor',
      title: 'CyberGuard Security Monitor',
      description: 'Real-time cybersecurity monitoring and threat detection for small to medium businesses.',
      price: '$79/month',
      originalPrice: '$129/month',
      features: [
        '24/7 real-time threat monitoring',
        'Automated vulnerability scanning',
        'Incident response automation',
        'Compliance reporting (GDPR, HIPAA)',
        'Employee security training modules',
        'Dark web monitoring',
        'Security policy management',
        'Multi-factor authentication setup'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security',
      popularity: 'Enterprise',
      trialDays: 7,
      setupTime: '30 minutes',
      integrations: ['Active Directory', 'Office 365', 'Google Workspace', 'Slack']
    },
    {
      id: 'business-analytics-dashboard',
      title: 'DataViz Analytics Dashboard',
      description: 'Comprehensive business intelligence and analytics platform with real-time reporting and predictive insights.',
      price: '$49/month',
      originalPrice: '$89/month',
      features: [
        'Real-time data visualization',
        'Custom dashboard creation',
        'Predictive analytics and forecasting',
        'Automated report generation',
        'Data source integration (50+ connectors)',
        'Mobile-responsive dashboards',
        'Team collaboration features',
        'White-label customization'
      ],
      icon: BarChart,
      color: 'from-blue-500 to-cyan-500',
      category: 'Analytics',
      popularity: 'Trending',
      trialDays: 21,
      setupTime: '15 minutes',
      integrations: ['Salesforce', 'Google Analytics', 'Stripe', 'Shopify', 'MySQL', 'PostgreSQL']
    },
    {
      id: 'ai-customer-support',
      title: 'SupportBot AI Assistant',
      description: 'Intelligent customer support automation with natural language processing and multi-channel support.',
      price: '$39/month',
      originalPrice: '$69/month',
      features: [
        'Multi-channel support (Email, Chat, Social)',
        'Natural language processing',
        'Sentiment analysis and escalation',
        'Knowledge base management',
        'Ticket routing and prioritization',
        'Performance analytics and reporting',
        'Custom bot training and optimization',
        'Integration with popular CRM systems'
      ],
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-500',
      category: 'Customer Support',
      popularity: 'Best Value',
      trialDays: 14,
      setupTime: '10 minutes',
      integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'HubSpot', 'Salesforce']
    },
    {
      id: 'workflow-automation',
      title: 'FlowMaster Automation Suite',
      description: 'Powerful workflow automation platform to streamline business processes and increase productivity.',
      price: '$59/month',
      originalPrice: '$99/month',
      features: [
        'Visual workflow builder',
        '500+ pre-built automation templates',
        'Multi-app integration capabilities',
        'Conditional logic and branching',
        'Scheduled and event-triggered workflows',
        'Team collaboration and sharing',
        'Advanced error handling and logging',
        'Custom webhook and API integration'
      ],
      icon: Workflow,
      color: 'from-orange-500 to-red-500',
      category: 'Automation',
      popularity: 'Productivity',
      trialDays: 30,
      setupTime: '20 minutes',
      integrations: ['Zapier', 'Microsoft Power Automate', 'IFTTT', 'Webhooks', 'REST APIs']
    },
    {
      id: 'ai-email-marketing',
      title: 'EmailGenius AI Platform',
      description: 'AI-powered email marketing platform with advanced segmentation, personalization, and automation.',
      price: '$34/month',
      originalPrice: '$59/month',
      features: [
        'AI-powered email content generation',
        'Advanced audience segmentation',
        'Behavioral trigger automation',
        'A/B testing and optimization',
        'Deliverability monitoring and optimization',
        'Template library with customization',
        'Detailed analytics and reporting',
        'GDPR compliance tools'
      ],
      icon: Mail,
      color: 'from-indigo-500 to-purple-500',
      category: 'Marketing',
      popularity: 'Growth',
      trialDays: 14,
      setupTime: '5 minutes',
      integrations: ['Mailchimp', 'Constant Contact', 'AWeber', 'ConvertKit', 'HubSpot']
    },
    {
      id: 'cloud-storage-manager',
      title: 'CloudSync Pro',
      description: 'Advanced cloud storage management with file synchronization, backup, and collaboration features.',
      price: '$19/month',
      originalPrice: '$39/month',
      features: [
        'Multi-cloud storage integration',
        'Automatic file synchronization',
        'Advanced backup and recovery',
        'Team collaboration and sharing',
        'File versioning and history',
        'Advanced security and encryption',
        'Bandwidth optimization',
        'Mobile app access'
      ],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      category: 'Storage',
      popularity: 'Essential',
      trialDays: 30,
      setupTime: '2 minutes',
      integrations: ['Google Drive', 'Dropbox', 'OneDrive', 'Box', 'Amazon S3']
    },
    {
      id: 'ai-social-media-manager',
      title: 'SocialBoost AI',
      description: 'Comprehensive social media management platform with AI-powered content creation and scheduling.',
      price: '$44/month',
      originalPrice: '$79/month',
      features: [
        'AI-powered post generation',
        'Multi-platform scheduling',
        'Hashtag research and optimization',
        'Engagement analytics and insights',
        'Competitor analysis and monitoring',
        'Content calendar management',
        'Team collaboration tools',
        'Influencer outreach automation'
      ],
      icon: Globe,
      color: 'from-pink-500 to-rose-500',
      category: 'Social Media',
      popularity: 'Viral',
      trialDays: 14,
      setupTime: '10 minutes',
      integrations: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'YouTube']
    }
  ];

  const categories = ['All', 'AI & Content', 'Security', 'Analytics', 'Customer Support', 'Automation', 'Marketing', 'Storage', 'Social Media'];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of micro SAAS services designed to boost your business productivity and efficiency. AI-powered solutions, automation tools, and more." />
        <meta name="keywords" content="micro saas, saas services, business automation, ai tools, productivity software, cloud solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-services" />
      </Helmet>

      {/* Advanced Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="cyber-matrix-bg"></div>
        <div className="quantum-field-bg"></div>
        <div className="holographic-grid"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="container mx-auto px-4 py-16">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="neon-text">Micro SAAS</span>
              <br />
              <span className="holographic-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Powerful, affordable micro SAAS solutions designed to transform your business operations. 
              Choose from our comprehensive suite of AI-powered tools and automation platforms.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-lg">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'cyber-button bg-cyan-500/20 text-cyan-400'
                    : 'glass-card hover:bg-white/10 text-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`glass-card p-6 hover:scale-105 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color}`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-cyan-400 font-semibold">{service.category}</div>
                    {service.popularity && (
                      <div className="text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full mt-1">
                        {service.popularity}
                      </div>
                    )}
                  </div>
                </div>

                {/* Service Title & Description */}
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    {service.trialDays}-day free trial • Setup in {service.setupTime}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Integrations */}
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-2">Integrations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.integrations.slice(0, 3).map((integration, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-700/50 text-xs rounded text-gray-300">
                        {integration}
                      </span>
                    ))}
                    {service.integrations.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 text-xs rounded text-cyan-400">
                        +{service.integrations.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="cyber-button flex-1 flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    Start Free Trial
                  </button>
                  <button 
                    onClick={() => setSelectedService(service.id)}
                    className="glass-card px-4 py-2 hover:bg-white/10 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="glass-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 holographic-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Get started with any of our micro SAAS services today. All plans include 24/7 support, 
                regular updates, and a satisfaction guarantee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button px-8 py-4 text-lg">
                  <CreditCard className="w-5 h-5 mr-2" />
                  View All Pricing Plans
                </button>
                <button className="glass-card px-8 py-4 text-lg hover:bg-white/10 transition-all duration-300">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasServicesPage;