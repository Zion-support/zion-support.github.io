import React from 'react';

export default function EdgeAIInManufacturing2025() {
  return (
    <div className='min-h-screen'>
      <article className='prose prose-lg max-w-3xl mx-auto py-12'>
        <h1>Edge AI in Manufacturing 2025: Faster Decisions, Lower Costs</h1>
        <p>
          Manufacturers are moving model inference to the edge to unlock faster
          decisions, reduce bandwidth costs, and improve resilience. In 2025,
          the winning architectures combine compact transformer variants with
          on-device vector databases and lightweight observability.
        </p>
        <h2>Reference Architecture</h2>
        <ul>
          <li>Sensor ingestion via OPC UA and MQTT with local buffering</li>
          <li>On-device embedding and anomaly detection for sub-100ms response</li>
          <li>Periodic cloud sync for model refresh and fleet analytics</li>
          <li>Guardrails: drift alerts, fallback rules, and explainability logs</li>
        </ul>
        <h2>Outcomes</h2>
        <p>
          Teams report 20–40% reduction in unplanned downtime and up to 60%
          savings on bandwidth by filtering at the edge.
        </p>
      </article>
    </div>
  );
}

