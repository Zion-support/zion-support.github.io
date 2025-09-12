import React from 'react';
import { SEO } from '../components/SEO';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us - Zion Tech Group"
        description="Get in touch with our team to discuss your project requirements and how we can help transform your business."
      />
      <Header />
      
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
          <p className="text-zion-slate-light text-lg">
            Ready to start your project? Get in touch with our team today.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}