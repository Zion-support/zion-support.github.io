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
      description: "Advanced machine learning algorithms for deep business insights"
    },
    {
      icon: BarChart3,
      title: "Real-time Dashboards",
      description: "Interactive dashboards with live data visualization"
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions"
    },
    {
      icon: Target,
      title: "Custom Reports",
      description: "Tailored reporting solutions for your business needs"
    },
    {
      icon: Zap,
      title: "Automated Insights",
      description: "AI-generated insights and recommendations"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamless integration with existing data sources"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Business Intelligence Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered business intelligence solutions for data-driven decision making" />
        <meta name="keywords" content="AI, business intelligence, analytics, data visualization, predictive analytics" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Business Intelligence Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business data into actionable insights with our advanced AI-powered business intelligence platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Why Choose Our AI Business Intelligence?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Expert Solutions
                </h3>
                <p className="text-blue-700">
                  Our team of AI experts delivers cutting-edge business intelligence solutions.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Custom Implementation
                </h3>
                <p className="text-green-700">
                  Tailored implementations for your specific business requirements.
                </p>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-purple-700">
                  Round-the-clock support for all your business intelligence needs.
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">
                  Scalable Platform
                </h3>
                <p className="text-orange-700">
                  Enterprise-grade platform that grows with your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AIBusinessIntelligencePro;
    