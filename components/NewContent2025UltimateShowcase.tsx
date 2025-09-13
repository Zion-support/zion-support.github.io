import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, SparklesIcon, RocketLaunchIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const NewContent2025UltimateShowcase = () => {
  const contentItems = [
    {
      id: 1,
      title: "AI-Powered Business Automation",
      description: "Transform your operations with cutting-edge AI automation solutions that reduce costs by 40% and increase efficiency by 300%.",
      icon: RocketLaunchIcon,
      category: "Automation",
      featured: true,
      stats: "300% Efficiency Boost"
    },
    {
      id: 2,
      title: "Quantum Computing Solutions",
      description: "Harness the power of quantum computing for complex problem-solving and data analysis that was previously impossible.",
      icon: SparklesIcon,
      category: "Quantum Tech",
      featured: true,
      stats: "10x Processing Power"
    },
    {
      id: 3,
      title: "Neural Interface Development",
      description: "Revolutionary brain-computer interfaces that enable direct neural control of digital systems and applications.",
      icon: LightBulbIcon,
      category: "Neural Tech",
      featured: false,
      stats: "Direct Neural Control"
    },
    {
      id: 4,
      title: "Advanced Cloud Infrastructure",
      description: "Scalable, secure, and intelligent cloud solutions that adapt to your business needs in real-time.",
      icon: ArrowRightIcon,
      category: "Cloud Computing",
      featured: false,
      stats: "99.9% Uptime"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/20 mb-6">
            <SparklesIcon className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-sm font-medium text-white">2025 Ultimate Content Showcase</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technology Solutions
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the future of technology with our cutting-edge AI, quantum computing, and neural interface solutions that are transforming industries worldwide.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contentItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group ${
                item.featured ? 'md:col-span-2' : ''
              }`}
            >
              <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105">
                {item.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                    FEATURED
                  </div>
                )}
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-medium text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-sm font-bold text-green-400 bg-green-500/20 px-3 py-1 rounded-full">
                        {item.stats}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies already using our revolutionary technology solutions to achieve unprecedented growth and efficiency.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25">
                Start Your Transformation
              </button>
              <button className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20">
                Schedule Consultation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewContent2025UltimateShowcase;