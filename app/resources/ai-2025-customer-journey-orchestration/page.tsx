import React from 'react';

export const metadata = {
  title: 'Customer Journey Orchestration 2025: Playbooks and Templates',
  description: 'Free resource: event models, prompt templates, evaluators, and measurement plans to operationalize AI-powered customer journey orchestration.',
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Customer Journey Orchestration 2025</h1>
          <p className="text-lg opacity-90">
            A practical starter kit with schemas, prompts, and evaluators to coordinate journeys across marketing,
            sales, and support — maximizing conversion and retention.
          </p>
        </div>
      </section>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold mb-3">Whats Inside</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Event schema and journey state machine examples</li>
            <li>Prompt templates for email, chat, and in-app guidance</li>
            <li>Evaluator rubrics for safety, tone, and outcomes</li>
            <li>Measurement plan with KPIs and dashboards</li>
          </ul>
          <a href="#" className="inline-block mt-6 bg-white border border-gray-300 px-4 py-2 rounded-lg">Download PDF</a>
        </div>
      </main>
    </div>
  );
}

