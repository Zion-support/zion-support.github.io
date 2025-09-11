import React from 'react';
import { SEO } from '../components/SEO';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function About() {
  return (
    <>
      <SEO 
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group's mission to transform businesses through cutting-edge AI and technology solutions."
      />
      <Header />
      
      <main className="min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-8">About Zion Tech Group</h1>
          <p className="text-zion-slate-light text-lg">
            We are a leading provider of AI and technology solutions, helping businesses transform and grow.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}