import React from 'react';
import Head from 'next/head';
  return (
    <>
      <Head>
        <title>Green IT - Zion Tech Group</title>
        <meta name="description" content="Sustainable IT solutions and green technology services to reduce your environmental impact." />
        <link rel="canonical" href="https://ziontechgroup.com/green-it" />
      </Head>
      <main style={{ padding: '20px', maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '20px', textAlign: 'center' }}>Green IT Solutions</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, textAlign: 'center', color: '#ccc' }}>
          Sustainable IT solutions and green technology services to help reduce your environmental impact while improving efficiency.
        </p>
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <Link href="/" style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            color: 'white',
            padding: '12px 24px',
            textDecoration: 'none',
            borderRadius: 8,
            fontSize: '1rem',
            fontWeight: 600
          }}>
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );

export default Greenit;