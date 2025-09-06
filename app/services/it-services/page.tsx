export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and digital transformation. Enterprise-grade solutions for modern businesses.'
};

export default function ITServicesPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          IT <span className="text-blue-600">Services</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Cloud, DevOps, SRE and security services engineered for uptime and efficiency. 
          We help businesses modernize their IT infrastructure and optimize operations for scale and performance.
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
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our IT Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITServiceCard
            title="Cloud Migration & Management"
            description="Complete cloud migration services with AWS, Azure, and GCP expertise. Optimize costs and performance."
            features={["Multi-cloud strategy", "Cost optimization", "Performance tuning", "Disaster recovery", "Auto-scaling", "Monitoring & alerting"]}
            pricing="$15,000 - $150,000"
            marketSize="$445B cloud computing market"
            icon="☁️"
          />
          <ITServiceCard
            title="DevOps & CI/CD"
            description="Modern DevOps practices with automated pipelines, infrastructure as code, and continuous deployment."
            features={["CI/CD pipelines", "Infrastructure as Code", "Container orchestration", "GitOps workflows", "Automated testing", "Deployment automation"]}
            pricing="$10,000 - $100,000"
            marketSize="$8.2B DevOps market"
            icon="🔄"
          />
          <ITServiceCard
            title="Cybersecurity & Compliance"
            description="Comprehensive security solutions including threat detection, vulnerability management, and compliance."
            features={["Security assessment", "Threat detection", "Vulnerability management", "Compliance auditing", "Security training", "Incident response"]}
            pricing="$20,000 - $200,000"
            marketSize="$155B cybersecurity market"
            icon="🔒"
          />
          <ITServiceCard
            title="Site Reliability Engineering (SRE)"
            description="Proactive monitoring, incident response, and reliability engineering for mission-critical systems."
            features={["SLO/SLI definition", "Error budget management", "Incident response", "Post-mortem analysis", "Capacity planning", "Performance optimization"]}
            pricing="$25,000 - $250,000"
            marketSize="$3.1B SRE market"
            icon="⚡"
          />
          <ITServiceCard
            title="Infrastructure Automation"
            description="Infrastructure as Code, automated provisioning, and configuration management for scalable systems."
            features={["Terraform/Ansible", "Configuration management", "Automated provisioning", "Environment management", "State management", "Policy enforcement"]}
            pricing="$12,000 - $120,000"
            marketSize="$2.8B infrastructure automation market"
            icon="🏗️"
          />
          <ITServiceCard
            title="Database Management"
            description="Database design, optimization, migration, and management for high-performance applications."
            features={["Database design", "Performance tuning", "Migration services", "Backup & recovery", "Monitoring", "Security hardening"]}
            pricing="$8,000 - $80,000"
            marketSize="$4.2B database management market"
            icon="🗄️"
          />
          <ITServiceCard
            title="Network & Security Architecture"
            description="Secure network design, VPN setup, firewall configuration, and network monitoring solutions."
            features={["Network design", "VPN configuration", "Firewall management", "Load balancing", "Network monitoring", "Traffic analysis"]}
            pricing="$15,000 - $150,000"
            marketSize="$5.6B network security market"
            icon="🌐"
          />
          <ITServiceCard
            title="IT Consulting & Strategy"
            description="Strategic IT planning, technology assessment, and digital transformation consulting."
            features={["Technology assessment", "Digital transformation", "IT strategy planning", "Vendor evaluation", "ROI analysis", "Change management"]}
            pricing="$5,000 - $50,000"
            marketSize="$1.8B IT consulting market"
            icon="💡"
          />
          <ITServiceCard
            title="Managed IT Services"
            description="24/7 managed IT services including monitoring, maintenance, and support for your infrastructure."
            features={["24/7 monitoring", "Proactive maintenance", "Incident response", "Performance optimization", "Security updates", "Regular reporting"]}
            pricing="$2,000 - $20,000/month"
            marketSize="$3.2B managed services market"
            icon="🛠️"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our IT Services?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We combine deep technical expertise with business acumen to deliver IT solutions that drive real value.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            title="Enterprise-Grade"
            description="Solutions designed for enterprise scale with proven reliability and security standards."
          />
          <FeatureCard
            title="Cost Optimization"
            description="Reduce IT costs by up to 40% through efficient resource utilization and automation."
          />
          <FeatureCard
            title="24/7 Support"
            description="Round-the-clock monitoring and support to ensure maximum uptime and performance."
          />
          <FeatureCard
            title="Future-Proof"
            description="Modern, scalable solutions that grow with your business and adapt to new technologies."
          />
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">IT Service Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ITPricingCard
            name="IT Assessment"
            price="$4,000 - $10,000"
            duration="2-3 weeks"
            features={[
              "Infrastructure audit",
              "Security assessment",
              "Performance analysis",
              "Cost optimization review",
              "Technology roadmap",
              "Recommendations report"
            ]}
            bestFor="Businesses evaluating IT needs"
          />
          <ITPricingCard
            name="Implementation"
            price="$15,000 - $50,000"
            duration="4-8 weeks"
            features={[
              "Infrastructure setup",
              "Security implementation",
              "CI/CD pipeline setup",
              "Monitoring configuration",
              "Documentation",
              "Team training"
            ]}
            bestFor="IT modernization projects"
            popular={true}
          />
          <ITPricingCard
            name="Managed Services"
            price="$2,000 - $20,000/month"
            duration="Ongoing"
            features={[
              "24/7 monitoring",
              "Proactive maintenance",
              "Incident response",
              "Performance optimization",
              "Security updates",
              "Monthly reporting"
            ]}
            bestFor="Ongoing IT management"
          />
        </div>
      </section>

      <section className="py-12 bg-blue-50 rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Modernize Your IT Infrastructure?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our IT experts have helped 200+ businesses optimize their infrastructure and reduce costs. 
            Let's discuss how we can transform your IT operations.
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
              Email kleber@ziontechgroup.com
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Address: 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
}

function ITServiceCard({ 
  title, 
  description, 
  features, 
  pricing, 
  marketSize, 
  icon 
}: { 
  title: string; 
  description: string; 
  features: string[]; 
  pricing: string; 
  marketSize: string; 
  icon: string; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="text-lg font-semibold text-blue-600 mb-1">{pricing}</div>
        <div className="text-sm text-gray-500">{marketSize}</div>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-blue-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ITPricingCard({ 
  name, 
  price, 
  duration, 
  features, 
  bestFor, 
  popular = false 
}: { 
  name: string; 
  price: string; 
  duration: string; 
  features: string[]; 
  bestFor: string; 
  popular?: boolean; 
}) {
  return (
    <div className={`relative bg-white border rounded-xl p-8 ${popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-blue-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-sm text-gray-500 mb-4">Best for: {bestFor}</div>
      <a
        href="tel:+13024640950"
        className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}