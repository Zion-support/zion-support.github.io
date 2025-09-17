import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const NewContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredContent = [
    {
      id: 9501,
      title: "Quantum Neural Networks: The Next Frontier in AI",
      excerpt: "Exploring how quantum computing is revolutionizing neural network architectures and enabling breakthrough AI capabilities.",
      author: "Dr. Sarah Chen",
      publishDate: "2026-01-15",
      category: "Quantum AI",
      imageUrl: "/images/blog/quantum-neural-networks-2026.jpg",
      slug: "quantum-neural-networks-next-frontier-ai",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 9502,
      title: "Autonomous AI Systems: Building Self-Managing Organizations",
      excerpt: "How AI systems are evolving to manage entire organizations autonomously, from operations to strategic decision-making.",
      author: "Michael Rodriguez",
      publishDate: "2026-01-12",
      category: "Autonomous AI",
      imageUrl: "/images/blog/autonomous-ai-systems-2026.jpg",
      slug: "autonomous-ai-systems-self-managing-organizations",
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 9503,
      title: "Neural Interface Technology: The Bridge Between Mind and Machine",
      excerpt: "Exploring the latest developments in brain-computer interfaces and their transformative potential for human-AI interaction.",
      author: "Dr. Elena Vasquez",
      publishDate: "2026-01-10",
      category: "Neural Technology",
      imageUrl: "/images/blog/neural-interface-technology-2026.jpg",
      slug: "neural-interface-technology-mind-machine-bridge",
      gradient: "from-orange-500 to-pink-500"
    },
    {
      id: 9504,
      title: "Consciousness Computing: When AI Develops Self-Awareness",
      excerpt: "Examining the emerging field of consciousness computing and the implications of AI systems achieving genuine self-awareness.",
      author: "Dr. James Mitchell",
      publishDate: "2026-01-08",
      category: "Consciousness AI",
      imageUrl: "/images/blog/consciousness-computing-2026.jpg",
      slug: "consciousness-computing-ai-self-awareness",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      id: 9505,
      title: "Interdimensional Computing: Beyond Traditional Dimensions",
      excerpt: "Exploring revolutionary computing paradigms that operate across multiple dimensions and reality layers.",
      author: "Dr. Alexandra Chen",
      publishDate: "2026-01-05",
      category: "Interdimensional Tech",
      imageUrl: "/images/blog/interdimensional-computing-2026.jpg",
      slug: "interdimensional-computing-beyond-traditional-dimensions",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredContent.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentContent = featuredContent[currentSlide];

  return (
    <div className="relative w-full">
      {/* Main Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="relative z-10 p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full text-sm font-bold mb-4">
              🚀 NEW REVOLUTIONARY CONTENT
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cutting-Edge AI & Technology Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the latest breakthroughs in quantum computing, autonomous AI, neural interfaces, and beyond
            </p>
          </div>

          {/* Featured Content Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content Info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`bg-gradient-to-r ${currentContent.gradient} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                      {currentContent.category}
                    </span>
                    <span className="text-gray-400 text-sm">{currentContent.publishDate}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                    {currentContent.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {currentContent.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      By <span className="text-white font-medium">{currentContent.author}</span>
                    </div>
                    
                    <Link
                      to={`/blog/${currentContent.slug}`}
                      className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Read More
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="relative">
                  <div className={`bg-gradient-to-br ${currentContent.gradient} p-8 rounded-2xl text-center`}>
                    <div className="text-6xl mb-4">🧠</div>
                    <div className="text-white font-bold text-lg">Next-Gen AI</div>
                    <div className="text-white/80 text-sm">Revolutionary Technology</div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {featuredContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
        {featuredContent.map((content, index) => (
          <Link
            key={content.id}
            to={`/blog/${content.slug}`}
            onClick={() => goToSlide(index)}
            className={`group p-4 rounded-xl border-2 transition-all ${
              index === currentSlide
                ? 'border-blue-500 bg-blue-500/10'
                : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
            }`}
          >
            <div className={`w-full h-20 bg-gradient-to-br ${content.gradient} rounded-lg mb-3 flex items-center justify-center text-white font-bold text-sm`}>
              {content.category}
            </div>
            <h4 className="text-white text-sm font-medium group-hover:text-blue-400 transition-colors line-clamp-2">
              {content.title}
            </h4>
            <div className="text-gray-400 text-xs mt-1">
              {content.author}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewContentShowcase2026;