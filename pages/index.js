import Head from 'next/head'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Zion Tech Group — Advanced IT & AI Services</title>
        <meta name="description" content="Zion Tech Group delivers advanced IT solutions and AI services." />
      </Head>
      <main style={{ padding: 24, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif' }}>
        <h1>Zion App</h1>
        <p>Welcome. This minimal page was added to restore a valid Next.js pages directory.</p>
        <p>
          <Link href="/about">About</Link>
          {' '}
          <Link href="/contact">Contact</Link>
        </p>
      </main>
    </div>
  );
}

