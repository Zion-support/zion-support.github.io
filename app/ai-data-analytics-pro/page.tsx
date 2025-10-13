import React from 'react';
import { TrendingUp, Sparkles, ArrowRight, CheckCircle, Star, Zap, Brain, PieChart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';
import { PieChart } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Sparkles } from 'lucide-react';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8

const AIDataAnalyticsProPage = () => {
  const benefits = [
    {
      title: "Expert Team",
      description: "Our team of AI and technology experts delivers exceptional results.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Proven Results",
      description: "We have a track record of successful projects and satisfied clients.",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your success.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Innovation",
      description: "Cutting-edge solutions that keep you ahead of the competition.",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      description: "Comprehensive data analysis with machine learning algorithms",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Predictive Modeling",
      description: "Forecast trends and patterns with AI-powered predictions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Real-time Processing",
      description: "Process and analyze data streams in real-time",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Insights",
      description: "Get intelligent recommendations and automated insights",
      color: "from-orange-500 to-red-500"
    }
  ];

export default function AiDataAnalyticsProPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Data Analytics Pro - Zion Tech Group</title>
        <meta name="description" content="Ai Data Analytics Pro solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Data Analytics Pro</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai data analytics pro solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

}