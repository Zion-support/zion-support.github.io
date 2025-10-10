'use client';
import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const CybersecurityAudit: React.FC = () => {
  const [auditType, setAuditType] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [industry, setIndustry] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></div>
      <Navigation /></Navigatio>

      <main className="container mx-auto px-4 py-16 pt-24"></mai>
        <div className="max-w-4 xl mx-auto"></div>
          <h1 className="text-4 xl md:text-5 xl font-bold text-white mb-6 neon-text text-center"></h1></<<<h1>Cybersecurity</h1></<<h1>Audit</h1><p className="text-xl text-gray-300 text-center mb-12">Comprehensive security assessment to protect your digital assets</p>
          </p>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6">Request Security Audit</h>
            <div className="space-y-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4"></div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Audit Type</label><select
                    value={auditType}
                    onChange={(e) =>setAuditType(e.target.value)}</select></<<<selec>className</selec></selec>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"</select>
                  ></select>
                    <option value="">Select audit type...</option><option value="penetration-testing">Penetration Testing</optio>
                    <option value="vulnerability-assessment">Vulnerability Assessment</option><option value="compliance-audit">Compliance Audit</option><option value="security-review">Security Review</optio>
                  </select>
                </div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Company Size</label><select
                    value={companySize}
                    onChange={(e) =>setCompanySize(e.target.value)}</select></<<<selec>className</selec></selec>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"</select>
                  ></select>
                    <option value="">Select size...</option><option value="small">Small (1-50 employees)</optio>
                    <option value="medium">Medium (51-200 employees)</option><option value="large">Large (201-1000 employees)</option><option value="enterprise">Enterprise (1000+ employees)</optio>
                  </select>
                </div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Industry</label><select
                    value={industry}
                    onChange={(e) =>setIndustry(e.target.value)}</select></<<<selec>className</selec></selec>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"</select>
                  ></select>
                    <option value="">Select industry...</option><option value="healthcare">Healthcare</optio>
                    <option value="finance">Finance</option><option value="technology">Technology</optio>
                    <option value="retail">Retail</option><option value="manufacturing">Manufacturing</option><button className="cyber-button w-full">Schedule Audit</butto>
              </button>
            </div>
          </div>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6">Audit Services</h>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Network security assessment</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Application security testing</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Social engineering tests</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Compliance verification</spa>
                </div>
              </div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Incident response planning</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Security policy review</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Employee training</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Remediation support</spa>
                </div>
              </div>
            </div>
          </div>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6">Compliance Standards</h>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">SOC 2 Type II</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">ISO 27001</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">PCI DSS</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">HIPAA</spa>
                </div>
              </div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">GDPR</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">NIST Framework</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">CIS Controls</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Custom Requirements</spa>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"></div>
            <div className="cyber-card p-6 text-center"></div>
              <h3 className="text-xl font-bold text-white mb-4"></h3></<<<h3>Basic</h3></<<h3>Audit</h3><div className="text-3 xl font-bold text-cyan-400 mb-4">$2,999</div>
              <ul className="text-gray-300 space-y-2"></u>
                <<<<li>Vulnerability</li></<<li>scan</li><<<<li>Basic</li></<<li>penetration</li></<li>test</li>
                <<<<li>Security</li></<<li>report</li><li>30-day support</l>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center border-2 border-cyan-400"></div>
              <h3 className="text-xl font-bold text-white mb-4"></h3></<<<h3>Comprehensive</h3></h3><div className="text-3 xl font-bold text-cyan-400 mb-4">$7,999</div>
              <ul className="text-gray-300 space-y-2"></u>
                <<<<li>Full</li></<<li>penetration</li> test<<<<li>Social</li></<<li>engineering</li></li>
                <<<<li>Compliance</li></<<li>check</li><li>90-day support</li><<<<li>Remediation</li></<<li>plan</li></li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center"></div>
              <h3 className="text-xl font-bold text-white mb-4"></h3></<<<h3>Enterprise</h3></h3><div className="text-3 xl font-bold text-cyan-400 mb-4">$19,999</div>
              <ul className="text-gray-300 space-y-2"></u>
                <<<<li>Complete</li></<<li>security</li> audit<<<<li>Red</li></<<li>team</li></<li>exercise</li>
                <<<<li>Compliance</li></<<li>certification</li><li>6-month support</li><<<<li>Dedicated</li></<<li>team</li></li>
              </ul>
            </div>
          </div>

          <div className="text-center"></div>
            <a
              href="tel:+13024640950"
              className="cyber-button mr-4"
            >📞 Call: (302) 464-0950</a><a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >Schedule Audit</a>
            </a>
          </div>
        </div>
      </main>

      <Footer /></Foote>
    </div>
  );
};

export default CybersecurityAudit;