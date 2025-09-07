<<<<<<< HEAD
import Link from "next/link";

export const metadata = {
  title: "Services | Zion Tech Group",
  description: "Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.",
};

export default function ServicePage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your business with cutting-edge technology solutions. From AI-powered micro SaaS to enterprise FinTech platforms, 
          we deliver measurable outcomes with 99.9% uptime, bank-grade security, and 24/7 expert support.
        </p>
      </div>

      {/* Statistics Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard 
            number="500+" 
            label="Successful Projects" 
            description="Delivered worldwide" 
          />
          <StatCard 
            number="$2B+" 
            label="Combined Market Value" 
            description="Generated for clients" 
          />
          <StatCard 
            number="99.9%" 
            label="Uptime Guarantee" 
            description="Enterprise reliability" 
          />
          <StatCard 
            number="300%" 
            label="Average ROI" 
            description="Client return on investment" 
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ServiceCard
          href="/services/micro-saas"
          title="Micro SaaS Solutions"
          description="Complete micro SaaS development from MVP to scale with billing, analytics, and growth optimization"
          bullets={[
            "Foundational architecture",
            "Billing + subscriptions", 
            "Growth analytics"
          ]}
          icon="🚀"
          pricing="From $2,999/month"
        />
        <ServiceCard
          href="/services/ai-services"
          title="AI Services"
          description="LLM applications, RAG systems, and MLOps pipelines"
          bullets={["RAG and agents", "Evals + guardrails", "MLOps pipelines"]}
          icon="🤖"
          pricing="From $5,000/project"
        />
        <ServiceCard
          href="/services/it-services"
          title="IT Services"
          description="Cloud migration, DevOps, and security solutions"
          bullets={["Cloud migration", "DevOps + SRE", "Security"]}
          icon="⚙️"
          pricing="From $3,000/month"
        />
        <ServiceCard
          href="/services/blockchain-solutions"
          title="Blockchain Solutions"
          description="Comprehensive blockchain development, DeFi solutions, NFT platforms, and Web3 integration"
          bullets={[
            "Smart contract development",
            "DeFi protocol creation",
            "NFT marketplace platforms",
            "Cross-chain solutions"
          ]}
          icon="⛓️"
          pricing="From $5,000/project"
        />
        <ServiceCard
          href="/services/ai-automation-suite"
          title="AI Automation Suite"
          description="Intelligent automation solutions including RPA, workflow automation, and process optimization"
          bullets={[
            "80% manual task reduction",
            "300% productivity increase",
            "RPA implementation",
            "Workflow orchestration"
          ]}
          icon="🤖"
          pricing="From $2,500/month"
        />
        <ServiceCard
          href="/services/cybersecurity-solutions"
          title="Cybersecurity Solutions"
          description="Comprehensive security services including threat detection, compliance, and 24/7 monitoring"
          bullets={[
            "99.9% security uptime",
            "Threat detection & response",
            "Compliance management",
            "24/7 monitoring"
          ]}
          icon="🛡️"
          pricing="From $2,500/month"
        />
        <ServiceCard
          href="/services/cloud-solutions"
          title="Cloud Solutions"
          description="Cloud migration, optimization, and management services for AWS, Azure, and GCP"
          bullets={[
            "99.9% cloud uptime",
            "40% cost reduction",
            "Multi-cloud support",
            "24/7 monitoring"
          ]}
          icon="☁️"
          pricing="From $3,000/month"
        />
        <ServiceCard
          href="/services/data-analytics"
          title="Data Analytics & BI"
          description="Advanced analytics, business intelligence, and machine learning solutions"
          bullets={[
            "95% data accuracy",
            "300% faster insights",
            "Machine learning models",
            "Real-time dashboards"
          ]}
          icon="📊"
          pricing="From $3,500/month"
        />
        <ServiceCard
          href="/services/ai-content-generator"
          title="AI Content Generator Pro"
          description="Advanced AI-powered content creation platform for blogs, social media, and marketing materials"
          bullets={[
            "Multi-language support",
            "SEO optimization",
            "Brand voice consistency",
            "Plagiarism detection"
          ]}
          icon="✍️"
          pricing="From $199/month"
        />
        <ServiceCard
          href="/services/smart-invoice-generator"
          title="Smart Invoice Generator"
          description="Automated invoice creation with AI-powered expense categorization and payment tracking"
          bullets={[
            "Auto-expense categorization",
            "Payment reminders",
            "Multi-currency support",
            "Tax compliance"
          ]}
          icon="🧾"
          pricing="From $149/month"
        />
        <ServiceCard
          href="/services/ai-social-scheduler"
          title="AI Social Media Scheduler"
          description="Intelligent social media management with optimal posting times and content suggestions"
          bullets={[
            "Optimal timing AI",
            "Content suggestions",
            "Multi-platform posting",
            "Analytics dashboard"
          ]}
          icon="📱"
          pricing="From $99/month"
        />
        <ServiceCard
          href="/services/ai-meeting-assistant"
          title="AI Meeting Assistant"
          description="Automated meeting transcription, action item extraction, and follow-up management"
          bullets={[
            "Real-time transcription",
            "Action item extraction",
            "Meeting summaries",
            "Calendar integration"
          ]}
          icon="🎤"
          pricing="From $179/month"
        />
        <ServiceCard
          href="/services/ai-customer-insights"
          title="AI Customer Insights Platform"
          description="Advanced customer behavior analysis and predictive insights for business growth"
          bullets={[
            "Behavioral analytics",
            "Churn prediction",
            "Personalization engine",
            "ROI tracking"
          ]}
          icon="👥"
          pricing="From $299/month"
        />
        <ServiceCard
          href="/services/ai-project-manager"
          title="AI Project Manager"
          description="Intelligent project management with automated task assignment and progress tracking"
          bullets={[
            "Smart task assignment",
            "Progress prediction",
            "Resource optimization",
            "Risk assessment"
          ]}
          icon="📋"
          pricing="From $249/month"
        />
        <ServiceCard
          href="/services/ai-finance-analyzer"
          title="AI Finance Analyzer"
          description="Automated financial analysis, budgeting, and investment recommendations"
          bullets={[
            "Expense categorization",
            "Budget optimization",
            "Investment insights",
            "Financial forecasting"
          ]}
          icon="💰"
          pricing="From $199/month"
        />
        <ServiceCard
          href="/services/ai-email-optimizer"
          title="AI Email Optimizer"
          description="Email marketing optimization with AI-powered subject lines and content suggestions"
          bullets={[
            "Subject line optimization",
            "Send time optimization",
            "A/B testing automation",
            "Open rate improvement"
          ]}
          icon="📧"
          pricing="From $129/month"
        />
        <ServiceCard
          href="/services/ai-seo-analyzer"
          title="AI SEO Analyzer"
          description="Comprehensive SEO analysis and optimization recommendations powered by AI"
          bullets={[
            "Keyword research",
            "Content optimization",
            "Competitor analysis",
            "Ranking predictions"
          ]}
          icon="🔍"
          pricing="From $179/month"
        />
        <ServiceCard
          href="/services/ai-inventory-manager"
          title="AI Inventory Manager"
          description="Smart inventory management with demand forecasting and automated reordering"
          bullets={[
            "Demand forecasting",
            "Automated reordering",
            "Waste reduction",
            "Cost optimization"
          ]}
          icon="📦"
          pricing="From $299/month"
        />
        <ServiceCard
          href="/services/ai-hr-assistant"
          title="AI HR Assistant"
          description="Automated HR processes including resume screening, interview scheduling, and employee analytics"
          bullets={[
            "Resume screening",
            "Interview scheduling",
            "Employee analytics",
            "Performance tracking"
          ]}
          icon="👔"
          pricing="From $229/month"
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
  pricing
}: {
  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
  pricing: string;
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
      <div className="mt-4 text-lg font-semibold text-blue-600">
        {pricing}
      </div>
    </Link>
  );
}

function StatCard({ 
  number, 
  label, 
  description 
}: { 
  number: string; 
  label: string; 
  description: string; 
}) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
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
      <div className="mt-6 text-sm text-gray-600">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );
=======
import ComprehensiveServicesShowcase2025 from '../../components/ComprehensiveServicesShowcase2025';

export const metadata = {
  title: 'Comprehensive Services 2025 | Zion Tech Group - AI, Micro SaaS & IT Solutions',
  description: 'Explore our extensive portfolio of 20+ innovative micro SAAS solutions, AI services, and IT solutions. From AI customer insights to blockchain solutions, we deliver enterprise-grade services that drive business transformation.',
  keywords: 'micro saas, ai services, it solutions, business automation, cloud infrastructure, cybersecurity, data analytics, project management, e-commerce, healthcare, edtech, blockchain, fintech, enterprise solutions',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Comprehensive Services 2025 | Zion Tech Group',
    description: 'Explore our extensive portfolio of innovative micro SAAS solutions, AI services, and IT solutions designed to transform your business.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comprehensive Services 2025 | Zion Tech Group',
    description: 'Explore our extensive portfolio of innovative micro SAAS solutions, AI services, and IT solutions designed to transform your business.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ServicePage() {
  return <ComprehensiveServicesShowcase2025 />;
}
>>>>>>> 66636f0649a4af9daff867918bf1282f740567c2
}