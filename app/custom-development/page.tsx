import React from 'react';
import { CheckCircle, ArrowRight, Code, Globe, Smartphone, Database } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const CustomDevelopmentPage: React.FC = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: 'Web Applications',
      description: 'Custom web applications built with modern technologies and best practices.',
      features: ['Responsive Design', 'Scalable Architecture', 'API Integration', 'Performance Optimization'],
      pricing: 'Starting at $5,000'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-green-500" />,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform', 'App Store Optimization'],
      pricing: 'Starting at $8,000'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'API Development',
      description: 'RESTful APIs and microservices for seamless integration.',
      features: ['RESTful APIs', 'GraphQL', 'Microservices', 'API Documentation'],
      pricing: 'Starting at $3,000'
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: 'System Integration',
      description: 'Connect and integrate your existing systems and applications.',
      features: ['Legacy Integration', 'Third-party APIs', 'Data Migration', 'Workflow Automation'],
      pricing: 'Starting at $4,000'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <Helmet>
        <title>Custom Development - Zion Tech Group</title>
        <meta name="description" content="Custom software development services including web apps, mobile apps, APIs, and system integration." />
        <meta name="keywords" content="custom development, web applications, mobile apps, API development, system integration, software development" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Custom Development
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Tailored software solutions designed to meet your specific business requirements and goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Development Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              End-to-end custom development solutions for your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {services.map((service, index) => (
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
                <div className="text-indigo-400 font-semibold mb-4">{service.pricing}</div>
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold transition-colors"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Build Something Amazing?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let our expert developers bring your vision to life with custom software solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Project
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
    </div>
  );
};

export default CustomDevelopmentPage;