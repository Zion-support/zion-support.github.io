'use client';
import React from 'react';
'use client';
import React, {useState, useCallback}from 'react';
import {Helmet}}from 'react-helmet-async';
import {Phone,}
  Mail,

  MapPin,

  Clock,

  Send,

  CheckCircle;
  }
} from 'lucide-react'
const ContactPage: React.FC = () => {
    e.preventDefault();
    setIsSubmitting(true)
    setSubmitStatus('idle')
try 
      // Simulate form submission,

      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20"></div></div></div>
        <div className="container mx-auto px-4"></div></div></div>
          {/* Header */}
          <div className="text-center mb-16"></div></div></div>
            <h1>
              Get in;
              </h1></h1><span>
                {', '}Touch;
              </span></span></span>
            </h1>
            <p>Ready to transform your business? Let's discuss your project and explore;</p>
              how our AI and IT solutions can help you achieve your goals.
            </p></p></p>
          </div>
        </section>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div></div></div>
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"></div></div></div>
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2></h2></h2>
              {
    submitStatus === 'success' && (;
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3"></div></div></div>
                  <CheckCircle>
                  <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span></span></span>
                </div>)
  })
              )},
    {
    submitStatus === 'error' && (;
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3"></div></div></div>
                  <span className="text-red-400">Failed to send message. Please try again.</span></span></span>
                </div>)
  })
              )}
<form>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div></div></div>
                  <div />
                    </div></div><label>
                      Full Name *
                    </label>
                    <div className="relative"></div></div></div>
                      <User>
                      <input />
                  </div>
                  <div />
                    </div></div><label>
                      Email Address *
                    </label>
                    <div className="relative"></div></div></div>
                      <Mail>
                      <input />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div></div></div>
                  <div />
                    </div></div><label>
                      Company;
                    </label>
                    <div className="relative"></div></div></div>
                      <Building>
                      <input />
                  </div>
                  <div />
                    </div></div><label>
                      Phone Number;
                    </label>
                    <div className="relative"></div></div></div>
                      <Phone>
                      <input />
                  </div>
                </div>
                <div />
                  </div></div><label>
                    Service Interest,
                  </label>
                  <div className="relative"></div></div></div>
                    <Globe>
                    <select>
                      <option value="">Select a service</option>
                      {services.map((service) => (} <option>

                          {service})
                        </option>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                      ))}

                    </select>
                  </div>
                </div>
