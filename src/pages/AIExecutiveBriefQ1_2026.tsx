import React from 'react';

const AIExecutiveBriefQ1_2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <section className="py-28 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-white mb-6">
            AI Executive Brief • Q1 2026
          </h1>
          <p className="text-xl text-indigo-200 mb-10">
            What leaders need to know now about agentic systems, governance, and ROI.
          </p>
        </div>
        <article className="max-w-3xl mx-auto text-left bg-white/5 backdrop-blur rounded-2xl p-8 text-indigo-50 leading-relaxed">
          <h2 className="text-2xl font-semibold mb-4 text-white">Highlights</h2>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Agentic workflows reduce cycle time by 35–60% across Ops and GTM.</li>
            <li>Policy + evaluation layers are mandatory for safe autonomy.</li>
            <li>RAG maturity: retrievers beat bigger models when data is curated.</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4 text-white">Leader Checklist</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Define success metrics tied to a P&L owner.</li>
            <li>Stand up a lightweight AI governance forum.</li>
            <li>Instrument evaluation harnesses before scaling use-cases.</li>
          </ol>
        </article>
      </section>
    </div>
  );
};

export default AIExecutiveBriefQ1_2026;