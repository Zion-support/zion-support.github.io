'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { BarChart, PieChart, TrendingUp, Eye, Brain, Zap, Shield, Users, CheckCircle, Phone, Mail, ArrowRight, Database, Globe, Settings } from 'lucide-react';
const AIDataVisualizationPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards that bring your data to life with real-time updates.',
      benefits: ['Real-time Updates', 'Customizable Layouts', 'Interactive Elements', 'Mobile Responsive']
    },
    {
      icon: PieChart,
      title: 'Advanced Chart Types',
      description: 'Comprehensive library of chart types including 3D visualizations and custom graphics.',
      benefits: ['50+ Chart Types', '3D Visualizations', 'Custom Graphics', 'Animation Effects']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI-powered predictive analytics that forecast trends and identify patterns in your data.',
      benefits: ['Trend Forecasting', 'Pattern Recognition', 'Anomaly Detection', 'Risk Assessment']
    },
    {
      icon: Eye,
      title: 'Data Storytelling',
      description: 'Transform complex data into compelling visual stories that drive decision-making.',
      benefits: ['Narrative Flow', 'Contextual Insights', 'Actionable Recommendations', 'Executive Summaries']
    }
  ];

  const pricing = [
    {
      name: 'Basic',
      price: '$299/month',
      description: 'Perfect for small teams',
      features: ['Up to 5 dashboards', 'Basic chart types', 'Standard templates', 'Email support']
    },
    {
      name: 'Professional',
      price: '$599/month',
      description: 'Ideal for growing businesses',
      features: ['Up to 25 dashboards', 'All chart types', 'Custom templates', 'Priority support', 'API access']
    },
    {
      name: 'Enterprise',
      price: '$1,199/month',
      description: 'For large organizations',
      features: ['Unlimited dashboards', 'Custom development', 'White-label options', '24/7 support', 'Dedicated account manager']
    }
  ];

  const stats = [
    { number: '95%', label: 'Faster Insights' },
    { number: '100+', label: 'Data Sources' },
    { number: '50+', label: 'Chart Types' },
    { number: '24/7', label: 'Real-time Updates' }
  ];
  const useCases = [
    {
      title: 'Sales Analytics',
      description: 'Track sales performance, pipeline health, and revenue trends with interactive dashboards and AI-powered predictions.',
      icon: TrendingUp
    },
    {
      title: 'Marketing ROI',
      description: 'Visualize marketing campaign performance, customer acquisition costs, and ROI across all channels.',
      icon: Globe
    },
    {
      title: 'Operations Monitoring',
      description: 'Monitor key operational metrics, identify bottlenecks, and optimize processes with real-time dashboards.',
      icon: Settings
    },
    {
      title: 'Financial Reporting',
      description: 'Create comprehensive financial reports with automated data collection and intelligent insights.',
      icon: Database
    }
  ];
  return (
    <>
      <SEOOptimizer
        title="AI Data Visualization Platform - Zion Tech Group"
        description="Transform data into actionable insights with AI-powered visualization. 95% faster insights, 100+ data sources, and interactive dashboards."
        keywords={['data visualization', 'business intelligence', 'dashboards', 'data analytics', 'AI insights']}
        canonicalUrl="https://ziontechgroup.com/ai-data-visualization"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-16">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Data Visualization Platform
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
                Transform data into actionable insights with AI
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI-powered data visualization platform helps businesses make data-driven decisions 
                with interactive dashboards, intelligent insights, and 100+ data source integrations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Get Free Demo</span>
                </a>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default AIDataVisualizationPage;
