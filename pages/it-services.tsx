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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>IT & Cloud Services — Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, enterprise architecture, and development solutions. Expert IT consulting and implementation." />
        <link rel="canonical" href={`${contact.site}/it-services`} />
      </Head>

      <header className="py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          IT & Cloud Services
        </h1>
        <p className="mt-4 text-slate-300 max-w-3xl mx-auto text-lg">
          Comprehensive IT solutions from cloud migration to cybersecurity. Our expert team delivers 
          enterprise-grade infrastructure, development, and consulting services with proven results.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-700">Call {contact.phone}</a>
          <a href={`mailto:${contact.email}`} className="px-5 py-2 rounded bg-purple-600 hover:bg-purple-700">Email {contact.email}</a>
          <Link href="/contact" className="px-5 py-2 rounded bg-slate-800 hover:bg-slate-700 border border-white/10">Get Quote</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pb-24">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[...new Set(itServices.map(s => s.category))].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-white/10 text-sm font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
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