import React from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

const UltimateContentShowcase2026 = () => {
  const [activeTab, setActiveTab] = useState('all');

  const content = [
    {
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🧠</div>
              <h4 className="text-xl font-bold mb-4">AI Consciousness Test</h4>
              <p className="mb-6 opacity-90">Test the consciousness level of our AI systems</p>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                Start Test
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">⚛️</div>
              <h4 className="text-xl font-bold mb-4">Quantum Computing Demo</h4>
              <p className="mb-6 opacity-90">Witness quantum supremacy in action</p>
              <button className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                Run Quantum
              </button>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="text-5xl mb-4">🧬</div>
              <h4 className="text-xl font-bold mb-4">Neural Interface Demo</h4>
              <p className="mb-6 opacity-90">Experience thought-controlled technology</p>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300">
                Try Interface
              </button>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl font-bold mb-6">💬 What Experts Say</h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-12">
            Hear from leading experts about our revolutionary technologies
          </p>
      id: 1,
      title: "Revolutionary AI Consciousness 2026",
      description: "Experience the dawn of true artificial consciousness with AI systems that possess genuine self-awareness and autonomous decision-making capabilities.",
      category: "AI Research",
      type: "page",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-purple-600 to-pink-600",
      link: "/revolutionary-ai-consciousness-2026",
      featured: true,
      tags: ["Consciousness", "AI", "Breakthrough"]
    },
    {
      id: 2,
      title: "Quantum Neural Fusion 2026",
      description: "Discover the revolutionary fusion of quantum computing and neural networks that transcends the limitations of classical physics.",
      category: "Quantum Computing",
      type: "page",
      icon: <Atom className="w-6 h-6" />,
      gradient: "from-cyan-600 to-purple-600",
      link: "/quantum-neural-fusion-2026",
      featured: true,
      tags: ["Quantum", "Neural Networks", "Computing"]
    },
    {
      id: 3,
      title: "Interdimensional Tech Revolution",
      description: "Break through the barriers of reality with technology that accesses infinite computational power from parallel universes.",
      category: "Future Technology",
      type: "page",
      icon: <Layers className="w-6 h-6" />,
      gradient: "from-violet-600 to-pink-600",
      link: "/interdimensional-tech-revolution-2026",
      featured: true,
      tags: ["Interdimensional", "Reality", "Multiverse"]
    },
    {
      id: 4,
      title: "AI Consciousness Research Paper",
      description: "Deep dive into the technical breakthroughs enabling true artificial consciousness and self-awareness in AI systems.",
      category: "AI Research",
      type: "blog",
      icon: <BookOpen className="w-6 h-6" />,
      gradient: "from-green-600 to-blue-600",
      link: "/blog/revolutionary-ai-consciousness-2026",
      featured: false,
      tags: ["Research", "Consciousness", "Technical"]
    },
    {
      id: 5,
      title: "Quantum Computing Breakthrough",
      description: "Explore the latest advances in quantum computing and their applications in artificial intelligence and neural networks.",
      category: "Quantum Computing",
      type: "blog",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-yellow-600 to-orange-600",
      link: "/blog/quantum-neural-fusion-2026",
      featured: false,
      tags: ["Quantum", "Breakthrough", "Research"]
    },
    {
      id: 6,
      title: "Interdimensional Technology Guide",
      description: "Comprehensive guide to understanding and implementing interdimensional computing technologies.",
      category: "Future Technology",
      type: "blog",
      icon: <Star className="w-6 h-6" />,
      gradient: "from-pink-600 to-red-600",
      link: "/blog/interdimensional-technology-2026",
      featured: false,
      tags: ["Guide", "Technology", "Interdimensional"]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Content', count: content.length },
    { id: 'AI Research', label: 'AI Research', count: content.filter(item => item.category === 'AI Research').length },
    { id: 'Quantum Computing', label: 'Quantum Computing', count: content.filter(item => item.category === 'Quantum Computing').length },
    { id: 'Future Technology', label: 'Future Technology', count: content.filter(item => item.category === 'Future Technology').length }
  ];

  const filteredContent = activeTab === 'all' 
    ? content 
    : content.filter(item => item.category === activeTab);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-20">
      <div className="container mx-auto px-4">
        <divdiv
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold mb-6 animate-pulse">
            🚀 ULTIMATE SHOWCASE 2026
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary Technology Showcase
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto">
            Experience the most advanced technologies that will reshape our world forever
          </p>
        </divdiv>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Showcase Carousel */}
          <div className="relative overflow-hidden rounded-3xl">
              <divdiv
                key={currentSlide}
                className="bg-gradient-to-br from-gray-800/50 to-purple-800/50 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/30"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="text-8xl mb-6">{showcaseItems[currentSlide].icon}</div>
                    <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {showcaseItems[currentSlide].title}
                    </h3>
                    <p className="text-xl opacity-90 mb-8">
                      {showcaseItems[currentSlide].description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {showcaseItems[currentSlide].features.map((feature, index) => (
                        <divdiv
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></span>
                          <span className="text-purple-200">{feature}</span>
                        </divdiv>
                      ))}
                    </div>
                    <a
                      href={showcaseItems[currentSlide].link}
                      className={`inline-block bg-gradient-to-r ${showcaseItems[currentSlide].gradient} px-8 py-4 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg`}
                    >
                      Explore Technology →
                    </a>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl"></div>
                    <div className="relative bg-gradient-to-br from-gray-800/30 to-purple-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
                      <div className="text-center">
                        <div className="text-6xl mb-4">{showcaseItems[currentSlide].icon}</div>
                        <h4 className="text-2xl font-bold mb-4">Interactive Demo</h4>
                        <p className="text-purple-200 mb-6">
                          Experience this revolutionary technology in action
                        </p>
                        <button className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors font-semibold">
                          Launch Demo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </divdiv>
            </div>

            {/* Navigation Arrows */}
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.label} ({category.count})
            </button>
          </div>
        </div>
          </div>
        </div>

        {/* Quick Access Grid */}
        <div className="mt-20">
          <divdiv
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold mb-4">Quick Access to All Technologies</h3>
            <p className="text-lg opacity-80">Explore all our revolutionary technologies at once</p>
          </divdiv>

          <div className="grid md:grid-cols-3 gap-8">
            {showcaseItems.map((item, index) => (
              <divdiv
                key={item.id}
                whileInView={{ opacity: 1, y: 0 }}
                className={`bg-gradient-to-br ${item.gradient}/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:shadow-2xl transition-all duration-300`}
              >
                {item.featured && (
                  <div className="absolute top-4 right-4">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                )}

                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white mb-6`}>
                  {item.icon}
                </div>

                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${item.gradient} text-white`}>
                    {item.category}
                  </span>
                  <span className="ml-2 text-xs text-gray-400 uppercase tracking-wide">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  {item.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = item.link}
                  className={`w-full bg-gradient-to-r ${item.gradient} px-6 py-3 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                >
                  Explore Now →
                </a>
              </divdiv>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold mb-4">
            Ready to Explore the Future?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Dive deeper into our revolutionary content and discover the technologies 
            that are reshaping the world.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-6 rounded-full text-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
          >
            <span>View All Content</span>
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;