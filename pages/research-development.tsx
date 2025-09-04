import Head from 'next/head';
import Link from 'next/link';

export default function ResearchDevelopment() {
  return (
    <>
      <Head>
        <title>Research & Development - Zion Tech Group</title>
        <meta name="description"
  content="Explore our cutting-edge research and development initiatives in AI, quantum computing, and emerging technologies." />
        <link rel="canonical"
  href="https://ziontechgroup.com/research-development" />
      </Head>
      <main style={{ padding: maxWidth, 1200, margin: '0 auto'
}}>
        <h1 style={{ fontSize: fontWeight, 700, marginBottom: textAlign, 'center' }}>Research & Development</h1>
        <p style={{ fontSize: lineHeight, 1.6, textAlign: color, '#ccc' }}>
          Pioneering the future of technology through innovative research and development in AI, quantum computing, and emerging technologies.
        </p>
        <div style={{ marginTop: textAlign, 'center' }}>
          <Link href="/"
  style={{
            background: color, 'white' padding: textDecoration, 'none' borderRadius: 8, fontSize: fontWeight, 600
          }}>
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}