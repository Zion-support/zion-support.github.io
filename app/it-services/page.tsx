'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Server, Shield, Cloud, Code, CheckCircle, ArrowRight, DollarSign, Star, Database, Network, Smartphone, Globe, Lock, Settings, Monitor, HardDrive, Wifi, Cpu, BarChart, Users, Zap, Target, TrendingUp, Globe2, Smartphone as Mobile, Database as DB, Shield as Security, Cloud as CloudIcon, Code as Dev, Server as ServerIcon } from 'lucide-react'

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Complete cloud transformation services including migration, optimization, and management across AWS, Azure, and Google Cloud.',
      features: ['Cloud Migration', 'Multi-cloud Strategy', 'Cost Optimization', 'Auto-scaling', 'Disaster Recovery'],
      pricing: 'Starting at $3,500/month',
      link: 'https://ziontechgroup.com/cloud-infrastructure',
      category: 'Cloud Services'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services including threat detection, compliance management, and incident response.',
      features: ['Security Assessment', 'Penetration Testing', 'Compliance (SOC2, GDPR)', '24/7 Monitoring', 'Incident Response'],
      pricing: 'Starting at $2,800/month',
      link: 'https://ziontechgroup.com/cybersecurity-solutions',
      category: 'Security'
    },
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored web and mobile applications built with modern technologies and best practices.',
      features: ['Web Applications', 'Mobile Apps (iOS/Android)', 'API Development', 'System Integration', 'UI/UX Design'],
      pricing: 'Starting at $8,000/project',
      link: 'https://ziontechgroup.com/web-development',
      category: 'Development'
    },
    {
      icon: Database,
      title: 'Database Management & Optimization',
      description: 'Expert database administration, optimization, and migration services for all major database systems.',
      features: ['Database Design', 'Performance Tuning', 'Migration Services', 'Backup & Recovery', 'Monitoring'],
      pricing: 'Starting at $1,500/month',
      link: 'https://ziontechgroup.com/database-management',
      category: 'Data Management'
    },
    {
      icon: Network,
      title: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management for enterprise-grade connectivity.',
      features: ['Network Design', 'Cisco/HP Equipment', 'WiFi Solutions', 'VPN Setup', 'Network Security'],
      pricing: 'Starting at $2,200/month',
      link: 'https://ziontechgroup.com/network-infrastructure',
      category: 'Infrastructure'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern development practices.',
      features: ['Native iOS/Android', 'React Native', 'Flutter', 'App Store Deployment', 'Push Notifications'],
      pricing: 'Starting at $12,000/project',
      link: 'https://ziontechgroup.com/mobile-development',
      category: 'Mobile Development'
    },
    {
      icon: Globe,
      title: 'Web Development Services',
      description: 'Modern, responsive web applications built with cutting-edge technologies and frameworks.',
      features: ['React/Vue/Angular', 'Node.js/Python/PHP', 'E-commerce Solutions', 'CMS Development', 'SEO Optimization'],
      pricing: 'Starting at $5,000/project',
      link: 'https://ziontechgroup.com/web-development',
      category: 'Web Development'
    },
    {
      icon: Lock,
      title: 'IT Security Consulting',
      description: 'Strategic security consulting and implementation of enterprise-grade security solutions.',
      features: ['Security Audits', 'Risk Assessment', 'Policy Development', 'Staff Training', 'Compliance'],
      pricing: 'Starting at $2,000/month',
      link: 'https://ziontechgroup.com/security-consulting',
      category: 'Security Consulting'
    },
    {
      icon: Settings,
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support services including helpdesk, maintenance, and system administration.',
      features: ['24/7 Helpdesk', 'System Maintenance', 'Software Updates', 'Hardware Support', 'User Training'],
      pricing: 'Starting at $1,200/month',
      link: 'https://ziontechgroup.com/it-support',
      category: 'Support'
    },
    {
      icon: Monitor,
      title: 'System Integration',
      description: 'Seamless integration of disparate systems and applications for improved workflow efficiency.',
      features: ['API Integration', 'Legacy System Integration', 'Data Synchronization', 'Workflow Automation', 'Testing'],
      pricing: 'Starting at $4,500/project',
      link: 'https://ziontechgroup.com/system-integration',
      category: 'Integration'
    },
    {
      icon: HardDrive,
      title: 'Data Backup & Recovery',
      description: 'Comprehensive data protection solutions with automated backups and disaster recovery planning.',
      features: ['Automated Backups', 'Cloud Storage', 'Disaster Recovery', 'Data Encryption', 'Recovery Testing'],
      pricing: 'Starting at $800/month',
      link: 'https://ziontechgroup.com/data-backup',
      category: 'Data Protection'
    },
    {
      icon: Wifi,
      title: 'Network Security',
      description: 'Advanced network security solutions including firewalls, intrusion detection, and access control.',
      features: ['Firewall Management', 'Intrusion Detection', 'Access Control', 'Network Monitoring', 'Security Policies'],
      pricing: 'Starting at $1,800/month',
      link: 'https://ziontechgroup.com/network-security',
      category: 'Network Security'
    }
  ]

  const services = [
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure solutions for modern businesses.',
      features: ['Server Management', 'Network Configuration', 'System Monitoring', 'Backup Solutions']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with advanced security solutions.',
      features: ['Threat Detection', 'Data Protection', 'Compliance', 'Incident Response']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure for your business.',
      features: ['Cloud Migration', 'Hybrid Solutions', 'Cost Optimization', '24/7 Support']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific requirements.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
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
              Comprehensive IT solutions to keep your business running smoothly and securely.
            </p>
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Professional IT services designed to keep your business running efficiently and securely.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-cyan-400">
                    {service.pricing}
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm text-gray-300">(4.9)</span>
                  </div>
                </div>
                
                <a 
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core IT Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core IT Services
            </h2>
            <p className="text-xl text-gray-300">
              Essential IT services that form the foundation of modern business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need IT Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Our expert team is ready to help you with all your IT needs.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            <ArrowRight className="w-5 h-5 mr-2" />
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ITServicesPage