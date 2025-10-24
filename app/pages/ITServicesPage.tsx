import React from 'react';
import { Helmet } from "react-helmet-async";
import { Server, Cloud, Shield, Wrench, Monitor, Database } from "lucide-react";

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: "Infrastructure Management",
      description: "Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance.",
      features: [
        "Server Configuration",
        "Network Setup",
        "Hardware Maintenance",
        "Performance Monitoring"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Migrate and manage your infrastructure in the cloud with our expert cloud services.",
      features: [
        "Cloud Migration",
        "Multi-cloud Strategy",
        "Cost Optimization",
        "Security Management"
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your business from cyber threats with our comprehensive security solutions.",
      features: [
        "Security Audits",
        "Threat Detection",
        "Incident Response",
        "Compliance Management"
      ]
    },
    {
      icon: Wrench,
      title: "System Integration",
      description: "Connect and integrate your existing systems for seamless operations.",
      features: [
        "API Development",
        "Database Integration",
        "Workflow Automation",
        "Custom Solutions"
      ]
    },
    {
      icon: Monitor,
      title: "IT Support",
      description: "Round-the-clock technical support to keep your systems running smoothly.",
      features: [
        "24/7 Help Desk",
        "Remote Support",
        "System Maintenance",
        "User Training"
      ]
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Secure and efficient data storage, backup, and recovery solutions.",
      features: [
        "Data Backup",
        "Disaster Recovery",
        "Data Migration",
        "Compliance"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and system integration." />
        <meta name="keywords" content="IT services, infrastructure management, cloud solutions, cybersecurity, system integration, IT support" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely 
            with expert support and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 border border-blue-600 text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="text-blue-400 mb-4">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Our IT Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Secure & Reliable
              </h3>
              <p className="text-gray-300">
                Enterprise-grade security measures and 99.9% uptime guarantee for your peace of mind.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                24/7 Support
              </h3>
              <p className="text-gray-300">
                Round-the-clock technical support to keep your systems running smoothly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Custom Solutions
              </h3>
              <p className="text-gray-300">
                Tailored IT solutions designed specifically for your business needs.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our IT experts help you build a robust, secure, and efficient technology foundation.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;