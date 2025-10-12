'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FileText, Brain, Target } from 'lucide-react'

export default function AIAutomatedReportingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Automated Reporting - Zion Tech Group | Intelligent Data Insights</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered automated reporting solutions. Real-time analytics, custom dashboards, and intelligent reporting." />
        <meta name="keywords" content="AI reporting, automated reporting, data analytics, business intelligence, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Automated Reporting
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your data into actionable insights with intelligent automated reporting solutions that adapt to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <FileText className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Real-time Reports</h3>
            <p className="text-gray-300">Generate comprehensive reports automatically with real-time data updates and intelligent formatting.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Brain className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Insights</h3>
            <p className="text-gray-300">Leverage machine learning to identify trends, patterns, and anomalies in your data automatically.</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <Target className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Custom Dashboards</h3>
            <p className="text-gray-300">Create personalized dashboards that adapt to your specific business requirements and KPIs.</p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Automate Your Reporting?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI-powered reporting solutions transform your data into actionable business insights.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}