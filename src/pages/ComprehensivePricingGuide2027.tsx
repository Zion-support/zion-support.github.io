import {

      {/* Futuristic Animated Background */}""
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">""
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,221,210,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,221,210,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>""
        <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/5 via-transparent to-zion-purple/5"></div>
      </div>"
""
      <div className="relative z-10">"
        {/* Hero Section */}""
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
            >""
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8">""
                <DollarSign className="w-4 h-4 mr-2"  />                Comprehensive Pricing Guide 2027
              </div>"
              ""
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
                Transparent Pricing Guide
              </h1>"
              ""
              <p className="text-xl md:text-2xl text-zion-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover our competitive pricing for cutting-edge AI and technology services. 
                Compare our transparent pricing with market rates and see how much you can save.
              </p>"
              ""
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}"
                  whileTap={{ scale: 0.95 }}""
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center""
                >""
                  <Play className="w-5 h-5 mr-2"  />                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}"
                  whileTap={{ scale: 0.95 }}""
                  className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 flex items-center""
                >""
                  <MessageCircle className="w-5 h-5 mr-2"  />                  Contact Sales
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
"
        {/* Service Categories Pricing */}""
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              viewport={{ once: true }}""
              className="text-center mb-16""
            >""
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service Category Pricing"
              </h2>""
              <p className="text-xl text-zion-slate-300 max-w-3xl mx-auto">
                Explore our comprehensive pricing across all service categories with transparent, 
                competitive rates designed for businesses of all sizes.
              </p>
            </motion.div>

            {serviceCategories.map ( (category, categoryIndex) => (<motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}"
                viewport={{ once: true }}""
                className="mb-16""
              >""
                <div className="text-center mb-12">"
                  <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>""
                    <category.icon className="w-10 h-10 text-white" />"
                  </div>""
                  <h3 className="text-3xl font-bold text-white mb-4">{category.name}</h3>""
                  <p className="text-xl text-zion-slate-300 max-w-2xl mx-auto">{category.description}</p>
                </div>"
""
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: serviceIndex * 0.1 }}`
                      viewport={{ once: true }}``
                      className={`relative bg-zion-slate-800/50 backdrop-blur-sm border rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300 ${
`
                        service.popular ? 'border-zion-cyan/50 bg-zion-cyan/5' : 'border-zion-slate-600/50'``
                      }`}
                    >"
                      {service.popular && (""
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">""
                          <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}"
                      ""
                      <div className="text-center mb-6">""
                        <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>""
                        <p className="text-zion-slate-300 mb-4">{service.description}</p>""
                        <div className="text-3xl font-bold text-zion-cyan mb-2">{service.price}</div>""
                        <div className="text-zion-slate-400">{service.period}</div>
                      </div>"
                      ""
                      <ul className="space-y-3 mb-6">"
                        {service.features.map((feature, idx) => (""
                          <li key={idx} className="flex items-center text-zion-slate-300">""
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0"  />                            {feature}
                          </li>) ) }
                      </ul>
                      
                      <Link to={service.link}>
                        <motion.button
                          whileHover={{ scale: 1.02 }}`
                          whileTap={{ scale: 0.98 }}``
                          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
'
                            service.popular''
                              ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25'''`
                              : 'bg-zion-slate-700 text-white hover:bg-zion-slate-600'``
                          }`}
                        >
                          Learn More
                        </motion.button>
                      </Link>
                    </motion.div>) ) }
                </div>
              </motion.div>) ) }
          </div>
        </section>
"
        {/* Enterprise Packages */}""
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-800/30">""
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              viewport={{ once: true }}""
              className="text-center mb-16""
            >""
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Enterprise Packages"
              </h2>""
              <p className="text-xl text-zion-slate-300 max-w-3xl mx-auto">
                Comprehensive solutions for large organizations requiring multiple services and custom solutions
              </p>
            </motion.div>"
""
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {enterprisePackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}`
                  viewport={{ once: true }}``
                  className={`relative bg-zion-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
'
                    pkg.popular ''
                      ? 'border-zion-cyan/50 bg-zion-cyan/5' ''`
                      : 'border-zion-slate-600/50'``
                  }`}
                >"
                  {pkg.popular && (""
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">""
                      <span className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}"
                  ""
                  <div className="text-center mb-8">""
                    <h3 className="text-2xl font-bold text-white mb-4">{pkg.name}</h3>""
                    <div className="mb-4">""
                      <span className="text-4xl font-bold text-white">{pkg.price}</span>""
                      <span className="text-zion-slate-400">{pkg.period}</span>"
                    </div>""
                    <p className="text-zion-slate-300">{pkg.description}</p>
                  </div>"
                  ""
                  <ul className="space-y-4 mb-8">"
                    {pkg.features.map((feature, idx) => (""
                      <li key={idx} className="flex items-center text-zion-slate-300">""
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0"  />                        {feature}
                      </li>) ) }
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}`
                    whileTap={{ scale: 0.98 }}``
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
'
                      pkg.popular''
                        ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white hover:shadow-lg hover:shadow-zion-cyan/25'''`
                        : 'bg-zion-slate-700 text-white hover:bg-zion-slate-600'``
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
"
        {/* Market Comparison */}""
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}"
              viewport={{ once: true }}""
              className="text-center mb-16""
            >""
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Market Price Comparison"
              </h2>""
              <p className="text-xl text-zion-slate-300 max-w-3xl mx-auto">
                See how our transparent pricing compares to competitors and discover the significant savings
              </p>
            </motion.div>"
""
            <div className="bg-zion-slate-800/50 backdrop-blur-sm border border-zion-slate-600/50 rounded-xl p-8">""
              <div className="overflow-x-auto">""
                <table className="w-full">"
                  <thead>""
                    <tr className="border-b border-zion-slate-600">""
                      <th className="text-left py-4 px-4 text-zion-cyan font-semibold">Service Feature</th>""
                      <th className="text-center py-4 px-4 text-zion-cyan font-semibold">Zion Tech Group</th>""
                      <th className="text-center py-4 px-4 text-zion-slate-400 font-semibold">Competitor A</th>""
                      <th className="text-center py-4 px-4 text-zion-slate-400 font-semibold">Competitor B</th>""
                      <th className="text-center py-4 px-4 text-zion-green font-semibold">Your Savings</th>
                    </tr>
                  </thead>
                  <tbody>"
                    {marketComparison.map((item, index) => (""
                      <tr key={index} className="border-b border-zion-slate-700/50">""
                        <td className="py-4 px-4 text-white font-medium">{item.feature}</td>""
                        <td className="py-4 px-4 text-center text-zion-cyan font-bold">{item.zion}</td>""
                        <td className="py-4 px-4 text-center text-zion-slate-300">{item.competitor1}</td>""
                        <td className="py-4 px-4 text-center text-zion-slate-300">{item.competitor2}</td>""
                        <td className="py-4 px-4 text-center text-zion-green font-bold">{item.savings}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
"
        {/* CTA Section */}""
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-cyan/10">""
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}"
            >""
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Save on Premium Services?"
              </h2>""
              <p className="text-xl text-zion-slate-300 mb-8">
                Join thousands of organizations that have already discovered the value and savings 
                of our transparent pricing model.
              </p>"
              ""
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}"
                  whileTap={{ scale: 0.95 }}""
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center""
                >""
                  <Rocket className="w-5 h-5 mr-2"  />                  Start Free Trial
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}"
                  whileTap={{ scale: 0.95 }}""
                  className="px-8 py-4 border border-zion-cyan/30 text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 flex items-center""
                >""
                  <MessageCircle className="w-5 h-5 mr-2"  />                  Schedule Consultation
                </motion.button>
              </motion.div>
            )})}
        </div>

        {/* No Results */}
        {filteredServices.length === 0 && ("
          <div className="text-center py-16">"
            <div className="text-gray-400 text-xl mb-4">No services found matching your criteria</div>
            <button
              onClick={() => {
'
                setSearchTerm('');'
                setSelectedCategory('all');'
                setSelectedPriceRange('all')}}"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        </div>
      </section>
"
        {/* Contact Information */}""
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zion-slate-800/50">""
          <div className="max-w-4xl mx-auto text-center">""
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>""
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">""
              <div className="flex flex-col items-center">""
                <Phone className="w-8 h-8 text-zion-cyan mb-4"  />""
                <p className="text-zion-slate-300">+1 302 464 0950</p>"
              </div>""
              <div className="flex flex-col items-center">""
                <Mail className="w-8 h-8 text-zion-cyan mb-4"  />""
                <p className="text-zion-slate-300">kleber@ziontechgroup.com</p>"
              </div>""
              <div className="flex flex-col items-center">""
                <MapPin className="w-8 h-8 text-zion-cyan mb-4"  />"                <p className="text-zion-slate-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )}
export default ComprehensivePricingGuide2027;'"`
'"`'"`