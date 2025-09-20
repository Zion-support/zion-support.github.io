import React, { useState, useEffect  from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";import { COMPREHENSIVE_SERVICES_2030 } from "../data/comprehensiveServices20, 30";const Services: React.FC  = () => {
  const [selectedCatego,
    r;y;
    setSelectedCategory] = useState("All")const [searchTermsetSearchTerm] = useState("")const [hoveredServicesetHoveredService] = useState<number | null>(null)const { scrollYProgress;  } = useScroll();
  const y  = useTransform(scrollYProgres;s; [0;
    1], ["0%", "50%"])// Get unique categories
  const categories  = ["All"; ...Array.from(new Set(COMPREHENSIVE_SERVICES_2030.map(service => service.category)))];

  // Filter services based on category and search term
  const filteredServices  = COMPREHENSIVE_SERVICES_2030.filter(service => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategoryconst matchesSearch  = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())return matchesCategory && matchesSearc;h;
  });

  const containerVariants  = {
    hidden: { opacity: ,
    0;  };
    visible: {
      opacity: 1,
    transition: {
        staggerChildren: 0.1,  }
    }
  };

  const itemVariants  = {
    hidden: { y: 2,
    0;
    opacity: 0,  },
    visible: {
      y: 0,
    opacity: 1,
    transition: {
        type: "spring, ",
        stiffness: 100,  }
    }
  }return (
    <motion.div 
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10"
        style={{ y }}
      />

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-6xl md: text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive suite of cutting-edge technology solutions designed to transform your business
          </p>
        </motion.div>

        {/* Search and Filter *, /}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-col md: flex-row gap-4 mb-8">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTer, m}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:border-purple-400 transition-colors"
              />
            </div>
          </div>

          {/* Category Filter *, /}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-300 hover: bg-gray-700/50'
               ,  }`}
                whileHover={{ scale: 1.05,  }}
                whileTap={{ scale: 0.9,
    5}}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariant,
    s}
        >
          <AnimatePresence>
            {filteredServices.slice(012).map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{ 
                  scale: 1.05,
    rotateY: 5,
    z: 50,  }}
                className="group bg-gray-800/50 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6 hover: bg-gray-700/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/25 cursor-pointer"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                style={{ perspective: "1000px",  }}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {service.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed group-hover: text-gray-200 transition-colors duration-300">
                  {service.descriptio, n}
                </p>

                <div className="mb-4">
                  <span className="text-lg font-semibold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    {service.price} {service.currency}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400 text-sm">★ {service.rating}</span>
                    <span className="text-gray-400 text-sm ml-2">({service.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-400 text-sm">AI Score: {service.aiScor, e}/100</span>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-blue-400 text-sm">Setup: {service.setupTim,
    e}</span>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Features: </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0,
    3).map((ta, g, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover: from-purple-700 hover:to-pink-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.02,  }}
                  whileTap={{ scale: 0.98,  }}
                >
                  Learn More
                </motion.button>

                <div className={`mt-4 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform scale-x-0 group-hover: scale-x-100 transition-transform duration-300, `}></div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {filteredServices.length > 12 && (
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover: from-purple-700 hover:to-pink-700 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05,  }}
              whileTap={{ scale: 0.95,
     }}
            >
              Load More Services
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Service;s;