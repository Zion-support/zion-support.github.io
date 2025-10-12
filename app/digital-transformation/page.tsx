import React from 'react';
import { CheckCircle, ArrowRight, Zap, Users, Globe, Smartphone } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function DigitalTransformationPage() {
  const services = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and streamline workflows for increased efficiency.',
      features: ['Workflow automation', 'Task scheduling', 'Integration APIs', 'Custom triggers'],
      pricing: 'Starting at $2,000/month'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Digital Workforce',
      description: 'Empower your team with digital tools and technologies for better collaboration.',
      features: ['Digital tools', 'Remote collaboration', 'Training programs', 'Change management'],
      pricing: 'Starting at $1,500/month'
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: 'Customer Experience',
      description: 'Enhance customer experience with digital solutions and omnichannel support.',
      features: ['Omnichannel support', 'Customer analytics', 'Personalization', 'Feedback systems'],
      pricing: 'Starting at $1,800/month'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-yellow-500" />,
      title: 'Data Strategy',
      description: 'Develop a comprehensive data strategy to drive business decisions.',
      features: ['Data governance', 'Analytics setup', 'Reporting dashboards', 'Data security'],
      pricing: 'Starting at $2,500/month'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business for the digital age with comprehensive digital transformation services." />
        <meta name="keywords" content="digital transformation, process automation, digital workforce, customer experience, data strategy" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Digital <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Transformation</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Transform your business for the digital age with comprehensive digital transformation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Our Digital Transformation Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive solutions to modernize your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
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
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Transform Your Business?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how digital transformation can accelerate your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}