export const metadata = { 
  title: 'Cybersecurity Services | Zion Tech Group',
  description: 'Comprehensive cybersecurity services including penetration testing, security audits, compliance support, incident response, and security consulting.'
};

export default function CybersecurityPage() {
  return (
    <div className="animate-fade-in">
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Cybersecurity Services
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Protect your business with comprehensive cybersecurity solutions. From security audits to 
          incident response, we keep your data and systems secure.
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
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Security Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            End-to-end cybersecurity services to protect your business from evolving threats.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SecurityServiceCard
            title="Penetration Testing"
            description="Comprehensive security testing to identify vulnerabilities before attackers do"
            features={["Web application testing", "Network penetration", "Social engineering", "Physical security", "Wireless security"]}
            pricing="$3,500/test"
            icon="🔍"
          />
          <SecurityServiceCard
            title="Security Audits"
            description="Thorough assessment of your security posture and compliance requirements"
            features={["Risk assessment", "Compliance review", "Policy evaluation", "Gap analysis", "Remediation plan"]}
            pricing="$2,800/audit"
            icon="📋"
          />
          <SecurityServiceCard
            title="Incident Response"
            description="24/7 incident response services to quickly contain and remediate security breaches"
            features={["24/7 monitoring", "Rapid response", "Forensic analysis", "Recovery planning", "Post-incident review"]}
            pricing="$5,000/month"
            icon="🚨"
          />
          <SecurityServiceCard
            title="Compliance Support"
            description="Help achieve and maintain compliance with industry standards and regulations"
            features={["SOC 2 Type II", "ISO 27001", "HIPAA", "PCI DSS", "GDPR"]}
            pricing="$4,200/month"
            icon="✅"
          />
          <SecurityServiceCard
            title="Security Training"
            description="Comprehensive security awareness training for your team"
            features={["Phishing simulation", "Security workshops", "Policy training", "Incident response", "Ongoing education"]}
            pricing="$1,500/month"
            icon="🎓"
          />
          <SecurityServiceCard
            title="Managed Security"
            description="Ongoing security monitoring and management services"
            features={["SIEM monitoring", "Threat detection", "Vulnerability scanning", "Security updates", "Monthly reports"]}
            pricing="$3,800/month"
            icon="🛡️"
          />
        </div>
      </section>

      <section className="py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our team has deep expertise across all areas of cybersecurity and compliance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SecurityExpertise
            title="Security Frameworks"
            technologies={["NIST", "ISO 27001", "CIS Controls", "OWASP", "MITRE ATT&CK"]}
          />
          <SecurityExpertise
            title="Compliance Standards"
            technologies={["SOC 2", "HIPAA", "PCI DSS", "GDPR", "CCPA"]}
          />
          <SecurityExpertise
            title="Security Tools"
            technologies={["Nessus", "Burp Suite", "Metasploit", "Wireshark", "Splunk"]}
          />
          <SecurityExpertise
            title="Cloud Security"
            technologies={["AWS Security", "Azure Security", "GCP Security", "Container Security", "Zero Trust"]}
          />
        </div>
      </section>

      <section className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Security Process</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our systematic approach ensures comprehensive security coverage and compliance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SecurityProcessStep
            step="1"
            title="Assessment"
            description="Comprehensive security assessment to identify vulnerabilities and risks."
          />
          <SecurityProcessStep
            step="2"
            title="Planning"
            description="Develop customized security strategy and implementation roadmap."
          />
          <SecurityProcessStep
            step="3"
            title="Implementation"
            description="Deploy security controls and monitoring systems with minimal disruption."
          />
          <SecurityProcessStep
            step="4"
            title="Monitoring"
            description="Ongoing monitoring, maintenance, and continuous improvement."
          />
        </div>
      </section>

      <Pricing />
    </div>
  );
}

function SecurityServiceCard({ title, description, features, pricing, icon }: { 
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
              <span className="text-red-500 mr-2">•</span> {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-lg font-bold text-red-600 mb-4">{pricing}</div>
      <a
        href="tel:+13024640950"
        className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}

function SecurityExpertise({ title, technologies }: { title: string; technologies: string[] }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function SecurityProcessStep({ step, title, description }: { step: string; title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Cybersecurity Pricing</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Flexible pricing options for cybersecurity services. Protect your business with our expert security solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <SecurityPlan 
          name="Security Assessment" 
          price="$5k–$15k" 
          duration="2–4 weeks"
          features={[
            "Comprehensive security audit",
            "Vulnerability assessment",
            "Risk analysis",
            "Compliance review",
            "Security recommendations",
            "Detailed report"
          ]}
          popular={false}
        />
        <SecurityPlan 
          name="Security Implementation" 
          price="$15k–$50k" 
          duration="4–12 weeks"
          features={[
            "Security controls deployment",
            "Monitoring setup",
            "Policy development",
            "Staff training",
            "Compliance preparation",
            "Ongoing support"
          ]}
          popular={true}
        />
        <SecurityPlan 
          name="Managed Security" 
          price="$3k+/mo" 
          duration="Ongoing"
          features={[
            "24/7 security monitoring",
            "Incident response",
            "Vulnerability management",
            "Security updates",
            "Compliance maintenance",
            "Monthly reports"
          ]}
          popular={false}
        />
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">
          All plans include: Detailed reporting, 30-day money-back guarantee, emergency response
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
            Get Security Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

function SecurityPlan({ name, price, duration, features, popular }: { 
  name: string; 
  price: string; 
  duration: string;
  features: string[]; 
  popular: boolean;
}) {
  return (
    <div className={`border rounded-xl p-8 bg-white relative ${popular ? 'border-red-500 shadow-lg' : 'border-gray-200'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <h4 className="text-2xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-red-600 mb-1">{price}</div>
      <div className="text-gray-600 mb-6">{duration}</div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="text-red-500 mr-3 mt-1">✓</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <a
        href="tel:+13024640950"
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-red-600 text-white hover:bg-red-700' 
            : 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}