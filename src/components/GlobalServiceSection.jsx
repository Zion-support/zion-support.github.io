import React from 'react';
import { Globe, Clock, Users, Shield, Zap, CheckCircle } from 'lucide-react';

export const GlobalServiceSection = () => {
  const globalServices = [
    {
      icon: Globe,
      title: "Global Coverage",
      description: "24/7 support across multiple time zones and regions worldwide",
      features: ["Multi-language support", "Local compliance expertise", "Regional data centers"]
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock monitoring and support for critical systems",
      features: ["Always-on monitoring", "Instant alert response", "Continuous maintenance"]
    },
    {
      icon: Users,
      title: "Expert Teams",
      description: "Certified professionals with deep industry knowledge",
      features: ["Certified technicians", "Industry specialists", "Continuous training"]
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security protocols and compliance standards",
      features: ["SOC 2 compliance", "Data encryption", "Access controls"]
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Quick deployment and resolution of critical issues",
      features: ["Emergency response", "Remote diagnostics", "On-site dispatch"]
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Rigorous testing and validation of all services",
      features: ["Performance testing", "Security audits", "Compliance verification"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Global Service Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our global network ensures consistent, high-quality IT services wherever your business operates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {globalServices.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                  <service.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience Global Service Excellence?
            </h3>
            <p className="text-gray-300 mb-6">
              Join organizations worldwide that trust Zion Tech Group for their global IT service needs.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};