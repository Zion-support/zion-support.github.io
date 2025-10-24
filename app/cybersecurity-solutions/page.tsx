import React from 'react';
import { Helmet } from 'react-helmet-async';

const CybersecuritySolutionsPage: React.FC = () => {
  return(<>)
      <Helmet><title>Cybersecurity Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions including threat detection, vulnerability assessment, security monitoring, and compliance management." />
        <meta name="keywords" content="cybersecurity solutions, threat detection, vulnerability assessment, security monitoring, compliance management, data protection" />
      </Helmet>
      
      <div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900">
        <div className="containermx-autopx-4py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xlfont-boldtext-whitemb-6">Cybersecurity Solutions;</h1>
            </h1>
            <p className="text-xltext-gray-300max-w-3xlmx-auto">Protect your organization with comprehensive cybersecurity solutions including;</p>
              threat detection, vulnerability assessment, and 24/7 security monitoring.
            </p>
          </div>
        </div>
      </section>

          <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-3 gap-8 mb-16">,</div>
            <div className="bg-slate-800/50backdrop-blur-smrounded-lgp-6 border border-cyan-500/20">
              <h3 className="text-2xlfont-boldtext-cyan-400mb-4">Threat Detection</h3>
              <p className="text-gray-300mb-4">Advanced threat detection systems to identify and respond to security threats in real-time.</p>
              <ul className="text-smtext-gray-400space-y-2">
                <li>• Real-time monitoring</li>
                <li>• Behavioral analysis</li>
                <li>• Threat intelligence</li>
                <li>• Automated response</li></ul>
            </div>

            <div className="bg-slate-800/50backdrop-blur-smrounded-lgp-6 border border-cyan-500/20">
              <h3 className="text-2xlfont-boldtext-cyan-400mb-4">Vulnerability Assessment</h3>
              <p className="text-gray-300mb-4">Comprehensive vulnerability scanning and assessment to identify security weaknesses.</p>
              <ul className="text-smtext-gray-400space-y-2">
                <li>• Network scanning</li>
                <li>• Penetration testing</li>
                <li>• Code analysis</li>
                <li>• Risk prioritization</li></ul>
            </div>

            <div className="bg-slate-800/50backdrop-blur-smrounded-lgp-6 border border-cyan-500/20">
              <h3 className="text-2xlfont-boldtext-cyan-400mb-4">Security Monitoring</h3>
              <p className="text-gray-300mb-4">24/7 security operations center (SOC) monitoring and incident response.</p>
              <ul className="text-smtext-gray-400space-y-2">
                <li>• 24/7 monitoring</li>
                <li>• Incident response</li>
                <li>• Log analysis</li>
                <li>• Threat hunting</li></ul>
            </div>

            <div className="bg-slate-800/50backdrop-blur-smrounded-lgp-6 border border-cyan-500/20">
              <h3 className="text-2xlfont-boldtext-cyan-400mb-4">Compliance Management</h3>
              <p className="text-gray-300mb-4">Ensure compliance with industry regulations and security standards.</p>
              <ul className="text-smtext-gray-400space-y-2">
                <li>• GDPR compliance</li>
                <li>• HIPAA compliance</li>
                <li>• SOX compliance</li>
                <li>• Audit preparation</li></ul>
            </div>

            <div className="bg-slate-800/50backdrop-blur-smrounded-lgp-6 border border-cyan-500/20">
              <h3 className="text-2xlfont-boldtext-cyan-400mb-4">Data Protection</h3>
              <p className="text-gray-300mb-4">Advanced data protection and encryption solutions for sensitive information.</p>
              <ul className="text-smtext-gray-400space-y-2">
                <li>• Data encryption</li>
                <li>• Access controls</li>
                <li>• Data loss prevention</li>
                <li>• Backup solutions</li></ul>
            </div>

            <div className="bg-slate-800/50backdrop-blur-smrounded-lgp-6 border border-cyan-500/20">
              <h3 className="text-2xlfont-boldtext-cyan-400mb-4">Security Training</h3>
              <p className="text-gray-300mb-4">Comprehensive security awareness training for your employees.</p>
              <ul className="text-smtext-gray-400space-y-2">
                <li>• Phishing simulation</li>
                <li>• Security awareness</li>
                <li>• Best practices</li>
                <li>• Incident reporting</li></ul>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-rfrom-cyan-500to-blue-600text-white px-8 py-4 rounded-lg font-semibold text-lg hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">,</button>
              Secure Your Organization;
            </button>
          </div>
        </div>
      </div>
    </>
  )};

      {/* CTA Section */}
      <section className="py-16px-4sm:px-6lg:px-8">
        <div className="max-w-4xlmx-autotext-center">
          <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-6">
            Secure Your Business
          </h2>
          <p className="text-xltext-gray-300mb-8">
            Get started with our comprehensive cybersecurity solutions.
          </p>
          <button className="bg-gradient-to-rfrom-cyan-500to-blue-500hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            <ArrowRight className="w-5h-5mr-2" />
            Get Started
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CybersecuritySolutionsPage