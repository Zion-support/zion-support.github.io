'use client';
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { 
  Phone, Mail, MapPin, ArrowRight, Star, CheckCircle, Zap, Shield, Brain, 
  Cloud, Code, BarChart, Users, Target, Globe, Database, Smartphone, 
  Settings, FileText, DollarSign, Rocket, Workflow, BarChart3, MessageCircle, 
  Headphones, Monitor, Heart, Eye, Mic, Bot, Network
} from 'lucide-react';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Real AI Services with actual capabilities and pricing
  const aiServices = [
    {
      icon: Brain,
      title: 'AI-Powered Chatbots',
      description: 'Advanced conversational AI with natural language processing and sentiment analysis',
      price: '$299/month',
      marketPrice: '$500-2000/month',
      features: ['Natural language processing', 'Multi-language support', 'Sentiment analysis', 'CRM integration', 'Real-time learning'],
      benefits: ['Reduce support costs by 60%', '24/7 availability', 'Instant responses', 'Scalable solutions'],
      category: 'Customer Service',
      popular: true,
    },
    {
      icon: FileText2,
      title: 'AI Content Generation Pro',
      description: 'Automated content creation using advanced language models for blogs, social media, and marketing',
      price: '$199/month',
      marketPrice: '$300-1500/month',
      features: ['Blog post generation', 'Social media content', 'Email marketing campaigns', 'SEO optimization', 'Brand voice customization'],
      benefits: ['Save 80% content creation time', 'Consistent brand voice', 'SEO optimization', 'Multi-platform publishing'],
      category: 'Content',
      popular: true,
    },
    {
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Advanced analytics and business intelligence powered by machine learning algorithms',
      price: '$399/month',
      marketPrice: '$800-3000/month',
      features: ['Predictive analytics', 'Real-time dashboards', 'Automated reporting', 'Anomaly detection', 'Custom data models'],
      benefits: ['Data-driven insights', 'Predictive forecasting', 'Automated reporting', 'ROI optimization'],
      category: 'Analytics',
      popular: false,
    },
    {
      icon: Eye2,
      title: 'AI Computer Vision',
      description: 'Image and video analysis solutions for quality control, security, and automation',
      price: '$599/month',
      marketPrice: '$1000-5000/month',
      features: ['Object detection', 'Quality control automation', 'Facial recognition', 'Video analytics', 'Real-time processing'],
      benefits: ['Automated quality control', 'Enhanced security', 'Real-time monitoring', 'Cost reduction'],
      category: 'Computer Vision',
      popular: true,
    },
    {
      icon: ShieldCheck2,
      title: 'AI Fraud Detection',
      description: 'Advanced machine learning algorithms to detect and prevent fraudulent activities in real-time',
      price: '$799/month',
      marketPrice: '$1500-5000/month',
      features: ['Real-time monitoring', 'Behavioral analysis', 'Risk scoring', 'Anomaly detection', 'Automated alerts'],
      benefits: ['Reduce fraud losses by 85%', 'Real-time protection', 'False positive reduction', 'Compliance ready'],
      category: 'Security',
      popular: false,
    },
    {
      icon: Workflow2,
      title: 'AI Workflow Automation',
      description: 'Intelligent process automation that learns and optimizes business workflows for maximum efficiency',
      price: '$349/month',
      marketPrice: '$600-2500/month',
      features: ['Process mining', 'Workflow optimization', 'Task automation', 'Exception handling', 'Performance monitoring'],
      benefits: ['Process efficiency', 'Error reduction', 'Cost savings', 'Scalable automation'],
      category: 'Automation',
      popular: true,
    }
  ];

  // Real IT Services with comprehensive solutions
  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud solutions including AWS, Azure, and GCP with seamless migration services',
      price: '$2,500/month',
      marketPrice: '$4000-15000/month',
      features: ['Cloud architecture design', 'Multi-cloud strategies', 'Cost optimization', 'Disaster recovery', 'Auto-scaling', 'Security compliance'],
      benefits: ['99.9% uptime guarantee', 'Cost reduction up to 40%', 'Scalable infrastructure', 'Expert migration support'],
      category: 'Cloud Computing',
      popular: true,
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance, and incident response',
      price: '$1,800/month',
      marketPrice: '$3000-12000/month',
      features: ['Threat detection & response', 'Vulnerability assessments', 'Penetration testing', 'Security monitoring', 'Compliance management', 'Employee training'],
      benefits: ['24/7 security monitoring', 'Reduced security incidents', 'Compliance assurance', 'Expert security team'],
      category: 'Security',
      popular: true,
    },
    {
      icon: Database2,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management for all major database systems',
      price: '$1,200/month',
      marketPrice: '$2000-8000/month',
      features: ['Database design & optimization', 'Performance tuning', 'Backup & recovery', 'Data migration', 'Security hardening', 'Monitoring & maintenance'],
      benefits: ['Improved performance', 'Data security', 'Automated backups', 'Expert DBA support'],
      category: 'Data Management',
      popular: false,
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Modern development operations with automated deployment, monitoring, and infrastructure as code',
      price: '$2,200/month',
      marketPrice: '$3500-10000/month',
      features: ['CI/CD pipeline setup', 'Infrastructure as code', 'Container orchestration', 'Monitoring & logging', 'Automated testing', 'Deployment automation'],
      benefits: ['Faster deployments', 'Reduced downtime', 'Improved code quality', 'Automated workflows'],
      category: 'DevOps',
      popular: true,
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT consulting and digital transformation services for enterprise organizations',
      price: '$200/hour',
      marketPrice: '$300-800/hour',
      features: ['IT strategy development', 'Technology assessment', 'Digital transformation planning', 'Vendor evaluation', 'Process optimization', 'Change management'],
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology alignment', 'Competitive advantage'],
      category: 'Consulting',
      popular: false,
    },
    {
      icon: Smartphone2,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with optimal user experience',
      price: '$8,000/project',
      marketPrice: '$15000-50000/project',
      features: ['iOS & Android apps', 'Cross-platform development', 'App store optimization', 'Push notifications', 'Offline functionality', 'Performance optimization'],
      benefits: ['Native performance', 'Cross-platform compatibility', 'App store success', 'User engagement'],
      category: 'Mobile Development',
      popular: true,
    }
  ];

  // Real Micro SAAS Services with actual pricing and features
  const microSaasServices = [
    {
      icon: BarChart3,
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights',
      price: '$89/month',
      marketPrice: '$150-500/month',
      features: ['Real-time data visualization', 'AI-powered predictive analytics', 'Custom dashboard builder', 'Advanced data connectors', 'Automated report generation', 'Multi-tenant architecture'],
      benefits: ['Data-driven decision making', 'Real-time insights', 'Custom dashboards', 'Automated reporting'],
      category: 'Analytics',
      popular: true,
      link: 'https://ziontechgroup.com/zion-analytics-pro'
    },
    {
      icon: MessageCircle,
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis',
      price: '$149/month',
      marketPrice: '$300-800/month',
      features: ['GPT-4 Powered AI', 'Multi-channel support', 'Advanced sentiment analysis', 'Automated ticket routing', 'Live agent handoff', 'Multi-language support'],
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved customer satisfaction', 'Lead generation'],
      category: 'Customer Service',
      popular: true,
      link: 'https://ziontechgroup.com/zion-chat-ai'
    },
    {
      icon: Shield,
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: ['Real-time threat monitoring', 'Automated incident response', 'Compliance reporting', 'Security awareness training', 'Vulnerability scanning', '24/7 SOC support'],
      benefits: ['Enhanced security posture', 'Reduced breach risk', 'Compliance automation', 'Expert security team'],
      category: 'Security',
      popular: true,
      link: 'https://ziontechgroup.com/zion-security-shield'
    },
    {
      icon: Cloud,
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection',
      price: '$79/month',
      marketPrice: '$150-400/month',
      features: ['Automated backups', 'Cross-region replication', 'Point-in-time recovery', 'Encryption at rest', 'Compliance ready', 'Unlimited storage'],
      benefits: ['Data protection', 'Business continuity', 'Cost-effective storage', 'Easy recovery'],
      category: 'Data Protection',
      popular: false,
      link: 'https://ziontechgroup.com/zion-cloud-vault'
    },
    {
      icon: FileText2,
      title: 'Zion Content Studio',
      description: 'AI-powered content creation and management platform for marketing teams',
      price: '$129/month',
      marketPrice: '$200-600/month',
      features: ['AI content generation', 'Brand voice consistency', 'Multi-platform publishing', 'SEO optimization', 'Content calendar', 'Team collaboration'],
      benefits: ['10x content production', 'Consistent brand voice', 'SEO optimization', 'Team efficiency'],
      category: 'Content Marketing',
      popular: true,
      link: 'https://ziontechgroup.com/zion-content-studio'
    },
    {
      icon: Users,
      title: 'Zion CRM Intelligence',
      description: 'AI-enhanced customer relationship management with predictive analytics and automation',
      price: '$179/month',
      marketPrice: '$300-800/month',
      features: ['AI lead scoring', 'Predictive analytics', 'Automated follow-ups', 'Sales forecasting', 'Customer insights', 'Integration ecosystem'],
      benefits: ['Higher conversion rates', 'Better customer insights', 'Automated workflows', 'Sales optimization'],
      category: 'CRM',
      popular: true,
      link: 'https://ziontechgroup.com/zion-crm-intelligence'
    }
  ];

  // Company statistics
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Rocket2 },
    { number: '99.9%', label: 'Uptime Guarantee', icon: ShieldCheck2 },
    { number: '50+', label: 'Micro SAAS Products', icon: CpuChip },
    { number: '24/7', label: 'Support Available', icon: Headphones },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Navigation />
      
      <main className="flex-1 lg:ml-80">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text-enhanced">
                Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Leading the future with AI-powered solutions, cutting-edge IT services, and innovative Micro SAAS platforms
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 futuristic-btn glow"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2 inline" />
                  (302) 464-0950
                </a>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center cyber-card-enhanced p-6">
                    <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-white neon-text-enhanced">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
                AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business with our cutting-edge AI solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="cyber-card-enhanced holographic-card-enhanced p-6 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-cyan-400 font-semibold">{service.price}</span>
                        {service.marketPrice && (
                          <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                        )}
                        {service.popular && (
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Popular</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href="/contact"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
                IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete technology infrastructure solutions to power your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="cyber-card-enhanced holographic-card-enhanced p-6 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-purple-400 font-semibold">{service.price}</span>
                        {service.marketPrice && (
                          <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                        )}
                        {service.popular && (
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Popular</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href="/contact"
                      className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href="/contact"
                      className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
                Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use business tools with AI and automation to streamline your operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="cyber-card-enhanced holographic-card-enhanced p-6 group hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-green-400 font-semibold">{service.price}</span>
                        {service.marketPrice && (
                          <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                        )}
                        {service.popular && (
                          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">Popular</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-green-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={service.link || "/contact"}
                      className="flex items-center text-green-400 hover:text-green-300 transition-colors"
                      target={service.link ? "_blank" : "_self"}
                      rel={service.link ? "noopener noreferrer" : undefined}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a
                      href={service.link || "/contact"}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                      target={service.link ? "_blank" : "_self"}
                      rel={service.link ? "noopener noreferrer" : undefined}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text-enhanced">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Contact our experts for a free consultation and discover how our solutions can accelerate your success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center cyber-card-enhanced p-6">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">Speak directly with our experts</p>
                <a
                  href="tel:+13024640950"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                >
                  (302) 464-0950
                </a>
              </div>
              
              <div className="text-center cyber-card-enhanced p-6">
                <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">Get detailed information via email</p>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center cyber-card-enhanced p-6">
                <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-4">Our headquarters location</p>
                <p className="text-cyan-400 font-semibold">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 futuristic-btn glow"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
