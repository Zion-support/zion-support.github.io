'use client';
import React from 'react';
import { Calendar, Users, Target, BarChart3, Zap, Shield, Clock, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIProjectManager: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Project Manager Pro">
            AI Project Manager Pro
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
            Intelligent Project Management with AI-Powered Automation
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your project management with our AI-powered platform that predicts risks, optimizes resources, 
            and automates workflows. Achieve 40% faster project delivery and 60% better resource utilization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Free Trial
            </a>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Revolutionary AI Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">🧠</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">AI Risk Prediction</h3>
              <p className="text-gray-300 mb-4 text-center">
                Advanced machine learning algorithms predict project risks 30 days in advance with 95% accuracy.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Real-time risk assessment</li>
                <li>• Automated mitigation suggestions</li>
                <li>• Historical data analysis</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Smart Resource Optimization</h3>
              <p className="text-gray-300 mb-4 text-center">
                AI automatically allocates resources based on skills, availability, and project requirements.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Dynamic team assignment</li>
                <li>• Workload balancing</li>
                <li>• Skill gap identification</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">📊</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Predictive Analytics</h3>
              <p className="text-gray-300 mb-4 text-center">
                Get insights into project performance, budget forecasts, and delivery timelines.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Budget forecasting</li>
                <li>• Timeline predictions</li>
                <li>• Performance metrics</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">🤖</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Automated Workflows</h3>
              <p className="text-gray-300 mb-4 text-center">
                Create intelligent workflows that adapt to your team's working patterns and project needs.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Smart task assignment</li>
                <li>• Automated status updates</li>
                <li>• Intelligent notifications</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">🔒</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Enterprise Security</h3>
              <p className="text-gray-300 mb-4 text-center">
                Bank-level security with end-to-end encryption and compliance with industry standards.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• SOC 2 Type II certified</li>
                <li>• GDPR compliant</li>
                <li>• 256-bit encryption</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">🌐</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Global Collaboration</h3>
              <p className="text-gray-300 mb-4 text-center">
                Seamless collaboration across time zones with AI-powered translation and cultural insights.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Multi-language support</li>
                <li>• Time zone optimization</li>
                <li>• Cultural awareness tools</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Flexible Pricing Plans
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6 text-center">$99<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 10 projects
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI insights
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 25 team members
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
              </ul>
              <a href="/contact" className="w-full cyber-button text-center block">
                Get Started
              </a>
            </div>

            <div className="quantum-card p-8 energy-pulse border-2 border-cyan-400">
              <div className="text-center mb-4">
                <span className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-bold">MOST POPULAR</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6 text-center">$299<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited projects
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced AI analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 100 team members
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
              </ul>
              <a href="/contact" className="w-full cyber-button text-center block">
                Start Free Trial
              </a>
            </div>

            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6 text-center">Custom</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited everything
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom AI models
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-premise deployment
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom training
                </li>
              </ul>
              <a href="/contact" className="w-full cyber-button text-center block">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="mb-16">
          <div className="quantum-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Calculate Your ROI
            </h2>
            <p className="text-gray-300 mb-8">
              Our clients typically see 300% ROI within the first 6 months. Calculate your potential savings:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Time Saved</h3>
                <div className="text-3xl font-bold text-cyan-400">40%</div>
                <p className="text-gray-300 text-sm">Faster project delivery</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Cost Reduction</h3>
                <div className="text-3xl font-bold text-green-400">60%</div>
                <p className="text-gray-300 text-sm">Lower operational costs</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Efficiency Gain</h3>
                <div className="text-3xl font-bold text-purple-400">85%</div>
                <p className="text-gray-300 text-sm">Better resource utilization</p>
              </div>
            </div>
            <a href="/contact" className="cyber-button">
              Get Your Custom ROI Report
            </a>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Ready to Transform Your Project Management?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card p-6">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (302) 464-0950</p>
            </div>
            <div className="cyber-card p-6">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
            </div>
            <div className="cyber-card p-6">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIProjectManager;