import Link from 'next/link';

export const metadata = {
  title: 'NVIDIA Jetson — Edge AI Inference Platform | Zion Tech Group',
  description: 'NVIDIA Jetson is the leading edge AI computing platform, delivering data center-level AI performance in power-constrained embedded systems. The Orin NX and AGX Orin modules provide up to 275 TOPS of AI compute for autonomous machines, industrial inspection, smart cities, and medical devices — all at under 60W power consumption.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/nvidia-jetson-edge-ai',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">NVIDIA Jetson — Edge AI Inference Platform</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">NVIDIA Jetson is the leading edge AI computing platform, delivering data center-level AI performance in power-constrained embedded systems. The Orin NX and AGX Orin modules provide up to 275 TOPS of AI compute for autonomous machines, industrial inspection, smart cities, and medical devices — all at under 60W power consumption.</p>
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
            <li>AGX Orin delivers 275 TOPS INT8 AI performance in a compact module</li>
            <li>NVIDIA TensorRT for optimized model inference (YOLO, BERT, GPT)</li>
            <li>Multi-camera support: up to 16 concurrent camera streams via GMSL</li>
            <li>CUDA, cuDNN, and TensorRT libraries available out of the box</li>
            <li>IGX Orin for medical devices (FDA 510(k) cleared reference designs)</li>
            <li>Cloud-native orchestration via NVIDIA Fleet Command</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>Run foundation models (LLMs, diffusion) on edge without cloud dependency</li>
            <li>Sub-10ms latency for real-time autonomous vehicle decision-making</li>
            <li>Industrial defect detection at 500 parts/minute with 99.97% accuracy</li>
            <li>Power-efficient: x80 more efficient than data center GPU inference</li>
            <li>Deploy once: models developed on NVIDIA data center GPUs run on Jetson unchanged</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">$199/developer kit</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">$999/Orin NX module</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">$1,999/AGX Orin + volume pricing</p>
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
