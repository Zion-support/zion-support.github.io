import React from 'react'.
import Link from 'next/link'.
import React, { Star, Users, TrendingUp, Award, Sparkles } from 'lucide-react'.
interface FeaturedContent {
  id: number.
  title: string.
  category: string.
  readTime: string.
  rating: number.
  readers: string.
  badge: string.
  gradient: string.
  icon: React.ReactNode.
  link: string.
}

const NewContentAdvertisingBanner: React.FC = () => {
  const featuredContent: FeaturedContent[] = [
    {
      id: 0,
      title: 'Governed Agent Rollbacks',
      category: 'AI Operations',
      readTime: '7 min',
      rating: 5.0,
      readers: '25K+',
      badge: 'NEW',
      gradient: 'from-pink-500 to-red-500',
      icon: <Sparkles className="w-6 h-6" />,"
      link: '/blog/ai-2025-oct-03-governed-agent-rollbacks'
    },
    {
      id: 1,
      title: 'Consentless Personalization (Edge)',
      category: 'Edge Computing',
      readTime: '6 min',
      rating: 4.9,
      readers: '19K+',
      badge: 'FEATURED',
      gradient: 'from-teal-500 to-cyan-500',
      icon: <TrendingUp className="w-6 h-6" />,"
      link: '/blog/edge-2025-oct-02-consentless-personalization-blueprint'
    },
    {
      id: 2,
      title: 'AI 2027: Operational Trust Blueprint',
      category: 'AI Strategy',
      readTime: '8 min',
      rating: 4.9,
      readers: '58K+',
      badge: 'NEW',
      gradient: 'from-blue-500 to-purple-500',
      icon: <Star className="w-6 h-6" />,"
      link: '/blog/ai-2027-operational-trust-blueprint'
    },
    {
      id: 3,
      title: 'Edge 2026: Private Feature Flags',
      category: 'Architecture',
      readTime: '7 min',
      rating: 4.8,
      readers: '41K+',
      badge: 'TRENDING',
      gradient: 'from-cyan-500 to-blue-500',
      icon: <TrendingUp className="w-6 h-6" />,"
      link: '/blog/edge-2026-private-feature-flags'
    },
    {
      id: 4,
      title: 'GenAI Quality Tiers v2 (2026)',
      category: 'Gen AI',
      readTime: '8 min',
      rating: 4.9,
      readers: '47K+',
      badge: 'FEATURED',
      gradient: 'from-green-500 to-emerald-500',
      icon: <Award className="w-6 h-6" />,"
      link: '/blog/genai-quality-tiers-v2-2026'
    }
  ];

  const achievements = [
    { value: '500K+', label: 'Monthly Readers', icon: <Users className="w-8 h-8" /> },"'
    { value: '98%', label: 'Customer Satisfaction', icon: <Star className="w-8 h-8" /> },"'
    { value: '200+', label: 'Expert Articles', icon: <Award className="w-8 h-8" /> },"'
    { value: '50+', label: 'Industry Awards', icon: <TrendingUp className="w-8 h-8" /> }'
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">"
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" "
          style={{ animationDelay: '2s' }} 
        />
        <div 
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" "
          style={{ animationDelay: '4s' }} 
        />
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">"
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
          {/* Achievements Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">"
                <div className="text-indigo-400 mb-2 flex justify-center">
                  {achievement.icon}
            ))}
          {/* Featured Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {featuredContent.map((content, index) => (
              <div.
                key={content.id}
                className="group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-indigo-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Card glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${content.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`} />
                <div className="relative p-8">"
                  <div className="flex items-center gap-2 mb-4">"
                    <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${content.gradient} text-white`}>
                      {content.badge}
                      href={content.link}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <div className="w-4 h-4 text-indigo-400 group-hover:text-white" />
            ))}
          {/* Call to Action Section */}
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-3xl p-8 md:p-12 border border-indigo-500/20 mb-16">"
            <div className="text-center">"
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 mb-6">"
                <Star className="w-5 h-5 text-yellow-400 fill-current" />"
                <span className="text-yellow-400 font-bold text-sm tracking-wider uppercase">
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Link
                  href="/subscribe"
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Subscribe Now
                <Link
                  href="/blog"
                  className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
