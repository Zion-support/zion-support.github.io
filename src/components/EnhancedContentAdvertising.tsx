import React, { useState, useEffect } from 'react';

const EnhancedContentAdvertising: React.FC = () => {
  const [currentAd, setCurrentAd] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const advertisingContent = [
    {
      id: 1,
      title: "🚀 Revolutionary AI Systems 2026",
      subtitle: "Experience the future of artificial intelligence",
      description: "Discover synthetic intelligence, autonomous AI agents, and quantum-enhanced machine learning that's reshaping our world.",
      gradient: "from-purple-600 via-pink-600 to-red-600",
      link: "/pages/AdvancedAISystems2026",
      features: ["Synthetic Intelligence", "Autonomous Agents", "Quantum AI"],
      urgency: "Limited Time",
      discount: "50% OFF"
    },
    {
      id: 2,
      title: "⚛️ Quantum Computing Revolution",
      subtitle: "Unlock exponential processing power",
      description: "Explore quantum supremacy, quantum internet infrastructure, and unbreakable quantum cryptography standards.",
      gradient: "from-cyan-600 via-blue-600 to-indigo-600",
      link: "/pages/AdvancedQuantumComputing2026",
      features: ["Quantum Supremacy", "Quantum Internet", "Quantum Security"],
      urgency: "Exclusive Access",
      discount: "Free Trial"
    },
    {
      id: 3,
      title: "🧬 Neural Interface Technology",
      subtitle: "Bridge mind and machine",
      description: "Experience non-invasive brain-computer interfaces, neural data processing, and consciousness upload technology.",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      link: "/pages/NeuralInterfaceRevolution2026",
      features: ["Non-Invasive BCI", "Neural Processing", "Consciousness Upload"],
      urgency: "Beta Access",
      discount: "Early Bird"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % advertisingContent.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('advertising-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div id="advertising-section" className="py-16">
      {/* Main Advertising Banner */}
      <div className="container mx-auto px-4 mb-12">
        <div className={`bg-gradient-to-r ${advertisingContent[currentAd].gradient} rounded-3xl p-12 text-white relative overflow-hidden transform transition-all duration-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-bold mr-4 animate-pulse">
                    {advertisingContent[currentAd].urgency}
                  </span>
                  <span className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-full text-sm font-bold">
                    {advertisingContent[currentAd].discount}
                  </span>
                </div>
                
                <h2 className="text-5xl font-bold mb-4 leading-tight">
                  {advertisingContent[currentAd].title}
                </h2>
                <h3 className="text-2xl text-white/90 mb-6">
                  {advertisingContent[currentAd].subtitle}
                </h3>
                <p className="text-xl text-white/80 mb-8 leading-relaxed">
                  {advertisingContent[currentAd].description}
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  {advertisingContent[currentAd].features.map((feature, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={advertisingContent[currentAd].link}
                    className="inline-block bg-white text-gray-900 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-lg hover:scale-105 transform shadow-2xl"
                  >
                    Explore Now →
                  </a>
                  <a
                    href="/pages/AdvancedTechInsights2026"
                    className="inline-block border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 font-bold text-lg"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              <div className="text-center">
                <div className="text-9xl mb-6 opacity-50">
                  {advertisingContent[currentAd].title.split(' ')[0]}
                </div>
                <div className="text-2xl font-bold mb-4">2026 Technology</div>
                <div className="text-white/70">Revolutionary Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Featured Content</h3>
          <p className="text-xl text-gray-600">Explore our most popular technology insights and solutions</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {advertisingContent.map((content, index) => (
            <div
              key={content.id}
              className={`bg-gradient-to-br ${content.gradient} rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl cursor-pointer ${
                index === currentAd ? 'ring-4 ring-white/50' : ''
              }`}
              onClick={() => setCurrentAd(index)}
            >
              <div className="text-4xl mb-4">{content.title.split(' ')[0]}</div>
              <h4 className="text-xl font-bold mb-3">{content.title}</h4>
              <p className="text-white/90 mb-4 text-sm">{content.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">{content.urgency}</span>
                <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full">
                  {content.discount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technology Stats Banner */}
      <div className="bg-gradient-to-r from-gray-900 to-indigo-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Why Choose Our Technology?</h3>
            <p className="text-xl text-gray-300">Proven results and cutting-edge innovation</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-cyan-400 mb-2">10^18x</div>
              <div className="text-lg text-gray-300">Performance Increase</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-lg text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">24/7</div>
              <div className="text-lg text-gray-300">Autonomous Operation</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">100%</div>
              <div className="text-lg text-gray-300">Future-Ready</div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center">
          <h3 className="text-4xl font-bold mb-4">Stay Updated with Latest Tech</h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get exclusive access to the latest technology insights, breakthroughs, and innovations delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentAdvertising;