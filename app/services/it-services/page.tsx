import Link from 'next/link';

export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and digital transformation solutions.'
};

export default function ITServicesPage() {
  return (
    <div className="animate-fade-in">
      <section className="mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">IT Services & Solutions</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl">
          Cloud migration, DevOps, SRE, security hardening and cost optimization. 
          We provide end-to-end IT solutions that scale with your business and ensure maximum uptime.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ITServiceCard
            title="Cloud Migration & Architecture"
            description="Seamless migration to AWS, Azure, or GCP with optimized architecture and cost management"
            features={["Cloud strategy planning", "Data migration", "Infrastructure as Code", "Cost optimization"]}
            price="$25k-$100k"
            timeline="4-16 weeks"
            icon="☁️"
          />
          <ITServiceCard
            title="DevOps & CI/CD Implementation"
            description="Automated deployment pipelines, infrastructure automation, and continuous integration"
            features={["CI/CD pipelines", "Infrastructure automation", "Monitoring setup", "Security scanning"]}
            price="$15k-$50k"
            timeline="3-10 weeks"
            icon="🔄"
          />
          <ITServiceCard
            title="Cybersecurity & Compliance"
            description="Comprehensive security assessment, implementation, and ongoing monitoring"
            features={["Security audits", "Penetration testing", "Compliance management", "Incident response"]}
            price="$20k-$75k"
            timeline="4-12 weeks"
            icon="🔒"
          />
          <ITServiceCard
            title="Site Reliability Engineering (SRE)"
            description="Reliability engineering, monitoring, and incident management for mission-critical systems"
            features={["SLO/SLI definition", "Error budget management", "Incident response", "Performance optimization"]}
            price="$30k-$80k"
            timeline="6-14 weeks"
            icon="⚡"
          />
          <ITServiceCard
            title="Database Administration & Optimization"
            description="Database design, optimization, backup strategies, and performance tuning"
            features={["Database design", "Performance tuning", "Backup strategies", "High availability"]}
            price="$12k-$40k"
            timeline="2-8 weeks"
            icon="🗄️"
          />
          <ITServiceCard
            title="API Development & Integration"
            description="RESTful APIs, GraphQL, microservices architecture, and third-party integrations"
            features={["API design", "Microservices", "Third-party integrations", "Documentation"]}
            price="$18k-$60k"
            timeline="4-12 weeks"
            icon="🔌"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Technology Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TechExpertiseCard
            title="Cloud Platforms"
            technologies={["AWS", "Azure", "Google Cloud", "DigitalOcean", "Linode"]}
            description="Multi-cloud expertise and optimization"
          />
          <TechExpertiseCard
            title="Containerization"
            technologies={["Docker", "Kubernetes", "Helm", "Istio", "OpenShift"]}
            description="Container orchestration and management"
          />
          <TechExpertiseCard
            title="Monitoring & Observability"
            technologies={["Prometheus", "Grafana", "ELK Stack", "Jaeger", "DataDog"]}
            description="Comprehensive monitoring solutions"
          />
          <TechExpertiseCard
            title="Security Tools"
            technologies={["OWASP", "Nessus", "Burp Suite", "Splunk", "Wazuh"]}
            description="Security assessment and monitoring"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">IT Service Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ITPackageCard
            name="Infrastructure Setup"
            price="$15k–$40k"
            duration="2–6 weeks"
            features={[
              "Cloud infrastructure design",
              "Security configuration",
              "Monitoring setup",
              "Backup strategies",
              "Documentation"
            ]}
            recommended={false}
          />
          <ITPackageCard
            name="DevOps Transformation"
            price="$25k–$70k"
            duration="4–12 weeks"
            features={[
              "CI/CD pipeline setup",
              "Infrastructure as Code",
              "Automated testing",
              "Security integration",
              "Team training"
            ]}
            recommended={true}
          />
          <ITPackageCard
            name="Enterprise IT"
            price="$50k+"
            duration="8+ weeks"
            features={[
              "Multi-cloud architecture",
              "Advanced security",
              "Compliance management",
              "24/7 monitoring",
              "Dedicated support"
            ]}
            recommended={false}
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Industry Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <IndustrySolutionCard
            industry="Healthcare"
            solutions={["HIPAA compliance", "Patient data security", "Telemedicine platforms", "Medical device integration"]}
            icon="🏥"
          />
          <IndustrySolutionCard
            industry="Financial Services"
            solutions={["PCI DSS compliance", "Fraud detection systems", "Risk management", "Regulatory reporting"]}
            icon="💳"
          />
          <IndustrySolutionCard
            industry="E-commerce"
            solutions={["High-availability systems", "Payment processing", "Inventory management", "Customer analytics"]}
            icon="🛍️"
          />
          <IndustrySolutionCard
            industry="Manufacturing"
            solutions={["IoT integration", "Supply chain management", "Quality control systems", "Predictive maintenance"]}
            icon="🏭"
          />
          <IndustrySolutionCard
            industry="Education"
            solutions={["Learning management systems", "Student data protection", "Remote learning platforms", "Assessment tools"]}
            icon="🎓"
          />
          <IndustrySolutionCard
            industry="Government"
            solutions={["Security clearance systems", "Citizen services", "Data governance", "Compliance management"]}
            icon="🏛️"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Managed Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ManagedServiceCard
            title="24/7 Infrastructure Monitoring"
            description="Round-the-clock monitoring and management of your IT infrastructure"
            features={[
              "24/7 system monitoring",
              "Automated alerting",
              "Incident response",
              "Performance optimization",
              "Monthly reporting"
            ]}
            price="Starting at $2k/month"
            icon="📊"
          />
          <ManagedServiceCard
            title="Security Operations Center (SOC)"
            description="Comprehensive security monitoring and incident response services"
            features={[
              "Threat detection",
              "Incident response",
              "Vulnerability management",
              "Security reporting",
              "Compliance monitoring"
            ]}
            price="Starting at $3k/month"
            icon="🛡️"
          />
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Ready to Modernize Your IT Infrastructure?</h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          Let's discuss your IT challenges and create a comprehensive solution that improves reliability, 
          security, and performance while reducing costs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+13024640950"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center"
          >
            Call +1 302 464 0950
          </a>
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors text-center"
          >
            Email Us
          </a>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            📍 364 E Main St STE 1008, Middletown DE 19709
          </p>
        </div>
      </section>
    </div>
  );
}

function ITServiceCard({ title, description, features, price, timeline, icon }: {
  title: string;
  description: string;
  features: string[];
  price: string;
  timeline: string;
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-sm text-gray-600 space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold text-green-600">{price}</span>
        <span className="text-sm text-gray-500">{timeline}</span>
      </div>
    </div>
  );
}

function TechExpertiseCard({ title, technologies, description }: {
  title: string;
  technologies: string[];
  description: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function ITPackageCard({ name, price, duration, features, recommended }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
  recommended: boolean;
}) {
  return (
    <div className={`border rounded-xl p-8 relative ${recommended ? 'border-green-500 bg-green-50' : 'border-gray-200 bg-white'}`}>
      {recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
      <div className="text-3xl font-bold text-green-600 mb-2">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors ${
        recommended 
          ? 'bg-green-600 text-white hover:bg-green-700' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}>
        Get Started
      </button>
    </div>
  );
}

function IndustrySolutionCard({ industry, solutions, icon }: {
  industry: string;
  solutions: string[];
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-bold text-gray-900 mb-3">{industry}</h3>
      <ul className="space-y-2">
        {solutions.map((solution, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-green-500 mr-2">•</span> {solution}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ManagedServiceCard({ title, description, features, price, icon }: {
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-8 bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <div className="text-xl font-bold text-green-600">{price}</div>
    </div>
  );
}