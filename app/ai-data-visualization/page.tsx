'use client';
import React from 'react';
import { BarChart3, PieChart, TrendingUp, ArrowRight, CheckCircle, Clock, Users, Zap, Eye } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIDataVisualizationPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards that automatically update with real-time data insights.'
    },
    {
      icon: PieChart,
      title: 'Smart Chart Generation',
      description: 'AI automatically selects the best chart types and visualizations for your data patterns.'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Visualize future trends and predictions with AI-powered forecasting and trend analysis.'
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Monitor key metrics and KPIs with live data visualization and instant alerts.'
    }
  ];

  const benefits = [
    'Create visualizations 10x faster',
    'Reduce data analysis time by 70%',
    'Improve decision-making accuracy by 60%',
    'Automated chart and dashboard generation',
    'Real-time data synchronization',
    'Interactive and responsive designs'
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Data Visualization - Zion Tech Group"
        description="Transform your data into actionable insights with AI-powered visualization tools. Create dashboards 10x faster and improve decision-making by 60%."
        keywords={['AI data visualization', 'data dashboards', 'business intelligence', 'data analytics', 'chart generation', 'data insights']}
        canonicalUrl="https://ziontechgroup.com/ai-data-visualization"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm">
                  <BarChart3 className="w-4 h-4" />
                  <span>AI Data Visualization</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Transform Data Into
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Insights</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Create stunning data visualizations and interactive dashboards with AI-powered tools. Make data-driven decisions 10x faster with intelligent analytics.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Start Visualizing
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 rounded-lg transition-all duration-300 text-lg">
                  View Examples
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">10x</div>
                  <div className="text-sm text-gray-400">Faster Creation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">70%</div>
                  <div className="text-sm text-gray-400">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">60%</div>
                  <div className="text-sm text-gray-400">Better Decisions</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium">Visualization Engine Active</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-cyan-400 text-sm">Sales Dashboard</span>
                        <span className="text-green-400 text-sm">Live</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-cyan-400 to-purple-400 h-2 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-purple-400 text-sm">Analytics Report</span>
                        <span className="text-green-400 text-sm">Generated</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-pink-400 text-sm">Predictive Model</span>
                        <span className="text-yellow-400 text-sm">Learning</span>
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
              Advanced Data Visualization Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI data visualization platform combines machine learning, real-time analytics, and intelligent design to create compelling data stories.
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
                Why Choose Our AI Data Visualization?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI data visualization tools deliver measurable improvements in data analysis speed, decision-making accuracy, and business insights.
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
                  <div className="text-6xl font-bold text-cyan-400 mb-2">10x</div>
                  <div className="text-white text-xl">Faster Creation</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">70%</div>
                    <div className="text-sm text-gray-300">Time Saved</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                    <div className="text-2xl font-bold text-green-400">60%</div>
                    <div className="text-sm text-gray-300">Better Decisions</div>
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
              Ready to Visualize Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform your data into actionable insights with AI-powered visualization tools. Start creating stunning dashboards today.
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

export default AIDataVisualizationPage;