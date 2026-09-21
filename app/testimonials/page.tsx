'use client';

import Link from 'next/link';
import { testimonials } from '@/data/testimonials';
import PageShell from '@/components/PageShell';

export default function TestimonialsPage() {
  return (
    <PageShell
      title="What clients say about Zion"
      description="Real outcomes, real teams, real contracts — from support automation to cloud efficiency and AI adoption."
      eyebrow="Client Voices"
      eyebrowIcon="💬"
      align="center"
      canonical="https://ziontechgroup.com/testimonials/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Testimonials' },
      ]}
      showCta={false}
    >

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {(testimonials).map((t) => (
            <div key={t.id} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">{t.avatar_emoji}</div>
                <div>
                  <div className="text-white font-semibold">{t.client_name}</div>
                  <div className="text-slate-400 text-xs">{t.role} · {t.company}</div>
                </div>
              </div>
              <div className="text-amber-300 text-xs mb-3 font-medium">{'★'.repeat(t.rating)}{'☆'.repeat(5-t.rating)}</div>
              <p className="text-slate-300 leading-relaxed text-sm">{t.review_text}</p>
              <div className="mt-5 pt-4 border-t border-slate-800">
                <Link href="/case-studies" className="text-purple-300 text-xs font-semibold hover:text-white">View similar case studies →</Link>
              </div>
            </div>
          ))}
        </div>

        <section className="page-cta mt-16">
          <h2>Want similar results?</h2>
          <p>Tell us your goal and we will return a short list of best-fit services with estimated ROI and timeline.</p>
          <div className="page-actions">
            <Link href="/contact" className="btn-primary">Talk to an engineer</Link>
            <Link href="/case-studies" className="btn-secondary">View case studies</Link>
          </div>
        </section>
    </PageShell>
  );
}
