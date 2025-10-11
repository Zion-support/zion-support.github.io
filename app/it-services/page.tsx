import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Server, Cloud, Shield, Code, Database, Wifi, CheckCircle, ArrowRight } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ItServicesPage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Complete server and network infrastructure setup, monitoring, and maintenance.',
      features: ['Server setup & configuration', 'Network monitoring', '24/7 support', 'Performance optimization'],
      price: 'Starting at $2,999/month'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern businesses.',
      features: ['Cloud migration', 'Multi-cloud strategy', 'Cost optimization', 'Security compliance'],
      price: 'Starting at $3,999/month'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from cyber threats.',
      features: ['Threat monitoring', 'Security audits', 'Compliance management', 'Incident response'],
      price: 'Starting at $4,999/month'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built with modern technologies and best practices.',
      features: ['Web applications', 'API development', 'Database design', 'Mobile apps'],
      price: 'Starting at $5,999/month'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Secure and efficient data storage, backup, and recovery solutions.',
      features: ['Database design', 'Backup solutions', 'Data migration', 'Recovery planning'],
      price: 'Starting at $2,499/month'
    },
    {
      icon: Wifi,
      title: 'Network Solutions',
      description: 'Reliable network infrastructure and connectivity solutions for your business.',
      features: ['Network design', 'WiFi setup', 'VPN solutions', 'Bandwidth optimization'],
      price: 'Starting at $1,999/month'
    }
  ]

  const benefits = [
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring'
    },
    {
      title: 'Scalable Solutions',
      description: 'Infrastructure that grows with your business'
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security for all solutions'
    },
    {
      title: 'Cost Effective',
      description: 'Optimized solutions that reduce operational costs'
    }
  ]

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Complete Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and custom development. Complete technology solutions for your business." />
        <meta name="keywords" content="IT services, infrastructure management, cloud solutions, cybersecurity, custom development, network solutions" />
      </Helmet>

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
                Complete technology infrastructure solutions for your business. From cloud migration to cybersecurity, 
                we provide comprehensive IT services that keep your business running smoothly.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400 mb-3">{service.price}</div>
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center justify-center w-full">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300">
                We deliver reliable, secure, and scalable technology solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our IT services can help streamline your operations and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default ItServicesPage