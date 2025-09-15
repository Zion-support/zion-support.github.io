import React, { useState, useEffect } from 'react';

const AdvancedTechInsights2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai');
  const [isLoading, setIsLoading] = useState(false);

  const techInsights = {
    ai: {
      title: "Advanced AI Systems 2026",
      icon: "🤖",
      gradient: "from-purple-600 to-pink-600",
      insights: [
        {
          title: "Synthetic Intelligence Revolution",
          description: "Beyond traditional AI, synthetic intelligence represents a new paradigm where artificial systems develop genuine consciousness and self-awareness.",
          impact: "Transformative",
          timeline: "2026-2028"
        },
        {
          title: "Autonomous AI Agents",
          description: "Self-managing AI systems that operate independently, make complex decisions, and continuously evolve without human intervention.",
          impact: "High",
          timeline: "2026-2027"
        },
        {
          title: "Quantum-Enhanced Machine Learning",
          description: "Combining quantum computing with machine learning to solve previously intractable problems and achieve exponential performance gains.",
          impact: "Revolutionary",
          timeline: "2026-2029"
        }
      ]
    },
    quantum: {
      title: "Quantum Computing Breakthroughs",
      icon: "⚛️",
      gradient: "from-cyan-600 to-blue-600",
      insights: [
        {
          title: "Quantum Supremacy Achieved",
          description: "Practical quantum computers now outperform classical systems in specific applications, marking a new era of computing.",
          impact: "Revolutionary",
          timeline: "2026"
        },
        {
          title: "Quantum Internet Infrastructure",
          description: "Global quantum communication networks enabling ultra-secure, instantaneous data transmission across continents.",
          impact: "Transformative",
          timeline: "2026-2027"
        },
        {
          title: "Quantum Cryptography Standards",
          description: "New cryptographic protocols that are theoretically unbreakable, ensuring data security in the quantum age.",
          impact: "High",
          timeline: "2026-2028"
        }
      ]
    },
    neural: {
      title: "Neural Interface Technology",
      icon: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      insights: [
        {
          title: "Non-Invasive Brain-Computer Interfaces",
          description: "Advanced neural interfaces that allow direct thought control of devices without surgical implantation.",
          impact: "Revolutionary",
          timeline: "2026-2027"
        },
        {
          title: "Neural Data Processing",
          description: "Real-time analysis of neural signals to understand and predict human behavior and cognitive states.",
          impact: "High",
          timeline: "2026-2028"
        },
        {
          title: "Consciousness Upload Technology",
          description: "Pioneering research into transferring human consciousness to digital substrates for preservation and enhancement.",
          impact: "Transformative",
          timeline: "2026-2030"
        }
      ]
    }
  };

  const handleTabChange = (tab: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 ADVANCED TECH INSIGHTS • JANUARY 2026
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Revolutionary Technology Insights
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore the most advanced technological breakthroughs that are reshaping our world in 2026. 
              From synthetic intelligence to quantum computing and neural interfaces.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-2xl shadow-2xl p-2 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {Object.entries(techInsights).map(([key, tech]) => (
              <button
                key={key}
                onClick={() => handleTabChange(key)}
                className={`flex items-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${tech.gradient} text-white shadow-lg transform scale-105`
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <span className="text-2xl mr-3">{tech.icon}</span>
                {tech.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 mb-16">
        {isLoading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading insights...</p>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {techInsights[activeTab as keyof typeof techInsights].title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the latest breakthroughs and their potential impact on society and business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techInsights[activeTab as keyof typeof techInsights].insights.map((insight, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${techInsights[activeTab as keyof typeof techInsights].gradient} rounded-xl flex items-center justify-center text-white text-2xl`}>
                      {techInsights[activeTab as keyof typeof techInsights].icon}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      insight.impact === 'Revolutionary' 
                        ? 'bg-red-100 text-red-700' 
                        : insight.impact === 'Transformative'
                        ? 'bg-orange-100 text-orange-700'
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {insight.impact}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{insight.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{insight.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Timeline: {insight.timeline}</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Active Research
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Technology Impact Stats */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Technology Impact Metrics</h2>
            <p className="text-xl opacity-90">Quantifying the revolutionary changes happening in 2026</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10^18x</div>
              <div className="text-lg opacity-90">Quantum Speed Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-lg opacity-90">Neural Interface Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">1000x</div>
              <div className="text-lg opacity-90">AI Learning Acceleration</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-lg opacity-90">Autonomous Operation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-gray-900 to-indigo-900 rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join us in discovering and implementing these revolutionary technologies that are reshaping our world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/pages/AdvancedTechSolutions2026" 
              className="inline-block bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105 transform"
            >
              Explore Solutions →
            </a>
            <a 
              href="/pages/InnovationShowcase2026" 
              className="inline-block border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              View Innovation Showcase
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedTechInsights2026;