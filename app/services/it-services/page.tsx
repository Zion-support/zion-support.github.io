export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Professional IT services including cloud migration, DevOps, cybersecurity, infrastructure automation, and cost optimization. Enterprise-grade solutions.'
};

export default function ITServicesPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">IT Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Cloud migration, DevOps, SRE, security hardening and cost optimization. 
          We provide enterprise-grade IT solutions that scale with your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Item 
          title="Cloud Migration" 
          details={[
            "AWS, Azure, GCP migration",
            "Lift and shift strategies",
            "Cloud-native architecture",
            "Cost optimization",
            "Security compliance",
            "Performance monitoring"
          ]} 
        />
        <Item 
          title="DevOps & SRE" 
          details={[
            "CI/CD pipeline setup",
            "Infrastructure as Code",
            "Monitoring & alerting",
            "Incident response",
            "Capacity planning",
            "Disaster recovery"
          ]} 
        />
        <Item 
          title="Security & Compliance" 
          details={[
            "Security assessments",
            "Penetration testing",
            "Compliance audits",
            "Identity management",
            "Data protection",
            "Security training"
          ]} 
        />
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our IT Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ITSolution
            title="Cloud Infrastructure Setup"
            description="Complete cloud infrastructure design and implementation"
            features={["Multi-cloud strategy", "Auto-scaling", "Load balancing", "Backup solutions"]}
            pricing="$8,000–$25,000"
            icon="☁️"
          />
          <ITSolution
            title="DevOps Automation"
            description="Automated deployment and infrastructure management"
            features={["CI/CD pipelines", "Infrastructure as Code", "Monitoring setup", "Auto-scaling"]}
            pricing="$12,000–$35,000"
            icon="🔄"
          />
          <ITSolution
            title="Security Audit & Hardening"
            description="Comprehensive security assessment and hardening"
            features={["Vulnerability scanning", "Penetration testing", "Security policies", "Compliance check"]}
            pricing="$5,000–$15,000"
            icon="🔒"
          />
          <ITSolution
            title="Database Optimization"
            description="Database performance tuning and optimization"
            features={["Query optimization", "Index tuning", "Backup strategy", "Monitoring setup"]}
            pricing="$6,000–$18,000"
            icon="🗄️"
          />
          <ITSolution
            title="Network Infrastructure"
            description="Network design, implementation, and management"
            features={["Network design", "VPN setup", "Firewall config", "Monitoring tools"]}
            pricing="$10,000–$30,000"
            icon="🌐"
          />
          <ITSolution
            title="Disaster Recovery"
            description="Business continuity and disaster recovery planning"
            features={["Backup strategy", "Recovery testing", "RTO/RPO planning", "Documentation"]}
            pricing="$8,000–$22,000"
            icon="🛡️"
          />
          <ITSolution
            title="IT Support & Maintenance"
            description="24/7 IT support and system maintenance"
            features={["24/7 monitoring", "Incident response", "System updates", "Performance tuning"]}
            pricing="$2,500/month"
            icon="⚙️"
          />
          <ITSolution
            title="Compliance & Governance"
            description="Regulatory compliance and IT governance"
            features={["Compliance audit", "Policy development", "Risk assessment", "Training programs"]}
            pricing="$7,000–$20,000"
            icon="📋"
          />
          <ITSolution
            title="Cost Optimization"
            description="Cloud and infrastructure cost reduction strategies"
            features={["Cost analysis", "Resource optimization", "Right-sizing", "Reserved instances"]}
            pricing="$3,000–$8,000"
            icon="💰"
          />
        </div>
      </div>

      <Pricing />
      
      <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Optimize Your IT?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's discuss your IT challenges and create a solution that improves performance, security, and cost efficiency.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail) => (
          <li key={detail} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">•</span>
            <span className="text-gray-600">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ITSolution({ 
  title, 
  description, 
  features, 
  pricing, 
  icon 
}: { 
  title: string; 
  description: string; 
  features: string[]; 
  pricing: string; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="space-y-2 mb-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </div>
        ))}
      </div>
      <div className="text-2xl font-bold text-green-600">{pricing}</div>
    </div>
  );
}

function Pricing() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">IT Service Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="IT Assessment" 
          price="$3k–$8k" 
          duration="1–2 weeks"
          features={[
            "Infrastructure audit",
            "Security assessment",
            "Performance analysis",
            "Cost analysis",
            "Recommendations report",
            "Implementation roadmap"
          ]} 
        />
        <Plan 
          name="IT Transformation" 
          price="$15k–$50k" 
          duration="4–12 weeks"
          features={[
            "Cloud migration",
            "DevOps implementation",
            "Security hardening",
            "Monitoring setup",
            "Team training",
            "Documentation"
          ]} 
          popular={true}
        />
        <Plan 
          name="IT Management" 
          price="$5k/month" 
          duration="Ongoing"
          features={[
            "24/7 monitoring",
            "Incident response",
            "Regular maintenance",
            "Security updates",
            "Performance optimization",
            "Dedicated support"
          ]} 
        />
      </div>
    </div>
  );
}

function Plan({ 
  name, 
  price, 
  duration, 
  features, 
  popular = false 
}: { 
  name: string; 
  price: string; 
  duration: string; 
  features: string[]; 
  popular?: boolean; 
}) {
  return (
    <div className={`border rounded-xl p-8 bg-white relative ${popular ? 'border-green-500 ring-2 ring-green-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=IT Services Inquiry"
        className={`mt-6 w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-green-600 text-white hover:bg-green-700' 
            : 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}