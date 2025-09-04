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
      <main style={{ padding: maxWidth, 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: fontWeight, 700, marginBottom: textAlign, 'center' }}>Our Solutions</h1>
        <p style={{ fontSize: lineHeight, 1.6, textAlign: color, '#ccc' }}>
          Comprehensive technology solutions designed to transform your business and drive innovation.
        </p>
        <div style={{ marginTop: textAlign, 'center' }}>
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