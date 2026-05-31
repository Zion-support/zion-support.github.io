// DevOps Services - Category Page
import Link from 'next/link';
import { allServices } from '../data/servicesData';

export const metadata = {
  title: 'DevOps Services | Zion Tech Group',
  description: 'CI/CD pipelines, infrastructure automation, and SRE.',
};

export default function Page() {
  const services = allServices.filter(s =>
    s.category && s.category === 'devops' ||
    s.category && s.category === 'devops' ||
    (s.category || '').toLowerCase().includes('devops')
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-6xl mb-4 block">🔧</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">DevOps Services</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">CI/CD pipelines, infrastructure automation, and SRE.</p>
          <p className="text-lg text-purple-400 mt-4 font-semibold">{services.length}+ Solutions Available</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.slice(0, 12).map((s: any) => (
            <Link key={s.id} href={s.href || ('/services/' + s.id)}
              className="group block p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-purple-500 transition-all hover:scale-105">
              <span className="text-3xl mb-3 block">{s.icon}</span>
              <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition">{s.title || s.name || s.id}</h3>
              <p className="text-sm text-gray-400 mt-2 line-clamp-2">{s.description}</p>
              {s.pricing?.basic && <p className="text-purple-400 font-semibold mt-3">From ${s.pricing.basic}/mo</p>}
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/services" className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition">
            View All {services.length}+ Solutions →
          </Link>
        </div>
        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-800/50">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6">Contact our team for a personalized consultation and demo.</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="text-gray-300">📞 +1 302 464 0950</span>
            <span className="text-gray-300">✉️ kleber@ziontechgroup.com</span>
            <span className="text-gray-300">📍 364 E Main St STE 1008, Middletown DE 19709</span>
          </div>
        </div>
      </div>
    </div>
  );
}
