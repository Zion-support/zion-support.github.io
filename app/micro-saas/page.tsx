'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart, Brain, Cloud, Shield, Code, Users, Zap, Target, Globe, Database, 
  Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, 
  MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, 
  Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart,
  ArrowRight, Star, Award, Rocket, Sparkles, Cpu, Layers, Headphones, 
  Printer, Router, HardDrive, Mail, Phone, MapPin, Clock, ExternalLink
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Real Micro SAAS Services with actual functionality and pricing
  const microSaasServices = [
    {
      id: 'zion-analytics-pro',
      name: 'Zion Analytics Pro',
      description: 'Advanced business intelligence platform with real-time dashboards, predictive analytics, and automated reporting',
      icon: BarChart,
      price: '$99/month',
      marketPrice: '$299/month',
      category: 'Analytics',
      features: [
        'Real-time data visualization',
        'Predictive analytics & forecasting',
        'Custom dashboard builder',
        'Automated report generation',
        'Multi-source data integration',
        'Advanced filtering & segmentation',
        'Export to PDF/Excel/CSV',
        'White-label options'
      ],
      benefits: [
        'Save 20+ hours/week on reporting',
        'Make data-driven decisions faster',
        'Identify trends before competitors',
        'Reduce manual analysis by 90%'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/analytics-pro',
      documentation: 'https://docs.ziontechgroup.com/analytics-pro',
      supportEmail: 'analytics@ziontechgroup.com'
    },
    {
      id: 'zion-chat-ai',
      name: 'Zion Chat AI',
      description: 'Intelligent customer support chatbot with natural language processing, sentiment analysis, and multi-channel integration',
      icon: MessageCircle,
      price: '$79/month',
      marketPrice: '$199/month',
      category: 'Customer Service',
      features: [
        'Natural language processing',
        'Multi-language support (50+ languages)',
        'Sentiment analysis & emotion detection',
        'CRM integration (Salesforce, HubSpot)',
        'Live chat handoff',
        'Knowledge base integration',
        'Custom training & fine-tuning',
        'Analytics & performance metrics'
      ],
      benefits: [
        'Reduce support costs by 60%',
        '24/7 customer availability',
        'Instant response times',
        'Improved customer satisfaction'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/chat-ai',
      documentation: 'https://docs.ziontechgroup.com/chat-ai',
      supportEmail: 'chat-ai@ziontechgroup.com'
    },
    {
      id: 'zion-security-shield',
      name: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring with threat detection, vulnerability scanning, and automated incident response',
      icon: Shield,
      price: '$149/month',
      marketPrice: '$399/month',
      category: 'Security',
      features: [
        'Real-time threat monitoring',
        'Vulnerability scanning & assessment',
        'Automated incident response',
        'Security compliance reporting',
        'Dark web monitoring',
        'Phishing detection & prevention',
        'Endpoint protection',
        'Security awareness training'
      ],
      benefits: [
        'Proactive threat detection',
        'Reduce security incidents by 80%',
        'Compliance automation',
        '24/7 security monitoring'
      ],
      popular: false,
      demoUrl: 'https://ziontechgroup.com/demo/security-shield',
      documentation: 'https://docs.ziontechgroup.com/security-shield',
      supportEmail: 'security@ziontechgroup.com'
    },
    {
      id: 'zion-cloud-vault',
      name: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated backups, version control, and instant restore',
      icon: Cloud,
      price: '$59/month',
      marketPrice: '$149/month',
      category: 'Storage',
      features: [
        'Automated daily backups',
        'Version control & file history',
        'Instant restore capabilities',
        'Cross-platform synchronization',
        'End-to-end encryption',
        'Compliance with GDPR/HIPAA',
        'Unlimited storage capacity',
        'Team collaboration tools'
      ],
      benefits: [
        'Never lose data again',
        'Instant disaster recovery',
        'Secure file sharing',
        'Compliance guaranteed'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/cloud-vault',
      documentation: 'https://docs.ziontechgroup.com/cloud-vault',
      supportEmail: 'cloud-vault@ziontechgroup.com'
    },
    {
      id: 'zion-content-studio',
      name: 'Zion Content Studio',
      description: 'AI-powered content creation platform for blogs, social media, emails, and marketing materials with brand voice customization',
      icon: FileText,
      price: '$89/month',
      marketPrice: '$249/month',
      category: 'Content',
      features: [
        'AI content generation (GPT-4 powered)',
        'Brand voice customization',
        'SEO optimization',
        'Multi-platform publishing',
        'Content calendar management',
        'Image generation & editing',
        'Video script creation',
        'Performance analytics'
      ],
      benefits: [
        'Save 15+ hours/week on content',
        'Consistent brand voice',
        'SEO-optimized content',
        'Multi-platform publishing'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/content-studio',
      documentation: 'https://docs.ziontechgroup.com/content-studio',
      supportEmail: 'content@ziontechgroup.com'
    },
    {
      id: 'zion-crm-intelligence',
      name: 'Zion CRM Intelligence',
      description: 'AI-enhanced CRM with lead scoring, automated follow-ups, sales forecasting, and customer insights',
      icon: Users,
      price: '$129/month',
      marketPrice: '$299/month',
      category: 'Sales',
      features: [
        'AI-powered lead scoring',
        'Automated follow-up sequences',
        'Sales forecasting & analytics',
        'Customer journey mapping',
        'Email & SMS automation',
        'Integration with 100+ tools',
        'Custom pipeline management',
        'Team collaboration features'
      ],
      benefits: [
        'Increase sales by 35%',
        'Automate repetitive tasks',
        'Better lead qualification',
        'Improved customer relationships'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/crm-intelligence',
      documentation: 'https://docs.ziontechgroup.com/crm-intelligence',
      supportEmail: 'crm@ziontechgroup.com'
    },
    {
      id: 'zion-data-sync',
      name: 'Zion Data Sync',
      description: 'Universal data integration platform connecting 500+ applications with real-time synchronization and data transformation',
      icon: Database,
      price: '$199/month',
      marketPrice: '$499/month',
      category: 'Integration',
      features: [
        '500+ pre-built connectors',
        'Real-time data synchronization',
        'Data transformation & mapping',
        'Error handling & retry logic',
        'Custom API integrations',
        'Data quality monitoring',
        'Compliance & security',
        'Visual workflow builder'
      ],
      benefits: [
        'Connect any application',
        'Real-time data flow',
        'Reduce integration time by 90%',
        'Eliminate data silos'
      ],
      popular: false,
      demoUrl: 'https://ziontechgroup.com/demo/data-sync',
      documentation: 'https://docs.ziontechgroup.com/data-sync',
      supportEmail: 'data-sync@ziontechgroup.com'
    },
    {
      id: 'zion-lead-magnet',
      name: 'Zion Lead Magnet',
      description: 'Advanced lead generation platform with landing page builder, email marketing automation, and lead nurturing sequences',
      icon: Target,
      price: '$69/month',
      marketPrice: '$179/month',
      category: 'Marketing',
      features: [
        'Drag-and-drop landing page builder',
        'Email marketing automation',
        'Lead scoring & qualification',
        'A/B testing & optimization',
        'Social media integration',
        'Analytics & conversion tracking',
        'CRM integration',
        'White-label options'
      ],
      benefits: [
        'Generate 3x more leads',
        'Automate lead nurturing',
        'Higher conversion rates',
        'Complete marketing automation'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/lead-magnet',
      documentation: 'https://docs.ziontechgroup.com/lead-magnet',
      supportEmail: 'leads@ziontechgroup.com'
    },
    {
      id: 'zion-project-master',
      name: 'Zion Project Master',
      description: 'AI-powered project management with task automation, resource optimization, and predictive analytics',
      icon: Calendar,
      price: '$99/month',
      marketPrice: '$249/month',
      category: 'Project Management',
      features: [
        'AI task prioritization',
        'Resource allocation optimization',
        'Predictive project analytics',
        'Team collaboration tools',
        'Time tracking & reporting',
        'Risk assessment & mitigation',
        'Integration with 50+ tools',
        'Custom workflow automation'
      ],
      benefits: [
        'Complete projects 25% faster',
        'Better resource utilization',
        'Predictive risk management',
        'Improved team productivity'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/project-master',
      documentation: 'https://docs.ziontechgroup.com/project-master',
      supportEmail: 'projects@ziontechgroup.com'
    },
    {
      id: 'zion-email-automation',
      name: 'Zion Email Automation',
      description: 'Advanced email marketing platform with AI-powered personalization, behavioral triggers, and advanced analytics',
      icon: Mail,
      price: '$79/month',
      marketPrice: '$199/month',
      category: 'Marketing',
      features: [
        'AI-powered personalization',
        'Behavioral trigger automation',
        'Advanced segmentation',
        'A/B testing & optimization',
        'Deliverability optimization',
        'Advanced analytics & reporting',
        'Template library (1000+ templates)',
        'Multi-channel campaigns'
      ],
      benefits: [
        'Increase email engagement by 40%',
        'Automate email campaigns',
        'Better deliverability rates',
        'Advanced personalization'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/email-automation',
      documentation: 'https://docs.ziontechgroup.com/email-automation',
      supportEmail: 'email@ziontechgroup.com'
    },
    {
      id: 'zion-inventory-smart',
      name: 'Zion Inventory Smart',
      description: 'Intelligent inventory management with demand forecasting, automated reordering, and supply chain optimization',
      icon: Package,
      price: '$149/month',
      marketPrice: '$399/month',
      category: 'Inventory',
      features: [
        'AI demand forecasting',
        'Automated reorder points',
        'Multi-location inventory tracking',
        'Supplier management',
        'Barcode scanning integration',
        'Real-time inventory updates',
        'Cost optimization algorithms',
        'Integration with e-commerce platforms'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Eliminate stockouts',
        'Optimize supply chain',
        'Automated inventory management'
      ],
      popular: false,
      demoUrl: 'https://ziontechgroup.com/demo/inventory-smart',
      documentation: 'https://docs.ziontechgroup.com/inventory-smart',
      supportEmail: 'inventory@ziontechgroup.com'
    },
    {
      id: 'zion-invoice-genius',
      name: 'Zion Invoice Genius',
      description: 'AI-powered invoicing and payment processing with automated reminders, payment tracking, and financial analytics',
      icon: DollarSign,
      price: '$49/month',
      marketPrice: '$129/month',
      category: 'Finance',
      features: [
        'AI-powered invoice generation',
        'Automated payment reminders',
        'Multiple payment gateways',
        'Recurring billing automation',
        'Financial analytics & reporting',
        'Tax calculation & compliance',
        'Client portal integration',
        'Mobile app for on-the-go'
      ],
      benefits: [
        'Get paid 50% faster',
        'Reduce manual invoicing',
        'Automated payment tracking',
        'Better cash flow management'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/invoice-genius',
      documentation: 'https://docs.ziontechgroup.com/invoice-genius',
      supportEmail: 'invoicing@ziontechgroup.com'
    },
    {
      id: 'zion-workflow-automation',
      name: 'Zion Workflow Automation',
      description: 'Visual workflow automation platform with 200+ pre-built automations and custom workflow creation',
      icon: Settings,
      price: '$119/month',
      marketPrice: '$299/month',
      category: 'Automation',
      features: [
        'Visual workflow builder',
        '200+ pre-built automations',
        'Custom workflow creation',
        'Multi-app integrations',
        'Conditional logic & branching',
        'Error handling & retry logic',
        'Workflow analytics',
        'Team collaboration features'
      ],
      benefits: [
        'Automate repetitive tasks',
        'Save 20+ hours/week',
        'Reduce human errors',
        'Scale business operations'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/workflow-automation',
      documentation: 'https://docs.ziontechgroup.com/workflow-automation',
      supportEmail: 'automation@ziontechgroup.com'
    },
    {
      id: 'zion-performance-monitor',
      name: 'Zion Performance Monitor',
      description: 'Real-time application and infrastructure monitoring with AI-powered anomaly detection and automated alerting',
      icon: Monitor,
      price: '$179/month',
      marketPrice: '$449/month',
      category: 'Monitoring',
      features: [
        'Real-time performance monitoring',
        'AI-powered anomaly detection',
        'Automated alerting & escalation',
        'Custom dashboard creation',
        'Log analysis & correlation',
        'Uptime monitoring',
        'Performance optimization recommendations',
        'Integration with 50+ tools'
      ],
      benefits: [
        'Prevent downtime incidents',
        'Optimize application performance',
        'Reduce mean time to resolution',
        'Proactive issue detection'
      ],
      popular: false,
      demoUrl: 'https://ziontechgroup.com/demo/performance-monitor',
      documentation: 'https://docs.ziontechgroup.com/performance-monitor',
      supportEmail: 'monitoring@ziontechgroup.com'
    },
    {
      id: 'zion-compliance-manager',
      name: 'Zion Compliance Manager',
      description: 'Automated compliance management for GDPR, HIPAA, SOX, and other regulations with audit trails and reporting',
      icon: CheckSquare,
      price: '$199/month',
      marketPrice: '$499/month',
      category: 'Compliance',
      features: [
        'Multi-regulation compliance (GDPR, HIPAA, SOX)',
        'Automated audit trail generation',
        'Policy management & distribution',
        'Risk assessment & mitigation',
        'Compliance reporting & dashboards',
        'Employee training management',
        'Document version control',
        'Integration with existing systems'
      ],
      benefits: [
        'Ensure regulatory compliance',
        'Reduce audit preparation time',
        'Automated compliance reporting',
        'Risk mitigation & management'
      ],
      popular: false,
      demoUrl: 'https://ziontechgroup.com/demo/compliance-manager',
      documentation: 'https://docs.ziontechgroup.com/compliance-manager',
      supportEmail: 'compliance@ziontechgroup.com'
    },
    {
      id: 'zion-social-scheduler',
      name: 'Zion Social Scheduler',
      description: 'AI-powered social media management with content scheduling, engagement automation, and performance analytics',
      icon: Globe,
      price: '$89/month',
      marketPrice: '$229/month',
      category: 'Social Media',
      features: [
        'AI content scheduling optimization',
        'Multi-platform posting (Facebook, Twitter, LinkedIn, Instagram)',
        'Engagement automation',
        'Hashtag research & optimization',
        'Performance analytics & insights',
        'Content calendar management',
        'Team collaboration tools',
        'White-label options'
      ],
      benefits: [
        'Increase social engagement by 60%',
        'Save 10+ hours/week on social media',
        'Better content performance',
        'Automated social media management'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/social-scheduler',
      documentation: 'https://docs.ziontechgroup.com/social-scheduler',
      supportEmail: 'social@ziontechgroup.com'
    },
    {
      id: 'zion-ai-video-editor',
      name: 'Zion AI Video Editor',
      description: 'AI-powered video editing platform with automatic editing, subtitle generation, and multi-format export',
      icon: Eye,
      price: '$129/month',
      marketPrice: '$299/month',
      category: 'Video',
      features: [
        'AI automatic video editing',
        'Auto subtitle generation (50+ languages)',
        'Background removal & replacement',
        'Voice enhancement & noise reduction',
        'Multi-format export (MP4, MOV, AVI)',
        'Cloud-based processing',
        'Collaborative editing',
        'Template library (500+ templates)'
      ],
      benefits: [
        'Create professional videos in minutes',
        'Save 80% editing time',
        'No technical skills required',
        'Professional-quality output'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/ai-video-editor',
      documentation: 'https://docs.ziontechgroup.com/ai-video-editor',
      supportEmail: 'video@ziontechgroup.com'
    },
    {
      id: 'zion-ai-translator-pro',
      name: 'Zion AI Translator Pro',
      description: 'Advanced AI translation service supporting 100+ languages with context-aware translation and document processing',
      icon: Globe,
      price: '$79/month',
      marketPrice: '$199/month',
      category: 'Translation',
      features: [
        '100+ language support',
        'Context-aware translation',
        'Document translation (PDF, Word, Excel)',
        'Real-time translation API',
        'Translation memory & consistency',
        'Quality assurance tools',
        'Bulk translation processing',
        'Integration with 50+ applications'
      ],
      benefits: [
        'Accurate translations in 100+ languages',
        'Maintain brand voice across languages',
        'Reduce translation costs by 70%',
        'Faster time to market globally'
      ],
      popular: false,
      demoUrl: 'https://ziontechgroup.com/demo/ai-translator-pro',
      documentation: 'https://docs.ziontechgroup.com/ai-translator-pro',
      supportEmail: 'translation@ziontechgroup.com'
    },
    {
      id: 'zion-ai-code-reviewer',
      name: 'Zion AI Code Reviewer',
      description: 'Intelligent code review platform with automated bug detection, security analysis, and code quality improvement suggestions',
      icon: Code,
      price: '$149/month',
      marketPrice: '$399/month',
      category: 'Development',
      features: [
        'Automated bug detection',
        'Security vulnerability scanning',
        'Code quality analysis',
        'Performance optimization suggestions',
        'Best practices recommendations',
        'Integration with Git/GitHub/GitLab',
        'Team collaboration features',
        'Custom rule configuration'
      ],
      benefits: [
        'Reduce bugs by 60%',
        'Improve code quality',
        'Faster code reviews',
        'Enhanced security posture'
      ],
      popular: false,
      demoUrl: 'https://ziontechgroup.com/demo/ai-code-reviewer',
      documentation: 'https://docs.ziontechgroup.com/ai-code-reviewer',
      supportEmail: 'code-review@ziontechgroup.com'
    },
    {
      id: 'zion-customer-insights',
      name: 'Zion Customer Insights Pro',
      description: 'Advanced customer analytics platform with behavior analysis, churn prediction, and personalized recommendations',
      icon: Users,
      price: '$199/month',
      marketPrice: '$499/month',
      category: 'Analytics',
      features: [
        'Customer behavior analysis',
        'Churn prediction & prevention',
        'Personalized recommendations',
        'Customer journey mapping',
        'Sentiment analysis',
        'Lifetime value prediction',
        'Segmentation & targeting',
        'Real-time customer scoring'
      ],
      benefits: [
        'Reduce churn by 40%',
        'Increase customer lifetime value',
        'Better customer understanding',
        'Data-driven personalization'
      ],
      popular: true,
      demoUrl: 'https://ziontechgroup.com/demo/customer-insights',
      documentation: 'https://docs.ziontechgroup.com/customer-insights',
      supportEmail: 'insights@ziontechgroup.com'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: microSaasServices.length },
    { id: 'Analytics', name: 'Analytics', count: microSaasServices.filter(s => s.category === 'Analytics').length },
    { id: 'Customer Service', name: 'Customer Service', count: microSaasServices.filter(s => s.category === 'Customer Service').length },
    { id: 'Security', name: 'Security', count: microSaasServices.filter(s => s.category === 'Security').length },
    { id: 'Storage', name: 'Storage', count: microSaasServices.filter(s => s.category === 'Storage').length },
    { id: 'Content', name: 'Content', count: microSaasServices.filter(s => s.category === 'Content').length },
    { id: 'Sales', name: 'Sales', count: microSaasServices.filter(s => s.category === 'Sales').length },
    { id: 'Integration', name: 'Integration', count: microSaasServices.filter(s => s.category === 'Integration').length },
    { id: 'Marketing', name: 'Marketing', count: microSaasServices.filter(s => s.category === 'Marketing').length },
    { id: 'Project Management', name: 'Project Management', count: microSaasServices.filter(s => s.category === 'Project Management').length },
    { id: 'Inventory', name: 'Inventory', count: microSaasServices.filter(s => s.category === 'Inventory').length },
    { id: 'Finance', name: 'Finance', count: microSaasServices.filter(s => s.category === 'Finance').length },
    { id: 'Automation', name: 'Automation', count: microSaasServices.filter(s => s.category === 'Automation').length },
    { id: 'Monitoring', name: 'Monitoring', count: microSaasServices.filter(s => s.category === 'Monitoring').length },
    { id: 'Compliance', name: 'Compliance', count: microSaasServices.filter(s => s.category === 'Compliance').length },
    { id: 'Social Media', name: 'Social Media', count: microSaasServices.filter(s => s.category === 'Social Media').length },
    { id: 'Video', name: 'Video', count: microSaasServices.filter(s => s.category === 'Video').length },
    { id: 'Translation', name: 'Translation', count: microSaasServices.filter(s => s.category === 'Translation').length },
    { id: 'Development', name: 'Development', count: microSaasServices.filter(s => s.category === 'Development').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text-enhanced">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Powerful, ready-to-use business tools with AI and automation. 
              Start with a free trial and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">20+</div>
              <div className="text-gray-300">Micro SAAS Tools</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={service.id}
                className={`bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 group ${
                  service.popular ? 'ring-2 ring-cyan-500/50' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400 line-through">{service.marketPrice}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <a
                    href={service.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Try Free Demo
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <div className="flex space-x-2">
                    <a
                      href={service.documentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-slate-800/50 text-gray-300 py-2 px-4 rounded-xl font-medium hover:bg-slate-700/50 hover:text-white transition-all duration-300 text-center"
                    >
                      Documentation
                    </a>
                    <a
                      href={`mailto:${service.supportEmail}`}
                      className="flex-1 bg-slate-800/50 text-gray-300 py-2 px-4 rounded-xl font-medium hover:bg-slate-700/50 hover:text-white transition-all duration-300 text-center"
                    >
                      Contact Support
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with any of our micro SAAS solutions today. 
            All plans include 14-day free trial and 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;