import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import ServicesShowcase from '../components/ServicesShowcase';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI & Technology Solutions</title>
        <meta name="description" content="Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results." />
        <meta name="keywords" content="AI solutions, cloud services, technology consulting, digital transformation, IT services, machine learning, cybersecurity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      <Layout>
        <HeroSection />
        <ServicesShowcase />
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
      </Layout>
    </>
  );
};

export default HomePage;