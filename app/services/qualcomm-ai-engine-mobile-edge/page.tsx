import Link from 'next/link';

export const metadata = {
  title: 'Qualcomm AI Engine — Mobile & IoT Edge AI Processing',
  description: 'Qualcomm AI Engine, integrated into Snapdragon mobile and IoT platforms, brings dedicated AI acceleration to over 1 billion devices. Its Hexagon Neural Processing Unit (NPU) handles on-device LLM inference (up to 7B parameters), real-time translation, voice assistants, and computational photography without cloud round-trips.',
  alternates: {
    canonical: 'https://ziontechgroup.com/services/qualcomm-ai-engine-mobile-edge',
  },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-cyan-500/20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(34,211,238,0.12),_transparent_55%)]" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-cyan-400">Zion Tech Group</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Qualcomm AI Engine — Mobile &amp; IoT Edge AI Processing</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">Qualcomm AI Engine, integrated into Snapdragon mobile and IoT platforms, brings dedicated AI acceleration to over 1 billion devices. Its Hexagon Neural Processing Unit (NPU) handles on-device LLM inference (up to 7B parameters), real-time translation, voice assistants, and computational photography without cloud round-trips.</p>
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
            <li>Hexagon NPU supports 48 TOPS INT8 inference performance</li>
            <li>On-device LLM inference: Llama 3 7B at 15+ tokens/second</li>
            <li>Hybrid AI: automatic split between on-device and cloud inference</li>
            <li>Qualcomm AI Engine Direct — single API for GPU, CPU, NPU acceleration</li>
            <li>Supports ONNX, TensorFlow Lite, PyTorch Mobile runtimes</li>
            <li>Always-on voice, vision, and sensor processing at &lt;5mW</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Benefits</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
            <li>User voice data never leaves the device — privacy by architecture</li>
            <li>Offline AI works in airplane mode, underground, remote areas</li>
            <li>Real-time multilingual translation for 40+ languages on Snapdragon</li>
            <li>Smartphone camera computational photography at professional quality</li>
            <li>Battery-efficient: 10-hour continuous AI workload vs 2 hours on GPU</li>
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Basic</h3>
            <p className="mt-2 text-2xl font-bold">Integrated into Snapdragon SoCs</p>
          </div>
          <div className="rounded-xl border border-cyan-500/40 bg-slate-900/80 p-5">
            <h3 className="font-semibold text-cyan-300">Pro</h3>
            <p className="mt-2 text-2xl font-bold">Developer access via Qualcomm Innovation Center</p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="font-semibold text-cyan-300">Enterprise</h3>
            <p className="mt-2 text-2xl font-bold">Custom NPU firmware licensing available</p>
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
