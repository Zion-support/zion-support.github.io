export const metadata = { 
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Comprehensive micro SaaS development services including AI-powered tools, automation platforms, and specialized business solutions.'
};

export default function MicroSaaSPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Micro SaaS Development
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
          We design, build, launch and operate revenue-generating micro SaaS products end-to-end. 
          From AI-powered tools to specialized business solutions, we create products that solve real problems.
        </p>
      </section>

      {/* Featured Micro SaaS Services */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Micro SaaS Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MicroSaaSCard
            title="AI Content Generator"
            description="AI-powered content creation platform with templates, brand voice training, and multi-channel distribution"
            features={["GPT-4 integration", "Brand voice training", "Multi-language support", "SEO optimization", "Social media scheduling"]}
            pricing="$2,999/month"
            category="AI Tools"
            icon="🤖"
          />
          <MicroSaaSCard
            title="Invoice Automation Pro"
            description="Automated invoice processing with OCR, approval workflows, and accounting integration"
            features={["OCR processing", "Smart categorization", "Approval workflows", "QuickBooks integration", "Mobile app"]}
            pricing="$1,999/month"
            category="Business Automation"
            icon="📄"
          />
          <MicroSaaSCard
            title="Social Media Scheduler"
            description="Advanced social media management with AI content suggestions and analytics"
            features={["Multi-platform posting", "AI content suggestions", "Analytics dashboard", "Team collaboration", "Bulk upload"]}
            pricing="$1,499/month"
            category="Marketing Tools"
            icon="📱"
          />
          <MicroSaaSCard
            title="Project Time Tracker"
            description="Time tracking and productivity analytics for remote teams and freelancers"
            features={["Automatic time tracking", "Project categorization", "Team dashboards", "Client reporting", "Integrations"]}
            pricing="$999/month"
            category="Productivity"
            icon="⏱️"
          />
          <MicroSaaSCard
            title="Email Marketing Suite"
            description="Advanced email marketing with automation, segmentation, and analytics"
            features={["Drag-drop builder", "Automation workflows", "Advanced segmentation", "A/B testing", "Deliverability tools"]}
            pricing="$1,299/month"
            category="Marketing Tools"
            icon="📧"
          />
          <MicroSaaSCard
            title="Customer Support Hub"
            description="AI-powered customer support with chatbots, ticket management, and knowledge base"
            features={["AI chatbots", "Ticket management", "Knowledge base", "Multi-channel support", "Analytics"]}
            pricing="$2,499/month"
            category="Customer Service"
            icon="🎧"
          />
        </div>
      </section>

      {/* Core Development Services */}
      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Development Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceItem 
            title="Core Platform Development" 
            details={[
              "Multi-tenant architecture",
              "Authentication & authorization",
              "Payment processing (Stripe)",
              "Admin dashboard & analytics",
              "In-app onboarding flows",
              "API development & documentation"
            ]} 
          />
          <ServiceItem 
            title="Growth & Marketing Stack" 
            details={[
              "SEO-optimized marketing site",
              "Blog & documentation system",
              "Email marketing automation",
              "Referral & affiliate programs",
              "A/B testing framework",
              "Analytics & conversion tracking"
            ]} 
          />
          <ServiceItem 
            title="Operations & Reliability" 
            details={[
              "CI/CD pipeline setup",
              "Monitoring & observability",
              "Error tracking & alerting",
              "Performance optimization",
              "Security hardening",
              "24/7 support setup"
            ]} 
          />
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Development Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingPlan 
            name="MVP Sprint" 
            price="$8,000 - $20,000" 
            duration="2-4 weeks"
            features={[
              "Core MVP features",
              "Basic authentication",
              "Stripe integration",
              "Simple admin panel",
              "Basic analytics",
              "Deployment & hosting"
            ]}
            popular={false}
          />
          <PricingPlan 
            name="Growth Platform" 
            price="$20,000 - $60,000" 
            duration="6-10 weeks"
            features={[
              "Full feature set",
              "Advanced analytics",
              "SEO optimization",
              "Email automation",
              "Team collaboration",
              "Mobile responsiveness"
            ]}
            popular={true}
          />
          <PricingPlan 
            name="Enterprise Scale" 
            price="$60,000+" 
            duration="12+ weeks"
            features={[
              "Custom architecture",
              "Advanced security",
              "Multi-region deployment",
              "SLA guarantees",
              "Dedicated support",
              "Custom integrations"
            ]}
            popular={false}
          />
        </div>
      </section>

      {/* Contact CTA */}
      <ContactSection />
    </div>
  );
}

function MicroSaaSCard({ title, description, features, pricing, category, icon }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  category: string;
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-green-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t pt-4">
        <div className="text-2xl font-bold text-gray-900 mb-2">{pricing}</div>
        <a 
          href="tel:+13024640950"
          className="w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors block"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

function ServiceItem({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PricingPlan({ name, price, duration, features, popular }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white border rounded-xl p-6 ${popular ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="bg-blue-600 text-white text-center py-1 px-3 rounded-full text-sm font-medium mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950"
        className={`w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors block ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
        }`}
      >
        Contact Us
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Build Your Micro SaaS?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your idea and create a custom solution that drives real revenue. 
        Our team has launched 50+ successful micro SaaS products.
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
      <div className="mt-6 text-sm text-gray-600">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );
}