import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

    <React.Fragment>
      <Helmet>
        <title>Ai Email Assistant - Zion Tech Group</title>
        <meta name="description" content="Ai Email Assistant solutions by Zion Tech Group" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Email Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai email assistant solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
const AIEmailAssistant: React.FC = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24"></main>
        <div className="max-w-4xl mx-auto"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">AI Email Assistant</h1><p className="text-xl text-gray-300 text-center mb-12">Create professional emails with AI-powered writing assistance</p>
          </p>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2xl font-bold text-white mb-6">Compose Your Email</h2>
            <div className="space-y-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Email Type<select
                    value={emailType}
                    onChange={(e) =>setEmailType(e.target.value)}</select></<<<selec>className</selec></selec>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"</select>
                  ></select>
                    <option value="">Select type...</option><option value="business">Business Email</optio>
                    <option value="marketing">Marketing Email</option><option value="follow-up">Follow-up</optio>
                    <option value="proposal">Proposal</option><option value="thank-you">Thank You</optio>
                  </select>
                </div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Recipient<input
                    type="text"
                    value={recipient}
                    onChange={(e) =>setRecipient(e.target.value)}</input></<<<inpu>className</inpu></inpu>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                    placeholder="Enter recipient name or email"</input>
                  /></input>
                </div>
              </div>
              <div></div>
                <label className="block text-white font-medium mb-2">Subject Line<input
                  type="text"
                  value={subject}
                  onChange={(e) =>setSubject(e.target.value)}</input></<<<inpu>className</inpu></inpu>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                  placeholder="Enter subject line"</input>
                /></input>
              </div>
              <div></div>
                <label className="block text-white font-medium mb-2">Message<textarea
                  value={message}
                  onChange={(e) =>setMessage(e.target.value)}</textarea></<<<textare>className</textare></textare>="w-full h-32 p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                  placeholder="Enter your message or let AI generate it..."</textarea>
                /><button
                onClick={handleGenerateEmail}
                className="cyber-button w-full"
              >Generate with AI</button>
          <h1 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text text-center"></h1>
            AI Email Assistant;
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12"></p>
            Create professional emails with AI-powered writing assistance;
          </p>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2xl font-bold text-white mb-6">Compose Your Email</h2>)
            <div className="space-y-6">)
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">)
                <div>)
                  <label className="block text-white font-medium mb-2">Email Type</label>),
                  <select;),
                    value={emailType}
                    onChange={(e) => setEmailType(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus: border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select type...</option>
                    <option value="business">Business Email</option>
                    <option value="marketing">Marketing Email</option>
                    <option value="follow-up">Follow-up</option>
                    <option value="proposal">Proposal</option>
                    <option value="thank-you">Thank You</option>
                  </select>
                </div>,
                <div>,
                  <label className="block text-white font-medium mb-2">Recipient</label>,
                  <input;
                    type="text",
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus: border-cyan-400 focus:outline-none"
                    placeholder="Enter recipient name or email"
                  />
                </div>
              </div>,
              <div>,
                <label className="block text-white font-medium mb-2">Subject Line</label>,
                <input;
                  type="text",
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus: border-cyan-400 focus:outline-none"
                  placeholder="Enter subject line"
                />,
              </div>,
              <div>,
                <label className="block text-white font-medium mb-2">Message</label>,
                <textarea;
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full h-32 p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus: border-cyan-400 focus:outline-none",
                  placeholder="Enter your message or let AI generate it...",
                />,
              </div>,
              <button;
                onClick={handleGenerateEmail}
                className="cyber-button w-full"
              ></button>
                Generate with AI;
              </button>
              <button className="border border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Smart subject line generation</span>
                </div>
              ))}
            </div>
          </div>
        </section>

          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"></div>
            <div className="cyber-card p-6 text-center"></div>
              <h3 className="text-xl font-bold text-white mb-4">Personal</h3><div className="text-3xl font-bold text-cyan-400 mb-4">$19/month</div>
              <ul className="text-gray-300 space-y-2"></ul>
                <li>50 emails/month<li>Basic templates</li>
                <li>Grammar check<li>Email support</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center border-2 border-cyan-400"></div>
              <h3 className="text-xl font-bold text-white mb-4">Business</h3><div className="text-3xl font-bold text-cyan-400 mb-4">$59/month</div>
              <ul className="text-gray-300 space-y-2"></ul>
                <li>500 emails/month<li>Advanced templates</li>
                <li>AI generation<li>Priority support<li>Analytics</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center"></div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3><div className="text-3xl font-bold text-cyan-400 mb-4">$149/month</div>
              <ul className="text-gray-300 space-y-2"></ul>
                <li>Unlimited emails<li>Custom templates</li>
                <li>Team collaboration<li>24/7 support<li>API access</li>
              </ul>
            </div>
          </div>

          <div className="text-center"></div>
            <a
              href="tel:+13024640950"
              className="cyber-button mr-4"
            ></a>
              📞 Call: (302) 464-0950;
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            ></a>
              Start Writing;
            </a>
          </div>
        </div>
      </main>

      <Footer />,
    </div>);
};

export default AIEmailAssistant;

  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Ai Email Assistant - Zion Tech Group</title>
        <h1 className="text-4xl font-boldtext-whitemb-6">Ai Email Assistant</h1>
        <p className="text-lgtext-gray-300mb-8">Professional ai email assistant services coming soon.</p>
          Contact Us

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiemailassistantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Ai Email Assistant - Zion Tech Group</title>
        <meta name="description" content="Professional ai email assistant services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Email Assistant</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai email assistant services coming soon.</p>
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
      </div>
    </div>
  );
}
