
import Link from "next/link";

export const metadata = {
  title: "Micro SaaS Solutions | Zion Tech Group - Complete SaaS Development & Launch",
  description: "End-to-end micro SaaS development from MVP to scale. Custom SaaS products with billing, analytics, user management, and growth optimization. Launch your SaaS in 30-90 days.",
};

export default function MicroSaaSPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-blue-100">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Launch your micro SaaS product in 30-90 days. Complete development, deployment, and growth optimization 
            for profitable, scalable SaaS businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Start Your SaaS Project
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Micro SaaS Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in building profitable micro SaaS products across various industries and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Productivity Tools */}
            <SaaSCard
              title="Productivity Tools"
              description="Task management, time tracking, and workflow optimization tools"
              examples={[
                "Project management dashboards",
                "Time tracking applications",
                "Team collaboration tools",
                "Workflow automation platforms"
              ]}
              pricing="From $2,999/month"
              icon="⚡"
              href="/services/micro-saas/productivity-tools"
            />

            {/* Marketing Tools */}
            <SaaSCard
              title="Marketing Tools"
              description="Social media management, email marketing, and analytics platforms"
              examples={[
                "Social media schedulers",
                "Email campaign managers",
                "SEO analysis tools",
                "Content creation platforms"
              ]}
              pricing="From $2,500/month"
              icon="📢"
              href="/services/micro-saas/marketing-tools"
            />

            {/* Analytics & Reporting */}
            <SaaSCard
              title="Analytics & Reporting"
              description="Business intelligence, data visualization, and reporting tools"
              examples={[
                "Custom analytics dashboards",
                "Report generation tools",
                "Data visualization platforms",
                "KPI tracking systems"
              ]}
              pricing="From $3,500/month"
              icon="📊"
              href="/services/micro-saas/analytics-tools"
            />

            {/* E-commerce Tools */}
            <SaaSCard
              title="E-commerce Tools"
              description="Store management, inventory tracking, and sales optimization tools"
              examples={[
                "Inventory management systems",
                "Price monitoring tools",
                "Order fulfillment platforms",
                "Customer analytics dashboards"
              ]}
              pricing="From $4,000/month"
              icon="🛒"
              href="/services/micro-saas/ecommerce-tools"
            />

            {/* Developer Tools */}
            <SaaSCard
              title="Developer Tools"
              description="API management, code analysis, and development workflow tools"
              examples={[
                "API testing platforms",
                "Code quality analyzers",
                "Deployment automation tools",
                "Documentation generators"
              ]}
              pricing="From $3,200/month"
              icon="💻"
              href="/services/micro-saas/developer-tools"
            />

            {/* HR & Finance Tools */}
            <SaaSCard
              title="HR & Finance Tools"
              description="Employee management, expense tracking, and financial planning tools"
              examples={[
                "Employee onboarding platforms",
                "Expense tracking systems",
                "Invoice generation tools",
                "Budget planning applications"
              ]}
              pricing="From $3,800/month"
              icon="💰"
              href="/services/micro-saas/hr-finance-tools"
            />
          </div>
        </div>
      </section>

      {/* Complete SaaS Development Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete SaaS Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From concept to launch, we handle every aspect of your micro SaaS development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              step="1"
              title="Discovery & Planning"
              description="Market research, user personas, feature planning, and technical architecture"
              duration="1-2 weeks"
              icon="🔍"
            />
            <ProcessStep
              step="2"
              title="MVP Development"
              description="Core features development, user interface design, and basic functionality"
              duration="3-6 weeks"
              icon="⚙️"
            />
            <ProcessStep
              step="3"
              title="Integration & Testing"
              description="Payment systems, user management, analytics, and comprehensive testing"
              duration="2-3 weeks"
              icon="🔗"
            />
            <ProcessStep
              step="4"
              title="Launch & Optimization"
              description="Deployment, user onboarding, performance monitoring, and growth optimization"
              duration="1-2 weeks"
              icon="🚀"
            />
          </div>
        </div>
      </section>

      {/* Core SaaS Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Essential SaaS Features Included</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every micro SaaS product comes with these essential features for success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="User Authentication & Management"
              description="Secure user registration, login, password reset, and profile management"
              features={[
                "OAuth integration (Google, GitHub, etc.)",
                "Two-factor authentication",
                "Role-based access control",
                "User profile management"
              ]}
              icon="👤"
            />
            <FeatureCard
              title="Subscription & Billing"
              description="Complete payment processing and subscription management"
              features={[
                "Stripe/PayPal integration",
                "Multiple pricing tiers",
                "Automatic billing & invoicing",
                "Subscription management dashboard"
              ]}
              icon="💳"
            />
            <FeatureCard
              title="Analytics & Reporting"
              description="Comprehensive analytics and business intelligence"
              features={[
                "User behavior tracking",
                "Revenue analytics",
                "Custom dashboards",
                "Export capabilities"
              ]}
              icon="📈"
            />
            <FeatureCard
              title="API & Integrations"
              description="RESTful APIs and third-party integrations"
              features={[
                "RESTful API development",
                "Webhook support",
                "Third-party integrations",
                "API documentation"
              ]}
              icon="🔌"
            />
            <FeatureCard
              title="Admin Dashboard"
              description="Comprehensive admin panel for managing your SaaS"
              features={[
                "User management",
                "Analytics overview",
                "System monitoring",
                "Configuration settings"
              ]}
              icon="⚙️"
            />
            <FeatureCard
              title="Security & Compliance"
              description="Enterprise-grade security and compliance features"
              features={[
                "SSL/TLS encryption",
                "GDPR compliance",
                "Data backup & recovery",
                "Security monitoring"
              ]}
              icon="🔒"
            />
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Modern Technology Stack</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Built with the latest technologies for performance, scalability, and security.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <TechStackCard name="React/Next.js" category="Frontend" />
            <TechStackCard name="Node.js/Express" category="Backend" />
            <TechStackCard name="PostgreSQL" category="Database" />
            <TechStackCard name="Redis" category="Caching" />
            <TechStackCard name="AWS/Azure" category="Cloud" />
            <TechStackCard name="Docker" category="Deployment" />
            <TechStackCard name="Stripe" category="Payments" />
            <TechStackCard name="SendGrid" category="Email" />
            <TechStackCard name="Auth0" category="Authentication" />
            <TechStackCard name="Mixpanel" category="Analytics" />
            <TechStackCard name="Sentry" category="Monitoring" />
            <TechStackCard name="Vercel" category="Hosting" />
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Micro SaaS Development Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the package that best fits your budget and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SaaSPricingCard
              title="Starter SaaS"
              price="$2,999"
              period="per month"
              description="Perfect for simple micro SaaS products with basic features"
              features={[
                "Up to 5 core features",
                "Basic user authentication",
                "Simple payment integration",
                "Basic analytics dashboard",
                "2 weeks development",
                "30 days support"
              ]}
              popular={false}
            />
            <SaaSPricingCard
              title="Professional SaaS"
              price="$4,999"
              period="per month"
              description="Comprehensive micro SaaS with advanced features and integrations"
              features={[
                "Up to 15 core features",
                "Advanced user management",
                "Multiple payment methods",
                "Advanced analytics & reporting",
                "API development",
                "4-6 weeks development",
                "90 days support",
                "Performance optimization"
              ]}
              popular={true}
            />
            <SaaSPricingCard
              title="Enterprise SaaS"
              price="$9,999"
              period="per month"
              description="Full-scale SaaS platform with enterprise features"
              features={[
                "Unlimited features",
                "Enterprise user management",
                "Custom integrations",
                "Advanced security & compliance",
                "Custom API development",
                "8-12 weeks development",
                "6 months support",
                "Dedicated development team",
                "Ongoing maintenance"
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
              description="Project management tool for small teams"
              results={[
                "Launched in 45 days",
                "$15K MRR in 6 months",
                "500+ active users",
                "4.8/5 user rating"
              ]}
              industry="Productivity"
            />
            <SuccessStory
              title="SocialScheduler"
              description="Social media management platform"
              results={[
                "Launched in 60 days",
                "$25K MRR in 8 months",
                "1,200+ active users",
                "95% customer satisfaction"
              ]}
              industry="Marketing"
            />
            <SuccessStory
              title="AnalyticsHub"
              description="Business intelligence dashboard"
              results={[
                "Launched in 90 days",
                "$40K MRR in 12 months",
                "800+ enterprise users",
                "300% ROI for clients"
              ]}
              industry="Analytics"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Launch Your Micro SaaS?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get a free consultation and discover how we can help you build and launch your profitable micro SaaS product.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm text-purple-100">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function SaaSCard({
  title,
  description,
  examples,
  pricing,
  icon,
  href
}: {
  title: string;
  description: string;
  examples: string[];
  pricing: string;
  icon: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group border border-gray-200 rounded-xl p-6 block hover:border-purple-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-1 mb-4">
        {examples.map((example) => (
          <li key={example} className="flex items-center text-sm">
            <span className="text-purple-500 mr-2">•</span> {example}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-purple-600">
        {pricing}
      </div>
    </Link>
  );
}

function ProcessStep({
  step,
  title,
  description,
  duration,
  icon
}: {
  step: string;
  title: string;
  description: string;
  duration: string;
  icon: string;
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      <div className="text-purple-600 font-semibold text-sm">{duration}</div>
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
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center text-sm">
            <span className="text-purple-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechStackCard({ name, category }: { name: string; category: string }) {
  return (
    <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="text-sm font-medium text-gray-900 mb-1">{name}</div>
      <div className="text-xs text-gray-500">{category}</div>
    </div>
  );
}

function SaaSPricingCard({
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
    <div className={`relative border rounded-xl p-8 ${popular ? 'border-purple-500 bg-purple-50' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="text-4xl font-bold text-purple-600 mb-1">{price}</div>
        <div className="text-gray-600">{period}</div>
        <p className="text-gray-600 mt-4">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-green-500 mr-3">✓</span>

            <span className="text-gray-600">{feature}</span>

          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-purple-600 text-white hover:bg-purple-700'
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
  results,
  industry
}: {
  title: string;
  description: string;
  results: string[];
  industry: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
          {industry}
        </span>
      </div>
      <ul className="space-y-2">
        {results.map((result) => (
          <li key={result} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span> {result}
          </li>
        ))}
      </ul>
    </div>
  );
}

