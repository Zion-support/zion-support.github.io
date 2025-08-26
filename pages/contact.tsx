import React from 'react';
import Head from 'next/head';
import EnhancedNavigation from '../components/layout/EnhancedNavigation';
import Footer from '../components/layout/Footer';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Zion Tech Group</title>
        <meta name="description" content="Contact Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Head>
      <EnhancedNavigation />
      <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white pt-20">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-4">Contact</h1>
          <p className="text-white/80 max-w-2xl mb-8">
            Email: kleber@ziontechgroup.com • Phone: +1 302 464 0950
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md">
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-white/80 mb-4">
              Ready to start your next project? Contact us to discuss how we can help.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-blue-400">📧</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-300 hover:text-blue-200">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400">📱</span>
                <a href="tel:+13024640950" className="text-green-300 hover:text-green-200">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-purple-400">📍</span>
                <span className="text-white/80">
                  364 E Main St STE 1008 Middletown DE 19709
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
