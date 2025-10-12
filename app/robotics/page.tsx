import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Cpu, Zap, Shield, Globe, Clock, DollarSign, Star, Target, Award, Users, BarChart3, Bot, Network } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const RoboticsPage: React.FC = () => {
  const roboticsServices = [
    {
      icon: <Bot className="w-8 h-8 text-blue-500" />,
      title: 'Industrial Robotics',
      description: 'Advanced industrial robots for manufacturing and automation.',
      price: '$15,000/project',
      features: ['Automated assembly', 'Quality control', 'Material handling', 'Precision welding']
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      title: 'AI-Powered Robotics',
      description: 'Intelligent robots with machine learning capabilities.',
      price: '$25,000/project',
      features: ['Machine learning', 'Computer vision', 'Natural language processing', 'Adaptive behavior']
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Service Robotics',
      description: 'Robots for customer service and hospitality applications.',
      price: '$12,000/project',
      features: ['Customer interaction', 'Information kiosks', 'Cleaning robots', 'Security patrol']
    },
    {
      icon: <Network className="w-8 h-8 text-orange-500" />,
      title: 'Robotic Process Automation',
      description: 'Software robots for business process automation.',
      price: '$5,000/month',
      features: ['Process automation', 'Data processing', 'Workflow optimization', 'Error reduction']
    }
  ];

  const stats = [
    { number: '100+', label: 'Robots Deployed', icon: <Bot className="w-6 h-6 text-blue-400" /> },
    { number: '95%', label: 'Efficiency Increase', icon: <Zap className="w-6 h-6 text-green-400" /> },
    { number: '50%', label: 'Cost Reduction', icon: <DollarSign className="w-6 h-6 text-purple-400" /> },
    { number: '24/7', label: 'Operation', icon: <Clock className="w-6 h-6 text-orange-400" /> }
  ];

  const applications = [
    { name: 'Manufacturing', items: ['Assembly lines', 'Quality control', 'Packaging', 'Welding'] },
    { name: 'Healthcare', items: ['Surgical robots', 'Rehabilitation', 'Patient care', 'Pharmacy automation'] },
    { name: 'Logistics', items: ['Warehouse automation', 'Sorting systems', 'Delivery robots', 'Inventory management'] },
    { name: 'Agriculture', items: ['Harvesting robots', 'Planting systems', 'Crop monitoring', 'Livestock management'] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Robotics Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced robotics solutions including industrial robots, AI-powered automation, and robotic process automation. Transform your business with cutting-edge robotics technology." />
        <meta name="keywords" content="robotics solutions, industrial robots, AI robotics, robotic process automation, automation, manufacturing robots" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Bot className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Robotics
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Advanced robotics solutions powered by AI technology. Transform your business 
              with intelligent automation and robotic process optimization.
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

      {/* Robotics Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Robotics Solutions</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive robotics solutions for various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roboticsServices.map((service, index) => (
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

      {/* Applications Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Industry Applications</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Robotics solutions across various industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-4">{app.name}</h3>
                <div className="space-y-2">
                  {app.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="text-gray-300 text-sm flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
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
                Ready to Automate with Robotics?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how robotics solutions can transform your business operations.
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

export default RoboticsPage;