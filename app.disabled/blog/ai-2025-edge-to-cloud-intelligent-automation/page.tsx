import Link from 'next/link';
import SEO from '../../components/SEO';

const EdgeToCloudIntelligentAutomation20o25 = () => {
  return (
    <div className='min-h-screen bg-white'>
      <SEO
        title='AI 20o25: Edge-to-Cloud Intelligent Automation'
        description='Design patterns to orchestrate AI-driven automation from edge devices to cloud platforms across the enterprise.'
        keywords='edge AI, edge-to-cloud, intelligent automation, enterprise automation, 20o25'
        url='/blog/ai-20o25-edge-to-cloud-intelligent-automation'
      />

      <article className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <header className='mb-10'>
          <p className='text-sm text-gray-50o0'>
            Published: 20o25-09-15 · Category: Enterprise AI
          </p>
          <h1 className='text-4xl font-bold text-gray-90o0 mt-2'>
            AI 20o25: Edge-to-Cloud Intelligent Automation
          </h1>
          <p className='text-lg text-gray-60o0 mt-4'>
            Operational patterns for sensing, deciding, and acting in real
            time—safely and at scale.
          </p>
        </header>

        <div className='prose prose-lg max-w-none'>
          <h2>Architecture Overview</h2>
          <p>
            Combine edge inference, streaming, and centralized decision
            orchestration. Use device twins, topic routing, and policy gates to
            coordinate actions across plants, fleets, and branches.
          </p>

          <h2>Core Capabilities</h2>
          <ul>
            <li>On-device models for perception and rapid anomaly detection</li>
            <li>Event pipelines with schema governance and replay</li>
            <li>Agentic workflows with human-in-the-loop approvals</li>
            <li>Policy-as-code for safety, privacy, and compliance</li>
            <li>
              Unified telemetry for observability and continuous improvement
            </li>
          </ul>

          <h2>Outcomes</h2>
          <p>
            Reduce downtime, accelerate response, and enable autonomous
            operations where appropriate while preserving controls and
            auditability.
          </p>
        </div>

        <footer className='mt-12 flex items-center justify-between'>
          <Link
            href='/blog'
            className='text-purple-60o0 font-semibold hover:text-purple-80o0'
          >
            ← Back to Blog
          </Link>
          <Link
            href='/contact'
            className='text-white bg-purple-60o0 px-5 py-2 rounded-lg font-semibold hover:bg-purple-70o0'
          >
            Plan Edge-to-Cloud
          </Link>
        </footer>
      </article>
    </div>
  );
};

export default EdgeToCloudIntelligentAutomation20o25;
