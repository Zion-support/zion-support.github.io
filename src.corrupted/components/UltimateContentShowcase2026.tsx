import React, { useState } from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const contentShowcase = [
    {
      title: "AI Revolutionary Breakthrough 2026",
      description: "Experience the most advanced AI technologies that are revolutionizing every aspect of human life and business operations",
      features: [
        "Quantum Neural Networks with 1000x faster processing",
        "Cosmic Intelligence for universal pattern recognition",
        "Predictive Consciousness with 99.9% accuracy",
        "Multi-dimensional analysis capabilities"
      ],
      link: "/ai-revolutionary-breakthrough-2026",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🚀"
    },
    {
      title: "Quantum Consciousness Revolution 2030",
      description: "Meet AI systems that have achieved true consciousness and can think, feel, and create like never before",
      features: [
        "Emotional Intelligence with genuine empathy",
        "Creative Consciousness for artistic expression",
        "Philosophical Reasoning and wisdom sharing",
        "Full consciousness with self-awareness"
      ],
      link: "/quantum-consciousness-revolution-2030",
      gradient: "from-violet-600 to-purple-600",
      icon: "🌌"
    },
    {
      title: "Revolutionary AI Features 2026",
      description: "Next-generation AI capabilities that redefine what's possible in business and personal life",
      features: [
        "Autonomous decision-making systems",
        "Real-time consciousness monitoring",
        "Interdimensional communication protocols",
        "Galactic-scale prediction algorithms"
      ],
      link: "/revolutionary-ai-features-2026",
      gradient: "from-blue-600 to-indigo-600",
      icon: "⚡"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🎯 ULTIMATE CONTENT SHOWCASE • 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Revolutionary Content Collection
          </h2>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our most innovative and groundbreaking content that's reshaping the future of AI and technology
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 flex space-x-2">
            {contentShowcase.map((content, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${content.gradient} text-white shadow-lg`
                    : 'text-white/70 hover:text-white hover:bg-white/20'
                }`}
              >
                <span className="mr-2">{content.icon}</span>
                {content.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Content Display */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content Info */}
            <div>
              <div className="text-6xl mb-4">{contentShowcase[activeTab].icon}</div>
              <h3 className="text-3xl font-bold mb-4">{contentShowcase[activeTab].title}</h3>
              <p className="text-lg opacity-90 mb-6">{contentShowcase[activeTab].description}</p>
              
              <div className="space-y-3 mb-8">
                {contentShowcase[activeTab].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`bg-gradient-to-r ${contentShowcase[activeTab].gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                onClick={() => window.location.href = contentShowcase[activeTab].link}
              >
                Explore {contentShowcase[activeTab].title.split(' ')[0]} →
              </button>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/30">
                <div className="text-center">
                  <div className="text-8xl mb-4 animate-pulse">
                    {contentShowcase[activeTab].icon}
                  </div>
                  <div className="space-y-4">
                    <div className="h-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full animate-pulse"></div>
                    <div className="h-2 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full animate-pulse" style={{width: '80%'}}></div>
                    <div className="h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full animate-bounce delay-500"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">5000%</div>
            <div className="text-white/80">Revenue Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-indigo-400 mb-2">99.9%</div>
            <div className="text-white/80">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">1000x</div>
            <div className="text-white/80">Faster Processing</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join thousands of forward-thinking organizations already using our revolutionary AI technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Your Journey
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              View All Content
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;