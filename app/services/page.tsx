
import Link from 'next/link';

export const metadata = {
  title: "Services | Zion Tech Group",
  description: "Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.",
};

export default function ServicesOverviewPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Product engineering and AI-first consulting to deliver measurable
          outcomes for your business.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <ServiceCard
          href="/services/micro-saas"
          title="Micro SaaS"
          description="End-to-end product development with billing, auth, and analytics"
          bullets={[
            "Foundational architecture",
            "Billing + subscriptions",
            "Growth analytics",
            "Multi-tenant systems",
            "API development"
          ]}
          icon="🚀"
        />
        <ServiceCard
          href="/services/ai-services"
          title="AI Services"
          description="LLM applications, RAG systems, and MLOps pipelines"
          bullets={["RAG and agents", "Evals + guardrails", "MLOps pipelines", "Fine-tuning", "Vector databases"]}
          icon="🤖"
        />
        <ServiceCard
          href="/services/it-services"
          title="IT Services"
          description="Cloud migration, DevOps, and security solutions"
          bullets={["Cloud migration", "DevOps + SRE", "Security", "Cost optimization", "Monitoring"]}
          icon="⚙️"
        />
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Micro SaaS Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ServiceCard
            href="/services/email-automation"
            title="Email Automation"
            description="Build powerful email automation platforms with drip campaigns and personalization"
            bullets={["Campaign management", "AI personalization", "Analytics & insights", "Multi-channel support"]}
            icon="📧"
          />
          <ServiceCard
            href="/services/social-media-management"
            title="Social Media Management"
            description="Comprehensive social media management tools with scheduling and analytics"
            bullets={["Multi-platform posting", "Content calendar", "Team collaboration", "Client management"]}
            icon="📱"
          />
          <ServiceCard
            href="/services/project-management"
            title="Project Management"
            description="Build comprehensive project management tools with task tracking and collaboration"
            bullets={["Task management", "Team collaboration", "Reporting & analytics", "Resource management"]}
            icon="📋"
          />
          <ServiceCard
            href="/services/crm-platform"
            title="CRM Platform"
            description="Powerful CRM platforms with lead management and sales tracking"
            bullets={["Lead management", "Sales pipeline", "Customer management", "Automation workflows"]}
            icon="👥"
          />
          <ServiceCard
            href="/services/analytics-dashboard"
            title="Analytics Dashboard"
            description="Build powerful analytics dashboards with real-time data visualization"
            bullets={["Data visualization", "Real-time processing", "Custom metrics", "Business intelligence"]}
            icon="📊"
          />
          <ServiceCard
            href="/services/helpdesk-platform"
            title="Helpdesk Platform"
            description="Comprehensive helpdesk platforms with ticket management and knowledge base"
            bullets={["Ticket management", "Knowledge base", "Customer support", "Team collaboration"]}
            icon="🎧"
          />
          <ServiceCard
            href="/services/ecommerce-platform"
            title="E-commerce Platform"
            description="Build powerful e-commerce platforms with payment processing and inventory management"
            bullets={["Product management", "Payment & checkout", "Customer features", "Multi-channel selling"]}
            icon="🛒"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ServiceCard
            href="/services/ai-chatbot"
            title="AI Chatbot"
            description="Build intelligent AI chatbots with natural language processing and multi-channel support"
            bullets={["Natural language processing", "Multi-channel integration", "Advanced features", "Custom training"]}
            icon="🤖"
          />
          <ServiceCard
            href="/services/ai-content-generation"
            title="AI Content Generation"
            description="Build AI-powered content generation platforms with text, image, and video creation"
            bullets={["Text generation", "Visual content", "Video & audio", "Brand consistency"]}
            icon="✍️"
          />
          <ServiceCard
            href="/services/ai-data-analysis"
            title="AI Data Analysis"
            description="Build AI-powered data analysis platforms with automated insights and predictive analytics"
            bullets={["Automated insights", "Predictive analytics", "Data processing", "Machine learning models"]}
            icon="🔍"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">IT Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ServiceCard
            href="/services/cloud-migration"
            title="Cloud Migration"
            description="Professional cloud migration services with AWS, Azure, and GCP expertise"
            bullets={["Migration planning", "Cloud platforms", "Security & compliance", "Zero-downtime migration"]}
            icon="☁️"
          />
          <ServiceCard
            href="/services/devops-automation"
            title="DevOps Automation"
            description="Professional DevOps automation with CI/CD pipelines and infrastructure as code"
            bullets={["CI/CD pipelines", "Infrastructure as code", "Monitoring & observability", "Security automation"]}
            icon="⚙️"
          />
          <ServiceCard
            href="/services/cybersecurity"
            title="Cybersecurity"
            description="Comprehensive cybersecurity services including security audits and compliance solutions"
            bullets={["Security assessment", "Security implementation", "Compliance & governance", "Incident response"]}
            icon="🔒"
          />
        </div>
      </div>
      <CTA />
    </div>
  );
}

function ServiceCard({ 
  href, 
  title, 
  description, 
  bullets, 
  icon 
}: { 
  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
}) {
  return (
    <Link
      href={href}
      className="group border border-gray-200 rounded-xl p-8 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {bullet}
          </li>
        ))}
      </ul>
    </Link>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Get Started?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Talk to our experts about your project. We'll help you choose the right
        service and create a custom solution for your business needs.
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
  );
}