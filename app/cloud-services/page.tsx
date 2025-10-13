import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Cloud, Shield, Zap, Globe, Database, Server, CheckCircle, TrendingUp, Clock } from 'lucide-react';

export default function CloudServices() {
  const services = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with our proven migration strategies and zero-downtime approach.",
      features: ["Zero-downtime migration", "Cost optimization", "Security compliance", "Performance monitoring"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud infrastructure from threats and ensure compliance.",
      features: ["Identity management", "Data encryption", "Threat detection", "Compliance auditing"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cloud Optimization",
      description: "Optimize your cloud resources for maximum performance and cost efficiency with our advanced monitoring tools.",
      features: ["Performance tuning", "Cost analysis", "Resource scaling", "Automated optimization"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Cloud Strategy",
      description: "Implement a robust multi-cloud strategy to avoid vendor lock-in and maximize flexibility.",
      features: ["Vendor management", "Cross-cloud integration", "Disaster recovery", "Load balancing"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Cloud Database Services",
      description: "Managed database services with high availability, scalability, and security for your applications.",
      features: ["Auto-scaling", "Backup & recovery", "Performance monitoring", "Security hardening"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Complete cloud infrastructure setup and management for your business needs.",
      features: ["Infrastructure as Code", "Auto-scaling", "Monitoring", "24/7 support"]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Scalability",
      description: "Scale your resources up or down based on demand"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Reliability",
      description: "99.9% uptime guarantee with redundant systems"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Cost Efficiency",
      description: "Reduce infrastructure costs by up to 40%"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud solutions including migration, security, optimization, and infrastructure management." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cloud Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your business with our comprehensive cloud solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Our Cloud Services
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions designed to accelerate your digital transformation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose Our Cloud Services?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cloud computing with our expert solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-600 dark:text-blue-300">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Cloud Infrastructure?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let our cloud experts help you migrate, optimize, and secure your cloud environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}