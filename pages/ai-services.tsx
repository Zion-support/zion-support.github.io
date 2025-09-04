import React from "react"
import dynamic from 'next/dynamic'
import Head from "next/head"
import Link from "next/link"
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Award, 
  BarChart3, 
  Bot, 
  Brain, 
  CheckCircle, 
  Eye, 
  MessageSquare, 
  Shield, 
  Zap,
  Cpu,
  Database,
  Globe,
  Lock,
  Mic,
  Camera,
  FileText,
  Users,
  TrendingUp,
  Clock,
  Star,
  Network,
  Server,
  Code,
  Target,
  Settings,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

// Dynamic imports for better performance
const SEO = dynamic(() => import('../src/components/seo/SEOHead'), { ssr: false })
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { ssr: false })

export default function AIServices() {
  const title = 'AI Services — Zion Tech Group'
  const description = 'Comprehensive AI services including machine learning, natural language processing, computer vision, and autonomous systems.'

  const aiServices = [
    {
      title: 'AI-Powered Autonomous Systems',
      description: 'Intelligent automation solutions that operate independently with minimal human intervention',
      icon: Bot,
      features: [
        'Self-learning algorithms and adaptive behavior',
        'Real-time decision making and response',
        'Multi-agent coordination and communication',
        'Predictive maintenance and optimization',
        'Autonomous workflow orchestration',
        'Continuous learning and improvement'
      ],
      pricing: '$5,000 - $25,000/month',
      delivery: '8-12 weeks',
      category: 'Autonomous Systems',
      benefits: 'Reduce operational costs by 40%, improve efficiency, 24/7 autonomous operation'
    },
    {
      title: 'Machine Learning & Predictive Analytics',
      description: 'Advanced ML models for forecasting, pattern recognition, and data-driven insights',
      icon: Brain,
      features: [
        'Custom ML model development and training',
        'Predictive analytics and forecasting',
        'Pattern recognition and anomaly detection',
        'Real-time data processing and analysis',
        'Model optimization and performance tuning',
        'Integration with existing systems'
      ],
      pricing: '$3,000 - $15,000/month',
      delivery: '6-10 weeks',
      category: 'Machine Learning',
      benefits: 'Accurate predictions, data-driven decisions, competitive advantage'
    },
    {
      title: 'Natural Language Processing (NLP)',
      description: 'Advanced text analysis, language understanding, and conversational AI solutions',
      icon: MessageSquare,
      features: [
        'Text analysis and sentiment analysis',
        'Language translation and localization',
        'Chatbot and conversational AI development',
        'Document processing and information extraction',
        'Voice recognition and speech synthesis',
        'Multi-language support and processing'
      ],
      pricing: '$2,500 - $12,000/month',
      delivery: '4-8 weeks',
      category: 'NLP',
      benefits: 'Better customer interactions, automated content processing, multilingual support'
    },
    {
      title: 'Computer Vision & Image Recognition',
      description: 'Advanced image and video analysis with object detection and visual intelligence',
      icon: Eye,
      features: [
        'Object detection and recognition',
        'Facial recognition and biometric analysis',
        'Image classification and tagging',
        'Video analysis and motion detection',
        'OCR and document digitization',
        'Quality control and inspection automation'
      ],
      pricing: '$3,500 - $18,000/month',
      delivery: '6-12 weeks',
      category: 'Computer Vision',
      benefits: 'Automated visual inspection, enhanced security, improved accuracy'
    },
    {
      title: 'AI-Powered Cybersecurity',
      description: 'Intelligent threat detection, security monitoring, and automated response systems',
      icon: Shield,
      features: [
        'Real-time threat detection and analysis',
        'Behavioral analysis and anomaly detection',
        'Automated incident response and remediation',
        'Security monitoring and alerting',
        'Vulnerability assessment and management',
        'Compliance monitoring and reporting'
      ],
      pricing: '$4,000 - $20,000/month',
      delivery: '8-16 weeks',
      category: 'Cybersecurity',
      benefits: 'Proactive threat detection, reduced security incidents, automated response'
    },
    {
      title: 'Intelligent Process Automation (IPA)',
      description: 'AI-driven business process automation with cognitive capabilities',
      icon: Zap,
      features: [
        'Cognitive automation and decision making',
        'Process mining and optimization',
        'Intelligent document processing',
        'Workflow automation and orchestration',
        'Exception handling and resolution',
        'Performance monitoring and analytics'
      ],
      pricing: '$2,000 - $10,000/month',
      delivery: '4-8 weeks',
      category: 'Process Automation',
      benefits: 'Faster processes, reduced errors, improved efficiency'
    },
    {
      title: 'AI-Powered Customer Analytics',
      description: 'Advanced customer behavior analysis and personalized experience optimization',
      icon: Users,
      features: [
        'Customer behavior analysis and segmentation',
        'Personalization and recommendation engines',
        'Churn prediction and retention strategies',
        'Customer journey mapping and optimization',
        'Sentiment analysis and feedback processing',
        'Real-time customer insights and actions'
      ],
      pricing: '$2,500 - $12,000/month',
      delivery: '6-10 weeks',
      category: 'Customer Analytics',
      benefits: 'Better customer experience, increased retention, personalized interactions'
    },
    {
      title: 'AI-Powered Supply Chain Optimization',
      description: 'Intelligent supply chain management with predictive analytics and optimization',
      icon: Network,
      features: [
        'Demand forecasting and planning',
        'Inventory optimization and management',
        'Supplier performance analysis',
        'Risk assessment and mitigation',
        'Route optimization and logistics',
        'Real-time supply chain monitoring'
      ],
      pricing: '$4,500 - $22,000/month',
      delivery: '8-14 weeks',
      category: 'Supply Chain',
      benefits: 'Reduced costs, improved efficiency, better risk management'
    },
    {
      title: 'AI-Powered Financial Analytics',
      description: 'Advanced financial modeling, risk assessment, and investment analysis',
      icon: BarChart3,
      features: [
        'Financial modeling and forecasting',
        'Risk assessment and management',
        'Fraud detection and prevention',
        'Investment analysis and recommendations',
        'Credit scoring and assessment',
        'Regulatory compliance monitoring'
      ],
      pricing: '$3,500 - $18,000/month',
      delivery: '6-12 weeks',
      category: 'Financial Analytics',
      benefits: 'Better financial decisions, reduced risk, improved compliance'
    },
    {
      title: 'AI-Powered Healthcare Solutions',
      description: 'Intelligent healthcare applications with medical image analysis and patient care',
      icon: Award,
      features: [
        'Medical image analysis and diagnosis',
        'Patient monitoring and care management',
        'Drug discovery and development',
        'Clinical decision support systems',
        'Health data analysis and insights',
        'Telemedicine and remote care'
      ],
      pricing: '$5,000 - $30,000/month',
      delivery: '10-20 weeks',
      category: 'Healthcare',
      benefits: 'Improved patient outcomes, faster diagnosis, better care delivery'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <SEO 
        title={title}
        description={description}
        keywords={['AI services', 'machine learning', 'artificial intelligence', 'automation', 'computer vision', 'NLP']}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              AI-Powered Solutions
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence services. 
              From machine learning to autonomous systems, we deliver intelligent solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our AI Services</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive artificial intelligence solutions designed to solve complex business challenges and drive innovation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.title}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-purple-100 transition-colors">
                      <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors" />
                    </div>
                    <div className="ml-4">
                      <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <p className="text-sm text-green-600 font-medium">{service.benefits}</p>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-blue-600 text-xs">+{service.features.length - 3} more features</li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-lg font-bold text-gray-900">{service.pricing}</span>
                      <span className="text-sm text-gray-500">{service.delivery}</span>
                    </div>
                    <Link 
                      href="/contact" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors text-center block"
                    >
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how AI can revolutionize your operations and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">
                Call +1 302 464 0950
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}