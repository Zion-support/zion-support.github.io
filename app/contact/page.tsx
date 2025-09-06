<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const metadata = { 
=======
=======
>>>>>>> c554ecc8e69d10c1910127259eb72d6f61ca1955
'use client';

import React, { useState } from 'react';

<<<<<<< HEAD
export const metadata = {
  title: 'Contact | Zion Tech Group',
  description: 'Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.',
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
=======
export const metadata = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  title: 'Contact | Zion Tech Group',
  description: 'Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.',
=======
  title: "Contact | Zion Tech Group",
<<<<<<< HEAD
  description:
    "Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
  title: "Contact | Zion Tech Group",
  description: "Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.",
  keywords: "contact, support, AI services, micro SaaS, IT services, consulting"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  title: 'Contact | Zion Tech Group',
  description: 'Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.',
  keywords: 'contact, support, AI services, micro SaaS, IT services, consulting'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  description: "Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.",
  keywords: "contact, support, AI services, micro SaaS, IT services, consulting"
>>>>>>> 3355446c491e527b29697d580cc54457b0d965fc
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
};
=======
>>>>>>> c554ecc8e69d10c1910127259eb72d6f61ca1955

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our team of experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900 border border-green-700 rounded-lg">
                <p className="text-green-200">Thank you! Your message has been sent successfully.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900 border border-red-700 rounded-lg">
                <p className="text-red-200">Sorry, there was an error sending your message. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a service</option>
                  <option value="ai-solutions">AI Solutions</option>
                  <option value="micro-saas">Micro SaaS Development</option>
                  <option value="it-services">IT Services</option>
                  <option value="blockchain">Blockchain Solutions</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select budget range</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-500k">$100,000 - $500,000</option>
                  <option value="over-500k">Over $500,000</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Get in touch</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-gray-300">Email us</p>
                    <p className="text-white font-semibold">contact@ziontechgroup.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <p className="text-gray-300">Call us</p>
                    <p className="text-white font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-gray-300">Visit us</p>
                    <p className="text-white font-semibold">123 Tech Street, Silicon Valley, CA 94000</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🕒</span>
                  </div>
                  <div>
                    <p className="text-gray-300">Business Hours</p>
                    <p className="text-white font-semibold">Mon - Fri: 9:00 AM - 6:00 PM PST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4">Why work with us?</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Expert team with 10+ years experience
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Proven track record with 500+ clients
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Custom solutions tailored to your needs
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  24/7 support and maintenance
                </li>
                <li className="flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Competitive pricing and flexible terms
                </li>
              </ul>
            </div>
=======
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
                    <p className="text-gray-600">kleber@ziontechgroup.com</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Send Message
              </button>
            </form>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-0308
          </div>
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
=======
=======
export const metadata = { title: 'Contact | Zion Tech Group', description: 'Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.', } export default /**
 * ContactPage - Function description
 */
function ContactPage() { return ( <div className="animate - fade - in"> <div className="max - w-4xl mx - auto"> <div className="text - center mb - 12"> <h1 className="text - 4xl font - bold text - gray - 900 mb - 4">Contact Us</h1> <p className="text - xl text - gray - 600">We reply within one business day</p> </div> <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 12"> {} <div className="space - y-8"> <div className="bg - white border border - gray - 200 rounded - xl p - 8 shadow - sm"> <h2 className="text - 2xl font - bold text - gray - 900 mb - 6">Get in Touch</h2> <div className="space - y-6"> <div className="flex items - start space - x-4"> <div className="text - 2xl">📞</div> <div> <h3 className="font - semibold text - gray - 900">Phone</h3> <p className="text - gray - 600">+1 302 464 0950</p> <p className="text - sm text - gray - 500">Available 9 AM - 6 PM EST</p> </div> </div> <div className="flex items - start space - x-4"> <div className="text - 2xl">✉️</div> <div> <h3 className="font - semibold text - gray - 900">Email</h3> <p className="text - gray - 600"> <a href="mailto:kleber@ziontechgroup.com" className="hover:text - blue - 600 transition - colors"> kleber@ziontechgroup.com </a> </p> <p className="text - sm text - gray - 500">We respond within 24 hours</p> </div> </div> <div className="flex items - start space - x-4"> <div className="text - 2xl">📍</div> <div> <h3 className="font - semibold text - gray - 900">Office</h3> <p className="text - gray - 600"> 364 E Main St STE 1008 < br /> Middletown, DE 19709 </p> <p className="text - sm text - gray - 500">By appointment only</p> </div> </div> </div> </div> <div className="bg - blue - 50 border border - blue - 200 rounded - xl p - 6"> <h3 className="font - semibold text - blue - 900 mb - 2">Quick Response</h3> <p className="text - blue - 800 text - sm"> For urgent matters, call us directly. For project inquiries, email us with your requirements and we'll get back to you within one business day. </p> </div> </div> {} <div className="bg - white border border - gray - 200 rounded - xl p - 8 shadow - sm"> <h2 className="text - 2xl font - bold text - gray - 900 mb - 6">Send us a Message</h2> <form className="space - y-6"> <div className="grid grid - cols - 1 md:grid - cols - 2 gap - 4"> <div> <label html_for="first_name" className="block text - sm font - medium text - gray - 700 mb - 2"> First Name </label> <input type="text" id="first_name" name="first_name" className="w - full px - 4 py - 2 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border - transparent" required /> </div> <div> <label html_for="last_name" className="block text - sm font - medium text - gray - 700 mb - 2"> Last Name </label> <input type="text" id="last_name" name="last_name" className="w - full px - 4 py - 2 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border - transparent" required /> </div> </div> <div> <label html_for="email" className="block text - sm font - medium text - gray - 700 mb - 2"> Email </label> <input type="email" id="email" name="email" className="w - full px - 4 py - 2 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border - transparent" required /> </div> <div> <label html_for="service" className="block text - sm font - medium text - gray - 700 mb - 2"> Service Interest </label> <select id="service" name="service" className="w - full px - 4 py - 2 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border - transparent" > <option value="">Select a service</option> <option value="ai - services">AI Services</option> <option value="micro - saas">Micro SaaS Development</option> <option value="it - services">IT Services</option> <option value="consulting">General Consulting</option> </select> </div> <div> <label html_for="message" className="block text - sm font - medium text - gray - 700 mb - 2"> Message </label> <textarea id="message" name="message" rows={4} className="w - full px - 4 py - 2 border border - gray - 300 rounded - lg focus:ring - 2 focus:ring - blue - 500 focus:border - transparent" placeholder="Tell us about your project or requirements..." required ></textarea> </div> <button type="submit" className="w - full bg - blue - 600 text - white py - 3 px - 6 rounded - lg font - semibold hover:bg - blue - 700 transition - colors focus:ring - 2 focus:ring - blue - 500 focus:ring - offset - 2" > Send Message </button> </form> </div> </div> <div className="mt - 12 text - center"> <p className="text - gray - 600 mb - 4">Or visit our main website for more information</p> <a href="https: className="inline - block border - 2 border - gray - 300 text - gray - 700 px - 8 py - 3 rounded - lg font - semibold hover:border - gray - 400 transition - colors" > Visit Main Site </a> </div> </div> </div> )}
=======

export const metadata = { title: 'Contact | Zion Tech Group',description: 'Get in touch with Zion Tech Group for AI,micro SaaS,and IT services. We reply within one business day.',}; export default function ContactPage() { return ( <div className="animate-fade-in"> <div className="max-w-4xl mx-auto"> <div className="text-center mb-12"> <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1> <p className="text-xl text-gray-600">We reply within one business day</p> </div> <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"> {} <div className="space-y-8"> <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"> <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2> <div className="space-y-6"> <div className="flex items-start space-x-4"> <div className="text-2xl">📞</div> <div> <h3 className="font-semibold text-gray-900">Phone</h3> <p className="text-gray-600">+1 302 464 0950</p> <p className="text-sm text-gray-500">Available 9 AM - 6 PM EST</p> </div> </div> <div className="flex items-start space-x-4"> <div className="text-2xl">✉️</div> <div> <h3 className="font-semibold text-gray-900">Email</h3> <p className="text-gray-600"> <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600 transition-colors"> kleber@ziontechgroup.com </a> </p> <p className="text-sm text-gray-500">We respond within 24 hours</p> </div> </div> <div className="flex items-start space-x-4"> <div className="text-2xl">📍</div> <div> <h3 className="font-semibold text-gray-900">Office</h3> <p className="text-gray-600"> 364 E Main St STE 1008<br /> Middletown,DE 19709 </p> <p className="text-sm text-gray-500">By appointment only</p> </div> </div> </div> </div> <div className="bg-blue-50 border border-blue-200 rounded-xl p-6"> <h3 className="font-semibold text-blue-900 mb-2">Quick Response</h3> <p className="text-blue-800 text-sm"> For urgent matters,call us directly. For project inquiries,email us with your requirements and we'll get back to you within one business day. </p> </div> </div> {} <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm"> <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2> <form className="space-y-6"> <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> <div> <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2"> First Name </label> <input type="text" id="firstName" name="firstName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required /> </div> <div> <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2"> Last Name </label> <input type="text" id="lastName" name="lastName" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required /> </div> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"> Email </label> <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" required /> </div> <div> <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2"> Service Interest </label> <select id="service" name="service" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" > <option value="">Select a service</option> <option value="ai-services">AI Services</option> <option value="micro-saas">Micro SaaS Development</option> <option value="it-services">IT Services</option> <option value="consulting">General Consulting</option> </select> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2"> Message </label> <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your project or requirements..." required ></textarea> </div> <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" > Send Message </button> </form> </div> </div> <div className="mt-12 text-center"> <p className="text-gray-600 mb-4">Or visit our main website for more information</p> <a href="https: className="inline-block border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors" > Visit Main Site </a> </div> </div> </div> )};

=======


>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
