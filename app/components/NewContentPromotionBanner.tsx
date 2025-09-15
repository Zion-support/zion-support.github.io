import React from 'react';

const NewContentPromotionBanner: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-purple-700 mb-2">Just published</div>
<<<<<<< HEAD
            <h2 className="text-3xl font-bold text-gray-900 mb-2">AI 2026: Agent Safety Certification</h2>
            <p className="text-lg text-gray-600 max-w-2xl">Structured certification to validate agent safety with scenario suites and governance.</p>
          </div>
          <a href="/blog/ai-2026-agent-safety-certification" className="shrink-0 inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">Read Article →</a>
        </div>
        <div className="mt-6 bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-purple-700 mb-2">Also new</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">AI 2026: Edge Agents On‑Device Inference</h3>
            <p className="text-lg text-gray-600 max-w-2xl">Reliable, private, low‑latency agents with hybrid offload and secure updates.</p>
          </div>
          <a href="/blog/ai-2026-edge-agents-on-device" className="shrink-0 inline-block border border-purple-600 text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50">Explore →</a>
=======
            <h2 className="text-3xl font-bold text-gray-900 mb-2">AI 2026: Real-Time Retrieval Architectures</h2>
            <p className="text-lg text-gray-600 max-w-2xl">Blueprints for sub-200ms RAG: hybrid search, reranking, streaming UX, and SLOs.</p>
          </div>
          <div className="flex gap-3">
            <a href="/blog/ai-2026-real-time-retrieval-architectures" className="shrink-0 inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700">Read Article →</a>
            <a href="/content/ai-2026-autonomous-ops-playbook" className="shrink-0 inline-block border border-purple-600 text-purple-700 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50">Autonomous Ops</a>
          </div>
>>>>>>> feat/new-content-sept15-2025
        </div>
      </div>
    </div>
  );
};

export default NewContentPromotionBanner;
