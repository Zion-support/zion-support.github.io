import Head from 'next/head';

export default function TestingDocRedirect() {
  return (
    <>
      <Head>
        <meta httpEquiv=&quot;refresh&quot; content=&quot;0; url=/TESTING.md&quot; />
      </Head>
      <main style={{ padding: 24 }}>
        <p>Redirecting to Testing documentation…</p>
      </main>
    </>
  );
}

