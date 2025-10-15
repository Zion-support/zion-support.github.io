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
      title: "Database Administration",
      description: "Professional database administration services to keep your systems running optimally.",
      price: "Starting at $1,500/month",
      features: [
        "24/7 monitoring and maintenance",
        "Performance tuning and optimization",
        "Backup and recovery management",
        "Security updates and patches",
        "Capacity planning and scaling"
      ]
    },
    {
      title: "Database Development",
      description: "Custom database development and integration services for your specific needs.",
      price: "Starting at $2,000/month",
      features: [
        "Custom database design",
        "Stored procedures and functions",
        "Data integration solutions",
        "API development",
        "Testing and quality assurance"
      ]
    },
    {
      title: "Database Consulting",
      description: "Expert consulting services to help you make informed database decisions.",
      price: "Starting at $200/hour",
      features: [
        "Database architecture review",
        "Technology selection guidance",
        "Performance analysis",
        "Security assessment",
        "Migration planning"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Database Solutions - Zion Tech Group | Expert Database Services</title>
        <meta name="description" content="Professional database solutions including design, migration, optimization, and administration services for maximum performance and reliability." />
        <meta name="keywords" content="database solutions, database administration, database design, data migration, database optimization, database security" />
        <meta property="og:title" content="Database Solutions - Zion Tech Group" />
        <meta property="og:description" content="Expert database services to optimize your data infrastructure and ensure maximum performance." />
        <link rel="canonical" href="https://ziontechgroup.com/database-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text neon-text">
              Database Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert database services to optimize your data infrastructure and ensure maximum performance, security, and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Database Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive database solutions designed to optimize your data infrastructure and support your business growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-400 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Service Packages</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the database service package that best fits your business needs and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-700 rounded-xl p-8 border border-slate-600 hover:border-blue-500 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="text-3xl font-bold text-blue-400 mb-6">{service.price}</div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-300 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Database?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our database experts help you build a robust, secure, and high-performance data infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300">
                Get Started Today
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DatabaseSolutionsPage;