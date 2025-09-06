import Link from "next/link";

export const metadata = {
  title: "Micro SaaS Solutions | Zion Tech Group - Complete SaaS Development",
  description: "End-to-end micro SaaS development from MVP to scale. Custom SaaS solutions with billing, analytics, user management, and growth optimization. From $2,999/month with 24/7 support.",
};

export default function MicroSaaSPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-blue-100">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Build, launch, and scale your micro SaaS business with our complete development and growth services. 
            From MVP to market leader, we handle every aspect of your SaaS journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Start Your SaaS Project
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Micro SaaS Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Micro SaaS Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized micro SaaS tools designed to solve specific business problems and generate recurring revenue.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Productivity Tools */}
            <MicroSaaSCard
              title="Productivity Tools"
              description="Task management, time tracking, and workflow optimization tools"
              features={[
                "Task management systems",
                "Time tracking & reporting",
                "Team collaboration tools",
                "Project management dashboards",
                "Automation workflows",
                "Integration APIs"
              ]}
              pricing="From $2,999/month"
              icon="⚡"
              href="/services/micro-saas/productivity-tools"
            />

            {/* Marketing Tools */}
            <MicroSaaSCard
              title="Marketing Tools"
              description="Email marketing, social media management, and campaign optimization"
              features={[
                "Email marketing automation",
                "Social media scheduling",
                "Campaign analytics",
                "Lead generation tools",
                "A/B testing platforms",
                "ROI tracking"
              ]}
              pricing="From $3,500/month"
              icon="📢"
              href="/services/micro-saas/marketing-tools"
            />

            {/* Analytics Tools */}
            <MicroSaaSCard
              title="Analytics Tools"
              description="Business intelligence, data visualization, and reporting solutions"
              features={[
                "Custom dashboards",
                "Data visualization",
                "Real-time reporting",
                "Predictive analytics",
                "Custom metrics",
                "Export capabilities"
              ]}
              pricing="From $2,200/month"
              icon="📊"
              href="/services/micro-saas/analytics-tools"
            />

            {/* Communication Tools */}
            <MicroSaaSCard
              title="Communication Tools"
              description="Team chat, video conferencing, and collaboration platforms"
              features={[
                "Team messaging",
                "Video conferencing",
                "File sharing",
                "Screen sharing",
                "Mobile apps",
                "Integration hub"
              ]}
              pricing="From $1,800/month"
              icon="💬"
              href="/services/micro-saas/communication-tools"
            />

            {/* Financial Tools */}
            <MicroSaaSCard
              title="Financial Tools"
              description="Invoicing, expense tracking, and financial management solutions"
              features={[
                "Automated invoicing",
                "Expense tracking",
                "Financial reporting",
                "Tax preparation",
                "Payment processing",
                "Budget management"
              ]}
              pricing="From $2,500/month"
              icon="💰"
              href="/services/micro-saas/financial-tools"
            />

            {/* Customer Support Tools */}
            <MicroSaaSCard
              title="Customer Support Tools"
              description="Helpdesk, ticketing, and customer service automation"
              features={[
                "Ticket management",
                "Knowledge base",
                "Live chat integration",
                "Customer feedback",
                "Performance metrics",
                "Multi-channel support"
              ]}
              pricing="From $1,600/month"
              icon="🎧"
              href="/services/micro-saas/customer-support-tools"
            />
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our SaaS Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A proven methodology for building successful micro SaaS products that users love and businesses rely on.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <DevelopmentStep
              step="1"
              title="Discovery & Planning"
              description="Market research, user interviews, and technical architecture planning"
              features={["Market analysis", "User research", "Technical planning", "MVP definition"]
            />
            <DevelopmentStep
              step="2"
              title="Design & Prototyping"
              description="UI/UX design, user flow mapping, and interactive prototyping"
              features={["User experience design", "Interface design", "Prototyping", "User testing"]
            />
            <DevelopmentStep
              step="3"
              title="Development & Testing"
              description="Full-stack development, API integration, and comprehensive testing"
              features={["Frontend development", "Backend development", "API integration", "Quality assurance"]
            />
            <DevelopmentStep
              step="4"
              title="Launch & Growth"
              description="Deployment, marketing, user onboarding, and growth optimization"
              features={["Production deployment", "Marketing setup", "User onboarding", "Growth optimization"]
            />
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core SaaS Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every micro SaaS solution includes these essential features for success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="User Authentication"
              description="Secure login, registration, and user management"
              features={["OAuth integration", "Multi-factor authentication", "Role-based access", "Password recovery"]
              icon="🔐"
            />
            <FeatureCard
              title="Subscription Billing"
              description="Flexible pricing plans and automated billing"
              features={["Multiple pricing tiers", "Stripe integration", "Invoice generation", "Payment analytics"]
              icon="💳"
            />
            <FeatureCard
              title="Analytics Dashboard"
              description="Comprehensive usage and business analytics"
              features={["User analytics", "Revenue tracking", "Usage metrics", "Custom reports"]
              icon="📈"
            />
            <FeatureCard
              title="API Integration"
              description="RESTful APIs for third-party integrations"
              features={["RESTful APIs", "Webhook support", "SDK libraries", "Documentation"]
              icon="🔌"
            />
            <FeatureCard
              title="Admin Panel"
              description="Complete admin interface for management"
              features={["User management", "Content management", "System settings", "Monitoring tools"]
              icon="⚙️"
            />
            <FeatureCard
              title="Mobile Responsive"
              description="Optimized for all devices and screen sizes"
              features={["Responsive design", "Mobile apps", "Touch optimization", "Offline support"]
              icon="📱"
            />
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Modern, scalable technologies for building robust micro SaaS applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <TechStackCard category="Frontend" technologies={["React", "Next.js", "TypeScript", "Tailwind CSS"]} />
            <TechStackCard category="Backend" technologies={["Node.js", "Python", "PostgreSQL", "Redis"]} />
            <TechStackCard category="Cloud" technologies={["AWS", "Vercel", "Docker", "Kubernetes"]} />
            <TechStackCard category="Payments" technologies={["Stripe", "PayPal", "Square", "Paddle"]} />
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to fit your budget and growth stage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              price="$2,999"
              period="month"
              description="Perfect for MVPs and early-stage startups"
              features={[
                "Basic SaaS features",
                "Up to 1,000 users",
                "Email support",
                "Basic analytics",
                "Standard hosting"
              ]}
              popular={false}
            />
            <PricingCard
              title="Professional"
              price="$4,999"
              period="month"
              description="Ideal for growing businesses"
              features={[
                "Advanced features",
                "Up to 10,000 users",
                "Priority support",
                "Advanced analytics",
                "Premium hosting",
                "API access"
              ]}
              popular={true}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              period=""
              description="For large-scale operations"
              features={[
                "Custom features",
                "Unlimited users",
                "24/7 support",
                "Custom analytics",
                "Dedicated hosting",
                "White-label options"
              ]}
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from our micro SaaS development projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SuccessStory
              title="TaskFlow Pro"
              description="Project management tool for remote teams"
              metrics={["$50K MRR", "5,000+ users", "95% retention"]}
            />
            <SuccessStory
              title="EmailMaster"
              description="Email marketing automation platform"
              metrics={["$75K MRR", "8,000+ users", "300% growth"]}
            />
            <SuccessStory
              title="AnalyticsHub"
              description="Business intelligence dashboard"
              metrics={["$40K MRR", "3,500+ users", "200% ROI"]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Micro SaaS?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let's turn your SaaS idea into a profitable business. Get started with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm text-green-100">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function MicroSaaSCard({
  title,
  description,
  features,
  pricing,
  icon,
  href
}: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-green-300 hover:shadow-lg transition-all duration-200"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-green-600">{pricing}</div>
    </Link>
  );
}

function DevelopmentStep({
  step,
  title,
  description,
  features
}: {
  step: string;
  title: string;
  description: string;
  features: string[];
}) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureCard({
  title,
  description,
  features,
  icon
}: {
  title: string;
  description: string;
  features: string[];
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechStackCard({
  category,
  technologies
}: {
  category: string;
  technologies: string[];
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{category}</h3>
      <div className="space-y-2">
        {technologies.map((tech, index) => (
          <div key={index} className="text-sm text-gray-600 bg-gray-50 rounded px-3 py-1">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}

function PricingCard({
  title,
  price,
  period,
  description,
  features,
  popular
}: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white border rounded-xl p-8 ${popular ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="text-4xl font-bold text-gray-900 mb-1">
        {price}
        {period && <span className="text-lg text-gray-600">/{period}</span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-green-600 text-white hover:bg-green-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function SuccessStory({
  title,
  description,
  metrics
}: {
  title: string;
  description: string;
  metrics: string[];
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-2">
        {metrics.map((metric, index) => (
          <div key={index} className="text-sm font-semibold text-green-600">
            {metric}
          </div>
        ))}
      </div>
    </div>
  );
}