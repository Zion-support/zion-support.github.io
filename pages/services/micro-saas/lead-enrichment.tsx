export default function LeadEnrichment() {

  return (
    <Article;
      title="Lead Enrichment API"
      subtitle="Company, technographic, and intent signals from an email or domain"
      price="from $149/mo"
      bullets={[
        'Firmographics: size, industry, location, funding stage'
        'Technographics: CMS, analytics, ads, cloud stack'
        'Buying signals: hiring, product launches, traffic spikes'
        'REST API + Zapier + native HubSpot/Salesforce connectors'
      ]}
      links={{ website: 'https://ziontechgroup.com', contact: 'mailto:kleber@ziontechgroup.com' }}
    />
  )
}

function Article() {

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

