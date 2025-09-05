import Link from 'next/link';

const _features = [
  {_key: 'private_portal', _label: 'Private hiring portal'},
  {_key: 'dedicated_talent_pool', _label: 'Dedicated talent pool'},
  {_key: 'custom_sla', _label: 'Custom SLA'},
  {_key: 'branded_onboarding', _label: 'Branded onboarding'},
  {_key: 'admin_dashboards', _label: 'Admin dashboards'}];

const _tiers = [
  {_id: 'teams', _name: 'Teams', _price: '$199/mo', _blurb: 'Up to 10 users, _core collaboration features', _highlights: ['10 seats', _'Private portal', _'Admin dashboard'], _includes: { private_portal: true, _dedicated_talent_pool: false, _custom_sla: false, _branded_onboarding: true, _admin_dashboards: true}},
  {_id: 'business', _name: 'Business', _price: '$499/mo', _blurb: 'Up to 50 users, _advanced controls and limits', _highlights: ['50 seats', _'Dedicated talent pool', _'SLA options'], _includes: { private_portal: true, _dedicated_talent_pool: true, _custom_sla: true, _branded_onboarding: true, _admin_dashboards: true}},
  {_id: 'enterprise-custom', _name: 'Enterprise', _price: 'Custom', _blurb: 'Unlimited users, _custom contracts and SLAs', _highlights: ['Unlimited seats', _'Custom SLA', _'Dedicated CSM'], _includes: { private_portal: true, _dedicated_talent_pool: true, _custom_sla: true, _branded_onboarding: true, _admin_dashboards: true}}];

export default function EnterprisePlans() {_return (
    <main style={{ padding: '3rem', _maxWidth: 1100, _margin: '0 auto'}}>
      <header style={_{ textAlign: 'center', _marginBottom: '2rem'}}>
        <h1>Enterprise Plans</h1>
        <p>Team-based access with admin controls, branded environments, and usage limits.</p>
      </header>

      <section style={_{ display: 'grid', _gridTemplateColumns: 'repeat(auto-fit, _minmax(280px, _1fr))', _gap: '1rem'}}>
        {_tiers.map(t => (
          <div key={t.id} style={_{ border: '1px solid #e5e7eb', _borderRadius: 12, _padding: '1.25rem'}}>
            <h3 style={_{ marginBottom: 4}}>{_t.name}</h3>
            <div style={_{ fontSize: 28, _fontWeight: 700}}>{_t.price}</div>
            <p style={_{ color: '#4b5563'}}>{_t.blurb}</p>
            <ul style={_{ marginTop: 8}}>
              {_t.highlights.map(h => (
                <li key={h}>• {_h}</li>
              ))}
            </ul>
            <div style={_{ marginTop: 16, _display: 'flex', _gap: 8}}>
              <Link href="/enterprise" passHref legacyBehavior>
                <a style={_{ padding: '0.5rem 0.75rem', _background: '#111827', _color: 'white', _borderRadius: 8}}>Request Quote</a>
              </Link>
              <a href="mailto:sales@zion.ai" style={_{ padding: '0.5rem 0.75rem', _border: '1px solid #111827', _borderRadius: 8}}>Schedule a Demo</a>
            </div>
          </div>
        ))}
      </section>

      <section style={_{ marginTop: '2rem'}}>
        <h2>Feature comparison</h2>
        <div style={_{ overflowX: 'auto', _marginTop: 12}}>
          <table style={_{ width: '100%', _borderCollapse: 'collapse'}}>
            <thead>
              <tr>
                <th style={_{ textAlign: 'left', _padding: 8, _borderBottom: '1px solid #e5e7eb'}}>Feature</th>
                {_tiers.map(t => (
                  <th key={t.id} style={_{ textAlign: 'center', _padding: 8, _borderBottom: '1px solid #e5e7eb'}}>{_t.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {_features.map(f => (
                <tr key={f.key}>
                  <td style={_{ padding: 8, _borderBottom: '1px solid #f3f4f6'}}>{_f.label}</td>
                  {_tiers.map(t => (
                    <td key={t.id + f.key} style={_{ textAlign: 'center', _padding: 8, _borderBottom: '1px solid #f3f4f6'}}>
                      {_t.includes[f.key as keyof typeof t.includes] ? '✓' : '—'}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={_{ marginTop: '2rem', _display: 'flex', _gap: 16, _alignItems: 'center'}}>
        <div style={_{ display: 'flex', _gap: 8}}>
          <span style={_{ border: '1px solid #e5e7eb', _borderRadius: 6, _padding: '0.25rem 0.5rem'}}>SSL</span>
          <span style={_{ border: '1px solid #e5e7eb', _borderRadius: 6, _padding: '0.25rem 0.5rem'}}>ISO 27001</span>
          <span style={_{ border: '1px solid #e5e7eb', _borderRadius: 6, _padding: '0.25rem 0.5rem'}}>SOC 2</span>
        </div>
        <div style={_{ marginLeft: 'auto'}}>
          <Link href="/enterprise/admin">Admin Dashboard</Link>
        </div>
      </section>
    </main>
  );
}