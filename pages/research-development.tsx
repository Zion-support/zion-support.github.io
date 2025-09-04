import Head from 'next/head';
import Link from 'next/link';

export default function ResearchDevelopment() {
  return (
    <>
      <Head>
        <title>Research & Development - Zion Tech Group</title>
        <meta name="description" content="Explore our cutting-edge research and development initiatives in AI, quantum computing, and emerging technologies." />
        <link rel="canonical" href="https://ziontechgroup.com/research-development" />
      </Head>
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>Research & Development</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: 1.6, textAlign: 'center', color: '#ccc' }}>
          Pioneering the future of technology through innovative research and development in AI, quantum computing, and emerging technologies.
        </p>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/" style={{
            background: 'white',
            color: '#333',
            padding: '0.75rem 1.5rem',
            textDecoration: 'none',
            borderRadius: 8,
            fontSize: '1rem',
            fontWeight: 600,
            display: 'inline-block'
          }}>
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}