'use client'
import { TrendingUp } from 'lucide-react'
import React, { useState } from 'react'
import { Send } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Phone, Mail } from 'lucide-react'
import { MapPin, Clock } from 'lucide-react'

constContactPage: React.FC= () =>{const [formDatasetFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    // // // console.log('Form submitted:', formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 3000)
  }

  constservices= [
    'AI Services',
    'IT Services',
    'Micro SAAS Solutions',
    'Cloud Migration',
    'Cybersecurity',
    'DevOps & CI/CD',
    'Database Management',
    'Mobile App Development',
    'Custom Development',
    'Other'
  ]

  const achievements = [
    { icon: Users, text: '100+ Happy Clients' },
    { icon: Award, text: '50+ Successful Projects' },
    { icon: TrendingUp, text: '300% Average ROI' },
    { icon: Shield, text: '99.9% Uptime Guarantee' }
  ]

const Page = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Page
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
=======
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      <Navigation />
      <main className=&quot;container mx-auto px-4 py-16 pt-24&quot;>
        {/* Hero Section */}
        <section className=&quot;text-center mb-16&quot;></section>
          <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;></h1>
            <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent&quot;>
              Contact Us
            </span>
          </h1>
          <p className=&quot;text-xl text-gray-300 mb-8 max-w-4xl mx-auto&quot;>
            Ready to transform your business with cutting-edge AI and IT solutions?
            Get in touch with our experts for a free consultation.
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
          </p>
        </section>
        <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12&quot;></div>
          {/* Contact Form */}
          <div className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-xl p-8&quot;></div>
            <h2 className=&quot;text-2xl font-bold text-white mb-6&quot;>Get Your Free Consultation</h2>
            {isSubmitted ? (
              <div className=&quot;text-center py-8&quot;></div>
                <CheckCircle className=&quot;w-16 h-16 text-green-400 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-bold text-white mb-2&quot;>Thank You!</h3>
                <p className=&quot;text-gray-300&quot;>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;></div>
                  <div></div>
                    <label htmlFor=&quot;name&quot; className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                      Full Name *
                    </label>
                    <input
                      type=&quot;text&quot;
                      id=&quot;name&quot;
                      name=&quot;name&quot;
                      value={formData.name}
                      onChange={handleInputChange}
                     requiredclassName=&quot;w-full px-4 py-3 bg-slate-700text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-nonefocus:ring-2 focus:ring-cyan-400/20&quot;
                     placeholder=&quot;Your fullname&quot;
                    /></di><di v><labelhtmlFor=&quot;email&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Email Address *
                  </labe><inputtype=&quot;email&quot;
                     id=&quot;email&quot;
                     name=&quot;email&quot;
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className=&quot;w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20&quot;
                      placeholder=&quot;your@email.com&quot;
                    />
                  </div>
                </div>
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;></div>
                  <div></div>
                    <label htmlFor=&quot;company&quot; className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                      Company
                    </label>
                    <input
                      type=&quot;text&quot;
                      id=&quot;company&quot;
                      name=&quot;company&quot;
                      value={formData.company}
                      onChange={handleInputChange}
                     className=&quot;w-full px-4 py-3 bg-slate-700text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-nonefocus:ring-2 focus:ring-cyan-400/20&quot;
                     placeholder=&quot;Your companyname&quot;
                    /></di><di v><labelhtmlFor=&quot;phone&quot;className=&quot;block text-sm font-medium text-gray-300mb-2&quot;>Phone Number
                  </labe><inputtype=&quot;tel&quot;
                     id=&quot;phone&quot;
                     name=&quot;phone&quot;
                      value={formData.phone}
                      onChange={handleInputChange}
                      className=&quot;w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20&quot;
                      placeholder=&quot;(555) 123-4567&quot;
                    />
                  </div>
                </div>
                <div></div>
                  <label htmlFor=&quot;service&quot; className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                    Service Interest
                  </label>
                  <select
                    id=&quot;service&quot;
                    name=&quot;service&quot;
                    value={formData.service}
                    onChange={handleInputChange}
                    className=&quot;w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20&quot;
                  >
                    <option value=&quot;&quot;>Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div></div>
                  <label htmlFor=&quot;message&quot; className=&quot;block text-sm font-medium text-gray-300 mb-2&quot;>
                    Message *
                  </label>
                  <textarea
                    id=&quot;message&quot;
                    name=&quot;message&quot;
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className=&quot;w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20&quot;
                    placeholder=&quot;Tell us about your project and how we can help...&quot;
                  />
                </div>
                <button
                  type=&quot;submit&quot;
                  className=&quot;w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 flex items-center justify-center&quot;
                ></button>
                  <Send className=&quot;w-5 h-5 mr-2&quot; />
                  Send Message
                </button>
              </form>
            )}
          </div>
          {/* Contact Information */}
          <div className=&quot;space-y-8&quot;></div>
            {/* Contact Details */}
            <div className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-xl p-8&quot;></div>
              <h2 className=&quot;text-2xl font-bold text-white mb-6&quot;>Get In Touch</h2>
              <div className=&quot;space-y-6&quot;></div>
                <div className=&quot;flex items-start space-x-4&quot;></div>
                  <div className=&quot;w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0&quot;></div>
                    <Phone className=&quot;w-6 h-6 text-cyan-400&quot; />
                  </div>
                  <div></div>
                    <h3 className=&quot;text-lg font-semibold text-white mb-1&quot;>Phone</h3>
                    <a href=&quot;tel:+13024640950&quot; className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors&quot;>
                      +1 (302) 464-0950
                    </a>
                    <p className=&quot;text-sm text-gray-400 mt-1&quot;>Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                <div className=&quot;flex items-start space-x-4&quot;></div>
                  <div className=&quot;w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0&quot;></div>
                    <Mail className=&quot;w-6 h-6 text-cyan-400&quot; />
                  </div>
                  <div></div>
                    <h3 className=&quot;text-lg font-semibold text-white mb-1&quot;>Email</h3>
                    <a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;text-cyan-400 hover:text-cyan-300 transition-colors&quot;>
                      kleber@ziontechgroup.com
                    </a>
                    <p className=&quot;text-sm text-gray-400 mt-1&quot;>We respond within 24 hours</p>
                  </div>
                </div>
                <div className=&quot;flex items-start space-x-4&quot;></div>
                  <div className=&quot;w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0&quot;></div>
                    <MapPin className=&quot;w-6 h-6 text-cyan-400&quot; />
                  </div>
                  <div></div>
                    <h3 className=&quot;text-lg font-semibold text-white mb-1&quot;>Address</h3>
                    <p className=&quot;text-gray-300&quot;></p>
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className=&quot;flex items-start space-x-4&quot;></div>
                  <div className=&quot;w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0&quot;></div>
                    <Clock className=&quot;w-6 h-6 text-cyan-400&quot; />
                  </div>
                  <div></div>
                    <h3 className=&quot;text-lg font-semibold text-white mb-1&quot;>Business Hours</h3>
                    <p className=&quot;text-gray-300&quot;></p>
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday: 10:00 AM - 4:00 PM EST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Achievements */}
            <div className=&quot;bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl p-8&quot;></div>
              <h3 className=&quot;text-xl font-bold text-white mb-6&quot;>Why Choose Us?</h3>
              <div className=&quot;grid grid-cols-2 gap-4&quot;></div>
                {achievements.map((achievement, index) => (
                  <div key={index} className=&quot;text-center&quot;></div>
                    <div className=&quot;w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-2&quot;></div>
                      <achievement.icon className=&quot;w-6 h-6 text-cyan-400&quot; />
                    </div>
                    <p className=&quot;text-sm text-gray-300&quot;>{achievement.text}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Quick Contact */}
            <div className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 text-center&quot;></div>
              <h3 className=&quot;text-xl font-bold text-white mb-4&quot;>Need Immediate Assistance?</h3>
              <p className=&quot;text-gray-300 mb-6&quot;>Call us now for urgent IT support or emergency services.</p>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105&quot;
              >
                <Phone className=&quot;w-5 h-5 mr-2&quot; />
                Call Now: (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;