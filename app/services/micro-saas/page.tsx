import Link from 'next/link';

export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'End-to-end micro SaaS development with billing, authentication, and analytics. From MVP to scale-ready applications.',
};

export default function MicroSaaSPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Micro SaaS Development</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We design, build, launch and operate revenue-generating micro SaaS products end-to-end. 
          Transform your idea into a profitable, scalable business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <FeatureCard 
          title="Core Features" 
          details={[
            "Multi-tenant architecture",
            "Auth (email, OAuth, SSO)",
            "Billing (Stripe, Paddle)",
            "Admin dashboard + analytics",
            "In-app onboarding flows"
          ]} 
        />
        <FeatureCard 
          title="Growth Stack" 
          details={[
            "SEO-ready marketing site",
            "Blog + documentation",
            "Email campaigns (ConvertKit)",
            "Referral + affiliate systems",
            "A/B testing framework"
          ]} 
        />
        <FeatureCard 
          title="Ops & Reliability" 
          details={[
            "CI/CD pipelines",
            "Observability (DataDog)",
            "Error budgets & SLOs",
            "On-call setup",
            "Automated backups"
          ]} 
        />
      </div>

      <PricingSection />
      
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Micro SaaS?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's discuss your idea and create a custom development plan that fits your budget and timeline.
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
    </div>
  );
}

function FeatureCard({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingSection() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <PricingPlan 
          name="MVP Sprint" 
          price="$8k–$20k" 
          features={[
            "2–4 weeks development",
            "MVP scope definition",
            "Stripe billing integration",
            "Basic analytics dashboard",
            "Email authentication"
          ]} 
        />
        <PricingPlan 
          name="Growth" 
          price="$20k–$60k" 
          features={[
            "6–10 weeks development",
            "SEO + content strategy",
            "CRM + email automation",
            "Advanced observability",
            "Multi-tenant architecture"
          ]} 
          featured={true}
        />
        <PricingPlan 
          name="Scale" 
          price="$60k+" 
          features={[
            "Custom roadmap planning",
            "SRE + security hardening",
            "Multi-region deployment",
            "SLA guarantees",
            "Dedicated support"
          ]} 
        />
      </div>
    </div>
  );
}

function PricingPlan({ 
  name, 
  price, 
  features, 
  featured = false 
}: { 
  name: string; 
  price: string; 
  features: string[]; 
  featured?: boolean;
}) {
  return (
    <div className={`border rounded-xl p-6 ${
      featured 
        ? 'border-blue-500 bg-blue-50 shadow-lg' 
        : 'border-gray-200 bg-white shadow-sm'
    }`}>
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-blue-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          featured
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
