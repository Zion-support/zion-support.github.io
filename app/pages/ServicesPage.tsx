import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  ShieldCheckIcon, 
  CloudIcon, 
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  ChartBarIcon,
  GlobeAltIcon,
  SignalIcon,
  CogIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClockIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  PlayIcon,
  QuestionMarkCircleIcon,
  PhoneIcon,
  WrenchScrewdriverIcon,
  ServerIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  BeakerIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  LockClosedIcon,
  EyeIcon,
  ShieldExclamationIcon,
  CommandLineIcon,
  DatabaseIcon,
  GlobeAmericasIcon,
  CpuIcon,
  MicrophoneIcon,
  VideoCameraIcon,
  ChatBubbleLeftRightIcon,
  DocumentMagnifyingGlassIcon,
  SparklesIcon,
  BoltIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  WifiIcon,
  TruckIcon,
  BuildingOfficeIcon,
  HomeIcon,
  CarIcon,
  HeartIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  BanknotesIcon,
  CalculatorIcon,
  ClipboardDocumentListIcon,
  DocumentCheckIcon,
  PresentationChartLineIcon,
  UserPlusIcon,
  UserMinusIcon,
  UserGroupIcon as UserGroup,
  CalendarDaysIcon,
  ClockIcon as Clock,
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon as Phone
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const microSaaSServices = [
    {
      icon: ChartBarIcon,
      title: 'AI Analytics Dashboard Pro',
      description: 'Advanced business intelligence dashboard with AI-powered insights, real-time data visualization, and predictive analytics.',
      price: '$299/month',
      features: ['Real-time Analytics', 'AI Predictions', 'Custom Reports', 'API Integration', 'White-label Options'],
      benefits: ['Increase ROI by 40%', 'Reduce decision time by 60%', 'Automated reporting', '24/7 monitoring'],
      category: 'Analytics & BI',
      link: '/ai-analytics-dashboard-pro'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'AI Customer Support Bot',
      description: 'Intelligent customer support chatbot with natural language processing, multi-language support, and seamless human handoff.',
      price: '$199/month',
      features: ['NLP Processing', 'Multi-language', 'Human Handoff', 'Knowledge Base', 'Analytics'],
      benefits: ['Reduce support costs by 50%', '24/7 availability', 'Instant responses', 'Customer satisfaction boost'],
      category: 'Customer Service',
      link: '/ai-customer-support-bot'
    },
    {
      icon: DocumentMagnifyingGlassIcon,
      title: 'AI Content Moderation Suite',
      description: 'Automated content moderation system using AI to detect and filter inappropriate content across multiple platforms.',
      price: '$399/month',
      features: ['Image Recognition', 'Text Analysis', 'Video Processing', 'Real-time Filtering', 'Custom Rules'],
      benefits: ['99.9% accuracy', 'Real-time processing', 'Reduced manual work', 'Compliance ready'],
      category: 'Content Management',
      link: '/ai-content-moderation-pro'
    },
    {
      icon: CalculatorIcon,
      title: 'AI Accounting Assistant',
      description: 'Smart accounting automation tool that handles invoicing, expense tracking, tax calculations, and financial reporting.',
      price: '$149/month',
      features: ['Invoice Generation', 'Expense Tracking', 'Tax Calculations', 'Financial Reports', 'Bank Integration'],
      benefits: ['Save 20 hours/week', 'Reduce errors by 95%', 'Automated compliance', 'Real-time insights'],
      category: 'Finance & Accounting',
      link: '/ai-accounting-assistant'
    },
    {
      icon: ClipboardDocumentListIcon,
      title: 'AI Project Management Pro',
      description: 'Intelligent project management platform with AI-powered task prioritization, resource allocation, and progress tracking.',
      price: '$249/month',
      features: ['AI Task Prioritization', 'Resource Optimization', 'Progress Tracking', 'Team Collaboration', 'Risk Assessment'],
      benefits: ['30% faster delivery', 'Better resource utilization', 'Proactive risk management', 'Improved team productivity'],
      category: 'Project Management',
      link: '/ai-project-management-pro'
    },
    {
      icon: ShoppingCartIcon,
      title: 'AI E-commerce Optimizer',
      description: 'Smart e-commerce platform with AI-powered product recommendations, dynamic pricing, and customer behavior analysis.',
      price: '$349/month',
      features: ['Product Recommendations', 'Dynamic Pricing', 'Customer Analytics', 'Inventory Management', 'A/B Testing'],
      benefits: ['Increase sales by 35%', 'Reduce cart abandonment', 'Optimize pricing strategy', 'Better customer experience'],
      category: 'E-commerce',
      link: '/ai-ecommerce-optimizer'
    }
  ];

  const aiServices = [
    {
      icon: CpuChipIcon,
      title: 'AI Machine Learning Platform',
      description: 'Comprehensive ML platform for building, training, and deploying machine learning models at scale.',
      price: '$2,500/month',
      features: ['Model Training', 'AutoML', 'Model Deployment', 'A/B Testing', 'Monitoring'],
      benefits: ['Faster model development', 'Automated optimization', 'Scalable infrastructure', 'Production-ready deployment'],
      category: 'Machine Learning',
      link: '/ai-ml-platform'
    },
    {
      icon: MicrophoneIcon,
      title: 'AI Voice Processing Suite',
      description: 'Advanced voice recognition, synthesis, and processing capabilities for voice-enabled applications.',
      price: '$1,800/month',
      features: ['Speech Recognition', 'Voice Synthesis', 'Language Translation', 'Voice Analytics', 'Real-time Processing'],
      benefits: ['Multi-language support', 'High accuracy rates', 'Real-time processing', 'Custom voice models'],
      category: 'Voice AI',
      link: '/ai-voice-processing'
    },
    {
      icon: VideoCameraIcon,
      title: 'AI Computer Vision Platform',
      description: 'Advanced computer vision services for image recognition, object detection, and video analysis.',
      price: '$2,200/month',
      features: ['Object Detection', 'Image Classification', 'Video Analysis', 'Facial Recognition', 'Custom Models'],
      benefits: ['High accuracy detection', 'Real-time processing', 'Custom model training', 'API integration'],
      category: 'Computer Vision',
      link: '/ai-computer-vision'
    },
    {
      icon: SparklesIcon,
      title: 'AI Content Generation Pro',
      description: 'Advanced AI content creation platform for generating high-quality text, images, and multimedia content.',
      price: '$1,500/month',
      features: ['Text Generation', 'Image Creation', 'Video Production', 'Content Optimization', 'Brand Consistency'],
      benefits: ['10x faster content creation', 'Consistent brand voice', 'SEO optimization', 'Multi-format support'],
      category: 'Content Creation',
      link: '/ai-content-generation-pro'
    },
    {
      icon: BeakerIcon,
      title: 'AI Data Science Platform',
      description: 'Comprehensive data science platform with AI-powered data analysis, visualization, and predictive modeling.',
      price: '$3,000/month',
      features: ['Data Analysis', 'Predictive Modeling', 'Data Visualization', 'Statistical Analysis', 'Report Generation'],
      benefits: ['Advanced analytics', 'Automated insights', 'Interactive dashboards', 'Statistical accuracy'],
      category: 'Data Science',
      link: '/ai-data-science-platform'
    },
    {
      icon: LockClosedIcon,
      title: 'AI Cybersecurity Monitor',
      description: 'Intelligent cybersecurity monitoring system with AI-powered threat detection and automated response.',
      price: '$2,800/month',
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Risk Assessment', 'Compliance Monitoring'],
      benefits: ['Real-time protection', 'Reduced false positives', 'Automated response', 'Compliance ready'],
      category: 'Cybersecurity',
      link: '/ai-cybersecurity-monitor-pro'
    }
  ];

  const itServices = [
    {
      icon: ServerIcon,
      title: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup, management, and optimization for AWS, Azure, and Google Cloud.',
      price: '$1,200/month',
      features: ['Multi-cloud Support', 'Auto-scaling', 'Cost Optimization', 'Security Hardening', '24/7 Monitoring'],
      benefits: ['Reduced infrastructure costs', 'Improved reliability', 'Enhanced security', 'Scalable architecture'],
      category: 'Cloud Computing',
      link: '/cloud-infrastructure'
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'DevOps & CI/CD Pipeline',
      description: 'Complete DevOps implementation with automated CI/CD pipelines, containerization, and deployment automation.',
      price: '$1,800/month',
      features: ['CI/CD Pipelines', 'Containerization', 'Infrastructure as Code', 'Monitoring', 'Security Scanning'],
      benefits: ['Faster deployments', 'Reduced errors', 'Improved collaboration', 'Automated testing'],
      category: 'DevOps',
      link: '/devops-cicd'
    },
    {
      icon: DatabaseIcon,
      title: 'Database Management & Optimization',
      description: 'Database design, optimization, migration, and management services for improved performance and reliability.',
      price: '$1,500/month',
      features: ['Database Design', 'Performance Tuning', 'Migration Services', 'Backup & Recovery', 'Security Hardening'],
      benefits: ['Improved performance', 'Data security', 'Reduced downtime', 'Cost optimization'],
      category: 'Database',
      link: '/database-management'
    },
    {
      icon: CodeBracketIcon,
      title: 'Custom Software Development',
      description: 'Bespoke software development services for web applications, mobile apps, and enterprise solutions.',
      price: '$150/hour',
      features: ['Web Development', 'Mobile Apps', 'API Development', 'Integration Services', 'Maintenance'],
      benefits: ['Custom solutions', 'Scalable architecture', 'Modern technologies', 'Ongoing support'],
      category: 'Software Development',
      link: '/custom-development'
    },
    {
      icon: ShieldCheckIcon,
      title: 'IT Security & Compliance',
      description: 'Comprehensive IT security services including vulnerability assessment, penetration testing, and compliance.',
      price: '$2,000/month',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Security Training', 'Incident Response'],
      benefits: ['Enhanced security posture', 'Compliance ready', 'Risk mitigation', 'Security awareness'],
      category: 'Security',
      link: '/it-security'
    },
    {
      icon: CogIcon,
      title: 'IT Support & Maintenance',
      description: '24/7 IT support services with proactive monitoring, maintenance, and technical assistance.',
      price: '$800/month',
      features: ['24/7 Support', 'Proactive Monitoring', 'Remote Management', 'Hardware Support', 'Software Updates'],
      benefits: ['Reduced downtime', 'Proactive maintenance', 'Expert support', 'Cost-effective solutions'],
      category: 'Support',
      link: '/it-support'
    }
  ];

  const categories = [
    { name: 'Micro SaaS Solutions', count: microSaaSServices.length, color: 'purple' },
    { name: 'AI Services', count: aiServices.length, color: 'blue' },
    { name: 'IT Services', count: itServices.length, color: 'green' }
  ];

  const ServiceCard = ({ service, index }: { service: any; index: number }) => (
    <div className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
      <div className="flex items-start justify-between mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
          <service.icon className="w-8 h-8 text-white" />
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-purple-400">{service.price}</div>
          <div className="text-sm text-gray-400">{service.category}</div>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
      <p className="text-gray-300 mb-6">{service.description}</p>
      
      <div className="mb-6">
        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
        <div className="flex flex-wrap gap-2">
          {service.features.map((feature: string, idx: number) => (
            <span key={idx} className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm">
              {feature}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-white font-semibold mb-3">Benefits:</h4>
        <ul className="space-y-2">
          {service.benefits.map((benefit: string, idx: number) => (
            <li key={idx} className="flex items-center text-gray-300">
              <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
              <span className="text-sm">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex gap-3">
        <Link 
          to={service.link} 
          className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-center"
        >
          Learn More
        </Link>
        <Link 
          to="/contact" 
          className="border border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
        >
          Contact
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including micro SaaS solutions, machine learning, cloud infrastructure, cybersecurity, and custom software development." />
        <meta name="keywords" content="AI services, IT services, micro SaaS, machine learning, cloud computing, cybersecurity, software development, Zion Tech Group" />
        <meta property="og:title" content="Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI and IT services with competitive pricing and proven results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive AI and IT solutions designed to transform your business with cutting-edge technology, 
                competitive pricing, and proven results.
              </p>
              
              {/* Service Categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                {categories.map((category, index) => (
                  <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                    <div className={`w-12 h-12 bg-gradient-to-r from-${category.color}-500 to-${category.color}-600 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-white font-bold text-xl">{category.count}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-400 text-sm">{category.count} services available</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Micro SaaS Solutions */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Micro <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">SaaS Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Innovative micro SaaS applications designed to solve specific business challenges with 
                cost-effective, scalable solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {microSaaSServices.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* AI Services */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                AI <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced artificial intelligence services powered by cutting-edge machine learning 
                and deep learning technologies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* IT Services */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                IT <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT services including cloud infrastructure, DevOps, security, 
                and custom software development.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Competitive Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transparent, competitive pricing with no hidden fees. Choose the plan that fits your needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4">Micro SaaS</h3>
                <div className="text-4xl font-bold text-purple-400 mb-4">$149 - $399</div>
                <div className="text-gray-300 mb-6">per month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span>Ready-to-use solutions</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span>Quick deployment</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span>Scalable pricing</span>
                  </li>
                </ul>
                <Link to="/micro-saas-solutions" className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block">
                  View Solutions
                </Link>
              </div>
              
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700 border-purple-500">
                <div className="text-center mb-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Services</h3>
                <div className="text-4xl font-bold text-purple-400 mb-4">$1,500 - $3,000</div>
                <div className="text-gray-300 mb-6">per month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span>Custom AI models</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span>24/7 support</span>
                  </li>
                </ul>
                <Link to="/ai-solutions" className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block">
                  View Services
                </Link>
              </div>
              
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-4">IT Services</h3>
                <div className="text-4xl font-bold text-purple-400 mb-4">$800 - $3,000</div>
                <div className="text-gray-300 mb-6">per month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span>Full infrastructure</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span>Security & compliance</span>
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                    <span>Custom development</span>
                  </li>
                </ul>
                <Link to="/it-solutions" className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-center block">
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how our services can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Detailed Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;