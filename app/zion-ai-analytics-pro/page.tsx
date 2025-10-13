import React from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
<<<<<<< HEAD
import { BarChart3, TrendingUp, Database, Eye } from 'lucide-react';

export default function ZionAiAnalyticsProPage() {
  const features = [
    {
      title: "Advanced Analytics",
      description: "Powerful AI-driven analytics for deep business insights",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Real-time Monitoring",
      description: "Monitor your business metrics in real-time with live dashboards",
      icon: <TrendingUp className="w-8 h-8" />
    },
    {
      title: "Data Integration",
      description: "Seamlessly integrate data from multiple sources and platforms",
      icon: <Database className="w-8 h-8" />
    },
    {
      title: "Predictive Insights",
      description: "Get predictive analytics and forecasting capabilities",
      icon: <Eye className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Analytics Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics platform for comprehensive business intelligence and insights." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Zion AI Analytics Pro
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your data into actionable insights with our advanced AI-powered analytics platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
=======

export default function ZionAiAnalyticsPro() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Zion AI Analytics Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI analytics solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Zion AI Analytics Pro
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI-powered analytics for data-driven business decisions.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Analytics</h3>
              <p className="text-gray-600">
                Get instant insights from your data with real-time analytics.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Predictive Modeling</h3>
              <p className="text-gray-600">
                AI-powered predictive models for forecasting and trend analysis.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Dashboards</h3>
              <p className="text-gray-600">
                Create custom dashboards tailored to your business needs.
              </p>
            </div>
          </div>
>>>>>>> 01a7da73ce4c3be8c79b6cf84a9d7a13c7877ac0
=======

export default function PageTsxPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page.Tsx - Zion Tech Group</title>
        <meta name="description" content="Advanced page.tsx solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Page.Tsx</h1>
          <p className="text-xl text-gray-300 mb-8">
            Advanced page.tsx solutions by Zion Tech Group
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
          <p className="text-gray-300">
            This page is under development. Please check back later for updates.
          </p>
        </div>
      
>>>>>>> 8b3c36c8a79bdf97a6a44b765072850456aacdcd
        </div>
      </div>
    </div>
  );
}