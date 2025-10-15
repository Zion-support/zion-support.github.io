import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Database, Server, Shield, Zap } from 'lucide-react';

const DatabaseSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design & Architecture",
      description: "Custom database solutions designed for scalability, performance, and reliability.",
      features: ["Schema Design", "Performance Optimization", "Scalability Planning", "Data Modeling"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Database Migration",
      description: "Seamless migration from legacy systems to modern database platforms.",
      features: ["Data Migration", "Zero Downtime", "Data Integrity", "Performance Testing"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Database Security",
      description: "Comprehensive security measures to protect your valuable data assets.",
      features: ["Access Control", "Encryption", "Audit Logging", "Compliance"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Advanced optimization techniques to maximize database performance.",
      features: ["Query Optimization", "Indexing Strategy", "Caching Solutions", "Monitoring"]
    }
  ];

  const services = [
    "Database Design & Architecture",
    "Data Migration Services",
    "Performance Optimization",
    "Security & Compliance",
    "Backup & Recovery Solutions",
    "24/7 Database Monitoring",
    "Cloud Database Management",
    "Data Warehousing Solutions"
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Database Solutions - Zion Tech Group</title>
        <meta name="description" content="Expert database solutions for modern businesses. Design, migration, optimization, and security services." />
        <meta name="keywords" content="database solutions, database design, data migration, database optimization, database security" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Database Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Expert database solutions to optimize performance, ensure security, and scale your data infrastructure 
            for modern business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
              View Services
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 transition-all duration-500 hover:bg-white/20 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.features.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Database Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-lg">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Database?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our database experts help you design, optimize, and secure your data infrastructure for maximum performance and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
            <button className="border-2 border-white/30 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
              Contact Experts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseSolutionsPage;