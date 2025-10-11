'use client'
import React from 'react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { Brain, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, Users, Globe, Code, BarChart, Target, Sparkles, Cpu, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart, Rocket, Clock, Award, Lightbulb, Gauge, Phone } from 'lucide-react'

const HomePage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence that delivers 300% ROI and 70% cost reduction.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Chatbots', 'Process Automation'],
      price: 'Starting at $5,000/month',
      benefits: ['300% ROI Guarantee', '24/7 AI Support', 'Custom AI Models']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and cost-effective cloud solutions that grow with your business.',
      features: ['AWS/Azure/GCP Migration', 'Multi-Cloud Strategy', 'DevOps Implementation', 'Container Orchestration', 'Serverless Architecture', 'Disaster Recovery'],
      price: 'Starting at $2,500/month',
      benefits: ['99.9% Uptime SLA', 'Auto-scaling', '24/7 Monitoring']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with enterprise-grade security solutions and compliance frameworks.',
      features: ['Threat Detection & Response', 'Data Encryption', 'Compliance (SOC2, GDPR)', 'Penetration Testing', 'Security Audits', 'Incident Response'],
      price: 'Starting at $3,000/month',
      benefits: ['Zero Breach Guarantee', '24/7 Security Monitoring', 'Compliance Certification']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Build powerful, scalable applications tailored to your unique business requirements.',
      features: ['Web Applications', 'Mobile Apps (iOS/Android)', 'API Development', 'System Integration', 'Microservices Architecture', 'Legacy Modernization'],
      price: 'Starting at $150/hour',
      benefits: ['Agile Development', 'Code Quality Guarantee', 'Post-launch Support']
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics and business intelligence.',
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Data Warehousing', 'ETL Pipelines', 'Machine Learning Models', 'Custom Reports'],
      price: 'Starting at $4,000/month',
      benefits: ['Real-time Insights', 'Custom Dashboards', 'Data Governance']
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Streamline operations and reduce costs with intelligent automation solutions.',
      features: ['RPA Implementation', 'Workflow Automation', 'API Integration', 'Process Optimization', 'Document Processing', 'Email Automation'],
      price: 'Starting at $2,000/month',
      benefits: ['70% Time Savings', 'Error Reduction', 'Scalable Solutions']
    }
  ]

  const stats = [
    { value: '500+', label: 'Projects Completed', icon: <CheckCircle className="w-8 h-8 text-cyan-400" /> },
    { value: '99.9%', label: 'Uptime Guarantee', icon: <Clock className="w-8 h-8 text-green-400" /> },
    { value: '24/7', label: 'Support Available', icon: <Phone className="w-8 h-8 text-blue-400" /> },
    { value: '50+', label: 'Expert Team Members', icon: <Users className="w-8 h-8 text-purple-400" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Zion Tech Group transformed our entire infrastructure. Their AI solutions increased our efficiency by 300%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, DataFlow Inc',
      content: 'Outstanding service and expertise. They delivered our cloud migration project ahead of schedule.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'VP Engineering, InnovateLab',
      content: 'The cybersecurity solutions they implemented have given us complete peace of mind.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain data-stream">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="block holographic-text bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI & IT Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of cutting-edge artificial intelligence and information technology solutions 
              that drive innovation and accelerate digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="futuristic-btn neon-glow bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="futuristic-btn border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="holographic-card bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-cyan-400 font-semibold text-sm">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <Award className="w-4 h-4 text-yellow-400 mr-2" />
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-cyan-300 text-sm">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about our solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-600 pt-4">
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real businesses. See how we've transformed companies across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-cyan-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">E-commerce Platform</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Transformed a traditional retail business into a digital-first e-commerce platform, 
                resulting in 400% increase in online sales and 60% reduction in operational costs.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">400%</div>
                  <div className="text-gray-300 text-sm">Sales Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">60%</div>
                  <div className="text-gray-300 text-sm">Cost Reduction</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Read Full Case Study
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
              <div className="flex items-center mb-4">
                <Brain className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">AI-Powered Analytics</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Implemented AI-driven analytics for a financial services company, 
                enabling real-time fraud detection and improving customer satisfaction by 85%.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">99.9%</div>
                  <div className="text-gray-300 text-sm">Fraud Detection</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">85%</div>
                  <div className="text-gray-300 text-sm">Satisfaction</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Read Full Case Study
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 500+ companies that have already transformed their operations with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Rocket className="w-5 h-5 mr-2" />
              Start Your Project
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 mr-2" />
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage
