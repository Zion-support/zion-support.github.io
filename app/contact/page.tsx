import React from 'react'
import { Metadata } from 'next'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import LocationMap from './components/LocationMap'

export const metadata: Metadata = {
  title: 'Contact Us - Zion Tech Group',
  description: 'Get in touch with Zion Tech Group for AI automation, micro SaaS, and enterprise technology solutions. Schedule a free consultation today.',
  keywords: ['contact', 'consultation', 'AI solutions', 'enterprise technology', 'support'],
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's Transform Your Business Together
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Ready to revolutionize your operations with AI? Get in touch with our experts for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LocationMap />
        </div>
      </section>
    </div>
  )
}