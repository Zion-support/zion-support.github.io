export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT solutions including cloud migration, DevOps, cybersecurity, and infrastructure management. Enterprise-grade technology services.'
}; 

export default function ITServicesPage() { 
  return ( 
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">IT Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cloud migration, DevOps, SRE and security services engineered for uptime and efficiency. 
            Enterprise-grade solutions that scale with your business.
          </p>
        </div>

        {/* IT Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ITServiceCategory
            title="Cloud & Infrastructure"
            icon="☁️"
            description="Scalable cloud solutions and infrastructure management"
            services={[
              "AWS/GCP/Azure migration",
              "Kubernetes orchestration",
              "Serverless architecture",
              "Infrastructure as Code (Terraform)",
              "Multi-cloud strategies",
              "Cost optimization"
            ]}
          />
          <ITServiceCategory
            title="DevOps & SRE"
            icon="⚙️"
            description="Reliable deployment and operational excellence"
            services={[
              "CI/CD pipeline automation",
              "Monitoring & observability",
              "Auto-scaling & load balancing",
              "Chaos engineering",
              "Incident response",
              "Performance optimization"
            ]}
          />
          <ITServiceCategory
            title="Cybersecurity"
            icon="🔒"
            description="Comprehensive security solutions and compliance"
            services={[
              "Security hardening",
              "Zero Trust architecture",
              "Vulnerability management",
              "Compliance (SOC2, GDPR, HIPAA)",
              "Penetration testing",
              "Security monitoring"
            ]}
          />
        </div>

        {/* Real IT Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">IT Solutions We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ITSolution
              title="Cloud Migration & Modernization"
              description="Seamless migration to cloud with modern architecture"
              features={[
                "Legacy system migration",
                "Container orchestration",
                "Microservices architecture",
                "Database migration",
                "Performance optimization"
              ]}
              price="$25k - $100k"
              timeline="8-16 weeks"
              useCase="Enterprise, startups, scale-ups"
            />
            <ITSolution
              title="DevOps Automation Platform"
              description="Complete CI/CD and deployment automation"
              features={[
                "GitOps workflows",
                "Automated testing",
                "Blue-green deployments",
                "Infrastructure monitoring",
                "Rollback capabilities"
              ]}
              price="$15k - $50k"
              timeline="6-12 weeks"
              useCase="SaaS, e-commerce, fintech"
            />
            <ITSolution
              title="Cybersecurity Assessment"
              description="Comprehensive security audit and hardening"
              features={[
                "Security vulnerability scan",
                "Penetration testing",
                "Compliance assessment",
                "Security policy creation",
                "Incident response planning"
              ]}
              price="$10k - $30k"
              timeline="4-8 weeks"
              useCase="Healthcare, finance, government"
            />
            <ITSolution
              title="Infrastructure Monitoring"
              description="24/7 monitoring and alerting system"
              features={[
                "Real-time monitoring",
                "Custom dashboards",
                "Automated alerting",
                "Log aggregation",
                "Performance analytics"
              ]}
              price="$8k - $25k"
              timeline="3-6 weeks"
              useCase="Any business with critical systems"
            />
            <ITSolution
              title="Disaster Recovery Solution"
              description="Business continuity and disaster recovery planning"
              features={[
                "Backup automation",
                "Failover systems",
                "Recovery testing",
                "RTO/RPO optimization",
                "Documentation & training"
              ]}
              price="$12k - $40k"
              timeline="4-10 weeks"
              useCase="Enterprise, critical systems"
            />
            <ITSolution
              title="Compliance & Governance"
              description="Regulatory compliance and governance framework"
              features={[
                "SOC2 Type II preparation",
                "GDPR compliance",
                "HIPAA compliance",
                "Audit preparation",
                "Policy documentation"
              ]}
              price="$20k - $60k"
              timeline="8-16 weeks"
              useCase="Healthcare, finance, SaaS"
            />
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technologies We Master</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ITTechnology
              category="Cloud Platforms"
              technologies={["AWS", "Google Cloud", "Microsoft Azure", "DigitalOcean", "Linode"]}
            />
            <ITTechnology
              category="Containerization"
              technologies={["Docker", "Kubernetes", "Helm", "Istio", "Prometheus"]}
            />
            <ITTechnology
              category="Infrastructure"
              technologies={["Terraform", "Ansible", "Packer", "Vault", "Consul"]}
            />
            <ITTechnology
              category="Monitoring"
              technologies={["Grafana", "ELK Stack", "Datadog", "New Relic", "Splunk"]}
            />
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">IT Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ITPricingPlan
              name="Assessment & Planning"
              price="$4k - $10k"
              duration="2-3 weeks"
              features={[
                "Infrastructure audit",
                "Security assessment",
                "Performance analysis",
                "Migration roadmap",
                "Cost optimization plan",
                "Technology recommendations"
              ]}
              popular={false}
            />
            <ITPricingPlan
              name="Implementation"
              price="$15k - $50k"
              duration="4-12 weeks"
              features={[
                "Cloud migration",
                "DevOps setup",
                "Security hardening",
                "Monitoring implementation",
                "Documentation",
                "Team training"
              ]}
              popular={true}
            />
            <ITPricingPlan
              name="Managed Services"
              price="$5k+/month"
              duration="Ongoing"
              features={[
                "24/7 monitoring",
                "Incident response",
                "Security updates",
                "Performance optimization",
                "Monthly reports",
                "Dedicated support"
              ]}
              popular={false}
            />
          </div>
        </div>

        {/* Industry Expertise */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Industry Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <IndustryCard
              title="Healthcare"
              description="HIPAA compliant solutions"
              icon="🏥"
              compliance={["HIPAA", "SOC2", "HITRUST"]}
            />
            <IndustryCard
              title="Financial Services"
              description="Secure fintech infrastructure"
              icon="🏦"
              compliance={["PCI DSS", "SOX", "GDPR"]}
            />
            <IndustryCard
              title="E-commerce"
              description="High-availability platforms"
              icon="🛒"
              compliance={["PCI DSS", "SOC2", "GDPR"]}
            />
            <IndustryCard
              title="SaaS"
              description="Scalable multi-tenant systems"
              icon="💻"
              compliance={["SOC2", "GDPR", "ISO 27001"]}
            />
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Proven Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              metric="99.9%"
              description="Uptime achieved"
              icon="⚡"
            />
            <MetricCard
              metric="50%"
              description="Infrastructure cost reduction"
              icon="💰"
            />
            <MetricCard
              metric="10x"
              description="Faster deployment times"
              icon="🚀"
            />
            <MetricCard
              metric="Zero"
              description="Security breaches"
              icon="🔒"
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your IT?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can optimize your infrastructure, enhance security, and improve operational efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm">
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ITServiceCategory({ title, icon, description, services }: {
  title: string;
  icon: string;
  description: string;
  services: string[];
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-2">•</span>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ITSolution({ title, description, features, price, timeline, useCase }: {
  title: string;
  description: string;
  features: string[];
  price: string;
  timeline: string;
  useCase: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          {useCase}
        </span>
      </div>
      <ul className="space-y-1 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div>
          <div className="font-bold text-green-600">{price}</div>
          <div className="text-sm text-gray-500">{timeline}</div>
        </div>
        <a
          href="tel:+13024640950"
          className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
        >
          Get Quote
        </a>
      </div>
    </div>
  );
}

function ITTechnology({ category, technologies }: { category: string; technologies: string[] }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
      <h3 className="font-bold text-gray-900 mb-4">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function ITPricingPlan({ name, price, duration, features, popular }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white rounded-xl p-8 shadow-lg border-2 ${popular ? 'border-green-500' : 'border-gray-200'} relative`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-green-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full mt-6 py-3 rounded-lg font-semibold text-center block transition-colors ${
          popular 
            ? 'bg-green-600 text-white hover:bg-green-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function IndustryCard({ title, description, icon, compliance }: {
  title: string;
  description: string;
  icon: string;
  compliance: string[];
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-1 justify-center">
        {compliance.map((comp, index) => (
          <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
            {comp}
          </span>
        ))}
      </div>
    </div>
  );
}

function MetricCard({ metric, description, icon }: { metric: string; description: string; icon: string }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-3xl font-bold text-green-600 mb-2">{metric}</div>
      <div className="text-gray-600">{description}</div>
    </div>
  );
}