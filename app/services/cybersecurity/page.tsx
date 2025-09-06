export const metadata = { 
  title: 'Cybersecurity Services | Zion Tech Group',
<<<<<<< HEAD
  description: 'Comprehensive cybersecurity solutions including penetration testing, security audits, compliance, and incident response.'
=======
  description: 'Comprehensive cybersecurity services including penetration testing, security audits, compliance management, and incident response for enterprise protection.',
  keywords: 'cybersecurity, penetration testing, security audit, compliance, incident response, vulnerability assessment, security consulting'
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
};

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
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="text-blue-500 mr-2 mt-1">•</span>
            {detail}
=======
    <div className="animate-fade-in">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Cybersecurity Services
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Protect your digital assets with our comprehensive cybersecurity services. 
          From vulnerability assessments to incident response, we keep your business secure in an ever-evolving threat landscape.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Cybersecurity Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CybersecurityServiceCard
            title="Penetration Testing"
            description="Comprehensive security testing to identify vulnerabilities before attackers do"
            features={["Web application testing", "Network penetration", "Social engineering", "Physical security", "Wireless security"]}
            price="$5,000-25,000"
            icon="🔍"
          />
          <CybersecurityServiceCard
            title="Security Audits & Assessments"
            description="Thorough evaluation of your security posture and compliance status"
            features={["Risk assessment", "Compliance review", "Policy evaluation", "Gap analysis", "Remediation planning"]}
            price="$8,000-35,000"
            icon="📋"
          />
          <CybersecurityServiceCard
            title="Incident Response"
            description="Rapid response and recovery services for security breaches and cyber attacks"
            features={["24/7 monitoring", "Forensic analysis", "Containment strategies", "Recovery planning", "Post-incident review"]}
            price="$10,000-50,000"
            icon="🚨"
          />
          <CybersecurityServiceCard
            title="Compliance Management"
            description="Ensure compliance with industry standards and regulatory requirements"
            features={["SOC 2 Type II", "ISO 27001", "PCI DSS", "HIPAA", "GDPR compliance"]}
            price="$15,000-60,000"
            icon="✅"
          />
          <CybersecurityServiceCard
            title="Security Architecture"
            description="Design and implement robust security frameworks for your organization"
            features={["Zero Trust architecture", "Identity management", "Access controls", "Network segmentation", "Security policies"]}
            price="$20,000-75,000"
            icon="🏗️"
          />
          <CybersecurityServiceCard
            title="Security Training & Awareness"
            description="Educate your team on cybersecurity best practices and threat awareness"
            features={["Phishing simulation", "Security workshops", "Policy training", "Incident response drills", "Executive briefings"]}
            price="$3,000-15,000"
            icon="🎓"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cybersecurity Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CybersecurityProcessStep
            step="1"
            title="Assessment & Discovery"
            description="Comprehensive analysis of your current security posture and vulnerabilities"
          />
          <CybersecurityProcessStep
            step="2"
            title="Strategy & Planning"
            description="Develop customized security strategies and implementation roadmaps"
          />
          <CybersecurityProcessStep
            step="3"
            title="Implementation"
            description="Deploy security solutions and establish protective measures"
          />
          <CybersecurityProcessStep
            step="4"
            title="Monitoring & Maintenance"
            description="Ongoing monitoring, updates, and continuous security improvement"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Security Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CybersecurityTechStack
            title="Security Tools"
            technologies={["Nessus", "Burp Suite", "Metasploit", "Wireshark", "Nmap"]}
          />
          <CybersecurityTechStack
            title="Monitoring & SIEM"
            technologies={["Splunk", "ELK Stack", "QRadar", "ArcSight", "LogRhythm"]}
          />
          <CybersecurityTechStack
            title="Compliance & GRC"
            technologies={["ServiceNow", "RSA Archer", "MetricStream", "OneTrust", "Varonis"]}
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industry-Specific Security</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <IndustrySecurity
            title="Healthcare"
            description="HIPAA-compliant security solutions for healthcare organizations"
            solutions={["Patient data protection", "Medical device security", "Telehealth security", "HIPAA compliance"]}
            icon="🏥"
          />
          <IndustrySecurity
            title="Financial Services"
            description="Banking and financial institution security and compliance"
            solutions={["PCI DSS compliance", "Fraud prevention", "Transaction security", "Regulatory compliance"]}
            icon="💰"
          />
          <IndustrySecurity
            title="E-commerce"
            description="E-commerce platform security and customer data protection"
            solutions={["Payment security", "Customer data protection", "Website security", "API security"]}
            icon="🛒"
          />
          <IndustrySecurity
            title="Government"
            description="Federal and state government security and compliance"
            solutions={["FedRAMP compliance", "FISMA compliance", "Data sovereignty", "Secure communications"]}
            icon="🏛️"
          />
          <IndustrySecurity
            title="Manufacturing"
            description="Industrial control systems and operational technology security"
            solutions={["ICS/SCADA security", "Supply chain security", "IoT security", "OT/IT convergence"]}
            icon="🏭"
          />
          <IndustrySecurity
            title="Education"
            description="Educational institution security and student data protection"
            solutions={["Student data protection", "Campus network security", "Online learning security", "FERPA compliance"]}
            icon="🎓"
          />
        </div>
      </section>

      <Pricing />
      
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Cybersecurity Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CybersecurityBenefitCard
            title="Certified Experts"
            description="CISSP, CISM, and CEH certified security professionals with deep expertise"
            icon="🎓"
          />
          <CybersecurityBenefitCard
            title="24/7 Monitoring"
            description="Round-the-clock security monitoring and incident response capabilities"
            icon="🛡️"
          />
          <CybersecurityBenefitCard
            title="Compliance Focus"
            description="Deep understanding of regulatory requirements and industry standards"
            icon="📋"
          />
          <CybersecurityBenefitCard
            title="Proactive Approach"
            description="Prevent security incidents before they occur with proactive measures"
            icon="🔮"
          />
          <CybersecurityBenefitCard
            title="Custom Solutions"
            description="Tailored security solutions that fit your specific business needs"
            icon="🎯"
          />
          <CybersecurityBenefitCard
            title="Rapid Response"
            description="Quick incident response and recovery to minimize business impact"
            icon="⚡"
          />
        </div>
      </section>

      <CTASection />
    </div>
  );
}

function CybersecurityServiceCard({ title, description, features, price, icon }: { 
  title: string; 
  description: string; 
  features: string[]; 
  price: string; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-200 bg-white">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <div className="mb-4">
        <div className="text-2xl font-bold text-blue-600 mb-2">{price}</div>
        <div className="text-sm text-gray-500">Starting price</div>
      </div>
      <ul className="text-gray-600 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Get Started
      </a>
    </div>
  );
}

function CybersecurityProcessStep({ step, title, description }: { 
  step: string; 
  title: string; 
  description: string; 
}) {
  return (
    <div className="text-center p-6">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function CybersecurityTechStack({ title, technologies }: { 
  title: string; 
  technologies: string[]; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function IndustrySecurity({ title, description, solutions, icon }: { 
  title: string; 
  description: string; 
  solutions: string[]; 
  icon: string; 
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-gray-600 space-y-2">
        {solutions.map((solution) => (
          <li key={solution} className="flex items-center">
            <span className="text-blue-500 mr-2">•</span> {solution}
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
          </li>
        ))}
      </ul>
    </div>
  );
}

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
=======
function CybersecurityBenefitCard({ title, description, icon }: { 
  title: string; 
  description: string; 
  icon: string; 
}) {
  return (
    <div className="text-center p-6 border border-gray-200 rounded-xl bg-white hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
    </div>
  );
}

function Pricing() {
  return (
<<<<<<< HEAD
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Cybersecurity Service Packages</h2>
=======
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Cybersecurity Service Pricing</h2>
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Plan 
          name="Security Assessment" 
          price="$5k–$15k" 
<<<<<<< HEAD
          duration="1–3 weeks"
          features={[
            "Vulnerability scanning",
            "Penetration testing",
            "Security review",
            "Risk assessment",
            "Detailed report",
            "Remediation guidance"
          ]} 
        />
        <Plan 
          name="Security Implementation" 
          price="$15k–$40k" 
          duration="4–8 weeks"
          features={[
            "Security tool deployment",
            "Policy development",
            "Staff training",
            "Monitoring setup",
            "Documentation",
            "Testing & validation"
          ]} 
        />
        <Plan 
          name="Managed Security" 
          price="$3k+/mo" 
          duration="Ongoing"
          features={[
            "24/7 monitoring",
            "Incident response",
            "Security updates",
            "Regular assessments",
            "Compliance management",
            "Dedicated support"
          ]} 
        />
      </div>
      
      <div className="text-center mt-8">
        <p className="text-gray-600 mb-4">
          Ready to secure your business? Let's discuss your cybersecurity needs.
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
      </div>
=======
          features={["1–2 weeks", "Vulnerability scan", "Risk assessment", "Report", "Recommendations"]} 
          popular={false}
        />
        <Plan 
          name="Penetration Testing" 
          price="$8k–$25k" 
          features={["2–4 weeks", "Full penetration test", "Social engineering", "Report", "Remediation"]} 
          popular={true}
        />
        <Plan 
          name="Managed Security" 
          price="$10k+/mo" 
          features={["24/7 monitoring", "Incident response", "Compliance management", "Security updates", "Monthly reports"]} 
          popular={false}
        />
      </div>
    </section>
  );
}

function Plan({ name, price, features, popular }: { 
  name: string; 
  price: string; 
  features: string[]; 
  popular: boolean; 
}) {
  return (
    <div className={`border rounded-xl p-8 relative ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
        </div>
      )}
      <h4 className="text-xl font-bold text-gray-900 mb-2">{name}</h4>
      <div className="text-3xl font-bold text-blue-600 mb-4">{price}</div>
      <ul className="space-y-3 mb-6">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <span className="text-blue-500 mr-3">✓</span> {feature}
          </li>
        ))}
      </ul>
      <a 
        href="tel:+13024640950" 
        className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
          popular 
            ? 'bg-blue-600 text-white hover:bg-blue-700' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
    </div>
  );
}

<<<<<<< HEAD
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
=======
function CTASection() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Ready to Secure Your Digital Assets?
      </h3>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
        Don't wait for a security breach to protect your business. Let's assess your current security posture 
        and implement comprehensive protection measures. Our cybersecurity experts are ready to help you stay secure.
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
      <div className="mt-6 text-sm text-gray-600">
        <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
      </div>
>>>>>>> cursor/fix-website-loading-errors-and-merge-08ac
    </div>
  );
}