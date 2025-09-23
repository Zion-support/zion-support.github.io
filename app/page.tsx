import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description:
    'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions. Expert consulting and implementation services.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Advanced AI and
          <span className="ml-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technology Solutions
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Transform your business with cutting-edge AI, cloud infrastructure, and cybersecurity solutions.
          We deliver enterprise-grade technology that drives innovation and growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/services"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105 inline-flex items-center justify-center"
          >
            Explore Solutions
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="border border-gray-300 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all inline-flex items-center justify-center"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
