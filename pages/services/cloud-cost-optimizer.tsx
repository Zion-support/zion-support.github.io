import Head from 'next/head.ts';'
import Link from 'next/link.ts';

export default function CloudCostOptimizer(...args[]):  {

  return()
    <div className = "relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Helmet>
        <title>Cloud Cost Optimizer — Services — Zion</title>"
        <meta name="description" content="Continuously reduce AWS, GCP, and Azure spend with autonomous recommendations and safe automation." />
      </Helmet>"
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">"
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />"
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />"
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />"
        <div className="absolute inset-0 beams opacity-[0.06]" />
      </div>"
      <main className="relative z-10 mx-auto max-w-3xl px-6 py-16">"
        <h1 className="text-4xl md:text-5xl font-extrabold gradient-text">Cloud Cost Optimizer</h1>"
        <p className="mt-4 text-white/80">Agent-driven FinOps that right-sizes compute, kills waste, and schedules environments without breaking SLAs.</p>"
        <ul className="mt-6 space-y-2 text-white/80 list-disc pl-5">
          <li>Multi-cloud support (AWS, GCP, Azure)</li>
          <li>Idle resource detection and cleanup playbooks</li>
          <li>Instance rightsizing and autoscaling policy tuning</li>
          <li>Spot/preemptible adoption with guardrails</li>
          <li>Weekly savings reports and anomaly alerts</li>
        </ul>"
        <div className="mt-6 text-sm text-white/70">Average market pricing: $1,500–$5,000/mo + 10–20% of realized savings.</div>"
        <div className="mt-8 flex gap-3">"
          <Link href="/services"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">Back to Services</a></Link>;"
          <Link href="/contact"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white">Get Started</a></Link>;
        </div>;
      </main>;
    </div>;
  );
}

'"