import Head from 'next/head';
import Link from 'next/link';

export default function Partners() {
  return (
    <>
      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta name="description"
  content="Join our partner network and grow your business with Zion Tech Group's innovative solutions." />
        <link rel="canonical"
  href="https://ziontechgroup.com/partners" />
      </Head>
      <main style={{ padding: maxWidth, 1200, margin: '0 auto'
}}>
        <h1 style={{ fontSize: fontWeight, 700, marginBottom: textAlign, 'center' }}>Our Partners</h1>
        <p style={{ fontSize: lineHeight, 1.6, textAlign: color, '#ccc' }}>
          Join our growing network of partners and unlock new opportunities for growth and innovation.
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