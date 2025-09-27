import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function Home(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const { trackClick } = useAnalytics();

  const handleSelectPlan = (tierId: string) => {
    trackClick(`select-plan-${tierId}`, 'conversion');
    console.log('Selected plan:', tierId);
  };

  const handleReadMore = (slug: string) => {
    trackClick(`read-blog-${slug}`, 'engagement');
    console.log('Read more:', slug);
  };

  const features = [
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage cutting-edge artificial intelligence to automate and optimize your business processes.',
      icon: '🤖'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable, secure, and reliable cloud solutions tailored to your specific business requirements.',
      icon: '☁️'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes and systems.',
      icon: '🚀'
    }
  ];

  return (
    <>
      <Head>
        <title>Enhanced Home - Zion Tech Solutions</title>
        <meta name="description" content="Discover our enhanced technology solutions and services." />
      </Head>
      
      <SEO
        title="Enhanced Home - Zion Tech Solutions"
        description="Discover our enhanced technology solutions and services."
        keywords={['technology', 'AI solutions', 'cloud computing', 'digital transformation']}
      />

      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Enhanced Technology Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Discover our comprehensive suite of technology services and solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90">
                Contact us today to learn more about our enhanced technology solutions.
              </p>
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                onClick={() => trackClick('enhanced-home-cta')}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}