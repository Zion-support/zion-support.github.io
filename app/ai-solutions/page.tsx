import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Brain, 
  Star, 
  Users, 
  Shield, 
  Clock, 
  TrendingUp,
  BarChart3,
  Database,
  Smartphone,
  Globe,
  Target,
  Lightbulb,
  Rocket,
  Award,
  Phone,
  Mail,
  MapPin,
  Zap,
  Code,
  Eye,
  MessageSquare,
  Cpu,
  Network,
  FileText,
  Settings
} from 'lucide-react';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      id: 'ai-chatbot-enterprise',
      name: 'AI Chatbot Enterprise',
      price: '$299/mo',
      originalPrice: '$499/mo',
      description: 'Advanced conversational AI for customer service and support',
      longDescription: 'Transform your customer service with our enterprise-grade AI chatbot that provides 24/7 intelligent support across multiple channels.',
      features: [
        'Natural Language Processing',
        'Multi-channel Support (Web, Mobile, Social)',
        'Custom Training & Learning',
        'Advanced Analytics Dashboard',
        'Integration with CRM Systems',
        'Voice & Text Support',
        'Multi-language Support (50+ languages)',
        'Sentiment Analysis',
        'Escalation to Human Agents',
        'Custom Branding & White-label'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Improve response time by 90%',
        'Handle 1000+ conversations simultaneously',
        '24/7 availability',
        'Consistent quality service'
      ],
      category: 'Conversational AI',
      icon: <MessageSquare className="w-8 h-8 text-cyan-400" />,
      popular: true
    },
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision',
      price: '$399/mo',
      originalPrice: '$599/mo',
      description: 'Advanced image and video analysis solutions',
      longDescription: 'Leverage the power of computer vision to analyze images and videos for object detection, facial recognition, and quality control.',
      features: [
        'Object Detection & Recognition',
        'Facial Recognition & Analysis',
        'Quality Control & Inspection',
        'Real-time Video Processing',
        'Image Classification',
        'OCR (Optical Character Recognition)',
        'Medical Image Analysis',
        'Security & Surveillance',
        'Retail Analytics',
        'Custom Model Training'
      ],
      benefits: [
        'Automate visual inspection processes',
        'Improve accuracy by 95%',
        'Reduce manual labor costs',
        'Real-time processing capabilities',
        'Scalable across industries'
      ],
      category: 'Computer Vision',
      icon: <Eye className="w-8 h-8 text-green-400" />,
      popular: false
    },
    {
      id: 'ai-content-generation-pro',
      name: 'AI Content Generation Pro',
      price: '$199/mo',
      originalPrice: '$299/mo',
      description: 'Automated content creation for marketing and communications',
      longDescription: 'Create high-quality content at scale with our AI-powered content generation platform that produces blogs, social media posts, and marketing materials.',
      features: [
        'Blog Post Generation',
        'Social Media Content',
        'Email Marketing Campaigns',
        'Product Descriptions',
        'SEO-optimized Content',
        'Multi-language Support',
        'Brand Voice Customization',
        'Content Templates',
        'Plagiarism Detection',
        'Content Analytics'
      ],
      benefits: [
        'Increase content output by 500%',
        'Maintain consistent brand voice',
        'Optimize for SEO automatically',
        'Reduce content creation costs',
        'Scale content marketing efforts'
      ],
      category: 'Content Creation',
      icon: <FileText className="w-8 h-8 text-purple-400" />,
      popular: true
    },
    {
      id: 'ai-analytics-dashboard-pro',
      name: 'AI Analytics Dashboard Pro',
      price: '$349/mo',
      originalPrice: '$499/mo',
      description: 'Advanced business intelligence and predictive analytics',
      longDescription: 'Transform your data into actionable insights with our comprehensive AI-powered analytics platform featuring predictive modeling and custom dashboards.',
      features: [
        'Predictive Analytics & Forecasting',
        'Custom Dashboard Builder',
        'Real-time Data Visualization',
        'Automated Report Generation',
        'KPI Tracking & Alerts',
        'Data Integration (100+ sources)',
        'Machine Learning Models',
        'Collaborative Workspaces',
        'Mobile Analytics App',
        'White-label Solutions'
      ],
      benefits: [
        'Make data-driven decisions faster',
        'Identify trends and opportunities',
        'Improve operational efficiency',
        'Reduce reporting time by 90%',
        'Scale with business growth'
      ],
      category: 'Analytics',
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      popular: false
    },
    {
      id: 'ai-automation-platform',
      name: 'AI Automation Platform',
      price: '$499/mo',
      originalPrice: '$799/mo',
      description: 'End-to-end business process automation with AI',
      longDescription: 'Automate complex business processes with our comprehensive AI automation platform that combines RPA, machine learning, and intelligent workflows.',
      features: [
        'Workflow Automation',
        'RPA Integration',
        'Custom Bot Development',
        'Document Processing',
        'Email Automation',
        'Data Extraction & Processing',
        'API Integration',
        'Performance Monitoring',
        'Error Handling & Recovery',
        'Scalable Infrastructure'
      ],
      benefits: [
        'Reduce manual work by 80%',
        'Improve process accuracy',
        'Scale operations efficiently',
        'Reduce operational costs',
        'Focus on strategic tasks'
      ],
      category: 'Automation',
      icon: <Settings className="w-8 h-8 text-orange-400" />,
      popular: true
    },
    {
      id: 'ai-blockchain-solutions',
      name: 'AI Blockchain Solutions',
      price: '$599/mo',
      originalPrice: '$999/mo',
      description: 'AI-powered blockchain and cryptocurrency solutions',
      longDescription: 'Combine the power of AI with blockchain technology to create secure, intelligent solutions for DeFi, NFTs, and smart contracts.',
      features: [
        'Smart Contract Development',
        'DeFi Protocol Integration',
        'NFT Marketplace Solutions',
        'Cryptocurrency Trading Bots',
        'Blockchain Analytics',
        'Security Auditing',
        'Token Economics Design',
        'Cross-chain Integration',
        'Compliance & Regulation',
        'Custom Blockchain Development'
      ],
      benefits: [
        'Secure and transparent transactions',
        'Automated trading strategies',
        'Reduce blockchain complexity',
        'Improve security measures',
        'Scale blockchain applications'
      ],
      category: 'Blockchain',
      icon: <Network className="w-8 h-8 text-yellow-400" />,
      popular: false
    },
    {
      id: 'ai-3d-generation',
      name: 'AI 3D Generation Studio',
      price: '$399/mo',
      originalPrice: '$799/mo',
      description: 'AI-powered 3D model generation and animation',
      longDescription: 'Create stunning 3D models, animations, and virtual environments using our advanced AI-powered 3D generation platform.',
      features: [
        '3D Model Generation',
        'Texture Synthesis',
        'Animation Creation',
        'Virtual Environment Design',
        'AR/VR Content Creation',
        'Real-time Rendering',
        'Custom Style Transfer',
        'Batch Processing',
        'API Integration',
        'Cloud Rendering'
      ],
      benefits: [
        'Reduce 3D creation time by 80%',
        'Lower production costs',
        'Scale content creation',
        'Professional quality output',
        'Easy integration'
      ],
      category: '3D & Graphics',
      icon: <Eye className="w-8 h-8 text-pink-400" />,
      popular: false
    },
    {
      id: 'ai-automated-testing',
      name: 'AI Automated Testing Suite',
      price: '$299/mo',
      originalPrice: '$599/mo',
      description: 'Intelligent test automation and quality assurance',
      longDescription: 'Automate your testing processes with AI-powered test generation, execution, and maintenance for web and mobile applications.',
      features: [
        'Test Case Generation',
        'Automated Test Execution',
        'Visual Testing',
        'Performance Testing',
        'API Testing',
        'Cross-browser Testing',
        'Mobile Testing',
        'Regression Testing',
        'Test Data Management',
        'Reporting & Analytics'
      ],
      benefits: [
        'Reduce testing time by 70%',
        'Improve test coverage',
        'Catch bugs earlier',
        'Reduce manual effort',
        'Ensure quality releases'
      ],
      category: 'Testing',
      icon: <Settings className="w-8 h-8 text-green-400" />,
      popular: true
    },
    {
      id: 'ai-conversation-analytics',
      name: 'AI Conversation Analytics',
      price: '$199/mo',
      originalPrice: '$399/mo',
      description: 'Advanced conversation analysis and insights',
      longDescription: 'Analyze customer conversations across all channels to extract insights, sentiment, and actionable intelligence.',
      features: [
        'Multi-channel Analysis',
        'Sentiment Analysis',
        'Intent Recognition',
        'Topic Extraction',
        'Conversation Summarization',
        'Trend Analysis',
        'Real-time Monitoring',
        'Custom Dashboards',
        'API Integration',
        'Export Capabilities'
      ],
      benefits: [
        'Improve customer experience',
        'Identify service gaps',
        'Optimize agent performance',
        'Track satisfaction trends',
        'Make data-driven decisions'
      ],
      category: 'Analytics',
      icon: <MessageSquare className="w-8 h-8 text-cyan-400" />,
      popular: false
    },
    {
      id: 'ai-crm-assistant',
      name: 'AI CRM Assistant',
      price: '$249/mo',
      originalPrice: '$499/mo',
      description: 'Intelligent CRM automation and insights',
      longDescription: 'Enhance your CRM with AI-powered automation, lead scoring, and customer insights to boost sales performance.',
      features: [
        'Lead Scoring',
        'Opportunity Prediction',
        'Email Automation',
        'Follow-up Reminders',
        'Customer Segmentation',
        'Sales Forecasting',
        'Pipeline Analysis',
        'Integration APIs',
        'Custom Workflows',
        'Performance Analytics'
      ],
      benefits: [
        'Increase sales by 35%',
        'Improve lead quality',
        'Automate follow-ups',
        'Better pipeline visibility',
        'Optimize sales processes'
      ],
      category: 'Sales',
      icon: <Users className="w-8 h-8 text-blue-400" />,
      popular: true
    },
    {
      id: 'ai-customer-churn',
      name: 'AI Customer Churn Prevention',
      price: '$179/mo',
      originalPrice: '$359/mo',
      description: 'Predict and prevent customer churn with AI',
      longDescription: 'Identify at-risk customers and implement retention strategies using AI-powered churn prediction and prevention.',
      features: [
        'Churn Prediction Models',
        'Risk Scoring',
        'Retention Campaigns',
        'Behavioral Analysis',
        'Intervention Triggers',
        'A/B Testing',
        'ROI Tracking',
        'Integration APIs',
        'Custom Alerts',
        'Performance Dashboards'
      ],
      benefits: [
        'Reduce churn by 50%',
        'Increase customer lifetime value',
        'Improve retention rates',
        'Optimize marketing spend',
        'Boost revenue'
      ],
      category: 'Customer Success',
      icon: <TrendingUp className="w-8 h-8 text-red-400" />,
      popular: false
    },
    {
      id: 'ai-customer-sentiment-tracker',
      name: 'AI Customer Sentiment Tracker',
      price: '$149/mo',
      originalPrice: '$299/mo',
      description: 'Real-time customer sentiment monitoring',
      longDescription: 'Monitor customer sentiment across all touchpoints to identify issues and opportunities for improvement.',
      features: [
        'Real-time Sentiment Analysis',
        'Multi-channel Monitoring',
        'Trend Analysis',
        'Alert System',
        'Custom Dashboards',
        'API Integration',
        'Historical Data',
        'Competitor Analysis',
        'Report Generation',
        'Team Collaboration'
      ],
      benefits: [
        'Improve customer satisfaction',
        'Identify issues early',
        'Track brand perception',
        'Optimize customer experience',
        'Make informed decisions'
      ],
      category: 'Customer Success',
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      popular: false
    },
    {
      id: 'ai-customer-support-bot',
      name: 'AI Customer Support Bot',
      price: '$199/mo',
      originalPrice: '$399/mo',
      description: 'Advanced AI customer support automation',
      longDescription: 'Provide 24/7 customer support with our intelligent AI bot that handles common queries and escalates complex issues.',
      features: [
        'Natural Language Processing',
        'Multi-language Support',
        'Knowledge Base Integration',
        'Ticket Management',
        'Escalation Rules',
        'Learning Capabilities',
        'Analytics Dashboard',
        'Custom Branding',
        'API Integration',
        'Human Handoff'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Improve response times',
        '24/7 availability',
        'Consistent service quality',
        'Scale support operations'
      ],
      category: 'Customer Support',
      icon: <Headphones className="w-8 h-8 text-green-400" />,
      popular: true
    },
    {
      id: 'ai-cyber-defense-matrix',
      name: 'AI Cyber Defense Matrix',
      price: '$499/mo',
      originalPrice: '$999/mo',
      description: 'Comprehensive AI-powered cybersecurity platform',
      longDescription: 'Protect your organization with our advanced AI cybersecurity platform that provides multi-layered defense and threat intelligence.',
      features: [
        'Threat Intelligence',
        'Behavioral Analysis',
        'Incident Response',
        'Vulnerability Management',
        'Compliance Monitoring',
        'Security Orchestration',
        'Threat Hunting',
        'Risk Assessment',
        'Integration APIs',
        'Custom Policies'
      ],
      benefits: [
        'Detect advanced threats',
        'Reduce response time',
        'Automate security operations',
        'Ensure compliance',
        'Protect critical assets'
      ],
      category: 'Cybersecurity',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      popular: true
    },
    {
      id: 'ai-data-visualization',
      name: 'AI Data Visualization Studio',
      price: '$179/mo',
      originalPrice: '$359/mo',
      description: 'Intelligent data visualization and storytelling',
      longDescription: 'Transform complex data into compelling visual stories with our AI-powered data visualization platform.',
      features: [
        'Auto-chart Generation',
        'Interactive Dashboards',
        'Storytelling Mode',
        'Custom Templates',
        'Real-time Updates',
        'Collaborative Editing',
        'Export Options',
        'API Integration',
        'Mobile Responsive',
        'White-label Solutions'
      ],
      benefits: [
        'Create visuals 10x faster',
        'Improve data comprehension',
        'Engage stakeholders',
        'Make data-driven decisions',
        'Scale visualization efforts'
      ],
      category: 'Data Visualization',
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      popular: false
    },
    {
      id: 'ai-design-studio',
      name: 'AI Design Studio',
      price: '$249/mo',
      originalPrice: '$499/mo',
      description: 'AI-powered design creation and optimization',
      longDescription: 'Create stunning designs with our AI-powered design studio that generates logos, graphics, and marketing materials.',
      features: [
        'Logo Generation',
        'Graphic Design',
        'Marketing Materials',
        'Brand Kit Creation',
        'Template Library',
        'Style Transfer',
        'Batch Processing',
        'High-resolution Export',
        'Collaboration Tools',
        'Brand Consistency'
      ],
      benefits: [
        'Reduce design costs by 70%',
        'Maintain brand consistency',
        'Scale design production',
        'Professional quality output',
        'Faster time to market'
      ],
      category: 'Design',
      icon: <Eye className="w-8 h-8 text-orange-400" />,
      popular: true
    },
    {
      id: 'ai-devops-automation',
      name: 'AI DevOps Automation',
      price: '$399/mo',
      originalPrice: '$799/mo',
      description: 'Intelligent DevOps automation and optimization',
      longDescription: 'Streamline your DevOps processes with AI-powered automation for CI/CD, monitoring, and infrastructure management.',
      features: [
        'CI/CD Optimization',
        'Infrastructure Automation',
        'Performance Monitoring',
        'Anomaly Detection',
        'Auto-scaling',
        'Deployment Automation',
        'Log Analysis',
        'Incident Response',
        'Integration APIs',
        'Custom Workflows'
      ],
      benefits: [
        'Reduce deployment time by 80%',
        'Improve system reliability',
        'Automate routine tasks',
        'Optimize resource usage',
        'Scale operations efficiently'
      ],
      category: 'DevOps',
      icon: <Settings className="w-8 h-8 text-blue-400" />,
      popular: false
    }
  ];

  const categories = ['All', 'Conversational AI', 'Computer Vision', 'Content Creation', 'Analytics', 'Automation', 'Blockchain', '3D & Graphics', 'Testing', 'Customer Success', 'Customer Support', 'Cybersecurity', 'Data Visualization', 'Design', 'DevOps'];

  const useCases = [
    {
      title: 'Customer Service',
      description: 'Automate customer support with intelligent chatbots',
      icon: <MessageSquare className="w-6 h-6 text-cyan-400" />,
      benefits: ['24/7 Support', 'Instant Responses', 'Cost Reduction', 'Customer Satisfaction']
    },
    {
      title: 'Content Marketing',
      description: 'Generate high-quality content at scale',
      icon: <FileText className="w-6 h-6 text-purple-400" />,
      benefits: ['Faster Creation', 'SEO Optimization', 'Brand Consistency', 'Scalable Output']
    },
    {
      title: 'Data Analysis',
      description: 'Extract insights from complex datasets',
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
      benefits: ['Predictive Insights', 'Real-time Analytics', 'Automated Reports', 'Better Decisions']
    },
    {
      title: 'Process Automation',
      description: 'Streamline business operations with AI',
      icon: <Settings className="w-6 h-6 text-orange-400" />,
      benefits: ['Efficiency Gains', 'Error Reduction', 'Cost Savings', 'Scalable Growth']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$199/mo',
      description: 'Perfect for small businesses',
      features: [
        'Basic AI features',
        'Up to 10,000 API calls/month',
        'Email support',
        'Standard integrations',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499/mo',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced AI capabilities',
        'Up to 100,000 API calls/month',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Full AI suite',
        'Unlimited API calls',
        '24/7 dedicated support',
        'Custom development',
        'White-label solutions',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Advanced Artificial Intelligence Services | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive AI solutions including chatbots, computer vision, content generation, analytics, and automation. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI solutions, artificial intelligence, chatbots, computer vision, content generation, analytics, automation, machine learning" />
        <meta property="og:title" content="AI Solutions - Advanced Artificial Intelligence Services" />
        <meta property="og:description" content="Discover our comprehensive AI solutions including chatbots, computer vision, content generation, analytics, and automation." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Solutions
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}That Transform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Harness the power of artificial intelligence to automate processes, gain insights, 
              and scale your business with our comprehensive AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#pricing"
                className="border-2 border-white/30 hover:border-cyan-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                View Pricing
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Solutions for Every Business Need
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From customer service to data analysis, our AI solutions are designed to solve real business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 group">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {useCase.description}
                </p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered solutions designed to transform your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className={`bg-slate-800/50 hover:bg-slate-700/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 group relative ${
                service.popular ? 'ring-2 ring-cyan-500' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.slice(0, 5).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 5 && (
                    <li className="text-sm text-cyan-400 font-medium">
                      +{service.features.length - 5} more features
                    </li>
                  )}
                </ul>

                <div className="space-y-4">
                  <Link
                    to={`/${service.id}`}
                    className="block w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white text-center py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Solutions Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect AI solution plan for your business. All plans include 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                tier.popular ? 'ring-2 ring-cyan-500 bg-slate-700/50' : ''
              }`}>
                {tier.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{tier.price}</div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
                      : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Transform your business with our cutting-edge AI solutions. Start your free trial today and see the difference AI can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AISolutionsPage;
