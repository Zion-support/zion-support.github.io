import Head from 'next/head';

export default function SecurityDocRedirect() {
  return (
    <>
      <Head>
        <meta httpEquiv=&quot;refresh&quot; content=&quot;0; url=/SECURITY.md&quot; />
      </Head>
      <main style={{ padding: 24 }}>
        <p>Redirecting to Security documentation…</p>
      </main>
    </>
  );
}

