import { CheckCircle, Phone, Mail } from 'lucide-react'
import { MapPin, Clock } from 'lucide-react'
=======
'use client';
import React, { useState } from 'react';
import { Send, CheckCircle, Phone, Mail, Shield, TrendingUp, Database, Users, Clock, MapPin, Check } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
'use client'
import { Trending, U, p } from 'lucide-react'
import React, { useSta, t, e } from 'react'
import { Se, n, d } from "lucide-react";
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
<<<<<<< HEAD
import { CheckCircle, Phone, Mail } from "lucide-react";
import { MapPin, Clock  } from "lucide-react";
constContactPage: React.FC= () => {
  const [formDatasetFormDa, t, a] = useState({
    name: ',',
      email: ',',
    company: ',',
      phone: ',',
    service: ',',

constContactPage: React.FC= () =>{const [formDatasetFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2f6c
    message: ''
 ,
})

  const [isSubmitted, setIsSubmitted] = useState(fal, s, e)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { nam, e, value
} = e.target
    setFormData(prev => ({
      ...prev
      [na, m, e]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
    // Here you would typically send the form data to your backend
    // // // console.log('Form submitted:,', formData)
    setIsSubmitted(tr, u, e)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(fal, s, e)
      setFormData({
        name: ',&apos;,
        email: ',',
      company: ',',
        phone: ',',
      service: ',',
        message: ''
     ,
})
    }, 3000)
  }

  constservices= ['AI Services',
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
    { icon: User, text: '100+ Happy Clients', },
    { icon: Awar, text: '50+ Successful Projects', },
    { icon: TrendingU, text: '300% Average ROI', },
    { icon: Shiel, text: '99.9% Uptime Guarantee', }
  ]

const Page = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16"></section>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Ready to transform your business with cutting-edge AI and IT solutions?
            Get in touch with our experts for a free consultation.
>>>>>>> 995b39195cc56a514459b6fa1d6f8ba8874b88ba
          </p>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div>
          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8"></div>
            <h2 className="text-2xl font-bold text-white mb-6">Get Your Free Consultation</h2>
            {isSubmitted ? (
              <div className="text-center py-8"></div>
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-gray-300">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div></div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                     requiredclassName="w-full px-4 py-3 bg-slate-700text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-nonefocus:ring-2 focus:ring-cyan-400/20"
                     placeholder="Your fullname"
                    /></di><di v><labelhtmlFor="email"className="block text-sm font-medium text-gray-300mb-2">Email Address *
                  </labe><inputtype="email"
                     id="email"
                     name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div></div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                     className="w-full px-4 py-3 bg-slate-700text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-nonefocus:ring-2 focus:ring-cyan-400/20"
                     placeholder="Your companyname"
                    /></di><di v><labelhtmlFor="phone"className="block text-sm font-medium text-gray-300mb-2">Phone Number
                  </labe><inputtype="tel"
                     id="phone"
                     name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <div></div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div></div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required;
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                ></button>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            ,)}
          </div>
          {/* Contact Information */}
          <div className="space-y-8"></div>
            {/* Contact Details */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8"></div>
              <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
              <div className="space-y-6"></div>
                <div className="flex items-start space-x-4"></div>
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div></div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      +1 (302) 464-0950
                    </a>
                    <p className="text-sm text-gray-400 mt-1">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4"></div>
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div></div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                    <p className="text-sm text-gray-400 mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4"></div>
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div></div>
                    <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                    <p className="text-gray-300"></p>
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709<br />
                      United States</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4"></div>
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Clock className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div></div>
                    <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                    <p className="text-gray-300"></p>
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday: 10:00 AM - 4:00 PM EST<br />
                      Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Achievements */}
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl p-8"></div>
              <h3 className="text-xl font-bold text-white mb-6">Why Choose Us?</h3>
              <div className="grid grid-cols-2 gap-4"></div>
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center"></div>
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-2"></div>
                      <achievement.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <p className="text-sm text-gray-300">{achievement.text}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Quick Contact */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 text-center"></div>
              <h3 className="text-xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
              <p className="text-gray-300 mb-6">Call us now for urgent IT support or emergency services.</p>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}

export default Page;
