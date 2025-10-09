'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BarChart, PieChart, TrendingUp, Eye, Brain, Zap, CheckCircle, ArrowRight, Star, Globe, Smartphone, Code, Database, Cloud, Lock, Users, Target } from 'lucide-react';

const AIDataVisualizationPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards that automatically update with real-time data insights.'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Automatically discover patterns, trends, and anomalies in your data using machine learning.'
    },
    {
      icon: Eye,
      title: 'Natural Language Queries',
      description: 'Ask questions about your data in plain English and get instant visual answers.'
    },
    {
      icon: Zap,
      title: 'Real-Time Analytics',
      description: 'Monitor key metrics and KPIs with live data streaming and instant visual updates.'
    },
    {
      icon: PieChart,
      title: 'Advanced Chart Types',
      description: 'Access 50+ chart types including heatmaps, treemaps, and custom visualizations.'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Visualizations',
      description: 'Forecast future trends and outcomes with AI-powered predictive analytics.'
    }
  ];

  const capabilities = [
    {
      title: 'Data Integration',
      description: 'Connect to 100+ data sources including databases, APIs, and cloud platforms.',
      icon: Database
    },
    {
      title: 'Custom Visualizations',
      description: 'Build custom charts and visualizations tailored to your specific business needs.',
      icon: Code
    },
    {
      title: 'Collaborative Sharing',
      description: 'Share insights and dashboards with team members and stakeholders securely.',
      icon: Users
    },
    {
      title: 'Mobile Responsive',
      description: 'Access and interact with visualizations on any device, anywhere.',
      icon: Smartphone
    },
    {
      title: 'Automated Reports',
      description: 'Generate and schedule automated reports with AI-generated insights.',
      icon: Target
    },
    {
      title: 'Data Storytelling',
      description: 'Create compelling data stories that drive action and decision-making.',
      icon: Globe
    }
  ];

  const benefits = [
    'Reduce data analysis time by 75%',
    'Improve decision-making speed by 60%',
    'Increase data accessibility across teams',
    'Automate report generation and distribution',
    'Enable self-service analytics for all users',
    'Drive data-driven culture organization-wide'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              <BarChart className="w-4 h-4 mr-2" />
              AI Data Visualization
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Intelligent Data
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> Visualization</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform complex data into actionable insights with AI-powered visualizations that tell compelling stories and drive informed decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Visualization Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI data visualization platform combines machine learning, natural language processing, and advanced charting to make data accessible to everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Data Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From data integration to automated insights, our platform handles every aspect of data visualization and analysis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                <p className="text-gray-300">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Measurable Business Impact
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our AI data visualization solutions deliver quantifiable results that transform how your organization uses data.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl p-8 border border-purple-500/30">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">75%</div>
                <div className="text-gray-300 mb-6">Faster Data Analysis</div>
                <div className="text-4xl font-bold text-white mb-2">60%</div>
                <div className="text-gray-300 mb-6">Faster Decision Making</div>
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-gray-300">Data Sources Supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Visualize Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of organizations already using AI to transform their data into actionable insights and better decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button inline-flex items-center px-8 py-4 text-lg">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIDataVisualizationPage;