import Link from "next/link";

export const metadata = {
  title: "Micro SaaS Solutions | Zion Tech Group - Complete SaaS Development",
  description: "End-to-end micro SaaS development from MVP to scale. Custom SaaS applications with billing, analytics, user management, and growth optimization. Starting from $2,999/month.",
};

export default function MicroSaaSPage() {
  const microSaaSServices = [
    {
      title: "AI-Powered Content Generator",
      description: "Automated content creation platform with AI writing, SEO optimization, and multi-platform publishing",
      features: ["AI content generation", "SEO optimization", "Multi-platform publishing", "Content analytics"],
      pricing: "$2,999/month",
      icon: "✍️",
      category: "Content & Marketing"
    },
    {
      title: "Smart Invoice & Billing System",
      description: "Automated invoicing platform with payment processing, expense tracking, and financial analytics",
      features: ["Automated invoicing", "Payment processing", "Expense tracking", "Financial reports"],
      pricing: "$3,499/month",
      icon: "💰",
      category: "Finance & Accounting"
    },
    {
      title: "Project Management Hub",
      description: "Comprehensive project management with team collaboration, time tracking, and resource planning",
      features: ["Task management", "Team collaboration", "Time tracking", "Resource planning"],
      pricing: "$2,799/month",
      icon: "📋",
      category: "Productivity"
    },
    {
      title: "Customer Support Automation",
      description: "AI-powered customer support with chatbots, ticket management, and knowledge base",
      features: ["AI chatbots", "Ticket management", "Knowledge base", "Analytics dashboard"],
      pricing: "$3,199/month",
      icon: "🎧",
      category: "Customer Service"
    },
    {
      title: "Social Media Scheduler",
      description: "Multi-platform social media management with content scheduling and analytics",
      features: ["Multi-platform posting", "Content scheduling", "Analytics & insights", "Team collaboration"],
      pricing: "$2,599/month",
      icon: "📱",
      category: "Social Media"
    },
    {
      title: "Email Marketing Platform",
      description: "Advanced email marketing with automation, segmentation, and detailed analytics",
      features: ["Email automation", "List segmentation", "A/B testing", "Detailed analytics"],
      pricing: "$2,899/month",
      icon: "📧",
      category: "Marketing"
    },
    {
      title: "HR Management System",
      description: "Complete HR solution with employee management, payroll, and performance tracking",
      features: ["Employee database", "Payroll management", "Performance tracking", "Compliance tools"],
      pricing: "$4,199/month",
      icon: "👥",
      category: "Human Resources"
    },
    {
      title: "Inventory Management",
      description: "Smart inventory tracking with automated reordering and supply chain optimization",
      features: ["Inventory tracking", "Automated reordering", "Supply chain analytics", "Multi-location support"],
      pricing: "$3,799/month",
      icon: "📦",
      category: "E-commerce"
    },
    {
      title: "Analytics Dashboard",
      description: "Custom business intelligence platform with real-time data visualization and reporting",
      features: ["Real-time dashboards", "Custom reports", "Data visualization", "API integration"],
      pricing: "$3,299/month",
      icon: "📊",
      category: "Analytics"
    },
    {
      title: "Document Management System",
      description: "Secure document storage with version control, collaboration, and automated workflows",
      features: ["Secure storage", "Version control", "Collaboration tools", "Workflow automation"],
      pricing: "$2,699/month",
      icon: "📄",
      category: "Document Management"
    },
    {
      title: "Lead Generation Platform",
      description: "Automated lead capture and nurturing with CRM integration and sales analytics",
      features: ["Lead capture forms", "Automated nurturing", "CRM integration", "Sales analytics"],
      pricing: "$3,599/month",
      icon: "🎯",
      category: "Sales & CRM"
    },
    {
      title: "Time Tracking & Productivity",
      description: "Employee time tracking with productivity analytics and automated reporting",
      features: ["Time tracking", "Productivity analytics", "Automated reporting", "Team insights"],
      pricing: "$2,399/month",
      icon: "⏰",
      category: "Productivity"
    },
    {
      title: "Survey & Feedback Platform",
      description: "Advanced survey creation with analytics, automation, and multi-channel distribution",
      features: ["Survey builder", "Multi-channel distribution", "Advanced analytics", "Automation"],
      pricing: "$2,199/month",
      icon: "📝",
      category: "Research & Feedback"
    },
    {
      title: "API Management Platform",
      description: "Complete API lifecycle management with monitoring, security, and developer tools",
      features: ["API gateway", "Monitoring & analytics", "Security controls", "Developer portal"],
      pricing: "$4,499/month",
      icon: "🔌",
      category: "Developer Tools"
    },
    {
      title: "Subscription Management",
      description: "Complete subscription billing with dunning management and customer self-service",
      features: ["Subscription billing", "Dunning management", "Customer portal", "Revenue analytics"],
      pricing: "$3,899/month",
      icon: "🔄",
      category: "Billing & Subscriptions"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Micro SaaS Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Complete micro SaaS development from MVP to scale. We build specialized software solutions 
          that solve specific business problems with modern technology and proven growth strategies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free Consultation
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Request Quote
          </a>
        </div>
      </div>

      {/* Key Benefits */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Micro SaaS Solutions?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapid Development</h3>
            <p className="text-gray-600">MVP to market in 30-60 days with our proven development process</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable Architecture</h3>
            <p className="text-gray-600">Built to handle growth from startup to enterprise scale</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Revenue Focused</h3>
            <p className="text-gray-600">Built-in monetization strategies and growth optimization</p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Micro SaaS Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {microSaaSServices.map((service, index) => (
            <MicroSaaSCard key={index} service={service} />
          ))}
        </div>
      </div>

      {/* Development Process */}
      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Development Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery & Planning</h3>
            <p className="text-gray-600">Market research, user interviews, and technical architecture planning</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">MVP Development</h3>
            <p className="text-gray-600">Rapid prototyping and core feature development with modern tech stack</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Testing & Launch</h3>
            <p className="text-gray-600">Comprehensive testing, security audit, and production deployment</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth & Scale</h3>
            <p className="text-gray-600">Ongoing optimization, feature additions, and scaling support</p>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <TechStackItem name="React/Next.js" description="Frontend Framework" />
          <TechStackItem name="Node.js/Express" description="Backend Runtime" />
          <TechStackItem name="PostgreSQL/MongoDB" description="Database" />
          <TechStackItem name="AWS/Azure" description="Cloud Infrastructure" />
          <TechStackItem name="Stripe/PayPal" description="Payment Processing" />
          <TechStackItem name="Redis" description="Caching & Sessions" />
          <TechStackItem name="Docker/Kubernetes" description="Containerization" />
          <TechStackItem name="GitHub Actions" description="CI/CD Pipeline" />
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Starter"
            price="$2,999"
            period="month"
            description="Perfect for new micro SaaS ideas"
            features={[
              "Basic SaaS application",
              "User authentication",
              "Payment integration",
              "Basic analytics",
              "Email support"
            ]}
          />
          <PricingCard
            title="Professional"
            price="$4,999"
            period="month"
            description="For growing businesses"
            features={[
              "Advanced features",
              "API development",
              "Advanced analytics",
              "Multi-tenant support",
              "Priority support"
            ]}
            popular={true}
          />
          <PricingCard
            title="Enterprise"
            price="Custom"
            period=""
            description="For large-scale solutions"
            features={[
              "Custom development",
              "White-label solution",
              "Dedicated support",
              "SLA guarantee",
              "24/7 monitoring"
            ]}
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Micro SaaS?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Let's discuss your idea and create a custom micro SaaS solution that drives real business value.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            Email Us
          </a>
        </div>
        <div className="mt-6 text-sm">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </div>
  );
}

function MicroSaaSCard({ service }: { service: any }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{service.icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
          <span className="text-sm text-blue-600 font-medium">{service.category}</span>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <ul className="text-sm text-gray-600 space-y-1 mb-4">
        {service.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600">{service.pricing}</div>
    </div>
  );
}

function TechStackItem({ name, description }: { name: string; description: string }) {
  return (
    <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
      <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function PricingCard({ title, price, period, description, features, popular = false }: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div className={`relative p-6 rounded-xl border-2 ${popular ? 'border-blue-500 bg-white' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        {period && <span className="text-gray-600">/{period}</span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-3">✓</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}