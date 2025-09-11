export default function AutomationHub() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Automation Hub</title>
        <meta name="description" content="Explore autonomous cloud automations running 24/7." />
      </Head>
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold mb-2">Automation Hub</h1>
        <p className="text-white/70 mb-8">Discover our autonomous, self-healing systems that keep the codebase evergreen. Powered by scheduled cloud functions — no GitHub Actions required.</p>
        <ul className="space-y-4">
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
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Auto Scheduler</h2>
            <p className="text-white/70">Smart time-based runner that chooses and executes the best tasks.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/auto-scheduler" target="_blank" rel="noopener">Trigger / View</a>
          </li>

          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Broken Image Scanner</h2>
            <p className="text-white/70">Finds broken images, optimizes assets, and syncs fixes.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/broken-image-scanner" target="_blank" rel="noopener">Trigger / View</a>
          </li>

          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">SEO Audit Runner</h2>
            <p className="text-white/70">Analyzes pages for title/description issues and writes an HTML report.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/seo-audit-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>

          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">AI Trends Radar</h2>
            <p className="text-white/70">Aggregates trending AI topics into a public report.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/ai-trends-radar-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>

          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Dependency Auto‑Upgrade</h2>
            <p className="text-white/70">Safely bumps minor/patch deps with build verification.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/deps-auto-upgrade-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Component Props Docs</h2>
            <p className="text-white/70">Scans components and publishes props documentation (Markdown + JSON).</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/component-props-docs-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Topics Map</h2>
            <p className="text-white/70">Builds a live topics map from pages and docs; publishes JSON + Markdown.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/topics-map-runner" target="_blank" rel="noopener">Trigger / View</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Internal Link Orchestrator</h2>
            <p className="text-white/70">Crawls internal routes, fixes missing pages, regenerates sitemap and SEO.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/link-scheduler" target="_blank" rel="noopener">Run on Netlify</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Maintenance Scheduler</h2>
            <p className="text-white/70">SaaS, feature marketing, homepage promos, site links and promos.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/maintenance-scheduler" target="_blank" rel="noopener">Run on Netlify</a>
          </li>
          <li className="rounded-lg bg-white/5 border border-white/10 p-5">
            <h2 className="text-xl font-bold">Marketing Scheduler</h2>
            <p className="text-white/70">LinkedIn and Instagram automations via Netlify scheduler.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/marketing-scheduler" target="_blank" rel="noopener">Run on Netlify</a>
=======
            <h2 className="text-xl font-bold">Hyper-Fast Orchestrator</h2>
            <p className="text-white/70">Runs every 3 minutes to refresh homepage/front content and sync to main.</p>
            <a className="text-cyan-300 underline" href="/.netlify/functions/hyper-fast-orchestrator" target="_blank" rel="noopener">Trigger / View</a>          </li>
        </ul>
      </main>
    </div>
  );
}
=======

==============

},
export default Index,

=======},

export default Index,

=======const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Index - Zion Tech Solutions</title>
        <meta name="description" content="Index page" />
      </Head>
      <main>
        <h1>Index</h1>
        <p>This page is under construction.</p>
      </main>
    </div>
  )
},
export default Index,
},

export default Index,;
export default Index,
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======

},
export default Index,

=======
},
export default Index,
},

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/check-fix-push-and-merge-to-main-e7fd
