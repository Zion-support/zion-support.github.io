<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import * as React from 'react';
import Head from 'next/head';
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
<<<<<<< HEAD
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
import * as React from 'react';
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
import Head from 'next/head';
=======
=======import Head from 'next/head';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======import Head from 'next/head';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function ContactPage() {;
  return (
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-gray-50">;
      <Head>;
        <title>Contact Us - Zion Tech Group</title>;
        <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." />;
      </Head>;
      <div className="container mx-auto px-4 py-20">;
        <div className="max-w-4xl mx-auto">;
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">;
            Contact Us;
          </h1>;
          <div className="bg-white rounded-lg shadow-lg p-8">;
            <div className="grid grid-cols-1 "md": grid-cols-2 gap-8">;
              <div>;
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">;
                  Get in Touch;
                </h2>;
                <p className="text-gray-600 mb-6">;
                  Ready to transform your business with cutting-edge technology? ;
                  Our expert team is here to help you succeed.;
                </p>;
                <div className="space-y-4">;
                  <div>;
                    <h3 className="font-semibold text-gray-900">Email</h3>;
                    <p className="text-gray-600">contact@ziontechgroup && ziontechgroup.com</p>;
                  </div>;
                  <div>;
                    <h3 className="font-semibold text-gray-900">Phone</h3>;
                    <p className="text-gray-600">+1 (555) 123-4567</p>;
                  </div>;
                  <div>;
                    <h3 className="font-semibold text-gray-900">Address</h3>;
                    <p className="text-gray-600">;
                      123 Technology Drive<br />;
                      Innovation City, IC 12345;
                    </p>;
                  </div>;
                </div>;
              </div>;
              <div>;
                <form className="space-y-4">;
                  <div>;
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">;
                      Name;
                    </label>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
                    </label>                    <input
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
                    </label>                    <textarea
                      id="message"
                      name="message"
<<<<<<< HEAD
<<<<<<< HEAD
                      rows={4}
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
                      className="w-full px-3 py-2 border border-gray-300 rounded-md "focus": outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
<<<<<<< HEAD
=======
=======
                      className="w-full px-3 py-2 border border-gray-300 rounded-md "focus": outline-none focus: ring-2 focus:ring-blue-500"
                      required></textarea>;
                  </div>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
                  <button
                    type="submit"
=======

import Head from 'next/head';
export default function ContactPage() { return null; }
                      rows={4}

                  <button"
                    type="submit""
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Send Message;
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
}
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
import * as React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
>>>>>>> 31ef851138fd26c05f3cc955272d6690995f1d05
=======
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


'"
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}


"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md "focus": outline-none focus: ring-2 focus:ring-blue-500";
                      required></textarea>;
                  </div>;
                  <button"
                    type="submit""
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
}'"
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup && ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}'";
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup && ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}'";
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup && ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}'";
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup && ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
<<<<<<< HEAD
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup && ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup && ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup && ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages.old/contact.tsx
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages.old/contact.tsx
=======
=======
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
>>>>>>> main
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
                      rows={4}import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
                      rows={4}import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

'";
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
<<<<<<< HEAD
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
origin/cursor/integrate-build-improve-and-re-verify-c7b5
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a:temp_exclude/pages.old/contact.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> main
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'";
import * as React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}



}
'";
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}







'";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
