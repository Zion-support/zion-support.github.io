'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, Zap, Target, CheckCircle, ArrowRight, DollarSign, Users, Clock, Shield, Code, BarChart, Smartphone, Mail, Calendar, FileText, MessageCircle, ShoppingCart, Database, Cloud, Lock, TrendingUp, Settings, Globe, Heart, Star, Award, Rocket, Cpu, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, Phone, Bot, CpuChip, Sparkles, Lightbulb, Gauge, Activity, Layers, BookOpen, Truck } from 'lucide-react'

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'Machine Learning Solutions',
      description: 'Build intelligent systems that learn and adapt to your business needs with advanced ML algorithms.',
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making', 'Real-time Processing', 'Model Training & Deployment'],
      pricing: 'Starting at $2,500/month',
      benefits: ['Increase efficiency by 40%', 'Reduce manual errors by 90%', 'Make data-driven decisions'],
      applications: ['Demand forecasting', 'Customer behavior analysis', 'Risk assessment', 'Process optimization'],
      link: 'https://ziontechgroup.com/machine-learning'
    },
    {
      icon: MessageCircle,
      title: 'Natural Language Processing',
      description: 'Transform text and speech into actionable insights with advanced NLP capabilities.',
      features: ['Chatbots & Virtual Assistants', 'Sentiment Analysis', 'Language Translation', 'Text Summarization', 'Document Processing'],
      pricing: 'Starting at $1,800/month',
      benefits: ['Improve customer service by 60%', 'Process documents 10x faster', 'Enable multilingual support'],
      applications: ['Customer support automation', 'Content moderation', 'Document analysis', 'Voice assistants'],
      link: 'https://ziontechgroup.com/natural-language-processing'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Enable machines to interpret and understand visual information with cutting-edge CV technology.',
      features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Quality Control', 'Medical Imaging'],
      pricing: 'Starting at $2,200/month',
      benefits: ['Automate visual inspections', 'Improve accuracy by 95%', 'Enable 24/7 monitoring'],
      applications: ['Manufacturing quality control', 'Security surveillance', 'Medical diagnosis', 'Autonomous vehicles'],
      link: 'https://ziontechgroup.com/computer-vision'
    },
    {
      icon: BarChart,
      title: 'AI Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with AI-powered analytics and reporting.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Anomaly Detection', 'Trend Analysis'],
      pricing: 'Starting at $1,500/month',
      benefits: ['Make data-driven decisions', 'Identify opportunities early', 'Reduce reporting time by 80%'],
      applications: ['Sales forecasting', 'Customer analytics', 'Operational insights', 'Financial analysis'],
      link: 'https://ziontechgroup.com/ai-analytics'
    },
    {
      icon: Bot,
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Deploy intelligent conversational AI that understands context and provides personalized responses.',
      features: ['Multi-channel Support', 'Context Awareness', 'Integration APIs', 'Analytics Dashboard', 'Custom Training'],
      pricing: 'Starting at $800/month',
      benefits: ['Reduce support costs by 70%', 'Provide 24/7 customer service', 'Improve response time by 90%'],
      applications: ['Customer support', 'Lead qualification', 'Internal helpdesk', 'E-commerce assistance'],
      link: 'https://ziontechgroup.com/ai-chatbots'
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity Solutions',
      description: 'Protect your digital assets with AI-powered threat detection and automated security responses.',
      features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Vulnerability Assessment', 'Compliance Monitoring'],
      pricing: 'Starting at $3,000/month',
      benefits: ['Prevent 99% of cyber attacks', 'Reduce false positives by 85%', 'Ensure compliance'],
      applications: ['Network security', 'Endpoint protection', 'Fraud detection', 'Compliance management'],
      link: 'https://ziontechgroup.com/ai-cybersecurity'
    },
    {
      icon: Code,
      title: 'AI Code Generation & Review',
      description: 'Accelerate development with AI-powered code generation, review, and optimization tools.',
      features: ['Code Generation', 'Automated Testing', 'Bug Detection', 'Performance Optimization', 'Documentation'],
      pricing: 'Starting at $1,200/month',
      benefits: ['Write code 3x faster', 'Reduce bugs by 60%', 'Improve code quality'],
      applications: ['Software development', 'Code review', 'Testing automation', 'Technical documentation'],
      link: 'https://ziontechgroup.com/ai-code-generation'
    },
    {
      icon: ShoppingCart,
      title: 'AI E-commerce Solutions',
      description: 'Boost your online sales with AI-powered personalization, recommendations, and optimization.',
      features: ['Product Recommendations', 'Price Optimization', 'Inventory Management', 'Customer Segmentation', 'A/B Testing'],
      pricing: 'Starting at $1,600/month',
      benefits: ['Increase sales by 25%', 'Improve customer experience', 'Optimize inventory levels'],
      applications: ['Product recommendations', 'Dynamic pricing', 'Customer targeting', 'Supply chain optimization'],
      link: 'https://ziontechgroup.com/ai-ecommerce'
    },
    {
      icon: Users,
      title: 'AI HR & Talent Management',
      description: 'Streamline HR processes with AI-powered recruitment, performance analysis, and employee engagement.',
      features: ['Resume Screening', 'Interview Scheduling', 'Performance Analysis', 'Employee Engagement', 'Predictive Analytics'],
      pricing: 'Starting at $2,000/month',
      benefits: ['Reduce hiring time by 50%', 'Improve candidate quality', 'Increase employee satisfaction'],
      applications: ['Talent acquisition', 'Performance management', 'Employee retention', 'Workforce planning'],
      link: 'https://ziontechgroup.com/ai-hr'
    },
    {
      icon: TrendingUp,
      title: 'AI Financial Services',
      description: 'Optimize financial operations with AI-powered analysis, forecasting, and risk management.',
      features: ['Financial Forecasting', 'Risk Assessment', 'Fraud Detection', 'Investment Analysis', 'Regulatory Compliance'],
      pricing: 'Starting at $2,800/month',
      benefits: ['Improve financial accuracy', 'Reduce risk exposure', 'Ensure compliance'],
      applications: ['Credit scoring', 'Fraud prevention', 'Investment management', 'Regulatory reporting'],
      link: 'https://ziontechgroup.com/ai-financial'
    },
    {
      icon: FileText,
      title: 'AI Document Processing',
      description: 'Automate document workflows with intelligent extraction, classification, and processing capabilities.',
      features: ['OCR Technology', 'Data Extraction', 'Document Classification', 'Workflow Automation', 'Compliance Tracking'],
      pricing: 'Starting at $1,400/month',
      benefits: ['Process documents 10x faster', 'Reduce errors by 95%', 'Eliminate manual data entry'],
      applications: ['Invoice processing', 'Contract analysis', 'Compliance monitoring', 'Knowledge management'],
      link: 'https://ziontechgroup.com/ai-document-processing'
    },
    {
      icon: Cloud,
      title: 'AI Cloud Infrastructure',
      description: 'Optimize your cloud resources with AI-powered monitoring, scaling, and cost management.',
      features: ['Resource Optimization', 'Predictive Scaling', 'Cost Management', 'Performance Monitoring', 'Automated Deployment'],
      pricing: 'Starting at $1,800/month',
      benefits: ['Reduce cloud costs by 30%', 'Improve performance', 'Prevent downtime'],
      applications: ['Cloud optimization', 'Auto-scaling', 'Cost management', 'Performance monitoring'],
      link: 'https://ziontechgroup.com/ai-cloud'
    }
  ]

  const industrySolutions = [
    {
      industry: 'Healthcare',
      icon: Heart,
      solutions: ['Medical Imaging Analysis', 'Drug Discovery', 'Patient Monitoring', 'Diagnostic Assistance'],
      description: 'AI-powered healthcare solutions for improved patient outcomes and operational efficiency.'
    },
    {
      industry: 'Manufacturing',
      icon: Settings,
      solutions: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Process Automation'],
      description: 'Transform manufacturing operations with intelligent automation and predictive analytics.'
    },
    {
      industry: 'Finance',
      icon: DollarSign,
      solutions: ['Fraud Detection', 'Algorithmic Trading', 'Risk Management', 'Customer Analytics'],
      description: 'Secure and optimize financial operations with advanced AI and machine learning.'
    },
    {
      industry: 'Retail',
      icon: ShoppingCart,
      solutions: ['Personalization', 'Inventory Management', 'Demand Forecasting', 'Customer Service'],
      description: 'Enhance customer experience and optimize operations with AI-driven retail solutions.'
    },
    {
      industry: 'Education',
      icon: BookOpen,
      solutions: ['Personalized Learning', 'Automated Grading', 'Student Analytics', 'Content Generation'],
      description: 'Revolutionize education with personalized learning experiences and intelligent tutoring.'
    },
    {
      industry: 'Transportation',
      icon: Truck,
      solutions: ['Route Optimization', 'Predictive Maintenance', 'Autonomous Vehicles', 'Traffic Management'],
      description: 'Optimize transportation networks and enable autonomous mobility solutions.'
    }
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for small businesses exploring AI',
      features: [
        'Basic AI model deployment',
        'Up to 10,000 API calls/month',
        'Email support',
        'Standard templates',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$3,500',
      period: '/month',
      description: 'Ideal for growing businesses with AI needs',
      features: [
        'Advanced AI capabilities',
        'Up to 100,000 API calls/month',
        'Priority support',
        'Custom model training',
        'Advanced analytics',
        'Integration support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$7,500',
      period: '/month',
      description: 'For large organizations with complex AI requirements',
      features: [
        'Full AI suite access',
        'Unlimited API calls',
        '24/7 dedicated support',
        'Custom AI development',
        'White-label solutions',
        'Dedicated account manager'
      ],
      popular: false
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
              Harness the power of artificial intelligence to transform your business operations, 
              drive innovation, and gain competitive advantage in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2" />
                Start Your AI Journey
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to address specific business challenges and drive measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="text-2xl font-bold text-cyan-400">{service.pricing}</div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-300 flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.applications.map((app, appIndex) => (
                      <span key={appIndex} className="text-xs bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded-full">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <a 
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Learn More
                  </a>
                  <button className="flex-1 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white py-2 px-4 rounded-lg font-medium transition-all duration-300">
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific AI Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Tailored AI solutions designed for specific industries and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((solution, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{solution.industry}</h3>
                </div>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.solutions.map((sol, solIndex) => (
                    <li key={solIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {sol}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible AI Service Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your AI implementation needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${tier.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-400 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started
                </button>
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
            Let's discuss how our AI solutions can help you achieve your business goals and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Your AI Project
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Our AI Experts
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIServicesPage