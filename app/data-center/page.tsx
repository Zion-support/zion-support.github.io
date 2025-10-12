import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Server, Shield, Zap, Globe, Clock, DollarSign, Star, Target, Award, Users, BarChart3, Cpu, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DataCenterPage: React.FC = () => {
  const dataCenterServices = [
    {
      icon: <Server className="w-8 h-8 text-blue-500" />,
      title: 'Data Center Design',
      description: 'Custom data center design and architecture solutions for optimal performance.',
      price: '$5,000/project',
      features: ['Infrastructure design', 'Power planning', 'Cooling systems', 'Security layout']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Data Center Security',
      description: 'Comprehensive security solutions for data center protection and compliance.',
      price: '$2,500/month',
      features: ['Physical security', 'Access control', 'Surveillance systems', 'Compliance monitoring']
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'Power & Cooling',
      description: 'Efficient power distribution and cooling solutions for optimal performance.',
      price: '$3,000/month',
      features: ['UPS systems', 'Generator backup', 'HVAC systems', 'Energy monitoring']
    },
    {
      icon: <Network className="w-8 h-8 text-purple-500" />,
      title: 'Network Infrastructure',
      description: 'High-performance network infrastructure for data center operations.',
      price: '$2,000/month',
      features: ['Fiber optic cabling', 'Network switches', 'Load balancing', 'Monitoring systems']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-500" />,
      title: 'Monitoring & Management',
      description: 'Advanced monitoring and management solutions for data center operations.',
      price: '$1,500/month',
      features: ['Real-time monitoring', 'Alert systems', 'Performance analytics', 'Remote management']
    },
    {
      icon: <Cpu className="w-8 h-8 text-cyan-500" />,
      title: 'Server Management',
      description: 'Complete server management and maintenance services.',
      price: '$999/month',
      features: ['Server deployment', 'Hardware maintenance', 'Software updates', 'Performance optimization']
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6 text-green-400" /> },
    { number: '50+', label: 'Data Centers Built', icon: <Server className="w-6 h-6 text-blue-400" /> },
    { number: '40%', label: 'Energy Savings', icon: <Zap className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6 text-orange-400" /> }
  ];

  const technologies = [
    { name: 'Server Hardware', items: ['Dell PowerEdge', 'HP ProLiant', 'Cisco UCS', 'IBM Power'] },
    { name: 'Storage Systems', items: ['EMC VMAX', 'NetApp FAS', 'Pure Storage', 'HPE 3PAR'] },
    { name: 'Network Equipment', items: ['Cisco Catalyst', 'Juniper EX', 'Arista Networks', 'Fortinet'] },
    { name: 'Power Systems', items: ['APC UPS', 'Eaton Power', 'Schneider Electric', 'Vertiv'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Data Center Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive data center solutions including design, security, power, cooling, and management. Expert data center services for enterprise operations." />
        <meta name="keywords" content="data center solutions, data center design, data center security, server management, network infrastructure" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Server className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Data Center
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Comprehensive data center solutions designed for optimal performance, security, and efficiency. 
              From design to management, we handle all your data center needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Center Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Data Center Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Complete data center solutions for enterprise operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataCenterServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="mr-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">{service.title}</h3>
                      <p className="text-gray-300 text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="w-full block text-center py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Data Center Technologies</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We work with leading data center technologies and vendors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">{tech.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <span key={itemIndex} className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Build Your Data Center?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how our data center solutions can meet your infrastructure needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DataCenterPage;