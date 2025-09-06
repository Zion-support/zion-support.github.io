export const metadata = { title: 'AI Services | Zion Tech Group' };

export default function AIPage() {
  return (
    <section>
      <h1 style={{fontSize: 26, fontWeight: 800}}>AI Services</h1>
      <p style={{marginTop: 8, color: '#374151'}}>Ship AI features with confidence: RAG, agents, fine-tuning, evals and MLOps.</p>
      <div style={{display: 'grid', gap: 12, marginTop: 16}}>
        <Item title="Applied AI" details={["RAG over private data", "Task-specific agents", "Vision + speech", "Personalization"]} />
        <Item title="Model Ops" details={["Offline evals", "Safety + guardrails", "Batch + streaming", "Cost controls"]} />
        <Item title="Data & MLOps" details={["Pipelines", "Feature stores", "Vector DBs", "Monitoring + drift"]} />
      </div>
      <Pricing />
    </section>
  );
}

    </div>
  );
}

function AIServiceCard({ title, description, features, price, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div style={{border: '1px solid #e5e7eb', borderRadius: 12, padding: 16}}>
      <h3 style={{fontWeight: 700}}>{title}</h3>
      <ul style={{paddingLeft: 18, color: '#4b5563'}}>{details.map(d => (<li key={d} style={{listStyle: 'disc'}}>{d}</li>))}</ul>
    </div>
  );
}

function Pricing() {
  return (
    <div style={{marginTop: 20, display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))'}}>
      <Plan name="AI Discovery" price="$5k–$12k" features={["2–3 weeks", "Use-case design", "Tech selection", "Roadmap"]} />
      <Plan name="Pilot" price="$15k–$45k" features={["4–8 weeks", "RAG/agent MVP", "Evals + safety", "Dashboards"]} />
      <Plan name="Production" price="$50k+" features={["Hardened infra", "Monitoring", "SLAs", "Cost optimization"]} />
    </div>
  );
}

function Plan({ name, price, features }: { name: string; price: string; features: string[] }) {
  return (
    <div style={{border: '1px solid #e5e7eb', borderRadius: 12, padding: 16}}>
      <h4 style={{fontWeight: 700}}>{name}</h4>
      <div style={{color: '#111827', fontWeight: 800, marginTop: 4}}>{price}</div>
      <ul style={{paddingLeft: 18, color: '#4b5563', marginTop: 8}}>{features.map(f => (<li key={f} style={{listStyle: 'disc'}}>{f}</li>))}</ul>
      <a href="https://ziontechgroup.com" style={{display: 'inline-block', marginTop: 12, padding: '8px 16px', backgroundColor: '#3b82f6', color: 'white', textDecoration: 'none', borderRadius: 6}}>Get Started</a>
    </div>
  );
}
