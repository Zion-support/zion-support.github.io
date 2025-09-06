export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Complete micro SaaS development services from concept to launch. We build revenue-generating micro SaaS products with modern tech stacks, billing, analytics, and growth features.'
}; 

export default function MicroSaaSPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Micro SaaS Development</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete micro SaaS development services from concept to launch. We build revenue-generating 
            micro SaaS products with modern tech stacks, billing, analytics, and growth features.
          </p>
        </div>

        {/* Core Development Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <DevelopmentArea
            title="Core Features"
            icon="⚙️"
            description="Essential functionality for micro SaaS success"
            features={[
              "Multi-tenant architecture",
              "Authentication (email, OAuth)",
              "Billing & subscriptions (Stripe)",
              "Admin dashboard & analytics",
              "In-app onboarding",
              "User management system"
            ]}
          />
          <DevelopmentArea
            title="Growth Stack"
            icon="📈"
            description="Marketing and growth optimization tools"
            features={[
              "SEO-ready marketing site",
              "Blog & documentation",
              "Email marketing campaigns",
              "Referral & affiliate systems",
              "A/B testing framework",
              "Analytics & tracking"
            ]}
          />
          <DevelopmentArea
            title="Operations & Reliability"
            icon="🔧"
            description="Production-ready infrastructure and monitoring"
            features={[
              "CI/CD pipelines",
              "Observability & monitoring",
              "Error tracking & budgets",
              "SLOs & uptime monitoring",
              "On-call setup",
              "Backup & disaster recovery"
            ]}
          />
        </div>

        {/* Featured Micro SaaS Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Micro SaaS Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MicroSaaSSolution
              title="AI Content Generator"
              description="AI-powered content creation tool for marketers and writers"
              features={[
                "Multiple content types",
                "Brand voice training",
                "SEO optimization",
                "Plagiarism detection",
                "Content calendar",
                "Team collaboration"
              ]}
              price="$15k - $45k"
              timeline="8-16 weeks"
              techStack={["Next.js", "OpenAI API", "Stripe", "PostgreSQL"]}
            />
            <MicroSaaSSolution
              title="Social Media Scheduler"
              description="Advanced social media management and scheduling platform"
              features={[
                "Multi-platform posting",
                "Content calendar",
                "Analytics dashboard",
                "Team management",
                "Hashtag research",
                "Post optimization"
              ]}
              price="$20k - $60k"
              timeline="10-20 weeks"
              techStack={["React", "Node.js", "MongoDB", "Social APIs"]}
            />
            <MicroSaaSSolution
              title="Invoice & Billing Manager"
              description="Complete invoicing and billing solution for small businesses"
              features={[
                "Invoice generation",
                "Payment processing",
                "Expense tracking",
                "Tax calculations",
                "Client portal",
                "Reporting dashboard"
              ]}
              price="$12k - $35k"
              timeline="6-12 weeks"
              techStack={["Vue.js", "Laravel", "MySQL", "Stripe"]}
            />
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechStack
              category="Frontend"
              technologies={["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS"]}
            />
            <TechStack
              category="Backend"
              technologies={["Node.js", "Python", "Laravel", "Express.js", "FastAPI"]}
            />
            <TechStack
              category="Database"
              technologies={["PostgreSQL", "MongoDB", "Redis", "Supabase", "PlanetScale"]}
            />
            <TechStack
              category="Infrastructure"
              technologies={["AWS", "Vercel", "Railway", "Docker", "Kubernetes"]}
            />
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              step="1"
              title="Discovery & Planning"
              description="Requirements gathering, market research, and technical architecture"
              duration="1-2 weeks"
            />
            <ProcessStep
              step="2"
              title="Design & Prototyping"
              description="UI/UX design, user flows, and interactive prototypes"
              duration="2-3 weeks"
            />
            <ProcessStep
              step="3"
              title="Development & Testing"
              description="Agile development with continuous testing and feedback"
              duration="6-16 weeks"
            />
            <ProcessStep
              step="4"
              title="Launch & Optimization"
              description="Deployment, monitoring, and performance optimization"
              duration="2-4 weeks"
            />
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Micro SaaS Development Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MicroSaaSPricingPlan
              name="MVP Sprint"
              price="$8k - $20k"
              duration="4-8 weeks"
              features={[
                "Core functionality only",
                "Basic authentication",
                "Stripe billing integration",
                "Simple admin dashboard",
                "Basic analytics",
                "Deployment & hosting"
              ]}
              popular={false}
            />
            <MicroSaaSPricingPlan
              name="Growth Ready"
              price="$20k - $60k"
              duration="8-16 weeks"
              features={[
                "Full feature set",
                "Advanced authentication",
                "Complete billing system",
                "Advanced analytics",
                "Marketing site",
                "Email automation",
                "SEO optimization"
              ]}
              popular={true}
            />
            <MicroSaaSPricingPlan
              name="Enterprise Scale"
              price="$60k+"
              duration="12+ weeks"
              features={[
                "Custom roadmap",
                "Multi-tenant architecture",
                "Advanced security",
                "SRE & monitoring",
                "Multi-region deployment",
                "SLA guarantees",
                "Ongoing support"
              ]}
              popular={false}
            />
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Proven Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              metric="50+"
              description="Micro SaaS products launched"
              icon="🚀"
            />
            <MetricCard
              metric="$2M+"
              description="Total revenue generated"
              icon="💰"
            />
            <MetricCard
              metric="95%"
              description="Client satisfaction rate"
              icon="⭐"
            />
            <MetricCard
              metric="6 months"
              description="Average time to profitability"
              icon="📈"
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Micro SaaS?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your micro SaaS idea and create a revenue-generating product that scales with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm">
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DevelopmentArea({ title, icon, description, features }: {
  title: string;
  icon: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-blue-500 mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MicroSaaSSolution({ title, description, features, price, timeline, techStack }: {
  title: string;
  description: string;
  features: string[];
  price: string;
  timeline: string;
  techStack: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-1 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-2">Tech Stack:</p>
        <div className="flex flex-wrap gap-1">
          {techStack.map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div>
          <div className="font-bold text-blue-600">{price}</div>
          <div className="text-sm text-gray-500">{timeline}</div>
        </div>
        <a
          href="tel:+13024640950"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Quote
        </a>
      </div>
    </div>
  );
}

function TechStack({ category, technologies }: { category: string; technologies: string[] }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <h3 className="font-bold text-gray-900 mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProcessStep({ step, title, description, duration }: {
  step: string;
  title: string;
  description: string;
  duration: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
        {step}
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-2 text-sm">{description}</p>
      <div className="text-blue-600 font-semibold text-sm">{duration}</div>
    </div>
  );
}

function MicroSaaSPricingPlan({ name, price, duration, features, popular }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-lg border-2 ${popular ? 'border-blue-500' : 'border-gray-200'} relative`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full mt-6 py-3 rounded-lg font-semibold text-center block transition-colors ${
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

function MetricCard({ metric, description, icon }: { metric: string; description: string; icon: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-blue-600 mb-2">{metric}</div>
      <div className="text-gray-600">{description}</div>
    </div>
  );
}