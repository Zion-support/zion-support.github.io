import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Building, Wifi, Shield, Leaf } from 'lucide-react';

const SmartCitiesPage: React.FC = () => {
  const smartCityServices = [
    {
      title: 'IoT Infrastructure Management',
      description: 'Comprehensive IoT solutions for smart city infrastructure monitoring and management.',
      icon: '🏙️',
      price: '$3,500/month',
      features: [
        'Sensor Network Deployment',
        'Real-time Data Collection',
        'Predictive Maintenance',
        'Energy Management',
        'Traffic Optimization',
        'Environmental Monitoring'
      ],
      benefits: [
        'Reduce operational costs by 40%',
        'Improve citizen services by 60%',
        'Optimize resource utilization',
        'Enhance sustainability efforts'
      ],
      marketPrice: '$7,000-15,000/month',
      category: 'IoT Solutions',
      technologies: ['IoT Sensors', 'Edge Computing', '5G Networks', 'Cloud Platforms', 'AI Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Smart Traffic Management',
      description: 'AI-powered traffic management systems that optimize flow and reduce congestion in urban areas.',
      icon: '🚦',
      price: '$2,800/month',
      features: [
        'Real-time Traffic Monitoring',
        'Adaptive Signal Control',
        'Incident Detection',
        'Route Optimization',
        'Public Transit Integration',
        'Emergency Response'
      ],
      benefits: [
        'Reduce traffic congestion by 35%',
        'Improve air quality by 25%',
        'Decrease travel time by 30%',
        'Enhance emergency response times'
      ],
      marketPrice: '$5,500-12,000/month',
      category: 'Traffic Management',
      technologies: ['Computer Vision', 'Machine Learning', 'Edge AI', 'V2X Communication', '5G'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Smart Energy Grid',
      description: 'Intelligent energy management systems for sustainable and efficient power distribution.',
      icon: '⚡',
      price: '$4,000/month',
      features: [
        'Smart Grid Monitoring',
        'Renewable Energy Integration',
        'Demand Response Systems',
        'Energy Storage Management',
        'Grid Optimization',
        'Carbon Footprint Tracking'
      ],
      benefits: [
        'Increase energy efficiency by 45%',
        'Reduce carbon emissions by 50%',
        'Lower energy costs by 30%',
        'Improve grid reliability by 80%'
      ],
      marketPrice: '$8,000-18,000/month',
      category: 'Energy Management',
      technologies: ['Smart Grid', 'Renewable Energy', 'Energy Storage', 'AI Optimization', 'Blockchain'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Smart Cities Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive smart cities solutions. IoT infrastructure, traffic management, energy grids, and urban technology for sustainable cities." />
        <meta name="keywords" content="smart cities, IoT solutions, traffic management, energy grid, urban technology, sustainable cities" />
        <link rel="canonical" href="https://ziontechgroup.com/smart-cities" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Cities</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform urban environments with intelligent technology solutions that improve efficiency, sustainability, and quality of life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/demo"
                  className="border border-green-400 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Smart City Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of smart city technologies designed to create sustainable and efficient urban environments.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {smartCityServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-green-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-sm text-green-400 bg-green-400/20 px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-gray-400 mb-4">{service.contactInfo}</p>
                    <a
                      href="/contact"
                      className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-green-600 hover:to-blue-700 transition-all duration-300"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500/20 to-blue-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join forward-thinking cities using our smart city solutions to create sustainable, efficient, and livable urban environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300"
              >
                Start Your Smart City Journey
              </a>
              <a
                href="tel:+13024640950"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SmartCitiesPage;