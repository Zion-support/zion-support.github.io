import React from 'react';

const AgenticProductPlaybooks: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 text-gray-900">
      <nav className="mb-6">
        <a href="/" className="text-blue-600 hover:text-blue-700">← Back to Home</a>
      </nav>
      <article className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Agentic Product Playbooks</h1>
        <p className="text-gray-700 mb-6">Practical blueprints for shipping agentic workflows into production across support, sales, ops, and engineering.</p>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">What's Inside</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Task planning and tool-use orchestration patterns</li>
            <li>Retrieval-augmented generation templates</li>
            <li>Evaluation harness and safety gates</li>
            <li>Latency, reliability, and cost controls</li>
          </ul>
        </section>
      </article>
    </div>
  );
};

export default AgenticProductPlaybooks;

