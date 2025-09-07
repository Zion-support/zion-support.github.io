
export const metadata = {
  title: "Cybersecurity Solutions | Zion Tech Group",
  description: "Comprehensive cybersecurity services including threat detection, compliance, and 24/7 monitoring to protect your digital assets.",
};

export default function CybersecuritySolutionsPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Cybersecurity Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Safeguard your business from evolving cyber threats with our comprehensive cybersecurity services. We provide robust protection, proactive monitoring, and expert guidance to ensure your digital assets are secure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Services</h2>
          <div className="space-y-4">
            <FeatureItem
              icon="🛡️"
              title="Threat Detection & Response"
              description="Advanced systems for real-time threat detection, incident response planning, and rapid recovery from cyber attacks."
              benefits={["24/7 monitoring", "AI-powered detection", "Rapid incident response", "Proactive threat hunting"]}
            />
            <FeatureItem
              icon="🔒"
              title="Vulnerability Management"
              description="Regular vulnerability assessments, penetration testing, and security audits to identify and remediate weaknesses."
              benefits={["Continuous scanning", "Detailed reports", "Prioritized remediation", "Compliance adherence"]}
            />
            <FeatureItem
              icon="📜"
              title="Compliance & Governance"
              description="Ensure adherence to industry regulations (e.g., GDPR, HIPAA, ISO 27001) with our expert compliance consulting and implementation."
              benefits={["Regulatory compliance", "Risk assessment", "Policy development", "Audit support"]}
            />
            <FeatureItem
              icon="☁️"
              title="Cloud Security"
              description="Secure your cloud environments (AWS, Azure, GCP) with robust configurations, access controls, and data protection strategies."
              benefits={["Cloud posture management", "Data encryption", "Identity & access management", "Cloud workload protection"]}
            />
            <FeatureItem
              icon="👨‍🏫"
              title="Security Awareness Training"
              description="Educate your employees on best security practices to minimize human error and strengthen your organization's defense."
              benefits={["Phishing simulations", "Customized modules", "Employee education", "Reduced insider threats"]}
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Zion for Cybersecurity?</h2>
          <div className="space-y-6">
            <BenefitCard
              icon="✅"
              title="Proactive Protection"
              description="We don't just react to threats; we proactively identify and neutralize them before they can impact your business."
            />
            <BenefitCard
              icon="🌐"
              title="Holistic Approach"
              description="Our solutions cover all aspects of cybersecurity, from network and endpoint protection to cloud and data security."
            />
            <BenefitCard
              icon="🧠"
              title="Expert Team"
              description="Our certified cybersecurity professionals bring deep expertise and stay ahead of the latest threat landscapes."
            />
            <BenefitCard
              icon="📈"
              title="Business Continuity"
              description="Minimize downtime and ensure business continuity with robust disaster recovery and incident response plans."
            />
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cybersecurity Process</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We follow a structured approach to build and maintain your robust security posture.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProcessStep
            step="1"
            title="Assess & Plan"
            description="Evaluate current security posture, identify risks, and develop a tailored security strategy."
          />
          <ProcessStep
            step="2"
            title="Implement & Protect"
            description="Deploy security solutions, configure systems, and establish monitoring."
          />
          <ProcessStep
            step="3"
            title="Monitor & Optimize"
            description="Continuously monitor for threats, respond to incidents, and refine security measures."
          />
        </div>
      </div>

      <CTA />
    </div>
  );
}

function FeatureItem({ icon, title, description, benefits }: { icon: string; title: string; description: string; benefits: string[] }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"></span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BenefitCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="text-4xl mb-4 text-red-600">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function ProcessStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CTA() {
  return (
    <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Fortify Your Defenses?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Contact us today for a free cybersecurity consultation and protect your business from the latest threats.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="tel:+13024640950"
          className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
        >
          Call +1 302 464 0950
        </a>
        <a
          href="mailto:kleber@ziontechgroup.com"
          className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
        >
          Email Us
        </a>
      </div>
      <div className="mt-6 text-sm text-gray-600">
        <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
      </div>
    </div>
  );
}