export const metadata = { title: 'Micro SaaS Development | Zion Tech Group' };

export default function MicroSaaSPage() {
  return (
    <section>
      <h1 style={{fontSize: 26, fontWeight: 800}}>Micro SaaS Development</h1>
      <p style={{marginTop: 8, color: '#374151'}}>We design, build, launch and operate revenue-generating micro SaaS products end-to-end.</p>
      <div style={{display: 'grid', gap: 12, marginTop: 16}}>
        <Item title="Core features" details={["Multi-tenant architecture", "Auth (email, OAuth)", "Billing (Stripe)", "Admin + analytics", "In-app onboarding"]} />
        <Item title="Growth stack" details={["SEO-ready marketing site", "Blog + docs", "Email campaigns", "Referral + affiliates"]} />
        <Item title="Ops & reliability" details={["CI/CD", "Observability", "Error budgets", "SLOs", "On-call setup"]} />
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
      <Plan name="MVP Sprint" price="$8k–$20k" features={["2–4 weeks", "MVP scope", "Stripe billing", "Basic analytics"]} />
      <Plan name="Growth" price="$20k–$60k" features={["6–10 weeks", "SEO + content", "CRM + email", "Observability"]} />
      <Plan name="Scale" price="$60k+" features={["Custom roadmap", "SRE + security", "Multi-region", "SLAs"]} />
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
