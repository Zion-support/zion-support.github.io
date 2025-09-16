        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Welcome to 2030 - The Future is Now
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </motion.h1>

          <Link
            href="/services"
            className="group px-8 py-4 border-2 border-purple-500/30 text-purple-300 font-semibold rounded-2xl text-lg hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
          >
            <span className="flex items-center">
              Explore Services
              <Play className="ml-2 w-5 h-5 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-200" />
            </span>
          </Link>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-purple-400 mb-2" />
              <span className="text-gray-300 text-sm">Call Us</span>
              <a href={`tel:${contactInfo.mobile}`} className="text-white font-semibold hover:text-purple-400 transition-colors">
                {contactInfo.mobile}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-cyan-400 mb-2" />
              <span className="text-gray-300 text-sm">Email Us</span>
              <a href={`mailto:${contactInfo.email}`} className="text-white font-semibold hover:text-cyan-400 transition-colors">
                {contactInfo.email}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Globe className="w-6 h-6 text-emerald-400 mb-2" />
              <span className="text-gray-300 text-sm">Visit Us</span>
              <a href={contactInfo.website} className="text-white font-semibold hover:text-emerald-400 transition-colors">
                {contactInfo.website.replace('https://', '')}
              </a>
            </div>
          </div>
        </motion.div>

          <p className="text-gray-400 text-sm mb-4">Trusted by leading companies worldwide</p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-300 text-sm">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-300 text-sm">Award Winning</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300 text-sm">Industry Leader</span>
            </div>
          </div>
        </motion.div>
      </div>

          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
