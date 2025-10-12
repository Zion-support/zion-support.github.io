import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Clock, Users, CheckCircle, Phone, Mail, MapPin } from 'lucide-react'

export default function ConsultationPage() {
  return (
    <>
      <Helmet>
        <title>Free Consultation - Expert AI & IT Advice | Zion Tech Group</title>
        <meta name="description" content="Get a free consultation with our AI and IT experts. Discover how our solutions can transform your business. Book your consultation today." />
        <meta name="keywords" content="free consultation, AI consultation, IT consultation, business transformation, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Free <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Expert Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized advice from our AI and IT experts. Discover how our solutions 
              can transform your business and drive growth.
            </p>
          </div>

          {/* Consultation Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Schedule Anytime</h3>
              <p className="text-gray-300">Book a consultation that fits your schedule</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Consult with certified AI and IT professionals</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">No Obligation</h3>
              <p className="text-gray-300">Free consultation with no strings attached</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-12 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <p className="text-gray-300">+1 302 464 0950</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-gray-300">kleber@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Address</p>
                      <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">What to Expect</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">30-60 minute consultation call</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Analysis of your current technology stack</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Custom recommendations for your business</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Implementation roadmap and timeline</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">Cost estimates and ROI projections</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book your free consultation today and discover the power of AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}