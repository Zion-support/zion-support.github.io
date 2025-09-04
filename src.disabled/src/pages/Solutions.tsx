import React from 'react';

export default function Solutions() {
  const items = [
    {
      title: 'AI Readiness & Roadmap',
      body: 'Assess data maturity, identify high-ROI AI use-cases, and define an execution roadmap with measurable KPIs.'
    },
    {
      title: 'Cloud Cost & Performance Optimization',
      body: '30–50% cost reduction initiatives across AWS/Azure/GCP with IaC, autoscaling, and robust observability.'
    },
    {
      title: 'Zero-Trust Security & Compliance',
      body: 'ZTNA rollout, IAM hardening, continuous threat hunting, SOC2/ISO27001/PCI readiness and audits.'
    }
  ];
  return (
    <div className="space-y-4">
      <h2>Solutions</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map(s => (
          <div key={s.title} className="card">
            <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
            <p className="text-sm text-gray-700">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

