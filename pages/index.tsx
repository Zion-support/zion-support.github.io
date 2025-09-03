<<<<<<< HEAD
export default function Home(): any {
=======
import Link from 'next/link';

export default function Home() {
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-761f
  return (
    <main style={{padding:20}}>
      <h1>Zion Tech Group</h1>
      <p>Welcome. Visit our Services and Contact pages.</p>
      <nav><Link href="/services">Services</Link> | <Link href="/contact">Contact</Link></nav>
    </main>
  );
}
