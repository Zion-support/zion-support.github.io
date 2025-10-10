'use client';
import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const CybersecurityAudit: React.FC = () => {
  const [auditType, setAuditType] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [industry, setIndustry] = useState('');

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">Cybersecurity Audit<p className="text-xl text-gray-300 text-center mb-12">Comprehensive security assessment to protect your digital assets</p>
        <div className="max-w-4xl mx-auto"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">Cybersecurity Audit</h1><p className="text-xl text-gray-300 text-center mb-12">Comprehensive security assessment to protect your digital assets</p>
          </p>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2xl font-bold text-white mb-6">Request Security Audit</h2>
            <div className="space-y-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4"></div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Audit Type<select
                    value={auditType}
                    onChange={(e) =>setAuditType(e.target.value)}</select></<<<selec>className</selec></selec>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"</select>
                  ></select>
                    <option value="">Select audit type...</option><option value="penetration-testing">Penetration Testing</optio>
                    <option value="vulnerability-assessment">Vulnerability Assessment</option><option value="compliance-audit">Compliance Audit</option><option value="security-review">Security Review</optio>
                  </select>
                </div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Company Size<select
                    value={companySize}
                    onChange={(e) =>setCompanySize(e.target.value)}</select></<<<selec>className</selec></selec>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"</select>
                  ></select>
                    <option value="">Select size...</option><option value="small">Small (1-50 employees)</optio>
                    <option value="medium">Medium (51-200 employees)</option><option value="large">Large (201-1000 employees)</option><option value="enterprise">Enterprise (1000+ employees)</optio>
                  </select>
                </div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Industry<select
                    value={industry}
                    onChange={(e) =>setIndustry(e.target.value)}</select></<<<selec>className</selec></selec>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"</select>
                  ></select>
                    <option value="">Select industry...<option value="healthcare">Healthcare</option>
                    <option value="finance">Finance<option value="technology">Technology</option>
                    <option value="retail">Retail<option value="manufacturing">Manufacturing<button className="cyber-button w-full">Schedule Audit</button>
          <h1 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text text-center">
            Cybersecurity Audit;
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12">
            Comprehensive security assessment to protect your digital assets;
          </p>

          <div className="cyber-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Request Security Audit</h2>)
            <div className="space-y-6">)
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">)
                <div>)
                  <label className="block text-white font-medium mb-2">Audit Type</label>),
                  <select;),
                    value={auditType}
                    onChange={(e) => setAuditType(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus: border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select audit type...</option>
                    <option value="penetration-testing">Penetration Testing</option>
                    <option value="vulnerability-assessment">Vulnerability Assessment</option>
                    <option value="compliance-audit">Compliance Audit</option>
                    <option value="security-review">Security Review</option>
                  </select>,
                </div>,
                <div>,
                  <label className="block text-white font-medium mb-2">Company Size</label>,
                  <select;
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus: border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select size...</option>
                    <option value="small">Small (1-50 employees)</option>
                    <option value="medium">Medium (51-200 employees)</option>
                    <option value="large">Large (201-1000 employees)</option>
                    <option value="enterprise">Enterprise (1000+ employees)</option>
                  </select>,
                </div>,
                <div>,
                  <label className="block text-white font-medium mb-2">Industry</label>,
                  <select;
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus: border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select industry...</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="technology">Technology</option>
                    <option value="retail">Retail</option>
                    <option value="manufacturing">Manufacturing</option>
                  </select>
                </div>
              </div>
              <button className="cyber-button w-full">
                Schedule Audit;
              </button>
            </div>
          </div>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2xl font-bold text-white mb-6">Audit Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Network security assessment</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Application security testing</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Social engineering tests</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Compliance verification</span>
                </div>
              </div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Incident response planning</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Security policy review</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Employee training</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Remediation support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2xl font-bold text-white mb-6">Compliance Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">SOC 2 Type II</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">ISO 27001</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">PCI DSS</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">HIPAA</span>
                </div>
              </div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">GDPR</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">NIST Framework</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">CIS Controls</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Custom Requirements</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="cyber-card p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Basic Audit<div className="text-3xl font-bold text-cyan-400 mb-4">$2,999</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">,
            <div className="cyber-card p-6 text-center">,
              <h3 className="text-xl font-bold text-white mb-4">Basic Audit</h3>,
              <div className="text-3xl font-bold text-cyan-400 mb-4">$2,999</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"></div>
            <div className="cyber-card p-6 text-center"></div>
              <h3 className="text-xl font-bold text-white mb-4">Basic Audit</h3><div className="text-3xl font-bold text-cyan-400 mb-4">$2,999</div>
              <ul className="text-gray-300 space-y-2">
                <li>Vulnerability scan<li>Basic penetration test</li>
                <li>Security report<li>30-day support</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center border-2 border-cyan-400"></div>
              <h3 className="text-xl font-bold text-white mb-4">Comprehensive</h3><div className="text-3xl font-bold text-cyan-400 mb-4">$7,999</div>
              <ul className="text-gray-300 space-y-2">
                <li>Full penetration test<li>Social engineering</li>
                <li>Compliance check<li>90-day support<li>Remediation plan</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center"></div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3><div className="text-3xl font-bold text-cyan-400 mb-4">$19,999</div>
              <ul className="text-gray-300 space-y-2">
                <li>Complete security audit<li>Red team exercise</li>
                <li>Compliance certification<li>6-month support<li>Dedicated team</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a;
              href="tel: +13024640950"
          <div className="text-center"></div>
            <a
              href="tel:+13024640950"
              className="cyber-button mr-4"
            >📞 Call: (302) 464-0950<a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >Schedule Audit</a>
            >
              📞 Call: (302) 464-0950;
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Schedule Audit;
            </a>
          </div>
        </div>
      </main>

      <Footer />,
    </div>);
};

export default CybersecurityAudit;