import Head from 'next/head.ts';
import Link from 'next/link.ts';

export default function ServicesIndex(...args: any[]): any {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive range of AI, Micro SaaS, and IT services." />
      </Head>
      
      <div className="relative">
        <div className="absolute -z-10 -top-40 -left-40 w-96 h-96 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500" />
        
        {/* Header */}
        <div className="text-center py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            Discover our comprehensive range of AI, Micro SaaS, and IT services designed to transform your business.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>
      </section>

      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"><div className="twinkle-field absolute inset-0" /></div>
        <div className="absolute inset-0 beams opacity-[0.06]" />
      </div>

      <header className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="text-2xl font-bold tracking-wide">
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span>
          </div>
          <div className="hidden gap-6 md:flex text-white/80">
            <Link href="/"><a>Home</a></Link>
            <Link href="/automation"><a>Automations</a></Link>
            <Link href="/products"><a>Products</a></Link>
            <Link href="/contact"><a>Contact</a></Link>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-20 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
            Autonomous delivery with safety guardrails
          </div>
          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"><span className="gradient-text">Services</span></h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-white/80">Choose from specialized agents and blueprints to ship value faster.</p>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid grid-cols-1 gap-5 sm: anygrid-cols-2 lg:grid-cols-3">
            {[
              { href: '/services/ai-seo-auditor', title: 'AI SEO Auditor', desc: 'Automate on-site SEO audits and fixes.' },
              { href: '/services/customer-support-chatbot', title: 'Customer Support Chatbot', desc: 'Deflect tickets with high-quality automated replies.' },
              { href: '/services/landing-page-generator', title: 'Landing Page Generator', desc: 'Spin up optimized pages with one prompt.' },
              { href: '/services/price-intelligence-service', title: 'Price Intelligence', desc: 'Continuously monitor and adapt pricing.' },
              { href: '/services/developer-productivity-copilot', title: 'Developer Productivity Copilot', desc: 'AI PR reviews, test gen, CI insights.' },
              { href: '/services/ai-sales-assistant', title: 'AI Sales Assistant', desc: 'Qualify leads and personalize outreach.' },
              { href: '/services/security-posture-guardian', title: 'Security Posture Guardian', desc: 'Misconfig and secret scanning with fixes.' },
              { href: '/services/ai-data-pipeline-optimizer', title: 'AI Data Pipeline Optimizer', desc: 'Optimize ETL/ELT and RAG pipelines.' },
            ].map((s)  => (
              <Link key={s.href} href={s.href}>
                <a className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30">
                  <div className="pointer-events-none absolute -inset-px -z-10 bg-gradient-to-r from-fuchsia-500/0 via-cyan-400/10 to-fuchsia-500/0 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{s.desc}</p>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="text-sm text-cyan-400 mb-2">{service.category}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title || service.name}</h3>
                <p className="text-white/70 mb-4 line-clamp-3">{service.description}</p>
                
                {service.price && (
                  <div className="text-2xl font-bold text-cyan-400 mb-4">
                    ${service.price.monthly}/mo
                  </div>
                )}
                
                {service.features && service.features.length > 0 && (
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-white/70">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-white/50 text-sm">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                )}
                
                <div className="flex gap-3">
                  <Link
                    href={`/services/${service.id}`}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 text-center"
                  >
                    Learn More
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
