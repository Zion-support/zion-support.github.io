
export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'End-to-end micro SaaS development with billing, auth, analytics, and growth features. From MVP to scale.'
};

export default function MicroSaaSPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro SaaS Development</h1>
      <p className="text-xl text-gray-600 mb-12">We design, build, launch and operate revenue-generating micro SaaS products end-to-end.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Item 
          title="Core Features" 
          details={[
            "Multi-tenant architecture",
            "Auth (email, OAuth)",
            "Billing (Stripe)",
            "Admin + analytics",
            "In-app onboarding"
          ]} 
        />
        <Item 
          title="Growth Stack" 
          details={[
            "SEO-ready marketing site",
            "Blog + docs",
            "Email campaigns",
            "Referral + affiliates"
          ]} 
        />
        <Item 
          title="Ops & Reliability" 
          details={[
            "CI/CD",
            "Observability",
            "Error budgets",
            "SLOs",
            "On-call setup"
          ]} 
        />
      </div>
      
      <Pricing />
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map(d => (
          <li key={d} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="MVP Sprint" 
          price="$8k–$20k" 
          features={[
            "2–4 weeks",
            "MVP scope",
            "Stripe billing",
            "Basic analytics"
          ]} 
        />
        <Plan 
          name="Growth" 
          price="$20k–$60k" 
          features={[
            "6–10 weeks",
            "SEO + content",
            "CRM + email",
            "Observability"
          ]} 
        />
        <Plan 
          name="Scale" 
          price="$60k+" 
          features={[
            "Custom roadmap",
            "SRE + security",
            "Multi-region",
            "SLAs"
          ]} 
        />
      </div>
    </div>
  );
}

function Plan({ name, price, features }: { name: string; price: string; features: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map(f => (
          <li key={f} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {f}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
      >
        Get Started
      </a>
    </div>
  );
}

