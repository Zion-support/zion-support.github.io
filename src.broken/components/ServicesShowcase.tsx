<<<<<<< HEAD

export default function Page() {
        <motion.div"
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >"
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Comprehensive"
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              {' '}
              Services
            </span>
          </h2>"
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Discover our extensive collection of cutting-edge micro SAAS
            solutions designed to transform your business.From AI-powered
            analytics to quantum computing, we offer innovative solutions across
            all major technology domains.</p>

          {/* Quick Stats */}"
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            <motion.div"
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >"
              <div className="text-4xl font-bold text-zion-cyan mb-2">
                {services.length}+
              </div>"
              <div className="text-zion-slate-light">Total Services</div>
            </motion.div>
            <motion.div"
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >"
              <div className="text-4xl font-bold text-zion-purple mb-2">6</div>"
              <div className="text-zion-slate-light">Technology Categories</div>
            </motion.div>
            <motion.div"
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >"
              <div className="text-4xl font-bold text-zion-blue mb-2">
                99.9%
              </div>"
              <div className="text-zion-slate-light">Uptime Guarantee</div>
            </motion.div>
            <motion.div"
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >"
              <div className="text-4xl font-bold text-zion-green mb-2">
                24/7
              </div>"
              <div className="text-zion-slate-light">Support Available</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}"
          initial="hidden"
          whileInView="visible"'
          viewport={{ once: true, margin: '-50px' }}"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (<motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}"
              className="group relative"
            >
              <Link to={service.href || `/services/${service.id}`}>"
                <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                  {/* Background Gradient */}
                  <div`
                    className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(service.category)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <div`
                    className={`relative z-10 w-16 h-16 bg-gradient-to-br ${getCategoryColor(service.category)} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >"
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}"
                  <div className="relative z-10">"
                    <div className="flex items-center justify-between mb-2">"
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>"
                      <span className="text-xs px-2 py-1 bg-white/10 text-gray-400 rounded-full">
                        {service.category}
                      </span>
                    </div>"
                    <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Effect */}"
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>
              </Link>
            </motion.div>) ) }
        </motion.div>

        {/* CTA Section */}
        <motion.div"
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >"
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">"
            <div className="px-8 py-6 bg-zion-blue-dark rounded-xl">"
              <p className="text-white text-lg mb-4">
                Ready to transform your business with our services?
              </p>"
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                Get Started Today"
                <ArrowRight className="w-5 h-5"  />              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>) }
'"`
=======
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
