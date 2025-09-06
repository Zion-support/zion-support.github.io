
import Link from "next/link";

export const metadata = {
  title: "IT Services | Zion Tech Group - Complete IT Solutions & Infrastructure Management",
  description: "Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and 24/7 support. Enterprise-grade IT solutions with 99.9% uptime guarantee."
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
import React from "react";

export const metadata = {
  title: "IT Services & Solutions | Zion Tech Group",
  description:
    "Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and enterprise solutions. 24/7 support with 99.9% uptime guarantee.",
  keywords:
    "IT services, cloud migration, DevOps, cybersecurity, infrastructure management, enterprise IT, cloud consulting, SRE"
};

interface ITServiceProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  benefits: string[];
  icon: string;
  href: string;
}

function ITService({
  title,
  description,
  price,
  features,
  benefits,
  icon,
  href
}: ITServiceProps) {
  return (
    <a
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
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-900 mb-2">
          Key Features:
        </h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
        <div className="flex flex-wrap gap-1">
          {benefits.map((benefit, index) => (
            <span
              key={index}
              className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded"
            >
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

interface PricingTierProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

function PricingTier({
  name,
  price,
  period,
  description,
  features,
  popular = false,
  cta
}: PricingTierProps) {
  return (
    <div
      className={`relative p-8 rounded-lg border-2 ${popular ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"} shadow-lg`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {price}
          <span className="text-lg text-gray-500 font-normal">/{period}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg
              className="w-5 h-5 text-green-500 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=IT Services - {name} Plan"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

export default function ITServicesPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-green-50 to-blue-100 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          IT Services & Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Complete IT infrastructure, cloud solutions, and digital
          transformation services to modernize your business operations. 24/7
          support with 99.9% uptime guarantee.
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
ursor/automate-test-improve-and-merge-code-646c
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
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our IT Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions to keep your business running smoothly
            and securely.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITService
            title="Cloud Migration & Optimization"
            description="Seamless migration to AWS, Azure, or Google Cloud with zero downtime and cost optimization"
            price="Starting at $5,000"
            features={[
              "Infrastructure assessment",
              "Migration planning & execution",
              "Data migration & validation",
              "Application modernization",
              "Cost optimization analysis"
            ]}
            benefits={[
              "Reduced Costs",
              "Better Scalability",
              "Enhanced Security",
              "Improved Performance"
            ]}
            icon="☁️"
            href="/services/cloud-migration"
          />
          <ITService
            title="DevOps & CI/CD Implementation"
            description="Automated deployment pipelines, infrastructure as code, and continuous integration"
            price="Starting at $3,000"
            features={[
              "CI/CD pipeline setup",
              "Infrastructure as code",
              "Container orchestration",
              "Automated testing",
              "Monitoring & alerting"
            ]}
            benefits={[
              "Faster Deployments",
              "Reduced Errors",
              "Better Collaboration",
              "Automated Testing"
            ]}
            icon="⚙️"
            href="/services/ci-cd-pipeline-builder"
          />
          <ITService
            title="Cybersecurity Suite"
            description="Comprehensive security assessment, implementation, and ongoing monitoring"
            price="Starting at $2,000"
            features={[
              "Security assessment & audit",
              "Penetration testing",
              "Vulnerability scanning",
              "Compliance management",
              "Security training & awareness"
            ]}
            benefits={[
              "Enhanced Security",
              "Compliance",
              "Risk Reduction",
              "Peace of Mind"
            ]}
            icon="🔒"
            href="/services/cybersecurity-suite"
          />
          <ITService
            title="Mobile App Development"
            description="Native and cross-platform mobile app development for iOS and Android"
            price="Starting at $5,000"
            features={[
              "iOS & Android development",
              "Cross-platform solutions",
              "App store optimization",
              "Push notifications",
              "Analytics integration"
            ]}
            benefits={[
              "Mobile Presence",
              "User Engagement",
              "Revenue Growth",
              "Brand Visibility"
            ]}
            icon="📱"
            href="/services/mobile-development"
          />
          <ITService
            title="API Development & Integration"
            description="RESTful APIs, GraphQL, and microservices architecture for modern applications"
            price="Starting at $2,000"
            features={[
              "RESTful API design",
              "GraphQL implementation",
              "Microservices architecture",
              "API documentation",
              "Performance optimization"
            ]}
            benefits={[
              "Better Integration",
              "Scalability",
              "Developer Experience",
              "Future-Proof"
            ]}
            icon="🔗"
            href="/services/api-testing-suite"
          />
          <ITService
            title="Database Solutions"
            description="Database design, optimization, migration, and management services"
            price="Starting at $1,500"
            features={[
              "Database design & architecture",
              "Performance optimization",
              "Data migration",
              "Backup & recovery",
              "Monitoring & maintenance"
            ]}
            benefits={[
              "Better Performance",
              "Data Security",
              "Scalability",
              "Reliability"
            ]}
            icon="🗄️"
            href="/services/data-analytics"
          />
          <ITService
            title="Network Infrastructure"
            description="Network design, implementation, and management for optimal connectivity and security"
            price="Starting at $3,500"
            features={[
              "Network design & planning",
              "Firewall configuration",
              "VPN setup",
              "Network monitoring",
              "Security hardening"
            ]}
            benefits={[
              "Better Connectivity",
              "Enhanced Security",
              "Improved Performance",
              "Reliability"
            ]}
            icon="🌐"
            href="/services/network-infrastructure"
          />
          <ITService
            title="IT Support & Helpdesk"
            description="24/7 technical support and helpdesk services for your business operations"
            price="Starting at $1,200"
            features={[
              "24/7 technical support",
              "Remote assistance",
              "Issue tracking & resolution",
              "User training",
              "Knowledge base management"
            ]}
            benefits={[
              "24/7 Support",
              "Quick Resolution",
              "User Satisfaction",
              "Reduced Downtime"
            ]}
            icon="🎧"
            href="/services/helpdesk-platform"
          />
          <ITService
            title="Disaster Recovery & Backup"
            description="Comprehensive backup solutions and disaster recovery planning to protect your data"
            price="Starting at $2,500"
            features={[
              "Backup strategy design",
              "Automated backup systems",
              "Disaster recovery planning",
              "Data replication",
              "Recovery testing"
            ]}
            benefits={[
              "Data Protection",
              "Business Continuity",
              "Risk Mitigation",
              "Peace of Mind"
            ]}
            icon="💾"
            href="/services/disaster-recovery"
          />
ursor/automate-test-improve-and-merge-code-646c
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
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Technology Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with the latest technologies and frameworks to deliver
            cutting-edge solutions.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { name: "AWS", icon: "☁️", description: "Cloud platform" },
            { name: "Azure", icon: "🔵", description: "Microsoft cloud" },
            {
              name: "Google Cloud",
              icon: "🌐",
              description: "Google platform"
            },
            { name: "Docker", icon: "🐳", description: "Containerization" },
            { name: "Kubernetes", icon: "⚙️", description: "Orchestration" },
            { name: "Terraform", icon: "🏗️", description: "Infrastructure" },
            { name: "Jenkins", icon: "🔧", description: "CI/CD" },
            { name: "GitLab", icon: "🦊", description: "DevOps platform" },
            { name: "MongoDB", icon: "🍃", description: "NoSQL database" },
            { name: "PostgreSQL", icon: "🐘", description: "SQL database" },
            { name: "Redis", icon: "🔴", description: "Caching" },
            { name: "Elasticsearch", icon: "🔍", description: "Search engine" }
          ].map((tech, index) => (
            <div
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <div className="text-2xl mb-2">{tech.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
              <p className="text-xs text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our IT Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We follow a systematic approach to ensure your IT infrastructure is
            robust, secure, and scalable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Assessment & Planning",
              description:
                "We analyze your current IT infrastructure and create a comprehensive improvement plan."
            },
            {
              step: "02",
              title: "Design & Architecture",
              description:
                "Our experts design a scalable and secure IT architecture tailored to your needs."
            },
            {
              step: "03",
              title: "Implementation",
              description:
                "We implement the solution with minimal disruption to your business operations."
            },
            {
              step: "04",
              title: "Monitoring & Support",
              description:
                "Ongoing monitoring, maintenance, and support to ensure optimal performance."
            }
          ].map((phase, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {phase.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {phase.title}
              </h3>
              <p className="text-gray-600">{phase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            IT Services Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transparent pricing for all IT services. Choose the plan that fits
            your needs and budget.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PricingTier
            name="Basic"
            price="$2,000"
            period="month"
            description="Essential IT services for small businesses"
            features={[
              "Basic cloud setup",
              "Email & office solutions",
              "Basic security measures",
              "Monthly maintenance",
              "Email support"
            ]}
            cta="Get Started"
          />
          <PricingTier
            name="Professional"
            price="$8,000"
            period="month"
            description="Most popular for growing businesses"
            features={[
              "Advanced cloud solutions",
              "DevOps implementation",
              "Security monitoring",
              "24/7 support",
              "Performance optimization",
              "Backup & recovery"
            ]}
            popular={true}
            cta="Get Started"
          />
          <PricingTier
            name="Enterprise"
            price="$25,000"
            period="month"
            description="Complete IT transformation for large organizations"
            features={[
              "Custom infrastructure design",
              "Dedicated IT team",
              "Advanced security suite",
              "SLA guarantee",
              "Custom integrations",
              "White-label solutions"
            ]}
            cta="Contact Sales"
          />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses transform their IT infrastructure
            and operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              company: "E-commerce Platform",
              industry: "Retail",
              result: "99.9% uptime achieved",
              description:
                "Migrated to AWS cloud infrastructure, achieving 99.9% uptime and reducing operational costs by 40% while improving performance."
            },
            {
              company: "SaaS Startup",
              industry: "Technology",
              result: "50% faster deployments",
              description:
                "Implemented DevOps practices and CI/CD pipelines, reducing deployment time from 4 hours to 2 hours and eliminating deployment errors."
            },
            {
              company: "Financial Services",
              industry: "Finance",
              result: "Zero security incidents",
              description:
                "Enhanced cybersecurity posture with comprehensive security suite, achieving zero security incidents and full compliance with financial regulations."
            }
          ].map((story, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md border border-gray-200"
            >
              <div className="text-sm text-blue-600 font-semibold mb-2">
                {story.industry}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {story.company}
              </h3>
              <p className="text-gray-600 mb-4">{story.description}</p>
              <div className="text-2xl font-bold text-green-600">
                {story.result}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Modernize Your IT Infrastructure?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how we can help transform your IT infrastructure and
          drive business growth.
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
ursor/automate-test-improve-and-merge-code-646c
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

ursor/automate-test-improve-and-merge-code-646c
