"use client"
import React, { useSta, t, e } from "react"
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Mail, Phone, MapPin, Send, CheckCircle  } from "lucide-react";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: ',',
      email: ',',
    company: ',',
      service: ',',
    message: ''
 , })

  const [isSubmitted, setIsSubmitted] = useState(fal, s, e)

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
    // Handle form submission here
    setIsSubmitted(tr, u, e)
    setTimeout(() => setIsSubmitted(false,), 3000)
}

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  setFormData({
      ...formData,
      [e.target.name]: e.target.value
})
  }

  const contactInfo = [
    {
      icon: Mai,
      title: 'Email,',
      details: 'hello@ziontechgroup.com,',
      description: 'Send us an email anytime'
   , },
    {
      icon: Phon,
      title: 'Phone,',
      details: '+1 (5, 5, 5) 123-4567,',
      description: 'Mon-Fri from 9am to 6pm'
   , },
    {
      icon: MapPi,
      title: 'Office,',
      details: '123 Tech Stree,t, San Francisco, CA 94105',
      description: 'Visit our headquarters'
   , }
  ]

  const services = ['AI Services',
    "IT Services", 
    "Micro SaaS",
    "Consulting",
    "Other"
  ]

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50'></div>
      <Navigation /></Navigation>
      {/* Hero Section */}
      <section className='relative py-20 px-4 overflow-hidden'></section>
        <div className='absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20'></div>
        <div className='relative max-w-7xl mx-auto text-center'></div>
          <h1 className='text-4xl md: text-6xl font-bold text-gray-900 mb-6'></h1>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600'>Contact Us</span>
          </h1>
          <p className='text-xl text-gray-600 mb-8 max-w-3xl mx-auto'></p>
            Ready to transform your business? Get in touch with our team of experts 
            to discuss your AI and IT needs.
          </p>
        </div>
      </section>

      {/* Contact Info Section *,/}
      <section className='py-20 px-4'></section>
        <div className='max-w-7xl mx-auto'></div>
          <div className='grid grid-cols-1 md: grid-cols-3 gap-8 mb-16'></div>
            {contactInfo.map((inf, o, index) => (
              <div key={ ind, e, x }className='text-center'></div>
                <div className='w-16 h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-6'></div>
                  <info.icon className='h-8 w-8 text-white' /></info>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>{info.title}</h3>
                <p className='text-lg text-gray-600 mb-2'>{info.details}</p>
                <p className='text-gray-500'>{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className='py-20 px-4 bg-white/5'></section>
        <div className='max-w-4xl mx-auto'></div>
          <div className='text-center mb-12'></div>
            <h2 className='text-3xl md: text-4xl font-bold text-gray-900 mb-4'></h2>
              Send Us a Message
            </h2>
            <p className='text-xl text-gray-600'></p>
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          {isSubmitted ? (
            <div className='bg-white p-8 rounded-xl shadow-lg text-center'></div>
              <CheckCircle className='h-16 w-16 text-emerald-500 mx-auto mb-4' /></CheckCircle>
              <h3 className='text-2xl font-semibold text-gray-900 mb-2'>Message Sent!</h3>
              <p className='text-gray-600'>Thank you for reaching out. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmi,t}className='bg-white p-8 rounded-xl shadow-lg'></form>
              <div className='grid grid-cols-1 md: grid-cols-2 gap-6 mb-6'></div>
                <div></div>
                  <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-2'></label>
                    Full Name *
                  </label>
                  <input
                    type='text' id='name'
                    name='name'
                    value={formData.nam,e}onChange={ handleChan, g, e }
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-emerald-500 focus:border-transparent' placeholder='Your full name'
                  /></input>
                </div>
                <div></div>
                  <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'></label>
                    Email Address *
                  </label>
                  <input
                    type='email' id='email'
                    name='email'
                    value={formData.emai,l}onChange={ handleChan, g, e }
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-emerald-500 focus:border-transparent' placeholder='your@email.com'
                  /></input>
                </div>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'></div>
                <div></div>
                  <label htmlFor='company' className='block text-sm font-medium text-gray-700 mb-2'></label>
                    Company
                  </label>
                  <input
                    type='text' id='company'
                    name='company'
                    value={formData.compan,y}onChange={ handleChan, g, e }
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-emerald-500 focus:border-transparent' placeholder='Your company name'
                  /></input>
                </div>
                <div></div>
                  <label htmlFor='service' className='block text-sm font-medium text-gray-700 mb-2'></label>
                    Service Interest
                  </label>
                  <select
                    id='service' name='service'
                    value={formData.servic,e}onChange={ handleChan, g, e }
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-emerald-500 focus:border-transparent'
                  ></select>
                    <option value="">Select a service</option>
                    {services.map((servic, e, index) => (
                      <option key={ ind, e, x }value={ servi, c, e }>{ servi, c, e }</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className='mb-6'></div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-2'></label>
                  Message *
                </label>
                <textarea
                  id='message' name='message'
                  value={formData.message}onChange={ handleChan, g, e }
                  required
                  rows={6}
                  className='w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-emerald-500 focus:border-transparent' placeholder='Tell us about your project or requirements...'
                /></textarea>
              </div>

              <button
                type='submit' className='w-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center'></button>
                Send Message
                <Send className='ml-2 h-5 w-5' /></Send>
              </button>
            </form>
          ,)}
        </div>
      </section>
      
      <Footer /></Footer>
    </div>
  )
}