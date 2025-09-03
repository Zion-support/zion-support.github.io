import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react';

export default function Contact() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>Contact Us — Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI services, micro SaaS products, and IT solutions. Call +1 302 464 0950 or email kleber@ziontechgroup.com" />
        <link rel="canonical" href={`${contact.site}/contact`} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        <header className="py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Contact Zion Tech Group
          </h1>
          <p className="mt-4 text-slate-300 max-w-3xl mx-auto text-lg">
            Ready to transform your business with cutting-edge technology? Get in touch with our experts 
            for a free consultation and custom solution tailored to your needs.
          </p>
        </header>

        <main className="max-w-6xl mx-auto px-4 pb-24">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <p className="text-slate-300 mb-8">
                  We're here to help you succeed. Reach out to us through any of the channels below, 
                  and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-white/10">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="text-blue-400 hover:text-blue-300 text-lg">
                      {contact.phone}
                    </a>
                    <p className="text-slate-400 text-sm mt-1">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-white/10">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a href={`mailto:${contact.email}`} className="text-purple-400 hover:text-purple-300 text-lg">
                      {contact.email}
                    </a>
                    <p className="text-slate-400 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-white/10">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Address</h3>
                    <p className="text-slate-300">{contact.address}</p>
                    <p className="text-slate-400 text-sm mt-1">Delaware, United States</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-800/50 border border-white/10">
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-slate-300">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-slate-300">Saturday: 10:00 AM - 4:00 PM EST</p>
                    <p className="text-slate-400 text-sm mt-1">Emergency support available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-6 border-t border-white/10">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="flex items-center gap-3 p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors">
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">Call Now</span>
                  </a>
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-3 p-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition-colors">
                    <Mail className="w-5 h-5" />
                    <span className="font-medium">Send Email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/50 rounded-xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="micro-saas">Micro SaaS Products</option>
                    <option value="ai-services">AI Services</option>
                    <option value="it-services">IT & Cloud Services</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Tell us about your project and how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>

          {/* Additional Information */}
          <section className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Zion Tech Group?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
                <p className="text-slate-400">We respond to all inquiries within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Consultation</h3>
                <p className="text-slate-400">Free consultation to understand your needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
                <p className="text-slate-400">Tailored solutions for your specific requirements</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
