export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, infrastructure management, and digital transformation solutions.'
};

export default function ITServicesPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          IT Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Cloud, DevOps, SRE and security services engineered for uptime and efficiency. 
          We modernize your infrastructure and optimize your operations.
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
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our IT Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            End-to-end IT services that modernize your infrastructure and drive operational excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ITServiceCard
            title="Cloud Migration & Management"
            description="Seamless migration to AWS, Azure, or GCP with ongoing optimization and management"
            features={["Multi-cloud strategy", "Cost optimization", "Security compliance", "24/7 monitoring", "Auto-scaling"]}
            pricing="$2,500/month"
            icon="☁️"
          />
          <ITServiceCard
            title="DevOps & CI/CD"
            description="Automated deployment pipelines and infrastructure as code for faster, reliable releases"
            features={["GitOps workflows", "Infrastructure as Code", "Automated testing", "Deployment automation", "Rollback strategies"]}
            pricing="$3,200/month"
            icon="🔄"
          />
          <ITServiceCard
            title="Cybersecurity Services"
            description="Comprehensive security solutions to protect your infrastructure and data"
            features={["Security audits", "Penetration testing", "Vulnerability management", "Compliance support", "Incident response"]}
            pricing="$4,000/month"
            icon="🔒"
          />
          <ITServiceCard
            title="Infrastructure Monitoring"
            description="Proactive monitoring and alerting to ensure optimal performance and availability"
            features={["Real-time monitoring", "Custom dashboards", "Alert management", "Performance analytics", "Capacity planning"]}
            pricing="$1,800/month"
            icon="📊"
          />
          <ITServiceCard
            title="Database Management"
            description="Database administration, optimization, and migration services for all major platforms"
            features={["Performance tuning", "Backup & recovery", "Security hardening", "Migration services", "24/7 support"]}
            pricing="$2,200/month"
            icon="🗄️"
          />
          <ITServiceCard
            title="Network & Security"
            description="Network design, implementation, and security solutions for enterprise environments"
            features={["Network design", "Firewall configuration", "VPN setup", "Load balancing", "DDoS protection"]}
            pricing="$2,800/month"
            icon="🌐"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with the latest technologies and best practices to deliver robust IT solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <TechExpertise
            title="Cloud Platforms"
            technologies={["AWS", "Azure", "Google Cloud", "DigitalOcean", "Linode"]}
          />
          <TechExpertise
            title="Containerization"
            technologies={["Docker", "Kubernetes", "OpenShift", "Rancher", "Helm"]}
          />
          <TechExpertise
            title="Monitoring & Observability"
            technologies={["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"]}
          />
          <TechExpertise
            title="Security Tools"
            technologies={["Terraform", "Ansible", "Jenkins", "GitLab CI", "GitHub Actions"]}
          />
        </div>
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Service Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our proven methodology ensures successful IT transformation and ongoing optimization.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ITProcessStep
            step="1"
            title="Assessment & Planning"
            description="Comprehensive analysis of current infrastructure, security posture, and optimization opportunities."
          />
          <ITProcessStep
            step="2"
            title="Design & Architecture"
            description="Custom solution design based on your requirements, budget, and scalability needs."
          />
          <ITProcessStep
            step="3"
            title="Implementation"
            description="Careful execution of the solution with minimal downtime and comprehensive testing."
          />
          <ITProcessStep
            step="4"
            title="Optimization & Support"
            description="Ongoing monitoring, optimization, and support to ensure peak performance and reliability."
          />
        </div>
      </section>

      <Pricing />
    </div>
  );
}

function ITServiceCard({ title, description, features, pricing, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  pricing: string; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-all duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="text-gray-600 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-blue-500 mr-2">•</span> {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-lg font-bold text-blue-600 mb-4">{pricing}</div>
      <a
        href="tel:+13024640950"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}

function TechExpertise({ title, technologies }: { title: string; technologies: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function ITProcessStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Pricing() {
  return (
    <section className="py-12 bg-gray-50 rounded-lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">IT Services Pricing</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transparent pricing for IT services. Choose the plan that fits your infrastructure needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <ITPlan 
          name="Assessment" 
          price="$4k–$10k" 
          duration="2 weeks"
          features={[
            "Infrastructure audit",
            "Security assessment",
            "Performance analysis",
            "Cost optimization review",
            "Technology roadmap",
            "Risk assessment"
          ]}
          popular={false}
        />
        <ITPlan 
          name="Implementation" 
          price="$15k–$50k" 
          duration="4–8 weeks"
          features={[
            "Infrastructure as Code",
            "CI/CD pipeline setup",
            "Monitoring & alerting",
            "Security hardening",
            "Performance optimization",
            "Documentation & training"
          ]}
          popular={true}
        />
        <ITPlan 
          name="Managed Services" 
          price="$5k+/mo" 
          duration="Ongoing"
          features={[
            "24/7 monitoring & support",
            "SLO management",
            "Cost optimization",
            "Security updates",
            "Performance reports",
            "Dedicated account manager"
          ]}
          popular={false}
        />
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">
          All plans include: Detailed reporting, 30-day money-back guarantee, emergency support
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
            Get IT Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

function ITPlan({ name, price, duration, features, popular }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
  popular: boolean;
}) {
  return (
    <div className={`border rounded-xl p-8 bg-white relative ${popular ? 'border-green-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-green-600 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
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