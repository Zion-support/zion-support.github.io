
'use client';import React, { useState } from 'react';
import { EnvelopeIcon,PhoneIcon,MapPinIcon,ClockIcon,CheckCircleIcon,ExclamationTriangleIcon;
 } from '@heroicons/react/24/outline';
export const metadata = {title: 'Contact | Zion Tech Group',description: 'Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.',export const metadata = {title: 'Contact | Zion Tech Group',description: 'Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.',title: "Contact | Zion Tech Group",description:;
    "Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.",ursor/automate-test-improve-and-merge-code-646c;
  description: "Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.",keywords: "contact, support, AI services, micro SaaS, IT services, consulting";
}export default function ContactPage() {const [formData, setFormData] = useState({name: '',email: '',company: '',service: '',budget: '',message: '';
  })const [isSubmitting, setIsSubmitting] = useState(false)const [submitStatus, setSubmitStatus]  = useState<'idle' | 'success' | 'error'>('idle')const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {const { name, value } = e.target;
    setFormData(prev => ({...prev,[name]: value;
    }))}const handleSubmit = async (e: React.FormEvent) => {e.preventDefault()setIsSubmitting(true)// Simulate form submission;
    try {await new Promise(resolve => setTimeout(resolve, 2000))setSubmitStatus('success')setFormData({name: '',email: '',company: '',service: '',budget: '',message: '';
      })} catch (error) {setSubmitStatus('error')} finally {setIsSubmitting(false)}
  }const contactInfo = [;
    {icon: EnvelopeIcon,title: 'Email',details: 'contact@ziontechgroup.com',description: 'We reply within 1 business day';
    },{icon: PhoneIcon,title: 'Phone',details: '+1 (302) 464-0950',description: 'Mon-Fri 9AM-6PM EST';
    },{icon: MapPinIcon,title: 'Address',details: '364 E Main St STE 1008',description: 'Middletown, DE 19709';
    },{icon: ClockIcon,title: 'Response Time',details: '< 24 hours',description: 'Average response time';
    }
  ];return (<div className="min-h-screen bg-white">;
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 py-20">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="text-center">;
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Contact Us;
            </h1>;
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">;
              Ready to transform your business? Let's discuss your project and find the perfect solution.;
            </p>;
          </div>;
        </div>;
      </div>;
      <div className="py-20">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">;
            {/* Contact Information */}
            <div>;
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>;
              <p className="text-lg text-gray-600 mb-8">;
                Ready to transform your business with AI, micro SaaS, or IT solutions?;
                We'd love to hear from you and discuss how we can help.;
              </p>;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <div className="container mx-auto px-4 py-16">;
        <div className="text-center mb-16">;
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
            Contact Us;
          </h1>;
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">;
            Ready to transform your business with cutting-edge technology? Let&apos;s;
            Ready to transform your business with cutting-edge technology? Let's;
            discuss how we can help you achieve your goals.;
            Ready to transform your business with cutting-edge technology?;
            Let&apos;s discuss how we can help you achieve your goals.;
          </p>;
        </div>;
              <div className="space-y-6">;
                {contactInfo.map((info, index) => (<div key={index} className="flex items-start">;
                    <div className="flex-shrink-0">;
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">;
                        <info.icon className="h-6 w-6 text-blue-600" />;
                      </div>;
                    </div>;
                    <div className="ml-4">;
                      <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>;
                      <p className="text-gray-900 font-medium">{info.details}</p>;
                      <p className="text-gray-600">{info.description}</p>;
                    </div>;
                  </div>;
                ))}
              </div>;
            </div>;
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">;
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>;
              {submitStatus === 'success' && (<div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">;
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3" />;
                  <p className="text-green-800">Thank you! Your message has been sent successfully.</p>;
                </div>;
              )}{submitStatus === 'error' && (<div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">;
                  <ExclamationTriangleIcon className="h-5 w-5 text-red-600 mr-3" />;
                  <p className="text-red-800">Sorry, there was an error sending your message. Please try again.</p>;
                </div>;
              )}<form onSubmit={handleSubmit} className="space-y-6">;
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                  <div>;
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">;
                      Name *;
                    </label>;
                    <input;
                      type="text";
                      id="name";
                      name="name";
                      value={formData.name}
                      onChange={handleInputChange}
                      required;
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
                      placeholder="Your name";
                    />;
                  </div>;
                  <div>;
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">;
                      Email *;
                    </label>;
                    <input;
                      type="email";
                      id="email";
                      name="email";
                      value={formData.email}
                      onChange={handleInputChange}
                      required;
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
                      placeholder="your@email.com";
                    />;
                  </div>;
                </div>;
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                  <div>;
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">;
                      Company;
                    </label>;
                    <input;
                      type="text";
                      id="company";
                      name="company";
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
                      placeholder="Your company";
                    />;
                  </div>;
                  <div>;
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">;
                      Service Interest;
                    </label>;
                    <select;
                      id="service";
                      name="service";
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
                    >;
                      <option value="">Select a service</option>;
                      <option value="ai-solutions">AI Solutions</option>;
                      <option value="micro-saas">Micro SaaS</option>;
                      <option value="it-services">IT Services</option>;
                      <option value="consulting">Consulting</option>;
                      <option value="other">Other</option>;
                    </select>;
                  </div>;
                </div>;
                <div>;
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">;
                    Project Budget;
                  </label>;
                  <select;
                    id="budget";
                    name="budget";
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
                  >;
                    <option value="">Select budget range</option>;
                    <option value="under-10k">Under $10,000</option>;
                    <option value="10k-25k">$10,000 - $25,000</option>;
                    <option value="25k-50k">$25,000 - $50,000</option>;
                    <option value="50k-100k">$50,000 - $100,000</option>;
                    <option value="over-100k">Over $100,000</option>;
                  </select>;
                </div>;
                <div>;
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">;
                    Message *;
                  </label>;
                  <textarea;
                    id="message";
                    name="message";
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required;
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
                    placeholder="Tell us about your project...";
                  />;
                </div>;
                <button;
                  type="submit";
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors";
                >;
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>;
              </form>;
            </div>;
export const metadata = {title: 'Contact | Zion Tech Group',description: 'Get in touch with Zion Tech Group for AI, micro SaaS, and IT services. We reply within one business day.';
}export default function ContactPage() {return (<div className="animate-fade-in">;
      <div className="max-w-4xl mx-auto">;
        <div className="text-center mb-12">;
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>;
          <p className="text-xl text-gray-600">We reply within one business day</p>;
        </div>;
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">;
          <div className="space-y-8">;
            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">;
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>;
              <div className="space-y-6">;
                <div className="flex items-start space-x-4">;
                  <div className="text-2xl">📞</div>;
                  <div>;
                    <h3 className="font-semibold text-gray-900">Phone</h3>;
                    <p className="text-gray-600">+1 302 464 0950</p>;
                    <p className="text-sm text-gray-500">Available 9 AM - 6 PM EST</p>;
                  </div>;
                </div>;
                <div className="flex items-start space-x-4">;
                  <div className="text-2xl">✉️</div>;
                  <div>;
                    <h3 className="font-semibold text-gray-900">Email</h3>;
                    <p className="text-gray-600">kleber@ziontechgroup.com</p>;
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>;
                  </div>;
                </div>;
                <div className="flex items-start space-x-4">;
                  <div className="text-2xl">📍</div>;
                  <div>;
                    <h3 className="font-semibold text-gray-900">Address</h3>;
                    <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>;
                  </div>;
                </div>;
              </div>;
            </div>;
          </div>;
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">;
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>;
            <form className="space-y-6">;
              <div>;
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>;
                <input;
                  type="text";
                  id="name";
                  name="name";
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent";
                  placeholder="Your name";
                />;
              </div>;
              <div>;
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>;
                <input;
                  type="email";
                  id="email";
                  name="email";
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent";
                  placeholder="your@email.com";
                />;
              </div>;
              <div>;
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>;
                <input;
                  type="text";
                  id="subject";
                  name="subject";
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent";
                  placeholder="How can we help?";
                />;
              </div>;
              <div>;
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>;
                <textarea;
                  id="message";
                  name="message";
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent";
                  placeholder="Tell us about your project...";
                ></textarea>;
              </div>;
              <button;
                type="submit";
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold";
              >;
                Send Message;
              </button>;
            </form>;
          </div>;
        </div>;
      </div>;
    </div>;
  )}}
ursor/automate-test-improve-and-merge-code-646c;
}
import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Contact Us | Zion Tech Group',
  description: 'Get in touch with Zion Tech Group for AI, Micro SaaS, and Enterprise IT solutions. We are here to help you transform your business.',
  keywords: 'contact, support, AI services, micro SaaS, IT services, consulting'
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Get in Touch with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge AI, Micro SaaS, and IT solutions? 
            Let&apos;s discuss how we can help you achieve your goals.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <PhoneIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600">+1 (302) 464-0950</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <EnvelopeIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">kleber@ziontechgroup.com</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPinIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600">364 E Main St STE 1008<br />Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we&apos;ll get back to you within one business day.
            </p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your company name"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                Service Interest
              </label>
              <select
                id="service"
                name="service"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a service</option>
                <option value="ai-services">AI Services</option>
                <option value="micro-saas">Micro SaaS</option>
                <option value="it-services">IT Services</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us about your project or how we can help you..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Send Message
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}