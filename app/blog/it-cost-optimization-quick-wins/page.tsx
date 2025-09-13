export const metadata = {
  title: 'IT Cost Optimization: 9 Quick Wins for Q4',
  description: 'Practical tactics across cloud, licenses, and automation that cut cost without chaos.',
};

export default function Page() {
  return (
    <article className='min-h-screen'>
      <header className='bg-gradient-to-r from-emerald-600 to-green-600 py-20 text-center'>
        <div className='max-w-3xl mx-auto px-6'>
          <div className='text-xs uppercase tracking-wide text-emerald-100 mb-3'>IT</div>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>IT Cost Optimization: 9 Quick Wins for Q4</h1>
          <div className='text-emerald-100/80'>September 12, 2025</div>
        </div>
      </header>
      <section className='py-12 px-4 sm:px-6 lg:px-8'>
        <div className='prose prose-invert max-w-3xl mx-auto'>
          <p>Reduce spend with surgical changes across cloud, licenses, data, and automation.</p>
          <ol>
            <li>Idle resource cleanup and right-sizing</li>
            <li>Reserved instances and savings plans</li>
            <li>License rationalization</li>
            <li>Cold storage policies</li>
            <li>Workflow automation to cut toil</li>
          </ol>
        </div>
      </section>
    </article>
  );
}

