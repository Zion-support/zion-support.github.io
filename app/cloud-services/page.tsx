'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Cloud, Shield, Zap, Globe, CheckCircle } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const features = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure with zero downtime'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security and compliance for all cloud services'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized cloud solutions for maximum performance and scalability'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const services = [
    {
      title: 'Infrastructure as a Service (IaaS)',
      description: 'Scalable cloud infrastructure tailored to your business needs',
      features: ['Virtual Machines', 'Storage Solutions', 'Network Configuration', 'Load Balancing']
    },
    {
      title: 'Platform as a Service (PaaS)',
      description: 'Complete development and deployment platforms in the cloud',
      features: ['Application Hosting', 'Database Management', 'Development Tools', 'API Management']
    },
    {
      title: 'Software as a Service (SaaS)',
      description: 'Ready-to-use cloud applications for immediate deployment',
      features: ['Business Applications', 'Collaboration Tools', 'Analytics Platforms', 'CRM Systems']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Services | Zion Tech Group</title>
        <meta name="description" content="Professional cloud services by Zion Tech Group. Advanced cloud solutions for your business." />
        <meta name="keywords" content="cloud services, cloud migration, IaaS, PaaS, SaaS, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Cloud
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced cloud solutions. 
              Powered by cutting-edge technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Cloud Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our cloud solutions for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Cloud Service Offerings
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cloud solutions designed to meet your specific business requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your cloud service requirements and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudServicesPage;