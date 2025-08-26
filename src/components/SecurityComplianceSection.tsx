import React from 'react';

export const SecurityComplianceSection = () => {
  const securityFeatures = [
    {
      title: "SOC 2 Type II Compliance",
      description: "Certified security controls and data protection measures",
      icon: "🛡️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "GDPR & Privacy",
      description: "Full compliance with international data protection regulations",
      icon: "🔒",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "End-to-End Encryption",
      description: "256-bit encryption for data in transit and at rest",
      icon: "🔐",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "24/7 Security Monitoring",
      description: "Real-time threat detection and incident response",
      icon: "👁️",
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Penetration Testing",
      description: "Regular security assessments and vulnerability scanning",
      icon: "🧪",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Compliance Reporting",
      description: "Automated compliance monitoring and audit trails",
      icon: "📊",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Security & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Compliance</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade security measures and compliance certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-2xl">{feature.icon}</span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};