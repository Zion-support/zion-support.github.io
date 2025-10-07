import Link from 'next/link';

export default function AutonomyBlueprint2026Banner() {
  return (
    <section className='py-8 bg-gradient-to-r from-emerald-700/30 via-cyan-700/20 to-blue-700/20 border-y border-white/10'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
          <div>
            <h2 className='text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent'>
              New: AI Enterprise Autonomy Blueprint 2026
            </h2>
            <p className='text-white/80 mt-2'>
              Reach 70–95% autonomous operations with safety budgets, approval
              gates, and live scorecards.
            </p>
          </div>
          <div>
            <Link
              href='/blog/ai-enterprise-autonomy-blueprint-<2026'
              className='inline-flex items-center px-5 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold border border-emerald-400/40'
            >
              Read the Blueprint →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
