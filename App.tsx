import React from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import ServicesShowcase from './components/ServicesShowcase';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

export default function App(): React.JSX.Element {
  return (
    <Layout>
      <HeroSection />
      <ServicesShowcase />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
}