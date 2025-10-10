'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Trophy, BarChart, Users, Zap, ArrowRight, Star, Award, TrendingUp } from 'lucide-react';

const AiSportsPage: React.FC = () => {
  const features = [
    {
      icon: Trophy,
      title: 'Performance Analytics',
      description: 'AI-powered analysis of athlete performance with real-time insights and recommendations'
    },
    {
      icon: BarChart,
      title: 'Injury Prevention',
      description: 'Predictive models that identify injury risks and suggest preventive measures'
    },
    {
      icon: Users,
      title: 'Talent Scouting',
      description: 'Advanced player evaluation and recruitment using AI-driven talent assessment'
    },
    {
      icon: Zap,
      title: 'Game Strategy',
      description: 'Intelligent game planning and tactical analysis for competitive advantage'
    }
  ];

  const benefits = [
    'Improve athlete performance by 20%',
    'Reduce injury rates by 35%',
    'Enhance team strategy effectiveness',
    'Optimize training programs',
    'Identify talent faster',
    'Increase competitive advantage'
  ];

  const stats = [
    { icon: Trophy, value: '20%', label: 'Performance Gain' },
    { icon: BarChart, value: '35%', label: 'Injury Reduction' },
    { icon: Users, value: '100+', label: 'Teams' },
    { icon: Award, value: '50+', label: 'Championships' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Sports Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI sports solutions that improve athlete performance by 20% and reduce injuries by 35% through advanced analytics and predictive modeling." />
        <meta name="keywords" content="AI sports, sports analytics, athlete performance, injury prevention, talent scouting, sports technology" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Sports</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Revolutionize sports performance with AI-powered analytics that improve athlete performance by 20% and reduce injuries by 35%.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Sports AI Features</h2>
            <p className="text-gray-300 text-lg">Advanced technology for athletic excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Elevate Athletic Performance</h2>
              <p className="text-gray-300 text-lg mb-8">
                Our AI sports solutions help teams and athletes achieve peak performance through data-driven insights, injury prevention, and strategic optimization.
              </p>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Trophy className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Performance Assessment</h3>
              <p className="text-gray-300 mb-6">
                Get a comprehensive analysis of your team's performance and discover opportunities for improvement with our AI-powered sports analytics.
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                  Request Assessment
                </button>
                <button className="w-full bg-white/10 text-white py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6">
              Win with AI-Powered Sports Technology
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join championship-winning teams that are leveraging AI to gain competitive advantages and achieve athletic excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                <ArrowRight className="w-5 h-5" />
                Start Your Sports AI Journey
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Star className="w-5 h-5" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiSportsPage;