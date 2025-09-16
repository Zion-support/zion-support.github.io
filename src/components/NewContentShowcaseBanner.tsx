import React, { useState, useEffect } from 'react';

const NewContentShowcaseBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contentSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const contentSlides = [
    {
      id: 'ai-future',
      title: 'AI Future Innovation 2025',
      subtitle: 'Revolutionary AI Technology',
      description: 'Experience the next generation of artificial intelligence that\'s reshaping industries and creating new possibilities.',
      link: '/pages/AIFutureInnovation2025',
      gradient: 'from-purple-600 to-pink-600',
      icon: '🤖',
      features: ['Advanced Neural Architecture', 'Real-time Learning', 'Predictive Analytics']
    },
    {
      id: 'quantum-leap',
      title: 'Quantum Leap Technology 2025',
      subtitle: 'Quantum Computing Revolution',
      description: 'Harness the power of quantum mechanics for unprecedented computational capabilities and unbreakable security.',
      link: '/pages/QuantumLeapTechnology2025',
      gradient: 'from-cyan-600 to-blue-600',
      icon: '⚡',
      features: ['Quantum Computing', 'Quantum AI', 'Quantum Security']
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation Hub 2025',
      subtitle: 'Complete Business Transformation',
      description: 'Accelerate your digital transformation journey with comprehensive solutions and proven methodologies.',
      link: '/pages/DigitalTransformationHub2025',
      gradient: 'from-indigo-600 to-purple-600',
      icon: '🔄',
      features: ['Strategic Planning', 'Implementation', 'Continuous Optimization']
    }
  ];

  const quickLinks = [
    { title: 'AI Innovation', link: '/pages/AIFutureInnovation2025', icon: '🤖', color: 'purple' },
    { title: 'Quantum Computing', link: '/pages/QuantumLeapTechnology2025', icon: '⚡', color: 'cyan' },
    { title: 'Digital Transformation', link: '/pages/DigitalTransformationHub2025', icon: '🔄', color: 'indigo' },
    { title: 'Advanced Solutions', link: '/pages/AdvancedTechSolutions2025', icon: '🚀', color: 'blue' }
  ];

  return (
    <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {/* Main Content Banner */}
      <div className="relative overflow-hidden rounded-2xl mb-8">
        <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 text-white p-8 md:p-12">
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          
          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-4 animate-pulse">
                🚀 NEW CONTENT LAUNCH • JANUARY 2025
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionary Technology Content
              </h2>
              <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto">
                Discover our latest breakthrough content featuring cutting-edge AI, Quantum Computing, and Digital Transformation insights
              </p>
            </div>

            {/* Content Slides */}
            <div className="relative mb-8">
              <div className="overflow-hidden rounded-xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {contentSlides.map((slide) => (
                    <div key={slide.id} className="w-full flex-shrink-0">
                      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                          <div>
                            <div className="flex items-center mb-4">
                              <span className="text-4xl mr-3">{slide.icon}</span>
                              <div>
                                <h3 className="text-2xl font-bold">{slide.title}</h3>
                                <p className="text-sm opacity-75">{slide.subtitle}</p>
                              </div>
                            </div>
                            <p className="text-lg mb-6 opacity-90">{slide.description}</p>
                            <div className="space-y-2 mb-6">
                              {slide.features.map((feature, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <span className="text-green-400">✓</span>
                                  <span className="text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                            <a 
                              href={slide.link}
                              className={`inline-block bg-gradient-to-r ${slide.gradient} text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold`}
                            >
                              Explore {slide.title} →
                            </a>
                          </div>
                          <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-xl p-6">
                            <div className="text-center">
                              <div className="text-6xl mb-4">{slide.icon}</div>
                              <h4 className="text-xl font-bold mb-2">Featured Technology</h4>
                              <p className="text-sm opacity-90">Cutting-edge solutions for the future</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {contentSlides.map((_, index) => (
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

            {/* Quick Access Links */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Quick Access to New Content</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    className={`group relative overflow-hidden rounded-lg p-4 bg-gradient-to-br from-${link.color}-600/20 to-${link.color}-700/20 border border-${link.color}-400/30 hover:scale-105 transition-all duration-300`}
                  >
                    <div className="text-center">
                      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{link.icon}</div>
                      <h4 className="font-bold text-sm group-hover:text-white transition-colors duration-300">{link.title}</h4>
                    </div>
                    <div className={`absolute inset-0 bg-gradient-to-r from-${link.color}-600/10 to-${link.color}-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Promotional Banner */}
      <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-2xl p-6 mb-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-purple-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-bold mb-4">
            🎉 LIMITED TIME OFFER
          </div>
          <h3 className="text-2xl font-bold mb-2">Get Early Access to All New Content</h3>
          <p className="opacity-90 mb-4">Be the first to experience our revolutionary technology insights and solutions</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-purple-600 px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Subscribe for Updates
            </button>
            <button className="border-2 border-white px-6 py-2 rounded-lg hover:bg-white/10 transition-colors font-semibold">
              Download Resource Pack
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewContentShowcaseBanner;