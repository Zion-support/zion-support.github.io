'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, 
  Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, 
  Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, 
  Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, 
  ShoppingCart, BarChart, PieChart, LineChart, Activity, Search, Filter, Download, 
  Upload, Share, Timer, Battery, Camera, Headphones, Speaker, Play, Pause, 
  Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, 
  Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, 
  Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, 
  Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, 
  Kiss, Tongue, Package as PackageIcon, DollarSign as DollarSignIcon, 
  Bot, Cpu as CpuIcon, Zap as ZapIcon, Brain as BrainIcon, 
  TrendingUp as TrendingUpIcon, Target as TargetIcon, Globe as GlobeIcon,
  Database as DatabaseIcon, Smartphone as SmartphoneIcon, Lock as LockIcon,
  Settings as SettingsIcon, Calendar as CalendarIcon, CheckSquare as CheckSquareIcon,
  FileText as FileTextIcon, MessageCircle as MessageCircleIcon, Heart as HeartIcon,
  DollarSign as DollarSignIcon2, Box as BoxIcon, Monitor as MonitorIcon,
  Link as LinkIcon2, Server as ServerIcon, Package as PackageIcon2, Mic as MicIcon,
  Workflow as WorkflowIcon, Eye as EyeIcon, Wifi as WifiIcon, MessageSquare as MessageSquareIcon,
  CheckCircle as CheckCircleIcon, ShoppingCart as ShoppingCartIcon, BarChart as BarChartIcon,
  PieChart as PieChartIcon, LineChart as LineChartIcon, Activity as ActivityIcon,
  Search as SearchIcon, Filter as FilterIcon, Download as DownloadIcon, Upload as UploadIcon,
  Share as ShareIcon, Timer as TimerIcon, Battery as BatteryIcon, Camera as CameraIcon,
  Headphones as HeadphonesIcon, Speaker as SpeakerIcon, Play as PlayIcon, Pause as PauseIcon,
  Bookmark as BookmarkIcon, Flag as FlagIcon, AlertTriangle as AlertTriangleIcon,
  Info as InfoIcon, HelpCircle as HelpCircleIcon, Plus as PlusIcon, Minus as MinusIcon,
  Edit as EditIcon, Trash2 as Trash2Icon, Save as SaveIcon, Copy as CopyIcon,
  Paste as PasteIcon, Cut as CutIcon, Undo as UndoIcon, Redo as RedoIcon,
  RefreshCw as RefreshCwIcon, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon,
  Move as MoveIcon, Maximize as MaximizeIcon, Minimize as MinimizeIcon,
  Square as SquareIcon, Circle as CircleIcon, Triangle as TriangleIcon,
  Hexagon as HexagonIcon, Octagon as OctagonIcon, Pentagon as PentagonIcon,
  Star2 as Star2Icon, Heart2 as Heart2Icon, Smile as SmileIcon, Frown as FrownIcon,
  Meh as MehIcon, Laugh as LaughIcon, Angry as AngryIcon, Surprised as SurprisedIcon,
  Confused as ConfusedIcon, Wink as WinkIcon, Kiss as KissIcon, Tongue as TongueIcon,
  Grid3X3
} from 'lucide-react';

const AiServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid3X3 },
    { id: 'analytics', name: 'Analytics & BI', icon: BarChart },
    { id: 'automation', name: 'Automation', icon: Workflow },
    { id: 'content', name: 'Content & Media', icon: FileText },
    { id: 'customer', name: 'Customer Experience', icon: Users },
    { id: 'security', name: 'Security & Compliance', icon: Shield },
    { id: 'development', name: 'Development Tools', icon: Code },
    { id: 'business', name: 'Business Intelligence', icon: TrendingUp }
  ];

  const aiServices = [
    {
      id: 'ai-analytics-dashboard',
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence platform with real-time AI-powered insights, predictive analytics, and interactive dashboards.',
      category: 'analytics',
      price: '$299/month',
      features: [
        'Real-time data visualization',
        'Predictive analytics engine',
        'Custom dashboard builder',
        'Multi-source data integration',
        'Automated reporting',
        'Mobile-responsive design',
        'API integration',
        'Advanced filtering & search'
      ],
      icon: BarChart,
      color: 'from-purple-500 to-pink-500',
      benefits: [
        'Increase decision-making speed by 40%',
        'Reduce manual reporting time by 60%',
        'Improve data accuracy by 95%',
        'Real-time insights for faster responses'
      ],
      useCases: ['Business Intelligence', 'Performance Monitoring', 'Financial Analytics', 'Marketing Analytics']
    },
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator Studio',
      description: 'Comprehensive content creation platform powered by advanced AI models for blogs, social media, marketing materials, and more.',
      category: 'content',
      price: '$199/month',
      features: [
        'Multi-language content generation',
        'SEO-optimized content',
        'Brand voice training',
        'Content scheduling & publishing',
        'Plagiarism detection',
        'Tone & style customization',
        'Image generation integration',
        'Content performance analytics'
      ],
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      benefits: [
        'Generate 10x more content in same time',
        'Maintain consistent brand voice',
        'Improve SEO rankings by 35%',
        'Reduce content creation costs by 50%'
      ],
      useCases: ['Blog Writing', 'Social Media', 'Marketing Copy', 'Product Descriptions']
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Pro',
      description: 'Intelligent 24/7 customer service solution with natural language processing, sentiment analysis, and seamless human handoff.',
      category: 'customer',
      price: '$399/month',
      features: [
        'Multi-channel support (chat, email, phone)',
        'Sentiment analysis & mood detection',
        'Automated ticket routing',
        'Knowledge base integration',
        'Escalation management',
        'Performance analytics',
        'Multi-language support',
        'Custom bot training'
      ],
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-500',
      benefits: [
        'Reduce response time by 80%',
        'Handle 5x more inquiries simultaneously',
        'Improve customer satisfaction by 45%',
        'Reduce support costs by 60%'
      ],
      useCases: ['Customer Service', 'Technical Support', 'Sales Inquiries', 'FAQ Automation']
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation Suite',
      description: 'Intelligent business process automation that learns and adapts to optimize workflows across your organization.',
      category: 'automation',
      price: '$249/month',
      features: [
        'Process mapping & optimization',
        'Automated workflow execution',
        'Integration with 500+ apps',
        'Performance monitoring',
        'Exception handling',
        'Custom automation rules',
        'Real-time notifications',
        'Compliance tracking'
      ],
      icon: Workflow,
      color: 'from-orange-500 to-red-500',
      benefits: [
        'Automate 70% of repetitive tasks',
        'Reduce process errors by 90%',
        'Increase productivity by 50%',
        'Save 20+ hours per week'
      ],
      useCases: ['HR Processes', 'Finance Automation', 'Sales Workflows', 'IT Operations']
    },
    {
      id: 'ai-cybersecurity-monitor',
      title: 'AI Cybersecurity Monitor Pro',
      description: 'Advanced threat detection and response system using machine learning to protect against evolving cyber threats.',
      category: 'security',
      price: '$499/month',
      features: [
        'Real-time threat detection',
        'Behavioral analysis',
        'Automated incident response',
        'Vulnerability scanning',
        'Compliance reporting',
        'Threat intelligence feeds',
        'Custom security rules',
        '24/7 monitoring dashboard'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      benefits: [
        'Detect threats 10x faster',
        'Reduce false positives by 85%',
        'Automate 80% of security responses',
        'Maintain 99.9% uptime'
      ],
      useCases: ['Threat Detection', 'Compliance Monitoring', 'Incident Response', 'Security Analytics']
    },
    {
      id: 'ai-code-assistant',
      title: 'AI Code Assistant Pro',
      description: 'Intelligent coding companion that helps developers write better code faster with AI-powered suggestions and automation.',
      category: 'development',
      price: '$179/month',
      features: [
        'Code completion & suggestions',
        'Bug detection & fixing',
        'Code review automation',
        'Documentation generation',
        'Test case generation',
        'Refactoring suggestions',
        'Multi-language support',
        'IDE integration'
      ],
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      benefits: [
        'Write code 3x faster',
        'Reduce bugs by 60%',
        'Improve code quality by 40%',
        'Accelerate development cycles'
      ],
      useCases: ['Software Development', 'Code Review', 'Bug Fixing', 'Documentation']
    },
    {
      id: 'ai-predictive-analytics',
      title: 'AI Predictive Analytics Engine',
      description: 'Advanced machine learning platform for forecasting business trends, customer behavior, and market dynamics.',
      category: 'analytics',
      price: '$349/month',
      features: [
        'Time series forecasting',
        'Customer behavior prediction',
        'Market trend analysis',
        'Risk assessment models',
        'Scenario planning',
        'Automated model training',
        'Real-time predictions',
        'Custom algorithm development'
      ],
      icon: TrendingUp,
      color: 'from-teal-500 to-green-500',
      benefits: [
        'Improve forecast accuracy by 75%',
        'Reduce planning time by 50%',
        'Identify opportunities 30% earlier',
        'Minimize business risks'
      ],
      useCases: ['Sales Forecasting', 'Demand Planning', 'Risk Management', 'Market Analysis']
    },
    {
      id: 'ai-document-processing',
      title: 'AI Document Intelligence',
      description: 'Intelligent document processing system that extracts, analyzes, and processes information from various document types.',
      category: 'automation',
      price: '$229/month',
      features: [
        'OCR & text extraction',
        'Document classification',
        'Data validation & verification',
        'Automated data entry',
        'Compliance checking',
        'Multi-format support',
        'Batch processing',
        'Integration APIs'
      ],
      icon: FileText,
      color: 'from-amber-500 to-orange-500',
      benefits: [
        'Process documents 20x faster',
        'Reduce manual data entry by 90%',
        'Improve accuracy by 95%',
        'Eliminate human errors'
      ],
      useCases: ['Invoice Processing', 'Contract Analysis', 'Data Extraction', 'Compliance Review']
    },
    {
      id: 'ai-computer-vision',
      title: 'AI Computer Vision Platform',
      description: 'Advanced image and video analysis platform for object detection, facial recognition, and visual content understanding.',
      category: 'content',
      price: '$279/month',
      features: [
        'Object detection & recognition',
        'Facial recognition & analysis',
        'Image classification',
        'Video content analysis',
        'Real-time processing',
        'Custom model training',
        'API integration',
        'Batch processing capabilities'
      ],
      icon: Eye,
      color: 'from-violet-500 to-purple-500',
      benefits: [
        'Automate visual inspections',
        'Improve security monitoring',
        'Enable visual search capabilities',
        'Reduce manual image analysis time'
      ],
      useCases: ['Quality Control', 'Security Monitoring', 'Visual Search', 'Content Moderation']
    },
    {
      id: 'ai-voice-solutions',
      title: 'AI Voice Solutions Suite',
      description: 'Comprehensive voice AI platform with speech recognition, text-to-speech, and voice analytics capabilities.',
      category: 'customer',
      price: '$199/month',
      features: [
        'Speech-to-text conversion',
        'Text-to-speech synthesis',
        'Voice biometrics',
        'Call analytics & insights',
        'Multi-language support',
        'Real-time processing',
        'Custom voice training',
        'Integration with phone systems'
      ],
      icon: Mic,
      color: 'from-pink-500 to-rose-500',
      benefits: [
        'Improve accessibility',
        'Enhance customer experience',
        'Automate voice interactions',
        'Gain voice analytics insights'
      ],
      useCases: ['Voice Assistants', 'Call Centers', 'Accessibility', 'Voice Analytics']
    },
    {
      id: 'ai-hr-solutions',
      title: 'AI HR Solutions Platform',
      description: 'Intelligent human resources management system with AI-powered recruitment, employee analytics, and performance insights.',
      category: 'business',
      price: '$329/month',
      features: [
        'Resume screening & matching',
        'Candidate assessment',
        'Employee performance analytics',
        'Predictive retention modeling',
        'Skills gap analysis',
        'Automated scheduling',
        'Compliance monitoring',
        'Custom HR workflows'
      ],
      icon: Users,
      color: 'from-cyan-500 to-blue-500',
      benefits: [
        'Reduce hiring time by 50%',
        'Improve candidate quality by 40%',
        'Increase employee retention by 30%',
        'Streamline HR processes'
      ],
      useCases: ['Recruitment', 'Performance Management', 'Employee Analytics', 'HR Automation']
    },
    {
      id: 'ai-financial-analytics',
      title: 'AI Financial Analytics Pro',
      description: 'Advanced financial intelligence platform with AI-powered risk assessment, fraud detection, and investment insights.',
      category: 'analytics',
      price: '$399/month',
      features: [
        'Fraud detection & prevention',
        'Risk assessment models',
        'Investment analysis',
        'Financial forecasting',
        'Compliance monitoring',
        'Real-time alerts',
        'Custom financial models',
        'Regulatory reporting'
      ],
      icon: DollarSign,
      color: 'from-emerald-500 to-green-500',
      benefits: [
        'Detect fraud 95% faster',
        'Reduce financial risks by 60%',
        'Improve investment returns by 25%',
        'Ensure regulatory compliance'
      ],
      useCases: ['Fraud Detection', 'Risk Management', 'Investment Analysis', 'Financial Planning']
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including analytics, automation, content generation, customer support, cybersecurity, and more. Transform your business with cutting-edge artificial intelligence solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, business intelligence, automation, content generation, customer support, cybersecurity, predictive analytics" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive AI services and solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                AI Services
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  & Solutions
                </span>
              </h1>
              <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                Transform your business with our comprehensive suite of AI-powered solutions. 
                From analytics and automation to content generation and cybersecurity, we provide 
                cutting-edge artificial intelligence services tailored to your needs.
              </p>
              <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <category.icon className="h-5 w-5 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <div key={service.id} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs text-gray-400">
                            <CheckCircle className="h-3 w-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Use Cases:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.useCases.map((useCase, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-700 text-xs text-gray-300 rounded">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={`/${service.id}`}
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact our AI experts to discuss your specific needs and discover how our solutions can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Us Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiServicesPage;