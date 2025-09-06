export const metadata = {
  title: 'IT Services | Zion Tech Group',
  description: 'Professional IT services including cloud migration, DevOps, cybersecurity, and infrastructure management. Expert IT solutions starting at $4k.'
};

export default function ITServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">IT Services</h1>
        <p className="text-xl text-gray-600 mb-8">
          Cloud, DevOps, SRE and security services engineered for uptime and efficiency.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
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

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our IT Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Migration</h3>
              <p className="text-gray-600 mb-4">
                Seamless migration to cloud platforms with zero downtime and optimized costs.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Multi-cloud strategy</li>
                <li>• Cost optimization</li>
                <li>• Security compliance</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">DevOps Automation</h3>
              <p className="text-gray-600 mb-4">
                Complete CI/CD pipelines and infrastructure automation for faster deployments.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Automated testing</li>
                <li>• Infrastructure as code</li>
                <li>• Monitoring & alerting</li>
                <li>• Disaster recovery</li>
              </ul>
            </div>
          </div>
        </div>

        <Pricing />
      </section>
    </div>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-blue-500 mr-2">•</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Plan 
          name="Assessment" 
          price="$4k–$10k" 
          duration="2 weeks"
          features={[
            "Cloud review",
            "Security audit", 
            "Performance analysis",
            "Migration roadmap"
          ]} 
        />
        <Plan 
          name="Implementation" 
          price="$15k–$50k" 
          duration="4–8 weeks"
          features={[
            "Infra as code",
            "CI/CD setup",
            "Monitoring stack",
            "Security hardening"
          ]} 
        />
        <Plan 
          name="Managed Services" 
          price="$5k+/mo" 
          duration="Ongoing"
          features={[
            "24/7 on-call",
            "SLO management",
            "Cost optimization",
            "Monthly reports"
          ]} 
        />
      </div>
    </div>
  );
}

function Plan({ name, price, duration, features }: {
  name: string;
  price: string;
  duration: string;
  features: string[];
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-green-600 mb-1">{price}</div>
      <div className="text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="mailto:kleber@ziontechgroup.com?subject=IT Services Inquiry"
        className="block w-full mt-6 bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}