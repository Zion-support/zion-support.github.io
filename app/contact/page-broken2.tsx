'use client'
import React from 'react'
'use client'

import React, { useState, useCallback } from 'react'
import { Helmet } from 'react-helmet-async'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle;}
} from 'lucide-react'

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
phone: '',
    service: '',
    budget: '',
    timeline: '',
    message: '';}
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {}
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value;}
    }))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
        message: '';}
      })
    } catch (error) {
      setSubmitStatus('error');}
    } finally {
      setIsSubmitting(false);}
    }
  }

  const services = [
    'AI Solutions',
    'Cloud Computing',
    'Mobile App Development',
    'Web Development',
    'Data Analytics',
    'Cybersecurity',
    'DevOps',
    'Consulting',
    'Other'
  ]

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (302) 464-0950',
      description: 'Mon-Fri 9AM-6PM EST';}
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'We respond within 24 hours';}
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '123 Tech Street, Suite 100\nWilmington, DE 19801',
      description: 'Visit our office';}
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM',
      description: 'Eastern Time';}
    }
  ]

  return (
    <></>Contact Us - Zion Tech Group | Get in Touch</title></$1></div></div>
          {/* Header */}
          <div className="text-center mb-16"></div>
              Get in
                {' '}Touch</$1></$1>
              Ready to transform your business? Let's discuss your project and explore
              how our AI and IT solutions can help you achieve your goals.</$1></$1></$1></div>
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"></div>Send us a Message</h2>
              {submitStatus === 'success' && (</div>Message sent successfully! We'll get back to you soon.</span></$1>;}
              )}
              {submitStatus === 'error' && (</div>Failed to send message. Please try again.</span></$1>;}
              )}
</div></div>
                      Full Name *</$1></div></$1></$1></div>
                      Email Address *</$1></div></$1></$1></$1></div></div>
                      Company</$1></div></$1></$1></div>
                      Phone Number</$1></div></$1></$1></$1></div>
                    Service Interest</$1></div>Select a service</option>
                      {services.map((service) => (;}
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select></$1></$1></div>
                    Message *</$1></div></$1></$1>
                  {isSubmitting ? (
                    <></></div>Sending...</span>
                  ) : (
                    <></>Send Message</span>;}
                  )}
                </button></$1></$1>
            {/* Contact Information */}
            <div className="space-y-8"></div></div>Contact Information</h2>
                  We're here to help! Reach out to us through any of these channels
                  and we'll get back to you as soon as possible.</$1></$1>
              {/* Contact Information */}
              <div className="space-y-8"></div></div>Get in Touch</h2>
                    We're here to help you transform your business with cutting-edge AI and technology solutions.</$1></$1></div></div></div></$1></div>
                        {info.title}
                      </h3>
                        {info.details}
                      </p>
                        {info.description}
                      </p></$1></$1></div></div></$1></div>Email</h3>info@ziontechgroup.com</p></$1></$1></div></div></$1></div>Address</h3>123 Tech Street<br />San Francisco, CA 94105</p></$1></$1></div></div></$1></div>Business Hours</h3>Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p></$1></$1></$1></$1></$1></$1></$1></$1></$1>
  )
}

export default ContactPage