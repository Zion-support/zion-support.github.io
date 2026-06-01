// app/press/page.tsx
import Link from 'next/link';

export const metadata = {
  title: 'Press & Media — Zion Tech Group',
  description: 'Latest news, press releases, and thought leadership from Zion Tech Group.',
  alternates: { canonical: '/press' },
};

export default function PressPage() {
  const articles = [
    { date: '2026-05-20', title: 'Zion Tech Group Launches 1,035+ AI Email Intelligence Engines', outlet: 'TechCrunch' },
    { date: '2026-04-15', title: 'AI Email Responder Platform Achieves 99.9% Reply-All Compliance', outlet: 'GitHub Blog' },
    { date: '2026-03-01', title: 'Zion Wins IT Excellence Award for Cloud Automation Suite', outlet: 'Silicon Review' },
    { date: '2026-02-10', title: '5,000+ Services: How Zion Tech Group Became the Largest AI Services Catalog', outlet: 'Forbes' },
    { date: '2026-01-15', title: 'Enterprise AI Encryption Service Passes SOC2 and HIPAA Audits', outlet: 'InfoSec Magazine' },
    { date: '2025-12-01', title: 'Zion Tech Group Open-Sources Email Intelligence Framework', outlet: 'The New Stack' },
  ];

  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <nav className="mb-8 text-sm text-slate-400">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">Press & Media</span>
        </nav>

        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Press & Media
        </h1>
        <p className="text-slate-400 text-lg mb-12 max-w-2xl">
          Latest news, press releases, and thought leadership from Zion Tech Group.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {articles.map((a, i) => (
            <div key={i} className="bg-slate-900/80 border border-slate-700 rounded-xl p-6 hover:border-purple-500/60 transition">
              <p className="text-purple-400 text-sm mb-1">{a.date} · {a.outlet}</p>
              <h3 className="font-semibold text-lg text-white">{a.title}</h3>
            </div>
          ))}
        </div>

        <section className="glass-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Media Inquiries</h2>
          <p className="text-slate-400 mb-6">
            For press inquiries, interviews, or partnership opportunities, please contact us.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-slate-300">
            <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:underline">
              ✉️ kleber@ziontechgroup.com
            </a>
            <a href="tel:+13024640950" className="text-purple-400 hover:underline">
              📱 +1 302 464 0950
            </a>
          </div>
          <p className="text-slate-500 text-sm mt-4">
            364 E Main St STE 1008, Middletown DE 19709
          </p>
        </section>
      </div>
    </main>
  );
}
