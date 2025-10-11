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
  Shield,
  BarChart,
  Code,
  Cloud,
  Smartphone,
  Mail,
  FileText,
  Settings,
  Database,
  Globe,
  Lock,
  TrendingUp,
  MessageSquare,
  Calendar,
  Workflow,
  Eye,
  Wifi,
  ShoppingCart,
  Rocket,
  Award,
  Lightbulb,
  Gauge,
  Phone,
  Cpu,
  Monitor,
  Package,
  Mic,
  Heart,
  Bot,
  Search,
  Layers,
  Sparkles,
  Activity,
  Zap as Lightning
} from 'lucide-react'

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI-Powered Business Intelligence',
      description: 'Advanced AI analytics platform that transforms your data into actionable insights with predictive modeling and automated reporting.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Insights', 'Natural Language Queries', 'Custom Models', 'API Integration'],
      pricing: '$299/month',
      category: 'Analytics & Intelligence',
      benefits: ['Increase decision speed by 80%', 'Reduce manual analysis time', 'Improve forecast accuracy', 'Identify hidden opportunities'],
      link: 'https://ziontechgroup.com/ai-business-intelligence',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Bot,
      title: 'AI Customer Service Automation',
      description: 'Intelligent customer service platform with advanced NLP, sentiment analysis, and seamless human handoff capabilities.',
      features: ['Multi-language Support', 'Sentiment Analysis', 'Human Handoff', 'Knowledge Base Integration', 'Voice & Text Support', 'Analytics Dashboard'],
      pricing: '$199/month',
      category: 'Customer Service',
      benefits: ['Reduce support costs by 70%', 'Provide 24/7 support', 'Improve response times', 'Increase customer satisfaction'],
      link: 'https://ziontechgroup.com/ai-customer-service',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: FileText,
      title: 'AI Document Processing Suite',
      description: 'Intelligent document processing platform that extracts, analyzes, and processes documents with 99% accuracy.',
      features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Workflow Automation', 'Compliance Tracking', 'API Integration'],
      pricing: '$149/month',
      category: 'Document Processing',
      benefits: ['Process documents 10x faster', 'Reduce errors by 95%', 'Automate workflows', 'Ensure compliance'],
      link: 'https://ziontechgroup.com/ai-document-processing',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Target,
      title: 'AI Computer Vision Solutions',
      description: 'Advanced computer vision platform for image recognition, object detection, and visual quality control.',
      features: ['Object Detection', 'Image Classification', 'Quality Control', 'Real-time Processing', 'Custom Model Training', 'Edge Deployment'],
      pricing: '$399/month',
      category: 'Computer Vision',
      benefits: ['Automate visual inspections', 'Improve quality control', 'Reduce manual labor', 'Increase accuracy'],
      link: 'https://ziontechgroup.com/ai-computer-vision',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Zap,
      title: 'AI Workflow Automation Engine',
      description: 'Intelligent automation platform that learns from your processes and automates complex workflows.',
      features: ['Process Mining', 'Intelligent Automation', 'Workflow Optimization', 'Exception Handling', 'Performance Analytics', 'Custom Triggers'],
      pricing: '$249/month',
      category: 'Automation',
      benefits: ['Automate 90% of repetitive tasks', 'Reduce process time by 80%', 'Eliminate human errors', 'Scale operations efficiently'],
      link: 'https://ziontechgroup.com/ai-workflow-automation',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: MessageSquare,
      title: 'AI Content Generation Platform',
      description: 'Advanced AI content creation platform that generates high-quality text, images, and multimedia content.',
      features: ['Text Generation', 'Image Creation', 'Video Production', 'Multi-language Support', 'Brand Voice Training', 'SEO Optimization'],
      pricing: '$179/month',
      category: 'Content Creation',
      benefits: ['Create content 50x faster', 'Maintain brand consistency', 'Improve SEO rankings', 'Reduce content costs'],
      link: 'https://ziontechgroup.com/ai-content-generation',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity Defense',
      description: 'Intelligent cybersecurity platform that uses AI to detect, prevent, and respond to threats in real-time.',
      features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Risk Assessment', 'Compliance Monitoring', 'Incident Management'],
      pricing: '$349/month',
      category: 'Cybersecurity',
      benefits: ['Prevent 99% of cyber attacks', 'Reduce false positives', 'Automate incident response', 'Ensure compliance'],
      link: 'https://ziontechgroup.com/ai-cybersecurity',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: BarChart,
      title: 'AI Predictive Analytics Suite',
      description: 'Advanced predictive analytics platform that forecasts trends, customer behavior, and business outcomes.',
      features: ['Predictive Modeling', 'Trend Analysis', 'Risk Assessment', 'Scenario Planning', 'Real-time Alerts', 'Custom Dashboards'],
      pricing: '$279/month',
      category: 'Predictive Analytics',
      benefits: ['Improve forecast accuracy', 'Identify opportunities early', 'Reduce business risks', 'Optimize resource allocation'],
      link: 'https://ziontechgroup.com/ai-predictive-analytics',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Users,
      title: 'AI HR & Talent Management',
      description: 'Intelligent HR platform that automates recruitment, performance management, and employee engagement.',
      features: ['Resume Screening', 'Candidate Matching', 'Performance Analytics', 'Employee Engagement', 'Retention Prediction', 'Skills Assessment'],
      pricing: '$199/month',
      category: 'HR & Talent',
      benefits: ['Reduce hiring time by 60%', 'Improve candidate quality', 'Increase employee retention', 'Optimize workforce planning'],
      link: 'https://ziontechgroup.com/ai-hr-management',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: ShoppingCart,
      title: 'AI E-commerce Optimization',
      description: 'Intelligent e-commerce platform that optimizes pricing, inventory, and customer experience using AI.',
      features: ['Dynamic Pricing', 'Inventory Optimization', 'Personalized Recommendations', 'Demand Forecasting', 'Customer Segmentation', 'A/B Testing'],
      pricing: '$229/month',
      category: 'E-commerce',
      benefits: ['Increase sales by 35%', 'Optimize inventory levels', 'Improve customer experience', 'Maximize profit margins'],
      link: 'https://ziontechgroup.com/ai-ecommerce-optimization',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Activity,
      title: 'AI Health Monitoring System',
      description: 'Intelligent health monitoring platform that tracks vital signs, predicts health issues, and provides recommendations.',
      features: ['Vital Sign Monitoring', 'Health Predictions', 'Medication Reminders', 'Doctor Integration', 'Emergency Alerts', 'Health Reports'],
      pricing: '$149/month',
      category: 'Healthcare',
      benefits: ['Improve health outcomes', 'Reduce healthcare costs', 'Enable proactive care', 'Enhance patient engagement'],
      link: 'https://ziontechgroup.com/ai-health-monitoring',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    {
      icon: Search,
      title: 'AI Search & Discovery Engine',
      description: 'Advanced search platform that uses AI to provide intelligent search, recommendations, and content discovery.',
      features: ['Semantic Search', 'Personalized Results', 'Auto-complete', 'Voice Search', 'Image Search', 'Recommendation Engine'],
      pricing: '$129/month',
      category: 'Search & Discovery',
      benefits: ['Improve search accuracy', 'Increase user engagement', 'Boost conversion rates', 'Enhance user experience'],
      link: 'https://ziontechgroup.com/ai-search-engine',
      contact: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    }
  ]

  const categories = [
    'All AI Services',
    'Analytics & Intelligence',
    'Customer Service',
    'Document Processing',
    'Computer Vision',
    'Automation',
    'Content Creation',
    'Cybersecurity',
    'Predictive Analytics',
    'HR & Talent',
    'E-commerce',
    'Healthcare',
    'Search & Discovery'
  ]

  const [selectedCategory, setSelectedCategory] = React.useState('All AI Services')

  const filteredServices = selectedCategory === 'All AI Services' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations and drive innovation. 
              Our comprehensive AI solutions are designed to solve real business challenges and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Explore AI Solutions
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule AI Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-cyan-400'
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
              <div key={index} className="cyber-card group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <span className="text-sm text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-white">
                    {service.pricing}
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm text-gray-300">(4.9/5)</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Rocket className="w-4 h-4 mr-2" />
                    Get Started
                  </a>
                  
                  <div className="flex space-x-2">
                    <a
                      href={`mailto:${service.contact}?subject=Inquiry about ${service.title}`}
                      className="flex-1 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-center text-sm flex items-center justify-center"
                    >
                      <Mail className="w-4 h-4 mr-1" />
                      Email
                    </a>
                    <a
                      href={`tel:${service.phone}`}
                      className="flex-1 border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 text-center text-sm flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      Call
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI solutions can solve your specific business challenges and drive measurable results. 
              Our expert team will work with you to implement the perfect AI solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Services Consultation"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Brain className="w-5 h-5 mr-2" />
                Schedule AI Consultation
              </a>
              <a
                href="tel:+13024640950"
                className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIServicesPage