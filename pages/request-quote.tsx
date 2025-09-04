import Head from 'next/head';
import Link from 'next/link';

export default function RequestQuote() {
  return (
    <>
      <Head>
        <title>Request Quote - Zion Tech Group</title>
        <meta name="description" content="Get a personalized quote for our services and solutions. Contact us for a consultation." />
        <link rel="canonical" href="https://ziontechgroup.com/request-quote" />
      </Head>
      <main style={{ padding: '20px', maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '20px', textAlign: 'center' }}>Request a Quote</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, textAlign: 'center', color: '#ccc' }}>
          Get a personalized quote for our services and solutions. Our team will work with you to find the perfect solution for your needs.
        </p>
        <div style={{ marginTop: '30px', textAlign: 'center' }}>
          <Link href="/contact" style={{
            background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
            color: 'white',
            padding: '12px 24px',
            textDecoration: 'none',
            borderRadius: 8,
            fontSize: '1rem',
            fontWeight: 600
          }}>
            Contact Us
          </Link>
        </div>
      </main>
    </>
  );
}