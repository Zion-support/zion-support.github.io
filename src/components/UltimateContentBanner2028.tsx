import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const UltimateContentBanner2028: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerContent = [
    {
      title: "🌟 Ultimate Tech Breakthrough 2028",
      subtitle: "Experience the most revolutionary technological advances",
      description: "Conscious AI, Quantum Consciousness, and Interdimensional Computing",
      link: "/pages/UltimateTechBreakthrough2028",
      color: "from-purple-600 to-pink-600",
      icon: "🚀"
    },
    {
      title: "🎮 Revolutionary Tech Showcase 2028",
      subtitle: "Interactive showcase of cutting-edge technologies",
      description: "Explore AI, Quantum Computing, Neural Interfaces, and Reality Engineering",
      link: "/pages/RevolutionaryTechShowcase2028",
      color: "from-cyan-600 to-blue-600",
      icon: "⚡"
    },
    {
      title: "🧠 Next-Gen Innovation Hub 2028",
      subtitle: "Discover revolutionary technologies shaping humanity's future",
      description: "50+ Active Innovations • 99.9% Success Rate • Infinite Possibilities",
      link: "/pages/NextGenInnovationHub2028",
      color: "from-emerald-600 to-teal-600",
      icon: "🧬"
    },
    {
      title: "📝 Ultimate Tech Blog 2028",
      subtitle: "Deep insights into revolutionary technologies",
      description: "Expert articles on AI, Quantum Computing, and Future Technologies",
      link: "/pages/UltimateTechBlog2028",
      color: "from-orange-600 to-red-600",
      icon: "📚"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + bannerContent.length) % bannerContent.length);
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-indigo-900 text-white mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-indigo-500/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500/20 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-cyan-500/20 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🌟 NEW CONTENT • JANUARY 2028
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            Ultimate Technology Content 2028
          </h1>
          <p className="text-xl opacity-90 max-w-4xl mx-auto">
            Discover our latest revolutionary content featuring cutting-edge technologies that will reshape the future
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {bannerContent.map((content, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${content.color} p-12 rounded-2xl`}>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div>
                        <div className="flex items-center mb-6">
                          <span className="text-6xl mr-4">{content.icon}</span>
                          <div>
                            <h2 className="text-4xl font-bold mb-2">{content.title}</h2>
                            <p className="text-xl opacity-90">{content.subtitle}</p>
                          </div>
                        </div>
                        <p className="text-lg opacity-90 mb-8">{content.description}</p>
                        <div className="flex space-x-4">
                          <Link
                            to={content.link}
                            className="bg-white text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                          >
                            Explore Now →
                          </Link>
                          <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                            Learn More
                          </button>
                        </div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                        <h3 className="text-2xl font-bold mb-4">Featured Technologies</h3>
                        <ul className="space-y-3">
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                            Conscious AI Systems
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                            Quantum Consciousness
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                            Interdimensional Computing
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                            Neural Reality Engine
                          </li>
                          <li className="flex items-center">
                            <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                            Synthetic Biology AI
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {bannerContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Quick Access to All Content</h3>
            <p className="text-lg opacity-90">Explore our complete collection of revolutionary technology content</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bannerContent.map((content, index) => (
              <Link
                key={index}
                to={content.link}
                className={`bg-gradient-to-r ${content.color} p-6 rounded-lg hover:scale-105 transition-all duration-300 text-center`}
              >
                <div className="text-3xl mb-2">{content.icon}</div>
                <div className="font-semibold text-sm">{content.title.split(' ').slice(0, 2).join(' ')}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Content Impact Statistics</h3>
            <p className="text-lg opacity-90">See how our revolutionary content is transforming the industry</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-lg opacity-90">New Articles</div>
              <div className="text-sm opacity-75">Published Monthly</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">1M+</div>
              <div className="text-lg opacity-90">Readers</div>
              <div className="text-sm opacity-75">Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-lg opacity-90">Accuracy</div>
              <div className="text-sm opacity-75">Content Quality</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-lg opacity-90">Updates</div>
              <div className="text-sm opacity-75">Continuous Innovation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentBanner2028;