'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  Brain, 
  Zap, 
  Target, 
  CheckCircle, 
  ArrowRight, 
  DollarSign, 
  Star,
  Users,
  Clock,
  Globe,
  Code,
  BarChart,
  Smartphone,
  Database,
  Settings,
  TrendingUp,
  Lock,
  Monitor,
  Server,
  Cpu,
  FileText,
  MessageCircle,
  ShoppingCart,
  Rocket,
  Award,
  Lightbulb,
  Gauge,
  Phone,
  Mail,
  MapPin,
  Eye,
  Mic,
  Camera,
  Search,
  Shield,
  Workflow,
  Layers,
  PieChart,
  Activity,
  Bot,
  Sparkles,
  CpuChip,
  Network,
  Cloud,
  Wifi,
  HardDrive
} from 'lucide-react'

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform that learns from your business patterns.',
      features: [
        'Predictive Analytics & Forecasting',
        'Natural Language Query Interface',
        'Automated Report Generation',
        'Real-time Data Processing',
        'Custom ML Model Training',
        'Multi-source Data Integration'
      ],
      pricing: {
        starter: '$199/month',
        pro: '$499/month',
        enterprise: '$1,299/month'
      },
      link: 'https://ziontechgroup.com/ai-business-intelligence',
      category: 'Analytics',
      useCases: ['Financial Forecasting', 'Sales Prediction', 'Customer Behavior Analysis', 'Market Trend Analysis']
    },
    {
      icon: MessageCircle,
      title: 'Intelligent Customer Service AI',
      description: 'Revolutionize customer support with AI chatbots that understand context, emotions, and provide human-like responses.',
      features: [
        'Multi-language Support (50+ languages)',
        'Sentiment Analysis & Emotion Detection',
        'Voice & Text Integration',
        'Knowledge Base Auto-updates',
        'Escalation to Human Agents',
        'Performance Analytics Dashboard'
      ],
      pricing: {
        starter: '$149/month',
        pro: '$399/month',
        enterprise: '$999/month'
      },
      link: 'https://ziontechgroup.com/ai-customer-service',
      category: 'Customer Service',
      useCases: ['24/7 Customer Support', 'Lead Qualification', 'Technical Support', 'Order Processing']
    },
    {
      icon: Eye,
      title: 'Computer Vision Solutions',
      description: 'Advanced image and video analysis powered by deep learning for quality control, security, and automation.',
      features: [
        'Object Detection & Recognition',
        'Facial Recognition & Analysis',
        'Quality Control Automation',
        'Real-time Video Processing',
        'Custom Model Training',
        'API Integration Ready'
      ],
      pricing: {
        starter: '$299/month',
        pro: '$799/month',
        enterprise: '$1,999/month'
      },
      link: 'https://ziontechgroup.com/computer-vision',
      category: 'Computer Vision',
      useCases: ['Manufacturing QC', 'Security Surveillance', 'Medical Imaging', 'Retail Analytics']
    },
    {
      icon: FileText,
      title: 'AI Document Processing',
      description: 'Intelligent document analysis and processing with OCR, classification, and automated data extraction.',
      features: [
        'Advanced OCR Technology',
        'Document Classification',
        'Data Extraction & Validation',
        'Multi-format Support',
        'Workflow Automation',
        'Compliance Monitoring'
      ],
      pricing: {
        starter: '$99/month',
        pro: '$299/month',
        enterprise: '$799/month'
      },
      link: 'https://ziontechgroup.com/ai-document-processing',
      category: 'Document Processing',
      useCases: ['Invoice Processing', 'Contract Analysis', 'Medical Records', 'Legal Document Review']
    },
    {
      icon: Mic,
      title: 'Voice AI & Speech Recognition',
      description: 'Convert speech to text and text to speech with natural language understanding and voice command processing.',
      features: [
        'Real-time Speech-to-Text',
        'Natural Language Understanding',
        'Voice Command Processing',
        'Multi-language Support',
        'Custom Voice Training',
        'Integration APIs'
      ],
      pricing: {
        starter: '$79/month',
        pro: '$199/month',
        enterprise: '$499/month'
      },
      link: 'https://ziontechgroup.com/voice-ai',
      category: 'Voice AI',
      useCases: ['Voice Assistants', 'Call Transcription', 'Voice Commands', 'Accessibility Tools']
    },
    {
      icon: Workflow,
      title: 'AI Process Automation',
      description: 'Intelligent automation platform that learns and optimizes business processes using machine learning.',
      features: [
        'Process Discovery & Mapping',
        'Intelligent Task Automation',
        'Exception Handling',
        'Performance Optimization',
        'ROI Tracking',
        'Scalable Architecture'
      ],
      pricing: {
        starter: '$249/month',
        pro: '$599/month',
        enterprise: '$1,499/month'
      },
      link: 'https://ziontechgroup.com/ai-automation',
      category: 'Automation',
      useCases: ['Workflow Optimization', 'Data Entry Automation', 'Email Processing', 'Report Generation']
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity Suite',
      description: 'Advanced threat detection and prevention using machine learning to protect against evolving cyber threats.',
      features: [
        'Behavioral Analysis',
        'Threat Intelligence',
        'Automated Response',
        'Zero-day Detection',
        'Compliance Monitoring',
        'Incident Forensics'
      ],
      pricing: {
        starter: '$399/month',
        pro: '$999/month',
        enterprise: '$2,499/month'
      },
      link: 'https://ziontechgroup.com/ai-cybersecurity',
      category: 'Security',
      useCases: ['Threat Detection', 'Fraud Prevention', 'Network Security', 'Data Protection']
    },
    {
      icon: ShoppingCart,
      title: 'AI E-commerce Optimization',
      description: 'Boost sales and customer experience with AI-powered recommendations, pricing, and inventory management.',
      features: [
        'Personalized Recommendations',
        'Dynamic Pricing Optimization',
        'Inventory Forecasting',
        'Customer Segmentation',
        'A/B Testing Automation',
        'Revenue Analytics'
      ],
      pricing: {
        starter: '$199/month',
        pro: '$499/month',
        enterprise: '$1,299/month'
      },
      link: 'https://ziontechgroup.com/ai-ecommerce',
      category: 'E-commerce',
      useCases: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Retention']
    },
    {
      icon: Users,
      title: 'AI HR & Talent Management',
      description: 'Revolutionize HR processes with AI-powered recruitment, performance analysis, and employee engagement tools.',
      features: [
        'Resume Screening & Matching',
        'Interview Analysis',
        'Performance Prediction',
        'Employee Sentiment Analysis',
        'Retention Risk Assessment',
        'Skills Gap Analysis'
      ],
      pricing: {
        starter: '$149/month',
        pro: '$399/month',
        enterprise: '$999/month'
      },
      link: 'https://ziontechgroup.com/ai-hr',
      category: 'Human Resources',
      useCases: ['Talent Acquisition', 'Performance Management', 'Employee Engagement', 'Skills Development']
    },
    {
      icon: Activity,
      title: 'AI Health & Medical Analytics',
      description: 'Advanced medical AI for diagnosis assistance, treatment recommendations, and health monitoring.',
      features: [
        'Medical Image Analysis',
        'Symptom Assessment',
        'Treatment Recommendations',
        'Drug Interaction Analysis',
        'Health Trend Monitoring',
        'HIPAA Compliance'
      ],
      pricing: {
        starter: '$499/month',
        pro: '$1,299/month',
        enterprise: '$2,999/month'
      },
      link: 'https://ziontechgroup.com/ai-healthcare',
      category: 'Healthcare',
      useCases: ['Medical Diagnosis', 'Treatment Planning', 'Drug Discovery', 'Patient Monitoring']
    },
    {
      icon: Globe,
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing, translation, and content optimization.',
      features: [
        'Multi-language Content Creation',
        'SEO Optimization',
        'Brand Voice Consistency',
        'Content Personalization',
        'Plagiarism Detection',
        'Performance Analytics'
      ],
      pricing: {
        starter: '$79/month',
        pro: '$199/month',
        enterprise: '$499/month'
      },
      link: 'https://ziontechgroup.com/ai-content',
      category: 'Content',
      useCases: ['Blog Writing', 'Marketing Copy', 'Product Descriptions', 'Social Media Content']
    },
    {
      icon: CpuChip,
      title: 'AI Edge Computing',
      description: 'Deploy AI models at the edge for real-time processing with minimal latency and offline capabilities.',
      features: [
        'Edge Model Deployment',
        'Real-time Processing',
        'Offline Capabilities',
        'Low Latency Response',
        'Resource Optimization',
        'Federated Learning'
      ],
      pricing: {
        starter: '$399/month',
        pro: '$999/month',
        enterprise: '$2,499/month'
      },
      link: 'https://ziontechgroup.com/ai-edge',
      category: 'Edge Computing',
      useCases: ['IoT Analytics', 'Autonomous Vehicles', 'Smart Manufacturing', 'Real-time Monitoring']
    }
  ]

  const categories = ['All', 'Analytics', 'Customer Service', 'Computer Vision', 'Document Processing', 'Voice AI', 'Automation', 'Security', 'E-commerce', 'Human Resources', 'Healthcare', 'Content', 'Edge Computing']

  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredServices = selectedCategory === 'All' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent neon-text-enhanced">AI Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations. 
              Our cutting-edge AI solutions are designed to drive innovation, efficiency, and growth across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 futuristic-btn">
                <Rocket className="w-5 h-5 mr-2" />
                Explore AI Solutions
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Schedule AI Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI services leverage the latest machine learning and deep learning technologies to solve complex business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card-enhanced text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Machine Learning</h3>
              <p className="text-gray-300 text-sm">Advanced algorithms that learn and improve from data patterns</p>
            </div>

            <div className="cyber-card-enhanced text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Computer Vision</h3>
              <p className="text-gray-300 text-sm">Image and video analysis for automation and insights</p>
            </div>

            <div className="cyber-card-enhanced text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Natural Language</h3>
              <p className="text-gray-300 text-sm">Understanding and generating human-like text and speech</p>
            </div>

            <div className="cyber-card-enhanced text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Workflow className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Process Automation</h3>
              <p className="text-gray-300 text-sm">Intelligent automation of complex business processes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
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
              <div key={index} className="cyber-card-enhanced hover-lift group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-sm text-cyan-400 font-medium">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.slice(0, 2).map((useCase, useCaseIndex) => (
                      <span key={useCaseIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                        {useCase}
                      </span>
                    ))}
                    {service.useCases.length > 2 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
                        +{service.useCases.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-400">Starting from</span>
                    <span className="text-2xl font-bold text-white">{service.pricing.starter}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    Pro: {service.pricing.pro} • Enterprise: {service.pricing.enterprise}
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-center text-sm"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 inline" />
                    Learn More
                  </a>
                  <button className="px-4 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white rounded-lg transition-all duration-300 text-sm">
                    <DollarSign className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Implementation Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI Implementation</span> Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful AI implementation and maximum ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card-enhanced text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Discovery & Analysis</h3>
              <p className="text-gray-300 text-sm">Analyze your business processes and identify AI opportunities</p>
            </div>

            <div className="cyber-card-enhanced text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Strategy & Planning</h3>
              <p className="text-gray-300 text-sm">Develop a comprehensive AI strategy and implementation roadmap</p>
            </div>

            <div className="cyber-card-enhanced text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Development & Testing</h3>
              <p className="text-gray-300 text-sm">Build and test AI models with your specific data and requirements</p>
            </div>

            <div className="cyber-card-enhanced text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Deployment & Support</h3>
              <p className="text-gray-300 text-sm">Deploy AI solutions and provide ongoing support and optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AI experts help you identify opportunities and implement solutions that drive real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 futuristic-btn">
              <Rocket className="w-5 h-5 mr-2" />
              Start AI Consultation
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              <Phone className="w-5 h-5 mr-2" />
              Contact AI Experts
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIServicesPage