export default ContactPage;
'use client';import React;
'use client'
, {useState, useCallback} from 'react'
  CheckCircle}
} from 'lucide-react'
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
;
  });const [isSubmitting, setIsSubmitting] = useState(false)
    setSubmitStatus('idle');try {// Simulate form submission;
      await new Promise(const resolve = > setTimeout(resolve, 1000))
      setSubmitStatus('success')
        message: ''}
      })} catch (error) {setSubmitStatus('error')}
    } finally {setIsSubmitting(false)}

  ];
  ];return (
    <React.Fragment   /></React.Fragment>
      <Helmet></Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta const name = "description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, or to discuss your project needs." /    /></meta>
        <meta name="keywords" content="contact us, Zion Tech Group, AI consultation, IT support, get in touch"   /></meta>
      </Helmet>
<div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          {/* Header */}
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2"   /></h1>
              Get in;
              <span className="w-5h-5ml-2"   />{' '}Touch;
              </span>
            </h1>
            <p className="w-5h-5ml-2">Ready to transform your business? Let's discuss your project and explore;
              how our AI and IT solutions can help you achieve your goals.
            </p>
          </div>
        </section>
<div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            {/* Contact Form */}
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="text-3xl font-bold text-white mb-6"  >Send us a Message</h2>
              {submitStatus === 'success' && (<div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"&gt;</div&gt;
                  <CheckCircle className="w-5h-5ml-2"   /></CheckCircle></div>
                  <span className="text-green-400"  &gt;Message sent successfully! We'll get back to you soon.</span&gt;
                </div&gt;}
              )}

              {submitStatus === 'error' && (<div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"&gt;</div&gt;
                  <span className="text-red-400"  &gt;Failed to send message. Please try again.</span&gt;
                </div&gt;}
              )}

              <form onSubmit="{handleSubmit}" className="space-y-6"></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <div   /></div>
                    <label className="w-5h-5ml-2"   />Full Name *
                    </label>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <User className="w-5h-5ml-2"   /></User>
                      />
                    </div>
                  <div   /></div>
                    <label className="w-5h-5ml-2"   />Email Address *
                    </label>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <Mail className="w-5h-5ml-2"   /></Mail>
                      />
                    </div>
                </div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <div   /></div>
                    <label className="w-5h-5ml-2"   />Company;
                    </label>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <Building className="w-5h-5ml-2"   /></Building>
                      />
                    </div>
                  <div   /></div>
                    <label className="w-5h-5ml-2"   />Phone Number;
                    </label>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <Phone className="w-5h-5ml-2"   /></Phone>
                      />
                    </div>
                </div>
                <div   /></div>
                  <label className="w-5h-5ml-2"   />Service Interest;
                  </label>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <Globe className="w-5h-5ml-2"   /></Globe>
                      className="w-fullpl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-whitefocus:outline-nonefocus:border-cyan-500">
                      <option value=""  >Select a service</option>
                      {services.map((service) => (}
                        <option key="{service}" value="{service}"    />{service}
                        </option>
  ))}
                    </select>
                  </div>
                <div   /></div>

                  <label className="block text-sm font-mediumtext-gray-300mb-2">Message *

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

              {/* Contact Information */}

                  <h2 className="text-3 xl font-boldtext-whitemb-6">Get in Touch</h2>
                    We're here to help you transform your business with cutting-edge AI and technology solutions.

                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus: outline-nonefocus:border-cyan-500resize-none"
                      placeholder="Tell us about your project, goals, or any questions you have..."

                  {isSubmitting ? (<React.Fragment   /></React.Fragment>

        </div></div>
                      <span>Sending...</span>
                      <span>Send Message</span>

                    <  />}

                  )}

            {/* Contact Information */}

        </div></div>
              <div   /></div>
                <h2 className="text-3 xl font-boldtext-whitemb-6">Contact Information</h2>
                  We're here to help! Reach out to us through any of these channels

                  and we'll get back to you as soon as possible.
                </p>
              </div>
              {/* Contact Information */}

