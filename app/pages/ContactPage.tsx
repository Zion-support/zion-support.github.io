
const ContactPage: React.FC  = () => {
  const [formData, setFormData] = useState({
    name: ',''";"    email: ',''";"    company: ',''";"    phone: ',''";"    service: ',''";"    message: '''";"  });'  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const: handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    const { name, value } = e.target;
    setFormData(prev => ({}
      ...prev,})
      [name]: value;})
    });
  };
  const: handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  const: contactInfo = [
    {
      icon: PhoneIcon,;
      title: 'Phone',''";"      details: '+1-302-464-0950',''";"      description: 'Available 24/7''";"    },'    {
      icon: EnvelopeIcon,
      title: 'Email',''";"      details: 'kleber@ziontechgroup.com',''";"      description: 'Quick response guaranteed''";"    },'    {
      icon: MapPinIcon,
      title: 'Address',''";"      details: '364 E Main St STE 1008',''";"      description: 'Middletown, DE 19709''";"    },'    {
      icon: ClockIcon,
      title: 'Business Hours',''";"      details: 'Monday - Friday: 9:00 AM - 6:00 PM',''";"      description: 'Weekend support available''";"    };'  const: services = [;
    'AI Solutions',''";"    'Cybersecurity',''";"    'Cloud Infrastructure',''";"    'Micro SaaS Solutions',''";"    '5G Technology',''";"    'IT Services',''";"    'Digital Transformation',''";"    'Consulting''";"  ];'  return (

    setFormData({};)
      ...formData
      [e.target.name]: e.target.value
    })
    },

      e.preventDefault(),;
      setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000),
      setIsSubmitting(false),
      setIsSubmitted(true);

    // Reset form after 3 seconds

  ],
      return ()
    <>{}</>
      <Helmet></Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta: name ="description" content="Contact Zion Tech Group for AI and IT solutions. Get in touch via phone, email, or our contact form. We're here to help transform your business." />'""        <meta: name ="keywords" content="contact, get in touch, AI solutions, IT services, consultation, support" />""        <link: rel ="canonical" href="https://ziontechgroup.com/contact" />""      </Helmet>'
const ContactPage: React.FC  = () => {
  return (
    <>
      <SEOHead= title =" Contact Page - Zion Tech Group"""        description="Zion Tech Group  Contact Page service page"""      />

        </div>
      </div>
          <div  className ="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>""        </div>

        <div  className ="container mx-auto px-4 relative z-10">""        <div  className ="container mx-auto px-4 relative z-10">""          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""          <p  className ="text-gray-300">This page is under development...</p>""        </div>
      </div>
            <h1  className ="text-5xl md=text-7xl font-bold text-white mb-6 leading-tight"></h1>""              Get in
              <span  className ="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"></span>""                {' '}Touch""              </span>'            </h1>
            <p  className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>""              Ready to transform your business with cutting-edge AI and IT solutions? 

            </p>
          </div>
        </div>
      </section>

                    Contact Now
                  </a>
                )}
              </div>

          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section: className ="py-20 bg-gradient-to-br from-slate-900 to-purple-900"></section>""        <div  className ="container mx-auto px-4">""        <div  className ="container mx-auto px-4">""          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""          <p  className ="text-gray-300">This page is under development...</p>""        </div>
      </div>
            <div  className ="text-center mb-12"></div>""              <h2  className ="text-4xl font-bold text-white mb-4">Send Us a Message</h2>""              <p  className ="text-xl text-gray-300 max-w-2xl mx-auto"></p>""                Fill out the form below and we'll get back to you within 24 hours.'""              </p>'            </div>

            {isSubmitted ? ()}

              </div>
            ) : ()
              <form: onSubmit ={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8"></form>""                <div  className ="grid grid-cols-1 md=grid-cols-2 gap-6 mb-6">""        <div  className ="grid grid-cols-1 md=grid-cols-2 gap-6 mb-6">""          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""          <p  className ="text-gray-300">This page is under development...</p>""        </div>
      </div>
                    <label: htmlFor ="name" className="block text-white font-medium mb-2"></label>""                      Full Name *
                    </label>
                    <inputtype="text">""                      id="name"""                      name="name"""                      value={formData.name},
      onChange={handleChange},
      required= className ="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"""                      placeholder="Enter your full name"""                    />
                  </div>
                  <div></div>
                    <label: htmlFor ="email" className="block text-white font-medium mb-2"></label>""                      Email Address *
                    </label>
                    <inputtype="email">""                      id="email"""                      name="email"""                      value={formData.email},
      onChange={handleChange},
      required= className ="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"""                      placeholder="Enter your email address"""                    />
                  </div>
                </div>

                <div  className ="grid grid-cols-1 md=grid-cols-2 gap-6 mb-6">""        <div  className ="grid grid-cols-1 md=grid-cols-2 gap-6 mb-6">""          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""          <p  className ="text-gray-300">This page is under development...</p>""        </div>
      </div>
                    <label: htmlFor ="company" className="block text-white font-medium mb-2"></label>""                      Company Name
                    </label>
                    <inputtype="text">""                      id="company"""                      name="company"""                      value={formData.company},
      onChange={handleChange},
      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"""                      placeholder="Enter your company name"""                    />
                  </div>
                  <div></div>
                    <label: htmlFor ="phone" className="block text-white font-medium mb-2"></label>""                      Phone Number
                    </label>
                    <inputtype="tel">""                      id="phone"""                      name="phone"""                      value={formData.phone},
      onChange={handleChange},
      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"""                      placeholder="Enter your phone number"""                    />
                  </div>
                </div>

                <div  className ="grid grid-cols-1 md=grid-cols-2 gap-6 mb-6">""        <div  className ="grid grid-cols-1 md=grid-cols-2 gap-6 mb-6">""          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""          <p  className ="text-gray-300">This page is under development...</p>""        </div>
      </div>
                    <label: htmlFor ="service" className="block text-white font-medium mb-2"></label>""                      Service Interested In
                    </label>
                    <selectid="service">""                      name="service"""                      value={formData.service},
      onChange={handleChange},
      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"""                    ></select>>
                      <option: value ="">Select a service</option>""                      {services.map(service) => ()}
                        <option: key ={index} value={service}>{service}</option>
                      )}
                    </select>
                  </div>
                  <div></div>
                    <label: htmlFor ="budget" className="block text-white font-medium mb-2"></label>""                      Project Budget
                    </label>
                    <selectid="budget">""                      name="budget"""                      value={formData.budget},
      onChange={handleChange},
      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"""                    ></select>>
                      <option: value ="">Select budget range</option>""                      {budgetRanges.map(range) => ()}
                        <option: key ={index} value={range}>{range}</option>
                      )}
                    </select>
                  </div>
                </div>

                <div  className ="mb-8"></div>""                  <label: htmlFor ="message" className="block text-white font-medium mb-2"></label>""                    Project Details *
                  </label>
                  <textareaid="message">""                    name="message"""                    value={formData.message},
      onChange={handleChange},
      required= rows ={6},
      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"""                    placeholder="Tell us about your project, goals, and any specific requirements..."""                  />
                </div>

                <div  className ="text-center"></div>""                  <buttontype="submit">""                    disabled={isSubmitting},
      className="group bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 disabled=from-gray-600 disabled=to-gray-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center mx-auto disabled=transform-none disabled=shadow-none"""                  ></button>>
                    {isSubmitting ? ()}
                      <>{}</>
                        <div  className ="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>""                        Sending...
                      </>
                    ) : ()
                      <>{}</>

                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>

          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section: className ="py-20 bg-slate-800"></section>""        <div  className ="container mx-auto px-4">""        <div  className ="container mx-auto px-4">""          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""          <p  className ="text-gray-300">This page is under development...</p>""        </div>
      </div>
            <h2  className ="text-4xl font-bold text-white mb-4">Other Ways to Connect</h2>""            <p  className ="text-xl text-gray-300 max-w-3xl mx-auto"></p>""              We're available through multiple channels to ensure you can reach us when you need us.'""            </p>'          </div>

          <div  className ="grid grid-cols-1 md=grid-cols-3 gap-8">""        <div  className ="grid grid-cols-1 md=grid-cols-3 gap-8">""          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""          <p  className ="text-gray-300">This page is under development...</p>""        </div>
      </div>
              <MessageSquare: className ="w-12 h-12 text-cyan-400 mx-auto mb-4" />""              <h3  className ="text-xl font-semibold text-white mb-2">Live Chat</h3>""              <p  className ="text-gray-300 mb-4">Chat with our team in real-time for immediate assistance.</p>""              <button  className ="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"></button>""                Start Chat
              </button>
            </div>

            <div  className ="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50 text-center"></div>""              <Calendar: className ="w-12 h-12 text-purple-400 mx-auto mb-4" />""              <h3  className ="text-xl font-semibold text-white mb-2">Schedule Meeting</h3>""              <p  className ="text-gray-300 mb-4">Book a consultation call at your convenience.</p>""              <button  className ="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"></button>""                Book Now
              </button>
            </div>

                Get Support
              </button>
            </div>
          </div>
        </div>
      </section>

    </>
  ),

