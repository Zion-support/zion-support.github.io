import React from 'react';
import { SEO } from '../components/SEO';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function Blog() {
  return (
    <>
      <SEO 
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, technology trends, and digital transformation."
      />
      <Header />
      
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8">Our Blog</h1>
          <p className="text-zion-slate-light text-lg">
            Insights and updates from the world of AI and technology.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}