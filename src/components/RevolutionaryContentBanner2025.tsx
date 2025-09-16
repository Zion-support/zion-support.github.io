import React, { useState, useEffect } from 'react';

const RevolutionaryContentBanner2025: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      id: 1,
      title: "🚀 Revolutionary AI Services Now Available",
      subtitle: "Experience the future of artificial intelligence with our groundbreaking services",
      description: "Transform your business with autonomous AI agents, quantum processing, and neural interfaces",
      cta: "Explore AI Services →",
      link: "/pages/RevolutionaryAIServices2025",
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-900 via-indigo-900 to-blue-900"
    },
    {
      id: 2,
      title: "📊 Success Stories That Inspire",
      subtitle: "See how our technology has transformed businesses worldwide",
      description: "Discover real case studies from Fortune 500 companies achieving 300% productivity gains",
      cta: "View Case Studies →",
      link: "/pages/RevolutionaryCaseStudies2025",
      color: "from-cyan-600 to-blue-600",
      bgColor: "from-cyan-900 via-blue-900 to-indigo-900"
    },
    {
      id: 3,
      title: "⚡ Interactive Technology Showcase",
      subtitle: "Experience our cutting-edge technologies in real-time",
      description: "Try our interactive demos and see the power of AI, quantum computing, and neural interfaces",
      cta: "Try Interactive Demo →",
      link: "/pages/InteractiveTechShowcase2025",
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-900 via-teal-900 to-cyan-900"
    },
    {
      id: 4,
      title: "🌟 Next-Gen Innovation Hub",
      subtitle: "Discover the technologies shaping tomorrow",
      description: "Explore our comprehensive suite of revolutionary solutions for the digital age",
      cta: "Enter Innovation Hub →",
      link: "/pages/NextGenInnovationHub2025",
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-900 via-red-900 to-pink-900"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className={`relative overflow-hidden transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      {/* Background with gradient animation */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.bgColor} transition-all duration-1000`}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-full text-sm font-bold mb-6 animate-pulse">
              🌟 BREAKTHROUGH ANNOUNCEMENT • JANUARY 2025
            </div>

            {/* Main Content */}
            <h2 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${currentSlideData.color} bg-clip-text text-transparent transition-all duration-1000`}>
              {currentSlideData.title}
            </h2>
            
            <p className="text-2xl md:text-3xl font-semibold mb-4 text-white/90">
              {currentSlideData.subtitle}
            </p>
            
            <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto mb-8">
              {currentSlideData.description}
            </p>

            {/* CTA Button */}
            <a 
              href={currentSlideData.link}
              className={`inline-block bg-gradient-to-r ${currentSlideData.color} text-white px-12 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg transform hover:scale-105`}
            >
              {currentSlideData.cta}
            </a>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '🤖', title: 'AI Agents', desc: 'Autonomous Intelligence' },
              { icon: '⚡', title: 'Quantum AI', desc: '1000x Faster Processing' },
              { icon: '🧠', title: 'Neural Interface', desc: 'Mind-Machine Connection' },
              { icon: '🌐', title: 'Edge Computing', desc: 'Ultra-Low Latency' }
            ].map((feature, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-white/80">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-sm text-white/80">Companies Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">$2B+</div>
              <div className="text-sm text-white/80">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">99.9%</div>
              <div className="text-sm text-white/80">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-sm text-white/80">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default RevolutionaryContentBanner2025;