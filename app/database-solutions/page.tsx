import React from 'react';
import { Helmet } from "react-helmet-async";
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
    {
      title: "Database Consulting",
      description: "Expert guidance on database strategy, architecture, and best practices.",
      price: "Starting at $150/hour"
    },
    {
      title: "Database Administration",
      description: "24/7 database monitoring, maintenance, and optimization services.",
      price: "Starting at $2,000/month"
    },
    {
      title: "Database Development",
      description: "Custom database applications and stored procedures development.",
      price: "Starting at $1,500/month"
    },
    {
      title: "Data Migration Services",
      description: "Seamless migration from legacy databases to modern platforms.",
      price: "Starting at $5,000/project"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>Database Solutions - Zion Tech Group</title>
        <meta name="description" content="Expert database solutions including design, migration, security, and optimization services for modern businesses." />
        <meta name="keywords" content="database solutions, database design, data migration, database security, performance optimization" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Database Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive database services including design, migration, security, 
              and optimization to power your business with reliable data infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Database Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive database solutions designed to meet your specific business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>

                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect database solution package for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <div className="text-2xl font-bold text-blue-600 mb-6">
                  {service.price}
                </div>

                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your Database?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our database experts help you build a robust, secure, and high-performance 
            data infrastructure that scales with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              View Our Work
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DatabaseSolutionsPage;