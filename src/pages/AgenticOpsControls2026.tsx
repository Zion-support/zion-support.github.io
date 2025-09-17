
const AgenticOpsControls2026: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto text-white">
      <h1 className="text-3xl md:text-4xl font-extrabold">Agentic Ops Controls 2026 – Control Plane Patterns</h1>
      <p className="mt-4 text-white/80">
        Opinionated patterns for guardrails, approvals, and rollback in agentic production systems,
        aligned to SLOs and business risk tiers.
      </p>
      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-2xl font-bold">Control Families</h2>
          <ul className="list-disc pl-6 mt-3 text-white/80 space-y-2">
            <li>Preflight checks, canaries, post-release monitors.</li>
            <li>Scoped tool permissions and budget controls.</li>
            <li>Human-in-the-loop and risk-based approvals.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Deploy Checklist</h2>
          <ol className="list-decimal pl-6 mt-3 text-white/80 space-y-2">
            <li>Define agent SLOs and error budgets.</li>
            <li>Map controls to critical tasks and tools.</li>
            <li>Codify rollback + freeze with exec visibility.</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default AgenticOpsControls2026;

