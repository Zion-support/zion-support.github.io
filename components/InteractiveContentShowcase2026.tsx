import React, { useState, useEffect } from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const contentItems = [
    {
      id: 1,
      title: "Quantum Neural Superintelligence",
      description: "Achieve 99.97% accuracy with quantum-enhanced neural networks",
      metrics: { accuracy: "99.97%", value: "$2.1B", speed: "1000x" },
      category: "Quantum AI",
      featured: true,
      image: "🧠",
      color: "purple",
      link: "/blog/ai-2026-january-quantum-neural-superintelligence-breakthrough"
    },
    {
      id: 2,
      title: "Synthetic Consciousness & Emotional AI",
      description: "True AI consciousness with 98.4% emotional intelligence",
      metrics: { consciousness: "99.1%", emotional: "98.4%", value: "$3.7B" },
      category: "Consciousness AI",
      featured: true,
      image: "❤️",
      color: "pink",
      link: "/blog/ai-2026-february-synthetic-consciousness-emotional-ai-revolution"
    },
    {
      id: 3,
      title: "Autonomous Business Intelligence",
      description: "99.8% predictive accuracy with self-learning cognitive analytics",
      metrics: { accuracy: "99.8%", value: "$4.2B", speed: "2.1s" },
      category: "Business Intelligence",
      featured: true,
      image: "📊",
      color: "emerald",
      link: "/blog/ai-2026-march-autonomous-business-intelligence-cognitive-analytics-revolution"
    },
    {
      id: 4,
      title: "Revolutionary Autonomous Enterprise",
      description: "98.7% operational autonomy with $127M in proven savings",
      metrics: { autonomy: "98.7%", savings: "$127M", roi: "270%" },
      category: "Enterprise AI",
      featured: true,
      image: "🚀",
      color: "blue",
      link: "/blog/ai-2025-december-revolutionary-autonomous-enterprise-breakthrough"
    },
    {
      id: 5,
      title: "Quantum Edge AI Revolution",
      description: "Sub-0.5ms latency with 99.99% accuracy and $89M savings",
      metrics: { latency: "<0.5ms", accuracy: "99.99%", savings: "$89M" },
      category: "Edge AI",
      featured: true,
      image: "⚡",
      color: "cyan",
      link: "/blog/ai-2025-october-quantum-edge-ai-revolution"
    },
    {
      id: 6,
      title: "Zero-Trust AI Security Framework",
      description: "99.97% threat detection with <50ms response time",
      metrics: { detection: "99.97%", response: "<50ms", prevented: "$180M" },
      category: "AI Security",
      featured: true,
      image: "🔒",
      color: "indigo",
      link: "/blog/ai-2025-october-zero-trust-ai-security-framework"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', icon: '🌟', count: contentItems.length },
    { id: 'Quantum AI', label: 'Quantum AI', icon: '🧠', count: 1 },
    { id: 'Consciousness AI', label: 'Consciousness AI', icon: '❤️', count: 1 },
    { id: 'Business Intelligence', label: 'Business Intelligence', icon: '📊', count: 1 },
    { id: 'Enterprise AI', label: 'Enterprise AI', icon: '🚀', count: 1 },
    { id: 'Edge AI', label: 'Edge AI', icon: '⚡', count: 1 },
    { id: 'AI Security', label: 'AI Security', icon: '🔒', count: 1 }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedContent((prev) => (prev + 1) % filteredContent.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [filteredContent.length]);

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: 'from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-400',
      pink: 'from-pink-500/20 to-purple-500/20 border-pink-500/30 text-pink-400',
      emerald: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
      blue: 'from-blue-500/20 to-purple-500/20 border-blue-500/30 text-blue-400',
      cyan: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-400',
      indigo: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30 text-indigo-400'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getMetricColor = (value: string) => {
    if (value.includes('%')) return 'text-blue-400';
    if (value.includes('$')) return 'text-green-400';
    if (value.includes('x') || value.includes('<') || value.includes('ms')) return 'text-purple-400';
    return 'text-orange-400';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 mb-8">
            <span className="text-purple-400 font-bold text-xl tracking-wider uppercase">
              🎯 INTERACTIVE CONTENT SHOWCASE 2026
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Explore Revolutionary AI Breakthroughs
          </h2>
          
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            Discover the most advanced AI innovations that are transforming enterprise operations worldwide.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:text-white hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Content Carousel */}
        <div className="relative mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content Display */}
              <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-6xl">{filteredContent[selectedContent]?.image}</div>
                  <div>
                    <div className={`font-bold text-sm uppercase tracking-wider ${getColorClasses(filteredContent[selectedContent]?.color).split(' ')[2]}`}>
                      {filteredContent[selectedContent]?.category}
                    </div>
                    {filteredContent[selectedContent]?.featured && (
                      <div className="text-purple-400 font-bold text-xs uppercase tracking-wider">
                        ⭐ FEATURED BREAKTHROUGH
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {filteredContent[selectedContent]?.title}
                </h3>
                
                <p className="text-xl text-gray-300 mb-6">
                  {filteredContent[selectedContent]?.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(filteredContent[selectedContent]?.metrics || {}).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className={`text-2xl font-extrabold ${getMetricColor(value)}`}>
                        {value}
                      </div>
                      <div className="text-xs text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                <a 
                  href={filteredContent[selectedContent]?.link}
                  className={`inline-block bg-gradient-to-r ${getColorClasses(filteredContent[selectedContent]?.color).split(' ')[0]} ${getColorClasses(filteredContent[selectedContent]?.color).split(' ')[1]} hover:from-opacity-80 hover:to-opacity-80 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1`}
                >
                  Explore This Breakthrough →
                </a>
              </div>

              {/* Navigation & Progress */}
              <div className="space-y-6">
                {/* Content Thumbnails */}
                <div className="space-y-3">
                  {filteredContent.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setIsAnimating(true);
                        setTimeout(() => {
                          setSelectedContent(index);
                          setIsAnimating(false);
                        }, 300);
                      }}
                      className={`w-full p-4 rounded-xl border transition-all duration-300 ${
                        selectedContent === index
                          ? 'bg-white/10 border-white/30 text-white'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{item.image}</div>
                        <div className="text-left">
                          <div className="font-bold text-sm">{item.title}</div>
                          <div className="text-xs opacity-75">{item.category}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className="flex justify-center space-x-2">
                  {filteredContent.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setIsAnimating(true);
                        setTimeout(() => {
                          setSelectedContent(index);
                          setIsAnimating(false);
                        }, 300);
                      }}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        selectedContent === index
                          ? 'bg-purple-500 scale-125'
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((content, index) => (
            <div key={content.id} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer ${selectedContent === index ? 'ring-2 ring-purple-500/50' : ''}`}
                 onClick={() => {
                   setIsAnimating(true);
                   setTimeout(() => {
                     setSelectedContent(index);
                     setIsAnimating(false);
                   }, 300);
                 }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">{content.image}</div>
                <div>
                  <div className={`font-bold text-sm uppercase tracking-wider ${getColorClasses(content.color).split(' ')[2]}`}>
                    {content.category}
                  </div>
                  {content.featured && (
                    <div className="text-purple-400 font-bold text-xs uppercase tracking-wider">
                      ⭐ FEATURED
                    </div>
                  )}
                </div>
              </div>

              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {content.title}
              </h4>
              
              <p className="text-gray-300 mb-4 text-sm">
                {content.description}
              </p>

              <div className="grid grid-cols-3 gap-2 mb-4">
                {Object.entries(content.metrics).slice(0, 3).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className={`text-sm font-extrabold ${getMetricColor(value)}`}>
                      {value}
                    </div>
                    <div className="text-xs text-gray-400">
                      {key.slice(0, 3)}
                    </div>
                  </div>
                ))}
              </div>

              <a 
                href={content.link}
                className={`inline-block w-full text-center bg-gradient-to-r ${getColorClasses(content.color).split(' ')[0]} ${getColorClasses(content.color).split(' ')[1]} hover:from-opacity-80 hover:to-opacity-80 text-white font-bold py-2 px-4 rounded-xl transition-all duration-300 text-sm`}
                onClick={(e) => e.stopPropagation()}
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join leading enterprises in leveraging these revolutionary AI breakthroughs for unprecedented growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
              >
                Start Your AI Journey
              </a>
              <a 
                href="/services" 
                className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1"
              >
                Explore All Services →
              </a>
              <a 
                href="/case-studies" 
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentShowcase2026;