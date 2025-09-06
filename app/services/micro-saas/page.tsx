
export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'End-to-end micro SaaS development with billing, auth, analytics, and growth features. From MVP to scale.'
};

export default function MicroSaaSPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro SaaS Development</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We design, build, launch and operate revenue-generating micro SaaS products end-to-end.
          From concept to scale, we handle everything so you can focus on your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Item 
          title="Core Features" 
          details={[
            "Multi-tenant architecture",
            "Auth (email, OAuth, SSO)",
            "Billing (Stripe, PayPal, Paddle)",
            "Admin dashboard + analytics",
            "In-app onboarding flows",
            "API rate limiting & security"
          ]} 
        />
        <Item 
          title="Growth Stack" 
          details={[
            "SEO-ready marketing site",
            "Blog + documentation",
            "Email marketing campaigns",
            "Referral + affiliate systems",
            "A/B testing framework",
            "Customer success tools"
          ]} 
        />
        <Item 
          title="Ops & Reliability" 
          details={[
            "CI/CD pipelines",
            "Monitoring & observability",
            "Error tracking & budgets",
            "SLOs & uptime guarantees",
            "On-call setup & alerts",
            "Backup & disaster recovery"
          ]} 
        />
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Micro SaaS Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Analytics Dashboard"
            description="Real-time business intelligence and user behavior tracking"
            price="Starting at $12k"
            features={["Custom metrics", "Real-time updates", "Export capabilities", "White-label options"]
          />
          <ServiceCard
            title="Customer Portal"
            description="Self-service customer management and billing portal"
            price="Starting at $8k"
            features={["Account management", "Billing history", "Support tickets", "Document access"]
          />
          <ServiceCard
            title="API Management"
            description="Secure API gateway with rate limiting and analytics"
            price="Starting at $15k"
            features={["API documentation", "Rate limiting", "Usage analytics", "Webhook management"]
          />
          <ServiceCard
            title="Content Management"
            description="Headless CMS with multi-tenant content management"
            price="Starting at $10k"
            features={["Multi-tenant", "Version control", "Media management", "SEO optimization"]
          />
          <ServiceCard
            title="Notification System"
            description="Multi-channel notification and communication platform"
            price="Starting at $7k"
            features={["Email, SMS, Push", "Templates", "Scheduling", "Analytics"]
          />
          <ServiceCard
            title="Workflow Automation"
            description="No-code workflow builder with integrations"
            price="Starting at $18k"
            features={["Visual builder", "Integrations", "Conditional logic", "Monitoring"]
          />
        </div>
      </div>


      <Pricing />
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (

    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceCard({ title, description, price, features }: { 
  title: string; 
  description: string; 
  price: string; 
  features: string[] 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>

    </div>
  );
}

function Pricing() {
  return (

    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Development Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="MVP Sprint" 
          price="$8k–$20k" 
          duration="2–4 weeks"
          features={[
            "MVP scope definition",
            "Stripe billing integration",
            "Basic analytics dashboard",
            "User authentication",
            "Core functionality",
            "Basic admin panel"
          ]} 
        />
        <Plan 
          name="Growth" 
          price="$20k–$60k" 
          duration="6–10 weeks"
          features={[
            "SEO-optimized marketing site",
            "Content management system",
            "CRM + email automation",
            "Advanced analytics",
            "A/B testing framework",
            "Customer success tools"
          ]} 
        />
        <Plan 
          name="Scale" 
          price="$60k+" 
          duration="Custom timeline"
          features={[
            "Custom roadmap planning",
            "SRE + security hardening",
            "Multi-region deployment",
            "SLA guarantees",
            "24/7 monitoring",
            "Dedicated support"
          ]} 
        />
      </div>
      
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">
          Ready to build your micro SaaS? Let's discuss your project requirements.
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


function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[] 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-sm text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
