import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function Cybersecurity() {
  const contact = {
    email: 'kleber@ziontechgroup.com',
    phone: '+1-302-464-0950',
    site: 'https://ziontechgroup.com'
  };
  const services = [
    {
      icon: Shield,
      title: 'Security Assessment & Auditing',
      description: 'Comprehensive security evaluations to identify vulnerabilities and compliance gaps.',
      features: ['Penetration testing', 'Vulnerability scanning', 'Compliance audits', 'Risk assessments']
    },
    {
      icon: Lock,
      title: 'Identity & Access Management',
      description: 'Robust IAM solutions to control user access and protect sensitive data.',
      features: ['Multi-factor authentication', 'Single sign-on', 'Role-based access', 'Privileged access management']
    },
    {
      icon: Eye,
      title: 'Security Monitoring & SIEM',
      description: '24/7 security monitoring with advanced threat detection and incident response.',
      features: ['Real-time monitoring', 'Threat intelligence', 'Incident response', 'Forensic analysis']
    },
    {
      icon: AlertTriangle,
      title: 'Threat Detection & Response',
      description: 'Advanced threat hunting and automated response to security incidents.',
      features: ['Behavioral analytics', 'AI-powered detection', 'Automated response', 'Threat hunting']
    },
    {
      icon: Users,
      title: 'Security Training & Awareness',
      description: 'Comprehensive security education programs to build a security-conscious culture.',
      features: ['Phishing simulations', 'Security workshops', 'Compliance training', 'Awareness campaigns']
    },
    {
      icon: Database,
      title: 'Data Protection & Encryption',
      description: 'End-to-end data protection with advanced encryption and backup solutions.',
      features: ['Data encryption', 'Backup solutions', 'Data loss prevention', 'Privacy compliance']
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Cybersecurity | Zion Tech Group</title>
        <meta name="description" content="Zero Trust designs, cloud posture hardening, incident response, and compliance readiness." />
        <link rel="canonical" href="https://ziontechgroup.com/cybersecurity" />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <header className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Cybersecurity</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">From strategy to operations: identity, data, networks, and workloads secured by design.</p>
            <div className="mt-2 text-sm text-gray-400">New: VAPT and MDM offerings below.</div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="px-8 py-4">Security Assessment</a>
              <a href="/market-pricing" className="px-8 py-4">See Market Pricing</a>
            </div>
          </header>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 rounded-xl bg-black/40 border border-gray-700/60">
                  <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <span className="text-gray-200">{f}</span>
                </div>
              ))}
            </div>
          </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Don&apos;t wait for a security breach. Let our experts help you build a robust security posture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Schedule Security Audit
              </Link>
              <a 
                href={`tel:${contact.phone}`}
                className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
              >
                Call {contact.phone}
              </a>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}