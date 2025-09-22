

                    {category.icon}
                  </div>;
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">;
                    {category.name}
                  </h3>;
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                    {category.description}


                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service) => (
                    <motion.div,
key={service.id}
                      className="bg-black/30 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
                      whileHover={_{ y: -5}}
                    >
                      <h4 className="text-xl font-semibold text-white mb-3">



                        {service.title}
                      </h4>;
                      <p className="text-gray-300 mb-4">;
                        {service.description}
                      </p>;



                      <div className="space-y-3 mb-6">;
                        <div className="flex items-center text-sm text-cyan-400">;
                          <TrendingUp className="w-4 h-4 mr-2" />;
                          {service.marketSize}
                        </div>;
                        <div className="flex items-center text-sm text-green-400">;
                          <Star className="w-4 h-4 mr-2" />;
                          {service.growthRate}


                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="text-2xl font-bold text-white mb-2">
                          Starting at {_(service as any).pricing?.starter || service.price}
                        </div>
                        <div className="text-sm text-gray-400">
                          {_(service as any).pricing?.professional ? 
                            `Professional: ${(service as any).pricing.professional} | Enterprise: ${_(service as any).pricing.enterprise}` :
                            `${service.price} ${service.period}`
                          }
                        </div>
                      </div>
                      
                      <a,
href={_`/services/${service.slug}`}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </motion.div>



                  ))}
                </div>;
              </motion.div>;
            ))}


          </motion.div>
        </div>
      </section>

      {_/* Contact Information */}
      <section id="contact" className="py-16 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2,
className="text-3xl md:text-4xl font-bold text-white mb-8"
            initial={_{ opacity: 0, y: 20}}
            whileInView={_{ opacity: 1, y: 0}}
            viewport={_{ once: true}}
            transition={_{ duration: 0.6}}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.div,
className="grid md:grid-cols-3 gap-8"
            initial={_{ opacity: 0, y: 20}}
            whileInView={_{ opacity: 1, y: 0}}
            viewport={_{ once: true}}
            transition={_{ duration: 0.6, delay: 0.2}}
          >
            <div className="text-center">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-cyan-400 text-lg">{contactInfo.mobile}</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-cyan-400 text-lg">{contactInfo.email}</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-cyan-400 text-lg">{contactInfo.address}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Services by Category */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2,
className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
            initial={_{ opacity: 0, y: 20}}
            whileInView={_{ opacity: 1, y: 0}}
            viewport={_{ once: true}}
            transition={_{ duration: 0.6}}
          >
            Our Comprehensive Service Portfolio
          </motion.h2>
          
          <motion.div,
className="space-y-20"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={_{ once: true}}
          >
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-white text-lg">New Services Added</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">$150B+</div>
              <div className="text-white text-lg">Total Addressable Market</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">40%+</div>
              <div className="text-white text-lg">Average Annual Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">5</div>
              <div className="text-white text-lg">Service Categories</div>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2,
className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={_{ opacity: 0, y: 20}}
            whileInView={_{ opacity: 1, y: 0}}
            viewport={_{ once: true}}
            transition={_{ duration: 0.6}}
          >
            Ready to Lead the Future?
          </motion.h2>
          <motion.p,
className="text-xl text-gray-300 mb-8"
            initial={_{ opacity: 0, y: 20}}
            whileInView={_{ opacity: 1, y: 0}}
            viewport={_{ once: true}}
            transition={_{ duration: 0.6, delay: 0.2}}
          >
            Join thousands of businesses already transforming their operations with our cutting-edge solutions.
          </motion.p>
          <motion.div,
className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={_{ opacity: 0, y: 20}}
            whileInView={_{ opacity: 1, y: 0}}
            viewport={_{ once: true}}
            transition={_{ duration: 0.6, delay: 0.4}}
          >
            <a,
href={`mailto:${contactInfo.email}`}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover: from-cyan-600 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg"            >
              Contact Our Team
            </a>
            <a,
href="https://ziontechgroup.com"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              Visit Website
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )}



