import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  const featuredServices = [
    {
      title: 'Micro SaaS Solutions',
      description: '15+ innovative micro SaaS products from $49-$1,499/month',
      link: '/services',
      count: '15+ Products'
    },
    {
      title: 'AI Services & Platforms',
      description: '12+ cutting-edge AI solutions with transparent pricing',
      link: '/services',
      count: '12+ Services'
    },
    {
      title: 'IT & Cloud Services',
      description: '12+ comprehensive IT solutions and managed services',
      link: '/services',
      count: '12+ Solutions'
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Micro SaaS, AI & IT Solutions</title>
        <meta name="description" content="Leading provider of Micro SaaS products, AI services, and IT solutions. 40+ services with transparent pricing. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="micro saas, ai services, it solutions, cloud services, software development, automation" />
        <link rel="canonical" href={contact.site} />
        <meta property="og:title" content="Zion Tech Group - Micro SaaS, AI & IT Solutions" />
        <meta property="og:description" content="Leading provider of Micro SaaS products, AI services, and IT solutions. 40+ services with transparent pricing." />
        <meta property="og:url" content={contact.site} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Your trusted partner for <span className="text-blue-400 font-semibold">Micro SaaS</span>, 
              <span className="text-purple-400 font-semibold"> AI Services</span>, and 
              <span className="text-green-400 font-semibold"> IT Solutions</span>
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              We deliver 40+ innovative services with transparent pricing, rapid deployment, 
              and measurable results for businesses of all sizes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/services" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-colors">
                Explore Our Services
              </Link>
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold text-lg transition-colors">
                Call {contact.phone}
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {featuredServices.map((service, index) => (
                <div key={index} className="bg-slate-900/60 border border-white/10 rounded-xl p-6 hover:border-blue-500/40 transition-colors">
                  <div className="text-2xl font-bold text-blue-400 mb-2">{service.count}</div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{service.description}</p>
                  <Link href={service.link} className="text-blue-400 hover:text-blue-300 font-medium">
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Call Us</h3>
                <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="text-blue-400 hover:text-blue-300">
                  {contact.phone}
                </a>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Email Us</h3>
                <a href={`mailto:${contact.email}`} className="text-purple-400 hover:text-purple-300">
                  {contact.email}
                </a>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-green-400 text-sm text-center">{contact.address}</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Link href="/contact" className="inline-block px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors">
                Contact Form
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Quick Navigation</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/services" className="p-4 bg-slate-900/60 border border-white/10 rounded-lg hover:border-blue-500/40 transition-colors">
                <div>
                  <div className="font-semibold">Services</div>
                  <div className="text-sm text-slate-400">40+ Solutions</div>
                </div>
              </Link>
              <Link href="/services-catalog" className="p-4 bg-slate-900/60 border border-white/10 rounded-lg hover:border-blue-500/40 transition-colors">
                <div>
                  <div className="font-semibold">Catalog</div>
                  <div className="text-sm text-slate-400">Detailed Pricing</div>
                </div>
              </Link>
              <Link href="/pricing" className="p-4 bg-slate-900/60 border border-white/10 rounded-lg hover:border-blue-500/40 transition-colors">
                <div>
                  <div className="font-semibold">Pricing</div>
                  <div className="text-sm text-slate-400">Transparent Rates</div>
                </div>
              </Link>
              <Link href="/contact" className="p-4 bg-slate-900/60 border border-white/10 rounded-lg hover:border-blue-500/40 transition-colors">
                <div>
                  <div className="font-semibold">Contact</div>
                  <div className="text-sm text-slate-400">Get Quote</div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
