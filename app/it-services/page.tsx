'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Server, Shield, Cloud, Code, CheckCircle, ArrowRight, DollarSign, Users, Clock, Database, Smartphone, Mail, Calendar, FileText, MessageCircle, ShoppingCart, Lock, TrendingUp, Settings, Globe, Heart, Star, Award, Rocket, Cpu, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, Phone, Bot, CpuChip, Sparkles, Lightbulb, Gauge, Activity, Layers, BookOpen, Truck, HardDrive, Network, Zap, Target, BarChart, Headphones, Wrench } from 'lucide-react'

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure solutions for modern businesses with 24/7 monitoring and support.',
      features: ['Server Management & Maintenance', 'Network Configuration & Optimization', 'System Monitoring & Alerts', 'Backup & Disaster Recovery', 'Performance Tuning'],
      pricing: 'Starting at $1,200/month',
      benefits: ['99.9% uptime guarantee', 'Reduce IT costs by 30%', 'Proactive issue resolution'],
      applications: ['Server administration', 'Network management', 'System monitoring', 'Backup solutions'],
      link: 'https://ziontechgroup.com/infrastructure-management'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Protect your business with advanced security solutions and comprehensive threat protection.',
      features: ['Threat Detection & Prevention', 'Data Protection & Encryption', 'Compliance Management', 'Incident Response', 'Security Audits'],
      pricing: 'Starting at $2,000/month',
      benefits: ['Prevent 99% of cyber attacks', 'Ensure compliance', 'Reduce security risks'],
      applications: ['Network security', 'Endpoint protection', 'Data encryption', 'Compliance monitoring'],
      link: 'https://ziontechgroup.com/cybersecurity-solutions'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Scalable and secure cloud infrastructure solutions with seamless migration services.',
      features: ['Cloud Migration Services', 'Hybrid Cloud Solutions', 'Cost Optimization', '24/7 Cloud Support', 'Auto-scaling'],
      pricing: 'Starting at $1,500/month',
      benefits: ['Reduce infrastructure costs by 40%', 'Improve scalability', 'Enhance security'],
      applications: ['AWS/Azure/GCP migration', 'Cloud optimization', 'Hybrid cloud setup', 'Cloud monitoring'],
      link: 'https://ziontechgroup.com/cloud-infrastructure'
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built to meet your specific business requirements and goals.',
      features: ['Web Application Development', 'Mobile App Development', 'API Development & Integration', 'System Integration', 'Legacy System Modernization'],
      pricing: 'Starting at $3,000/month',
      benefits: ['Custom solutions for your needs', 'Faster time to market', 'Scalable architecture'],
      applications: ['Custom web apps', 'Mobile applications', 'API development', 'System integration'],
      link: 'https://ziontechgroup.com/custom-development'
    },
    {
      icon: Database,
      title: 'Database Management & Optimization',
      description: 'Expert database administration, optimization, and management services for optimal performance.',
      features: ['Database Design & Architecture', 'Performance Optimization', 'Backup & Recovery', 'Security Hardening', 'Migration Services'],
      pricing: 'Starting at $1,800/month',
      benefits: ['Improve database performance by 50%', 'Ensure data security', 'Reduce downtime'],
      applications: ['Database administration', 'Performance tuning', 'Data migration', 'Backup solutions'],
      link: 'https://ziontechgroup.com/database-management'
    },
    {
      icon: Network,
      title: 'Network Design & Management',
      description: 'Professional network design, implementation, and ongoing management services.',
      features: ['Network Design & Planning', 'Implementation & Configuration', 'Performance Monitoring', 'Security Implementation', 'Troubleshooting'],
      pricing: 'Starting at $1,400/month',
      benefits: ['Optimize network performance', 'Improve security', 'Reduce network issues'],
      applications: ['Network design', 'WAN/LAN setup', 'Network monitoring', 'Security implementation'],
      link: 'https://ziontechgroup.com/network-management'
    },
    {
      icon: Smartphone,
      title: 'Mobile Device Management',
      description: 'Comprehensive mobile device management and security solutions for your workforce.',
      features: ['Device Provisioning', 'Security Policies', 'App Management', 'Remote Support', 'Compliance Monitoring'],
      pricing: 'Starting at $800/month',
      benefits: ['Secure mobile devices', 'Centralized management', 'Reduce security risks'],
      applications: ['Mobile device security', 'App management', 'Remote support', 'Compliance tracking'],
      link: 'https://ziontechgroup.com/mobile-device-management'
    },
    {
      icon: Mail,
      title: 'Email & Communication Systems',
      description: 'Professional email and communication system setup, migration, and management.',
      features: ['Email Server Setup', 'Migration Services', 'Security Configuration', 'Backup & Recovery', 'User Training'],
      pricing: 'Starting at $1,000/month',
      benefits: ['Reliable email systems', 'Enhanced security', 'Improved productivity'],
      applications: ['Email server setup', 'Migration services', 'Security configuration', 'User support'],
      link: 'https://ziontechgroup.com/email-systems'
    },
    {
      icon: HardDrive,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data backup and disaster recovery solutions to protect your critical information.',
      features: ['Automated Backups', 'Disaster Recovery Planning', 'Data Encryption', 'Testing & Validation', '24/7 Monitoring'],
      pricing: 'Starting at $900/month',
      benefits: ['Protect critical data', 'Minimize downtime', 'Ensure business continuity'],
      applications: ['Data backup', 'Disaster recovery', 'Data encryption', 'Business continuity'],
      link: 'https://ziontechgroup.com/backup-recovery'
    },
    {
      icon: Headphones,
      title: 'IT Help Desk & Support',
      description: 'Professional IT support and help desk services to keep your systems running smoothly.',
      features: ['24/7 Technical Support', 'Remote Assistance', 'Issue Tracking', 'Knowledge Base', 'User Training'],
      pricing: 'Starting at $1,100/month',
      benefits: ['Faster issue resolution', 'Reduced downtime', 'Improved user satisfaction'],
      applications: ['Technical support', 'Remote assistance', 'Issue tracking', 'User training'],
      link: 'https://ziontechgroup.com/it-helpdesk'
    },
    {
      icon: Wrench,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting to align technology with your business objectives and goals.',
      features: ['IT Strategy Planning', 'Technology Assessment', 'Vendor Management', 'Budget Planning', 'Digital Transformation'],
      pricing: 'Starting at $2,500/month',
      benefits: ['Align IT with business goals', 'Optimize technology investments', 'Plan for growth'],
      applications: ['IT strategy', 'Technology assessment', 'Vendor selection', 'Digital transformation'],
      link: 'https://ziontechgroup.com/it-consulting'
    },
    {
      icon: Globe,
      title: 'Web Development & Hosting',
      description: 'Professional web development services with reliable hosting and maintenance solutions.',
      features: ['Custom Website Development', 'E-commerce Solutions', 'Web Hosting', 'SSL Certificates', 'Maintenance & Updates'],
      pricing: 'Starting at $1,600/month',
      benefits: ['Professional web presence', 'Improved online visibility', 'Reliable hosting'],
      applications: ['Website development', 'E-commerce setup', 'Web hosting', 'Maintenance services'],
      link: 'https://ziontechgroup.com/web-development'
    }
  ]

  const industrySolutions = [
    {
      industry: 'Healthcare',
      icon: Heart,
      solutions: ['HIPAA Compliance', 'Electronic Health Records', 'Medical Device Integration', 'Patient Data Security'],
      description: 'Specialized IT solutions for healthcare organizations with strict compliance requirements.'
    },
    {
      industry: 'Finance',
      icon: DollarSign,
      solutions: ['PCI DSS Compliance', 'Financial Data Security', 'Regulatory Reporting', 'Risk Management'],
      description: 'Secure IT infrastructure for financial institutions with regulatory compliance focus.'
    },
    {
      industry: 'Manufacturing',
      icon: Settings,
      solutions: ['Industrial IoT', 'Production Monitoring', 'Supply Chain Management', 'Quality Control Systems'],
      description: 'Technology solutions to optimize manufacturing operations and improve efficiency.'
    },
    {
      industry: 'Education',
      icon: BookOpen,
      solutions: ['Learning Management Systems', 'Student Information Systems', 'Campus Network Security', 'Digital Learning Tools'],
      description: 'Educational technology solutions to enhance learning and administrative efficiency.'
    },
    {
      industry: 'Retail',
      icon: ShoppingCart,
      solutions: ['Point of Sale Systems', 'Inventory Management', 'Customer Analytics', 'E-commerce Integration'],
      description: 'Retail technology solutions to improve customer experience and operational efficiency.'
    },
    {
      industry: 'Government',
      icon: Shield,
      solutions: ['Security Clearance Systems', 'Citizen Services', 'Data Governance', 'Compliance Management'],
      description: 'Secure IT solutions for government agencies with strict security and compliance requirements.'
    }
  ]

  const pricingTiers = [
    {
      name: 'Basic',
      price: '$1,200',
      period: '/month',
      description: 'Essential IT services for small businesses',
      features: [
        'Basic server management',
        'Email support',
        'Monthly security updates',
        'Basic backup solution',
        'Standard monitoring'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,500',
      period: '/month',
      description: 'Comprehensive IT services for growing businesses',
      features: [
        'Full infrastructure management',
        'Priority support',
        'Advanced security monitoring',
        'Automated backups',
        'Performance optimization',
        'Cloud integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$5,000',
      period: '/month',
      description: 'Complete IT solutions for large organizations',
      features: [
        'Dedicated IT team',
        '24/7 support',
        'Custom solutions',
        'Disaster recovery',
        'Compliance management',
        'Strategic consulting'
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
              Comprehensive IT solutions to keep your business running smoothly, securely, and efficiently. 
              From infrastructure management to cybersecurity, we provide end-to-end IT services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2" />
                Get IT Support
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to address your specific business needs and technology challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
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
              Industry-Specific IT Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Specialized IT services tailored for specific industries and compliance requirements.
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
              Flexible IT Service Pricing
            </h2>
            <p className="text-xl text-gray-300">
              Choose the IT service plan that fits your business needs and budget.
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
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our IT services can help you improve efficiency, security, and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Your IT Project
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Contact Our IT Experts
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ITServicesPage