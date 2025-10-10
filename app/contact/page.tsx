'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (302) 464-0950',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@ziontechgroup.com',
      description: 'Send us an email anytime'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: '364 E Main St STE 1008',
      description: 'Middletown, DE 19709'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM',
      description: 'EST (Eastern Standard Time)'
    }
  ]
  const services = [
    'AI Strategy & Consulting',
    'Machine Learning Solutions',
    'Cloud Infrastructure',
    'Cybersecurity Solutions',
    'Custom Development',
    'Data Analytics',
    'IT Consulting',
    'Automation Solutions',
    'Database Management',
    'Other'
  ]
  return (
    <>
      <Helmet> </Helmet><title>Contact Us - Zion Tech Group | AI & IT Solutions</title>
        <meta> </meta><meta> </meta></Helmet>

      <Navigation> </Navigation><main>{/* Hero Section */}
        </main><section> </section><div> </div><div> </div><div> </div><h1>Get In </h1><span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
              </h1>
              <p>Ready to transform your business with cutting-edge AI and IT solutions? 
                Let's discuss your project and how we can help you achieve your goals.
              </p></p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section> </section><div> </div><div>{/* Contact Form */}
              </div><div> </div><h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div> </div><CheckCircle> </CheckCircle><span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div> </div><AlertCircle> </AlertCircle><span className="text-red-400">Failed to send message. Please try again.</span>
                  </div>
                )}

                <form> </form><div> </div><div> </div><label>Full Name *
                      </label></label>
                      <input> </input></div>
                    
                    <div> </div><label>Email Address *
                      </label></label>
                      <input> </input></div>
                  </div>

                  <div> </div><div> </div><label>Company
                      </label></label>
                      <input> </input></div>
                    
                    <div> </div><label>Phone Number
                      </label></label>
                      <input> </input></div>
                  </div>

                  <div> </div><label>Service Interest
                    </label></label>
                    <select> </select><option value="">Select a service</option>
                      {services.map((service) => (
                        <option>{service}
                        </option></option>
                      ))}
                    </select>
                  </div>

                  <div> </div><label>Message *
                    </label></label>
                    <textarea> </textarea></div>

                  <button>{isSubmitting ? (
                      </button><>
                        <div>Sending...
                      </div></>
                    ) : (
                      <>
                        <Send>Send Message
                      </Send></>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div> </div><div> </div><h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                  <p>We're here to help you succeed. Reach out to us through any of the channels below, 
                    and we'll get back to you as soon as possible.
                  </p></p>
                </div>

                <div>{contactInfo.map((info, index) => (
                    </div><div> </div><div> </div><info> </info></div>
                      <div> </div><h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                        <p className="text-cyan-400 font-medium mb-1">{info.value}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div> </div><h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>
                  <ul> </ul><li> </li><CheckCircle> </CheckCircle><span>Expert team with 20+ years of experience</span>
                    </li>
                    <li> </li><CheckCircle> </CheckCircle><span>24/7 support and monitoring</span>
                    </li>
                    <li> </li><CheckCircle> </CheckCircle><span>Custom solutions tailored to your needs</span>
                    </li>
                    <li> </li><CheckCircle> </CheckCircle><span>Proven track record of success</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer> </Footer></>
  )
}
export default ContactPage