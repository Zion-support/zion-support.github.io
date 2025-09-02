import React from 'react';
import Head from 'next/head';

export default function Index() {
  return (
    <>
      ;
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta
          name="description"
          content="Zion Tech Group delivers cutting-edge AI, cybersecurity, cloud infrastructure, and digital transformation services. Transform your business with our innovative technology solutions."
        />
        <meta
          name="keywords"
          content="AI services, cybersecurity, cloud computing, digital transformation, technology consulting, Zion Tech Group"
        />
        <meta
          property="og: title"
          content="Zion Tech Group - Leading Technology Solutions Provider"
        />
        <meta
          property="og:description"
          content="Transform your business with our cutting-edge AI, cybersecurity, and cloud solutions. Expert technology consulting and implementation services."
        />
        <meta property="og: type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta
          property="og:image"
          content="https://ziontechgroup.com/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Zion Tech Group - Leading Technology Solutions Provider"
        />
        <meta
          name="twitter:description"
          content="Transform your business with our cutting-edge AI, cybersecurity, and cloud solutions."
        />
        <meta
          name="twitter: image"
          content="https://ziontechgroup.com/og-image.jpg"
        />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Zion Tech Group',
              url: 'https://ziontechgroup.com',
              logo: 'https://ziontechgroup.com/logo.png',
              description:
                'Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'US',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer service',
                url: 'https://ziontechgroup.com/contact',
              },
              sameAs: [
                'https://linkedin.com/company/zion-tech-group',
                'https://twitter.com/ziontechgroup',
              ],
            }),
          }}
        />
      </Head>
      <div
        style={{
          padding: '40px 20px',
          color: '#fff',
          background: 'linear-gradient(135deg, #0b1220 0%, #1a2332 100%)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(45deg, #00d4ff, #0099cc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Zion Tech Group
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            color: '#a0aec0',
            maxWidth: '600px',
          }}
        >
          Leading technology solutions provider specializing in AI,
          cybersecurity, cloud infrastructure, and digital transformation
          services.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <a
            href="/services"
            style={{
              padding: '12px 24px',
              background: 'linear-gradient(45deg, #00d4ff, #0099cc)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              transition: 'transform 0.2s',
            }}
            onMouseOver={e => (e.target.style.transform = 'translateY(-2px)')}
            onMouseOut={e => (e.target.style.transform = 'translateY(0)')}
          >
            Our Services
          </a>
          <a
            href="/contact"
            style={{
              padding: '12px 24px',
              background: 'transparent',
              color: '#00d4ff',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              border: '2px solid #00d4ff',
              transition: 'all 0.2s',
            }}
            onMouseOver={e => {
              e.target.style.background = '#00d4ff';
              e.target.style.color = '#0b1220';
            }}
            onMouseOut={e => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#00d4ff';
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}
