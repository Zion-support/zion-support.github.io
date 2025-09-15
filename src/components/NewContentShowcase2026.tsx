import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NewContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const contentTabs = [
    {
      id: 'next-gen-tech',
      title: 'Next-Gen Tech Revolution',
      icon: '🚀',
      description: 'Revolutionary technologies including Synthetic Intelligence, Quantum-Neural Fusion, and Advanced AI Systems',
      link: '/pages/NextGenTechRevolution2026',
      color: 'from-purple-600 to-pink-600',
      features: ['Synthetic Intelligence', 'Quantum-Neural Fusion', 'Advanced AI Systems']
    },
    {
      id: 'tech-insights',
      title: 'Revolutionary Tech Insights',
      icon: '📊',
      description: 'Deep insights into the most revolutionary technologies of 2026 with expert analysis and market trends',
      link: '/pages/RevolutionaryTechInsights2026',
      color: 'from-cyan-600 to-blue-600',
      features: ['Expert Analysis', 'Market Trends', 'Future Predictions']
    },
    {
      id: 'future-showcase',
      title: 'Future Tech Showcase',
      icon: '🌟',
      description: 'Interactive demonstrations of the most advanced technologies with cutting-edge innovations',
      link: '/pages/FutureTechShowcase2026',
      color: 'from-emerald-600 to-teal-600',
      features: ['Interactive Demos', 'Live Statistics', 'Hands-on Experience']
    }
  ];

  return (
    <>
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-12 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6">
            <span className="text-cyan-400">✨</span>
            <span className="text-cyan-300 font-semibold ml-2">NEW CONTENT SHOWCASE 2026</span>
            <span className="text-cyan-400 ml-2">✨</span>
          </div>
          
          {/* Interactive Content Carousel */}
          <div className="relative max-w-7xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <motion.div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {newContent.map((content) => (
                  <div key={content.id} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/20">
                      <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8 }}
                        >
                          <div className="flex items-center mb-6">
                            <span className="text-8xl mr-6">{content.icon}</span>
                            <div>
                              <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-3">
                                {content.category}
                              </div>
                              <h3 className="text-4xl font-bold text-white mb-3">{content.title}</h3>
                            </div>
                          </div>
                          <p className="text-xl text-gray-300 mb-8 leading-relaxed">{content.description}</p>
                          <div className="grid grid-cols-2 gap-4 mb-8">
                            {content.features.map((feature, index) => (
                              <div key={index} className="flex items-center text-gray-300">
                                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <a 
                            href={content.link}
                            className={`inline-block bg-gradient-to-r ${content.gradient} text-white px-10 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg hover:scale-105 transform`}
                          >
                            Explore {content.title.split(' ')[0]} →
                          </a>
                        </motion.div>
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="text-center"
                        >
                          <div className="text-9xl mb-6 opacity-60">{content.icon}</div>
                          <div className="text-3xl font-bold text-white mb-4">2026 Technology</div>
                          <div className="text-gray-300 text-xl">Revolutionary Innovation</div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Carousel Controls */}
            <div className="flex justify-center mt-8 space-x-3">
              {newContent.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {newContent.map((content) => (
          <motion.div
            key={content.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <a href={content.link} className="block">
              <div className={`bg-gradient-to-br ${content.gradient} rounded-2xl p-8 text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl`}>
                <div className="text-6xl mb-6 text-center">{content.icon}</div>
                <div className="text-center mb-4">
                  <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold mb-3">
                    {content.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{content.title}</h3>
                  <p className="text-white/90 mb-6 text-sm leading-relaxed">{content.description}</p>
                </div>
                <div className="flex items-center justify-center text-white/80 text-sm group-hover:text-white transition-colors">
                  <span className="mr-2">Explore Now</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </a>
          </motion.div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default NewContentShowcase2026;