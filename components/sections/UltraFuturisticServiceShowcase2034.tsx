    gradient: 'from-orange-500/20 to-pink-500/20'
  }
];

  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Revolutionary Technology Services
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              ))}
            </select>
          </div>
        </motion.div>

          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all duration-300 hover:scale-105"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  Popular
                </div>
              )}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl`}>
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{service.price}</div>
                  <div className="text-sm text-gray-400">{service.period}</div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>{service.setupTime}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Users className="w-4 h-4" />
                  <span>{service.customers.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>{service.rating}/5</span>
                </div>
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span>{service.growthRate}</span>
                </div>
              </div>
                <div className="text-xs text-gray-400 mb-1">Market Position</div>
                <div className="text-sm text-gray-300 leading-relaxed">
                  {service.marketPosition}
                </div>
              </div>
                <div className="text-xs text-green-400 mb-1 font-semibold">Expected ROI</div>
                <div className="text-sm text-green-300 font-medium">
                  {service.roi}
                </div>
              </div>

                  href={service.link}
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 text-center group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                </a>
                <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200">
                  <Eye className="w-4 h-4" />
                </button>
              </div>

              {/* Trial Info */}
              <div className="mt-4 text-center">
                <div className="text-sm text-gray-400">
                  <span className="text-cyan-400 font-semibold">{service.trialDays} days</span> free trial
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                 className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-200 text-lg"
               >
                 View Pricing
               </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <Phone className="w-4 h-4 inline mr-2" />
              Need help? Call us at {contactInfo.mobile}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
