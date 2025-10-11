'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  Brain, 
  BarChart, 
  Zap, 
  MessageCircle, 
  Users, 
  Shield, 
  Database, 
  Eye, 
  Mic, 
  Globe, 
  FileText, 
  Workflow, 
  Heart, 
  DollarSign, 
  Target, 
  Cpu, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  Sparkles
} from 'lucide-react'

const AiServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 'ai-analytics',
      name: 'AI Analytics & Business Intelligence',
      icon: BarChart,
      description: 'Transform your data into actionable insights with advanced AI-powered analytics and predictive modeling.',
      features: [
        'Predictive analytics and forecasting',
        'Real-time data processing',
        'Natural language querying',
        'Automated report generation',
        'Anomaly detection',
        'Custom dashboard creation'
      ],
      pricing: {
        starter: { price: 299, period: 'month', features: ['Up to 10 data sources', 'Basic AI models', 'Standard reports'] },
        professional: { price: 799, period: 'month', features: ['Up to 50 data sources', 'Advanced AI models', 'Custom dashboards', 'API access'] },
        enterprise: { price: 1999, period: 'month', features: ['Unlimited data sources', 'Custom AI training', 'White-label solution', 'Dedicated support'] }
      },
      category: 'Analytics',
      popular: true,
      capabilities: [
        'Machine Learning Model Training',
        'Real-time Data Processing',
        'Predictive Forecasting',
        'Natural Language Processing',
        'Computer Vision Analysis',
        'Automated Insights Generation'
      ]
    },
    {
      id: 'ai-automation',
      name: 'AI Workflow Automation',
      icon: Zap,
      description: 'Streamline your business processes with intelligent automation that learns and adapts to your workflows.',
      features: [
        'Intelligent process automation',
        'Workflow optimization',
        'Document processing',
        'Email automation',
        'Task scheduling',
        'Integration management'
      ],
      pricing: {
        starter: { price: 199, period: 'month', features: ['Up to 10 workflows', 'Basic automation', 'Email support'] },
        professional: { price: 499, period: 'month', features: ['Up to 50 workflows', 'Advanced automation', 'Phone support', 'Custom integrations'] },
        enterprise: { price: 1299, period: 'month', features: ['Unlimited workflows', 'Custom AI training', 'White-label', 'Dedicated support'] }
      },
      category: 'Automation',
      popular: true,
      capabilities: [
        'Process Mining and Analysis',
        'Intelligent Document Processing',
        'RPA Integration',
        'Workflow Optimization',
        'Exception Handling',
        'Performance Monitoring'
      ]
    },
    {
      id: 'ai-chatbot-builder',
      name: 'AI Chatbot & Conversational AI',
      icon: MessageCircle,
      description: 'Build intelligent chatbots and conversational AI solutions that understand context and provide human-like interactions.',
      features: [
        'Natural language understanding',
        'Multi-channel deployment',
        'Context-aware conversations',
        'Sentiment analysis',
        'Live agent handoff',
        'Analytics and insights'
      ],
      pricing: {
        starter: { price: 149, period: 'month', features: ['Up to 1,000 conversations', 'Basic NLP', 'Email support'] },
        professional: { price: 399, period: 'month', features: ['Up to 10,000 conversations', 'Advanced NLP', 'Phone support', 'Custom training'] },
        enterprise: { price: 999, period: 'month', features: ['Unlimited conversations', 'Custom AI models', 'White-label', 'Dedicated support'] }
      },
      category: 'Conversational AI',
      popular: true,
      capabilities: [
        'Natural Language Understanding',
        'Intent Recognition',
        'Entity Extraction',
        'Sentiment Analysis',
        'Multi-language Support',
        'Conversation Management'
      ]
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity & Threat Detection',
      icon: Shield,
      description: 'Advanced AI-powered cybersecurity solutions that detect, prevent, and respond to threats in real-time.',
      features: [
        'Real-time threat detection',
        'Behavioral analysis',
        'Automated incident response',
        'Vulnerability assessment',
        'Compliance monitoring',
        'Security orchestration'
      ],
      pricing: {
        starter: { price: 399, period: 'month', features: ['Basic threat detection', 'Email alerts', 'Monthly reports'] },
        professional: { price: 899, period: 'month', features: ['Advanced threat detection', 'Real-time alerts', 'Weekly reports', 'Phone support'] },
        enterprise: { price: 1999, period: 'month', features: ['Full security suite', 'Custom AI models', 'Daily reports', 'Dedicated support'] }
      },
      category: 'Security',
      popular: false,
      capabilities: [
        'Threat Intelligence Analysis',
        'Behavioral Anomaly Detection',
        'Automated Response Systems',
        'Risk Assessment',
        'Compliance Monitoring',
        'Security Orchestration'
      ]
    },
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision & Image Analysis',
      icon: Eye,
      description: 'Extract insights from images and videos using advanced computer vision and image recognition technologies.',
      features: [
        'Object detection and recognition',
        'Facial recognition',
        'OCR and document analysis',
        'Quality inspection',
        'Video analytics',
        'Custom model training'
      ],
      pricing: {
        starter: { price: 249, period: 'month', features: ['Up to 1,000 images', 'Basic recognition', 'Email support'] },
        professional: { price: 599, period: 'month', features: ['Up to 10,000 images', 'Advanced recognition', 'Phone support', 'Custom models'] },
        enterprise: { price: 1499, period: 'month', features: ['Unlimited images', 'Custom AI training', 'White-label', 'Dedicated support'] }
      },
      category: 'Computer Vision',
      popular: false,
      capabilities: [
        'Object Detection and Classification',
        'Facial Recognition',
        'Optical Character Recognition',
        'Image Segmentation',
        'Video Analysis',
        'Custom Model Training'
      ]
    },
    {
      id: 'ai-voice-solutions',
      name: 'AI Voice & Speech Solutions',
      icon: Mic,
      description: 'Convert speech to text, text to speech, and build voice-enabled applications with advanced AI voice technologies.',
      features: [
        'Speech-to-text conversion',
        'Text-to-speech synthesis',
        'Voice recognition',
        'Multi-language support',
        'Voice analytics',
        'Custom voice training'
      ],
      pricing: {
        starter: { price: 199, period: 'month', features: ['Up to 100 hours', 'Basic voice processing', 'Email support'] },
        professional: { price: 499, period: 'month', features: ['Up to 1,000 hours', 'Advanced processing', 'Phone support', 'Custom voices'] },
        enterprise: { price: 1299, period: 'month', features: ['Unlimited hours', 'Custom AI training', 'White-label', 'Dedicated support'] }
      },
      category: 'Voice AI',
      popular: false,
      capabilities: [
        'Automatic Speech Recognition',
        'Text-to-Speech Synthesis',
        'Voice Biometrics',
        'Speaker Identification',
        'Emotion Recognition',
        'Custom Voice Training'
      ]
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation & Writing',
      icon: FileText,
      description: 'Generate high-quality content for blogs, marketing materials, and communications using advanced AI writing models.',
      features: [
        'Blog and article writing',
        'Marketing copy generation',
        'Email automation',
        'SEO optimization',
        'Content personalization',
        'Brand voice training'
      ],
      pricing: {
        starter: { price: 149, period: 'month', features: ['Up to 50 articles', 'Basic AI writing', 'Email support'] },
        professional: { price: 399, period: 'month', features: ['Up to 200 articles', 'Advanced AI writing', 'Phone support', 'Custom training'] },
        enterprise: { price: 999, period: 'month', features: ['Unlimited articles', 'Custom AI models', 'White-label', 'Dedicated support'] }
      },
      category: 'Content AI',
      popular: true,
      capabilities: [
        'Natural Language Generation',
        'Content Optimization',
        'SEO Enhancement',
        'Brand Voice Adaptation',
        'Multi-language Support',
        'Content Personalization'
      ]
    },
    {
      id: 'ai-financial-services',
      name: 'AI Financial Services & Fintech',
      icon: DollarSign,
      description: 'AI-powered financial solutions for fraud detection, risk assessment, and automated financial analysis.',
      features: [
        'Fraud detection and prevention',
        'Risk assessment and scoring',
        'Automated trading algorithms',
        'Credit analysis',
        'Regulatory compliance',
        'Financial forecasting'
      ],
      pricing: {
        starter: { price: 499, period: 'month', features: ['Basic fraud detection', 'Email alerts', 'Monthly reports'] },
        professional: { price: 1299, period: 'month', features: ['Advanced detection', 'Real-time alerts', 'Weekly reports', 'Phone support'] },
        enterprise: { price: 2999, period: 'month', features: ['Full financial suite', 'Custom AI models', 'Daily reports', 'Dedicated support'] }
      },
      category: 'Fintech',
      popular: false,
      capabilities: [
        'Fraud Detection and Prevention',
        'Risk Assessment and Scoring',
        'Algorithmic Trading',
        'Credit Analysis',
        'Regulatory Compliance',
        'Financial Forecasting'
      ]
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare & Medical Solutions',
      icon: Heart,
      description: 'AI-powered healthcare solutions for medical diagnosis, treatment planning, and patient care optimization.',
      features: [
        'Medical image analysis',
        'Diagnostic assistance',
        'Treatment recommendations',
        'Patient monitoring',
        'Drug discovery support',
        'Clinical decision support'
      ],
      pricing: {
        starter: { price: 799, period: 'month', features: ['Basic medical AI', 'Email support', 'Standard compliance'] },
        professional: { price: 1999, period: 'month', features: ['Advanced medical AI', 'Phone support', 'Full compliance', 'Custom models'] },
        enterprise: { price: 4999, period: 'month', features: ['Full medical suite', 'Custom AI training', 'White-label', 'Dedicated support'] }
      },
      category: 'Healthcare',
      popular: false,
      capabilities: [
        'Medical Image Analysis',
        'Diagnostic Assistance',
        'Treatment Planning',
        'Patient Risk Assessment',
        'Drug Discovery',
        'Clinical Decision Support'
      ]
    },
    {
      id: 'ai-hr-solutions',
      name: 'AI HR & Talent Management',
      icon: Users,
      description: 'AI-powered human resources solutions for recruitment, employee management, and workforce optimization.',
      features: [
        'Resume screening and matching',
        'Candidate assessment',
        'Employee performance analysis',
        'Workforce planning',
        'Training recommendations',
        'Retention prediction'
      ],
      pricing: {
        starter: { price: 299, period: 'month', features: ['Up to 100 employees', 'Basic HR AI', 'Email support'] },
        professional: { price: 799, period: 'month', features: ['Up to 1,000 employees', 'Advanced HR AI', 'Phone support', 'Custom training'] },
        enterprise: { price: 1999, period: 'month', features: ['Unlimited employees', 'Custom AI models', 'White-label', 'Dedicated support'] }
      },
      category: 'HR Tech',
      popular: false,
      capabilities: [
        'Resume Parsing and Matching',
        'Candidate Assessment',
        'Performance Analytics',
        'Workforce Planning',
        'Training Recommendations',
        'Retention Prediction'
      ]
    }
  ]

  const categories = ['All', 'Analytics', 'Automation', 'Conversational AI', 'Security', 'Computer Vision', 'Voice AI', 'Content AI', 'Fintech', 'Healthcare', 'HR Tech']

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="w-8 h-8 text-cyan-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business with cutting-edge AI solutions and services.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-cyan-500/30"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-cyan-500/20 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <span className="text-sm text-cyan-400">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-sm text-cyan-400">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-white">${service.pricing.professional.price}</span>
                    <span className="text-gray-400">/{service.pricing.professional.period}</span>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.pricing.professional.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our AI <span className="text-cyan-400">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge AI technologies to deliver intelligent solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Machine Learning</h3>
              <p className="text-gray-300">Advanced ML algorithms for predictive modeling, pattern recognition, and intelligent decision making.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <MessageCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Natural Language Processing</h3>
              <p className="text-gray-300">Understand and process human language for chatbots, content analysis, and automated communication.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Eye className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Computer Vision</h3>
              <p className="text-gray-300">Extract insights from images and videos using advanced computer vision and image recognition.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Process Automation</h3>
              <p className="text-gray-300">Automate complex business processes with intelligent workflow management and optimization.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <BarChart className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Predictive Analytics</h3>
              <p className="text-gray-300">Forecast future trends and outcomes using advanced statistical modeling and data analysis.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">AI Security</h3>
              <p className="text-gray-300">Protect your systems with AI-powered threat detection, fraud prevention, and security monitoring.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AI experts help you identify the best AI solutions for your business needs and implement them successfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AiServicesPage