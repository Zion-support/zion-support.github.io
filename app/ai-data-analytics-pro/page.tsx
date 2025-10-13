import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Database, TrendingUp, Zap, Shield, Users, Award, CheckCircle, Star, Play, Headphones, Camera, Layers } from 'lucide-react';
import EnhancedSEO from '../../components/EnhancedSEO';
import FuturisticBackground from '../../components/FuturisticBackground';
import FuturisticCard from '../../components/FuturisticCard';
import FuturisticButton from '../../components/FuturisticButton';
import ResponsiveContainer from '../../components/ResponsiveContainer';

const AIDataAnalyticsProPage = () => {
  const features = [
    {
      title: "Advanced Analytics Engine",
      description: "Powerful AI-driven analytics engine that processes complex data sets and delivers actionable insights",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-time Data Processing",
      description: "Process and analyze data in real-time with our high-performance streaming analytics platform",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Predictive Modeling",
      description: "Build and deploy machine learning models for accurate predictions and forecasting",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Interactive Dashboards",
      description: "Create stunning, interactive dashboards with drag-and-drop functionality and real-time updates",
      icon: <Layers className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const capabilities = [
    {
      title: "Data Integration",
      description: "Connect to any data source with our comprehensive integration capabilities",
      features: ["API connectors", "Database integration", "Cloud data sources", "Real-time streaming"]
    },
    {
      title: "Machine Learning",
      description: "Built-in ML algorithms for classification, regression, clustering, and deep learning",
      features: ["AutoML", "Model training", "Feature engineering", "Model deployment"]
    },
    {
      title: "Visualization",
      description: "Create compelling visualizations with our advanced charting and reporting tools",
      features: ["Interactive charts", "Custom dashboards", "Report builder", "Export options"]
    },
    {
      title: "Collaboration",
      description: "Share insights and collaborate with your team using our built-in collaboration features",
      features: ["Team sharing", "Comment system", "Version control", "Access management"]
    }
  ];

  const benefits = [
    {
      title: "Faster Insights",
      description: "Get insights 10x faster with our AI-powered analytics engine",
      icon: <Zap className="w-6 h-6" />,
      stat: "10x"
    },
    {
      title: "Accuracy",
      description: "Achieve 99.9% accuracy in predictions and data analysis",
      icon: <Shield className="w-6 h-6" />,
      stat: "99.9%"
    },
    {
      title: "Cost Savings",
      description: "Reduce analytics costs by up to 60% with our efficient platform",
      icon: <Award className="w-6 h-6" />,
      stat: "60%"
    },
    {
      title: "User Adoption",
      description: "Increase user adoption with our intuitive interface and self-service capabilities",
      icon: <Users className="w-6 h-6" />,
      stat: "95%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="AI Data Analytics Pro | Advanced Analytics Platform | Zion Tech Group"
        description="Transform your data into actionable insights with our AI-powered analytics platform. Advanced machine learning, real-time processing, and interactive dashboards."
        keywords="AI analytics, data analytics, machine learning, business intelligence, data visualization, predictive analytics, big data"
        canonical="https://ziontechgroup.com/ai-data-analytics-pro"
        author="Zion Tech Group"
        section="AI Services"
        tags={["AI Analytics", "Data Analytics", "Machine Learning", "Business Intelligence", "Data Visualization"]}
        readingTime={6}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <BarChart3 className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Advanced Analytics Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Data Analytics Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Transform your data into actionable insights with our AI-powered analytics platform. 
            Advanced machine learning, real-time processing, and interactive dashboards for data-driven decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Platform Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered analytics platform provides comprehensive tools and capabilities 
              to transform your data into actionable business insights.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group cursor-pointer"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Analytics Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive analytics capabilities designed to handle any data challenge.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <FuturisticCard key={index} className="p-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {capability.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Business Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact our AI analytics platform can have on your business.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <FuturisticCard key={index} className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {benefit.stat}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {benefit.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Discover how our AI analytics platform can unlock the power of your data and drive business growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Analytics
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDataAnalyticsProPage;