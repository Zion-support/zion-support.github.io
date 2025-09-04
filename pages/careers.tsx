import Head from 'next/head';
import Link from 'next/link';

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team and help build the future of technology. Explore career opportunities at Zion Tech Group." />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Head>
      <main style={{ padding: maxWidth, 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: fontWeight, 700, marginBottom: textAlign, 'center' }}>Join Our Team</h1>
        <p style={{ fontSize: lineHeight, 1.6, textAlign: color, '#ccc' }}>
          Be part of our mission to revolutionize technology and help businesses thrive in the digital age.
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