import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Brain, TrendingUp, Users, Award, Sparkles } from 'lucide-react';

export default function NewContentShowcase2025Banner() {
  const newContentItems = [
    {
      title: 'AI Interactive Learning Hub',
      description: 'Master AI through hands-on, interactive experiences',
      icon: Brain,
      link: '/ai-interactive-learning-hub-2025',
      badge: 'New'
    },
    {
      title: 'Cutting-Edge AI Technologies',
      description: 'Explore revolutionary AI innovations shaping 2025',
      icon: Zap,
      link: '/cutting-edge-ai-technologies-2025',
      badge: 'Breakthrough'
    },
    {
      title: 'AI Business Solutions',
      description: 'Transform your enterprise with AI-powered automation',
      icon: TrendingUp,
      link: '/ai-powered-business-solutions-2025',
      badge: 'Hot'
    }
  ];

  const stats = [
    { icon: Users, value: '50K+', label: 'Active Learners' },
    { icon: Award, value: '2,500%', label: 'Average ROI' },
    { icon: Star, value: '99.9%', label: 'Success Rate' },
    { icon: Sparkles, value: '100+', label: 'New Features' }
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4 mr-2" />
            Brand New Content Available
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Revolutionary Content Hub 2025
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Discover cutting-edge AI technologies, interactive learning experiences, and business solutions that are reshaping the future
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl mx-auto mb-3">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-blue-100 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* New Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {newContentItems.map((item, index) => (
            <Link 
              key={index}
              href={item.link}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.badge === 'New' ? 'bg-green-500/20 text-green-300' :
                  item.badge === 'Breakthrough' ? 'bg-purple-500/20 text-purple-300' :
                  'bg-red-500/20 text-red-300'
                }`}>
                  {item.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
                {item.title}
              </h3>
              <p className="text-blue-100 mb-4">
                {item.description}
              </p>
              <div className="flex items-center text-white font-medium group-hover:text-blue-100 transition-colors">
                Explore Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-interactive-learning-hub-2025"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Learning AI
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/ai-powered-business-solutions-2025"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Transform Your Business
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}