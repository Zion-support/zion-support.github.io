'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="pt-20 px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Get in touch with our team for your AI and IT needs.
          </p>
          <div className="space-y-4 text-gray-300">
            <p>Phone: +1 302 464 0950</p>
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;