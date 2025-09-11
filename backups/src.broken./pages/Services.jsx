import React from 'react';
import { SEO } from '../components/SEO';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Services() {
  return (
    <>
      <SEO 
        title="Services - Zion Tech Group"
        description="Explore our comprehensive range of AI, cybersecurity, and digital transformation services."
      />
      <Header />
      
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8">Our Services</h1>
          <p className="text-zion-slate-light text-lg">
            Discover our comprehensive range of technology services designed to transform your business.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}