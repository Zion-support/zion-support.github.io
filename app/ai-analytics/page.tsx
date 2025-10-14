import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, TrendingUp, Database, Target, Zap, Brain } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import Footer from '../components/Footer';

const AIAnalyticsPage: React.FC = () => {
  const features = [
    {
      title: "Predictive Analytics",
      description: "Forecast future trends and behaviors using advanced machine learning algorithms.",
      icon: <TrendingUp className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Real-time Dashboards",
      description: "Monitor your business metrics with interactive, real-time data visualization.",
      icon: <BarChart3 className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Data Processing",
      description: "Process massive datasets efficiently with our AI-powered data processing engine.",
      icon: <Database className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Custom Insights",
      description: "Get personalized insights tailored to your specific business needs and goals.",
      icon: <Target className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive reports automatically with AI-driven analysis.",
      icon: <Zap className="w-12 h-12 text-cyan-400" />
    },
    {
      title: "Smart Recommendations",
      description: "Receive intelligent recommendations to optimize your business performance.",
      icon: <Brain className="w-12 h-12 text-cyan-400" />
    }
  ];

  const stats = [
    { value: "95%", label: "Accuracy Rate" },
    { value: "10x", label: "Faster Processing" },
    { value: "24/7", label: "Real-time Monitoring" },
    { value: "500+", label: "Data Sources" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO 
        title="AI Analytics - Zion Tech Group | Advanced Data Intelligence Solutions"
        description="Transform your data into actionable insights with our AI-powered analytics platform. Get predictive analytics, real-time dashboards, and intelligent recommendations."
        keywords="AI analytics, data intelligence, predictive analytics, business intelligence, data visualization, machine learning analytics"
        canonical="https://ziontechgroup.com/ai-analytics"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Analytics
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data into actionable insights with our advanced AI-powered analytics platform. 
            Make smarter decisions with predictive analytics and real-time intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI-driven analytics tools designed to give you the insights you need to succeed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-6">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-4">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Our AI Analytics?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-400 rounded-full flex-shrink-0 mt-1 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Real-time Processing</h3>
                    <p className="text-gray-300">Get instant insights as your data changes with our real-time processing capabilities.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-400 rounded-full flex-shrink-0 mt-1 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Scalable Infrastructure</h3>
                    <p className="text-gray-300">Handle any amount of data with our cloud-based, scalable analytics platform.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-cyan-400 rounded-full flex-shrink-0 mt-1 mr-4"></div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Custom Integrations</h3>
                    <p className="text-gray-300">Seamlessly integrate with your existing tools and data sources.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-purple-600/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Contact us today to learn how our AI analytics can transform your business.
              </p>
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AIAnalyticsPage;
