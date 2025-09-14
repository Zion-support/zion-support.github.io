import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateTrendsShowcase = () => {
  const [activeTrend, setActiveTrend] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTrend((prev) => (prev + 1) % trends.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const trends = [
    {
      title: "Neural Superintelligence Breakthrough",
      description: "Revolutionary AI systems achieving human-level consciousness and beyond",
      impact: "2,400% ROI",
      icon: "🧠",
      color: "from-purple-600 to-indigo-600",
      features: ["Consciousness AI", "Neural Networks", "Cognitive Computing"]
    },
    {
      title: "Quantum-Neural Fusion",
      description: "Merging quantum computing with neural networks for unprecedented processing power",
      impact: "5,000% ROI",
      icon: "⚛️",
      color: "from-blue-600 to-cyan-600",
      features: ["Quantum AI", "Neural Processing", "Advanced Computing"]
    },
    {
      title: "Autonomous Business Ecosystems",
      description: "Self-managing business systems that operate independently with minimal human intervention",
      impact: "8,000% ROI",
      icon: "🤖",
      color: "from-green-600 to-emerald-600",
      features: ["Autonomous Operations", "Self-Healing Systems", "Intelligent Automation"]
    },
    {
      title: "Synthetic Intelligence Revolution",
      description: "AI systems that can create, modify, and improve themselves autonomously",
      impact: "10,000% ROI",
      icon: "🔬",
      color: "from-orange-600 to-red-600",
      features: ["Self-Improving AI", "Synthetic Intelligence", "Evolutionary Computing"]
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🚀 2025 AI TRENDS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Ultimate AI Trends Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the revolutionary AI technologies that are transforming businesses worldwide with unprecedented ROI results.
          </p>
        </div>

        {/* Interactive Trends Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Trend Cards */}
          <div className="space-y-6">
            {trends.map((trend, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                  activeTrend === index
                    ? `bg-gradient-to-r ${trend.color} text-white shadow-2xl scale-105`
                    : 'bg-white shadow-lg hover:shadow-xl'
                }`}
                onClick={() => setActiveTrend(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{trend.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{trend.title}</h3>
                    <p className={`text-sm ${activeTrend === index ? 'text-white/90' : 'text-gray-600'}`}>
                      {trend.description}
                    </p>
                    <div className={`mt-2 text-sm font-semibold ${
                      activeTrend === index ? 'text-white' : 'text-green-600'
                    }`}>
                      {trend.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Active Trend Details */}
          <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className={`bg-gradient-to-br ${trends[activeTrend].color} text-white p-8 rounded-3xl shadow-2xl`}>
              <div className="text-6xl mb-6">{trends[activeTrend].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{trends[activeTrend].title}</h3>
              <p className="text-xl mb-6 text-white/90">{trends[activeTrend].description}</p>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6">
                <div className="text-4xl font-bold mb-2">{trends[activeTrend].impact}</div>
                <div className="text-white/80">Average ROI Increase</div>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                {trends[activeTrend].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/ai-trends-2025"
                  className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore This Trend
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">50,000+</div>
            <div className="text-gray-600">Businesses Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">2,400%</div>
            <div className="text-gray-600">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">AI Support</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-6 text-white/90">
              Join thousands of businesses already experiencing unprecedented growth with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025UltimateTrendsShowcase;