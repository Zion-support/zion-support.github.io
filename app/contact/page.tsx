<<<<<<< HEAD
'use client';

import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Get in touch with our team of experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Get in Touch
            </h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">contact@ziontechgroup.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="h-6 w-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <svg className="h-6 w-6 text-blue-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p className="text-gray-600">123 Tech Street, Innovation City, IC 12345</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Why Contact Us?
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Free consultation</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Custom solutions</span>
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">24/7 support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
=======
<<<<<<< HEAD
'use client';
import React from 'react';

export default function ContactPage() {
	return (
		<main className="p-8">
			<h1>Contact Us</h1>
			<p>Get in touch with our team.</p>
		</main>
	);
}
=======
<<<<<<< HEAD
<<<<<<< HEAD
export const metadata = { title: 'Contact | Zion Tech Group',description: 'Get in touch with Zion Tech Group for AI,micro SaaS,and IT services. We reply within one business day.',}; export default function ContactPage() { return ( <div className="animate-fade-in"> <div className="max-w-4xl mx-auto"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1> <p className="text-xl text-gray-600">We reply within one business day</p> </div> <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> {} <div className="space-y-8"> <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"> <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2> <div className="space-y-6"> <div className="flex items-start space-x-4"> <div className="text-2xl">📞</div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 302 464 0950</p> <p className="text-sm text-gray-500">Available 9 AM - 6 PM EST</p> </div> </div> <div className="flex items-start space-x-4"> <div className="text-2xl">✉️</div> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600"> <a href="mailto:kleber@ziontechgroup && ziontechgroup.com" className="hover:text-blue-600 transition-colors"> kleber@ziontechgroup && ziontechgroup.com </a> </p> <p className="text-sm text-gray-500">We respond within 24 hours</p> </div> </div> <div className="flex items-start space-x-4"> <div className="text-2xl">📍</div> <div> <h3 className="font-semibold text-gray-900">Office</h3> <p className="text-gray-600"> 364 E Main St STE 1008<br /> Middletown,DE 19709 </p> <p className="text-sm text-gray-500">By appointment only</p> </div> </div> </div> </div> <div className="bg-blue-50 border border-blue-200 rounded-xl p-6"> <h3 className="font-semibold text-blue-900 mb-2">Quick Response</h3> <p className="text-blue-800 text-sm"> For urgent matters,call us directly. For project inquiries,email us with your requirements and we'll get back to you within one business day. </p> </div> </div> {} <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"> <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2> <form className="space-y-6"> <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2"> First Name </label> <input type="text" id="firstName" name="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required /> </div> <div> <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2"> Last Name </label> <input type="text" id="lastName" name="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required /> </div> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email </label> <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required /> </div> <div> <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2"> Service Interest </label> <select id="service" name="service" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" > <option value="">Select a service</option> <option value="ai-services">AI Services</option> <option value="micro-saas">Micro SaaS Development</option> <option value="it-services">IT Services</option> <option value="consulting">General Consulting</option> </select> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your project or requirements..." required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" > Send Message </button> </form> </div> </div> <div className="mt-12 text-center"> <p className="text-gray-600 mb-4">Or visit our main website for more information</p> <a href="https: className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors" > Visit Main Site </a> </div> </div> </div> )}

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef

export const metadata = { title: 'Contact | Zion Tech Group',description: 'Get in touch with Zion Tech Group for AI,micro SaaS,and IT services. We reply within one business day.',}; export default function ContactPage() { return ( <div className="animate-fade-in"> <div className="max-w-4xl mx-auto"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1> <p className="text-xl text-gray-600">We reply within one business day</p> </div> <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> {} <div className="space-y-8"> <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"> <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2> <div className="space-y-6"> <div className="flex items-start space-x-4"> <div className="text-2xl">📞</div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 302 464 0950</p> <p className="text-sm text-gray-500">Available 9 AM - 6 PM EST</p> </div> </div> <div className="flex items-start space-x-4"> <div className="text-2xl">✉️</div> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600"> <a href="mailto:kleber@ziontechgroup && ziontechgroup.com" className="hover:text-blue-600 transition-colors"> kleber@ziontechgroup && ziontechgroup.com </a> </p> <p className="text-sm text-gray-500">We respond within 24 hours</p> </div> </div> <div className="flex items-start space-x-4"> <div className="text-2xl">📍</div> <div> <h3 className="font-semibold text-gray-900">Office</h3> <p className="text-gray-600"> 364 E Main St STE 1008<br /> Middletown,DE 19709 </p> <p className="text-sm text-gray-500">By appointment only</p> </div> </div> </div> </div> <div className="bg-blue-50 border border-blue-200 rounded-xl p-6"> <h3 className="font-semibold text-blue-900 mb-2">Quick Response</h3> <p className="text-blue-800 text-sm"> For urgent matters,call us directly. For project inquiries,email us with your requirements and we'll get back to you within one business day. </p> </div> </div> {} <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"> <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2> <form className="space-y-6"> <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2"> First Name </label> <input type="text" id="firstName" name="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required /> </div> <div> <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2"> Last Name </label> <input type="text" id="lastName" name="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required /> </div> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email </label> <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required /> </div> <div> <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2"> Service Interest </label> <select id="service" name="service" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" > <option value="">Select a service</option> <option value="ai-services">AI Services</option> <option value="micro-saas">Micro SaaS Development</option> <option value="it-services">IT Services</option> <option value="consulting">General Consulting</option> </select> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your project or requirements..." required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" > Send Message </button> </form> </div> </div> <div className="mt-12 text-center"> <p className="text-gray-600 mb-4">Or visit our main website for more information</p> <a href="https: className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors" > Visit Main Site </a> </div> </div> </div> )}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export const metadata = { title: 'Contact | Zion Tech Group', description: 'Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.', } export default /**
 * ContactPage - Function description
 */
function ContactPage() { return ( <div className="animate - fade - in"> <div className="max - w-4xl mx - auto"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4">Contact Us</h1> <p className="text - xl text - gray - 600">We reply within one business day</p> </div> <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 12"> {} <div className="space - y-8"> <div className="bg - white border border - gray - 200 rounded - xl p - 8 shadow - sm"> <h2 className="text - 2xl font - bold text - gray - 900 mb - 6">Get in Touch</h2> <div className="space - y-6"> <div className="flex items - start space - x-4"> <div className="text - 2xl">📞</div> <div> <h3 className="font - semibold text - gray - 900">Phone</h3> <p className="text - gray - 600">+1 302 464 0950</p> <p className="text - sm text - gray - 500">Available 9 AM - 6 PM EST</p> </div> </div> <div className="flex items - start space - x-4"> <div className="text - 2xl">✉️</div> <div> <h3 className="font - semibold text - gray - 900">Email</h3> <p className="text - gray - 600"> <a href="mailto:kleber@ziontechgroup.com" className="hover:text - blue - 600 transition - colors"> kleber@ziontechgroup.com </a> </p> <p className="text - sm text - gray - 500">We respond within 24 hours</p> </div> </div> <div className="flex items - start space - x-4"> <div className="text - 2xl">📍</div> <div> <h3 className="font - semibold text - gray - 900">Office</h3> <p className="text - gray - 600"> 364 E Main St STE 1008 < br /> Middletown, DE 19709 </p> <p className="text - sm text - gray - 500">By appointment only</p> </div> </div> </div> </div> <div className="bg - blue - 50 border border - blue - 200 rounded - xl p - 6"> <h3 className="font - semibold text - blue - 900 mb - 2">Quick Response</h3> <p className="text - blue - 800 text - sm"> For urgent matters, call us directly. For project inquiries, email us with your requirements and we'll get back to you within one business day. </p> </div> </div> {} <div className="bg - white border border - gray - 200 rounded - xl p - 8 shadow - sm"> <h2 className="text - 2xl font - bold text - gray - 900 mb - 6">Send us a Message</h2> <form className="space - y-6"> <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4"> <div> <label html_for="first_name" className="block text - sm font - medium text - gray - 700 mb - 2"> First Name </label> <input type="text" id="first_name" name="first_name" className="w - full px - 4 py - 2 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border - transparent" required /> </div> <div> <label html_for="last_name" className="block text - sm font - medium text - gray - 700 mb - 2"> Last Name </label> <input type="text" id="last_name" name="last_name" className="w - full px - 4 py - 2 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border - transparent" required /> </div> </div> <div> <label html_for="email" className="block text - sm font - medium text - gray - 700 mb - 2"> Email </label> <input type="email" id="email" name="email" className="w - full px - 4 py - 2 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border - transparent" required /> </div> <div> <label html_for="service" className="block text - sm font - medium text - gray - 700 mb - 2"> Service Interest </label> <select id="service" name="service" className="w - full px - 4 py - 2 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border - transparent" > <option value="">Select a service</option> <option value="ai - services">AI Services</option> <option value="micro - saas">Micro SaaS Development</option> <option value="it - services">IT Services</option> <option value="consulting">General Consulting</option> </select> </div> <div> <label html_for="message" className="block text - sm font - medium text - gray - 700 mb - 2"> Message </label> <textarea id="message" name="message" rows={4} className="w - full px - 4 py - 2 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border - transparent" placeholder="Tell us about your project or requirements..." required ></textarea> </div> <button type="submit" className="w - full bg - blue - 600 text - white py - 3 px - 6 rounded - lg font - semibold hover:bg - blue - 700 transition - colors focus:ring - 2 focus:ring - blue - 500 focus:ring - offset - 2" > Send Message </button> </form> </div> </div> <div className="mt - 12 text - center"> <p className="text - gray - 600 mb - 4">Or visit our main website for more information</p> <a href="https: className="inline - block border - 2 border - gray - 300 text - gray - 700 px - 8 py - 3 rounded - lg font - semibold hover:border - gray - 400 transition - colors" > Visit Main Site </a> </div> </div> </div> )}
<<<<<<< HEAD

export const metadata = { title: 'Contact | Zion Tech Group',description: 'Get in touch with Zion Tech Group for AI,micro SaaS,and IT services. We reply within one business day.',}; export default function ContactPage() { return ( <div className="animate-fade-in"> <div className="max-w-4xl mx-auto"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1> <p className="text-xl text-gray-600">We reply within one business day</p> </div> <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> {} <div className="space-y-8"> <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"> <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2> <div className="space-y-6"> <div className="flex items-start space-x-4"> <div className="text-2xl">📞</div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 302 464 0950</p> <p className="text-sm text-gray-500">Available 9 AM - 6 PM EST</p> </div> </div> <div className="flex items-start space-x-4"> <div className="text-2xl">✉️</div> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600"> <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600 transition-colors"> kleber@ziontechgroup.com </a> </p> <p className="text-sm text-gray-500">We respond within 24 hours</p> </div> </div> <div className="flex items-start space-x-4"> <div className="text-2xl">📍</div> <div> <h3 className="font-semibold text-gray-900">Office</h3> <p className="text-gray-600"> 364 E Main St STE 1008<br /> Middletown,DE 19709 </p> <p className="text-sm text-gray-500">By appointment only</p> </div> </div> </div> </div> <div className="bg-blue-50 border border-blue-200 rounded-xl p-6"> <h3 className="font-semibold text-blue-900 mb-2">Quick Response</h3> <p className="text-blue-800 text-sm"> For urgent matters,call us directly. For project inquiries,email us with your requirements and we'll get back to you within one business day. </p> </div> </div> {} <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"> <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2> <form className="space-y-6"> <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2"> First Name </label> <input type="text" id="firstName" name="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required /> </div> <div> <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2"> Last Name </label> <input type="text" id="lastName" name="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required /> </div> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email </label> <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required /> </div> <div> <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2"> Service Interest </label> <select id="service" name="service" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" > <option value="">Select a service</option> <option value="ai-services">AI Services</option> <option value="micro-saas">Micro SaaS Development</option> <option value="it-services">IT Services</option> <option value="consulting">General Consulting</option> </select> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your project or requirements..." required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" > Send Message </button> </form> </div> </div> <div className="mt-12 text-center"> <p className="text-gray-600 mb-4">Or visit our main website for more information</p> <a href="https: className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors" > Visit Main Site </a> </div> </div> </div> )};

<<<<<<< HEAD
export const metadata = { 
  title: 'Contact | Zion Tech Group',
  description: 'Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.',
};

export default function ContactPage() {
  return (
    <div className="animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">We reply within one business day</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">+1 302 464 0950</p>
                    <p className="text-sm text-gray-500">Available 9 AM - 6 PM EST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600 transition-colors">
                        kleber@ziontechgroup.com
                      </a>
                    </p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                    <p className="text-sm text-gray-500">By appointment only</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-semibold text-blue-900 mb-2">Quick Response</h3>
              <p className="text-blue-800 text-sm">
                For urgent matters, call us directly. For project inquiries, email us with your requirements and we&apos;ll get back to you within one business day.
              </p>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
<<<<<<< HEAD
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
=======
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                  required
                />
              </div>
              
              <div>
<<<<<<< HEAD
=======
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="ai-services">AI Services</option>
                  <option value="micro-saas">Micro SaaS Development</option>
                  <option value="it-services">IT Services</option>
                  <option value="blockchain">Blockchain Solutions</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="consulting">General Consulting</option>
                </select>
              </div>
              
              <div>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
<<<<<<< HEAD
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
=======
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project or requirements..."
                  required
                ></textarea>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </div>
              
              <button
                type="submit"
<<<<<<< HEAD
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
              >
                Send Message
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
=======
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              </button>
            </form>
          </div>
        </div>
<<<<<<< HEAD
=======
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Or visit our main website for more information</p>
          <a
            href="https://ziontechgroup.com"
            className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
          >
            Visit Main Site
          </a>
        </div>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======
export const metadata = { title: 'Contact | Zion Tech Group',description: 'Get in touch with Zion Tech Group for AI,micro SaaS,and IT services. We reply within one business day.',}; export default function ContactPage() { return ( <div className="animate-fade-in"> <div className="max-w-4xl mx-auto"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1> <p className="text-xl text-gray-600">We reply within one business day</p> </div> <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> {} <div className="space-y-8"> <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"> <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2> <div className="space-y-6"> <div className="flex items-start space-x-4"> <div className="text-2xl">📞</div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 302 464 0950</p> <p className="text-sm text-gray-500">Available 9 AM - 6 PM EST</p> </div> </div> <div className="flex items-start space-x-4"> <div className="text-2xl">✉️</div> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600"> <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600 transition-colors"> kleber@ziontechgroup.com </a> </p> <p className="text-sm text-gray-500">We respond within 24 hours</p> </div> </div> <div className="flex items-start space-x-4"> <div className="text-2xl">📍</div> <div> <h3 className="font-semibold text-gray-900">Office</h3> <p className="text-gray-600"> 364 E Main St STE 1008<br /> Middletown,DE 19709 </p> <p className="text-sm text-gray-500">By appointment only</p> </div> </div> </div> </div> <div className="bg-blue-50 border border-blue-200 rounded-xl p-6"> <h3 className="font-semibold text-blue-900 mb-2">Quick Response</h3> <p className="text-blue-800 text-sm"> For urgent matters,call us directly. For project inquiries,email us with your requirements and we'll get back to you within one business day. </p> </div> </div> {} <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"> <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2> <form className="space-y-6"> <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2"> First Name </label> <input type="text" id="firstName" name="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required /> </div> <div> <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2"> Last Name </label> <input type="text" id="lastName" name="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required /> </div> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email </label> <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required /> </div> <div> <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2"> Service Interest </label> <select id="service" name="service" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" > <option value="">Select a service</option> <option value="ai-services">AI Services</option> <option value="micro-saas">Micro SaaS Development</option> <option value="it-services">IT Services</option> <option value="consulting">General Consulting</option> </select> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your project or requirements..." required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" > Send Message </button> </form> </div> </div> <div className="mt-12 text-center"> <p className="text-gray-600 mb-4">Or visit our main website for more information</p> <a href="https: className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors" > Visit Main Site </a> </div> </div> </div> )};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

export const metadata = { title: 'Contact | Zion Tech Group',description: 'Get in touch with Zion Tech Group for AI,micro SaaS,and IT services. We reply within one business day.',}; export default function ContactPage() { return ( <div className="animate-fade-in"> <div className="max-w-4xl mx-auto"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1> <p className="text-xl text-gray-600">We reply within one business day</p> </div> <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> {} <div className="space-y-8"> <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"> <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2> <div className="space-y-6"> <div className="flex items-start space-x-4"> <div className="text-2xl">📞</div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 302 464 0950</p> <p className="text-sm text-gray-500">Available 9 AM - 6 PM EST</p> </div> </div> <div className="flex items-start space-x-4"> <div className="text-2xl">✉️</div> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600"> <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600 transition-colors"> kleber@ziontechgroup.com </a> </p> <p className="text-sm text-gray-500">We respond within 24 hours</p> </div> </div> <div className="flex items-start space-x-4"> <div className="text-2xl">📍</div> <div> <h3 className="font-semibold text-gray-900">Office</h3> <p className="text-gray-600"> 364 E Main St STE 1008<br /> Middletown,DE 19709 </p> <p className="text-sm text-gray-500">By appointment only</p> </div> </div> </div> </div> <div className="bg-blue-50 border border-blue-200 rounded-xl p-6"> <h3 className="font-semibold text-blue-900 mb-2">Quick Response</h3> <p className="text-blue-800 text-sm"> For urgent matters,call us directly. For project inquiries,email us with your requirements and we'll get back to you within one business day. </p> </div> </div> {} <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"> <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2> <form className="space-y-6"> <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2"> First Name </label> <input type="text" id="firstName" name="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required /> </div> <div> <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2"> Last Name </label> <input type="text" id="lastName" name="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required /> </div> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email </label> <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required /> </div> <div> <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2"> Service Interest </label> <select id="service" name="service" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" > <option value="">Select a service</option> <option value="ai-services">AI Services</option> <option value="micro-saas">Micro SaaS Development</option> <option value="it-services">IT Services</option> <option value="consulting">General Consulting</option> </select> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your project or requirements..." required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" > Send Message </button> </form> </div> </div> <div className="mt-12 text-center"> <p className="text-gray-600 mb-4">Or visit our main website for more information</p> <a href="https: className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors" > Visit Main Site </a> </div> </div> </div> )};

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-3cef
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
