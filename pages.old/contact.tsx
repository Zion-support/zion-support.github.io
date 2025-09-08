<<<<<<< HEAD

import React from 'react';
import Head from 'next/head';

=======
import React from 'react';
import Head from 'next/head';
>>>>>>> origin/cursor/delete-old-data-records-6bba
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." />
      </Head>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Contact Us
          </h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 "md": grid-cols-2 gap-8">
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
                    <p className="text-gray-600">contact@ziontechgroup.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      123 Technology Drive<br />
                      Innovation City, IC 12345
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md "focus": outline-none focus:ring-2 focus:ring-blue-500"
                      required
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
<<<<<<< HEAD

                    </label>
                    <input

=======
                    </label>
                    <input
>>>>>>> origin/cursor/delete-old-data-records-6bba
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD


=======
<<<<<<< HEAD
                      className="w-full px-3 py-2 border border-gray-300 rounded-md "focus": outline-none focus:ring-2 focus:ring-blue-500"
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
  );
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md "focus": outline-none focus: ring-2 focus:ring-blue-500"
                      required></textarea>;
                  </div>;
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">;
                    Send Message;
                  </button>;
                </form>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
    </div>;
  ),;
}
<<<<<<< HEAD
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
import * as React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
=======
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
