import React from 'react';
import Head from 'next/head';

export default function CybersecurityPage() {
  return (
    <>
      <Head>
        <title>Cybersecurity | Zion Tech Group</title>
        <meta name="description" content="Protect your digital assets with Zion Tech Group's comprehensive cybersecurity solutions. Advanced threat detection, compliance, and security consulting." />
        <meta property="og:title" content="Cybersecurity | Zion Tech Group" />
        <meta property="og:description" content="Protect your digital assets with Zion Tech Group's comprehensive cybersecurity solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/cybersecurity" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Cybersecurity
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Fortify your digital defenses with enterprise-grade cybersecurity solutions designed to protect against evolving threats.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-700 transition-all duration-200">
                Get Security Assessment
              </a>
              <a href="/services" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                View All Services
              </a>
            </div>
          </section>

          {/* Security Services Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Cybersecurity Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Threat Detection */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-red-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Threat Detection</h3>
                <p className="text-white/70 mb-4">Advanced AI-powered threat detection and response systems.</p>
                <a href="/services/threat-detection" className="text-red-400 hover:text-red-300 transition-colors">Learn More →</a>
              </div>

              {/* Penetration Testing */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-orange-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Penetration Testing</h3>
                <p className="text-white/70 mb-4">Comprehensive security assessments to identify vulnerabilities.</p>
                <a href="/services/penetration-testing" className="text-orange-400 hover:text-orange-300 transition-colors">Learn More →</a>
              </div>

              {/* Compliance & Audit */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Compliance & Audit</h3>
                <p className="text-white/70 mb-4">SOC2, ISO 27001, GDPR, and industry-specific compliance.</p>
                <a href="/services/compliance-audit" className="text-green-400 hover:text-green-300 transition-colors">Learn More →</a>
              </div>

              {/* Zero Trust Architecture */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Zero Trust</h3>
                <p className="text-white/70 mb-4">Never trust, always verify security architecture implementation.</p>
                <a href="/services/zero-trust" className="text-blue-400 hover:text-blue-300 transition-colors">Learn More →</a>
              </div>

              {/* Incident Response */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Incident Response</h3>
                <p className="text-white/70 mb-4">24/7 security monitoring and rapid incident response.</p>
                <a href="/services/incident-response" className="text-purple-400 hover:text-purple-300 transition-colors">Learn More →</a>
              </div>

              {/* Security Training */}
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Security Training</h3>
                <p className="text-white/70 mb-4">Employee cybersecurity awareness and training programs.</p>
                <a href="/services/security-training" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
              </div>
            </div>
          </section>

          {/* Security Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Advanced Security Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Real-time Threat Intelligence</h3>
                    <p className="text-white/70">AI-powered threat detection with global intelligence feeds and behavioral analysis.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Automated Response</h3>
                    <p className="text-white/70">Instant threat containment and automated incident response workflows.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Compliance Automation</h3>
                    <p className="text-white/70">Automated compliance monitoring and reporting for multiple frameworks.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Cloud Security</h3>
                    <p className="text-white/70">Multi-cloud security with unified threat management and compliance.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Compliance Frameworks */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Compliance & Standards</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <h3 className="text-lg font-semibold mb-2 text-cyan-400">SOC 2</h3>
                <p className="text-white/70 text-sm">Service Organization Control 2 compliance</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <h3 className="text-lg font-semibold mb-2 text-fuchsia-400">ISO 27001</h3>
                <p className="text-white/70 text-sm">Information security management</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <h3 className="text-lg font-semibold mb-2 text-green-400">GDPR</h3>
                <p className="text-white/70 text-sm">Data protection regulation</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                <h3 className="text-lg font-semibold mb-2 text-orange-400">HIPAA</h3>
                <p className="text-white/70 text-sm">Healthcare data protection</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-12 border border-red-500/30">
              <h2 className="text-3xl font-bold mb-4">Secure Your Digital Future Today</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Don't wait for a breach to happen. Get proactive with comprehensive cybersecurity protection.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="px-8 py-3 bg-gradient-to-r from-red-500 to-orange-600 text-white rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-200">
                  Get Security Assessment
                </a>
                <a href="/case-studies" className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200">
                  View Security Case Studies
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}