import React from 'react';
import { BarChart, Brain, TrendingUp, Database, Users, Target, Zap, Shield, Globe, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AIBusinessIntelligencePage: React.FC = () => {
  const features = [
    'AI-Powered Data Analysis',
    'Predictive Analytics',
    'Real-time Dashboards',
    'Automated Reporting',
    'Data Integration',
    'Custom Visualizations',
    'Machine Learning Models',
    'Natural Language Queries',
    'Anomaly Detection',
    'Performance Optimization'
  ];

  const benefits = [
    '50% faster insights',
    'Automated reporting',
    'Better decisions',
    'Competitive advantage',
    'Cost reduction',
    'Scalable analytics'
  ];

  const useCases = [
    {
      title: 'Sales Forecasting',
      description: 'Predict future sales trends and optimize inventory management',
      icon: TrendingUp
    },
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior and improve retention strategies',
      icon: Users
    },
    {
      title: 'Financial Analysis',
      description: 'Automated financial reporting and risk assessment',
      icon: BarChart
    },
    {
      title: 'Operational Intelligence',
      description: 'Monitor and optimize business operations in real-time',
      icon: Settings
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Business Intelligence - Zion Tech Group"
        description="Advanced AI-powered business intelligence solutions with predictive analytics, automated reporting, and real-time insights for data-driven decision making."
        keywords={['AI business intelligence', 'predictive analytics', 'data visualization', 'automated reporting', 'machine learning', 'business analytics']}
        canonicalUrl="https://ziontechgroup.com/ai-business-intelligence"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
              AI Business Intelligence
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your data into actionable insights with AI-powered business intelligence solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <span>+1 302 464 0950</span>
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Pricing</h2>
            <div className="max-w-4xl mx-auto">
              <div className="cyber-card p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">AI Business Intelligence</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-6">$3,200/month</div>
                <p className="text-gray-300 mb-8">
                  Advanced business intelligence with AI-driven insights and automated reporting
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Features Included:</h4>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        AI Insights
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Automated Reporting
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Predictive Analytics
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        Real-time Dashboards
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Benefits:</h4>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        50% faster insights
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Automated reporting
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Better decisions
                      </li>
                      <li className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                        Competitive advantage
                      </li>
                    </ul>
                  </div>
                </div>
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIBusinessIntelligencePage;