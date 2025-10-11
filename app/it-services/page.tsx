'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Server, Shield, Cloud, Code, CheckCircle, ArrowRight, Database, Cpu, Smartphone, Monitor, Lock, Settings, Globe, Users, BarChart, Zap } from 'lucide-react'

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Comprehensive IT infrastructure solutions for modern businesses.',
      features: ['Server Management', 'Network Configuration', 'System Monitoring', 'Backup Solutions', 'Disaster Recovery', 'Performance Optimization'],
      price: 'Starting at $299/month',
      marketPrice: '$600-2000/month',
      benefits: ['99.9% uptime guarantee', '24/7 monitoring', 'Proactive maintenance', 'Scalable infrastructure']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with advanced security solutions.',
      features: ['Threat Detection', 'Data Protection', 'Compliance', 'Incident Response', 'Security Audits', 'Penetration Testing'],
      price: 'Starting at $399/month',
      marketPrice: '$800-2500/month',
      benefits: ['Real-time threat protection', 'Compliance assurance', 'Expert security team', 'Risk mitigation']
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure for your business.',
      features: ['Cloud Migration', 'Hybrid Solutions', 'Cost Optimization', '24/7 Support', 'Auto-scaling', 'Multi-cloud Management'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1500/month',
      benefits: ['Flexible scaling', 'Cost optimization', 'Enhanced security', 'Global availability']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific requirements.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration', 'Database Design', 'UI/UX Development'],
      price: 'Starting at $149/month',
      marketPrice: '$300-1000/month',
      benefits: ['Custom solutions', 'Fast development', 'Modern technologies', 'Ongoing support']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database design, optimization, and management services.',
      features: ['Database Design', 'Performance Tuning', 'Data Migration', 'Backup & Recovery', 'Security Hardening', 'Monitoring'],
      price: 'Starting at $249/month',
      marketPrice: '$500-1800/month',
      benefits: ['Optimized performance', 'Data security', 'Automated backups', 'Expert management']
    },
    {
      icon: Cpu,
      title: 'System Administration',
      description: 'Professional system administration and maintenance services.',
      features: ['User Management', 'System Updates', 'Performance Monitoring', 'Troubleshooting', 'Documentation', 'Training'],
      price: 'Starting at $179/month',
      marketPrice: '$350-1200/month',
      benefits: ['Proactive maintenance', 'Reduced downtime', 'Expert support', 'Cost savings']
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile application development.',
      features: ['iOS Development', 'Android Development', 'Cross-platform Apps', 'App Store Optimization', 'Push Notifications', 'Analytics'],
      price: 'Starting at $199/month',
      marketPrice: '$400-1500/month',
      benefits: ['Native performance', 'Cross-platform compatibility', 'App store optimization', 'User engagement']
    },
    {
      icon: Monitor,
      title: 'Network Solutions',
      description: 'Complete network infrastructure design and implementation.',
      features: ['Network Design', 'Wireless Solutions', 'VPN Setup', 'Firewall Configuration', 'Load Balancing', 'Traffic Analysis'],
      price: 'Starting at $229/month',
      marketPrice: '$450-1600/month',
      benefits: ['Reliable connectivity', 'Enhanced security', 'Optimized performance', 'Scalable design']
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Comprehensive data backup, recovery, and protection services.',
      features: ['Automated Backups', 'Disaster Recovery', 'Data Encryption', 'Compliance', 'Monitoring', 'Testing'],
      price: 'Starting at $149/month',
      marketPrice: '$300-1000/month',
      benefits: ['Data security', 'Business continuity', 'Compliance ready', 'Peace of mind']
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
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-cyan-400 font-semibold">24/7 Support</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-cyan-400 font-semibold">Enterprise Grade</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-cyan-400 font-semibold">Scalable Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                  </div>
                  <p className="text-xs text-green-400 mt-1">Save up to 60% vs market rate</p>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-green-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Learn More
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
            Our expert team is ready to help you with all your IT needs. Get started today and experience the difference professional IT services can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://ziontechgroup.com/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started
            </a>
            <a 
              href="tel:+13024640950" 
              className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-2">Email: <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a></p>
            <p className="text-gray-400">Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ITServicesPage