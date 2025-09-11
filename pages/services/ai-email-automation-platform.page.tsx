import Link from 'next/link';

export default function AIEmailAutomationPlatform() {
  return (
    <main
      style={{
        padding: 32,
        maxWidth: 960,
        margin: '0 auto',
        fontFamily: 'system-ui, sans-serif',
      }}
    >
      <h1 style={{ marginTop: 0 }}>AI Email Automation Platform</h1>
      <p>
        Transform your email marketing with intelligent automation that reads,
        responds, and optimizes your campaigns in real time. Improve
        deliverability, personalize content, and automate follow-ups.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>AI responder for common inquiries</li>
        <li>Behavior-based follow-up sequences</li>
        <li>Deliverability optimization and spam prevention</li>
        <li>Advanced analytics and recommendations</li>
      </ul>

      <h2>Pricing</h2>
      <ul>
        <li>
          <strong>Starter</strong>: $299/month — up to 10,000 emails
        </li>
        <li>
          <strong>Professional</strong>: $799/month — up to 50,000 emails
        </li>
        <li>
          <strong>Enterprise</strong>: $1,999/month — unlimited, custom models
        </li>
      </ul>

      <h2>Get Started</h2>
      <p>
        Call <a href='tel:+13024640950'>+1 302 464 0950</a> or email{' '}
        <a href='mailto:kleber@ziontechgroup.com'>kleber@ziontechgroup.com</a>.
        For a quote, <Link href='/contact'>contact us</Link>.
      </p>
      <p>
        Address: 364 E Main St STE 1008, Middletown DE 19709 — Website:{' '}
        <a href='https://ziontechgroup.com' target='_blank' rel='noreferrer'>
          https://ziontechgroup.com
        </a>
      </p>

      <p style={{ marginTop: 24 }}>
        <Link href='/services'>← Back to Services</Link>
      </p>
    </main>
  );
}
