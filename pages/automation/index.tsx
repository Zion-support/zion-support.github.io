import type { NextPage } from 'next';
import Head from 'next/head';

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index - Zion Tech Solutions</title>
        <meta name="description" content="Index page" />
      </Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold mb-2">Automation Hub</h1>
        <p className="text-white/70 mb-8">Discover our autonomous, self-healing systems that keep the codebase evergreen. Powered by scheduled cloud functions — no GitHub Actions required.</p>
                         <ul className="space-y-4">
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Component Docs Generator</h2>
            <p className="text-white/70">Scans UI components and publishes props documentation.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/component-docs-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Content Gap Analyzer</h2>
            <p className="text-white/70">Audits pages for content density and meta descriptions.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/content-gap-analyzer" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">SEO Audit</h2>
            <p className="text-white/70">Generates SEO report for all pages and publishes it.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/seo-audit-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">AI Trends Radar</h2>
            <p className="text-white/70">Aggregates trending AI topics into a live report.</p>
            <a className="text-cyan-300 underline" href="/reports/ai-trends" target="_blank" rel="noopener">Open Report</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Website Search Index</h2>
            <p className="text-white/70">Regenerates the full site search index.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/website-search-index-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Dependency Health Radar</h2>
            <p className="text-white/70">Audits npm dependencies and publishes a live report to /reports/deps.</p>
            <div className="flex items-center gap-4 mt-2">
              <a className="text-cyan-300 underline" href="/.netlify/functions/dependency-health-radar-runner" target="_blank" rel="noopener">Trigger / View</a>
              <a className="text-cyan-300 underline" href="/reports/deps" target="_blank" rel="noopener">Open Report</a>
            </div>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Meta Accelerator</h2>
            <p className="text-white/70">Refreshes docs, README, knowledge graph, and TODOs every 2 minutes; commits to main.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/meta-accelerator" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Homepage Updates</h2>
            <p className="text-white/70">Keeps the homepage fresh and the sitemap up to date.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/schedule-homepage" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Site Health</h2>
            <p className="text-white/70">Link checks, image optimization, and sitemap refresh.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/schedule-site-health" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Content Indexing</h2>
            <p className="text-white/70">Docs and search index regeneration for instant discovery.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/schedule-content-index" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Knowledge Graph</h2>
            <p className="text-white/70">Repository knowledge graph and radar metrics.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/schedule-knowledge-graph" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">SEO Audit Runner</h2>
            <p className="text-white/70">Analyzes SEO and writes reports every 30 minutes.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/seo-audit-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">AI Trends Radar</h2>
            <p className="text-white/70">Fetches and summarizes AI trends periodically.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/ai-trends-radar-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">UI Beautifier</h2>
            <p className="text-white/70">Automatically improves UI polish and consistency.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/ui-beautifier-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Front Enhancer</h2>
            <p className="text-white/70">Curates and injects new frontpage promos periodically.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/front-enhancer" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Fast Front Promoter</h2>
            <p className="text-white/70">Runs every 15 minutes to refresh homepage and front content, then syncs to main.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/fast-front-promoter" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Marketing & Features Promo</h2>
            <p className="text-white/70">Generates and applies homepage promos and deep links.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/marketing-and-features-promo" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Fast Orchestrator</h2>
            <p className="text-white/70">Runs every minute to refresh front and homepage content; commits and pushes to main.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/fast-orchestrator" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Continuous Orchestrator</h2>
            <p className="text-white/70">Runs every 5 minutes, including sitemap and UI futurizer steps.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/continuous-orchestrator" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Features/Capabilities/Benefits Advertiser</h2>
            <p className="text-white/70">Continuously advertises new features with deep links on the front pages.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/features-capabilities-benefits-advertiser" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Hyper Front Index Accelerator</h2>
            <p className="text-white/70">Ultra-fast front index futurizer and directory builder.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/hyper-front-index-accelerator" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Auto Reports Suite</h2>
            <p className="text-white/70">SEO audit, search index, AI trends, docs and repo intel.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/auto-reports-suite" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">AI Changelog Broadcaster</h2>
            <p className="text-white/70">Refreshes AI changelog and newsroom content.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/ai-changelog-broadcaster" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Guardian Ultra</h2>
            <p className="text-white/70">Auto-healing, image optimization, broken-image scanning.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/guardian-ultra" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Newsroom Auto</h2>
            <p className="text-white/70">Regenerates newsroom updates automatically.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/newsroom-auto" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">OG Image Refresh</h2>
            <p className="text-white/70">Regenerates page OG images on a cadence.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/og-image-refresh" target="_blank" rel="noopener">Trigger / View</a>
          </li>

          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Orphan Page Detector</h2>
            <p className="text-white/70">Finds unlinked/orphaned pages and recommends links.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/orphan-page-detector" target="_blank" rel="noopener">Trigger / View</a>
          </li>

          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Content Staleness Auditor</h2>
            <p className="text-white/70">Flags stale content by last git change and suggests refresh.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/content-staleness-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Index;