        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group border border-cyan-500/50 text-cyan-400 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm"
          >
            <Play className="w-5 h-5" />
            <span>Watch Demo</span>
          </motion.button>
        </motion.div>

        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-cyan-500/30 rounded-2xl p-6 hover:border-cyan-500/50 hover:bg-gray-900/90 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 backdrop-blur-sm">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white text-center group-hover:text-cyan-400 transition-colors">
                    {feature.text}
            ))}
          </div>
        </motion.div>

        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 group-hover:border-cyan-400/50 transition-all duration-300">
                  <stat.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-cyan-400/70 group-hover:text-cyan-300 transition-colors">
                  {stat.label}
            ))}
          </div>
        </motion.div>

              <div className="text-cyan-400 font-semibold">Fortune 500 Companies</div>
              <div className="text-blue-400 font-semibold">Government Agencies</div>
              <div className="text-purple-400 font-semibold">Research Institutions</div>
              <div className="text-emerald-400 font-semibold">Startups</div>
          className="text-center"
        >
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl px-8 py-4 backdrop-blur-sm">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">Ready to transform your business?</span>
            </div>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 border border-purple-400/50 hover:border-purple-300"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      </div>

          />
        </motion.div>
      </motion.div>
    </section>
