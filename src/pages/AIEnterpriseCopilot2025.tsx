import React from 'react';

export default function AIEnterpriseCopilot2025(): JSX.Element {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <div className="inline-block px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full text-sm font-semibold mb-4">
          NEW • 2025
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          AI Enterprise Copilot 2025
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          A next-generation AI copilot that accelerates decision-making, automates workflows, and augments teams across your enterprise.
        </p>
      </div>

      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white rounded-xl p-6 shadow">
          <div className="text-3xl mb-3">⚙️</div>
          <h3 className="text-xl font-semibold mb-2">Process Automation</h3>
          <p className="text-gray-600">Automate repetitive tasks with guardrails, approvals, and audit trails built-in.</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow">
          <div className="text-3xl mb-3">📊</div>
          <h3 className="text-xl font-semibold mb-2">Decision Intelligence</h3>
          <p className="text-gray-600">Surface insights from data silos with explainable recommendations and scenario planning.</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow">
          <div className="text-3xl mb-3">🔒</div>
          <h3 className="text-xl font-semibold mb-2">Enterprise-Grade Security</h3>
          <p className="text-gray-600">Privacy-first architecture with role-based access, redaction, and SOC2-ready controls.</p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Outcomes</h2>
        <ul className="grid md:grid-cols-2 gap-3 text-gray-700">
          <li>• 40-60% reduction in manual workload</li>
          <li>• 2-4x faster decision cycles</li>
          <li>• Consistent quality with embedded policies</li>
          <li>• Measurable ROI tracked to OKRs</li>
        </ul>
      </section>

      <div className="text-center">
        <a href="/contact" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 font-semibold">
          Book a Demo
        </a>
      </div>
    </main>
  );
}

