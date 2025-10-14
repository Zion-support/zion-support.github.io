import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  ChartBarIcon,
  MicrophoneIcon,
  VideoCameraIcon,
  SparklesIcon,
  BeakerIcon,
  LockClosedIcon,
  EyeIcon,
  CommandLineIcon,
  DatabaseIcon,
  GlobeAltIcon,
  CpuIcon,
  ChatBubbleLeftRightIcon,
  DocumentMagnifyingGlassIcon,
  BoltIcon,
  LightBulbIcon,
  PuzzlePieceIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const aiSolutions = [
    {
      icon: CpuChipIcon,
      title: 'AI Machine Learning Platform',
      description: 'Comprehensive ML platform for building, training, and deploying machine learning models at scale with enterprise-grade security and monitoring.',
      price: '$2,500/month',
      features: [
        'Automated Model Training',
        'Real-time Model Deployment',
        'A/B Testing Framework',
        'Model Performance Monitoring',
        'AutoML Capabilities',
        'Data Pipeline Management',
        'Model Versioning',
        'API Gateway Integration'
      ],
      benefits: [
        'Reduce model development time by 70%',
        'Increase model accuracy by 25%',
        'Automated hyperparameter tuning',
        'Production-ready deployment',
        'Scalable infrastructure',
        'Cost-effective training'
      ],
      useCases: [
        'Predictive Analytics',
        'Customer Segmentation',
        'Fraud Detection',
        'Recommendation Systems',
        'Demand Forecasting',
        'Risk Assessment'
      ],
      link: '/ai-ml-platform'
    },
    {
      icon: MicrophoneIcon,
      title: 'AI Voice Processing Suite',
      description: 'Advanced voice recognition, synthesis, and processing capabilities for voice-enabled applications with multi-language support.',
      price: '$1,800/month',
      features: [
        'Speech-to-Text (STT)',
        'Text-to-Speech (TTS)',
        'Voice Cloning',
        'Language Translation',
        'Voice Analytics',
        'Real-time Processing',
        'Custom Voice Models',
        'Noise Cancellation'
      ],
      benefits: [
        '99.5% accuracy in speech recognition',
        'Support for 50+ languages',
        'Real-time voice processing',
        'Custom voice model training',
        'Seamless API integration',
        'Low latency processing'
      ],
      useCases: [
        'Voice Assistants',
        'Call Center Automation',
        'Accessibility Tools',
        'Language Learning',
        'Voice Commands',
        'Audio Transcription'
      ],
      link: '/ai-voice-processing'
    },
    {
      icon: VideoCameraIcon,
      title: 'AI Computer Vision Platform',
      description: 'Advanced computer vision services for image recognition, object detection, and video analysis with real-time processing capabilities.',
      price: '$2,200/month',
      features: [
        'Object Detection & Recognition',
        'Image Classification',
        'Facial Recognition',
        'Video Analysis',
        'OCR (Optical Character Recognition)',
        'Custom Model Training',
        'Real-time Processing',
        'Batch Processing'
      ],
      benefits: [
        '95%+ accuracy in object detection',
        'Real-time video analysis',
        'Custom model development',
        'API-first architecture',
        'Scalable processing power',
        'Cost-effective solutions'
      ],
      useCases: [
        'Security & Surveillance',
        'Quality Control',
        'Medical Imaging',
        'Autonomous Vehicles',
        'Retail Analytics',
        'Content Moderation'
      ],
      link: '/ai-computer-vision'
    },
    {
      icon: SparklesIcon,
      title: 'AI Content Generation Pro',
      description: 'Advanced AI content creation platform for generating high-quality text, images, and multimedia content with brand consistency.',
      price: '$1,500/month',
      features: [
        'Text Generation (GPT-4)',
        'Image Generation (DALL-E)',
        'Video Production',
        'Content Optimization',
        'Brand Voice Training',
        'SEO Optimization',
        'Multi-format Support',
        'Content Scheduling'
      ],
      benefits: [
        '10x faster content creation',
        'Consistent brand voice',
        'SEO-optimized content',
        'Multi-format generation',
        'Automated content scheduling',
        'Quality assurance checks'
      ],
      useCases: [
        'Marketing Content',
        'Blog Posts & Articles',
        'Social Media Content',
        'Product Descriptions',
        'Email Campaigns',
        'Video Scripts'
      ],
      link: '/ai-content-generation-pro'
    },
    {
      icon: BeakerIcon,
      title: 'AI Data Science Platform',
      description: 'Comprehensive data science platform with AI-powered data analysis, visualization, and predictive modeling capabilities.',
      price: '$3,000/month',
      features: [
        'Advanced Data Analysis',
        'Predictive Modeling',
        'Interactive Dashboards',
        'Statistical Analysis',
        'Automated Report Generation',
        'Data Visualization',
        'Feature Engineering',
        'Model Deployment'
      ],
      benefits: [
        'Advanced analytics capabilities',
        'Automated insight generation',
        'Interactive data visualization',
        'Statistical accuracy',
        'Scalable processing',
        'Expert support included'
      ],
      useCases: [
        'Business Intelligence',
        'Financial Analysis',
        'Market Research',
        'Scientific Research',
        'Healthcare Analytics',
        'Supply Chain Optimization'
      ],
      link: '/ai-data-science-platform'
    },
    {
      icon: LockClosedIcon,
      title: 'AI Cybersecurity Monitor',
      description: 'Intelligent cybersecurity monitoring system with AI-powered threat detection, automated response, and compliance monitoring.',
      price: '$2,800/month',
      features: [
        'Threat Detection & Analysis',
        'Anomaly Detection',
        'Automated Incident Response',
        'Risk Assessment',
        'Compliance Monitoring',
        'Real-time Alerts',
        'Forensic Analysis',
        'Security Training'
      ],
      benefits: [
        'Real-time threat protection',
        'Reduced false positives by 80%',
        'Automated response capabilities',
        'Compliance ready',
        '24/7 monitoring',
        'Expert security team'
      ],
      useCases: [
        'Network Security',
        'Endpoint Protection',
        'Cloud Security',
        'Compliance Management',
        'Incident Response',
        'Security Training'
      ],
      link: '/ai-cybersecurity-monitor-pro'
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: '🏥', solutions: ['Medical Imaging', 'Drug Discovery', 'Patient Monitoring'] },
    { name: 'Finance', icon: '💰', solutions: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading'] },
    { name: 'Retail', icon: '🛍️', solutions: ['Recommendation Systems', 'Inventory Management', 'Customer Analytics'] },
    { name: 'Manufacturing', icon: '🏭', solutions: ['Quality Control', 'Predictive Maintenance', 'Supply Chain'] },
    { name: 'Education', icon: '🎓', solutions: ['Personalized Learning', 'Student Analytics', 'Content Generation'] },
    { name: 'Transportation', icon: '🚗', solutions: ['Autonomous Vehicles', 'Route Optimization', 'Predictive Maintenance'] }
  ];

  const stats = [
    { number: '99.5%', label: 'Accuracy Rate' },
    { number: '50+', label: 'Languages Supported' },
    { number: '24/7', label: 'Monitoring' },
    { number: '99.9%', label: 'Uptime SLA' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group | Advanced Artificial Intelligence Services</title>
        <meta name="description" content="Advanced AI solutions including machine learning, computer vision, natural language processing, and data science. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI solutions, machine learning, computer vision, NLP, data science, AI consulting, artificial intelligence services" />
        <meta property="og:title" content="AI Solutions - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI solutions with proven results and competitive pricing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From machine learning to computer vision, we deliver AI that drives real results.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Solutions Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">AI Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services designed to solve complex business challenges with proven technology and expert support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {aiSolutions.map((solution, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-400">{solution.price}</div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {solution.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <ArrowRightIcon className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link 
                      to={solution.link} 
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                    <Link 
                      to="/contact" 
                      className="border border-blue-400 text-blue-300 px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Industries We Serve
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are tailored for various industries, delivering measurable results across different sectors.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-all duration-300">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{industry.name}</h3>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Why Choose Our AI Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <CpuChipIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Cutting-Edge Technology</h3>
                <p className="text-gray-300">We use the latest AI frameworks and models to ensure optimal performance and accuracy.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <UserGroupIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
                <p className="text-gray-300">Our AI specialists have years of experience in machine learning, deep learning, and data science.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <ChartBarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
                <p className="text-gray-300">We deliver measurable business outcomes with our AI solutions, backed by real case studies.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <BoltIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Rapid Deployment</h3>
                <p className="text-gray-300">Get your AI solutions up and running quickly with our streamlined deployment process.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <LockClosedIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">Your data and AI models are protected with enterprise-grade security and compliance.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <ClockIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support and monitoring to ensure your AI solutions run smoothly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a free AI consultation and discover how our solutions can drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free AI Consultation
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISolutionsPage;