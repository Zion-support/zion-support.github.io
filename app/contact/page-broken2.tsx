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
 setTimeout(resolve, 1000))
      setSubmitStatus('success')
        message: ''}
      })} catch (error) {setSubmitStatus('error')}
    } finally {setIsSubmitting(false)}

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

                  )}
    
            {/* Contact Information */}

                <h2 className="text-3 xl font-boldtext-whitemb-6">Contact Information</h2>
                  We're here to help! Reach out to us through any of these channels

                  and we'll get back to you as soon as possible.
    
              {/* Contact Information */}

                  <h2 className="text-3 xl font-boldtext-whitemb-6">Get in Touch</h2>
                    We're here to help you transform your business with cutting-edge AI and technology solutions.
    
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-nonefocus:border-cyan-500resize-none"
                      placeholder="Tell us about your project, goals, or any questions you have..."

                  {isSubmitting ? (<React.Fragment /></React.Fragment>

        </div></div>
                      <span>Sending...</span>
                      <span>Send Message</span>

                    </>}

                  )}
    
            {/* Contact Information */}

        </div></div>
              <div /></div>
                <h2 className="text-3 xl font-boldtext-whitemb-6">Contact Information</h2>
                  We're here to help! Reach out to us through any of these channels

                  and we'll get back to you as soon as possible.
    
              {/* Contact Information */}

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

