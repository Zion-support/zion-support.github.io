import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  };

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading Micro SaaS, AI & IT Solutions Provider</title>
        <meta name="description" content="Zion Tech Group delivers cutting-edge technology solutions." />
        <link rel="canonical" href={contact.site} />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white" role="main">
        <section className="py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold tracking-tight mb-4">Zion Tech Group</h1>
            <p className="text-xl text-slate-300 mb-8">Innovative Micro SaaS, AI Services & IT Solutions</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12" role="group">
              <Link href="/services" className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-center">View All Services</Link>
              <Link href="/micro-saas" className="w-full sm:w-auto px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-center">Micro SaaS</Link>
              <Link href="/contact" className="w-full sm:w-auto px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold text-center">Get Quote</Link>
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-slate-900/40">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-center">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="w-full sm:w-auto px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold text-center">
                Email {contact.email}
              </a>
              <Link href="/contact" className="w-full sm:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold text-center">
                Contact Form
              </Link>
            </div>
            <div className="text-sm text-slate-400 mt-4">
              <p className="mb-2">{contact.address}</p>
              <p>Visit us at <a href={contact.site} className="text-blue-400 hover:text-blue-300">{contact.site}</a></p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}