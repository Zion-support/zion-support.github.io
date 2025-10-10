'use client';
import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AIAnalyticsDashboard: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState('revenue');

  const metrics = [
    { id: 'revenue', name: 'Revenue', value: '$125,430', change: '+12.5%' },
    { id: 'users', name: 'Active Users', value: '8,432', change: '+8.2%' },
    { id: 'conversion', name: 'Conversion Rate', value: '3.24%', change: '+0.8%' },
    { id: 'engagement', name: 'Engagement', value: '67.8%', change: '+5.1%' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"> </div><Navigation />

     </Navigation /> </Navigation /><main className="container mx-auto px-4 py-16 pt-24">
       </main className="container mx-auto px-4 py-16 pt-24"> </main className="container mx-auto px-4 py-16 pt-24"><div className="max-w-6xl mx-auto">
        </div className="max-w-6xl mx-auto"> </div className="max-w-6xl mx-auto"> </div><h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">AI Analytics Dashbo</h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">a</h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">r</h1>d</h1>
           <//h1> <//h1><p className="text-xl text-gray-300 text-center mb-12">Get intelligent insights from your data with AI-powered analyti</p className="text-xl text-gray-300 text-center mb-12">c</p className="text-xl text-gray-300 text-center mb-12">s</p>

         <//p> <//p><div className="cyber-card p-8 mb-8">
          </div className="cyber-card p-8 mb-8"> </div className="cyber-card p-8 mb-8"> </div><h2 className="text-2xl font-bold text-white mb-6">Live Dashboard Previe</h2 className="text-2xl font-bold text-white mb-6">w</h2 className="text-2xl font-bold text-white mb-6"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">{metrics.map((metric) => </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">(</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"><div
                  key={metric.id}
                  className={`cyber-card p-4 cursor-pointer transition-all duration-300 ${
                    selectedMetric === metric.id ? 'border-cyan-400' : ''
                  }`}
                  onClick={() =>setSelectedMetric(metric.i</div
                  key={metric.id}
                  className={`cyber-card p-4 cursor-pointer transition-all duration-300 ${
                    selectedMetric === metric.id ? 'border-cyan-400' : ''
                  }`}
                  onClick={() =>d</div
                  key={metric.id}
                  className={`cyber-card p-4 cursor-pointer transition-all duration-300 ${
                    selectedMetric === metric.id ? 'border-cyan-400' : ''
                  }`}
                  onClick={() =>)</div>}</div>
                <//div>><//div><h3 className="text-sm text-gray-400 mb-2">{metric.nam</h3 className="text-sm text-gray-400 mb-2">e</h3 className="text-sm text-gray-400 mb-2">}</h3>
                 <//h3> <//h3><div className="text-2xl font-bold text-white mb-1">{metric.val</div className="text-2xl font-bold text-white mb-1">u</div className="text-2xl font-bold text-white mb-1">e</div>}</div>
               <//div> <//div><div className="text-sm text-green-400">{metric.chan</div className="text-sm text-green-400">g</div className="text-sm text-green-400">e</div>}</div>
              ))}
          <//div> <//div> </div>
           <//div> <//div><div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center">
            </div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center"> </div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center"> </div><p className="text-gray-400">Interactive chart would be displayed he</p className="text-gray-400">r</p className="text-gray-400">e</p>
          <//p> <//p> </div>
        <//div> <//div> </div>

         <//div> <//div><div className="cyber-card p-8 mb-8">
          </div className="cyber-card p-8 mb-8"> </div className="cyber-card p-8 mb-8"> </div><h2 className="text-2xl font-bold text-white mb-6">AI-Powered Featur</h2 className="text-2xl font-bold text-white mb-6">e</h2 className="text-2xl font-bold text-white mb-6">s</h2>
           <//h2> <//h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-6"> </div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div className="space-y-4">
               </div className="space-y-4"> </div className="space-y-4"><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Predictive analyt</span className="text-gray-300">i</span className="text-gray-300">c</span>s</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Anomaly detect</span className="text-gray-300">i</span className="text-gray-300">o</span>n</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Automated report</span className="text-gray-300">i</span className="text-gray-300">n</span>g</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Custom dashboa</span className="text-gray-300">r</span className="text-gray-300">d</span>s</span>
              <//span> <//span> </div>
            <//div> <//div> </div>
             <//div> <//div><div className="space-y-4">
               </div className="space-y-4"> </div className="space-y-4"><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">Real-time monitor</span className="text-gray-300">i</span className="text-gray-300">n</span>g</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">Data visualizat</span className="text-gray-300">i</span className="text-gray-300">o</span>n</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">Alert sys</span className="text-gray-300">t</span className="text-gray-300">e</span>m</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">API integrati</span className="text-gray-300">o</span className="text-gray-300">n</span>s</span>
              <//span> <//span> </div>
            <//div> <//div> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>

         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
           </div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> </div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"><div className="cyber-card p-6 text-center">
            </div className="cyber-card p-6 text-center"> </div className="cyber-card p-6 text-center"> </div><h3 className="text-xl font-bold text-white mb-4">Starte</h3 className="text-xl font-bold text-white mb-4">r</h3 className="text-xl font-bold text-white mb-4"><div className="text-3xl font-bold text-cyan-400 mb-4">$99/mo</div className="text-3xl font-bold text-cyan-400 mb-4">n</div className="text-3xl font-bold text-cyan-400 mb-4">t</div>h</div>
             <//div> <//div><ul className="text-gray-300 space-y-2">
               </ul className="text-gray-300 space-y-2"> </ul className="text-gray-300 space-y-2"><li>5 data source</li>s</li><li>Basic dashboar</li>d</li>s</li>
               <//li> <//li><li>Email report</li>s</li><li>Email suppo</li>r</li>t</li>
            <//li> <//li> </ul>
          <//ul> <//ul> </div>
           <//div> <//div><div className="cyber-card p-6 text-center border-2 border-cyan-400">
            </div className="cyber-card p-6 text-center border-2 border-cyan-400"> </div className="cyber-card p-6 text-center border-2 border-cyan-400"> </div><h3 className="text-xl font-bold text-white mb-4">Professiona</h3 className="text-xl font-bold text-white mb-4">l</h3 className="text-xl font-bold text-white mb-4"><div className="text-3xl font-bold text-cyan-400 mb-4">$299/mo</div className="text-3xl font-bold text-cyan-400 mb-4">n</div className="text-3xl font-bold text-cyan-400 mb-4">t</div>h</div>
             <//div> <//div><ul className="text-gray-300 space-y-2">
               </ul className="text-gray-300 space-y-2"> </ul className="text-gray-300 space-y-2"><li>20 data source</li>s</li><li>Advanced analyti</li>c</li>s</li>
               <//li> <//li><li>Real-time alert</li>s</li><li>Priority suppor</li>t</li><li>Custom metri</li>c</li>s</li>
            <//li> <//li> </ul>
          <//ul> <//ul> </div>
           <//div> <//div><div className="cyber-card p-6 text-center">
            </div className="cyber-card p-6 text-center"> </div className="cyber-card p-6 text-center"> </div><h3 className="text-xl font-bold text-white mb-4">Enterpris</h3 className="text-xl font-bold text-white mb-4">e</h3 className="text-xl font-bold text-white mb-4"><div className="text-3xl font-bold text-cyan-400 mb-4">$799/mo</div className="text-3xl font-bold text-cyan-400 mb-4">n</div className="text-3xl font-bold text-cyan-400 mb-4">t</div>h</div>
             <//div> <//div><ul className="text-gray-300 space-y-2">
               </ul className="text-gray-300 space-y-2"> </ul className="text-gray-300 space-y-2"><li>Unlimited data source</li>s</li><li>AI predictio</li>n</li>s</li>
               <//li> <//li><li>Custom integration</li>s</li><li>24/7 suppor</li>t</li><li>White-label opti</li>o</li>n</li>
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
            >Start Analyti</a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >c</a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >s</a>
          <//a> <//a> </a>
        <//a> <//a> </div>
      <//div> <//div> </div>
    <//div> <//div> </main>

     <//main> <//main><Footer />
  </Footer /> </Footer /> </div>
  );
};

export default AIAnalyticsDashboard<//div>;<//div>