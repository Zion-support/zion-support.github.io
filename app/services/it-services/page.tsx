export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and digital transformation solutions.'
};

export default function ITServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">IT Services & Solutions</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Cloud, DevOps, SRE and security services engineered for uptime and efficiency. 
            We provide comprehensive IT solutions to modernize and secure your infrastructure.
          </p>
        </div>

        {/* Cloud & Infrastructure Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cloud & Infrastructure Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Cloud Migration"
              description="Complete migration to AWS, Azure, or GCP with zero downtime and optimized costs"
              features={["Assessment & planning", "Data migration", "Application modernization", "Cost optimization"]}
              price="$25k - $100k"
              icon="☁️"
            />
            <ServiceCard
              title="Kubernetes Management"
              description="Container orchestration with Kubernetes for scalable, resilient applications"
              features={["Cluster setup", "Auto-scaling", "Monitoring", "Security hardening"]}
              price="$15k - $50k"
              icon="🐳"
            />
            <ServiceCard
              title="Serverless Architecture"
              description="Event-driven, serverless solutions for cost-effective and scalable applications"
              features={["Lambda functions", "API Gateway", "Event processing", "Cost optimization"]}
              price="$10k - $35k"
              icon="⚡"
            />
            <ServiceCard
              title="Infrastructure as Code"
              description="Automated infrastructure provisioning and management using Terraform and CloudFormation"
              features={["Terraform setup", "Version control", "Automated deployment", "State management"]}
              price="$8k - $25k"
              icon="🏗️"
            />
            <ServiceCard
              title="Multi-Cloud Strategy"
              description="Hybrid and multi-cloud solutions for redundancy and vendor independence"
              features={["Strategy planning", "Cross-cloud networking", "Data synchronization", "Disaster recovery"]}
              price="$30k - $80k"
              icon="🌐"
            />
            <ServiceCard
              title="Database Management"
              description="Database design, optimization, and migration services for all major platforms"
              features={["Performance tuning", "Backup strategies", "Migration planning", "Monitoring setup"]}
              price="$12k - $40k"
              icon="🗄️"
            />
          </div>
        </div>

        {/* DevOps & SRE Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">DevOps & Site Reliability Engineering</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="CI/CD Pipeline Setup"
              description="Automated build, test, and deployment pipelines for faster, more reliable releases"
              features={["Pipeline design", "Automated testing", "Deployment automation", "Rollback strategies"]}
              price="$15k - $45k"
              icon="🔄"
            />
            <ServiceCard
              title="Monitoring & Observability"
              description="Comprehensive monitoring solutions with alerts, dashboards, and log analysis"
              features={["APM setup", "Log aggregation", "Alerting rules", "Custom dashboards"]}
              price="$10k - $30k"
              icon="📊"
            />
            <ServiceCard
              title="Auto-scaling Solutions"
              description="Dynamic scaling based on demand to optimize costs and performance"
              features={["Horizontal scaling", "Vertical scaling", "Load balancing", "Cost optimization"]}
              price="$8k - $25k"
              icon="📈"
            />
            <ServiceCard
              title="Chaos Engineering"
              description="Resilience testing through controlled failures to improve system reliability"
              features={["Failure injection", "Resilience testing", "Recovery procedures", "Documentation"]}
              price="$12k - $35k"
              icon="💥"
            />
            <ServiceCard
              title="Performance Optimization"
              description="Application and infrastructure performance tuning for maximum efficiency"
              features={["Code profiling", "Database optimization", "Caching strategies", "Load testing"]}
              price="$10k - $40k"
              icon="⚡"
            />
            <ServiceCard
              title="Disaster Recovery"
              description="Comprehensive backup and disaster recovery solutions for business continuity"
              features={["Backup strategies", "Recovery procedures", "Testing protocols", "Documentation"]}
              price="$20k - $60k"
              icon="🛡️"
            />
          </div>
        </div>

        {/* Cybersecurity Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cybersecurity Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Security Assessment"
              description="Comprehensive security audits and vulnerability assessments"
              features={["Penetration testing", "Vulnerability scanning", "Compliance audit", "Risk assessment"]}
              price="$15k - $50k"
              icon="🔍"
            />
            <ServiceCard
              title="Zero Trust Architecture"
              description="Implementation of zero trust security model for enhanced protection"
              features={["Identity verification", "Network segmentation", "Access controls", "Monitoring"]}
              price="$25k - $75k"
              icon="🔐"
            />
            <ServiceCard
              title="Security Hardening"
              description="System and application hardening to reduce attack surface"
              features={["OS hardening", "Application security", "Network security", "Configuration review"]}
              price="$10k - $35k"
              icon="🛡️"
            />
            <ServiceCard
              title="Incident Response"
              description="24/7 security monitoring and incident response services"
              features={["Threat detection", "Incident handling", "Forensic analysis", "Recovery procedures"]}
              price="$5k - $15k/month"
              icon="🚨"
            />
            <ServiceCard
              title="Compliance Management"
              description="Help with SOC 2, ISO 27001, GDPR, and other compliance requirements"
              features={["Compliance assessment", "Policy development", "Audit preparation", "Training"]}
              price="$20k - $60k"
              icon="📋"
            />
            <ServiceCard
              title="Security Training"
              description="Employee security awareness and technical training programs"
              features={["Phishing simulation", "Security workshops", "Certification programs", "Ongoing education"]}
              price="$5k - $20k"
              icon="🎓"
            />
          </div>
        </div>

        {/* Digital Transformation */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Digital Transformation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Legacy System Modernization"
              description="Modernization of legacy systems with modern architectures and technologies"
              features={["System analysis", "Migration planning", "Data migration", "User training"]}
              price="$50k - $200k"
              icon="🔄"
            />
            <ServiceCard
              title="API Development & Management"
              description="RESTful and GraphQL API development with comprehensive management"
              features={["API design", "Documentation", "Rate limiting", "Analytics"]}
              price="$15k - $50k"
              icon="🔌"
            />
            <ServiceCard
              title="Microservices Architecture"
              description="Breaking down monolithic applications into scalable microservices"
              features={["Architecture design", "Service decomposition", "API gateway", "Service mesh"]}
              price="$40k - $120k"
              icon="🧩"
            />
            <ServiceCard
              title="Data Engineering"
              description="Data pipeline development and data lake/warehouse implementation"
              features={["ETL pipelines", "Data modeling", "Real-time processing", "Analytics setup"]}
              price="$25k - $80k"
              icon="📊"
            />
            <ServiceCard
              title="Mobile App Development"
              description="Native and cross-platform mobile application development"
              features={["iOS/Android apps", "Cross-platform solutions", "Backend integration", "App store deployment"]}
              price="$30k - $100k"
              icon="📱"
            />
            <ServiceCard
              title="Web Application Development"
              description="Modern web applications with responsive design and optimal performance"
              features={["Frontend development", "Backend APIs", "Database design", "Performance optimization"]}
              price="$20k - $80k"
              icon="🌐"
            />
          </div>
        </div>

        {/* Managed Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Managed IT Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="24/7 Infrastructure Monitoring"
              description="Round-the-clock monitoring and management of your IT infrastructure"
              features={["Proactive monitoring", "Incident response", "Performance optimization", "Regular reporting"]}
              price="$2k - $10k/month"
              icon="👁️"
            />
            <ServiceCard
              title="Cloud Management"
              description="Ongoing management and optimization of your cloud infrastructure"
              features={["Cost optimization", "Security updates", "Performance tuning", "Capacity planning"]}
              price="$3k - $15k/month"
              icon="☁️"
            />
            <ServiceCard
              title="Help Desk Support"
              description="Technical support and help desk services for your organization"
              features={["Ticket management", "Remote support", "User training", "Documentation"]}
              price="$1k - $5k/month"
              icon="🎧"
            />
          </div>
        </div>

        {/* Pricing Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">IT Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              name="Assessment & Planning"
              price="$4k - $10k"
              duration="2-4 weeks"
              features={[
                "Infrastructure audit",
                "Security assessment",
                "Performance analysis",
                "Technology roadmap",
                "Cost optimization plan"
              ]}
              popular={false}
            />
            <PricingCard
              name="Implementation"
              price="$15k - $50k"
              duration="4-12 weeks"
              features={[
                "Cloud migration",
                "DevOps setup",
                "Security implementation",
                "Monitoring setup",
                "Documentation",
                "3 months support"
              ]}
              popular={true}
            />
            <PricingCard
              name="Managed Services"
              price="$5k+/month"
              duration="Ongoing"
              features={[
                "24/7 monitoring",
                "Proactive maintenance",
                "Security management",
                "Performance optimization",
                "Incident response",
                "Regular reporting"
              ]}
              popular={false}
            />
          </div>
        </div>

        {/* Contact CTA */}
        <ContactCTA />
      </div>
    </div>
  );
}

function ServiceCard({ 
  title, 
  description, 
  features, 
  price, 
  icon 
}: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="text-gray-600 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-blue-500 mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-lg font-bold text-blue-600 mb-4">{price}</div>
      <a 
        href="tel:+13024640950" 
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Quote
      </a>
    </div>
  );
}

function PricingCard({ 
  name, 
  price, 
  duration, 
  features, 
  popular 
}: { 
  name: string; 
  price: string; 
  duration: string; 
  features: string[]; 
  popular: boolean; 
}) {
  return (
    <div className={`relative bg-white rounded-xl shadow-lg p-8 border-2 ${popular ? 'border-blue-500' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-3">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function ContactCTA() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white">
      <h2 className="text-4xl font-bold mb-6">Ready to Modernize Your IT Infrastructure?</h2>
      <p className="text-xl mb-8 max-w-3xl mx-auto">
        Let's discuss how we can help you build a robust, secure, and scalable IT infrastructure. 
        Our experts are ready to transform your technology landscape.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a
          href="tel:+13024640950"
          className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
        >
          📞 Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
        >
          ✉️ Email Us
        </a>
        <div className="text-center">
          <div className="text-sm opacity-90">Visit us at:</div>
          <div className="font-semibold">364 E Main St STE 1008</div>
          <div className="font-semibold">Middletown, DE 19709</div>
        </div>
      </div>
    </div>
  );
}