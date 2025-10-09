'use client';
import React from 'react';
import { BarChart3, TrendingUp, Database, Zap, Shield, Clock, CheckCircle, Users, Target, PieChart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIDataAnalyticsDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Data Analytics Dashboard">
            AI Data Analytics Dashboard
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
            Transform Data into Actionable Insights with AI-Powered Analytics
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Unlock the power of your data with our AI-powered analytics platform that provides real-time insights, 
            predictive analytics, and automated reporting. Make data-driven decisions 10x faster with 95% accuracy.
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
            Advanced AI Analytics Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">🔮</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Predictive Analytics</h3>
              <p className="text-gray-300 mb-4 text-center">
                Forecast future trends, customer behavior, and business outcomes with advanced machine learning models.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Sales forecasting</li>
                <li>• Customer churn prediction</li>
                <li>• Market trend analysis</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">📊</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Real-Time Dashboards</h3>
              <p className="text-gray-300 mb-4 text-center">
                Monitor key metrics and KPIs in real-time with customizable, interactive dashboards.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Live data streaming</li>
                <li>• Custom visualizations</li>
                <li>• Mobile-responsive design</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">🤖</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">AI-Powered Insights</h3>
              <p className="text-gray-300 mb-4 text-center">
                Get automated insights and recommendations based on your data patterns and business goals.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Anomaly detection</li>
                <li>• Pattern recognition</li>
                <li>• Automated alerts</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">🔗</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Data Integration</h3>
              <p className="text-gray-300 mb-4 text-center">
                Connect to 100+ data sources including databases, APIs, cloud services, and third-party tools.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Database connectors</li>
                <li>• API integrations</li>
                <li>• Cloud data sources</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">📈</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Advanced Visualizations</h3>
              <p className="text-gray-300 mb-4 text-center">
                Create stunning charts, graphs, and interactive visualizations that tell your data story.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Interactive charts</li>
                <li>• 3D visualizations</li>
                <li>• Custom themes</li>
              </ul>
            </div>

            <div className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">📱</div>
              <h3 className="text-xl font-bold text-white mb-4 text-center">Mobile Analytics</h3>
              <p className="text-gray-300 mb-4 text-center">
                Access your analytics anywhere with our mobile-optimized dashboard and native mobile apps.
              </p>
              <ul className="text-sm text-gray-400 space-y-2">
                <li>• Mobile dashboards</li>
                <li>• Push notifications</li>
                <li>• Offline access</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Data Sources */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Supported Data Sources
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl mb-2">🗄️</div>
              <h3 className="text-sm font-bold text-white">MySQL</h3>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl mb-2">🐘</div>
              <h3 className="text-sm font-bold text-white">PostgreSQL</h3>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl mb-2">📊</div>
              <h3 className="text-sm font-bold text-white">MongoDB</h3>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl mb-2">☁️</div>
              <h3 className="text-sm font-bold text-white">AWS</h3>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl mb-2">🔵</div>
              <h3 className="text-sm font-bold text-white">Azure</h3>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl mb-2">📈</div>
              <h3 className="text-sm font-bold text-white">Google Analytics</h3>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl mb-2">💼</div>
              <h3 className="text-sm font-bold text-white">Salesforce</h3>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl mb-2">📧</div>
              <h3 className="text-sm font-bold text-white">HubSpot</h3>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl mb-2">🛒</div>
              <h3 className="text-sm font-bold text-white">Shopify</h3>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl mb-2">📱</div>
              <h3 className="text-sm font-bold text-white">Facebook Ads</h3>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl mb-2">🐦</div>
              <h3 className="text-sm font-bold text-white">Twitter API</h3>
            </div>
            <div className="cyber-card p-4 text-center">
              <div className="text-2xl mb-2">🔌</div>
              <h3 className="text-sm font-bold text-white">REST APIs</h3>
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
              <div className="text-4xl font-bold text-cyan-400 mb-6 text-center">$199<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 5 data sources
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  1M data points/month
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI insights
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
              <div className="text-4xl font-bold text-cyan-400 mb-6 text-center">$499<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 20 data sources
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  10M data points/month
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced AI analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom dashboards
                </li>
              </ul>
              <a href="/contact" className="w-full cyber-button text-center block">
                Start Free Trial
              </a>
            </div>

            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6 text-center">$1,299<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited data sources
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited data points
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
              </ul>
              <a href="/contact" className="w-full cyber-button text-center block">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16">
          <div className="quantum-card p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Proven Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="cyber-card p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">10x</h3>
                <p className="text-gray-300">Faster Decision Making</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-2xl font-bold text-green-400 mb-2">95%</h3>
                <p className="text-gray-300">Prediction Accuracy</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">80%</h3>
                <p className="text-gray-300">Time Saved on Reporting</p>
              </div>
              <div className="cyber-card p-6">
                <h3 className="text-2xl font-bold text-pink-400 mb-2">300%</h3>
                <p className="text-gray-300">ROI Improvement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Ready to Transform Your Data Analytics?
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

export default AIDataAnalyticsDashboard;