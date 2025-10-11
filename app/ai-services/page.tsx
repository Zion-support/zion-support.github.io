'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, Zap, Target, CheckCircle, ArrowRight, DollarSign, TrendingUp, Clock, Shield, BarChart, Smartphone, Globe, Database, Settings, Rocket, Star, Award, Cpu, Lock, MessageSquare, FileText, Calendar, Workflow, Eye, Wifi, Package, Mic, Heart, Gauge, Phone, Mail, MapPin, Users, Code, Cloud, Server, Cpu as CpuIcon, Database as DatabaseIcon, BarChart3, Target as TargetIcon, Zap as ZapIcon, Brain as BrainIcon, Shield as ShieldIcon, Globe as GlobeIcon, Smartphone as SmartphoneIcon, Settings as SettingsIcon, Rocket as RocketIcon, Star as StarIcon, Award as AwardIcon, Lock as LockIcon, MessageSquare as MessageSquareIcon, FileText as FileTextIcon, Calendar as CalendarIcon, Workflow as WorkflowIcon, Eye as EyeIcon, Wifi as WifiIcon, Package as PackageIcon, Mic as MicIcon, Heart as HeartIcon, Gauge as GaugeIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Users as UsersIcon } from 'lucide-react'

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with AI-powered analytics and predictive modeling.',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Automated Reporting', 'Data Visualization'],
      pricing: 'Starting at $2,999/month',
      marketPrice: '$5,999/month',
      benefits: ['Increase revenue by 35%', 'Reduce decision time by 70%', 'Improve forecasting accuracy by 90%'],
      useCases: ['Financial Forecasting', 'Customer Behavior Analysis', 'Market Trend Prediction', 'Performance Optimization'],
      link: '/ai-analytics'
    },
    {
      icon: MessageSquare,
      title: 'AI Customer Support & Chatbots',
      description: 'Revolutionize customer service with intelligent chatbots and automated support systems.',
      features: ['24/7 AI Chatbots', 'Multi-language Support', 'Sentiment Analysis', 'Ticket Automation', 'Live Agent Handoff'],
      pricing: 'Starting at $1,499/month',
      marketPrice: '$2,999/month',
      benefits: ['Reduce support costs by 60%', 'Improve response time by 85%', 'Increase customer satisfaction by 40%'],
      useCases: ['Customer Service Automation', 'Lead Qualification', 'FAQ Automation', 'Order Support'],
      link: '/ai-customer-support'
    },
    {
      icon: Eye,
      title: 'AI Computer Vision & Image Recognition',
      description: 'Enable machines to see and understand visual content with advanced computer vision technology.',
      features: ['Object Detection', 'Facial Recognition', 'Image Classification', 'Quality Control', 'Real-time Processing'],
      pricing: 'Starting at $2,499/month',
      marketPrice: '$4,999/month',
      benefits: ['Automate visual inspections', 'Improve accuracy by 95%', 'Reduce manual labor by 80%'],
      useCases: ['Manufacturing QC', 'Security Systems', 'Medical Imaging', 'Retail Analytics'],
      link: '/ai-computer-vision'
    },
    {
      icon: FileText,
      title: 'AI Document Processing & OCR',
      description: 'Automate document processing with intelligent OCR, classification, and data extraction.',
      features: ['Advanced OCR', 'Document Classification', 'Data Extraction', 'Batch Processing', 'API Integration'],
      pricing: 'Starting at $1,999/month',
      marketPrice: '$3,999/month',
      benefits: ['Process documents 10x faster', 'Achieve 99.5% accuracy', 'Save 30+ hours per week'],
      useCases: ['Invoice Processing', 'Contract Analysis', 'Medical Records', 'Legal Document Review'],
      link: '/ai-document-processing'
    },
    {
      icon: Workflow,
      title: 'AI Workflow Automation',
      description: 'Streamline business processes with intelligent workflow automation and process optimization.',
      features: ['Process Automation', 'Rule Engine', 'Integration Hub', 'Performance Monitoring', 'Custom Workflows'],
      pricing: 'Starting at $3,499/month',
      marketPrice: '$6,999/month',
      benefits: ['Reduce manual work by 75%', 'Eliminate human errors', 'Scale operations 5x'],
      useCases: ['HR Onboarding', 'Financial Approvals', 'Inventory Management', 'Customer Onboarding'],
      link: '/ai-workflow-automation'
    },
    {
      icon: BarChart,
      title: 'AI Predictive Analytics',
      description: 'Forecast future trends and behaviors with advanced machine learning and statistical modeling.',
      features: ['Time Series Forecasting', 'Risk Assessment', 'Demand Prediction', 'Churn Analysis', 'Market Analysis'],
      pricing: 'Starting at $2,999/month',
      marketPrice: '$5,999/month',
      benefits: ['Improve forecasting accuracy by 85%', 'Reduce inventory costs by 30%', 'Increase sales by 25%'],
      useCases: ['Sales Forecasting', 'Inventory Optimization', 'Risk Management', 'Market Research'],
      link: '/ai-predictive-analytics'
    },
    {
      icon: Mic,
      title: 'AI Voice & Speech Processing',
      description: 'Implement voice recognition, speech-to-text, and conversational AI solutions.',
      features: ['Speech Recognition', 'Voice Commands', 'Text-to-Speech', 'Voice Analytics', 'Multi-language Support'],
      pricing: 'Starting at $1,799/month',
      marketPrice: '$3,599/month',
      benefits: ['Improve accessibility', 'Increase productivity by 45%', 'Enhance user experience'],
      useCases: ['Voice Assistants', 'Call Center Automation', 'Accessibility Tools', 'Voice Analytics'],
      link: '/ai-voice-processing'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity & Fraud Detection',
      description: 'Protect your business with AI-powered security solutions and fraud detection systems.',
      features: ['Threat Detection', 'Fraud Prevention', 'Anomaly Detection', 'Risk Assessment', 'Real-time Monitoring'],
      pricing: 'Starting at $2,999/month',
      marketPrice: '$5,999/month',
      benefits: ['Prevent 99% of threats', 'Reduce false positives by 80%', 'Improve response time by 90%'],
      useCases: ['Payment Fraud Detection', 'Network Security', 'Identity Verification', 'Transaction Monitoring'],
      link: '/ai-cybersecurity'
    },
    {
      icon: Heart,
      title: 'AI Healthcare Solutions',
      description: 'Revolutionize healthcare with AI-powered diagnostic tools and patient care systems.',
      features: ['Medical Imaging Analysis', 'Diagnostic Assistance', 'Patient Monitoring', 'Drug Discovery', 'Treatment Optimization'],
      pricing: 'Starting at $4,999/month',
      marketPrice: '$9,999/month',
      benefits: ['Improve diagnostic accuracy by 40%', 'Reduce treatment time by 35%', 'Enhance patient outcomes'],
      useCases: ['Medical Diagnosis', 'Drug Development', 'Patient Monitoring', 'Treatment Planning'],
      link: '/ai-healthcare'
    },
    {
      icon: Gauge,
      title: 'AI Performance Optimization',
      description: 'Optimize business performance with AI-driven insights and automated optimization.',
      features: ['Performance Monitoring', 'Optimization Recommendations', 'A/B Testing', 'Resource Allocation', 'Efficiency Analysis'],
      pricing: 'Starting at $1,999/month',
      marketPrice: '$3,999/month',
      benefits: ['Improve performance by 50%', 'Reduce costs by 25%', 'Increase efficiency by 60%'],
      useCases: ['Website Optimization', 'Marketing Campaigns', 'Supply Chain', 'Employee Performance'],
      link: '/ai-performance-optimization'
    },
    {
      icon: Globe,
      title: 'AI Natural Language Processing',
      description: 'Process and understand human language with advanced NLP and text analysis capabilities.',
      features: ['Text Analysis', 'Language Translation', 'Sentiment Analysis', 'Content Generation', 'Text Summarization'],
      pricing: 'Starting at $1,299/month',
      marketPrice: '$2,599/month',
      benefits: ['Process text 20x faster', 'Improve accuracy by 95%', 'Enable multilingual support'],
      useCases: ['Content Moderation', 'Language Translation', 'Sentiment Analysis', 'Text Summarization'],
      link: '/ai-nlp'
    },
    {
      icon: Cpu,
      title: 'AI Edge Computing',
      description: 'Deploy AI models at the edge for real-time processing and reduced latency.',
      features: ['Edge AI Models', 'Real-time Processing', 'Low Latency', 'Offline Capability', 'Resource Optimization'],
      pricing: 'Starting at $3,999/month',
      marketPrice: '$7,999/month',
      benefits: ['Reduce latency by 90%', 'Enable offline processing', 'Improve privacy and security'],
      useCases: ['IoT Devices', 'Autonomous Vehicles', 'Smart Manufacturing', 'Real-time Analytics'],
      link: '/ai-edge-computing'
    }
  ]

  const aiCapabilities = [
    'Machine Learning Model Development',
    'Deep Learning & Neural Networks',
    'Natural Language Processing',
    'Computer Vision & Image Recognition',
    'Predictive Analytics & Forecasting',
    'Automated Decision Making',
    'Real-time Data Processing',
    'Custom AI Model Training',
    'API Integration & Deployment',
    'Performance Monitoring & Optimization',
    'Scalable Cloud Infrastructure',
    'Enterprise Security & Compliance'
  ]

  const industrySolutions = [
    {
      industry: 'Healthcare',
      solutions: ['Medical Diagnosis AI', 'Drug Discovery', 'Patient Monitoring', 'Treatment Optimization'],
      icon: Heart
    },
    {
      industry: 'Finance',
      solutions: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring'],
      icon: DollarSign
    },
    {
      industry: 'Manufacturing',
      solutions: ['Quality Control', 'Predictive Maintenance', 'Supply Chain Optimization', 'Process Automation'],
      icon: Settings
    },
    {
      industry: 'Retail',
      solutions: ['Customer Analytics', 'Inventory Management', 'Price Optimization', 'Recommendation Engines'],
      icon: Package
    },
    {
      industry: 'Education',
      solutions: ['Personalized Learning', 'Student Assessment', 'Content Generation', 'Learning Analytics'],
      icon: Users
    },
    {
      industry: 'Transportation',
      solutions: ['Autonomous Vehicles', 'Route Optimization', 'Predictive Maintenance', 'Traffic Management'],
      icon: Globe
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, 
              we deliver AI-powered innovations that drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                <Rocket className="w-5 h-5 inline mr-2" />
                Start AI Project
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                <Phone className="w-5 h-5 inline mr-2" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our extensive portfolio of AI services, each designed to solve specific business challenges 
              and deliver measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-green-400">{service.pricing}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Business Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.useCases.map((useCase, useCaseIndex) => (
                      <span key={useCaseIndex} className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <a 
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-center text-sm"
                  >
                    Learn More
                  </a>
                  <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Capabilities
            </h2>
            <p className="text-xl text-gray-300">
              We leverage cutting-edge AI technologies to deliver innovative solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific AI Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Tailored AI solutions for different industries and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{industry.industry}</h3>
                </div>
                <ul className="space-y-2">
                  {industry.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
            Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Rocket className="w-5 h-5 mr-2" />
              Start AI Project
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-8 text-gray-400">
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              <span>Certified AI Experts</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIServicesPage