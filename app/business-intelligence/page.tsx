import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, BarChart, TrendingUp, Database, Target, Users, Zap, CheckCircle, PieChart, LineChart, Activity, Globe, Shield, Cpu, Brain } from 'lucide-react'

export default function BusinessIntelligencePage() {
  const biServices = [
    {
      icon: BarChart,
      title: 'Data Analytics & Reporting',
      description: 'Transform raw data into actionable insights with advanced analytics and custom reporting solutions.',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Automated insights']
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Connect and consolidate data from multiple sources to create a unified view of your business.',
      features: ['ETL processes', 'Data warehousing', 'API integration', 'Data quality management']
    },
    {
      icon: Target,
      title: 'KPI Tracking',
      description: 'Monitor key performance indicators and business metrics with real-time tracking and alerts.',
      features: ['Custom KPIs', 'Performance monitoring', 'Alert systems', 'Trend analysis']
    },
    {
      icon: Users,
      title: 'Customer Analytics',
      description: 'Gain deep insights into customer behavior, preferences, and journey patterns.',
      features: ['Customer segmentation', 'Behavior analysis', 'Churn prediction', 'Lifetime value']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Leverage machine learning to forecast trends and make data-driven predictions.',
      features: ['Forecasting models', 'Trend analysis', 'Risk assessment', 'Scenario planning']
    },
    {
      icon: Globe,
      title: 'Market Intelligence',
      description: 'Analyze market trends, competitor activities, and industry insights.',
      features: ['Market research', 'Competitive analysis', 'Industry reports', 'Trend monitoring']
    }
  ];

  const biFeatures = [
    { icon: Activity, title: 'Real-time Monitoring', description: 'Live dashboards with instant updates' },
    { icon: Shield, title: 'Data Security', description: 'Enterprise-grade security and compliance' },
    { icon: Cpu, title: 'High Performance', description: 'Optimized for speed and scalability' },
    { icon: Brain, title: 'AI-Powered Insights', description: 'Machine learning for smarter decisions' },
    { icon: Zap, title: 'Automated Reports', description: 'Scheduled and triggered reporting' },
    { icon: PieChart, title: 'Visual Analytics', description: 'Interactive charts and graphs' }
  ];

  const industries = [
    { name: 'Healthcare', description: 'Patient analytics and operational insights' },
    { name: 'Finance', description: 'Risk management and fraud detection' },
    { name: 'Retail', description: 'Customer behavior and inventory optimization' },
    { name: 'Manufacturing', description: 'Production analytics and quality control' },
    { name: 'Education', description: 'Student performance and institutional metrics' },
    { name: 'Government', description: 'Public service analytics and efficiency' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Business Intelligence Solutions - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our comprehensive business intelligence solutions. Advanced analytics, reporting, and data visualization services." />
        <meta name="keywords" content="business intelligence, data analytics, reporting, dashboards, data visualization, predictive analytics, KPI tracking" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Intelligence</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our comprehensive business intelligence solutions. 
              Make smarter decisions with advanced analytics, real-time dashboards, and predictive modeling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get BI Solutions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* BI Services */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Business Intelligence Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions to unlock the power of your data
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BI Features */}
      <div className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our BI Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade business intelligence with cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {biFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industry Solutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored business intelligence solutions for your industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300">
                <h3 className="text-lg font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our business intelligence experts help you transform your data into strategic insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your BI Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/consultation"
              className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}