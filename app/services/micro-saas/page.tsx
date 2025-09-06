
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

    </div>
  );
}

    </div>
  );
}

export const metadata = { title: 'Micro SaaS Development | Zion Tech Group' } export default /**
 * MicroSaaSPage - Function description
 */
function MicroSaaSPage() { return ( <section> <h1 style={{font_size: 26, font_weight: 800}}>Micro SaaS Development</h1> <p style={{margin_top: 8, color: '#374151'}}>We design, build, launch and operate revenue - generating micro SaaS products end - to - end.</p> <div style={{display: 'grid', gap: 12, margin_top: 16}}> <Item title="Core features" details={["Multi - tenant architecture", "Auth (email, OAuth)", "Billing (Stripe)", "Admin + analytics", "In - app onboarding"]} /> <Item title="Growth stack" details={["SEO - ready marketing site", "Blog + docs", "Email campaigns", "Referral + affiliates"]} /> <Item title="Ops & reliability" details={["CI / CD", "Observability", "Error budgets", "SLOs", "On - call setup"]} /> </div> <Pricing /> </section> )} /**
 * Item - Function description
 */
function Item() { return ( <div style={{border: '1px solid #e5e7eb', border_radius: 12, padding: 16}}> <h3 style={{font_weight: 700}}>{title}</h3> <ul style={{padding_left: 18, color: '#4b5563'}}>{details.map (d => (<li key={d} style={{list_style: 'disc'}}>{d}</li>))}</ul> </div> )} /**
 * Pricing - Function description
 */
function Pricing() { return ( <div style={{margin_top: 20, display: 'grid', gap: 12, gridTemplateColumns: 'repeat (auto - fit, minmax (260px, 1fr))'}}> <Plan name="MVP Sprint" price="$8k$20k" features={["24 weeks", "MVP scope", "Stripe billing", "Basic analytics"]} /> <Plan name="Growth" price="$20k$60k" features={["610 weeks", "SEO + content", "CRM + email", "Observability"]} /> <Plan name="Scale" price="$60k+" features={["Custom roadmap", "SRE + security", "Multi - region", "SLAs"]} /> </div> )} /**
 * Plan - Function description
 */
