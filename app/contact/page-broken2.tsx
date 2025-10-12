'use client'
'use client';import React
, { useState, useCallback } from 'react'
  CheckCircle}
} from 'lucide-react'
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
;
  });const [isSubmitting, setIsSubmitting] = useState(false)
    setSubmitStatus('idle');try {// Simulate form submission
 setTimeout(resolve, 1000))
      setSubmitStatus('success')
        message: ''}
      })} catch (error) {setSubmitStatus('error')}
    } finally {setIsSubmitting(false)}
<<<<<<< HEAD

  ];

  ];return (<React.Fragment /></React.Fragment>
        <title>5G Data Analytics - Zion Tech Group</title>

        <title>Contact Us - Zion Tech Group | Get in Touch</title>

        </div></div>
        </div></div>
          {/* Header */}
    
        </div></div>
              Get in
    
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500bg-clip-texttext-transparent">{' '}Touch
              Ready to transform your business? Let's discuss your project and explore
              how our AI and IT solutions can help you achieve your goals.

        </div></div>
            {/* Contact Form */}
    
        </div></div>
              <h2 className="text-3 xl font-boldtext-whitemb-6">Send us a Message</h2>
              {submitStatus === 'success' && (<div>
        </div></div>
                  <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
                </div>}
              )}

              {submitStatus === 'error' && (<div>
        </div></div>
                  <span className="text-red-400">Failed to send message. Please try again.</span>

                </div>}
              )}

        </div></div>
                  <div /></div>
                    <label className="block text-sm font-mediumtext-gray-300mb-2">Full Name *

                    <div className="relative"></div>

                  <div /></div>

                    <label className="block text-sm font-mediumtext-gray-300mb-2">Email Address *

                    <div className="relative"></div>

        </div></div>
                  <div /></div>
                    <label className="block text-sm font-mediumtext-gray-300mb-2">Company

                    <div className="relative"></div>

                  <div /></div>

                    <label className="block text-sm font-mediumtext-gray-300mb-2">Phone Number

                    <div className="relative"></div>

                <div /></div>

                  <label className="block text-sm font-mediumtext-gray-300mb-2">Service Interest

                  <div className="relative"></div>

                      <option value="">Select a service</option>
 (}
    
                        <option key="{service}" value="{service}">{service}
                        </option>))}
                  <label className="block text-sm font-mediumtext-gray-300mb-2">Message *

                <div /></div>

                  <label className="block text-sm font-mediumtext-gray-300mb-2">Message *

                  <div className="relative"></div>

        </div></div>
                      <span>Sending...</span>
                      <span>Send Message</span>

=======
    }
  }
  ];
  ];return (
    <>
      <React.Fragment /></React.Fragment>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch
        </title>
        <meta const name = "description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, or to discuss your project needs." /  />
        <meta name="keywords" content="contact us, Zion Tech Group, AI consultation, IT support, get in touch" />
      </Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
          {/* Header */}
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
            <h1 className="w-5 h-5 ml-2" />
              Get in
              <span className="w-5 h-5 ml-2" />{' '}Touch
              </span>
            </h1>
            <p className="w-5 h-5 ml-2">Ready to transform your business? Let's discuss your project and explore
              how our AI and IT solutions can help you achieve your goals.
            </p>
          </div>
        </section>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
            {/* Contact Form */}
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <h2 className="text-3 xl font-boldtext-white mb-6"  >Send us a Message</h2>
              {submitStatus === 'success' && (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                  <CheckCircle className="w-5 h-5 ml-2" />
                  <span className="text-green-400"  >Message sent successfully! We'll get back to you soon.</span>
                </div>}
              )}
              {submitStatus === 'error' && (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                  <span className="text-red-400"  >Failed to send message. Please try again.</span>
                </div>}
              )}
              <form onSubmit="{handleSubmit}" className="space-y-6" />
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                  <div /></div></div></div>
                    <label className="w-5 h-5 ml-2" />Full Name *
                    </label>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                      <User className="w-5 h-5 ml-2" />
                      />
                    </div>
                  <div /></div></div></div>
                    <label className="w-5 h-5 ml-2" />Email Address *
                    </label>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                      <Mail className="w-5 h-5 ml-2" />
                      />
                    </div>
                </div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                  <div /></div></div></div>
                    <label className="w-5 h-5 ml-2" />Company
                    </label>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                      <Building className="w-5 h-5 ml-2" />
                      />
                    </div>
                  <div /></div></div></div>
                    <label className="w-5 h-5 ml-2" />Phone Number
                    </label>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                      <Phone className="w-5 h-5 ml-2" />
                      />
                    </div>
                </div>
                <div /></div></div></div>
                  <label className="w-5 h-5 ml-2" />Service Interest
                  </label>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                    <Globe className="w-5 h-5 ml-2" />
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-whitefocus:outline-nonefocus:border-cyan-500">
                      <option value=""  >Select a service</option>
                      {services.map((service) => (}
                        <option key="{service}" value="{service}"  />{service}
                        </option>))}
                    </select>
                  </div>
                <div />
                  </div></div><label className="w-5 h-5 ml-2" />Message *
                  </label>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    </div></div><MessageCircle className="w-5 h-5 ml-2" />
                    </select>
                  </div>
                <div /></div></div></div>
                  <label className="w-5 h-5 ml-2" />Message *
                  </label>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                    <MessageCircle className="w-5 h-5 ml-2" />
                    />
                  </div>
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-centerjustify-centerspace-x-2">
                    <React.Fragment />
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                      <span  >Sending...</span>
                    </React.Fragment>
                    <React.Fragment />
                      <Send className="w-5 h-5 ml-2" />
                      <span  >Send Message</span>
                    </React.Fragment>
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
                  )}
    
            {/* Contact Information */}
<<<<<<< HEAD

                <h2 className="text-3 xl font-boldtext-whitemb-6">Contact Information</h2>
                  We're here to help! Reach out to us through any of these channels

=======
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              </div></div><div />
                </div></div><h2 className="text-3 xl font-boldtext-white mb-6"  >Contact Information</h2>
                <p className="w-5 h-5 ml-2">We're here to help! Reach out to us through any of these channels
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
                  and we'll get back to you as soon as possible.
    
              {/* Contact Information */}
<<<<<<< HEAD

                  <h2 className="text-3 xl font-boldtext-whitemb-6">Get in Touch</h2>
                    We're here to help you transform your business with cutting-edge AI and technology solutions.
    
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-nonefocus:border-cyan-500resize-none"
                      placeholder="Tell us about your project, goals, or any questions you have..."

                  {isSubmitting ? (<React.Fragment /></React.Fragment>

        </div></div>
                      <span>Sending...</span>
                      <span>Send Message</span>

=======
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                </div></div><div />
                  </div></div><h2 className="text-3 xl font-boldtext-white mb-6"  >Get in Touch</h2>
                  <p className="w-5 h-5 ml-2">We're here to help you transform your business with cutting-edge AI and technology solutions.
                  </p>
                </div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                      </div></div><Phone className="w-5 h-5 ml-2" />
                    </div>
                    <div />
</div></div><h3 className="w-5 h-5 ml-2" />
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-nonefocus:border-cyan-500resize-none"
                      placeholder="Tell us about your project, goals, or any questions you have..."
                    />
                  </div>
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-centerjustify-centerspace-x-2">
                  {isSubmitting ? (<React.Fragment /></React.Fragment>
                      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                      <span  >Sending...</span>
                    </>) : (<React.Fragment /></React.Fragment>
                      <Send className="w-5 h-5 ml-2" />
                      <span  >Send Message</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
                    </>}

                  )}
    
            {/* Contact Information */}
<<<<<<< HEAD

        </div></div>
              <div /></div>
                <h2 className="text-3 xl font-boldtext-whitemb-6">Contact Information</h2>
                  We're here to help! Reach out to us through any of these channels

=======
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <div /></div></div></div>
                <h2 className="text-3 xl font-boldtext-white mb-6"  >Contact Information</h2>
                <p className="w-5 h-5 ml-2">We're here to help! Reach out to us through any of these channels
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
                  and we'll get back to you as soon as possible.
    
              {/* Contact Information */}
<<<<<<< HEAD

        </div></div>
                <div /></div>
                  <h2 className="text-3 xl font-boldtext-whitemb-6">Get in Touch</h2>
                    We're here to help you transform your business with cutting-edge AI and technology solutions.
    
        </div></div>
                  <div className="flexitems-center" /></div>
        </div></div>
                    <div /></div>
<h3 className="text-lg font-semiboldtext-whitemb-1">{info.title}
                        {info.details}
    
                        {info.description}
    
                      <h3 className="text-lgfont-semiboldtext-white">Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com</p>
                      <h3 className="text-lgfont-semiboldtext-white">Address</h3>
                      <p className="text-gray-300" />123 Tech Street<br / />San Francisco, CA 94105</p>
                      <h3 className="text-lgfont-semiboldtext-white">Business Hours</h3>
                      <p className="text-gray-300" />Mon - Fri: 9:00 AM - 6:00 PM<br / />Sat: 10:00 AM - 4:00 PM</p>

  )}
export default ContactPage

                  <div className="flexitems-center" /></div>
        </div></div>

                    <div /></div>
                      <h3 className="text-lgfont-semiboldtext-white"  >Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com</p>

                  <div className="flexitems-center" /></div>
        </div></div>
                    <div /></div>
                      <h3 className="text-lgfont-semiboldtext-white">Address</h3>
                      <p className="text-gray-300" />123 Tech Street<br / />San Francisco, CA 94105</p>

                  <div className="flexitems-center" /></div>
        </div></div>
                    <div /></div>
                      <h3 className="text-lgfont-semiboldtext-white">Business Hours</h3>
                      <p className="text-gray-300" />Mon - Fri: 9:00 AM - 6:00 PM<br / />Sat: 10:00 AM - 4:00 PM</p>
;

=======
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                <div /></div></div></div>
                  <h2 className="text-3 xl font-boldtext-white mb-6"  >Get in Touch</h2>
                  <p className="w-5 h-5 ml-2">We're here to help you transform your business with cutting-edge AI and technology solutions.
                  </p>
                </div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                      <Phone className="w-5 h-5 ml-2" />
                    </div>
                    <div /></div></div></div>
<h3 className="w-5 h-5 ml-2" />{info.title}
                      </h3>
                      <p className="w-5 h-5 ml-2">{info.details}
                      </p>
                      <p className="w-5 h-5 ml-2">{info.description}
                      </p>
                    </div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                      </div></div><Mail className="w-5 h-5 ml-2" />
                    </div>
                    <div />
                      </div></div><h3 className="text-lgfont-semiboldtext-white"  >Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com</p>
                    </div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                      </div></div><MapPin className="w-5 h-5 ml-2" />
                    </div>
                    <div />
                      </div></div><h3 className="text-lgfont-semiboldtext-white"  >Address</h3>
                      <p className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105</p>
                    </div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    </div></div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                      </div></div><Clock className="w-5 h-5 ml-2" />
                    </div>
                    <div />
                      </div></div><h3 className="text-lgfont-semiboldtext-white"  >Business Hours</h3>
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
  )}
export default ContactPage
  </textarea>
  </label>
  </label>
  </label>
  </span>
  </HTMLInputElement>
                      </p>
                    </div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                      <Mail className="w-5 h-5 ml-2" />
                    </div>
                    <div /></div></div></div>
                      <h3 className="text-lgfont-semiboldtext-white"  >Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com</p>
                    </div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                      <MapPin className="w-5 h-5 ml-2" />
                    </div>
                    <div /></div></div></div>
                      <h3 className="text-lgfont-semiboldtext-white"  >Address</h3>
                      <p className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105</p>
                    </div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                      <Clock className="w-5 h-5 ml-2" />
                    </div>
                    <div /></div></div></div>
                      <h3 className="text-lgfont-semiboldtext-white"  >Business Hours</h3>
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </>
);
;
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
