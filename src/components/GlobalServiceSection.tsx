import React from 'react';
import { Globe, Clock, Users, Shield, CheckCircle } from 'lucide-react';

export function GlobalServiceSection() {
  const globalFeatures = [
    {
      icon: <Globe className="h-8 w-8 text-zion-cyan" />,
      title: "Global Coverage",
      description: "Available in 50+ countries with local support teams"
    },
    {
      icon: <Clock className="h-8 w-8 text-zion-purple" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and emergency response"
    },
    {
      icon: <Users className="h-8 w-8 text-zion-cyan" />,
      title: "Local Experts",
      description: "Certified technicians with local market knowledge"
    },
    {
      icon: <Shield className="h-8 w-8 text-zion-purple" />,
      title: "Quality Assurance",
      description: "ISO certified processes and guaranteed service quality"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-zion-cyan" />,
      title: "SLA Compliance",
      description: "Service level agreements with guaranteed response times"
    }
  ];

  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Global IT Services Network
          </h2>
          <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
            Our worldwide network of certified IT professionals ensures consistent, 
            high-quality service delivery across all locations and time zones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {globalFeatures.map((feature, index) => (
            <div key={index} className="bg-zion-blue border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-cyan/50 transition-all duration-300">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-zion-slate-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-zion-blue/20 border border-zion-cyan/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Contact our global service team to discuss your IT needs and get 
              a customized quote for your location and requirements.
            </p>
            <button className="bg-zion-cyan text-zion-blue-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan/80 transition-colors">
              Contact Global Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}