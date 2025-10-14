import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  CloudIcon, 
  ShieldCheckIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  CogIcon,
  GlobeAltIcon,
  SignalIcon,
  LightBulbIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  DatabaseIcon,
  LockClosedIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  SparklesIcon,
  CommandLineIcon,
  ServerIcon,
  DevicePhoneMobileIcon,
  PresentationChartLineIcon,
  KeyIcon,
  BugAntIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  CubeIcon,
  BoltIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  FireIcon,
  TrophyIcon,
  GiftIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const microSaaSServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform with 50+ templates, multi-language support, and SEO optimization.',
      features: ['50+ Content Templates', 'Multi-language Support', 'SEO Optimization', 'Brand Voice Training', 'Plagiarism Detection'],
      pricing: { monthly: 29, yearly: 290, currency: 'USD' },
      category: 'Content Creation',
      icon: DocumentTextIcon,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      link: '/ai-content-generator'
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot Builder Enterprise',
      description: 'No-code chatbot creation platform with advanced NLP, multi-channel deployment, and analytics dashboard.',
      features: ['No-code Builder', 'Multi-channel Deployment', 'Advanced NLP', 'Analytics Dashboard', 'Custom Integrations'],
      pricing: { monthly: 49, yearly: 490, currency: 'USD' },
      category: 'Customer Support',
      icon: ChatBubbleLeftRightIcon,
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      link: '/ai-chatbot-builder'
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard Pro',
      description: 'Intelligent business analytics platform with predictive insights, automated reporting, and real-time monitoring.',
      features: ['Predictive Analytics', 'Automated Reports', 'Real-time Monitoring', 'Custom Dashboards', 'Data Visualization'],
      pricing: { monthly: 39, yearly: 390, currency: 'USD' },
      category: 'Analytics',
      icon: ChartBarIcon,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      link: '/ai-analytics-dashboard'
    },
    {
      id: 'ai-code-assistant',
      name: 'AI Code Assistant Pro',
      description: 'Intelligent coding assistant with code generation, debugging, documentation, and team collaboration features.',
      features: ['Code Generation', 'Smart Debugging', 'Auto Documentation', 'Team Collaboration', 'Version Control'],
      pricing: { monthly: 59, yearly: 590, currency: 'USD' },
      category: 'Development',
      icon: CodeBracketIcon,
      color: 'from-orange-500 to-red-500',
      popular: true,
      link: '/ai-code-assistant'
    },
    {
      id: 'ai-customer-insights',
      name: 'AI Customer Insights Platform',
      description: 'Advanced customer behavior analysis with sentiment tracking, churn prediction, and personalized recommendations.',
      features: ['Behavior Analysis', 'Sentiment Tracking', 'Churn Prediction', 'Personalized Recommendations', 'ROI Tracking'],
      pricing: { monthly: 79, yearly: 790, currency: 'USD' },
      category: 'Customer Intelligence',
      icon: EyeIcon,
      color: 'from-indigo-500 to-purple-500',
      popular: false,
      link: '/ai-customer-insights'
    },
    {
      id: 'ai-automation-suite',
      name: 'AI Automation Suite',
      description: 'Complete workflow automation platform with RPA, intelligent document processing, and business process optimization.',
      features: ['RPA Automation', 'Document Processing', 'Process Optimization', 'Workflow Designer', 'API Integrations'],
      pricing: { monthly: 99, yearly: 990, currency: 'USD' },
      category: 'Automation',
      icon: CogIcon,
      color: 'from-teal-500 to-blue-500',
      popular: true,
      link: '/ai-automation-suite'
    }
  ];

  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Solutions',
      description: 'Comprehensive cloud migration, optimization, and management services for AWS, Azure, and Google Cloud.',
      features: ['Cloud Migration', 'Cost Optimization', 'Security Hardening', '24/7 Monitoring', 'Disaster Recovery'],
      pricing: { monthly: 299, yearly: 2990, currency: 'USD' },
      category: 'Infrastructure',
      icon: CloudIcon,
      color: 'from-sky-500 to-blue-500',
      popular: true,
      link: '/cloud-infrastructure'
    },
    {
      id: 'cybersecurity-suite',
      name: 'Advanced Cybersecurity Suite',
      description: 'Complete cybersecurity solution with threat detection, vulnerability assessment, and incident response.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Training', 'Compliance Audit'],
      pricing: { monthly: 199, yearly: 1990, currency: 'USD' },
      category: 'Security',
      icon: ShieldCheckIcon,
      color: 'from-red-500 to-pink-500',
      popular: false,
      link: '/cybersecurity-suite'
    },
    {
      id: 'devops-automation',
      name: 'DevOps Automation Platform',
      description: 'Complete CI/CD pipeline setup with automated testing, deployment, and monitoring for modern applications.',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Infrastructure as Code', 'Monitoring'],
      pricing: { monthly: 149, yearly: 1490, currency: 'USD' },
      category: 'DevOps',
      icon: WrenchScrewdriverIcon,
      color: 'from-yellow-500 to-orange-500',
      popular: false,
      link: '/devops-automation'
    },
    {
      id: 'database-optimization',
      name: 'Database Performance Optimization',
      description: 'Database tuning, optimization, and migration services for improved performance and scalability.',
      features: ['Performance Tuning', 'Query Optimization', 'Database Migration', 'Backup Strategy', 'Monitoring'],
      pricing: { monthly: 89, yearly: 890, currency: 'USD' },
      category: 'Database',
      icon: DatabaseIcon,
      color: 'from-emerald-500 to-teal-500',
      popular: false,
      link: '/database-optimization'
    },
    {
      id: 'api-management',
      name: 'API Management Platform',
      description: 'Complete API lifecycle management with security, monitoring, and developer portal capabilities.',
      features: ['API Gateway', 'Rate Limiting', 'Authentication', 'Developer Portal', 'Analytics'],
      pricing: { monthly: 79, yearly: 790, currency: 'USD' },
      category: 'API Management',
      icon: ServerIcon,
      color: 'from-violet-500 to-purple-500',
      popular: false,
      link: '/api-management'
    },
    {
      id: 'mobile-app-development',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile app development with modern frameworks and cloud integration.',
      features: ['Native Development', 'Cross-platform', 'Cloud Integration', 'App Store Deployment', 'Maintenance'],
      pricing: { monthly: 399, yearly: 3990, currency: 'USD' },
      category: 'Mobile Development',
      icon: DevicePhoneMobileIcon,
      color: 'from-pink-500 to-rose-500',
      popular: true,
      link: '/mobile-app-development'
    }
  ];

  const aiServices = [
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision Solutions',
      description: 'Advanced computer vision services for object detection, image recognition, and visual analytics.',
      features: ['Object Detection', 'Image Recognition', 'Visual Analytics', 'Real-time Processing', 'Custom Models'],
      pricing: { monthly: 199, yearly: 1990, currency: 'USD' },
      category: 'Computer Vision',
      icon: EyeIcon,
      color: 'from-cyan-500 to-blue-500',
      popular: false,
      link: '/ai-computer-vision'
    },
    {
      id: 'ai-nlp-platform',
      name: 'AI Natural Language Processing',
      description: 'Advanced NLP services for text analysis, sentiment analysis, and language understanding.',
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation', 'Text Generation', 'Entity Recognition'],
      pricing: { monthly: 149, yearly: 1490, currency: 'USD' },
      category: 'Natural Language',
      icon: ChatBubbleLeftRightIcon,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      link: '/ai-nlp-platform'
    },
    {
      id: 'ai-ml-platform',
      name: 'AI/ML Model Development',
      description: 'Custom machine learning model development and deployment for business-specific use cases.',
      features: ['Custom Models', 'Model Training', 'Model Deployment', 'A/B Testing', 'Performance Monitoring'],
      pricing: { monthly: 299, yearly: 2990, currency: 'USD' },
      category: 'Machine Learning',
      icon: BeakerIcon,
      color: 'from-purple-500 to-indigo-500',
      popular: true,
      link: '/ai-ml-platform'
    },
    {
      id: 'ai-blockchain-solutions',
      name: 'AI-Blockchain Integration',
      description: 'Combining AI with blockchain technology for secure, transparent, and intelligent solutions.',
      features: ['Smart Contracts', 'AI Integration', 'Decentralized AI', 'Token Economics', 'Security'],
      pricing: { monthly: 399, yearly: 3990, currency: 'USD' },
      category: 'Blockchain AI',
      icon: CubeIcon,
      color: 'from-yellow-500 to-orange-500',
      popular: false,
      link: '/ai-blockchain-solutions'
    },
    {
      id: 'ai-iot-solutions',
      name: 'AI-Powered IoT Solutions',
      description: 'Intelligent IoT solutions with edge computing, predictive maintenance, and real-time analytics.',
      features: ['Edge Computing', 'Predictive Maintenance', 'Real-time Analytics', 'Device Management', 'Data Processing'],
      pricing: { monthly: 249, yearly: 2490, currency: 'USD' },
      category: 'IoT AI',
      icon: SignalIcon,
      color: 'from-teal-500 to-cyan-500',
      popular: false,
      link: '/ai-iot-solutions'
    },
    {
      id: 'ai-robotics',
      name: 'AI Robotics Solutions',
      description: 'Intelligent robotics solutions for automation, autonomous systems, and human-robot interaction.',
      features: ['Autonomous Systems', 'Human-Robot Interaction', 'Motion Planning', 'Sensor Integration', 'Safety Systems'],
      pricing: { monthly: 499, yearly: 4990, currency: 'USD' },
      category: 'Robotics',
      icon: CogIcon,
      color: 'from-gray-500 to-slate-500',
      popular: false,
      link: '/ai-robotics'
    }
  ];

  const ServiceCard = ({ service, isPopular = false }: { service: any; isPopular?: boolean }) => (
    <div className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 group ${isPopular ? 'ring-2 ring-purple-400/50' : ''}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
            <StarIcon className="w-4 h-4 mr-1" />
            Most Popular
          </span>
        </div>
      )}
      
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <service.icon className="w-6 h-6 text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
        {service.name}
      </h3>
      
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
        {service.description}
      </p>
      
      <div className="mb-4">
        <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium mb-3">
          {service.category}
        </span>
      </div>
      
      <ul className="space-y-2 mb-6">
        {service.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center text-gray-300 text-sm">
            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-2xl font-bold text-white">
            ${service.pricing.monthly}
          </span>
          <span className="text-gray-400 text-sm">/month</span>
        </div>
        <div className="text-right">
          <div className="text-gray-400 text-sm">Yearly</div>
          <div className="text-lg font-semibold text-green-400">
            ${service.pricing.yearly}
          </div>
        </div>
      </div>
      
      <Link
        to={service.link}
        className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group"
      >
        Get Started
        <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, IT & Micro SaaS Solutions</title>
        <meta name="description" content="Comprehensive AI, IT, and Micro SaaS services including content generation, chatbots, analytics, cloud infrastructure, cybersecurity, and more. Starting from $29/month." />
        <meta name="keywords" content="AI services, IT solutions, micro SaaS, cloud infrastructure, cybersecurity, content generation, chatbots, analytics, machine learning" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1)_0%,transparent_50%)]"></div>
        
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive range of AI, IT, and Micro SaaS solutions designed to transform your business 
                and accelerate growth in the digital age.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <span className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  50+ AI Services
                </span>
                <span className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  30+ IT Solutions
                </span>
                <span className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  25+ Micro SaaS Tools
                </span>
                <span className="flex items-center">
                  <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                  24/7 Support
                </span>
              </div>
            </div>
          </section>

          {/* Micro SaaS Services */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                  <SparklesIcon className="w-8 h-8 mr-3 text-purple-400" />
                  Micro SaaS Solutions
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Powerful, focused tools that solve specific business problems with AI-powered intelligence and automation.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {microSaaSServices.map((service) => (
                  <ServiceCard key={service.id} service={service} isPopular={service.popular} />
                ))}
              </div>
            </div>
          </section>

          {/* IT Services */}
          <section className="py-16 px-4 bg-slate-800/50">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                  <ServerIcon className="w-8 h-8 mr-3 text-blue-400" />
                  IT Services & Solutions
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Comprehensive IT infrastructure, security, and development services to modernize and secure your business.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itServices.map((service) => (
                  <ServiceCard key={service.id} service={service} isPopular={service.popular} />
                ))}
              </div>
            </div>
          </section>

          {/* AI Services */}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                  <CpuChipIcon className="w-8 h-8 mr-3 text-cyan-400" />
                  AI & Machine Learning Services
                </h2>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  Cutting-edge artificial intelligence and machine learning solutions to unlock new possibilities for your business.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiServices.map((service) => (
                  <ServiceCard key={service.id} service={service} isPopular={service.popular} />
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our services can help you achieve your goals and accelerate growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  <BriefcaseIcon className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </Link>
                <Link 
                  to="/demo" 
                  className="border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  <RocketLaunchIcon className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;