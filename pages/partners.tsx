import Head from 'next/head';
import Link from 'next/link';

export default function Partners() {
  return (
    <>
      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Join our partner network and grow your business with Zion Tech Group's innovative solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Head>
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>Our Partners</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: 1.6, textAlign: 'center', color: '#ccc' }}>
          Join our growing network of partners and unlock new opportunities for growth and innovation.
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