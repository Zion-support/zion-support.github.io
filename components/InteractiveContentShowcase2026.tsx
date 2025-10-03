import React, { useState, useEffect } from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const contentItems = [
    {
      id: 1,
      title: "Quantum Neural Superintelligence
      description: "Achieve 99.97% accuracy with quantum-enhanced neural networks
      metrics: { accuracy: "99.97%", value: "$2.1B", speed: "1000x" },
      category: "Quantum AI
      featured: true,
      image: "🧠
      color: "purple
      link: "/blog/ai-2026-january-quantum-neural-superintelligence-breakthrough"
    },
    {
      id: 2,
      title: "Synthetic Consciousness & Emotional AI
      description: "True AI consciousness with 98.4% emotional intelligence
      metrics: { consciousness: "99.1%", emotional: "98.4%", value: "$3.7B" },
      category: "Consciousness AI
      featured: true,
      image: "❤️
      color: "pink
      link: "/blog/ai-2026-february-synthetic-consciousness-emotional-ai-revolution"
    },
    {
      id: 3,
      title: "Autonomous Business Intelligence
      description: "99.8% predictive accuracy with self-learning cognitive analytics
      metrics: { accuracy: "99.8%", value: "$4.2B", speed: "2.1s" },
      category: "Business Intelligence
      featured: true,
      image: "📊
      color: "emerald
      link: "/blog/ai-2026-march-autonomous-business-intelligence-cognitive-analytics-revolution"
    },
    {
      id: 4,
      title: "Revolutionary Autonomous Enterprise
      description: "98.7% operational autonomy with $127M in proven savings
      metrics: { autonomy: "98.7%", savings: "$127M", roi: "270%" },
      category: "Enterprise AI
      featured: true,
      image: "🚀
      color: "blue
      link: "/blog/ai-2025-december-revolutionary-autonomous-enterprise-breakthrough"
    },
    {
      id: 5,
      title: "Quantum Edge AI Revolution
      description: "Sub-0.5ms latency with 99.99% accuracy and $89M savings
      metrics: { latency: "<0.5ms", accuracy: "99.99%", savings: "$89M" },
      category: "Edge AI
      featured: true,
      image: "⚡
      color: "cyan
      link: "/blog/ai-2025-october-quantum-edge-ai-revolution"
    },
    {
      id: 6,
      title: "Zero-Trust AI Security Framework
      description: "99.97% threat detection with <50ms response time
      metrics: { detection: "99.97%", response: "<50ms", prevented: "$180M" },
      category: "AI Security
      featured: true,
      image: "🔒
      color: "indigo
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
    <section className="text-left">
      <div className="text-left">
        <div className="text-left">
          <div className="text-left">
            <span className="text-left">
              🎯 INTERACTIVE CONTENT SHOWCASE 2026
            <
          </div>
          
          <h2 className="text-left">
            Explore Revolutionary AI Breakthroughs
          </h2>
          
          <p className="text-left">
            Discover the most advanced AI innovations that are transforming enterprise operations worldwide.
          </p>
        </div>

        {/* Category Filters */}
        <div className="text-left">
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
              <span className="text-left">{category.icon}<
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Content Carousel */}
        <div className="text-left">
          <div className="text-left">
            <div className="text-left">
              {/* Content Display */}
              <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'}`}>
                <div className="text-left">
                  <div className="text-left">{filteredContent[selectedContent]?.image}</div>
                  <div>
                    <div className={`font-bold text-sm uppercase tracking-wider ${getColorClasses(filteredContent[selectedContent]?.color).split(' ')[2]}`}>
                      {filteredContent[selectedContent]?.category}
                    </div>
                    {filteredContent[selectedContent]?.featured && (
                      <div className="text-left">
                        ⭐ FEATURED BREAKTHROUGH
                      </div>
                    )}
                  </div>
                </div>

                <h3 className="text-left">
                  {filteredContent[selectedContent]?.title}
                </h3>
                
                <p className="text-left">
                  {filteredContent[selectedContent]?.description}
                </p>

                {/* Metrics */}
                <div className="text-left">
                  {Object.entries(filteredContent[selectedContent]?.metrics || {}).map(([key, value]) => (
                    <div key={key} className="text-left">
                      <div className={`text-2xl font-extrabold ${getMetricColor(value)}`}>
                        {value}
                      </div>
                      <div className="text-left">
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
              <div className="text-left">
                {/* Content Thumbnails */}
                <div className="text-left">
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
                      <div className="text-left">
                        <div className="text-left">{item.image}</div>
                        <div className="text-left">
                          <div className="text-left">{item.title}</div>
                          <div className="text-left">{item.category}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Progress Indicator */}
                <div className="text-left">
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
        <div className="text-left">
          {filteredContent.map((content, index) => (
            <div key={content.id} className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group cursor-pointer ${selectedContent === index ? 'ring-2 ring-purple-500/50' : ''}`}
                 onClick={() => {
                   setIsAnimating(true);
                   setTimeout(() => {
                     setSelectedContent(index);
                     setIsAnimating(false);
                   }, 300);
                 }}>
              <div className="text-left">
                <div className="text-left">{content.image}</div>
                <div>
                  <div className={`font-bold text-sm uppercase tracking-wider ${getColorClasses(content.color).split(' ')[2]}`}>
                    {content.category}
                  </div>
                  {content.featured && (
                    <div className="text-left">
                      ⭐ FEATURED
                    </div>
                  )}
                </div>
              </div>

              <h4 className="text-left">
                {content.title}
              </h4>
              
              <p className="text-left">
                {content.description}
              </p>

              <div className="text-left">
                {Object.entries(content.metrics).slice(0, 3).map(([key, value]) => (
                  <div key={key} className="text-left">
                    <div className={`text-sm font-extrabold ${getMetricColor(value)}`}>
                      {value}
                    </div>
                    <div className="text-left">
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
        <div className="text-left">
          <div className="text-left">
            <h3 className="text-left">
              Ready to Transform Your Business?
            </h3>
            <p className="text-left">
              Join leading enterprises in leveraging these revolutionary AI breakthroughs for unprecedented growth and innovation.
            </p>
            <div className="text-left">
              <a 
                href="/contact"
                className="text-left"
              >
                Start Your AI Journey
              </a>
              <a 
                href="/services"
                className="text-left"
              >
                Explore All Services →
              </a>
              <a 
                href="/case-studies"
                className="text-left"
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