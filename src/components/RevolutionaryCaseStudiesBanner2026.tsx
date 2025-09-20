  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStudy((prev) => (prev + 1) % caseStudies.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [caseStudies.length]);

            {/* Carousel Controls */}
            <div className="flex justify-center mt-8 space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`w-4 h-4 rounded-full transition-colors ${
                    activeCase === index ? 'bg-indigo-400' : 'bg-gray-500'
                  }`}</button>
                /></button>
              ))}</button>
        {/* Metrics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-4 gap-8 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
              transition={{ duration: 0.6, delay: 0.5 + 0.1 * index }}
              className="text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-indigo-400/30"
            >
              <div className={`text-4xl font-bold mb-2 ${metric.color}`}>{metric.value}
              <div className="text-white/80">{metric.label}
            </motion.div>
          ))}
        </motion.div>
        {/* Industry Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">🌟 Industry Success Stories</h3>
            <p className="text-xl opacity-90">Transforming businesses across all sectors</p>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: 0.7 + 0.1 * index }}
                className={`bg-gradient-to-br ${study.gradient} p-8 rounded-xl text-white hover:scale-105 transition-all duration-300`}
              >
                <div className="text-4xl mb-4">{study.logo}
                <h4 className="text-xl font-bold mb-2">{study.company}</h4>
                <p className="text-sm opacity-90 mb-4">{study.industry}</p>
                <div className="text-2xl font-bold mb-2">{study.results.efficiency} Efficiency
                <div className="text-lg font-semibold">{study.results.costSavings} Saved
              </motion.div>
            ))}
        </motion.div>
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">Ready to Achieve Similar Results?</h3>
            <p className="text-xl opacity-90 mb-8"></p>
              Join the companies that have transformed their operations with our revolutionary technologies</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"></button>
                Start Your Transformation →</button>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-600 transition-colors"></button>
                View All Case Studies</button>
              </button>
            <p className="text-lg text-gray-300 mb-6"></p>
              {caseStudies[currentStudy].description}</p>
            </p>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-green-400">
                {caseStudies[currentStudy].result}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center space-x-2 mt-6">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStudy(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentStudy ? 'bg-purple-400' : 'bg-white/30'
              }`}</button>
            /></button>
          ))}</button>
