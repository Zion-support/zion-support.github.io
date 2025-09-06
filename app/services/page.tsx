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
            "Growth analytics"
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
          href="/services/ai-video-generator"
          title="AI Video Generator"
          description="Create professional videos with AI-powered editing and voice synthesis"
          bullets={["AI video editing", "Voice synthesis", "Template library"]}
          icon="🎬"
        />
        <ServiceCard
          href="/services/cybersecurity-suite"
          title="Cybersecurity Suite"
          description="Comprehensive security solutions to protect your digital assets"
          bullets={["Threat detection", "Security audits", "Compliance management"]}
          icon="🔒"
        />
        <ServiceCard
          href="/services/data-science"
          title="Data Science"
          description="Advanced data science solutions with machine learning and predictive analytics"
          bullets={["Machine learning", "Predictive models", "Data visualization"]}
          icon="📈"
        />
        <ServiceCard
          href="/services/devops"
          title="DevOps"
          description="Streamline development workflows with CI/CD and infrastructure automation"
          bullets={["CI/CD pipelines", "Infrastructure as code", "Monitoring & alerting"]}
          icon="🔄"
        />
        <ServiceCard
          href="/services/lead-generation-tool"
          title="Lead Generation Tool"
          description="AI-powered lead generation and qualification with advanced targeting"
          bullets={["AI targeting", "Lead scoring", "CRM integration"]}
          icon="🎯"
        />
        <ServiceCard
          href="/services/website-analyzer"
          title="Website Analyzer"
          description="Comprehensive website analysis with performance optimization recommendations"
          bullets={["Performance audit", "SEO analysis", "Security scan"]}
          icon="🔍"
        />
      </div>
      
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Why Choose Zion Tech Group?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Rapid development cycles with agile methodologies</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
            <p className="text-gray-600">Track record of successful project deliveries</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
            <p className="text-gray-600">Dedicated support team for ongoing maintenance</p>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact us today to discuss your project requirements and get a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/pricing"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ href, title, description, bullets, icon }: {
  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
}) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-1">
        {bullets.map((bullet, index) => (
          <li key={index} className="text-sm text-gray-500 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {bullet}
          </li>
        ))}
      </ul>
    </Link>
  );
}