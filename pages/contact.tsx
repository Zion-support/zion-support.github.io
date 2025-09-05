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

>>>>>>> cursor/integrate-build-improve-and-re-verify-4ea2
  return (
    <>
      <Head>
        <title>Contact Us - Zion Tech Group</title>
<<<<<<< HEAD
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
                Ready to transform your business? Get in touch with our experts.
              </p>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">Phone</h3>
                      <a href="tel:+13024640950" className="text-slate-300 hover:text-blue-400">
                        +1 302 464 0950
                      </a>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">Email</h3>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-slate-300 hover:text-blue-400">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">Address</h3>
                      <p className="text-slate-300">
                        364 E Main St STE 1008<br />
                        Middletown, DE 19709
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-400 mb-2">Website</h3>
                      <a href="https://ziontechgroup.com" className="text-slate-300 hover:text-blue-400">
                        https://ziontechgroup.com
                      </a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
=======
        <meta name="description" content="Get in touch with Zion Tech Group for innovative micro SaaS, AI services, and IT solutions. Call +1 302 464 0950 or email kleber@ziontechgroup.com" />
        <meta name="keywords" content="contact, support, micro SaaS, AI services, IT solutions, Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${contact.site}/contact`} />
      </Head>
      
      <ErrorBoundary level="page">
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center" role="banner">
            <div className="max-w-4xl mx-auto">
              <h1 
                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                Contact Us
              </h1>
              <p className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Ready to Transform Your Business?
              </p>
              <p className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                Get in touch with our experts to discuss your project requirements and discover 
                how our innovative solutions can drive your business forward.
              </p>
            </div>
          </section>

          {/* Contact Methods */}
          <section className="py-16 px-4" role="main">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Get in Touch
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {contactMethods.map((method, index) => (
                  <a
                    key={method.title}
                    href={method.href}
                    className={`p-8 bg-slate-900/60 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 text-center ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      {method.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                    <p className="text-slate-300">{method.value}</p>
                  </a>
                ))}
              </div>

              {/* Contact Form and Info */}
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className={`${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-1000 delay-600`}>
                  <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                  <ContactForm />
                </div>

                {/* Business Info */}
                <div className={`${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-1000 delay-800`}>
                  <h3 className="text-2xl font-bold mb-6">Business Information</h3>
                  
                  <div className="space-y-8">
                    {/* Business Hours */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-blue-400">Business Hours</h4>
                      <div className="space-y-2">
                        {businessHours.map((schedule, index) => (
                          <div key={index} className="flex justify-between">
                            <span className="text-slate-300">{schedule.day}</span>
                            <span className="text-slate-400">{schedule.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Response Time */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-purple-400">Response Time</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li>• Email: Within 2 hours during business hours</li>
                        <li>• Phone: Immediate during business hours</li>
                        <li>• Emergency: 24/7 support available</li>
                      </ul>
                    </div>

                    {/* Services */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-green-400">Our Services</h4>
                      <ul className="space-y-2 text-slate-300">
                        <li>• 150+ Micro SaaS Products</li>
                        <li>• 100+ AI Services</li>
                        <li>• 100+ IT Solutions</li>
                        <li>• Custom Development</li>
                        <li>• Consulting & Support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="py-16 px-4 bg-slate-900/40">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Visit Our Office
              </h2>
              
              <div className="bg-slate-800 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Zion Tech Group</h3>
                <p className="text-slate-300 mb-6">{contact.address}</p>
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(contact.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in Maps
                </a>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Don't wait to transform your business. Contact us today and let's discuss 
                how our innovative solutions can help you achieve your goals.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} 
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Call Now
                </a>
                <a 
                  href={`mailto:${contact.email}`} 
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                >
                  Send Email
                </a>
                <Link 
                  href="/services" 
                  className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>
          </section>
        </main>
      </ErrorBoundary>
    </>
  );
}