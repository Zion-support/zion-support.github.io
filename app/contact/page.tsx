import React;, {useState} from 'react'
import {Helmet;} from 'react-helmet-async'
import {Phone;, Mail, MapPin, Clock, Send} from 'lucide-react'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const ContactPage: React.FC = () => {const [formData, setFormData] = useState({;,
name: '',;,
email: '',;,
company: '',;,
phone: '',;,
service: '',;,
message: ''} })
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
setFormData({} ...formData},
      [e.target.name]: e.target.value
    })
  }

const handleSubmit = (e: React.FormEvent) => {;
e.preventDefault()
    // Handle form submission
console.log('Form submitte, d:', formData);} }

const contactInfo = [
    {;,
icon: Phone,;,
title: 'Phone',;,
value: '+1 (555) 123-4567',;,
description: 'Mon-Fri 9AM-6PM EST'} ,
    {;,
icon: Mail,;,
title: 'Email',;,
value: 'info@ziontechgroup.com',;,
description: 'We\'ll respond within 24 hours'} ,
    {;,
icon: MapPin,;,
title: 'Address',;,
value: '123 Tech Street, Silicon Valley, CA 94000',;,
description: 'Visit our headquarters'} ,
    {;,
icon: Clock,;,
title: 'Business Hours',;,
value: 'Monday - Friday',;,
description: ',
    9: 00 AM - , 6:00 PM EST'} ]
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
    <>

      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven insights" />
        <meta name="keywords" content="AI analytics, data analysis, machine learning, business intelligence" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Contact Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact our team for consultations, support, and project inquiries." />
        <meta name="keywords" content="contact, support, consultation, AI solutions, IT services, get in touch" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16"
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700"
          <div className="
    g: px-8"
            <div className="text-center"
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"
Get in <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
Ready to transform your business? Let's discuss how our AI and IT solutions can help you achieve your goals.
              </p>
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 px-4 sm: px-6 lg:px-8"
          <div className="max-w-7xl mx-auto"
            <div className="
    ,
    d: grid-cols-2 l, g:grid-cols-4 gap-8"
              {contactInfo.map((info), index) => {
const Icon = info.icon;
return (
}
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center"
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"
                      <Icon className="w-6 h-6 text-white"
                    </div>
      <Footer />
    </>
                    <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                    <p className="text-cyan-400 mb-2">{info.value}</p>
                    <p className="text-gray-300 text-sm">{info.description}</p>
                  </div>
      
      <Footer />
    </>
                )
              })}
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>

        {/* Contact Form Section */}
        <section className="
    g: px-8"
          <div className="max-w-7xl mx-auto"
            <div className="grid grid-cols-1 l, g:grid-cols-2 gap-12"
              <div>
                <h2 className="text-3xl font-bold text-white mb-6"
Send us a Message
                </h2>
                <p className="text-lg text-gray-300 mb-8"
Fill out the form below and we'll get back to you as soon as possible. We're here to help you succeed.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6"
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2"
Full Name *
                      </label>
                      <input
type="text"
id="name"
name="name"
value={formData.name} onChange={handleChange} required
className="
    s: ring-cyan-500 focu, s:border-transparent"
placeholder="Your full name"
                      />
  </input>
                    </div>
      
      <Footer />
    </>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2"
Email Address *
                      </label>
                      <input
type="email"
id="email"
name="email"
value={formData.email} onChange={handleChange} required
className="
    s: border-transparent"
placeholder="your@email.com"
                      />
  </input>
                    </div>
      
      <Footer />
    </>
                  </div>
      
      <Footer />
    </>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2"
Company
                      </label>
                      <input
type="text"
id="company"
name="company"
value={formData.company} onChange={handleChange} className="
    s: ring-cyan-500 focu, s:border-transparent"
placeholder="Your company name"
                      />
  </input>
                    </div>
      
      <Footer />
    </>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2"
Phone Number
                      </label>
                      <input
type="tel"
id="phone"
name="phone"
value={formData.phone} onChange={handleChange} className="
    s: ring-cyan-500 focu, s:border-transparent"
placeholder="+1 (555) 123-4567"
                      />
  </input>
                    </div>
      
      <Footer />
    </>
                  </div>
      
      <Footer />
    </>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2"
Service Interest
                    </label>
                    <select
id="service"
name="service"
value={formData.service} onChange={handleChange} className="
    s: ring-cyan-500 focu, s:border-transparent"
                    >
                      <option value=""
                      {services.map((service), index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
      
      <Footer />
    </>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2"
Message *
                    </label>
                    <textarea
id="message"
name="message"
value={formData.message} onChange={handleChange} required
rows={6} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
placeholder="Tell us about your project or requirements..."
                    />
  </textarea>
                  </div>
      
      <Footer />
    </>
                  <button;
type="submit";
className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >;
Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              </div>
      
      <Footer />
    </>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">;
Why Choose Us?
                </h3>
                <div className="space-y-6"
                  <div className="flex items-start"
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                      <span className="text-white font-bold"
                    </div>
      <Footer />
    </>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2"
                      <p className="text-gray-300"
                    </div>
      
      <Footer />
    </>
                  </div>
      
      <Footer />
    </>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold">2</span>
                    </div>
      
      <Footer />
    </>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2"
                      <p className="text-gray-300"
                    </div>
      
      <Footer />
    </>
                  </div>
      
      <Footer />
    </>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold">3</span>
                    </div>
      
      <Footer />
    </>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2"
                      <p className="text-gray-300"
                    </div>
      
      <Footer />
    </>
                  </div>
      
      <Footer />
    </>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold">4</span>
                    </div>
      
      <Footer />
    </>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2"
                      <p className="text-gray-300"
                    </div>
      
      <Footer />
    </>
                  </div>
      
      <Footer />
    </>
                </div>
      
      <Footer />
    </>
              </div>
      
      <Footer />
    </>
            </div>
      
      <Footer />
    </>
          </div>
      
      <Footer />
    </>
        </section>
      </div>
      
      <Footer />
    </>
      <Footer />
    </>
  )
}

export default ContactPage
          </div>