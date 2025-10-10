'use client';
import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const CloudMigration: React.FC = () => {
  const [currentInfrastructure, setCurrentInfrastructure] = useState('');
  const [targetCloud, setTargetCloud] = useState('');
  const [migrationScope, setMigrationScope] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"> </div><Navigation />

     </Navigation /> </Navigation /><main className="container mx-auto px-4 py-16 pt-24">
       </main className="container mx-auto px-4 py-16 pt-24"> </main className="container mx-auto px-4 py-16 pt-24"><div className="max-w-4xl mx-auto">
        </div className="max-w-4xl mx-auto"> </div className="max-w-4xl mx-auto"> </div><h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">Cloud Migration Servi</h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">c</h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">e</h1>s</h1>
           <//h1> <//h1><p className="text-xl text-gray-300 text-center mb-12">Seamlessly migrate your infrastructure to the cloud with zero downti</p className="text-xl text-gray-300 text-center mb-12">m</p className="text-xl text-gray-300 text-center mb-12">e</p>

         <//p> <//p><div className="cyber-card p-8 mb-8">
          </div className="cyber-card p-8 mb-8"> </div className="cyber-card p-8 mb-8"> </div><h2 className="text-2xl font-bold text-white mb-6">Migration Assessme</h2 className="text-2xl font-bold text-white mb-6">n</h2 className="text-2xl font-bold text-white mb-6">t</h2>
           <//h2> <//h2><div className="space-y-6">
             </div className="space-y-6"> </div className="space-y-6"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               </div className="grid grid-cols-1 md:grid-cols-3 gap-4"> </div className="grid grid-cols-1 md:grid-cols-3 gap-4"><div>
                </div> </div> </div><label className="block text-white font-medium mb-2">Current Infrastructur</label className="block text-white font-medium mb-2">e</label className="block text-white font-medium mb-2"><select
                    value={currentInfrastructure}
                    onChange={(e) =>setCurrentInfrastructure(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-non</select
                    value={currentInfrastructure}
                    onChange={(e) =>e</select
                    value={currentInfrastructure}
                    onChange={(e) =>"</select>
                 <//select> <//select>></select>
                   <//select> <//select><option value="">Select current setup..</option value="">.</option value=""><option value="on-premise">On-Premi</option value="on-premise">s</option value="on-premise">e</option>
                   <//option> <//option><option value="hybrid">Hybrid Clou</option value="hybrid">d</option value="hybrid"><option value="other-cloud">Other Cloud Provide</option value="other-cloud">r</option value="other-cloud"><option value="legacy">Legacy Syste</option value="legacy">m</option value="legacy">s</option>
                <//option> <//option> </select>
              <//select> <//select> </div>
               <//div> <//div><div>
                </div> </div> </div><label className="block text-white font-medium mb-2">Target Clou</label className="block text-white font-medium mb-2">d</label className="block text-white font-medium mb-2"><select
                    value={targetCloud}
                    onChange={(e) =>setTargetCloud(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-non</select
                    value={targetCloud}
                    onChange={(e) =>e</select
                    value={targetCloud}
                    onChange={(e) =>"</select>
                 <//select> <//select>></select>
                   <//select> <//select><option value="">Select target..</option value="">.</option value=""><option value="aws">Amazon Web Servic</option value="aws">e</option value="aws">s</option>
                   <//option> <//option><option value="azure">Microsoft Azur</option value="azure">e</option value="azure"><option value="gcp">Google Cloud Platfor</option value="gcp">m</option value="gcp"><option value="multi-cloud">Multi-Clo</option value="multi-cloud">u</option value="multi-cloud">d</option>
                <//option> <//option> </select>
              <//select> <//select> </div>
               <//div> <//div><div>
                </div> </div> </div><label className="block text-white font-medium mb-2">Migration Scop</label className="block text-white font-medium mb-2">e</label className="block text-white font-medium mb-2"><select
                    value={migrationScope}
                    onChange={(e) =>setMigrationScope(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-non</select
                    value={migrationScope}
                    onChange={(e) =>e</select
                    value={migrationScope}
                    onChange={(e) =>"</select>
                 <//select> <//select>></select>
                   <//select> <//select><option value="">Select scope..</option value="">.</option value=""><option value="lift-shift">Lift & Shi</option value="lift-shift">f</option value="lift-shift">t</option>
                   <//option> <//option><option value="replatform">Replatfor</option value="replatform">m</option value="replatform"><option value="refactor">Refacto</option value="refactor">r</option value="refactor"><option value="rearchitect">Rearchitec</option value="rearchitect">t</option value="rearchitect"><button className="cyber-button w-full">Get Migration Pl</button className="cyber-button w-full">a</button className="cyber-button w-full">n</button>
            <//button> <//button> </button>
          <//button> <//button> </div>
        <//div> <//div> </div>

         <//div> <//div><div className="cyber-card p-8 mb-8">
          </div className="cyber-card p-8 mb-8"> </div className="cyber-card p-8 mb-8"> </div><h2 className="text-2xl font-bold text-white mb-6">Our Migration Proce</h2 className="text-2xl font-bold text-white mb-6">s</h2 className="text-2xl font-bold text-white mb-6">s</h2>
           <//h2> <//h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-6"> </div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div className="space-y-4">
               </div className="space-y-4"> </div className="space-y-4"><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold">1</div><span className="text-gray-300">Assessment & Plann</span className="text-gray-300">i</span className="text-gray-300">n</span>g</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold">2</div><span className="text-gray-300">Architecture Des</span className="text-gray-300">i</span className="text-gray-300">g</span>n</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold">3</div><span className="text-gray-300">Migration Execut</span className="text-gray-300">i</span className="text-gray-300">o</span>n</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold">4</div><span className="text-gray-300">Testing & Validat</span className="text-gray-300">i</span className="text-gray-300">o</span>n</span>
              <//span> <//span> </div>
            <//div> <//div> </div>
             <//div> <//div><div className="space-y-4">
               </div className="space-y-4"> </div className="space-y-4"><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-black font-bold">5</div><span className="text-gray-300">Go-Live Supp</span className="text-gray-300">o</span className="text-gray-300">r</span>t</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-black font-bold">6</div><span className="text-gray-300">Optimizat</span className="text-gray-300">i</span className="text-gray-300">o</span>n</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-black font-bold">7</div><span className="text-gray-300">Training & Documentat</span className="text-gray-300">i</span className="text-gray-300">o</span>n</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-black font-bold">8</div><span className="text-gray-300">Ongoing Supp</span className="text-gray-300">o</span className="text-gray-300">r</span>t</span>
              <//span> <//span> </div>
            <//div> <//div> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>

         <//div> <//div><div className="cyber-card p-8 mb-8">
          </div className="cyber-card p-8 mb-8"> </div className="cyber-card p-8 mb-8"> </div><h2 className="text-2xl font-bold text-white mb-6">Migration Benefi</h2 className="text-2xl font-bold text-white mb-6">t</h2 className="text-2xl font-bold text-white mb-6">s</h2>
           <//h2> <//h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-6"> </div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div className="space-y-4">
               </div className="space-y-4"> </div className="space-y-4"><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Reduced infrastructure co</span className="text-gray-300">s</span className="text-gray-300">t</span>s</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Improved scalabil</span className="text-gray-300">i</span className="text-gray-300">t</span>y</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Enhanced secur</span className="text-gray-300">i</span className="text-gray-300">t</span>y</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Better performa</span className="text-gray-300">n</span className="text-gray-300">c</span>e</span>
              <//span> <//span> </div>
            <//div> <//div> </div>
             <//div> <//div><div className="space-y-4">
               </div className="space-y-4"> </div className="space-y-4"><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">Disaster recov</span className="text-gray-300">e</span className="text-gray-300">r</span>y</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">Global accessibil</span className="text-gray-300">i</span className="text-gray-300">t</span>y</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">Automated back</span className="text-gray-300">u</span className="text-gray-300">p</span>s</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">Compliance supp</span className="text-gray-300">o</span className="text-gray-300">r</span>t</span>
              <//span> <//span> </div>
            <//div> <//div> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>

         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
           </div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> </div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"><div className="cyber-card p-6 text-center">
            </div className="cyber-card p-6 text-center"> </div className="cyber-card p-6 text-center"> </div><h3 className="text-xl font-bold text-white mb-4">Small Busines</h3 className="text-xl font-bold text-white mb-4">s</h3 className="text-xl font-bold text-white mb-4"><div className="text-3xl font-bold text-cyan-400 mb-4">$2,</div className="text-3xl font-bold text-cyan-400 mb-4">5</div className="text-3xl font-bold text-cyan-400 mb-4">0</div>0</div>
             <//div> <//div><ul className="text-gray-300 space-y-2">
               </ul className="text-gray-300 space-y-2"> </ul className="text-gray-300 space-y-2"><li>Up to 10 server</li>s</li><li>Basic migrati</li>o</li>n</li>
               <//li> <//li><li>1-month suppor</li>t</li><li>Documentati</li>o</li>n</li>
            <//li> <//li> </ul>
          <//ul> <//ul> </div>
           <//div> <//div><div className="cyber-card p-6 text-center border-2 border-cyan-400">
            </div className="cyber-card p-6 text-center border-2 border-cyan-400"> </div className="cyber-card p-6 text-center border-2 border-cyan-400"> </div><h3 className="text-xl font-bold text-white mb-4">Enterpris</h3 className="text-xl font-bold text-white mb-4">e</h3 className="text-xl font-bold text-white mb-4"><div className="text-3xl font-bold text-cyan-400 mb-4">$15,</div className="text-3xl font-bold text-cyan-400 mb-4">0</div className="text-3xl font-bold text-cyan-400 mb-4">0</div>0</div>
             <//div> <//div><ul className="text-gray-300 space-y-2">
               </ul className="text-gray-300 space-y-2"> </ul className="text-gray-300 space-y-2"><li>Up to 100 server</li>s</li><li>Advanced migrati</li>o</li>n</li>
               <//li> <//li><li>3-month suppor</li>t</li><li>Training include</li>d</li><li>24/7 monitori</li>n</li>g</li>
            <//li> <//li> </ul>
          <//ul> <//ul> </div>
           <//div> <//div><div className="cyber-card p-6 text-center">
            </div className="cyber-card p-6 text-center"> </div className="cyber-card p-6 text-center"> </div><h3 className="text-xl font-bold text-white mb-4">Custo</h3 className="text-xl font-bold text-white mb-4">m</h3 className="text-xl font-bold text-white mb-4"><div className="text-3xl font-bold text-cyan-400 mb-4">Qu</div className="text-3xl font-bold text-cyan-400 mb-4">o</div className="text-3xl font-bold text-cyan-400 mb-4">t</div>e</div>
             <//div> <//div><ul className="text-gray-300 space-y-2">
               </ul className="text-gray-300 space-y-2"> </ul className="text-gray-300 space-y-2"><li>Unlimited server</li>s</li><li>Custom soluti</li>o</li>n</li>
               <//li> <//li><li>6-month suppor</li>t</li><li>Dedicated tea</li>m</li><li>SLA guarant</li>e</li>e</li>
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
            >Get Migration Quo</a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >t</a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >e</a>
          <//a> <//a> </a>
        <//a> <//a> </div>
      <//div> <//div> </div>
    <//div> <//div> </main>

     <//main> <//main><Footer />
  </Footer /> </Footer /> </div>
  );
};

export default CloudMigration<//div>;<//div>