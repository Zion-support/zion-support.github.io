import React from 'react';

const EnhancedContentShowcase: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">EnhancedContentShowcase</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Ready to Explore the Future?</h2>
        <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
          Dive deeper into our revolutionary technologies and discover how they can transform your business
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/contact" className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            Start Your Journey →
          </a>
          <a href="/pages/InnovationLanding2025" className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors">
            View All Innovations
          </a>
        </div>
      {/* Quick Access Grid */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {contentSlides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`bg-gradient-to-br ${slide.bgGradient} backdrop-blur-sm rounded-xl p-6 border ${slide.borderColor} hover:scale-105 transition-all duration-300 cursor-pointer`}
            onClick={() => goToSlide(index)}
          >
            <div className="text-4xl mb-3 text-center">{slide.image}</div>
            <h3 className="text-xl font-bold text-white mb-2 text-center">{slide.title}</h3>
            <p className="text-gray-200 text-sm text-center mb-4">{slide.description}</p>
            <a
              href={slide.link}
              className={`block w-full bg-gradient-to-r ${slide.gradient} text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center text-sm`}
            >
              Explore Now →
            </a>
          </motion.div>
        ))}
            {/* Content Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {contentCategories[activeCategory].content.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{item.image}</div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'Breakthrough' ? 'bg-gradient-to-r from-green-600 to-emerald-600' :
                        item.status === 'Revolutionary' ? 'bg-gradient-to-r from-purple-600 to-pink-600' :
                        item.status === 'Advanced' ? 'bg-gradient-to-r from-blue-600 to-cyan-600' :
                        item.status === 'Experimental' ? 'bg-gradient-to-r from-orange-600 to-red-600' :
                        'bg-gradient-to-r from-gray-600 to-gray-700'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 text-purple-300 text-xs rounded-full border border-purple-400/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-1">Impact:</h4>
                      <p className="text-indigo-300 text-sm italic">{item.impact}</p>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <span className="mr-1">👁️</span>
                          {item.views}
                        </span>
                        <span className="flex items-center">
                          <span className="mr-1">❤️</span>
                          {item.likes}
                        </span>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full bg-gradient-to-r ${contentCategories[activeCategory].color} py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                    >
                      Explore Content →
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-800/30 to-indigo-800/30 backdrop-blur-sm rounded-2xl p-12 text-center mt-20"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join millions of users discovering the most revolutionary content in technology history. 
            Be part of the future that's being created today.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg">
              Start Exploring
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg">
              Create Account
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnhancedContentShowcase;
