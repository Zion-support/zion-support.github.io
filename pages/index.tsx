import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com/',
    logo: 'https://ziontechgroup.com/favicon.svg',
    sameAs: [
      'https://www.linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: ['English', 'Spanish']
    }
  };

  return (
    <>
      <Head>
        <title>Zion Tech Group</title>
        <meta name="description" content="Leading technology solutions provider" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <main className="min-h-screen bg-white">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-blue-50 to-white" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Welcome to Zion Tech Group
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                  Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations.
                </p>
              </div>
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src="/og-image.svg"
                  alt="Zion Tech Group technology solutions"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}