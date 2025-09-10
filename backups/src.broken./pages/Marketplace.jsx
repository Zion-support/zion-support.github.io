import React from 'react';
import { SEO } from '../components/SEO';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Marketplace() {
  return (
    <>
      <SEO 
        title="Marketplace - Zion Tech Group"
        description="Discover and connect with top technology services and solutions in our marketplace."
      />
      <Header />
      
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8">Marketplace</h1>
          <p className="text-zion-slate-light text-lg">
            Explore our marketplace of technology services and solutions.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}