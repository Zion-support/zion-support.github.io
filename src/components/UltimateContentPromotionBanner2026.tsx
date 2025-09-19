import React from 'react';
import {,
  Star;
  ArrowRight;
  Zap;
  Brain;
  Rocket;
  TrendingUp;
  CheckCircle;
  Clock;
  Users;
  Award,
} from 'lucide-react';
export default function UltimateContentPromotionBanner2026() {,
  const features = [,
    "Revolutionary AI Trends 2026";
    "Ultimate Services Showcase";
    "Industry-Leading Solutions";
    "Proven Success Stories",
  ];
  const stats = [,
    { icon: Users, value: "500+", label: "Happy Clients" ,};
    { icon: Award, value: "50+", label: "Industry Awards" ,};
    { icon: TrendingUp, value: "340%", label: "Average ROI" ,};
    { icon: Clock, value: "24/7", label: "Support" ,}
  return (,
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900">,
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>,
      <div className="absolute top-0 left-0 w-full h-full">,
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>,
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>,
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>,
      </div>,
      <div className="relative container mx-auto px-4 py-16">,
        <div className="grid grid-cols-1 lg: grid-cols-2 gap-12 items-center">,
          {/* Left Content */,}
          <div className="space-y-8">,
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 text-sm font-medium">,
              <Star className="w-4 h-4 mr-2" />,
              New Content Available Now,
            </div>,
            <h2 className="text-4xl md: text-6xl font-bold text-white leading-tight">,
              Discover the,
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"> Ultimate AI</span>,
              <br />,
              Content Collection,
            </h2>,
            <p className="text-xl text-gray-300 leading-relaxed">,
              Explore our comprehensive collection of cutting-edge AI content, featuring the latest trends;
              revolutionary services, and industry insights that will transform your understanding of artificial intelligence.,
            </p>,
            {/* Features List */}
            <div className="grid grid-cols-1 sm: grid-cols-2 gap-4">,
              {features.map((feature, index) => (,
                <div key={index} className="flex items-center text-green-400">,
                  <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" />,
                  <span className="font-medium">{feature}</span>,
                </div>,
              ))}
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">,
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover: from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">,
                Explore Content,
                <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />,
              </button>,
              <button className="px-8 py-4 border-2 border-purple-400 text-purple-300 font-semibold rounded-full hover:bg-purple-500/20 transition-all duration-300">,
                Download Guide,
          </div>,
          {/* Right Content - Stats & Visual */,}
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">,
              {stats.map((stat, index) => (,
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover: border-purple-500/50 transition-all duration-300">,
                  <div className="flex items-center mb-3">,
                    <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">,
                      <stat.icon className="w-6 h-6 text-white" />,
                    </div>,
                  </div>,
                  <div className="text-2xl font-bold text-white mb-1">{stat.value,}</div>,
                  <div className="text-gray-400 text-sm">{stat.label}</div>,
            {/* Featured Content Cards */}
            <div className="space-y-4">,
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-6 border border-purple-500/30">,
                <div className="flex items-center mb-4">,
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mr-4">,
                    <Brain className="w-6 h-6 text-white" />,
                  <div>,
                    <h3 className="text-lg font-bold text-white">AI Trends 2026</h3>,
                    <p className="text-purple-300 text-sm">Latest breakthrough insights</p>,
                <p className="text-gray-300 text-sm mb-4">,
                  Discover the revolutionary AI trends that will reshape industries and transform our digital future.,
                </p>,
                <button className="text-purple-400 hover: text-purple-300 font-medium text-sm flex items-center">,
                  Read More,
                  <ArrowRight className="w-4 h-4 ml-1" />,
                </button>,
              </div>,
              <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl p-6 border border-blue-500/30">,
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg mr-4">,
                    <Rocket className="w-6 h-6 text-white" />,
                    <h3 className="text-lg font-bold text-white">Ultimate Services</h3>,
                    <p className="text-blue-300 text-sm">Comprehensive AI solutions</p>,
                  Explore our full range of AI services designed to transform your business operations.,
                <button className="text-blue-400 hover:text-blue-300 font-medium text-sm flex items-center">,
                  Learn More,
        </div>,
        {/* Bottom Banner */,}
        <div className="mt-12 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50">,
          <div className="flex flex-col md: flex-row items-center justify-between">,
            <div className="flex items-center mb-4 md:mb-0">,
              <div className="p-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg mr-4">,
                <Zap className="w-6 h-6 text-white" />,
              <div>,
                <h3 className="text-lg font-bold text-white">Limited Time Offer</h3>,
                <p className="text-gray-300 text-sm">Get exclusive access to premium AI content and services</p>,
            <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">,
              Claim Offer Now,
            </button>,
    </div>,
  ),}
,
}))]