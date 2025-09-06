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
<<<<<<< HEAD
            "Billing + subscriptions",
            "Growth analytics",
=======
            "Billing + subscriptions", 
            "Growth analytics"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
          href="/services/ai-copilots"
          title="AI Copilots"
          description="Intelligent assistants that enhance productivity and automate complex tasks"
          bullets={["Code development", "Customer support", "Sales & marketing"]}
          icon="🧠"
=======
          href="/services/automation-solutions"
          title="Automation Solutions"
          description="RPA, workflow automation, and AI-powered automation"
          bullets={["Process automation", "Workflow optimization", "AI automation"]}
          icon="⚡"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
        />
        <ServiceCard
          href="/services/data-analytics"
          title="Data Analytics"
          description="Advanced analytics and BI solutions that transform data into insights"
          bullets={["Real-time dashboards", "Predictive analytics", "AI-powered insights"]}
          icon="📊"
        />
        <ServiceCard
<<<<<<< HEAD
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
          href="/services/ai-powered-crm"
          title="AI-Powered CRM"
          description="Revolutionary CRM with AI automation, predictive analytics, and 300% sales boost"
          bullets={["Intelligent lead scoring", "Smart sales automation", "Advanced analytics", "AI customer service"]}
          icon="🎯"
        />
        <ServiceCard
          href="/services/ai-content-optimizer"
          title="AI Content Optimizer"
          description="AI-powered content creation and optimization that increases engagement by 400%"
          bullets={["AI content generation", "SEO optimization", "Performance analytics", "Multi-language support"]}
          icon="✍️"
        />
        <ServiceCard
          href="/services/ai-finance-analyzer"
          title="AI Finance Analyzer"
          description="Advanced financial analysis with real-time insights and automated investment recommendations"
          bullets={["Market analysis", "Portfolio optimization", "Financial planning", "Risk assessment"]}
          icon="💰"
        />
        <ServiceCard
          href="/services/ai-healthcare-assistant"
          title="AI Healthcare Assistant"
          description="Revolutionary healthcare AI for diagnosis support, patient monitoring, and treatment optimization"
          bullets={["Diagnosis support", "Patient monitoring", "Clinical decisions", "Healthcare analytics"]}
          icon="🏥"
        />
        <ServiceCard
          href="/services/cybersecurity-suite"
          title="Cybersecurity Suite"
          description="Comprehensive security solutions with threat detection, monitoring, and 24/7 protection"
          bullets={["Threat detection", "Vulnerability management", "Network security", "SOC services"]}
          icon="🔒"
        />
        <ServiceCard
          href="/services/cloud-optimization"
          title="Cloud Optimization"
          description="AI-powered cloud optimization that reduces costs by 40% and improves performance by 60%"
          bullets={["Cost optimization", "Performance tuning", "Security hardening", "Migration services"]}
          icon="☁️"
        />
      </div>
      <CTA />
=======
          href="/services/digital-transformation"
          title="Digital Transformation"
          description="Complete digital transformation solutions and legacy modernization"
          bullets={["Process automation", "Legacy modernization", "Digital strategy"]}
          icon="🔄"
        />
        <ServiceCard
          href="/services/cybersecurity"
          title="Cybersecurity"
          description="Comprehensive security solutions and compliance management"
          bullets={["Security assessment", "Threat detection", "Compliance"]}
          icon="🔒"
        />
        <ServiceCard
          href="/services/cloud-services"
          title="Cloud Services"
          description="Cloud migration, architecture, and optimization solutions"
          bullets={["Cloud migration", "Multi-cloud", "Cost optimization"]}
          icon="☁️"
        />
      </div>
      <CTA />{" "}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
        Talk to our experts about your project. We'll help you choose the right
        service and create a custom solution for your business needs.
      </p>
=======
        {" "}
        Talk to our experts about your project. We&apos;ll help you choose the right
        service and create a custom solution for your business needs.{" "}
      </p>{" "}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
          Email Us
        </a>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
=======
          {" "}
          Email Us{" "}
        </a>{" "}
      </div>{" "}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    </div>
  );
}