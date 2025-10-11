'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Server, Shield, Cloud, Code, CheckCircle, ArrowRight, DollarSign, TrendingUp, Clock, BarChart, Smartphone, Globe, Database, Settings, Rocket, Star, Award, Cpu, Lock, MessageSquare, FileText, Calendar, Workflow, Eye, Wifi, Package, Mic, Heart, Gauge, Phone, Mail, MapPin, Users, Zap, Target, Monitor, HardDrive, Network, Database as DatabaseIcon, BarChart as BarChartIcon, Smartphone as SmartphoneIcon, Globe as GlobeIcon, Settings as SettingsIcon, Rocket as RocketIcon, Star as StarIcon, Award as AwardIcon, Lock as LockIcon, MessageSquare as MessageSquareIcon, FileText as FileTextIcon, Calendar as CalendarIcon, Workflow as WorkflowIcon, Eye as EyeIcon, Wifi as WifiIcon, Package as PackageIcon, Mic as MicIcon, Heart as HeartIcon, Gauge as GaugeIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Users as UsersIcon, Zap as ZapIcon, Target as TargetIcon, Monitor as MonitorIcon, HardDrive as HardDriveIcon, Network as NetworkIcon } from 'lucide-react'

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud transformation with AWS, Azure, and Google Cloud Platform solutions.',
      features: ['Cloud Migration', 'Hybrid Cloud Solutions', 'Cost Optimization', 'Auto-scaling', 'Disaster Recovery'],
      pricing: 'Starting at $2,499/month',
      marketPrice: '$4,999/month',
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability by 300%', 'Enhance security posture'],
      useCases: ['AWS Migration', 'Azure Implementation', 'Multi-cloud Strategy', 'Cloud Security'],
      link: '/cloud-infrastructure'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your digital assets and ensure compliance.',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Penetration Testing', 'Security Monitoring', 'Incident Response'],
      pricing: 'Starting at $1,999/month',
      marketPrice: '$3,999/month',
      benefits: ['Prevent 99% of cyber threats', 'Reduce security incidents by 85%', 'Ensure compliance'],
      useCases: ['SOC 2 Compliance', 'GDPR Implementation', 'Security Audits', 'Threat Hunting'],
      link: '/cybersecurity-solutions'
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with modern technologies and best practices.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration', 'Legacy Modernization'],
      pricing: 'Starting at $3,999/month',
      marketPrice: '$7,999/month',
      benefits: ['Increase productivity by 50%', 'Reduce operational costs by 30%', 'Improve user experience'],
      useCases: ['ERP Systems', 'CRM Development', 'E-commerce Platforms', 'API Integration'],
      link: '/web-development'
    },
    {
      icon: Server,
      title: 'IT Infrastructure Management',
      description: 'Complete infrastructure management with 24/7 monitoring and support.',
      features: ['Server Management', 'Network Administration', 'Backup Solutions', 'Performance Monitoring', 'Patch Management'],
      pricing: 'Starting at $1,499/month',
      marketPrice: '$2,999/month',
      benefits: ['Achieve 99.9% uptime', 'Reduce IT costs by 35%', 'Improve system performance'],
      useCases: ['Server Maintenance', 'Network Optimization', 'Backup & Recovery', 'System Monitoring'],
      link: '/infrastructure-management'
    },
    {
      icon: Database,
      title: 'Database Management & Optimization',
      description: 'Expert database administration and optimization for maximum performance.',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services'],
      pricing: 'Starting at $1,799/month',
      marketPrice: '$3,599/month',
      benefits: ['Improve query performance by 80%', 'Reduce downtime by 90%', 'Enhance data security'],
      useCases: ['Database Migration', 'Performance Optimization', 'Data Backup', 'Security Hardening'],
      link: '/database-management'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['iOS Development', 'Android Development', 'Cross-platform Apps', 'UI/UX Design', 'App Store Deployment'],
      pricing: 'Starting at $4,999/month',
      marketPrice: '$9,999/month',
      benefits: ['Reach mobile users effectively', 'Improve customer engagement', 'Increase revenue opportunities'],
      useCases: ['Business Apps', 'E-commerce Mobile', 'IoT Applications', 'Enterprise Mobile'],
      link: '/mobile-development'
    },
    {
      icon: Network,
      title: 'Network Design & Security',
      description: 'Secure and scalable network infrastructure design and implementation.',
      features: ['Network Design', 'Firewall Configuration', 'VPN Setup', 'Wireless Networks', 'Network Monitoring'],
      pricing: 'Starting at $2,299/month',
      marketPrice: '$4,599/month',
      benefits: ['Improve network performance by 60%', 'Enhance security posture', 'Reduce network downtime'],
      useCases: ['Office Networks', 'Remote Work Setup', 'Network Security', 'Wireless Solutions'],
      link: '/network-solutions'
    },
    {
      icon: HardDrive,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data protection with automated backup and disaster recovery solutions.',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Cloud Storage', 'Recovery Testing'],
      pricing: 'Starting at $899/month',
      marketPrice: '$1,799/month',
      benefits: ['Protect critical data', 'Minimize downtime', 'Ensure business continuity'],
      useCases: ['Data Protection', 'Disaster Recovery', 'Compliance', 'Business Continuity'],
      link: '/backup-recovery'
    },
    {
      icon: Monitor,
      title: 'IT Support & Help Desk',
      description: '24/7 technical support and help desk services for your organization.',
      features: ['24/7 Support', 'Remote Assistance', 'Ticket Management', 'Knowledge Base', 'User Training'],
      pricing: 'Starting at $1,299/month',
      marketPrice: '$2,599/month',
      benefits: ['Reduce IT support costs by 50%', 'Improve user satisfaction', 'Faster issue resolution'],
      useCases: ['Technical Support', 'User Training', 'Issue Resolution', 'IT Consulting'],
      link: '/it-support'
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration of disparate systems and applications.',
      features: ['API Integration', 'Data Synchronization', 'Workflow Automation', 'Legacy System Integration', 'Real-time Processing'],
      pricing: 'Starting at $2,999/month',
      marketPrice: '$5,999/month',
      benefits: ['Improve data flow', 'Reduce manual work', 'Enhance system efficiency'],
      useCases: ['ERP Integration', 'CRM Integration', 'Third-party APIs', 'Data Migration'],
      link: '/system-integration'
    },
    {
      icon: Eye,
      title: 'IT Monitoring & Analytics',
      description: 'Comprehensive monitoring and analytics for IT infrastructure and applications.',
      features: ['Real-time Monitoring', 'Performance Analytics', 'Alert Management', 'Capacity Planning', 'Trend Analysis'],
      pricing: 'Starting at $1,599/month',
      marketPrice: '$3,199/month',
      benefits: ['Prevent issues proactively', 'Optimize performance', 'Reduce downtime'],
      useCases: ['Infrastructure Monitoring', 'Application Monitoring', 'Performance Analytics', 'Capacity Management'],
      link: '/it-monitoring'
    },
    {
      icon: Users,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting to align technology with business objectives.',
      features: ['IT Strategy', 'Technology Assessment', 'Digital Transformation', 'Process Optimization', 'Vendor Management'],
      pricing: 'Starting at $3,499/month',
      marketPrice: '$6,999/month',
      benefits: ['Align IT with business goals', 'Optimize technology investments', 'Improve operational efficiency'],
      useCases: ['Digital Transformation', 'IT Strategy', 'Technology Assessment', 'Process Improvement'],
      link: '/it-consulting'
    }
  ]

  const itCapabilities = [
    'Cloud Architecture & Migration',
    'Cybersecurity & Compliance',
    'Custom Software Development',
    'Mobile App Development',
    'Database Design & Optimization',
    'Network Infrastructure',
    'System Integration',
    'IT Support & Help Desk',
    'Data Backup & Recovery',
    'IT Monitoring & Analytics',
    'Digital Transformation',
    'IT Strategy & Consulting'
  ]

  const industrySolutions = [
    {
      industry: 'Healthcare',
      solutions: ['HIPAA Compliance', 'Medical Records Systems', 'Telemedicine Platforms', 'Patient Data Security'],
      icon: Heart
    },
    {
      industry: 'Finance',
      solutions: ['PCI DSS Compliance', 'Financial Systems', 'Risk Management', 'Regulatory Reporting'],
      icon: DollarSign
    },
    {
      industry: 'Manufacturing',
      solutions: ['ERP Systems', 'IoT Integration', 'Supply Chain Management', 'Quality Control Systems'],
      icon: Settings
    },
    {
      industry: 'Retail',
      solutions: ['E-commerce Platforms', 'POS Systems', 'Inventory Management', 'Customer Analytics'],
      icon: Package
    },
    {
      industry: 'Education',
      solutions: ['Learning Management Systems', 'Student Information Systems', 'Online Learning Platforms', 'Campus Networks'],
      icon: Users
    },
    {
      industry: 'Government',
      solutions: ['Citizen Services', 'Data Security', 'Compliance Management', 'Digital Transformation'],
      icon: Globe
    }
  ]

  const serviceLevels = [
    {
      name: 'Basic',
      price: '$999',
      period: '/month',
      description: 'Essential IT support for small businesses',
      features: [
        'Basic monitoring',
        'Email support',
        'Monthly maintenance',
        'Backup services',
        'Security updates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'Comprehensive IT services for growing companies',
      features: [
        '24/7 monitoring',
        'Priority support',
        'Weekly maintenance',
        'Advanced backup',
        'Security management',
        'Performance optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'Full-service IT management for large organizations',
      features: [
        'Dedicated team',
        '24/7 phone support',
        'Daily maintenance',
        'Disaster recovery',
        'Compliance management',
        'Custom solutions'
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
              IT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions to keep your business running smoothly and securely. From cloud migration to cybersecurity, 
              we provide end-to-end IT services that drive efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                <Rocket className="w-5 h-5 inline mr-2" />
                Get IT Support
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                <Phone className="w-5 h-5 inline mr-2" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our extensive portfolio of IT services, each designed to address specific business needs 
              and deliver measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
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

      {/* IT Capabilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Capabilities
            </h2>
            <p className="text-xl text-gray-300">
              We provide comprehensive IT services using cutting-edge technologies and best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {itCapabilities.map((capability, index) => (
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
              Industry-Specific IT Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Tailored IT solutions for different industries and compliance requirements.
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

      {/* Service Levels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IT Service Levels
            </h2>
            <p className="text-xl text-gray-300">
              Choose the service level that best fits your business needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {serviceLevels.map((level, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${level.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {level.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{level.name}</h3>
                  <p className="text-gray-300 mb-4">{level.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{level.price}</span>
                    <span className="text-gray-300 ml-1">{level.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  level.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transform hover:scale-105' 
                    : 'bg-white/20 hover:bg-white/30 text-white'
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
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our IT experts help you optimize your technology infrastructure and improve operational efficiency. 
            Contact us today for a free IT assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <Rocket className="w-5 h-5 mr-2" />
              Get IT Support
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </button>
          </div>
          <div className="mt-8 flex items-center justify-center space-x-8 text-gray-400">
            <div className="flex items-center">
              <Award className="w-5 h-5 mr-2" />
              <span>Certified IT Professionals</span>
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

export default ITServicesPage