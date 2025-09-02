import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions</title>
        <meta name='description' content='Transform your business with cutting-edge AI, cloud solutions, cybersecurity, and digital transformation services.' />
        <meta name='keywords' content='AI services, cloud solutions, cybersecurity, digital transformation, technology consulting' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='canonical' href='https://ziontechgroup.com' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org', 
              '@type': 'Organization',
              'name': 'Zion Tech Group', 
              'url': 'https://ziontechgroup.com',
              'logo': 'https://ziontechgroup.com/logo.png', 
              'description': 'Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.', 
              'address': {
                '@type': 'PostalAddress',
                'addressCountry': 'US'
              }, 
              'contactPoint': {
                '@type': 'ContactPoint',
                'contactType': 'customer service', 
                'url': 'https://ziontechgroup.com/contact'
              },
              'sameAs': [
                'https://linkedin.com/company/zion-tech-group', 
                'https://twitter.com/ziontechgroup'
              ]
            })
          }}
        />
      </Head>
      <div style={{
        padding: '40px 20px', 
        color: '#fff',
        background: 'linear-gradient(135deg, #0b1220 0%, #1a2332 100%)', 
        minHeight: '100vh',
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '3rem', 
          fontWeight: 'bold',
          marginBottom: '1rem', 
          background: 'linear-gradient(45deg, #00d4ff, #0099cc)', 
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent', 
          backgroundClip: 'text'
        }}>
          Zion Tech Group
        </h1>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '2rem', 
          color: '#a0aec0',
          maxWidth: '600px'
        }}>
          Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, and digital transformation services.
        </p>
        <div style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <button style={{
            padding: '12px 24px',
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}>
            Get Started
          </button>
          <button style={{
            padding: '12px 24px',
            background: 'transparent',
            color: '#3b82f6',
            border: '2px solid #3b82f6',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}>
            Learn More
          </button>
        </div>
      </div>
    </>
  );
}