import Link from 'next/link';

export default function AICustomerSupportPlatform() {
  return (
    <main style={{ padding: 32, maxWidth: 960, margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ marginTop: 0 }}>AI Customer Support Platform</h1>
      <p>
        Deliver instant, accurate, and personalized support 24/7. Combine AI chat, omnichannel messaging, and
        knowledge-aware assistance to reduce costs and increase CSAT.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>Conversational AI with context memory</li>
        <li>Omnichannel support (chat, email, social)</li>
        <li>Real-time analytics and sentiment tracking</li>
        <li>Human handoff with full context</li>
      </ul>

      <h2>Pricing</h2>
      <ul>
        <li><strong>Starter</strong>: $499/month — up to 1,000 conversations</li>
        <li><strong>Professional</strong>: $1,299/month — up to 10,000 conversations</li>
        <li><strong>Enterprise</strong>: $2,999/month — unlimited, custom models</li>
      </ul>

      <h2>Get Started</h2>
      <p>
        Call <a href="tel:+13024640950">+1 302 464 0950</a> or email{' '}
        <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a>. For a quote,{' '}
        <Link href="/contact">contact us</Link>.
      </p>
      <p>
        Address: 364 E Main St STE 1008, Middletown DE 19709 — Website:{' '}
        <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer">https://ziontechgroup.com</a>
      </p>

      <p style={{ marginTop: 24 }}>
        <Link href="/services">← Back to Services</Link>
      </p>
    </main>
  );
}

