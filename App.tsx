import React from 'react';
import Layout from './components/Layout';
import HeroSection from './components/HeroSection';
import ServicesShowcase from './components/ServicesShowcase';
import AIRecommendationEngine from './components/AIRecommendationEngine';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

export default function App(): React.JSX.Element {
  return (
    <Layout>
      <HeroSection />
      <ServicesShowcase />
      <AIRecommendationEngine />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
}