import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentPages = [
    {
      title: "Revolutionary Tech Solutions 2026",
      description: "Discover groundbreaking technology solutions that are reshaping industries with AI consciousness, quantum-neural fusion, and neural reality interfaces.",
      image: "🧠",
      gradient: "from-purple-600 to-cyan-600",
      link: "/pages/RevolutionaryTechSolutions2026",
      features: ["AI Consciousness", "Quantum-Neural Fusion", "Neural Reality Interface", "Interdimensional Computing"]
    },
    {
      title: "Advanced Business Intelligence 2026",
      description: "Transform your business with AI-powered business intelligence solutions featuring real-time analytics, predictive insights, and automated decision making.",
      image: "📊",
      gradient: "from-blue-600 to-purple-600",
      link: "/pages/AdvancedBusinessIntelligence2026",
      features: ["Real-time Analytics", "Predictive Intelligence", "Automated Insights", "Natural Language Query"]
    },
    {
      title: "Next-Gen Cybersecurity 2026",
      description: "Protect your business with next-generation cybersecurity solutions powered by AI, quantum encryption, and advanced threat detection systems.",
      image: "🛡️",
      gradient: "from-red-600 to-orange-600",
      link: "/pages/NextGenCybersecurity2026",
      features: ["AI Threat Detection", "Quantum Encryption", "Zero Trust Architecture", "Advanced Endpoint Protection"]
    },
    {
      title: "Ultimate Tech Breakthrough 2026",
      description: "Experience the most advanced technology breakthroughs featuring synthetic intelligence, quantum consciousness, and omniversal computing.",
      image: "🚀",
      gradient: "from-green-600 to-teal-600",
      link: "/pages/UltimateTechBreakthrough2026",
      features: ["Synthetic Intelligence", "Quantum Consciousness", "Omniversal Computing", "Reality Engineering"]
    },
    {
      title: "Next-Gen Innovation Hub 2026",
      description: "Explore our comprehensive innovation hub featuring cutting-edge research, development labs, and breakthrough technology demonstrations.",
      image: "🔬",
      gradient: "from-indigo-600 to-purple-600",
      link: "/pages/NextGenInnovationHub2026",
      features: ["Research Labs", "Tech Demonstrations", "Innovation Workshops", "Breakthrough Showcases"]
    },
    {
      title: "Comprehensive Tech Blog 2026",
      description: "Stay updated with the latest technology insights, trends, and breakthroughs through our comprehensive tech blog and analysis platform.",
      image: "📚",
      gradient: "from-pink-600 to-rose-600",
      link: "/pages/ComprehensiveTechBlog2026",
      features: ["Tech Insights", "Trend Analysis", "Expert Opinions", "Industry Reports"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentPages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentPages.length]);

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-full text-lg font-semibold mb-6">
            🌟 ULTIMATE CONTENT SHOWCASE 2026
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Revolutionary Technology Content
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Experience the Future
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Discover our comprehensive collection of cutting-edge technology content, 
            featuring the latest innovations, insights, and solutions that are shaping the future.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentPages.map((page, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${page.gradient} p-12 rounded-3xl relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="relative z-10">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="text-8xl mb-6">{page.image}</div>
                          <h3 className="text-4xl font-bold text-white mb-6">{page.title}</h3>
                          <p className="text-xl text-white/90 mb-8 leading-relaxed">{page.description}</p>
                          <div className="grid grid-cols-2 gap-4 mb-8">
                            {page.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
                                <div className="text-white font-semibold">{feature}</div>
                              </div>
                            ))}
                          </div>
                          <a 
                            href={page.link}
                            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg"
                          >
                            Explore Now →
                          </a>
                        </div>
                        <div className="hidden lg:block">
                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h4 className="text-2xl font-bold text-white mb-6">Key Highlights</h4>
                            <ul className="space-y-4">
                              {page.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center space-x-3">
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                  <span className="text-white/90">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {contentPages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contentPages.map((page, index) => (
            <div key={index} className="group">
              <div className={`bg-gradient-to-br ${page.gradient} rounded-2xl p-8 h-full hover:scale-105 transition-all duration-300 cursor-pointer`}>
                <div className="text-5xl mb-4">{page.image}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">
                  {page.title}
                </h3>
                <p className="text-white/90 mb-6 leading-relaxed">{page.description}</p>
                <div className="space-y-2 mb-6">
                  {page.features.slice(0, 3).map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <a 
                  href={page.link}
                  className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Features */}
        <div className="bg-gradient-to-r from-purple-900/50 to-cyan-900/50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Interactive Technology Experience</h3>
            <p className="text-xl text-gray-300">Engage with our content through immersive interactive features</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🎮</div>
              <h4 className="text-2xl font-bold text-white mb-4">Interactive Demos</h4>
              <p className="text-gray-300 mb-6">Experience our technology through hands-on interactive demonstrations</p>
              <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold">
                Try Demo
              </button>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">🎥</div>
              <h4 className="text-2xl font-bold text-white mb-4">Video Showcases</h4>
              <p className="text-gray-300 mb-6">Watch detailed video demonstrations of our revolutionary technologies</p>
              <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold">
                Watch Videos
              </button>
            </div>

            <div className="text-center">
              <div className="text-6xl mb-4">💬</div>
              <h4 className="text-2xl font-bold text-white mb-4">Live Chat</h4>
              <p className="text-gray-300 mb-6">Get instant answers to your questions about our technology solutions</p>
              <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/30 transition-all duration-300 font-semibold">
                Start Chat
              </button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Ready to Explore the Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Dive deep into our revolutionary technology content and discover how we're 
            shaping the future of business and innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Explore All Content
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-lg">
              Get Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;