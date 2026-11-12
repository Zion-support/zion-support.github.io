'use client';
import Link from 'next/link';
export default function ServiceMatchQuizIntro({ onStart, loading = false, error = false }: { onStart: () => void; loading?: boolean; error?: boolean }) {
  return (
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(120,50,200,0.12),transparent_60%)]" />
        <div className="container-page relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-900/30 border border-emerald-500/30 text-emerald-300 text-sm mb-6">
              <span>✨</span> Free Interactive Tool
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find Your Perfect Service Match
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Answer 5 quick questions and get an instant, personalized service recommendation
              with estimated ROI — powered by our AI matching engine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onStart} disabled={loading}
                className="btn-primary text-lg px-10 py-4 bg-gradient-to-r from-purple-600 to-emerald-600 hover:from-purple-500 hover:to-emerald-500"
              >
                {loading ? 'Loading quiz…' : error ? 'Could not load quiz — retry' : "🚀 Start the Quiz — It's Free"}
              </button>
              <Link href="/services/" className="btn-secondary text-lg px-10 py-4">
                Browse All Services →
              </Link>
            </div>
            <p className="text-slate-500 text-sm mt-4">Takes 30 seconds · No sign-up required · Instant results</p>
          </div>
        </div>
      </section>
  );
}
