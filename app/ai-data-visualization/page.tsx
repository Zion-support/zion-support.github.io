'use client';
import React from 'react';
import { CheckCircle, Star, BarChart3, PieChart, TrendingUp, Eye } from 'lucide-react';

const AIDataVisualizationPage: React.FC = () => {
  const features = [
    'AI-powered data analysis and insights',
    'Interactive dashboards and charts',
    'Real-time data visualization',
    'Custom dashboard builder',
    '100+ data source integrations',
    'Automated report generation',
    'Mobile-responsive design',
    'Collaborative sharing features',
    'Advanced filtering and drill-down',
    'Export to multiple formats'
  ];

  const chartTypes = [
    { name: 'Bar Charts', icon: BarChart3, description: 'Compare data across categories' },
    { name: 'Pie Charts', icon: PieChart, description: 'Show data distribution' },
    { name: 'Line Graphs', icon: TrendingUp, description: 'Track trends over time' },
    { name: 'Heat Maps', icon: Eye, description: 'Visualize data density' }
  ];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Data Visualization
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Transform data into actionable insights with AI-powered visualization
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
            Create stunning, interactive visualizations that reveal hidden patterns in your data 
            and help you make informed business decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button px-8 py-4 text-lg">
              Start Free Trial
            </button>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Powerful Visualization Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="cyber-card hologram-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Core Features</h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="cyber-card hologram-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Chart Types</h3>
              <div className="space-y-4">
                {chartTypes.map((chart, index) => (
                  <div key={index} className="flex items-center p-4 bg-slate-800/50 rounded-lg">
                    <chart.icon className="w-8 h-8 text-cyan-400 mr-4" />
                    <div>
                      <h4 className="text-lg font-semibold text-white">{chart.name}</h4>
                      <p className="text-gray-400 text-sm">{chart.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12 neon-text">
            Simple Pricing
          </h2>
          
          <div className="cyber-card hologram-card p-8">
            <div className="text-4xl font-bold text-cyan-400 mb-4">Starting at $149/month</div>
            <p className="text-gray-300 mb-8">
              Includes unlimited dashboards, 100+ data sources, and AI-powered insights
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">100+</div>
                <div className="text-gray-400">Data Sources</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">Unlimited</div>
                <div className="text-gray-400">Dashboards</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-2">AI-Powered</div>
                <div className="text-gray-400">Insights</div>
              </div>
            </div>
            
            <button className="cyber-button px-8 py-4 text-lg">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Ready to Visualize Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start creating stunning visualizations that reveal the story behind your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button px-8 py-4 text-lg">
                Start Free Trial
              </button>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AIDataVisualizationPage;