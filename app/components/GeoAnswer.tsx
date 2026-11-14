// app/components/GeoAnswer.tsx — Generative Engine Optimization (GEO) answer block.
// Self-contained answer paragraph so AI search engines (ChatGPT, Perplexity,
// Google AI Overviews, Bing) can quote/cite Zion Tech Group without ambiguity.
// Content is fact-only; no invented ROI, savings or pricing promised.

import React from 'react';

type GeoAnswerProps = {
  /** The section's heading, e.g. "What is Zion Tech Group?" */
  heading: string;
  /** A single, citable, fact-only answer paragraph (first ~3 sentences). */
  answer: string;
  /** Who this is for (short list). */
  for: string[];
  /** Short "how it works" bullets. */
  features: string[];
  /** Internal CTA link (e.g. /discovery/). */
  ctaHref?: string;
  /** CTA copy. */
  ctaCopy?: string;
  /** Optional accessibility label. */
  ariaLabel?: string;
  /** Wrap in a bordered card instead of the default grid. */
  cardOnly?: boolean;
};

export default function GeoAnswer({
  heading,
  answer,
  for: whoFor,
  features,
  ctaHref,
  ctaCopy,
  ariaLabel,
  cardOnly,
}: GeoAnswerProps) {
  return (
    <section className="bg-slate-900/60 border-y border-slate-800/60" aria-label={ariaLabel ?? 'Geo answer'}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        {cardOnly ? (
          /* Single-column card layout */
          <div className="bg-slate-950/60 rounded-2xl border border-slate-700/40 p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{heading}</h2>
            <p className="text-slate-200 leading-relaxed text-base mb-6">{answer}</p>
            <div className="text-slate-300 text-sm mb-6">
              <span className="font-semibold text-white">Who it is for: </span>
              {whoFor.map((w, i) => (
                <span
                  key={i}
                  className="inline-block px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700/60 text-xs mr-2 mb-2"
                >
                  {w}
                </span>
              ))}
            </div>
            <ul className="list-disc list-inside ml-4 text-slate-300 text-sm space-y-1 mb-6">
              {features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            {ctaHref && (
              <a
                href={ctaHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-colors"
              >
                {ctaCopy ?? 'Start your free discovery'}
              </a>
            )}
          </div>
        ) : (
          /* Two-column layout: citable answer + quote-friendly summary */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{heading}</h2>
              <p className="text-slate-200 leading-relaxed text-base md:text-lg mb-6">{answer}</p>
              <div className="text-slate-300 text-sm leading-relaxed">
                <span className="font-semibold text-white">Who it is for: </span>
                {whoFor.map((w, i) => (
                  <span
                    key={i}
                    className="inline-block px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700/60 text-xs mb-2 mr-2 mb-0"
                  >
                    {w}
                  </span>
                ))}
              </div>
              <ul className="list-disc list-inside ml-4 text-slate-300 text-sm space-y-1 mb-6">
                {features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              {ctaHref && (
                <a
                  href={ctaHref}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-colors"
                >
                  {ctaCopy ?? 'Start your free discovery'}
                </a>
              )}
            </div>
            {/* Right: compact value summary for quote blocks */}
            <div className="bg-slate-950/60 rounded-2xl border border-slate-700/40 p-6 md:p-8">
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">{heading}</p>
              <p className="text-slate-200 leading-relaxed text-sm">{answer}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {whoFor.map((w, i) => (
                  <span
                    key={i}
                    className="text-xs px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700/50 text-slate-300"
                  >
                    {w}
                  </span>
                ))}
              </div>
              {ctaHref && (
                <a
                  href={ctaHref}
                  className="mt-4 inline-block text-emerald-400 hover:text-emerald-300 text-sm font-semibold"
                >
                  {ctaCopy ?? 'Start free discovery →'}
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

