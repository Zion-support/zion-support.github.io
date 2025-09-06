import Link from "next/link";

export const metadata = {
  title: "IT Services | Zion Tech Group - Cloud Migration, DevOps, Cybersecurity & Infrastructure",
  description: "Comprehensive IT services including cloud migration, DevOps automation, cybersecurity solutions, and infrastructure management. Enterprise-grade solutions with 24/7 support. Starting at $3,000/month.",
};

export default function ITServicesPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          IT Services
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Complete IT infrastructure solutions including cloud migration, DevOps automation, cybersecurity, and 24/7 managed services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get IT Consultation - Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Request IT Assessment
          </a>
        </div>
      </section>

      {/* IT Service Categories */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive IT Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            End-to-end IT services designed to modernize your infrastructure, enhance security, and drive operational efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITServiceCard
            href="/services/cloud-migration"
            title="Cloud Migration"
            description="Seamless migration to AWS, Azure, or GCP with zero downtime and cost optimization"
            icon="☁️"
            pricing="$5,000/project"
            features={["Multi-cloud strategy", "Zero-downtime migration", "Cost optimization", "Security compliance"]}
          />
          <ITServiceCard
            href="/services/cybersecurity-suite"
            title="Cybersecurity Suite"
            description="Comprehensive security solutions including threat detection and incident response"
            icon="🔒"
            pricing="$3,999/month"
            features={["Threat monitoring", "Penetration testing", "Security audits", "Incident response"]}
          />
          <ITServiceCard
            href="/services/devops-automation"
            title="DevOps Automation"
            description="Complete CI/CD pipeline setup with automated testing and deployment"
            icon="⚙️"
            pricing="$4,999/month"
            features={["CI/CD pipeline setup", "Infrastructure as code", "Monitoring & alerting", "Performance optimization"]}
          />
          <ITServiceCard
            href="/services/database-optimization"
            title="Database Optimization"
            description="Database performance tuning and optimization for maximum efficiency"
            icon="🗄️"
            pricing="$2,999/month"
            features={["Performance tuning", "Query optimization", "Backup & recovery", "Scalability planning"]}
          />
          <ITServiceCard
            href="/services/api-development"
            title="API Development"
            description="RESTful and GraphQL API development with comprehensive documentation"
            icon="🔌"
            pricing="$3,499/project"
            features={["REST & GraphQL APIs", "API documentation", "Rate limiting", "Authentication & authorization"]}
          />
          <ITServiceCard
            href="/services/mobile-development"
            title="Mobile Development"
            description="Native and cross-platform mobile app development for iOS and Android"
            icon="📱"
            pricing="$8,999/project"
            features={["Native iOS & Android", "Cross-platform solutions", "App store optimization", "Push notifications"]}
          />
        </div>
      </section>

      {/* Infrastructure Management */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Infrastructure Management</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Proactive infrastructure management with 24/7 monitoring, maintenance, and optimization.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <InfrastructureCard
            icon="🖥️"
            title="Server Management"
            description="Complete server administration including setup, maintenance, and optimization"
            services={["Server provisioning", "Performance monitoring", "Security hardening", "Backup management"]}
          />
          <InfrastructureCard
            icon="🌐"
            title="Network Management"
            description="Network design, implementation, and ongoing management for optimal performance"
            services={["Network design", "Firewall configuration", "VPN setup", "Bandwidth optimization"]}
          />
          <InfrastructureCard
            icon="💾"
            title="Data Management"
            description="Data storage, backup, and recovery solutions with disaster recovery planning"
            services={["Data backup", "Disaster recovery", "Data migration", "Storage optimization"]}
          />
          <InfrastructureCard
            icon="📊"
            title="Monitoring & Analytics"
            description="24/7 system monitoring with proactive alerting and performance analytics"
            services={["System monitoring", "Performance analytics", "Alert management", "Capacity planning"]}
          />
        </div>
      </section>

      {/* Security Solutions */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Enterprise-grade security solutions to protect your business from evolving cyber threats.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SecurityCard
            title="Threat Detection & Response"
            description="Advanced threat detection with automated response and incident management"
            icon="🛡️"
            features={[
              "Real-time threat monitoring",
              "Automated incident response",
              "Threat intelligence integration",
              "Forensic analysis"
            ]}
            pricing="$2,499/month"
          />
          <SecurityCard
            title="Compliance & Audit"
            description="Comprehensive compliance management for GDPR, HIPAA, SOX, and industry standards"
            icon="📋"
            features={[
              "Compliance assessment",
              "Audit preparation",
              "Policy development",
              "Training programs"
            ]}
            pricing="$1,999/month"
          />
          <SecurityCard
            title="Identity & Access Management"
            description="Secure identity management with multi-factor authentication and access controls"
            icon="🔐"
            features={[
              "Single sign-on (SSO)",
              "Multi-factor authentication",
              "Role-based access control",
              "Privileged access management"
            ]}
            pricing="$1,799/month"
          />
          <SecurityCard
            title="Security Training"
            description="Comprehensive security awareness training and phishing simulation programs"
            icon="🎓"
            features={[
              "Security awareness training",
              "Phishing simulations",
              "Incident response training",
              "Compliance training"
            ]}
            pricing="$999/month"
          />
        </div>
      </section>

      {/* Cloud Solutions */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Cloud Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Complete cloud strategy and implementation across AWS, Azure, and Google Cloud Platform.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CloudCard
            provider="AWS"
            description="Amazon Web Services solutions including EC2, S3, Lambda, and RDS"
            icon="🟠"
            services={["EC2 & ECS", "S3 & CloudFront", "Lambda functions", "RDS & DynamoDB"]}
            pricing="From $2,000/month"
          />
          <CloudCard
            provider="Microsoft Azure"
            description="Azure cloud solutions including VMs, App Service, and Azure SQL"
            icon="🔵"
            services={["Virtual Machines", "App Service", "Azure SQL", "Azure Functions"]}
            pricing="From $2,500/month"
          />
          <CloudCard
            provider="Google Cloud"
            description="Google Cloud Platform solutions including Compute Engine and BigQuery"
            icon="🟢"
            services={["Compute Engine", "Cloud Storage", "BigQuery", "Cloud Functions"]}
            pricing="From $2,200/month"
          />
        </div>
      </section>

      {/* Support & Maintenance */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Support & Maintenance</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive support and maintenance services to keep your IT infrastructure running smoothly.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SupportCard
            title="24/7 Technical Support"
            description="Round-the-clock technical support with guaranteed response times"
            icon="📞"
            features={["24/7 availability", "15-minute response time", "Remote assistance", "On-site support"]}
            pricing="$1,999/month"
          />
          <SupportCard
            title="Proactive Maintenance"
            description="Scheduled maintenance and updates to prevent issues before they occur"
            icon="🔧"
            features={["Scheduled updates", "Performance optimization", "Security patches", "System health checks"]}
            pricing="$1,499/month"
          />
          <SupportCard
            title="Emergency Response"
            description="Rapid response to critical issues with guaranteed resolution times"
            icon="🚨"
            features={["1-hour response time", "Emergency hotline", "Priority escalation", "Root cause analysis"]}
            pricing="$999/month"
          />
        </div>
      </section>

      {/* Success Metrics */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our IT services deliver measurable improvements in performance, security, and cost efficiency.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <MetricCard
              number="99.9%"
              label="Uptime Guarantee"
              description="System availability with 24/7 monitoring"
            />
            <MetricCard
              number="50%"
              label="Cost Reduction"
              description="Average infrastructure cost savings"
            />
            <MetricCard
              number="75%"
              label="Faster Deployment"
              description="Reduced time-to-market for new services"
            />
            <MetricCard
              number="100%"
              label="Security Compliance"
              description="Zero security breaches across all clients"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Modernize Your IT Infrastructure?
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join 300+ companies already using our IT services to improve performance, enhance security, and reduce operational costs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get IT Consultation - Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Schedule IT Assessment
          </a>
        </div>
        <div className="mt-6 text-sm text-gray-600">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
        </div>
      </section>
    </div>
  );
}

function ITServiceCard({ 
  href, 
  title, 
  description, 
  icon, 
  pricing, 
  features 
}: { 
  href: string; 
  title: string; 
  description: string; 
  icon: string; 
  pricing: string; 
  features: string[]; 
}) {
  return (
    <Link
      href={href}
      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600">
        {pricing}
      </div>
    </Link>
  );
}

function InfrastructureCard({ 
  icon, 
  title, 
  description, 
  services 
}: { 
  icon: string; 
  title: string; 
  description: string; 
  services: string[]; 
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SecurityCard({ 
  title, 
  description, 
  icon, 
  features, 
  pricing 
}: { 
  title: string; 
  description: string; 
  icon: string; 
  features: string[]; 
  pricing: string; 
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600">
        {pricing}
      </div>
    </div>
  );
}

function CloudCard({ 
  provider, 
  description, 
  icon, 
  services, 
  pricing 
}: { 
  provider: string; 
  description: string; 
  icon: string; 
  services: string[]; 
  pricing: string; 
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{provider}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {services.map((service, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {service}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600">
        {pricing}
      </div>
    </div>
  );
}

function SupportCard({ 
  title, 
  description, 
  icon, 
  features, 
  pricing 
}: { 
  title: string; 
  description: string; 
  icon: string; 
  features: string[]; 
  pricing: string; 
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-blue-600">
        {pricing}
      </div>
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
      <div className="text-4xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-lg font-semibold text-gray-900 mb-1">{label}</div>
      <div className="text-sm text-gray-600">{description}</div>
    </div>
  );
}