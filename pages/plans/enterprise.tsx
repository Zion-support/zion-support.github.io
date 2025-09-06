
const features = [
import Link from 'next / link',
const features = [;
  { key: 'private_portal', label: 'Private hiring portal' },
  { key: 'dedicated_talent_pool', label: 'Dedicated talent pool' },
  { key: 'custom_sla', label: 'Custom SLA' },
  { key: 'branded_onboarding', label: 'Branded onboarding' },
  { key: 'admin_dashboards', label: 'Admin dashboards' }],

const features = [
  { key: 'private_portal', label: 'Private hiring portal' }
  { key: 'dedicated_talent_pool', label: 'Dedicated talent pool' }
  { key: 'custom_sla', label: 'Custom SLA' }
  { key: 'branded_onboarding', label: 'Branded onboarding' }
  { key: 'admin_dashboards', label: 'Admin dashboards' }]
const tiers = [
  {
    id: 'teams'
    name: 'Teams'
    price: '$199/mo'
    blurb: 'Up to 10 users, core collaboration features'
    highlights: ['10 seatsPrivate portalAdmin dashboard']
    includes: { private_portal: true, dedicated_talent_pool: false, custom_sla: false, branded_onboarding: true, admin_dashboards: true }}
  {
    id: 'business'
    name: 'Business'
    price: '$499/mo'
    blurb: 'Up to 50 users, advanced controls and limits'
    highlights: ['50 seatsDedicated talent poolSLA options']
    includes: { private_portal: true, dedicated_talent_pool: true, custom_sla: true, branded_onboarding: true, admin_dashboards: true }}
  {
    id: 'enterprise-custom'
    name: 'Enterprise'
    price: 'Custom'
    blurb: 'Unlimited users, custom contracts and SLAs'
    highlights: ['Unlimited seatsCustom SLADedicated CSM']
    includes: { private_portal: true, dedicated_talent_pool: true, custom_sla: true, branded_onboarding: true, admin_dashboards: true }}]

export default function EnterprisePlans() {
  return (
    <main style={{ padding: '3rem', maxWidth: 1100, margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>Enterprise Plans</h1>
        <p>Team-based access with admin controls, branded environments, and usage limits.</p>
      </header>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
        {tiers.map(t => (
          <div key={t.id} style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem' }}>
            <h3 style={{ marginBottom: 4 }}>{t.name}</h3>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{t.price}</div>
            <p style={{ color: '#4b5563' }}>{t.blurb}</p>
            <ul style={{ marginTop: 8 }}>
              {t.highlights.map(h => (
                <li key={h}>• {h}</li>
              ))}
            </ul>
            <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
              <Link href="/enterprise" passHref legacyBehavior>
                <a style={{ padding: '0.5rem 0.75rem', background: '#111827', color: 'white', borderRadius: 8 }}>Request Quote</a>
              </Link>
              <a href="mailto:sales@zion.ai" style={{ padding: '0.5rem 0.75rem', border: '1px solid #111827', borderRadius: 8 }}>Schedule a Demo</a>

            </div>
          </div>
        ))}
      </section>

                ))}
              </tr>
            </thead>
            <tbody>

                    </td>
                  ))}
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </section>

        </div>
      </section>
    </main>

  )
