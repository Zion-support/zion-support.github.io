import React, { useState } from 'react';
import { Send, CheckCircle, Phone, Mail, Shield, TrendingUp, Database, Users, Clock, MapPin, Check } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Trending, U, p } from 'lucide-react'
import React, { useSta, t, e } from 'react'
import { Se, n, d } from "lucide-react";
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
<<<<<<< HEAD
import { CheckCircle, Phone, Mail } from "lucide-react";
import { MapPin, Clock  } from "lucide-react";
import { CheckCircle, Phone, Mail } from 'lucide-react'
import { MapPin, Clock } from 'lucide-react'

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
=======
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
const Page: React.FC = () => {;
return (<>;
  </>;
      <SEOOptimizer title="Page",description="Professional page services and solutions for your business needs.", keywords={ ["page","AI solutions","business automation","technology services"] }; </div>
canonicalUrl = "https: //ziontechgroup.com/page""
      /></SEOOptimizer>,<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" /  />"
        <Navigation/ />"
        <main className="container mx-auto px-4 py-16 pt-24" />,"
    <div className="text-center" / />,"
    <h1 className="text-4, xl, m,d: text-5 xl font-bold text-white mb-8 neon-text" /  />
Page</h1>
            </h1>
            <p className="text-xl text-gray-300 mb-8" /  />"
Professional page services and solutions for your business needs.</p>
            </p>,<div className="cyber-card p-8 max-w-4 xl mx-auto" / />"
              <p className="text-gray-300" /  />
import { React from "react";
import { Navigation  } from "../components/Navigation";
import { Footer  } from "../components/Footer";
import { SEOOptimizer  } from "../components/SEOOptimizer";
const Page: React.FC = () => {
return (<SEOOptimizer title="Page",description="Professional page services and solutions for your business needs.", keywords={ ["page","AI solutions","business automation","technology services"] }; </div>
canonicalUrl = "https: //ziontechgroup.com/page"
      /></SEOOptimizer>,<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        <Navigation/ /> <main className="container mx-auto px-4 py-16 pt-24" /> <div className="text-center" /> <h1 className="text-4, xl, m,d: text-5 xl font-bold text-white mb-8 neon-text" />
Page</h1>
            </h1> <p className="text-xl text-gray-300 mb-8" />
Professional page services and solutions for your business needs.</p>
            </p>,<div className="cyber-card p-8 max-w-4 xl mx-auto" /> <p className="text-gray-300" />
This page is under development. Please check back soon for more information about our page services.</p>
              </p>
>>>>>>> d05312d5d680673ba2e628470e93a08bc6917172
              </div>
            </div>
        </main>
        <Footer//>
        </div>
      </div>
    </div>
  ),
}

export default Page
}
