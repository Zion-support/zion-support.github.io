import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';

export default function Contact(): React.JSX.Element {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>Contact Zion Tech Group - Get Your Quote Today</title>
        <meta name="description" content="Contact Zion Tech Group for micro SaaS, AI services, and IT solutions. Call +1 302 464 0950 or email kleber@ziontechgroup.com for expert consultation." />
        <link rel="canonical" href={`${contact.site}/contact`} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Header */}
        <header className="bg-black/20 backdrop-blur-sm border-b border-green-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-white">
                  Zion Tech Group
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
                <Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors">
                  AI Services
                </Link>
                <Link href="/blockchain" className="text-gray-300 hover:text-white transition-colors">
                  Blockchain
                </Link>
                <Link href="/contact" className="text-white font-medium">
                  Contact
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's Build Something
              <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Amazing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? Get in touch with our experts for a personalized consultation.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-green-500/20">
                <h2 className="text-3xl font-bold text-white mb-6">Get Your Quote</h2>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="bg-green-600 p-3 rounded-lg mr-4">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-300">Phone</p>
                        <a href={`tel:${contact.phone}`} className="text-white font-semibold hover:text-green-400 transition-colors">
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-green-600 p-3 rounded-lg mr-4">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-300">Email</p>
                        <a href={`mailto:${contact.email}`} className="text-white font-semibold hover:text-green-400 transition-colors">
                          {contact.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-green-600 p-3 rounded-lg mr-4">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-gray-300">Address</p>
                        <p className="text-white font-semibold">{contact.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-gray-300">Expert team with years of experience in AI and blockchain technologies</p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-gray-300">Custom solutions tailored to your specific business needs</p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-gray-300">Fast delivery with ongoing support and maintenance</p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                      <p className="text-gray-300">Competitive pricing with transparent cost structure</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/20 backdrop-blur-sm border-t border-green-500/20 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
                <p className="text-gray-300 mb-4">
                  Transforming businesses through innovative technology solutions.
                </p>
                <div className="text-gray-300">
                  <p>{contact.address}</p>
                  <p>Phone: {contact.phone}</p>
                  <p>Email: {contact.email}</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/ai-services" className="hover:text-white transition-colors">AI Services</Link></li>
                  <li><Link href="/blockchain" className="hover:text-white transition-colors">Blockchain</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Consulting</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/contact" className="hover:text-white transition-colors">Get Quote</Link></li>
                  <li><a href={`tel:${contact.phone}`} className="hover:text-white transition-colors">Call Us</a></li>
                  <li><a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">Email Us</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-green-500/20 mt-8 pt-8 text-center text-gray-300">
              <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}