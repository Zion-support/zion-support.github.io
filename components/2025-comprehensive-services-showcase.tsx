

// All services combined const allServices = [ ...advancedAIMLServices;

 // All services combined const allServices = [ ...advancedAIMLServices;
};export default ComprehensiveServicesShowcase;
                  {/* CTA Button */}
                  <div className="flex flex-col gap-2">;
                    <a


                      href={`mailto:${(service as any).contact || 'kleber@ziontechgroup.com'}?subject=Inquiry about ${service.name}`}


                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Get Started
                    </a>
                    <a
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Services Display */}
          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <motion.div

                      href={`mailto:${(service as any).contact || 'kleber@ziontechgroup && ziontechgroup.com'}?subject=Inquiry about ${service && service.name}`}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">;
                      <Mail className="w-4 h-4" />;
                      Get Started;
                    </a>;
                    <a
                      href={`tel:${(service as any).mobile || '+1 302 464 0950'}`}
                      className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">;
                      <Phone className="w-4 h-4" />;
                      Call Now;
                    </a>;
                  </div>;
                </div>;
              </motion && motion.div>;
            ))}
          </div>;




          {/* Services Display */}
          <AnimatePresence mode="wait">;
            {viewMode === 'grid' ? (;
              <motion&& motion.div 
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
                {filteredServices && filteredServices.map((service, index) => (;
                  <motion&& motion.div
                    key={service && service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">;
                    {/* Service Header */}
                    <div className={`p-6 bg-gradient-to-r ${service && service.color} text-white`}>;
                      <div className="flex items-center justify-between mb-4">;
                        <span className="text-4xl">{service && service.icon}</span>;
                        {service && service.popular && (;
                          <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">;
                            POPULAR;
                          </span>;
                        )}

                      </div>;
                      <h3 className="text-xl font-bold mb-2">{service && service.name}</h3>;
                      <p className="text-blue-100 text-sm">{service && service.tagline}</p>;



                      

                      </div>;
                      <h3 className="text-xl font-bold mb-2">{service && service.name}</h3>;
                      <p className="text-blue-100 text-sm">{service && service.tagline}</p>;
                      {/* Price */}
                      <div className="mt-4">;
                        <span className="text-2xl font-bold">;
                          {getServicePricing(service)}



                    {/* Service Content */}
                    <div className="p-6">
                      <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                      


                      {/* Price */}
                      <div className="mt - 4">;
                        <span className="text - 2xl font - bold">;
                          {getServicePricing (service)}
                        </span>;
                      </div>;
                    </div>;
                    {/* Service Content */}
                    <div className="p - 6">;
                      <p className="text - gray - 600 mb - 4 line - clamp - 3">{service.description}</p>;
                      {/* Price */}
                      <div className="mb - 4">;
                        <span className="text - 3xl font - bold text - gray - 900">;
                          {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}

                        </span>;
                      </div>;
                    </div>;

                    {/* Service Content */}
                    <div className="p-6">;
                      <p className="text-gray-600 mb-4 line-clamp-3">{service && service.description}</p>;

                      {/* Price */}
                      <div className="mb-4">;
                        <span className="text-3xl font-bold text-gray-900">;
                          {typeof service && service.price === 'string' ? service && service.price : `$${service && service.price.monthly}/month`}
                        </span>;
                        <span className="text-gray-500">;
                          {typeof service && service.price === 'string' ? (service as any).period || '/month' : '/month'}
                        </span>;
                      </div>;



                          {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}
                        </span>
                      </div>

                      {/* Features */}
                      <div className="mb-6">;
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>;
                        <ul className="space-y-1">;
                          {getServiceFeatures(service).slice(0, 4).map((feature, idx) => (;
                            <li key={idx} className="flex items-center text-sm text-gray-600">;
                              <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                              {feature}
                            </li>;
                          ))}





                      {/* Category Badge */}
                      <div className="mb-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                          {getCategoryIcon(service.category)}
                          <span className="ml-1">{service.category}</span>
                        </span>
                      </div>

                        </ul>;
                      </div>;

                      {/* Category Badge */}
                      <div className="mb-4">;
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white`}>;
                          {getCategoryIcon(service && service.category)}
                          <span className="ml-1">{service && service.category}</span>;
                        </span>;
                      </div>;






                      {/* Service Info */}
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">;
                        <div>;
                          <span className="font-medium">Setup:</span> {getServiceSetupTime(service)}

                        </span>;
                        <span className="text - gray - 500">;
                          {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}
                        </span>;
                      </div>;
                      {/* Features */}
                      <div className="mb - 6">;
                        <h4 className="font - semibold text - gray - 900 mb - 2">Key Features:</h4>;
                        <ul className="space - y-1">;
                          {getServiceFeatures (service).slice (0, 4).map ((feature, idx) => (
                            <li key={idx} className="flex items - center text - sm text - gray - 600">;
                              <Check className="w - 4 h - 4 text - green - 500 mr - 2 flex - shrink - 0" />;
                              {feature}
                            </li>))}
                        </ul>;
                      </div>;
                      {/* Category Badge */}
                      <div className="mb - 4">;
                        <span className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white`}>;
                          {getCategoryIcon (service.category)}
                          <span className="ml - 1">{service.category}</span>;
                        </span>;
                      </div>;
                      {/* Service Info */}
                      <div className="grid grid - cols - 2 gap - 4 mb - 4 text - sm text - gray - 600">;
                        <div>;
                          <span className="font - medium">Setup:</span> {getServiceSetupTime (service)}
                        </div>;
                        <div>;
                          <span className="font - medium">Trial:</span> {getServiceTrialDays (service)} days;
                        </div>;
                      </div>;




                      {/* ROI and Popularity */}
                      <div className="flex items - center justify - between mb - 4">;
                        <div className="text - sm">;
                          <span className="text - gray - 500">Expected ROI:</span>;
                          <span className="text - green - 600 font - semibold ml - 1">;
                            {service.roi.split (' ')[0]} ROI;
                          </span>;
                        </div>;
                        {service.popular && (

                          <div className="flex items - center gap - 1 text - yellow - 600">;
                            <Star className="w - 4 h - 4 fill - current" />;
                            <span className="text - sm font - medium">Popular</span>;
                          </div>;
                        </div>;




                        {/* Price and Features */}
                        <div className="lg:w - 1/3">;
                          <div className="text - right mb - 4">;
                            <span className="text - 3xl font - bold text - gray - 900">;
                              {typeof service.price === 'string' ? service.price : `$${service.price.monthly}/month`}


                              {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}
                            </span>
                          </div>


                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                            <ul className="space-y-1 text-sm text-gray-600">
                              {service.features.slice(0, 4).map((feature, idx) => (
                                <li key={idx} className="flex items-center">
                                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        </div>;
                        <div>;
                          <span className="font-medium">Trial:</span> {getServiceTrialDays(service)} days;
                        </div>;
                      </div>;

                      {/* ROI and Popularity */}
                      <div className="flex items-center justify-between mb-4">;
                        <div className="text-sm">;
                          <span className="text-gray-500">Expected ROI:</span>;
                          <span className="text-green-600 font-semibold ml-1">;
                            {service && service.roi.split(' ')[0]} ROI;
                          </span>;
                        </div>;
                        {service && service.popular && (;
                          <div className="flex items-center gap-1 text-yellow-600">;
                            <Star className="w-4 h-4 fill-current" />;
                            <span className="text-sm font-medium">Popular</span>;
                          </div>;
                        </div>;

                        {/* Price and Features */}
                        <div className="lg:w-1/3">;
                          <div className="text-right mb-4">;
                            <span className="text-3xl font-bold text-gray-900">;
                              {typeof service && service.price === 'string' ? service && service.price : `$${service && service.price.monthly}/month`}
                            </span>;
                            <span className="text-gray-500">;
                              {typeof service && service.price === 'string' ? (service as any).period || '/month' : '/month'}
                            </span>;
                          </div>;

                          <div className="mb-4">;
                            <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>;
                            <ul className="space-y-1 text-sm text-gray-600">;
                              {service && service.features.slice(0, 4).map((feature, idx) => (;
                                <li key={idx} className="flex items-center">;
                                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                                  {feature}
                                </li>
                              ))}





                          {/* Category and Action */}
                          <div className="flex flex-col items-end space-y-3">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service.category)} text-white`}>
                              {getCategoryIcon(service.category)}
                              <span className="ml-1">{service.category}</span>
                            </span>

                            </ul>;
                          </div>;

                          {/* Category and Action */}
                          <div className="flex flex-col items-end space-y-3">;
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(service && service.category)} text-white`}>;
                              {getCategoryIcon(service && service.category)}
                              <span className="ml-1">{service && service.category}</span>;
                            </span>;



                            



                            <a
                              href={service && service.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center">;
                              Learn More;
                              <ArrowRight className="w-4 h-4 ml-2" />;
                            </span>;
                            <span className="text - gray - 500">;
                              {typeof service.price === 'string' ? (service as any).period || '/month' : '/month'}
                            </span>;
                          </div>;
                          <div className="mb - 4">;
                            <h4 className="font - semibold text - gray - 900 mb - 2">Features:</h4>;
                            <ul className="space - y-1 text - sm text - gray - 600">;
                              {service.features.slice (0, 4).map ((feature, idx) => (
                                <li key={idx} className="flex items - center">;
                                  <Check className="w - 4 h - 4 text - green - 500 mr - 2 flex - shrink - 0" />;
                                  {feature}
                                </li>))}
                            </ul>;
                          </div>;
                          {/* Category and Action */}
                          <div className="flex flex - col items - end space - y-3">;
                            <span className={`inline - flex items - center px - 3 py - 1 rounded - full text - xs font - medium bg - gradient - to - r ${getCategoryColor (service.category)} text - white`}>;
                              {getCategoryIcon (service.category)}
                              <span className="ml - 1">{service.category}</span>;
                            </span>;
                            <a;
                              href={service.link}
                              target="_blank";
                              rel="noopener noreferrer";
                              className="bg - blue - 600 text - white py - 2 px - 4 rounded - lg hover:bg - blue - 700 transition - colors text - sm font - medium flex items - center";
                            >;
                              Learn More;
                              <ArrowRight className="w - 4 h - 4 ml - 2" />;
                            </a>;
                          </div>;
                        </div>;
                      </div>;
                    </div>;

          </AnimatePresence>;





          </AnimatePresence>;
          {/* No Results */}
          {filteredServices && filteredServices.length === 0 && (;
            <div className="text-center py-12">;
              <div className="text-gray-400 mb-4">;
                <Search className="w-16 h-16 mx-auto" />;
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No services found</h3>;
              <p className="text-gray-600">Try adjusting your search terms or category filters.</p>;
            </div>;
          )}





      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver innovative, enterprise-grade solutions that transform businesses and drive growth
            </p>
          </div>





          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Innovation</h3>
              <p className="text-gray-600">
                Cutting-edge AI and machine learning solutions that deliver real business value
              </p>
            </motion.div>





            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">
                Bank-grade security and compliance for mission-critical business applications
              </p>
            </motion.div>





            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Scale</h3>
              <p className="text-gray-600">
                Cloud-native solutions that scale globally with enterprise-grade reliability
              </p>
            </motion.div>
          </div>
        </div>
      </section>





      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our innovative services can help you achieve your business goals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100">+1 302 464 0950</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
        </div>;
      </section>;

      {/* Why Choose Us */}
      <section className="py-20 bg-white">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center mb-16">;
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">;
              Why Choose Zion Tech Group?;
            </h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              We deliver innovative, enterprise-grade solutions that transform businesses and drive growth;
            </p>;
          </div>;

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.5 }}
              className="text-center p-6">;
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                <Brain className="w-8 h-8 text-blue-600" />;
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Innovation</h3>;
              <p className="text-gray-600">;
                Cutting-edge AI and machine learning solutions that deliver real business value;
              </p>;
            </motion && motion.div>;

            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.5, delay: 0 && 0.1 }}
              className="text-center p-6">;
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                <Shield className="w-8 h-8 text-green-600" />;
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>;
              <p className="text-gray-600">;
                Bank-grade security and compliance for mission-critical business applications;
              </p>;
            </motion && motion.div>;

            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.5, delay: 0 && 0.2 }}
              className="text-center p-6">;
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">;
                <Globe className="w-8 h-8 text-purple-600" />;
              </div>;
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Scale</h3>;
              <p className="text-gray-600">;
                Cloud-native solutions that scale globally with enterprise-grade reliability;
              </p>;
            </motion && motion.div>;
          </div>;
        </div>;
      </section>;

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
          <h2 className="text-3xl md:text-4xl font-bold mb-6">;
            Ready to Transform Your Business?;
          </h2>;
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">;
            Let's discuss how our innovative services can help you achieve your business goals;
          </p>;

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">;
            <div className="text-center">;
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" />;
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>;
              <p className="text-blue-100">+1 302 464 0950</p>;
            </div>;
            <div className="text-center">;
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-300" />;
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>;
              <p className="text-blue-100">kleber@ziontechgroup && ziontechgroup.com</p>;
            </div>;
            <div className="text-center">;
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-300" />;
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>;
              <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p>;
            </div>;
          </div>;

          <div className="flex flex-col sm:flex-row gap-4 justify-center">;
            <a
              href="mailto:kleber@ziontechgroup && ziontechgroup.com?subject=Business Transformation Consultation"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">;
              <Mail className="w-5 h-5" />;
              Start Consultation;
            </a>;
            <a

              href="https://ziontechgroup && ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors flex items-center justify-center gap-2">;
              <Globe className="w-5 h-5" />;
                  </motion.div>))}
              </motion.div>)}
          </AnimatePresence>;
          {/* No Results */}
          {filtered_services.length === 0 && (
            <div className="text - center py - 12">;
              <div className="text - gray - 400 mb - 4">;
                <Search className="w - 16 h - 16 mx - auto" />;
              </div>;
              <h3 className="text - xl font - semibold text - gray - 900 mb - 2">No services found</h3>;
              <p className="text - gray - 600">Try adjusting your search terms or category filters.</p>;
            </div>)}
        </div>;
      </section>;
      {/* Why Choose Us */}
      <section className="py - 20 bg - white">;
        <div className="max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8">;
          <div className="text - center mb - 16">;
            <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
              Why Choose Zion Tech Group?;
            </h2>;
            <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
              We deliver innovative, enterprise - grade solutions that transform businesses and drive growth;
            </p>;
          </div>;
          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.5 }}
              className="text - center p - 6";
            >;
              <div className="w - 16 h - 16 bg - blue - 100 rounded - full flex items - center justify - center mx - auto mb - 4">;
                <Brain className="w - 8 h - 8 text - blue - 600" />;
              </div>;
              <h3 className="text - xl font - semibold text - gray - 900 mb - 2">AI - Powered Innovation</h3>;
              <p className="text - gray - 600">;
                Cutting - edge AI and machine learning solutions that deliver real business value;
              </p>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text - center p - 6";
            >;
              <div className="w - 16 h - 16 bg - green - 100 rounded - full flex items - center justify - center mx - auto mb - 4">;
                <Shield className="w - 8 h - 8 text - green - 600" />;
              </div>;
              <h3 className="text - xl font - semibold text - gray - 900 mb - 2">Enterprise Security</h3>;
              <p className="text - gray - 600">;
                Bank - grade security and compliance for mission - critical business applications;
              </p>;
            </motion.div>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text - center p - 6";
            >;
              <div className="w - 16 h - 16 bg - purple - 100 rounded - full flex items - center justify - center mx - auto mb - 4">;
                <Globe className="w - 8 h - 8 text - purple - 600" />;
              </div>;
              <h3 className="text - xl font - semibold text - gray - 900 mb - 2">Global Scale</h3>;
              <p className="text - gray - 600">;
                Cloud - native solutions that scale globally with enterprise - grade reliability;
              </p>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* Contact Section */}
      <section className="py - 20 bg - gradient - to - r from - blue - 900 to - purple - 900 text - white">;
        <div className="max - w-7xl mx - auto px - 4 sm: px - 6 lg:px - 8 text - center">;
          <h2 className="text - 3xl md:text - 4xl font - bold mb - 6">;
            Ready to Transform Your Business?;
          </h2>;
          <p className="text - xl text - blue - 100 mb - 8 max - w-3xl mx - auto">;
            Let's discuss how our innovative services can help you achieve your business goals;
          </p>;
          <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 8 mb - 8">;
            <div className="text - center">;
              <Phone className="w - 8 h - 8 mx - auto mb - 4 text - blue - 300" />;
              <h3 className="text - lg font - semibold mb - 2">Call Us</h3>;
              <p className="text - blue - 100">+1 302 464 0950</p>;
            </div>;
            <div className="text - center">;
              <Mail className="w - 8 h - 8 mx - auto mb - 4 text - blue - 300" />;
              <h3 className="text - lg font - semibold mb - 2">Email Us</h3>;
              <p className="text - blue - 100">kleber@ziontechgroup.com</p>;
            </div>;
            <div className="text - center">;
              <MapPin className="w - 8 h - 8 mx - auto mb - 4 text - blue - 300" />;
              <h3 className="text - lg font - semibold mb - 2">Visit Us</h3>;
              <p className="text - blue - 100">364 E Main St STE 1008 < br />Middletown DE 19709</p>;
            </div>;
          </div>;
          <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
            <a;
              href="mailto:kleber@ziontechgroup.com?subject = Business Transformation Consultation";
              className="bg - white text - blue - 900 px - 8 py - 3 rounded - lg font - semibold hover:bg - gray - 100 transition - colors flex items - center justify - center gap - 2";
            >;
              <Mail className="w - 5 h - 5" />;
              Start Consultation;
            </a>;
            <a;
              href="https://ziontechgroup.com";
              className="border - 2 border - white text - white px - 8 py - 3 rounded - lg font - semibold hover:bg - white hover:text - blue - 900 transition - colors flex items - center justify - center gap - 2";
            >;
              <Globe className="w - 5 h - 5" />;

              Visit Website;
            </a>;
          </div>;
        </div>;
      </section>;


export default ComprehensiveServicesShowcase;

export default ComprehensiveServicesShowcase;


export default ComprehensiveServicesShowcase;
    </div>);
}
;
export default ComprehensiveServicesShowcase;
;
                      </div>
                    </div>
                  <div className="flex flex-col gap-2">
                    <a
                      href={`mailto:${(service as any).contact || 'kleber@ziontechgroup.com'}?subject=Inquiry about ${service.name}`}                      {/* Category Badge */}
                            </ul>;
                          </div>;
                        </div>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"><Mail className="w-5 h-5" />
              Start Consultation
            </a>
            <a
              Visit Website;
            </a>;
          </div>;
        </div>;
      </section>;
export default ComprehensiveServicesShowcase;

    </div>);
}
export default ComprehensiveServicesShowcase;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
;
