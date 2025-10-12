import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD

const ContactPage: React.FC = () => {
=======
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
>>>>>>> origin/main
  return (
    <>
      <Helmet>
        <title>Contact - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations and support." />
      </Helmet>

      <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xlmx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xlmd:text-6xl font-bold text-white  mb-6">
              Contact Us
            </h1>
            <p className="text-xltext-gray-300 mb-8 max-w-3xl  mx-auto">
              Ready to transform your business? Get in touch with our team of experts.
            </p>
            <div className="max-w-mdmx-auto">
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-fullpx-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-cyan-400 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-fullpx-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-cyan-400 focus:outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-fullpx-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-cyan-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-fullbg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
        </div>
    </>
  );
};

export default ContactPage;
=======
        <meta name="description" content="Contact us for professional services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Contact</h1>
          <p className="text-lg text-gray-300 mb-8">Get in touch with us for professional services.</p>
          
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> origin/main
