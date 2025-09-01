import Head from 'next/head';
import Link from 'next/link';
import { servicesList } from './_servicesData.route';

export default function ServicesIndex() {
  const items = servicesList;
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Services — Zion Tech Group</title>
        <meta name="description" content="AI, IT, and Micro SaaS services with clear pricing references and outcomes." />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>
      <main className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-4xl font-extrabold">Services</h1>
        <p className="mt-2 text-white/80">Choose from proven accelerators and expert solutions.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.slice(0, 36).map((item) => (
            <Link key={item.id} href={`/services/${item.id}`} className="group rounded-2xl border border-white/10 p-5 hover:border-cyan-400/30">
              <div className="flex items-start justify-between">
                <div className="text-lg font-semibold">{item.title}</div>
                <span className="rounded-full border border-white/15 px-2 py-0.5 text-xs text-white/70">{item.categoryName}</span>
              </div>
              <p className="mt-1 text-sm text-white/75">{item.description}</p>
              <div className="mt-3 text-sm text-white/80">Starting at <span className="font-semibold">{item.price}</span>/{item.billing}</div>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-white/70">
                {item.features.slice(0, 4).map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <div className="mt-4 text-cyan-300 text-sm">View details →</div>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/services-advertising" className="inline-block rounded-xl bg-white text-slate-900 px-6 py-3 font-semibold">See Market Pricing References</Link>
        </div>
      </main>
    </div>
  );
}

