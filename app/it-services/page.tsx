'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Cloud, Shield, Database, Code, Smartphone, Server, Lock } from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with our expert guidance',
      features: ['AWS/Azure/GCP migration', 'Data migration', 'Application modernization', 'Cost optimization'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions and monitoring',
      features: ['Security assessment', 'Penetration testing', '24/7 monitoring', 'Incident response'],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Optimize and secure your database infrastructure for peak performance',
      features: ['Database optimization', 'Backup & recovery', 'Performance tuning', 'Security hardening'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Code,
      title: 'API Development',
      description: 'Build robust and scalable APIs that power your applications',
      features: ['RESTful APIs', 'GraphQL', 'API documentation', 'Rate limiting'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Create engaging mobile applications for iOS and Android platforms',
      features: ['Native development', 'Cross-platform apps', 'UI/UX design', 'App store deployment'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Server,
      title: 'DevOps & CI/CD',
      description: 'Streamline your development process with automated deployment pipelines',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Monitoring & logging', 'Container orchestration'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, database management, and more." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, database management, API development" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                IT Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions to modernize your infrastructure, enhance security, and drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-400 text-sm flex items-center">
                      <ArrowRight className="w-4 h-4 mr-2 text-cyan-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 bg-gradient-to-r ${service.color} text-white hover:opacity-90`}
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our experts help you modernize your technology stack and achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItServicesPage;