import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Cloud, Shield, Zap, Users, Award, BarChart3 } from 'lucide-react';

const WebsiteAnalyticsToolPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <Helmet>
        <title>Website Analytics Tool - Zion Tech Group | Professional Technology Solutions</title>
        <meta name="description" content="Professional website analytics tool services and solutions. Expert implementation and support for your business needs." />
        <meta name="keywords" content="website analytics tool, professional services, business solutions, technology consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
import { ArrowRight, CheckCircle, BarChart3, Users, Eye, MousePointer, Zap, Shield, Cloud, Settings, TrendingUp, Globe } from 'lucide-react';

const WebsiteAnalyticsToolPage = () => {
  const features = [
    {
      title: "Real-time Analytics",
      description: "Monitor your website performance with live data and instant insights",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Live visitor tracking", "Real-time metrics", "Instant alerts", "Live dashboards"]
    },
    {
      title: "Traffic Analysis",
      description: "Understand your website traffic with detailed visitor insights and behavior analysis",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Visitor demographics", "Traffic sources", "Page views", "Session duration"]
    },
    {
      title: "Conversion Tracking",
      description: "Track conversions and measure the effectiveness of your marketing campaigns",
      icon: <MousePointer className="w-8 h-8" />,
      benefits: ["Goal tracking", "Funnel analysis", "Conversion rates", "Revenue tracking"]
    },
    {
      title: "Performance Monitoring",
      description: "Monitor website speed, uptime, and technical performance metrics",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Page speed insights", "Uptime monitoring", "Core Web Vitals", "Performance scores"]
    },
    {
      title: "Custom Reports",
      description: "Create detailed reports and dashboards tailored to your business needs",
      icon: <TrendingUp className="w-8 h-8" />,
      benefits: ["Custom dashboards", "Scheduled reports", "Data export", "White-label options"]
    },
    {
      title: "Privacy Compliance",
      description: "GDPR and privacy-compliant analytics that respect user privacy",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["GDPR compliant", "No cookies required", "Data anonymization", "Privacy-first"]
    }
  ];

  const metrics = [
    {
      title: "Page Views",
      description: "Track total page views and unique page views",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Unique Visitors",
      description: "Monitor unique visitors and returning visitors",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Bounce Rate",
      description: "Measure engagement with bounce rate analysis",
      icon: <MousePointer className="w-6 h-6" />
    },
    {
      title: "Traffic Sources",
      description: "Understand where your visitors come from",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Website Analytics Tool - Zion Tech Group | Real-time Web Analytics & Performance Monitoring</title>
        <meta name="description" content="Advanced website analytics tool with real-time tracking, conversion monitoring, and performance insights. Understand your website traffic and optimize for success." />
        <meta name="keywords" content="website analytics, web analytics, traffic analysis, conversion tracking, performance monitoring, website insights" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Website Analytics Tool
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Professional website analytics tool services and solutions. Expert implementation and support for your business needs.
            Gain deep insights into your website performance with our comprehensive analytics platform. 
            Track visitors, monitor conversions, and optimize your website for maximum success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Service",
                description: "Expert website analytics tool solutions tailored to your business needs.",
                icon: <Code className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Quality Assurance",
                description: "Rigorous testing and quality control processes to ensure excellence.",
                icon: <Shield className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock support and maintenance for your peace of mind.",
                icon: <Users className="w-8 h-8" />,
                color: "from-purple-500 to-indigo-500"
              }
            ].map((service, index) => (
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Website Analytics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to understand your website performance and make data-driven decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 text-white`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Metrics You'll Track
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor the most important metrics that drive your website's success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {metric.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{metric.title}</h3>
                <p className="text-gray-300">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our expert team to discuss your website analytics tool requirements and get a customized solution.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center group"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
            Ready to Understand Your Website Better?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and discover insights that will help you optimize your website for success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/micro-saas"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View All Micro SAAS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteAnalyticsToolPage;
export default WebsiteAnalyticsToolPage;
