import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Brain, Zap, ArrowRight, CheckCircle, Star, Award, BarChart3 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIHRRecruitmentProPage = () => {
  const features = [
    {
      title: "AI-Powered Candidate Screening",
      description: "Automatically screen and rank candidates using advanced AI algorithms and natural language processing",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Automated resume parsing", "Skill matching", "Cultural fit analysis"]
    },
    {
      title: "Intelligent Interview Scheduling",
      description: "Smart scheduling system that coordinates interviews across multiple time zones and preferences",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Auto-scheduling", "Calendar integration", "Time zone optimization"]
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven insights to predict candidate success and optimize recruitment strategies",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Success prediction", "Retention analysis", "Performance forecasting"]
    }
  ];

  const stats = [
    { number: "75%", label: "Faster Hiring", icon: <Zap className="w-6 h-6" /> },
    { number: "90%", label: "Better Matches", icon: <Award className="w-6 h-6" /> },
    { number: "50%", label: "Cost Reduction", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "24/7", label: "AI Processing", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="AI HR & Recruitment Pro - Zion Tech Group | Intelligent Talent Acquisition"
        description="Revolutionize your hiring process with AI-powered recruitment tools. Automated screening, intelligent matching, and predictive analytics for better talent acquisition."
        keywords="AI recruitment, HR automation, talent acquisition, candidate screening, hiring analytics, recruitment AI"
        canonical="https://ziontechgroup.com/ai-hr-recruitment-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI HR & Recruitment Pro
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionize your hiring process with AI-powered recruitment tools. Find the best candidates faster, 
            reduce bias, and make data-driven hiring decisions with our intelligent platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton href="/contact" variant="primary" size="lg">
              Get Started Today
            </FuturisticButton>
            <FuturisticButton href="/demo" variant="outline" size="lg">
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Intelligent Recruitment Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform transforms every aspect of the recruitment process
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-8">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Hiring Process?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of companies already using our AI recruitment platform to find and hire the best talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton href="/contact" variant="primary" size="lg">
              Start Your Recruitment Journey
            </FuturisticButton>
            <FuturisticButton href="/pricing" variant="outline" size="lg">
              View Pricing
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIHRRecruitmentProPage;