'use client'
import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Server, Shield, Cloud, Code, CheckCircle, ArrowRight, Star, DollarSign, Clock, Users, Globe, Database, Smartphone, Monitor, Lock, TrendingUp, Settings, Calendar, Mail, Phone, MapPin, Award, Lightbulb, Cpu, Database as DbIcon, Wifi, MessageSquare, Rocket, Clock as ClockIcon, Heart, Box, Package, Mic, Workflow, Gauge, Zap, Target, BarChart, Eye, FileText, Image, Video, Music, ShoppingCart, CreditCard, Brain, MessageCircle, Mail as MailIcon, Wifi as WifiIcon, Settings as SettingsIcon, Shield as ShieldIcon, Cloud as CloudIcon, Server as ServerIcon, Code as CodeIcon, Database as DatabaseIcon, Smartphone as SmartphoneIcon, Monitor as MonitorIcon, Lock as LockIcon, TrendingUp as TrendingUpIcon, Settings as SettingsIcon2, Calendar as CalendarIcon, Mail as MailIcon2, Phone as PhoneIcon, MapPin as MapPinIcon, Award as AwardIcon, Lightbulb as LightbulbIcon, Cpu as CpuIcon, Database as DatabaseIcon2, Wifi as WifiIcon2, MessageSquare as MessageSquareIcon, Rocket as RocketIcon, Clock as ClockIcon2, Heart as HeartIcon, Box as BoxIcon, Package as PackageIcon, Mic as MicIcon, Workflow as WorkflowIcon, Gauge as GaugeIcon, Zap as ZapIcon, Target as TargetIcon, BarChart as BarChartIcon, Eye as EyeIcon, FileText as FileTextIcon, Image as ImageIcon, Video as VideoIcon, Music as MusicIcon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, Brain as BrainIcon, MessageCircle as MessageCircleIcon } from 'lucide-react'

const ITServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All IT Services', icon: Server },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud Solutions', icon: Cloud },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'support', name: 'Support', icon: Settings },
    { id: 'consulting', name: 'Consulting', icon: Lightbulb },
    { id: 'migration', name: 'Migration', icon: ArrowRight }
  ]

  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Management',
      category: 'infrastructure',
      description: 'Comprehensive cloud infrastructure solutions with multi-cloud support and automated scaling.',
      features: ['Multi-cloud Management', 'Auto-scaling', 'Load Balancing', 'Disaster Recovery', 'Cost Optimization', '24/7 Monitoring'],
      pricing: { starter: 299, professional: 699, enterprise: 1499 },
      icon: Cloud,
      popular: true,
      useCases: ['Cloud Migration', 'Infrastructure Scaling', 'Disaster Recovery', 'Cost Optimization'],
      benefits: ['Reduced infrastructure costs', 'Improved scalability', 'Enhanced reliability', 'Automated management']
    },
    {
      id: 'cybersecurity-solutions',
      name: 'Advanced Cybersecurity Suite',
      category: 'security',
      description: 'Comprehensive security solutions with threat detection, incident response, and compliance management.',
      features: ['Threat Detection', 'Incident Response', 'Compliance Management', 'Security Audits', 'Penetration Testing', 'Security Training'],
      pricing: { starter: 399, professional: 899, enterprise: 1999 },
      icon: Shield,
      popular: true,
      useCases: ['Security Audits', 'Threat Protection', 'Compliance', 'Incident Response'],
      benefits: ['Enhanced security posture', 'Compliance assurance', 'Reduced risk', '24/7 protection']
    },
    {
      id: 'web-development',
      name: 'Custom Web Development',
      category: 'development',
      description: 'Modern web applications built with cutting-edge technologies and best practices.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization', 'Security Implementation', 'API Integration', 'Maintenance'],
      pricing: { starter: 199, professional: 499, enterprise: 1299 },
      icon: Code,
      popular: false,
      useCases: ['Business Websites', 'E-commerce Platforms', 'Web Applications', 'Portals'],
      benefits: ['Modern design', 'Fast performance', 'SEO optimized', 'Mobile responsive']
    },
    {
      id: 'mobile-development',
      name: 'Mobile App Development',
      category: 'development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX.',
      features: ['Native Development', 'Cross-platform', 'UI/UX Design', 'App Store Optimization', 'Push Notifications', 'Analytics Integration'],
      pricing: { starter: 299, professional: 699, enterprise: 1599 },
      icon: Smartphone,
      popular: false,
      useCases: ['Business Apps', 'E-commerce Apps', 'Productivity Apps', 'Social Apps'],
      benefits: ['Native performance', 'Cross-platform reach', 'Modern UI/UX', 'App store optimization']
    },
    {
      id: 'network-management',
      name: 'Network Infrastructure Management',
      category: 'infrastructure',
      description: 'Complete network design, implementation, and management with monitoring and optimization.',
      features: ['Network Design', 'Implementation', 'Monitoring', 'Optimization', 'Troubleshooting', 'Security'],
      pricing: { starter: 199, professional: 499, enterprise: 999 },
      icon: Wifi,
      popular: false,
      useCases: ['Network Setup', 'Performance Optimization', 'Security Implementation', 'Troubleshooting'],
      benefits: ['Reliable connectivity', 'Optimized performance', 'Enhanced security', 'Reduced downtime']
    },
    {
      id: 'data-management',
      name: 'Data Management Solutions',
      category: 'infrastructure',
      description: 'Comprehensive data management with backup, recovery, and analytics capabilities.',
      features: ['Data Backup', 'Recovery Solutions', 'Data Analytics', 'Database Management', 'Data Migration', 'Compliance'],
      pricing: { starter: 249, professional: 599, enterprise: 1299 },
      icon: Database,
      popular: false,
      useCases: ['Data Backup', 'Database Management', 'Data Analytics', 'Compliance'],
      benefits: ['Data protection', 'Improved insights', 'Compliance assurance', 'Reduced risk']
    },
    {
      id: 'it-consulting',
      name: 'IT Strategy Consulting',
      category: 'consulting',
      description: 'Strategic IT consulting to align technology with business goals and optimize operations.',
      features: ['IT Strategy', 'Technology Assessment', 'Digital Transformation', 'Process Optimization', 'Vendor Management', 'ROI Analysis'],
      pricing: { starter: 149, professional: 349, enterprise: 799 },
      icon: Lightbulb,
      popular: true,
      useCases: ['Digital Transformation', 'Technology Assessment', 'Process Optimization', 'Vendor Selection'],
      benefits: ['Strategic alignment', 'Cost optimization', 'Improved efficiency', 'Competitive advantage']
    },
    {
      id: 'system-integration',
      name: 'System Integration Services',
      category: 'development',
      description: 'Seamless integration of disparate systems and applications for unified operations.',
      features: ['API Integration', 'Legacy System Integration', 'Data Synchronization', 'Workflow Automation', 'Testing', 'Documentation'],
      pricing: { starter: 299, professional: 699, enterprise: 1499 },
      icon: Settings,
      popular: false,
      useCases: ['Legacy Integration', 'API Development', 'Workflow Automation', 'Data Synchronization'],
      benefits: ['Unified operations', 'Improved efficiency', 'Reduced manual work', 'Better data flow']
    },
    {
      id: 'it-support',
      name: '24/7 IT Support Services',
      category: 'support',
      description: 'Comprehensive IT support with helpdesk, remote assistance, and proactive monitoring.',
      features: ['24/7 Helpdesk', 'Remote Support', 'Proactive Monitoring', 'Issue Resolution', 'User Training', 'Documentation'],
      pricing: { starter: 199, professional: 449, enterprise: 899 },
      icon: Settings,
      popular: true,
      useCases: ['Technical Support', 'Issue Resolution', 'User Training', 'System Maintenance'],
      benefits: ['Reduced downtime', 'Faster resolution', 'Proactive maintenance', 'User satisfaction']
    },
    {
      id: 'disaster-recovery',
      name: 'Disaster Recovery Solutions',
      category: 'infrastructure',
      description: 'Comprehensive disaster recovery planning and implementation with automated failover.',
      features: ['Recovery Planning', 'Automated Failover', 'Data Replication', 'Testing', 'Documentation', 'Training'],
      pricing: { starter: 349, professional: 799, enterprise: 1799 },
      icon: Shield,
      popular: false,
      useCases: ['Business Continuity', 'Data Protection', 'System Recovery', 'Compliance'],
      benefits: ['Business continuity', 'Data protection', 'Reduced risk', 'Compliance assurance']
    },
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      category: 'migration',
      description: 'Seamless migration to cloud platforms with minimal downtime and optimized performance.',
      features: ['Migration Planning', 'Data Migration', 'Application Migration', 'Testing', 'Optimization', 'Training'],
      pricing: { starter: 499, professional: 1199, enterprise: 2499 },
      icon: Cloud,
      popular: false,
      useCases: ['Cloud Migration', 'Application Modernization', 'Infrastructure Optimization', 'Cost Reduction'],
      benefits: ['Reduced costs', 'Improved scalability', 'Enhanced performance', 'Modern infrastructure']
    },
    {
      id: 'security-audit',
      name: 'Security Audit & Assessment',
      category: 'security',
      description: 'Comprehensive security audits and assessments with detailed reports and recommendations.',
      features: ['Security Assessment', 'Vulnerability Scanning', 'Penetration Testing', 'Compliance Audit', 'Report Generation', 'Remediation Planning'],
      pricing: { starter: 299, professional: 699, enterprise: 1499 },
      icon: Shield,
      popular: false,
      useCases: ['Security Assessment', 'Compliance Audit', 'Vulnerability Assessment', 'Risk Management'],
      benefits: ['Security insights', 'Compliance assurance', 'Risk identification', 'Improved security']
    },
    {
      id: 'api-development',
      name: 'API Development & Management',
      category: 'development',
      description: 'Custom API development with documentation, testing, and management capabilities.',
      features: ['API Design', 'Development', 'Documentation', 'Testing', 'Management', 'Monitoring'],
      pricing: { starter: 199, professional: 499, enterprise: 999 },
      icon: Code,
      popular: false,
      useCases: ['System Integration', 'Third-party Integration', 'Data Exchange', 'Service Architecture'],
      benefits: ['Seamless integration', 'Improved efficiency', 'Better data flow', 'Scalable architecture']
    },
    {
      id: 'performance-optimization',
      name: 'Performance Optimization',
      category: 'infrastructure',
      description: 'System and application performance optimization with monitoring and tuning.',
      features: ['Performance Analysis', 'Optimization', 'Monitoring', 'Tuning', 'Load Testing', 'Reporting'],
      pricing: { starter: 249, professional: 599, enterprise: 1299 },
      icon: TrendingUp,
      popular: false,
      useCases: ['Performance Tuning', 'Load Optimization', 'System Monitoring', 'Capacity Planning'],
      benefits: ['Improved performance', 'Better user experience', 'Reduced costs', 'Optimized resources']
    },
    {
      id: 'compliance-management',
      name: 'Compliance Management',
      category: 'security',
      description: 'Comprehensive compliance management for various regulations and standards.',
      features: ['Compliance Assessment', 'Policy Development', 'Training', 'Monitoring', 'Reporting', 'Audit Support'],
      pricing: { starter: 199, professional: 499, enterprise: 999 },
      icon: Shield,
      popular: false,
      useCases: ['Regulatory Compliance', 'Policy Development', 'Audit Support', 'Risk Management'],
      benefits: ['Compliance assurance', 'Reduced risk', 'Audit readiness', 'Policy alignment']
    },
    {
      id: 'digital-transformation',
      name: 'Digital Transformation',
      category: 'consulting',
      description: 'End-to-end digital transformation services to modernize business operations.',
      features: ['Strategy Development', 'Process Redesign', 'Technology Implementation', 'Change Management', 'Training', 'Support'],
      pricing: { starter: 999, professional: 2499, enterprise: 4999 },
      icon: Rocket,
      popular: true,
      useCases: ['Process Modernization', 'Technology Adoption', 'Digital Strategy', 'Change Management'],
      benefits: ['Modern operations', 'Improved efficiency', 'Competitive advantage', 'Future readiness']
    }
  ]

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory)

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  }

  const stats = [
    { value: '1000+', label: 'Projects Completed', icon: <CheckCircle className="w-8 h-8 text-cyan-400" /> },
    { value: '99.9%', label: 'Uptime Guarantee', icon: <Clock className="w-8 h-8 text-green-400" /> },
    { value: '24/7', label: 'Support Available', icon: <Phone className="w-8 h-8 text-blue-400" /> },
    { value: '50+', label: 'IT Experts', icon: <Users className="w-8 h-8 text-purple-400" /> }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions to keep your business running smoothly, securely, and efficiently. 
              From infrastructure management to cybersecurity, we provide end-to-end IT services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get IT Support
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5 mr-2" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.name}</h3>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-cyan-400 text-sm">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, index) => (
                      <span key={index} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Pricing:</h4>
                  <div className="flex justify-between text-sm">
                    <div className="text-gray-300">
                      <span className="text-green-400">Starter:</span> ${service.pricing.starter}/mo
                    </div>
                    <div className="text-gray-300">
                      <span className="text-blue-400">Pro:</span> ${service.pricing.pro}/mo
                    </div>
                    <div className="text-gray-300">
                      <span className="text-purple-400">Enterprise:</span> ${service.pricing.enterprise}/mo
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm">
                    Get Quote
                  </button>
                  <button className="flex-1 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible IT Service Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the plan that fits your IT needs. All plans include implementation support and training.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$199<span className="text-lg text-gray-300">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 3 IT services
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard documentation
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-cyan-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$499<span className="text-lg text-gray-300">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 10 IT services
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Training included
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300">
                Get Started
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$999<span className="text-lg text-gray-300">/mo</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited IT services
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-label solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom development
                </li>
              </ul>
              <button className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white py-3 px-6 rounded-lg font-medium transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with our IT experts to discuss your requirements and start your digital transformation journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">{contactInfo.phone}</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-300">{contactInfo.email}</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Address</h3>
              <p className="text-gray-300 text-center">{contactInfo.address}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get IT Support
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ITServicesPage