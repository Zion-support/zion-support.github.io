import React from 'react';

export const BenefitsSection = () => {
  const benefits = [
    {
      title: "Innovation First",
      description: "Cutting-edge technology solutions that keep you ahead of the competition",
      icon: "🚀"
    },
    {
      title: "Expert Team",
      description: "Certified professionals with years of industry experience",
      icon: "👥"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance whenever you need it",
      icon: "🛡️"
    },
    {
      title: "Scalable Solutions",
      description: "Flexible infrastructure that grows with your business",
      icon: "📈"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We deliver exceptional value through innovative technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">{benefit.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
