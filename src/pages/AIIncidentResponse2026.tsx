
const AIIncidentResponse2026: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-5xl mx-auto text-white">
      <h1 className="text-3xl md:text-4xl font-extrabold">AI Incident Response 2026 – Field Handbook</h1>
      <p className="mt-4 text-white/80">
        A pragmatic playbook for preparing, detecting, responding to, and learning from AI/Agent incidents,
        including prompt-injection, model drift, jailbreaking, and unsafe tool use.
      </p>
      <div className="mt-8 space-y-6">
        <section>
          <h2 className="text-2xl font-bold">Core Playbooks</h2>
          <ul className="list-disc pl-6 mt-3 text-white/80 space-y-2">
            <li>Containment, kill-switches, and traffic shaping.</li>
            <li>Forensics: prompt, tool, and data trail collection.</li>
            <li>Post-incident reviews and control hardening.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold">Readiness Checklist</h2>
          <ol className="list-decimal pl-6 mt-3 text-white/80 space-y-2">
            <li>Define severity levels and escalation paths.</li>
            <li>Instrument evaluation gates and anomaly alerts.</li>
            <li>Run quarterly gamedays across critical user journeys.</li>
          </ol>
        </section>
      </div>
    </div>
  );
};

export default AIIncidentResponse2026;