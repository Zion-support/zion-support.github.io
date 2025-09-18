import React from 'react';
import { 
  Star, 
  ArrowRight, 
  Zap, 
  Brain, 
  Rocket, 
  TrendingUp,
  CheckCircle,
  Clock,
  Users,
  Award,
  Globe,
  Shield,
  Target,
  Lightbulb
} from 'lucide-react';

export default function NewContentShowcaseBanner2026() {
  const newContent = [
    {
      title: "AI Trends 2026 Ultimate",
      description: "Revolutionary AI trends that will reshape our world",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      badge: "New",
      link: "/ai-trends-2026-ultimate"
    },
      title: "Ultimate Services 2026",
      description: "Comprehensive AI solutions for every business",
      icon: Rocket,
      color: "from-blue-500 to-cyan-500",
      badge: "Featured",
      link: "/ultimate-services-2026"
      title: "Quantum AI Breakthrough",
      description: "Next-generation quantum-enhanced AI systems",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      badge: "Coming Soon",
      link: "/quantum-ai-breakthrough"
    }
  ];
  const benefits = [
    "Latest AI insights and trends",
    "Proven business solutions",
    "Expert analysis and predictions",
    "Real-world case studies",
    "Industry best practices",
    "Future technology previews"
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/5 to-blue-600/5"></div>
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm font-medium mb-6">
            <Star className="w-5 h-5 mr-2" />
            Fresh Content Available
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Discover Our
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Latest</span>
            <br />
            AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with our cutting-edge AI content, featuring the latest trends, 
            breakthrough technologies, and industry insights that matter most.
          </p>
        </div>
        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {newContent.map((content, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                {/* Badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    content.badge === 'New' ? 'bg-green-500/20 text-green-400' :
                    content.badge === 'Featured' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-orange-500/20 text-orange-400'
                  }`}>
                    {content.badge}
                  </div>
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${content.color}`}>
                    <content.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{content.title}</h3>
                <p className="text-gray-300 mb-6">{content.description}</p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                  Explore Content
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </div>
            </div>
          ))}
        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-3xl p-12 border border-slate-700/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our Content?
              </h3>
              <p className="text-lg text-gray-300 mb-8">
                Our content is carefully curated by AI experts and industry leaders to provide you with 
                the most valuable insights and actionable strategies for your business.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-green-400">
                    <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="font-medium">{benefit}</span>
                ))}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-6 border border-purple-500/30">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  <div>
                    <h4 className="text-lg font-bold text-white">Industry Leading</h4>
                    <p className="text-purple-300 text-sm">Trusted by 500+ companies</p>
                <p className="text-gray-300 text-sm">
                  Our content is backed by real-world implementations and proven results across diverse industries.
                </p>
              <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl p-6 border border-blue-500/30">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mr-4">
                    <Award className="w-6 h-6 text-white" />
                    <h4 className="text-lg font-bold text-white">Expert Curation</h4>
                    <p className="text-blue-300 text-sm">50+ industry awards</p>
                  Content is carefully selected and reviewed by leading AI experts and thought leaders.
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 text-sm font-medium mb-6">
            <Clock className="w-5 h-5 mr-2" />
            Limited Time Access
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Exclusive Access Today
          </h3>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who trust our content to stay ahead of the AI revolution. 
            Get instant access to all premium content and updates.
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25">
              Get Instant Access
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <button className="px-8 py-4 border-2 border-purple-400 text-purple-300 font-semibold rounded-full hover:bg-purple-500/20 transition-all duration-300">
              Learn More
    </div>
  );
}
