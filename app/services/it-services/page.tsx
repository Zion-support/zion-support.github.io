
export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, security, and infrastructure management for modern businesses.'
};

export default function ITServicesPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">IT Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Cloud, DevOps, SRE and security services engineered for uptime and efficiency. 
          We build and maintain robust IT infrastructure that scales with your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Item 
          title="Cloud & Infrastructure" 
          details={[
            "AWS/GCP/Azure migration",
            "Kubernetes orchestration",
            "Serverless architecture",
            "Infrastructure as Code (Terraform)",
            "Multi-cloud strategies",
            "Cost optimization"
          ]} 
        />
        <Item 
          title="DevOps & SRE" 
          details={[
            "CI/CD pipeline setup",
            "Monitoring & observability",
            "Autoscaling & load balancing",
            "Chaos engineering testing",
            "Incident response",
            "Performance optimization"
          ]} 
        />
        <Item 
          title="Security & Compliance" 
          details={[
            "Security hardening",
            "Zero Trust architecture",
            "Vulnerability management",
            "Compliance frameworks",
            "Penetration testing",
            "Security training"
          ]} 
        />
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our IT Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Cloud Migration"
            description="Seamless migration to AWS, Azure, or Google Cloud with zero downtime"
            price="Starting at $25k"
            features={["Assessment & planning", "Data migration", "Application modernization", "Post-migration support"]
          />
          <ServiceCard
            title="DevOps Automation"
            description="Complete CI/CD pipeline setup with automated testing and deployment"
            price="Starting at $15k"
            features={["Pipeline design", "Automated testing", "Deployment automation", "Monitoring setup"]
          />
          <ServiceCard
            title="Security Audit"
            description="Comprehensive security assessment and vulnerability management"
            price="Starting at $8k"
            features={["Security scanning", "Penetration testing", "Compliance review", "Remediation plan"]
          />
          <ServiceCard
            title="Infrastructure Monitoring"
            description="24/7 monitoring and alerting for your critical systems"
            price="Starting at $3k/mo"
            features={["Real-time monitoring", "Custom dashboards", "Alert management", "Incident response"]
          />
          <ServiceCard
            title="Database Management"
            description="Database optimization, backup, and performance tuning"
            price="Starting at $5k"
            features={["Performance tuning", "Backup strategies", "High availability", "Security hardening"]
          />
          <ServiceCard
            title="Network Security"
            description="Firewall configuration, VPN setup, and network security hardening"
            price="Starting at $12k"
            features={["Firewall setup", "VPN configuration", "Network segmentation", "Security policies"]
          />
        </div>
      </div>


      <Pricing />
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (

    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceCard({ title, description, price, features }: { 
  title: string; 
  description: string; 
  price: string; 
  features: string[] 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>

    </div>
  );
}

function Pricing() {
  return (

    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">IT Service Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="Assessment" 
          price="$4k–$10k" 
          duration="2 weeks"
          features={[
            "Cloud infrastructure review",
            "Security audit",
            "Performance analysis",
            "Cost optimization report",
            "Technology roadmap",
            "Recommendations"
          ]} 
        />
        <Plan 
          name="Implementation" 
          price="$15k–$50k" 
          duration="4–8 weeks"
          features={[
            "Infrastructure as Code",
            "CI/CD pipeline setup",
            "Monitoring & alerting",
            "Security hardening",
            "Documentation",
            "Team training"
          ]} 
        />
        <Plan 
          name="Managed Services" 
          price="$5k+/mo" 
          duration="Ongoing"
          features={[
            "24/7 on-call support",
            "SLO management",
            "Cost optimization",
            "Regular reports",
            "Proactive maintenance",
            "Security updates"
          ]} 
        />
      </div>
      
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">
          Ready to modernize your IT infrastructure? Let's discuss your requirements.
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
      </div>

    </div>
  );
}


function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[] 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-sm text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
