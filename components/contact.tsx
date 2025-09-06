const [submitSuccess, setSubmitSuccess] = useState (false);
//Get popular services for showcase const popularServices = [ ...innovativeAIServices2029 && innovativeAIServices2029.filter (s => s && s.popular);
...quantumSpaceInnovations2029 && quantumSpaceInnovations2029.filter (s => s && s.popular);
...enterpriseITInnovations2029 && enterpriseITInnovations2029.filter (s => s && s.popular);
...innovativeMicroSaas2029 && innovativeMicroSaas2029.filter (s => s && s.popular) ].slice (0, 6);
=======
const [is_submitting, setIsSubmitting] = useState (false);
const [submit_success, setSubmitSuccess] = useState (false);
//Get popular services for showcase const popular_services = [ ...innovativeAIServices2029.filter (string => s.popular);
...quantumSpaceInnovations2029.filter (string => s.popular);
...enterpriseITInnovations2029.filter (string => s.popular);
...innovativeMicroSaas2029.filter (string => s.popular) ].slice (0, 6);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
setIsSubmitting (false);
setSubmitSuccess (true);
//Reset form after 3 seconds ];
}</motion.div> </div> </section> <motion.div initial= {
=======
}<motion && motion.div > {;
  stats && stats.map ( (stat, index) => (<motion&& motion.div key= {
  stat && stat.label 
}</div> </div> <divclassName= {
  `text-3xl font-bold $ {
  stat && stat.color 
}mb-2` 
}> {;
  stat && stat.value ;
}</div> </div> </div> </motion && motion.div>) ) ;
}</motion && motion.div> </div> </section> <motion&& motion.div initial= {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  {
  {
  opacity: 0, y: 30
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
}viewport= {
  {
  once: true

}initial= {
  {
  opacity: 0, y: 20
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
  {
  opacity: 0, y: 30
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {

}viewport= {
  {
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  once: true 

}> <h2 className="text-3xl sm: text-4xl lg:text-5xl font-bold text-white mb-6"> Why Choose <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Zion Tech Group?</span> </h2> <p className="text-xl text-gray-300 mb-12"> We're not just another technology company - we're your partners in building the future </p> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <div className="text-center"> <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4"> <Rocket className="w-8 h-8 text-white"/> </div> <h3 className="text-xl font-semibold text-white mb-2">Revolutionary Technology</h3> <p className="text-gray-300">Access to cutting-edge 2029 technology that's already operational and delivering results</p> </div> <div className="text-center"> <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4"> <Brain className="w-8 h-8 text-white"/> </div> <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3> <p className="text-gray-300">World-class engineers and technology experts with decades of combined experience</p> </div> <div className="text-center"> <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4"> <Shield className="w-8 h-8 text-white"/> </div> <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3> <p className="text-gray-300">Track record of successful implementations with measurable ROI and business impact</p> </div> </div> </motion && motion.div> </div> </section> </main> <UltraFuturisticFooter2029 /> </UltraFuturisticBackground2029>)             {/* Contact Form */}
            <motion&& motion.div
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
                    initial={{ opacity: 0, scale: 0.9 }}
=======
              className="max-w-4xl mx-auto">;
              <div className="text-center mb-12">;
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">;
                  Start Your Transformation Journey;
                </h2>;
                <p className="text-xl text-gray-300">;
                  Tell us about your project and we'll connect you with the perfect revolutionary technology solution;
                </p>;
              </div>;

              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20">;
                {submitSuccess ? (;
                  <motion&& motion.div
                    initial={{ opacity: 0, scale: 0 && 0.9 }}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
                    animate={{ opacity: 1, scale: 1 }}
                          Email Address *
                        ">;
                          Email Address *;
                        </label>;
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData && formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20"
                          placeholder="Enter your email address"
                          Company Name
                        ">;
                          Company Name;
                        </label>;
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData && formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20"
                          placeholder="Enter your company name"
                          Phone Number
                        ">;
                          Phone Number;
                        </label>;
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData && formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20"
                          placeholder="Enter your phone number"
                        Service of Interest
                      ">;
                        Service of Interest;
                      </label>;
                      <select
                        id="service"
                        name="service"
                        value={formData && formData.service}
                        onChange={handleInputChange}
                        Project Details *
                      ">;
                        Project Details *;
                      </label>;
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData && formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20 resize-none"
                        placeholder="Tell us about your project, goals, and how we can help transform your business with revolutionary technology..."
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">;
                        {isSubmitting ? (;
                          <span className="flex items-center justify-center">;
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>;
                            Sending Message...;
                          </span>;
                        ) : (;
                          <span className="flex items-center justify-center">;
                            <Send className="w-5 h-5 mr-2" />;
                            Send Message;
                          </span>;
                        )}
                      </button>;
                    </div>;
                  </form>;
                )}
        {/* Popular Services Showcase */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer">;
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm hover:transform hover:scale-105">;
                    {/* Service Icon */}
                    {/* Popular Badge */}
                    {service && service.popular && (;
                      <div className="flex items-center space-x-2 mb-4">;
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />;
                        <span className="text-sm text-yellow-400 font-medium">Popular</span>;
                      </div>;
                    )}
                    {/* Service Title and Tagline */}
                    {/* Description */}
                    <p className="text - gray - 300 leading - relaxed mb - 4 line - clamp - 3">;
                      {service.description}
                    {/* Price */}
                    <div className="mb - 4">;
                      <span className={`${service.text_color} font - semibold text - lg`}>;
                        {service.price}
                    {/* CTA */}
                    <div className="flex items-center justify-between">;
                      <span className="text-sm text-gray-400">Setup: {service && service.setupTime}</span>;
                      <span className="text-sm text-gray-400">Trial: {service && service.trialDays} days</span>;
                    </div>;
                  </div>;
                </motion && motion.div>;
              ))}
        {/* Why Choose Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
                      </span>;
                      <span className="text - gray - 400 text - sm">{service.period}</span>;
                    </div>;
                    {/* CTA */}
                    <div className="flex items - center justify - between">;
                      <span className="text - sm text - gray - 400">Setup: {service.setup_time}</span>;
                      <span className="text - sm text - gray - 400">Trial: {service.trial_days} days</span>;
                    </div>;
                  </div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Why Choose Us Section */}
        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className="text - 3xl sm: text - 4xl lg:text - 5xl font - bold text - white mb - 6">;
                Why Choose;
                <span className="bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent"> Zion Tech Group?</span>;
              </h2>;
              <p className="text - xl text - gray - 300 mb - 12">;
                We're not just another technology company - we're your partners in building the future;
              </p>;
              <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
                <div className="text - center">;
                  <div className="w - 16 h - 16 bg - gradient - to - r from - cyan - 500 to - blue - 600 rounded - 2xl flex items - center justify - center mx - auto mb - 4">;
                    <Rocket className="w - 8 h - 8 text - white" />;
                  </div>;
                  <h3 className="text - xl font - semibold text - white mb - 2">Revolutionary Technology</h3>;
                  <p className="text - gray - 300">Access to cutting - edge 2029 technology that's already operational and delivering results</p>;
                </div>;
                <div className="text - center">;
                  <div className="w - 16 h - 16 bg - gradient - to - r from - purple - 500 to - pink - 600 rounded - 2xl flex items - center justify - center mx - auto mb - 4">;
                    <Brain className="w - 8 h - 8 text - white" />;
                  </div>;
                  <h3 className="text - xl font - semibold text - white mb - 2">Expert Team</h3>;
                  <p className="text - gray - 300">World - class engineers and technology experts with decades of combined experience</p>;
                </div>;
                <div className="text - center">;
                  <div className="w - 16 h - 16 bg - gradient - to - r from - pink - 500 to - red - 600 rounded - 2xl flex items - center justify - center mx - auto mb - 4">;
                    <Shield className="w - 8 h - 8 text - white" />;
                  </div>;
                  <h3 className="text - xl font - semibold text - white mb - 2">Proven Results</h3>;
                  <p className="text - gray - 300">Track record of successful implementations with measurable ROI and business impact</p>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </main>;
      <UltraFuturisticFooter2029 />;
    </UltraFuturisticBackground2029>),
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
