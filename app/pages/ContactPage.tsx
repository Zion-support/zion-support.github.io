import React from 'react';
import { Helmet } from 'react-helmet-async';

<<<<<<< HEAD
const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
<<<<<<< HEAD
        <meta name="description" content="Get in touch with Zion Tech Group for your AI and IT needs." />
      </Helmet>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
          <div className="max-w-2xl">
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your business with cutting-edge technology? 
              Get in touch with our team of experts.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-600">contact@ziontech.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-600">+1-555-0123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
=======
        <meta name="description" content="Get in touch with Zion Tech Group for your AI and IT solution needs." />
      </Helmet>
      
      <main id="main-content" className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
              <p className="text-xl text-gray-600">
                Ready to transform your business? Let's discuss your project.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">contact@ziontech.com</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1-555-0123</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      123 Tech Street<br />
                      Innovation City, IC 12345
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
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
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
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
      </main>
>>>>>>> cursor/fix-errors-and-merge-to-main-6911
    </>
  );
};

<<<<<<< HEAD
export default ContactPage;
=======
export default ContactPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6911
=======
export default function PagesPage() {
  return (
    <>
      <Helmet>
        <title>Pages - Zion Tech Group</title>
        <meta name="description" content="Professional pages solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Pages</h1>
          <p className="text-lg text-gray-600">
            Professional pages solutions for modern businesses.
          </p>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-15e9
