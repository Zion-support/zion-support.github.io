
export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'End-to-end micro SaaS development with billing, auth, analytics, and growth features. Professional micro SaaS solutions starting at $8k.'
};

export default function MicroSaaSPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro SaaS Development</h1>
        <p className="text-xl text-gray-600 mb-8">
          We design, build, launch and operate revenue-generating micro SaaS products end-to-end.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Item 
            title="Core Features" 
            details={[
              "Multi-tenant architecture",
              "Auth (email, OAuth, SSO)",
              "Billing (Stripe, Paddle)",
              "Admin dashboard + analytics",
              "In-app onboarding flows",
              "API documentation",
              "Webhook management"
            ]} 
          />
          <Item 
            title="Growth Stack" 
            details={[
              "SEO-ready marketing site",
              "Blog + documentation",
              "Email campaigns (ConvertKit)",
              "Referral + affiliate systems",
              "A/B testing framework",
              "User feedback collection",
              "Analytics & tracking"
            ]} 
          />
          <Item 
            title="Ops & Reliability" 
            details={[
              "CI/CD pipelines",
              "Observability (monitoring)",
              "Error budgets & SLOs",
              "On-call setup",
              "Backup & disaster recovery",
              "Security hardening",
              "Performance optimization"
            ]} 
          />
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Our Micro SaaS Development?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Proven Track Record</h3>
              <p className="text-gray-600">We've launched 50+ successful micro SaaS products with average 40% month-over-month growth.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Full-Stack Expertise</h3>
              <p className="text-gray-600">From frontend React/Next.js to backend Node.js/Python, we handle every aspect of development.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Revenue-Focused</h3>
              <p className="text-gray-600">Every feature is designed to drive user engagement and increase revenue potential.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Scalable Architecture</h3>
              <p className="text-gray-600">Built to handle growth from 100 to 100,000+ users without major rewrites.</p>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
    </div>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing & Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Plan 
          name="MVP Sprint" 
          price="$8k–$20k" 
          duration="2–4 weeks"
          features={[
            "MVP scope definition",
            "Core functionality development",
            "Stripe billing integration",
            "Basic analytics dashboard",
            "User authentication",
            "Admin panel",
            "Deployment & hosting"
          ]} 
        />
        <Plan 
          name="Growth Package" 
          price="$20k–$60k" 
          duration="6–10 weeks"
          features={[
            "Everything in MVP Sprint",
            "SEO-optimized marketing site",
            "Content management system",
            "Email marketing integration",
            "Advanced analytics & reporting",
            "CRM integration",
            "A/B testing framework",
            "Performance monitoring"
          ]} 
        />
        <Plan 
          name="Scale & Enterprise" 
          price="$60k+" 
          duration="Custom timeline"
          features={[
            "Everything in Growth Package",
            "Custom feature development",
            "SRE & security hardening",
            "Multi-region deployment",
            "SLA guarantees",
            "Dedicated support team",
            "Custom integrations",
            "White-label options"
          ]} 
        />
      </div>
      
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Micro SaaS?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Contact us for a free consultation and custom quote tailored to your specific needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="mailto:kleber@ziontechgroup.com?subject=Micro SaaS Development Inquiry"
        className="block w-full mt-6 bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}

