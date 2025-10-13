import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import {    BarChart3,    TrendingUp,    Zap,    Shield,    Target,    Brain,    Users,    Globe,    Mail,    Phone,    Database,   Settings,   Sparkles,   Lightbulb,   CheckCircle } from "lucide-react";

export default function AIAnalyticsPage() {
  const benefits: string[] = [];
  
  const analyticsStats = [
    {
      label: "Data Points Processed", 
      value: "2.5M+", 
      icon: <BarChart3 className="w-6 h-6" />
    },
    { 
      label: "Real-time Updates", 
      value: "99.9%", 
      icon: <Zap className="w-6 h-6" /> 
    },
    { 
      label: "Accuracy Rate", 
      value: "98.5%", 
      icon: <CheckCircle className="w-6 h-6" /> 
    },
    { 
      label: "Processing Speed", 
      value: "50ms", 
      icon: <TrendingUp className="w-6 h-6" /> 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI analytics platform with real-time insights and predictive modeling." />
        <meta name="keywords" content="AI analytics, data analysis, business intelligence, machine learning" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-analytics" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            AI Analytics Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your data into actionable insights with our advanced AI-powered analytics platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {analyticsStats.map((stat, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
              <div className="text-blue-400 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}