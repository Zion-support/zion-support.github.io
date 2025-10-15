import React from "react";
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => { return (
    <> <Helmet> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with Zion Tech Group for your AI and IT needs." /> </Helmet> 
        <div className="min-h-screen bg-slate-900 text-white"> {/* Hero Section */ } <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          
        <div className="container mx-auto px-4 text-center">
            
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
            
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with our experts today.
            </p>
          </div>
        </section>
        { /* Contact Info */ }
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 text-center">
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                
          <p className="text-gray-300">+1-302-464-0950</p>
              </div>
              
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                
          <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 text-center">
                <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                
          <p className="text-gray-300">Wilmington, DE, USA</p>
              </div>
            </div>
            { /* Contact Form */ }
            
        <div className="max-w-2xl mx-auto">
              
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
    type="text"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
    type="email"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
    rows={ 4 } className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
    type="submit"
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default ContactPage;