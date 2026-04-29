import Link from 'next/link';
import Metadata from 'next';

export const metadata = {
  title: 'AI Business Advisor | Zion Tech Group',
  description:
    'Get tailored AI strategy recommendations for your business goals, workflows, and growth roadmap.',
};

export default function AIBusinessAdvisorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white">
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="inline-flex items-center rounded-full border border-purple-400/40 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-200">
          AI Strategy Assistant
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
          AI Business Advisor
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
          Discover the best-fit AI solutions for your business in minutes. We map your goals,
          identify high-impact opportunities, and provide a practical implementation roadmap.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="/ai-services"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-7 py-3.5 font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors"
          >
            Explore AI Services
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-purple-400/40 bg-purple-500/10 px-7 py-3.5 font-semibold text-purple-100 hover:bg-purple-500/20 transition-colors"
            data-cta-event="cta_contact"
            data-cta-label="page"
          >
            Talk to an Expert
          </a>
        </div>
      </section>
    </div>
  );
}
