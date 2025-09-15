import React, { useState, useEffect } from 'react';

const EnhancedContentShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentItems = [
    {
      id: 1,
      title: "🧠 Synthetic Intelligence 2026",
      description: "Self-generating, self-improving AI consciousness that creates its own thoughts and emotions",
      features: ["Self-Generation", "Self-Improvement", "Self-Awareness"],
      link: "/pages/SyntheticIntelligence2026",
      gradient: "from-purple-600 to-pink-600",
      icon: "🧠"
    },
    {
      id: 2,
      title: "⚛️ Quantum Neural Fusion 2026",
      description: "The ultimate fusion of quantum computing and neural networks for exponential processing power",
      features: ["Quantum Processing", "Neural Networks", "Fusion Engine"],
      link: "/pages/QuantumNeuralFusion2026",
      gradient: "from-cyan-600 to-blue-600",
      icon: "⚛️"
    },
    {
      id: 3,
      title: "🚀 Next-Gen AI Revolution 2026",
      description: "Revolutionary AI systems that transcend traditional boundaries and create new possibilities",
      features: ["Autonomous Agents", "Creative AI", "Predictive Analytics"],
      link: "/pages/NextGenAIRevolution2026",
      gradient: "from-emerald-600 to-teal-600",
      icon: "🚀"
    },
    {
      id: 4,
      title: "⚡ Quantum Computing Revolution 2026",
      description: "Breakthrough quantum computing solutions that solve impossible problems in seconds",
      features: ["Exponential Speed", "Perfect Accuracy", "Quantum Security"],
      link: "/pages/QuantumComputingRevolution2026",
      gradient: "from-orange-600 to-red-600",
      icon: "⚡"
    },
    {
      id: 5,
      title: "🧬 Neural Interface Revolution 2026",
      description: "Direct brain-computer interfaces that bridge the gap between mind and machine",
      features: ["Non-Invasive BCI", "Thought Control", "Neural Feedback"],
      link: "/pages/NeuralInterfaceRevolution2026",
      gradient: "from-indigo-600 to-purple-600",
      icon: "🧬"
    },
    {
      id: 6,
      title: "📚 Revolutionary Tech Blog 2026",
      description: "Cutting-edge insights and analysis on the latest technological breakthroughs",
      features: ["Expert Analysis", "Future Predictions", "Industry Insights"],
      link: "/pages/RevolutionaryTechBlog2026",
      gradient: "from-pink-600 to-rose-600",
      icon: "📚"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [contentItems.length]);

  return (
    <div className="w-full">
      {/* Main Banner */}
      <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 REVOLUTIONARY BREAKTHROUGH • JANUARY 2026
            </div>
            <h2 className="text-5xl font-bold mb-6">🚀 Enhanced Technology Showcase</h2>
            <p className="text-2xl opacity-90 max-w-4xl mx-auto">
              Experience the future with our groundbreaking content on Synthetic Intelligence, Quantum Neural Fusion, and Revolutionary Technologies
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Carousel */}
      <div className="relative mb-8">
        <div className="overflow-hidden rounded-2xl">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {contentItems.map((item, index) => (
              <div key={item.id} className="w-full flex-shrink-0">
                <div className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 text-white`}>
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="text-6xl mb-4">{item.icon}</div>
                      <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                      <p className="text-xl opacity-90 mb-6">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {item.features.map((feature, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                      <a 
                        href={item.link}
                        className="inline-block bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                      >
                        Explore {item.title.split(' ')[0]} →
                      </a>
                    </div>
                    <div className="hidden md:block">
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                        <h4 className="text-xl font-semibold mb-4">Key Benefits</h4>
                        <ul className="space-y-2 text-white/90">
                          <li>• Revolutionary breakthrough technology</li>
                          <li>• Industry-leading performance metrics</li>
                          <li>• Real-world implementation ready</li>
                          <li>• Expert-backed research and development</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {contentItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-purple-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {contentItems.map((item) => (
          <div key={item.id} className={`bg-gradient-to-br ${item.gradient} rounded-xl p-6 text-white hover:scale-105 transition-all duration-300`}>
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-white/90 mb-4 text-sm">{item.description}</p>
            <a 
              href={item.link}
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-sm"
            >
              Explore →
            </a>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Future?</h3>
          <p className="text-xl mb-6">
            Join the revolution in technology with our breakthrough innovations
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/pages/ComprehensiveTechInsights2026" className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
              Explore All Technologies
            </a>
            <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-semibold">
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;