          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-4 py-2 rounded-full border border-purple-500/30">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">2026 Revolutionary Technology Solutions</span>
          </motion.div>
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              The Future
            </span>
            <br />
            <span className="text-white">
              is Now
            </span>
          </motion.h1>
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            <div className="text-center p-4 bg-gradient-to-br from-purple-800/20 to-purple-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl">
              <div className="text-3xl font-bold text-purple-400">{aiAutonomousServices2026.length}</div>
              <div className="text-gray-300 text-sm">AI Autonomous Services</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-cyan-800/20 to-cyan-900/20 backdrop-blur-xl border border-cyan-500/20 rounded-2xl">
              <div className="text-3xl font-bold text-cyan-400">{quantumSpaceTechServices2026.length}</div>
              <div className="text-gray-300 text-sm">Quantum Space Tech</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-pink-800/20 to-pink-900/20 backdrop-blur-xl border border-pink-500/20 rounded-2xl">
              <div className="text-3xl font-bold text-pink-400">{metaverseDigitalRealityServices2026.length}</div>
              <div className="text-gray-300 text-sm">Metaverse Services</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-800/20 to-green-900/20 backdrop-blur-xl border border-green-500/20 rounded-2xl">
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl border border-blue-500/20 rounded-xl">
              <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <span className="text-gray-200 font-medium">First-to-Market Technology</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-purple-500/20 rounded-xl">
              <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0" />
              <span className="text-gray-200 font-medium">1000% ROI Guaranteed</span>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-xl border border-green-500/20 rounded-xl">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
              <span className="text-gray-200 font-medium">24/7 Autonomous Operation</span>
            </div>
          </motion.div>
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold text-lg rounded-2xl hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl"
            >
              <Rocket className="w-6 h-6 mr-3" />
              Explore All Services
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-500/50 text-purple-300 font-bold text-lg rounded-2xl hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
            >
              <Zap className="w-6 h-6 mr-3" />
              Get Started Today
            </Link>
          </motion.div>

            className="mt-12 p-6 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-cyan-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Call Us</div>
                  <div className="text-purple-300">{contactInfo.phone}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Email Us</div>
                  <div className="text-cyan-300">{contactInfo.email}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">Visit Us</div>
                  <div className="text-purple-300 text-sm">{contactInfo.address}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-400"
          >
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span>1000% ROI Guaranteed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-5 h-5 text-purple-400" />
              <span>24/7 Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 right-10 text-5xl opacity-20"
        >
          🌐
        </motion.div>
      </div>
    </section>
