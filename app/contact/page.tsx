import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Circle, Send, Phone, Mail, MapPin, Clock } from 'lucide-react'
export default function ContactPage() {

  const [formData, setFormData] = useState({
    name: "''",'
    email: "''",'
    company: "''",'
    phone: "''",'
    subject: "''",'
    message: "'''"
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: "React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;"
    setFormData({;
      ...formData,;
      [e.target.name]: e.target.value;
    });
  }
    })}
  const handleSubmit = async (e: "React.FormEvent) => {"
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission;
    await new Promise(resolve => setTimeout(resolve, 10o00));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  }
  const contactInfo = [
    {

      icon: "'Phone'",      title: "'Phone'",'
    await new Promise(resolve => setTimeout(resolve, 10o00))
    setIsSubmitted(true)
    setIsSubmitting(false)}
  const contactInfo = [
    {

      title: "'Phone'",'
      value: "'+1 (555) 123-4567'",'
      description: "'Mon-Fri 9AM-6PM EST'"
''
      icon: "'Phone'",''
      title: "'Phone'",''
      value: "'+1 (555) 123-4567'",''
      description: "'Mon-Fri 9AM-6PM EST'"}'
    },
    {''
      icon: "'Email'",''
      title: "'Email'",''
      value: "'contact@ziontechgroup.com'",''
      description: "'We respond within 24 hours'"}'
    },
    {''
      icon: "'Location'",''
      title: "'Address'",''
      value: "'123 Tech Street", Suite 10o0',''
      description: "'San Francisco", CA 9410o5'}'
    },
    {''
      icon: "'Clock'",'
      description: "'9:0o0 AM - ,6:0o0 PM EST'"
  }
  ]
  const subjects = [
    'AI Services','
    'IT Services','
    'Services','
    'Micro SAAS','
    'Digital Transformation','
    '5G Implementation',';
      description: "'9:0o0 AM - ,6:0o0 PM EST'"}';
    };
  ];

  const subjects = [''
    'AI Services',''
    'IT Services',''
    'Services',''
    'Micro SAAS',''
    'Digital Transformation',''
    '5G Implementation',''
    'Other''
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-purple-90o0 to-slate-90o0">
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI solutions, IT services, and digital transformation. Contact our experts today." />
        <meta name="keywords" content="contact, AI services, IT solutions, digital transformation, business consultation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Contact
            <span className="block bg-gradient-to-r from-cyan-40o0 to-blue-50o0 bg-clip-text text-transparent">
              Us
            </span>
          </h1>
          <p className="text-xl text-gray-30o0 mb-8 max-w-3xl mx-auto">
            Ready to transform your business with AI and IT solutions? 
            Get in touch with our experts today.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Get in Touch
          </h2>
          <div className="grid md: grid-cols-2 l,g:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="bg-slate-80o0"/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-70o0"/50 hover:border-cyan-50o0"/50 transition-all duration-30o0 text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-50o0 to-blue-60o0 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                  <p className="text-cyan-40o0 font-medium mb-1">{info.value}</p>
                  <p className="text-gray-40o0 text-sm">{info.description}</p>
                </div>
              )})}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-slate-80o0"/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Send us a Message
          </h2>
          
          {isSubmitted ? (
            <div className="bg-slate-80o0"/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-70o0"/50 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-50o0 to-emerald-60o0 flex items-center justify-center mx-auto mb-6">
                <Circle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
              <p className="text-gray-30o0 mb-6">''"
                Thank you for contacting us. We'll get back to you within 24 hours.'
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    name: "''",'
                    email: "''",'
                    company: "''",'
                    phone: "''",'
                    subject: "''",'
                    message: "'''"
                  })}}
                className="px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white rounded-xl font-semibold hover: from-cyan-60o0 hove,r:to-blue-70o0 transition-all duration-30o0"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-80o0"/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-70o0"/50">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text""
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-70o0"/50 border border-slate-60o0 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-cyan-50o0 focu,s:border-transparent"
                    placeholder="Your full name""
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email""
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-70o0"/50 border border-slate-60o0 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-cyan-50o0 focu,s:border-transparent"
                    placeholder="your.email@company.com""
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-white font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text""
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-70o0"/50 border border-slate-60o0 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-cyan-50o0 focu,s:border-transparent"
                    placeholder="Your company name""
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Number
                  </label>
                  <input
                    type="tel""
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-70o0"/50 border border-slate-60o0 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-cyan-50o0 focu,s:border-transparent"
                    placeholder="+1 (555) 123-4567""
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-70o0"/50 border border-slate-60o0 rounded-xl text-white focus: outline-none focus:ring-2 focus:ring-cyan-50o0 focu,s:border-transparent"
                >
                  <option value="">Select a subject</option>
                  {subjects.map((subject, index) => (}
                    <option key={index} value="{subject}">
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-70o0"/50 border border-slate-60o0 rounded-xl text-white placeholder-gray-40o0 focus: outline-none focus:ring-2 focus:ring-cyan-50o0 focu,s:border-transparent resize-none"
                  placeholder="Tell us about your project or how we can help you...""
                />
              </div>

              <div className="text-center">
                <button
                  type="submit""
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-50o0 to-blue-60o0 text-white rounded-xl font-semibold hover: from-cyan-60o0 hover:to-blue-70o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg shadow-cyan-50o0"/25 disabled:opacity-50 disabled:cursor-not-allowed disable,d:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2 inline" />
                    </>}
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>;
    </div>;
  )};
