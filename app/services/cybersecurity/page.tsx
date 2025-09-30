import React from 'react';

export const metadata = {
  title: 'Cybersecurity Solutions | Zion Tech Group',
  description: 'Comprehensive cybersecurity services to protect your business from threats and vulnerabilities.',
  keywords: 'cybersecurity, security solutions, threat protection, IT security'
};

const CyberServiceCard = ({ title, description, features }: { title: string; description: string; features: string[] }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-600 flex items-center">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

export default function CyberSecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Cybersecurity Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protect your business with comprehensive cybersecurity services designed to safeguard 
            your data, systems, and operations from evolving threats.
          </p>
        </div>

        <section className="py-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Cybersecurity Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CyberServiceCard
              title="Threat Assessment"
              description="Comprehensive evaluation of your current security posture and potential vulnerabilities."
              features={["Security audits", "Vulnerability scanning", "Risk analysis", "Compliance checks"]}
            />
            <CyberServiceCard
              title="Network Security"
              description="Advanced protection for your network infrastructure and data transmission."
              features={["Firewall management", "Intrusion detection", "VPN setup", "Network monitoring"]}
            />
            <CyberServiceCard
              title="Data Protection"
              description="Safeguard sensitive information with encryption and access controls."
              features={["Data encryption", "Access management", "Backup solutions", "Data recovery"]}
            />
            <CyberServiceCard
              title="Security Training"
              description="Educate your team on cybersecurity best practices and threat awareness."
              features={["Employee training", "Phishing simulations", "Security policies", "Incident response"]}
            />
            <CyberServiceCard
              title="Incident Response"
              description="Rapid response and recovery services for security incidents and breaches."
              features={["24/7 monitoring", "Incident investigation", "Forensic analysis", "Recovery planning"]}
            />
            <CyberServiceCard
              title="Compliance Management"
              description="Ensure adherence to industry regulations and security standards."
              features={["GDPR compliance", "HIPAA compliance", "SOX compliance", "Audit support"]}
            />
          </div>
        </section>

        <section className="py-12 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Cybersecurity Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Certified security professionals with years of experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Response</h3>
                <p className="text-gray-600">24/7 monitoring and immediate threat response</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proactive Approach</h3>
                <p className="text-gray-600">Prevent threats before they become incidents</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Monitoring</h3>
                <p className="text-gray-600">Real-time threat detection and analysis</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Secure Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your cybersecurity needs and get a comprehensive security assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Get Security Assessment
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}