import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
      description: "Comprehensive database administration services to keep your systems running smoothly.",
      price: "Starting at $1,500/month",
      features: [
        "24/7 monitoring",
        "Backup and recovery",
        "Performance tuning",
        "Security updates",
        "Capacity planning",
        "Disaster recovery"
      ]
    },
    {
      title: "Database Development",
      description: "Custom database development solutions tailored to your specific business requirements.",
      price: "Starting at $2,000/month",
      features: [
        "Custom stored procedures",
        "Database triggers",
        "Data integration",
        "API development",
        "Reporting solutions",
        "Data warehousing"
      ]
    },
    {
      title: "Database Consulting",
      description: "Strategic database consulting to help you make informed technology decisions.",
      price: "Starting at $1,200/month",
      features: [
        "Technology assessment",
        "Architecture review",
        "Performance analysis",
        "Security audit",
        "Migration planning",
        "Best practices"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Helmet>
        <title>Database Solutions - Zion Tech Group</title>
        <meta name="description" content="Expert database solutions including design, migration, security, and performance optimization services." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Database Solutions
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Expert database solutions to optimize performance, security, and scalability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/about"
                className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Database Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive database solutions designed to meet your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end database solutions for all your data management needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <div className="text-2xl font-bold text-cyan-600 mb-6">{service.price}</div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-semibold"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Database?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our database solutions can improve performance and reliability for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-cyan-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              to="/database-solutions"
              className="border border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DatabaseSolutionsPage;