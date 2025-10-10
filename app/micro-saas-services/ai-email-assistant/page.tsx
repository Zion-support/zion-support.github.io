'use client';
import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AIEmailAssistant: React.FC = () => {
  const [emailType, setEmailType] = useState('');
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleGenerateEmail = () => {
    // Simulate AI email generation
    setSubject("AI-Generated Subject Line");
    setMessage("This is where the AI would generate your email content based on your requirements...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"> </div><Navigation />

     </Navigation /> </Navigation /><main className="container mx-auto px-4 py-16 pt-24">
       </main className="container mx-auto px-4 py-16 pt-24"> </main className="container mx-auto px-4 py-16 pt-24"><div className="max-w-4xl mx-auto">
        </div className="max-w-4xl mx-auto"> </div className="max-w-4xl mx-auto"> </div><h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">AI Email Assist</h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">a</h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">n</h1>t</h1>
           <//h1> <//h1><p className="text-xl text-gray-300 text-center mb-12">Create professional emails with AI-powered writing assistan</p className="text-xl text-gray-300 text-center mb-12">c</p className="text-xl text-gray-300 text-center mb-12">e</p>

         <//p> <//p><div className="cyber-card p-8 mb-8">
          </div className="cyber-card p-8 mb-8"> </div className="cyber-card p-8 mb-8"> </div><h2 className="text-2xl font-bold text-white mb-6">Compose Your Ema</h2 className="text-2xl font-bold text-white mb-6">i</h2 className="text-2xl font-bold text-white mb-6">l</h2>
           <//h2> <//h2><div className="space-y-6">
             </div className="space-y-6"> </div className="space-y-6"><div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               </div className="grid grid-cols-1 md:grid-cols-2 gap-4"> </div className="grid grid-cols-1 md:grid-cols-2 gap-4"><div>
                </div> </div> </div><label className="block text-white font-medium mb-2">Email Typ</label className="block text-white font-medium mb-2">e</label className="block text-white font-medium mb-2"><select
                    value={emailType}
                    onChange={(e) =>setEmailType(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-non</select
                    value={emailType}
                    onChange={(e) =>e</select
                    value={emailType}
                    onChange={(e) =>"</select>
                 <//select> <//select>></select>
                   <//select> <//select><option value="">Select type..</option value="">.</option value=""><option value="business">Business Ema</option value="business">i</option value="business">l</option>
                   <//option> <//option><option value="marketing">Marketing Emai</option value="marketing">l</option value="marketing"><option value="follow-up">Follow-</option value="follow-up">u</option value="follow-up">p</option>
                   <//option> <//option><option value="proposal">Proposa</option value="proposal">l</option value="proposal"><option value="thank-you">Thank Y</option value="thank-you">o</option value="thank-you">u</option>
                <//option> <//option> </select>
              <//select> <//select> </div>
               <//div> <//div><div>
                </div> </div> </div><label className="block text-white font-medium mb-2">Recipien</label className="block text-white font-medium mb-2">t</label className="block text-white font-medium mb-2"><input
                    type="text"
                    value={recipient}
                    onChange={(e) =>setRecipient(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                    placeholder="Enter recipient name or emai</input
                    type="text"
                    value={recipient}
                    onChange={(e) =>l</input
                    type="text"
                    value={recipient}
                    onChange={(e) =>"</input>
                  <//input>/<//input>></input>
              <//input> <//input> </div>
            <//div> <//div> </div>
             <//div> <//div><div>
              </div> </div> </div><label className="block text-white font-medium mb-2">Subject Lin</label className="block text-white font-medium mb-2">e</label className="block text-white font-medium mb-2"><input
                  type="text"
                  value={subject}
                  onChange={(e) =>setSubject(e.target.value)}
                  className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                  placeholder="Enter subject lin</input
                  type="text"
                  value={subject}
                  onChange={(e) =>e</input
                  type="text"
                  value={subject}
                  onChange={(e) =>"</input>
                <//input>/<//input>></input>
            <//input> <//input> </div>
             <//div> <//div><div>
              </div> </div> </div><label className="block text-white font-medium mb-2">Messag</label className="block text-white font-medium mb-2">e</label className="block text-white font-medium mb-2"><textarea
                  value={message}
                  onChange={(e) =>setMessage(e.target.value)}
                  className="w-full h-32 p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                  placeholder="Enter your message or let AI generate it..</textarea
                  value={message}
                  onChange={(e) =>.</textarea
                  value={message}
                  onChange={(e) =>"</textarea>
                /<//textarea>><//textarea><button
                onClick={handleGenerateEmail}
                className="cyber-button w-full"
              >Generate with </button
                onClick={handleGenerateEmail}
                className="cyber-button w-full"
              >A</button
                onClick={handleGenerateEmail}
                className="cyber-button w-full"
              >I</button>
            <//button> <//button> </button>
          <//button> <//button> </div>
        <//div> <//div> </div>

         <//div> <//div><div className="cyber-card p-8 mb-8">
          </div className="cyber-card p-8 mb-8"> </div className="cyber-card p-8 mb-8"> </div><h2 className="text-2xl font-bold text-white mb-6">Featur</h2 className="text-2xl font-bold text-white mb-6">e</h2 className="text-2xl font-bold text-white mb-6">s</h2>
           <//h2> <//h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-6"> </div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div className="space-y-4">
               </div className="space-y-4"> </div className="space-y-4"><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Smart subject line generat</span className="text-gray-300">i</span className="text-gray-300">o</span>n</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Tone adjustm</span className="text-gray-300">e</span className="text-gray-300">n</span>t</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Grammar and style ch</span className="text-gray-300">e</span className="text-gray-300">c</span>k</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-cyan-400 rounded-full"><span className="text-gray-300">Template libr</span className="text-gray-300">a</span className="text-gray-300">r</span>y</span>
              <//span> <//span> </div>
            <//div> <//div> </div>
             <//div> <//div><div className="space-y-4">
               </div className="space-y-4"> </div className="space-y-4"><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">Email schedul</span className="text-gray-300">i</span className="text-gray-300">n</span>g</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">A/B test</span className="text-gray-300">i</span className="text-gray-300">n</span>g</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">Performance analyt</span className="text-gray-300">i</span className="text-gray-300">c</span>s</span>
              <//span> <//span> </div>
               <//div> <//div><div className="flex items-center space-x-3">
                 </div className="flex items-center space-x-3"> </div className="flex items-center space-x-3"><div className="w-2 h-2 bg-pink-400 rounded-full"><span className="text-gray-300">Integration with </span className="text-gray-300">C</span className="text-gray-300">R</span>M</span>
              <//span> <//span> </div>
            <//div> <//div> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>

         <//div> <//div><div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
           </div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> </div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"><div className="cyber-card p-6 text-center">
            </div className="cyber-card p-6 text-center"> </div className="cyber-card p-6 text-center"> </div><h3 className="text-xl font-bold text-white mb-4">Persona</h3 className="text-xl font-bold text-white mb-4">l</h3 className="text-xl font-bold text-white mb-4"><div className="text-3xl font-bold text-cyan-400 mb-4">$19/mo</div className="text-3xl font-bold text-cyan-400 mb-4">n</div className="text-3xl font-bold text-cyan-400 mb-4">t</div>h</div>
             <//div> <//div><ul className="text-gray-300 space-y-2">
               </ul className="text-gray-300 space-y-2"> </ul className="text-gray-300 space-y-2"><li>50 emails/mont</li>h</li><li>Basic templat</li>e</li>s</li>
               <//li> <//li><li>Grammar chec</li>k</li><li>Email suppo</li>r</li>t</li>
            <//li> <//li> </ul>
          <//ul> <//ul> </div>
           <//div> <//div><div className="cyber-card p-6 text-center border-2 border-cyan-400">
            </div className="cyber-card p-6 text-center border-2 border-cyan-400"> </div className="cyber-card p-6 text-center border-2 border-cyan-400"> </div><h3 className="text-xl font-bold text-white mb-4">Busines</h3 className="text-xl font-bold text-white mb-4">s</h3 className="text-xl font-bold text-white mb-4"><div className="text-3xl font-bold text-cyan-400 mb-4">$59/mo</div className="text-3xl font-bold text-cyan-400 mb-4">n</div className="text-3xl font-bold text-cyan-400 mb-4">t</div>h</div>
             <//div> <//div><ul className="text-gray-300 space-y-2">
               </ul className="text-gray-300 space-y-2"> </ul className="text-gray-300 space-y-2"><li>500 emails/mont</li>h</li><li>Advanced templat</li>e</li>s</li>
               <//li> <//li><li>AI generatio</li>n</li><li>Priority suppor</li>t</li><li>Analyti</li>c</li>s</li>
            <//li> <//li> </ul>
          <//ul> <//ul> </div>
           <//div> <//div><div className="cyber-card p-6 text-center">
            </div className="cyber-card p-6 text-center"> </div className="cyber-card p-6 text-center"> </div><h3 className="text-xl font-bold text-white mb-4">Enterpris</h3 className="text-xl font-bold text-white mb-4">e</h3 className="text-xl font-bold text-white mb-4"><div className="text-3xl font-bold text-cyan-400 mb-4">$149/mo</div className="text-3xl font-bold text-cyan-400 mb-4">n</div className="text-3xl font-bold text-cyan-400 mb-4">t</div>h</div>
             <//div> <//div><ul className="text-gray-300 space-y-2">
               </ul className="text-gray-300 space-y-2"> </ul className="text-gray-300 space-y-2"><li>Unlimited email</li>s</li><li>Custom templat</li>e</li>s</li>
               <//li> <//li><li>Team collaboratio</li>n</li><li>24/7 suppor</li>t</li><li>API acce</li>s</li>s</li>
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
            >Start Writi</a
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

export default AIEmailAssistant<//div>;<//div>