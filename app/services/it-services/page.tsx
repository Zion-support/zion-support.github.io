import Link from "next/link";

export const metadata = {
  title: "IT Services | Zion Tech Group - Complete IT Solutions & Infrastructure Management",
  description: "Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and 24/7 support. Enterprise-grade IT solutions with 99.9% uptime guarantee.",
};

export default function ITServicesPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-blue-100">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            IT Services & Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Complete IT infrastructure management, cloud migration, cybersecurity, and DevOps solutions. 
            Keep your systems running smoothly with 99.9% uptime and 24/7 expert support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Get IT Consultation
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
            >
              Discuss Your IT Needs
            </a>
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Service Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions to keep your business running efficiently and securely.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cloud Migration */}
            <ITServiceCard
              title="Cloud Migration & Management"
              description="Seamless migration to AWS, Azure, or GCP with ongoing optimization and management"
              features={[
                "Multi-cloud strategy planning",
                "Data migration automation",
                "Cost optimization",
                "24/7 cloud monitoring"
              ]}
              pricing="From $3,000/month"
              icon="☁️"
              href="/services/it-services/cloud-migration"
            />

            {/* DevOps & CI/CD */}
            <ITServiceCard
              title="DevOps & CI/CD"
              description="Automated deployment pipelines, infrastructure as code, and continuous integration"
              features={[
                "CI/CD pipeline setup",
                "Infrastructure automation",
                "Container orchestration",
                "Monitoring & alerting"
              ]}
              pricing="From $4,000/month"
              icon="🔄"
              href="/services/it-services/devops"
            />

            {/* Cybersecurity */}
            <ITServiceCard
              title="Cybersecurity Solutions"
              description="Comprehensive security assessment, implementation, and ongoing monitoring"
              features={[
                "Security audits & assessments",
                "Threat detection & response",
                "Compliance management",
                "Security training"
              ]}
              pricing="From $5,000/month"
              icon="🔒"
              href="/services/it-services/cybersecurity"
            />

            {/* Infrastructure Management */}
            <ITServiceCard
              title="Infrastructure Management"
              description="Complete management of your IT infrastructure with proactive monitoring"
              features={[
                "Server & network management",
                "Backup & disaster recovery",
                "Performance optimization",
                "Hardware lifecycle management"
              ]}
              pricing="From $2,500/month"
              icon="⚙️"
              href="/services/it-services/infrastructure"
            />

            {/* Help Desk & Support */}
            <ITServiceCard
              title="Help Desk & Support"
              description="24/7 technical support and help desk services for your team"
              features={[
                "24/7 technical support",
                "Remote assistance",
                "Issue tracking & resolution",
                "User training & onboarding"
              ]}
              pricing="From $1,500/month"
              icon="🎧"
              href="/services/it-services/help-desk"
            />

            {/* Data Management */}
            <ITServiceCard
              title="Data Management & Analytics"
              description="Data storage, backup, recovery, and business intelligence solutions"
              features={[
                "Data backup & recovery",
                "Database optimization",
                "Business intelligence",
                "Data governance"
              ]}
              pricing="From $3,500/month"
              icon="📊"
              href="/services/it-services/data-management"
            />

            {/* Network Security */}
            <ITServiceCard
              title="Network Security & Monitoring"
              description="Network infrastructure security, monitoring, and optimization"
              features={[
                "Network security assessment",
                "Firewall configuration",
                "Intrusion detection",
                "Network performance monitoring"
              ]}
              pricing="From $2,800/month"
              icon="🛡️"
              href="/services/it-services/network-security"
            />

            {/* Compliance & Governance */}
            <ITServiceCard
              title="Compliance & Governance"
              description="IT compliance management and governance frameworks"
              features={[
                "SOX, HIPAA, GDPR compliance",
                "Policy development",
                "Risk assessment",
                "Audit preparation"
              ]}
              pricing="From $4,500/month"
              icon="📋"
              href="/services/it-services/compliance"
            />

            {/* IT Consulting */}
            <ITServiceCard
              title="IT Strategy & Consulting"
              description="Strategic IT planning, technology roadmaps, and digital transformation"
              features={[
                "IT strategy development",
                "Technology roadmaps",
                "Digital transformation",
                "Vendor management"
              ]}
              pricing="From $200/hour"
              icon="💡"
              href="/services/it-services/consulting"
            />
          </div>
        </div>
      </section>

      {/* Cloud Services Specialization */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cloud Services Specialization</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert cloud solutions across all major platforms with certified professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CloudProviderCard
              title="Amazon Web Services (AWS)"
              description="Complete AWS solutions from migration to optimization"
              services={[
                "EC2, S3, RDS management",
                "Lambda serverless solutions",
                "CloudFormation automation",
                "Cost optimization"
              ]}
              pricing="From $3,500/month"
              icon="🟠"
            />
            <CloudProviderCard
              title="Microsoft Azure"
              description="Enterprise Azure solutions and hybrid cloud management"
              services={[
                "Azure VM & App Services",
                "Azure Active Directory",
                "Azure DevOps integration",
                "Hybrid cloud solutions"
              ]}
              pricing="From $3,200/month"
              icon="🔵"
            />
            <CloudProviderCard
              title="Google Cloud Platform (GCP)"
              description="Advanced GCP solutions with AI/ML integration"
              services={[
                "Compute Engine & Kubernetes",
                "BigQuery data analytics",
                "AI/ML platform integration",
                "Multi-region deployment"
              ]}
              pricing="From $3,800/month"
              icon="🟢"
            />
          </div>
        </div>
      </section>

      {/* IT Support Tiers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Support Tiers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the support level that best fits your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SupportTierCard
              title="Basic Support"
              price="$1,500"
              period="per month"
              description="Essential IT support for small businesses"
              features={[
                "Business hours support (9 AM - 5 PM)",
                "Remote assistance",
                "Basic monitoring",
                "Monthly health reports",
                "Email & phone support"
              ]}
              responseTime="4 hours"
              popular={false}
            />
            <SupportTierCard
              title="Professional Support"
              price="$3,000"
              period="per month"
              description="Comprehensive IT support for growing businesses"
              features={[
                "24/7 support availability",
                "Proactive monitoring",
                "Priority response times",
                "Monthly strategy reviews",
                "Dedicated account manager",
                "Advanced security monitoring"
              ]}
              responseTime="2 hours"
              popular={true}
            />
            <SupportTierCard
              title="Enterprise Support"
              price="$6,000"
              period="per month"
              description="Full-service IT management for large organizations"
              features={[
                "24/7 dedicated support team",
                "Real-time monitoring & alerting",
                "Immediate response times",
                "Weekly strategy meetings",
                "Dedicated technical team",
                "Custom SLA agreements",
                "On-site support available"
              ]}
              responseTime="30 minutes"
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack & Certifications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We work with the latest technologies and maintain industry certifications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <TechCard name="AWS Certified" />
            <TechCard name="Azure Certified" />
            <TechCard name="Google Cloud" />
            <TechCard name="Docker" />
            <TechCard name="Kubernetes" />
            <TechCard name="Terraform" />
            <TechCard name="Ansible" />
            <TechCard name="Jenkins" />
            <TechCard name="GitLab CI" />
            <TechCard name="Prometheus" />
            <TechCard name="Grafana" />
            <TechCard name="ELK Stack" />
          </div>
        </div>
      </section>

      {/* IT Process & Methodology */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Process & Methodology</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven methodology for delivering reliable IT services and solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              step="1"
              title="Assessment & Planning"
              description="Comprehensive IT assessment and strategic planning"
              icon="🔍"
            />
            <ProcessStep
              step="2"
              title="Design & Implementation"
              description="Solution design and implementation with best practices"
              icon="⚙️"
            />
            <ProcessStep
              step="3"
              title="Testing & Optimization"
              description="Thorough testing and performance optimization"
              icon="🧪"
            />
            <ProcessStep
              step="4"
              title="Monitoring & Support"
              description="Ongoing monitoring, maintenance, and support"
              icon="📊"
            />
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Service Metrics</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Proven results that demonstrate our commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <MetricCard
              number="99.9%"
              label="Uptime Guarantee"
              description="System availability across all managed services"
            />
            <MetricCard
              number="< 2 min"
              label="Average Response Time"
              description="For critical issues and incidents"
            />
            <MetricCard
              number="500+"
              label="Systems Managed"
              description="Across various industries and scales"
            />
            <MetricCard
              number="24/7"
              label="Support Availability"
              description="Round-the-clock monitoring and support"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get a free IT assessment and discover how we can improve your systems' performance, security, and reliability.
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
          <div className="mt-6 text-sm text-green-100">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
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
  icon,
  href
}: {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group border border-gray-200 rounded-xl p-6 block hover:border-green-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2 mb-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center text-sm">
            <span className="text-green-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-green-600">
        {pricing}
      </div>
    </Link>
  );
}

function CloudProviderCard({
  title,
  description,
  services,
  pricing,
  icon
}: {
  title: string;
  description: string;
  services: string[];
  pricing: string;
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2 mb-4">
        {services.map((service) => (
          <li key={service} className="flex items-center text-sm">
            <span className="text-green-500 mr-2">•</span> {service}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-green-600">
        {pricing}
      </div>
    </div>
  );
}

function SupportTierCard({
  title,
  price,
  period,
  description,
  features,
  responseTime,
  popular
}: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  responseTime: string;
  popular: boolean;
}) {
  return (
    <div className={`relative border rounded-xl p-8 ${popular ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="text-4xl font-bold text-green-600 mb-1">{price}</div>
        <div className="text-gray-600">{period}</div>
        <p className="text-gray-600 mt-4">{description}</p>
        <div className="mt-2 text-sm text-green-600 font-semibold">
          Response Time: {responseTime}
        </div>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-green-500 mr-3">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
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

function TechCard({ name }: { name: string }) {
  return (
    <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="text-sm font-medium text-gray-900">{name}</div>
    </div>
  );
}

function ProcessStep({
  step,
  title,
  description,
  icon
}: {
  step: string;
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function MetricCard({
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
      <div className="text-4xl font-bold text-green-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}