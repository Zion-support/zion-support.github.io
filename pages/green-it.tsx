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
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 20px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>Green IT Solutions</h1>
        <p style={{ fontSize: '1.125rem', lineHeight: 1.6, textAlign: 'center', color: '#ccc' }}>
          Sustainable IT solutions and green technology services to help reduce your environmental impact while improving efficiency.
        </p>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/" style={{
            background: '#3b82f6',
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
}