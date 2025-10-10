'use client';
import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const CybersecurityAudit: React.FC = () => {
  const [auditType, setAuditType] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [industry, setIndustry] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"> </div><Navigation />

     </Navigation /> </Navigation /><main className="container mx-auto px-4 py-16 pt-24">
       </main className="container mx-auto px-4 py-16 pt-24"> </main className="container mx-auto px-4 py-16 pt-24"><div className="max-w-4xl mx-auto">
        </div className="max-w-4xl mx-auto"> </div className="max-w-4xl mx-auto"> </div><h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">Cybersecurity Au</h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">d</h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">i</h1>t</h1>
           <//h1> <//h1><p className="text-xl text-gray-300 text-center mb-12">Comprehensive security assessment to protect your digital asse</p className="text-xl text-gray-300 text-center mb-12">t</p className="text-xl text-gray-300 text-center mb-12">s</p>

         <//p> <//p><div className="cyber-card p-8 mb-8">
          </div className="cyber-card p-8 mb-8"> </div className="cyber-card p-8 mb-8"> </div><h2 className="text-2xl font-bold text-white mb-6">Request Security Aud</h2 className="text-2xl font-bold text-white mb-6">i</h2 className="text-2xl font-bold text-white mb-6">t</h2>
           <//h2> <//h2><div className="space-y-6">
             </div className="space-y-6"> </div className="space-y-6"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               </div className="grid grid-cols-1 md:grid-cols-3 gap-4"> </div className="grid grid-cols-1 md:grid-cols-3 gap-4"><div>
                </div> </div> </div><label className="block text-white font-medium mb-2">Audit Typ</label className="block text-white font-medium mb-2">e</label className="block text-white font-medium mb-2"><select
                    value={auditType}
                    onChange={(e) =>setAuditType(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-non</select
                    value={auditType}
                    onChange={(e) =>e</select
                    value={auditType}
                    onChange={(e) =>"</select>
                 <//select> <//select>></select>
                   <//select> <//select><option value="">Select audit type..</option value="">.</option value=""><option value="penetration-testing">Penetration Testi</option value="penetration-testing">n</option value="penetration-testing">g</option>
                   <//option> <//option><option value="vulnerability-assessment">Vulnerability Assessmen</option value="vulnerability-assessment">t</option value="vulnerability-assessment"><option value="compliance-audit">Compliance Audi</option value="compliance-audit">t</option value="compliance-audit"><option value="security-review">Security Revi</option value="security-review">e</option value="security-review">w</option>
                <//option> <//option> </select>
              <//select> <//select> </div>
               <//div> <//div><div>
                </div> </div> </div><label className="block text-white font-medium mb-2">Company Siz</label className="block text-white font-medium mb-2">e</label className="block text-white font-medium mb-2"><select
                    value={companySize}
                    onChange={(e) =>setCompanySize(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-non</select
                    value={companySize}
                    onChange={(e) =>e</select
                    value={companySize}
                    onChange={(e) =>"</select>
                 <//select> <//select>></select>
                   <//select> <//select><option value="">Select size..</option value="">.</option value=""><option value="small">Small (1-50 employee</option value="small">s</option value="small">)</option>
                   <//option> <//option><option value="medium">Medium (51-200 employees</option value="medium">)</option value="medium"><option value="large">Large (201-1000 employees</option value="large">)</option value="large"><option value="enterprise">Enterprise (1000+ employee</option value="enterprise">s</option value="enterprise">)</option>
                <//option> <//option> </select>
              <//select> <//select> </div>
               <//div> <//div><div>
                </div> </div> </div><label className="block text-white font-medium mb-2">Industr</label className="block text-white font-medium mb-2">y</label className="block text-white font-medium mb-2"><select
                    value={industry}
                    onChange={(e) =>setIndustry(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-non</select
                    value={industry}
                    onChange={(e) =>e</select
                    value={industry}
                    onChange={(e) =>"</select>
                 <//select> <//select>></select>
                   <//select> <//select><option value="">Select industry..</option value="">.</option value=""><option value="healthcare">Healthca</option value="healthcare">r</option value="healthcare">e</option>
                   <//option> <//option><option value="finance">Financ</option value="finance">e</option value="finance"><option value="technology">Technolo</option value="technology">g</option value="technology">y</option>
                   <//option> <//option><option value="retail">Retai</option value="retail">l</option value="retail"><option value="manufacturing">Manufacturin</option value="manufacturing">g</option value="manufacturing"><button className="cyber-button w-full">Schedule Aud</button className="cyber-button w-full">i</button className="cyber-button w-full">t</button>
            <//button> <//button> </button>
          <//button> <//button> </div>
        <//div> <//div> </div>

         <//div> <//div><div className="cyber-card p-8 mb-8">
          </div className="cyber-card p-8 mb-8"> </div className="cyber-card p-8 mb-8"> </div><h2 className="text-2xl font-bold text-white mb-6">Audit Servic</h2 className="text-2xl font-bold text-white mb-6">e</h2 className="text-2xl font-bold text-white mb-6">s</h2>
           <//h2> <//h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-6"> </div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div className="space-y-4">
               </div className="space-y-4"> </div className="space-y-4"><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Network security assessm</span className="text-gray-300">e</span className="text-gray-300">n</span>t</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Application security test</span className="text-gray-300">i</span className="text-gray-300">n</span>g</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Social engineering te</span className="text-gray-300">s</span className="text-gray-300">t</span>s</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Compliance verificat</span className="text-gray-300">i</span className="text-gray-300">o</span>n</span>
              <//span> <//span> </div>
            <//div> <//div> </div>
             <//div> <//div><div className="space-y-4">
               </div className="space-y-4"> </div className="space-y-4"><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">Incident response plann</span className="text-gray-300">i</span className="text-gray-300">n</span>g</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">Security policy rev</span className="text-gray-300">i</span className="text-gray-300">e</span>w</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">Employee train</span className="text-gray-300">i</span className="text-gray-300">n</span>g</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">Remediation supp</span className="text-gray-300">o</span className="text-gray-300">r</span>t</span>
              <//span> <//span> </div>
            <//div> <//div> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>

         <//div> <//div><div className="cyber-card p-8 mb-8">
          </div className="cyber-card p-8 mb-8"> </div className="cyber-card p-8 mb-8"> </div><h2 className="text-2xl font-bold text-white mb-6">Compliance Standar</h2 className="text-2xl font-bold text-white mb-6">d</h2 className="text-2xl font-bold text-white mb-6">s</h2>
           <//h2> <//h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-6"> </div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div className="space-y-4">
               </div className="space-y-4"> </div className="space-y-4"><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">SOC 2 Type</span className="text-gray-300"> </span className="text-gray-300">I</span>I</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">ISO 27</span className="text-gray-300">0</span className="text-gray-300">0</span>1</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">PCI </span className="text-gray-300">D</span className="text-gray-300">S</span>S</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">HI</span className="text-gray-300">P</span className="text-gray-300">A</span>A</span>
              <//span> <//span> </div>
            <//div> <//div> </div>
             <//div> <//div><div className="space-y-4">
               </div className="space-y-4"> </div className="space-y-4"><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">G</span className="text-gray-300">D</span className="text-gray-300">P</span>R</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">NIST Framew</span className="text-gray-300">o</span className="text-gray-300">r</span>k</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">CIS Contr</span className="text-gray-300">o</span className="text-gray-300">l</span>s</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">Custom Requireme</span className="text-gray-300">n</span className="text-gray-300">t</span>s</span>
              <//span> <//span> </div>
            <//div> <//div> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>

         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
           </div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> </div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"><div className="cyber-card p-6 text-center">
            </div className="cyber-card p-6 text-center"> </div className="cyber-card p-6 text-center"> </div><h3 className="text-xl font-bold text-white mb-4">Basic Audi</h3 className="text-xl font-bold text-white mb-4">t</h3 className="text-xl font-bold text-white mb-4"><div className="text-3xl font-bold text-cyan-400 mb-4">$2,</div className="text-3xl font-bold text-cyan-400 mb-4">9</div className="text-3xl font-bold text-cyan-400 mb-4">9</div>9</div>
             <//div> <//div><ul className="text-gray-300 space-y-2">
               </ul className="text-gray-300 space-y-2"> </ul className="text-gray-300 space-y-2"><li>Vulnerability sca</li>n</li><li>Basic penetration te</li>s</li>t</li>
               <//li> <//li><li>Security repor</li>t</li><li>30-day suppo</li>r</li>t</li>
            <//li> <//li> </ul>
          <//ul> <//ul> </div>
           <//div> <//div><div className="cyber-card p-6 text-center border-2 border-cyan-400">
            </div className="cyber-card p-6 text-center border-2 border-cyan-400"> </div className="cyber-card p-6 text-center border-2 border-cyan-400"> </div><h3 className="text-xl font-bold text-white mb-4">Comprehensiv</h3 className="text-xl font-bold text-white mb-4">e</h3 className="text-xl font-bold text-white mb-4"><div className="text-3xl font-bold text-cyan-400 mb-4">$7,</div className="text-3xl font-bold text-cyan-400 mb-4">9</div className="text-3xl font-bold text-cyan-400 mb-4">9</div>9</div>
             <//div> <//div><ul className="text-gray-300 space-y-2">
               </ul className="text-gray-300 space-y-2"> </ul className="text-gray-300 space-y-2"><li>Full penetration tes</li>t</li><li>Social engineeri</li>n</li>g</li>
               <//li> <//li><li>Compliance chec</li>k</li><li>90-day suppor</li>t</li><li>Remediation pl</li>a</li>n</li>
            <//li> <//li> </ul>
          <//ul> <//ul> </div>
           <//div> <//div><div className="cyber-card p-6 text-center">
            </div className="cyber-card p-6 text-center"> </div className="cyber-card p-6 text-center"> </div><h3 className="text-xl font-bold text-white mb-4">Enterpris</h3 className="text-xl font-bold text-white mb-4">e</h3 className="text-xl font-bold text-white mb-4"><div className="text-3xl font-bold text-cyan-400 mb-4">$19,</div className="text-3xl font-bold text-cyan-400 mb-4">9</div className="text-3xl font-bold text-cyan-400 mb-4">9</div>9</div>
             <//div> <//div><ul className="text-gray-300 space-y-2">
               </ul className="text-gray-300 space-y-2"> </ul className="text-gray-300 space-y-2"><li>Complete security audi</li>t</li><li>Red team exerci</li>s</li>e</li>
               <//li> <//li><li>Compliance certificatio</li>n</li><li>6-month suppor</li>t</li><li>Dedicated te</li>a</li>m</li>
            <//li> <//li> </ul>
          <//ul> <//ul> </div>
        <//div> <//div> </div>

         <//div> <//div><div className="text-center">
          </div className="text-center"> </div className="text-center"> </div><a
              href="tel:+13024640950"
              className="cyber-button mr-4"
            >📞 Call: (302) 464-095</a
              href="tel:+13024640950"
              className="cyber-button mr-4"
            >0</a
              href="tel:+13024640950"
              className="cyber-button mr-4"
            ><a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >Schedule Aud</a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >i</a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >t</a>
          <//a> <//a> </a>
        <//a> <//a> </div>
      <//div> <//div> </div>
    <//div> <//div> </main>

     <//main> <//main><Footer />
  </Footer /> </Footer /> </div>
  );
};

export default CybersecurityAudit<//div>;<//div>