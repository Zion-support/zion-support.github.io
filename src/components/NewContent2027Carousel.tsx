import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  excerpt: string;
  link: string;
  category: string;
  readTime: string;
  publishDate: string;
  gradient: string;
  icon: string;
  tags: string[];
  featured: boolean;
}

const NewContent2027Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const contentItems: ContentItem[] = [
    {
      id: "ai-2027-breakthroughs",
      title: "AI 2027: Revolutionary Breakthroughs",
      description: "Discover the groundbreaking AI innovations transforming industries",
      excerpt: "Explore quantum-enhanced neural networks, autonomous business ecosystems, and consciousness-driven AI systems that are reshaping the future of technology and human potential.",
      link: "/ai-2027-revolutionary-breakthroughs",
      category: "Artificial Intelligence",
      readTime: "8 min read",
      publishDate: "January 2027",
      gradient: "from-purple-600 to-blue-600",
      icon: "🚀",
      tags: ["AI", "Machine Learning", "Quantum AI", "Autonomous Systems"],
      featured: true
    },
    {
      id: "quantum-computing-2027",
      title: "Quantum Computing Revolution 2027",
      description: "Fault-tolerant quantum systems and practical applications",
      excerpt: "Witness the dawn of practical quantum computing with breakthrough error correction, room temperature operation, and real-world applications transforming cryptography and optimization.",
      link: "/quantum-computing-revolution-2027",
      category: "Quantum Computing",
      readTime: "12 min read",
      publishDate: "January 2027",
      gradient: "from-cyan-600 to-purple-600",
      icon: "⚛️",
      tags: ["Quantum Computing", "Cryptography", "Optimization", "Fault Tolerance"],
      featured: true
    },
    {
      id: "neural-interface-2027",
      title: "Neural Interface Revolution 2027",
      description: "Direct brain-computer integration technologies",
      excerpt: "Experience the future of human-computer interaction with non-invasive neural interfaces, implantable neural chips, and direct neural-AI collaboration systems.",
      link: "/neural-interface-revolution-2027",
      category: "Neural Technology",
      readTime: "10 min read",
      publishDate: "January 2027",
      gradient: "from-pink-600 to-indigo-600",
      icon: "🧠",
      tags: ["Neural Interface", "BCI", "Brain Implants", "Cognitive Enhancement"],
      featured: true
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % contentItems.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [contentItems.length, isAutoPlay]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % contentItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + contentItems.length) % contentItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Latest Breakthrough Content 2027
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay ahead of the curve with our cutting-edge insights into the most revolutionary 
            technologies shaping the future of humanity and business.
          </p>
        </div>

        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {contentItems.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-br ${item.gradient} p-8 md:p-12 rounded-3xl`}>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <div className="text-white">
                        <div className="flex items-center space-x-3 mb-6">
                          <span className="text-5xl">{item.icon}</span>
                          <div>
                            <span className="bg-white/20 text-sm font-semibold px-3 py-1 rounded-full">
                              {item.category}
                            </span>
                            <div className="text-sm text-white/80 mt-1">
                              {item.publishDate} • {item.readTime}
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                          {item.title}
                        </h3>
                        
                        <p className="text-xl text-white/90 mb-6 leading-relaxed">
                          {item.description}
                        </p>
                        
                        <p className="text-lg text-white/80 mb-8 leading-relaxed">
                          {item.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {item.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="bg-white/20 text-sm px-3 py-1 rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <Link
                          to={item.link}
                          className="inline-flex items-center space-x-3 bg-white text-gray-900 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 text-lg"
                        >
                          <span>Read Full Article</span>
                          <span className="text-xl">→</span>
                        </Link>
                      </div>

                      {/* Visual Element */}
                      <div className="hidden lg:block">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                          <div className="grid grid-cols-2 gap-6">
                            <div className="text-center p-4 bg-white/10 rounded-xl">
                              <div className="text-3xl font-bold text-white mb-2">99.7%</div>
                              <div className="text-sm text-white/80">Accuracy Rate</div>
                            </div>
                            <div className="text-center p-4 bg-white/10 rounded-xl">
                              <div className="text-3xl font-bold text-white mb-2">1000x</div>
                              <div className="text-sm text-white/80">Performance Boost</div>
                            </div>
                            <div className="text-center p-4 bg-white/10 rounded-xl">
                              <div className="text-3xl font-bold text-white mb-2">24/7</div>
                              <div className="text-sm text-white/80">Availability</div>
                            </div>
                            <div className="text-center p-4 bg-white/10 rounded-xl">
                              <div className="text-3xl font-bold text-white mb-2">∞</div>
                              <div className="text-sm text-white/80">Possibilities</div>
                            </div>
                          </div>
                          
                          <div className="mt-8 text-center">
                            <div className="text-2xl font-bold text-white mb-2">Featured Content</div>
                            <div className="text-sm text-white/80">Latest breakthrough technologies</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex space-x-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 scale-125' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  isAutoPlay 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                }`}
              >
                {isAutoPlay ? '⏸️ Auto' : '▶️ Auto'}
              </button>

              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
                >
                  <span className="text-xl">‹</span>
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
                >
                  <span className="text-xl">›</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Access Links */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {contentItems.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className={`bg-gradient-to-r ${item.gradient} p-6 rounded-xl hover:scale-105 transition-all transform group`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-semibold bg-white/20 px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                {item.title}
              </h4>
              <p className="text-white/80 text-sm mb-3">
                {item.readTime} • {item.publishDate}
              </p>
              <div className="flex items-center text-white font-semibold group-hover:text-cyan-200 transition-colors">
                <span>Read More</span>
                <span className="ml-2">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewContent2027Carousel;