import React from 'react';

export const metadata = {
  title: 'Enterprise AI Security 2025: Comprehensive Security Framework | Zion Tech Group',
  description: 'Secure your AI systems with enterprise-grade security frameworks. Learn about AI security best practices, compliance, and threat protection strategies.',
  keywords: 'AI security, enterprise security, AI governance, cybersecurity, data protection, compliance',
  openGraph: {
    title: 'Enterprise AI Security 2025: Comprehensive Security Framework',
    description: 'Secure your AI systems with enterprise-grade security frameworks. Learn about AI security best practices, compliance, and threat protection strategies.',
    type: 'article',
    publishedTime: '2025-01-20T00:00:00.000Z',
    authors: ['Zion Tech Group'],
  },
};

export default function EnterpriseAISecurity2025() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span>AI Security</span>
          <span>•</span>
          <time dateTime="2025-01-20">January 20, 2025</time>
          <span>•</span>
          <span>18 min read</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Enterprise AI Security 2025: Comprehensive Security Framework
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Protect your AI systems with enterprise-grade security frameworks. Learn essential strategies for securing 
          AI models, data, and infrastructure while maintaining compliance and operational excellence.
        </p>
      </header>

      {/* Featured Image */}
      <div className="mb-12">
        <img 
          src="/images/blog/enterprise-ai-security-2025.jpg" 
          alt="Enterprise AI Security 2025"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Table of Contents */}
      <nav className="bg-gray-50 rounded-lg p-6 mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
        <ul className="space-y-2">
          <li><a href="#introduction" className="text-blue-600 hover:text-blue-800">The AI Security Landscape</a></li>
          <li><a href="#threats" className="text-blue-600 hover:text-blue-800">Common AI Security Threats</a></li>
          <li><a href="#framework" className="text-blue-600 hover:text-blue-800">AI Security Framework</a></li>
          <li><a href="#data-protection" className="text-blue-600 hover:text-blue-800">Data Protection Strategies</a></li>
          <li><a href="#model-security" className="text-blue-600 hover:text-blue-800">Model Security Best Practices</a></li>
          <li><a href="#infrastructure" className="text-blue-600 hover:text-blue-800">Infrastructure Security</a></li>
          <li><a href="#compliance" className="text-blue-600 hover:text-blue-800">Compliance and Governance</a></li>
          <li><a href="#monitoring" className="text-blue-600 hover:text-blue-800">Security Monitoring and Incident Response</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="prose prose-lg max-w-none">
        <section id="introduction" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The AI Security Landscape</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            As organizations increasingly adopt AI technologies, the security landscape has become more complex and 
            challenging. AI systems introduce unique vulnerabilities that traditional security measures may not address. 
            Enterprise AI security requires a comprehensive approach that protects data, models, infrastructure, and 
            business processes.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Recent studies show that 78% of organizations have experienced AI-related security incidents, with 
            average costs reaching $4.2 million per incident. This makes AI security not just a technical concern 
            but a critical business imperative.
          </p>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-red-900 mb-4">Critical AI Security Statistics</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-red-600 mr-2">⚠️</span>
                  <span className="text-red-800">78% of organizations face AI security incidents</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 mr-2">⚠️</span>
                  <span className="text-red-800">$4.2M average cost per AI security incident</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 mr-2">⚠️</span>
                  <span className="text-red-800">65% increase in AI attack vectors in 2024</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-red-600 mr-2">⚠️</span>
                  <span className="text-red-800">42% of AI models have security vulnerabilities</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 mr-2">⚠️</span>
                  <span className="text-red-800">89% of AI systems lack proper access controls</span>
                </div>
                <div className="flex items-center">
                  <span className="text-red-600 mr-2">⚠️</span>
                  <span className="text-red-800">56% of organizations lack AI security policies</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="threats" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common AI Security Threats</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-red-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 text-red-600 w-12 h-12 rounded-lg flex items-center justify-center text-xl mr-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900">Adversarial Attacks</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Malicious inputs designed to fool AI models and cause incorrect predictions or classifications.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Input manipulation attacks</li>
                <li>• Model evasion techniques</li>
                <li>• Data poisoning attacks</li>
                <li>• Backdoor insertion</li>
              </ul>
            </div>

            <div className="bg-white border border-orange-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-lg flex items-center justify-center text-xl mr-4">🔓</div>
                <h3 className="text-xl font-semibold text-gray-900">Data Privacy Breaches</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Unauthorized access to sensitive training data, model parameters, or inference data.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Training data exposure</li>
                <li>• Model inversion attacks</li>
                <li>• Membership inference attacks</li>
                <li>• Attribute inference attacks</li>
              </ul>
            </div>

            <div className="bg-white border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 text-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center text-xl mr-4">⚡</div>
                <h3 className="text-xl font-semibold text-gray-900">Model Theft</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Unauthorized copying or replication of AI models, including weights, architecture, and parameters.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Model extraction attacks</li>
                <li>• API abuse and scraping</li>
                <li>• Reverse engineering</li>
                <li>• Intellectual property theft</li>
              </ul>
            </div>

            <div className="bg-white border border-purple-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-lg flex items-center justify-center text-xl mr-4">🔧</div>
                <h3 className="text-xl font-semibold text-gray-900">Infrastructure Attacks</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Attacks targeting the underlying infrastructure supporting AI systems and workflows.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Container and orchestration exploits</li>
                <li>• Supply chain attacks</li>
                <li>• Runtime environment compromises</li>
                <li>• Resource exhaustion attacks</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="framework" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">AI Security Framework</h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">1</div>
                <h3 className="text-xl font-semibold text-gray-900">Governance and Risk Management</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Establish comprehensive governance structures and risk management processes for AI security.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• AI security policy development and implementation</li>
                <li>• Risk assessment and mitigation strategies</li>
                <li>• Security awareness and training programs</li>
                <li>• Incident response and recovery planning</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">2</div>
                <h3 className="text-xl font-semibold text-gray-900">Data Protection and Privacy</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Implement robust data protection measures to safeguard sensitive information throughout the AI lifecycle.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Data encryption at rest and in transit</li>
                <li>• Privacy-preserving techniques (differential privacy, homomorphic encryption)</li>
                <li>• Data minimization and purpose limitation</li>
                <li>• Consent management and data subject rights</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">3</div>
                <h3 className="text-xl font-semibold text-gray-900">Model Security</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Secure AI models against various attack vectors and ensure their integrity and reliability.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Model validation and testing</li>
                <li>• Adversarial training and robust model design</li>
                <li>• Model versioning and integrity verification</li>
                <li>• Secure model deployment and serving</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">4</div>
                <h3 className="text-xl font-semibold text-gray-900">Infrastructure Security</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Protect the underlying infrastructure and ensure secure AI system operations.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Secure cloud and on-premises infrastructure</li>
                <li>• Container and orchestration security</li>
                <li>• Network security and segmentation</li>
                <li>• Access controls and identity management</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-teal-100 text-teal-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mr-3">5</div>
                <h3 className="text-xl font-semibold text-gray-900">Monitoring and Response</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Implement continuous monitoring and rapid response capabilities for AI security incidents.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Real-time security monitoring</li>
                <li>• Anomaly detection and alerting</li>
                <li>• Incident response automation</li>
                <li>• Security metrics and reporting</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="data-protection" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Protection Strategies</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Encryption and Access Controls</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">End-to-End Encryption</h4>
                  <p className="text-sm text-gray-600">Implement encryption for data at rest, in transit, and during processing</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Zero-Trust Architecture</h4>
                  <p className="text-sm text-gray-600">Verify every access request and implement least-privilege access</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Data Loss Prevention</h4>
                  <p className="text-sm text-gray-600">Monitor and prevent unauthorized data exfiltration</p>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy-Preserving Techniques</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Differential Privacy</h4>
                  <p className="text-sm text-gray-600">Add mathematical noise to protect individual privacy</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Homomorphic Encryption</h4>
                  <p className="text-sm text-gray-600">Perform computations on encrypted data without decryption</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Federated Learning</h4>
                  <p className="text-sm text-gray-600">Train models without centralizing sensitive data</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="model-security" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Model Security Best Practices</h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Model Validation and Testing</h3>
              <p className="text-gray-700 mb-4">
                Implement comprehensive testing strategies to identify and mitigate model vulnerabilities before deployment.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Adversarial robustness testing</li>
                <li>• Bias and fairness evaluation</li>
                <li>• Performance degradation analysis</li>
                <li>• Stress testing and edge case validation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Model Deployment</h3>
              <p className="text-gray-700 mb-4">
                Ensure secure deployment practices that protect models from various attack vectors.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Model versioning and integrity verification</li>
                <li>• Secure model serving and API protection</li>
                <li>• Input validation and sanitization</li>
                <li>• Rate limiting and abuse prevention</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Model Monitoring and Maintenance</h3>
              <p className="text-gray-700 mb-4">
                Implement continuous monitoring to detect model degradation and security issues.
              </p>
              <ul className="text-gray-700 space-y-2">
                <li>• Real-time model performance monitoring</li>
                <li>• Drift detection and alerting</li>
                <li>• Automated model retraining pipelines</li>
                <li>• Security incident detection and response</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="infrastructure" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Infrastructure Security</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cloud Security</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Identity and Access Management</h4>
                  <p className="text-sm text-gray-600">Implement multi-factor authentication and role-based access controls</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Network Security</h4>
                  <p className="text-sm text-gray-600">Use VPCs, security groups, and network segmentation</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Compliance and Auditing</h4>
                  <p className="text-sm text-gray-600">Enable comprehensive logging and monitoring</p>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Container Security</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Image Security</h4>
                  <p className="text-sm text-gray-600">Scan container images for vulnerabilities and use trusted base images</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Runtime Protection</h4>
                  <p className="text-sm text-gray-600">Implement runtime security monitoring and policy enforcement</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Orchestration Security</h4>
                  <p className="text-sm text-gray-600">Secure Kubernetes clusters and container orchestration platforms</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="compliance" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Compliance and Governance</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Compliance Frameworks</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Data Protection</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• GDPR (General Data Protection Regulation)</li>
                  <li>• CCPA (California Consumer Privacy Act)</li>
                  <li>• HIPAA (Health Insurance Portability and Accountability Act)</li>
                  <li>• SOX (Sarbanes-Oxley Act)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Security Standards</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• ISO 27001 (Information Security Management)</li>
                  <li>• NIST Cybersecurity Framework</li>
                  <li>• SOC 2 (Service Organization Control 2)</li>
                  <li>• PCI DSS (Payment Card Industry Data Security Standard)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Governance Framework</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• AI ethics committee and governance structure</li>
                <li>• Risk assessment and management processes</li>
                <li>• Policy development and implementation</li>
                <li>• Regular audits and compliance monitoring</li>
                <li>• Training and awareness programs</li>
              </ul>
            </div>

            <div className="bg-white border rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Documentation and Reporting</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• AI system inventory and documentation</li>
                <li>• Risk registers and mitigation plans</li>
                <li>• Incident reports and lessons learned</li>
                <li>• Compliance reports and certifications</li>
                <li>• Regular security assessments and reviews</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="monitoring" className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Security Monitoring and Incident Response</h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Continuous Monitoring</h3>
              <p className="text-gray-700 mb-4">
                Implement comprehensive monitoring systems to detect security threats and anomalies in real-time.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technical Monitoring</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Model performance and behavior monitoring</li>
                    <li>• Data access and usage tracking</li>
                    <li>• Infrastructure security monitoring</li>
                    <li>• Network traffic analysis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Business Monitoring</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Compliance and regulatory monitoring</li>
                    <li>• Business impact assessment</li>
                    <li>• Risk exposure tracking</li>
                    <li>• Stakeholder communication</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Incident Response Plan</h3>
              <p className="text-gray-700 mb-4">
                Develop and maintain a comprehensive incident response plan specifically tailored for AI security incidents.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white rounded p-4 text-center">
                  <div className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mx-auto mb-2">1</div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Preparation</h4>
                  <p className="text-xs text-gray-600">Train teams, establish procedures, and prepare tools</p>
                </div>
                <div className="bg-white rounded p-4 text-center">
                  <div className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mx-auto mb-2">2</div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Detection</h4>
                  <p className="text-xs text-gray-600">Identify and confirm security incidents quickly</p>
                </div>
                <div className="bg-white rounded p-4 text-center">
                  <div className="bg-orange-100 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mx-auto mb-2">3</div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Response</h4>
                  <p className="text-xs text-gray-600">Contain, eradicate, and recover from incidents</p>
                </div>
                <div className="bg-white rounded p-4 text-center">
                  <div className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center font-bold mx-auto mb-2">4</div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">Recovery</h4>
                  <p className="text-xs text-gray-600">Restore systems and learn from incidents</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Secure Your AI Systems Today</h2>
          <p className="text-xl mb-6 opacity-90">
            Protect your organization with enterprise-grade AI security solutions from Zion Tech Group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get Security Assessment
            </a>
            <a
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Explore Security Services
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}