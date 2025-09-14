import React from 'react';
import { Metadata } from 'next';
import NextGenAIInnovationShowcase2025 from '../../components/NextGenAIInnovationShowcase2025';
import AdvancedHero from '../../components/AdvancedHero';
import AdvancedFeaturesShowcase from '../../components/AdvancedFeaturesShowcase';
import AdvancedTestimonials from '../../components/AdvancedTestimonials';
import AdvancedPricing from '../../components/AdvancedPricing';
import AdvancedNewsletter from '../../components/AdvancedNewsletter';
import SEO from '../../components/SEO';

export const metadata: Metadata = {
  title: 'AI Revolution 2025: Next-Generation Artificial Intelligence | Zion Tech Group',
  description: 'Discover the revolutionary AI technologies that are reshaping industries in 2025. Quantum-AI fusion, neural interfaces, autonomous systems, and conscious AI frameworks.',
  keywords: 'AI revolution 2025, quantum AI, neural interfaces, autonomous AI, conscious AI, artificial intelligence breakthrough, next-gen AI',
  openGraph: {
    title: 'AI Revolution 2025: Next-Generation Artificial Intelligence',
    description: 'Experience groundbreaking AI technologies that will reshape industries and enhance human capabilities.',
    type: 'website',
    images: [
      {
        url: '/images/ai-revolution-2025-og.jpg',
        width: 1200,
        height: 630,
        alt: 'AI Revolution 2025 - Next-Generation Artificial Intelligence'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Revolution 2025: Next-Generation Artificial Intelligence',
    description: 'Discover revolutionary AI technologies reshaping industries in 2025.',
    images: ['/images/ai-revolution-2025-twitter.jpg']
  },
  alternates: {
    canonical: 'https://ziontechgroup.com/ai-revolution-2025'
  }
};

const AIRevolution2025Page = () => {
  return (
    <>
      <SEO
        title="AI Revolution 2025: Next-Generation Artificial Intelligence | Zion Tech Group"
        description="Discover the revolutionary AI technologies that are reshaping industries in 2025. Quantum-AI fusion, neural interfaces, autonomous systems, and conscious AI frameworks."
        keywords="AI revolution 2025, quantum AI, neural interfaces, autonomous AI, conscious AI, artificial intelligence breakthrough, next-gen AI"
        canonical="https://ziontechgroup.com/ai-revolution-2025"
        openGraph={{
          title: 'AI Revolution 2025: Next-Generation Artificial Intelligence',
          description: 'Experience groundbreaking AI technologies that will reshape industries and enhance human capabilities.',
          type: 'website',
          images: [
            {
              url: '/images/ai-revolution-2025-og.jpg',
              width: 1200,
              height: 630,
              alt: 'AI Revolution 2025 - Next-Generation Artificial Intelligence'
            }
          ]
        }}
        twitter={{
          card: 'summary_large_image',
          title: 'AI Revolution 2025: Next-Generation Artificial Intelligence',
          description: 'Discover revolutionary AI technologies reshaping industries in 2025.',
          images: ['/images/ai-revolution-2025-twitter.jpg']
        }}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <AdvancedHero
          title="The AI Revolution Starts Here"
          subtitle="Experience the most advanced artificial intelligence technologies of 2025"
          description="Quantum-AI fusion, neural interfaces, autonomous systems, and conscious AI frameworks are transforming industries and redefining human potential. Join the revolution."
          primaryButtonText="Explore Innovations"
          primaryButtonHref="#innovations"
          secondaryButtonText="Watch Demo"
          secondaryButtonHref="#demo"
          backgroundImage="/images/ai-revolution-hero-bg.jpg"
          gradient="from-purple-900 via-blue-900 to-gray-900"
        />

        {/* Main Innovation Showcase */}
        <section id="innovations">
          <NextGenAIInnovationShowcase2025 />
        </section>

        {/* Features Showcase */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary AI Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the unprecedented capabilities that make our AI technology the most advanced in the world
              </p>
            </div>
            <AdvancedFeaturesShowcase />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how forward-thinking organizations are transforming their operations with our AI technology
              </p>
            </div>
            <AdvancedTestimonials />
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose Your AI Transformation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the perfect plan to begin your journey into the future of artificial intelligence
              </p>
            </div>
            <AdvancedPricing />
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Stay Ahead of the AI Revolution
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Get exclusive insights, breakthrough announcements, and early access to revolutionary AI technologies
              </p>
            </div>
            <AdvancedNewsletter />
          </div>
        </section>
      </div>
    </>
  );
};

export default AIRevolution2025Page;