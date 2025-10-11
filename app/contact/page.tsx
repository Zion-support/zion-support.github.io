'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { CheckCircle, Mail, Phone, MapPin, Clock, Send, MessageCircle, Calendar, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within 24 hours',
      contact: 'kleber@ziontechgroup.com',
      action: 'Send Email',
      href: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: <Phone className="w-6 h-6 text-green-400" />,
      title: 'Call Us',
      description: 'Speak directly with our team during business hours',
      contact: '+1 (302) 464-0950',
      action: 'Call Now',
      href: 'tel:+13024640950'
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-400" />,
      title: 'Visit Us',
      description: 'Come see us at our office in Delaware',
      contact: '364 E Main St STE 1008, Middletown, DE 19709',
      action: 'Get Directions',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    }
  ]

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-400" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support for all our clients'
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-400" />,
      title: 'Live Chat',
      description: 'Instant responses through our live chat system'
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-400" />,
      title: 'Free Consultation',
      description: 'Schedule a free consultation to discuss your project'
    },
    {
      icon: <Users className="w-6 h-6 text-orange-400" />,
      title: 'Expert Team',
      description: 'Work with experienced professionals in AI and IT'
    }
  ]

  const faqs = [
    {
      question: 'How quickly can you start my project?',
      answer: 'We typically begin new projects within 1-2 weeks of contract signing, depending on project complexity and current workload.'
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes, we provide comprehensive ongoing support and maintenance for all our solutions, including 24/7 technical support.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with a wide range of technologies including React, Node.js, Python, AI/ML frameworks, cloud platforms (AWS, Azure, GCP), and more.'
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Absolutely! We work with businesses of all sizes, from startups to enterprise companies, and tailor our solutions accordingly.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI solutions, IT services, and digital transformation. Contact us today for a free consultation." />
        <meta name="keywords" content="contact, AI solutions, IT services, consultation, support" />
        <meta property="og:title" content="Contact Us - Zion Tech Group" />
        <meta property="og:description" content="Get in touch with Zion Tech Group for AI solutions, IT services, and digital transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Let's <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Build Together</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Ready to transform your business with cutting-edge technology? 
              Get in touch with our expert team for a free consultation.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {method.title}
                </h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                <p className="text-blue-400 font-medium mb-4">{method.contact}</p>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                  {method.action}
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Work With Us?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We're committed to delivering exceptional results and outstanding customer service
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Frequently Asked Questions</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Find answers to common questions about our services and process
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Ready to Get Started?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss your project and see how we can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/about"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More About Us
                </Link>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}