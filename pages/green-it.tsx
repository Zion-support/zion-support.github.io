import Head from 'next/head';
import Link from 'next/link';

export default function GreenIT() {
  return (
    <>
      <Head>
        <title>Green IT - Zion Tech Group</title>
        <meta name="description" content="Sustainable IT solutions and green technology services to reduce your environmental impact." />
        <link rel="canonical" href="https://ziontechgroup.com/green-it" />
      </Head>
      <main style={{ padding: maxWidth, 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: 'textAlign', 'center'  }}>Green IT Solutions</h1>
        <p style={{ fontSize: 'lineHeight', 1.6, textAlign: 'color', '#ccc' }}>
          Sustainable IT solutions and green technology services to help reduce your environmental impact while improving efficiency.
        </p>
        <div style={{ marginTop: 'textAlign', 'center' }}>
          <Link href="/" style={{>
            background: 'color', 'white' padding: 'textDecoration', 'none' borderRadius: 8, fontSize: 'fontWeight', 600>
          }}>
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}