<<<<<<< HEAD
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
=======






>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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

import * as React from 'react';''
import Head from 'next/head';'
export default function ContactPage() {
  return ('
    <div className="min-h-screen bg-gray-50">"
</div>
      <Head>
</Head>
        <title>Contact Us - Zion Tech Group</title>"
        <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." />"
</meta>
      </Head>"
      <div className="container mx-auto px-4 py-20">"
</div>"
        <div className="max-w-4xl mx-auto">"
</div>"
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">"
</h1>
          </h1>"
          <div className="bg-white rounded-lg shadow-lg p-8">"
</div>"
            <div className="grid grid-cols-1 "md": grid-cols-2 gap-8">"
</div>
              <div>
</div>"
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">"
</h2>
                </h2>"
                <p className="text-gray-600 mb-6">"
</p>
                </p>"
                <div className="space-y-4">"
</div>
                  <div>
</div>"
                    <h3 className="font-semibold text-gray-900">Email</h3>""
                    <p className="text-gray-600">contact@ziontechgroup.com</p>"
                  </div>
                  <div>
</div>"
                    <h3 className="font-semibold text-gray-900">Phone</h3>")"
                    <p className="text-gray-600">+1 (555) 123-4567</p>"
                  </div>
                  <div>
</div>"
                    <h3 className="font-semibold text-gray-900">Address</h3>""
                    <p className="text-gray-600">"
</p>
                      123 Technology Drive<br />
</br>
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
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
=======

import * as React from 'react';


import * as React from 'react';

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import Head from 'next/head';
=======
=======import Head from 'next/head';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======import Head from 'next/head';
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import Head from 'next/head';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
</div>"
                <form className="space-y-4">"
</form>
                  <div>
</div>"
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">"
</label>
                    </label>
      return <div>Something went wrong.</div>;"
    <div className="min-h-screen bg-gray-50">;"
</div>
      <Head>;
</Head>
        <title>Contact Us - Zion Tech Group</title>;"
        <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." />;"
</meta>
      </Head>;"
      <div className="container mx-auto px-4 py-20">;"
</div>"
        <div className="max-w-4xl mx-auto">;"
</div>"
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">;"
</h1>
          </h1>;"
          <div className="bg-white rounded-lg shadow-lg p-8">;"
</div>"
            <div className="grid grid-cols-1 "md": grid-cols-2 gap-8">;"
</div>
              <div>;
</div>"
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">;"
</h2>
                </h2>;"
                <p className="text-gray-600 mb-6">;"
</p>
                </p>;"
                <div className="space-y-4">;"
</div>
                  <div>;
</div>"
                    <h3 className="font-semibold text-gray-900">Email</h3>;""
                    <p className="text-gray-600">contact@ziontechgroup && ziontechgroup.com</p>;"
                  </div>;
                  <div>;
</div>"
                    <h3 className="font-semibold text-gray-900">Phone</h3>;""
                    <p className="text-gray-600">+1 (555) 123-4567</p>;"
                  </div>;
                  <div>;
</div>"
                    <h3 className="font-semibold text-gray-900">Address</h3>;""
                    <p className="text-gray-600">;"
</p>

                      123 Technology Drive<br />;
</br>
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
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md "focus": outline-none focus:ring-2 focus:ring-blue-500"
                      required
/>;
                  </div>;
                  <div>;
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">;
                      Email;
                    </label>;
                    <input
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
/>;
                  </div>;
                  <div>;
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">;
                      Message;
                    </label>;
                    <textarea
                      id="message"
                      name="message"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                      rows={4}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
                      rows={4}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                      className="w-full px-3 py-2 border border-gray-300 rounded-md "focus": outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======

                      className="w-full px-3 py-2 border border-gray-300 rounded-md "focus": outline-none focus: ring-2 focus:ring-blue-500"
                      required></textarea>;
                  </div>;




                      className="w-full px-3 py-2 border border-gray-300 rounded-md "focus": outline-none focus: ring-2 focus:ring-blue-500"
                      required></textarea>;
                  </div>;

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Send Message
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
import * as React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}








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
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup && ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup && ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup && ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup && ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}





import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}




}

import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
import * as React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
}

import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}

                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>                    <textarea
                      id="message"
                      name="message"
                      rows={4}import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}
}
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

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
=======


    <div className="min-h-screen bg-gray-50">"
</div>
      <Head>

        <title>Contact Us - Zion Tech Group</title>"
        <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." />"
</meta>
      "
      <div className="container mx-auto px-4 py-20">"

              <div>;
</div>"
        <div className="max-w-4xl mx-auto">"
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">"
</h1>
          </h1>"
          <div className="bg-white rounded-lg shadow-lg p-8">"
            <div className="grid grid-cols-1 "md": grid-cols-2 gap-8">"
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">"
</h2>
                </h2>"
                <p className="text-gray-600 mb-6">"
</p>
                </p>"
                <div className="space-y-4">"
                    <h3 className="font-semibold text-gray-900">Email</h3>""
                    <p className="text-gray-600">contact@ziontechgroup.com</p>"
                    <h3 className="font-semibold text-gray-900">Phone</h3>")"
                    <p className="text-gray-600">+1 (555) 123-4567</p>"
                    <h3 className="font-semibold text-gray-900">Address</h3>""
                    <p className="text-gray-600">"
                      123 Technology Drive<br />
</br>
                <form className="space-y-4">"
</form>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">"
</label>
      return <div>Something went wrong.</div>;"
    <div className="min-h-screen bg-gray-50">;"
      <Head>;

        <title>Contact Us - Zion Tech Group</title>;"
        <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." />;"
      ;"
      <div className="container mx-auto px-4 py-20">;"
        <div className="max-w-4xl mx-auto">;"
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">;"
          </h1>;"
          <div className="bg-white rounded-lg shadow-lg p-8">;"
            <div className="grid grid-cols-1 "md": grid-cols-2 gap-8">;"
              <div>;
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">;"
                </h2>;"
                <p className="text-gray-600 mb-6">;"
                </p>;"
                <div className="space-y-4">;"
                    <h3 className="font-semibold text-gray-900">Email</h3>;""
                    <p className="text-gray-600">contact@ziontechgroup && ziontechgroup.com</p>;"
                  </div>;
                    <h3 className="font-semibold text-gray-900">Phone</h3>;""
                    <p className="text-gray-600">+1 (555) 123-4567</p>;"
                    <h3 className="font-semibold text-gray-900">Address</h3>;""
                    <p className="text-gray-600">;"
                      123 Technology Drive<br />;
                    </p>;
                <form className="space-y-4">;"
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">;"
                    </label>;
                    <input;"
                      type="text"""
                      id="name"""
                      name="name"""
                      className="w-full px-3 py-2 border border-gray-300 rounded-md "focus": outline-none focus:ring-2 focus:ring-blue-500""

                      required;
                    />
</input>
                  </div>

                  <div>
</div>"
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">"
                      type="email"""
                      id="email"""
                      name="email"""
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500""

                      required;
                    />
</input>
                  </div>

                  <div>
</div>"
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">"
                    <textarea;"
                      id="message"""
                      name="message""
                      rows={4}"
                    ></textarea>
                  <button;"
                    type="submit"""
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors""
                  >
</button>
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." />  <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}""
import * as React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." />  <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}""
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." />  <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}"

                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>"
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}""
import * as React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}""
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}""
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}"
                      required></textarea>;
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">;"
                  </button>;
                </form>;
    </div>;"
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." />  <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup && ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}""
pr-12325
</button>

                  </button>;
                </form>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;

    </div>;"
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup && ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}""
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup && ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}""
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup && ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}""
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup && ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}""
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}""
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}""
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}""
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}""
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}""
import React from 'react'; import Head from 'next/head'; export default function ContactPage() { return ( <div className="min-h-screen bg-gray-50"> <Head> <title>Contact Us - Zion Tech Group</title> <meta name="description" content="Get in touch with our expert team for technology solutions and consulting." /> </Head> <div className="container mx-auto px-4 py-20"> <div className="max-w-4xl mx-auto"> <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center"> Contact Us </h1> <div className="bg-white rounded-lg shadow-lg p-8"> <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> <div> <h2 className="text-2xl font-semibold text-gray-900 mb-4"> Get in Touch </h2> <p className="text-gray-600 mb-6"> Ready to transform your business with cutting-edge technology? Our expert team is here to help you succeed. </p> <div className="space-y-4"> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600">contact@ziontechgroup.com</p> </div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 (555) 123-4567</p> </div> <div> <h3 className="font-semibold text-gray-900">Address</h3> <p className="text-gray-600"> 123 Technology Drive<br /> Innovation City,IC 12345 </p> </div> </div> </div> <div> <form className="space-y-4"> <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1"> Name </label> <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1"> Email </label> <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required /> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> </div> </div> </div> </div> </div> )}""

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
