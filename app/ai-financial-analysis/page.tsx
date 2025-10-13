import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Brain, Zap, ArrowRight, CheckCircle, Star, Users, Award, TrendingUp } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIFinancialAnalysisPage = () => {
  const features = [
    {
      title: "AI-Powered Financial Modeling",
      description: "Advanced machine learning models for accurate financial forecasting and risk assessment",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Predictive modeling", "Risk analysis", "Scenario planning"]
    },
    {
      title: "Real-time Market Analysis",
      description: "Continuous monitoring of market trends and financial indicators with AI insights",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["Live market data", "Trend analysis", "Alert systems"]
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive financial reports and insights automatically using AI",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Auto-generated reports", "Custom dashboards", "Regulatory compliance"]
    }
  ];

  const stats = [
    { number: "95%", label: "Accuracy Rate", icon: <Award className="w-6 h-6" /> },
    { number: "10x", label: "Faster Analysis", icon: <Zap className="w-6 h-6" /> },
    { number: "50+", label: "Data Sources", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Monitoring", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="AI Financial Analysis - Zion Tech Group | Advanced Financial Intelligence"
        description="Transform your financial analysis with AI-powered tools. Advanced modeling, real-time insights, and automated reporting for better financial decisions."
        keywords="AI financial analysis, financial modeling, risk assessment, market analysis, financial intelligence, fintech AI"
        canonical="https://ziontechgroup.com/ai-financial-analysis"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Financial Analysis
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your financial analysis with AI-powered tools. Get accurate predictions, 
            real-time insights, and automated reporting to make better financial decisions.
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
              Advanced Financial Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform provides comprehensive financial analysis and insights
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
            Ready to Revolutionize Your Financial Analysis?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of financial professionals already using our AI platform for smarter financial decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton href="/contact" variant="primary" size="lg">
              Start Your Financial AI Journey
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

export default AIFinancialAnalysisPage;