import Link from "next/link";
<<<<<<< HEAD

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export const metadata = {
  title: "Services | Zion Tech Group",
  description:
    "Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.",
};
<<<<<<< HEAD

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
=======
export default function ServicesOverviewPage() {
  return (
    <div className="animate-fade-in">
      {" "}
      <div className="text-center mb-16">
        {" "}
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>{" "}
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {" "}
          Product engineering and AI-first consulting to deliver measurable
          outcomes for your business.{" "}
        </p>{" "}
      </div>{" "}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
            "Multi-tenant architecture"
=======
            "Billing + subscriptions", 
            "Growth analytics"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          ]}
          icon="🚀"
        />
        <ServiceCard
          href="/services/ai-services"
          title="AI Services"
<<<<<<< HEAD
          description="LLM applications, RAG systems, and MLOps pipelines"
          bullets={["RAG and agents", "Evals + guardrails", "MLOps pipelines", "Custom AI solutions"]}
=======
          description="LLM applications, RAG systems, and AI automation"
          bullets={[
            'Custom LLM development',
            'RAG systems',
            'AI agents & automation'
          ]}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          icon="🤖"
        />
        <ServiceCard
          href="/services/it-services"
          title="IT Services"
<<<<<<< HEAD
          description="Cloud migration, DevOps, and security solutions"
          bullets={["Cloud migration", "DevOps + SRE", "Security", "Infrastructure management"]}
=======
          description="Cloud migration, DevOps, and infrastructure management"
          bullets={[
            'Cloud migration & strategy',
            'DevOps & CI/CD',
            'Infrastructure management'
          ]}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          icon="⚙️"
        />
        <ServiceCard
          href="/services/blockchain"
<<<<<<< HEAD
          title="Blockchain Solutions"
          description="DeFi, NFTs, smart contracts, and Web3 applications"
          bullets={["Smart contracts", "DeFi protocols", "NFT marketplaces", "Web3 development"]}
=======
          title="Blockchain Services"
          description="Smart contracts, DeFi protocols, and Web3 solutions"
          bullets={[
            'Smart contracts',
            'DeFi development',
            'NFT platforms'
          ]}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          icon="⛓️"
        />
        <ServiceCard
          href="/services/cybersecurity"
          title="Cybersecurity"
<<<<<<< HEAD
          description="Penetration testing, security audits, and incident response"
          bullets={["Security assessment", "Penetration testing", "Compliance", "Incident response"]}
          icon="🔒"
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
          href="/services/project-management-suite"
          title="Project Management Suite"
          description="All-in-one project management platform with AI-powered insights and team collaboration"
          bullets={["AI-powered insights", "Team collaboration", "Resource planning", "Progress tracking"]}
          icon="📋"
        />
        <ServiceCard
          href="/services/crm-solution"
          title="AI-Powered CRM"
          description="Intelligent customer relationship management with AI-driven insights and automation"
          bullets={["AI lead scoring", "Customer insights", "Sales automation", "Predictive analytics"]}
          icon="👤"
        />
        <ServiceCard
          href="/services/ai-analytics-platform"
          title="AI Analytics Platform"
          description="Advanced business intelligence platform with AI and machine learning capabilities"
          bullets={["Data integration", "AI-powered analytics", "Real-time visualization", "Predictive modeling"]}
          icon="📈"
        />
        <ServiceCard
          href="/services/ai-customer-support"
          title="AI Customer Support"
          description="Intelligent customer support with AI chatbots and automated ticket management"
          bullets={["AI chatbots", "Ticket automation", "Sentiment analysis", "24/7 support"]}
          icon="🤖"
        />
        <ServiceCard
          href="/services/ai-marketing-automation"
          title="AI Marketing Automation"
          description="Intelligent marketing automation with AI personalization and campaign optimization"
          bullets={["AI campaigns", "Customer segmentation", "Predictive analytics", "ROI optimization"]}
          icon="📧"
        />
        <ServiceCard
          href="/services/ai-document-processor"
          title="AI Document Processor"
          description="Intelligent document processing with OCR, data extraction, and automated workflows"
          bullets={["OCR & text extraction", "Data processing", "Workflow automation", "99% accuracy"]}
          icon="📄"
        />
        <ServiceCard
          href="/services/ai-inventory-management"
          title="AI Inventory Management"
          description="Intelligent inventory management with predictive analytics and automated reordering"
          bullets={["Demand forecasting", "Automated reordering", "Cost optimization", "Real-time tracking"]}
          icon="📦"
        />
        <ServiceCard
          href="/services/ai-financial-analyzer"
          title="AI Financial Analyzer"
          description="Intelligent financial analysis with AI-powered insights and predictive modeling"
          bullets={["Financial forecasting", "Risk assessment", "Cost optimization", "Investment analysis"]}
          icon="💰"
        />
        <ServiceCard
          href="/services/ai-hr-management"
          title="AI HR Management"
          description="Intelligent human resources with AI recruitment and employee analytics"
          bullets={["AI recruitment", "Employee analytics", "Performance tracking", "Retention analysis"]}
          icon="👥"
        />
        <ServiceCard
          href="/services/ai-code-reviewer"
          title="AI Code Reviewer"
          description="Automated code review and quality analysis powered by AI"
          bullets={["Intelligent analysis", "Bug detection", "Quality metrics", "Custom rules"]}
          icon="🔍"
        />
        <ServiceCard
          href="/services/ai-meeting-transcriber"
          title="AI Meeting Transcriber"
          description="Transform meetings into actionable insights with AI transcription"
          bullets={["Real-time transcription", "Smart summarization", "Speaker ID", "Action items"]}
          icon="🎤"
        />
        <ServiceCard
          href="/services/ai-expense-tracker"
          title="AI Expense Tracker"
          description="Smart expense tracking and financial management powered by AI"
          bullets={["Receipt scanning", "Auto-categorization", "Analytics", "Mobile app"]}
          icon="💰"
        />
        <ServiceCard
          href="/services/cloud-security-audit"
          title="Cloud Security Audit"
          description="Comprehensive cloud security assessment and compliance auditing"
          bullets={["Infrastructure assessment", "Vulnerability scanning", "Compliance", "Detailed reporting"]}
          icon="🛡️"
        />
        <ServiceCard
          href="/services/devops-automation"
          title="DevOps Automation"
          description="Streamline development workflow with comprehensive automation solutions"
          bullets={["CI/CD pipelines", "Infrastructure as Code", "Monitoring", "Security integration"]}
          icon="🔄"
        />
        <ServiceCard
          href="/services/ai-customer-insights"
          title="AI Customer Insights"
          description="Transform customer data into actionable insights with AI analytics"
          bullets={["Behavioral analysis", "Predictive analytics", "Segmentation", "Sentiment analysis"]}
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
=======
          description="Penetration testing, security audits, and compliance"
          bullets={[
            'Security audits',
            'Penetration testing',
            'Compliance management'
          ]}
          icon="🔒"
        />
        <ServiceCard
          href="/services/data-analytics"
          title="Data Analytics"
          description="Business intelligence, predictive analytics, and data science"
          bullets={[
            'BI dashboards',
            'Predictive analytics',
            'Data warehousing'
          ]}
          icon="📊"
        />
        <ServiceCard
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
    </div>
  );
}
function ServiceCard({
  href
  title
  description
  bullets
  icon
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
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
=======
      {" "}
      <div className="text-4xl mb-4">{icon}</div>{" "}
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>{" "}
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>{" "}
      <ul className="text-gray-600 space-y-2">
        {" "}
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center">
            {" "}
            <span className="text-blue-500 mr-2">•</span> {bullet}{" "}
          </li>
        ))}{" "}
      </ul>{" "}
    </Link>
  );
}
function CTA() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      {" "}
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Get Started?
      </h3>{" "}
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        {" "}
        Talk to our experts about your project. We&apos;ll help you choose the right
        service and create a custom solution for your business needs.{" "}
      </p>{" "}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {" "}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <a
          href="tel:+13024640950"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
<<<<<<< HEAD
          Call +1 302 464 0950
        </a>
=======
          {" "}
          Call +1 302 464 0950{" "}
        </a>{" "}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>
  );
}