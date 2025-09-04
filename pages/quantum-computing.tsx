import Head from 'next/head';
import Link from 'next/link';

export default function QuantumComputing() {
  const site = 'https://ziontechgroup.com';
  const phone = '+1 302 464 0950';

  return (
    <>
      <Head>
        <title>Quantum Computing Services - Zion Tech Group</title>
        <meta name="description" content="Cutting-edge quantum computing services including algorithm development and optimization." />
        <link rel="canonical" href={`${site}/quantum-computing`} />
      </Head>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Quantum Computing Services</h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold">Get Started</Link>
          <a href={`tel:${phone.replace(/[^\d+]/g,'')}`} className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold">Call {phone}</a>
        </div>
      </section>
    </>
  );
}