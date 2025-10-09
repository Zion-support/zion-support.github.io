import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp, 
  Globe, 
  Brain, 
  Cpu, 
  Target, 
  BarChart, 
  MessageSquare, 
  Eye, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Code,
  Database,
  Cloud,
  Smartphone,
  Lock,
  Settings,
  FileText,
  Image,
  Video,
  Music,
  Calendar,
  DollarSign,
  Award,
  Rocket,
  Layers,
  Workflow,
  Bot,
  Activity,
  Globe as Web,
  Mail as Email,
  MessageCircle,
  Mic,
  Phone as PhoneIcon,
  Headphones,
  Printer,
  Camera,
  Wrench,
  Cog,
  Monitor,
  Wifi,
  HardDrive,
  Server,
  Network
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSaasServices = [
    // AI-Powered Productivity Tools
    {
      id: 'ai-code-review',
      name: 'AI Code Review Assistant',
      description: 'Automated code analysis, bug detection, and optimization suggestions for developers.',
      icon: Code,
      price: 29,
      period: 'month',
      features: [
        'Automated Code Analysis',
        'Bug Detection & Fixes',
        'Performance Optimization',
        'Security Vulnerability Scanning',
        'Code Quality Metrics',
        'Integration with Git',
        'Multi-language Support',
        'Real-time Feedback'
      ],
      benefits: [
        'Reduce bugs by 80%',
        'Improve code quality',
        'Save 10+ hours/week',
        'Learn best practices'
      ],
      category: 'Development',
      popular: true,
      marketPrice: '$99/month',
      technologies: ['AI/ML', 'Static Analysis', 'Git Integration', 'Multi-language'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-seo-optimizer',
      name: 'AI SEO Optimizer Pro',
      description: 'Intelligent SEO analysis and optimization for websites and content.',
      icon: Target,
      price: 39,
      period: 'month',
      features: [
        'Keyword Research & Analysis',
        'Content Optimization',
        'Technical SEO Audits',
        'Competitor Analysis',
        'Ranking Tracking',
        'Backlink Analysis',
        'Local SEO Optimization',
        'Performance Reports'
      ],
      benefits: [
        'Increase organic traffic by 200%',
        'Improve search rankings',
        'Save 15+ hours/week',
        'Get actionable insights'
      ],
      category: 'Marketing',
      popular: true,
      marketPrice: '$149/month',
      technologies: ['AI/ML', 'SEO APIs', 'Data Analysis', 'Web Scraping'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Business Intelligence',
      description: 'Advanced analytics dashboard with AI-powered insights and predictions.',
      icon: BarChart,
      price: 49,
      period: 'month',
      features: [
        'Real-time Data Visualization',
        'AI-Powered Insights',
        'Predictive Analytics',
        'Custom Dashboards',
        'Automated Reports',
        'Data Integration',
        'Alert System',
        'Mobile App'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify trends early',
        'Save 20+ hours/week',
        'Increase revenue by 25%'
      ],
      category: 'Analytics',
      popular: true,
      marketPrice: '$199/month',
      technologies: ['AI/ML', 'Data Visualization', 'APIs', 'Cloud Computing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'Create high-quality content for blogs, social media, and marketing campaigns.',
      icon: FileText,
      price: 19,
      period: 'month',
      features: [
        'Blog Post Generation',
        'Social Media Content',
        'Email Marketing',
        'Product Descriptions',
        'Ad Copy Creation',
        'Content Optimization',
        'Multi-language Support',
        'Brand Voice Training'
      ],
      benefits: [
        'Create content 10x faster',
        'Improve engagement rates',
        'Save 25+ hours/week',
        'Scale content production'
      ],
      category: 'Content',
      popular: true,
      marketPrice: '$79/month',
      technologies: ['GPT-4', 'NLP', 'Content APIs', 'AI Writing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support Bot',
      description: 'Intelligent chatbot for customer service with human-like interactions.',
      icon: Bot,
      price: 59,
      period: 'month',
      features: [
        'Natural Language Processing',
        'Multi-channel Support',
        'Knowledge Base Integration',
        'Escalation to Humans',
        'Analytics & Insights',
        'Custom Training',
        'API Integration',
        '24/7 Availability'
      ],
      benefits: [
        'Handle 80% of queries automatically',
        'Improve response time by 90%',
        'Reduce support costs by 60%',
        'Increase customer satisfaction'
      ],
      category: 'Customer Service',
      popular: true,
      marketPrice: '$199/month',
      technologies: ['NLP', 'Machine Learning', 'APIs', 'Webhooks'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-social-media-manager',
      name: 'AI Social Media Manager',
      description: 'Automated social media management with content scheduling and engagement.',
      icon: MessageCircle,
      price: 29,
      period: 'month',
      features: [
        'Content Scheduling',
        'Hashtag Optimization',
        'Engagement Analysis',
        'Competitor Monitoring',
        'Influencer Discovery',
        'Trend Analysis',
        'Multi-platform Support',
        'Performance Tracking'
      ],
      benefits: [
        'Increase followers by 300%',
        'Improve engagement rates',
        'Save 15+ hours/week',
        'Grow brand awareness'
      ],
      category: 'Social Media',
      popular: false,
      marketPrice: '$99/month',
      technologies: ['AI/ML', 'Social APIs', 'Data Analysis', 'Automation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-email-marketing',
      name: 'AI Email Marketing Suite',
      description: 'Intelligent email marketing with personalization and automation.',
      icon: Mail,
      price: 39,
      period: 'month',
      features: [
        'Email Template Generation',
        'Personalization Engine',
        'Send Time Optimization',
        'A/B Testing',
        'Segmentation',
        'Automation Workflows',
        'Analytics & Reporting',
        'Compliance Management'
      ],
      benefits: [
        'Increase open rates by 150%',
        'Improve click-through rates',
        'Save 20+ hours/week',
        'Boost conversions'
      ],
      category: 'Email Marketing',
      popular: false,
      marketPrice: '$149/month',
      technologies: ['AI/ML', 'Email APIs', 'Personalization', 'Automation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-project-manager',
      name: 'AI Project Management',
      description: 'Intelligent project management with task automation and resource optimization.',
      icon: Workflow,
      price: 49,
      period: 'month',
      features: [
        'Task Automation',
        'Resource Optimization',
        'Risk Assessment',
        'Progress Tracking',
        'Team Collaboration',
        'Time Estimation',
        'Budget Management',
        'Reporting & Analytics'
      ],
      benefits: [
        'Complete projects 40% faster',
        'Reduce project costs by 25%',
        'Improve team productivity',
        'Minimize risks'
      ],
      category: 'Project Management',
      popular: false,
      marketPrice: '$199/month',
      technologies: ['AI/ML', 'Workflow Automation', 'Data Analysis', 'APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-hr-assistant',
      name: 'AI HR Assistant',
      description: 'Automated HR processes including recruitment, onboarding, and employee management.',
      icon: Users,
      price: 69,
      period: 'month',
      features: [
        'Resume Screening',
        'Interview Scheduling',
        'Onboarding Automation',
        'Performance Tracking',
        'Employee Analytics',
        'Compliance Management',
        'Benefits Administration',
        'Exit Process Automation'
      ],
      benefits: [
        'Reduce hiring time by 50%',
        'Improve candidate quality',
        'Save 30+ hours/week',
        'Enhance employee experience'
      ],
      category: 'Human Resources',
      popular: false,
      marketPrice: '$299/month',
      technologies: ['AI/ML', 'HR APIs', 'Document Processing', 'Workflow Automation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-finance-manager',
      name: 'AI Finance Manager',
      description: 'Intelligent financial management with expense tracking and budgeting.',
      icon: DollarSign,
      price: 39,
      period: 'month',
      features: [
        'Expense Categorization',
        'Budget Planning',
        'Financial Forecasting',
        'Tax Preparation',
        'Invoice Generation',
        'Payment Reminders',
        'Financial Reports',
        'Investment Analysis'
      ],
      benefits: [
        'Save 20+ hours/month',
        'Improve financial accuracy',
        'Reduce tax preparation time',
        'Better financial insights'
      ],
      category: 'Finance',
      popular: false,
      marketPrice: '$149/month',
      technologies: ['AI/ML', 'Financial APIs', 'Data Analysis', 'Automation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-inventory-manager',
      name: 'AI Inventory Manager',
      description: 'Smart inventory management with demand forecasting and optimization.',
      icon: Layers,
      price: 59,
      period: 'month',
      features: [
        'Demand Forecasting',
        'Stock Optimization',
        'Reorder Automation',
        'Supplier Management',
        'Cost Analysis',
        'Quality Control',
        'Multi-location Support',
        'Integration APIs'
      ],
      benefits: [
        'Reduce inventory costs by 30%',
        'Prevent stockouts',
        'Optimize cash flow',
        'Improve efficiency'
      ],
      category: 'Inventory',
      popular: false,
      marketPrice: '$249/month',
      technologies: ['AI/ML', 'Supply Chain APIs', 'Data Analysis', 'Automation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-crm-system',
      name: 'AI CRM System',
      description: 'Intelligent customer relationship management with sales automation.',
      icon: Target,
      price: 49,
      period: 'month',
      features: [
        'Lead Scoring',
        'Sales Automation',
        'Customer Segmentation',
        'Pipeline Management',
        'Communication Tracking',
        'Performance Analytics',
        'Integration APIs',
        'Mobile Access'
      ],
      benefits: [
        'Increase sales by 35%',
        'Improve lead conversion',
        'Save 25+ hours/week',
        'Better customer insights'
      ],
      category: 'CRM',
      popular: false,
      marketPrice: '$199/month',
      technologies: ['AI/ML', 'CRM APIs', 'Data Analysis', 'Automation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-document-processor',
      name: 'AI Document Processor',
      description: 'Intelligent document processing with OCR and data extraction.',
      icon: FileText,
      price: 29,
      period: 'month',
      features: [
        'OCR Text Recognition',
        'Data Extraction',
        'Document Classification',
        'Form Processing',
        'Contract Analysis',
        'Compliance Checking',
        'Batch Processing',
        'API Integration'
      ],
      benefits: [
        'Process documents 20x faster',
        'Reduce manual errors',
        'Save 30+ hours/week',
        'Improve accuracy'
      ],
      category: 'Document Processing',
      popular: false,
      marketPrice: '$99/month',
      technologies: ['OCR', 'AI/ML', 'Document APIs', 'Data Extraction'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-video-editor',
      name: 'AI Video Editor',
      description: 'Automated video editing with AI-powered features and effects.',
      icon: Video,
      price: 39,
      period: 'month',
      features: [
        'Auto Video Editing',
        'Scene Detection',
        'Color Correction',
        'Audio Enhancement',
        'Subtitle Generation',
        'Thumbnail Creation',
        'Social Media Optimization',
        'Cloud Processing'
      ],
      benefits: [
        'Create videos 10x faster',
        'Professional quality output',
        'Save 40+ hours/week',
        'No editing skills required'
      ],
      category: 'Video Production',
      popular: false,
      marketPrice: '$149/month',
      technologies: ['Computer Vision', 'AI/ML', 'Video Processing', 'Cloud Computing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-image-generator',
      name: 'AI Image Generator',
      description: 'Create stunning images and graphics with AI-powered generation.',
      icon: Image,
      price: 19,
      period: 'month',
      features: [
        'Image Generation',
        'Style Transfer',
        'Background Removal',
        'Image Enhancement',
        'Logo Creation',
        'Social Media Graphics',
        'Batch Processing',
        'API Access'
      ],
      benefits: [
        'Create images instantly',
        'Professional quality',
        'Save 20+ hours/week',
        'Unlimited creativity'
      ],
      category: 'Design',
      popular: false,
      marketPrice: '$79/month',
      technologies: ['DALL-E', 'Stable Diffusion', 'Computer Vision', 'AI/ML'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-translator',
      name: 'AI Translator Pro',
      description: 'Advanced translation service with context understanding and localization.',
      icon: Globe,
      price: 29,
      period: 'month',
      features: [
        '100+ Language Support',
        'Context-Aware Translation',
        'Document Translation',
        'Website Localization',
        'Voice Translation',
        'Real-time Translation',
        'API Integration',
        'Quality Assurance'
      ],
      benefits: [
        'Reach global audiences',
        'Maintain brand consistency',
        'Save 25+ hours/week',
        'Improve accuracy'
      ],
      category: 'Translation',
      popular: false,
      marketPrice: '$99/month',
      technologies: ['NLP', 'Machine Translation', 'AI/ML', 'Language APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant',
      description: 'Custom voice assistant for business operations and customer service.',
      icon: Mic,
      price: 49,
      period: 'month',
      features: [
        'Voice Recognition',
        'Natural Language Understanding',
        'Task Automation',
        'Integration APIs',
        'Custom Commands',
        'Multi-language Support',
        'Analytics & Insights',
        'Mobile App'
      ],
      benefits: [
        'Hands-free operations',
        'Improve accessibility',
        'Save 15+ hours/week',
        'Enhance user experience'
      ],
      category: 'Voice AI',
      popular: false,
      marketPrice: '$199/month',
      technologies: ['Speech Recognition', 'NLP', 'Voice Synthesis', 'AI/ML'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-data-analyzer',
      name: 'AI Data Analyzer',
      description: 'Intelligent data analysis with automated insights and reporting.',
      icon: BarChart,
      price: 39,
      period: 'month',
      features: [
        'Automated Data Analysis',
        'Pattern Recognition',
        'Predictive Modeling',
        'Custom Dashboards',
        'Report Generation',
        'Data Visualization',
        'Integration APIs',
        'Real-time Processing'
      ],
      benefits: [
        'Discover hidden insights',
        'Make data-driven decisions',
        'Save 30+ hours/week',
        'Improve accuracy'
      ],
      category: 'Data Analysis',
      popular: false,
      marketPrice: '$149/month',
      technologies: ['AI/ML', 'Data Science', 'Statistical Analysis', 'Visualization'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-security-monitor',
      name: 'AI Security Monitor',
      description: 'Intelligent security monitoring with threat detection and prevention.',
      icon: Shield,
      price: 59,
      period: 'month',
      features: [
        'Threat Detection',
        'Anomaly Detection',
        'Security Monitoring',
        'Incident Response',
        'Compliance Reporting',
        'Real-time Alerts',
        'Integration APIs',
        '24/7 Monitoring'
      ],
      benefits: [
        'Prevent security breaches',
        'Reduce false positives',
        'Save 20+ hours/week',
        'Improve security posture'
      ],
      category: 'Security',
      popular: false,
      marketPrice: '$249/month',
      technologies: ['AI/ML', 'Security APIs', 'Threat Intelligence', 'Monitoring'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent workflow automation with decision-making capabilities.',
      icon: Workflow,
      price: 49,
      period: 'month',
      features: [
        'Process Automation',
        'Decision Automation',
        'Exception Handling',
        'Integration APIs',
        'Custom Workflows',
        'Performance Monitoring',
        'Scalability',
        'Analytics & Reporting'
      ],
      benefits: [
        'Automate 80% of processes',
        'Reduce errors by 90%',
        'Save 40+ hours/week',
        'Improve efficiency'
      ],
      category: 'Automation',
      popular: false,
      marketPrice: '$199/month',
      technologies: ['AI/ML', 'Workflow Engines', 'APIs', 'Process Mining'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: microSaasServices.length },
    { id: 'Development', name: 'Development', count: microSaasServices.filter(s => s.category === 'Development').length },
    { id: 'Marketing', name: 'Marketing', count: microSaasServices.filter(s => s.category === 'Marketing').length },
    { id: 'Analytics', name: 'Analytics', count: microSaasServices.filter(s => s.category === 'Analytics').length },
    { id: 'Content', name: 'Content', count: microSaasServices.filter(s => s.category === 'Content').length },
    { id: 'Customer Service', name: 'Customer Service', count: microSaasServices.filter(s => s.category === 'Customer Service').length },
    { id: 'Social Media', name: 'Social Media', count: microSaasServices.filter(s => s.category === 'Social Media').length },
    { id: 'Email Marketing', name: 'Email Marketing', count: microSaasServices.filter(s => s.category === 'Email Marketing').length },
    { id: 'Project Management', name: 'Project Management', count: microSaasServices.filter(s => s.category === 'Project Management').length },
    { id: 'Human Resources', name: 'Human Resources', count: microSaasServices.filter(s => s.category === 'Human Resources').length },
    { id: 'Finance', name: 'Finance', count: microSaasServices.filter(s => s.category === 'Finance').length },
    { id: 'Inventory', name: 'Inventory', count: microSaasServices.filter(s => s.category === 'Inventory').length },
    { id: 'CRM', name: 'CRM', count: microSaasServices.filter(s => s.category === 'CRM').length },
    { id: 'Document Processing', name: 'Document Processing', count: microSaasServices.filter(s => s.category === 'Document Processing').length },
    { id: 'Video Production', name: 'Video Production', count: microSaasServices.filter(s => s.category === 'Video Production').length },
    { id: 'Design', name: 'Design', count: microSaasServices.filter(s => s.category === 'Design').length },
    { id: 'Translation', name: 'Translation', count: microSaasServices.filter(s => s.category === 'Translation').length },
    { id: 'Voice AI', name: 'Voice AI', count: microSaasServices.filter(s => s.category === 'Voice AI').length },
    { id: 'Data Analysis', name: 'Data Analysis', count: microSaasServices.filter(s => s.category === 'Data Analysis').length },
    { id: 'Security', name: 'Security', count: microSaasServices.filter(s => s.category === 'Security').length },
    { id: 'Automation', name: 'Automation', count: microSaasServices.filter(s => s.category === 'Automation').length }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSaasServices 
    : microSaasServices.filter(service => service.category === selectedCategory);

  const pricingPlans = [
    {
      name: 'Starter',
      price: 99,
      period: 'month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Access to 5 AI Tools',
        'Basic Support',
        'Standard Templates',
        'Email Support',
        'Basic Analytics',
        'API Access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 199,
      period: 'month',
      description: 'Ideal for growing businesses',
      features: [
        'Access to 15 AI Tools',
        'Priority Support',
        'Custom Templates',
        'Phone & Email Support',
        'Advanced Analytics',
        'Full API Access',
        'Custom Integrations',
        'Training Sessions'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 399,
      period: 'month',
      description: 'Complete solution for large organizations',
      features: [
        'Access to All AI Tools',
        '24/7 Dedicated Support',
        'Custom Development',
        'Dedicated Account Manager',
        'Advanced Analytics',
        'White-label Solutions',
        'Custom Integrations',
        'SLA Guarantee',
        'On-site Training'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="50+ AI-powered micro SAAS solutions for modern businesses. Starting at $19/month. Boost productivity, automate processes, and scale your business." />
        <meta name="keywords" content="micro saas, ai tools, business automation, productivity software, ai solutions, saas applications" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto cyber-glow">
            50+ AI-powered micro SAAS tools designed to automate, optimize, and scale your business operations.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="cyber-card hologram-card p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">AI Tools</div>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">$19</div>
              <div className="text-gray-300 text-sm">Starting Price</div>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300 text-sm">Time Saved</div>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">AI Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-8 neon-text">
            Choose Your Category
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            AI-Powered Micro SAAS Tools
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div key={index} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <span className="text-sm text-gray-400">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-cyan-400">${service.price}</span>
                    <span className="text-gray-400 ml-1">/{service.period}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Market Price: <span className="line-through">{service.marketPrice}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-gray-500">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                    className="w-full cyber-button text-center inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    {service.contactInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 text-center relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">${plan.price}</span>
                    <span className="text-gray-400 ml-1">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-cyan-600 hover:bg-cyan-700 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our Micro SAAS Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">AI-Powered</h3>
              <p className="text-gray-300">Advanced AI technology that learns and adapts to your business needs.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Instant Setup</h3>
              <p className="text-gray-300">Get started in minutes with our easy-to-use interface and quick setup.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proven ROI</h3>
              <p className="text-gray-300">Average 300% ROI with measurable business impact and cost savings.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance for all your business data.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Settings className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Customizable</h3>
              <p className="text-gray-300">Tailor each tool to your specific business requirements and workflows.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock support from our expert team to ensure your success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI-powered micro SAAS solutions to automate, optimize, and scale their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          
          <div className="mt-8 text-sm text-gray-400 space-y-1">
            <p>✓ Free consultation • ✓ Custom recommendations • ✓ No setup fees</p>
            <p>✓ 30-day money-back guarantee • ✓ 24/7 support • ✓ Enterprise security</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;