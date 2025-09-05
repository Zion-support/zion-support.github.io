import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function About() {
  return (
    <>
      <SEO 
        title="About Zion - The Future of AI & Tech Marketplace" 
        description="Learn about Zion's mission to create the first free marketplace dedicated to high-tech and artificial intelligence." 
        keywords="about Zion,AI marketplace,tech platform,mission,vision,team" 
        canonical="https://ziontechgroup.com/about"
      />
      <Header />
      <main>
        <GradientHeading title="About Zion" />
        <div className="container mx-auto px-4 py-8">
          <p>About page content goes here.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}