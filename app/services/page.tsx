<<<<<<< HEAD
<<<<<<< HEAD
import Link from "next/link";
=======
import Link from "next/link";

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
export const metadata = {
  title: "Services | Zion Tech Group",
  description:
    "Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.",
};
<<<<<<< HEAD
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
=======

import Link from 'next/link';

export const metadata = {
  title: "Services | Zion Tech Group",
  description: "Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.",
};

export default function ServicesOverviewPage() {
  return (
    <div className="animate-fade-in">
=======

export default function ServicesOverviewPage() {
  return (
    <div className="animate-fade-in">
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Product engineering and AI-first consulting to deliver measurable
          outcomes for your business.
        </p>
      </div>
<<<<<<< HEAD
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
=======
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        <ServiceCard
          href="/services/micro-saas"
          title="Micro SaaS"
          description="End-to-end product development with billing, auth, and analytics"
          bullets={[
            "Foundational architecture",
<<<<<<< HEAD
<<<<<<< HEAD
            "Billing + subscriptions", 
            "Growth analytics"
=======
            "Billing + subscriptions",
            "Growth analytics",
            "Multi-tenant systems",
            "API development",
            "Admin dashboards"
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
=======
            "Billing + subscriptions",
            "Growth analytics",
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          ]}
          icon="🚀"
        />
        <ServiceCard
          href="/services/ai-services"
          title="AI Services"
          description="LLM applications, RAG systems, and MLOps pipelines"
<<<<<<< HEAD
<<<<<<< HEAD
          bullets={["RAG and agents", "Evals + guardrails", "MLOps pipelines"]}
=======
          bullets={[
            "RAG and agents",
            "Evals + guardrails",
            "MLOps pipelines",
            "Custom model training",
            "AI integration",
            "Data processing"
          ]}
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
=======
          bullets={["RAG and agents", "Evals + guardrails", "MLOps pipelines"]}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          icon="🤖"
        />
        <ServiceCard
          href="/services/it-services"
          title="IT Services"
          description="Cloud migration, DevOps, and security solutions"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
          bullets={["Cloud migration", "DevOps + SRE", "Security"]}
          icon="⚙️"
        />
        <ServiceCard
<<<<<<< HEAD
          href="/services/blockchain-solutions"
          title="Blockchain Solutions"
          description="DeFi, NFTs, smart contracts, and Web3 applications"
          bullets={["Smart contracts", "DeFi protocols", "Web3 apps"]}
          icon="⛓️"
        />
        <ServiceCard
          href="/services/automation-solutions"
          title="Automation Solutions"
          description="RPA, workflow automation, and AI-powered automation"
          bullets={["Process automation", "Workflow optimization", "AI automation"]}
          icon="⚡"
=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        />
        <ServiceCard
          href="/services/data-analytics"
          title="Data Analytics"
<<<<<<< HEAD
          description="Business intelligence, predictive analytics, and data engineering"
          bullets={["BI dashboards", "Predictive analytics", "Data engineering"]}
          icon="📊"
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
}: {
=======
          bullets={[
            "Cloud migration",
            "DevOps + SRE",
            "Security",
            "Infrastructure automation",
            "Monitoring & alerting",
            "Cost optimization"
          ]}
          icon="⚙️"
=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        />
      </div>
      <CTA />
    </div>
  );
}

<<<<<<< HEAD
function ServiceCard({ 
  href, 
  title, 
  description, 
  bullets, 
  icon 
}: { 
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
=======
function ServiceCard({
  href,
  title,
  description,
  bullets,
  icon,
}: {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
<<<<<<< HEAD
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
=======
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
=======
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Get Started?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Talk to our experts about your project. We'll help you choose the right
        service and create a custom solution for your business needs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        <a
          href="tel:+13024640950"
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
<<<<<<< HEAD
<<<<<<< HEAD
          {" "}
          Call +1 302 464 0950{" "}
        </a>{" "}
=======
          Call +1 302 464 0950
        </a>
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
=======
          Call +1 302 464 0950
        </a>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
        >
<<<<<<< HEAD
<<<<<<< HEAD
          {" "}
          Email Us{" "}
        </a>{" "}
      </div>{" "}
=======
          Email Us
        </a>
      </div>
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840
=======
          Email Us
        </a>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
      </div>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    </div>
  );
}