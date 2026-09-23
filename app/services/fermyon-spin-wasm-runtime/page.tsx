import Link from 'next/link';

export const metadata = {
  title: 'Fermyon Spin — WebAssembly Serverless Runtime for Cloud & Edge | Zion Tech Group',
  description: 'Fermyon Spin is an open-source serverless runtime built on WebAssembly (Wasm) that enables developers to build, deploy, and scale microservices with near-instant cold starts (sub-millisecond), smaller binaries (MBs vs. GBs for containers), and strong sandboxing. Built on the Wasmtime and WasmSpin engines, Spin supports Rust, JavaScript/TypeScript, Go, Python, and .NET with a single CLI. Fermyon Cloud provides a fully managed Tier 0 serverless platform running Spin applications at the edge, and Fermyon Platform enables on-premises Wasm deployment for regulated industries. Used by enterprises for serverless APIs, plugin systems, event-driven functions, and edge compute where cold start and security isolation matter.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/fermyon-spin-wasm-runtime',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Fermyon Spin — WebAssembly Serverless Runtime for Cloud &amp; Edge</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Fermyon Spin is an open-source serverless runtime built on WebAssembly (Wasm) that enables developers to build, deploy, and scale microservices with near-instant cold starts (sub-millisecond), smaller binaries (MBs vs. GBs for containers), and strong sandboxing. Built on the Wasmtime and WasmSpin engines, Spin supports Rust, JavaScript/TypeScript, Go, Python, and .NET with a single CLI. Fermyon Cloud provides a fully managed Tier 0 serverless platform running Spin applications at the edge, and Fermyon Platform enables on-premises Wasm deployment for regulated industries. Used by enterprises for serverless APIs, plugin systems, event-driven functions, and edge compute where cold start and security isolation matter.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://calendly.com/kleber-ziontechgroup/consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
            >
              Book a Consultation
            </a>
            <Link href="/services" className="inline-flex rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-cyan-500/50 transition-colors">
              Browse All Services
            </Link>
            <Link href="/contact" className="inline-flex rounded-lg border border-slate-600 px-6 py-3 font-semibold text-slate-200 hover:border-cyan-500/50 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Sub-millisecond cold starts: Wasm microVMs boot in under 100µs vs. seconds for containers</li>
            <li>Tiny binaries: spin up with MBs instead of GB container images — faster deploys, less bandwidth</li>
            <li>Sandboxed execution: each function runs in a capability-based security sandbox with no shared state</li>
            <li>Multi-language: Rust, JavaScript, TypeScript, Go, Python, and .NET with unified Spin CLI</li>
            <li>Fermyon Cloud: fully managed Tier 0 serverless with global edge deployment and auto-scaling</li>
            <li>Component Model: WASI and the WebAssembly Component Model for composable, language-agnostic modules</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Cold starts 1,000x faster than containers — ideal for APIs, event handlers, and edge compute</li>
            <li>Deploy MBs instead of GBs: faster CI/CD, lower registry costs, and reduced attack surface</li>
            <li>Strong sandboxing: functions cannot access host resources without explicit capability grants</li>
            <li>Language-agnostic: teams write in their language and compose modules at the Wasm component level</li>
            <li>Built by co-creators of the Bytecode Alliance and core contributors to Wasmtime and WASI</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Free (open source, self-hosted Spin CLI)</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">Fermyon Cloud Free tier (1M requests/month)</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom (Fermyon Platform on-prem, dedicated support, SLA)</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          Need a tailored rollout? Call{' '}
          <a href="tel:+13024640950" className="text-cyan-400 hover:underline">+1 302 464 0950</a>
          {' '}or email{' '}
          <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:underline">kleber@ziontechgroup.com</a>.
        </p>
      </section>
    </main>
  );
}
