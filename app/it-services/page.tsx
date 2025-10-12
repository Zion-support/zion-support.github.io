import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Server, Shield, Cloud, Database, Code, Smartphone, ArrowRight, CheckCircle } from 'lucide-react';

export default function ITServicesPage() {
  const services = [
    {
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with zero downtime',
      icon: <Cloud className="w-8 h-8" />,
      features: ['AWS Migration', 'Azure Migration', 'Google Cloud', 'Hybrid Solutions'],
      path: '/cloud-migration'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets',
      icon: <Shield className="w-8 h-8" />,
      features: ['Security Audits', 'Threat Detection', 'Incident Response', 'Compliance'],
      path: '/cybersecurity'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment and continuous integration pipelines',
      icon: <Code className="w-8 h-8" />,
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automation'],
      path: '/devops'
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable business insights',
      icon: <Database className="w-8 h-8" />,
      features: ['Data Warehousing', 'Business Intelligence', 'Predictive Analytics', 'Reporting'],
      path: '/data-analytics'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      icon: <Smartphone className="w-8 h-8" />,
      features: ['iOS Apps', 'Android Apps', 'React Native', 'Flutter'],
      path: '/mobile-development'
    },
    {
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure design and management',
      icon: <Server className="w-8 h-8" />,
      features: ['Network Design', 'Server Management', 'Monitoring', 'Maintenance'],
      path: '/it-infrastructure'
    }
  ];

  const industries = [
    'Healthcare',
    'Finance',
    'E-commerce',
    'Manufacturing',
    'Education',
    'Government'
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, data analytics, and infrastructure management." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, data analytics, infrastructure" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive IT solutions to modernize your infrastructure, 
                enhance security, and accelerate digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Get Started
                </Link>
                <Link 
                  to="/demo" 
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Solutions
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                End-to-end IT services designed to optimize your technology infrastructure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-purple-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={service.path}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Specialized IT solutions for various industries
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Process
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                A systematic approach to delivering exceptional IT solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Discovery</h3>
                <p className="text-gray-300">
                  We analyze your current infrastructure and understand your business requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Planning</h3>
                <p className="text-gray-300">
                  We design a comprehensive solution tailored to your specific needs and goals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Implementation</h3>
                <p className="text-gray-300">
                  We execute the solution with minimal disruption to your business operations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Support</h3>
                <p className="text-gray-300">
                  We provide ongoing maintenance and support to ensure optimal performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Modernize Your IT?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let our IT experts help you build a robust, secure, and scalable technology infrastructure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                Get IT Consultation
              </Link>
              <Link 
                to="/about" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}