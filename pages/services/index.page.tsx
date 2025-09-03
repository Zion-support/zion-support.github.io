import Link from 'next/link';

export default function ServicesIndex() {
  return (
    <main style={{ padding: 32, maxWidth: 1120, margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginTop: 0 }}>Services</h1>
      <p>Explore our AI micro SaaS, IT solutions, and enterprise AI platforms.</p>
      <ul>
        <li>
          <Link href="/services/ai-email-automation-platform">AI Email Automation Platform</Link>
        </li>
        <li>
          <Link href="/services/ai-customer-support-platform">AI Customer Support Platform</Link>
        </li>
      </ul>
    </main>
  );
}

