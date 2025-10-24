'use client';
import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { ArrowRight, Brain, Shield, Users, Award, Mail, Smartphone, Globe } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Contact</h1>
        <p className="text-xl text-gray-300 mb-8">
          Discover our comprehensive contact solutions designed to meet your business needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          <div className="bg-gray-800 p-6 rounded-lg">
            <Brain className="h-12 w-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Solutions</h3>
            <p className="text-gray-300">
              Leverage artificial intelligence to automate and optimize your business processes.
            </p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <Shield className="h-12 w-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
            <p className="text-gray-300">
              Robust security measures to protect your data and ensure compliance.
            </p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg">
            <Users className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-300">
              Dedicated support team to help you succeed with our solutions.
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Why Choose Our Contact Solutions?</h2>
          <ul className="space-y-4 text-lg text-gray-300 mb-8">
            <li className="flex items-center">
              <ArrowRight className="h-5 w-5 text-blue-400 mr-3" />
              Scalable and flexible architecture
            </li>
            <li className="flex items-center">
              <ArrowRight className="h-5 w-5 text-blue-400 mr-3" />
              Industry-leading performance
            </li>
            <li className="flex items-center">
              <ArrowRight className="h-5 w-5 text-blue-400 mr-3" />
              Easy integration with existing systems
            </li>
            <li className="flex items-center">
              <ArrowRight className="h-5 w-5 text-blue-400 mr-3" />
              24/7 monitoring and support
            </li>
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              href="/services" 
              className="inline-flex items-center px-6 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Learn More
            </Link>
=======
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get in touch with our team to discuss your project and learn how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-cyan-400 mr-4" />
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">contact@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-cyan-400 mr-4" />
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-cyan-400 mr-4" />
                <div>
                  <p className="text-white font-semibold">Address</p>
                  <p className="text-gray-300">123 Tech Street, Innovation City, IC 12345</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Send Message
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
>>>>>>> cursor/fix-errors-and-merge-to-main-57e4
          </div>
        </div>
      </div>
    </div>
  );
}