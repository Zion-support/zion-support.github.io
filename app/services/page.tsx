import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Services | Zion Tech Group - AI, Micro SaaS, FinTech, HealthTech & EdTech Solutions",
  description: "Comprehensive technology services including AI solutions, micro SaaS development, FinTech platforms, HealthTech systems, EdTech solutions, and IT infrastructure. Expert solutions for modern enterprises with 500+ successful projects and $2B+ in combined market value.",
  keywords: "AI services, micro SaaS, IT services, FinTech, HealthTech, EdTech, cloud migration, DevOps, enterprise software, blockchain, cybersecurity"
};

interface ServiceCardProps {
  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
  pricing: string;
  category: string;
}

function ServiceCard({ href, title, description, bullets, icon, pricing, category }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group border border-gray-200 rounded-xl p-8 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-4xl">{icon}</div>
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium">{category}</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2 mb-4">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {bullet}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600">
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

export default function ServicesOverviewPage() {
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

      {/* Core Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ServiceCard
          href="/services/micro-saas"
          title="Micro SaaS Solutions"
          description="Complete micro SaaS development from MVP to scale with billing, analytics, and growth optimization"
          bullets={[
            "15+ specialized micro SaaS tools",
            "End-to-end development & deployment",
            "Revenue optimization & scaling",
            "Multi-tenant architecture",
            "Advanced analytics & reporting"
          ]}
          icon="🚀"
          pricing="From $2,999/month"
          category="Micro SaaS"
        />
        <ServiceCard
          href="/services/ai-services"
          title="AI Services"
          description="Advanced AI solutions including LLM applications, RAG systems, and enterprise AI platforms"
          bullets={[
            "15+ AI service categories",
            "Custom LLM development",
            "Enterprise AI integration",
            "Computer vision solutions",
            "Predictive analytics"
          ]}
          icon="🤖"
          pricing="From $5,000/project"
          category="AI/ML"
        />
        <ServiceCard
          href="/services/it-services"
          title="IT Services"
          description="Comprehensive IT solutions including cloud migration, DevOps, security, and infrastructure management"
          bullets={[
            "15+ IT service categories",
            "Cloud migration & optimization",
            "24/7 monitoring & support",
            "Security hardening",
            "Cost optimization"
          ]}
          icon="💻"
          pricing="From $3,000/month"
          category="IT Services"
        />
        <ServiceCard
          href="/services/fintech"
          title="FinTech Solutions"
          description="Complete financial technology solutions including digital banking, payment processing, and trading platforms"
          bullets={[
            "15+ FinTech service categories",
            "Bank-grade security & compliance",
            "Real-time payment processing",
            "Blockchain integration",
            "Regulatory compliance"
          ]}
          icon="💳"
          pricing="From $25,000/project"
          category="FinTech"
        />
        <ServiceCard
          href="/services/healthtech"
          title="HealthTech Solutions"
          description="Healthcare technology solutions including EHR systems, telemedicine platforms, and medical AI"
          bullets={[
            "15+ HealthTech service categories",
            "HIPAA-compliant solutions",
            "Medical AI & diagnostics",
            "Telemedicine platforms",
            "Patient data management"
          ]}
          icon="🏥"
          pricing="From $40,000/project"
          category="HealthTech"
        />
        <ServiceCard
          href="/services/edtech"
          title="EdTech Solutions"
          description="Educational technology platforms including LMS systems, virtual classrooms, and AI-powered learning"
          bullets={[
            "15+ EdTech service categories",
            "Personalized learning AI",
            "Multi-platform compatibility",
            "Student analytics",
            "Content management systems"
          ]}
          icon="🎓"
          pricing="From $30,000/project"
          category="EdTech"
        />
        <ServiceCard
          href="/services/blockchain-solutions"
          title="Blockchain Solutions"
          description="DeFi, NFTs, smart contracts, and Web3 applications with enterprise-grade security"
          bullets={[
            "Smart contracts development",
            "DeFi protocols",
            "Web3 applications",
            "NFT marketplaces",
            "Cryptocurrency integration"
          ]}
          icon="⛓️"
          pricing="From $15,000/project"
          category="Blockchain"
        />
        <ServiceCard
          href="/services/automation-solutions"
          title="Automation Solutions"
          description="RPA, workflow automation, and AI-powered automation for maximum efficiency"
          bullets={[
            "Process automation",
            "Workflow optimization",
            "AI automation",
            "RPA implementation",
            "Business process reengineering"
          ]}
          icon="⚡"
          pricing="From $2,500/month"
          category="Automation"
        />
        <ServiceCard
          href="/services/data-analytics"
          title="Data Analytics"
          description="Business intelligence, predictive analytics, and data engineering for data-driven decisions"
          bullets={[
            "BI dashboards",
            "Predictive analytics",
            "Data engineering",
            "Real-time reporting",
            "Machine learning insights"
          ]}
          icon="📊"
          pricing="From $4,000/month"
          category="Analytics"
        />
        <ServiceCard
          href="/services/cybersecurity"
          title="Cybersecurity"
          description="Comprehensive security solutions and compliance management"
          bullets={[
            "Security assessment",
            "Threat detection",
            "Compliance management",
            "Penetration testing",
            "Incident response"
          ]}
          icon="🔒"
          pricing="From $5,000/month"
          category="Security"
        />
        <ServiceCard
          href="/services/cloud-services"
          title="Cloud Services"
          description="Cloud migration, architecture, and optimization solutions"
          bullets={[
            "Cloud migration",
            "Multi-cloud strategies",
            "Cost optimization",
            "Auto-scaling",
            "Disaster recovery"
          ]}
          icon="☁️"
          pricing="From $3,500/month"
          category="Cloud"
        />
        <ServiceCard
          href="/services/digital-transformation"
          title="Digital Transformation"
          description="Complete digital transformation solutions and legacy modernization"
          bullets={[
            "Process automation",
            "Legacy modernization",
            "Digital strategy",
            "Change management",
            "Technology roadmap"
          ]}
          icon="🔄"
          pricing="From $10,000/project"
          category="Transformation"
        />
      </div>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 rounded-xl mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven track record of delivering exceptional results for businesses across industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard
              number="500+"
              label="Successful Projects"
              description="Delivered across 15+ industries"
            />
            <StatCard
              number="$2B+"
              label="Combined Market Value"
              description="Generated for our clients"
            />
            <StatCard
              number="99.9%"
              label="Uptime Guarantee"
              description="With 24/7 monitoring & support"
            />
            <StatCard
              number="300%"
              label="Average ROI"
              description="For our technology solutions"
            />
          </div>
        </div>
      </section>
      
      <CTA />
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
        Join 500+ successful businesses that trust Zion Tech Group for their technology needs. 
        Get a free consultation and discover how our solutions can drive 300% ROI and accelerate your growth.
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
}