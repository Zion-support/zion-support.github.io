export const metadata = { title: 'IT Services | Zion Tech Group' };

export default function ITServicesPage() {
  return (
    <section>
      <h1 style={{fontSize: 26, fontWeight: 800}}>IT Services</h1>
      <p style={{marginTop: 8, color: '#374151'}}>Cloud, DevOps, SRE and security services engineered for uptime and efficiency.</p>
      <div style={{display: 'grid', gap: 12, marginTop: 16}}>
        <Item title="Cloud & Infra" details={["AWS/GCP/Azure", "Kubernetes", "Serverless", "IaC (Terraform)"]} />
        <Item title="DevOps & SRE" details={["CI/CD", "Observability", "Autoscaling", "Chaos testing"]} />
        <Item title="Security" details={["Hardening", "Zero Trust", "Vuln mgmt", "Compliance"]} />
      </div>
      <Pricing />
    </section>
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
      <Plan name="Assessment" price="$4k–$10k" features={["2 weeks", "Cloud review", "Security audit", "Roadmap"]} />
      <Plan name="Implementation" price="$15k–$50k" features={["4–8 weeks", "Infra as code", "CI/CD", "Monitoring"]} />
      <Plan name="Managed" price="$5k+/mo" features={["24/7 on-call", "SLO mgmt", "Cost optimization", "Reports"]} />
    </div>
  );
}

function Plan({ name, price, features }: { name: string; price: string; features: string[] }) {
  return (
    <div style={{border: '1px solid #e5e7eb', borderRadius: 12, padding: 16}}>
      <h4 style={{fontWeight: 700}}>{name}</h4>
      <div style={{color: '#111827', fontWeight: 800, marginTop: 4}}>{price}</div>
      <ul style={{paddingLeft: 18, color: '#4b5563', marginTop: 8}}>{features.map(f => (<li key={f} style={{listStyle: 'disc'}}>{f}</li>))}</ul>
      <a href="https://ziontechgroup.com" style={{display: 'inline-block', marginTop: 10, padding: '8px 12px', background: '#111827', color: '#fff', borderRadius: 8}}>Start assessment</a>
    </div>
  );
}

