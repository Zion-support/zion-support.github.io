import Link from 'next/link';

export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Comprehensive micro SaaS development services including product engineering, billing systems, analytics, and growth optimization.'
};

export default function MicroSaaSPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro SaaS Development</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We design, build, launch and operate revenue-generating micro SaaS products end-to-end. 
            From MVP to scale, we handle everything so you can focus on growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ServiceCard 
            title="Product Engineering" 
            details={[
              "Multi-tenant architecture",
              "User authentication & authorization", 
              "Stripe billing integration",
              "Admin dashboard & analytics",
              "In-app onboarding flows",
              "API development & documentation"
            ]} 
            icon="⚙️"
          />
          <ServiceCard 
            title="Growth & Marketing" 
            details={[
              "SEO-optimized marketing site",
              "Content management system",
              "Email marketing automation",
              "Referral & affiliate systems",
              "A/B testing framework",
              "Conversion optimization"
            ]} 
            icon="📈"
          />
          <ServiceCard 
            title="Operations & Reliability" 
            details={[
              "CI/CD pipeline setup",
              "Monitoring & observability",
              "Error tracking & alerting",
              "Performance optimization",
              "Security hardening",
              "Backup & disaster recovery"
            ]} 
            icon="🔧"
          />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Ready-to-Deploy Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SolutionCard
              title="AI-Powered Analytics Dashboard"
              description="Real-time business intelligence with custom metrics, automated reporting, and predictive insights."
              features={[
                "Custom KPI tracking",
                "Automated report generation",
                "Predictive analytics",
                "White-label branding"
              ]}
              pricing="Starting at $15,000"
            />
            <SolutionCard
              title="Customer Support Automation"
              description="Intelligent ticketing system with AI-powered responses and multi-channel support."
              features={[
                "AI chatbot integration",
                "Multi-channel support",
                "Automated ticket routing",
                "Performance analytics"
              ]}
              pricing="Starting at $12,000"
            />
            <SolutionCard
              title="Project Management Suite"
              description="Complete project management with time tracking, resource allocation, and team collaboration."
              features={[
                "Task & milestone tracking",
                "Time & resource management",
                "Team collaboration tools",
                "Client portal access"
              ]}
              pricing="Starting at $18,000"
            />
            <SolutionCard
              title="E-commerce Analytics Platform"
              description="Advanced e-commerce analytics with conversion tracking, customer insights, and revenue optimization."
              features={[
                "Conversion funnel analysis",
                "Customer behavior tracking",
                "Revenue optimization",
                "Inventory management"
              ]}
              pricing="Starting at $20,000"
            />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Plan
              name="MVP Sprint"
              price="$8k–$20k"
              features={[
                "2–4 weeks development",
                "Core features only",
                "Basic Stripe integration",
                "Simple analytics",
                "Email support"
              ]}
            />
            <Plan
              name="Growth"
              price="$20k–$60k"
              features={[
                "6–10 weeks development",
                "Full feature set",
                "Advanced analytics",
                "SEO optimization",
                "Priority support",
                "3 months maintenance"
              ]}
              popular={true}
            />
            <Plan
              name="Scale"
              price="$60k+"
              features={[
                "Custom roadmap",
                "Enterprise features",
                "Advanced security",
                "Multi-region deployment",
                "Dedicated support",
                "12 months maintenance"
              ]}
            />
          </div>
        </div>

        <section className="bg-blue-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to build your micro SaaS?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Let's discuss your project and create a custom solution that drives real business results.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </section>
      </section>
    </div>
  );
}

function ServiceCard({ title, details, icon }: { 
  title: string; 
  details: string[]; 
  icon: string; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SolutionCard({ title, description, features, pricing }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 text-gray-600 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-gray-900">{pricing}</div>
    </div>
  );
}

function Plan({ name, price, features, popular = false }: {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div className={`bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow ${
      popular ? 'border-blue-500 ring-2 ring-blue-100' : 'border-gray-200'
    }`}>
      {popular && (
        <div className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="/contact"
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}