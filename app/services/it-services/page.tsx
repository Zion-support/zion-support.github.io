
export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Comprehensive IT services including cloud migration, DevOps, SRE, and security solutions. Engineered for uptime and efficiency.'
};

export default function ITServicesPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">IT Services</h1>
      <p className="text-xl text-gray-600 mb-12">Cloud, DevOps, SRE and security services engineered for uptime and efficiency.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Item 
          title="Cloud & Infra" 
          details={[
            "AWS/GCP/Azure",
            "Kubernetes",
            "Serverless",
            "IaC (Terraform)"
          ]} 
        />
        <Item 
          title="DevOps & SRE" 
          details={[
            "CI/CD",
            "Observability",
            "Autoscaling",
            "Chaos testing"
          ]} 
        />
        <Item 
          title="Security" 
          details={[
            "Hardening",
            "Zero Trust",
            "Vuln mgmt",
            "Compliance"
          ]} 
        />
      </div>
      
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Specialized IT Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            href="/services/cybersecurity-consulting"
            title="Cybersecurity Consulting"
            description="Protect your business with comprehensive security assessment and implementation"
            bullets={["Security assessment", "Implementation", "Incident response"]}
            icon="🔒"
          />
          <ServiceCard
            href="/services/cloud-migration"
            title="Cloud Migration"
            description="Seamlessly migrate your infrastructure to the cloud with zero downtime"
            bullets={["Migration planning", "Cloud platforms", "Post-migration support"]}
            icon="☁️"
          />
          <ServiceCard
            href="/services/database-optimization"
            title="Database Optimization"
            description="Maximize database performance with expert tuning and monitoring"
            bullets={["Performance tuning", "Platform expertise", "Monitoring"]}
            icon="🗄️"
          />
          <ServiceCard
            href="/services/api-development"
            title="API Development"
            description="Build robust, scalable APIs with modern architecture and security"
            bullets={["API design", "Integration", "API management"]}
            icon="🔌"
          />
          <ServiceCard
            href="/services/mobile-app-development"
            title="Mobile App Development"
            description="Create stunning mobile apps for iOS and Android platforms"
            bullets={["Native development", "Cross-platform", "App services"]}
            icon="📱"
          />
          <ServiceCard
            href="/services/web-application-development"
            title="Web Application Development"
            description="Build powerful web applications with modern technologies"
            bullets={["Frontend development", "Backend development", "Full-stack solutions"]}
            icon="🌐"
          />
        </div>
      </div>
      
      <Pricing />
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map(d => (
          <li key={d} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServiceCard({
  href,
  title,
  description,
  bullets,
  icon,
}: {
  href: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
}) {
  return (
    <a
      href={href}
      className="group border border-gray-200 rounded-xl p-6 block hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {bullet}
          </li>
        ))}
      </ul>
    </a>
  );
}

function Pricing() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="Assessment" 
          price="$4k–$10k" 
          features={[
            "2 weeks",
            "Cloud review",
            "Security audit",
            "Roadmap"
          ]} 
        />
        <Plan 
          name="Implementation" 
          price="$15k–$50k" 
          features={[
            "4–8 weeks",
            "Infra as code",
            "CI/CD",
            "Monitoring"
          ]} 
        />
        <Plan 
          name="Managed" 
          price="$5k+/mo" 
          features={[
            "24/7 on-call",
            "SLO mgmt",
            "Cost optimization",
            "Reports"
          ]} 
        />
      </div>
    </div>
  );
}

function Plan({ name, price, features }: { name: string; price: string; features: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map(f => (
          <li key={f} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {f}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950"
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
      >
        Get Started
      </a>
    </div>
  );
}

