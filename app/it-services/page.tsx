'use client'
import React, { useState } from 'react'
import SEOHead from '../components/SEOHead'
import FuturisticBackground from '../components/FuturisticBackground'
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Globe, 
  Database, 
  Code, 
  Cloud, 
  Smartphone, 
  Mail, 
  BarChart3, 
  Users, 
  Lock, 
  Clock,
  ArrowRight,
  Sparkles,
  Rocket,
  Server,
  Network,
  HardDrive,
  Monitor,
  Wifi,
  Settings,
  Cpu,
  MemoryStick
} from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ITServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All IT Services', icon: <Server className="w-5 h-5" /> },
    { id: 'infrastructure', name: 'Infrastructure', icon: <Server className="w-5 h-5" /> },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> },
    { id: 'networking', name: 'Networking', icon: <Network className="w-5 h-5" /> },
    { id: 'cloud', name: 'Cloud Services', icon: <Cloud className="w-5 h-5" /> },
    { id: 'support', name: 'Support', icon: <Users className="w-5 h-5" /> },
    { id: 'consulting', name: 'Consulting', icon: <Code className="w-5 h-5" /> }
  ]

  const itServices = [
    {
      id: 'infrastructure-management',
      name: 'IT Infrastructure Management',
      category: 'infrastructure',
      description: 'Comprehensive IT infrastructure management including server maintenance, hardware monitoring, and system optimization.',
      features: [
        '24/7 server monitoring',
        'Hardware maintenance',
        'Performance optimization',
        'Backup and recovery',
        'System updates',
        'Capacity planning',
        'Disaster recovery',
        'Compliance management'
      ],
      pricing: {
        starter: { price: 299, period: 'month', features: ['Basic monitoring', 'Email support', 'Standard maintenance', '1 server'] },
        pro: { price: 599, period: 'month', features: ['Advanced monitoring', 'Priority support', 'Proactive maintenance', '5 servers'] },
        enterprise: { price: 1299, period: 'month', features: ['Full monitoring', 'Dedicated support', 'Custom maintenance', 'Unlimited servers'] }
      },
      icon: <Server className="w-8 h-8 text-blue-500" />,
      popular: true,
      link: 'https://ziontechgroup.com/infrastructure-management'
    },
    {
      id: 'cybersecurity-suite',
      name: 'Cybersecurity Suite',
      category: 'security',
      description: 'Advanced cybersecurity solutions including threat detection, vulnerability assessment, and security monitoring.',
      features: [
        'Threat detection and response',
        'Vulnerability scanning',
        'Security monitoring',
        'Incident response',
        'Compliance management',
        'Security training',
        'Penetration testing',
        '24/7 security operations'
      ],
      pricing: {
        starter: { price: 199, period: 'month', features: ['Basic security', 'Email alerts', 'Standard scanning', 'Email support'] },
        pro: { price: 499, period: 'month', features: ['Advanced security', 'SMS alerts', 'Advanced scanning', 'Priority support'] },
        enterprise: { price: 999, period: 'month', features: ['Full security suite', 'Custom alerts', 'Custom scanning', 'Dedicated support'] }
      },
      icon: <Shield className="w-8 h-8 text-red-500" />,
      popular: true,
      link: 'https://ziontechgroup.com/cybersecurity-suite'
    },
    {
      id: 'network-management',
      name: 'Network Management',
      category: 'networking',
      description: 'Complete network management including design, implementation, monitoring, and optimization of network infrastructure.',
      features: [
        'Network design and planning',
        'Router and switch configuration',
        'Network monitoring',
        'Performance optimization',
        'Troubleshooting',
        'Security implementation',
        'Wireless network setup',
        'Network documentation'
      ],
      pricing: {
        starter: { price: 149, period: 'month', features: ['Basic monitoring', 'Email support', 'Standard maintenance', 'Small network'] },
        pro: { price: 349, period: 'month', features: ['Advanced monitoring', 'Priority support', 'Proactive maintenance', 'Medium network'] },
        enterprise: { price: 699, period: 'month', features: ['Full monitoring', 'Dedicated support', 'Custom maintenance', 'Large network'] }
      },
      icon: <Network className="w-8 h-8 text-green-500" />,
      popular: false,
      link: 'https://ziontechgroup.com/network-management'
    },
    {
      id: 'cloud-migration',
      name: 'Cloud Migration Services',
      category: 'cloud',
      description: 'Professional cloud migration services including assessment, planning, and execution of cloud infrastructure migration.',
      features: [
        'Cloud assessment',
        'Migration planning',
        'Data migration',
        'Application migration',
        'Security configuration',
        'Performance optimization',
        'Training and support',
        'Post-migration monitoring'
      ],
      pricing: {
        starter: { price: 999, period: 'one-time', features: ['Basic migration', 'Email support', 'Standard tools', 'Small workload'] },
        pro: { price: 2999, period: 'one-time', features: ['Advanced migration', 'Priority support', 'Advanced tools', 'Medium workload'] },
        enterprise: { price: 9999, period: 'one-time', features: ['Full migration', 'Dedicated support', 'Custom tools', 'Large workload'] }
      },
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      popular: true,
      link: 'https://ziontechgroup.com/cloud-migration'
    },
    {
      id: 'help-desk-support',
      name: '24/7 Help Desk Support',
      category: 'support',
      description: 'Round-the-clock technical support including remote assistance, troubleshooting, and issue resolution.',
      features: [
        '24/7 technical support',
        'Remote assistance',
        'Issue tracking',
        'Knowledge base access',
        'Multi-channel support',
        'Escalation management',
        'Performance reporting',
        'User training'
      ],
      pricing: {
        starter: { price: 99, period: 'month', features: ['Email support', 'Basic assistance', 'Standard response', '5 users'] },
        pro: { price: 199, period: 'month', features: ['Phone support', 'Advanced assistance', 'Priority response', '25 users'] },
        enterprise: { price: 399, period: 'month', features: ['Full support', 'Dedicated assistance', 'Immediate response', 'Unlimited users'] }
      },
      icon: <Users className="w-8 h-8 text-orange-500" />,
      popular: false,
      link: 'https://ziontechgroup.com/help-desk-support'
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting Services',
      category: 'consulting',
      description: 'Strategic IT consulting including technology assessment, planning, and implementation guidance.',
      features: [
        'Technology assessment',
        'Strategic planning',
        'Architecture design',
        'Implementation guidance',
        'Best practices',
        'Technology selection',
        'ROI analysis',
        'Change management'
      ],
      pricing: {
        starter: { price: 199, period: 'hour', features: ['Basic consultation', 'Email follow-up', 'Standard report', 'Single session'] },
        pro: { price: 299, period: 'hour', features: ['Advanced consultation', 'Phone follow-up', 'Detailed report', 'Multiple sessions'] },
        enterprise: { price: 499, period: 'hour', features: ['Full consultation', 'Dedicated follow-up', 'Custom report', 'Ongoing support'] }
      },
      icon: <Code className="w-8 h-8 text-cyan-500" />,
      popular: false,
      link: 'https://ziontechgroup.com/it-consulting'
    },
    {
      id: 'data-backup-recovery',
      name: 'Data Backup & Recovery',
      category: 'infrastructure',
      description: 'Comprehensive data backup and recovery solutions including automated backups, disaster recovery, and data protection.',
      features: [
        'Automated backups',
        'Disaster recovery',
        'Data encryption',
        'Backup verification',
        'Recovery testing',
        'Offsite storage',
        'Compliance support',
        '24/7 monitoring'
      ],
      pricing: {
        starter: { price: 79, period: 'month', features: ['Basic backup', 'Email support', 'Standard storage', '1TB storage'] },
        pro: { price: 149, period: 'month', features: ['Advanced backup', 'Priority support', 'Advanced storage', '10TB storage'] },
        enterprise: { price: 299, period: 'month', features: ['Full backup suite', 'Dedicated support', 'Custom storage', 'Unlimited storage'] }
      },
      icon: <HardDrive className="w-8 h-8 text-yellow-500" />,
      popular: true,
      link: 'https://ziontechgroup.com/data-backup-recovery'
    },
    {
      id: 'system-integration',
      name: 'System Integration',
      category: 'infrastructure',
      description: 'Professional system integration services including API development, data integration, and system connectivity.',
      features: [
        'API development',
        'Data integration',
        'System connectivity',
        'Custom development',
        'Testing and validation',
        'Documentation',
        'Training and support',
        'Maintenance and updates'
      ],
      pricing: {
        starter: { price: 1999, period: 'one-time', features: ['Basic integration', 'Email support', 'Standard tools', 'Simple systems'] },
        pro: { price: 4999, period: 'one-time', features: ['Advanced integration', 'Priority support', 'Advanced tools', 'Complex systems'] },
        enterprise: { price: 9999, period: 'one-time', features: ['Full integration', 'Dedicated support', 'Custom tools', 'Enterprise systems'] }
      },
      icon: <Settings className="w-8 h-8 text-pink-500" />,
      popular: false,
      link: 'https://ziontechgroup.com/system-integration'
    }
  ]

  const filteredServices = selectedCategory === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      
      <SEOHead 
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including infrastructure management, cybersecurity, cloud migration, and 24/7 support. Professional IT solutions for businesses of all sizes."
        keywords="IT services, infrastructure management, cybersecurity, cloud migration, network management, IT support, system integration, IT consulting"
      />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-purple-500/30">
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
                  <span className="text-purple-300 font-medium">Professional IT Solutions</span>
                  <Sparkles className="w-5 h-5 text-pink-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Comprehensive <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              IT Services
            </span> for Your Business
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Professional IT services including infrastructure management, cybersecurity, cloud migration, and 24/7 support. 
            We keep your technology running smoothly so you can focus on your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-2">
                <Rocket className="w-5 h-5" />
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`group relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 ${
                  service.popular ? 'ring-2 ring-purple-500/50' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    {service.popular && (
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-yellow-400 text-sm font-medium">Popular</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-white mb-2">
                      From ${service.pricing.starter.price}
                      <span className="text-lg text-gray-400">/{service.pricing.starter.period}</span>
                    </div>
                    <div className="text-sm text-gray-400">Starting price</div>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      View Details
                    </a>
                    <Link
                      to="/contact"
                      className="w-full border border-purple-400/50 text-purple-400 py-3 px-4 rounded-lg font-semibold text-center hover:bg-purple-400/10 hover:border-purple-400 transition-all duration-300"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20"></div>
                <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                  IT Capabilities
                </h2>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our IT services are backed by certified professionals and cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Server className="w-12 h-12 text-blue-500" />, title: 'Infrastructure', description: 'Complete server and hardware management' },
              { icon: <Shield className="w-12 h-12 text-green-500" />, title: 'Security', description: 'Advanced cybersecurity and threat protection' },
              { icon: <Cloud className="w-12 h-12 text-purple-500" />, title: 'Cloud Services', description: 'Cloud migration and management solutions' },
              { icon: <Users className="w-12 h-12 text-orange-500" />, title: 'Support', description: '24/7 technical support and assistance' }
            ].map((capability, index) => (
              <div key={index} className="group text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {capability.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="relative bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur opacity-30"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Optimize Your IT Infrastructure?
              </h2>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                Let our expert IT team help you build, secure, and maintain your technology infrastructure. 
                Get started today and experience professional IT services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  to="/contact"
                  className="group relative bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <div className="absolute -inset-1 bg-white rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative flex items-center space-x-2">
                    <Rocket className="w-5 h-5" />
                    <span>Start Your IT Journey</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </div>
              
              {/* Contact Info */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="group">
                  <div className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">+1 302 464 0950</div>
                  <div className="text-blue-200">Call Us Now</div>
                </div>
                <div className="group">
                  <div className="text-2xl font-bold text-white mb-2 group-hover:text-green-300 transition-colors duration-300">kleber@ziontechgroup.com</div>
                  <div className="text-blue-200">Email Us</div>
                </div>
                <div className="group">
                  <div className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">24/7 Support</div>
                  <div className="text-blue-200">Always Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}