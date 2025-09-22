<<<<<<< HEAD
<<<<<<< HEAD
import * as React from 'react';
import Head from 'next/head';
export default function ContactPage() {
=======
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React from 'react';

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import * as React from 'react';
import Head from 'next/head';
export default function ContactPage() {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md "focus": outline-none focus:ring-2 focus:ring-blue-500"
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
}
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/pages.old/contact.tsx
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
=======
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
import * as React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
=======
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:pages.old/contact.tsx
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
import * as React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
class ErrorBoundary extends React.Component {
  // TODO: Implement
}
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
const Contact: React.FC<ContactProps> = ({ className }) => {

    <div className={className || }>
</div>
      <h1>Contact</h1>
      <p>This component is under development.</p>
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." />  <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}""
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
