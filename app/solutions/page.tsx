import Link from "next/link";

export const metadata = {
  title: "Solutions | Zion Tech Group",
  description: "Comprehensive AI and technology solutions designed to transform your business operations.",
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and technology solutions designed to transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <SolutionCard
            title="AI-Powered Solutions"
            description="Leverage artificial intelligence to automate processes, gain insights, and enhance decision-making."
            icon="🤖"
            features={["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]}
            href="/services/ai-services"
          />
          <SolutionCard
            title="Micro SaaS Development"
            description="Build scalable, revenue-generating software products that solve specific business problems."
            icon="🚀"
            features={["Full-Stack Development", "Payment Integration", "User Management", "Analytics"]}
            href="/services/micro-saas"
          />
          <SolutionCard
            title="IT Infrastructure"
            description="Modernize your IT infrastructure with cloud migration, DevOps, and security solutions."
            icon="⚙️"
            features={["Cloud Migration", "DevOps & SRE", "Cybersecurity", "Infrastructure Management"]}
            href="/services/it-services"
          />
          <SolutionCard
            title="Blockchain Solutions"
            description="Implement decentralized solutions including DeFi, NFTs, and Web3 applications."
            icon="⛓️"
            features={["Smart Contracts", "DeFi Protocols", "NFT Marketplaces", "Web3 Apps"]}
            href="/services/blockchain-solutions"
          />
          <SolutionCard
            title="AI Automation"
            description="Automate business processes with intelligent workflows and robotic process automation."
            icon="⚡"
            features={["RPA", "Workflow Automation", "Process Mining", "Cognitive Automation"]}
            href="/services/ai-automation-suite"
          />
          <SolutionCard
            title="Data Analytics"
            description="Transform raw data into actionable insights with advanced analytics and business intelligence."
            icon="📊"
            features={["Business Intelligence", "Predictive Analytics", "Data Warehousing", "Real-time Dashboards"]}
            href="/services/data-analytics"
          />
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our solutions can help you achieve your business goals and drive growth.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}
