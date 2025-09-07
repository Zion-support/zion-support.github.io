import Link from "next/link";

export const metadata = {
  title: "IT Services | Zion Tech Group",
  description: "Comprehensive IT services including cloud migration, DevOps, cybersecurity, and infrastructure management for enterprise-scale solutions.",
};

function FeatureItem({ icon, title, description, benefits }: { icon: string; title: string; description: string; benefits: string[] }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function ITServicesPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          IT Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive IT solutions designed to modernize your infrastructure, enhance security, and drive operational efficiency. From cloud migration to DevOps automation, we deliver enterprise-grade IT services.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our IT Solutions</h2>
          <div className="space-y-4">
            <FeatureItem
              icon="☁️"
              title="Cloud Migration & Management"
              description="Seamlessly migrate your infrastructure to AWS, Azure, or GCP with zero downtime and optimized performance."
              benefits={["Zero-downtime migration", "Cost optimization", "Multi-cloud support", "24/7 monitoring"]}
            />
            <FeatureItem
              icon="⚙️"
              title="DevOps & SRE"
              description="Implement CI/CD pipelines, infrastructure as code, and site reliability engineering practices."
              benefits={["Automated deployments", "Infrastructure as Code", "Performance monitoring", "Incident response"]}
            />
            <FeatureItem
              icon="🔒"
              title="Cybersecurity & Compliance"
              description="Comprehensive security solutions including threat detection, vulnerability management, and compliance."
              benefits={["Threat detection", "Security audits", "Compliance management", "Incident response"]}
            />
            <FeatureItem
              icon="🖥️"
              title="Infrastructure Management"
              description="End-to-end infrastructure management including servers, networks, and data centers."
              benefits={["Server management", "Network optimization", "Data center operations", "Capacity planning"]}
            />
            <FeatureItem
              icon="📊"
              title="IT Consulting & Strategy"
              description="Strategic IT consulting to align technology with business objectives and drive digital transformation."
              benefits={["Technology strategy", "Digital transformation", "IT governance", "Change management"]}
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Zion for IT?</h2>
          <div className="space-y-6">
            <BenefitCard
              icon="🚀"
              title="Proven Track Record"
              description="Successfully delivered 500+ IT projects with 99.9% uptime and 300% average ROI for our clients."
            />
            <BenefitCard
              icon="🔧"
              title="Expert Team"
              description="Certified professionals with deep expertise in cloud platforms, DevOps, and enterprise technologies."
            />
            <BenefitCard
              icon="⚡"
              title="Rapid Implementation"
              description="Fast deployment and implementation with minimal disruption to your business operations."
            />
            <BenefitCard
              icon="🛡️"
              title="Enterprise Security"
              description="Bank-grade security measures and compliance with industry standards and regulations."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
