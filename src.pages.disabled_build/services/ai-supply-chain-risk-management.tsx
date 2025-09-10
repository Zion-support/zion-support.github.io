import React from "react";
import { Shield, TrendingUp, Globe, AlertTriangle, BarChart3, Users, CheckCircle, Star, Zap } from "lucide-react";
export default function AISupplyChainRiskManagement() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* comment */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 p-3 rounded-full">
              <Shield className="w-8 h-8 text-white"   />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Supply Chain Risk Management;
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Proactively identify, assess, and mitigate supply chain risks with intelligent AI algorithms and real-time monitoring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a;
              href="https://ziontechgroup.com/contact"
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300"
            >
              Get Started;
            </a>
            <a;
              href="#demo"
              className="border border-gray-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-all duration-300"
            >
              Watch Demo;
            </a>
          </div>
        </div>
      </section>
      {/* comment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Intelligent Risk Management Features;
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300">
              <div className="bg-green-500/20 p-3 rounded-lg w-fit mb-4">
                <AlertTriangle className="w-6 h-6 text-green-400"   />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Real-Time Risk Detection</h3>
              <p className="text-gray-400">
                AI algorithms continuously monitor global events, weather patterns, and geopolitical changes to identify emerging risks.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300">
              <div className="bg-blue-500/20 p-3 rounded-lg w-fit mb-4">
                <Globe className="w-6 h-6 text-blue-400"   />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Global Supply Chain Mapping</h3>
              <p className="text-gray-400">
                Visualize your entire supply network with detailed mapping of suppliers, logistics routes, and dependencies.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300">
              <div className="bg-purple-500/20 p-3 rounded-lg w-fit mb-4">
                <Zap className="w-6 h-6 text-purple-400"   />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Predictive Analytics</h3>
              <p className="text-gray-400">
                Machine learning models predict potential disruptions and suggest proactive mitigation strategies.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300">
              <div className="bg-yellow-500/20 p-3 rounded-lg w-fit mb-4">
                <BarChart3 className="w-6 h-6 text-yellow-400"   />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Risk Scoring & Prioritization</h3>
              <p className="text-gray-400">
                Advanced algorithms score and prioritize risks based on impact, probability, and business criticality.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300">
              <div className="bg-red-500/20 p-3 rounded-lg w-fit mb-4">
                <Users className="w-6 h-6 text-red-400"   />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Supplier Performance Monitoring</h3>
              <p className="text-gray-400">
                Track supplier reliability, quality metrics, and compliance status in real-time dashboards.
              </p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300">
              <div className="bg-indigo-500/20 p-3 rounded-lg w-fit mb-4">
                <TrendingUp className="w-6 h-6 text-indigo-400"   />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Automated Alerts & Notifications</h3>
              <p className="text-gray-400">
                Instant notifications for critical risks, supplier issues, and recommended actions via multiple channels.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* comment */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Flexible Pricing Plans;
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* comment */}
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                <div className="text-4xl font-bold text-green-400 mb-2">$99<span className="text-lg text-gray-400">/month</span></div>
                <p className="text-gray-400">Perfect for small businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3"   />
                  Up to 50 suppliers
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3"   />
                  Basic risk monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3"   />
                  Email alerts
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3"   />
                  Standard reporting
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3"   />
                  Email support