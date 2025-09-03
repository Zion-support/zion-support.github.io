export default function DevOpsAutopilot() {
  return (
    <Article
      title="DevOps Autopilot"
      subtitle="SLO-aware remediation, cost controls, and deployment guardrails"
      price="from $15k"
      bullets={[
        'Automated rollback and canary based on error budgets',
        'Kubernetes policy-as-code with security baselines',
        'FinOps guardrails: right-sizing and scheduled scale-downs',
        'Observability map with RCA suggestions and runbook generation'
      ]}
    />
  )
}

function Article({ title, subtitle, price, bullets }: { title: string; subtitle: string; price: string; bullets: string[] }) {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: 32, maxWidth: 920, margin: '0 auto' }}>
      <h1 style={{ marginTop: 0 }}>{title}</h1>
      <p><strong>{subtitle}</strong></p>
      <p><strong>Engagement:</strong> {price}</p>
      <ul>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <ContactFooter />
    </main>
  )
}

function ContactFooter() {
  return (
    <p>
      Mobile: +1 302 464 0950 · Email: <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a> · Site: <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer">ziontechgroup.com</a>
    </p>
  )
}

