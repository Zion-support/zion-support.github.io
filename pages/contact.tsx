import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
export default function Contact(): React.JSX.Element {
  const contact = {
phone: '+1 302 464 0950';,
email: 'kleber@ziontechgroup.com';
    address: '364 E Main St STE 1008 Middletown DE 19709';,
site: 'https://ziontechgroup.com'
  }
  return (
    <>
      <Head><title>Contact Zion Tech Group - Get Your Quote Today</title>
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
              Get in touch with our experts to discuss your project requirements
              receive a custom quote, or learn more about our 40+ micro SaaS products
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
                <div><h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
                  <div className="space-y-6">
                    <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                      <h3 className="text-xl font-semibold mb-2 text-blue-400">Phone</h3>
                      <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="text-lg text-slate-300 hover:text-white transition-colors">
                        {contact.phone}
                      </a>
                      <p className="text-slate-400 text-sm mt-1">Available Monday-Friday, 9 AM - 6 PM EST</p>
                    </div>
                    <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                      <h3 className="text-xl font-semibold mb-2 text-purple-400">Email</h3>
                      <a href={`mailto:${contact.email}`} className="text-lg text-slate-300 hover:text-white transition-colors">
                        {contact.email}
                      </a>
                      <p className="text-slate-400 text-sm mt-1">We respond within 24 hours</p>
                    </div>
                    <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                      <h3 className="text-xl font-semibold mb-2 text-green-400">Address</h3>
                      <p className="text-lg text-slate-300">{contact.address}</p>
                      <p className="text-slate-400 text-sm mt-1">Middletown, Delaware</p>
                    </div>
                    <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                      <h3 className="text-xl font-semibold mb-2 text-yellow-400">Website</h3>
                      <a href={contact.site} className="text-lg text-slate-300 hover:text-white transition-colors">
                        {contact.site}
                      </a>
                      <p className="text-slate-400 text-sm mt-1">Visit our full service catalog</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Service Categories */}
              <div><h2 className="text-3xl font-bold mb-8">Our Services</h2>
                <div className="space-y-6">
                  <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold mb-3 text-blue-400">Micro SaaS Products</h3>
                    <p className="text-slate-300 mb-4">15+ innovative software solutions including:</p>
                    <ul className="text-slate-400 space-y-1 text-sm">
                      <li>• Cloud Cost Guard (FinOps Assistant)</li>
                      <li>• API Rate Limiter & Analytics</li>
                      <li>• Smart Document Processing</li>
                      <li>• Customer Churn Predictor</li>
                      <li>• And 11+ more specialized tools</li>
                    </ul>
                    <Link href="/services" className="text-blue-400 hover:text-blue-300 font-semibold text-sm">
                      View All Micro SaaS →
                    </Link>
                  </div>
                  <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold mb-3 text-purple-400">AI Services</h3>
                    <p className="text-slate-300 mb-4">16+ advanced AI solutions including:</p>
                    <ul className="text-slate-400 space-y-1 text-sm">
                      <li>• Computer Vision & Image Analysis</li>
                      <li>• AI-Powered Fraud Detection</li>
                      <li>• Conversational AI Platform</li>
                      <li>• Predictive Analytics & Forecasting</li>
                      <li>• And 12+ more AI services</li>
                    </ul>
                    <Link href="/services" className="text-purple-400 hover:text-purple-300 font-semibold text-sm">
                      View All AI Services →
                    </Link>
                  </div>
                  <div className="p-6 bg-slate-900/60 rounded-lg border border-white/10">
                    <h3 className="text-xl font-semibold mb-3 text-green-400">IT & Cloud Services</h3>
                    <p className="text-slate-300 mb-4">16+ comprehensive IT solutions including:</p>
                    <ul className="text-slate-400 space-y-1 text-sm">
                      <li>• Cloud Migration & Modernization</li>
                      <li>• Kubernetes & Container Orchestration</li>
                      <li>• Cybersecurity Hardening & SOC</li>
                      <li>• Data Engineering & Analytics</li>
                      <li>• And 12+ more IT services</li>
                    </ul>
                    <Link href="/services" className="text-green-400 hover:text-green-300 font-semibold text-sm">
                      View All IT Services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Form */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg text-slate-300">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
        {/* Call to Action */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Choose your preferred way to contact us and let's discuss how we can help
              transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors">
                Call Now: {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors">
                Send Email
              </a>
              <Link href="/services-catalog" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                View Services Catalog
              </Link>
            </div>
            <div className="text-slate-400">
              <p>We offer free consultations and custom quotes for all our services.</p>
              <p className="mt-2">Typical response time: Within 24 hours</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}