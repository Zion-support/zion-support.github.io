import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Shield, Cloud, Database, Cpu, Globe, Smartphone, Server, Lock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Migrate to the cloud with confidence. We help you choose the right cloud platform and optimize your infrastructure.',
      features: [
        'Cloud migration and optimization',
        'Multi-cloud strategy implementation',
        'Cost optimization and monitoring',
        'Disaster recovery planning',
        '24/7 cloud support'
      ],
      price: 'Starting at $2,500/month'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Optimize your database performance and ensure data security with our expert database management services.',
      features: [
        'Database design and optimization',
        'Performance tuning and monitoring',
        'Data backup and recovery',
        'Security and compliance',
        'Database migration services'
      ],
      price: 'Starting at $1,800/month'
    },
    {
      icon: Server,
      title: 'Server Management',
      description: 'Keep your servers running smoothly with our comprehensive server management and monitoring services.',
      features: [
        'Server setup and configuration',
        'Performance monitoring',
        'Security updates and patches',
        'Backup and disaster recovery',
        '24/7 server monitoring'
      ],
      price: 'Starting at $1,200/month'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business from cyber threats with our comprehensive cybersecurity solutions and monitoring.',
      features: [
        'Security assessment and auditing',
        'Firewall configuration and management',
        'Intrusion detection and prevention',
        'Security training and awareness',
        'Incident response planning'
      ],
      price: 'Starting at $3,000/month'
    },
    {
      icon: Globe,
      title: 'Network Solutions',
      description: 'Design and implement robust network infrastructure that supports your business growth and requirements.',
      features: [
        'Network design and implementation',
        'Wireless network setup',
        'Network security configuration',
        'Performance optimization',
        'Network monitoring and maintenance'
      ],
      price: 'Starting at $2,000/month'
    },
    {
      icon: Smartphone,
      title: 'Mobile Device Management',
      description: 'Secure and manage your mobile devices with our comprehensive MDM solutions and support.',
      features: [
        'Device enrollment and configuration',
        'App management and distribution',
        'Security policy enforcement',
        'Remote device management',
        'Compliance monitoring'
      ],
      price: 'Starting at $800/month'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: '24/7 Support',
      description: 'Round-the-clock technical support to keep your systems running smoothly.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Comprehensive security measures to protect your data and infrastructure.'
    },
    {
      icon: Cpu,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in IT infrastructure.'
    },
    {
      icon: ArrowRight,
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business and adapt to your changing needs.'
    }
  ];

  const stats = [
    { label: 'Uptime Guarantee', value: '99.9%' },
    { label: 'Response Time', value: '< 15 min' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Years Experience', value: '10+' }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta name="description" content="Professional IT services including cloud solutions, cybersecurity, network management, and server administration. Keep your business running smoothly." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, network management, server administration, IT support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Professional <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">IT Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Keep your business running smoothly with our comprehensive IT services. From cloud solutions to cybersecurity, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Our IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to keep your business secure, efficient, and competitive.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-center mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4 group-hover:bg-cyan-500/30 transition-colors">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400 mb-3">{service.price}</div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We provide reliable, secure, and scalable IT solutions that help your business thrive.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-6" />
                    <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 backdrop-blur-lg border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Optimize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let our experts help you build a robust, secure, and scalable IT environment that supports your business goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Get Started Today
                </button>
                <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ITServicesPage;