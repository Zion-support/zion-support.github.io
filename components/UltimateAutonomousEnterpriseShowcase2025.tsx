import React from 'react';
import Link from 'next/link';

const UltimateAutonomousEnterpriseShowcase2025 = () => {
  const features = [
    {
      title: "Autonomous Decision Making",
      description: "AI systems that make real-time business decisions without human intervention",
      icon: "🤖",
      impact: "99.8% Accuracy"
    },
    {
      title: "Self-Optimizing Operations",
      description: "Systems that continuously optimize themselves for maximum efficiency",
      icon: "⚡",
      impact: "2,000% ROI"
    },
    {
      title: "Predictive Maintenance",
      description: "AI that predicts and prevents equipment failures before they occur",
      icon: "🔮",
      impact: "$5.2B+ Savings"
    },
    {
      title: "Intelligent Resource Allocation",
      description: "Dynamic allocation of resources based on real-time demand and optimization",
      icon: "📊",
      impact: "99.7% Efficiency"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate Autonomous Enterprise 2025
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-4xl mx-auto">
            Experience the future of business with fully autonomous AI systems that manageoptimizeand transform your enterprise operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((featureindex) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-purple-100 mb-4 text-sm">
                {feature.description}
              </p>
              <div className="bg-gradient-to-r from-cyan-500 to-pink-500 text-black px-3 py-1 rounded-full text-sm font-bold text-center">
                {feature.impact}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h3>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join the autonomous enterprise revolution and achieve unprecedented efficiencysavingsand growth with our AI-powered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-2026-ultimate-breakthrough"
              className="bg-gradient-to-r from-cyan-500 to-pink-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-cyan-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAutonomousEnterpriseShowcase2025;