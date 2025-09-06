export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Complete micro SaaS development services including AI-powered tools, productivity apps, business automation, and revenue-generating platforms.'
};

export default function MicroSaaSPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Micro SaaS Development
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          We design, build, launch and operate revenue-generating micro SaaS products end-to-end. 
          From AI-powered tools to productivity platforms, we create solutions that scale.
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
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Micro SaaS Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world micro SaaS products that generate revenue and solve real business problems.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="AI Content Generator"
            description="Automated content creation for blogs, social media, and marketing materials"
            features={["GPT-4 integration", "Brand voice training", "Multi-language support", "SEO optimization", "Content calendar management"]}
            pricing="$2,500/month"
            icon="✍️"
          />
          <ServiceCard
            title="Social Media Scheduler"
            description="Cross-platform social media management with AI-powered optimal posting times"
            features={["Multi-platform posting", "AI timing optimization", "Content library", "Analytics dashboard", "Team collaboration"]}
            pricing="$1,800/month"
            icon="📱"
          />
          <ServiceCard
            title="Invoice & Payment Tracker"
            description="Automated invoicing and payment tracking for freelancers and small businesses"
            features={["Automated invoicing", "Payment reminders", "Expense tracking", "Tax reporting", "Client portal"]}
            pricing="$1,200/month"
            icon="💰"
          />
          <ServiceCard
            title="Email Marketing Automation"
            description="Advanced email marketing platform with AI-driven personalization"
            features={["Behavioral triggers", "A/B testing", "Personalization engine", "Analytics & insights", "CRM integration"]}
            pricing="$3,200/month"
            icon="📧"
          />
          <ServiceCard
            title="Project Management Tool"
            description="Collaborative project management with time tracking and resource planning"
            features={["Task management", "Time tracking", "Resource allocation", "Progress reporting", "Team collaboration"]}
            pricing="$2,800/month"
            icon="📋"
          />
          <ServiceCard
            title="Customer Support Chatbot"
            description="AI-powered customer support with natural language processing"
            features={["24/7 availability", "Multi-language support", "Ticket routing", "Knowledge base", "Human handoff"]}
            pricing="$2,000/month"
            icon="🤖"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Development Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our proven methodology ensures rapid development and successful launches.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProcessStep
            step="1"
            title="Discovery & Planning"
            description="Market research, user personas, feature prioritization, and technical architecture design."
          />
          <ProcessStep
            step="2"
            title="MVP Development"
            description="Rapid prototyping with core features, user authentication, and basic billing integration."
          />
          <ProcessStep
            step="3"
            title="Testing & Launch"
            description="Beta testing, performance optimization, security hardening, and go-to-market strategy."
          />
          <ProcessStep
            step="4"
            title="Growth & Scale"
            description="User acquisition, feature expansion, performance monitoring, and revenue optimization."
          />
        </div>
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Technology Stack</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern, scalable technologies that ensure your micro SaaS can grow with your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TechStack
            title="Frontend & UI"
            technologies={["React/Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI"]}
          />
          <TechStack
            title="Backend & APIs"
            technologies={["Node.js/Express", "PostgreSQL", "Redis", "GraphQL", "REST APIs"]}
          />
          <TechStack
            title="Cloud & DevOps"
            technologies={["AWS/Vercel", "Docker", "Kubernetes", "CI/CD", "Monitoring"]}
          />
        </div>
      </section>

      <Pricing />
    </div>
  );
}

function ServiceCard({ title, description, features, pricing, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  pricing: string; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-all duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="text-gray-600 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-blue-500 mr-2">•</span> {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-lg font-bold text-blue-600 mb-4">{pricing}</div>
      <a
        href="tel:+13024640950"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}

function ProcessStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TechStack({ title, technologies }: { title: string; technologies: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <section className="py-12 bg-gray-50 rounded-lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transparent pricing for micro SaaS development. Choose the plan that fits your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Plan 
          name="MVP Sprint" 
          price="$8k–$20k" 
          duration="2–4 weeks"
          features={[
            "Core MVP features",
            "User authentication",
            "Stripe billing integration",
            "Basic analytics dashboard",
            "Responsive design",
            "Basic SEO optimization"
          ]}
          popular={false}
        />
        <Plan 
          name="Growth Ready" 
          price="$20k–$60k" 
          duration="6–10 weeks"
          features={[
            "Full feature set",
            "Advanced analytics",
            "Email marketing integration",
            "Admin dashboard",
            "API documentation",
            "Performance optimization",
            "Security hardening",
            "SEO + content strategy"
          ]}
          popular={true}
        />
        <Plan 
          name="Enterprise Scale" 
          price="$60k+" 
          duration="Custom timeline"
          features={[
            "Custom architecture",
            "Multi-tenant setup",
            "Advanced security",
            "SLA guarantees",
            "24/7 monitoring",
            "Dedicated support",
            "Custom integrations",
            "White-label options"
          ]}
          popular={false}
        />
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">
          All plans include: Source code ownership, 3 months support, deployment assistance
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
            Get Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}

function Plan({ name, price, duration, features, popular }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
  popular: boolean;
}) {
  return (
    <div className={`border rounded-xl p-8 bg-white relative ${popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
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