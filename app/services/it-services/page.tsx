


export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and enterprise solutions for modern businesses.',
  keywords: 'IT services, cloud migration, DevOps, cybersecurity, infrastructure, enterprise IT, cloud consulting, SRE'

};


export default function ITServicesPage() {
  return (

    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Cloud, DevOps, SRE, and security services engineered for uptime, efficiency, and scalability. 
              We help modernize your infrastructure and optimize your IT operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
              >
                Email kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our IT Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade IT solutions that ensure reliability, security, and scalability for your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ITServiceCard
              title="Cloud Migration & Management"
              description="Complete cloud migration with modern architecture, cost optimization, and performance tuning for AWS, Azure, and GCP."
              features={[
                "Multi-cloud strategy development",
                "Container orchestration (Kubernetes)",
                "Serverless architecture design",
                "Cost optimization & monitoring",
                "Disaster recovery planning",
                "24/7 cloud management"
              ]}
              pricing="$15,000-75,000"
              marketSize="$480B cloud computing market"
              icon="☁️"
            />
            <ITServiceCard
              title="DevOps & CI/CD"
              description="Automated deployment pipelines with monitoring, testing, and quality gates for faster, more reliable releases."
              features={[
                "GitOps workflow implementation",
                "Automated testing integration",
                "Blue-green deployments",
                "Infrastructure as Code (IaC)",
                "Monitoring & alerting setup",
                "Performance optimization"
              ]}
              pricing="$8,000-35,000"
              marketSize="$7.2B DevOps market"
              icon="🔄"
            />
            <ITServiceCard
              title="Cybersecurity & Compliance"
              description="Comprehensive security assessment, hardening, and compliance management for enterprise-grade protection."
              features={[
                "Security audits & assessments",
                "Penetration testing",
                "Compliance framework implementation",
                "Zero Trust architecture",
                "Incident response planning",
                "Security training & awareness"
              ]}
              pricing="$12,000-50,000"
              marketSize="$155B cybersecurity market"
              icon="🔒"
            />
            <ITServiceCard
              title="Site Reliability Engineering (SRE)"
              description="SRE practices with monitoring, alerting, and incident management for maximum system reliability."
              features={[
                "SLO/SLI definition & monitoring",
                "Error budget management",
                "Incident response automation",
                "Performance optimization",
                "Capacity planning",
                "Post-mortem analysis"
              ]}
              pricing="$10,000-45,000"
              marketSize="$2.8B SRE market"
              icon="⚡"
            />
            <ITServiceCard
              title="Infrastructure Automation"
              description="Infrastructure as Code, automated provisioning, and configuration management for consistent, scalable systems."
              features={[
                "Terraform/CloudFormation setup",
                "Ansible configuration management",
                "Automated provisioning",
                "Configuration drift detection",
                "Environment standardization",
                "Backup & recovery automation"
              ]}
              pricing="$6,000-25,000"
              marketSize="$4.1B infrastructure automation market"
              icon="🏗️"
            />
            <ITServiceCard
              title="Database Management"
              description="Database design, optimization, migration, and management for high-performance, scalable data systems."
              features={[
                "Database design & optimization",
                "Migration & consolidation",
                "Performance tuning",
                "Backup & recovery strategies",
                "High availability setup",
                "Database monitoring & alerting"
              ]}
              pricing="$5,000-30,000"
              marketSize="$65B database market"
              icon="🗄️"
            />
            <ITServiceCard
              title="Network & Security"
              description="Network design, security implementation, and monitoring for secure, high-performance connectivity."
              features={[
                "Network architecture design",
                "Firewall configuration",
                "VPN & remote access setup",
                "Network monitoring & analysis",
                "Security policy implementation",
                "Traffic optimization"
              ]}
              pricing="$7,000-40,000"
              marketSize="$12.8B network security market"
              icon="🌐"
            />
            <ITServiceCard
              title="Monitoring & Observability"
              description="Comprehensive monitoring, logging, and observability solutions for proactive system management."
              features={[
                "Application performance monitoring",
                "Infrastructure monitoring",
                "Log aggregation & analysis",
                "Distributed tracing",
                "Alerting & notification setup",
                "Custom dashboard creation"
              ]}
              pricing="$4,000-20,000"
              marketSize="$3.2B monitoring market"
              icon="📊"
            />
            <ITServiceCard
              title="IT Consulting & Strategy"
              description="Strategic IT planning, technology assessment, and digital transformation consulting for business growth."
              features={[
                "IT strategy development",
                "Technology assessment",
                "Digital transformation planning",
                "Vendor evaluation & selection",
                "IT governance setup",
                "Change management support"
              ]}
              pricing="$3,000-15,000"
              marketSize="$8.9B IT consulting market"
              icon="💡"
            />
            <ITServiceCard
              title="Edge Computing Solutions"
              description="Edge computing infrastructure for low-latency applications, IoT devices, and distributed processing."
              features={[
                "Edge server deployment",
                "IoT device management",
                "Real-time data processing",
                "Latency optimization",
                "Distributed computing",
                "Edge security implementation"
              ]}
              pricing="$8,000-40,000"
              marketSize="$2.1B edge computing market"
              icon="🌐"
            />
            <ITServiceCard
              title="5G Network Implementation"
              description="5G network design, deployment, and optimization for high-speed connectivity and IoT applications."
              features={[
                "5G network planning",
                "Small cell deployment",
                "Network optimization",
                "IoT connectivity setup",
                "Performance monitoring",
                "Coverage analysis"
              ]}
              pricing="$15,000-75,000"
              marketSize="$4.7B 5G infrastructure market"
              icon="📡"
            />
            <ITServiceCard
              title="Quantum Computing Integration"
              description="Quantum computing solutions for cryptography, optimization, and advanced computational problems."
              features={[
                "Quantum algorithm development",
                "Quantum cryptography",
                "Optimization problems",
                "Quantum simulation",
                "Hybrid classical-quantum systems",
                "Quantum security protocols"
              ]}
              pricing="$25,000-150,000"
              marketSize="$1.2B quantum computing market"
              icon="⚛️"
            />
            <ITServiceCard
              title="Blockchain Infrastructure"
              description="Blockchain network setup, smart contract development, and decentralized application infrastructure."
              features={[
                "Blockchain network design",
                "Smart contract development",
                "DeFi protocol implementation",
                "NFT platform development",
                "Consensus mechanism setup",
                "Blockchain security audit"
              ]}
              pricing="$12,000-60,000"
              marketSize="$3.4B blockchain infrastructure market"
              icon="⛓️"
            />
            <ITServiceCard
              title="IoT Platform Development"
              description="Comprehensive IoT platform with device management, data processing, and analytics capabilities."
              features={[
                "IoT device connectivity",
                "Data ingestion & processing",
                "Real-time analytics",
                "Device management",
                "Security & encryption",
                "Scalable architecture"
              ]}
              pricing="$10,000-50,000"
              marketSize="$5.8B IoT platform market"
              icon="🏠"
            />
            <ITServiceCard
              title="AR/VR Infrastructure"
              description="Augmented and virtual reality infrastructure for immersive experiences and enterprise applications."
              features={[
                "AR/VR application development",
                "3D content creation",
                "Spatial computing",
                "Haptic feedback systems",
                "Multi-user experiences",
                "Performance optimization"
              ]}
              pricing="$15,000-80,000"
              marketSize="$2.9B AR/VR market"
              icon="🥽"
            />
            <ITServiceCard
              title="High-Performance Computing"
              description="HPC solutions for scientific computing, data analysis, and computationally intensive applications."
              features={[
                "HPC cluster setup",
                "Parallel processing optimization",
                "GPU computing",
                "Distributed computing",
                "Performance tuning",
                "Scientific software integration"
              ]}
              pricing="$20,000-100,000"
              marketSize="$4.2B HPC market"
              icon="💻"
            />
            <ITServiceCard
              title="Green IT & Sustainability"
              description="Sustainable IT solutions with energy efficiency, carbon footprint reduction, and green technology implementation."
              features={[
                "Energy-efficient infrastructure",
                "Carbon footprint tracking",
                "Renewable energy integration",
                "E-waste management",
                "Green data centers",
                "Sustainability reporting"
              ]}
              pricing="$5,000-30,000"
              marketSize="$1.8B green IT market"
              icon="🌱"
            />
            <ITServiceCard
              title="Disaster Recovery & Business Continuity"
              description="Comprehensive disaster recovery planning and business continuity solutions for critical business operations."
              features={[
                "Disaster recovery planning",
                "Backup & recovery systems",
                "Business continuity testing",
                "Failover automation",
                "Data replication",
                "Recovery time optimization"
              ]}
              pricing="$8,000-45,000"
              marketSize="$2.6B disaster recovery market"
              icon="🚨"
            />
            <ITServiceCard
              title="IT Asset Management"
              description="Complete IT asset lifecycle management with tracking, optimization, and compliance monitoring."
              features={[
                "Asset inventory management",
                "Lifecycle tracking",
                "Cost optimization",
                "Compliance monitoring",
                "Software license management",
                "Asset disposal & recycling"
              ]}
              pricing="$3,000-20,000"
              marketSize="$1.5B IT asset management market"
              icon="📋"
            />
            <ITServiceCard
              title="Digital Workplace Solutions"
              description="Modern digital workplace setup with collaboration tools, remote work infrastructure, and employee experience optimization."
              features={[
                "Collaboration platform setup",
                "Remote work infrastructure",
                "Employee experience optimization",
                "Digital transformation",
                "Change management",
                "Productivity analytics"
              ]}
              pricing="$6,000-35,000"
              marketSize="$3.7B digital workplace market"
              icon="🏢"
            />
            <ITServiceCard
              title="IT Compliance & Governance"
              description="Comprehensive IT governance framework with compliance monitoring, risk management, and audit support."
              features={[
                "Compliance framework implementation",
                "Risk assessment & management",
                "Audit support & preparation",
                "Policy development",
                "Training & awareness",
                "Continuous monitoring"
              ]}
              pricing="$4,000-25,000"
              marketSize="$2.3B IT governance market"
              icon="📊"
            />
            <ITServiceCard
              title="Microservices Architecture"
              description="Microservices architecture design and implementation for scalable, maintainable applications."
              features={[
                "Microservices design",
                "API gateway setup",
                "Service mesh implementation",
                "Container orchestration",
                "Service discovery",
                "Monitoring & observability"
              ]}
              pricing="$10,000-50,000"
              marketSize="$3.1B microservices market"
              icon="🔧"
            />
            <ITServiceCard
              title="IT Performance Optimization"
              description="Comprehensive IT performance optimization with monitoring, analysis, and continuous improvement."
              features={[
                "Performance monitoring",
                "Bottleneck identification",
                "Optimization recommendations",
                "Capacity planning",
                "Performance testing",
                "Continuous improvement"
              ]}
              pricing="$5,000-30,000"
              marketSize="$2.4B IT performance market"
              icon="⚡"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Our IT Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our IT Services?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver IT solutions that drive real value.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              title="Enterprise-Grade"
              description="Solutions designed for enterprise scale with 99.9% uptime guarantees and robust security."
            />
            <FeatureCard
              title="Cost Optimization"
              description="Reduce IT costs by up to 40% through efficient resource utilization and automation."
            />
            <FeatureCard
              title="24/7 Support"
              description="Round-the-clock monitoring, support, and incident response to ensure business continuity."
            />
            <FeatureCard
              title="Future-Proof"
              description="Modern, scalable solutions that grow with your business and adapt to new technologies."
            />
          </div>
        </div>
      </section>

      {/* IT Service Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Service Packages</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the perfect IT package for your business needs and infrastructure requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ITPricingCard
              name="IT Assessment"
              price="$5,000 - $15,000"
              duration="2-4 weeks"
              features={[
                "Infrastructure audit",
                "Security assessment",
                "Performance analysis",
                "Cost optimization review",
                "Technology roadmap",
                "Implementation recommendations"
              ]}
              bestFor="Businesses evaluating IT needs"
            />
            <ITPricingCard
              name="Implementation"
              price="$15,000 - $75,000"
              duration="4-12 weeks"
              features={[
                "Solution design & architecture",
                "Implementation & configuration",
                "Testing & validation",
                "User training & documentation",
                "Go-live support",
                "3 months post-implementation support"
              ]}
              bestFor="IT modernization projects"
              popular={true}
            />
            <ITPricingCard
              name="Managed Services"
              price="$2,000 - $10,000/month"
              duration="Ongoing"
              features={[
                "24/7 monitoring & support",
                "Proactive maintenance",
                "Security updates & patches",
                "Performance optimization",
                "Incident response",
                "Regular reporting & reviews"
              ]}
              bestFor="Ongoing IT management"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Modernize Your IT Infrastructure?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our IT services can improve your infrastructure, reduce costs, and enhance security. 
            Our team has successfully delivered 200+ IT projects across various industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
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
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-300 hover:shadow-lg transition-all duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="text-lg font-semibold text-green-600 mb-1">{pricing}</div>
        <div className="text-sm text-gray-500">{marketSize}</div>
      </div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span>
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
    <div className={`relative bg-white border rounded-xl p-8 ${popular ? 'border-green-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-green-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="text-sm text-gray-500 mb-4">Best for: {bestFor}</div>
      <a
        href="tel:+13024640950"
        className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-green-600 text-white hover:bg-green-700' 
            : 'border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
        }`}

      >
        Get Started
      </a>
    </div>
  );

}

function ITProcessStep({ step, title, description }: { 
  step: string; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ITTechStack({ title, technologies }: { 
  title: string; 
  technologies: string[]; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function IndustrySolution({ title, description, solutions, icon }: { 
  title: string; 
  description: string; 
  solutions: string[]; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {solutions.map((solution) => (
          <li key={solution} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {solution}

          </li>
        ))}
      </ul>
    </div>
  );
}


function ITBenefitCard({ title, description, icon }: { 
  title: string; 
  description: string; 
  icon: string; 
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Pricing() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">IT Service Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="Assessment" 
          price="$4k–$10k" 
          features={["2 weeks", "Cloud review", "Security audit", "Roadmap", "Recommendations"]} 
          popular={false}
        />
        <Plan 
          name="Implementation" 
          price="$15k–$50k" 
          features={["4–8 weeks", "Infra as code", "CI/CD", "Monitoring", "Security hardening"]} 
          popular={true}
        />
        <Plan 
          name="Managed Services" 
          price="$5k+/mo" 
          features={["24/7 on-call", "SLO mgmt", "Cost optimization", "Reports", "Proactive maintenance"]} 
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


function CTASection() {
  return (

    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Modernize Your IT Infrastructure?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Let's discuss your IT needs and create a comprehensive solution that improves efficiency, 
        security, and scalability. Our team of IT experts is ready to help you transform your infrastructure.

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

      <div className="mt-6 text-sm text-gray-600">
        <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>

      </div>
    </div>
  );
}

}



