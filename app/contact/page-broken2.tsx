'use client'
import React from 'react'
'use client'
import React, { useState, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import {
    Phone,
  Mail,

  MapPin,

  Clock,

  Send,

    message: '',}});
const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
                {,}const {name, value}}= e.target;
    setFormData(prev => ({)
    ...prev,
      [name]: value;}}));
  }, []);
const handleSubmit = async (e: React.FormEvent) =>
                {;
    e.preventDefault();
    setIsSubmitting(true)
    setSubmitStatus('idle')
try {// Simulate form submission,}
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({)
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: '',}})
    } catch (error) {setSubmitStatus('error')}} finally {setIsSubmitting(false)}}}
  CheckCircle
  }
} from 'lucide-react'
const ContactPage: React.FC  = () => {
    const [formData, setFormData] = useState()
  })
const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
                {}
    const { name, value } = e.target
    setFormData()
    }))
  }, [])
const handleSubmit = async (e: React.FormEvent) =>
                {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
try {
      // Simulate form submission,

      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData()
      })
    } catch (error) {
    setSubmitStatus('error')
  }
    } finally {
    setIsSubmitting(false)
  }
    }
  }
const services = [
    'AI Solutions',
    'Cloud Computing',
    'Mobile App Development',
    'Web Development',
    'Data Analytics',

    'Cybersecurity',

    'DevOps',

    'Consulting',

    'Other'
  ]
  const contactInfo = [
    {
    icon: Phone,
      title: 'Phone',
      details: '+1 (302) 464-0950',
      description: 'Mon-Fri 9AM-6PM EST',},
    {icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'We respond within 24 hours',},
    {icon: MapPin,
      title: 'Address',
      details: '123 Tech Street, Suite 100\nWilmington, DE 19801',
      description: 'Visit our office',},
    {icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM',
      description: 'Eastern Time'
  }
    }
  ]
return (
    <>
      <Helmet></Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
                </Helmet><title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20"></div>
        <div className="container mx-auto px-4"></div>
                {/* Header */}
                <div className="text-center mb-16"></div>
            <h1></h1>
              Get in</h1><span></span>
                {' '}Touch
              </span>
                </h1>
            <p></p>
              Ready to transform your business? Let's discuss your project and explore
              how our AI and IT solutions can help you achieve your goals.
            </p>
                </div>
        </section>
<div className="grid grid-cols-1 lg: grid-cols-2 gap-12"></div>,
            {/* Contact Form */}
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"></div>
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
                </div>
  }
              )},
    {
    submitStatus === 'error' && (;
              {
    submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3"></div>
                  <CheckCircle></CheckCircle>
                  </CheckCircle><span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
                </div>
  }
              )}
{
    submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3"></div>
                  <span className="text-red-400">Failed to send message. Please try again.</span>
                </div>})}
                <form></form>
                </form><div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>
                  <div />
                    <label></label>
                      Full Name *
                    </label>
                    <div className="relative"></div>
                      <User></User>
                      </User><input />
                  </div>
                  <div / /></div>
                    <label></label>
                      Email Address *
                    </label>
                    <div className="relative"></div>
                      <Mail></Mail>
                      </Mail><input />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" / /></div>
                  <div / /></div>
                    <label></label>
                      Company
                    </label>
                    <div className="relative"></div>
                      <Building></Building>
                      </Building><input />
                  </div>
                  <div / /></div>
                    <label></label>
                      Phone Number
                    </label>
                    <div className="relative"></div>
                      <Phone></Phone>
                      </Phone><input />
                  </div>
                </div>
                <div / /></div>
                  <label></label>
                    Service Interest,
                  </label>
                  <div className="relative"></div>
                    <Globe></Globe>
                    </Globe><select></select>
                      </select><option value="">Select a service</option>
                {services.map((service) => ()
                      ))}
                </select>
                </div>
                </div>
                <div / /></div>
                  <label></label>
                    Message *
                  </label>
                  <div className="relative"></div>
                    <MessageCircle></MessageCircle>
                    </MessageCircle><textarea />
                </div>
                <button></button>
                {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send></Send>
                      </Send><span>Send Message</span>
                    </>
  }
                <div className="relative"></div>
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="Your full name"
                      />
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Email Address *
                    <div className="relative"></div>
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="your@email.com"
                      />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Company
                    <div className="relative"></div>
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="Your company"
                      />
                  <div></div>
                    <label className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Phone Number
                    <div className="relative"></div>
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="+1 (555) 123-4567"
                      />
                <div></div>
                  <label className="block text-sm font-medium text-gray-300 mb-2"></label>
                    Service Interest
                  <div className="relative"></div>
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"></select
>
                      <option value="">Select a service
                      {services.map((service) => (
                        <option key={service} value={service}></option>
                {service}
                      ))}
                <div></div>
                  <label className="block text-sm font-medium text-gray-300 mb-2"></label>
                    Message *
                  <div className="relative"></div>
                    <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 resize-none"
                      placeholder="Tell us about your project, goals, or any questions you have..."
                    />
                <$2 />
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
                {isSubmitting ? (
                    <React.Fragment></React.Fragment>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...
                  ) : (
                    <React.Fragment></React.Fragment>
                      <Send className="w-5 h-5" />
                      <span>Send Message
                  )}
            {/* Contact Information */}
                <div className="space-y-8" / /></div>
              <div / /></div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p></p>
                  We're here to help! Reach out to us through any of these channels
                  and we'll get back to you as soon as possible.
              {/* Contact Information */}
                <div className="space-y-8" / /></div>
                <div / /></div>
                  <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                  <p></p>
                    We're here to help you transform your business with cutting-edge AI and technology solutions.
                  </p>
                </div>
                <div className="space-y-6" / /></div>
                  <div className="flex items-center" / /></div>
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4" / /></div>
                      <Phone / /></Phone>
                    <div / /></div>
<h3></h3>
                {info.title}
                </h3>
                      <p></p>
                {info.details}
                </p>
                      <p></p>
                {info.description}
                </p>
                </div>
                  </div>
                  <div className="flex items-center" / /></div>
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4" / /></div>
                      <Mail / /></Mail>
                    <div / /></div>
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com</p>
                </div>
                  </div>
                  <div className="flex items-center" / /></div>
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4" / /></div>
                      <MapPin / /></MapPin>
                    <div / /></div>
                      <h3 className="text-lg font-semibold text-white">Address</h3>
                      <p className="text-gray-300">123 Tech Street</p><br />San Francisco, CA 94105</p>
                </div>
                  </div>
                  <div className="flex items-center" / /></div>
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4" / /></div>
                      <Clock / /></Clock>
                    <div / /></div>
                      <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p><br />Sat: 10:00 AM - 4:00 PM</p>
                </div>
                  </div>
                </div>
              </div>
            ))
          </div>
                </section>
      </div>
                </div>
  ),
}
export default ContactPage</$1>
                </span>
