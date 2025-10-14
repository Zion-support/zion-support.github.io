import React from 'react';
import { Helmet } from "react-helmet-async";
import { Brain } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Target } from 'lucide-react';
import { Zap } from 'lucide-react';
import { CheckCircle } from 'lucide-react';

function AIBusinessIntelligencePro() {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Analytics",
      description: "Leverage cutting-edge AI algorithms to analyze complex business data and uncover hidden insights."
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Monitor key performance indicators with interactive, real-time dashboards that update automatically."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast future trends and outcomes using machine learning models trained on your historical data."
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set and track business objectives with intelligent goal-setting and progress monitoring tools."
    },
    {
      icon: Zap,
      title: "Automated Reporting",
      description: "Generate comprehensive reports automatically with customizable templates and scheduling options."
    },
    {
      icon: CheckCircle,
      title: "Data Quality Assurance",
      description: "Ensure data accuracy and consistency with automated quality checks and validation processes."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Business Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered business intelligence solutions for data-driven decision making" />
        <meta name="keywords" content="AI business intelligence, data analytics, predictive analytics, business intelligence pro" />
      </Helmet>
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AI Business Intelligence Pro
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business data into actionable insights with our advanced AI-powered business intelligence platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-colors">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AIBusinessIntelligencePro;
