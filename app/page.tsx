import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from './components/Hero';
import ServicesShowcase from './components/ServicesShowcase';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions and comprehensive IT services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, artificial intelligence, machine learning, cloud computing, cybersecurity" />
      </Helmet>
      
      <main>
        <Hero />
        <ServicesShowcase />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}