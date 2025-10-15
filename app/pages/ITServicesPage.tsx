import React from "react";
import { Helmet } from "react-helmet-async";
import { Server, Cloud, Shield, Wrench, Monitor, Database } from "lucide-react";

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: "Infrastructure Management",
      description: "Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance.",
      features: ["Server Configuration", "Network Setup", "Hardware Maintenance", "Performance Monitoring"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Migrate and manage your infrastructure in the cloud with our expert cloud services.",
      features: ["Cloud Migration", "Multi-cloud Strategy", "Cost Optimization", "Security Management"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your business from cyber threats with our comprehensive security solutions.",
      features: ["Security Audits", "Threat Detection", "Incident Response", "Compliance Management"]
    },
    {
      icon: Wrench,
      title: "System Integration",
      description: "Connect and integrate your existing systems for seamless operations.",
      features: ["API Development", "Database Integration", "Workflow Automation", "Custom Solutions"]
    },
    {
      icon: Monitor,
      title: "IT Support",
      description: "24/7 technical support and maintenance services to keep your systems running smoothly.",
      features: ["Help Desk Support", "Remote Assistance", "System Updates", "Troubleshooting"]
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Secure and efficient data storage, backup, and recovery solutions.",
      features: ["Data Backup", "Recovery Planning", "Data Security", "Compliance"]
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
          <h1 className="text-5xl font-bold text-white mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need IT Support?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you with all your IT needs.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
            Get Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;