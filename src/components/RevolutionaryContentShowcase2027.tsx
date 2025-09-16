import React, { useState, useEffect } from 'react';

const RevolutionaryContentShowcase2027: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentItems = [
    {
      id: 1,
      title: "🚀 Ultimate Tech Breakthrough 2025",
      description: "Experience the most revolutionary technological advances reshaping our world",
      image: "🧠",
      gradient: "from-purple-600 to-pink-600",
      link: "/pages/UltimateTechBreakthrough2025",
      badge: "BREAKTHROUGH",
      features: ["Conscious AI Systems", "Quantum Consciousness", "Neural Reality Engine"]
    },
    {
      id: 2,
      title: "🌟 Innovation Showcase 2025",
      description: "Discover groundbreaking innovations reshaping industries and creating new possibilities",
      image: "⚡",
      gradient: "from-cyan-600 to-blue-600",
      link: "/pages/InnovationShowcase2025",
      badge: "INNOVATION",
      features: ["Autonomous AI Agents", "Quantum Edge Computing", "Neural Interface Platform"]
    },
    {
      id: 3,
      title: "🚀 Revolutionary Services 2025",
      description: "Experience the most advanced technology services revolutionizing industries",
      image: "🧬",
      gradient: "from-emerald-600 to-teal-600",
      link: "/pages/RevolutionaryServices2025",
      badge: "REVOLUTIONARY",
      features: ["AI Revolution Services", "Quantum Computing Solutions", "Neural Interface Technology"]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [contentItems.length]);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-2xl p-12 mb-12 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 REVOLUTIONARY CONTENT • JANUARY 2025
          </div>
          <h2 className="text-5xl font-bold mb-6">🚀 Revolutionary Content Showcase 2027</h2>
          <p className="text-2xl opacity-90 max-w-4xl mx-auto">
            Experience the future with our most advanced and revolutionary content that's reshaping the technology landscape
          </p>
        </div>

        {/* Content Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {contentItems.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold">
                            {item.badge}
                          </span>
                          <span className="text-sm opacity-75">NEW CONTENT</span>
                        </div>
                        <h3 className="text-4xl font-bold mb-4">{item.title}</h3>
                        <p className="text-xl opacity-90 mb-6">{item.description}</p>
                        <ul className="space-y-2 mb-8">
                          {item.features.map((feature, index) => (
                            <li key={index} className="flex items-center space-x-2">
                              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                              <span className="text-purple-200">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <a 
                          href={item.link}
                          className={`inline-block bg-gradient-to-r ${item.gradient} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg`}
                        >
                          Explore Content →
                        </a>
                      </div>
                      <div className="text-center">
                        <div className="text-9xl mb-4">{item.image}</div>
                        <div className="text-2xl font-bold opacity-75">Revolutionary Technology</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-purple-500' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-center mb-8">Quick Access to Revolutionary Content</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {contentItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className={`bg-gradient-to-br ${item.gradient} rounded-xl p-6 hover:scale-105 transition-all duration-300 text-center`}
              >
                <div className="text-4xl mb-3">{item.image}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-sm opacity-90">{item.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Revolution?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join thousands of forward-thinking individuals and organizations already experiencing our revolutionary content.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-xl">
              Start Exploring
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 font-semibold text-xl">
              View All Content
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentShowcase2027;