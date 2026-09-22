import React from 'react';

export const metadata = {
  title: 'Zion App Network — 630+ Free AI & IT Tools | Zion Tech Group',
  description:
    'Explore the Zion Tech Group app network: 630+ free AI, DevOps, FinOps, security and industry tools — all interlinked and open. Try our live apps and start with a $99 Discovery.',
};

const featured = [
  { name: 'Zion RAG Platform', url: 'https://rag.ziontechgroup.com', desc: 'Retrieval-augmented generation infrastructure as a service.' },
  { name: 'AI Agent Orchestrator', url: 'https://orchestrator.ziontechgroup.com', desc: 'Multi-agent AI orchestration platform.' },
  { name: 'LLM Gateway', url: 'https://ziontechgroup.com/llm-gateway/', desc: 'Smart model routing, caching and failover.' },
  { name: 'Prompt Shield', url: 'https://ziontechgroup.com/prompt-shield/', desc: 'LLM security testing and prompt-injection defense.' },
  { name: 'Model Observatory', url: 'https://ziontechgroup.com/model-observatory/', desc: 'ML/LLM observability, drift detection and cost telemetry.' },
  { name: 'LLM Cost Calculator', url: 'https://ziontechgroup.com/llm-cost-calculator/', desc: 'Estimate token spend across models.' },
  { name: 'AI ROI Calculator', url: 'https://ziontechgroup.com/ai-roi-calculator/', desc: 'Estimate payback and TCO of AI projects.' },
  { name: 'FinOps Spend Analyzer', url: 'https://ziontechgroup.com/finops-spend-analyzer/', desc: 'Analyze and optimize cloud spend.' },
  { name: 'Secrets Sentinel', url: 'https://ziontechgroup.com/secrets-sentinel/', desc: 'Secret scanning and leak response.' },
  { name: 'Synthetic Data Lab', url: 'https://ziontechgroup.com/synthetic-data-lab/', desc: 'Privacy-safe synthetic data generation.' },
  { name: 'Quantum Safe Migrator', url: 'https://ziontechgroup.com/quantum-safe-migrator/', desc: 'Post-quantum cryptography readiness.' },
  { name: 'AI Phishing Simulator', url: 'https://ziontechgroup.com/ai-phishing-simulator/', desc: 'Security awareness training with safe simulations.' },
];

const categories = [
  { name: 'AI Agents & Orchestration', url: 'https://github.com/Zion-support/zion-network/blob/main/network/ai-agents-orchestration.md' },
  { name: 'LLM, Prompts & RAG', url: 'https://github.com/Zion-support/zion-network/blob/main/network/llm-prompts-rag.md' },
  { name: 'Data & Analytics', url: 'https://github.com/Zion-support/zion-network/blob/main/network/data-analytics.md' },
  { name: 'Cost, FinOps & Cloud', url: 'https://github.com/Zion-support/zion-network/blob/main/network/cost-finops-cloud.md' },
  { name: 'Security & Compliance', url: 'https://github.com/Zion-support/zion-network/blob/main/network/security-compliance.md' },
  { name: 'Business Tools & Calculators', url: 'https://github.com/Zion-support/zion-network/blob/main/network/business-tools-calculators.md' },
  { name: 'Content & Marketing', url: 'https://github.com/Zion-support/zion-network/blob/main/network/content-marketing.md' },
  { name: 'Industry Platforms', url: 'https://github.com/Zion-support/zion-network/blob/main/network/industry-platforms.md' },
  { name: 'Dev & Ops Tools', url: 'https://github.com/Zion-support/zion-network/blob/main/network/dev-ops-tools.md' },
  { name: 'Field & City Sites', url: 'https://github.com/Zion-support/zion-network/blob/main/network/field-city-sites.md' },
];

export default function AppsNetworkPage() {
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui, sans-serif', color: '#0f172a' }}>
      <header style={{ marginBottom: 40 }}>
        <h1 style={{ fontSize: 36, marginBottom: 12 }}>The Zion App Network</h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: '#334155' }}>
          Zion Tech Group builds and operates <strong>630+ interconnected apps and sites</strong> — free AI tools,
          DevOps utilities, FinOps calculators, security scanners and industry platforms. Every app links into the
          network, so you can move from discovery to production without leaving the ecosystem.
        </p>
      </header>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16 }}>Featured live apps</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {featured.map((app) => (
            <a
              key={app.name}
              href={app.url}
              style={{ display: 'block', border: '1px solid #e2e8f0', borderRadius: 12, padding: 16, textDecoration: 'none', color: 'inherit' }}
            >
              <strong style={{ color: '#1d4ed8' }}>{app.name}</strong>
              <p style={{ margin: '8px 0 0', fontSize: 14, color: '#475569' }}>{app.desc}</p>
            </a>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 16 }}>Browse by category</h2>
        <ul style={{ lineHeight: 2, paddingLeft: 20 }}>
          {categories.map((c) => (
            <li key={c.name}>
              <a href={c.url} style={{ color: '#1d4ed8' }}>{c.name}</a>
            </li>
          ))}
        </ul>
        <p style={{ color: '#475569' }}>
          Full index:{' '}
          <a href="https://github.com/Zion-support/zion-network/blob/main/APPS_NETWORK.md" style={{ color: '#1d4ed8' }}>
            Zion App Network — Master Index
          </a>{' '}
          · <a href="https://zion-support.github.io/zion-status/" style={{ color: '#1d4ed8' }}>Status</a>{' '}
          · <a href="https://zion-support.github.io/zion-portal/" style={{ color: '#1d4ed8' }}>Portal</a>
        </p>
      </section>

      <section style={{ background: '#f1f5f9', borderRadius: 12, padding: 24 }}>
        <h2 style={{ fontSize: 24, marginTop: 0 }}>Need these capabilities in your business?</h2>
        <p style={{ lineHeight: 1.6, color: '#334155' }}>
          Every app in the network started as a solution to a real client problem. Start with a{' '}
          <strong>$99 Discovery</strong> — one process, one report, one 30-minute session — and we will scope which
          of these tools (or a custom build) pays back fastest for you.
        </p>
        <p>
          <a href="https://ziontechgroup.com/en/plans/" style={{ color: '#1d4ed8', fontWeight: 600 }}>See plans</a>
          {' · '}
          <a href="https://ziontechgroup.com/discovery/" style={{ color: '#1d4ed8', fontWeight: 600 }}>Book a Discovery</a>
        </p>
      </section>
    </main>
  );
}
