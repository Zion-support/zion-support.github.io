import React from 'react';

export const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "AI-Powered E-commerce Platform",
      company: "TechCorp Inc.",
      description: "Implemented machine learning algorithms that increased conversion rates by 35% and reduced cart abandonment by 40%.",
      results: ["35% increase in conversion", "40% reduction in cart abandonment", "25% improvement in customer satisfaction"],
      icon: "🛒",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cloud Migration & Optimization",
      company: "Global Solutions Ltd.",
      description: "Successfully migrated legacy systems to cloud infrastructure, reducing operational costs by 45% and improving performance by 60%.",
      results: ["45% cost reduction", "60% performance improvement", "99.9% uptime achieved"],
      icon: "☁️",
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Cybersecurity Implementation",
      company: "SecureBank Financial",
      description: "Deployed comprehensive security measures that prevented 99.9% of cyber threats and ensured compliance with industry regulations.",
      results: ["99.9% threat prevention", "100% compliance achieved", "Zero security breaches"],
      icon: "🛡️",
      color: "from-red-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real results from real clients who transformed their businesses with our solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${study.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-4xl">{study.icon}</span>
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30">
                  {study.company}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                {study.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-6">
                {study.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Results:</h4>
                {study.results.map((result, idx) => (
                  <div key={idx} className="flex items-center text-gray-300 text-sm">
                    <span className="text-cyan-400 mr-2">✓</span>
                    {result}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};