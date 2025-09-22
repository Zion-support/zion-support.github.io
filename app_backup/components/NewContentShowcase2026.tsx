import Link from 'next/link';
import { useState, useEffect } from 'react';

const NewContentShowcase2026 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contentItems = [
    {
      id: 1,
      title: "AI 2026: Autonomous Business Operations Revolution",
      description: "Discover how autonomous AI agents are transforming business operations with real-world implementation strategies.",
      category: "AI Revolution",
      readTime: "12 min read",
      featured: true,
      href: "/blog/ai-2026-autonomous-business-operations-revolution",
      image: "/images/ai-autonomous-operations.jpg",
      tags: ["autonomous AI", "business operations", "enterprise automation"]
    },
    {
      id: 2,
      title: "Quantum Computing Business Applications: 2026 Breakthrough Guide",
      description: "Explore how quantum computing is revolutionizing business operations from optimization to cryptography.",
      category: "Quantum Computing",
      readTime: "15 min read",
      featured: true,
      href: "/blog/quantum-computing-business-applications-2026",
      image: "/images/quantum-computing-business.jpg",
      tags: ["quantum computing", "business applications", "optimization"]
    },
    {
      id: 3,
      title: "AI Automation Enterprise Transformation: Fortune 500 Success Story",
      description: "How we helped a Fortune 500 company achieve 340% ROI through comprehensive AI automation.",
      category: "Case Study",
      readTime: "8 min read",
      featured: true,
      href: "/case-studies/ai-automation-enterprise-transformation",
      image: "/images/enterprise-transformation.jpg",
      tags: ["AI automation", "enterprise transformation", "ROI"]
    },
    {
      id: 4,
      title: "Neural Interface Revolution: The Future of Human-AI Collaboration",
      description: "Exploring next-generation neural interfaces that enable seamless human-AI interaction and augmentation.",
      category: "Future Tech",
      readTime: "10 min read",
      featured: true,
      href: "/blog/neural-interface-revolution-2026",
      image: "/images/neural-interface.jpg",
      tags: ["neural interfaces", "human-AI collaboration", "augmentation"]
    },
    {
      id: 5,
      title: "Synthetic Intelligence: Beyond Traditional AI",
      description: "Understanding the evolution from artificial intelligence to synthetic intelligence and its business implications.",
      category: "AI Research",
      readTime: "14 min read",
      featured: true,
      href: "/blog/synthetic-intelligence-beyond-ai",
      image: "/images/synthetic-intelligence.jpg",
      tags: ["synthetic intelligence", "AI evolution", "business implications"]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === contentItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [contentItems.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === contentItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? contentItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-white">✨ NEW CONTENT 2026</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Revolutionary Content Just Published
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our latest insights on autonomous AI, quantum computing, and the future of business technology.
          </p>
        </div>

        {/* Content Carousel */}
        <div className="relative">
          {/* Main Content Display */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {contentItems[currentIndex].category}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {contentItems[currentIndex].readTime}
                  </span>
                  {contentItems[currentIndex].featured && (
                    <span className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                      FEATURED
                    </span>
                  )}
                </div>
                
                <h3 className="text-3xl font-bold text-white leading-tight">
                  {contentItems[currentIndex].title}
                </h3>
                
                <p className="text-gray-300 text-lg leading-relaxed">
                  {contentItems[currentIndex].description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {contentItems[currentIndex].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white/10 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* CTA Button */}
                <div className="pt-4">
                  <Link
                    href={contentItems[currentIndex].href}
                    className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Read Full Article
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Content Preview Image */}
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl border border-white/10 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <p className="text-sm opacity-75">Content Preview</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
              aria-label="Previous content"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {contentItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-purple-600 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to content ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-300"
              aria-label="Next content"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            More Fresh Content
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contentItems.slice(0, 3).map((item, index) => (
              <Link
                key={item.id}
                href={item.href}
                className="group bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 transition-all duration-300 hover:border-purple-500/50 hover:transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded text-xs font-semibold">
                    {item.category}
                  </span>
                  <span className="text-gray-400 text-xs">{item.readTime}</span>
                </div>
                <h4 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description.substring(0, 100)}...
                </p>
                <div className="mt-4 flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300">
                  Read More
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore All Content
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewContentShowcase2026;