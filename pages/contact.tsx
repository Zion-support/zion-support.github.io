import Head from 'next/head';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import type { JSX } from 'react';

export default function Contact(): JSX.Element {
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
                      <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="text-lg text-slate-300 hover:text-white transition-colors">
                        {contact.phone}
                      </a>
                    </div>
                    
                    <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                      <h3 className="text-xl font-semibold mb-2 text-blue-400">Email</h3>
                      <a href={`mailto:${contact.email}`} className="text-lg text-slate-300 hover:text-white transition-colors">
                        {contact.email}
                      </a>
                    </div>
                    
                    <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                      <h3 className="text-xl font-semibold mb-2 text-blue-400">Address</h3>
                      <p className="text-lg text-slate-300">
                        {contact.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Business Hours</h3>
                  <div className="space-y-2 text-slate-300">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 text-blue-400">Quick Links</h3>
                  <div className="space-y-2">
                    <Link href="/services" className="block text-slate-300 hover:text-white transition-colors">
                      Our Services
                    </Link>
                    <Link href="/pricing" className="block text-slate-300 hover:text-white transition-colors">
                      Pricing
                    </Link>
                    <Link href="/about" className="block text-slate-300 hover:text-white transition-colors">
                      About Us
                    </Link>
                    <Link href="/faq" className="block text-slate-300 hover:text-white transition-colors">
                      FAQ
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-slate-900/60">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Don't wait - let's discuss your project and get you a custom quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Call Now
              </a>
              <a 
                href={`mailto:${contact.email}`}
                className="border-2 border-blue-600 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}