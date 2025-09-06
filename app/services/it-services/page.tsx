import Link from "next/link";

export const metadata = {
  title: "IT Services | Zion Tech Group - Complete IT Infrastructure & Support",
  description: "Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and 24/7 support. Starting from $3,000/month.",
};

export default function ITServicesPage() {
  const itServices = [
    {
      title: "Cloud Migration & Management",
      description: "Complete cloud migration services with AWS, Azure, and GCP expertise",
      features: ["Cloud strategy planning", "Migration execution", "Cost optimization", "Security hardening"],
      pricing: "$5,000/project",
      icon: "☁️",
      category: "Cloud Services"
    },
    {
      title: "DevOps & CI/CD Pipeline",
      description: "Automated deployment pipelines with monitoring and infrastructure as code",
      features: ["CI/CD setup", "Infrastructure as Code", "Monitoring & alerting", "Automated testing"],
      pricing: "$4,500/project",
      icon: "🔄",
      category: "DevOps"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services including threat detection and compliance",
      features: ["Security assessment", "Threat detection", "Compliance management", "Incident response"],
      pricing: "$6,000/project",
      icon: "🔒",
      category: "Security"
    },
    {
      title: "Network Infrastructure",
      description: "Design, implementation, and management of secure network infrastructure",
      features: ["Network design", "Firewall configuration", "VPN setup", "Performance monitoring"],
      pricing: "$4,000/project",
      icon: "🌐",
      category: "Networking"
    },
    {
      title: "Database Management",
      description: "Database design, optimization, and management for high-performance applications",
      features: ["Database design", "Performance tuning", "Backup & recovery", "Security hardening"],
      pricing: "$3,500/project",
      icon: "🗄️",
      category: "Database"
    },
    {
      title: "IT Support & Helpdesk",
      description: "24/7 technical support and helpdesk services for your organization",
      features: ["24/7 support", "Remote assistance", "Issue tracking", "Knowledge base"],
      pricing: "$3,000/month",
      icon: "🎧",
      category: "Support"
    },
    {
      title: "Server Management",
      description: "Complete server administration including monitoring, maintenance, and optimization",
      features: ["Server setup", "Performance monitoring", "Security updates", "Backup management"],
      pricing: "$2,500/month",
      icon: "🖥️",
      category: "Infrastructure"
    },
    {
      title: "Backup & Disaster Recovery",
      description: "Comprehensive backup solutions and disaster recovery planning",
      features: ["Automated backups", "Disaster recovery", "Data replication", "Testing & validation"],
      pricing: "$2,000/month",
      icon: "💾",
      category: "Data Protection"
    },
    {
      title: "Email & Communication Systems",
      description: "Email server setup, migration, and communication platform management",
      features: ["Email migration", "Spam filtering", "Calendar integration", "Mobile sync"],
      pricing: "$1,800/month",
      icon: "📧",
      category: "Communication"
    },
    {
      title: "IT Security Audit",
      description: "Comprehensive security assessment and vulnerability testing",
      features: ["Security assessment", "Penetration testing", "Compliance audit", "Risk analysis"],
      pricing: "$5,500/project",
      icon: "🔍",
      category: "Security"
    },
    {
      title: "Software Installation & Licensing",
      description: "Software deployment, licensing management, and user training",
      features: ["Software deployment", "License management", "User training", "Version control"],
      pricing: "$1,500/month",
      icon: "💿",
      category: "Software"
    },
    {
      title: "IT Consulting & Strategy",
      description: "Strategic IT planning and technology roadmap development",
      features: ["IT strategy", "Technology roadmap", "Vendor evaluation", "Budget planning"],
      pricing: "$200/hour",
      icon: "📋",
      category: "Consulting"
    },
    {
      title: "Mobile Device Management",
      description: "Complete mobile device management and security for BYOD environments",
      features: ["Device enrollment", "Security policies", "App management", "Remote wipe"],
      pricing: "$2,200/month",
      icon: "📱",
      category: "Mobile"
    },
    {
      title: "IT Asset Management",
      description: "Complete IT asset tracking, inventory management, and lifecycle planning",
      features: ["Asset tracking", "Inventory management", "Lifecycle planning", "Cost optimization"],
      pricing: "$1,200/month",
      icon: "📦",
      category: "Asset Management"
    },
    {
      title: "Compliance & Governance",
      description: "IT compliance management for SOX, HIPAA, GDPR, and other regulations",
      features: ["Compliance assessment", "Policy development", "Audit support", "Training programs"],
      pricing: "$4,000/month",
      icon: "📜",
      category: "Compliance"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          IT Services & Infrastructure
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Complete IT infrastructure management and support services. From cloud migration to cybersecurity, 
          we provide enterprise-grade IT solutions that keep your business running smoothly and securely.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get IT Assessment
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Request IT Quote
          </a>
        </div>
      </div>

      {/* IT Capabilities */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8 mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our IT Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">☁️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Services</h3>
            <p className="text-gray-600">Complete cloud migration and management across all major platforms</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cybersecurity</h3>
            <p className="text-gray-600">Comprehensive security solutions and threat protection</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">DevOps</h3>
            <p className="text-gray-600">Automated deployment and infrastructure management</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎧</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">Round-the-clock technical support and monitoring</p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">IT Services & Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itServices.map((service, index) => (
            <ITServiceCard key={index} service={service} />
          ))}
        </div>
      </div>

      {/* IT Process */}
      <div className="bg-gray-50 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our IT Service Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Assessment</h3>
            <p className="text-gray-600">Comprehensive IT infrastructure assessment and analysis</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Planning</h3>
            <p className="text-gray-600">Strategic planning and solution design</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
            <p className="text-gray-600">Professional implementation and configuration</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Support</h3>
            <p className="text-gray-600">Ongoing monitoring, maintenance, and support</p>
          </div>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <TechStackItem name="AWS/Azure/GCP" description="Cloud Platforms" />
          <TechStackItem name="Docker/Kubernetes" description="Containerization" />
          <TechStackItem name="Terraform/Ansible" description="Infrastructure as Code" />
          <TechStackItem name="Jenkins/GitLab CI" description="CI/CD Pipelines" />
          <TechStackItem name="PostgreSQL/MySQL" description="Databases" />
          <TechStackItem name="Redis/Memcached" description="Caching" />
          <TechStackItem name="ELK Stack" description="Monitoring" />
          <TechStackItem name="Nginx/Apache" description="Web Servers" />
        </div>
      </div>

      {/* Industry Expertise */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industry Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IndustryCard
            title="Healthcare"
            description="HIPAA-compliant IT solutions for healthcare organizations"
            icon="🏥"
          />
          <IndustryCard
            title="Finance"
            description="Secure IT infrastructure for financial services and fintech"
            icon="💳"
          />
          <IndustryCard
            title="E-commerce"
            description="Scalable IT solutions for online retail and marketplaces"
            icon="🛒"
          />
          <IndustryCard
            title="Manufacturing"
            description="Industrial IT solutions and IoT integration"
            icon="🏭"
          />
          <IndustryCard
            title="Education"
            description="IT infrastructure for schools and educational institutions"
            icon="🎓"
          />
          <IndustryCard
            title="Government"
            description="Secure IT solutions for government agencies"
            icon="🏛️"
          />
        </div>
      </div>

      {/* Service Level Agreements */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Service Level Agreements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SLACard
            title="Standard Support"
            uptime="99.5%"
            response="4 hours"
            description="Business hours support with 4-hour response time"
            features={[
              "Business hours support",
              "Email & phone support",
              "Remote assistance",
              "Monthly reporting"
            ]}
          />
          <SLACard
            title="Premium Support"
            uptime="99.9%"
            response="2 hours"
            description="Extended hours support with 2-hour response time"
            features={[
              "Extended hours support",
              "Priority support queue",
              "Dedicated account manager",
              "Weekly reporting"
            ]}
            popular={true}
          />
          <SLACard
            title="Enterprise Support"
            uptime="99.99%"
            response="1 hour"
            description="24/7 support with 1-hour response time"
            features={[
              "24/7 support",
              "Dedicated support team",
              "On-site support available",
              "Real-time monitoring"
            ]}
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your IT Infrastructure?</h2>
        <p className="text-xl mb-6 max-w-2xl mx-auto">
          Let's discuss your IT needs and create a comprehensive solution that improves efficiency and security.
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
        <div className="mt-6 text-sm">
          <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </div>
  );
}

function ITServiceCard({ service }: { service: any }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{service.icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
          <span className="text-sm text-green-600 font-medium">{service.category}</span>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <ul className="text-sm text-gray-600 space-y-1 mb-4">
        {service.features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
      <div className="text-lg font-semibold text-green-600">{service.pricing}</div>
    </div>
  );
}

function TechStackItem({ name, description }: { name: string; description: string }) {
  return (
    <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
      <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

function IndustryCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-lg border border-gray-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function SLACard({ title, uptime, response, description, features, popular = false }: {
  title: string;
  uptime: string;
  response: string;
  description: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div className={`relative p-6 rounded-xl border-2 ${popular ? 'border-green-500 bg-white' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      <div className="mb-4">
        <div className="text-3xl font-bold text-green-600 mb-1">{uptime}</div>
        <div className="text-sm text-gray-600">Uptime Guarantee</div>
      </div>
      <div className="mb-4">
        <div className="text-2xl font-bold text-blue-600 mb-1">{response}</div>
        <div className="text-sm text-gray-600">Response Time</div>
      </div>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-3">✓</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}