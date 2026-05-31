import Link from 'next/link';

export const metadata = {
  title: 'Service Configurator',
  description: 'Build your custom AI and IT services package with the Zion Tech Group configurator.',
};

export default function ConfiguratorPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(120,50,200,0.18),rgba(20,10,40,0.92))]" />
        <div className="relative container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            ⚡ Service Configurator
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Build a custom package of AI and IT services tailored to your business needs. Select services, set priorities, and get an instant proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
              Browse All Services →
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-slate-800/60 px-8 py-4 text-lg font-semibold text-slate-200 hover:border-purple-400 hover:text-white transition-all">
              Talk to an Expert
            </Link>
          </div>
          <div className="mt-16 rounded-xl border border-slate-700/50 bg-slate-900/60 p-12">
            <p className="text-slate-400 text-lg">
              The interactive configurator is coming soon. In the meantime, explore our{' '}
              <Link href="/services" className="text-purple-400 hover:text-purple-300 underline">
                full service catalog
              </Link>{' '}
              or{' '}
              <Link href="/contact" className="text-purple-400 hover:text-purple-300 underline">
                contact us
              </Link>{' '}
              for a personalized recommendation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
