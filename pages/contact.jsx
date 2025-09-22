import React from 'react'
import SEO from '../components/seo/SEO'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ContactForm from '../components/forms/ContactForm'
import Button from '../components/ui/Button'

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title="Contact Us"
        description="Get in touch with Zion Tech Group for your IT and AI service needs. We're here to help transform your business."
        url="https://ziontechgroup.com/contact"
      />

      <Header />

      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Let's discuss your project and how we can help you achieve your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="text-purple-400 mr-4">📧</div>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-gray-300">contact@ziontechgroup.com</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-purple-400 mr-4">📞</div>
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <div className="text-gray-300">+1 (555) 123-4567</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-purple-400 mr-4">📍</div>
                    <div>
                      <div className="text-white font-semibold">Office</div>
                      <div className="text-gray-300">San Francisco, CA</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-purple-400 mr-4">⏰</div>
                    <div>
                      <div className="text-white font-semibold">Business Hours</div>
                      <div className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM PST</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-3">✓</span>
                    24/7 Support & Monitoring
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-3">✓</span>
                    Proven Track Record
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-3">✓</span>
                    Custom Solutions
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-400 mr-3">✓</span>
                    Competitive Pricing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Contact
