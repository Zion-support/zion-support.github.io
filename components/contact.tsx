


}transition= {
  {



}whileInView= {
  {
  }
  "opacity": 1, "y": 0 

}transition= {
  {
  }
  "duration": 0.8 

}viewport= {
  {
  }
  "once": true 


  popularServices.map ( (service, index) => (<motion.div key= {
  }
  service.id
}initial= {
  {
  }
  "opacity": 0, "y": 20
}whileInView= {
  {
  }
  "opacity": 1, "y": 0
}transition= {
  {}viewport= {
  {

  /* Service Icon */
}<div className= {
  `w-16 h-16 bg-gradient-to-r $ {`  }
  service.color

  service.icon
}</span> </div> {
  /* Popular Badge */
}{

  service.textColor
}font-semibold text-lg``}> {
  }
  service.price

  service.trialDays
}days</span> </div> </div> </motion.div>) )
}</div> </div> </section> {
  /* Why Choose Us Section */

  {
  }
  "opacity": 1, "y": 0
}transition= {
  {}viewport= {
  {
  }
  "once": true 



            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 30}}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true}}
              className=max-w-4xl mx-auto"
            >
              <div className="text-center mb-12>
                <h2 className=text-3xl md:text-4xl font-bold text-white mb-4">
                  Start Your Transformation Journey
                </h2>
                <p className="text-xl text-gray-300>
                  Tell us about your project and well connect you with the perfect revolutionary technology solution
                </p>
              </div>

              <div className=bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1}}
                    className="text-center py-12
                  >
                    <CheckCircle className=w-20 h-20 text-green-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4>Message Sent Successfully!</h3>
                    <p className=text-gray-300 text-lg">
                      Thank you for reaching out. Our team will get back to you within 2 hours with a personalized solution.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6>
                    <div className=grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name className=block text-sm font-medium text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text
                          id=name"
                          name="name
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className=w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20"
                          placeholder="Enter your full name
                        />
                      </div>
                      
                      <div>
                        <label htmlFor=email" className="block text-sm font-medium text-gray-300 mb-2>
                          Email Address *
                        </label>
                        <input
                          type=email"
                          id="email
                          name=email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20
                          placeholder=Enter your email address"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6>
                      <div>
                        <label htmlFor=company" className="block text-sm font-medium text-gray-300 mb-2>
                          Company Name
                        </label>
                        <input
                          type=text"
                          id="company
                          name=company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20
                          placeholder=Enter your company name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone className=block text-sm font-medium text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel
                          id=phone"
                          name="phone
                          value={formData.phone}
                          onChange={handleInputChange}
                          className=w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20"
                          placeholder="Enter your phone number
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor=service" className="block text-sm font-medium text-gray-300 mb-2>
                        Service of Interest
                      </label>
                      <select
                        id=service"
                        name="service
                        value={formData.service}
                        onChange={handleInputChange}
                        className=w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-xl text-white focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20"
                      >
                        <option value=">Select a service category</option>
                        <option value=ai-services">AI & Machine Learning Services</option>
                        <option value="quantum-computing>Quantum Computing & Space Technology</option>
                        <option value=enterprise-it">Enterprise IT & Infrastructure</option>
                        <option value="micro-saas>Micro SaaS Solutions</option>
                        <option value=biotechnology">Biotechnology & Healthcare</option>
                        <option value="custom-solution>Custom Solution Development</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor=message" className="block text-sm font-medium text-gray-300 mb-2>
                        Project Details *
                      </label>
                      <textarea
                        id=message"
                        name="message
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className=w-full px-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400/40 focus:ring-2 focus:ring-cyan-500/20 resize-none"
                        placeholder="Tell us about your project, goals, and how we can help transform your business with revolutionary technology...
                      />
                    </div>

                    <div className=text-center">
                      <button
                        type="submit
                        disabled={isSubmitting}
                        className=px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center>
                            <div className=animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending Message...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center>
                            <Send className=w-5 h-5 mr-2" />
                            Send Message
                          </span>
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Popular Services Showcase */}
        <section className="py-20 px-4 sm:px-6 lg:px-8>
          <div className=max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30}}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true}}
              className="text-center mb-12
            >
              <h2 className=text-3xl md:text-4xl font-bold text-white mb-4">
                Popular Revolutionary Services
              </h2>
              <p className="text-xl text-gray-300>
                Explore some of our most sought-after 2029 technology solutions
              </p>
            </motion.div>

            <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20}}
                  whileInView={{ opacity: 1, y: 0}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true}}
                  className="group cursor-pointer
                >
                  <div className=p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm hover:transform hover:scale-105">
                    {/* Service Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-2xl>{service.icon}</span>
                    </div>

                    {/* Popular Badge */}
                    {service.popular && (
                      <div className=flex items-center space-x-2 mb-4">
                        <Star className="w-4 h-4 text-yellow-400 fill-current />
                        <span className=text-sm text-yellow-400 font-medium">Popular</span>
                      </div>
                    )}

                    {/* Service Title and Tagline */}
                    <h3 className="text-xl font-semibold text-white mb-2>{service.name}</h3>
                    <p className=text-sm text-cyan-400 mb-3">{service.tagline}</p>
                    
                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-4 line-clamp-3>
                      {service.description}
                    </p>

                    {/* Price */}
                    <div className=mb-4">
                      <span className={`${service.textColor} font-semibold text-lg`}>
                        {service.price}
                      </span>
                      <span className="text-gray-400 text-sm>{service.period}</span>
                    </div>

                    {/* CTA */}
                    <div className=flex items-center justify-between">
                      <span className="text-sm text-gray-400>Setup: {service.setupTime}</span>
                      <span className=text-sm text-gray-400">Trial: {service.trialDays} days</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8>
          <div className=max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30}}
              whileInView={{ opacity: 1, y: 0}}
              transition={{ duration: 0.8 }}
              viewport={{ once: true}}
            >

                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <UltraFuturisticFooter2029 />
    </UltraFuturisticBackground2029>
  )

=======

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
