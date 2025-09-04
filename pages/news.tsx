import Head from 'next/head';
import Link from 'next/link';

export default function News() {
  return (
    <>
      <Head>
        <title>News - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest news and announcements from Zion Tech Group." />
        <link rel="canonical" href="https://ziontechgroup.com/news" />
      </Head>
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>Latest News</h1>
        <p style={{ fontSize: '1.2rem', lineHeight: 1.6, textAlign: 'center', color: '#ccc' }}>
          Stay informed about our latest developments, product launches, and company milestones.
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