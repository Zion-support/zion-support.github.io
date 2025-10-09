import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, FileText, Users, Lock, Zap, Award, Globe } from 'lucide-react';

const CompliancePage: React.FC = () => {
  const complianceFrameworks = [
    {
      name: 'SOC 2 Type II',
      status: 'Certified',
      description: 'Security, availability, and confidentiality controls for service organizations',
      icon: Shield,
      color: 'text-green-400',
      details: [
        'Annual third-party audits',
        'Comprehensive control testing',
        'Management assertion reports',
        'Continuous monitoring and improvement'
      ]
    },
    {
      name: 'ISO 27001',
      status: 'Certified',
      description: 'International standard for information security management systems',
      icon: Lock,
      color: 'text-blue-400',
      details: [
        'Information security management system',
        'Risk assessment and treatment',
        'Security controls implementation',
        'Regular internal and external audits'
      ]
    },
    {
      name: 'GDPR',
      status: 'Compliant',
      description: 'General Data Protection Regulation for EU data protection',
      icon: Globe,
      color: 'text-purple-400',
      details: [
        'Data protection by design and default',
        'Individual rights management',
        'Data processing impact assessments',
        'Breach notification procedures'
      ]
    },
    {
      name: 'CCPA',
      status: 'Compliant',
      description: 'California Consumer Privacy Act for California residents',
      icon: Users,
      color: 'text-orange-400',
      details: [
        'Consumer rights management',
        'Data collection transparency',
        'Opt-out mechanisms',
        'Privacy policy requirements'
      ]
    }
  ];

  const industryStandards = [
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      applicable: 'Healthcare data processing',
      requirements: [
        'Administrative safeguards',
        'Physical safeguards',
        'Technical safeguards',
        'Business associate agreements'
      ]
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      applicable: 'Payment card data handling',
      requirements: [
        'Secure network and systems',
        'Protect cardholder data',
        'Vulnerability management',
        'Regular security testing'
      ]
    },
    {
      name: 'FedRAMP',
      description: 'Federal Risk and Authorization Management Program',
      applicable: 'US Government cloud services',
      requirements: [
        'Security assessment and authorization',
        'Continuous monitoring',
        'Incident response procedures',
        'Personnel security controls'
      ]
    },
    {
      name: 'NIST Cybersecurity Framework',
      description: 'National Institute of Standards and Technology',
      applicable: 'Cybersecurity risk management',
      requirements: [
        'Identify cybersecurity risks',
        'Protect against threats',
        'Detect security events',
        'Respond to incidents',
        'Recover from attacks'
      ]
    }
  ];

  const complianceProcesses = [
    {
      title: 'Risk Assessment',
      description: 'Regular identification and evaluation of compliance risks',
      icon: FileText,
      steps: [
        'Identify applicable regulations',
        'Assess current compliance status',
        'Identify gaps and vulnerabilities',
        'Prioritize remediation efforts'
      ]
    },
    {
      title: 'Control Implementation',
      description: 'Implementation of security and compliance controls',
      icon: Shield,
      steps: [
        'Design appropriate controls',
        'Implement technical safeguards',
        'Establish administrative procedures',
        'Train personnel on requirements'
      ]
    },
    {
      title: 'Monitoring & Auditing',
      description: 'Continuous monitoring and regular auditing of compliance',
      icon: CheckCircle,
      steps: [
        'Automated compliance monitoring',
        'Regular internal audits',
        'Third-party assessments',
        'Corrective action management'
      ]
    },
    {
      title: 'Documentation & Reporting',
      description: 'Comprehensive documentation and reporting of compliance status',
      icon: Award,
      steps: [
        'Maintain compliance documentation',
        'Generate compliance reports',
        'Track remediation progress',
        'Communicate with stakeholders'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-gray-900/95 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
            <div className="flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Compliance & Certifications
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We maintain the highest standards of compliance and security certifications to ensure 
            your data is protected and our services meet industry requirements.
          </p>
        </div>

        {/* Compliance Overview */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-900 to-blue-900 rounded-2xl p-12 text-center">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Award className="w-12 h-12 text-green-400" />
              <h2 className="text-3xl font-bold text-white">Certified & Compliant</h2>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our commitment to compliance ensures that your data is handled with the highest 
              standards of security and regulatory adherence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">6+</div>
                <div className="text-gray-300">Compliance Frameworks</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-300">Audit Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Compliance Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">0</div>
                <div className="text-gray-300">Compliance Violations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Compliance Frameworks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <framework.icon className={`w-10 h-10 ${framework.color}`} />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{framework.name}</h3>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${framework.color} bg-green-400/20`}>
                      {framework.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{framework.description}</p>
                <ul className="space-y-3">
                  {framework.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Standards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Industry Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryStandards.map((standard, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <h3 className="text-xl font-bold text-white mb-3">{standard.name}</h3>
                <p className="text-gray-300 mb-4">{standard.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-gray-400">Applicable to:</span>
                  <p className="text-white text-sm">{standard.applicable}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Requirements:</h4>
                  <ul className="space-y-2">
                    {standard.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start text-gray-300 text-sm">
                        <span className="text-purple-400 mr-2 mt-1">•</span>
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Compliance Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceProcesses.map((process, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <process.icon className="w-8 h-8 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white">{process.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm">{process.description}</p>
                <ul className="space-y-2">
                  {process.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-gray-300 text-sm flex items-start">
                      <span className="text-purple-400 mr-2 mt-1">•</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Compliance Team</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Dedicated Compliance Team</h3>
                <p className="text-gray-300 mb-6">
                  Our dedicated compliance team ensures that we maintain the highest standards 
                  of regulatory adherence and security practices.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                    <span>Certified compliance professionals</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                    <span>Regular training and certification updates</span>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5" />
                    <span>Industry expertise and best practices</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Contact Our Compliance Team</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-400 text-sm">Email:</span>
                    <p className="text-white">compliance@ziontechgroup.com</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Phone:</span>
                    <p className="text-white">+1 (302) 464-0950</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">Address:</span>
                    <p className="text-white">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Documents */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Compliance Documents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <FileText className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">SOC 2 Report</h3>
              <p className="text-gray-300 text-sm mb-4">Latest SOC 2 Type II audit report</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Download PDF
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">ISO 27001 Certificate</h3>
              <p className="text-gray-300 text-sm mb-4">Information security management certification</p>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Download PDF
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">GDPR Compliance</h3>
              <p className="text-gray-300 text-sm mb-4">Data protection compliance statement</p>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                View Details
              </button>
            </div>
          </div>
        </section>

        {/* Contact Compliance */}
        <section className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Compliance Questions?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Have questions about our compliance certifications or need specific compliance documentation? 
            Contact our compliance team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:compliance@ziontechgroup.com"
              className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              compliance@ziontechgroup.com
            </a>
            <Link
              to="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CompliancePage;