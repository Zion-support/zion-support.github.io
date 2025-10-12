export default ContactPage;
'use client';import React;
'use client'
, { useState, useCallback } from 'react'
  CheckCircle}
} from 'lucide-react'
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
;
  });const [isSubmitting, setIsSubmitting] = useState(false)
    setSubmitStatus('idle');try {// Simulate form submission;
      await new Promise(
  ];return (
    <div></meta>
        <meta name="keywords" content="contact us, Zion Tech Group, AI consultation, IT support, get in touch" /></meta>
      </Helmet>
<div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          {/* Header */}
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2" /></h1>
              Get in;
              <span className="w-5h-5ml-2" />{' '}Touch;</span>
              </span>
            </h1>
            <p className="w-5h-5ml-2">Ready to transform your business? Let's discuss your project and explore;</p>
              how our AI and IT solutions can help you achieve your goals.</p>
            </p>
          </div>
        </section>
<div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            {/* Contact Form */}
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="text-3xl font-bold text-white mb-6"  >Send us a Message</h2>
              {submitStatus === 'success' && (<div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"&gt;</div&gt;
                  <CheckCircle className="w-5h-5ml-2" /&gt;</CheckCircle></div>
                  <span className="text-green-400"  &gt;Message sent successfully! We'll get back to you soon.</span&gt;
                </div&gt;}
              )}

              {submitStatus === 'error' && (<div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"&gt;</div&gt;
                  <span className="text-red-400"  &gt;Failed to send message. Please try again.</span&gt;
                </div&gt;}
              )}

              <form onSubmit="{handleSubmit}" className="space-y-6" /></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <div /></div>
                    <label className="w-5h-5ml-2" />Full Name *</label>
                    </label>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <User className="w-5h-5ml-2" /></User>
                      />
                    </div>
                  <div /></div>
                    <label className="w-5h-5ml-2" />Email Address *</label>
                    </label>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <Mail className="w-5h-5ml-2" /></Mail>
                      />
                    </div>
                </div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <div /></div>
                    <label className="w-5h-5ml-2" />Company;</label>
                    </label>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <Building className="w-5h-5ml-2" /></Building>
                      />
                    </div>
                  <div /></div>
                    <label className="w-5h-5ml-2" />Phone Number;</label>
                    </label>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <Phone className="w-5h-5ml-2" /></Phone>
                      />
                    </div>
                </div>
                <div /></div>
                  <label className="w-5h-5ml-2" />Service Interest;</label>
                  </label>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <Globe className="w-5h-5ml-2" /></Globe>
                      className="w-fullpl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-whitefocus:outline-nonefocus:border-cyan-500">
                      <option value=""  >Select a service</option>
                      {services.map((service) => (}
                        <option key="{service}" value="{service}"  />{service}</option>
                        </option>))}
                    </select>
                  </div>
                <div /></div>

                  <label className="block text-sm font-mediumtext-gray-300mb-2">Message *</label>
</label>
                  <div className="relative"></div>

        </div></div>
                      <span>Sending...</span>
                      <span>Send Message</span>

                  )}
                </button>
              </form>
            </div>
            {/* Contact Information */}

                <h2 className="text-3 xl font-boldtext-whitemb-6">Contact Information</h2>
                  We're here to help! Reach out to us through any of these channels

                  and we'll get back to you as soon as possible.
                </p>
              </div>
              {/* Contact Information */}

        </div></div>
                <div /></div>
                  <h2 className="text-3xl font-bold text-white mb-6"  >Get in Touch</h2>
                  <p className="w-5h-5ml-2">We're here to help you transform your business with cutting-edge AI and technology solutions.</p>
                  </p>
                </div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <Phone className="w-5h-5ml-2" /></Phone>
                    </div>
                    <div /></div>
<h3 className="w-5h-5ml-2" /></h3>
                      className="w-fullpl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-nonefocus:border-cyan-500resize-none"
                      placeholder="Tell us about your project, goals, or any questions you have..."
                    />
                  </div>
                  className="w-fullbg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-centerjustify-centerspace-x-2">
                  {isSubmitting ? (<React.Fragment /&gt;</React.Fragment&gt;</React></React>
                      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"&gt;</div&gt;
                      <span  &gt;Sending...</span&gt;
                    </&gt;) : (<React.Fragment /&gt;</React.Fragment&gt;</React></div>
                      <Send className="w-5h-5ml-2" /&gt;</Send></Send>
                      <span  &gt;Send Message</span&gt;
                    </&gt;}
                  )}
                </button></div>
              </form>
            </div>
            {/* Contact Information */}
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div /></div>
                <h2 className="text-3xl font-bold text-white mb-6"  >Contact Information</h2>
                <p className="w-5h-5ml-2">We're here to help! Reach out to us through any of these channels;</p>
                  and we'll get back to you as soon as possible.</p>
                </p>
              </div>
              {/* Contact Information */}
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <div /></div>
                  <h2 className="text-3xl font-bold text-white mb-6"  >Get in Touch</h2>
                  <p className="w-5h-5ml-2">We're here to help you transform your business with cutting-edge AI and technology solutions.</p>
                  </p>
                </div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <Phone className="w-5h-5ml-2" /></Phone>
                    </div>
                    <div /></div>
<h3 className="w-5h-5ml-2" />{info.title}</h3>
                      </h3>
                      <p className="w-5h-5ml-2">{info.details}</p>
                      </p>
                      <p className="w-5h-5ml-2">{info.description}</p>
                      </p>
                    </div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <Mail className="w-5h-5ml-2" /></Mail>
                    </div>
                    <div /></div>
                      <h3 className="text-lgfont-semiboldtext-white"  >Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com</p>
                    </div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <MapPin className="w-5h-5ml-2" /></MapPin>
                    </div>
                    <div /></div>
                      <h3 className="text-lgfont-semiboldtext-white"  >Address</h3>
                      <p className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105</p>
                    </div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <Clock className="w-5h-5ml-2" /></Clock>
                    </div>
                    <div /></div>
                      <h3 className="text-lgfont-semiboldtext-white">Business Hours</h3>
                      <p className="text-gray-300" />Mon - Fri: 9:00 AM - 6:00 PM<br / />Sat: 10:00 AM - 4:00 PM</p>
;

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
                      <Mail className="w-5 h-5 ml-2" /></Mail>
                    </div>
                    <div /></div></div></div>
                      <h3 className="text-lgfont-semiboldtext-white"  >Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com</p>
                    </div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                      <MapPin className="w-5 h-5 ml-2" /></MapPin>
                    </div>
                    <div /></div></div></div>
                      <h3 className="text-lgfont-semiboldtext-white"  >Address</h3>
                      <p className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105</p>
                    </div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                      <Clock className="w-5 h-5 ml-2" /></Clock>
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
