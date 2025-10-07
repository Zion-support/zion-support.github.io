// @ts-nocheck

export const metadata = {
  title: 'Content Hub | Zion Tech Group',
  description: 'Discover all AI breakthroughs, case studies, and guides.',
};

export default function ContentHub() {
  const featured = [
    {
      title: 'AI 2027 Quantum AI Breakthrough',
      url: '/blog/ai-2027-quantum-ai-breakthrough-enterprise-transformation',
    },
    {
      title: 'Agentic Workflow Orchestration 2026',
      url: '/blog/agentic-workflow-orchestration-2026',
    },
    {
      title: 'AI Enterprise Automation 2026',
      url: '/blog/ai-enterprise-automation-2026',
    },
  ];

  return (
    <div className='max-w-6xl mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-6'>Revolutionary Content Hub</h1>
      <ul className='list-disc pl-6 space-y-2'>
        {featured.map(item => (
          <li key={item.url}>
            <a href={item.url} className='text-blue-600 underline'>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  }
