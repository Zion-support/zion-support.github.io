export const metadata = {
  title: 'Designing Token Reward Growth Loops',
  description: 'How to craft sustainable incentives that compound community engagement and revenue.',
};

export default function Page() {
  return (
    <article className='min-h-screen'>
      <header className='bg-gradient-to-r from-orange-600 to-pink-600 py-20 text-center'>
        <div className='max-w-3xl mx-auto px-6'>
          <div className='text-xs uppercase tracking-wide text-orange-100 mb-3'>Web3</div>
          <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>Designing Token Reward Growth Loops</h1>
          <div className='text-orange-100/80'>September 12, 2025</div>
        </div>
      </header>
      <section className='py-12 px-4 sm:px-6 lg:px-8'>
        <div className='prose prose-invert max-w-3xl mx-auto'>
          <p>Design incentives that compound engagement while remaining sustainable and compliant.</p>
          <ul>
            <li>Role-based rewards and quest design</li>
            <li>Sinks, caps, and vesting mechanics</li>
            <li>On-chain analytics feedback loops</li>
            <li>Compliance-aware growth tactics</li>
          </ul>
        </div>
      </section>
    </article>
  );
}

