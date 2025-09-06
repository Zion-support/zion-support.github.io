<<<<<<< HEAD
<<<<<<< HEAD
import Link from 'next/link';
import Link from 'next/link',;
const features = [
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  { key: 'private_portal', label: 'Private hiring portal' },
  { key: 'dedicated_talent_pool', label: 'Dedicated talent pool' },
  { key: 'custom_sla', label: 'Custom SLA' },
  { key: 'branded_onboarding', label: 'Branded onboarding' },
  { key: 'admin_dashboards', label: 'Admin dashboards' }],
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

const features = [
  { key: 'private_portal', label: 'Private hiring portal' }
  { key: 'dedicated_talent_pool', label: 'Dedicated talent pool' }
  { key: 'custom_sla', label: 'Custom SLA' }
  { key: 'branded_onboarding', label: 'Branded onboarding' }
  { key: 'admin_dashboards', label: 'Admin dashboards' }]
const tiers = [
  {
<<<<<<< HEAD
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
=======
=======


  {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    id: 'teams',
    name: 'Teams',
    price: '$199 / mo',
    blurb: 'Up to 10 users, core collaboration features',
    includes: { private_portal: true, dedicated_talent_pool: false, custom_sla: false, branded_onboarding: true, admin_dashboards: true }},
  {
    id: 'business',
    name: 'Business',
    price: '$499 / mo',
    blurb: 'Up to 50 users, advanced controls and limits',
    includes: { private_portal: true, dedicated_talent_pool: true, custom_sla: true, branded_onboarding: true, admin_dashboards: true }},
  {
    id: 'enterprise - custom',
    name: 'Enterprise',
    price: 'Custom',
    blurb: 'Unlimited users, custom contracts and SLAs',
<<<<<<< HEAD
<<<<<<< HEAD

    highlights: ['Unlimited seats_custom SLADedicated CSM'],
    includes: { private_portal: true, dedicated_talent_pool: true, custom_sla: true, branded_onboarding: true, admin_dashboards: true }}],
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
<<<<<<< HEAD
=======
import Link from 'next/link';
import Link from 'next/link',;
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

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
import Link from 'next/link';
const features = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function EnterprisePlans() {
  return (
    <main style={{ padding: '3rem', maxWidth: 1100, margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1>Enterprise Plans</h1>
<<<<<<< HEAD
        <p>Team-based access with admin controls, branded environments, and usage limits.</p>
      </header>
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
        {tiers.map(t => (
          <div key={t.id} style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem' }}>
=======
<p>
          Team-based access with admin controls, branded environments, and usage
          limits.
        </p>
      </header>

      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem',
        }}
      >
        {tiers.map(t => (
          <div
            key={t.id}
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 12,
              padding: '1.25rem',
            }}
          >
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <h3 style={{ marginBottom: 4 }}>{t.name}</h3>
            <div style={{ fontSize: 28, fontWeight: 700 }}>{t.price}</div>
            <p style={{ color: '#4b5563' }}>{t.blurb}</p>
            <ul style={{ marginTop: 8 }}>
              {t.highlights.map(h => (
                <li key={h}>• {h}</li>
              ))}
            </ul>
            <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
<<<<<<< HEAD
              <Link href="/enterprise" passHref legacyBehavior>
                <a style={{ padding: '0.5rem 0.75rem', background: '#111827', color: 'white', borderRadius: 8 }}>Request Quote</a>
              </Link>
              <a href="mailto:sales@zion.ai" style={{ padding: '0.5rem 0.75rem', border: '1px solid #111827', borderRadius: 8 }}>Schedule a Demo</a>

=======
<Link href='/enterprise' passHref legacyBehavior>
                <a
                  style={{
                    padding: '0.5rem 0.75rem',
                    background: '#111827',
                    color: 'white',
                    borderRadius: 8,
                  }}
                >
                  Request Quote
                </a>
              </Link>
              <a
                href='mailto:sales@zion.ai'
                style={{
                  padding: '0.5rem 0.75rem',
                  border: '1px solid #111827',
                  borderRadius: 8,
                }}
              >
                Schedule a Demo
              </a>
            </div>
          </div>
        ))}
      </section>
      <section style={{ marginTop: '2rem' }}>
        <h2>Feature comparison</h2>
        <div style={{ overflowX: 'auto', marginTop: 12 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
<th
                  style={{
                    textAlign: 'left',
                    padding: 8,
                    borderBottom: '1px solid #e5e7eb',
                  }}
                >
                  Feature
                </th>
                {tiers.map(t => (
                  <th
                    key={t.id}
                    style={{
                      textAlign: 'center',
                      padding: 8,
                      borderBottom: '1px solid #e5e7eb',
                    }}
                  >
                    {t.name}
                  </th>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                ))}
              </tr>
            </thead>
            <tbody>
<<<<<<< HEAD
<<<<<<< HEAD

=======
              {features.map(f => (
                <tr key={f.key}>
                  <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{f.label}</td>
                  {tiers.map(t => (
                    <td key={t.id + f.key} style={{ textAlign: 'center', padding: 8, borderBottom: '1px solid #f3f4f6' }}>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
              {features.map(f => (
                <tr key={f.key}>
<td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>
                    {f.label}
                  </td>
                  {tiers.map(t => (
<<<<<<< HEAD
                    <td key={t.id + f.key} style={{ textAlign: 'center', padding: 8, borderBottom: '1px solid #f3f4f6' }}>
=======
                    <td
                      key={t.id + f.key}
                      style={{
                        textAlign: 'center',
                        padding: 8,
                        borderBottom: '1px solid #f3f4f6',
                      }}
                    >
                      {t.includes[f.key as keyof typeof t.includes] ? '✓' : '—'}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    </td>
                  ))}
                </tr>
              ))}
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import Link from 'next/link';
import Link from 'next/link';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const features = [;
  { key: 'private_portal', label: 'Private hiring portal' },;
  { key: 'dedicated_talent_pool', label: 'Dedicated talent pool' },;
  { key: 'custom_sla', label: 'Custom SLA' },;
  { key: 'branded_onboarding', label: 'Branded onboarding' },;
  { key: 'admin_dashboards', label: 'Admin dashboards' }],;
const tiers = [;
  {;
    id: 'teams';
    name: 'Teams';
    price: '$199/mo';
    blurb: 'Up to 10 users, core collaboration features',;
    highlights: ['10 seatsPrivate portalAdmin dashboard'],;
    includes: { private_portal: true, dedicated_talent_pool: false, custom_sla: false, branded_onboarding: true, admin_dashboards: true }},;
  {;
    id: 'business',;
    name: 'Business',;
    price: '$499/mo',;
    blurb: 'Up to 50 users, advanced controls and limits',;
    highlights: ['50 seatsDedicated talent poolSLA options'],;
    includes: { private_portal: true, dedicated_talent_pool: true, custom_sla: true, branded_onboarding: true, admin_dashboards: true }},;
  {;
    id: 'enterprise-custom',;
    name: 'Enterprise',;
    price: 'Custom',;
    blurb: 'Unlimited users, custom contracts and SLAs',;
    highlights: ['Unlimited seatsCustom SLADedicated CSM'],;
    includes: { private_portal: true, dedicated_talent_pool: true, custom_sla: true, branded_onboarding: true, admin_dashboards: true }}];
export default function EnterprisePlans(req, res) {
  try {
  return (;
    <main style={{ padding: '3rem', maxWidth: 1100, margin: '0 auto' }}>;
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>;
        <h1>Enterprise Plans</h1>;
        <p>Team-based access with admin controls, branded environments, and usage limits.</p>;
      </header>;
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>;
        {tiers.map(t => (;
          <div key={t.id} style={{ border: '1px solid #e5e7eb', borderRadius: 12, padding: '1.25rem' }}>;
            <h3 style={{ marginBottom: 4 }}>{t.name}</h3>;
            <div style={{ fontSize: 28, fontWeight: 700 }}>{t.price}</div>;
            <p style={{ color: '#4b5563' }}>{t.blurb}</p>;
            <ul style={{ marginTop: 8 }}>;
              {t.highlights.map(h => (;
                <li key={h}>• {h}</li>;
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </ul>
            <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
              <Link href="/enterprise" passHref legacyBehavior>
                <a style={{ padding: '0.5rem 0.75rem', background: '#111827', color: 'white', borderRadius: 8 }}>Request Quote</Link>
              </Link>
              <a href="mailto:sales@zion.ai" style={{ padding: '0.5rem 0.75rem', border: '1px solid #111827', borderRadius: 8 }}>Schedule a Demo</Link>
            </div>
          </div>
        ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      </section>;
      <section style={{ marginTop: '2rem' }}>;
        <h2>Feature comparison</h2>;
        <div style={{ overflowX: 'auto', marginTop: 12 }}>;
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>;
            <thead>;
              <tr>;
                <th style={{ textAlign: 'left', padding: 8, borderBottom: '1px solid #e5e7eb' }}>Feature</th>;
                {tiers.map(t => (;
                  <th key={t.id} style={{ textAlign: 'center', padding: 8, borderBottom: '1px solid #e5e7eb' }}>{t.name}</th>;
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </tr>;
            </thead>;
            <tbody>;
              {features.map(f => (;
                <tr key={f.key}>;
                  <td style={{ padding: 8, borderBottom: '1px solid #f3f4f6' }}>{f.label}</td>;
                  {tiers.map(t => (;
                    <td key={t.id + f.key} style={{ textAlign: 'center', padding: 8, borderBottom: '1px solid #f3f4f6' }}>;
                      {t.includes[f.key as keyof typeof t.includes] ? '✓' : '—'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </td>;
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </tr>;
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            </tbody>
          </table>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      <section style={{ marginTop: '2rem', display: 'flex', gap: 16, alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          <span style={{ border: '1px solid #e5e7eb', borderRadius: 6, padding: '0.25rem 0.5rem' }}>SSL</span>
          <span style={{ border: '1px solid #e5e7eb', borderRadius: 6, padding: '0.25rem 0.5rem' }}>ISO 27001</span>
          <span style={{ border: '1px solid #e5e7eb', borderRadius: 6, padding: '0.25rem 0.5rem' }}>SOC 2</span>
        </div>
        <div style={{ marginLeft: 'auto' }}>
          <Link href="/enterprise/admin">Admin Dashboard</Link>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        </div>
      </section>
    </main>
=======
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        </div>
      </section>
    </main>
  );
};
  )
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


<<<<<<< HEAD
=======
=======
=======

<section
        style={{
          marginTop: '2rem',
          display: 'flex',
          gap: 16,
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', gap: 8 }}>
          <span
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 6,
              padding: '0.25rem 0.5rem',
            }}
          >
            SSL
          </span>
          <span
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 6,
              padding: '0.25rem 0.5rem',
            }}
          >
            ISO 27001
          </span>
          <span
            style={{
              border: '1px solid #e5e7eb',
              borderRadius: 6,
              padding: '0.25rem 0.5rem',
            }}
          >
            SOC 2
          </span>
        </div>
        <div style={{ marginLeft: 'auto' }}>
<<<<<<< HEAD
          <Link href="/enterprise/admin">Admin Dashboard</Link>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
        </div>
      </section>
    </main>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

}

<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
          <Link href='/enterprise/admin'>Admin Dashboard</Link>
        </div>
      </section>
    </main>
  );
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
