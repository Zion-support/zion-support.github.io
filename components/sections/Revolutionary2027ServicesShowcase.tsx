      }
    }
  };

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              2027 Revolutionary Services
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your business with solutions that were once science fiction.
          </p>
        </motion.div>

          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${category.color} p-6 rounded-2xl text-center transform transition-all duration-300 group-hover:shadow-xl hover:shadow-cyan-500/30 group-hover:shadow-2xl`}>
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-white/20 rounded-full backdrop-blur-sm">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 h-full transform transition-all duration-500 group-hover:shadow-xl hover:shadow-cyan-500/30 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                {/* Service Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:shadow-lg hover:shadow-cyan-400/40`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                  {/* Market Info */}
                  <div className="pt-4 border-t border-gray-700/50">
                    <div className="flex justify-between items-center text-sm text-gray-400">
                      <span>Market: {service.marketSize}</span>
                      <span className="text-green-400">↑ {service.growthRate}</span>
                    </div>
                  </div>
                      href={`/services/${service.id}`}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-lg hover:shadow-purple-500/25"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

                href="https://ziontechgroup.com/contact"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-xl hover:shadow-purple-500/25"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
