export const metadata = { 
  title: 'Cybersecurity Services | Zion Tech Group',
export default function CybersecurityPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Cybersecurity Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Protect your business with our comprehensive cybersecurity solutions. From vulnerability assessments 
          to incident response, we provide enterprise-grade security services to keep your data safe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <Item 
          title="Security Assessment" 
          details={[
            "Penetration testing",
            "Vulnerability scanning",
            "Security architecture review",
            "Risk assessment",
            "Compliance auditing",
            "Security gap analysis"
          ]} 
        />
        <Item 
          title="Incident Response" 
          details={[
            "24/7 monitoring",
            "Threat detection",
            "Incident investigation",
            "Forensic analysis",
            "Recovery planning",
            "Post-incident review"
          ]} 
        />
        <Item 
          title="Security Implementation" 
          details={[
            "Firewall configuration",
            "SIEM deployment",
            "Identity management",
            "Encryption implementation",
            "Security training",
            "Policy development"
          ]} 
        />
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Our Cybersecurity Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Penetration Testing"
            description="Comprehensive security testing to identify vulnerabilities and weaknesses"
            price="Starting at $5k"
            features={["Network testing", "Web application testing", "Social engineering", "Physical security"]
          />
          <ServiceCard
            title="Security Audit"
            description="Complete security assessment and compliance review for your organization"
            price="Starting at $8k"
            features={["Policy review", "Technical assessment", "Compliance check", "Remediation plan"]
          />
          <ServiceCard
            title="Managed Security"
            description="24/7 security monitoring and incident response services"
            price="Starting at $3k/mo"
            features={["Threat monitoring", "Incident response", "Security updates", "Regular reporting"]
          />
          <ServiceCard
            title="Compliance Services"
            description="Help achieve and maintain compliance with industry standards"
            price="Starting at $10k"
            features={["SOC 2", "ISO 27001", "HIPAA", "PCI DSS", "GDPR"]
          />
          <ServiceCard
            title="Security Training"
            description="Comprehensive security awareness training for your team"
            price="Starting at $2k"
            features={["Phishing simulation", "Security workshops", "Policy training", "Certification prep"]
          />
          <ServiceCard
            title="Incident Response"
            description="Rapid response and recovery services for security incidents"
            price="Starting at $15k"
            features={["Emergency response", "Forensic analysis", "Recovery planning", "Legal support"]
          />
        </div>
      </div>

      <Pricing />
    </section>
function ServiceCard({ title, description, price, features }: { 
  title: string; 
  description: string; 
  price: string; 
  features: string[] 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Cybersecurity Service Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="Security Assessment" 
          price="$5k–$15k" 
          duration="1–3 weeks"
          features={[
            "Vulnerability scanning",
            "Penetration testing",
            "Security review",
            "Risk assessment",
            "Detailed report",
            "Remediation guidance"