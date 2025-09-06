export const metadata = {
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, SRE, cybersecurity, and infrastructure management for enterprise-grade reliability and efficiency.'
};

export default function ITServicesPage() {
  return (
    <div className="animate-fade-in">
      <section className="py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            IT Services
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Cloud, DevOps, SRE, and security services engineered for uptime and efficiency. 
            We provide enterprise-grade IT solutions that scale with your business.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our IT Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Cloud & Infrastructure"
              description="Scalable cloud solutions across all major platforms"
              features={["AWS/GCP/Azure migration", "Kubernetes orchestration", "Serverless architecture", "Infrastructure as Code", "Multi-cloud strategies", "Cost optimization"]}
              price="Starting at $12k"
              icon="☁️"
            />
            <ServiceCard
              title="DevOps & SRE"
              description="Reliable deployment and monitoring solutions"
              features={["CI/CD pipelines", "Observability & monitoring", "Auto-scaling", "Chaos engineering", "Incident response", "Performance optimization"]}
              price="Starting at $18k"
              icon="🔄"
            />
            <ServiceCard
              title="Cybersecurity"
              description="Comprehensive security solutions and compliance"
              features={["Security hardening", "Zero Trust architecture", "Vulnerability management", "Compliance (SOC2, ISO)", "Penetration testing", "Security training"]}
              price="Starting at $15k"
              icon="🔒"
            />
            <ServiceCard
              title="Network & Infrastructure"
              description="Robust network design and management"
              features={["Network architecture", "SD-WAN implementation", "Load balancing", "DNS management", "VPN solutions", "Network monitoring"]}
              price="Starting at $10k"
              icon="🌐"
            />
            <ServiceCard
              title="Data Management"
              description="Secure and efficient data solutions"
              features={["Database optimization", "Data backup & recovery", "Data migration", "Data governance", "Analytics platforms", "Data security"]}
              price="Starting at $14k"
              icon="💾"
            />
            <ServiceCard
              title="IT Support & Maintenance"
              description="24/7 technical support and system maintenance"
              features={["24/7 helpdesk", "System monitoring", "Proactive maintenance", "User training", "Documentation", "Change management"]}
              price="Starting at $8k"
              icon="🛠️"
            />
          </div>
        </div>

        <Pricing />
        <ContactSection />
      </section>
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
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <a
        href="mailto:kleber@ziontechgroup.com"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Get Started
      </a>
    </div>
  );
}

function Pricing() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan
          name="IT Assessment"
          price="$4k–$10k"
          duration="2 weeks"
          features={["Cloud infrastructure review", "Security audit", "Performance analysis", "Technology roadmap", "Cost optimization report"]}
          popular={false}
        />
        <Plan
          name="Implementation"
          price="$15k–$50k"
          duration="4–8 weeks"
          features={["Infrastructure as Code", "CI/CD setup", "Monitoring & alerting", "Security hardening", "Team training"]}
          popular={true}
        />
        <Plan
          name="Managed Services"
          price="$5k+/mo"
          duration="Ongoing"
          features={["24/7 on-call support", "SLO management", "Cost optimization", "Monthly reports", "Proactive maintenance"]}
          popular={false}
        />
      </div>
    </div>
  );
}

function Plan({
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
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border-2 ${
      popular ? 'border-blue-500' : 'border-gray-200'
    } relative`}>
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
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-3 mt-1">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com"
        className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-200 ${
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

function ContactSection() {
  return (
    <div className="bg-gray-50 rounded-2xl p-8 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Modernize Your IT Infrastructure?</h2>
      <p className="text-xl text-gray-600 mb-8">
        Let's discuss how our IT services can improve your reliability, security, and efficiency.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="flex items-center justify-center space-x-3">
          <span className="text-2xl">📞</span>
          <div>
            <div className="font-semibold text-gray-900">Phone</div>
            <div className="text-gray-600">+1 302 464 0950</div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <span className="text-2xl">✉️</span>
          <div>
            <div className="font-semibold text-gray-900">Email</div>
            <div className="text-gray-600">kleber@ziontechgroup.com</div>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-3">
          <span className="text-2xl">📍</span>
          <div>
            <div className="font-semibold text-gray-900">Address</div>
            <div className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</div>
          </div>
        </div>
      </div>
      <a
        href="mailto:kleber@ziontechgroup.com"
        className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
      >
        Start Your IT Transformation
      </a>
    </div>
  );
}