import { CheckCircle, Phone, Mail } from 'lucide-react';
import React from 'react';
const AnalyticsToolsPage: React.FC = () => {
  const _analyticsTools = [
    {
      title: 'AI Business Intelligence',
      price: '$399/month',
      description: 'Advanced business intelligence with AI-powered insights and predictive analytics.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization', 'ROI tracking', 'Performance forecasting'],
      icon: '📊',
      category: 'Business Intelligence'
    },
    {
      title: 'AI Web Analytics',
      price: '$299/month',
      description: 'Comprehensive web analytics with AI-powered insights and user behavior analysis.',
      features: ['User behavior tracking', 'Conversion analysis', 'Traffic insights', 'Performance metrics', 'Custom events', 'Real-time monitoring'],
      icon: '🌐',
      category: 'Web Analytics'
    },
    {
      title: 'AI Marketing Analytics',
      price: '$249/month',
      description: 'Marketing performance analytics with AI-powered optimization recommendations.',
      features: ['Campaign tracking', 'ROI analysis', 'Attribution modeling', 'Customer journey', 'Channel performance', 'Predictive insights'],
      icon: '📈',
      category: 'Marketing Analytics'
    },
    {
      title: 'AI Sales Analytics',
      price: '$199/month',
      description: 'Sales performance analytics with AI-powered forecasting and optimization.',
      features: ['Sales forecasting', 'Pipeline analysis', 'Performance tracking', 'Lead scoring', 'Conversion optimization', 'Revenue insights'],
      icon: '💰',
      category: 'Sales Analytics'
    },
    {
      title: 'AI Customer Analytics',
      price: '$179/month',
      description: 'Customer behavior analytics with AI-powered insights and personalization.',
      features: ['Customer segmentation', 'Behavior analysis', 'Churn prediction', 'Lifetime value', 'Engagement tracking', 'Personalization insights'],
      icon: '👥',
      category: 'Customer Analytics'
    },
    {
      title: 'AI Financial Analytics',
      price: '$349/month',
      description: 'Financial performance analytics with AI-powered insights and risk assessment.',
      features: ['Financial reporting', 'Risk analysis', 'Budget tracking', 'Cost optimization', 'Revenue analysis', 'Predictive modeling'],
      icon: '💳',
      category: 'Financial Analytics'
    }
  ];
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions with comprehensive analytics and AI insights'
    },
    {
      icon: Target,
      title: 'Predictive Insights',
      description: 'Anticipate trends and opportunities with AI-powered predictions'
    },
    {
      icon: BarChart,
      title: 'Real-Time Monitoring',
      description: 'Track performance in real-time with live dashboards and alerts'
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Leverage advanced AI algorithms for deeper insights and automation'
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"


import { Link } from 'react-router-dom';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const PagePage: React.FC = () => {
  return (
    
          
          
          
          
          
          
          
          <div>Coming Soon</div>
  )
    
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
      <Helmet></Helmet>
        <title>Analytics Tools - Zion Tech Group</title>
        <meta name="description" content="AI-powered analytics tools for business intelligence, web analytics, marketing analytics, and more. Starting at $179/month." />"
        <meta name="keywords" content="analytics tools, business intelligence, web analytics, marketing analytics, sales analytics, ai analytics" />"
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4"></section>""
        <div className="max-w-7xl mx-auto text-center"></div>""
          <h1 className="text-4xl,"
  sm:text-5xl,""
  md:text-6xl font-bold text-white mb-6"></h1>"
// AI Analytics Tools;

          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium"></p>"
            Coming Soon
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"></div>"
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6"></div>"
              <div className="text-3xl font-bold text-cyan-400 mb-2">6</div>"

              <div className="text-gray-300">Analytics Tools</div>"
            </div>""
              <div className="text-3xl font-bold text-green-400 mb-2">$179</div>""
              <div className="text-gray-300">Starting Price</div>""
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>""
              <div className="text-gray-300">Accuracy</div>""
              <div className="text-3xl font-bold text-orange-400 mb-2">Real-time</div>""
              <div className="text-gray-300">Monitoring</div>"
          {/* Contact Info */}""
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12"></div>""
            <div className="flex flex-col,"
  md:flex-row items-center justify-center space-y-4,
  md:space-y-0,""
  md:space-x-8"></div>""
              <div className="flex items-center space-x-2"></div>""
                <Phone className="w-5 h-5" /></Phone>""
                <span className="text-white font-medium">+1 302 464 0950</span>""
                <Mail className="w-5 h-5" /></Mail>""
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>""
                <MapPin className="w-5 h-5" /></MapPin>""
                <span className="text-white font-medium">Middletown, DE</span>"
      </section>
      {/* Analytics Tools Grid */}""
      <section className="py-16 px-4"></section>""
        <div className="max-w-7xl mx-auto"></div>""
          <h2 className="text-3xl,""
  md:text-4xl font-bold text-white text-center mb-12 neon-text"></h2>"
// Our Analytics Tools;
          </h2>""
          <div className="grid grid-cols-1,"
  md:grid-cols-2,""
  lg:grid-cols-3 gap-8"></div>"
            {analyticsTools.map((tool, index) => ()}""
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6,""
  hover:bg-white/20 transition-all duration-300"></div>""
                <div className="text-center mb-6"></div>""
                  <div className="text-5xl mb-4">{tool.icon}</div>""
                  <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>""
                  <p className="text-gray-300 text-sm mb-4">{tool.description}</p>""
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block mb-4"></div>"
                    {tool.category}""
                <div className="mb-6"></div>""
                  <h4 className="font-semibold text-white mb-3">Feature,"
  s:</h4>""
                  <ul className="space-y-2"></ul>"
                    {tool.features.map((feature, featureIndex) => ()}""
          <li key={featureIndex} className="flex items-center text-sm text-gray-300"></li>""
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" /></CheckCircle>"
                        {feature}
                      </li>
                    ))}
                  </ul>""
                <div className="text-center"></div>""
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{tool.price}</div>"
                  <a></a>
                    href={/* TODO: Fix JSX expression */}
  o:kleber@ziontechgroup.com?subject=Interest in ${tool.title}`}""
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium,"
  hover:from-cyan-600,""
  hover:to-blue-700 transition-all inline-block""
// >
//                     Get Started;
          </a>
      {/* Benefits Section */}
Why Choose Our Analytics Tools?""
          <div className="grid grid-cols-1,"
  md:grid-cols-2,""
  lg:grid-cols-4 gap-8"></div>"
            {benefits.map((benefit, index) => ()}""
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center,""
  hover:bg-white/20 transition-all duration-300"></div>""
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" /></benefit>""
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>""
                <p className="text-gray-300 text-sm">{benefit.description}</p>"

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600"></section>"
        <div className="max-w-4xl mx-auto text-center"></div>"
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>"
Ready to Unlock Your Data?
          <p className="text-xl text-purple-100 mb-8"></p>"
            Get started with our AI analytics tools today and transform your data into actionable insights.
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
              href="tel:+13024640950" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors""
Call (302) 464-0950;
              href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors""

              Email Us;
  );
};


export default AnalyticsToolsPage;
import React from 'react';
