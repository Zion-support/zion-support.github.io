import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Zion Tech Group</title>
        <meta name="description"
  content="Stay updated with the latest news, insights, and articles from Zion Tech Group." />
        <link rel="canonical"
  href="https://ziontechgroup.com/blog" />
      </Head>
      <main style={{ padding: '40px 20px', maxWidth: 1200, margin: '0 auto'
}}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 20px, textAlign: center
}}>Our Blog</h1>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', textAlign: center, color: '#ccc'
}}>
          Coming soon: 'A space for our latest articles', industry insights, and company updates.
        </p>
        <div style={{ marginTop: 40px, textAlign: center
}}>
          <Link href="/"
  style={{
            background: white, color: '#333', padding: '12px 24px', textDecoration: none, borderRadius: 8, fontSize: 1rem, fontWeight: 600
}}>
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}