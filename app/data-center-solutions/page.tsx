import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Server, Shield, Zap, Users, BarChart3, Settings, TrendingUp, Globe, Database } from 'lucide-react';

const DataCenterSolutionsPage = () => {
  const services = [
    {
      title: "Data Center Design",
      description: "Design and plan modern, efficient data centers for optimal performance",
      icon: <Server className="w-8 h-8" />,
      benefits: ["Scalable design", "Energy efficiency", "Redundancy planning", "Future-proofing"]
    },
    {
      title: "Infrastructure Management",
      description: "Comprehensive management of your data center infrastructure",
      icon: <Settings className="w-8 h-8" />,
      benefits: ["24/7 monitoring", "Proactive maintenance", "Performance optimization", "Capacity planning"]
    },
    {
      title: "Security & Compliance",
      description: "Implement robust security measures and ensure compliance",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Physical security", "Network security", "Compliance audits", "Risk assessment"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Data Center Solutions - Zion Tech Group | Infrastructure & Management</title>
        <meta name="description" content="Comprehensive data center solutions including design, infrastructure management, and security. Optimize your data center operations." />
        <meta name="keywords" content="data center, infrastructure management, data center design, server management, data center security" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Data Center Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive data center solutions for modern businesses. Design, manage, and optimize your 
            data center infrastructure for maximum performance and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Data Center Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete data center solutions designed to meet your business requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Data Center?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you design and manage a data center that meets your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataCenterSolutionsPage;
