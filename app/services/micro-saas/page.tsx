export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Complete micro SaaS development services including billing, analytics, and growth optimization. Professional pricing and proven results.'
};

export default function MicroSaaSPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro SaaS Development</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We design, build, launch and operate revenue-generating micro SaaS products end-to-end. 
          From MVP to scale, we handle everything so you can focus on growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Item 
          title="Core Features" 
          details={[
            "Multi-tenant architecture",
            "Authentication (email, OAuth, SSO)",
            "Billing & subscriptions (Stripe, Paddle)",
            "Admin dashboard + analytics",
            "In-app onboarding flows",
            "API development & documentation"
          ]} 
        />
        <Item 
          title="Growth Stack" 
          details={[
            "SEO-ready marketing site",
            "Blog + documentation",
            "Email marketing campaigns",
            "Referral & affiliate systems",
            "A/B testing framework",
            "Customer success tools"
          ]} 
        />
        <Item 
          title="Operations & Reliability" 
          details={[
            "CI/CD pipelines",
            "Monitoring & observability",
            "Error tracking & budgets",
            "SLOs & performance metrics",
            "On-call setup",
            "Security hardening"
          ]} 
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Micro SaaS Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MicroSaaSProduct
            title="AI Content Generator"
            description="Automated content creation with AI for blogs, social media, and marketing"
            features={["GPT-4 integration", "Content templates", "SEO optimization", "Multi-language support"]}
            pricing="$2,500/month"
            icon="📝"
          />
          <MicroSaaSProduct
            title="Social Media Scheduler"
            description="Schedule and manage social media posts across all platforms"
            features={["Multi-platform posting", "Analytics dashboard", "Team collaboration", "Content calendar"]}
            pricing="$1,800/month"
            icon="📱"
          />
          <MicroSaaSProduct
            title="Email Marketing Automation"
            description="Advanced email marketing with automation workflows and analytics"
            features={["Drag-drop builder", "Behavioral triggers", "A/B testing", "Advanced segmentation"]}
            pricing="$3,200/month"
            icon="📧"
          />
          <MicroSaaSProduct
            title="Project Management Tool"
            description="Team collaboration and project tracking with time management"
            features={["Kanban boards", "Time tracking", "Team chat", "File sharing"]}
            pricing="$2,100/month"
            icon="📊"
          />
          <MicroSaaSProduct
            title="Customer Support Chat"
            description="Live chat widget with AI-powered responses and ticket management"
            features={["AI chatbot", "Ticket system", "Knowledge base", "Multi-channel support"]}
            pricing="$1,500/month"
            icon="💬"
          />
          <MicroSaaSProduct
            title="Analytics Dashboard"
            description="Custom analytics and reporting for business intelligence"
            features={["Real-time data", "Custom reports", "Data visualization", "API integration"]}
            pricing="$2,800/month"
            icon="📈"
          />
          <MicroSaaSProduct
            title="Invoice & Billing System"
            description="Automated invoicing and payment processing for small businesses"
            features={["Auto-invoicing", "Payment tracking", "Tax calculations", "Client portal"]}
            pricing="$1,200/month"
            icon="💰"
          />
          <MicroSaaSProduct
            title="Lead Generation Tool"
            description="Find and qualify leads with automated outreach and CRM integration"
            features={["Lead scoring", "Email sequences", "CRM sync", "Analytics tracking"]}
            pricing="$2,200/month"
            icon="🎯"
          />
          <MicroSaaSProduct
            title="Website Builder"
            description="Drag-and-drop website builder with hosting and domain management"
            features={["Template library", "Mobile responsive", "SEO tools", "E-commerce integration"]}
            pricing="$1,800/month"
            icon="🌐"
          />
          <MicroSaaSProduct
            title="Survey & Feedback Tool"
            description="Create surveys, collect feedback, and analyze customer insights"
            features={["Survey builder", "Response analytics", "NPS tracking", "Integration APIs"]}
            pricing="$1,400/month"
            icon="📋"
          />
        </div>
      </div>

      <Pricing />
      
      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Build Your Micro SaaS?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's discuss your idea and create a custom solution that generates revenue from day one.
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

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail) => (
          <li key={detail} className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MicroSaaSProduct({ 
  title, 
  description, 
  features, 
  pricing, 
  icon 
}: { 
  title: string; 
  description: string; 
  features: string[]; 
  pricing: string; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-2 mb-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </div>
        ))}
      </div>
      <div className="text-2xl font-bold text-blue-600">{pricing}</div>
    </div>
  );
}

function Pricing() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Development Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="MVP Sprint" 
          price="$8k–$20k" 
          duration="2–4 weeks"
          features={[
            "Core functionality",
            "Basic authentication",
            "Stripe billing integration",
            "Simple admin dashboard",
            "Basic analytics",
            "Mobile responsive design"
          ]} 
        />
        <Plan 
          name="Growth Ready" 
          price="$20k–$60k" 
          duration="6–10 weeks"
          features={[
            "Full feature set",
            "Advanced authentication",
            "Complete billing system",
            "Advanced analytics",
            "SEO optimization",
            "Email marketing integration",
            "API documentation",
            "Performance optimization"
          ]} 
          popular={true}
        />
        <Plan 
          name="Enterprise Scale" 
          price="$60k+" 
          duration="12+ weeks"
          features={[
            "Custom architecture",
            "Multi-tenant system",
            "Advanced security",
            "Real-time features",
            "Advanced integrations",
            "White-label options",
            "SLA guarantees",
            "Dedicated support"
          ]} 
        />
      </div>
    </div>
  );
}

function Plan({ 
  name, 
  price, 
  duration, 
  features, 
  popular = false 
}: { 
  name: string; 
  price: string; 
  duration: string; 
  features: string[]; 
  popular?: boolean; 
}) {
  return (
    <div className={`border rounded-xl p-8 bg-white relative ${popular ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start">
            <span className="text-blue-500 mr-3 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=Micro SaaS Development Inquiry"
        className={`mt-6 w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}