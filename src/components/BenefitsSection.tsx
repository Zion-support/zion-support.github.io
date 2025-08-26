import React from 'react';

export function BenefitsSection() {
  const benefits = [
    {
      icon: "⚡",
      title: "Rapid Deployment",
      description: "Get your solutions up and running in days, not months, with our streamlined implementation process.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level security standards with SOC 2 compliance and advanced threat protection for your peace of mind.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "24/7 support and services available worldwide, ensuring your business never stops innovating.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🧠",
      title: "AI-First Approach",
      description: "Leverage cutting-edge artificial intelligence to automate processes and gain competitive advantages.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: "💰",
      title: "Cost Optimization",
      description: "Reduce operational costs by up to 40% while improving efficiency and performance across your organization.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "🚀",
      title: "Future-Ready",
      description: "Stay ahead of the curve with emerging technologies like quantum computing and blockchain solutions.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We don't just provide technology solutions – we deliver transformative experiences that drive real business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-full flex items-center justify-center text-4xl mx-auto mb-6`}>
                {benefit.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold">500+ Successful Projects</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <span className="text-white font-semibold">99.9% Client Satisfaction</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              <span className="text-white font-semibold">24/7 Expert Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}