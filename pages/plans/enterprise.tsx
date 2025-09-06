const features = [
import Link from 'next / link',
const features = [;
  { key: 'private_portal', label: 'Private hiring portal' },
  { key: 'dedicated_talent_pool', label: 'Dedicated talent pool' },
  { key: 'custom_sla', label: 'Custom SLA' },
  { key: 'branded_onboarding', label: 'Branded onboarding' },
  { key: 'admin_dashboards', label: 'Admin dashboards' }],
const tiers = [;
  {
    id: 'teams',
    name: 'Teams',
    price: '$199 / mo',
    blurb: 'Up to 10 users, core collaboration features',
    highlights: ['10 seats_private portal_admin dashboard'],
    includes: { private_portal: true, dedicated_talent_pool: false, custom_sla: false, branded_onboarding: true, admin_dashboards: true }},
  {
    id: 'business',
    name: 'Business',
price: '$499 / mo',
    blurb: 'Up to 50 users, advanced controls and limits',
    highlights: ['50 seats_dedicated talent poolSLA options'],
    includes: { private_portal: true, dedicated_talent_pool: true, custom_sla: true, branded_onboarding: true, admin_dashboards: true }},
  {
    id: 'enterprise - custom',
    name: 'Enterprise',
    price: 'Custom',
    blurb: 'Unlimited users, custom contracts and SLAs',
    highlights: ['Unlimited seats_custom SLADedicated CSM'],
    includes: { private_portal: true, dedicated_talent_pool: true, custom_sla: true, branded_onboarding: true, admin_dashboards: true }}],
      <section style={{ marginTop: '2rem', display: 'flex', gap: 16, alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <span style={{ border: '1px solid #e5e7eb', borderRadius: 6, padding: '0.25rem 0.5rem' }}>SSL</span>
          <span style={{ border: '1px solid #e5e7eb', borderRadius: 6, padding: '0.25rem 0.5rem' }}>ISO 27001</span>
          <span style={{ border: '1px solid #e5e7eb', borderRadius: 6, padding: '0.25rem 0.5rem' }}>SOC 2</span>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <Link href="/enterprise/admin">Admin Dashboard</Link>

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
            <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
              <Link href=&quot;/enterprise&quot; passHref legacyBehavior>
                <a style={{ padding: '0.5rem 0.75rem', background: '#111827', color: 'white', borderRadius: 8 }}>Request Quote</Link>
              </Link>
              <a href=&quot;mailto:sales@zion.ai&quot; style={{ padding: '0.5rem 0.75rem', border: '1px solid #111827', borderRadius: 8 }}>Schedule a Demo</Link>
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
        <div style={{ marginLeft: 'auto' }}>
          <Link href=&quot;/enterprise/admin&quot;>Admin Dashboard</Link>

        </div>
      </section>
    </main>
  )
}
export default /**
 * EnterprisePlans - Function description
 */
function EnterprisePlans() {
  return (
    <main style={{ padding: '3rem', max_width: 1100, margin: '0 auto' }}>;
      <header style={{ text_align: 'center', margin_bottom: '2rem' }}>;
        <h1 > Enterprise Plans</h1>;
        <p > Team - based access with admin controls, branded environments, and usage limits.</p>;
      </header>;
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat (auto - fit, minmax (280px, 1fr))', gap: '1rem' }}>;
        {tiers.map (t => (
          <div key={t.id} style={{ border: '1px solid #e5e7eb', border_radius: 12, padding: '1.25rem' }}>;
            <h3 style={{ margin_bottom: 4 }}>{t.name}</h3>;
            <div style={{ font_size: 28, font_weight: 700 }}>{t.price}</div>;
            <p style={{ color: '#4b5563' }}>{t.blurb}</p>;
            <ul style={{ margin_top: 8 }}>;
              {t.highlights.map (h => (
                <li key={h}>• {h}</li>))}
            </ul>;
            <div style={{ margin_top: 16, display: 'flex', gap: 8 }}>;
              <Link href="/enterprise" pass_href legacy_behavior>;
                <a style={{ padding: '0.5rem 0.75rem', background: '#111827', color: 'white', border_radius: 8 }}>Request Quote</a>;
              </Link>;
              <a href="mailto:sales@zion.ai" style={{ padding: '0.5rem 0.75rem', border: '1px solid #111827', border_radius: 8 }}>Schedule a Demo</a>;
            </div>;
          </div>))}
      </section>;
      <section style={{ margin_top: '2rem' }}>;
        <h2 > Feature comparison</h2>;
        <div style={{ overflow_x: 'auto', margin_top: 12 }}>;
          <table style={{ width: '100%', border_collapse: 'collapse' }}>;
            <thead>;
              <tr>;
                <th style={{ text_align: 'left', padding: 8, border_bottom: '1px solid #e5e7eb' }}>Feature</th>;
                {tiers.map (t => (
                  <th key={t.id} style={{ text_align: 'center', padding: 8, border_bottom: '1px solid #e5e7eb' }}>{t.name}</th>))}
              </tr>;
            </thead>;
            <tbody>;
              {features.map (function => (
                <tr key={f.key}>;
                  <td style={{ padding: 8, border_bottom: '1px solid #f3f4f6' }}>{f.label}</td>;
                  {tiers.map (t => (
                    <td key={t.id + f.key} style={{ text_align: 'center', padding: 8, border_bottom: '1px solid #f3f4f6' }}>;
                      {t.includes[f.key as keyof typeof t.includes] ? '✓' : '—'}
                    </td>))}
                </tr>))}
            </tbody>;
          </table>;
        </div>;
      </section>;
      <section style={{ margin_top: '2rem', display: 'flex', gap: 16, align_items: 'center' }}>;
        <div style={{ display: 'flex', gap: 8 }}>;
          <span style={{ border: '1px solid #e5e7eb', border_radius: 6, padding: '0.25rem 0.5rem' }}>SSL</span>;
          <span style={{ border: '1px solid #e5e7eb', border_radius: 6, padding: '0.25rem 0.5rem' }}>ISO 27001</span>;
          <span style={{ border: '1px solid #e5e7eb', border_radius: 6, padding: '0.25rem 0.5rem' }}>SOC 2</span>;
        </div>;
        <div style={{ margin_left: 'auto' }}>;
          <Link href="/enterprise / admin">Admin Dashboard</Link>;
        </div>;
      </section>;
    </main>);
}