// @ts-nocheck

export const metadata = {
  title: 'Content Hub | Zion Tech Group',
  description: 'Discover all AI breakthroughs, case studies, and guides.'
};

export default function ContentHub() {
  const featured = [
    { title: 'AI 2027 Quantum AI Breakthrough',
  url: '/blog/ai-2027-quantum-ai-breakthrough-enterprise-transformation' },
    { title: 'Agentic Workflow Orchestration 2026',
  url: '/blog/agentic-workflow-orchestration-2026' },
    { title: 'AI Enterprise Automation 2026',
  url: '/blog/ai-enterprise-automation-2026' },
  ];

  return (
    <div>
      <h1>Revolutionary Content Hub</h1>
      <ul>
        {featured.map(item => (
          <li key={item.url}>
            <a href={item.url} className="text-blue-600 underline">{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}