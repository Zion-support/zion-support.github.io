import React from 'react';
import { Helmet } from "react-helmet-async";
import { Brain } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Target } from 'lucide-react';
import { Zap } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Star } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Users } from 'lucide-react';
import { Database } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Link } from "react-router-dom";

function AIBusinessIntelligencePro() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms for deep data insights and predictive analytics."
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Interactive dashboards with real-time data visualization and customizable metrics."
    },
    {
      icon: TrendingUp,
      title: "Predictive Modeling",
      description: "Forecast trends and outcomes with sophisticated predictive modeling capabilities."
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Monitor and track business goals with automated progress reporting and alerts."
    },
    {
      icon: Zap,
      title: "Automated Reports",
      description: "Generate comprehensive reports automatically with intelligent data interpretation."
    },
    {
      icon: CheckCircle,
      title: "Data Quality Assurance",
      description: "Ensure data accuracy and consistency with automated quality checks and validation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Business Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered business intelligence solutions for data-driven decision making" />
        <meta name="keywords" content="AI business intelligence, data analytics, predictive modeling, business insights" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Business Intelligence Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business data into actionable insights with our advanced AI-powered 
              business intelligence platform designed for enterprise decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                <feature.icon className="h-12 w-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Data?</h2>
            <p className="text-gray-300 mb-6">
              Contact our business intelligence experts to learn how AI Business Intelligence Pro can drive your success.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const page = React.lazy((): Promise<{ default: React.ComponentType<any> }> => import('./page'));
export default page;