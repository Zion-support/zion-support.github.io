import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, Sparkles, Rocket, Lightbulb, Cpu } from 'lucide-react';

export const NewContentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const newContentItems = [
    {
      title: "Revolutionary New Services",
      description: "Discover cutting-edge AI and technology solutions",
      link: "/new-services",
      icon: <Rocket className="w-5 h-5" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Innovation Lab",
      description: "Explore breakthrough technologies in development",
      link: "/innovation-lab",
      icon: <Lightbulb className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Technology Showcase",
      description: "See the latest in AI, quantum computing, and more",
      link: "/technology-showcase",
      icon: <Cpu className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="relative bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white py-4 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span className="font-semibold text-sm sm:text-base">NEW CONTENT AVAILABLE!</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-6">
                {newContentItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200 group"
                  >
                    <div className={`p-1 rounded-full bg-gradient-to-r ${item.color} group-hover:scale-110 transition-transform duration-200`}>
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <div className="text-xs font-semibold">{item.title}</div>
                      <div className="text-xs opacity-90">{item.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Link
                to="/new-services"
                className="hidden sm:inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200 text-sm font-semibold"
              >
                Explore Now
              </Link>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
                aria-label="Close banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile dropdown */}
          <div className="md:hidden mt-4 pt-4 border-t border-white/20">
            <div className="grid grid-cols-1 gap-3">
              {newContentItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="flex items-center space-x-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200"
                >
                  <div className={`p-2 rounded-full bg-gradient-to-r ${item.color}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{item.title}</div>
                    <div className="text-xs opacity-90">{item.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-2 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3 right-20 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-2 left-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse delay-2000"></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};