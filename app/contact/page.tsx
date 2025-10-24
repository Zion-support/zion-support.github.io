'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-rfrom-blue-600to-purple-600text-white py-20">
          <div className="containermx-autopx-4">
            <div className="max-w-4xlmx-autotext-center">
              <h1 className="text-5xlfont-boldmb-6">Contact Us</h1>
              <p className="text-xltext-blue-100">
                Ready to transform your business? Let's discuss your project
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-20">
          <div className="containermx-autopx-4">
            <div className="max-w-6xlmx-auto">
              <div className="gridgrid-cols-1md:grid-cols-3gap-8">
                <div className="text-center">
                  <Mail className="w-12h-12text-blue-600mx-auto mb-4" />
                  <h3 className="text-xlfont-semiboldtext-gray-900mb-2">Email</h3>
                  <p className="text-gray-600">info@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <Phone className="w-12h-12text-blue-600mx-auto mb-4" />
                  <h3 className="text-xlfont-semiboldtext-gray-900mb-2">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-12h-12text-blue-600mx-auto mb-4" />
                  <h3 className="text-xlfont-semiboldtext-gray-900mb-2">Address</h3>
                  <p className="text-gray-600">123 Tech Street, Innovation City</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default ContactPage