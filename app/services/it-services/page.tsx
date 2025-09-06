import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and digital transformation solutions.',
  keywords: 'IT services, cloud migration, DevOps, cybersecurity, infrastructure, digital transformation, IT consulting'
};

export default function ITServicesPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-blue-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          IT Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Complete IT infrastructure, cloud migration, and digital transformation solutions. We help businesses modernize their technology stack and optimize operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com?subject=IT Services Consultation"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free IT Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs, from infrastructure to digital transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITService
            title="Cloud Migration & Strategy"
            description="Complete cloud migration services with strategy, planning, and execution"
            features={["AWS/Azure/GCP migration", "Cloud architecture design", "Cost optimization", "Security implementation", "Performance monitoring"]}
            price="$15k–$100k"
            icon="☁️"
            href="/services/cloud-migration"
          />
          <ITService
            title="DevOps & CI/CD Implementation"
            description="Automated deployment pipelines and DevOps culture transformation"
            features={["CI/CD pipeline setup", "Infrastructure as Code", "Container orchestration", "Monitoring & alerting", "Team training"]}
            price="$10k–$50k"
            icon="🔄"
            href="/services/devops"
          />
          <ITService
            title="Cybersecurity Solutions"
            description="Comprehensive security assessment, implementation, and monitoring"
            features={["Security audits", "Penetration testing", "Compliance management", "Incident response", "Security training"]}
            price="$20k–$80k"
            icon="🔒"
            href="/services/cybersecurity"
          />
          <ITService
            title="Infrastructure Management"
            description="24/7 infrastructure monitoring, maintenance, and optimization"
            features={["Server management", "Network monitoring", "Backup solutions", "Disaster recovery", "Performance tuning"]}
            price="$3k–$15k/month"
            icon="🖥️"
            href="/services/infrastructure"
          />
          <ITService
            title="Database Administration"
            description="Database design, optimization, and management services"
            features={["Database design", "Performance tuning", "Backup & recovery", "Security hardening", "Migration services"]}
            price="$5k–$25k"
            icon="🗄️"
            href="/services/database-admin"
          />
          <ITService
            title="Network Design & Implementation"
            description="Enterprise network architecture and implementation"
            features={["Network design", "Security implementation", "Wireless solutions", "VPN setup", "Performance optimization"]}
            price="$8k–$40k"
            icon="🌐"
            href="/services/network-design"
          />
          <ITService
            title="IT Support & Helpdesk"
            description="Comprehensive IT support and helpdesk services"
            features={["24/7 support", "Remote assistance", "Hardware support", "Software installation", "User training"]}
            price="$2k–$8k/month"
            icon="🎧"
            href="/services/it-support"
          />
          <ITService
            title="Digital Transformation"
            description="Complete digital transformation strategy and implementation"
            features={["Process automation", "Legacy system modernization", "Digital strategy", "Change management", "ROI optimization"]}
            price="$25k–$150k"
            icon="🚀"
            href="/services/digital-transformation"
          />
          <ITService
            title="Cloud Security & Compliance"
            description="Cloud security implementation and compliance management"
            features={["Security architecture", "Compliance auditing", "Identity management", "Data protection", "Risk assessment"]}
            price="$15k–$60k"
            icon="🛡️"
            href="/services/cloud-security"
          />
          <ITService
            title="API Development & Integration"
            description="Custom API development and system integration services"
            features={["RESTful API design", "GraphQL implementation", "Third-party integrations", "API documentation", "Testing & monitoring"]}
            price="$8k–$35k"
            icon="🔌"
            href="/services/api-development"
          />
          <ITService
            title="Mobile Device Management"
            description="Enterprise mobile device management and security"
            features={["Device enrollment", "Policy enforcement", "App management", "Security controls", "Remote wipe"]}
            price="$3k–$12k"
            icon="📱"
            href="/services/mobile-device-management"
          />
          <ITService
            title="Backup & Disaster Recovery"
            description="Comprehensive backup solutions and disaster recovery planning"
            features={["Automated backups", "Disaster recovery planning", "Testing & validation", "Cloud backup", "Recovery time optimization"]}
            price="$5k–$20k"
            icon="💾"
            href="/services/backup-recovery"
          />
          <ITService
            title="IT Asset Management"
            description="Complete IT asset lifecycle management and optimization"
            features={["Asset inventory", "License management", "Lifecycle tracking", "Cost optimization", "Compliance reporting"]}
            price="$2k–$10k"
            icon="📋"
            href="/services/it-asset-management"
          />
          <ITService
            title="Performance Monitoring"
            description="Application and infrastructure performance monitoring"
            features={["Real-time monitoring", "Performance analytics", "Alerting systems", "Capacity planning", "Optimization recommendations"]}
            price="$3k–$15k"
            icon="📊"
            href="/services/performance-monitoring"
          />
          <ITService
            title="IT Governance & Compliance"
            description="IT governance framework and compliance management"
            features={["Policy development", "Compliance auditing", "Risk management", "Governance framework", "Training programs"]}
            price="$10k–$40k"
            icon="⚖️"
            href="/services/it-governance"
          />
          <ITService
            title="Cloud Cost Optimization"
            description="Cloud cost analysis and optimization strategies"
            features={["Cost analysis", "Resource optimization", "Right-sizing recommendations", "Reserved instance planning", "Cost monitoring"]}
            price="$5k–$20k"
            icon="💰"
            href="/services/cloud-cost-optimization"
          />
          <ITService
            title="IT Training & Consulting"
            description="Technical training and IT consulting services"
            features={["Technical training", "Best practices consulting", "Architecture reviews", "Technology selection", "Implementation guidance"]}
            price="$2k–$15k"
            icon="🎓"
            href="/services/it-training"
          />
          <ITService
            title="Hybrid Cloud Solutions"
            description="Hybrid cloud architecture design and implementation"
            features={["Hybrid architecture", "Data synchronization", "Security integration", "Workload optimization", "Migration planning"]}
            price="$20k–$80k"
            icon="🔗"
            href="/services/hybrid-cloud"
          />
          <ITService
            title="IT Security Auditing"
            description="Comprehensive security auditing and vulnerability assessment"
            features={["Security assessments", "Vulnerability scanning", "Penetration testing", "Compliance auditing", "Remediation planning"]}
            price="$8k–$35k"
            icon="🔍"
            href="/services/security-auditing"
          />
          <ITService
            title="Server Virtualization"
            description="Server virtualization and consolidation services"
            features={["VMware/Hyper-V setup", "Server consolidation", "Resource optimization", "High availability", "Migration services"]}
            price="$10k–$45k"
            icon="🖥️"
            href="/services/server-virtualization"
          />
          <ITService
            title="IT Project Management"
            description="IT project management and implementation services"
            features={["Project planning", "Resource management", "Timeline tracking", "Risk management", "Quality assurance"]}
            price="$5k–$25k"
            icon="📅"
            href="/services/it-project-management"
          />
          <ITService
            title="Email & Communication Systems"
            description="Email system setup, migration, and management"
            features={["Email migration", "Exchange/Office 365 setup", "Security configuration", "Backup solutions", "User training"]}
            price="$3k–$15k"
            icon="📧"
            href="/services/email-systems"
          />
          <ITService
            title="IT Documentation & Knowledge Base"
            description="IT documentation and knowledge management systems"
            features={["System documentation", "Process documentation", "Knowledge base setup", "User guides", "Maintenance procedures"]}
            price="$2k–$10k"
            icon="📚"
            href="/services/it-documentation"
          />
          <ITService
            title="IT Budget Planning & Optimization"
            description="IT budget planning and cost optimization strategies"
            features={["Budget analysis", "Cost optimization", "Technology roadmapping", "Vendor management", "ROI analysis"]}
            price="$3k–$15k"
            icon="💼"
            href="/services/it-budget-planning"
          />
          <ITService
            title="Remote Work Solutions"
            description="Remote work infrastructure and collaboration tools"
            features={["VPN setup", "Remote access solutions", "Collaboration tools", "Security policies", "User training"]}
            price="$5k–$20k"
            icon="🏠"
            href="/services/remote-work"
          />
          <ITService
            title="IT Vendor Management"
            description="IT vendor selection, management, and optimization"
            features={["Vendor evaluation", "Contract negotiation", "Performance monitoring", "Cost optimization", "Relationship management"]}
            price="$3k–$12k"
            icon="🤝"
            href="/services/vendor-management"
          />
          <ITService
            title="IT Risk Assessment"
            description="Comprehensive IT risk assessment and mitigation strategies"
            features={["Risk identification", "Impact analysis", "Mitigation planning", "Monitoring systems", "Incident response"]}
            price="$8k–$30k"
            icon="⚠️"
            href="/services/it-risk-assessment"
          />
          <ITService
            title="IT Capacity Planning"
            description="IT capacity planning and resource optimization"
            features={["Capacity analysis", "Growth planning", "Resource optimization", "Performance forecasting", "Scaling strategies"]}
            price="$5k–$20k"
            icon="📈"
            href="/services/capacity-planning"
          />
          <ITService
            title="IT Change Management"
            description="IT change management processes and implementation"
            features={["Change processes", "Impact assessment", "Testing procedures", "Rollback plans", "Communication strategies"]}
            price="$3k–$15k"
            icon="🔄"
            href="/services/change-management"
          />
          <ITService
            title="IT Service Level Management"
            description="IT service level agreements and performance management"
            features={["SLA development", "Performance monitoring", "Service reporting", "Improvement planning", "Customer satisfaction"]}
            price="$2k–$10k"
            icon="📊"
            href="/services/service-level-management"
          />
        </div>
      </section>

      {/* IT Capabilities */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Capabilities & Technologies</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge technologies and best practices to deliver enterprise-grade IT solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ITCapability
            title="Cloud Technologies"
            description="Expertise in all major cloud platforms and services"
            technologies={["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"]}
            icon="☁️"
          />
          <ITCapability
            title="Security & Compliance"
            description="Comprehensive security solutions and compliance management"
            technologies={["SIEM", "Firewalls", "Identity Management", "Encryption", "Compliance Frameworks"]}
            icon="🔒"
          />
          <ITCapability
            title="DevOps & Automation"
            description="Modern DevOps practices and automation solutions"
            technologies={["CI/CD", "Infrastructure as Code", "Monitoring", "Configuration Management", "API Management"]}
            icon="🔄"
          />
        </div>
      </section>

      {/* Pricing */}
      <Pricing />
      <ContactSection />
    </div>
  );
}

function ITService({ title, description, price, features, icon, href }: {
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-4">{icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <div className="text-lg font-bold text-blue-600">{price}</div>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
    </Link>
  );
}

function ITCapability({ title, description, technologies, icon }: {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {technologies.map((tech, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">IT Service Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="IT Assessment" 
          price="$5k–$15k" 
          features={["Infrastructure audit", "Security assessment", "Performance analysis", "Recommendations", "Roadmap planning"]} 
          popular={false}
        />
        <Plan 
          name="Implementation" 
          price="$15k–$75k" 
          features={["Solution design", "Implementation", "Testing & validation", "Training", "Documentation"]} 
          popular={true}
        />
        <Plan 
          name="Managed Services" 
          price="$3k–$20k/month" 
          features={["24/7 monitoring", "Proactive maintenance", "Security management", "Performance optimization", "Support"]} 
          popular={false}
        />
      </div>
    </section>
  );
}

function Plan({ name, price, features, popular }: { 
  name: string; 
  price: string; 
  features: string[]; 
  popular: boolean; 
}) {
  return (
    <div className={`border rounded-xl p-8 relative ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
        </div>
      )}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-3 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-3">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your IT Infrastructure?</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Let's discuss how our IT services can optimize your technology stack and drive business growth.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="mailto:kleber@ziontechgroup.com?subject=IT Services Project Inquiry"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Start Your IT Transformation
        </a>
        <a
          href="tel:+13024640950"
          className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
        >
          Call +1 302 464 0950
        </a>
      </div>
      <div className="mt-8 text-sm">
        <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
        <p>Email: kleber@ziontechgroup.com</p>
      </div>
    </section>
  );
}