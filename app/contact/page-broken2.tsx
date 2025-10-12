'use client'
'use client';import React
, { useState, useCallback } from 'react'

  CheckCircle}
} from 'lucide-react'
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  });const [isSubmitting, setIsSubmitting] = useState(false)
    setSubmitStatus('idle');try {// Simulate form submission
      await new Promise(const resolve = > setTimeout(resolve, 1000))
      setSubmitStatus('success')
        message: ''}
      })} catch (error) {setSubmitStatus('error')}
    } finally {setIsSubmitting(false)}
    }
  }

  ];
  ];return (<React.Fragment /></React.Fragment>
      <Helmet />
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta const name = "description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, or to discuss your project needs." / / />
        <meta name="keywords" content="contact us, Zion Tech Group, AI consultation, IT support, get in touch" />
      </Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900-to-slate-900py-20"></div>
        <div className="containermx-autopx-4"></div>
          {/* Header */}
          <div className="text-centermb-16"></div>
            <h1 className="text-5 xl lg:text-7 xl font-boldtext-white mb-6" />
              Get in
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500-bg-clip-texttext-transparent"  />{' '}Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3-xlmx-auto" />
              Ready to transform your business? Let's discuss your project and explore
              how our AI and IT solutions can help you achieve your goals.
            </p>
          </div>
        </section>
<div className="grid grid-cols-1-lg:grid-cols-2gap-12"></div>
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2 xl p-8-borderborder-white/10"></div>
              <h2 className="text-3 xl font-boldtext-white mb-6"  >Send us a Message</h2>
              {submitStatus === 'success' && (<div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flexitems-centergap-3"></div>
                  <CheckCircle className="w-5-h-5text-green-400" / />
                  <span className="text-green-400"  >Message sent successfully! We'll get back to you soon.</span>
                </div>}
              )}

              {submitStatus === 'error' && (<div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flexitems-centergap-3"></div>
                  <span className="text-red-400"  >Failed to send message. Please try again.</span>
                </div>}
              )}

              <form onSubmit="{handleSubmit}" className="space-y-6" />
                <div className="grid grid-cols-1-md:grid-cols-2gap-6"></div>
                  <div /></div>
                    <label className="block text-sm font-mediumtext-gray-300-mb-2"  />Full Name *
                    </label>
                    <div className="relative"></div>
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5-h-5text-gray-400" / />
                      />
                    </div>
                  </div>
                  <div /></div>
                    <label className="block text-sm font-mediumtext-gray-300-mb-2"  />Email Address *
                    </label>
                    <div className="relative"></div>
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5-h-5text-gray-400" / />
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1-md:grid-cols-2gap-6"></div>
                  <div /></div>
                    <label className="block text-sm font-mediumtext-gray-300-mb-2"  />Company
                    </label>
                    <div className="relative"></div>
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5-h-5text-gray-400" / />
                      />
                    </div>
                  </div>
                  <div /></div>
                    <label className="block text-sm font-mediumtext-gray-300-mb-2"  />Phone Number
                    </label>
                    <div className="relative"></div>
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5-h-5text-gray-400" / />
                      />
                    </div>
                  </div>
                </div>
                <div /></div>
                  <label className="block text-sm font-mediumtext-gray-300-mb-2"  />Service Interest
                  </label>
                  <div className="relative"></div>
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5-h-5text-gray-400" / />
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-whitefocus:outline-nonefocus:border-cyan-500">
                      <option value=""  >Select a service</option>
                      {services.map((service) => (}
                        <option key="{service}" value="{service}"  />{service}
                        </option>))}
                    </select>
                  </div>
                </div>
                <div />
                  <label className="block text-sm font-mediumtext-gray-300-mb-2"  />Message *
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 w-5-h-5text-gray-400" / />
                    </select>
                  </div>
                </div>
                <div /></div>
                  <label className="block text-sm font-mediumtext-gray-300-mb-2"  />Message *
                  </label>
                  <div className="relative"></div>
                    <MessageCircle className="absolute left-3 top-3 w-5-h-5text-gray-400" / />
                    />
                  </div>
                </div>

                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600  hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-centerjustify-centerspace-x-2">
                    <React.Fragment />
                      <div className="w-5 h-5 border-2 border-white border-t-transparentrounded-fullanimate-spin"></div>
                      <span  >Sending...</span>
                    </React.Fragment>
                    <React.Fragment />
                      <Send className="w-5-h-5" / />
                      <span  >Send Message</span>
                    </React.Fragment>
                  )}
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div className="space-y-8">
              <div />
                <h2 className="text-3 xl font-boldtext-white mb-6"  >Contact Information</h2>
                <p className="text-lgtext-gray-300 mb-8" />
                  We're here to help! Reach out to us through any of these channels
                  and we'll get back to you as soon as possible.
                </p>
              </div>
              {/* Contact Information */}
              <div className="space-y-8">
                <div />
                  <h2 className="text-3 xl font-boldtext-white mb-6"  >Get in Touch</h2>
                  <p className="text-gray-300 mb-8" />
                    We're here to help you transform your business with cutting-edge AI and technology solutions.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-centerjustify-centermr-4">
                      <Phone className="w-6-h-6text-white" / />
                    </div>
                    <div />
<h3 className="text-lg font-semiboldtext-white mb-1" />
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-nonefocus:border-cyan-500-resize-none"
                      placeholder="Tell us about your project, goals, or any questions you have..."
                    />
                  </div>
                </div>

                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600  hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-centerjustify-centerspace-x-2">
                  {isSubmitting ? (<React.Fragment /></React.Fragment>
                      <div className="w-5 h-5 border-2 border-white border-t-transparentrounded-fullanimate-spin"></div>
                      <span  >Sending...</span>
                    </>) : (<React.Fragment /></React.Fragment>
                      <Send className="w-5-h-5" / />
                      <span  >Send Message</span>
                    </>}
                  )}
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div className="space-y-8"></div>
              <div /></div>
                <h2 className="text-3 xl font-boldtext-white mb-6"  >Contact Information</h2>
                <p className="text-lgtext-gray-300 mb-8" />
                  We're here to help! Reach out to us through any of these channels
                  and we'll get back to you as soon as possible.
                </p>
              </div>
              {/* Contact Information */}
              <div className="space-y-8"></div>
                <div /></div>
                  <h2 className="text-3 xl font-boldtext-white mb-6"  >Get in Touch</h2>
                  <p className="text-gray-300 mb-8" />
                    We're here to help you transform your business with cutting-edge AI and technology solutions.
                  </p>
                </div>
                <div className="space-y-6"></div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-centerjustify-centermr-4"></div>
                      <Phone className="w-6-h-6text-white" / />
                    </div>
                    <div /></div>
<h3 className="text-lg font-semiboldtext-white mb-1"  />{info.title}
                      </h3>
                      <p className="text-cyan-400-font-mediummb-1" />
                        {info.details}
                      </p>
                      <p className="text-gray-300-text-sm" />
                        {info.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-centerjustify-centermr-4">
                      <Mail className="w-6-h-6text-white" / />
                    </div>
                    <div />
                      <h3 className="text-lgfont-semiboldtext-white"  >Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-centerjustify-centermr-4">
                      <MapPin className="w-6-h-6text-white" / />
                    </div>
                    <div />
                      <h3 className="text-lgfont-semiboldtext-white"  >Address</h3>
                      <p className="text-gray-300">123 Tech Street<br / />San Francisco, CA 94105</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-centerjustify-centermr-4">
                      <Clock className="w-6-h-6text-white" / />
                    </div>
                    <div />
                      <h3 className="text-lgfont-semiboldtext-white"  >Business Hours</h3>
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br / />Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
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
                  </div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-centerjustify-centermr-4"></div>
                      <Mail className="w-6-h-6text-white" / />
                    </div>
                    <div /></div>
                      <h3 className="text-lgfont-semiboldtext-white"  >Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-centerjustify-centermr-4"></div>
                      <MapPin className="w-6-h-6text-white" / />
                    </div>
                    <div /></div>
                      <h3 className="text-lgfont-semiboldtext-white"  >Address</h3>
                      <p className="text-gray-300">123 Tech Street<br / />San Francisco, CA 94105</p>
                    </div>
                  </div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-centerjustify-centermr-4"></div>
                      <Clock className="w-6-h-6text-white" / />
                    </div>
                    <div /></div>
                      <h3 className="text-lgfont-semiboldtext-white"  >Business Hours</h3>
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br / />Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
;