import Link from 'next/link';

export const metadata = { 
  title: 'IT Services | Zion Tech Group',
  description: 'Cloud, DevOps, SRE and security services engineered for uptime and efficiency. Enterprise IT solutions.',
};

export default function ITServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">IT Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Cloud, DevOps, SRE and security services engineered for uptime and efficiency. 
          Modernize your infrastructure with expert guidance and 24/7 support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <ITFeatureCard 
          title="Cloud & Infrastructure" 
          details={[
            "AWS / GCP / Azure migration",
            "Kubernetes orchestration",
            "Serverless architecture",
            "Infrastructure as Code (Terraform)",
            "Multi-cloud strategies"
          ]} 
        />
        <ITFeatureCard 
          title="DevOps & SRE" 
          details={[
            "CI/CD pipeline automation",
            "Observability & monitoring",
            "Autoscaling & load balancing",
            "Chaos engineering testing",
            "Incident response planning"
          ]} 
        />
        <ITFeatureCard 
          title="Security & Compliance" 
          details={[
            "Security hardening & audits",
            "Zero Trust architecture",
            "Vulnerability management",
            "Compliance (SOC2, GDPR)",
            "Penetration testing"
          ]} 
        />
      </div>

      <ITPricingSection />
      
      <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Modernize Your IT?</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let's assess your current infrastructure and create a modernization plan that improves efficiency and security.
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
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}

function ITFeatureCard({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {details.map((detail, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">•</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ITPricingSection() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">IT Service Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ITPricingPlan 
          name="Assessment" 
          price="$4k–$10k" 
          features={[
            "2 weeks comprehensive review",
            "Cloud architecture audit",
            "Security vulnerability assessment",
            "Performance optimization roadmap",
            "Cost analysis & recommendations"
          ]} 
        />
        <ITPricingPlan 
          name="Implementation" 
          price="$15k–$50k" 
          features={[
            "4–8 weeks implementation",
            "Infrastructure as Code setup",
            "CI/CD pipeline configuration",
            "Monitoring & alerting setup",
            "Team training & documentation"
          ]} 
          featured={true}
        />
        <ITPricingPlan 
          name="Managed Services" 
          price="$5k+/mo" 
          features={[
            "24/7 on-call support",
            "SLO management & reporting",
            "Cost optimization & monitoring",
            "Security updates & patches",
            "Monthly performance reports"
          ]} 
        />
      </div>
    </div>
  );
}

function ITPricingPlan({ 
  name, 
  price, 
  features, 
  featured = false 
}: { 
  name: string; 
  price: string; 
  features: string[]; 
  featured?: boolean;
}) {
  return (
    <div className={`border rounded-xl p-6 ${
      featured 
        ? 'border-green-500 bg-green-50 shadow-lg' 
        : 'border-gray-200 bg-white shadow-sm'
    }`}>
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-gray-900 mb-4">{price}</div>
      <ul className="space-y-2 text-gray-600 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="text-green-500 mr-2">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className={`w-full block text-center py-3 rounded-lg font-semibold transition-colors ${
          featured
            ? 'bg-green-600 text-white hover:bg-green-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
