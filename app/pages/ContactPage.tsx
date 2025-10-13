import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations and support." />
      </Helmet>
      
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team for AI and IT solutions
            </p>
            <div className="bg-slate-800 p-8 rounded-xl">
              <p className="text-gray-300">Phone: +1-302-464-0950</p>
              <p className="text-gray-300">Email: kleber@ziontechgroup.com</p>
              <p className="text-gray-300">Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
