import Link from 'next/link';

export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'End-to-end micro SaaS development with billing, analytics, and growth features. From MVP to scale.',
};

export default function MicroSaaSPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Micro SaaS Development
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          We design, build, launch and operate revenue-generating micro SaaS products end-to-end. 
          From MVP to scale, we handle everything so you can focus on growth.
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
            Get Quote
          </a>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Micro SaaS Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="AI-Powered Analytics Dashboard"
            description="Real-time business intelligence with predictive analytics and automated insights"
            features={["Custom dashboards", "Predictive modeling", "Automated reports", "API integrations"]}
            pricing="$2,500-8,000/month"
            icon="📊"
          />
          <ServiceCard 
            title="Customer Feedback Management"
            description="Collect, analyze, and act on customer feedback with sentiment analysis"
            features={["Multi-channel collection", "AI sentiment analysis", "Action tracking", "ROI measurement"]}
            pricing="$1,800-5,500/month"
            icon="💬"
          />
          <ServiceCard 
            title="Automated Social Media Scheduler"
            description="AI-driven social media management with content optimization and scheduling"
            features={["Multi-platform posting", "Content optimization", "Analytics tracking", "Team collaboration"]}
            pricing="$1,200-4,000/month"
            icon="📱"
          />
          <ServiceCard 
            title="Invoice & Payment Processing"
            description="Complete invoicing solution with automated billing and payment collection"
            features={["Automated invoicing", "Payment processing", "Tax calculations", "Financial reporting"]}
            pricing="$2,000-6,500/month"
            icon="💰"
          />
          <ServiceCard 
            title="Project Management Suite"
            description="Comprehensive project tracking with team collaboration and resource management"
            features={["Task management", "Time tracking", "Resource planning", "Progress analytics"]}
            pricing="$1,500-5,000/month"
            icon="📋"
          />
          <ServiceCard 
            title="Email Marketing Automation"
            description="Advanced email campaigns with personalization and behavioral triggers"
            features={["Behavioral triggers", "A/B testing", "Segmentation", "Performance analytics"]}
            pricing="$1,800-5,500/month"
            icon="📧"
          />
          <ServiceCard 
            title="Inventory Management System"
            description="Real-time inventory tracking with predictive restocking and supplier management"
            features={["Real-time tracking", "Predictive restocking", "Supplier integration", "Cost optimization"]}
            pricing="$2,200-7,000/month"
            icon="📦"
          />
          <ServiceCard 
            title="Lead Generation Platform"
            description="Automated lead capture and nurturing with CRM integration and scoring"
            features={["Lead capture forms", "Automated nurturing", "CRM integration", "Lead scoring"]}
            pricing="$1,600-4,800/month"
            icon="🎯"
          />
          <ServiceCard 
            title="Document Management System"
            description="Secure document storage with version control and collaboration features"
            features={["Secure storage", "Version control", "Collaboration tools", "Search & retrieval"]}
            pricing="$1,300-4,200/month"
            icon="📄"
          />
          <ServiceCard 
            title="Appointment Scheduling System"
            description="Smart scheduling with calendar integration and automated reminders"
            features={["Calendar integration", "Automated reminders", "Payment processing", "Analytics dashboard"]}
            pricing="$1,400-4,500/month"
            icon="📅"
          />
          <ServiceCard 
            title="Customer Support Ticketing"
            description="Multi-channel support system with AI-powered responses and escalation"
            features={["Multi-channel support", "AI responses", "Escalation rules", "Performance metrics"]}
            pricing="$1,700-5,200/month"
            icon="🎫"
          />
          <ServiceCard 
            title="Expense Tracking & Reporting"
            description="Automated expense management with receipt scanning and approval workflows"
            features={["Receipt scanning", "Approval workflows", "Tax categorization", "Compliance reporting"]}
            pricing="$1,200-3,800/month"
            icon="🧾"
          />
        </div>
      </section>

      {/* Core Development Features */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Core Development Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            title="Multi-tenant Architecture" 
            description="Scalable architecture supporting thousands of customers with data isolation and security"
          />
          <FeatureCard 
            title="Authentication & Authorization" 
            description="Secure auth with email, OAuth, SSO, and role-based access control"
          />
          <FeatureCard 
            title="Billing & Subscriptions" 
            description="Stripe integration with flexible pricing, trials, and automated billing"
          />
          <FeatureCard 
            title="Admin Dashboard" 
            description="Comprehensive admin panel with user management, analytics, and system monitoring"
          />
          <FeatureCard 
            title="API & Integrations" 
            description="RESTful APIs and webhooks for seamless third-party integrations"
          />
          <FeatureCard 
            title="Analytics & Reporting" 
            description="Real-time analytics with custom reports and business intelligence"
          />
        </div>
      </section>

      {/* Growth Stack */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Growth & Marketing Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <GrowthFeature 
              title="SEO-Ready Marketing Site"
              description="Optimized landing pages with conversion tracking and A/B testing"
            />
            <GrowthFeature 
              title="Content Management"
              description="Blog, documentation, and knowledge base with SEO optimization"
            />
            <GrowthFeature 
              title="Email Campaigns"
              description="Automated email sequences with personalization and behavioral triggers"
            />
            <GrowthFeature 
              title="Referral & Affiliate System"
              description="Built-in referral tracking with automated rewards and commission management"
            />
          </div>
          <div className="space-y-6">
            <GrowthFeature 
              title="Analytics & Tracking"
              description="Google Analytics, Mixpanel, and custom event tracking"
            />
            <GrowthFeature 
              title="A/B Testing"
              description="Built-in experimentation platform for features and marketing campaigns"
            />
            <GrowthFeature 
              title="Customer Onboarding"
              description="Automated onboarding flows with progress tracking and engagement metrics"
            />
            <GrowthFeature 
              title="Performance Monitoring"
              description="Real-time performance tracking with alerts and optimization recommendations"
            />
          </div>
        </div>
      </section>

      {/* Operations & Reliability */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Operations & Reliability</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <OpsFeature 
            title="CI/CD Pipeline"
            description="Automated testing, building, and deployment with rollback capabilities"
          />
          <OpsFeature 
            title="Observability"
            description="Comprehensive monitoring with logs, metrics, and distributed tracing"
          />
          <OpsFeature 
            title="Error Budgets"
            description="SLA-based error budgets with automated alerting and incident response"
          />
          <OpsFeature 
            title="On-call Setup"
            description="24/7 monitoring with automated escalation and incident management"
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Development Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard 
            name="MVP Sprint"
            price="$8,000–$20,000"
            duration="2–4 weeks"
            features={[
              "Core MVP features",
              "Stripe billing integration",
              "Basic analytics dashboard",
              "User authentication",
              "Admin panel",
              "API documentation"
            ]}
            popular={false}
          />
          <PricingCard 
            name="Growth Platform"
            price="$20,000–$60,000"
            duration="6–10 weeks"
            features={[
              "Full feature set",
              "SEO-optimized marketing site",
              "Advanced analytics & reporting",
              "Email marketing automation",
              "Customer support system",
              "Performance monitoring",
              "A/B testing platform"
            ]}
            popular={true}
          />
          <PricingCard 
            name="Enterprise Scale"
            price="$60,000+"
            duration="Custom timeline"
            features={[
              "Custom roadmap development",
              "SRE & security hardening",
              "Multi-region deployment",
              "Enterprise SLAs",
              "Custom integrations",
              "White-label options",
              "Dedicated support team"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Build Your Micro SaaS?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your idea and create a custom development plan. We'll help you 
            choose the right features and pricing strategy for your target market.
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
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Address: 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
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
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2 mb-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600">{pricing}</div>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function GrowthFeature({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
        <span className="text-green-600 text-sm">✓</span>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

function OpsFeature({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function PricingCard({ name, price, duration, features, popular }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
  popular: boolean;
}) {
  return (
    <div className={`border rounded-xl p-8 bg-white ${popular ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="text-center mb-4">
          <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-3">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="https://ziontechgroup.com" 
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}