import React from 'react';
import { CheckCircle, ArrowRight, Wifi, Database, Shield } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const FiveGIoTSolutionsPage: React.FC = () => {
  const iotServices = [
    {
      icon: <Wifi className="w-8 h-8 text-blue-500" />,
      title: '5G IoT Device Integration',
      description: 'Seamless integration of IoT devices with 5G networks for enhanced connectivity and performance.',
      features: ['Device connectivity', 'Protocol optimization', 'Network configuration', 'Performance tuning', 'Remote management'],
      pricing: 'Starting at $5,000'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'Real-time Data Processing',
      description: 'Advanced data processing platforms for real-time IoT data analysis and insights.',
      features: ['Stream processing', 'Real-time analytics', 'Data visualization', 'Alert systems', 'Performance monitoring'],
      pricing: 'Starting at $3,000/month'
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: 'Edge Computing Deployment',
      description: 'Edge computing solutions for ultra-low latency IoT applications and data processing.',
      features: ['Edge server setup', 'Distributed processing', 'Latency optimization', 'Edge AI integration', 'Content delivery'],
      pricing: 'Starting at $8,000/month'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'IoT Security Solutions',
      description: 'Comprehensive security solutions for 5G IoT networks and connected devices.',
      features: ['Device security', 'Network encryption', 'Threat detection', 'Access control', 'Compliance management'],
      pricing: 'Starting at $2,000/month'
    }
  ];

  const useCases = [
    {
      title: 'Smart Cities',
      description: 'Traffic management, environmental monitoring, and public safety systems',
      icon: '🏙️'
    },
    {
      title: 'Industrial IoT',
      description: 'Manufacturing automation, predictive maintenance, and quality control',
      icon: '🏭'
    },
    {
      title: 'Healthcare',
      description: 'Remote patient monitoring, medical device connectivity, and telemedicine',
      icon: '🏥'
    },
    {
      title: 'Agriculture',
      description: 'Precision farming, crop monitoring, and automated irrigation systems',
      icon: '🌾'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>5G IoT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive 5G IoT solutions including device integration, real-time data processing, edge computing, and security. Transform your business with connected devices." />
        <meta name="keywords" content="5G IoT solutions, IoT device integration, real-time data processing, edge computing, IoT security, connected devices" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G IoT Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IoT solutions leveraging 5G connectivity for smart cities, industrial automation, 
              and connected devices. Transform your business with next-generation IoT technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/5g-implementation" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Back to 5G Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">IoT Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete 5G IoT solutions for modern connected environments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
            {iotServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-white mb-4">{service.pricing}</div>
                <Link 
                  to="/contact"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">5G IoT Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how 5G IoT solutions can transform your industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Connect Your Devices?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get a free IoT assessment and discover how 5G can transform your connected device strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <Link 
                  to="/5g-implementation" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All 5G Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGIoTSolutionsPage;