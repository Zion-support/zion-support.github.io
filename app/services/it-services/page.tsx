import Link from "next/link";

export const metadata = {
  title: "IT Services | Zion Tech Group - Complete IT Solutions & Support",
  description: "Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and 24/7 support. Enterprise-grade solutions from $3,000/month with 99.9% uptime guarantee.",
};

export default function ITServicesPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-purple-50 to-blue-100">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            IT Services & Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Complete IT infrastructure management, cloud migration, cybersecurity, and 24/7 support. 
            Keep your systems running smoothly while you focus on growing your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Get IT Consultation
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
            >
              Discuss Your IT Needs
            </a>
          </div>
        </div>
      </section>

      {/* IT Service Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Service Categories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions covering every aspect of your technology infrastructure and operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cloud Services */}
            <ITServiceCard
              title="Cloud Services"
              description="Cloud migration, architecture, and optimization across AWS, Azure, and GCP"
              features={[
                "Cloud migration planning",
                "Multi-cloud architecture",
                "Cost optimization",
                "Auto-scaling setup",
                "Disaster recovery",
                "Cloud security"
              ]}
              pricing="From $3,500/month"
              icon="☁️"
              href="/services/cloud-services"
            />

            {/* DevOps & CI/CD */}
            <ITServiceCard
              title="DevOps & CI/CD"
              description="Automated deployment pipelines, infrastructure as code, and continuous integration"
              features={[
                "CI/CD pipeline setup",
                "Infrastructure as Code",
                "Container orchestration",
                "Monitoring & alerting",
                "Automated testing",
                "Deployment automation"
              ]}
              pricing="From $4,200/month"
              icon="🔄"
              href="/services/devops-automation"
            />

            {/* Cybersecurity */}
            <ITServiceCard
              title="Cybersecurity"
              description="Comprehensive security solutions and compliance management"
              features={[
                "Security assessment",
                "Penetration testing",
                "Threat detection",
                "Compliance management",
                "Security training",
                "Incident response"
              ]}
              pricing="From $5,000/month"
              icon="🔒"
              href="/services/cybersecurity"
            />

            {/* Network Management */}
            <ITServiceCard
              title="Network Management"
              description="Network design, implementation, and ongoing management"
              features={[
                "Network design & planning",
                "Router & switch configuration",
                "VPN setup",
                "Network monitoring",
                "Performance optimization",
                "Troubleshooting"
              ]}
              pricing="From $2,800/month"
              icon="🌐"
              href="/services/network-management"
            />

            {/* System Administration */}
            <ITServiceCard
              title="System Administration"
              description="Server management, maintenance, and optimization"
              features={[
                "Server setup & configuration",
                "User account management",
                "Backup & recovery",
                "Performance monitoring",
                "Security updates",
                "System maintenance"
              ]}
              pricing="From $3,200/month"
              icon="🖥️"
              href="/services/system-administration"
            />

            {/* Database Management */}
            <ITServiceCard
              title="Database Management"
              description="Database design, optimization, and maintenance"
              features={[
                "Database design",
                "Performance optimization",
                "Backup & recovery",
                "Security hardening",
                "Query optimization",
                "Monitoring & tuning"
              ]}
              pricing="From $2,500/month"
              icon="🗄️"
              href="/services/database-management"
            />
          </div>
        </div>
      </section>

      {/* Managed IT Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Managed IT Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Complete IT management solutions that keep your systems running 24/7.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ManagedServiceCard
              title="24/7 Monitoring"
              description="Round-the-clock system monitoring and alerting"
              features={["Real-time monitoring", "Automated alerts", "Performance tracking", "Uptime reporting"]
              icon="📊"
            />
            <ManagedServiceCard
              title="Help Desk Support"
              description="Dedicated technical support for your team"
              features={["Phone & email support", "Remote assistance", "Ticket management", "Knowledge base"]
              icon="🎧"
            />
            <ManagedServiceCard
              title="Security Management"
              description="Comprehensive security monitoring and management"
              features={["Threat detection", "Vulnerability scanning", "Security updates", "Compliance monitoring"]
              icon="🛡️"
            />
            <ManagedServiceCard
              title="Backup & Recovery"
              description="Automated backup and disaster recovery solutions"
              features={["Automated backups", "Disaster recovery", "Data retention", "Recovery testing"]
              icon="💾"
            />
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deep expertise across the latest technologies and platforms.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <TechExpertiseCard
              category="Cloud Platforms"
              technologies={["AWS", "Azure", "Google Cloud", "DigitalOcean"]}
            />
            <TechExpertiseCard
              category="Operating Systems"
              technologies={["Windows Server", "Linux", "macOS", "Unix"]}
            />
            <TechExpertiseCard
              category="Databases"
              technologies={["PostgreSQL", "MySQL", "MongoDB", "Redis"]}
            />
            <TechExpertiseCard
              category="Monitoring"
              technologies={["Nagios", "Zabbix", "Prometheus", "Grafana"]}
            />
          </div>
        </div>
      </section>

      {/* Service Level Agreements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Level Agreements</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guaranteed performance and response times for all our IT services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SLACard
              title="Response Time"
              description="How quickly we respond to your requests"
              metrics={[
                "Critical: 15 minutes",
                "High: 1 hour",
                "Medium: 4 hours",
                "Low: 24 hours"
              ]}
              icon="⏱️"
            />
            <SLACard
              title="Uptime Guarantee"
              description="System availability and reliability"
              metrics={[
                "99.9% uptime SLA",
                "24/7 monitoring",
                "Proactive maintenance",
                "Disaster recovery"
              ]}
              icon="📈"
            />
            <SLACard
              title="Resolution Time"
              description="How quickly we resolve issues"
              metrics={[
                "Critical: 2 hours",
                "High: 8 hours",
                "Medium: 24 hours",
                "Low: 72 hours"
              ]}
              icon="🔧"
            />
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Service Pricing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transparent pricing for all our IT services and support packages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ITPricingCard
              title="Basic IT Support"
              price="$3,000"
              period="month"
              description="Essential IT support for small businesses"
              features={[
                "5 hours/month support",
                "Email & phone support",
                "Basic monitoring",
                "Security updates",
                "Backup management"
              ]}
              popular={false}
            />
            <ITPricingCard
              title="Professional IT"
              price="$5,000"
              period="month"
              description="Comprehensive IT management for growing businesses"
              features={[
                "15 hours/month support",
                "24/7 monitoring",
                "Priority support",
                "Advanced security",
                "Cloud management",
                "Monthly reporting"
              ]}
              popular={true}
            />
            <ITPricingCard
              title="Enterprise IT"
              price="Custom"
              period=""
              description="Full IT management for large organizations"
              features={[
                "Unlimited support",
                "Dedicated team",
                "Custom solutions",
                "Enterprise security",
                "Multi-cloud management",
                "Quarterly reviews"
              ]}
              popular={false}
            />
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored IT solutions for specific industries and compliance requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <IndustrySolutionCard
              title="Healthcare IT"
              description="HIPAA-compliant IT solutions"
              features={["HIPAA compliance", "Secure data handling", "Medical device integration"]
              icon="🏥"
            />
            <IndustrySolutionCard
              title="Financial Services"
              description="Bank-grade security and compliance"
              features={["PCI DSS compliance", "Fraud detection", "Audit trails"]
              icon="🏦"
            />
            <IndustrySolutionCard
              title="E-commerce"
              description="High-availability e-commerce infrastructure"
              features={["High availability", "Payment processing", "Inventory management"]
              icon="🛒"
            />
            <IndustrySolutionCard
              title="Manufacturing"
              description="Industrial IT and IoT solutions"
              features={["IoT integration", "Production monitoring", "Supply chain management"]
              icon="🏭"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let our IT experts help you build a robust, secure, and scalable technology foundation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
          <div className="mt-6 text-sm text-purple-100">
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
      className="group bg-white border border-gray-200 rounded-xl p-6 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-purple-600">{pricing}</div>
    </Link>
  );
}

function ManagedServiceCard({
  title,
  description,
  features,
  icon
}: {
  title: string;
  description: string;
  features: string[];
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechExpertiseCard({
  category,
  technologies
}: {
  category: string;
  technologies: string[];
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{category}</h3>
      <div className="space-y-2">
        {technologies.map((tech, index) => (
          <div key={index} className="text-sm text-gray-600 bg-gray-50 rounded px-3 py-1">
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}

function SLACard({
  title,
  description,
  metrics,
  icon
}: {
  title: string;
  description: string;
  metrics: string[];
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {metrics.map((metric, index) => (
          <li key={index} className="text-sm text-gray-600">
            {metric}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ITPricingCard({
  title,
  price,
  period,
  description,
  features,
  popular
}: {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`bg-white border rounded-xl p-8 ${popular ? 'border-purple-500 ring-2 ring-purple-200' : 'border-gray-200'}`}>
      {popular && (
        <div className="bg-purple-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="text-4xl font-bold text-gray-900 mb-1">
        {price}
        {period && <span className="text-lg text-gray-600">/{period}</span>}
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="w-5 h-5 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 px-4 rounded-lg font-semibold transition-colors ${
          popular
            ? 'bg-purple-600 text-white hover:bg-purple-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function IndustrySolutionCard({
  title,
  description,
  features,
  icon
}: {
  title: string;
  description: string;
  features: string[];
  icon: string;
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-3">{description}</p>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2 flex-shrink-0"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}