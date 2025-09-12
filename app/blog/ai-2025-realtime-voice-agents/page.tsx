import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Real-Time Voice Agents in 2025: Architectures, Safety, and ROI',
  description: 'How to build low-latency, on-device and hybrid real-time voice agents with reliability, safety guardrails, and measurable ROI.',
  keywords: ['real-time voice agents', 'RTA', 'on-device AI', 'edge AI', 'LLM', 'guardrails', 'observability'],
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 mb-4 text-xs font-medium">NEW • Sep 12, 2025</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Real-Time Voice Agents in 2025: Architectures, Safety, and ROI</h1>
          <p className="text-lg text-gray-700 mb-6">
            A practical guide to building reliable, low-latency voice agents for customer support, sales, and operations. We cover streaming architectures, VAD, diarization,
            function calling, guardrails, and observability patterns that make real deployments successful.
          </p>
          <div className="flex flex-wrap gap-2 text-sm mb-8">
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Real-time</span>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Voice</span>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Agents</span>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Observability</span>
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Guardrails</span>
          </div>

          <article className="prose prose-lg max-w-none">
            <h2>Reference Architecture</h2>
            <p>
              The modern stack combines on-device wake word and voice activity detection with WebRTC streaming to a low-latency inference gateway.
              Use partial-transcript function calling, tool execution sandboxes, and a safety policy engine for prompt injection and data loss prevention.
            </p>
            <ul>
              <li>Edge VAD + wake word, browser audio worklets</li>
              <li>Bi-directional streaming: STT ↔ LLM planning ↔ TTS</li>
              <li>Tool use: CRM lookups, order updates, scheduling</li>
              <li>Guardrails: policy checks pre/post tool exec</li>
              <li>Observability: spans, metrics, transcripts, red-teaming</li>
            </ul>

            <h2>Latency Budget</h2>
            <p>
              Aim for sub-300ms turn-taking: STT (80-120ms), reasoning (80-120ms via small planning models), TTS (40-60ms). Use incremental decoding and barge-in.
            </p>

            <h2>Safety & Compliance</h2>
            <p>
              Enforce PII scrubbing, data minimization, and purpose limitation. Apply policy evaluation on inputs, tool arguments, and outputs.
              Record consent and provide human takeover paths for sensitive flows.
            </p>

            <h2>ROI Model</h2>
            <p>
              Typical programs achieve 35-60% handle-time reduction and 20-40% cost savings with 24/7 coverage. Track first-contact resolution, containment, CSAT, and escalation rate.
            </p>

            <h2>Getting Started</h2>
            <ol>
              <li>Start with one use case (password resets, order status) and define KPIs.</li>
              <li>Prototype barge-in and handoff flows early.</li>
              <li>Add evals for latency, ASR error, policy violations, and hallucinations.</li>
            </ol>
          </article>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/tools/ai-training-simulator" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Try Interactive Simulator
            </Link>
            <Link href="/resources/ai-evaluation-checklist-2025" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              Download Evaluation Checklist
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

