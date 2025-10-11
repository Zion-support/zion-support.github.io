'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-purple-600" />,
      title: 'Email Us',
      description: 'Send us an email anytime',
      value: 'contact@ziontechgroup.com',
      action: 'mailto:contact@ziontechgroup.com'
    },
    {
      icon: <Phone className="w-6 h-6 text-purple-600" />,
      title: 'Call Us',
      description: 'Mon-Fri from 8am to 6pm',
      value: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-600" />,
      title: 'Visit Us',
      description: 'Come say hello at our office',
      value: 'San Francisco, CA',
      action: '#'
    }
  ]

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and assistance'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Expert Consultation',
      description: 'Free consultation with our technology experts'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Quick Response',
      description: 'We respond to all inquiries within 24 hours'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Custom Solutions',
      description: 'Tailored solutions for your specific needs'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI services, IT solutions, and digital transformation. We're here to help transform your business." />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Get in <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Ready to transform your business with cutting-edge technology? Let's discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Send us a Message
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Other Ways to Reach Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the communication method that works best for you.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {info.description}
                  </p>
                  <a
                    href={info.action}
                    className="text-purple-600 hover:text-purple-700 font-semibold"
                  >
                    {info.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're committed to providing exceptional service and support to all our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Don't wait to transform your business. Contact us today and let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@ziontechgroup.com"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Send className="mr-2 w-5 h-5" />
                Send Email
              </a>
              <a
                href="tel:+15551234567"
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}