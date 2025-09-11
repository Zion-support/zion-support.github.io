export const metadata = {
  title: 'Micro SaaS Services | Zion Tech Group',
  description: 'End-to-end micro SaaS development with billing, auth, analytics, and growth features.',
};

function ServiceCard({ title, description, price, features }: { 
  title: string; 
  description: string; 
  price: string; 
  features: string[] 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-blue-600 font-semibold mb-4">{price}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600">• {feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default function MicroSaaSPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Micro SaaS Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end micro SaaS development with billing, authentication, 
            analytics, and growth features built for scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ServiceCard
            title="User Authentication"
            description="Secure user management with OAuth, 2FA, and role-based access control"
            price="Starting at $8k"
            features={["OAuth integration", "2FA support", "Role management", "Session handling"]}
          />
          <ServiceCard
            title="Subscription Billing"
            description="Complete subscription management with Stripe integration and invoicing"
            price="Starting at $12k"
            features={["Stripe integration", "Subscription tiers", "Proration handling", "Invoice generation"]}
          />
          <ServiceCard
            title="Analytics Dashboard"
            description="Real-time business intelligence and user behavior tracking"
            price="Starting at $12k"
            features={["Custom metrics", "Real-time updates", "Export capabilities", "White-label options"]}
          />
          <ServiceCard
            title="Customer Portal"
            description="Self-service customer management and billing portal"
            price="Starting at $8k"
            features={["Account management", "Billing history", "Support tickets", "Document access"]}
          />
          <ServiceCard
            title="API Management"
            description="Secure API gateway with rate limiting and analytics"
            price="Starting at $15k"
            features={["API documentation", "Rate limiting", "Usage analytics", "Webhook management"]}
          />
          <ServiceCard
            title="Content Management"
            description="Headless CMS with multi-tenant content management"
            price="Starting at $10k"
            features={["Multi-tenant support", "Content versioning", "Media management", "Workflow automation"]}
          />
        </div>

        <div className="text-center">
          <a 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}