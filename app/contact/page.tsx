import React from "react"
import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom"
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react"

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. We are here to help transform your business." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-lg text-gray-300 mb-8">Get in touch with our team to discuss your AI and IT needs.</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Mail className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">contact@ziontechgroup.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Phone className="h-8 w-8 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <MapPin className="h-8 w-8 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-300">San Francisco, CA</p>
            </div>
          </div>

          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default ContactPage
