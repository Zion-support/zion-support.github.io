            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-2xl opacity-90 max-w-4xl mx-auto"
            >
              Transform your business with our cutting-edge AI solutions designed for the future
            </motion.p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-lg font-bold">{solution.stats.roi || solution.stats.autonomy || solution.stats.speed || solution.stats.integration || solution.stats.quality || solution.stats.protection}
                      <div className="text-xs opacity-80">ROI
                    <div className="text-center">
                      <div className="text-lg font-bold">{solution.stats.satisfaction || solution.stats.uptime || solution.stats.accuracy || solution.stats.speed || solution.stats.engagement || solution.stats.response}
                      <div className="text-xs opacity-80">Satisfaction
                    <div className="text-center">
                      <div className="text-lg font-bold">∞
                      <div className="text-xs opacity-80">Potential
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-white/90">{solution.pricing}
                  <button className="w-full bg-white text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"></button>
                    Get Started →</button>
                  </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm py-16"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <p className="text-xl opacity-80">Join thousands of organizations transforming with AI</p>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">10,000+
              <div className="text-lg opacity-80">Active Users
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">99.9%
              <div className="text-lg opacity-80">Uptime
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">500%
              <div className="text-lg opacity-80">Average ROI
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">24/7
              <div className="text-lg opacity-80">Support
