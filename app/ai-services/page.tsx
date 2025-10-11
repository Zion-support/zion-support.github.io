'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, Zap, Target, CheckCircle, ArrowRight, BarChart, MessageSquare, Eye, Cpu, Shield, TrendingUp, Users, Globe, Smartphone, Database, Settings, Mail, Calendar, FileText, ShoppingCart, Rocket, Monitor, Lock, Wifi, Code, Cloud, Heart, Lightbulb, Gauge, Phone, DollarSign, Star, Award, Clock, Sparkles } from 'lucide-react'

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI-Powered Business Intelligence',
      description: 'Transform raw data into actionable insights with advanced AI analytics and predictive modeling.',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Automated Reporting', 'Data Visualization'],
      pricing: 'Starting at $2,500/month',
      category: 'Analytics',
      benefits: ['40% faster decision making', '25% increase in revenue', 'Automated insights', 'Custom dashboards']
    },
    {
      icon: MessageSquare,
      title: 'Intelligent Customer Support',
      description: 'AI-powered chatbots and virtual assistants that provide 24/7 customer support with human-like interactions.',
      features: ['Natural Language Processing', 'Multi-language Support', 'Sentiment Analysis', 'Escalation Management'],
      pricing: 'Starting at $1,200/month',
      category: 'Customer Service',
      benefits: ['80% query resolution', '24/7 availability', '60% cost reduction', 'Improved satisfaction']
    },
    {
      icon: Eye,
      title: 'Computer Vision Solutions',
      description: 'Advanced image and video analysis for quality control, security, and automated visual inspection.',
      features: ['Object Detection', 'Facial Recognition', 'Quality Control', 'Real-time Processing'],
      pricing: 'Starting at $3,000/month',
      category: 'Computer Vision',
      benefits: ['99.5% accuracy', 'Real-time processing', 'Automated quality control', 'Cost savings']
    },
    {
      icon: Cpu,
      title: 'Machine Learning Platform',
      description: 'Custom ML models and algorithms tailored to your specific business requirements and data patterns.',
      features: ['Custom Model Development', 'Data Preprocessing', 'Model Training', 'Performance Optimization'],
      pricing: 'Starting at $5,000/month',
      category: 'Machine Learning',
      benefits: ['Custom solutions', 'High accuracy', 'Scalable models', 'Continuous learning']
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity Suite',
      description: 'Advanced threat detection and prevention using AI to identify and respond to security threats in real-time.',
      features: ['Threat Detection', 'Anomaly Detection', 'Automated Response', 'Compliance Monitoring'],
      pricing: 'Starting at $2,800/month',
      category: 'Security',
      benefits: ['99.9% threat detection', 'Real-time protection', 'Automated response', 'Compliance ready']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics Engine',
      description: 'Forecast future trends and behaviors using advanced statistical models and machine learning algorithms.',
      features: ['Demand Forecasting', 'Risk Assessment', 'Trend Analysis', 'Scenario Planning'],
      pricing: 'Starting at $1,800/month',
      category: 'Analytics',
      benefits: ['Accurate predictions', 'Risk mitigation', 'Strategic planning', 'Competitive advantage']
    },
    {
      icon: Users,
      title: 'AI-Powered HR Solutions',
      description: 'Intelligent human resources management with automated recruitment, performance analysis, and employee engagement.',
      features: ['Resume Screening', 'Performance Analytics', 'Employee Engagement', 'Talent Matching'],
      pricing: 'Starting at $1,500/month',
      category: 'Human Resources',
      benefits: ['50% faster hiring', 'Better candidate matching', 'Reduced bias', 'Improved retention']
    },
    {
      icon: Globe,
      title: 'Natural Language Processing',
      description: 'Advanced text and speech processing for content analysis, translation, and automated communication.',
      features: ['Text Analysis', 'Language Translation', 'Sentiment Analysis', 'Content Generation'],
      pricing: 'Starting at $1,000/month',
      category: 'NLP',
      benefits: ['Multi-language support', 'Automated processing', 'Content insights', 'Cost efficiency']
    },
    {
      icon: Smartphone,
      title: 'AI Mobile Applications',
      description: 'Intelligent mobile apps with AI features like voice recognition, image processing, and personalized experiences.',
      features: ['Voice Recognition', 'Image Processing', 'Personalization', 'Offline Capabilities'],
      pricing: 'Starting at $3,500/month',
      category: 'Mobile AI',
      benefits: ['Enhanced user experience', 'Offline functionality', 'Personalized content', 'Advanced features']
    },
    {
      icon: Database,
      title: 'AI Data Management',
      description: 'Intelligent data processing, cleaning, and organization with automated insights and recommendations.',
      features: ['Data Cleaning', 'Automated Insights', 'Data Quality', 'Smart Organization'],
      pricing: 'Starting at $1,200/month',
      category: 'Data Management',
      benefits: ['Improved data quality', 'Automated processing', 'Better insights', 'Time savings']
    },
    {
      icon: Settings,
      title: 'Process Automation AI',
      description: 'Intelligent automation of business processes with AI-powered decision making and optimization.',
      features: ['Workflow Automation', 'Decision Making', 'Process Optimization', 'Error Prevention'],
      pricing: 'Starting at $2,200/month',
      category: 'Automation',
      benefits: ['70% process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation']
    },
    {
      icon: Mail,
      title: 'AI Email Intelligence',
      description: 'Smart email management with automated responses, priority sorting, and content analysis.',
      features: ['Smart Sorting', 'Auto Responses', 'Content Analysis', 'Priority Detection'],
      pricing: 'Starting at $800/month',
      category: 'Communication',
      benefits: ['50% time savings', 'Better organization', 'Automated responses', 'Improved productivity']
    }
  ]

  const industries = [
    { name: 'Healthcare', icon: Heart, description: 'AI-powered diagnostics, patient care, and medical research' },
    { name: 'Finance', icon: DollarSign, description: 'Fraud detection, risk assessment, and algorithmic trading' },
    { name: 'E-commerce', icon: ShoppingCart, description: 'Personalized recommendations and inventory optimization' },
    { name: 'Manufacturing', icon: Settings, description: 'Quality control, predictive maintenance, and automation' },
    { name: 'Education', icon: Lightbulb, description: 'Personalized learning and intelligent tutoring systems' },
    { name: 'Retail', icon: Globe, description: 'Customer analytics and demand forecasting' }
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
              Harness the power of artificial intelligence to transform your business operations, drive innovation, 
              and gain competitive advantage with our comprehensive AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2" />
                Start AI Journey
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
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
              Comprehensive AI Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Choose from our extensive portfolio of AI services designed to solve complex business challenges.
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
                    <span className="text-sm text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
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
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-white">{service.pricing}</div>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Solutions by Industry
            </h2>
            <p className="text-xl text-gray-300">
              Specialized AI solutions tailored to meet the unique challenges of different industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{industry.name}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Implementation Process
            </h2>
            <p className="text-xl text-gray-300">
              A proven methodology for successful AI implementation and deployment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Discovery</h3>
              <p className="text-gray-300">Analyze your business needs and identify AI opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Strategy</h3>
              <p className="text-gray-300">Develop a comprehensive AI strategy and roadmap</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Development</h3>
              <p className="text-gray-300">Build and train AI models tailored to your requirements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Deployment</h3>
              <p className="text-gray-300">Deploy and monitor AI solutions with ongoing support</p>
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
            Let's discuss how our AI solutions can drive innovation and growth in your organization.
            Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIServicesPage