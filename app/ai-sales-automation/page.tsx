'use client';
import React from 'react';
import { TrendingUp, Target, Users, ArrowRight, CheckCircle, Clock, BarChart, Zap, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AISalesAutomationPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Lead Scoring & Qualification',
      description: 'AI automatically scores and qualifies leads based on behavior, demographics, and engagement patterns.'
    },
    {
      icon: Users,
      title: 'Customer Segmentation',
      description: 'Intelligent customer segmentation for personalized sales approaches and targeted campaigns.'
    },
    {
      icon: BarChart,
      title: 'Sales Forecasting',
      description: 'Predictive analytics to forecast sales trends and identify opportunities for growth.'
    },
    {
      icon: Zap,
      title: 'Automated Follow-ups',
      description: 'AI-powered follow-up sequences that adapt based on customer responses and engagement.'
    }
  ];

  const benefits = [
    'Increase sales conversion by 35%',
    'Reduce sales cycle time by 50%',
    'Improve lead qualification accuracy by 80%',
    'Automate 70% of sales processes',
    'Real-time sales insights and analytics',
    'Personalized customer interactions'
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Sales Automation - Zion Tech Group"
        description="Boost sales performance with AI-powered automation. Increase conversions by 35% and reduce sales cycle time by 50% with intelligent sales tools."
        keywords={['AI sales automation', 'sales AI', 'lead scoring', 'sales forecasting', 'customer segmentation', 'sales optimization']}
        canonicalUrl="https://ziontechgroup.com/ai-sales-automation"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                  <TrendingUp className="w-4 h-4" />
                  <span>AI Sales Automation</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Intelligent
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Sales Automation</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Transform your sales process with AI-powered automation. Increase conversions by 35%, reduce sales cycle time by 50%, and maximize revenue with intelligent sales tools.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg">
                  <Target className="w-5 h-5 mr-2" />
                  Boost Sales Performance
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-all duration-300 text-lg">
                  View Demo
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">35%</div>
                  <div className="text-sm text-gray-400">Higher Conversion</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">50%</div>
                  <div className="text-sm text-gray-400">Faster Sales Cycle</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">80%</div>
                  <div className="text-sm text-gray-400">Better Lead Quality</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">Sales AI Active</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-cyan-400 text-sm">Lead Scoring</span>
                        <span className="text-green-400 text-sm">95% Accuracy</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-400 text-sm">Sales Forecast</span>
                        <span className="text-green-400 text-sm">+25% Growth</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-pink-400 text-sm">Follow-ups</span>
                        <span className="text-yellow-400 text-sm">Automated</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-pink-400 to-orange-400 h-2 rounded-full w-3/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced Sales Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI sales automation platform combines machine learning, predictive analytics, and intelligent automation to maximize your sales performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our AI Sales Automation?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI sales automation solutions deliver measurable improvements in conversion rates, sales cycle time, and revenue generation.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl font-bold text-cyan-400 mb-2">35%</div>
                  <div className="text-white text-xl">Higher Conversion</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">50%</div>
                    <div className="text-sm text-gray-300">Faster Cycle</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">80%</div>
                    <div className="text-sm text-gray-300">Better Leads</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Boost your sales performance with AI-powered automation. Increase conversions and revenue with intelligent sales tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg">
                <Clock className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-all duration-300 text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AISalesAutomationPage;