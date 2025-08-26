import React from 'react';

export function FeatureHighlights() {
  const features = [
    {
      icon: "🚀",
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence and machine learning services that transform your business operations.",
      highlights: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Automated Decision Making"]
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Comprehensive cybersecurity solutions with advanced threat detection and compliance management.",
      highlights: ["Zero Trust Architecture", "SOC 2 Compliance", "Penetration Testing", "Incident Response"]
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated DevOps pipelines for modern applications.",
      highlights: ["Multi-Cloud Strategy", "Container Orchestration", "CI/CD Automation", "Infrastructure as Code"]
    },
    {
      icon: "🧠",
      title: "Quantum Computing",
      description: "Next-generation quantum computing solutions for complex problem-solving and optimization.",
      highlights: ["Quantum Algorithms", "Quantum Machine Learning", "Optimization Problems", "Research & Development"]
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
            We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="text-4xl">{feature.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                {feature.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold">24/7 Support</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <span className="text-white font-semibold">Global Reach</span>
            </div>
            <div className="w-px h-6 bg-white/20"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              <span className="text-white font-semibold">Innovation First</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}