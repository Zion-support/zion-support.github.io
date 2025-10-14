import React from 'react'
import { Helmet } from 'react-helmet-async'
const ContactPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for technology solutions and consulting services." />
      </Helmet>
      
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-12 text-center">
              Ready to transform your business? Let's talk.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300">info@ziontechgroup.com</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                    <p className="text-gray-300">New York, NY</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block text-white mb-2">Name</label>
                    <input type="text"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Email</label>
                    <input type="email"
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-white mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )}
export default ContactPage;