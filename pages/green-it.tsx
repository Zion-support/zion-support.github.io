import Head from 'next/head';
import Link from 'next/link';

export default function GreenIT() {
  return (
    <>
      <Head>
        <title>Green IT - Zion Tech Group</title>
        <meta name="description" content="Sustainable IT solutions and green technology services to reduce your environmental impact." />
        <link rel="canonical" href="https://ziontechgroup.com/green-it" />
      </Head>
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>Green IT Solutions</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: 1.6, textAlign: 'center', color: '#ccc' }}>
          Sustainable IT solutions and green technology services to help reduce your environmental impact while improving efficiency.
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