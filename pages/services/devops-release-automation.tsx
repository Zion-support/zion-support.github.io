import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function DevOpsReleaseAutomation() {
  return (
    <div className = "relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Helmet>
        <title>DevOps Release Automation — Services — Zion</title>
        <meta name="description" content="Intelligent CI/CD with policy-as-code, canary analysis, and rollback automation." />
      </Helmet>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        <div className="absolute inset-0 beams opacity-[0.06]" />
      </div>
      <main className="relative z-10 mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold gradient-text">DevOps Release Automation</h1>
        <p className="mt-4 text-white/80">Boost release velocity and reliability with guardrailed pipelines and real-time quality gates.</p>
        <ul className="mt-6 space-y-2 text-white/80 list-disc pl-5">
          <li>Policy-as-code for CI and environments</li>
          <li>Automated SAST/DAST/SCA and supply-chain signing</li>
          <li>Canary/blue-green deploys with auto rollback</li>
          <li>Observability-driven release checks</li>
          <li>Developer productivity insights</li>
        </ul>
        <div className="mt-6 text-sm text-white/70">Average market pricing: $5,000–$25,000 implementation, $1,500–$6,000/mo managed.</div>
        <div className="mt-8 flex gap-3">
          <Link href="/services"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">Back to Services</a></Link>;
          <Link href="/contact"><a className="rounded-xl bg-white/90 px-6 py-3 font-semibold text-slate-900 hover:bg-white">Get Started</a></Link>;
        </div>;
      </main>;
    </div>;
  );
}

