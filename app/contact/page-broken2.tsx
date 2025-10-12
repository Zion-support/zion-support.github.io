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
      await new Promise(const resolve = > setTimeout(resolve, 1000))
      setSubmitStatus('success')
        message: ''}
      })} catch (error) {setSubmitStatus('error')}
    } finally {setIsSubmitting(false)}
  ];
  ];return (<div><div><React.Fragment /></React.Fragment></div></div>
      <Helmet><div></div></Helmet></div></div>
        <title>Contact Us - Zion Tech Group | Get in Touch<div></title>
        <meta const name = "description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, or to discuss your project needs." /><div></meta></div></div></div>
        <div><div><meta name="keywords" content="contact us, Zion Tech Group, AI consultation, IT support, get in touch"></meta></div></div>
      </Helmet></div>
<div><div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
          {/* Header */}
          <div><div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
            <h1 className="w-5h-5ml-2"><div></div></h1></div></div>
              Get in;
              <span className="w-5h-5ml-2" />{' '}Touch;
              <div><div></span>
            </h1></div></div>
            <p className="w-5h-5ml-2"></div>Ready to transform your business? Let's discuss your project and explore;
              how our AI and IT solutions can help you achieve your goals.
            <div><div></p>
          </div></div></div>
        </section></div>
<div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
            {/* Contact Form */}
            <div><div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <h2 className="text-3xl font-bold text-white mb-6"  ></div>Send us a Message</h2>
              {submitStatus === 'success' && (<div><div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"&gt;</div&gt;
                  <CheckCircle className="w-5h-5ml-2" /&gt;</CheckCircle></div></div></div>
                  <span className="text-green-400"  &gt;Message sent successfully! We'll get back to you soon.</span&gt;
                </div&gt;}
              )}
              {submitStatus === 'error' && (<div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"&gt;</div&gt;
                  <span className="text-red-400"  &gt;Failed to send message. Please try again.</span&gt;
                </div&gt;}
              )}
              <form onSubmit="{handleSubmit}" className="space-y-6"></div><div><div></div></div></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                  <div><div><div></div></div></div>
                    <label className="w-5h-5ml-2" /></div>Full Name *
                    <div></label>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                      <User className="w-5h-5ml-2"></User>
                      />
                    <div></div>
                  <div><div></div></div></div></div>
                    <label className="w-5h-5ml-2" />Email Address *
                    <div></label>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                      <Mail className="w-5h-5ml-2"></Mail>
                      />
                    <div><div></div>
                </div></div></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
                  <div><div></div></div></div></div>
                    <label className="w-5h-5ml-2" />Company;
                    <div></label>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                      <Building className="w-5h-5ml-2"></Building>
                      />
                    <div></div>
                  <div><div></div></div></div></div>
                    <label className="w-5h-5ml-2" />Phone Number;
                    <div></label>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                      <Phone className="w-5h-5ml-2"></Phone>
                      />
                    <div><div></div>
                </div></div></div>
                <div><div></div></div></div></div>
                  <label className="w-5h-5ml-2" />Service Interest;
                  <div></label>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                    <Globe className="w-5h-5ml-2"></Globe>
                      className="w-fullpl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-whitefocus:outline-nonefocus:border-cyan-500">
                      <option value=""  >Select a service</option>
                      {services.map((service) => (}
                        <option key="{service}" value="{service}"  />{service}
                        </option>))}
                    <div><div></select>
                  </div></div></div>
                <div><div></div></div></div></div>
                  <label className="block text-sm font-mediumtext-gray-300mb-2">Message *
                  <div><div><div className="relative"></div></div></div>
        </div><div></div></div></div></div>
                      <span>Sending...</span>
                      <span>Send Message</span>
                  <label className="w-5h-5ml-2" />Message *
                  <div></label>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                    <div><div><MessageCircle className="w-5h-5ml-2"></MessageCircle></div></div>
                    </select></div>
                  <div><div></div></div></div>
                <div><div></div></div></div></div>
                  <label className="w-5h-5ml-2" />Message *
                  <div></label>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                    <MessageCircle className="w-5h-5ml-2"></MessageCircle>
                    />
                  </div>
                  className="w-fullbg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-centerjustify-centerspace-x-2">
                    <div><div><React.Fragment></React></div></div>
                      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                      <span  >Sending...<div><div></span>
                    </React.Fragment></div></div>
                    <React.Fragment></div><div><div></React></div></div>
                      <Send className="w-5h-5ml-2"><div></Send></div></div></div>
                      <span  >Send Message</span>
                    </React.Fragment>
                  )}
                <div><div></button>
              </form></div></div>
            </div></div>
            {/* Contact Information */}
                <h2 className="text-3 xl font-boldtext-whitemb-6">Contact Information</h2>
                  We're here to help! Reach out to us through any of these channels
                  and we'll get back to you as soon as possible.
              {/* Contact Information */}
                  <h2 className="text-3 xl font-boldtext-whitemb-6">Get in Touch</h2>
                    We're here to help you transform your business with cutting-edge AI and technology solutions.
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-nonefocus:border-cyan-500resize-none"
                      placeholder="Tell us about your project, goals, or any questions you have..."
                  {isSubmitting ? (<div><div><React.Fragment /></React.Fragment></div></div>
        </div><div></div></div></div></div>
                      <span>Sending...</span>
                      <span>Send Message</span>
                    </>}
                  )}
            {/* Contact Information */}
        <div><div></div></div></div></div>
              <div><div></div></div></div></div>
                <h2 className="text-3 xl font-boldtext-whitemb-6">Contact Information</h2>
                  We're here to help! Reach out to us through any of these channels
            <div><div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <div><div></div></div></div></div>
                <h2 className="text-3xl font-bold text-white mb-6"  >Contact Information</h2>
                <p className="w-5h-5ml-2">We're here to help! Reach out to us through any of these channels;
                  and we'll get back to you as soon as possible.
                </p>
              </div>
              {/* Contact Information */}
        <div><div></div></div></div></div>
                <div><div></div></div></div></div>
                  <h2 className="text-3xl font-bold text-white mb-6"  >Get in Touch</h2>
                  <p className="w-5h-5ml-2">We're here to help you transform your business with cutting-edge AI and technology solutions.
                  <div><div></p>
                </div></div></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                    <div><div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                      <Phone className="w-5h-5ml-2"></div><div><div></Phone></div></div>
                    </div>
                    <div></div><div><div></div></div></div>
<h3 className="w-5h-5ml-2"><div></h3></div></div></div>
                      className="w-fullpl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-nonefocus:border-cyan-500resize-none"
                      placeholder="Tell us about your project, goals, or any questions you have..."
                    />
                  </div>
                  className="w-fullbg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-centerjustify-centerspace-x-2">
                  {isSubmitting ? (<div><div><React.Fragment /&gt;</React.Fragment&gt;</React></React></div></div>
                      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"&gt;</div&gt;
                      <span  &gt;Sending...</span&gt;
                    </&gt;) : (<React.Fragment /&gt;</React.Fragment&gt;</React></div><div><div></div></div></div>
                      <Send className="w-5h-5ml-2" /&gt;</Send><div></Send></div></div></div>
                      <div><div><span  &gt;Send Message</span&gt;
                    </&gt;}
                  )}
                </button></div></div></div>
              </form><div></div>
            </div></div></div>
            {/* Contact Information */}
            <div><div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <div><div></div></div></div></div>
                <h2 className="text-3xl font-bold text-white mb-6"  >Contact Information</h2>
                <p className="w-5h-5ml-2">We're here to help! Reach out to us through any of these channels;
                  and we'll get back to you as soon as possible.
                </p>
              </div>
              {/* Contact Information */}
              <div><div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                <div><div></div></div></div></div>
                  <h2 className="text-3xl font-bold text-white mb-6"  >Get in Touch</h2>
                  <p className="w-5h-5ml-2">We're here to help you transform your business with cutting-edge AI and technology solutions.
                  <div><div></p>
                </div></div></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                    <div><div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                      <Phone className="w-5h-5ml-2"></div><div><div></Phone></div></div>
                    </div>
                    <div><div></div></div></div></div>
<h3 className="w-5h-5ml-2" />{info.title}
                      </h3>
                      <p className="w-5h-5ml-2">{info.details}
                      </p>
                      <p className="w-5h-5ml-2">{info.description}
                      <div><div></p>
                    </div></div></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                      <div><div><Mail className="w-5h-5ml-2"></Mail></div></div>
                    </div></div>
                    <div><div><div></div></div></div>
                      <h3 className="text-lgfont-semiboldtext-white"  ></div>Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com<div><div></p>
                    </div></div></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                      <div><div><MapPin className="w-5h-5ml-2"></MapPin></div></div>
                    </div></div>
                    <div><div><div></div></div></div>
                      <h3 className="text-lgfont-semiboldtext-white"  ></div>Address</h3>
                      <p className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105<div><div></p>
                    </div></div></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                      <div><div><Clock className="w-5h-5ml-2"></Clock></div></div>
                    </div></div>
                    <div><div><div></div></div></div>
                      <h3 className="text-lgfont-semiboldtext-white"></div>Business Hours</h3>
                      <p className="text-gray-300" />Mon - Fri: 9:00 AM - 6:00 PM<br / />Sat: 10:00 AM - 4:00 PM</p>
;
                    <div><div></div>
                </div></div></div>
            </div><div></div>
        </section></div></div>
      </div>
  )}
export default ContactPage
  <div><div></textarea>
  </label></div></div>
  </label></div>
  <div><div></label></div></div>
  </span>
  <div></HTMLInputElement></div></div></div>
                      <div><div></p>
                    </div></div></div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div><div></div></div></div></div>
                    <div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div><div><div></div></div></div>
                      <Mail className="w-5 h-5 ml-2" />
                    <div></div></div></div></div>
                    <div><div></div></div><div></div></div></div></div>
                      <h3 className="text-lgfont-semiboldtext-white"  >Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com<div><div></p>
                    </div></div></div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div><div></div></div></div></div>
                    <div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div><div><div></div></div></div>
                      <MapPin className="w-5 h-5 ml-2" />
                    <div></div></div></div></div>
                    <div><div></div></div><div></div></div></div></div>
                      <h3 className="text-lgfont-semiboldtext-white"  >Address</h3>
                      <p className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105<div><div></p>
                    </div></div></div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div><div></div></div></div></div>
                    <div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div><div><div></div></div></div>
                      <Clock className="w-5 h-5 ml-2" />
                    <div></div></div></div></div>
                    <div><div></div></div><div></div></div></div></div>
                      <h3 className="text-lgfont-semiboldtext-white"  >Business Hours</h3>
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM<div><div></p>
                    </div></div></div>
                </div></div>
            <div><div></div></div></div>
        </section>
      <div></div></div></div></div>
    </>
);
;