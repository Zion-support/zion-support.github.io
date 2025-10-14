<<<<<<< HEAD
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Circle, Send, Phone, Mail, MapPin, Clock } from 'lucide-react'
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '','
    email: '','
    company: '','
    phone: '','
    subject: '','
    message: '''
  }
=======
import React from "react";
import { Helmet } from "react-helmet-async";

<<<<<<< HEAD
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "" })
>>>>>>> origin/main
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
<<<<<<< HEAD
import React, { useState } from 'react';
import { Helmet , Circle,  Send,  Phone,  Mail,  MapPin,  Clock  } from 'lucide-react";
export default function ContactPage() {
  const [formData, setFormData] = useState({''
    name: '',''
    email: '',''
    company: '',''
    phone: '',''
    subject: '',''
    message: ''}'
  }
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
=======
<<<<<<< HEAD
import React, { useState } from 'react';'
import { Helmet , Circle,  Send,  Phone,  Mail,  MapPin,  Clock } from 'lucide-react';
export default function ContactPage()    {
  const [formData, setFormData] = useState({'
    name: "",'
    email: "",'
    company: "",'
    phone: "",'
    subject: "",'
    message: "" }
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
>>>>>>> origin/main
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value}
<<<<<<< HEAD
    }
    }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsSubmitting(false)
  const contactInfo = [
    {setIsSubmitting(false)
  const contactInfo = [
    {
      icon: 'Phone',      title: 'Phone','
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsSubmitting(false)
  const contactInfo = [
    {
      title: 'Phone','
      value: '+1 (555) 123-4567','
      description: 'Mon-Fri 9AM-6PM EST''
''
      icon: 'Phone',''
      title: 'Phone',''
      value: '+1 (555) 123-4567',''
      description: 'Mon-Fri 9AM-6PM EST'}'
    },
    {''
      icon: 'Email',''
      title: 'Email',''
      value: 'contact@ziontechgroup.com',''
      description: 'We respond within 24 hours'}'
    },
    {''
      icon: 'Location',''
      title: 'Address',''
      value: '123 Tech Street, Suite 100',''
      description: 'San Francisco, CA 94105'}'
    },
    {''
      icon: 'Clock','
      description: '9:00 AM - 6:00 PM EST''
    }
  ]
  const subjects = [
=======
=======
>>>>>>> origin/main
    });
  }
    })}
  const handleSubmit = async (e: React.FormEvent) => { e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false); }
  const contactInfo = [
<<<<<<< HEAD
<<<<<<< HEAD
    { setIsSubmitting(false); }
  };
  const contactInfo = [
    { icon: "Phone",      title: "Phone",
=======
    {

      icon: 'Phone',      title: 'Phone','
>>>>>>> origin/main
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitted(true)
    setIsSubmitting(false) }
  const contactInfo = [
<<<<<<< HEAD
    { title: "Phone",
      value: "+1 (555) 123-4567",
=======
    {

      icon: 'Phone',
icon: 'Phone',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: 'Email',
      title: 'Email',
      value: 'contact@ziontechgroup.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: 'Location',
      title: 'Address',
      value: '123 Tech Street, Suite 100',
      description: 'San Francisco, CA 94105'
    },
    {
      icon: 'Clock',

icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c80
      description: 'Mon-Fri 9AM-6PM EST'
'
      icon: "Phone",'
      title: "Phone",'
      value: "+1 (555) 123-4567",'
      description: "Mon-Fri 9AM-6PM EST" }
    },
    { '
      icon: "Email",'
      title: "Email",'
      value: "contact@ziontechgroup.com",'
      description: "We respond within 24 hours" }
    },
    { '
      icon: "Location",'
      title: "Address",'
      value: "123 Tech Street, Suite 100",'
      description: "San Francisco, CA 94105" }
    },
<<<<<<< HEAD
    { '
      icon: "Clock",
      description: "9:00 AM - 6:00 PM EST" }
  ]
=======
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Friday',
value: 'Monday - Friday',
value: 'Monday - Friday',
      description: '9:00 AM - 6:00 PM EST'
    }
  ];

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0c80
  const subjects = [
    'AI Services',
    'IT Services',
    'Services',
    'Micro SAAS',
    'Digital Transformation',
    '5G Implementation',
      description: "9:00 AM - 6:00 PM EST" }
=======
    {

      title: 'Phone','
      value: '+1 (555) 123-4567','
      description: 'Mon-Fri 9AM-6PM EST'
''
      icon: 'Phone',''
      title: 'Phone',''
      value: '+1 (555) 123-4567',''
      description: 'Mon-Fri 9AM-6PM EST'}'
    },
    {''
      icon: 'Email',''
      title: 'Email',''
      value: 'contact@ziontechgroup.com',''
      description: 'We respond within 24 hours'}'
    },
    {''
      icon: 'Location',''
      title: 'Address',''
      value: '123 Tech Street, Suite 100',''
      description: 'San Francisco, CA 94105'}'
    },
    {''
      icon: 'Clock','
      description: '9:00 AM - 6:00 PM EST'
>>>>>>> origin/main
    }
  ];

  const benefits = [
>>>>>>> origin/main
    'AI Services','
    'IT Services','
    'Services','
    'Micro SAAS','
    'Digital Transformation','
    '5G Implementation','
      description: '9:00 AM - 6:00 PM EST'}'
    }
  ];
<<<<<<< HEAD
=======

>>>>>>> origin/main
  const subjects = [''
    'AI Services',''
    'IT Services',''
    'Services',''
    'Micro SAAS',''
    'Digital Transformation',''
    '5G Implementation',''
    'Other''
  ]
=======
const ContactPage = () => {
>>>>>>> origin/main
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI solutions, IT services, and digital transformation. Contact our experts today." />"
        <meta name="keywords" content="contact, AI services, IT solutions, digital transformation, business consultation" />"
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 px-4">"
        <div className="max-w-7xl mx-auto text-center">"
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">"
=======
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions" />
      </Helmet>
<<<<<<< HEAD
      { /* Hero Section */ }
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
>>>>>>> origin/main
            Contact
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">"
              Us
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
            Ready to transform your business with AI and IT solutions? 
            Get in touch with our experts today.
=======
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
          <p className="text-gray-300 text-lg">
            Get in touch with our team for AI and IT solutions.
>>>>>>> origin/main
          </p>
        </div>
<<<<<<< HEAD
      </section>
<<<<<<< HEAD
      { /* Contact Info */ }
=======

      {/* Contact Info */}
<<<<<<< HEAD
      <section className="py-20 px-4">"
        <div className="max-w-7xl mx-auto">"
          <h2 className="text-4xl font-bold text-white text-center mb-16">"
=======
>>>>>>> origin/main
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
>>>>>>> origin/main
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">"
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
<<<<<<< HEAD
              const Icon = info.icon;
              return (}
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center">"
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">"
                    <Icon className="w-6 h-6 text-white" />"
=======
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
>>>>>>> origin/main
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>"
                  <p className="text-cyan-400 font-medium mb-1">{info.value}</p>"
                  <p className="text-gray-400 text-sm">{info.description}</p>"
                </div>
              )}
          </div>
        </div>
      </section>
<<<<<<< HEAD
      { /* Contact Form */ }
=======

      {/* Contact Form */}
<<<<<<< HEAD
      <section className="py-20 px-4 bg-slate-800/30">"
        <div className="max-w-4xl mx-auto">"
          <h2 className="text-4xl font-bold text-white text-center mb-16">"
=======
>>>>>>> origin/main
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
>>>>>>> origin/main
            Send us a Message
          </h2>
          
          {isSubmitted ? (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center">"
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-6">"
                <Circle className="w-8 h-8 text-white" />"
              </div>
<<<<<<< HEAD
              <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>"
              <p className="text-gray-300 mb-6">''
=======
              <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
              <p className="text-gray-300 mb-6">''"
>>>>>>> origin/main
                Thank you for contacting us. We'll get back to you within 24 hours.'
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    name: "",
                    email: "",
                    company: "",
                    phone: "",
                    subject: "",
                    message: "" })}}
                  setIsSubmitted(false);
                  setFormData({ '
                    name: "",'
                    email: "",'
                    company: "",'
                    phone: "",'
                    subject: "",'
                    message: "" }
                  });
                }}
=======
>>>>>>> origin/main
                    name: '','
                    email: '','
                    company: '','
                    phone: '','
                    subject: '','
                    message: '''
<<<<<<< HEAD
                  }
                  setIsSubmitted(false)
                  setFormData({''
                    name: '',''
                    email: '',''
                    company: '',''
                    phone: '',''
                    subject: '',''
                    message: ''}'
                  }
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300""
=======
                  })}}
>>>>>>> origin/main
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
>>>>>>> origin/main
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">"
              <div className="grid md:grid-cols-2 gap-6 mb-6">"
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">"
                    Full Name *
                  </label>
                  <input
<<<<<<< HEAD
                    type="text""
                    id="name""
                    name="name""
                    value={formData.name}
                    onChange={handleChange}
=======
                    type="text"
                    id="name"
                    name="name"
                    value={ formData.name }
                    onChange={ handleChange }
>>>>>>> origin/main
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent""
                    placeholder="Your full name""
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">"
                    Email Address *
                  </label>
                  <input
<<<<<<< HEAD
                    type="email""
                    id="email""
                    name="email""
                    value={formData.email}
                    onChange={handleChange}
=======
                    type="email"
                    id="email"
                    name="email"
                    value={ formData.email }
                    onChange={ handleChange }
>>>>>>> origin/main
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent""
                    placeholder="your.email@company.com""
                  />
                </div>
              </div>
<<<<<<< HEAD
              <div className="grid md:grid-cols-2 gap-6 mb-6">"
=======

              <div className="grid md:grid-cols-2 gap-6 mb-6">
>>>>>>> origin/main
                <div>
                  <label htmlFor="company" className="block text-white font-medium mb-2">"
                    Company
                  </label>
                  <input
<<<<<<< HEAD
                    type="text""
                    id="company""
                    name="company""
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent""
                    placeholder="Your company name""
=======
                    type="text"
                    id="company"
                    name="company"
                    value={ formData.company }
                    onChange={ handleChange }
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Your company name"
>>>>>>> origin/main
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">"
                    Number
                  </label>
                  <input
<<<<<<< HEAD
                    type="tel""
                    id="phone""
                    name="phone""
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent""
                    placeholder="+1 (555) 123-4567""
                  />
                </div>
              </div>
              <div className="mb-6">"
                <label htmlFor="subject" className="block text-white font-medium mb-2">"
                  Subject *
                </label>
                <select
                  id="subject""
                  name="subject""
                  value={formData.subject}
                  onChange={handleChange}
=======
                    type="tel"
                    id="phone"
                    name="phone"
                    value={ formData.phone }
                    onChange={ handleChange }
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="+1 (555) 123-4567"
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
                  value={ formData.subject }
                  onChange={ handleChange }
>>>>>>> origin/main
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent""
                >
<<<<<<< HEAD
                  <option value="">Select a subject</option>"
                  {subjects.map((subject, index) => (}
=======
                  <option value="">Select a subject</option>
                  { subjects.map((subject, index) => ( }
>>>>>>> origin/main
                    <option key={index} value={subject}>
                      { subject }
                    </option>
                  ))
                </select>
              </div>
<<<<<<< HEAD
              <div className="mb-8">"
                <label htmlFor="message" className="block text-white font-medium mb-2">"
                  Message *
                </label>
                <textarea
                  id="message""
                  name="message""
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none""
                  placeholder="Tell us about your project or how we can help you...""
                />
              </div>
              <div className="text-center">"
                <button
                  type="submit""
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none""
=======

              <div className="mb-8">
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={ formData.message }
                  onChange={ handleChange }
                  required
                  rows={ 6 }
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project or how we can help you..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={ isSubmitting }
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
>>>>>>> origin/main
                >
                  { isSubmitting ? (
                    <>
                      <div className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>"
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
<<<<<<< HEAD
                      <Send className="w-5 h-5 ml-2 inline" />"
                    </>}
=======
                      <Send className="w-5 h-5 ml-2 inline" />
                    </> }
                  )}
>>>>>>> origin/main
                </button>
              </div>
            </form>
          )
        </div>
      </section>
=======
      </div>
>>>>>>> origin/main
    </div>
<<<<<<< HEAD
  )
  )
}''
=======
  );
};

export default ContactPage;



>>>>>>> origin/main
