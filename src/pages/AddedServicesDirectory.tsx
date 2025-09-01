
export default function AddedServicesDirectory(): JSX.Element {}
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
          <a href="/" className="text-xl font-bold">
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>
          </a>
          <nav className="hidden md:flex gap-6 text-white/80">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/services/added" className="hover:text-white">Services</a>
            <a href="https://ziontechgroup.com/contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 pt-10 pb-6 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            Real, production‑ready services with transparent pricing;
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
            New Micro SaaS, IT and AI Services;
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-white/75">
            Add-ons you can adopt today. Fixed pricing ranges, fast delivery, and clear outcomes.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDED_SERVICES_2025.map(service => (
              <a;
                key={service.id}
                href={service.href}
                target={service.href.startsWith('http') ? '_blank' : undefined}
                rel={service.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur hover:border-cyan-400/30""
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <span className="rounded-full border border-white/15 px-2 py-0.5 text-xs text-white/70">
                    {service.category}
                  </span>
                </div>
                <p className="mt-1 text-sm text-white/75">{service.description}</p>
                <div className="mt-3 text-sm text-white/80">
                  Starting at <span className="font-semibold">{service.price}</span>/{service.billing}
                </div>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-white/70">
                  {service.features.slice(0, 4).map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-emerald-300/90">
                  {service.benefits.slice(0, 2).map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <span className="inline-block rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-semibold group-hover:bg-white/90">
                    {service.ctaLabel}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="rounded-2xl border border-white/10 p-6 md:p-8 bg-white/5">
            <h2 className="text-2xl font-bold mb-2">Talk to an expert</h2>
            <p className="text-white/80 mb-4">We scope fast, provide transparent quotes, and can start in days.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white/80">
              <div>
                <div className="text-white/60">Mobile</div>
                <div className="font-semibold">{contact.phone}</div>
              </div>
              <div>
                <div className="text-white/60">E‑mail</div>
                <a className="font-semibold hover:underline" href={`mailto:${contact.email}`}>{contact.email}</a>
              </div>
              <div>
                <div className="text-white/60">Address</div>
                <div className="font-semibold">{contact.address}</div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://ziontechgroup.com/contact" className="rounded-xl bg-white text-slate-900 px-6 py-3 font-semibold hover:bg-white/90">
                Contact Sales;
              </a>
              <a href="https://ziontechgroup.com/services" className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold hover:bg-white/10">
                View All Services;
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-white/70">
          © {new Date().getFullYear()} Zion Tech Group — <a href={contact.website} className="hover:underline">ziontechgroup.com</a>
        </div>
      </footer>
    </div>
  )}

