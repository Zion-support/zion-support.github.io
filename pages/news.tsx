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
      <main style={{
            padding: '20px', maxWidth: 1200, margin: '0 auto'  
          }}>
        <h1 style={{
            fontSize: '2rem', fontWeight: 700, marginBottom: '20px', textAlign: 'center' 
          }}>Latest News</h1>
        <p style={{
            fontSize: '1.1rem', lineHeight: 1.6, textAlign: 'center', color: '#ccc' 
          }}>
          Stay informed about our latest developments, product launches, and company milestones.
        </p>
        <div style={{
            marginTop: textAlign, 'center' 
          }}>
          <Link href="/" style={{
            background: color, 'white' padding: textDecoration, 'none' borderRadius: 8, fontSize: fontWeight, 600
          
          }}>
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}