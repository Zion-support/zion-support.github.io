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
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>Request a Quote</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: 1.6, textAlign: 'center', color: '#ccc' }}>
          Get a personalized quote for our services and solutions. Our team will work with you to find the perfect solution for your needs.
        </p>
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/contact" style={{
            background: 'white',
            color: '#333',
            padding: '0.75rem 1.5rem',
            textDecoration: 'none',
            borderRadius: 8,
            fontSize: '1rem',
            fontWeight: 600,
            display: 'inline-block'
          }}>
            Contact Us
          </Link>
        </div>
      </main>
    </>
  );
}