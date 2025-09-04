import Head from 'next/head';
import Link from 'next/link';

export default function Solutions() {
  return (
    <>
      <Head>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions for digital transformation, AI implementation, and business growth." />
        <link rel="canonical" href="https://ziontechgroup.com/solutions" />
      </Head>
      <main style={{ padding: '40px 20px', maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '20px', textAlign: 'center' }}>Our Solutions</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, textAlign: 'center', color: '#ccc' }}>
          Comprehensive technology solutions designed to transform your business and drive innovation.
        </p>
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <Link href="/" style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', color: 'white', padding: '12px 24px', textDecoration: 'none', borderRadius: 8, fontSize: '1rem', fontWeight: 600
          }}>
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}