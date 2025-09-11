import Head from 'next/head';
import Link from 'next/link';

const cards = [
  {
    title: 'AI Customer Lifetime Value Predictor',
    href: '/services/ai-customer-lifetime-value-predictor',
    price: 'From $2,499/mo',
  },
  {
    title: 'AI-Powered Inventory Optimization',
    href: '/services/ai-powered-inventory-optimization',
    price: 'From $1,999/mo',
  },
  {
    title: 'AI-Powered Cybersecurity Monitoring',
    href: '/services/ai-powered-cybersecurity-monitoring',
    price: 'From $3,999/mo',
  },
  {
    title: 'Blockchain Smart Contract Auditor',
    href: '/services/blockchain-smart-contract-auditor',
    price: 'From $5,000+',
  },
];

export default function ServicesIndexPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Head>
        <title>Services — Zion Tech Group</title>
        <meta
          name='description'
          content='Explore AI, IT, and micro SaaS services with transparent pricing and fast delivery.'
        />
        <link rel='canonical' href='https://ziontechgroup.com/services' />
      </Head>
      <section className='py-16 px-6 max-w-6xl mx-auto'>
        <h1 className='text-3xl md:text-5xl font-bold text-gray-900 mb-6'>
          Services
        </h1>
        <p className='text-lg text-gray-700 mb-10'>
          Production-ready services designed to improve revenue, efficiency, and
          security.
        </p>
        <div className='grid md:grid-cols-2 gap-6'>
          {cards.map(c => (
            <Link
              key={c.href}
              href={c.href}
              className='block border border-gray-200 rounded-xl p-6 hover:shadow-md transition'
            >
              <div className='flex items-center justify-between'>
                <div>
                  <h2 className='text-xl font-semibold text-gray-900'>
                    {c.title}
                  </h2>
                  <p className='text-sm text-gray-600 mt-1'>{c.price}</p>
                </div>
                <svg
                  className='w-5 h-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
