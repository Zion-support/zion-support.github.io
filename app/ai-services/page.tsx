import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Database, Cloud, Lock, Smartphone, Monitor, Server, Wifi, Code, Palette, FileText, Search, Filter, Settings, BarChart3, PieChart, LineChart, Activity, Target as TargetIcon, Zap as ZapIcon, Shield as ShieldIcon, Clock as ClockIcon, Users as UsersIcon, TrendingUp as TrendingUpIcon, Globe as GlobeIcon, Brain as BrainIcon, Cpu as CpuIcon, Target as TargetIcon2, BarChart as BarChartIcon, MessageSquare as MessageSquareIcon, Eye as EyeIcon, Sparkles as SparklesIcon, ArrowRight as ArrowRightIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon } from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    // AI Consulting & Strategy
    {
      title: 'AI Consulting & Strategy',
      description: 'Comprehensive AI strategy development, implementation planning, and digital transformation consulting for enterprise organizations.',
      icon: '🧠',
      price: '$2,500/month',
      features: [
        'AI Strategy Development',
        'Technology Assessment & Selection',
        'Implementation Roadmap Planning',
        'Change Management & Training',
        'ROI Analysis & Business Case',
        'Executive AI Education',
        'Vendor Selection & Management',
        'Compliance & Governance'
      ],
      benefits: [
        'Accelerate AI adoption by 300%',
        'Reduce implementation risks by 60%',
        'Achieve 400% ROI within 12 months',
        'Future-proof your technology stack',
        'Align AI with business objectives'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Consulting',
      technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Cloud AI', 'Edge Computing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-consulting-strategy'
    },
    {
      title: 'AI Readiness Assessment',
      description: 'Comprehensive evaluation of your organization\'s AI readiness with detailed recommendations and implementation roadmap.',
      icon: '📊',
      price: '$1,800/month',
      features: [
        'Data Quality Assessment',
        'Infrastructure Evaluation',
        'Skills Gap Analysis',
        'Process Readiness Review',
        'Technology Stack Analysis',
        'Compliance & Security Audit',
        'ROI Projection Modeling',
        'Implementation Timeline'
      ],
      benefits: [
        'Identify AI opportunities',
        'Minimize implementation risks',
        'Optimize resource allocation',
        'Accelerate time to value',
        'Ensure successful AI adoption'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Consulting',
      technologies: ['Assessment Tools', 'Data Analytics', 'Process Mining', 'ROI Modeling'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-readiness-assessment'
    },

    // Machine Learning & Data Science
    {
      title: 'Machine Learning Solutions',
      description: 'Custom machine learning models for predictive analytics, pattern recognition, and intelligent decision-making systems.',
      icon: '🤖',
      price: '$1,500/month',
      features: [
        'Custom ML Model Development',
        'Data Preprocessing & Cleaning',
        'Model Training & Optimization',
        'Real-time Inference & Deployment',
        'Model Monitoring & Maintenance',
        'A/B Testing Framework',
        'Feature Engineering',
        'Model Versioning & Management'
      ],
      benefits: [
        'Improve accuracy by 40-80%',
        'Reduce manual work by 70%',
        'Enable real-time predictions',
        'Scale with business growth',
        'Make data-driven decisions'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Machine Learning',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'MLflow'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/machine-learning-solutions'
    },
    {
      title: 'Deep Learning & Neural Networks',
      description: 'Advanced deep learning solutions with neural networks for complex pattern recognition and intelligent automation.',
      icon: '🧬',
      price: '$2,200/month',
      features: [
        'Deep Neural Network Design',
        'Computer Vision Models',
        'Natural Language Processing',
        'Reinforcement Learning',
        'Transfer Learning',
        'Model Optimization',
        'GPU Acceleration',
        'Distributed Training'
      ],
      benefits: [
        'Solve complex problems',
        'Achieve state-of-the-art accuracy',
        'Automate complex tasks',
        'Enable advanced AI capabilities',
        'Reduce human intervention'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Machine Learning',
      technologies: ['TensorFlow', 'PyTorch', 'Keras', 'OpenCV', 'NLTK', 'spaCy', 'Transformers'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/deep-learning-neural-networks'
    },
    {
      title: 'Predictive Analytics Platform',
      description: 'Comprehensive predictive analytics solution with forecasting, trend analysis, and business intelligence.',
      icon: '📈',
      price: '$1,800/month',
      features: [
        'Time Series Forecasting',
        'Trend Analysis & Pattern Recognition',
        'Anomaly Detection',
        'Business Intelligence Dashboards',
        'Automated Reporting',
        'Real-time Alerts',
        'Data Visualization',
        'Statistical Modeling'
      ],
      benefits: [
        'Improve forecasting accuracy',
        'Identify business opportunities',
        'Reduce operational risks',
        'Optimize resource allocation',
        'Enable proactive decision making'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Analytics',
      technologies: ['Python', 'R', 'Tableau', 'Power BI', 'Apache Spark', 'Kafka', 'Elasticsearch'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/predictive-analytics-platform'
    },

    // Natural Language Processing
    {
      title: 'Natural Language Processing (NLP)',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.',
      icon: '💬',
      price: '$1,600/month',
      features: [
        'Text Analysis & Processing',
        'Sentiment Analysis',
        'Language Translation',
        'Named Entity Recognition',
        'Text Classification',
        'Question Answering Systems',
        'Chatbot Development',
        'Document Processing'
      ],
      benefits: [
        'Automate text processing',
        'Improve customer experience',
        'Extract insights from text data',
        'Enable multilingual support',
        'Reduce manual text analysis'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'NLP',
      technologies: ['OpenAI GPT', 'BERT', 'spaCy', 'NLTK', 'Hugging Face', 'Transformers', 'LangChain'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/natural-language-processing'
    },
    {
      title: 'AI Chatbot & Virtual Assistant',
      description: 'Intelligent chatbot and virtual assistant solutions with natural language understanding and multi-channel support.',
      icon: '🤖',
      price: '$1,200/month',
      features: [
        'Natural Language Understanding',
        'Multi-channel Integration',
        'Context Management',
        'Intent Recognition',
        'Response Generation',
        'Human Handoff',
        'Analytics & Reporting',
        'Custom Training'
      ],
      benefits: [
        'Improve customer service',
        'Reduce support costs',
        'Provide 24/7 availability',
        'Scale customer interactions',
        'Enhance user experience'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'NLP',
      technologies: ['OpenAI GPT', 'Dialogflow', 'Microsoft Bot Framework', 'Rasa', 'LangChain'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-chatbot-virtual-assistant'
    },
    {
      title: 'Document Intelligence & Processing',
      description: 'AI-powered document processing with OCR, data extraction, and intelligent document analysis.',
      icon: '📄',
      price: '$1,400/month',
      features: [
        'Optical Character Recognition (OCR)',
        'Data Extraction & Classification',
        'Document Analysis',
        'Form Processing',
        'Invoice Processing',
        'Contract Analysis',
        'Compliance Checking',
        'Automated Workflows'
      ],
      benefits: [
        'Automate document processing',
        'Reduce manual data entry',
        'Improve accuracy',
        'Speed up workflows',
        'Ensure compliance'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'NLP',
      technologies: ['Tesseract', 'AWS Textract', 'Azure Form Recognizer', 'Google Document AI', 'OpenAI'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/document-intelligence-processing'
    },

    // Computer Vision
    {
      title: 'Computer Vision Solutions',
      description: 'Advanced computer vision solutions for image recognition, object detection, and visual analysis.',
      icon: '👁️',
      price: '$1,800/month',
      features: [
        'Image Recognition & Classification',
        'Object Detection & Tracking',
        'Facial Recognition',
        'Medical Image Analysis',
        'Quality Control & Inspection',
        'Augmented Reality',
        'Video Analysis',
        'Real-time Processing'
      ],
      benefits: [
        'Automate visual tasks',
        'Improve accuracy',
        'Enable real-time analysis',
        'Reduce human error',
        'Scale visual processing'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Computer Vision',
      technologies: ['OpenCV', 'TensorFlow', 'PyTorch', 'YOLO', 'ResNet', 'EfficientNet', 'MediaPipe'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/computer-vision-solutions'
    },
    {
      title: 'AI Image & Video Analysis',
      description: 'Intelligent image and video analysis with content recognition, scene understanding, and automated processing.',
      icon: '🎬',
      price: '$1,600/month',
      features: [
        'Content Recognition',
        'Scene Understanding',
        'Video Summarization',
        'Motion Detection',
        'Object Tracking',
        'Quality Assessment',
        'Metadata Extraction',
        'Search & Retrieval'
      ],
      benefits: [
        'Automate media processing',
        'Extract valuable insights',
        'Improve content management',
        'Enable intelligent search',
        'Reduce manual review time'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Computer Vision',
      technologies: ['OpenCV', 'FFmpeg', 'TensorFlow', 'PyTorch', 'OpenAI CLIP', 'DALL-E'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-image-video-analysis'
    },

    // AI Automation & RPA
    {
      title: 'Intelligent Process Automation (IPA)',
      description: 'Advanced process automation with AI-powered decision making, exception handling, and cognitive capabilities.',
      icon: '⚙️',
      price: '$2,000/month',
      features: [
        'Process Discovery & Analysis',
        'AI-Powered Automation',
        'Exception Handling',
        'Decision Making',
        'Process Optimization',
        'Integration & Orchestration',
        'Monitoring & Analytics',
        'Continuous Improvement'
      ],
      benefits: [
        'Automate complex processes',
        'Reduce errors by 90%',
        'Improve efficiency by 60%',
        'Enable intelligent decisions',
        'Scale automation efforts'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Automation',
      technologies: ['UiPath', 'Automation Anywhere', 'Blue Prism', 'Microsoft Power Automate', 'Custom AI'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/intelligent-process-automation'
    },
    {
      title: 'AI-Powered Workflow Automation',
      description: 'Intelligent workflow automation with AI decision making, smart routing, and adaptive processes.',
      icon: '🔄',
      price: '$1,500/month',
      features: [
        'Workflow Design & Modeling',
        'AI Decision Making',
        'Smart Routing & Assignment',
        'Dynamic Process Adaptation',
        'Integration & APIs',
        'Monitoring & Analytics',
        'Exception Management',
        'Performance Optimization'
      ],
      benefits: [
        'Streamline workflows',
        'Improve decision quality',
        'Reduce processing time',
        'Enhance flexibility',
        'Optimize resource utilization'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Automation',
      technologies: ['Workflow Engines', 'AI/ML Models', 'APIs', 'Microservices', 'Event Streaming'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-powered-workflow-automation'
    },

    // AI for Business Intelligence
    {
      title: 'AI Business Intelligence',
      description: 'Advanced business intelligence with AI-powered insights, automated reporting, and predictive analytics.',
      icon: '📊',
      price: '$2,200/month',
      features: [
        'AI-Powered Insights',
        'Automated Report Generation',
        'Predictive Analytics',
        'Natural Language Queries',
        'Anomaly Detection',
        'Trend Analysis',
        'Custom Dashboards',
        'Real-time Monitoring'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify opportunities',
        'Predict future trends',
        'Automate reporting',
        'Improve business performance'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Business Intelligence',
      technologies: ['Tableau', 'Power BI', 'Looker', 'Python', 'R', 'SQL', 'Machine Learning'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-business-intelligence'
    },
    {
      title: 'AI Customer Analytics',
      description: 'Comprehensive customer analytics with AI-powered segmentation, churn prediction, and personalized insights.',
      icon: '👥',
      price: '$1,800/month',
      features: [
        'Customer Segmentation',
        'Churn Prediction',
        'Lifetime Value Analysis',
        'Behavioral Analytics',
        'Personalization Engine',
        'Recommendation Systems',
        'Sentiment Analysis',
        'Engagement Scoring'
      ],
      benefits: [
        'Improve customer retention',
        'Increase customer value',
        'Personalize experiences',
        'Predict customer behavior',
        'Optimize marketing efforts'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Business Intelligence',
      technologies: ['Python', 'R', 'SQL', 'Machine Learning', 'Apache Spark', 'Kafka'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-customer-analytics'
    },

    // AI for Marketing & Sales
    {
      title: 'AI Marketing Automation',
      description: 'Intelligent marketing automation with AI-powered personalization, campaign optimization, and customer journey mapping.',
      icon: '📢',
      price: '$1,600/month',
      features: [
        'AI-Powered Personalization',
        'Campaign Optimization',
        'Customer Journey Mapping',
        'Predictive Lead Scoring',
        'Content Generation',
        'A/B Testing Automation',
        'Multi-channel Orchestration',
        'Performance Analytics'
      ],
      benefits: [
        'Increase conversion rates',
        'Improve campaign performance',
        'Personalize customer experiences',
        'Automate marketing tasks',
        'Optimize marketing spend'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Marketing',
      technologies: ['HubSpot', 'Salesforce Marketing Cloud', 'Adobe Experience Platform', 'Custom AI'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-marketing-automation'
    },
    {
      title: 'AI Sales Intelligence',
      description: 'Advanced sales intelligence with AI-powered lead scoring, opportunity analysis, and sales forecasting.',
      icon: '💰',
      price: '$1,400/month',
      features: [
        'AI Lead Scoring',
        'Opportunity Analysis',
        'Sales Forecasting',
        'Pipeline Optimization',
        'Competitive Intelligence',
        'Price Optimization',
        'Sales Coaching',
        'Performance Analytics'
      ],
      benefits: [
        'Improve sales performance',
        'Increase win rates',
        'Optimize sales processes',
        'Predict sales outcomes',
        'Enhance sales coaching'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Sales',
      technologies: ['Salesforce', 'HubSpot', 'Python', 'Machine Learning', 'NLP'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-sales-intelligence'
    },

    // AI for Healthcare
    {
      title: 'AI Healthcare Solutions',
      description: 'Advanced AI solutions for healthcare including medical imaging, drug discovery, and patient care optimization.',
      icon: '🏥',
      price: '$3,500/month',
      features: [
        'Medical Image Analysis',
        'Drug Discovery & Development',
        'Patient Risk Assessment',
        'Treatment Recommendation',
        'Clinical Decision Support',
        'Electronic Health Records',
        'Telemedicine Integration',
        'Compliance & Security'
      ],
      benefits: [
        'Improve diagnostic accuracy',
        'Accelerate drug development',
        'Enhance patient care',
        'Reduce medical errors',
        'Optimize treatment outcomes'
      ],
      marketPrice: '$6,000-15,000/month',
      category: 'Healthcare',
      technologies: ['TensorFlow', 'PyTorch', 'OpenCV', 'DICOM', 'HL7', 'FHIR', 'HIPAA'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-healthcare-solutions'
    },

    // AI for Finance
    {
      title: 'AI Financial Services',
      description: 'Comprehensive AI solutions for financial services including fraud detection, risk assessment, and algorithmic trading.',
      icon: '💳',
      price: '$2,800/month',
      features: [
        'Fraud Detection & Prevention',
        'Risk Assessment & Management',
        'Algorithmic Trading',
        'Credit Scoring',
        'Anti-Money Laundering',
        'Regulatory Compliance',
        'Portfolio Optimization',
        'Financial Forecasting'
      ],
      benefits: [
        'Reduce financial risks',
        'Improve fraud detection',
        'Optimize trading strategies',
        'Ensure compliance',
        'Enhance decision making'
      ],
      marketPrice: '$5,000-12,000/month',
      category: 'Finance',
      technologies: ['Python', 'R', 'Machine Learning', 'Deep Learning', 'Blockchain', 'APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-financial-services'
    },

    // AI for Manufacturing
    {
      title: 'AI Manufacturing Solutions',
      description: 'Intelligent manufacturing solutions with predictive maintenance, quality control, and production optimization.',
      icon: '🏭',
      price: '$2,500/month',
      features: [
        'Predictive Maintenance',
        'Quality Control & Inspection',
        'Production Optimization',
        'Supply Chain Intelligence',
        'Energy Management',
        'Safety Monitoring',
        'Process Optimization',
        'Real-time Analytics'
      ],
      benefits: [
        'Reduce downtime',
        'Improve product quality',
        'Optimize production',
        'Reduce costs',
        'Enhance safety'
      ],
      marketPrice: '$4,000-10,000/month',
      category: 'Manufacturing',
      technologies: ['IoT', 'Computer Vision', 'Machine Learning', 'Edge Computing', 'Digital Twins'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-manufacturing-solutions'
    }
  ];

  const categories = [...new Set(aiServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Services & Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including machine learning, natural language processing, computer vision, and intelligent automation. Enterprise-grade AI solutions starting at $1,200/month." />
        <meta name="keywords" content="ai services, machine learning, natural language processing, computer vision, intelligent automation, ai consulting, artificial intelligence" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            AI Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow" role="doc-subtitle">
            Advanced Artificial Intelligence for Modern Business
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with cutting-edge AI solutions. From machine learning to natural language processing, 
            we provide enterprise-grade artificial intelligence services that drive innovation and growth.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12">
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">🧠</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">AI Consulting</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Strategic AI planning and implementation guidance</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">🤖</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Machine Learning</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Custom ML models and predictive analytics</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">👁️</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Computer Vision</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Advanced image and video analysis solutions</p>
            </div>
            <div className="cyber-card hologram-card p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl mb-3">⚙️</div>
              <h3 className="font-bold text-white mb-3 text-base sm:text-lg">Automation</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">Intelligent process and workflow automation</p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center neon-text">
            Browse by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="cyber-button text-sm sm:text-base px-4 py-2"
                onClick={() => {
                  const element = document.getElementById(`category-${category.toLowerCase().replace(/\s+/g, '-')}`);
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services by Category */}
        {categories.map((category) => (
          <div key={category} id={`category-${category.toLowerCase().replace(/\s+/g, '-')}`} className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center neon-text">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {aiServices
                .filter(service => service.category === category)
                .map((service, index) => (
                  <div key={index} className="quantum-card p-4 sm:p-6 energy-pulse">
                    <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center cyber-scan-line">
                      {service.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center neon-text">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-center leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-sm sm:text-base font-semibold text-cyan-400 mb-2">Key Features:</h4>
                      <ul className="text-xs sm:text-sm text-gray-300 space-y-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-sm sm:text-base font-semibold text-pink-400 mb-2">Benefits:</h4>
                      <ul className="text-xs sm:text-sm text-gray-300 space-y-1">
                        {service.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-center">
                            <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing */}
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-lg sm:text-2xl font-bold text-cyan-400 mb-2 neon-text">
                        {service.price}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-400">
                        Market Price: {service.marketPrice}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-sm sm:text-base font-semibold text-purple-400 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {service.technologies.slice(0, 4).map((tech, idx) => (
                          <span key={idx} className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="text-xs sm:text-sm text-gray-400 mb-2">
                        {service.contactInfo}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      <a
                        href={service.link}
                        className="cyber-button text-center text-xs sm:text-sm px-3 py-2"
                        style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                      >
                        Learn More
                      </a>
                      <a
                        href="tel:+13024640950"
                        className="cyber-button text-center text-xs sm:text-sm px-3 py-2"
                        style={{background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)'}}
                      >
                        Call Now
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}

        {/* Contact Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 neon-text">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your AI needs and discover how our advanced artificial intelligence solutions can transform your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
              aria-label="Call us at (302) 464-0950"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              📧 Email Us
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #10b981, #059669)'}}
            >
              💬 Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;