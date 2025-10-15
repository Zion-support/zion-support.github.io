import React from "react";
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
      title: "Technical Support",
      description: "24/7 technical support and maintenance services to keep your systems running smoothly.",
      features: [
        "Help Desk Support",
        "Remote Troubleshooting",
        "System Updates",
        "Preventive Maintenance"
      ]
    },
    {
      icon: Monitor,
      title: "Network Solutions",
      description: "Design and implement robust network infrastructure for optimal connectivity and security.",
      features: [
        "Network Design",
        "Wireless Solutions",
        "VPN Setup",
        "Bandwidth Management"
      ]
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Secure and efficient data storage, backup, and recovery solutions for your business.",
      features: [
        "Data Backup",
        "Recovery Planning",
        "Data Migration",
        "Storage Optimization"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and technical support." />
        <meta name="keywords" content="IT services, infrastructure management, cloud solutions, cybersecurity, technical support" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            IT Services & Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive IT services designed to keep your business running smoothly and securely.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl p-12 border border-white/20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Need Reliable IT Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our IT experts help you maintain and optimize your technology infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 font-semibold">
              Get Started Today
            </button>
            <button className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;
