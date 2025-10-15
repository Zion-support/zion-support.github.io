#!/usr/bin/env python3
"""
Script to replace corrupted files with clean templates
"""
import os

def create_clean_advanced_security_suite():
    """Create clean advanced-security-suite/page.tsx"""
    content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, CheckCircle, Users, Globe } from 'lucide-react';

export default function AdvancedSecuritySuitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Advanced Security Suite - Enterprise Cybersecurity | Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solution with AI threat detection, 24/7 monitoring, and compliance tools. Protect your business from advanced cyber threats. Get your free security assessment today." />
        <meta name="keywords" content="cybersecurity, threat detection, security monitoring, compliance, enterprise security, AI security" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 ml-2" />
              Enterprise Cybersecurity
            </div>
            <h1 className="text-4xl font-bold text-white mb-6">Advanced Security Suite</h1>
            <p className="text-lg text-gray-300 mb-8">Protect your business with our comprehensive cybersecurity solution. AI-powered threat detection, 24/7 monitoring, and compliance tools to keep your data and systems secure.</p>
            <div className="flex space-x-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Comprehensive Security Features</h2>
            <p className="text-lg text-gray-300">Advanced protection for your digital infrastructure</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <Lock className="w-8 h-8 text-red-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Threat Detection</h3>
              <p className="text-gray-300">AI-powered threat detection and prevention</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <Eye className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Monitoring</h3>
              <p className="text-gray-300">Continuous security monitoring and alerting</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <AlertTriangle className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Compliance</h3>
              <p className="text-gray-300">Automated compliance reporting and auditing</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Secure Your Business?</h2>
          <p className="text-lg text-gray-300 mb-8">Get your free security assessment and protect your digital assets today.</p>
          <div className="flex space-x-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300">
              Get Free Security Assessment
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}'''
    
    with open('/workspace/app/advanced-security-suite/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Created clean advanced-security-suite/page.tsx")

def create_clean_ai_analytics_dashboard_pro():
    """Create clean ai-analytics-dashboard-pro/page.tsx"""
    content = '''import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, TrendingUp, PieChart, Activity, Database, Zap, Target } from 'lucide-react';

export default function AiAnalyticsDashboardProPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Analytics Dashboard Pro - Advanced Business Intelligence | Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with AI-powered analytics dashboard. Real-time visualization, predictive analytics, and custom reporting. Start your free trial today." />
        <meta name="keywords" content="AI analytics, business intelligence, data visualization, predictive analytics, dashboard, reporting" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <BarChart3 className="w-5 h-5 ml-2" />
              Advanced Analytics
            </div>
            <h1 className="text-4xl font-bold text-white mb-6">AI Analytics Dashboard Pro</h1>
            <p className="text-lg text-gray-300 mb-8">Transform your data into powerful insights with our AI-powered analytics platform. Real-time visualization, predictive analytics, and intelligent recommendations.</p>
            <div className="flex space-x-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Powerful Analytics Features</h2>
            <p className="text-lg text-gray-300">Advanced data visualization and insights</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <TrendingUp className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Real-time Analytics</h3>
              <p className="text-gray-300">Live data visualization and monitoring</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <PieChart className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Predictive Analytics</h3>
              <p className="text-gray-300">AI-powered forecasting and predictions</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <Activity className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Custom Dashboards</h3>
              <p className="text-gray-300">Personalized analytics dashboards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Data?</h2>
          <p className="text-lg text-gray-300 mb-8">Start your free trial and unlock the power of AI-driven analytics.</p>
          <div className="flex space-x-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-green-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-purple-700 transition-all duration-300">
              Start Free Trial
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}'''
    
    with open('/workspace/app/ai-analytics-dashboard-pro/page.tsx', 'w', encoding='utf-8') as f:
        f.write(content)
    
    print("Created clean ai-analytics-dashboard-pro/page.tsx")

def main():
    """Main function"""
    create_clean_advanced_security_suite()
    create_clean_ai_analytics_dashboard_pro()
    print("Created clean templates for corrupted files")

if __name__ == "__main__":
    main()