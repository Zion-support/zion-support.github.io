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
      
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Contact Zion Tech Group
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Ready to transform your business with innovative technology solutions?
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-3xl mx-auto">
              Get in touch with our experts to discuss your project requirements, 
              receive a custom quote, or learn more about our 40+ micro SaaS products, 
              AI services, and IT solutions.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                  <div className="space-y-6">
                    <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                      <h3 className="text-xl font-semibold mb-2 text-blue-400">Phone</h3>
                      <p className="text-slate-300">{contact.phone}</p>
                      <p className="text-sm text-slate-400 mt-1">Mon-Fri 9AM-6PM EST</p>
                    </div>
                    
                    <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                      <h3 className="text-xl font-semibold mb-2 text-blue-400">Email</h3>
                      <p className="text-slate-300">{contact.email}</p>
                      <p className="text-sm text-slate-400 mt-1">We respond within 24 hours</p>
                    </div>
                    
                    <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                      <h3 className="text-xl font-semibold mb-2 text-blue-400">Address</h3>
                      <p className="text-slate-300">{contact.address}</p>
                      <p className="text-sm text-slate-400 mt-1">Middletown, Delaware</p>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div>
                  <h3 className="text-2xl font-bold mb-6">Why Choose Zion Tech Group?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-300">40+ proven micro SaaS products</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-300">Expert AI and machine learning solutions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-300">Comprehensive IT and cloud services</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-300">24/7 support and maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-300">Custom solutions tailored to your needs</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
                <div className="bg-slate-900/60 rounded-lg border border-white/10 p-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-slate-900/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-slate-800/60 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">How quickly can you start my project?</h3>
                <p className="text-slate-300">Most projects can begin within 1-2 weeks of contract signing. We'll provide a detailed timeline during our initial consultation.</p>
              </div>
              
              <div className="bg-slate-800/60 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Do you offer ongoing support?</h3>
                <p className="text-slate-300">Yes, we provide comprehensive support and maintenance packages for all our solutions, including 24/7 monitoring and updates.</p>
              </div>
              
              <div className="bg-slate-800/60 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Can you work with our existing systems?</h3>
                <p className="text-slate-300">Absolutely. We specialize in integrating new solutions with existing infrastructure and can work with most platforms and technologies.</p>
              </div>
              
              <div className="bg-slate-800/60 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-3 text-blue-400">What's included in a consultation?</h3>
                <p className="text-slate-300">Our free consultation includes a thorough analysis of your needs, technology assessment, solution recommendations, and a detailed project proposal.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss how we can help transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={`tel:${contact.phone}`}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
              >
                Call Now: {contact.phone}
              </Link>
              <Link 
                href={`mailto:${contact.email}`}
                className="px-8 py-4 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition-colors"
              >
                Email Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}