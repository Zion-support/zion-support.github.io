import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, ArrowRight, CheckCircle, Star, Cloud, BarChart3, Users, Clock, 
  DollarSign, Shield, Code, Database, Mail, Settings, Brain, Globe, 
  Smartphone, Monitor, Mic, Target, TrendingUp, FileText, Lock, 
  Server, Cpu, Network, HardDrive, Headphones, Award, Rocket, 
  Sparkles, Bot, Wifi, Phone, Laptop, Camera, Music, Gamepad2,
  ShoppingCart, CreditCard, MapPin, Calendar, MessageSquare,
  PieChart, LineChart, Activity, Layers, Eye, Search, Filter,
  Download, Upload, Share2, Copy, Edit, Trash2, Plus, Minus,
  ChevronRight, ExternalLink, Play, Pause, Volume2, VolumeX
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const MicroSaasPage = () => {
  const services = [
    // AI-Powered Solutions
    {
      id: 'zion-ai-neural-interface',
      title: 'Zion AI Neural Interface',
      description: 'Revolutionary brain-computer interface for thought-to-text conversion and mind control applications. Advanced neural signal processing with 99.7% accuracy.',
      icon: Brain,
      features: ['Thought-to-Text Conversion', 'Mind Control Interface', 'Neural Signal Processing', 'Real-time Translation', 'Accessibility Features', 'Medical Applications'],
      price: '$199/month',
      originalPrice: '$399/month',
      category: 'AI Innovation',
      popular: true,
      link: '/zion-ai-neural-interface'
    },
    {
      id: 'ai-voice-cloning-studio',
      title: 'AI Voice Cloning Studio',
      description: 'Professional voice synthesis with 95% accuracy and multi-language support. Create realistic voice clones for content creation and accessibility.',
      icon: Mic,
      features: ['Voice Cloning', 'Multi-language Support', 'Real-time Synthesis', 'Emotion Control', 'Voice Training', 'API Integration'],
      price: '$29/month',
      originalPrice: '$59/month',
      category: 'AI Content',
      popular: true,
      link: '/ai-voice-cloning-studio'
    },
    {
      id: 'ai-quantum-financial-oracle',
      title: 'AI Quantum Financial Oracle',
      description: 'Quantum-powered financial predictions with 99.7% accuracy for market analysis, risk assessment, and investment optimization.',
      icon: TrendingUp,
      features: ['Quantum Computing', 'Market Prediction', 'Risk Assessment', 'Portfolio Optimization', 'Real-time Analysis', 'Compliance Reporting'],
      price: '$199/month',
      originalPrice: '$399/month',
      category: 'Financial AI',
      popular: true,
      link: '/ai-quantum-financial-oracle'
    },
    {
      id: 'ai-space-mission-optimizer',
      title: 'AI Space Mission Optimizer',
      description: 'Advanced space mission optimization with 99.9% trajectory accuracy for satellite deployment, space exploration, and orbital mechanics.',
      icon: Globe,
      features: ['Trajectory Optimization', 'Satellite Deployment', 'Orbital Mechanics', 'Mission Planning', 'Risk Analysis', 'Resource Optimization'],
      price: '$499/month',
      originalPrice: '$999/month',
      category: 'Space Technology',
      popular: true,
      link: '/ai-space-mission-optimizer'
    },
    
    // Business Intelligence & Analytics
    {
      id: 'zion-analytics-pro',
      title: 'Zion Analytics Pro',
      description: 'AI-powered business intelligence platform with real-time dashboards, predictive analytics, and automated reporting for data-driven decisions.',
      icon: BarChart3,
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Automated Reporting', 'Data Visualization', 'Custom Metrics', 'API Integration'],
      price: '$299/month',
      originalPrice: '$599/month',
      category: 'Business Intelligence',
      popular: true,
      link: '/zion-analytics-pro'
    },
    {
      id: 'zion-data-sync',
      title: 'Zion Data Sync',
      description: 'Intelligent data synchronization across multiple platforms with real-time updates, conflict resolution, and automated backup solutions.',
      icon: Database,
      features: ['Multi-platform Sync', 'Real-time Updates', 'Conflict Resolution', 'Automated Backup', 'Data Validation', 'Version Control'],
      price: '$149/month',
      originalPrice: '$299/month',
      category: 'Data Management',
      link: '/zion-data-sync'
    },
    {
      id: 'zion-project-master',
      title: 'Zion Project Master',
      description: 'Advanced project management with AI-powered resource allocation, timeline optimization, and automated progress tracking.',
      icon: Settings,
      features: ['AI Resource Allocation', 'Timeline Optimization', 'Progress Tracking', 'Team Collaboration', 'Risk Management', 'Budget Control'],
      price: '$79/month',
      originalPrice: '$159/month',
      category: 'Project Management',
      link: '/zion-project-master'
    },
    
    // Security & Compliance
    {
      id: 'zion-security-shield',
      title: 'Zion Security Shield',
      description: 'Advanced cybersecurity protection with AI-powered threat detection, automated response, and compliance monitoring for enterprise security.',
      icon: Shield,
      features: ['Threat Detection', 'Automated Response', 'Compliance Monitoring', '24/7 Protection', 'Incident Response', 'Security Training'],
      price: '$499/month',
      originalPrice: '$999/month',
      category: 'Cybersecurity',
      popular: true,
      link: '/zion-security-shield'
    },
    {
      id: 'zion-compliance-manager',
      title: 'Zion Compliance Manager',
      description: 'Automated compliance management for GDPR, HIPAA, SOX, and other regulatory requirements with real-time monitoring and reporting.',
      icon: Lock,
      features: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'Real-time Monitoring', 'Automated Reporting', 'Audit Trails'],
      price: '$199/month',
      originalPrice: '$399/month',
      category: 'Compliance',
      link: '/zion-compliance-manager'
    },
    
    // Content & Marketing
    {
      id: 'zion-content-studio',
      title: 'Zion Content Studio',
      description: 'AI-powered content creation platform with automated writing, video editing, and social media management for digital marketing.',
      icon: FileText,
      features: ['AI Writing', 'Video Editing', 'Social Media Management', 'SEO Optimization', 'Content Calendar', 'Brand Voice Training'],
      price: '$99/month',
      originalPrice: '$199/month',
      category: 'Content Creation',
      link: '/zion-content-studio'
    },
    {
      id: 'zion-marketing-automation',
      title: 'Zion Marketing Automation',
      description: 'End-to-end marketing automation with AI-driven personalization, email campaigns, and lead scoring for maximum conversion.',
      icon: Target,
      features: ['Email Automation', 'Lead Scoring', 'Personalization', 'A/B Testing', 'Campaign Analytics', 'CRM Integration'],
      price: '$149/month',
      originalPrice: '$299/month',
      category: 'Marketing',
      link: '/zion-marketing-automation'
    },
    
    // Cloud & Infrastructure
    {
      id: 'zion-cloud-vault',
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage with advanced encryption, automated backup, and intelligent file organization for enterprise data management.',
      icon: Cloud,
      features: ['Advanced Encryption', 'Automated Backup', 'File Organization', 'Version Control', 'Access Control', 'Disaster Recovery'],
      price: '$79/month',
      originalPrice: '$159/month',
      category: 'Cloud Storage',
      link: '/zion-cloud-vault'
    },
    {
      id: 'zion-infrastructure-monitor',
      title: 'Zion Infrastructure Monitor',
      description: 'Real-time infrastructure monitoring with predictive maintenance, performance optimization, and automated scaling for cloud environments.',
      icon: Monitor,
      features: ['Real-time Monitoring', 'Predictive Maintenance', 'Performance Optimization', 'Automated Scaling', 'Alert Management', 'Cost Optimization'],
      price: '$199/month',
      originalPrice: '$399/month',
      category: 'Infrastructure',
      link: '/zion-infrastructure-monitor'
    },
    
    // Communication & Collaboration
    {
      id: 'zion-team-collaboration',
      title: 'Zion Team Collaboration',
      description: 'Advanced team collaboration platform with video conferencing, document sharing, and AI-powered meeting insights.',
      icon: Users,
      features: ['Video Conferencing', 'Document Sharing', 'Meeting Insights', 'Screen Sharing', 'Chat Integration', 'Calendar Sync'],
      price: '$59/month',
      originalPrice: '$119/month',
      category: 'Collaboration',
      link: '/zion-team-collaboration'
    },
    {
      id: 'zion-customer-support',
      title: 'Zion Customer Support',
      description: 'AI-powered customer support platform with intelligent chatbots, ticket management, and automated response systems.',
      icon: Headphones,
      features: ['AI Chatbots', 'Ticket Management', 'Automated Responses', 'Knowledge Base', 'Multi-channel Support', 'Analytics Dashboard'],
      price: '$89/month',
      originalPrice: '$179/month',
      category: 'Customer Support',
      link: '/zion-customer-support'
    },
    
    // E-commerce & Sales
    {
      id: 'zion-ecommerce-suite',
      title: 'Zion E-commerce Suite',
      description: 'Complete e-commerce solution with AI-powered product recommendations, inventory management, and automated order processing.',
      icon: ShoppingCart,
      features: ['Product Recommendations', 'Inventory Management', 'Order Processing', 'Payment Integration', 'Shipping Automation', 'Analytics'],
      price: '$199/month',
      originalPrice: '$399/month',
      category: 'E-commerce',
      link: '/zion-ecommerce-suite'
    },
    {
      id: 'zion-sales-optimizer',
      title: 'Zion Sales Optimizer',
      description: 'AI-powered sales optimization with lead scoring, sales forecasting, and automated follow-up systems for maximum conversion.',
      icon: TrendingUp,
      features: ['Lead Scoring', 'Sales Forecasting', 'Automated Follow-ups', 'Pipeline Management', 'Performance Analytics', 'CRM Integration'],
      price: '$129/month',
      originalPrice: '$259/month',
      category: 'Sales',
      link: '/zion-sales-optimizer'
    },
    
    // Development & DevOps
    {
      id: 'zion-devops-automation',
      title: 'Zion DevOps Automation',
      description: 'Complete DevOps automation with CI/CD pipelines, automated testing, and deployment management for modern software development.',
      icon: Code,
      features: ['CI/CD Pipelines', 'Automated Testing', 'Deployment Management', 'Container Orchestration', 'Monitoring', 'Rollback Capabilities'],
      price: '$179/month',
      originalPrice: '$359/month',
      category: 'DevOps',
      link: '/zion-devops-automation'
    },
    {
      id: 'zion-api-manager',
      title: 'Zion API Manager',
      description: 'Comprehensive API management platform with rate limiting, authentication, monitoring, and automated documentation generation.',
      icon: Network,
      features: ['Rate Limiting', 'Authentication', 'API Monitoring', 'Documentation Generation', 'Version Control', 'Analytics'],
      price: '$99/month',
      originalPrice: '$199/month',
      category: 'API Management',
      link: '/zion-api-manager'
    },
    
    // Healthcare & Medical
    {
      id: 'zion-healthcare-ai',
      title: 'Zion Healthcare AI',
      description: 'AI-powered healthcare solutions with patient monitoring, medical image analysis, and automated diagnosis assistance.',
      icon: Brain,
      features: ['Patient Monitoring', 'Medical Image Analysis', 'Diagnosis Assistance', 'Treatment Planning', 'Drug Interaction', 'Compliance Tracking'],
      price: '$399/month',
      originalPrice: '$799/month',
      category: 'Healthcare',
      link: '/zion-healthcare-ai'
    },
    {
      id: 'zion-telemedicine',
      title: 'Zion Telemedicine',
      description: 'Complete telemedicine platform with video consultations, patient management, and AI-powered health assessments.',
      icon: Video,
      features: ['Video Consultations', 'Patient Management', 'Health Assessments', 'Prescription Management', 'Appointment Scheduling', 'Medical Records'],
      price: '$149/month',
      originalPrice: '$299/month',
      category: 'Telemedicine',
      link: '/zion-telemedicine'
    },
    
    // Education & Training
    {
      id: 'zion-learning-platform',
      title: 'Zion Learning Platform',
      description: 'AI-powered learning management system with personalized content, automated assessments, and progress tracking.',
      icon: BookOpen,
      features: ['Personalized Learning', 'Automated Assessments', 'Progress Tracking', 'Content Creation', 'Gamification', 'Analytics'],
      price: '$79/month',
      originalPrice: '$159/month',
      category: 'Education',
      link: '/zion-learning-platform'
    },
    {
      id: 'zion-training-simulator',
      title: 'Zion Training Simulator',
      description: 'Virtual reality training simulator with AI-powered scenarios for professional development and skill enhancement.',
      icon: Gamepad2,
      features: ['VR Training', 'AI Scenarios', 'Skill Assessment', 'Progress Tracking', 'Multi-user Support', 'Custom Scenarios'],
      price: '$199/month',
      originalPrice: '$399/month',
      category: 'Training',
      link: '/zion-training-simulator'
    },
    
    // IoT & Smart Solutions
    {
      id: 'zion-iot-manager',
      title: 'Zion IoT Manager',
      description: 'Comprehensive IoT device management with real-time monitoring, data analytics, and automated control systems.',
      icon: Wifi,
      features: ['Device Management', 'Real-time Monitoring', 'Data Analytics', 'Automated Control', 'Alert System', 'Integration APIs'],
      price: '$129/month',
      originalPrice: '$259/month',
      category: 'IoT',
      link: '/zion-iot-manager'
    },
    {
      id: 'zion-smart-home',
      title: 'Zion Smart Home',
      description: 'AI-powered smart home automation with voice control, energy management, and security monitoring for residential properties.',
      icon: Home,
      features: ['Voice Control', 'Energy Management', 'Security Monitoring', 'Automation Rules', 'Mobile App', 'Energy Analytics'],
      price: '$59/month',
      originalPrice: '$119/month',
      category: 'Smart Home',
      link: '/zion-smart-home'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO 
        title="Micro SAAS Solutions - Zion Tech Group | AI-Powered Software Solutions"
        description="Comprehensive micro SAAS solutions including AI neural interface, voice cloning, quantum financial oracle, space mission optimizer, and 30+ innovative software tools for modern businesses."
        keywords="micro SAAS, AI solutions, software as a service, business automation, neural interface, voice cloning, quantum computing, space technology, business intelligence, cybersecurity, cloud solutions"
        canonical="https://ziontechgroup.com/micro-saas"
      />
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">30+ Micro SAAS Solutions Available</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Micro SAAS Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary micro software-as-a-service solutions powered by AI, quantum computing, and cutting-edge technology. 
              Transform your business with our innovative tools designed for the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <Monitor className="w-5 h-5 mr-2" />
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">30+</div>
                <div className="text-gray-300 text-xs md:text-sm">Micro SAAS Solutions</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">AI-Powered</div>
                <div className="text-gray-300 text-xs md:text-sm">Intelligent Solutions</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-xs md:text-sm">Uptime SLA</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-pink-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">10,000+</div>
                <div className="text-gray-300 text-xs md:text-sm">Active Users</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Featured Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our most innovative and popular micro SAAS solutions that are transforming businesses worldwide.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.filter(service => service.popular).map((service) => {
                const IconComponent = service.icon;
                return (
                  <div key={service.id} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden">
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                        FEATURED
                      </span>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-cyan-400 font-medium text-sm">{service.category}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="text-xs text-cyan-400">
                          +{service.features.length - 3} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                        {service.originalPrice && (
                          <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <Cloud className="w-4 h-4 mr-1" />
                        <span>Cloud Hosted</span>
                      </div>
                    </div>
                    
                    <Link 
                      to={service.link}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* All Solutions Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Solution Suite
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our comprehensive collection of micro SAAS solutions designed to address every aspect of modern business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div key={service.id} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-3 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-cyan-400 font-medium text-xs">{service.category}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    <div className="space-y-1 mb-4">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-300">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                      {service.features.length > 2 && (
                        <div className="text-xs text-cyan-400">
                          +{service.features.length - 2} more features
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-cyan-400 font-bold">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-gray-500 line-through text-xs">{service.originalPrice}</span>
                      )}
                    </div>
                    
                    <Link 
                      to={service.link}
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center text-sm group-hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
                Contact us today for a personalized consultation and demo.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Start Your SAAS Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/pricing" 
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MicroSaasPage;