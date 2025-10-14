import React from 'react';
import { ArrowRight, BarChart3, Brain, CheckCircle, TrendingUp, PieChart, Activity, Target } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIDataAnalyticsPro = () => {
  const features = [
    {
      title: "Real-time Analytics",""
      description: "Process and analyze data in real-time with advanced AI algorithms",""
      icon: <Activity className="w-6 h-6" />,""
      color: "from-blue-500 to-cyan-500"""
    },
    {
      title: "Predictive Modeling",""
      description: "Build accurate predictive models using machine learning",""
      icon: <TrendingUp className="w-6 h-6" />,""
      color: "from-green-500 to-emerald-500"""
    },
    {
      title: "Data Visualization",""
      description: "Create stunning interactive dashboards and reports",""
      icon: <PieChart className="w-6 h-6" />,""
      color: "from-purple-500 to-pink-500"""
    },
    {
      title: "Automated Insights",""
      description: "Get AI-powered insights and recommendations automatically",""
      icon: <Brain className="w-6 h-6" />,""
      color: "from-orange-500 to-red-500"""
    }
  ];

  const benefits = [
    "40% faster data processing",""
    "99.9% accuracy in predictions",""
    "Real-time dashboard updates",""
    "Automated report generation",""
    "Multi-source data integration",""
    "Advanced security protocols"""
  ];
import { Helmet } from "react-helmet-async";
;
const HomePage = () => {"
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>"
        <title>Home - Zion Tech Group</title>""
        <meta name="description" content="Home - Zion Tech Group" />"
      </Helmet>""
      <div className=container mx-auto px-4 py-16></div>"""
        <div className=text-center></div>"""
          <h1 className=text-4xl font-bold text-white mb-8>Home</h1>""
          <p className="text-gray-300 text-lg">""
            This page is under construction. Please check back later.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
"""
"""
