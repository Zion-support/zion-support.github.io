import Link from 'next/link';

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description:
    'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-6 py-24">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Zion Tech Group</h1>
        <p className="mt-4 text-gray-300">Modern AI and technology solutions.</p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link href="/services" className="bg-purple-600 text-white px-6 py-3 rounded-lg">Explore Services</Link>
          <Link href="/contact" className="border border-gray-300 text-white px-6 py-3 rounded-lg">Get Started</Link>
        </div>
      </div>
    </main>
  );
}

