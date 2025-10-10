const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  }),
const [isSubmitting, setIsSubmitting] = useState(false),
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle'),

  useEffect(() => {
    setIsLoaded(true),
  }, []),

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target,
    setFormData(prev => ({
      ...prev,
      [name]: value
    })),
  },

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    setIsSubmitting(true),
    
    // Simulate form submission
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      }),
    }
  ],

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your project and how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                      </>
                    )}
                  </button>
                </form>
      <Navigation />
      <SEOOptimizer
        title="Contact Zion Tech Group - AI & IT Solutions"
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
        description="Get in touch with our AI and IT experts. Contact us for consultations, project inquiries, and enterprise solutions. Call (302) 464-0950 or email kleber@ziontechgroup.com"
        keywords="contact us, AI consulting, IT services, enterprise solutions, consultation"
            </p>

            <div className="flex flex-wrap justify-center gap-6"></div>
              <div className="flex items-center space-x-3 bg-slate-800/50 px-6 py-3 rounded-lg"></div>
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-3 bg-slate-800/50 px-6 py-3 rounded-lg"></div>
                <Mail className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>,
      </section>,
,
      {/* Contact Methods */}
      <section className="py-20">
              <div key={index} className="quantum-card p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto">
        <div className="container mx-auto px-4"></section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">{contactMethods.map((method, index) => (</div>
              <div key={index} className="quantum-card p-6 text-center space-y-4"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <method.icon className="w-8 h-8 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">{method.title}</h3>
                <div className="space-y-2"></div>
                  <div className="text-cyan-400 font-medium">{method.value}</div><div className="text-gray-300 text-sm">{method.description}</div>
                  {method.action && (
                    <a,
                      href={method.action}
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <section className="py-20 bg-gradient-to-br from-slate-800/50 to-purple-900/20">
        <div className="container mx-auto px-4"></section>
          <EnhancedContactForm />
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-slate-800/50">
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center">
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Global Offices</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">We're here to serve you wherever you are in the world</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{offices.map((office, index) => (</div>
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                <h3 className="text-xl font-bold text-white mb-4">{office.city}</h3>
                <div className="space-y-3"></div>
                  <div className="flex items-center justify-center space-x-2"></div>
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-gray-300 text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2"></div>
                    <Phone className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2"></div>
                    <Mail className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm">{office.email}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2"></div>
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300 text-sm">{office.hours}</span><div className="text-cyan-400 text-sm font-medium">{office.timezone}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
            </p>
          </div>
          <div className="max-w-4xl mx-auto"></div>
            <div className="space-y-6">{faqs.map((faq, index) => (</div>
                <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}<p className="text-gray-300">{faq.answer}</p>
                <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                  <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3><p className="text-gray-300">{faq.answer}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer /></Foote>
    </div>
>>>>>>> origin/main
  ),
},

export default ContactPage,
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="cyber-card p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-cyan-400 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Phone</h4>
                        <p className="text-gray-300">(302) 464-0950</p>
                        <p className="text-sm text-gray-400">Available 24/7 for emergencies</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-cyan-400 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Email</h4>
                        <p className="text-gray-300">kleber@ziontechgroup.com</p>
                        <p className="text-sm text-gray-400">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-cyan-400 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Address</h4>
                        <p className="text-gray-300">364 E Main St STE 1008 Middletown, DE 19709</p>
                        <p className="text-sm text-gray-400">Serving clients worldwide</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-cyan-400 mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Business Hours</h4>
                        <p className="text-gray-300">Mon-Fri: 9AM-6PM EST</p>
                        <p className="text-sm text-gray-400">Emergency support available 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cyber-card p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Free initial consultation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">20+ years of experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">300% average ROI</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Enterprise-grade security</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">24/7 support available</span>
                    </div>
                  </div>
                </div>

                <div className="cyber-card p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Quick Response</h3>
                  <p className="text-gray-300 mb-4">
                    Need immediate assistance? Call us now for urgent IT support or AI consultation.
                  </p>
                  <a
                    href="tel:+13024640950"
                    className="cyber-button inline-flex items-center justify-center w-full"
                    style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300">Common questions about our services</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">How quickly can you start a project?</h3>
                <p className="text-gray-300">Most projects can begin within 1-2 weeks after initial consultation and contract signing. Emergency support is available immediately.</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">Do you offer ongoing support?</h3>
                <p className="text-gray-300">Yes, we provide comprehensive ongoing support and maintenance for all our implementations, including 24/7 monitoring and emergency response.</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">What industries do you serve?</h3>
                <p className="text-gray-300">We serve clients across all industries including healthcare, finance, manufacturing, retail, and technology sectors.</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-3">Is the consultation really free?</h3>
                <p className="text-gray-300">Yes, our initial consultation is completely free with no obligations. We'll assess your needs and provide recommendations at no cost.</p>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  ),
},

export default ContactPage,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
