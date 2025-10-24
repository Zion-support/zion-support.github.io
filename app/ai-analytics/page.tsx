'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer.tsx';
import { CheckCircle, Brain, BarChart, Target, TrendingUp, Zap, Eye } from 'lucide-react';

const AIAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Get instant insights with real-time data processing and visualization.',
      benefits: ['Live dashboards', 'Real-time alerts', 'Instant reporting', 'Dynamic updates']
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Leverage machine learning to uncover hidden patterns and predictions.',
      benefits: ['Predictive modeling', 'Pattern recognition', 'Automated insights', 'Smart recommendations']
    },
    {
      icon: Target,
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards tailored to your business needs.',
      benefits: ['Drag-and-drop builder', 'Custom widgets', 'Role-based views', 'Mobile responsive']
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Monitor key metrics and track performance across all channels.',
      benefits: ['KPI monitoring', 'Trend analysis', 'Performance alerts', 'Growth tracking']
    },
    {
      icon: Zap,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with AI assistance.',
      benefits: ['Scheduled reports', 'Custom templates', 'Data visualization', 'Export options']
    },
    {
      icon: Eye,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable visualizations.',
      benefits: ['Interactive charts', 'Multiple chart types', 'Real-time updates', 'Export capabilities']
    }
    ];
    return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="...">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="...">
            <h1 className="...">
              AI Analytics
              <span className="...">
                Platform
              </span>
            </h1>
            <p className="...">
              Transform your data into actionable insights with our AI-powered analytics platform. 
              Get real-time dashboards, predictive analytics, and automated reporting.
            </p>
            <div className="...">
              <button className="...">
                Get Started
              </button>
              <button className="...">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="...">
          <div className="...">
            <div className="...">
              <h2 className="...">
                Powerful Analytics Features
              </h2>
              <p className="...">
                Our AI analytics platform provides everything you need to make data-driven decisions 
                and gain competitive advantages.
              </p>
            </div>
            
            <div className="...">
              {features.map((feature, index) => (
                <div key={index} className="...">
                  <div className="...">
                    <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="...">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="...">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIAnalyticsPage;