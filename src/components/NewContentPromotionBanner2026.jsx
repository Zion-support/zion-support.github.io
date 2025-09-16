import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Zap, Brain, Rocket, Sparkles } from 'lucide-react';

const NewContentPromotionBanner2026 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const newContent = [
    {
      id: 1,
      title: "Synthetic Intelligence 2026",
      subtitle: "Beyond Human Cognition",
      description: "Revolutionary AI systems that surpass human cognitive capabilities across all domains.",
      category: "Synthetic Intelligence",
      price: "$500,000",
      image: "/images/synthetic-intelligence-2026.jpg",
      link: "/blog/synthetic-intelligence-2026-beyond-human-cognition",
      icon: Brain,
      gradient: "from-purple-600 via-pink-600 to-red-600",
      features: ["Superintelligence", "Universal Problem Solving", "Consciousness Simulation"]
    },
    {
      id: 2,
      title: "Interdimensional Computing",
      subtitle: "Processing Across Realities",
      description: "Revolutionary computing systems that operate across multiple dimensions and parallel realities.",
      category: "Interdimensional Tech",
      price: "$1,000,000",
      image: "/images/interdimensional-computing-2026.jpg",
      link: "/blog/interdimensional-computing-processing-across-realities",
      icon: Zap,
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      features: ["Infinite Processing Power", "Multi-Reality Solutions", "Transcendent Capabilities"]
    },
    {
      id: 3,
      title: "Reality Engineering",
      subtitle: "Programming the Physical World",
      description: "AI systems that can directly manipulate and program the fundamental laws of physics.",
      category: "Reality Engineering",
      price: "$2,000,000",
      image: "/images/reality-engineering-2026.jpg",
      link: "/blog/reality-engineering-programming-physical-world",
      icon: Rocket,
      gradient: "from-orange-600 via-red-600 to-pink-600",
      features: ["Direct Reality Manipulation", "Physics Programming", "Matter Creation"]
    }
  ];

  const currentItem = newContent[currentSlide];

  return (
    <div className={`relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
            <Sparkles className="w-4 h-4" />
            NEW REVOLUTIONARY CONTENT 2026
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            The Future is 
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              {" "}Here
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most revolutionary technologies that are reshaping reality itself. 
            From synthetic intelligence to interdimensional computing, explore the impossible made possible.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="relative">
          <div className={`bg-gradient-to-r ${currentItem.gradient} p-1 rounded-3xl shadow-2xl transform transition-all duration-1000 hover:scale-105`}>
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">
                      <currentItem.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-cyan-400 font-semibold">{currentItem.category}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {currentItem.title}
                  </h3>
                  <h4 className="text-xl text-gray-300">
                    {currentItem.subtitle}
                  </h4>
                  
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {currentItem.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {currentItem.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="text-white">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4">
                    <div className="text-3xl font-bold text-white">
                      {currentItem.price}
                    </div>
                    <Link
                      to={currentItem.link}
                      className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      Explore Now
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <currentItem.icon className="w-24 h-24 text-white/50 mx-auto mb-4" />
                        <p className="text-white/70 text-lg">Revolutionary Technology</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    NEW 2026
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {newContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-cyan-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Content Links */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { title: "10 New Blog Posts", description: "Cutting-edge technology insights", link: "/blog", count: "10+" },
            { title: "Revolutionary Services", description: "Transform your business", link: "/services", count: "15+" },
            { title: "Future Tech Showcase", description: "See what's possible", link: "/showcase", count: "∞" }
          ].map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h4>
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {item.count}
                </span>
              </div>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner2026;