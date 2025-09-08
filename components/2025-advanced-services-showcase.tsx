
        ))}
                </div>;
              ) : (<div className="space-y-6">;"
                  {filteredServices.map((service) => (<ServiceList key={service.id} service={service} />;
                  ))}
                </div>;
              )}
            </AnimatePresence>;
          )}
        </div>;
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement these cutting-edge solutions. 
              Get in touch today to discuss your specific needs and discover how we can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`mailto:${contactInfo.email}?subject=Business Transformation Consultation`}
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover: bg-white hover:text-blue-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={staggerContainer}
          className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}
        >
          <AnimatePresence>
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 ${
                  viewMode === 'list' ? 'p-6 flex items-center gap-6' : 'p-8'
                }`}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'flex items-start justify-between mb-4'}`}>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    {service.icon}
                  </div>
                  {viewMode === 'grid' && (
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 font-medium">{service.rating}</span>
                    </div>
                  )}
                </div>

                <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.name}
                  </h3>

                  <p className={`text-gray-300 mb-6 ${viewMode === 'list' ? 'line-clamp-2' : 'line-clamp-3'}`}>
                    {service.description}
                  </p>

                  {viewMode === 'grid' && (
                    <div className="space-y-3 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className={`flex items-center justify-between ${viewMode === 'list' ? 'mt-4' : ''}`}>
                    <div className="text-2xl font-bold text-white">
                      ${service.price}
                      <span className="text-sm text-gray-400 font-normal">/month</span>
                    </div>
                    
                    <motion.button
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredServices.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div 
          variants={fadeInUp}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your specific needs and discover how our services can transform your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
              
              <motion.button
                className="border border-white/20 text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
