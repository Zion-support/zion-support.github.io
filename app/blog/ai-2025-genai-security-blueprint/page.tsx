import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'GenAI Security Blueprint 2025: Enterprise-Grade Practices',
  description: 'A concise playbook for securing generative AI systems in production: model, data, prompt, and supply-chain controls.',
};

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-medium mb-4">NEW • Security</div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">GenAI Security Blueprint 2025</h1>
        <p className="text-gray-600 text-lg">Enterprise-grade practices to protect models, data, prompts, and the entire AI supply chain.</p>
      </div>

      <div className="prose prose-lg max-w-none">
        <h2>Executive Summary</h2>
        <p>
          Generative AI delivers step-change productivity but expands the attack surface. This blueprint distills
          practical controls across the lifecycle: development, deployment, and operations.
        </p>

        <h2>Core Control Areas</h2>
        <ul>
          <li><strong>Model & Runtime</strong>: sandboxing, output filters, jailbreak defenses, usage rate limits.</li>
          <li><strong>Data Security</strong>: PII detection/redaction, retrieval allow-lists, row-level access.</li>
          <li><strong>Prompt Security</strong>: input validation, context isolation, signed tool calls.</li>
          <li><strong>Supply Chain</strong>: SBOMs, model provenance, checksum verification, dependency pinning.</li>
          <li><strong>Monitoring</strong>: red team prompts, anomaly detection, audit trails, incident runbooks.</li>
        </ul>

        <h2>Reference Architecture</h2>
        <p>
          A zero-trust, policy-driven gateway fronts all model calls. Retrieval is mediated by a data access layer
          with classification, masking, and consent enforcement. Observability exports structured events for threat
          detection and compliance.
        </p>

        <h2>Checklist</h2>
        <ol>
          <li>Establish a GenAI risk register and security owners.</li>
          <li>Enforce environment isolation and per-app API credentials.</li>
          <li>Implement prompt input/output validation and sensitive data guards.</li>
          <li>Enable abuse/jailbreak detection and model fallback policies.</li>
          <li>Continuously red team prompts and track findings.</li>
        </ol>

        <h2>Get Help</h2>
        <p>
          Need an assessment or implementation support? Our team can help harden your GenAI stack end-to-end.
        </p>
        <p>
          <Link href="/services/ai-security" className="text-blue-600 hover:text-blue-700">Explore AI Security Services →</Link>
        </p>
      </div>
    </div>
  );
}

