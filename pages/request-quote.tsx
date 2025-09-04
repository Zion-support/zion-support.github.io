import Head from 'next/head';
import Link from 'next/link';

export default function RequestQuote() {
  return (
    <>
      <Head>
        <title>Request Quote - Zion Tech Group</title>
        <meta name="description"
  content="Get a personalized quote for our services and solutions. Contact us for a consultation." />
        <link rel="canonical"
  href="https://ziontechgroup.com/request-quote" />
      </Head>
      <main style={{ padding: maxWidth, 1200, margin: '0 auto'
}}>
        <h1 style={{ fontSize: fontWeight, 700, marginBottom: textAlign, 'center' }}>Request a Quote</h1>
        <p style={{ fontSize: lineHeight, 1.6, textAlign: color, '#ccc' }}>
          Get a personalized quote for our services and solutions. Our team will work with you to find the perfect solution for your needs.
        </p>
        <div style={{ marginTop: textAlign, 'center' }}>
          <Link href="/contact"
  style={{
            background: color, 'white' padding: textDecoration, 'none' borderRadius: 8, fontSize: fontWeight, 600
          }}>
            Contact Us
          </Link>
        </div>
      </main>
    </>
  );
}