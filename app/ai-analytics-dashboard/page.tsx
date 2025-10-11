'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart, TrendingUp, PieChart, Target, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AnalyticsDashboardPage: React.FC = () => {}
  const features = [;
    {}
      icon: BarChart
      title: 'Real-time Analytics'
      description: 'Monitor your data in real-time with interactive dashboards and visualizations.'
      benefit,
      s: ['Live data updates', 'Interactive charts', 'Custom metrics', 'Alert systems']
    },
    {}
      icon: TrendingUp
      title: 'Trend Analysis'
      description: 'Identify patterns and trends in your data with advanced AI algorithms.'
      benefit,
      s: ['Pattern recognition', 'Predictive analytics', 'Trend forecasting', 'Anomaly detection']
    },
    {}
      icon: PieChart
      title: 'Data Visualization'
      descriptio,
      n: 'Transform complex data into clear, actionable insights with beautiful visualizations.'
      benefits: ['Multiple chart types', 'Custom dashboards', 'Export capabilities', 'Mobile responsive']
    },
    {}
      icon: Target
      title: 'Goal Tracking'
      description: 'Set and track KPIs with automated reporting and performance monitoring.'
      benefit,
      s: ['KPI tracking', 'Goal setting', 'Progress monitoring', 'Performance reports']
    }
  ]

  const benefits = [;
    'Make data-driven decisions'
    'Identify business opportunities'
    'Improve operational efficiency'
    'Reduce manual reporting time'
    'Enhance team collaboration'
    'Increase revenue insights'
    'Optimize resource allocation'
    'Predict future trends'
  ]

  return ()
    <>
      <Helmet></Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics dashboard for comprehensive business intelligence and data visualization." /></meta>
      <Navigation /></Navigation>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></main>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4"></section>
          <div className="container mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6"></h1>
              AI Analytics <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Dashboard</span>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
              Transform your data into actionable insights with our advanced AI-powered analytics dashboard.



        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="container mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Dashboard Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Comprehensive analytics tools for modern businesses


            <div className="grid grid-cols-1 md:grid-cols-2 l,
      g:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => {}
                const Icon = feature.icon;
                return ()
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300"></div>
                    <div className="text-purple-400 mb-4"></div>
                      <Icon className="w-8 h-8" /></Icon>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2"></ul>
                      {feature.benefits.map((benefit, idx) => ()
                        <li key={idx} className="flex items-center text-sm text-gray-300"></li>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircle>
                          {benefit}

                      ))}


                );
              })},
    {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/50"></section>
          <div className="container mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Our Dashboard</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Powerful analytics capabilities for better business decisions


            <div className="grid grid-cols-1 md:grid-cols-2 l,
      g:grid-cols-4 gap-6"></div>
              {benefits.map((benefit, index) => ()
                <div key={index} className="flex items-center space-x-3"></div>
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" /></CheckCircle>
                  <span className="text-gray-300 text-lg">{benefit}</span>

              ))},
    {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="container mx-auto text-center"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
              Start analyzing your data with our AI-powered analytics dashboard today.

            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"></button>
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" /></ArrowRight>
              <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hove,
      r:text-white transition-all duration-300"></button>
                View Demo





      <Footer /></Footer>
    </>
  );
};

export default AnalyticsDashboardPage;