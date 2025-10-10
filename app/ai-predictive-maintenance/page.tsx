'use client';
import React from 'react';
import { Wrench, AlertTriangle, TrendingUp, Shield, Clock, BarChart, Zap, CheckCircle, Star, ArrowRight, Settings, Activity } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const AIPredictiveMaintenancePage: React.FC = () => {
  return (
    <>
      <SEOOptimizer
        title="AI Predictive Maintenance Platform - Zion Tech Group"
        description="Revolutionary AI-powered predictive maintenance solution that prevents equipment failures, reduces downtime by 70%, and saves millions in maintenance costs. Advanced machine learning algorithms for industrial optimization."
        keywords={['AI predictive maintenance', 'machine learning maintenance', 'IoT sensors', 'equipment monitoring', 'predictive analytics', 'industrial AI', 'maintenance optimization']}
        canonicalUrl="https://ziontechgroup.com/ai-predictive-maintenance"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Predictive Maintenance
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Prevent equipment failures before they happen. Our AI-powered predictive maintenance platform uses advanced machine learning to reduce downtime by 70% and save millions in maintenance costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="cyber-button">
                  📞 Call: (302) 464-0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Get Demo
                </a>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
              <div className="cyber-card hologram-card p-6 text-center">
                <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">70% Less Downtime</h3>
                <p className="text-gray-300 text-sm">Predict and prevent equipment failures before they occur</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <BarChart className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">$2M+ Annual Savings</h3>
                <p className="text-gray-300 text-sm">Reduce maintenance costs and extend equipment life</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">99.9% Accuracy</h3>
                <p className="text-gray-300 text-sm">Advanced ML algorithms with proven reliability</p>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <Clock className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">24/7 Monitoring</h3>
                <p className="text-gray-300 text-sm">Continuous equipment health monitoring and alerts</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">
              How AI Predictive Maintenance Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card p-8 text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Activity className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">1. Data Collection</h3>
                <p className="text-gray-300">IoT sensors collect real-time data from equipment including vibration, temperature, pressure, and performance metrics.</p>
              </div>
              
              <div className="cyber-card p-8 text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">2. AI Analysis</h3>
                <p className="text-gray-300">Machine learning algorithms analyze patterns and predict potential failures with 99.9% accuracy.</p>
              </div>
              
              <div className="cyber-card p-8 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Proactive Alerts</h3>
                <p className="text-gray-300">Get instant notifications and maintenance recommendations before equipment fails.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">
              Advanced Features
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="cyber-card p-6">
                  <div className="flex items-start space-x-4">
                    <Wrench className="w-8 h-8 text-cyan-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Smart Maintenance Scheduling</h3>
                      <p className="text-gray-300">Automatically schedule maintenance based on predicted failure timelines and production schedules.</p>
                    </div>
                  </div>
                </div>
                
                <div className="cyber-card p-6">
                  <div className="flex items-start space-x-4">
                    <BarChart className="w-8 h-8 text-green-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Real-time Analytics</h3>
                      <p className="text-gray-300">Comprehensive dashboards showing equipment health, performance trends, and maintenance insights.</p>
                    </div>
                  </div>
                </div>
                
                <div className="cyber-card p-6">
                  <div className="flex items-start space-x-4">
                    <Settings className="w-8 h-8 text-purple-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Custom ML Models</h3>
                      <p className="text-gray-300">Tailored machine learning models trained specifically for your equipment and industry.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="cyber-card p-6">
                  <div className="flex items-start space-x-4">
                    <Zap className="w-8 h-8 text-yellow-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Anomaly Detection</h3>
                      <p className="text-gray-300">Advanced algorithms detect unusual patterns and behaviors that indicate potential issues.</p>
                    </div>
                  </div>
                </div>
                
                <div className="cyber-card p-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="w-8 h-8 text-red-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Risk Assessment</h3>
                      <p className="text-gray-300">Evaluate and prioritize maintenance tasks based on risk levels and potential impact.</p>
                    </div>
                  </div>
                </div>
                
                <div className="cyber-card p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-8 h-8 text-blue-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Historical Analysis</h3>
                      <p className="text-gray-300">Learn from historical data to improve predictions and optimize maintenance strategies.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">
              Industry Applications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Manufacturing</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Production line monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Machine tool maintenance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Quality control systems</span>
                  </li>
                </ul>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Energy & Utilities</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Power plant equipment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Wind turbine monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Grid infrastructure</span>
                  </li>
                </ul>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Transportation</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Fleet vehicle maintenance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Railway systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Aviation equipment</span>
                  </li>
                </ul>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Oil & Gas</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Drilling equipment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Pipeline monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Refinery systems</span>
                  </li>
                </ul>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Healthcare</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Medical equipment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>HVAC systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Laboratory equipment</span>
                  </li>
                </ul>
              </div>
              
              <div className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-bold text-white mb-4">Data Centers</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Server monitoring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Cooling systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Power infrastructure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">
              Calculate Your ROI
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Typical Savings</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Reduced Downtime</span>
                    <span className="text-green-400 font-bold">70%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Maintenance Cost Reduction</span>
                    <span className="text-green-400 font-bold">40%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Equipment Life Extension</span>
                    <span className="text-green-400 font-bold">25%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Energy Efficiency</span>
                    <span className="text-green-400 font-bold">15%</span>
                  </div>
                </div>
              </div>
              
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Average ROI</h3>
                <div className="text-6xl font-bold text-cyan-400 mb-4">300%</div>
                <p className="text-gray-300 mb-6">Return on investment within 6-12 months</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">$2M+ annual savings for large facilities</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">50% reduction in emergency repairs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">90% improvement in maintenance efficiency</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">
              Pricing Plans
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Small Facility</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$1,999/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Up to 50 equipment units</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Basic ML models</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Standard analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Email support</span>
                  </li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-8 border-2 border-cyan-400">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">Enterprise</h3>
                  <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">Most Popular</span>
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$4,999/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Up to 500 equipment units</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Advanced ML models</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Real-time analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Custom integrations</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Priority support</span>
                  </li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Industrial Scale</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Unlimited equipment units</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Custom ML models</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Advanced analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">On-premise deployment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">24/7 dedicated support</span>
                  </li>
                </ul>
                <a href="/contact" className="w-full cyber-button text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Prevent Equipment Failures?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 200+ industrial facilities already using our AI Predictive Maintenance platform to optimize operations and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="cyber-button">
                📞 Call: (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                📧 Schedule Demo
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPredictiveMaintenancePage;