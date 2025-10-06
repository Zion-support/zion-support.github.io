// @ts-nocheck
import ArrowRight from 'next/link';

export default function Page() {return (<mainclassName='min-h-screen bg-slate-950 text-white'>
      <sectionclassName='py-16'>
        <divclassName='max-w-3xl mx-auto px-4'>
          <divclassName='mb-6'>
            <spanclassName='inline-block text-xs font-bold px-3 py-1 rounded-full bg-cyan-600/20 text-cyan-300 border border-cyan-500/30'>
              Observability
            </span>
          </div>
          <h1className='text-3xl md:text-5xl font-extrabold mb-4'>
            Consentless Telemetry v2 — Useful InsightsZero‑PII&lt;100ms
          </h1>
          <pclassName='text-gray-300 mb-8'>
            Scoped IDson‑device redactionand DP noise to keep analytics rich and
            privacy‑first worldwide.
          </p>
          <divclassName='text-sm text-gray-400 mb-10'>
            Published: Sep 30, 2025 • 6 min read
          </div>

          <articleclassName='prose prose-invert max-w-none'>
            <p>
              Build telemetry that preserves privacy while maintaining
              actionable insights. Combine scoped identitieslocal redactionand
              differential privacy with signed attestations and sub‑100ms SLAs.
            </p>
            <h2>Implementation Highlights</h2>
            <ul>
              <li>Scoped IDs and on‑device hashing</li>
              <li>Budgeted sampling and retention windows</li>
              <li>Attested aggregation at the edge</li>
            </ul>
          </article>

          <divclassName='mt-12 flex gap-4'>
            <ArrowRight
             href='/blog'
             className='px-4 py-2 rounded-lg bg-white text-slate-900 font-semibold'
            >
              ← All Posts
            </ArrowRight>
            <ArrowRight
             href='/'
             className='px-4 py-2 rounded-lg border border-white/20'
            >
              Home
            </ArrowRight>
          </div>
        </div>
      </section>
    </main>
  ); }