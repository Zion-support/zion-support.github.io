'use client';
import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AILeadGeneration: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [budget, setBudget] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"> </div><Navigation />

     </Navigation /> </Navigation /><main className="container mx-auto px-4 py-16 pt-24">
       </main className="container mx-auto px-4 py-16 pt-24"> </main className="container mx-auto px-4 py-16 pt-24"><div className="max-w-4xl mx-auto">
        </div className="max-w-4xl mx-auto"> </div className="max-w-4xl mx-auto"> </div><h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">AI Lead Generat</h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">i</h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">o</h1>n</h1>
           <//h1> <//h1><p className="text-xl text-gray-300 text-center mb-12">Generate high-quality leads using AI-powered targeting and automati</p className="text-xl text-gray-300 text-center mb-12">o</p className="text-xl text-gray-300 text-center mb-12">n</p>

         <//p> <//p><div className="cyber-card p-8 mb-8">
          </div className="cyber-card p-8 mb-8"> </div className="cyber-card p-8 mb-8"> </div><h2 className="text-2xl font-bold text-white mb-6">Configure Your Campai</h2 className="text-2xl font-bold text-white mb-6">g</h2 className="text-2xl font-bold text-white mb-6">n</h2>
           <//h2> <//h2><div className="space-y-6">
             </div className="space-y-6"> </div className="space-y-6"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               </div className="grid grid-cols-1 md:grid-cols-3 gap-4"> </div className="grid grid-cols-1 md:grid-cols-3 gap-4"><div>
                </div> </div> </div><label className="block text-white font-medium mb-2">Industr</label className="block text-white font-medium mb-2">y</label className="block text-white font-medium mb-2"><select
                    value={industry}
                    onChange={(e) =>setIndustry(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-non</select
                    value={industry}
                    onChange={(e) =>e</select
                    value={industry}
                    onChange={(e) =>"</select>
                 <//select> <//select>></select>
                   <//select> <//select><option value="">Select industry..</option value="">.</option value=""><option value="technology">Technolo</option value="technology">g</option value="technology">y</option>
                   <//option> <//option><option value="healthcare">Healthcar</option value="healthcare">e</option value="healthcare"><option value="finance">Finan</option value="finance">c</option value="finance">e</option>
                   <//option> <//option><option value="retail">Retai</option value="retail">l</option value="retail"><option value="manufacturing">Manufacturi</option value="manufacturing">n</option value="manufacturing">g</option>
                <//option> <//option> </select>
              <//select> <//select> </div>
               <//div> <//div><div>
                </div> </div> </div><label className="block text-white font-medium mb-2">Target Audienc</label className="block text-white font-medium mb-2">e</label className="block text-white font-medium mb-2"><input
                    type="text"
                    value={targetAudience}
                    onChange={(e) =>setTargetAudience(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                    placeholder="e.g., CTOs, Marketing Director</input
                    type="text"
                    value={targetAudience}
                    onChange={(e) =>s</input
                    type="text"
                    value={targetAudience}
                    onChange={(e) =>"</input>
                  <//input>/<//input>></input>
              <//input> <//input> </div>
               <//div> <//div><div>
                </div> </div> </div><label className="block text-white font-medium mb-2">Budget Rang</label className="block text-white font-medium mb-2">e</label className="block text-white font-medium mb-2"><select
                    value={budget}
                    onChange={(e) =>setBudget(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-non</select
                    value={budget}
                    onChange={(e) =>e</select
                    value={budget}
                    onChange={(e) =>"</select>
                 <//select> <//select>></select>
                   <//select> <//select><option value="">Select budget..</option value="">.</option value=""><option value="under-10k">Under $1</option value="under-10k">0</option value="under-10k">K</option>
                   <//option> <//option><option value="10k-50k">$10K - $50</option value="10k-50k">K</option value="10k-50k"><option value="50k-100k">$50K - $100</option value="50k-100k">K</option value="50k-100k"><option value="over-100k">Over $100</option value="over-100k">K</option value="over-100k"><button className="cyber-button w-full">Generate Lea</button className="cyber-button w-full">d</button className="cyber-button w-full">s</button>
            <//button> <//button> </button>
          <//button> <//button> </div>
        <//div> <//div> </div>

         <//div> <//div><div className="cyber-card p-8 mb-8">
          </div className="cyber-card p-8 mb-8"> </div className="cyber-card p-8 mb-8"> </div><h2 className="text-2xl font-bold text-white mb-6">AI-Powered Featur</h2 className="text-2xl font-bold text-white mb-6">e</h2 className="text-2xl font-bold text-white mb-6">s</h2>
           <//h2> <//h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-6"> </div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div className="space-y-4">
               </div className="space-y-4"> </div className="space-y-4"><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Intelligent prospect</span className="text-gray-300">i</span className="text-gray-300">n</span>g</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Lead scor</span className="text-gray-300">i</span className="text-gray-300">n</span>g</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Email sequen</span className="text-gray-300">c</span className="text-gray-300">e</span>s</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Social media target</span className="text-gray-300">i</span className="text-gray-300">n</span>g</span>
              <//span> <//span> </div>
            <//div> <//div> </div>
             <//div> <//div><div className="space-y-4">
               </div className="space-y-4"> </div className="space-y-4"><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">CRM integrat</span className="text-gray-300">i</span className="text-gray-300">o</span>n</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">Performance track</span className="text-gray-300">i</span className="text-gray-300">n</span>g</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">A/B test</span className="text-gray-300">i</span className="text-gray-300">n</span>g</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">Compliance monitor</span className="text-gray-300">i</span className="text-gray-300">n</span>g</span>
              <//span> <//span> </div>
            <//div> <//div> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>

         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
           </div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> </div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"><div className="cyber-card p-6 text-center">
            </div className="cyber-card p-6 text-center"> </div className="cyber-card p-6 text-center"> </div><h3 className="text-xl font-bold text-white mb-4">Starte</h3 className="text-xl font-bold text-white mb-4">r</h3 className="text-xl font-bold text-white mb-4"><div className="text-3xl font-bold text-cyan-400 mb-4">$199/mo</div className="text-3xl font-bold text-cyan-400 mb-4">n</div className="text-3xl font-bold text-cyan-400 mb-4">t</div>h</div>
             <//div> <//div><ul className="text-gray-300 space-y-2">
               </ul className="text-gray-300 space-y-2"> </ul className="text-gray-300 space-y-2"><li>100 leads/mont</li>h</li><li>Basic targeti</li>n</li>g</li>
               <//li> <//li><li>Email sequence</li>s</li><li>Email suppo</li>r</li>t</li>
            <//li> <//li> </ul>
          <//ul> <//ul> </div>
           <//div> <//div><div className="cyber-card p-6 text-center border-2 border-cyan-400">
            </div className="cyber-card p-6 text-center border-2 border-cyan-400"> </div className="cyber-card p-6 text-center border-2 border-cyan-400"> </div><h3 className="text-xl font-bold text-white mb-4">Professiona</h3 className="text-xl font-bold text-white mb-4">l</h3 className="text-xl font-bold text-white mb-4"><div className="text-3xl font-bold text-cyan-400 mb-4">$599/mo</div className="text-3xl font-bold text-cyan-400 mb-4">n</div className="text-3xl font-bold text-cyan-400 mb-4">t</div>h</div>
             <//div> <//div><ul className="text-gray-300 space-y-2">
               </ul className="text-gray-300 space-y-2"> </ul className="text-gray-300 space-y-2"><li>1,000 leads/mont</li>h</li><li>Advanced AI targeti</li>n</li>g</li>
               <//li> <//li><li>Multi-channel campaign</li>s</li><li>Priority suppor</li>t</li><li>Analytics dashboa</li>r</li>d</li>
            <//li> <//li> </ul>
          <//ul> <//ul> </div>
           <//div> <//div><div className="cyber-card p-6 text-center">
            </div className="cyber-card p-6 text-center"> </div className="cyber-card p-6 text-center"> </div><h3 className="text-xl font-bold text-white mb-4">Enterpris</h3 className="text-xl font-bold text-white mb-4">e</h3 className="text-xl font-bold text-white mb-4"><div className="text-3xl font-bold text-cyan-400 mb-4">$1,499/mo</div className="text-3xl font-bold text-cyan-400 mb-4">n</div className="text-3xl font-bold text-cyan-400 mb-4">t</div>h</div>
             <//div> <//div><ul className="text-gray-300 space-y-2">
               </ul className="text-gray-300 space-y-2"> </ul className="text-gray-300 space-y-2"><li>Unlimited lead</li>s</li><li>Custom AI mode</li>l</li>s</li>
               <//li> <//li><li>White-label optio</li>n</li><li>24/7 suppor</li>t</li><li>Dedicated manag</li>e</li>r</li>
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
            >Start Generati</a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >n</a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >g</a>
          <//a> <//a> </a>
        <//a> <//a> </div>
      <//div> <//div> </div>
    <//div> <//div> </main>

     <//main> <//main><Footer />
  </Footer /> </Footer /> </div>
  );
};

export default AILeadGeneration<//div>;<//div>