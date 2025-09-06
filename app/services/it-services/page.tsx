<<<<<<< HEAD
export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and digital transformation. Enterprise-grade solutions for modern businesses.'
};
=======
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

<<<<<<< HEAD
export default function ITServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">IT Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT services including cloud migration, DevOps, cybersecurity, 
            infrastructure management, and digital transformation. Enterprise-grade solutions for modern businesses.
          </p>
        </div>
=======
<<<<<<< HEAD
import Link from 'next/link';

export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, SRE, security, and infrastructure management.'
};

export default function ITServicesPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            IT Services & Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cloud, DevOps, SRE and security services engineered for uptime and efficiency. 
            We deliver enterprise-grade infrastructure solutions that scale with your business.
          </p>
        </div>

        {/* Core IT Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ITServiceCard
            title="Cloud Migration & Architecture"
            description="Seamless migration to cloud platforms with optimized architecture design"
            features={[
              "Multi-cloud strategy & planning",
              "AWS/Azure/GCP migration",
              "Container orchestration (Kubernetes)",
              "Serverless architecture design",
              "Infrastructure as Code (Terraform)",
              "Cost optimization & monitoring"
            ]}
            pricing="$25k - $80k"
            timeline="6-16 weeks"
            icon="☁️"
          />
          
          <ITServiceCard
            title="DevOps & CI/CD Implementation"
            description="Automated deployment pipelines and development workflows"
            features={[
              "CI/CD pipeline setup",
              "GitOps workflows",
              "Automated testing integration",
              "Blue-green deployments",
              "Infrastructure automation",
              "Performance monitoring"
            ]}
            pricing="$15k - $50k"
            timeline="4-12 weeks"
            icon="🔄"
          />
          
          <ITServiceCard
            title="Site Reliability Engineering (SRE)"
            description="Reliability engineering and operational excellence"
            features={[
              "SLO/SLI definition & monitoring",
              "Error budget management",
              "Chaos engineering",
              "Incident response automation",
              "Capacity planning",
              "Performance optimization"
            ]}
            pricing="$20k - $60k"
            timeline="8-20 weeks"
            icon="🛡️"
          />
          
          <ITServiceCard
            title="Cybersecurity & Compliance"
            description="Comprehensive security hardening and compliance management"
            features={[
              "Security assessment & auditing",
              "Zero Trust architecture",
              "Vulnerability management",
              "Compliance automation (SOC2, GDPR)",
              "Security monitoring & alerting",
              "Incident response planning"
            ]}
            pricing="$30k - $90k"
            timeline="10-24 weeks"
            icon="🔒"
          />
          
          <ITServiceCard
            title="Database & Data Management"
            description="Database optimization, migration, and data pipeline development"
            features={[
              "Database migration & optimization",
              "Data pipeline development",
              "Backup & disaster recovery",
              "Data governance & compliance",
              "Real-time data processing",
              "Data warehouse design"
            ]}
            pricing="$18k - $55k"
            timeline="6-14 weeks"
            icon="🗄️"
          />
          
          <ITServiceCard
            title="Monitoring & Observability"
            description="Comprehensive monitoring, logging, and alerting solutions"
            features={[
              "Application performance monitoring",
              "Infrastructure monitoring",
              "Log aggregation & analysis",
              "Custom dashboards & alerts",
              "Distributed tracing",
              "Capacity planning & forecasting"
            ]}
            pricing="$12k - $40k"
            timeline="4-10 weeks"
            icon="📊"
          />
        </div>

        {/* Technology Stack */}
        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechStackItem
              title="Cloud Platforms"
              technologies={["AWS", "Azure", "Google Cloud", "DigitalOcean", "Linode"]}
            />
            <TechStackItem
              title="Containerization"
              technologies={["Docker", "Kubernetes", "Helm", "Istio", "OpenShift"]}
            />
            <TechStackItem
              title="Infrastructure as Code"
              technologies={["Terraform", "Ansible", "Pulumi", "CloudFormation", "ARM Templates"]}
            />
            <TechStackItem
              title="Monitoring & Observability"
              technologies={["Prometheus", "Grafana", "ELK Stack", "Jaeger", "DataDog"]}
            />
            <TechStackItem
              title="CI/CD Tools"
              technologies={["GitLab CI", "Jenkins", "GitHub Actions", "Azure DevOps", "CircleCI"]}
            />
            <TechStackItem
              title="Databases"
              technologies={["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "ClickHouse"]}
            />
            <TechStackItem
              title="Security Tools"
              technologies={["Vault", "Falco", "Trivy", "OWASP ZAP", "Nessus"]}
            />
            <TechStackItem
              title="Programming Languages"
              technologies={["Python", "Go", "Node.js", "Bash", "PowerShell"]}
            />
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industry-Specific IT Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <IndustryCard
              title="Healthcare IT"
              description="HIPAA-compliant infrastructure and data management"
              features={["HIPAA compliance", "Medical data security", "High availability", "Disaster recovery"]
              pricing="$40k - $120k"
              icon="🏥"
            />
            <IndustryCard
              title="Financial Services"
              description="Secure, compliant infrastructure for financial institutions"
              features={["PCI DSS compliance", "Fraud detection systems", "High-frequency trading", "Risk management"]
              pricing="$50k - $150k"
              icon="💳"
            />
            <IndustryCard
              title="E-commerce & Retail"
              description="Scalable infrastructure for online businesses"
              features={["Auto-scaling", "CDN optimization", "Payment processing", "Inventory management"]
              pricing="$25k - $80k"
              icon="🛒"
            />
            <IndustryCard
              title="Manufacturing"
              description="IoT and industrial automation infrastructure"
              features={["IoT data processing", "Edge computing", "Predictive maintenance", "Supply chain optimization"]
              pricing="$35k - $100k"
              icon="🏭"
            />
            <IndustryCard
              title="Education"
              description="Scalable learning management and collaboration platforms"
              features={["LMS integration", "Video streaming", "Collaboration tools", "Student data privacy"]
              pricing="$20k - $70k"
              icon="🎓"
            />
            <IndustryCard
              title="Government"
              description="Secure, compliant infrastructure for government agencies"
              features={["FedRAMP compliance", "Security clearance", "Data sovereignty", "Audit trails"]
              pricing="$60k - $200k"
              icon="🏛️"
            />
          </div>
        </div>

        {/* Service Packages */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">IT Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ITPricingCard
              name="IT Assessment"
              price="$4k - $10k"
              duration="2-3 weeks"
              features={[
                "Infrastructure audit",
                "Security assessment",
                "Performance analysis",
                "Cost optimization review",
                "Technology roadmap",
                "Compliance evaluation"
              ]}
              recommended={false}
            />
            <ITPricingCard
              name="Implementation"
              price="$15k - $50k"
              duration="4-8 weeks"
              features={[
                "Infrastructure as Code",
                "CI/CD pipeline setup",
                "Monitoring & alerting",
                "Security hardening",
                "Documentation & training",
                "Go-live support"
              ]}
              recommended={true}
            />
            <ITPricingCard
              name="Managed Services"
              price="$5k+/month"
              duration="Ongoing"
              features={[
                "24/7 monitoring & support",
                "SLO management",
                "Cost optimization",
                "Security updates",
                "Performance tuning",
                "Monthly reporting"
              ]}
              recommended={false}
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your IT Infrastructure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your IT needs and create a robust, scalable solution that grows with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ITServiceCard({ title, description, features, pricing, timeline, icon }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  timeline: string;
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <span className="text-sm font-semibold text-green-600">Pricing: {pricing}</span>
        <span className="text-sm text-gray-500 ml-2">• Timeline: {timeline}</span>
      </div>
      <ul className="text-sm text-gray-600 space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechStackItem({ title, technologies }: { title: string; technologies: string[] }) {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
      <div className="space-y-2">
        {technologies.map((tech, index) => (
          <span key={index} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded mr-1 mb-1">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function IndustryCard({ title, description, features, pricing, icon }: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <div className="text-sm font-semibold text-green-600 mb-3">Pricing: {pricing}</div>
      <ul className="text-xs text-gray-600 space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ITPricingCard({ name, price, duration, features, recommended }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  recommended: boolean;
}) {
  return (
    <div className={`border rounded-xl p-6 ${recommended ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'}`}>
      {recommended && (
        <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-gray-900 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
>>>>>>> 6a0d0fe1c19bf517513527a946228e5f4823a840

        {/* IT Service Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ITServiceCategory
            title="Cloud & Infrastructure"
            icon="☁️"
            description="Scalable cloud solutions and infrastructure management"
            services={[
              "Cloud migration & strategy",
              "Multi-cloud architecture",
              "Container orchestration",
              "Infrastructure as Code",
              "Disaster recovery",
              "Cost optimization"
            ]}
          />
          <ITServiceCategory
            title="DevOps & SRE"
            icon="⚙️"
            description="Automation and reliability engineering"
            services={[
              "CI/CD pipeline setup",
              "Monitoring & observability",
              "Incident response",
              "Performance optimization",
              "Chaos engineering",
              "SLA management"
            ]}
          />
          <ITServiceCategory
            title="Cybersecurity"
            icon="🔒"
            description="Comprehensive security solutions and compliance"
            services={[
              "Security assessment",
              "Penetration testing",
              "Zero Trust architecture",
              "Compliance management",
              "Incident response",
              "Security training"
            ]}
          />
        </div>

        {/* Real IT Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">IT Solutions We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ITSolution
              title="Cloud Migration & Modernization"
              description="Complete cloud transformation and application modernization"
              features={[
                "Legacy system migration",
                "Application refactoring",
                "Database migration",
                "Performance optimization",
                "Cost reduction analysis",
                "Security compliance"
              ]}
              price="$25k - $100k"
              timeline="8-20 weeks"
              useCase="Enterprise, mid-market, startups"
              marketSize="$50B"
            />
            <ITSolution
              title="DevOps Transformation"
              description="End-to-end DevOps implementation and culture change"
              features={[
                "CI/CD pipeline automation",
                "Infrastructure automation",
                "Monitoring & alerting",
                "Team training & coaching",
                "Process optimization",
                "Tool integration"
              ]}
              price="$15k - $60k"
              timeline="6-16 weeks"
              useCase="Development teams, engineering organizations"
              marketSize="$8.2B"
            />
            <ITSolution
              title="Cybersecurity Assessment"
              description="Comprehensive security evaluation and hardening"
              features={[
                "Vulnerability assessment",
                "Penetration testing",
                "Security architecture review",
                "Compliance audit",
                "Incident response planning",
                "Security training"
              ]}
              price="$10k - $40k"
              timeline="4-12 weeks"
              useCase="All industries, compliance requirements"
              marketSize="$12.5B"
            />
            <ITSolution
              title="Infrastructure Monitoring"
              description="24/7 infrastructure monitoring and management"
              features={[
                "Real-time monitoring",
                "Automated alerting",
                "Performance optimization",
                "Capacity planning",
                "Incident response",
                "Monthly reporting"
              ]}
              price="$5k - $20k/month"
              timeline="Ongoing"
              useCase="SaaS companies, e-commerce, enterprises"
              marketSize="$4.8B"
            />
            <ITSolution
              title="Disaster Recovery & Backup"
              description="Comprehensive backup and disaster recovery solutions"
              features={[
                "Automated backup systems",
                "Disaster recovery planning",
                "RTO/RPO optimization",
                "Testing & validation",
                "Documentation & training",
                "Ongoing maintenance"
              ]}
              price="$8k - $35k"
              timeline="4-10 weeks"
              useCase="Critical systems, compliance requirements"
              marketSize="$3.2B"
            />
            <ITSolution
              title="Network Security & Firewall"
              description="Advanced network security and firewall management"
              features={[
                "Firewall configuration",
                "Network segmentation",
                "Intrusion detection",
                "VPN setup",
                "Security policies",
                "Ongoing management"
              ]}
              price="$12k - $45k"
              timeline="6-14 weeks"
              useCase="Remote work, multi-location businesses"
              marketSize="$6.1B"
            />
            <ITSolution
              title="IT Support & Helpdesk"
              description="Professional IT support and helpdesk services"
              features={[
                "24/7 technical support",
                "Remote assistance",
                "Hardware & software support",
                "User training",
                "Ticket management",
                "SLA guarantees"
              ]}
              price="$3k - $15k/month"
              timeline="Ongoing"
              useCase="Small businesses, remote teams"
              marketSize="$7.3B"
            />
            <ITSolution
              title="Data Center Services"
              description="Data center design, migration, and management"
              features={[
                "Data center design",
                "Hardware procurement",
                "Migration planning",
                "Power & cooling optimization",
                "Security implementation",
                "Ongoing management"
              ]}
              price="$50k - $200k"
              timeline="12-24 weeks"
              useCase="Large enterprises, government"
              marketSize="$9.7B"
            />
            <ITSolution
              title="IT Consulting & Strategy"
              description="Strategic IT planning and digital transformation"
              features={[
                "IT strategy development",
                "Technology roadmap",
                "Digital transformation",
                "Vendor evaluation",
                "Budget planning",
                "Implementation guidance"
              ]}
              price="$5k - $25k"
              timeline="2-8 weeks"
              useCase="C-level executives, IT leadership"
              marketSize="$5.4B"
            />
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technologies & Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ITTechnology
              category="Cloud Platforms"
              technologies={["AWS", "Azure", "Google Cloud", "DigitalOcean", "Linode"]}
            />
            <ITTechnology
              category="DevOps Tools"
              technologies={["Docker", "Kubernetes", "Jenkins", "GitLab", "Terraform"]}
            />
            <ITTechnology
              category="Monitoring"
              technologies={["Prometheus", "Grafana", "Datadog", "New Relic", "Splunk"]}
            />
            <ITTechnology
              category="Security"
              technologies={["CrowdStrike", "SentinelOne", "Okta", "Palo Alto", "Fortinet"]}
            />
          </div>
        </div>

        {/* IT Certifications & Compliance */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Certifications & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ComplianceCard
              title="SOC 2 Type II"
              description="Security and availability controls"
              icon="🛡️"
            />
            <ComplianceCard
              title="ISO 27001"
              description="Information security management"
              icon="📋"
            />
            <ComplianceCard
              title="HIPAA"
              description="Healthcare data protection"
              icon="🏥"
            />
            <ComplianceCard
              title="PCI DSS"
              description="Payment card industry compliance"
              icon="💳"
            />
            <ComplianceCard
              title="GDPR"
              description="European data protection"
              icon="🇪🇺"
            />
            <ComplianceCard
              title="AWS/Azure Certified"
              description="Cloud platform expertise"
              icon="☁️"
            />
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">IT Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ITPricingPlan
              name="IT Assessment"
              price="$4k - $10k"
              duration="2-4 weeks"
              features={[
                "Infrastructure audit",
                "Security assessment",
                "Performance analysis",
                "Recommendations",
                "Implementation roadmap",
                "Cost optimization"
              ]}
              popular={false}
            />
            <ITPricingPlan
              name="IT Implementation"
              price="$15k - $50k"
              duration="4-12 weeks"
              features={[
                "Cloud migration",
                "DevOps setup",
                "Security implementation",
                "Monitoring setup",
                "Team training",
                "Documentation"
              ]}
              popular={true}
            />
            <ITPricingPlan
              name="Managed IT Services"
              price="$5k+/month"
              duration="Ongoing"
              features={[
                "24/7 monitoring",
                "Proactive maintenance",
                "Incident response",
                "Security management",
                "Performance optimization",
                "Regular reporting"
              ]}
              popular={false}
            />
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Modernize Your IT?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can optimize your IT infrastructure, enhance security, and drive digital transformation.
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
=======
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          IT Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Cloud, DevOps, SRE and security services engineered for uptime and efficiency. 
          We help you build, secure, and scale your infrastructure for maximum performance.
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our IT Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITServiceCard
            title="Cloud Migration & Architecture"
            description="Complete cloud migration with modern architecture patterns"
            features={["Multi-cloud strategy", "Container orchestration", "Serverless architecture", "Cost optimization", "Disaster recovery"]}
            price="$15k–$50k"
            icon="☁️"
          />
          <ITServiceCard
            title="DevOps & CI/CD Automation"
            description="End-to-end DevOps implementation with automated pipelines"
            features={["CI/CD pipelines", "Infrastructure as Code", "Automated testing", "Deployment automation", "Environment management"]}
            price="$10k–$35k"
            icon="🔄"
          />
          <ITServiceCard
            title="Site Reliability Engineering (SRE)"
            description="Proactive monitoring and reliability engineering"
            features={["SLO/SLI definition", "Error budget management", "Incident response", "Capacity planning", "Performance optimization"]}
            price="$20k–$60k"
            icon="📊"
          />
          <ITServiceCard
            title="Cybersecurity & Compliance"
            description="Comprehensive security hardening and compliance management"
            features={["Security assessment", "Zero Trust architecture", "Vulnerability management", "Compliance auditing", "Security monitoring"]}
            price="$12k–$40k"
            icon="🔒"
          />
          <ITServiceCard
            title="Database & Data Management"
            description="Database optimization and data pipeline management"
            features={["Database migration", "Performance tuning", "Data backup & recovery", "Data pipeline automation", "Data governance"]}
            price="$8k–$25k"
            icon="🗄️"
          />
          <ITServiceCard
            title="Network & Infrastructure"
            description="Network design, optimization, and infrastructure management"
            features={["Network architecture", "Load balancing", "CDN implementation", "VPN & connectivity", "Infrastructure monitoring"]}
            price="$10k–$30k"
            icon="🌐"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">IT Service Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Item 
            title="Cloud & Infrastructure" 
            details={[
              "AWS, GCP, Azure multi-cloud strategies",
              "Kubernetes orchestration and management",
              "Serverless architecture implementation",
              "Infrastructure as Code (Terraform, CloudFormation)",
              "Auto-scaling and load balancing",
              "Disaster recovery and backup solutions"
            ]} 
          />
          <Item 
            title="DevOps & SRE" 
            details={[
              "CI/CD pipeline design and implementation",
              "Comprehensive observability and monitoring",
              "Automated testing and quality gates",
              "Chaos engineering and resilience testing",
              "Incident response and post-mortem processes",
              "Performance optimization and capacity planning"
            ]} 
          />
          <Item 
            title="Security & Compliance" 
            details={[
              "Security hardening and vulnerability management",
              "Zero Trust network architecture",
              "Compliance auditing (SOC2, ISO27001, GDPR)",
              "Security monitoring and threat detection",
              "Identity and access management (IAM)",
              "Data protection and encryption"
            ]} 
          />
        </div>
      </section>

      <Pricing />
      <ContactSection />
    </div>
  );
}

function ITServiceCard({ title, description, features, price, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
=======
export const metadata = { title: 'IT Services | Zion Tech Group' } export default /**
 * ITServicesPage - Function description
 */
function ITServicesPage() { return ( <section> <h1 style={{font_size: 26, font_weight: 800}}>IT Services</h1> <p style={{margin_top: 8, color: '#374151'}}>Cloud, DevOps, SRE and security services engineered for uptime and efficiency.</p> <div style={{display: 'grid', gap: 12, margin_top: 16}}> <Item title="Cloud & Infra" details={["AWS / GCP / Azure", "Kubernetes", "Serverless", "IaC (Terraform)"]} /> <Item title="DevOps & SRE" details={["CI / CD", "Observability", "Autoscaling", "Chaos testing"]} /> <Item title="Security" details={["Hardening", "Zero Trust", "Vuln mgmt", "Compliance"]} /> </div> <Pricing /> </section> )} /**
 * Item - Function description
 */
function Item() { return ( <div style={{border: '1px solid #e5e7eb', border_radius: 12, padding: 16}}> <h3 style={{font_weight: 700}}>{title}</h3> <ul style={{padding_left: 18, color: '#4b5563'}}>{details.map (d => (<li key={d} style={{list_style: 'disc'}}>{d}</li>))}</ul> </div> )} /**
 * Pricing - Function description
 */
function Pricing() { return ( <div style={{margin_top: 20, display: 'grid', gap: 12, gridTemplateColumns: 'repeat (auto - fit, minmax (260px, 1fr))'}}> <Plan name="Assessment" price="$4k–$10k" features={["2 weeks", "Cloud review", "Security audit", "Roadmap"]} /> <Plan name="Implementation" price="$15k–$50k" features={["4–8 weeks", "Infra as code", "CI / CD", "Monitoring"]} /> <Plan name="Managed" price="$5k+/mo" features={["24 / 7 on - call", "SLO mgmt", "Cost optimization", "Reports"]} /> </div> )} /**
 * Plan - Function description
 */
function Plan() { return ( <div style={{border: '1px solid #e5e7eb', border_radius: 12, padding: 16}}> <h4 style={{font_weight: 700}}>{name}</h4> <div style={{color: '#111827', font_weight: 800, margin_top: 4}}>{price}</div> <ul style={{padding_left: 18, color: '#4b5563', margin_top: 8}}>{features.map (function => (<li key={f} style={{list_style: 'disc'}}>{f}</li>))}</ul> <a href="https: </div> )}
=======
export const metadata = { title: 'IT Services | Zion Tech Group' };

export default function ITServicesPage() {
  return (
    <section>
      <h1 style={{fontSize: 26, fontWeight: 800}}>IT Services</h1>
      <p style={{marginTop: 8, color: '#374151'}}>Cloud, DevOps, SRE and security services engineered for uptime and efficiency.</p>
      <div style={{display: 'grid', gap: 12, marginTop: 16}}>
        <Item title="Cloud & Infra" details={["AWS/GCP/Azure", "Kubernetes", "Serverless", "IaC (Terraform)"]} />
        <Item title="DevOps & SRE" details={["CI/CD", "Observability", "Autoscaling", "Chaos testing"]} />
        <Item title="Security" details={["Hardening", "Zero Trust", "Vuln mgmt", "Compliance"]} />
      </div>
      <Pricing />
    </section>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
<<<<<<< HEAD
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            {detail}
          </li>
        ))}
      </ul>
>>>>>>> main
=======
    <div style={{border: '1px solid #e5e7eb', borderRadius: 12, padding: 16}}>
      <h3 style={{fontWeight: 700}}>{title}</h3>
      <ul style={{paddingLeft: 18, color: '#4b5563'}}>{details.map(d => (<li key={d} style={{listStyle: 'disc'}}>{d}</li>))}</ul>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    </div>
  );
}

<<<<<<< HEAD
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
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">IT Service Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="IT Assessment" 
          price="$4k–$10k" 
          duration="2 weeks"
          features={[
            "Comprehensive cloud review",
            "Security audit & assessment",
            "Performance analysis",
            "Cost optimization review",
            "Technology roadmap",
            "Implementation recommendations"
          ]} 
        />
        <Plan 
          name="Implementation" 
          price="$15k–$50k" 
          duration="4–8 weeks"
          features={[
            "Infrastructure as Code setup",
            "CI/CD pipeline implementation",
            "Monitoring & observability",
            "Security hardening",
            "Performance optimization",
            "Documentation & training"
          ]} 
        />
        <Plan 
          name="Managed Services" 
          price="$5k+/mo" 
          duration="Ongoing"
          features={[
            "24/7 monitoring & on-call",
            "SLO management & reporting",
            "Cost optimization",
            "Security updates & patches",
            "Performance tuning",
            "Monthly health reports"
          ]} 
        />
      </div>
    </section>
  );
}

function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
      >
        Get Started
      </a>
=======
function Pricing() {
  return (
    <div style={{marginTop: 20, display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))'}}>
      <Plan name="Assessment" price="$4k–$10k" features={["2 weeks", "Cloud review", "Security audit", "Roadmap"]} />
      <Plan name="Implementation" price="$15k–$50k" features={["4–8 weeks", "Infra as code", "CI/CD", "Monitoring"]} />
      <Plan name="Managed" price="$5k+/mo" features={["24/7 on-call", "SLO mgmt", "Cost optimization", "Reports"]} />
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    </div>
  );
}

<<<<<<< HEAD
function ITSolution({ title, description, features, price, timeline, useCase, marketSize }: {
  title: string;
  description: string;
  features: string[];
  price: string;
  timeline: string;
  useCase: string;
  marketSize: string;
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          {useCase}
        </span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          {marketSize} market
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

function ComplianceCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 text-center">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
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
function ContactSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Optimize Your IT Infrastructure?
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can improve your infrastructure's reliability, security, and performance. 
          Our IT experts have managed 200+ enterprise systems.
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
        <div className="mt-8 text-sm text-gray-500">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </section>
  );
}
=======
function Plan({ name, price, features }: { name: string; price: string; features: string[] }) {
  return (
    <div style={{border: '1px solid #e5e7eb', borderRadius: 12, padding: 16}}>
      <h4 style={{fontWeight: 700}}>{name}</h4>
      <div style={{color: '#111827', fontWeight: 800, marginTop: 4}}>{price}</div>
      <ul style={{paddingLeft: 18, color: '#4b5563', marginTop: 8}}>{features.map(f => (<li key={f} style={{listStyle: 'disc'}}>{f}</li>))}</ul>
      <a href="https://ziontechgroup.com" style={{display: 'inline-block', marginTop: 12, padding: '8px 16px', backgroundColor: '#3b82f6', color: 'white', textDecoration: 'none', borderRadius: 6}}>Get Started</a>
    </div>
  );
}
>>>>>>> cursor/expand-services-advertise-and-build-project-2140
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
