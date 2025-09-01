import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { servicesCatalog } from '../../../src/data/servicesCatalog';

function getAllItems() {
  return servicesCatalog.flatMap(c =>
    c.items.map(i => ({ ...i, categoryName: c.name }))
  );
}

export default function ServiceDetail() {
  const router = useRouter();
  const { id } = router.query;
  const service = getAllItems().find(s => s.id === id);

  if (!service) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16 text-white">
        <h1 className="text-2xl font-bold">Service not found</h1>
        <p className="mt-2 text-white/80">Please browse all services.</p>
        <Link
          href="/services"
          className="mt-4 inline-block rounded bg-white text-slate-900 px-4 py-2 font-semibold"
        >
          Back to Services
        </Link>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>{service.title} — Zion Tech Group</title>
        <meta name="description" content={service.description} />
        <link
          rel="canonical"
          href={`https://ziontechgroup.com/services/${service.id}`}
        />
      </Head>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <nav className="text-sm text-white/60">
          <Link href="/services" className="underline">
            Services
          </Link>{' '}
          / {service.title}
        </nav>
        <h1 className="mt-2 text-3xl font-extrabold">{service.title}</h1>
        <p className="mt-3 text-white/80">{service.description}</p>
        <div className="mt-4 text-white/80">
          Starting at <span className="font-semibold">{service.price}</span>/
          {service.billing}
        </div>
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Key features</h2>
          <ul className="mt-2 list-disc pl-5 space-y-1 text-white/80">
            {service.features.slice(0, 10).map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>
        </section>
        <div className="mt-8 flex gap-3">
          <Link
            href="/contact"
            className="rounded bg-white text-slate-900 px-5 py-2 font-semibold"
          >
            Contact Sales
          </Link>
          <a
            href={service.href}
            className="rounded border border-white/20 px-5 py-2 font-semibold"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}
