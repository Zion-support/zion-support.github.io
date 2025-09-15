import React from 'react';
import Link from 'next/link';

const QuantumAIContentShowcase2026 = () => {
  const contentItems = [
    {
      title: "Quantum AI 2026: Revolutionary Breakthrough in Business Intelligence",
      description: "Discover how quantum computing integration with AI is creating unprecedented business intelligence capabilities and instant decision-making systems.",
      type: "Technology Deep Dive",
      readingTime: "20 min read",
      impact: "1000x Faster Processing",
      url: "/quantum-ai-2026-breakthrough"
    },
    {
      title: "Quantum Machine Learning: The Future of Predictive Analytics",
      description: "Explore how quantum machine learning algorithms are revolutionizing predictive analytics and enabling real-time optimization across all business processes.",
      type: "Technical Guide",
      readingTime: "18 min read",
      impact: "99.9% Accuracy",
      url: "/quantum-ai-2026-breakthrough"
    },
    {
      title: "Quantum AI Implementation: Complete Framework for Enterprise Integration",
      description: "Master the implementation of quantum AI technologies with our comprehensive framework designed for enterprise-scale deployment and optimization.",
      type: "Implementation Guide",
      readingTime: "25 min read",
      impact: "Complete Framework",
      url: "/quantum-ai-2026-breakthrough"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Quantum AI 2026 Content
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
            Explore the revolutionary world of quantum AI and discover how 'it', 's transforming business intelligencedecision-makingand optimization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contentItems.map((itemindex) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between mb-6">
                <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                  {item.type}
                </span>
                <span className="text-blue-200 text-sm">{item.readingTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 line-clamp-2">
                {item.title}
              </h3>
              
              <p className="text-blue-100 mb-6 line-clamp-3">
                {item.description}
              </p>
              
              <div className="bg-white/20 rounded-lg p-4 mb-6">
                <div className="text-sm text-blue-200 mb-1">Key Impact</div>
                <div className="text-lg font-bold text-cyan-400">{item.impact}</div>
              </div>
              
              <Link 
                href={item.url}
                className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-black px-6 py-3 rounded-lg font-bold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300"
              >
                Explore Now
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-3xl font-bold mb-2 text-cyan-400">1000x</h3>
              <p className="text-blue-100">Faster Processing</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-3xl font-bold mb-2 text-cyan-400">99.9%</h3>
              <p className="text-blue-100">Accuracy Rate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h3 className="text-3xl font-bold mb-2 text-cyan-400">Real-time</h3>
              <p className="text-blue-100">Decision Making</p>
            </div>
          </div>
          
          <Link 
            href="/quantum-ai-2026-breakthrough"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 text-black px-12 py-4 rounded-lg font-bold text-xl hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
          >
            Explore Quantum AI 2026
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuantumAIContentShowcase2026;