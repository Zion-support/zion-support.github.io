import React from 'react';

export const metadata = {
  title: 'AI Risk Register: Practical Framework for Managing AI Risks',
  description: 'A pragmatic, production-ready risk register for AI systems covering model, data, privacy, security, ethics, and operations.',
};

export default function AIRiskRegisterPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12 py-12 bg-gradient-to-br from-red-50 to-orange-50">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          AI Risk Register: Practical Framework for Managing AI Risks
        </h1>
        <div className="text-gray-600">September 29, 2025 • 10 min read • AI Reliability</div>
      </div>

      <div className="max-w-3xl mx-auto px-4 prose prose-lg">
        <p>
          AI systems introduce new categories of risks across data, models, privacy, security, ethics, and operations. A
          pragmatic risk register makes these risks explicit, measurable, and monitored continuously across the lifecycle.
        </p>

        <h2>Risk Categories</h2>
        <ul>
          <li>Model: drift, bias, hallucination, prompt injection, jailbreaks</li>
          <li>Data: PII leakage, freshness, lineage, governance, poisoning</li>
          <li>Security: supply chain, dependency CVEs, key management, exfiltration</li>
          <li>Privacy & Compliance: GDPR/CCPA, consent, retention, auditability</li>
          <li>Safety & Ethics: harmful content, misinformation, fairness</li>
          <li>Operations: SLOs, cost runaways, capacity planning, incident response</li>
        </ul>

        <h2>Risk Register Template</h2>
        <pre>
{`id,category,description,severity,likelihood,owner,mitigations,monitoring
RR-001,Model,Prompt injection via tools,High,Medium,ML Eng,Tool sandboxing; allowlist; signature checks,Traffic anomaly; tool call audit
RR-002,Data,PII leakage in chat history,High,Low,Security,PII redaction; vault storage; TTL purge,DLP scans; retention jobs
RR-003,Ops,Unbounded token usage cost,Medium,Medium,Platform,Token budgets; caching; tier caps,Cost dashboards; budget alerts
`}
        </pre>

        <h2>Implementation Patterns</h2>
        <ol>
          <li>Define SLOs for latency, reliability, and cost per transaction.</li>
          <li>Introduce policy-as-code guardrails for inputs, tools, and outputs.</li>
          <li>Instrument tracing with redaction and add per-tenant budgets.</li>
          <li>Automate drift detection and evaluate on curated test suites weekly.</li>
        </ol>

        <div className="my-8 p-4 rounded-xl bg-yellow-50 border border-yellow-200">
          <strong>Download:</strong> Ask us for an exportable CSV/JSON risk register tailored to your stack.
        </div>

        <p>
          Need help operationalizing AI risk? Our team implements end-to-end governance, monitoring, and incident response
          for regulated industries.
        </p>
      </div>
    </div>
  );
}

