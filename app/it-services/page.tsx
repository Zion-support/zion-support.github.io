import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Code, Cloud, Shield, Database, ArrowRight, CheckCircle, Users, Award } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Efficient database design, optimization, and maintenance services.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const benefits = [
    '24/7 Technical Support',
    'Scalable Solutions',
    'Security-First Approach',
    'Cost-Effective Solutions',
    'Expert Team',
    'Proven Track Record'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including web development, cloud infrastructure, cybersecurity, and database management." />
        <meta name="keywords" content="it services, web development, cloud infrastructure, cybersecurity, database management" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions to help your business thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
            >
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Why Choose Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">IT Services</span>?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our IT services can help your business grow and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
            >
              Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
