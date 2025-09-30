import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Award, Clock, Users, Zap } from 'lucide-react';

export default function MegaContent2026Showcase() {
  const [activeTab, setActiveTab] = useState('trends');

  const contentData = {
    trends: {
      title: "AI Mega Trends 2026",
      subtitle: "15 Revolutionary Trends Reshaping Enterprise",
      description: "Discover the complete guide to AI mega trends that are driving 340% ROI and 85% efficiency gains across Fortune 500 companies.",
      icon: "🚀",
      color: "from-purple-600 to-indigo-600",
      bgColor: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200",
      stats: [
        { label: "Mega Trends", value: "15", icon: TrendingUp },
        { label: "Average ROI", value: "340%", icon: Award },
        { label: "Efficiency Gain", value: "85%", icon: Zap },
        { label: "Read Time", value: "45 min", icon: Clock }
      ],
      link: "/blog/ai-mega-trends-2026-comprehensive",
      cta: "Read Complete Guide"
    },
    success: {
      title: "Mega Transformation Success",
      subtitle: "$75M ROI in 12 Months",
      description: "How a Fortune 500 manufacturing company achieved unprecedented ROI through comprehensive AI transformation across 15 business units.",
      icon: "🏆",
      color: "from-green-600 to-blue-600",
      bgColor: "from-green-50 to-blue-50",
      borderColor: "border-green-200",
      stats: [
        { label: "Total ROI", value: "$75M", icon: Award },
        { label: "Efficiency", value: "85%", icon: TrendingUp },
        { label: "AI Solutions", value: "15", icon: Users },
        { label: "Timeline", value: "12 mo", icon: Clock }
      ],
      link: "/case-studies/ai-mega-transformation-success-2026",
      cta: "View Success Story"
    }
  };

  const currentContent = contentData[activeTab as keyof typeof contentData];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🚀 MEGA CONTENT 2026
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most comprehensive AI transformation guides and real-world success stories 
            that are reshaping enterprise operations in 2026
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-lg border border-gray-200">
            <button
              onClick={() => setActiveTab('trends')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'trends'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              📊 Mega Trends Guide
            </button>
            <button
              onClick={() => setActiveTab('success')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'success'
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-green-600'
              }`}
            >
              🏆 Success Stories
            </button>
          </div>
        </div>

        {/* Content Display */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <div className={`bg-gradient-to-r ${currentContent.bgColor} p-8 border-b ${currentContent.borderColor}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-16 h-16 bg-gradient-to-r ${currentContent.color} rounded-xl flex items-center justify-center text-white text-3xl`}>
                {currentContent.icon}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">{currentContent.title}</h3>
                <p className="text-lg text-gray-600">{currentContent.subtitle}</p>
              </div>
            </div>
            <p className="text-xl text-gray-700 mb-8 max-w-4xl">
              {currentContent.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="p-8">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {currentContent.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={currentContent.link}
                className={`bg-gradient-to-r ${currentContent.color} text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2`}
              >
                {currentContent.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/blog"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors"
              >
                Explore All Content
              </Link>
            </div>
          </div>
        </div>

        {/* Additional Content Preview */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900">Autonomous Enterprise</h4>
            </div>
            <p className="text-gray-600 mb-4">
              Complete guide to achieving 99% business automation with $25M+ ROI through autonomous AI systems.
            </p>
            <Link href="/blog/ai-autonomous-enterprise-2026" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              Read Guide →
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900">Quantum AI Computing</h4>
            </div>
            <p className="text-gray-600 mb-4">
              Harness quantum computing for 1000x faster AI processing and revolutionary business capabilities.
            </p>
            <Link href="/blog/ai-quantum-optimization-2026" className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
              Learn More →
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900">AI Security Framework</h4>
            </div>
            <p className="text-gray-600 mb-4">
              Zero-trust AI security architecture with 99.9% threat detection and automated response systems.
            </p>
            <Link href="/blog/ai-zero-trust-security-2026" className="text-green-600 font-semibold hover:text-green-700 transition-colors">
              View Framework →
            </Link>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Stay Ahead of AI Mega Trends
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Get exclusive access to the latest AI transformation insights, success stories, 
            and implementation guides delivered weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
            />
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-4 opacity-75">
            Join 10,000+ enterprise leaders already subscribed
          </p>
        </div>
      </div>
    </section>
  );
}