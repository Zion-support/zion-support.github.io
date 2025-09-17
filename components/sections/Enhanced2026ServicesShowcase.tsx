    },
    {
      id: 'neuromorphic-computing-platform-2026',
      name: 'Neuromorphic Computing Platform 2026',
      description: 'Brain-inspired computing for next-generation AI with ultra-low power consumption and cognitive capabilities.',
      price: '$1,499',
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              2026 Revolutionary Services
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Experience the future with our cutting-edge AI, quantum, and emerging technology services designed to transform your business
          </p>
        </motion.div>

              whileHover={{ scale: 1.05, y: -5 }}
              className="group text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
              <p className="text-2xl font-bold text-cyan-400">{category.count}</p>
            </motion.div>
          ))}
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
                {/* Service Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{service.name}</h3>
                    <p className="text-gray-400 text-sm">{service.category}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <ul className="space-y-1">
                    {service.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-400 text-xs">
                        <Star className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                    href={`/${service.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 transition-transform duration-200"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        >
          <div className="bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already leveraging our revolutionary services to achieve unprecedented growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  Get Started
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
