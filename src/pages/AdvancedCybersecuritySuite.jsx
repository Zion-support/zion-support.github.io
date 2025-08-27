import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, ArrowRight, CheckCircle, Zap, AlertTriangle, Users } from 'lucide-react';
const AdvancedCybersecuritySuite = () => {
    return (<>
      <Helmet>
        <title>Advanced Cybersecurity Suite - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions with advanced threat detection, prevention, and response capabilities."/>
        <meta name="keywords" content="cybersecurity, threat detection, security suite, enterprise security, cyber defense"/>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-800/20 to-orange-800/20"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-red-500/20 rounded-full px-6 py-3 mb-6">
                <Shield className="w-5 h-5 text-red-400"/>
                <span className="text-red-300 font-medium">Advanced Cybersecurity Suite</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Defend Against
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent block">
                  Tomorrow's Threats
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive cybersecurity protection with AI-powered threat detection, 
                real-time monitoring, and automated response capabilities for enterprise-grade security.
              </p>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Security Features</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Multi-layered security architecture designed to protect against sophisticated cyber threats
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
            {
                icon: Eye,
                title: "Advanced Threat Detection",
                description: "AI-powered threat intelligence that identifies and responds to zero-day attacks and advanced persistent threats"
            },
            {
                icon: Lock,
                title: "Multi-Factor Authentication",
                description: "Enterprise-grade authentication with biometric, token-based, and behavioral analysis security layers"
            },
            {
                icon: AlertTriangle,
                title: "Real-time Monitoring",
                description: "24/7 security operations center with automated incident response and threat hunting capabilities"
            },
            {
                icon: Shield,
                title: "Endpoint Protection",
                description: "Comprehensive endpoint security with anti-malware, device control, and application whitelisting"
            },
            {
                icon: Zap,
                title: "Automated Response",
                description: "Instant threat mitigation with automated quarantine, isolation, and remediation workflows"
            },
            {
                icon: Users,
                title: "User Behavior Analytics",
                description: "Machine learning-based analysis to detect insider threats and compromised accounts"
            }
        ].map((feature, index) => (<div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-red-500/50 transition-colors">
                  <feature.icon className="w-12 h-12 text-red-400 mb-6"/>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>))}
            </div>
          </div>
        </section>
        {/* Security Metrics Section */}
        <section className="py-20 px-4 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Security Performance</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Proven results in threat detection and prevention across enterprise environments
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
            {
                metric: "99.99%",
                title: "Threat Detection",
                description: "Accuracy in identifying malicious activities"
            },
            {
                metric: "<5s",
                title: "Response Time",
                description: "Average time to threat containment"
            },
            {
                metric: "Zero",
                title: "Successful Breaches",
                description: "Client environments with our full suite"
            },
            {
                metric: "24/7",
                title: "Monitoring",
                description: "Continuous security operations coverage"
            }
        ].map((metric, index) => (<div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 mb-4">
                    <h3 className="text-3xl font-bold text-white mb-2">{metric.metric}</h3>
                    <h4 className="text-lg font-semibold text-white">{metric.title}</h4>
                  </div>
                  <p className="text-gray-300">{metric.description}</p>
                </div>))}
            </div>
          </div>
        </section>
        {/* Compliance Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Compliance & Certifications</h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Meet industry standards and regulatory requirements with our certified security framework
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
            'SOC 2 Type II',
            'ISO 27001',
            'GDPR Compliant',
            'HIPAA Ready',
            'PCI DSS',
            'NIST Framework',
            'FISMA Compliant',
            'FedRAMP Ready'
        ].map((cert, index) => (<div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3"/>
                  <h3 className="text-white font-semibold">{cert}</h3>
                </div>))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Secure Your Enterprise Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Deploy our Advanced Cybersecurity Suite and protect your organization from evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 justify-center">
                Start Security Assessment
                <ArrowRight className="w-5 h-5"/>
              </button>
              <button className="border border-red-500 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-500/10 transition-all">
                Contact Security Expert
              </button>
            </div>
          </div>
        </section>
      </div>
    </>);
};
export default AdvancedCybersecuritySuite;
