import React from 'react';
import SEOHead from '../components/SEOHead';

const CybersecurityPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Cybersecurity Services - Zion Tech Group"
        description="Comprehensive cybersecurity solutions to protect your digital assets and infrastructure. Advanced security services for modern businesses."
        keywords="cybersecurity, security audit, data protection, network security, IT security, cyber threats, security consulting"
        canonicalUrl="https://ziontechgroup.com/cybersecurity"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-red-900 to-slate-900"></div>
          <div className="cyber-grid absolute inset-0 opacity-20"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="holographic">Cybersecurity Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Protect your business with <span className="text-red-400 font-semibold">advanced cybersecurity solutions</span> 
              designed to defend against modern threats
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="cyber-button text-lg px-8 py-4">
                Get Security Assessment
              </button>
              <button className="cyber-button text-lg px-8 py-4 border-red-400 text-red-400 hover:border-red-300 hover:text-red-300">
                View Security Plans
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="gradient-text">Security Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cybersecurity services to protect your business from evolving threats
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Security Audit & Assessment",
                  description: "Comprehensive security evaluation of your systems and infrastructure",
                  icon: "🔍",
                  features: ["Vulnerability scanning", "Penetration testing", "Risk assessment", "Compliance audit"]
                },
                {
                  title: "Network Security",
                  description: "Advanced network protection and monitoring solutions",
                  icon: "🛡️",
                  features: ["Firewall management", "Intrusion detection", "Network monitoring", "Traffic analysis"]
                },
                {
                  title: "Data Protection",
                  description: "Safeguard your sensitive data with encryption and access controls",
                  icon: "🔐",
                  features: ["Data encryption", "Access management", "Backup solutions", "Data loss prevention"]
                },
                {
                  title: "Threat Detection",
                  description: "AI-powered threat detection and response systems",
                  icon: "🚨",
                  features: ["Real-time monitoring", "Behavioral analysis", "Automated response", "Incident management"]
                },
                {
                  title: "Compliance & Governance",
                  description: "Ensure compliance with industry standards and regulations",
                  icon: "📋",
                  features: ["GDPR compliance", "HIPAA compliance", "SOX compliance", "Security policies"]
                },
                {
                  title: "Security Training",
                  description: "Educate your team on cybersecurity best practices",
                  icon: "🎓",
                  features: ["Phishing simulation", "Security awareness", "Incident response training", "Best practices"]
                }
              ].map((service, index) => (
                <div key={index} className="card-cyber hover-lift group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-red-400 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-300 text-sm flex items-center">
                          <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full cyber-button">
                    Learn More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-dark rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our cybersecurity solutions can protect your organization
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cyber-button text-lg px-8 py-4">
                  Get Security Assessment
                </button>
                <button className="cyber-button text-lg px-8 py-4 border-green-400 text-green-400 hover:border-green-300 hover:text-green-300">
                  Contact Security Team
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CybersecurityPage;