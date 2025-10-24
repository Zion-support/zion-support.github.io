import React from 'react';
import { Helmet } from 'react-helmet-async';
import React  from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Cloud } from 'lucide-react';

            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div></div></div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
'use client';
import React, { useState } from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const CloudMigration: React.FC = () => {
  const [currentInfrastructure, setCurrentInfrastructure] = useState('');
  const [targetCloud, setTargetCloud] = useState('');
  const [migrationScope, setMigrationScope] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24"></main>
        <div className="max-w-4xl mx-auto"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">Cloud Migration Services</h1><p className="text-xl text-gray-300 text-center mb-12">Seamlessly migrate your infrastructure to the cloud with zero downtime</p>
          </p>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2xl font-bold text-white mb-6">Migration Assessment</h2>
            <div className="space-y-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4"></div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Current Infrastructure<select
                    value={currentInfrastructure}
                    onChange={(e) =>setCurrentInfrastructure(e.target.value)}</select></<<<selec>className</selec></selec>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"</select>
                  ></select>
                    <option value="">Select current setup...</option><option value="on-premise">On-Premise</optio>
                    <option value="hybrid">Hybrid Cloud</option><option value="other-cloud">Other Cloud Provider</option><option value="legacy">Legacy Systems</optio>
                  </select>
                </div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Target Cloud<select
                    value={targetCloud}
                    onChange={(e) =>setTargetCloud(e.target.value)}</select></<<<selec>className</selec></selec>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"</select>
                  ></select>
                    <option value="">Select target...</option><option value="aws">Amazon Web Services</optio>
                    <option value="azure">Microsoft Azure</option><option value="gcp">Google Cloud Platform</option><option value="multi-cloud">Multi-Cloud</optio>
                  </select>
                </div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Migration Scope<select
                    value={migrationScope}
                    onChange={(e) =>setMigrationScope(e.target.value)}</select></<<<selec>className</selec></selec>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"</select>
                  ></select>
                    <option value="">Select scope...<option value="lift-shift">Lift & Shift</option>
                    <option value="replatform">Replatform<option value="refactor">Refactor<option value="rearchitect">Rearchitect<button className="cyber-button w-full">Get Migration Plan</button>
          <h1 className="text-4xl md: text-5xl font-bold text-white mb-6 neon-text text-center"></h1>
            Cloud Migration Services;
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12"></p>
            Seamlessly migrate your infrastructure to the cloud with zero downtime;
          </p>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2xl font-bold text-white mb-6">Migration Assessment</h2>)
            <div className="space-y-6">)
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">)
                <div>)
                  <label className="block text-white font-medium mb-2">Current Infrastructure</label>),
                  <select;),
                    value={currentInfrastructure}
                    onChange={(e) => setCurrentInfrastructure(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus: border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select current setup...</option>
                    <option value="on-premise">On-Premise</option>
                    <option value="hybrid">Hybrid Cloud</option>
                    <option value="other-cloud">Other Cloud Provider</option>
                    <option value="legacy">Legacy Systems</option>
                  </select>,
                </div>,
                <div>,
                  <label className="block text-white font-medium mb-2">Target Cloud</label>,
                  <select;
                    value={targetCloud}
                    onChange={(e) => setTargetCloud(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus: border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select target...</option>
                    <option value="aws">Amazon Web Services</option>
                    <option value="azure">Microsoft Azure</option>
                    <option value="gcp">Google Cloud Platform</option>
                    <option value="multi-cloud">Multi-Cloud</option>
                  </select>,
                </div>,
                <div>,
                  <label className="block text-white font-medium mb-2">Migration Scope</label>,
                  <select;
                    value={migrationScope}
                    onChange={(e) => setMigrationScope(e.target.value)}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus: border-cyan-400 focus:outline-none"
                  >
                    <option value="">Select scope...</option>
                    <option value="lift-shift">Lift & Shift</option>
                    <option value="replatform">Replatform</option>
                    <option value="refactor">Refactor</option>
                    <option value="rearchitect">Rearchitect</option>
                  </select>
                </div>
              </div>
              <button className="cyber-button w-full"></button>
                Get Migration Plan;
              </button>
            </div>
          </div>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2xl font-bold text-white mb-6">Our Migration Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold">1</div><span className="text-gray-300">Assessment & Planning</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold">2</div><span className="text-gray-300">Architecture Design</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold">3</div><span className="text-gray-300">Migration Execution</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold">4</div><span className="text-gray-300">Testing & Validation</span>
                </div>
              </div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-black font-bold">5</div><span className="text-gray-300">Go-Live Support</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-black font-bold">6</div><span className="text-gray-300">Optimization</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-black font-bold">7</div><span className="text-gray-300">Training & Documentation</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-black font-bold">8</div><span className="text-gray-300">Ongoing Support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2xl font-bold text-white mb-6">Migration Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Reduced infrastructure costs</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Improved scalability</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Enhanced security</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Better performance</span>
                </div>
              </div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Disaster recovery</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Global accessibility</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Automated backups</span>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Compliance support</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">,
            <div className="cyber-card p-6 text-center">,
              <h3 className="text-xl font-bold text-white mb-4">Small Business</h3>,
              <div className="text-3xl font-bold text-cyan-400 mb-4">$2,500</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"></div>
            <div className="cyber-card p-6 text-center"></div>
              <h3 className="text-xl font-bold text-white mb-4">Small Business</h3><div className="text-3xl font-bold text-cyan-400 mb-4">$2,500</div>
              <ul className="text-gray-300 space-y-2"></ul>
                <li>Up to 10 servers<li>Basic migration</li>
                <li>1-month support<li>Documentation</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center border-2 border-cyan-400"></div>
              <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3><div className="text-3xl font-bold text-cyan-400 mb-4">$15,000</div>
              <ul className="text-gray-300 space-y-2"></ul>
                <li>Up to 100 servers<li>Advanced migration</li>
                <li>3-month support<li>Training included<li>24/7 monitoring</li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center"></div>
              <h3 className="text-xl font-bold text-white mb-4">Custom</h3><div className="text-3xl font-bold text-cyan-400 mb-4">Quote</div>
              <ul className="text-gray-300 space-y-2"></ul>
                <li>Unlimited servers<li>Custom solution</li>
                <li>6-month support<li>Dedicated team<li>SLA guarantee</li>
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
              Get Migration Quote;
            </a>
          </div>
        </div>
      </section>

      <Footer />,
    </div>);
};

export default CloudMigrationPage;
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function CloudmigrationPage() {
  return (
export default function CloudmigrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Migration - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Cloud Migration</h1>
          <p className="text-lg text-gray-300 mb-8">Professional cloud migration services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title>Cloud Migration - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services by Zion Tech Group. Transform your business with our expert solutions." / / />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-6"  >Cloud Migration</h1>
        <p className="text-lg text-gray-300 mb-8">Professional cloud migration services coming soon.</p>
        <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit" >
          Contact Us
          
          <ArrowRight className="w-5h-5ml-2"  />
        </Link>
      </div>
    </div>
  );
}
