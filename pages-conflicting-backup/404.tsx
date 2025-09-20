import Head from 'next/head';

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>404 - Page Not Found | Zion</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Head>
      <main style={{ padding: 24 }}>
        <h1>404</h1>
        <p>This page doesn't exist.</p>
      </main>
    </div>
  );
}

