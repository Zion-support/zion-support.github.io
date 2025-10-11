import React;, {useState} from 'react'
import {Helmet;} from 'react-helmet-async'
import {Phone;, Mail, MapPin, Clock, Send} from 'lucide-react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const ContactPage: React.FC = () => {const [formData, setFormData] = useState({;,
name: '',,;,
email: '',,;,
company: '',,;,
phone: '',,;,
service: '',,;,
message: '',}
  })
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
setFormData({
}
      ...formData},
      [e.target.name]: e.target.value
    })
  }
const handleSubmit = (e: React.FormEvent) => {;
e.preventDefault()
    // Handle form submission
console.log('Form submitted: ',, formData);}
  }
const contactInfo = [
    {;,
icon: Phone,,;,
title: 'Phone',,;,
value: '+1 (555) 123-4567',,;,
description: 'Mon-Fri 9AM-6PM EST',},
    {;,
icon: Mail,,;,
title: 'Email',,;,
value: 'info@ziontechgroup.com',,;,
description: 'We\'ll respond within 24 hours',},
    {;,
icon: MapPin,,;,
title: 'Address',,;,
value: '123 Tech Street,, Silicon Valley, CA 94000',;,
description: 'Visit our headquarters',},
    {;,
icon: Clock,,;,
title: 'Business Hours',,;,
value: 'Monday - Friday',,;,
description: '9:00 AM - 6:00 PM EST',}
  ]
const services = [
    'AI Solutions',
    'Cloud Infrastructure',
    'Cybersecurity',
    'Data Analytics',
    'Web Development',
    'Mobile Development',
    'IT Consulting',
    'Other'
  ]
return (
    </HTMLInputElement><>
'use client';
import React;, { useState } from 'react';
import {Helmet} from 'react-helmet-async';
import { Phone;, Mail, MapPin, Clock, Send } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const ContactPage: React.FC = () => {const features = [
    {
      icon: Wifi,,
      title: 'Feature 1',,
      description: 'Description for feature 1.',,
      benefits: ['Benefit 1',, 'Benefit 2', 'Benefit 3']},
    {icon: BarChart,,
      title: 'Feature 2',,
      description: 'Description for feature 2.',,
      benefits: ['Benefit 1',, 'Benefit 2', 'Benefit 3']},
    {icon: CheckCircle,,
      title: 'Feature 3',,
      description: 'Description for feature 3.',,
      benefits: ['Benefit 1',, 'Benefit 2', 'Benefit 3']}
  ];
  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      </div><Helmet>
        </Helmet><title>Contact Page - Zion Tech Group</titl></title>
        <meta name="description" content="Advanced AI and IT solutions for modern businesses." />
      </Helmet>
      <Navigation />
      <main className="pt-16">
        </main><section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
          </section><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            </div><div className="text-center">
              </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
Get in </h1><span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</spa></span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
Ready to transform your business? Let's discuss how our AI and IT solutions can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>
        {/* Contact Info Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          </section><div className="max-w-7xl mx-auto">
            </div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info), index) => {
const Icon = info.icon;
return(}
                  </div><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                    </div><div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      </div><Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h></h3>
                    <p className="text-cyan-400 mb-2">{info.value}</p>
                    <p className="text-gray-300 text-sm">{info.description}</p>
                  </div>
    </>);)}
                Contact Page
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Transform your business with our cutting-edge AI and IT solutions designed for the modern enterprise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                </div><button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Get Started
                </butto></button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </butto></button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          </section><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            </div><div className="text-center mb-16">
              </div><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Features
              </h></h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the powerful features that make our solutions stand out.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                </div><div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  </div><div className="flex items-center mb-4">
                    </div><feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h></h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      </ul><li key={idx} className="flex items-center text-sm text-gray-600">
                        </li><CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact Form Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section><div className="max-w-7xl mx-auto">
            </div><div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              </div><div>
                </div><h2 className="text-3xl font-bold text-white mb-6">
Send us a Message
                </h></h2>
                <p className="text-lg text-gray-300 mb-8">
Fill out the form below and we'll get back to you as soon as possible. We're here to help you succeed.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  </form><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    </div><div>
                      </div><label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
Full Name *
                      </labe></label>
                      <input
type="text"
id="name"
name="name"
value={formData.name}
                        onChange={handleChange}
                        required
className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
placeholder="Your full name"
                      />
  </input>
                    </div>
                    <div>
                      </div><label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
Email Address *
                      </labe></label>
                      <input
type="email"
id="email"
name="email"
value={formData.email}
                        onChange={handleChange}
                        required
className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
placeholder="your@email.com"
                      />
  </input>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    </div><div>
                      </div><label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
Company
                      </labe></label>
                      <input
type="text"
id="company"
name="company"
value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
placeholder="Your company name"
                      />
  </input>
                    </div>
                    <div>
                      </div><label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
Phone Number
                      </labe></label>
                      <input
type="tel"
id="phone"
name="phone"
value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
placeholder="+1 (555) 123-4567"
                      />
  </input>
                    </div>
                  </div>
                  <div>
                    </div><label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
Service Interest
                    </labe></label>
                    <select
id="service"
name="service"
value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      </select><option value="">Select a service</optio></option>
                      {services.map((service), index) => (
                        <option key={index} value={service}>{service}</optio></option>
                      ))}
                    </select>
                  </div>
                  <div>
                    </div><label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
Message *
                    </labe></label>
                    <textarea
id="message"
name="message"
value={formData.message}
                      onChange={handleChange}
                      required
rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
placeholder="Tell us about your project or requirements..."
                    />
  </textarea>
                  </div>
                  <button
type="submit"
className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
Send Message
                    </button><Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                </div><h3 className="text-2xl font-bold text-white mb-6">
Why Choose Us?
                </h></h3>
                <div className="space-y-6">
                  </div><div className="flex items-start">
                    </div><div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      </div><span className="text-white font-bold">1</spa></span>
                    </div>
                    <div>
                      </div><h4 className="text-lg font-semibold text-white mb-2">Expert Team</h></h4>
                      <p className="text-gray-300">Our team consists of experienced AI researchers, software engineers, and IT specialists.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    </div><div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      </div><span className="text-white font-bold">2</spa></span>
                    </div>
                    <div>
                      </div><h4 className="text-lg font-semibold text-white mb-2">Proven Results</h></h4>
                      <p className="text-gray-300">We've successfully delivered 500+ projects with measurable business impact.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    </div><div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      </div><span className="text-white font-bold">3</spa></span>
                    </div>
                    <div>
                      </div><h4 className="text-lg font-semibold text-white mb-2">24/7 Support</h></h4>
                      <p className="text-gray-300">We provide ongoing support and maintenance for all our solutions.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    </div><div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      </div><span className="text-white font-bold">4</spa></span>
                    </div>
                    <div>
                      </div><h4 className="text-lg font-semibold text-white mb-2">Custom Solutions</h></h4>
                      <p className="text-gray-300">Every solution is tailored to your specific business needs and requirements.</p>
                    </div>
        <section className="py-20 bg-gray-100">
          </section><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            </div><div className="text-center mb-16">
              </div><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h></h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of working with industry leaders.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                </div><div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  </div><div className="flex items-center">
                    </div><CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-lg font-medium text-gray-900">{benefit}</spa></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20">
          </section><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            </div><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h></h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Contact us today to learn how our solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div><button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Us
              </butto></button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                Schedule Demo
              </butto></button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
export default ContactPage
          </Footer>
        </Send>
      </Icon>
    </Navigation>
  </HTMLInputElement>
    </div>
  );
};
export default ContactPage;