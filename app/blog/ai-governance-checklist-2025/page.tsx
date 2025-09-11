export default function AIGovernanceChecklist2025Page() {
  return (
    <article className='prose prose-blue max-w-none'>
      <h1>AI Governance Checklist 2025: Operationalize Policy With Evals</h1>
      <p className='text-gray-500'>Published on 2025-09-11 • 5 min read</p>
      <p>
        Move beyond slideware to a concrete operating model. This checklist helps you translate
        high-level policy into day-to-day decisions across product, data, and engineering.
      </p>
      <h2>Foundations</h2>
      <ul>
        <li>Risk tiering for use cases and models with clear approval paths.</li>
        <li>Data governance: PII inventories, retention, lineage, and access controls.</li>
        <li>Model cards and change management with rollback plans.</li>
      </ul>
      <h2>Controls and guardrails</h2>
      <ul>
        <li>Pre-deployment evals for safety, bias, quality, and cost.</li>
        <li>Runtime protections: allowlists/denylists, rate limits, and audit logs.</li>
        <li>Human-in-the-loop reviews for high-risk actions and escalations.</li>
      </ul>
      <h2>Monitoring and incident response</h2>
      <ul>
        <li>Golden tasks and drift alerts; on-call rotations for AI incidents.</li>
        <li>Customer-visible status pages and post-incident reviews.</li>
        <li>Quarterly program reviews with KPIs and budget tracking.</li>
      </ul>
      <p>
        We help enterprises stand up pragmatic governance that accelerates delivery while managing risk.
      </p>
    </article>
  );
}

