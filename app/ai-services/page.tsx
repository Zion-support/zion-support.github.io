'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Brain, BarChart, MessageCircle, Shield, Heart, DollarSign, Eye, Mic, Globe, Users, FileText, Workflow, Zap, CheckCircle, ArrowRight, Star, Award, TrendingUp, Cpu, Target, Database, Settings, Calendar, Package, Monitor, Lock, Wifi, Code, Link, Server, Box, MessageSquare, CheckSquare, Mail, Globe as GlobeIcon, Eye as EyeIcon, Mic as MicIcon, Workflow as WorkflowIcon, Zap as ZapIcon, CheckCircle as CheckCircleIcon, ArrowRight as ArrowRightIcon, Star as StarIcon, Award as AwardIcon, TrendingUp as TrendingUpIcon, Cpu as CpuIcon, Target as TargetIcon, Database as DatabaseIcon, Settings as SettingsIcon, Calendar as CalendarIcon, Package as PackageIcon, Monitor as MonitorIcon, Lock as LockIcon, Wifi as WifiIcon, Code as CodeIcon, Link as LinkIcon, Server as ServerIcon, Box as BoxIcon, MessageSquare as MessageSquareIcon, CheckSquare as CheckSquareIcon, Mail as MailIcon } from 'lucide-react'

const AiServicesPage: React.FC = () => {
  const aiServices = [
    {
      icon: BarChart,
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics.',
      features: ['Real-time data processing', 'Predictive modeling', 'Custom dashboards', 'Automated reporting'],
      pricing: 'From $99/month',
      href: '/ai-analytics',
      popular: true
    },
    {
      icon: Zap,
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      features: ['Workflow automation', 'Process optimization', 'Smart scheduling', 'Task management'],
      pricing: 'From $149/month',
      href: '/ai-automation',
      popular: false
    },
    {
      icon: MessageCircle,
      title: 'AI Chatbot Builder',
      description: 'Create intelligent chatbots that provide 24/7 customer support.',
      features: ['Natural language processing', 'Multi-language support', 'Custom training', 'Analytics dashboard'],
      pricing: 'From $79/month',
      href: '/ai-chatbot-builder',
      popular: true
    },
    {
      icon: Users,
      title: 'AI CRM',
      description: 'Enhance your customer relationships with AI-powered CRM solutions.',
      features: ['Lead scoring', 'Sales forecasting', 'Customer insights', 'Automation workflows'],
      pricing: 'From $199/month',
      href: '/ai-crm',
      popular: false
    },
    {
      icon: Shield,
      title: 'AI Cybersecurity',
      description: 'Protect your business with advanced AI-powered security solutions.',
      features: ['Threat detection', 'Anomaly detection', 'Automated response', 'Compliance monitoring'],
      pricing: 'From $299/month',
      href: '/ai-cybersecurity',
      popular: false
    },
    {
      icon: Database,
      title: 'AI Data Analytics',
      description: 'Unlock the power of your data with intelligent analytics and insights.',
      features: ['Data visualization', 'Pattern recognition', 'Trend analysis', 'Custom metrics'],
      pricing: 'From $129/month',
      href: '/ai-data-analytics',
      popular: false
    },
    {
      icon: Heart,
      title: 'AI Healthcare',
      description: 'Revolutionize healthcare with AI-powered diagnostic and treatment solutions.',
      features: ['Medical imaging analysis', 'Diagnostic assistance', 'Treatment recommendations', 'Patient monitoring'],
      pricing: 'From $399/month',
      href: '/ai-healthcare',
      popular: false
    },
    {
      icon: DollarSign,
      title: 'AI Financial Services',
      description: 'Transform financial services with AI-powered fraud detection and risk management.',
      features: ['Fraud detection', 'Risk assessment', 'Algorithmic trading', 'Credit scoring'],
      pricing: 'From $249/month',
      href: '/ai-financial-services',
      popular: false
    },
    {
      icon: Eye,
      title: 'AI Computer Vision',
      description: 'Extract insights from images and videos with advanced computer vision technology.',
      features: ['Image recognition', 'Object detection', 'Video analysis', 'Quality inspection'],
      pricing: 'From $179/month',
      href: '/ai-computer-vision',
      popular: false
    },
    {
      icon: Mic,
      title: 'AI Voice Solutions',
      description: 'Implement voice recognition and speech synthesis in your applications.',
      features: ['Speech-to-text', 'Text-to-speech', 'Voice commands', 'Language translation'],
      pricing: 'From $99/month',
      href: '/ai-voice-solutions',
      popular: false
    },
    {
      icon: Globe,
      title: 'AI E-commerce',
      description: 'Optimize your e-commerce platform with AI-powered personalization and recommendations.',
      features: ['Product recommendations', 'Price optimization', 'Inventory management', 'Customer behavior analysis'],
      pricing: 'From $199/month',
      href: '/ai-ecommerce-solutions',
      popular: false
    },
    {
      icon: Users,
      title: 'AI HR Solutions',
      description: 'Streamline human resources with AI-powered recruitment and employee management.',
      features: ['Resume screening', 'Candidate matching', 'Performance analysis', 'Employee engagement'],
      pricing: 'From $149/month',
      href: '/ai-hr-solutions',
      popular: false
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and processes to focus on strategic initiatives.',
      stat: '40% average efficiency gain'
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through intelligent automation and optimization.',
      stat: '30% average cost savings'
    },
    {
      icon: Target,
      title: 'Better Decision Making',
      description: 'Make data-driven decisions with AI-powered insights and predictions.',
      stat: '85% improvement in accuracy'
    },
    {
      icon: Users,
      title: 'Enhanced Customer Experience',
      description: 'Provide personalized and intelligent customer interactions.',
      stat: '95% customer satisfaction'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and identify AI opportunities.',
      icon: Brain
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'We design a custom AI solution tailored to your requirements.',
      icon: Settings
    },
    {
      step: '03',
      title: 'Development & Training',
      description: 'We develop and train AI models using your data.',
      icon: Code
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy the solution and provide ongoing support.',
      icon: CheckCircle
    }
  ]

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'CTO, MedTech Solutions',
      content: 'Zion\'s AI healthcare solutions have revolutionized our diagnostic capabilities. We\'ve seen a 60% improvement in accuracy.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'CEO, FinTech Innovations',
      content: 'The AI fraud detection system has saved us millions in potential losses. ROI was achieved in just 3 months.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations, RetailMax',
      content: 'Our AI-powered recommendation engine increased sales by 45%. The personalization is incredible.',
      rating: 5,
      avatar: 'ER'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <Award className="w-5 h-5 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-medium">Leading AI Solutions Provider</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">AI Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to natural language processing, we deliver AI that works.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                View Case Studies
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">AI Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-gray-300">Average Efficiency Gain</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">AI Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI services designed to solve real business challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className={`cyber-card group relative ${service.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 -right-3">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Popular
                    </div>
                  </div>
                )}
                
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                    <div className="text-cyan-400 font-bold">{service.pricing}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-2">Key Features:</div>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg font-bold transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose <span className="text-cyan-400">Our AI Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proven results and measurable business impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-cyan-400 font-bold text-sm">{benefit.stat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">AI Implementation Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology for successful AI implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="cyber-card text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted by <span className="text-cyan-400">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI solutions can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Brain className="w-5 h-5 mr-2" />
              Start Your AI Journey
            </button>
            <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AiServicesPage