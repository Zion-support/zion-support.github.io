import Link from 'next/link';

export default function Home() {
  return (
    <main style={{padding:20}}>
      <h1>Zion Tech Group</h1>
      <p>Welcome. Visit our Services and Contact pages.</p>
      <nav><Link href="/services">Services</Link> | <Link href="/contact">Contact</Link></nav>
    </main>
  );
}
