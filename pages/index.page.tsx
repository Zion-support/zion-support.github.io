import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: 32, maxWidth: 1120, margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginTop: 0 }}>Zion Tech Group</h1>
      <p>Enterprise-grade AI, micro SaaS, and IT solutions. Fast. Secure. Scalable.</p>
      <nav style={{ display: 'flex', gap: 16, marginTop: 16 }}>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </main>
  );
}

