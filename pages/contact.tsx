import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

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
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for Micro SaaS, AI, and IT solutions. Call +1 302 464 0950 or email kleber@ziontechgroup.com" />
        <link rel="canonical" href={`${contact.site}/contact`} />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Header */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Contact Zion Tech Group
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with our Micro SaaS, AI, and IT solutions? 
              Get in touch with our expert team today.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                  <p className="text-slate-300 mb-8">
                    We&apos;re here to help you succeed. Reach out to us through any of the channels below, 
                    and we&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Phone</h3>
                      <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="text-blue-400 hover:text-blue-300 text-lg">
                        {contact.phone}
                      </a>
                      <p className="text-slate-400 text-sm mt-1">Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Email</h3>
                      <a href={`mailto:${contact.email}`} className="text-purple-400 hover:text-purple-300 text-lg">
                        {contact.email}
                      </a>
                      <p className="text-slate-400 text-sm mt-1">Response within 24 hours</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Office</h3>
                      <p className="text-green-400 text-lg">{contact.address}</p>
                      <p className="text-slate-400 text-sm mt-1">Middletown, Delaware</p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="pt-8 border-t border-white/10">
                  <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link href="/services" className="block w-full p-4 bg-slate-900/60 border border-white/10 rounded-lg hover:border-blue-500/40 transition-colors">
                      <div>
                        <div className="font-semibold">View Our Services</div>
                        <div className="text-sm text-slate-400">40+ Micro SaaS, AI & IT Solutions</div>
                      </div>
                    </Link>
                    <Link href="/pricing" className="block w-full p-4 bg-slate-900/60 border border-white/10 rounded-lg hover:border-blue-500/40 transition-colors">
                      <div>
                        <div className="font-semibold">Check Pricing</div>
                        <div className="text-sm text-slate-400">Transparent rates and packages</div>
                      </div>
                    </Link>
                    <Link href="/services-catalog" className="block w-full p-4 bg-slate-900/60 border border-white/10 rounded-lg hover:border-blue-500/40 transition-colors">
                      <div>
                        <div className="font-semibold">Detailed Catalog</div>
                        <div className="text-sm text-slate-400">Comprehensive service details</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-slate-900/60 border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none"
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
                      className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interest</label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none"
                    >
                      <option value="">Select a service</option>
                      <option value="micro-saas">Micro SaaS Solutions</option>
                      <option value="ai-services">AI Services & Platforms</option>
                      <option value="it-services">IT & Cloud Services</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-slate-300 mb-8">
              Join hundreds of businesses that trust Zion Tech Group for their technology needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold text-lg transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
