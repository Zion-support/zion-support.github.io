import NextLink from 'next/link'

export default function Home() {
  return (
    <div className="ztg-page">
      <div className="ztg-container">
        <section className="ztg-hero ztg-card">
          <h1>AI, IT, and Micro SaaS solutions that deliver results</h1>
          <p>Build faster, scale smarter, and cut costs with Zion Tech Group.</p>
          <div className="ztg-cta">
            <NextLink className="ztg-btn" href="/services">Explore Services</NextLink>
            <NextLink className="ztg-btn secondary" href="/request-quote">Request a Quote</NextLink>
          </div>
        </section>

        <section className="ztg-section">
          <div className="ztg-grid">
            <div>
              <div className="ztg-card">
                <h3>Explore</h3>
                <ul>
                  <li><NextLink href="/services/micro-saas">Micro SaaS</NextLink></li>
                  <li><NextLink href="/services/it-services">IT Services</NextLink></li>
                  <li><NextLink href="/services/ai-services">AI Services</NextLink></li>
                </ul>
              </div>
            </div>
            <div>
              <div className="ztg-card">
                <h2>Why Zion</h2>
                <p>Average engagements start at $3k–$8k/mo for managed services and $15k–$60k for fixed-scope solution builds. Flexible retainers and outcome-based pricing available.</p>
                <ul>
                  <li>Time-to-value: 2–6 weeks for MVPs</li>
                  <li>99.9% uptime SLO options</li>
                  <li>Security-first delivery and compliance support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
