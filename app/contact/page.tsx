import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react'
;
export default function ContactPage() {}
  // TODO: implement
}
  const contactInfo = [
    {}
      icon: <Mail className="w-6 h-6 text-blue-500" />,
      title: 'Email Us',
      details: 'contact@ziontechgroup.com',
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {}
      icon: <Phone className="w-6 h-6 text-green-500" />,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm PST'
    },
    {}
      icon: <MapPin className="w-6 h-6 text-purple-500" />,
      title: 'Visit Us',
      details: '123 Tech Street, Silicon Valley, CA 94000',
      description: 'Come say hello at our office'
    }
  ]

  return ()
    <>
      <Helmet></Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI solutions, cloud migration, cybersecurity, and IT services. Contact us today for a free consultation." /></meta>
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="pt-20 pb-16"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Get in <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Ready to transform your business? Let's discuss how our AI and IT solutions can drive your success.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-white"></section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="text-center mb-12"></div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-xl text-gray-600">Choose your preferred way to reach us</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {contactInfo.map((info, index) => ()
                <div key={index} className="text-center p-8 bg-gray-50 rounded-xl"></div>
                  <div className="flex justify-center mb-4"></div>
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-lg text-blue-600 font-medium mb-2">{info.details}</p>
                  <p className="text-gray-600">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-gray-50"></section>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"></div>
            <div className="bg-white rounded-xl shadow-lg p-8"></div>
              <div className="text-center mb-8"></div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              
              <form className="space-y-6"></form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div></div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2"></label>
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    /></input>
                  </div>
                  <div></div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2"></label>
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    /></input>
                  </div>
                </div>
                
                <div></div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"></label>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  /></input>
                </div>
                
                <div></div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2"></label>
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  /></input>
                </div>
                
                <div></div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2"></label>
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  ></select>
                    <option value="">Select a service</option>
                    <option value="ai-services">AI Services</option>
                    <option value="it-services">IT Services</option>
                    <option value="cloud-migration">Cloud Migration</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div></div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2"></label>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                ></button>
                  <Send className="w-5 h-5 mr-2" /></Send>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}