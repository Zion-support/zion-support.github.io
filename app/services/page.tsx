      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <ServiceCard
          href="/services/micro-saas"
          title="Micro SaaS"
          description="End-to-end product development with billing, auth, and analytics"
          bullets={[
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
  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
}) {
  return (
    <Link
      href={href}
          {" "}
          Email Us{" "}
        </a>{" "}
      </div>{" "}
}