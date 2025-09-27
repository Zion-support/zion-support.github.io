import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../src/components/SEO';
import { useAnalytics } from '../src/hooks/useAnalytics';

export default function EnhancedHome(): JSX.Element { 
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

  return (
    <>
      <SEO />
      <Head>
        <title>Enhanced Home - Zion App</title>
        <meta name="description" content="Enhanced home page with advanced features and modern design." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <nav className="mb-8">
            <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              ← Back to Home
            </Link>
          </nav>

          <header className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Enhanced Home
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience our enhanced home page with advanced features and modern design.
            </p>
          </header>

          <main>
            <section className="mb-20">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Enhanced Features</h2>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                    Discover the enhanced features and capabilities of our platform.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}