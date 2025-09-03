import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Zion Tech Group</title>
        <meta name="description" content="AI-Powered Technology Solutions" />
      </Head>
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 32, marginBottom: 12 }}>Zion Tech Group</h1>
          <p>AI-Powered Technology Solutions</p>
        </div>
      </main>
    </>
  );
}