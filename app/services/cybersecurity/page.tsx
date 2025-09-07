import React from 'react';
import Link from 'next/link';

export const metadata = { 
  title: 'Cybersecurity Services | Zion Tech Group',
  description: 'Comprehensive cybersecurity services including penetration testing, security audits, compliance management, and incident response for enterprise protection.',
  keywords: 'cybersecurity, penetration testing, security audit, compliance, incident response, vulnerability assessment, security consulting'
};

interface CybersecurityServiceCardProps {
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: string;
}

function CybersecurityServiceCard({ title, description, features, price, icon }: CybersecurityServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-4">{icon}</span>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-lg font-bold text-blue-600">{price}</p>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface CybersecurityProcessStepProps {
  step: string;
  title: string;
  description: string;
}

function CybersecurityProcessStep({ step, title, description }: CybersecurityProcessStepProps) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {step}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

interface CybersecurityTechStackProps {
  title: string;
  technologies: string[];
}

function CybersecurityTechStack({ title, technologies }: CybersecurityTechStackProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <ul className="space-y-2">
        {technologies.map((tech, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CybersecurityPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
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
              technologies={["ServiceNow", "Archer", "MetricStream", "OneTrust", "TrustArc"]}
            />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Secure Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your cybersecurity needs and how we can help protect your digital assets.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Security Assessment
          </Link>
        </section>
      </div>
    </main>
  );
}