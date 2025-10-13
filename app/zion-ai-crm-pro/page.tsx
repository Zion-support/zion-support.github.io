import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Phone, Mail, Calendar, BarChart3, Target } from 'lucide-react';

export default function ZionAiCrmProPage() {
  const features = [
    {
      title: "Customer Management",
      description: "Comprehensive customer relationship management with AI insights",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Sales Pipeline",
      description: "Track and manage your sales pipeline with intelligent forecasting",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Communication Hub",
      description: "Centralized communication across email, phone, and messaging",
      icon: <Phone className="w-8 h-8" />
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics and reporting for better decision making",
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI CRM Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered CRM solution for comprehensive customer relationship management." />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Zion AI CRM Pro
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your customer relationships with our AI-powered CRM platform designed for modern businesses.
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
        </div>
      </div>
    </div>
  );
}