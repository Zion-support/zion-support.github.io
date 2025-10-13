<<<<<<< HEAD
'use client'.
import React from 'react'.
import {Helmet}}from 'react-helmet-async'.
import Navigation from '../components/Navigation'.
import Footer from '../components/Footer'.
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings}}from 'lucide-react'.
const LoadingPage: React.FC = () => {,
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']},'
    {icon: BarChart,
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']},'
    {icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']},'
    {icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']},'
  ]
      <Helmet />
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    <React.Fragment>
      <Helmet>
};

export default LoadingPage.
};

export default LoadingPage.
=======
import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Loading...</h2>
        <p className="text-gray-600">
          Please wait while we load the content.
        </p>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9cbf
