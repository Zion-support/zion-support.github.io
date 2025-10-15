import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  EyeIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  CogIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  MagnifyingGlassIcon,
  LightBulbIcon,
  CommandLineIcon,
  PaintBrushIcon,
  MicrophoneIcon,
  CameraIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  DatabaseIcon,
  LockClosedIcon,
  BeakerIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  TruckIcon,
  HeartIcon,
  CurrencyDollarIcon as DollarIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const aiSolutions = [
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation Suite',
      description: 'Revolutionary AI-powered content creation platform with advanced natural language processing and multi-format support.',
      features: [
        '50+ Content Templates',
        'Multi-language Support (100+ languages)',
        'SEO Optimization Engine',
        'Brand Voice Training',
        'Plagiarism Detection',
        'Social Media Integration',
        'Real-time Collaboration',
        'API Integration'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['10,000 words/month', 'Basic templates', 'Email support', 'Standard quality'] },
        professional: { price: 79, period: 'month', features: ['50,000 words/month', 'All templates', 'Priority support', 'High quality', 'API access'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited words', 'Custom templates', 'Dedicated support', 'Premium quality', 'White-label solution'] }
      },
      icon: DocumentTextIcon,
      category: 'Content & Marketing',
      popularity: 'Most Popular',
      applications: ['Blog Writing', 'Social Media', 'Email Marketing', 'Product Descriptions', 'SEO Content'],
      link: '/ai-content-generation'
    },
    {
      id: 'ai-chatbot-enterprise',
      title: 'Enterprise AI Chatbot Platform',
      description: 'Advanced conversational AI platform with natural language understanding, multi-channel support, and enterprise-grade security.',
      features: [
        'Natural Language Processing',
        'Multi-channel Support (Web, Mobile, Voice)',
        'Custom Training Models',
        'Real-time Analytics',
        'Integration APIs',
        'Security & Compliance',
        'Multi-language Support',
        'Voice Recognition'
      ],
      pricing: {
        basic: { price: 99, period: 'month', features: ['Up to 1,000 conversations/month', 'Basic NLP', 'Email support', 'Standard integrations'] },
        professional: { price: 299, period: 'month', features: ['Up to 10,000 conversations/month', 'Advanced NLP', 'Priority support', 'Custom integrations', 'Analytics dashboard'] },
        enterprise: { price: 799, period: 'month', features: ['Unlimited conversations', 'Custom AI models', 'Dedicated support', 'Full customization', 'On-premise deployment'] }
      },
      icon: ChatBubbleLeftRightIcon,
      category: 'Customer Service',
      popularity: 'Trending',
      applications: ['Customer Support', 'Sales Assistance', 'Lead Generation', 'FAQ Automation', 'Order Processing'],
      link: '/ai-chatbot-enterprise'
    },
    {
      id: 'ai-computer-vision',
      title: 'AI Computer Vision Platform',
      description: 'Cutting-edge computer vision solutions for image recognition, object detection, and visual analysis across industries.',
      features: [
        'Object Detection & Recognition',
        'Facial Recognition',
        'Image Classification',
        'OCR (Optical Character Recognition)',
        'Real-time Processing',
        'Custom Model Training',
        'API Integration',
        'Cloud & Edge Deployment'
      ],
      pricing: {
        developer: { price: 49, period: 'month', features: ['1,000 images/month', 'Basic models', 'Community support', 'Standard accuracy'] },
        business: { price: 199, period: 'month', features: ['10,000 images/month', 'Advanced models', 'Priority support', 'High accuracy', 'Custom training'] },
        enterprise: { price: 599, period: 'month', features: ['Unlimited images', 'Custom models', 'Dedicated support', 'Maximum accuracy', 'On-premise option'] }
      },
      icon: EyeIcon,
      category: 'Computer Vision',
      popularity: 'Innovative',
      applications: ['Quality Control', 'Security Systems', 'Medical Imaging', 'Autonomous Vehicles', 'Retail Analytics'],
      link: '/ai-computer-vision'
    },
    {
      id: 'ai-predictive-analytics',
      title: 'AI Predictive Analytics Engine',
      description: 'Advanced machine learning platform for business forecasting, trend analysis, and predictive insights across multiple industries.',
      features: [
        'Machine Learning Models',
        'Time Series Forecasting',
        'Anomaly Detection',
        'Custom Model Training',
        'Real-time Predictions',
        'Data Visualization',
        'API Integration',
        'Automated Reporting'
      ],
      pricing: {
        starter: { price: 149, period: 'month', features: ['Up to 1M data points', 'Basic models', 'Email support', 'Standard accuracy'] },
        professional: { price: 399, period: 'month', features: ['Up to 10M data points', 'Advanced models', 'Priority support', 'High accuracy', 'Custom models'] },
        enterprise: { price: 999, period: 'month', features: ['Unlimited data points', 'Custom models', 'Dedicated support', 'Maximum accuracy', 'Real-time processing'] }
      },
      icon: ChartBarIcon,
      category: 'Analytics & Forecasting',
      popularity: 'Best Value',
      applications: ['Sales Forecasting', 'Demand Planning', 'Risk Assessment', 'Market Analysis', 'Inventory Optimization'],
      link: '/ai-predictive-analytics'
    },
    {
      id: 'ai-automation-platform',
      title: 'AI Process Automation Platform',
      description: 'Intelligent automation platform that combines RPA with AI to automate complex business processes and workflows.',
      features: [
        'Workflow Automation',
        'RPA Integration',
        'Document Processing',
        'Data Extraction',
        'Decision Making',
        'Process Monitoring',
        'Custom Workflows',
        'Integration APIs'
      ],
      pricing: {
        basic: { price: 199, period: 'month', features: ['Up to 5 workflows', 'Basic automation', 'Email support', 'Standard templates'] },
        professional: { price: 499, period: 'month', features: ['Up to 25 workflows', 'Advanced automation', 'Priority support', 'Custom workflows', 'Analytics'] },
        enterprise: { price: 1299, period: 'month', features: ['Unlimited workflows', 'Full automation', 'Dedicated support', 'Custom development', 'On-premise option'] }
      },
      icon: CogIcon,
      category: 'Process Automation',
      popularity: 'Efficiency Leader',
      applications: ['Invoice Processing', 'Data Entry', 'Customer Onboarding', 'Report Generation', 'Compliance Monitoring'],
      link: '/ai-automation-platform'
    },
    {
      id: 'ai-cybersecurity-suite',
      title: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered cybersecurity platform with real-time threat detection, behavioral analysis, and automated response.',
      features: [
        'Real-time Threat Detection',
        'Behavioral Analysis',
        'Anomaly Detection',
        'Automated Response',
        'Threat Intelligence',
        'Compliance Monitoring',
        'Incident Management',
        'Security Analytics'
      ],
      pricing: {
        basic: { price: 299, period: 'month', features: ['Up to 100 endpoints', 'Basic monitoring', 'Email alerts', 'Standard protection'] },
        professional: { price: 699, period: 'month', features: ['Up to 500 endpoints', 'Advanced monitoring', 'SMS alerts', 'Enhanced protection', 'Custom rules'] },
        enterprise: { price: 1499, period: 'month', features: ['Unlimited endpoints', 'Full monitoring', 'Dedicated support', 'Maximum protection', 'Custom development'] }
      },
      icon: ShieldCheckIcon,
      category: 'Cybersecurity',
      popularity: 'Security Essential',
      applications: ['Threat Detection', 'Network Security', 'Endpoint Protection', 'Compliance', 'Incident Response'],
      link: '/ai-cybersecurity-suite'
    }
  ];

  const industrySolutions = [
    {
      industry: 'Healthcare',
      icon: HeartIcon,
      solutions: [
        'Medical Image Analysis',
        'Drug Discovery AI',
        'Patient Risk Assessment',
        'Diagnostic Assistance',
        'Treatment Optimization'
      ],
      description: 'AI-powered healthcare solutions for improved patient outcomes and medical research.'
    },
    {
      industry: 'Finance',
      icon: DollarIcon,
      solutions: [
        'Fraud Detection',
        'Algorithmic Trading',
        'Credit Risk Assessment',
        'Regulatory Compliance',
        'Personalized Banking'
      ],
      description: 'Advanced AI solutions for financial services, risk management, and compliance.'
    },
    {
      industry: 'Manufacturing',
      icon: CogIcon,
      solutions: [
        'Quality Control',
        'Predictive Maintenance',
        'Supply Chain Optimization',
        'Process Automation',
        'Defect Detection'
      ],
      description: 'AI-driven manufacturing solutions for efficiency, quality, and predictive maintenance.'
    },
    {
      industry: 'Retail',
      icon: BuildingOfficeIcon,
      solutions: [
        'Customer Analytics',
        'Inventory Optimization',
        'Price Optimization',
        'Recommendation Engines',
        'Visual Search'
      ],
      description: 'AI solutions for retail optimization, customer experience, and sales growth.'
    },
    {
      industry: 'Education',
      icon: AcademicCapIcon,
      solutions: [
        'Personalized Learning',
        'Automated Grading',
        'Student Performance Analysis',
        'Content Generation',
        'Learning Path Optimization'
      ],
      description: 'AI-powered educational tools for personalized learning and academic success.'
    },
    {
      industry: 'Transportation',
      icon: TruckIcon,
      solutions: [
        'Route Optimization',
        'Predictive Maintenance',
        'Autonomous Vehicles',
        'Traffic Management',
        'Fleet Management'
      ],
      description: 'AI solutions for transportation efficiency, safety, and autonomous systems.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group | Advanced Artificial Intelligence Services</title>
        <meta name="description" content="Comprehensive AI solutions including machine learning, computer vision, natural language processing, and automation. Transform your business with cutting-edge artificial intelligence technology." />
        <meta name="keywords" content="AI solutions, machine learning, computer vision, NLP, artificial intelligence, automation, predictive analytics, chatbot, content generation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '2s'}}></div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 holographic-text">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, we deliver AI that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 interactive-glow"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* AI Solutions Grid */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
                AI Solutions Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to solve real business challenges and drive innovation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiSolutions.map((solution, index) => (
                <div key={solution.id} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform floating">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    {solution.popularity && (
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                        {solution.popularity}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.applications.slice(0, 3).map((app, idx) => (
                        <span key={idx} className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-sm">
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Pricing:</h4>
                    <div className="space-y-2">
                      {Object.entries(solution.pricing).map(([tier, details]) => (
                        <div key={tier} className="flex justify-between items-center">
                          <span className="text-gray-300 capitalize">{tier}:</span>
                          <span className="text-white font-semibold">
                            ${details.price}/{details.period}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to={solution.link} 
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
                Industry-Specific AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored AI solutions designed for specific industries and use cases
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industrySolutions.map((industry, index) => (
                <div key={industry.industry} className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-cyan-500 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{industry.industry}</h3>
                  <p className="text-gray-300 mb-6">{industry.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Solutions:</h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    to="/contact" 
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 text-center block"
                  >
                    Get Industry Solution
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
                AI Capabilities & Technologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI technologies and methodologies we use to deliver exceptional results
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Machine Learning', description: 'Advanced ML algorithms and models', icon: CpuChipIcon },
                { name: 'Deep Learning', description: 'Neural networks and deep learning', icon: CpuChipIcon },
                { name: 'Natural Language Processing', description: 'Text analysis and language understanding', icon: ChatBubbleLeftRightIcon },
                { name: 'Computer Vision', description: 'Image and video analysis', icon: EyeIcon },
                { name: 'Predictive Analytics', description: 'Forecasting and trend analysis', icon: ChartBarIcon },
                { name: 'Robotic Process Automation', description: 'Automated business processes', icon: CogIcon },
                { name: 'Reinforcement Learning', description: 'AI learning through interaction', icon: SparklesIcon },
                { name: 'Edge AI', description: 'AI processing at the edge', icon: ServerIcon }
              ].map((capability, index) => (
                <div key={capability.name} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover-lift text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{capability.name}</h3>
                  <p className="text-gray-300 text-sm">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI solutions can solve your specific business challenges and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your AI Journey
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule AI Demo
              </Link>
            </div>
            <div className="mt-8 text-gray-300">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
              <p>📧 <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISolutionsPage;
