import React from "react";
import { Helmet } from "react-helmet-async";
import { Server, Shield, Cloud, Cog, Users, Globe } from "lucide-react";

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Server,
      title: "Infrastructure Management",
      description: "Comprehensive IT infrastructure management and optimization services.",
      features: ["Server Management", "Network Administration", "System Monitoring", "Performance Optimization"]
    },
    {
      icon: Shield,
      title: "Cybersecurity Solutions",
      description: "Advanced security measures to protect your digital assets and data.",
      features: ["Threat Detection", "Data Protection", "Security Audits", "Compliance Management"]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud solutions for modern businesses with high availability.",
      features: ["Cloud Migration", "Infrastructure as Code", "Auto-scaling", "Cost Optimization"]
    },
    {
      icon: Cog,
      title: "DevOps & Automation",
      description: "Streamline your development and deployment processes with modern DevOps practices.",
      features: ["CI/CD Pipelines", "Container Orchestration", "Monitoring & Logging", "Infrastructure Automation"]
    },
    {
      icon: Users,
      title: "IT Support & Helpdesk",
      description: "24/7 technical support and helpdesk services for your team.",
      features: ["24/7 Support", "Remote Assistance", "Issue Tracking", "Knowledge Base"]
    },
    {
      icon: Globe,
      title: "Network Solutions",
      description: "Robust network infrastructure design and implementation for optimal performance.",
      features: ["Network Design", "Wireless Solutions", "VPN Setup", "Performance Monitoring"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cybersecurity, cloud solutions, and DevOps automation." />
        <meta name="keywords" content="IT services, infrastructure management, cybersecurity, cloud solutions, DevOps, network solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services to keep your business running smoothly and securely. 
            From infrastructure management to cybersecurity, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Need IT Support?</h2>
            <p className="text-gray-300 mb-6">
              Our IT experts are ready to help you with all your technology needs.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
              Get IT Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;