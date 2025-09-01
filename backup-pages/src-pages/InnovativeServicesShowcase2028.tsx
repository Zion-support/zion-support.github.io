
       />

      {/* Hero Section */}"
      <section className="relative pt-28 pb-16 overflow-hidden">"
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>"
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}"
            className="text-center max-w-4xl mx-auto"
          >"
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              2028 Innovative Services"
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {' '}
                Showcase
              </span>
            </h1>"
            <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
              Discover our comprehensive portfolio of AI services, micro SAAS
              solutions, IT infrastructure, and cutting-edge technologies. Real
              market prices, proven ROI, and expert implementation.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link"
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Started Today
              </Link>
              <Link"
                to="/case-studies"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                <Play className="w-5 h-5 inline mr-2"  />
                Schedule Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}"
      <section className="py-8 bg-slate-800/30">"
        <div className="container mx-auto px-4">"
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}"
            <div className="relative flex-1 max-w-md">
              <input"
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}"
                className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />"
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5"  />            </div>

            {/* Category Filter */}"
            <div className="flex flex-wrap gap-2">
              <button'
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${

                  activeCategory === 'all''
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25''
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'`
                }`}
              >
                All Services
              </button>
              {serviceCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}`
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${

                    activeCategory === category.id'
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25''
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'`
                  }`}
                >
                  {category.name}
                </button>) ) }
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}"
      <section className="py-20">"
        <div className="container mx-auto px-4">
          <motion.div"
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={containerVariants}"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {filteredServices.map((service, index) => ("
              <motion.div key={index} variants={itemVariants} className="group">"
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 h-full hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                  {/* Header */}"
                  <div className="flex items-start justify-between mb-6">
                    <div`
                      className={`w-16 h-16 bg-gradient-to-br ${serviceCategories.find(cat => cat.id === service.category)?.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >"
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    {service.badge && (
                      <span`
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${

                          service.badge === 'Popular''
                            ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30''
                            : service.badge === 'New''
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30''
                              : service.badge === 'Featured''
                                ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30''
                                : service.badge === 'Best Value''
                                  ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30''
                                  : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'`
                        }`}
                      >
                        {service.badge}
                      </span>) }
                  </div>

                  {/* Content */}"
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.name}
                  </h3>
"
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Pricing */}"
                  <div className="mb-6 p-4 bg-slate-700/50 rounded-lg">"
                    <div className="flex items-center justify-between mb-2">"
                      <span className="text-slate-400 text-sm">Our Price:</span>"
                      <span className="text-2xl font-bold text-cyan-400">
                        {service.price}
                      </span>
                    </div>"
                    <div className="flex items-center justify-between">"
                      <span className="text-slate-400 text-sm">
                        Market Price:
                      </span>"
                      <span className="text-slate-300 text-sm line-through">
                        {service.marketPrice}
                      </span>
                    </div>
                  </div>

                  {/* Features */}"
                  <div className="space-y-2 mb-6">"
                    <h4 className="font-semibold text-cyan-400 mb-3">
                      Key Features:
                    </h4>
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}"
                        className="flex items-center text-sm text-slate-400"
                      >"
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0"  />                        {feature}
                      </div>) ) }
                  </div>

                  {/* Benefits */}"
                  <div className="space-y-2 mb-6">"
                    <h4 className="font-semibold text-green-400 mb-3">
                      Business Benefits:
                    </h4>
                    {service.benefits.map((benefit, idx) => (
                      <div
                        key={idx}"
                        className="flex items-center text-sm text-slate-400"
                      >"
                        <TrendingUp className="w-4 h-4 text-green-400 mr-3 flex-shrink-0"  />                        {benefit}
                      </div>) ) }
                  </div>

                  {/* CTA */}
                  <Link"
                    to="/contact"
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:scale-105 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Get Started"
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"  />                  </Link>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{service.pricing}</div>
                  <p className="text-gray-400 text-sm">14-day free trial included</p>
                </div>
                
                <Link
                  to={service.href}
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-semibold text-center hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2"  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}"
      <section className="py-20 bg-gradient-to-r from-slate-800 to-blue-900">"
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>"
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get expert consultation, custom pricing, and implementation
              support. Our team is ready to help you choose the right solutions
              for your business needs.
            </p>
          </motion.div>
"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}"
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
            >"
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">"
                <Phone className="w-8 h-8 text-white"  />
              </div>"
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Call Us
              </h3>"
              <p className="text-slate-300 text-center mb-4">
                Speak with our experts directly
              </p>
              <a`
                href={`tel:${contactInfo.phone}`}"                className="text-2xl font-bold text-cyan-400 text-center block hover:text-cyan-300 transition-colors duration-300"
              >
                {contactInfo.phone}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}"
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
            >"
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">"
                <Mail className="w-8 h-8 text-white"  />
              </div>"
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Email Us
              </h3>"
              <p className="text-slate-300 text-center mb-4">
                Send us your requirements
              </p>
              <a`
                href={`mailto:${contactInfo.email}`}"                className="text-lg font-semibold text-cyan-400 text-center block hover:text-cyan-300 transition-colors duration-300 break-all"
              >
                {contactInfo.email}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}"
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8"
            >"
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">"
                <MapPin className="w-8 h-8 text-white"  />
              </div>"
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Visit Us
              </h3>"
              <p className="text-slate-300 text-center mb-4">
                Our headquarters location
              </p>"              <p className="text-slate-300 text-center text-sm leading-relaxed">
                {contactInfo.address}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Micro SaaS Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mt-12"
          >"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link"
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25"
              >
                Get Free Consultation
              </Link>
              <Link"
                to="/pricing"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View Full Pricing
              </Link>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {microSaaSServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-5 h-5 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="text-purple-400 font-semibold mb-4">{service.pricing}</div>
                
                <Link
                  to={service.href}
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center"
                >
                  Learn More
                  <ArrowRight className="w-3 h-3 ml-1"  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}"
      <section className="py-20">"
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}"
            className="text-center mb-16"
          >"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>"
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              We deliver innovative solutions with proven ROI, expert support,
              and competitive pricing.
            </p>
          </motion.div>

          <motion.div"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {

                icon: Award,
                title: 'Proven Expertise',
                description:'
                  '500+ successful projects across industries with measurable results'},
              {

                icon: Zap,
                title: 'Innovation First',
                description:'
                  'Cutting-edge technologies and methodologies for competitive advantage'},
              {

                icon: Shield,
                title: 'Enterprise Security',
                description:'
                  'Bank-level security and compliance for enterprise-grade solutions'},
              {

                icon: Heart,
                title: '24/7 Support',
                description:'
                  'Round-the-clock technical support and maintenance services'},
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}"
                className="text-center"
              >"
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">"
                  <item.icon className="w-10 h-10 text-white" />
                </div>"
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>"
                <p className="text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>) }
'"`