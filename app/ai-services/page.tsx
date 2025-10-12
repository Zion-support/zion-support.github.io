'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, ArrowRight, Brain, Zap, Shield, Globe, BarChart3, MessageSquare, Users, Code, Eye, FileText, Target, Clock, DollarSign, TrendingUp, Database, Cloud, Smartphone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const AIServicesPage: React.FC = () => {
  const services = [
    {
      id: 'ai-content-generation',
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generation',
      description: 'Advanced AI-powered content creation for blogs, social media, marketing materials, and technical documentation',
      features: [
        'SEO-optimized content generation',
        'Multi-language support (50+ languages)',
        'Brand voice training and customization',
        'Content templates and frameworks',
        'Plagiarism detection and originality scoring',
        'Content scheduling and automation',
        'Team collaboration tools',
        'Analytics and performance tracking'
      ],
      pricing: 'Starting at $29/month',
      marketPrice: '$50-200/month',
      category: 'Content & Marketing',
      popular: true,
      useCases: ['Content Marketing', 'Social Media Management', 'Blog Writing', 'Technical Documentation']
    },
    {
      id: 'ai-chatbot-builder',
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots for customer support, sales, and lead generation with advanced NLP capabilities',
      features: [
        'Drag-and-drop conversation builder',
        'Multi-channel deployment (web, mobile, social)',
        'Natural language understanding (NLU)',
        'Integration with CRM and helpdesk systems',
        'Analytics and conversation insights',
        'A/B testing for conversation flows',
        'Voice and text support',
        'Custom training on your data'
      ],
      pricing: 'Starting at $49/month',
      marketPrice: '$100-500/month',
      category: 'Customer Service',
      popular: true,
      useCases: ['Customer Support', 'Lead Generation', 'Sales Automation', 'FAQ Automation']
    },
    {
      id: 'ai-analytics-dashboard',
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence and analytics platform with AI-powered insights and predictions',
      features: [
        'Real-time data visualization',
        'AI-powered trend analysis',
        'Predictive analytics and forecasting',
        'Custom report generation',
        'Data integration from multiple sources',
        'Automated anomaly detection',
        'Mobile-responsive design',
        'Team collaboration features'
      ],
      pricing: 'Starting at $79/month',
      marketPrice: '$150-800/month',
      category: 'Business Intelligence',
      popular: true,
      useCases: ['Business Intelligence', 'Performance Monitoring', 'Predictive Analytics', 'Data Visualization']
    },
    {
      id: 'ai-3d-generation',
      icon: <Eye className="w-8 h-8 text-orange-500" />,
      title: 'AI 3D Generation',
      description: 'Generate high-quality 3D models, textures, and animations using advanced AI algorithms',
      features: [
        'Text-to-3D model generation',
        'Image-to-3D conversion',
        '3D texture and material generation',
        'Animation and rigging automation',
        'Multiple export formats (OBJ, FBX, GLTF)',
        'Cloud rendering capabilities',
        'Collaborative workspace',
        'API integration for developers'
      ],
      pricing: 'Starting at $99/month',
      marketPrice: '$200-1000/month',
      category: '3D & Graphics',
      popular: false,
      useCases: ['Game Development', 'Architecture Visualization', 'Product Design', 'Marketing Materials']
    },
    {
      id: 'ai-drug-discovery',
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: 'AI Drug Discovery Pro',
      description: 'Advanced AI platform for pharmaceutical research, drug discovery, and molecular analysis',
      features: [
        'Molecular property prediction',
        'Drug-target interaction analysis',
        'Compound optimization algorithms',
        'Clinical trial data analysis',
        'Regulatory compliance tools',
        'Collaborative research platform',
        'Advanced visualization tools',
        'Integration with research databases'
      ],
      pricing: 'Starting at $299/month',
      marketPrice: '$500-2000/month',
      category: 'Healthcare & Research',
      popular: false,
      useCases: ['Pharmaceutical Research', 'Drug Development', 'Molecular Analysis', 'Clinical Research']
    },
    {
      id: 'ai-cybersecurity-suite',
      icon: <Shield className="w-8 h-8 text-cyan-500" />,
      title: 'AI Cybersecurity Suite',
      description: 'Comprehensive AI-powered security platform for threat detection, prevention, and response',
      features: [
        'Real-time threat detection',
        'Behavioral analysis and anomaly detection',
        'Automated incident response',
        'Vulnerability assessment',
        'Security policy management',
        'Compliance monitoring',
        'Threat intelligence integration',
        '24/7 monitoring and alerting'
      ],
      pricing: 'Starting at $149/month',
      marketPrice: '$300-1500/month',
      category: 'Cybersecurity',
      popular: true,
      useCases: ['Threat Detection', 'Incident Response', 'Compliance Management', 'Security Monitoring']
    }
  ]

  const categories = [
    { name: 'All Services', count: services.length },
    { name: 'Content & Marketing', count: services.filter(s => s.category === 'Content & Marketing').length },
    { name: 'Customer Service', count: services.filter(s => s.category === 'Customer Service').length },
    { name: 'Business Intelligence', count: services.filter(s => s.category === 'Business Intelligence').length },
    { name: '3D & Graphics', count: services.filter(s => s.category === '3D & Graphics').length },
    { name: 'Healthcare & Research', count: services.filter(s => s.category === 'Healthcare & Research').length },
    { name: 'Cybersecurity', count: services.filter(s => s.category === 'Cybersecurity').length }
  ]

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: 'Lightning Fast',
      description: 'Get results in seconds, not hours. Our AI processes data at unprecedented speeds.'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-500" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance with industry standards.'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      title: 'Global Scale',
      description: 'Deploy anywhere in the world with our global infrastructure and multi-region support.'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock support from our team of AI experts and technical specialists.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Discover our comprehensive AI services including content generation, chatbots, analytics, 3D generation, drug discovery, and cybersecurity. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI solutions, content generation, chatbots, analytics, 3D generation, drug discovery, cybersecurity" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Services
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              That Transform
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Harness the power of artificial intelligence with our comprehensive suite of AI services. 
            From content generation to drug discovery, we provide cutting-edge solutions for every industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver enterprise-grade AI solutions with unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to meet the unique needs of your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    {service.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
                  </div>
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-4 mb-6">
                  <h4 className="text-lg font-semibold text-white">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Our Price:</span>
                    <span className="text-white font-semibold">{service.pricing}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">Market Price:</span>
                    <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                  </div>
                </div>
                
                <div className="space-y-2 mb-6">
                  <h4 className="text-sm font-semibold text-white">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, useCaseIndex) => (
                      <span key={useCaseIndex} className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <Link 
                    to="/contact" 
                    className="flex-1 bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 text-center"
                  >
                    Get Started
                  </Link>
                  <Link 
                    to={`/ai-services/${service.id}`} 
                    className="flex-1 border border-white text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join thousands of businesses already using our AI solutions to drive growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your AI Journey
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AIServicesPage