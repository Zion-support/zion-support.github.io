import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: "All Services — Zion Tech Group",
  description: "Discover our premium AI and IT services. From quantum computing to healthcare innovation.",
  alternates: { canonical: "https://ziontechgroup.com/services/" }
};

export default function ServicesPage() {
  return (
    <PageShell
      title="Our Services"
      description="Zion Tech Group delivers premium AI and IT services that transform businesses. Each solution is engineered for impact, backed by expert consultation."
      eyebrow="Catalog"
      align="center"
      canonical="https://ziontechgroup.com/services/"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services' },
      ]}
      actions={
        <>
          <Link href="/contact/" className="btn-primary">Request a proposal</Link>
          <Link href="/tools/service-comparison/" className="btn-secondary">Compare services</Link>
        </>
      }
    >
        <BreadcrumbSchema path="/services/" title="All Services" />
              <div className="bg-slate-900 rounded-xl p-6 mb-4 border border-slate-800 hover:border-purple-500 transition-colors">
        <h3 className="text-xl font-bold mb-2"><Link href="/services/premium/quantum-computing-optimization" className="text-purple-300 hover:text-purple-200">Quantum Computing Optimization Service</Link></h3>
        <p className="text-gray-400 mb-3">Enterprise-grade quantum computing optimization service that helps organizations leverage quantum algorithms for complex optimization problems in logistics, finance, and cryptography.</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs">Quantum</span>
          <span className="bg-slate-800 text-gray-400 px-2 py-1 rounded text-xs">$25,000/month</span>
        </div>
      </div>
      <div className="bg-slate-900 rounded-xl p-6 mb-4 border border-slate-800 hover:border-purple-500 transition-colors">
        <h3 className="text-xl font-bold mb-2"><Link href="/services/premium/enterprise-ai-governance" className="text-purple-300 hover:text-purple-200">Enterprise AI Governance Platform</Link></h3>
        <p className="text-gray-400 mb-3">Comprehensive AI governance solution that ensures compliance, transparency, and ethical AI deployment across your organization.</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs">AI Governance</span>
          <span className="bg-slate-800 text-gray-400 px-2 py-1 rounded text-xs">$22,000/month</span>
        </div>
      </div>
      <div className="bg-slate-900 rounded-xl p-6 mb-4 border border-slate-800 hover:border-purple-500 transition-colors">
        <h3 className="text-xl font-bold mb-2"><Link href="/services/premium/advanced-cybersecurity-ai" className="text-purple-300 hover:text-purple-200">Advanced Cybersecurity AI Defense</Link></h3>
        <p className="text-gray-400 mb-3">Next-generation AI-powered cybersecurity platform that provides proactive threat detection, automated response, and continuous security posture management.</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs">Cybersecurity</span>
          <span className="bg-slate-800 text-gray-400 px-2 py-1 rounded text-xs">$28,000/month</span>
        </div>
      </div>
      <div className="bg-slate-900 rounded-xl p-6 mb-4 border border-slate-800 hover:border-purple-500 transition-colors">
        <h3 className="text-xl font-bold mb-2"><Link href="/services/premium/hyperautomation-enterprise" className="text-purple-300 hover:text-purple-200">Hyperautomation Enterprise Suite</Link></h3>
        <p className="text-gray-400 mb-3">End-to-end hyperautomation platform combining RPA, AI, and process mining to automate complex business processes at scale.</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs">Automation</span>
          <span className="bg-slate-800 text-gray-400 px-2 py-1 rounded text-xs">$20,000/month</span>
        </div>
      </div>
      <div className="bg-slate-900 rounded-xl p-6 mb-4 border border-slate-800 hover:border-purple-500 transition-colors">
        <h3 className="text-xl font-bold mb-2"><Link href="/services/premium/ai-powered-digital-twin" className="text-purple-300 hover:text-purple-200">AI-Powered Digital Twin</Link></h3>
        <p className="text-gray-400 mb-3">Create intelligent digital twins of physical assets, systems, or processes using AI and IoT data for predictive analytics and optimization.</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs">Digital Twin</span>
          <span className="bg-slate-800 text-gray-400 px-2 py-1 rounded text-xs">$24,000/month</span>
        </div>
      </div>
      <div className="bg-slate-900 rounded-xl p-6 mb-4 border border-slate-800 hover:border-purple-500 transition-colors">
        <h3 className="text-xl font-bold mb-2"><Link href="/services/premium/enterprise-risk-management" className="text-purple-300 hover:text-purple-200">AI-Powered Enterprise Risk Management Platform</Link></h3>
        <p className="text-gray-400 mb-3">Leverage artificial intelligence to identify, assess, and mitigate enterprise risks in real-time across financial, operational, strategic, and compliance domains.</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs">Risk Management</span>
          <span className="bg-slate-800 text-gray-400 px-2 py-1 rounded text-xs">$25,000/month</span>
        </div>
      </div>
      <div className="bg-slate-900 rounded-xl p-6 mb-4 border border-slate-800 hover:border-purple-500 transition-colors">
        <h3 className="text-xl font-bold mb-2"><Link href="/services/premium/supply-chain-optimization" className="text-purple-300 hover:text-purple-200">AI-Powered Supply Chain Optimization Platform</Link></h3>
        <p className="text-gray-400 mb-3">Transform your supply chain with artificial intelligence for end-to-end visibility, predictive analytics, and autonomous optimization across global networks.</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs">Supply Chain</span>
          <span className="bg-slate-800 text-gray-400 px-2 py-1 rounded text-xs">$22,000/month</span>
        </div>
      </div>
      <div className="bg-slate-900 rounded-xl p-6 mb-4 border border-slate-800 hover:border-purple-500 transition-colors">
        <h3 className="text-xl font-bold mb-2"><Link href="/services/premium/customer-experience-intelligence" className="text-purple-300 hover:text-purple-200">AI-Powered Customer Experience Intelligence Platform</Link></h3>
        <p className="text-gray-400 mb-3">Elevate customer experiences with artificial intelligence that analyzes behavior, predicts needs, and personalizes interactions across all touchpoints.</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs">Customer Experience</span>
          <span className="bg-slate-800 text-gray-400 px-2 py-1 rounded text-xs">$18,000/month</span>
        </div>
      </div>
      <div className="bg-slate-900 rounded-xl p-6 mb-4 border border-slate-800 hover:border-purple-500 transition-colors">
        <h3 className="text-xl font-bold mb-2"><Link href="/services/premium/healthcare-innovation" className="text-purple-300 hover:text-purple-200">AI-Powered Healthcare Innovation Platform</Link></h3>
        <p className="text-gray-400 mb-3">Revolutionize healthcare delivery with artificial intelligence for improved patient outcomes, operational efficiency, and medical research acceleration.</p>
        <div className="flex flex-wrap gap-2">
          <span className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded text-xs">Healthcare</span>
          <span className="bg-slate-800 text-gray-400 px-2 py-1 rounded text-xs">$28,000/month</span>
        </div>
      </div>
        <div className="mt-8 text-center">
          <a href="https://calendly.com/kleber-ziontechgroup/30min" target="_blank" rel="noopener noreferrer" className="btn-primary">Book a Consultation</a>
        </div>
    </PageShell>
  );
}
