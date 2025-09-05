import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { ContactInfo } from '../types';
import ErrorBoundary from '../components/ErrorBoundary';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const contact: ContactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const contactMethods = [
    {
      title: 'Phone',
      value: contact.phone,
      href: `tel:${contact.phone.replace(/[^\d+]/g,'')}`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Address',
      value: contact.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(contact.address)}`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM EST' },
    { day: 'Saturday', hours: '10:00 AM - 4:00 PM EST' },
    { day: 'Sunday', hours: 'Emergency Support Only' }
  ];

  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for innovative micro SaaS, AI services, and IT solutions. Contact us for a free consultation." />
        <meta name="keywords" content="contact, consultation, micro SaaS, AI services, IT solutions, Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Head>
      <ErrorBoundary level="page">
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
                Contact Us
              </h1>
              <p className="text-xl text-slate-300 text-center mb-12">
                Ready to transform your business with cutting-edge technology? Let's discuss your project.
              </p>

              {/* Contact Methods Grid */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700/50 hover:border-blue-500/50"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                        {method.icon}
                      </div>
                      <h3 className="text-xl font-semibold ml-4">{method.title}</h3>
                    </div>
                    <p className="text-slate-300 group-hover:text-white transition-colors">
                      {method.value}
                    </p>
                  </a>
                ))}
              </div>

              {/* Contact Form and Additional Info */}
              <div className="grid lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  <ContactForm />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
                  <div className="space-y-4">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-3 border-b border-slate-700/50">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-slate-300">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 bg-blue-600/10 rounded-xl border border-blue-500/20">
                    <h3 className="text-lg font-semibold mb-3 text-blue-400">Emergency Support</h3>
                    <p className="text-slate-300 mb-4">
                      For critical issues outside business hours, our emergency support team is available 24/7.
                    </p>
                    <a
                      href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Emergency Line
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <section className="py-16 bg-slate-800/30">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have transformed their businesses with our innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  View Our Services
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-3 border border-slate-600 hover:border-slate-500 rounded-lg font-semibold transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </section>
        </main>
      </ErrorBoundary>
    </>
  );
}