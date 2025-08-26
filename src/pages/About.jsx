import React from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';

export default function About() {
  return (
    <>
      <SEO
        title="About Zion - The Future of AI & Tech Marketplace"
        description="Learn about Zion's mission to create the first free marketplace dedicated to high-tech and artificial intelligence."
        keywords="about Zion, AI marketplace, tech platform, mission, vision, team"
        canonical="https://ziontechgroup.com/about"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>About Zion</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              The world's first free marketplace dedicated to high-tech and artificial intelligence
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
