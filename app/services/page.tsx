import Link from 'next/link';

export const metadata = {
  title: 'Services | Zion Tech Group',
  description: 'Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.',
};

export default function ServicesOverviewPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Product engineering and AI-first consulting to deliver measurable outcomes for your business.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ServiceCard
          href="/services/micro-saas"
          title="Micro SaaS"
          description="End-to-end product development with billing, auth, and analytics"
          bullets={[
<<<<<<< HEAD
            'Foundational architecture',
            'Billing + subscriptions',
            'Growth analytics'
=======
            "Foundational architecture",
            "Billing + subscriptions", 
            "Growth analytics"
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
          description="Cloud migration, DevOps, and infrastructure management"
          bullets={[
            'Cloud migration & strategy',
            'DevOps & CI/CD',
            'Infrastructure management'
          ]}
          icon="⚙️"
        />
        <ServiceCard
          href="/services/blockchain"
          title="Blockchain Services"
          description="Smart contracts, DeFi protocols, and Web3 solutions"
          bullets={[
            'Smart contracts',
            'DeFi development',
            'NFT platforms'
          ]}
          icon="⛓️"
        />
        <ServiceCard
          href="/services/cybersecurity"
          title="Cybersecurity"
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
          href="/services/cloud-services"
          title="Cloud Services"
          description="Cloud migration, architecture, and optimization solutions"
          bullets={["Cloud migration", "Multi-cloud", "Cost optimization"]}
          icon="☁️"
        />
        <ServiceCard
          href="/services/industry-solutions/healthcare"
          title="Healthcare Solutions"
          description="HIPAA-compliant healthcare technology and telemedicine platforms"
          bullets={["Telemedicine", "EHR systems", "Medical AI", "HIPAA compliance"]}
          icon="🏥"
        />
        <ServiceCard
          href="/services/industry-solutions/finance"
          title="Financial Technology"
          description="Secure fintech solutions including trading platforms and payment systems"
          bullets={["Trading platforms", "Payment processing", "Fraud detection", "Compliance"]}
          icon="💰"
        />
      </div>

      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">
          Let's discuss your project and how we can help you achieve your goals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get a Quote
          </Link>
          <a
            href="https://ziontechgroup.com"
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
          >
            Visit Main Site
          </a>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ 
  href, 
  title, 
  description, 
  bullets, 
  icon 
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
      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {bullets.map((bullet, index) => (
          <li key={index} className="text-sm text-gray-500 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            {bullet}
          </li>
        ))}
      </ul>
    </Link>
  );
}
}