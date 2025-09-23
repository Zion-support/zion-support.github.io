import Link from 'next/link'

export default function IndexPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Zion Tech Group</h1>
        <p className="text-lg text-gray-300 mb-8">Enterprise AI, cloud, and micro‑SaaS solutions.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services" className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold">Explore Services</Link>
          <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold">Get Started</Link>
        </div>
      </div>
    </main>
  );
}
