import React from 'react';
import MainLayout from '../components/layout/MainLayout';

export default function ContactPage() {
  return (
    <MainLayout 
      title="Contact Us - Zion Tech Group"
      description="Get in touch with our expert team for technology solutions and consulting."
    >
      <div className="min-h-screen bg-gray-50">
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Contact Us
          </h1>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-gray-600 mb-6">
                  Ready to transform your business with cutting-edge technology? 
                  Our expert team is here to help you succeed.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800">
                        kleber@ziontechgroup.com
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Mobile</h3>
                    <p className="text-gray-600">
                      <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800">
                        +1 302 464 0950
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      <a href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-blue-600 hover:text-blue-800">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </a>
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday: 10:00 AM - 4:00 PM EST<br />
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </MainLayout>
  );
}