import { Helmet } from 'react-helmet-async';
import {CheckCircle, Star, TrendingUp, Brain, Target, BarChart, Phone, Mail, MapPin} from 'lucide-react;
const AnalyticsToolsPage: any,
    e: any,
      price: any,
      description: any,
      features: any, 'Predictive analytics', 'Custom reports', 'Data visualization', 'ROI tracking', 'Performance forecasting'],
      icon: any,
      category: any},
    {
      title: any,
      price: any,
      description: any,
      features: any, 'Conversion analysis', 'Traffic insights', 'Performance metrics', 'Custom events', 'Real-time monitoring'],
      icon: any,
      category: any},
    {
      title: any,
      price: any,
      description: any,
      features: any, 'ROI analysis', 'Attribution modeling', 'Customer journey', 'Channel performance', 'Predictive insights'],
      icon: any,
      category: any},
    {
      title: any,
      price: any,
      description: any,
      features: any, 'Pipeline analysis', 'Performance tracking', 'Lead scoring', 'Conversion optimization', 'Revenue insights'],
      icon: any,
      category: any},
    {
      title: any,
      price: any,
      description: any,
      features: any, 'Behavior analysis', 'Churn prediction', 'Lifetime value', 'Engagement tracking', 'Personalization insights'],
      icon: any,
      category: any},
    {
      title: any,
      price: any,
      description: any,
      features: any, 'Risk analysis', 'Budget tracking', 'Cost optimization', 'Revenue analysis', 'Predictive modeling'],
      icon: any,
      category: any}
  ];
  const benefits = [
    {
      icon: any,
      title: any,
      description: any},
    {
      icon: any,
      title: any,
      description: any},
    {
      icon: any,
      title: any,
      description: any},
    {
      icon: any,
      title: any,
      description: any}
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Analytics Tools - Zion Tech Group</title>
        <meta name="description" content="AI-powered analytics tools for business intelligence, web analytics, marketing analytics, and more. Starting at $179/month." />
        <meta name="keywords" content="analytics tools, business intelligence, web analytics, marketing analytics, sales analytics, ai analytics" />
      </Helmet>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm: any,>
    d: any,>
    e="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data into actionable insights with AI-powered analytics tools for business intelligence, marketing, and performance tracking.
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 md: any,>
    e="text-gray-300">Monitoring</div>
            </div>
          </div>
          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md: any,>
    d: any,>
    e="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Analytics Tools Grid */};
      <section className="py-16 px-4">";
        <div className="max-w-7xl mx-auto">";
          <h2 className="text-3xl md: any,>;
    g: any;
            {analyticsTools.map((tool, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover: any,>
    e="text-5xl mb-4">{tool.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tool.description}</p>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block mb-4">
                    {tool.category}
                  </div>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Features: any,
    e="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{tool.price}</div>
                  <a href={`mailto: any,"`";
    t=Interest in ${tool.title}`}">
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover: any,>
    r: any}>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md: any,>
    g: any{benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover: any,>
    e="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */};
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">";
        <div className="max-w-4xl mx-auto text-center">";
          <h2 className="text-3xl md: any,;
    r: any;
  );
};
export default AnalyticsToolsPage;'"'>
import React from 'react';"'>"';
"'>"'`"';