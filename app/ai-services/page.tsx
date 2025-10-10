'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Brain,
  BarChart3,
  MessageCircle,
  FileText,
  Users,
  Shield,
  TrendingUp,
  Target,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Star,
  Zap,
  Database,
  Smartphone,
  Settings,
  Calendar,
  DollarSign,
  Box,
  Globe,
  Lock,
  Cpu,
  Wifi,
  Monitor,
  HardDrive,
  Server,
  Code,
  Palette,
  Music,
  Video,
  MapPin,
  Clock,
  Bell,
  Download,
  Upload,
  Share2,
  Heart,
  ThumbsUp,
  Eye,
  Edit3,
  Trash2,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Home,
  User,
  UserPlus,
  LogIn,
  LogOut,
  Settings2,
  HelpCircle,
  Phone,
  MapPin as MapPinIcon,
  Mail as MailIcon,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  Star as StarIcon,
  Heart as HeartIcon,
  ThumbsUp as ThumbsUpIcon,
  Eye as EyeIcon,
  Edit3 as Edit3Icon,
  Trash2 as Trash2Icon,
  Plus as PlusIcon,
  Minus as MinusIcon,
  X as XIcon,
  Check as CheckIcon,
  AlertCircle as AlertCircleIcon,
  Info as InfoIcon,
  ExternalLink as ExternalLinkIcon,
  ChevronRight as ChevronRightIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  MoreHorizontal as MoreHorizontalIcon,
  MoreVertical as MoreVerticalIcon,
  Home as HomeIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  LogIn as LogInIcon,
  LogOut as LogOutIcon,
  Settings2 as Settings2Icon,
  HelpCircle as HelpCircleIcon,
  Phone as PhoneIcon
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const aiServices = [
    // AI Analytics & Intelligence
    {
      id: 1,
      title: 'AI-Powered Business Intelligence',
      description: 'Advanced AI analytics platform that transforms raw data into actionable insights with predictive modeling, automated reporting, and real-time dashboards.',
      icon: BarChart3,
      category: 'AI Analytics',
      features: [
        'Predictive analytics & forecasting',
        'Real-time data processing',
        'Automated insight generation',
        'Custom dashboard creation',
        'Natural language queries',
        'Anomaly detection',
        'Trend analysis',
        'ROI optimization'
      ],
      price: '$2,999/month',
      popular: true,
      benefits: [
        'Increase decision speed by 400%',
        'Reduce analysis time by 85%',
        'Improve forecast accuracy by 95%',
        'Identify hidden opportunities'
      ],
      useCases: ['Financial forecasting', 'Sales prediction', 'Market analysis', 'Risk assessment', 'Performance optimization'],
      integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'Tableau', 'Power BI', 'MySQL', 'PostgreSQL', 'MongoDB'],
      freeTrial: '30 days',
      setupTime: '2-3 days',
      enterprise: true
    },
    {
      id: 2,
      title: 'AI Customer Support Automation',
      description: 'Intelligent customer service solution with natural language processing, sentiment analysis, and automated ticket routing for 24/7 support.',
      icon: MessageCircle,
      category: 'AI Customer Service',
      features: [
        'Natural language processing',
        'Sentiment analysis',
        'Automated ticket routing',
        'Multi-language support',
        'Knowledge base integration',
        'Live agent handoff',
        'Performance analytics',
        'Custom training models'
      ],
      price: '$1,499/month',
      popular: true,
      benefits: [
        'Reduce support costs by 70%',
        'Improve response time by 90%',
        'Increase customer satisfaction by 50%',
        '24/7 automated support'
      ],
      useCases: ['E-commerce support', 'SaaS customer service', 'Lead qualification', 'FAQ automation', 'Appointment booking'],
      integrations: ['Zendesk', 'Freshdesk', 'Intercom', 'Slack', 'Microsoft Teams', 'Salesforce', 'HubSpot'],
      freeTrial: '21 days',
      setupTime: '1-2 days',
      enterprise: false
    },
    {
      id: 3,
      title: 'AI Content Generation Suite',
      description: 'Comprehensive AI content creation platform that generates high-quality articles, marketing copy, social media posts, and multimedia content.',
      icon: FileText,
      category: 'AI Content',
      features: [
        'Multi-format content generation',
        'SEO optimization',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Multi-language support',
        'Team collaboration',
        'Performance tracking'
      ],
      price: '$799/month',
      popular: true,
      benefits: [
        'Save 90% content creation time',
        'Increase engagement by 200%',
        'Improve SEO rankings by 150%',
        'Maintain consistent brand voice'
      ],
      useCases: ['Content marketing', 'Blog management', 'Social media', 'E-commerce', 'Email campaigns', 'Product descriptions'],
      integrations: ['WordPress', 'Hootsuite', 'Buffer', 'Mailchimp', 'Google Docs', 'Canva', 'Adobe Creative Suite'],
      freeTrial: '14 days',
      setupTime: '1 day',
      enterprise: false
    },
    {
      id: 4,
      title: 'AI Sales & Lead Generation',
      description: 'Intelligent sales automation platform with lead scoring, prospect identification, and personalized outreach campaigns powered by machine learning.',
      icon: Target,
      category: 'AI Sales',
      features: [
        'Lead scoring & qualification',
        'Prospect identification',
        'Personalized outreach',
        'Email sequence automation',
        'Call scheduling & optimization',
        'Pipeline forecasting',
        'Competitor analysis',
        'ROI tracking'
      ],
      price: '$2,499/month',
      popular: true,
      benefits: [
        'Increase conversion rates by 60%',
        'Reduce sales cycle by 40%',
        'Improve lead quality by 80%',
        'Automate prospecting process'
      ],
      useCases: ['B2B sales', 'E-commerce conversion', 'SaaS onboarding', 'Real estate', 'Financial services', 'Consulting'],
      integrations: ['Salesforce', 'HubSpot', 'Pipedrive', 'Mailchimp', 'LinkedIn Sales Navigator', 'Zoom', 'Calendly'],
      freeTrial: '21 days',
      setupTime: '2-3 days',
      enterprise: true
    },
    {
      id: 5,
      title: 'AI Cybersecurity & Threat Detection',
      description: 'Advanced AI-powered security platform that detects, prevents, and responds to cyber threats in real-time with machine learning algorithms.',
      icon: Shield,
      category: 'AI Security',
      features: [
        'Real-time threat detection',
        'Behavioral analysis',
        'Automated incident response',
        'Vulnerability assessment',
        'Compliance monitoring',
        'Threat intelligence',
        'Security orchestration',
        'Forensic analysis'
      ],
      price: '$3,999/month',
      popular: false,
      benefits: [
        'Reduce security incidents by 95%',
        'Improve response time by 80%',
        'Ensure compliance',
        'Protect against zero-day threats'
      ],
      useCases: ['Enterprise security', 'Financial services', 'Healthcare', 'Government', 'Critical infrastructure', 'E-commerce'],
      integrations: ['SIEM systems', 'Firewalls', 'EDR solutions', 'Cloud platforms', 'Identity management', 'Network monitoring'],
      freeTrial: '14 days',
      setupTime: '3-5 days',
      enterprise: true
    },
    {
      id: 6,
      title: 'AI Marketing Automation Platform',
      description: 'Comprehensive AI marketing solution with campaign optimization, audience segmentation, and personalized content delivery across all channels.',
      icon: TrendingUp,
      category: 'AI Marketing',
      features: [
        'Campaign optimization',
        'Audience segmentation',
        'Personalized content delivery',
        'A/B testing automation',
        'Cross-channel orchestration',
        'Attribution modeling',
        'Predictive analytics',
        'ROI optimization'
      ],
      price: '$1,999/month',
      popular: true,
      benefits: [
        'Increase campaign ROI by 300%',
        'Improve conversion rates by 150%',
        'Reduce marketing costs by 40%',
        'Automate complex workflows'
      ],
      useCases: ['Digital marketing', 'E-commerce', 'SaaS growth', 'Lead generation', 'Customer retention', 'Brand awareness'],
      integrations: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Mailchimp', 'HubSpot', 'Salesforce', 'Google Analytics'],
      freeTrial: '21 days',
      setupTime: '2-3 days',
      enterprise: true
    },
    {
      id: 7,
      title: 'AI Document Processing & Analysis',
      description: 'Intelligent document processing system that extracts, analyzes, and categorizes information from various document types using OCR and NLP.',
      icon: FileText,
      category: 'AI Document Processing',
      features: [
        'OCR & text extraction',
        'Document classification',
        'Data extraction & validation',
        'Contract analysis',
        'Compliance checking',
        'Automated workflows',
        'Multi-format support',
        'Quality assurance'
      ],
      price: '$1,299/month',
      popular: false,
      benefits: [
        'Reduce processing time by 90%',
        'Improve accuracy by 95%',
        'Eliminate manual data entry',
        'Ensure compliance'
      ],
      useCases: ['Legal document review', 'Insurance claims', 'Financial processing', 'HR document management', 'Invoice processing'],
      integrations: ['SharePoint', 'Google Drive', 'Dropbox', 'Box', 'Salesforce', 'SAP', 'Oracle', 'Workday'],
      freeTrial: '14 days',
      setupTime: '1-2 days',
      enterprise: true
    },
    {
      id: 8,
      title: 'AI Voice & Speech Recognition',
      description: 'Advanced voice AI platform with speech-to-text, text-to-speech, voice commands, and natural language understanding capabilities.',
      icon: MessageCircle,
      category: 'AI Voice',
      features: [
        'Speech-to-text conversion',
        'Text-to-speech synthesis',
        'Voice command processing',
        'Natural language understanding',
        'Multi-language support',
        'Voice biometrics',
        'Real-time transcription',
        'Custom voice models'
      ],
      price: '$1,799/month',
      popular: false,
      benefits: [
        'Improve accessibility',
        'Enable hands-free operations',
        'Reduce typing time by 80%',
        'Enhance user experience'
      ],
      useCases: ['Voice assistants', 'Call centers', 'Accessibility tools', 'Mobile apps', 'IoT devices', 'Healthcare'],
      integrations: ['Twilio', 'Amazon Connect', 'Microsoft Teams', 'Slack', 'WebRTC', 'Mobile SDKs', 'REST APIs'],
      freeTrial: '14 days',
      setupTime: '2-3 days',
      enterprise: true
    },
    {
      id: 9,
      title: 'AI Computer Vision & Image Analysis',
      description: 'Comprehensive computer vision platform for image recognition, object detection, facial recognition, and visual content analysis.',
      icon: Eye,
      category: 'AI Computer Vision',
      features: [
        'Object detection & recognition',
        'Facial recognition',
        'Image classification',
        'OCR & text extraction',
        'Quality inspection',
        'Visual search',
        'Real-time processing',
        'Custom model training'
      ],
      price: '$2,299/month',
      popular: false,
      benefits: [
        'Automate visual inspections',
        'Improve accuracy by 99%',
        'Enable visual search',
        'Reduce manual labor'
      ],
      useCases: ['Manufacturing quality control', 'Retail analytics', 'Security surveillance', 'Medical imaging', 'Autonomous vehicles'],
      integrations: ['Camera systems', 'Mobile apps', 'Cloud storage', 'IoT devices', 'Security systems', 'Manufacturing equipment'],
      freeTrial: '14 days',
      setupTime: '2-4 days',
      enterprise: true
    },
    {
      id: 10,
      title: 'AI Recommendation Engine',
      description: 'Intelligent recommendation system that provides personalized suggestions for products, content, and services based on user behavior and preferences.',
      icon: Target,
      category: 'AI Recommendations',
      features: [
        'Collaborative filtering',
        'Content-based filtering',
        'Hybrid recommendation models',
        'Real-time personalization',
        'A/B testing framework',
        'Performance analytics',
        'Multi-domain support',
        'Scalable architecture'
      ],
      price: '$1,599/month',
      popular: true,
      benefits: [
        'Increase conversion rates by 200%',
        'Improve user engagement by 150%',
        'Boost average order value by 80%',
        'Reduce bounce rates by 60%'
      ],
      useCases: ['E-commerce', 'Streaming services', 'News platforms', 'Social media', 'Job boards', 'Dating apps'],
      integrations: ['E-commerce platforms', 'CDN services', 'Analytics tools', 'User databases', 'Content management systems'],
      freeTrial: '21 days',
      setupTime: '2-3 days',
      enterprise: true
    },
    {
      id: 11,
      title: 'AI Fraud Detection & Prevention',
      description: 'Advanced fraud detection system that uses machine learning to identify and prevent fraudulent activities in real-time across multiple channels.',
      icon: Shield,
      category: 'AI Fraud Detection',
      features: [
        'Real-time fraud detection',
        'Behavioral analysis',
        'Risk scoring',
        'Transaction monitoring',
        'Identity verification',
        'Pattern recognition',
        'Automated blocking',
        'False positive reduction'
      ],
      price: '$2,799/month',
      popular: false,
      benefits: [
        'Reduce fraud losses by 95%',
        'Improve detection accuracy by 90%',
        'Minimize false positives by 70%',
        'Enable real-time protection'
      ],
      useCases: ['Financial services', 'E-commerce', 'Payment processing', 'Insurance', 'Gaming', 'Cryptocurrency'],
      integrations: ['Payment gateways', 'Banking systems', 'Identity providers', 'Risk databases', 'Compliance tools'],
      freeTrial: '14 days',
      setupTime: '3-5 days',
      enterprise: true
    },
    {
      id: 12,
      title: 'AI Predictive Maintenance',
      description: 'Intelligent maintenance system that predicts equipment failures and optimizes maintenance schedules using IoT data and machine learning.',
      icon: Settings,
      category: 'AI Predictive Maintenance',
      features: [
        'Failure prediction models',
        'IoT data integration',
        'Maintenance scheduling',
        'Cost optimization',
        'Real-time monitoring',
        'Alert systems',
        'Performance analytics',
        'ROI tracking'
      ],
      price: '$1,899/month',
      popular: false,
      benefits: [
        'Reduce downtime by 80%',
        'Lower maintenance costs by 50%',
        'Extend equipment life by 30%',
        'Improve operational efficiency'
      ],
      useCases: ['Manufacturing', 'Transportation', 'Energy', 'Healthcare equipment', 'Data centers', 'Industrial facilities'],
      integrations: ['IoT platforms', 'SCADA systems', 'CMMS software', 'ERP systems', 'Cloud platforms'],
      freeTrial: '21 days',
      setupTime: '2-4 days',
      enterprise: true
    }
  ];

  const categories = [
    'All',
    'AI Analytics',
    'AI Customer Service',
    'AI Content',
    'AI Sales',
    'AI Security',
    'AI Marketing',
    'AI Document Processing',
    'AI Voice',
    'AI Computer Vision',
    'AI Recommendations',
    'AI Fraud Detection',
    'AI Predictive Maintenance'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 9;

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);
  const startIndex = (currentPage - 1) * servicesPerPage;
  const endIndex = startIndex + servicesPerPage;
  const currentServices = filteredServices.slice(startIndex, endIndex);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  return (
    <React.Fragment>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including business intelligence, customer support automation, content generation, sales optimization, and cybersecurity solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, business intelligence, customer support, content generation, sales automation, cybersecurity" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From predictive analytics to automated customer service, 
              our AI services deliver measurable results and competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                📧 Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search AI services..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors appearance-none"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-gray-800">
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.slice(1).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">
                {selectedCategory === 'All' ? 'All AI Services' : `${selectedCategory} Services`}
              </h2>
              <span className="text-gray-300">
                {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
              </span>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentServices.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Popular
                    </div>
                  )}
                  
                  {service.enterprise && (
                    <div className="absolute -top-3 right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Enterprise
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors flex-shrink-0">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <span className="inline-block bg-white/10 text-cyan-400 text-xs px-2 py-1 rounded-full mb-2">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-gray-400 text-sm">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="text-sm text-gray-300 mb-2">
                      {service.freeTrial} free trial • {service.setupTime} setup
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="flex-1 border border-white/20 text-white font-semibold py-3 px-6 rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-12 space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Previous
                </button>
                <div className="flex space-x-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-cyan-500 text-white'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can revolutionize your operations, improve efficiency, and drive growth. 
              Get a personalized consultation and see the power of AI in action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule AI Consultation
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                Request Custom Demo
              </a>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-300 text-sm mb-2">
                📍 364 E Main St STE 1008, Middletown, DE 19709
              </p>
              <p className="text-gray-300 text-sm">
                ⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available
              </p>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default AiServicesPage;