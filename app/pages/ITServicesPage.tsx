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
      description: "Scalable cloud infrastructure and migration services to modernize your IT environment.",
      features: ["Cloud Migration", "Infrastructure as Code", "Auto-scaling", "Cost Optimization"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your systems and data from evolving threats.",
      features: ["Threat Detection", "Security Audits", "Compliance Management", "Incident Response"]
    },
    {
      icon: Wrench,
      title: "Technical Support",
      description: "24/7 technical support and maintenance services to keep your systems running smoothly.",
      features: ["Help Desk", "Remote Support", "On-site Assistance", "Preventive Maintenance"]
    },
    {
      icon: Monitor,
      title: "System Monitoring",
      description: "Continuous monitoring and alerting to ensure optimal system performance and availability.",
      features: ["Real-time Monitoring", "Performance Analytics", "Automated Alerts", "Capacity Planning"]
    },
    {
      icon: Database,
      title: "Database Management",
      description: "Expert database administration and optimization services for all major database systems.",
      features: ["Database Design", "Performance Tuning", "Backup & Recovery", "Data Migration"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Professional IT services by Zion Tech Group." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT services designed to keep your business running smoothly
            and securely in today's digital landscape.
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to learn more about our IT services.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;