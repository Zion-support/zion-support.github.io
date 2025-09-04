import Link from 'next/link';
import Layout from '../components/layout/Layout';

export default function ITServices() {
  const offerings = [
    { title: 'Managed IT', href: '/services/managed-it', blurb: 'Proactive monitoring, patching, helpdesk, and asset management.' },
    { title: 'Cloud Migration', href: '/services/cloud-migration', blurb: 'AWS, Azure, GCP landing zones, IaC, and cost optimization.' },
    { title: 'Cybersecurity', href: '/cybersecurity', blurb: 'Assessments, hardening, MDR integrations, and compliance support.' },
    { title: 'Enterprise Networking', href: '/solutions', blurb: 'SD-WAN, zero trust, SASE, and observability.' }
  ];

  const rates = [
    { name: 'Essentials', price: 99, unit: 'user/month', points: ['Helpdesk (8x5)', 'Endpoint security', 'SaaS access mgmt'] },
    { name: 'Business', price: 149, unit: 'user/month', points: ['24/7 monitoring', 'MFA/SSO + MDM', 'Backup + DR playbooks'] },
    { name: 'Enterprise', price: 249, unit: 'user/month', points: ['SLA w/ on-call', 'SIEM/SOAR integrations', 'Quarterly architecture reviews'] }
  ];

  return (
    <Layout
      title="IT Services - Zion Tech Group"
      description="Managed IT, cloud migration, networking, and cybersecurity delivered with SLAs and predictable pricing."
      canonical="https://ziontechgroup.com/it-services"
    >
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">IT Services</h1>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Reliable IT operations for modern organizations. From day-2 operations to complex
            cloud migrations and security programs, we design resilient foundations that scale.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((o) => (
            <Link key={o.title} href={o.href} className="block rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md">
              <h3 className="text-lg font-semibold text-slate-900">{o.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{o.blurb}</p>
              <span className="mt-4 inline-block text-sm text-blue-600">Learn more →</span>
            </Link>
          ))}
        </div>

        <h2 className="mt-16 text-2xl font-bold text-slate-900 text-center">Managed IT Pricing</h2>
        <p className="mt-2 text-slate-600 text-center">Average market rates. Volume and scope discounts available.</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {rates.map((r) => (
            <div key={r.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">{r.name}</h3>
              <p className="mt-2 text-3xl font-bold text-slate-900">${r.price}<span className="text-base font-normal text-slate-500">/{r.unit}</span></p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {r.points.map((p) => (
                  <li key={p}>• {p}</li>
                ))}
              </ul>
              <Link href="/request-quote" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Get started
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600">
            Prefer to talk? Call <a href="tel:+13024640950" className="text-blue-600">+1 302 464 0950</a> or
            email <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600">kleber@ziontechgroup.com</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
}