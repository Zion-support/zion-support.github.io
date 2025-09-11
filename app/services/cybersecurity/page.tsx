export const metadata = { 
  title: 'Cybersecurity Services | Zion Tech Group',
export default function CybersecurityPage() {
  return (
<<<<<<< HEAD
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
=======
    <div className="animate-fade-in">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Cybersecurity Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Comprehensive cybersecurity solutions to protect your business from evolving threats. 
          We provide end-to-end security services from assessment to incident response.
        </p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Cybersecurity Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CyberServiceCard
            title="Security Assessment & Auditing"
            description="Comprehensive security evaluation and vulnerability assessment"
            features={["Penetration testing", "Vulnerability scanning", "Security audit", "Risk assessment", "Compliance review", "Remediation planning"]}
            price="$15k–$50k"
            icon="🔍"
          />
          <CyberServiceCard
            title="Threat Detection & Response"
            description="Advanced threat detection and incident response capabilities"
            features={["SIEM implementation", "Threat hunting", "Incident response", "Forensic analysis", "Malware analysis", "Threat intelligence"]}
            price="$25k–$80k"
            icon="🛡️"
          />
          <CyberServiceCard
            title="Identity & Access Management"
            description="Secure identity management and access control solutions"
            features={["IAM implementation", "Multi-factor authentication", "Single sign-on", "Privileged access", "Identity governance", "Compliance reporting"]}
            price="$20k–$60k"
            icon="🔐"
          />
          <CyberServiceCard
            title="Network Security & Firewall"
            description="Network protection and firewall management services"
            features={["Firewall configuration", "Network segmentation", "Intrusion detection", "VPN setup", "Traffic monitoring", "Security policies"]}
            price="$18k–$55k"
            icon="🌐"
          />
          <CyberServiceCard
            title="Data Protection & Encryption"
            description="Data security and encryption implementation"
            features={["Data classification", "Encryption at rest", "Encryption in transit", "Key management", "Data loss prevention", "Backup security"]}
            price="$22k–$70k"
            icon="🔒"
          />
          <CyberServiceCard
            title="Compliance & Governance"
            description="Regulatory compliance and security governance frameworks"
            features={["SOC 2 compliance", "GDPR compliance", "HIPAA compliance", "ISO 27001", "Policy development", "Audit support"]}
            price="$30k–$100k"
            icon="📋"
          />
          <CyberServiceCard
            title="Security Awareness Training"
            description="Employee security training and phishing simulation"
            features={["Security training", "Phishing simulation", "Awareness campaigns", "Policy training", "Incident reporting", "Compliance tracking"]}
            price="$8k–$25k"
            icon="🎓"
          />
          <CyberServiceCard
            title="Cloud Security & DevSecOps"
            description="Cloud security implementation and secure development practices"
            features={["Cloud security assessment", "DevSecOps integration", "Container security", "API security", "Infrastructure security", "Compliance automation"]}
            price="$25k–$75k"
            icon="☁️"
          />
          <CyberServiceCard
            title="Managed Security Services"
            description="24/7 security monitoring and management"
            features={["24/7 monitoring", "Threat detection", "Incident response", "Security updates", "Vulnerability management", "Monthly reports"]}
            price="$5k–$15k/mo"
            icon="📊"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Cybersecurity Framework</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Item 
            title="Assessment & Planning" 
            details={[
              "Comprehensive security assessment and risk analysis",
              "Current security posture evaluation and gap identification",
              "Regulatory compliance requirements analysis",
              "Security strategy development and roadmap creation",
              "Budget planning and resource allocation",
              "Stakeholder alignment and security awareness"
            ]} 
          />
          <Item 
            title="Implementation & Deployment" 
            details={[
              "Security technology selection and implementation",
              "Policy development and procedure establishment",
              "Security controls deployment and configuration",
              "Integration with existing systems and processes",
              "Testing and validation of security measures",
              "Documentation and knowledge transfer"
            ]} 
          />
          <Item 
            title="Monitoring & Optimization" 
            details={[
              "Continuous security monitoring and threat detection",
              "Regular security assessments and vulnerability management",
              "Incident response and forensic analysis",
              "Security awareness training and education",
              "Compliance monitoring and reporting",
              "Ongoing optimization and improvement"
            ]} 
          />
        </div>
      </section>

      <Pricing />
      <ContactSection />
    </div>
  );
}

function CyberServiceCard({ title, description, features, price, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="text-green-500 mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
<<<<<<< HEAD
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
=======
function Pricing() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Cybersecurity Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="Security Assessment" 
          price="$10k–$30k" 
          duration="2–4 weeks"
          features={[
            "Security audit and assessment",
            "Vulnerability scanning", 
            "Penetration testing",
            "Risk analysis report",
            "Remediation recommendations",
            "Compliance review"          ]} 
        />
        <Plan 
          name="Security Implementation" 
function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-2">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <span className="text-green-500 mr-3">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center block"
      >
        Get Started
      </a>
    </div>
  );
}

function ContactSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Secure Your Business?
        </h3>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can protect your business from cyber threats and ensure compliance. 
          Our security experts have protected 200+ organizations from cyber attacks.        </p>
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
function Plan({ name, price, duration, features }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[] 
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-1">{price}</div>
      <div className="text-sm text-gray-500 mb-6">{duration}</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <span className="text-green-500 mr-2 mt-1">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
=======
        <div className="mt-8 text-sm text-gray-500">
          <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
        </div>
      </div>
    </section>  );
}