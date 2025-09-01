import Head from 'next/head';
import Link from 'next/link';

export default function ServicesAdvertising() {
  const contact = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
  };

  const pricingRefs = [
    { name: 'OpenAI', href: 'https://openai.com/api/pricing' },
    { name: 'Anthropic', href: 'https://www.anthropic.com/pricing' },
    { name: 'Google Vertex AI', href: 'https://cloud.google.com/vertex-ai/pricing' },
    { name: 'Azure OpenAI', href: 'https://azure.microsoft.com/pricing/details/cognitive-services/openai-service/' },
    { name: 'Groq', href: 'https://wow.groq.com/pricing' },
    { name: 'Pinecone', href: 'https://www.pinecone.io/pricing/' },
    { name: 'Weaviate', href: 'https://weaviate.io/pricing' },
    { name: 'Qdrant', href: 'https://qdrant.tech/pricing/' },
    { name: 'Wiz', href: 'https://www.wiz.io/pricing' },
    { name: 'Cloudflare Zero Trust', href: 'https://www.cloudflare.com/products/zero-trust/pricing/' },
    { name: 'Databricks', href: 'https://www.databricks.com/product/pricing' },
    { name: 'Snowflake', href: 'https://www.snowflake.com/pricing/' },
    { name: 'dbt Cloud', href: 'https://www.getdbt.com/pricing' },
    { name: 'Better Stack Status', href: 'https://betterstack.com/status/pricing' },
    { name: 'Mixpanel', href: 'https://mixpanel.com/pricing/' },
    { name: 'Amplitude', href: 'https://amplitude.com/pricing' },
  ];

  const spotlight = [
    { title: 'Developer Productivity Copilot', href: '/services/developer-productivity-copilot', price: 'Typical: $19–$39/dev/mo' },
    { title: 'AI Sales Assistant', href: '/services/ai-sales-assistant', price: 'Typical: $30–$150/user/mo' },
    { title: 'Security Posture Guardian', href: '/services/security-posture-guardian', price: 'Typical: $100–$2,000/mo' },
    { title: 'AI Data Pipeline Optimizer', href: '/services/ai-data-pipeline-optimizer', price: 'Typical: $200–$2,000/mo' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>AI, IT and Micro SaaS Services | Zion Tech Group</title>
        <meta name="description" content="Explore AI, IT, and micro SaaS services with features, benefits, pricing references, and easy contact options." />
        <link rel="canonical" href="https://ziontechgroup.com/services-advertising" />
      </Head>
      <main className="mx-auto max-w-7xl px-6 py-16 space-y-14">
        <header className="text-center space-y-3">
          <h1 className="text-4xl font-extrabold">Services That Ship Outcomes</h1>
          <p className="text-white/80">AI platforms, enterprise IT solutions, and real micro SaaS accelerators.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="rounded-lg bg-white text-slate-900 px-5 py-2 font-semibold">Talk to Sales</Link>
            <a href="#market-refs" className="rounded-lg border border-white/20 px-5 py-2 font-semibold">View Market Pricing</a>
          </div>
        </header>

        <section>
          <h2 className="text-2xl font-bold mb-4">Spotlight</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {spotlight.map((s) => (
              <Link key={s.title} href={s.href} className="block rounded-2xl border border-white/15 p-5 hover:border-cyan-400/40">
                <div className="text-lg font-semibold">{s.title}</div>
                <div className="text-sm text-white/70 mt-1">{s.price}</div>
                <div className="text-cyan-300 text-sm mt-2">Learn more →</div>
              </Link>
            ))}
          </div>
        </section>

        <section id="market-refs">
          <h2 className="text-2xl font-bold mb-4">Average Market Prices (References)</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
            {pricingRefs.map((l) => (
              <li key={l.href} className="rounded-xl border border-white/10 p-4">
                <a className="text-cyan-300 underline" target="_blank" rel="noopener noreferrer" href={l.href}>
                  {new URL(l.href).host}/pricing
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Contact</h2>
          <div className="space-y-1 text-white/80">
            <div>Mobile: <a className="underline" href="tel:+13024640950">{contact.mobile}</a></div>
            <div>Email: <a className="underline" href="mailto:kleber@ziontechgroup.com">{contact.email}</a></div>
            <div>Address: {contact.address}</div>
            <div>Website: <a className="underline" href={contact.website}>{contact.website}</a></div>
          </div>
        </section>
      </main>
    </div>
  );
}

