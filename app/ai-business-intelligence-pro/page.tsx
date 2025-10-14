import React from 'react';
import { Helmet } from "react-helmet-async";
import { Brain } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Target } from 'lucide-react';
import { Zap } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

function AIBusinessIntelligencePro() {
  const features = [
    {
      icon: Brain,
      title: 'AI Analytics',
      description: 'Advanced AI-powered analytics for deep business insights and predictions.'
    },
    {
      icon: BarChart3,
      title: 'Data Visualization',
      description: 'Interactive dashboards and reports with real-time data visualization.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Monitor KPIs and business metrics with automated reporting.'
    },
    {
      icon: Target,
      title: 'Goal Setting',
      description: 'Set and track business objectives with AI-driven recommendations.'
    },
    {
      icon: Zap,
      title: 'Real-time Insights',
      description: 'Get instant insights and alerts for critical business events.'
    },
    {
      icon: CheckCircle,
      title: 'ROI Optimization',
      description: 'Maximize return on investment with data-driven decision making.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Business Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered business intelligence solutions with real-time analytics and predictive insights." />
        <meta name="keywords" content="AI business intelligence, analytics, data visualization, business insights" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Business Intelligence <span className="text-cyan-400">Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Advanced AI-powered business intelligence solutions with real-time analytics and predictive insights.
            </p>
            <Link
              to="/contact"
              className="bg-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-700 transition-colors inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Advanced BI Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const page = React.lazy(() => import('./page'));
export default page;

