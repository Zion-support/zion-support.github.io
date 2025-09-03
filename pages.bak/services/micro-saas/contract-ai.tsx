export default function ContractAI() {
  return (
    <Article
      title="Contract AI Extractor"
      subtitle="Extract clauses, obligations, renewal windows, and risks from PDFs"
      price="from $349/mo"
      bullets={[
        'Zero-shot clause detection across NDAs, MSAs, SOWs, DPAs',
        'Obligation tracking with renewal/termination reminders',
        'Pipedrive/HubSpot sync; SOC2-ready audit logs',
        'Deploy on VPC with optional Azure OpenAI/GCP Vertex endpoints'
      ]}
      links={{ website: 'https://ziontechgroup.com', contact: 'mailto:kleber@ziontechgroup.com' }}
    />
  )
}

function Article({ title, subtitle, price, bullets, links }: { title: string; subtitle: string; price: string; bullets: string[]; links: { website: string; contact: string } }) {
  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: 32, maxWidth: 920, margin: '0 auto' }}>
      <h1 style={{ marginTop: 0 }}>{title}</h1>
      <p><strong>{subtitle}</strong></p>
      <p><strong>Pricing:</strong> {price}</p>
      <ul>
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <p>
        Site: <a href={links.website} target="_blank" rel="noreferrer">ziontechgroup.com</a> · Email: <a href={links.contact}>kleber@ziontechgroup.com</a>
      </p>
    </main>
  )
}

