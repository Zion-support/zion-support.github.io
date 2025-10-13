import React from "react";
import { ArrowRight, CheckCircle, Cloud, Shield, Code, Database, Monitor, Zap } from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";

const ItServicesPage = () => {
  const services = [
    {
      title: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions with automated scaling, backup, disaster recovery, and multi-cloud support for enterprise-grade reliability.",
      icon: <Cloud className="w-8 h-8" />,
      features: ["Multi-cloud architecture", "Automated scaling", "Disaster recovery", "Cost optimization"]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Advanced security measures including threat detection, vulnerability assessment, compliance management, and incident response.",
      icon: <Shield className="w-8 h-8" />,
      features: ["Threat detection", "Vulnerability assessment", "Compliance management", "Incident response"]
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions built with modern technologies, scalable architectures, and best practices for optimal performance.",
      icon: <Code className="w-8 h-8" />,
      features: ["Custom applications", "API development", "Microservices", "Legacy modernization"]
    },
    {
      title: "Database Management",
      description: "Comprehensive database services including design, optimization, migration, backup, and performance tuning for all major database systems.",
      icon: <Database className="w-8 h-8" />,
      features: ["Database design", "Performance tuning", "Migration services", "Backup & recovery"]
    },
    {
      title: "IT Support & Maintenance",
      description: "Provide ongoing monitoring, maintenance, and support to ensure optimal performance and security.",
      icon: <Monitor className="w-8 h-8" />,
      features: ["24/7 monitoring", "Proactive maintenance", "Technical support", "Performance optimization"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "24/7", label: "Support Available" },
    { number: "50+", label: "Expert Engineers" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="IT Services - Zion Tech Group | Comprehensive Technology Solutions"
        description="Professional IT services including cloud infrastructure, cybersecurity, custom development, and database management for modern businesses."
        keywords="IT services, cloud infrastructure, cybersecurity, custom development, database management"
        canonical="/it-services"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive IT Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide end-to-end IT solutions to help your business thrive in the digital age with cutting-edge technology and expert support.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-8 text-center border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert team help you build a robust, scalable, and secure IT infrastructure that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 group">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItServicesPage;
