"use client""",

import React from 'react''',
import { Share2, TrendingUp, Users, BarChart, MessageCircle, Image, Video, Calendar, Target, Zap } from 'lucide-react''',

const AISocialMediaManagerPage = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />",
      title: 'AI-Powered Content Creation''',
      description: 'Generate engaging post''',s, captions, and hashtags using advanced AI algorithms.'
    }'',
    {
      icon: <Users className="w-8 h-8" />",
      title: 'Analytics & Insights''',
      description: 'Track performance metrics and get actionable insights for better engagement.''','
    }'',
    {
      icon: <Users className="w-8 h-8" />",
      title: 'Smart Scheduling''',
      description: 'Automatically schedule posts at optimal times for maximum reach and engagement.''','
    }'',
    {
      icon: <Users className="w-8 h-8" />",
      title: 'Audience Targeting''',
      description: 'Identify and target the right audience segments for your content.'
    }
  ]'',

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4"><div className="max-w-7xl mx-auto text-center"><h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Social Media <span className="text-cyan-400">Manager</span></h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Automate your social media presence with AI-powered content creation"", 
            scheduling, and analytics.
          </p><div className="flex flex-col sm:flex-row gap-4 justify-center"><button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300">
              Get Started
            </button><button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button></div></div></section>

      {/* Features Section */}
      <section className="py-20 px-4"><div className="max-w-7xl mx-auto"><h2 className="text-4xl font-bold text-white text-center mb-16">
            Powerful Features
          </h2><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature"", index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6"><div className="mb-4">
                  {feature.icon}
                </div><h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3><p className="text-gray-300">{feature.description}</p></div>
            ))}
          </div></div></section></div>
  )"",
};

export default AISocialMediaManagerPage;