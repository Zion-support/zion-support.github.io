import Link from "next/link";

export const metadata = {
  title: "Services | Zion Tech Group",
  description:
    "Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
          description="LLM applications, RAG systems, and MLOps pipelines"
          bullets={["RAG and agents", "Evals + guardrails", "MLOps pipelines"]}
          icon="🤖"
        />
        <ServiceCard
          href="/services/it-services"
          title="IT Services"
          description="Cloud migration, DevOps, and security solutions"
          bullets={["Cloud migration", "DevOps + SRE", "Security"]}
          icon="⚙️"
        />
        <ServiceCard
          href="/services/automation-tools"
          title="Business Automation"
          description="Intelligent automation tools that streamline operations and boost productivity"
          bullets={["Workflow automation", "Document processing", "Customer service bots"]}
          icon="⚡"
        />
        <ServiceCard
          href="/services/ai-copilots"
          title="AI Copilots"
          description="Intelligent assistants that enhance productivity and automate complex tasks"
          bullets={["Code development", "Customer support", "Sales & marketing"]}
          icon="🧠"
        />
        <ServiceCard
          href="/services/data-analytics"
          title="Data Analytics"
          description="Advanced analytics and BI solutions that transform data into insights"
          bullets={["Real-time dashboards", "Predictive analytics", "AI-powered insights"]}
          icon="📊"
        />
        <ServiceCard
          href="/services/cloud-migration"
          title="Cloud Migration"
          description="Seamless cloud migration with zero downtime and cost optimization"
          bullets={["AWS/Azure/GCP", "Zero-downtime migration", "Cost optimization"]}
          icon="☁️"
        />
        <ServiceCard
          href="/services/ai-content-generation"
          title="AI Content Generation"
          description="Scale content marketing with AI-powered content creation and optimization"
          bullets={["Content creation", "SEO optimization", "Social media automation"]}
          icon="✍️"
        />
        <ServiceCard
          href="/services/blockchain-development"
          title="Blockchain Development"
          description="Secure blockchain applications, smart contracts, and Web3 solutions"
          bullets={["Smart contracts", "DeFi applications", "NFT marketplaces"]}
          icon="⛓️"
        />
        <ServiceCard
          href="/services/email-automation-suite"
          title="Email Automation Suite"
          description="AI-powered email marketing with advanced segmentation and personalization"
          bullets={["AI personalization", "Advanced analytics", "Smart segmentation"]}
          icon="📧"
        />
        <ServiceCard
          href="/services/social-media-scheduler"
          title="Social Media Scheduler"
          description="AI-powered social media management with intelligent scheduling and analytics"
          bullets={["Smart scheduling", "Content creation", "Cross-platform publishing"]}
          icon="📱"
        />
        <ServiceCard
          href="/services/ai-chatbot-builder"
          title="AI Chatbot Builder"
          description="No-code AI chatbot platform with advanced NLP and multi-language support"
          bullets={["No-code builder", "Advanced NLP", "Easy integrations"]}
          icon="🤖"
        />
        <ServiceCard
          href="/services/lead-generation-tool"
          title="Lead Generation Tool"
          description="AI-powered lead generation with automated prospecting and qualification"
          bullets={["AI prospecting", "Automated outreach", "Lead scoring"]}
          icon="🎯"
        />
        <ServiceCard
          href="/services/ai-content-writer"
          title="AI Content Writer"
          description="Advanced AI-powered content creation with SEO optimization and brand voice training"
          bullets={["Multi-format support", "SEO optimization", "Brand voice training"]}
          icon="✍️"
        />
        <ServiceCard
          href="/services/website-analyzer"
          title="Website Analyzer"
          description="Comprehensive website analysis with SEO audit and performance monitoring"
          bullets={["SEO audit", "Performance monitoring", "Competitive intelligence"]}
          icon="🔍"
        />
        <ServiceCard
          href="/services/ai-video-generator"
          title="AI Video Generator"
          description="Create professional videos with AI-powered editing and voice synthesis"
          bullets={["AI video editing", "Voice synthesis", "Multi-format export"]}
          icon="🎬"
        />
        <ServiceCard
          href="/services/cybersecurity-suite"
          title="Cybersecurity Suite"
          description="Enterprise-grade security solutions with threat detection and 24/7 monitoring"
          bullets={["Threat detection", "Vulnerability assessment", "Compliance management"]}
          icon="🛡️"
        />
        <ServiceCard
          href="/services/ai-data-analytics"
          title="AI Data Analytics"
          description="Advanced AI-powered analytics with predictive modeling and real-time insights"
          bullets={["Predictive modeling", "Real-time dashboards", "Business intelligence"]}
          icon="📊"
        />
        <ServiceCard
          href="/services/ai-code-reviewer"
          title="AI Code Reviewer"
          description="Automated code review and quality analysis powered by AI with 99% accuracy"
          bullets={["Intelligent analysis", "Real-time feedback", "Security scanning", "Quality metrics"]}
          icon="🔍"
        />
        <ServiceCard
          href="/services/ai-meeting-assistant"
          title="AI Meeting Assistant"
          description="Transform meetings with AI transcription, action items, and intelligent insights"
          bullets={["Real-time transcription", "Smart action items", "AI summaries", "Meeting analytics"]}
          icon="🎤"
        />
        <ServiceCard
          href="/services/ai-document-processor"
          title="AI Document Processor"
          description="Intelligent document processing with OCR, data extraction, and automated workflows"
          bullets={["Multi-format OCR", "Data extraction", "Automated workflows", "Smart classification"]}
          icon="📄"
        />
        <ServiceCard
          href="/services/invoice-automation"
          title="Invoice Automation"
          description="Automate invoice processing, approval workflows, and payment tracking"
          bullets={["Smart capture", "Automated approval", "Payment processing", "Duplicate detection"]}
          icon="🧾"
        />
        <ServiceCard
          href="/services/expense-tracker"
          title="AI Expense Tracker"
          description="Smart expense tracking with receipt scanning, categorization, and automated reporting"
          bullets={["Receipt scanning", "Smart categorization", "Real-time analytics", "Team management"]}
          icon="💰"
        />
        <ServiceCard
          href="/services/api-testing-suite"
          title="API Testing Suite"
          description="Comprehensive API testing platform with automated testing, monitoring, and documentation"
          bullets={["Automated testing", "Performance testing", "Security testing", "Real-time monitoring"]}
          icon="🧪"
        />
        <ServiceCard
          href="/services/email-campaign-manager"
          title="AI Email Campaign Manager"
          description="Intelligent email marketing with AI personalization, automation, and analytics"
          bullets={["AI personalization", "Advanced analytics", "Automated workflows", "A/B testing"]}
          icon="📧"
        />
        <ServiceCard
          href="/services/ai-customer-insights"
          title="AI Customer Insights"
          description="Unlock customer behavior insights with AI-powered analytics and predictive modeling"
          bullets={["Predictive analytics", "Sentiment analysis", "Customer segmentation", "Churn prediction"]}
          icon="🧠"
        />
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
      <div className="mt-4 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
    </div>
  );
}