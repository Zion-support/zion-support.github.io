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
      title: "Advanced Analytics",
      description: "Leverage AI-powered analytics to uncover hidden patterns and insights in your business data."
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Monitor key performance indicators with interactive, real-time dashboards."
    },
    {
      icon: TrendingUp,
      title: "Predictive Modeling",
      description: "Forecast future trends and outcomes using machine learning algorithms."
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set and track business objectives with intelligent progress monitoring."
    },
    {
      icon: Zap,
      title: "Automated Reports",
      description: "Generate comprehensive reports automatically with customizable templates."
    },
    {
      icon: CheckCircle,
      title: "Data Validation",
      description: "Ensure data quality and accuracy with automated validation processes."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Business Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered business intelligence solutions for data-driven decision making" />
        <meta name="keywords" content="AI business intelligence, data analytics, predictive modeling, business intelligence" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">AI Business Intelligence Pro</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business data into actionable insights with our advanced AI-powered business intelligence platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-cyan-500 p-3 rounded-lg mr-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business Intelligence?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI-powered BI solutions to make smarter, data-driven decisions.
            </p>
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
            >
              Start Your Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default AIBusinessIntelligencePro;