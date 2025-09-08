    <section className="py-20 bg-zion-slate-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark opacity-50"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-zion-purple/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our extensive collection of cutting-edge micro SAAS solutions designed to transform your business.
            From AI-powered analytics to quantum computing, we offer innovative solutions across all major technology domains.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">{services.length}+</div>
              <div className="text-gray-300">Total Services</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">6</div>
              <div className="text-gray-300">Technology Categories</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Link to={service.href || `/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="relative overflow-hidden bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(service.category)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-zion-slate-light leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Arrow */}
                  <div className="mt-6 flex items-center text-zion-cyan group-hover:text-zion-cyan-light transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
        {/* Contact Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-zion-blue mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Get in touch with our team to discuss your needs and discover how our micro SAAS solutions can drive your success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-bold text-zion-blue mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">{CONTACT_INFO.mobile}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-zion-purple mr-3" />
                  <div>
                    <p className="font-medium">Website</p>
                    <a href={CONTACT_INFO.website} className="text-zion-cyan hover:underline">
                      {CONTACT_INFO.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-zion-blue mb-6">Quick Actions</h4>
              <div className="space-y-4">
                <Link to="/request-quote">
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Request Custom Quote
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                    Schedule Consultation
                  </Button>
                </Link>
                <Link to="/micro-saas-services">
                  <Button variant="outline" className="w-full border-zion-blue text-zion-blue hover:bg-zion-blue hover:text-white">
                    View All Services
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 p-6 bg-zion-blue/5 rounded-lg border border-zion-blue/20">
                <h5 className="font-medium text-zion-blue mb-2">What's Included:</h5>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 24/7 Technical Support</li>
                  <li>• 99.9% Uptime Guarantee</li>
                  <li>• SOC 2 Type II Compliant</li>
                  <li>• 30-Day Money Back Guarantee</li>
                  <li>• Free Migration Support</li>
                  <li>• Custom Integration Services</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/micro-saas-services">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                Explore All Micro SAAS Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block p-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl">
            <div className="px-8 py-6 bg-slate-800 rounded-xl">
              <p className="text-white text-lg mb-4">
                Ready to transform your business with our services?
              </p>
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}