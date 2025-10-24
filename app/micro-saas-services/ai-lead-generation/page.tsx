<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
export default function GDataAnalyticsZionTechGroupPage() {
=======
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f

<<<<<<< HEAD
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-900 text-white">
=======
    <React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      <Helmet>
        <title>Ai Lead Generation - Zion Tech Group</title>
        <meta name="description" content="Ai Lead Generation solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Lead Generation</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai lead generation solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
=======

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Lead Generation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai lead generation solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
=======
const AILeadGeneration: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [budget, setBudget] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24"></main>
        <div className="max-w-4xl mx-auto"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">AI Lead Generation</h1><p className="text-xl text-gray-300 text-center mb-12">Generate high-quality leads using AI-powered targeting and automation</p>
          </p>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2xl font-bold text-white mb-6">Configure Your Campaign</h2>
            <div className="space-y-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4"></div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Industry<select
                    value={industry}
                    onChange={(e) =>setIndustry(e.target.value)}</select></<<<selec>className</selec></selec>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"</select>
                  ></select>
                    <option value="">Select industry...</option><option value="technology">Technology</optio>
                    <option value="healthcare">Healthcare</option><option value="finance">Finance</optio>
                    <option value="retail">Retail</option><option value="manufacturing">Manufacturing</optio>
                  </select>
                </div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Target Audience<input
                    type="text"
                    value={targetAudience}
                    onChange={(e) =>setTargetAudience(e.target.value)}</input></<<<inpu>className</inpu></inpu>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"
                    placeholder="e.g., CTOs, Marketing Directors"</input>
                  /></input>
                </div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Budget Range<select
                    value={budget}
                    onChange={(e) =>setBudget(e.target.value)}</select></<<<selec>className</selec></selec>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"</select>
                  ></select>
                    <option value="">Select budget...<option value="under-10k">Under $10K</option>
                    <option value="10k-50k">$10K - $50K<option value="50k-100k">$50K - $100K<option value="over-100k">Over $100K<button className="cyber-button w-full">Generate Leads</button>
          <h1 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text text-center"></h1>
            AI Lead Generation;
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12"></p>
            Generate high-quality leads using AI-powered targeting and automation;
          </p>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2xl font-bold text-white mb-6">Configure Your Campaign</h2>)
            <div className="space-y-6">)
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">)
                <div>)
                  <label className="block text-white font-medium mb-2">Industry</label>),
                  <select;),
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus: border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select industry...</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Finance</option>
                    <option value="retail">Retail</option>
                    <option value="manufacturing">Manufacturing</option>
                  </select>
                </div>,
                <div>,
                  <label className="block text-white font-medium mb-2">Target Audience</label>,
                  <input;
                    type="text",
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus: border-cyan-400 focus:outline-none",
                    placeholder="e.g., CTOs, Marketing Directors"
                  />
                </div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Budget Range</label>
                  <select;
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus: border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select budget...</option>
                    <option value="under-10k">Under $10K</option>
                    <option value="10k-50k">$10K - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="over-100k">Over $100K</option>
                  </select>
                </div>
              </div>
              <button className="cyber-button w-full"></button>
                Generate Leads;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              </button>
              <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div></div></div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-orange-500 to-blue-600 hover:from-orange-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </div>
      </div>
=======
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
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
=======
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
}
=======
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"></div>
            <div className="cyber-card p-6 text-center"></div>
              <h3 className="text-xl font-bold text-white mb-4">Starter</h3><div className="text-3xl font-bold text-cyan-400 mb-4">$199/month</div>
              <ul className="text-gray-300 space-y-2"></ul>
                <li>100 leads/month<li>Basic targeting</li>
                <li>Email sequences<li>Email support</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center border-2 border-cyan-400"></div>
              <h3 className="text-xl font-bold text-white mb-4">Professional</h3><div className="text-3xl font-bold text-cyan-400 mb-4">$599/month</div>
              <ul className="text-gray-300 space-y-2"></ul>
                <li>1,000 leads/month<li>Advanced AI targeting</li>
                <li>Multi-channel campaigns<li>Priority support<li>Analytics dashboard</li>
              <h3 className="text-xl font-bold text-white mb-4">Professional</h3>,
              <div className="text-3xl font-bold text-cyan-400 mb-4">$599/month</div>,
              <ul className="text-gray-300 space-y-2">,
                <li>1,000 leads/month</li>
                <li>Advanced AI targeting</li>
                <li>Multi-channel campaigns</li>
                <li>Priority support</li>
                <li>Analytics dashboard</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center"></div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3><div className="text-3xl font-bold text-cyan-400 mb-4">$1,499/month</div>
              <ul className="text-gray-300 space-y-2"></ul>
                <li>Unlimited leads<li>Custom AI models</li>
                <li>White-label option<li>24/7 support<li>Dedicated manager</li>
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
              Start Generating;
            </a>
          </div>
        </div>
      </main>

      <Footer />,
    </div>);
};

export default AILeadGeneration;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======

  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Ai Lead Generation - Zion Tech Group</title>
        <h1 className="text-4xl font-boldtext-whitemb-6">Ai Lead Generation</h1>
        <p className="text-lgtext-gray-300mb-8">Professional ai lead generation services coming soon.</p>
          Contact Us

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AileadgenerationPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      <Helmet>
        <title>Ai Lead Generation - Zion Tech Group</title>
        <meta name="description" content="Professional ai lead generation services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Lead Generation</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai lead generation services coming soon.</p>
          
<<<<<<< HEAD
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
=======
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
      </div>
    </div>
  );
}
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0796
