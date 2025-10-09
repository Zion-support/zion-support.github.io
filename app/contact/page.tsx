import React from 'react';
// import { Metadata } from 'next'; // Removed for Vite

// Metadata removed for Vite compatibility

const ContactPage: React.FC = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>
            Contact Us
          </h1>
          <p className='text-xl text-gray-600'>
            Get in touch with our team of experts
          </p>
        </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div className='bg-white rounded-lg shadow-lg p-8'>
              <h2 className='text-2xl font-bold text-gray-900 mb-6'>
                Get In Touch
              </h2>
              <div className='space-y-6'>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    Address
                  </h3>
                  <p className='text-gray-600'>
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709<br />
                    United States
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    Phone
                  </h3>
                  <p className='text-gray-600'>
                    <a href="tel:+13026009898" className="hover:text-blue-600 transition-colors">
                      (302) 600-9898
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    Email
                  </h3>
                  <p className='text-gray-600'>
                    <a href="mailto:info@ziontechgroup.com" className="hover:text-blue-600 transition-colors">
                      info@ziontechgroup.com
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className='text-lg font-semibold text-gray-900 mb-2'>
                    Business Hours
                  </h3>
                  <p className='text-gray-600'>
                    Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                    Saturday: 10:00 AM - 4:00 PM EST<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-lg shadow-lg p-8'>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>AI Services</option>
                    <option>IT Services</option>
                    <option>Partnership</option>
                    <option>Support</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ContactPage;
