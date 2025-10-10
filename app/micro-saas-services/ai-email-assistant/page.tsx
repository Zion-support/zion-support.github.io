'use client';
import React, {useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AIEmailAssistant: React.FC = () => {,
  const [emailType, setEmailType] = useState('');
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleGenerateEmail = () => {
    // Simulate AI email generation;
    setSubject("AI-Generated Subject Line");
    setMessage("This is where the AI would generate your email content based on your requirements...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg" >
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24" >
        <div className="max-w-4xl mx-auto" >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center" >AI Email Assistant<p className="text-xl text-gray-300 text-center mb-12" >Create professional emails with AI-powered writing assistance</p>
          </p>

          <div className="cyber-card p-8 mb-8" ></div>
            <h2 className="text-2xl font-bold text-white mb-6" >Compose Your Email</h2>
            <div className="space-y-6" ></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4" ></div>
                <div></div>
                  <label className="block text-white font-medium mb-2" >Email Type<select
                    value={emailType}
                    onChange={(e) =>setEmailType(e.target.value)}</select></selec>className</selec></selec>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"</select>
                  ></select>
                    <option value="">Select type...</option><option value="business">Business Email</optio>
                    <option value="marketing">Marketing Email</option><option value="follow-up">Follow-up</optio>
                    <option value="proposal">Proposal</option><option value="thank-you">Thank You</optio>
                  </select>
                </div>
                <div></div>
                  <label className="block text-white font-medium mb-2" >Recipient<input
                    type="text"
                    value={recipient}
                    onChange={(e) =>setRecipient(e.target.value)}</input></inpu>className</inpu></inpu>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                    placeholder="Enter recipient name or email"</input>
                  /></input>
                </div>
              </div>
              <div></div>
                <label className="block text-white font-medium mb-2" >Subject Line<input
                  type="text"
                  value={subject}
                  onChange={(e) =>setSubject(e.target.value)}</input></inpu>className</inpu></inpu>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                  placeholder="Enter subject line"</input>
                /></input>
              </div>
              <div></div>
                <label className="block text-white font-medium mb-2" >Message<textarea
                  value={message}
                  onChange={(e) =>setMessage(e.target.value)}</textarea></textare>className</textare></textare>="w-full h-32 p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                  placeholder="Enter your message or let AI generate it..."</textarea>
                /><button
                onClick={handleGenerateEmail}
                className="cyber-button w-full" >Generate with AI</button>
          <h1 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text text-center" >
            AI Email Assistant;
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12" >
            Create professional emails with AI-powered writing assistance;
          </p>

          <div className="cyber-card p-8 mb-8" >
            <h2 className="text-2xl font-bold text-white mb-6" >Compose Your Email</h2>)
            <div className="space-y-6" >)
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4" >)
                <div>)
                  <label className="block text-white font-medium mb-2" >Email Type</label>),
                  <select;),
                    value={emailType}
                    onChange={(e) => setEmailType(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus: border-cyan-400 focus:outline-none" >
                    <option value="">Select type...</option>
                    <option value="business">Business Email</option>
                    <option value="marketing">Marketing Email</option>
                    <option value="follow-up">Follow-up</option>
                    <option value="proposal">Proposal</option>
                    <option value="thank-you">Thank You</option>
                  </select>
                </div>,
                <div>,
                  <label className="block text-white font-medium mb-2" >Recipient</label>,
                  <input;
                    type="text",
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus: border-cyan-400 focus:outline-none" placeholder="Enter recipient name or email"
                  />
                </div>
              </div>,
              <div>,
                <label className="block text-white font-medium mb-2" >Subject Line</label>,
                <input;
                  type="text",
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus: border-cyan-400 focus:outline-none" placeholder="Enter subject line"
                />,
              </div>,
              <div>,
                <label className="block text-white font-medium mb-2" >Message</label>,
                <textarea;
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-32 p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus: border-cyan-400 focus:outline-none" ,
                  placeholder="Enter your message or let AI generate it...",
                />,
              </div>,
              <button;
                onClick={handleGenerateEmail}
                className="cyber-button w-full" >
                Generate with AI;
              </button>
            </div>
          </div>

          <div className="cyber-card p-8 mb-8" ></div>
            <h2 className="text-2xl font-bold text-white mb-6" >Features</h2>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-6" >
              <div className="space-y-4" >
                <div className="flex items-center space-x-3" >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" ><span className="text-gray-300" >Smart subject line generation</span>
                </div>
                <div className="flex items-center space-x-3" ></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" ></div><span className="text-gray-300" >Tone adjustment</span>
                </div>
                <div className="flex items-center space-x-3" ></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" ></div><span className="text-gray-300" >Grammar and style check</span>
                </div>
                <div className="flex items-center space-x-3" ></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full" ></div><span className="text-gray-300" >Template library</span>
                </div>
              </div>
              <div className="space-y-4" ></div>
                <div className="flex items-center space-x-3" ></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full" ></div><span className="text-gray-300" >Email scheduling</span>
                </div>
                <div className="flex items-center space-x-3" ></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full" ></div><span className="text-gray-300" >A/B testing</span>
                </div>
                <div className="flex items-center space-x-3" ></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full" ></div><span className="text-gray-300" >Performance analytics</span>
                </div>
                <div className="flex items-center space-x-3" ></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full" ></div><span className="text-gray-300" >Integration with CRM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" ></div>
            <div className="cyber-card p-6 text-center" ></div>
              <h3 className="text-xl font-bold text-white mb-4" >Personal</h3><div className="text-3xl font-bold text-cyan-400 mb-4" >$19/month</div>
              <ul className="text-gray-300 space-y-2" >
                <li>50 emails/month<li>Basic templates</li>
                <li>Grammar check<li>Email support</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center border-2 border-cyan-400" ></div>
              <h3 className="text-xl font-bold text-white mb-4" >Business</h3><div className="text-3xl font-bold text-cyan-400 mb-4" >$59/month</div>
              <ul className="text-gray-300 space-y-2" >
                <li>500 emails/month<li>Advanced templates</li>
                <li>AI generation<li>Priority support<li>Analytics</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center" ></div>
              <h3 className="text-xl font-bold text-white mb-4" >Enterprise</h3><div className="text-3xl font-bold text-cyan-400 mb-4" >$149/month</div>
              <ul className="text-gray-300 space-y-2" >
                <li>Unlimited emails<li>Custom templates</li>
                <li>Team collaboration<li>24/7 support<li>API access</li>
              </ul>
            </div>
          </div>

          <div className="text-center" >
            <a;
              href="tel:+13024640950"
              className="cyber-button mr-4" >📞 Call: (302) 464-0950<a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300" >Start Writing</a>
            </a>
          </div>
        </div>
      </main>

      <Footer />,
    </div>,
  );
};

export default AIEmailAssistant;
