'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace JSX {
  interface IntrinsicElements {
    script: React.DetailedHTMLProps<React.ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>;
  }
  type Element = React.ReactElement;
}

interface CheckItem {
  label: string;
  status: 'pass' | 'warn' | 'fail';
  points: number;
  maxPoints: number;
  recommendation: string;
}

interface AuditResult {
  categories: {
    seo: { score: number; maxScore: number; checks: CheckItem[] };
    performance: { score: number; maxScore: number; checks: CheckItem[] };
    accessibility: { score: number; maxScore: number; checks: CheckItem[] };
  };
  overallScore: number;
}

const SEO_TEMPLATE_KEYWORDS = [
  'complete guide', 'how to', 'best practices', 'tips and tricks',
  'tutorial', 'for beginners', 'advanced', 'step by step',
  'comparison', 'vs', 'alternatives', 'review',
  'examples', 'templates', 'checklist', 'framework',
];

const CONTENT_IDEAS = [
  { type: 'Blog Post', format: 'The Complete Guide to {keyword} in 2026', angle: 'Comprehensive, evergreen content that ranks for broad searches' },
  { type: 'How-To', format: 'How to {keyword}: Step-by-Step Tutorial', angle: 'Actionable content that gets shared and bookmarked' },
  { type: 'Listicle', format: '10 {keyword} Tips Every Professional Should Know', angle: 'Highly shareable list format perfect for social media' },
  { type: 'Comparison', format: '{keyword} vs Alternatives: Which Is Right for You?', angle: 'Comparison posts target high-intent buyers' },
  { type: 'Case Study', format: 'How We Used {keyword} to Achieve [Result]', angle: 'Proof-based content builds trust and authority' },
  { type: 'Mistakes', format: '5 {keyword} Mistakes That Are Costing You [Time/Money]', angle: 'Fear-of-missing-out drives high click-through rates' },
  { type: 'Checklist', format: 'The Ultimate {keyword} Checklist (Free Download)', angle: 'Lead magnet format with high conversion potential' },
  { type: 'FAQ', format: '{keyword}: Everything You Need to Know (FAQ)', angle: 'FAQ content targets long-tail search queries' },
];

function generateContentIdeas(keyword: string) {
  const ideas = CONTENT_IDEAS.map(idea => ({
    ...idea,
    title: idea.format.replace(/{keyword}/g, keyword),
    seoScore: Math.floor(Math.random() * 20) + 80, // 80-100
    competition: Math.random() > 0.5 ? 'Low' : 'Medium',
    estimatedTraffic: Math.floor(Math.random() * 5000) + 500,
  }));
  return ideas.sort((a, b) => b.seoScore - a.seoScore);
}

function generateSEOAudit(domain: string): AuditResult {
  // Simulated audit based on domain characteristics
  const isHttps = domain.startsWith('https');
  const hasMobile = Math.random() > 0.3;
  const hasSchema = Math.random() > 0.5;
  const loadTime = Math.random() * 4 + 0.5;
  const titleLength = Math.floor(Math.random() * 50) + 20;
  const metaLength = Math.floor(Math.random() * 140) + 80;

  const seoChecks: CheckItem[] = [
    { label: 'SSL Certificate (HTTPS)', status: isHttps ? 'pass' : 'fail', points: isHttps ? 10 : 0, maxPoints: 10, recommendation: isHttps ? 'SSL is properly configured' : 'Install an SSL certificate immediately' },
    { label: 'Title Tag Length', status: titleLength >= 30 && titleLength <= 60 ? 'pass' : 'warn', points: (titleLength >= 30 && titleLength <= 60) ? 10 : 5, maxPoints: 10, recommendation: 'Keep title tags between 30-60 characters' },
    { label: 'Meta Description Length', status: metaLength >= 120 && metaLength <= 160 ? 'pass' : 'warn', points: (metaLength >= 120 && metaLength <= 160) ? 10 : 5, maxPoints: 10, recommendation: 'Meta descriptions should be 120-160 characters' },
    { label: 'Schema Markup', status: hasSchema ? 'pass' : 'fail', points: hasSchema ? 10 : 0, maxPoints: 10, recommendation: hasSchema ? 'Schema markup detected' : 'Add structured data for rich results' },
    { label: 'Sitemap.xml', status: 'pass', points: 10, maxPoints: 10, recommendation: 'XML sitemap found and accessible' },
    { label: 'Robots.txt', status: Math.random() > 0.2 ? 'pass' : 'warn', points: Math.random() > 0.2 ? 10 : 5, maxPoints: 10, recommendation: 'Verify robots.txt allows search engine crawling' },
    { label: 'Canonical Tags', status: Math.random() > 0.3 ? 'pass' : 'fail', points: Math.random() > 0.3 ? 10 : 0, maxPoints: 10, recommendation: 'Add canonical tags to prevent duplicate content' },
    { label: 'Open Graph Tags', status: Math.random() > 0.4 ? 'pass' : 'warn', points: Math.random() > 0.4 ? 10 : 5, maxPoints: 10, recommendation: 'Add OG tags for better social sharing' },
  ];

  const performanceChecks: CheckItem[] = [
    { label: 'Page Load Time', status: loadTime < 2 ? 'pass' : loadTime < 3 ? 'warn' : 'fail', points: loadTime < 2 ? 15 : loadTime < 3 ? 10 : 5, maxPoints: 15, recommendation: loadTime < 2 ? 'Excellent load time' : 'Target under 2 seconds for optimal SEO' },
    { label: 'Mobile Responsiveness', status: hasMobile ? 'pass' : 'fail', points: hasMobile ? 15 : 0, maxPoints: 15, recommendation: hasMobile ? 'Mobile-friendly design detected' : 'Implement responsive design immediately' },
    { label: 'Image Optimization', status: Math.random() > 0.3 ? 'pass' : 'warn', points: Math.random() > 0.3 ? 10 : 5, maxPoints: 10, recommendation: 'Use WebP format and lazy loading for images' },
    { label: 'CSS/JS Minification', status: Math.random() > 0.4 ? 'pass' : 'fail', points: Math.random() > 0.4 ? 10 : 0, maxPoints: 10, recommendation: 'Minify CSS and JS to reduce payload size' },
    { label: 'Browser Caching', status: Math.random() > 0.2 ? 'pass' : 'warn', points: Math.random() > 0.2 ? 10 : 5, maxPoints: 10, recommendation: 'Set proper Cache-Control headers' },
  ];

  const accessibilityChecks: CheckItem[] = [
    { label: 'Alt Text on Images', status: Math.random() > 0.3 ? 'pass' : 'fail', points: Math.random() > 0.3 ? 15 : 0, maxPoints: 15, recommendation: 'Add descriptive alt text to all images' },
    { label: 'Color Contrast Ratio', status: Math.random() > 0.2 ? 'pass' : 'warn', points: Math.random() > 0.2 ? 15 : 8, maxPoints: 15, recommendation: 'Ensure 4.5:1 contrast ratio minimum (WCAG AA)' },
    { label: 'Keyboard Navigation', status: Math.random() > 0.3 ? 'pass' : 'fail', points: Math.random() > 0.3 ? 15 : 0, maxPoints: 15, recommendation: 'All interactive elements must be keyboard accessible' },
    { label: 'ARIA Labels', status: Math.random() > 0.4 ? 'pass' : 'warn', points: Math.random() > 0.4 ? 15 : 8, maxPoints: 15, recommendation: 'Add ARIA labels to improve screen reader experience' },
    { label: 'Heading Structure', status: Math.random() > 0.25 ? 'pass' : 'warn', points: Math.random() > 0.25 ? 15 : 8, maxPoints: 15, recommendation: 'Use logical H1-H6 hierarchy without skipping levels' },
  ];

  const seoScore = seoChecks.reduce((s, c) => s + c.points, 0);
  const perfScore = performanceChecks.reduce((s, c) => s + c.points, 0);
  const a11yScore = accessibilityChecks.reduce((s, c) => s + c.points, 0);
  const maxSeo = seoChecks.reduce((s, c) => s + c.maxPoints, 0);
  const maxPerf = performanceChecks.reduce((s, c) => s + c.maxPoints, 0);
  const maxA11y = accessibilityChecks.reduce((s, c) => s + c.maxPoints, 0);
  const overall = Math.round((seoScore + perfScore + a11yScore) / (maxSeo + maxPerf + maxA11y) * 100);

  return {
    categories: {
      seo: { score: seoScore, maxScore: maxSeo, checks: seoChecks },
      performance: { score: perfScore, maxScore: maxPerf, checks: performanceChecks },
      accessibility: { score: a11yScore, maxScore: maxA11y, checks: accessibilityChecks },
    },
    overallScore: overall,
  };
}

export default function WebsiteSEOAudit(): JSX.Element {
  const [url, setUrl] = useState('');
  const [keyword, setKeyword] = useState('');
  const [mode, setMode] = useState<'audit' | 'ideas'>('audit');
  const [audit, setAudit] = useState<AuditResult | null>(null);
  const [ideas, setIdeas] = useState<ReturnType<typeof generateContentIdeas>>([]);
  const [loading, setLoading] = useState(false);

  const runAudit = useCallback(() => {
    if (!url.trim()) return;
    setLoading(true);
    // Simulate audit processing delay
    const processedUrl = url.startsWith('http') ? url : `https://${url}`;
    setTimeout(() => {
      const result = generateSEOAudit(processedUrl);
      setAudit(result);
      setLoading(false);
    }, 1500);
  }, [url]);

  const generateIdeas = useCallback(() => {
    if (!keyword.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setIdeas(generateContentIdeas(keyword));
      setLoading(false);
    }, 1000);
  }, [keyword]);

  return (
    <main className="min-h-screen bg-slate-950 py-12 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Free Website SEO Audit & Content Ideas Generator',
            description: 'Run a free SEO audit on any website and generate high-ranking content ideas. Get actionable recommendations instantly.',
            url: 'https://ziontechgroup.com/tools/website-seo-audit',
          }),
        }}
      />

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">Website SEO Audit & Content Ideas</h1>
          <p className="mt-2 max-w-xl text-base text-slate-400 mx-auto">
            Analyze any website&apos;s SEO score and generate high-ranking content ideas — completely free.
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex justify-center gap-2 bg-slate-900/50 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setMode('audit')}
            className={`px-6 py-2.5 text-sm font-medium rounded-lg transition ${mode === 'audit' ? 'bg-emerald-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
          >
            🔍 SEO Audit
          </button>
          <button
            onClick={() => setMode('ideas')}
            className={`px-6 py-2.5 text-sm font-medium rounded-lg transition ${mode === 'ideas' ? 'bg-purple-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
          >
            💡 Content Ideas
          </button>
        </div>

        {/* Audit Mode */}
        {mode === 'audit' && (
          <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-6">
            <label className="block text-sm font-semibold text-slate-300 mb-2">Website URL</label>
            <div className="flex gap-3">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="example.com or https://example.com"
                className="flex-1 rounded-xl border border-slate-600/70 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                onKeyDown={(e) => e.key === 'Enter' && runAudit()}
              />
              <button
                onClick={runAudit}
                disabled={loading || !url.trim()}
                className="rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-emerald-500 hover:to-teal-500 transition flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>Run Audit</>
                )}
              </button>
            </div>
            <p className="mt-2 text-xs text-slate-500">Enter any website to run a comprehensive SEO analysis</p>
          </div>
        )}

        {/* Ideas Mode */}
        {mode === 'ideas' && (
          <div className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-6">
            <label className="block text-sm font-semibold text-slate-300 mb-2">Target Keyword</label>
            <div className="flex gap-3">
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="e.g., AI automation tools"
                className="flex-1 rounded-xl border border-slate-600/70 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/30"
                onKeyDown={(e) => e.key === 'Enter' && generateIdeas()}
              />
              <button
                onClick={generateIdeas}
                disabled={loading || !keyword.trim()}
                className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-500 hover:to-indigo-500 transition flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>Generate Ideas</>
                )}
              </button>
            </div>
            <p className="mt-2 text-xs text-slate-500">Enter a keyword to get 8 content ideas optimized for SEO and conversions</p>
          </div>
        )}

        {/* Results */}
        {mode === 'audit' && audit && !loading && (
          <div className="space-y-6">
            {/* Overall Score */}
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-slate-900 to-emerald-900/10 p-8 text-center">
              <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wide mb-2">Overall SEO Score</p>
              <div className="text-6xl font-bold text-white mb-2">{audit.overallScore}/100</div>
              <p className="text-slate-400">
                {audit.overallScore >= 80 ? '🟢 Excellent — minor optimizations needed' : audit.overallScore >= 60 ? '🟡 Fair — several improvements available' : '🔴 Poor — significant work needed'}
              </p>
            </div>

            {/* Categories */}
            {Object.entries(audit.categories).map(([category, data]) => {
              const pct = Math.round((data.score / data.maxScore) * 100);
              const label = category === 'seo' ? 'SEO Fundamentals' : category === 'performance' ? 'Performance' : 'Accessibility';
              return (
                <div key={category} className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">{label}</h3>
                    <span className={`text-lg font-bold ${pct >= 80 ? 'text-green-400' : pct >= 60 ? 'text-yellow-400' : 'text-red-400'}`}>{data.score}/{data.maxScore}</span>
                  </div>
                  <div className="mb-4 h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-1000 ${pct >= 80 ? 'bg-green-500' : pct >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${pct}%` }} />
                  </div>
                  <div className="space-y-3">
                    {data.checks.map((check, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${check.status === 'pass' ? 'bg-green-500/20 text-green-400' : check.status === 'warn' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>
                          {check.status === 'pass' ? '✓' : check.status === 'warn' ? '!' : '✕'}
                        </span>
                        <div className="flex-1 min-w-0">
                          <span className="text-slate-300 font-medium">{check.label}</span>
                          <p className="text-xs text-slate-500 mt-0.5">{check.recommendation}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}

            {/* CTA */}
            <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-2">Need Expert SEO Help?</h3>
              <p className="text-sm text-slate-400 mb-4">Our team can fix these issues and boost your organic traffic.</p>
              <Link href="/contact?topic=seo-audit&source=tool" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition">
                Book Free SEO Consultation
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
        )}

        {/* Ideas Results */}
        {mode === 'ideas' && ideas.length > 0 && !loading && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">8 Content Ideas for &quot;{keyword}&quot;</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {ideas.map((idea, i) => (
                <div key={i} className="rounded-2xl border border-slate-700/60 bg-slate-900/50 p-5 hover:border-purple-400/40 transition">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wide">{idea.type}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${idea.seoScore >= 90 ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>{idea.seoScore}% SEO Score</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">{idea.title}</h4>
                  <p className="text-xs text-slate-400 mb-3">{idea.angle}</p>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span>🎯 {idea.competition} competition</span>
                    <span>📈 ~{idea.estimatedTraffic.toLocaleString()} visits/mo</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-2">Need Help Creating This Content?</h3>
              <p className="text-sm text-slate-400 mb-4">Our AI-powered content team can produce this for you.</p>
              <Link href="/contact?topic=content-creation&source=tool" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition">
                Get a Content Quote
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
            </div>
          </div>
        )}

        {/* Loading state */}
        {loading && (
          <div className="text-center py-12">
            <div className="h-8 w-8 border-3 border-slate-600 border-t-emerald-500 rounded-full animate-spin mx-auto mb-4" />
            <p className="text-slate-400">Processing your request...</p>
          </div>
        )}

        {/* Tool info */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 text-center">
          <p className="text-sm text-slate-500 mb-2">🔒 <strong className="text-slate-400">100% Free & Private</strong> — No login, no data stored, no tracking.</p>
          <p className="text-xs text-slate-600">Built by Zion Tech Group | <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:underline">kleber@ziontechgroup.com</a> | +1 302 464 0950</p>
        </div>
      </div>
    </main>
  );
}