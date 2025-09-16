          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Welcome to 2027
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              The Future of
              <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent ml-4">
                Technology
              </span>
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience revolutionary AI consciousness evolution, quantum computing breakthroughs, and practical micro SAAS solutions that will transform your business beyond imagination.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
              href="/2027-services-showcase"
              className="group px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xl rounded-2xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-2xl shadow-cyan-500/25 flex items-center justify-center space-x-3"
            >
              <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              <span>Explore 2027 Services</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/contact"
              className="px-10 py-5 border-2 border-cyan-500/50 text-cyan-400 font-bold text-xl rounded-2xl hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 flex items-center justify-center space-x-3"
            >
              <Sparkles className="w-6 h-6" />
              <span>Start Your Journey</span>
            </Link>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                <div className="bg-black/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-center group-hover:text-cyan-400 transition-colors duration-300">
                    {feature.text}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                <div className={`text-4xl md:text-5xl font-bold mb-2 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-cyan-300 font-medium group-hover:text-cyan-400 transition-colors duration-300">
                  {stat.label}
                </div>
                <div className="flex justify-center mt-2">
                  <stat.icon className={`w-5 h-5 ${stat.color} group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-cyan-300 font-medium">{trust}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

