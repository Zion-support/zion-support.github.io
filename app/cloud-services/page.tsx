import React from "react";
import { ArrowRight, TrendingUp, Zap, Globe, Clock, Shield, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CloudServices() {
  const services = [
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your applications and data to the cloud with minimal downtime.",
      features: ["Assessment & Planning", "Data Migration", "Application Modernization", "Go-Live Support"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Design and implement scalable, secure cloud infrastructure tailored to your needs.",
      features: ["Infrastructure Design", "Security Implementation", "Monitoring Setup", "Performance Optimization"]
    },
    {
      title: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud environment and data.",
      features: ["Identity Management", "Data Encryption", "Threat Detection", "Compliance Management"]
    },
    {
      title: "Multi-Cloud Strategy",
      description: "Leverage multiple cloud providers for enhanced reliability and flexibility.",
      features: ["Multi-Cloud Strategy", "Cloud Interconnect", "Disaster Recovery", "Vendor Management"]
    }
  ];

  const benefits = [
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Cost Optimization', description: 'Reduce IT costs by up to 40% with efficient cloud solutions' },
    { icon: <Zap className="w-6 h-6" />, title: 'Scalability', description: 'Scale resources instantly based on demand' },
    { icon: <Globe className="w-6 h-6" />, title: 'Global Reach', description: 'Access your applications from anywhere in the world' },
    { icon: <Clock className="w-6 h-6" />, title: '24/7 Support', description: 'Round-the-clock technical support and monitoring' }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Enterprise Cloud Solutions</title>
        <meta name="description" content="Comprehensive cloud services including migration, security, storage, and infrastructure management. Transform your business with our enterprise cloud solutions." />
        <meta name="keywords" content="cloud services, cloud migration, cloud security, cloud infrastructure, AWS, Azure, Google Cloud" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Cloud Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with comprehensive cloud solutions designed for scalability, security, and performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20"
              >
                View Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Cloud Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions tailored to meet your business needs and drive digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Cloud Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cloud computing with our expert guidance and support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-4 group-hover:bg-blue-600/30 transition-colors">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
              <p className="text-xl text-gray-300 mb-8">
                Let our cloud experts help you migrate, optimize, and secure your infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all duration-300 border border-white/20"
                >
                  View Pricing
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}