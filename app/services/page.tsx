
export const metadata = {
  title: "Services | Zion Tech Group",
  description:
    "Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.",
};
import Link from 'next/link';

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
          ]}
          icon="🚀"
        />
        <ServiceCard
          href="/services/ai-services"
          title="AI Services"
          description="LLM applications, RAG systems, and AI automation"
          bullets={[
            'Custom LLM development',
            'RAG systems',
            'AI agents & automation'
          ]}
          icon="🤖"
        />
        <ServiceCard
          href="/services/it-services"
          title="IT Services"
          description="Cloud migration, DevOps, and security solutions"
          href="/services/blockchain-solutions"
          title="Blockchain Solutions"
          description="DeFi, NFTs, smart contracts, and Web3 applications"
          bullets={["Smart contracts", "DeFi protocols", "Web3 apps"]}
          icon="⛓️"
        />
      </div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Innovative Micro SAAS Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            href="/services/ai-analytics-dashboard"
            title="AI Analytics Dashboard"
            description="Transform data into actionable insights with AI-powered analytics"
            bullets={["Real-time visualization", "Predictive analytics", "Automated reporting"]}
            icon="📊"
          />
          <ServiceCard
            href="/services/social-media-automation"
            title="Social Media Automation"
            description="Automate your social presence with AI-powered content creation"
            bullets={["Auto-generated posts", "Smart scheduling", "Engagement analytics"]}
            icon="📱"
          />
          <ServiceCard
            href="/services/smart-invoice-generator"
            title="Smart Invoice Generator"
            description="Automate invoicing with AI-powered generation and payment tracking"
            bullets={["Auto-populate invoices", "Payment automation", "Financial analytics"]}
            icon="💰"
          />
          <ServiceCard
            href="/services/customer-feedback-analyzer"
            title="Customer Feedback Analyzer"
            description="Transform feedback into insights with AI sentiment analysis"
            bullets={["Sentiment analysis", "Trend detection", "Automated reporting"]}
            icon="💬"
          />
          <ServiceCard
            href="/services/ai-project-management"
            title="AI Project Management"
            description="Streamline projects with AI-powered task management and optimization"
            bullets={["Smart task assignment", "Team collaboration", "Project analytics"]}
            icon="📋"
          />
          <ServiceCard
            href="/services/email-marketing-automation"
            title="Email Marketing Automation"
            description="Boost ROI with AI-powered email campaigns and personalization"
            bullets={["Personalized campaigns", "Advanced segmentation", "Comprehensive analytics"]}
            icon="📧"
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
  icon,
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

}