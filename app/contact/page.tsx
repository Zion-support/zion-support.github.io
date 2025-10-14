import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: ''
    email: ''
    company: ''
    phone: ''
    subject: ''
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
    })}
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  }
  const contactInfo = [
    {

      icon: 'Phone',      title: 'Phone',
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsSubmitting(false)}
  const contactInfo = [
    {

      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: 'Email'
      title: 'Email'
      value: 'contact@ziontechgroup.com'
      description: 'We respond within 24 hours'
    },
    {
      icon: 'Location'
      title: 'Address'
      value: '123 Tech Street, Suite 100'
      description: 'San Francisco, CA 94105'
    },
    {
      icon: 'Clock'

      description: '9:00 AM - 6:00 PM EST'
    }
  ]
  const subjects = [
    'AI Services'
    'IT Services'
    'Services'
    'Micro SAAS'
    'Digital Transformation'
    '5G Implementation'
    'Other'
  ];

  const services = [
    "AI Business Intelligence",
    "AI Customer Support",
    "AI Content Generation",
    "AI Cybersecurity",
    "5G Solutions",
    "Cloud Infrastructure",
    "Data Analytics",
    "Code Assistant",
    "Marketing Automation",
    "Document Processing",
    "CRM Assistant",
    "Financial Analytics"
  ];

  return (
"
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI and cutting-edge technology? 
            Get in touch with our experts today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-gray-300">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project or requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                We're here to help you succeed. Reach out to us through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{info.title}</h3>
                    <p className="text-blue-400 font-medium">{info.details}</p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-2xl p-6 border border-blue-500/20">
              <h3 className="font-bold text-lg mb-2">Why Choose Zion Tech Group?</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Expert AI and IT solutions
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Custom solutions for your business
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Proven track record of success
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}

            Send us a Message
          </h2>
          
          {isSubmitted ? ("
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center"></div>""
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-6"></div>""
                <Circle className="w-8 h-8 text-white" />"
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
              <p className="text-gray-300 mb-6">
                Thank you for contacting us. We&apos;ll get back to you within 24 hours.
              </p>
              <button)
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    name: ''
                    email: ''
                    company: ''
                    phone: ''
                    subject: ''
                    message: ''
                  });
                }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Send Another Message
              </button>
            </div>)
          ) : ("
            <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">""
              <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div></div>"
                  <label htmlFor="name" className="block text-white font-medium mb-2">"
                    Full Name *
                  </label>
                  <input
"
                    type="text""
                    id="name""
                    name="name"
                    value={ formData.name }
                    onChange={ handleChange }

                    required"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"""
                    placeholder="Your full name""
                  />
                </div>
                <div></div>"
                  <label htmlFor="email" className="block text-white font-medium mb-2">"
                    Email Address *
                  </label>
                  <input
"
                    type="email""
                    id="email""
                    name="email"
                    value={ formData.email }
                    onChange={ handleChange }

                    required"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"""
                    placeholder="your.email@company.com""
                  />
                </div>
              </div>
"
              <div className="grid md:grid-cols-2 gap-6 mb-6"></div>

                <div></div>"
                  <label htmlFor="company" className="block text-white font-medium mb-2">"
                    Company
                  </label>
                  <input
"
                    type="text""
                    id="company""
                    name="company"
                    value={ formData.company }
                    onChange={ handleChange }"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent""
                    placeholder="Your company name"

                  />
                </div>
                <div></div>"
                  <label htmlFor="phone" className="block text-white font-medium mb-2">"
                    Number
                  </label>
                  <input
"
                    type="tel""
                    id="phone""
                    name="phone"
                    value={ formData.phone }
                    onChange={ handleChange }"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"")
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
"
              <div className="mb-6"></div>"
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject *
                </label>
                <select"
                  id="subject""
                  name="subject"
                  value={ formData.subject }
                  onChange={ handleChange }

                  required"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent""
                >
"
                  <option value="">Select a subject</option>
                  { subjects.map((subject, index) => ( }

                    <option key={index} value={subject}>
                      {subject}
                    </option>
))}
                </select>
              </div>
"
              <div className="mb-8"></div>"
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea"
                  id="message""
                  name="message"
                  value={ formData.message }
                  onChange={ handleChange }
                  required
                  rows={ 6 }"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none""
                  placeholder="Tell us about your project or how we can help you..."
                />
              </div>
"
              <div className="text-center"></div>
                <button"
                  type="submit"
                  disabled={ isSubmitting }"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"

                >
                  { isSubmitting ? (
                    <>"
                      <div className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div></div>"
                      Sending...
                    </>)
                  ) : (
                    <>
                      Send Message
"
                      <Send className="w-5 h-5 ml-2 inline" />
                    </>});
                </button>
              </div>
            </form>
)}
        </div>
      </section>

    </div>
  )}
