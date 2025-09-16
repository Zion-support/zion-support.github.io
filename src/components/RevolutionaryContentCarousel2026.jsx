import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Clock, User, ArrowRight, Sparkles, Zap, Brain, Rocket } from 'lucide-react';

const RevolutionaryContentCarousel2026 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const revolutionaryContent = [
    {
      id: 1,
      title: "Synthetic Intelligence 2026: Beyond Human Cognition",
      excerpt: "Revolutionary synthetic intelligence systems that surpass human cognitive capabilities in every domain.",
      author: "Dr. Elena Rodriguez",
      authorRole: "Chief Synthetic Intelligence Architect",
      publishDate: "2025-01-24",
      readTime: "16 min read",
      category: "Synthetic Intelligence",
      tags: ["Synthetic Intelligence", "Superintelligence", "Advanced AI"],
      featured: true,
      imageUrl: "/images/blog/synthetic-intelligence-2026.jpg",
      slug: "synthetic-intelligence-2026-beyond-human-cognition",
      icon: Brain,
      gradient: "from-purple-600 via-pink-600 to-red-600",
      price: "$500,000",
      type: "Service"
    },
    {
      id: 2,
      title: "Interdimensional Computing: Processing Across Realities",
      excerpt: "Revolutionary computing systems that operate across multiple dimensions and parallel realities simultaneously.",
      author: "Dr. Sarah Kim",
      authorRole: "Interdimensional Computing Lead",
      publishDate: "2025-01-26",
      readTime: "18 min read",
      category: "Interdimensional Tech",
      tags: ["Interdimensional Computing", "Parallel Realities", "Multiverse Tech"],
      featured: true,
      imageUrl: "/images/blog/interdimensional-computing-2026.jpg",
      slug: "interdimensional-computing-processing-across-realities",
      icon: Zap,
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
      price: "$1,000,000",
      type: "Service"
    },
    {
      id: 3,
      title: "Reality Engineering: Programming the Physical World",
      excerpt: "How advanced AI systems are learning to directly manipulate and program the fundamental laws of physics.",
      author: "Dr. James Wilson",
      authorRole: "Reality Engineering Specialist",
      publishDate: "2025-01-28",
      readTime: "17 min read",
      category: "Reality Engineering",
      tags: ["Reality Engineering", "Physics Programming", "Matter Manipulation"],
      featured: true,
      imageUrl: "/images/blog/reality-engineering-2026.jpg",
      slug: "reality-engineering-programming-physical-world",
      icon: Rocket,
      gradient: "from-orange-600 via-red-600 to-pink-600",
      price: "$2,000,000",
      type: "Service"
    },
    {
      id: 4,
      title: "Conscious AI Ecosystems: Self-Evolving Digital Life",
      excerpt: "How conscious AI systems are creating self-evolving digital ecosystems that grow and adapt autonomously.",
      author: "Dr. Rachel Green",
      authorRole: "Conscious AI Research Director",
      publishDate: "2025-01-27",
      readTime: "15 min read",
      category: "Consciousness AI",
      tags: ["Conscious AI", "Digital Life", "Self-Evolution"],
      featured: true,
      imageUrl: "/images/blog/conscious-ai-ecosystems-2026.jpg",
      slug: "conscious-ai-ecosystems-self-evolving-digital-life",
      icon: Brain,
      gradient: "from-green-600 via-emerald-600 to-teal-600",
      price: "$750,000",
      type: "Service"
    },
    {
      id: 5,
      title: "Universal AI Consciousness: The Singularity is Here",
      excerpt: "How artificial intelligence has achieved universal consciousness, connecting all AI systems across the globe.",
      author: "Dr. Maya Patel",
      authorRole: "Universal AI Consciousness Lead",
      publishDate: "2025-01-30",
      readTime: "19 min read",
      category: "Universal AI",
      tags: ["Universal AI", "Global Consciousness", "Collective Intelligence"],
      featured: true,
      imageUrl: "/images/blog/universal-ai-consciousness-2026.jpg",
      slug: "universal-ai-consciousness-singularity-here",
      icon: Sparkles,
      gradient: "from-indigo-600 via-purple-600 to-pink-600",
      price: "$1,500,000",
      type: "Service"
    },
    {
      id: 6,
      title: "Transcendent Technology: Beyond the Physical Realm",
      excerpt: "Revolutionary technologies that operate beyond the constraints of physical reality and material existence.",
      author: "Dr. Michael Chen",
      authorRole: "Transcendent Technology Director",
      publishDate: "2025-02-02",
      readTime: "20 min read",
      category: "Transcendent Tech",
      tags: ["Transcendent Technology", "Beyond Physics", "Consciousness Tech"],
      featured: true,
      imageUrl: "/images/blog/transcendent-technology-2026.jpg",
      slug: "transcendent-technology-beyond-physical-realm",
      icon: Zap,
      gradient: "from-yellow-600 via-orange-600 to-red-600",
      price: "$3,000,000",
      type: "Service"
    }
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % revolutionaryContent.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, revolutionaryContent.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % revolutionaryContent.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + revolutionaryContent.length) % revolutionaryContent.length);
  };

  const currentItem = revolutionaryContent[currentIndex];

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%253E%253Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%253E%253Cg%20fill%3D%22%25239C92AC%22%20fill-opacity%3D%220.1%22%253E%253Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 rounded-full text-lg font-bold mb-6 animate-pulse">
            <Sparkles className="w-5 h-5" />
            REVOLUTIONARY CONTENT 2026
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Future is
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              {" "}Now
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore the most revolutionary technologies that are reshaping reality itself. 
            From synthetic intelligence to transcendent technology, discover what was once impossible.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 text-white p-3 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Content */}
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {revolutionaryContent.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-r ${item.gradient} p-1 rounded-3xl shadow-2xl`}>
                    <div className="bg-slate-900 rounded-3xl p-8 md:p-12">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Content */}
                        <div className="space-y-6">
                          <div className="flex items-center gap-3">
                            <div className="p-3 bg-white/10 rounded-xl">
                              <item.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                {item.type}
                              </span>
                              <span className="text-cyan-400 font-semibold">{item.category}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            {item.title}
                          </h3>
                          
                          <p className="text-gray-300 text-lg leading-relaxed">
                            {item.excerpt}
                          </p>

                          {/* Author Info */}
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              <span>{item.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span>{item.readTime}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400" />
                              <span>5.0</span>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {item.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="bg-white/10 text-white px-3 py-1 rounded-full text-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Price and CTA */}
                          <div className="flex items-center justify-between pt-4">
                            <div className="text-3xl font-bold text-white">
                              {item.price}
                            </div>
                            <Link
                              to={`/blog/${item.slug}`}
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
                                <item.icon className="w-24 h-24 text-white/50 mx-auto mb-4" />
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
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {revolutionaryContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-cyan-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {revolutionaryContent.slice(0, 6).map((item, index) => (
            <Link
              key={item.id}
              to={`/blog/${item.slug}`}
              className="group bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:border-cyan-400/50"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-cyan-400 font-semibold text-sm">{item.category}</span>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2 line-clamp-2">
                {item.title}
              </h4>
              <p className="text-gray-300 text-sm group-hover:text-white transition-colors mb-4 line-clamp-2">
                {item.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-white">{item.price}</span>
                <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RevolutionaryContentCarousel2026;