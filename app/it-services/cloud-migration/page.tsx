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
      <Navigation /></Navigatio>

      <main className="container mx-auto px-4 py-16 pt-24"></mai>
        <div className="max-w-4 xl mx-auto"></div>
          <h1 className="text-4 xl md:text-5 xl font-bold text-white mb-6 neon-text text-center"></h1></<<<h1>Cloud</h1></<<h1>Migration</h1> Services<p className="text-xl text-gray-300 text-center mb-12">Seamlessly migrate your infrastructure to the cloud with zero downtime</p>
          </p>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6">Migration Assessment</h>
            <div className="space-y-6"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4"></div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Current Infrastructure</label><select
                    value={currentInfrastructure}
                    onChange={(e) =>setCurrentInfrastructure(e.target.value)}</select></<<<selec>className</selec></selec>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"</select>
                  ></select>
                    <option value="">Select current setup...</option><option value="on-premise">On-Premise</optio>
                    <option value="hybrid">Hybrid Cloud</option><option value="other-cloud">Other Cloud Provider</option><option value="legacy">Legacy Systems</optio>
                  </select>
                </div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Target Cloud</label><select
                    value={targetCloud}
                    onChange={(e) =>setTargetCloud(e.target.value)}</select></<<<selec>className</selec></selec>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"</select>
                  ></select>
                    <option value="">Select target...</option><option value="aws">Amazon Web Services</optio>
                    <option value="azure">Microsoft Azure</option><option value="gcp">Google Cloud Platform</option><option value="multi-cloud">Multi-Cloud</optio>
                  </select>
                </div>
                <div></div>
                  <label className="block text-white font-medium mb-2">Migration Scope</label><select
                    value={migrationScope}
                    onChange={(e) =>setMigrationScope(e.target.value)}</select></<<<selec>className</selec></selec>="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-cyan-400 focus:outline-none"</select>
                  ></select>
                    <option value="">Select scope...</option><option value="lift-shift">Lift & Shift</optio>
                    <option value="replatform">Replatform</option><option value="refactor">Refactor</option><option value="rearchitect">Rearchitect</option><button className="cyber-button w-full">Get Migration Plan</butto>
              </button>
            </div>
          </div>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6">Our Migration Process</h>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold"></div>1<span className="text-gray-300">Assessment & Planning</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold"></div>2<span className="text-gray-300">Architecture Design</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold"></div>3<span className="text-gray-300">Migration Execution</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-black font-bold"></div>4<span className="text-gray-300">Testing & Validation</spa>
                </div>
              </div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-black font-bold"></div>5<span className="text-gray-300">Go-Live Support</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-black font-bold"></div>6<span className="text-gray-300">Optimization</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-black font-bold"></div>7<span className="text-gray-300">Training & Documentation</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-black font-bold"></div>8<span className="text-gray-300">Ongoing Support</spa>
                </div>
              </div>
            </div>
          </div>

          <div className="cyber-card p-8 mb-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6">Migration Benefits</h>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Reduced infrastructure costs</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Improved scalability</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Enhanced security</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div><span className="text-gray-300">Better performance</spa>
                </div>
              </div>
              <div className="space-y-4"></div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Disaster recovery</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Global accessibility</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Automated backups</spa>
                </div>
                <div className="flex items-center space-x-3"></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full"></div><span className="text-gray-300">Compliance support</spa>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"></div>
            <div className="cyber-card p-6 text-center"></div>
              <h3 className="text-xl font-bold text-white mb-4"></h3></<<<h3>Small</h3></<<h3>Business</h3><div className="text-3 xl font-bold text-cyan-400 mb-4">$2,500</div>
              <ul className="text-gray-300 space-y-2"></u>
                <<<<li>Up</li></<<li>to</li> 10 servers<<<<li>Basic</li></<<li>migration</li></li>
                <li>1-month support</li><<<<li>Documentation</li></li>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center border-2 border-cyan-400"></div>
              <h3 className="text-xl font-bold text-white mb-4"></h3></<<<h3>Enterprise</h3></h3><div className="text-3 xl font-bold text-cyan-400 mb-4">$15,000</div>
              <ul className="text-gray-300 space-y-2"></u>
                <<<<li>Up</li></<<li>to</li> 100 servers<<<<li>Advanced</li></<<li>migration</li></li>
                <li>3-month support</li><<<<li>Training</li></<<li>included</li><li>24/7 monitoring</l>
              </ul>
            </div>
            <div className="cyber-card p-6 text-center"></div>
              <h3 className="text-xl font-bold text-white mb-4"></h3></<<<h3>Custom</h3></h3><div className="text-3 xl font-bold text-cyan-400 mb-4">Quote</div>
              <ul className="text-gray-300 space-y-2"></u>
                <<<<li>Unlimited</li></<<li>servers</li><<<<li>Custom</li></<<li>solution</li></li>
                <li>6-month support</li><<<<li>Dedicated</li></<<li>team</li><<<<li>SLA</li></<<li>guarantee</li></li>
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
            >Get Migration Quote</a>
            </a>
          </div>
        </div>
      </main>

      <Footer /></Foote>
    </div>
  );
};

export default CloudMigration;