import React from 'react';
import Link from 'next/link';

const UltimateAIAutomationShowcase2025 = () => {
  const automationFeatures = [
    {
      title: "Intelligent Process Automation",
      description: "AI-powered automation that handles complex business processes with human-like decision making",
      icon: "🤖",
      impact: "99.8% Efficiency"
    },
    {
      title: "Predictive Maintenance",
      description: "Automated systems that predict and prevent equipment failures before they occur",
      icon: "🔮",
      impact: "$5.2B+ Savings"
    },
    {
      title: "Smart Resource Allocation",
      description: "Dynamic allocation of resources based on real-time demand and optimization algorithms",
      icon: "📊",
      impact: "2,000% ROI"
    },
    {
      title: "Autonomous Decision Making",
      description: "AI systems that make real-time business decisions without human intervention",
      icon: "⚡",
      impact: "99.7% Accuracy"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
            Ultimate AI Automation 2025
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-pink-100 max-w-4xl mx-auto">
            Experience the future of business automation with our advanced AI systems that streamline operationsreduce costsand maximize efficiency.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {automationFeatures.map((featureindex) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-pink-100 mb-4 text-sm">
                {feature.description}
              </p>
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold text-center">
                {feature.impact}
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h3>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced AI automation solutions and achieve unprecedented efficiencysavingsand growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-2026-ultimate-breakthrough"
              className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-rose-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-rose-900 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateAIAutomationShowcase2025;