import React from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { ArrowRight, BarChart3, Brain, Shield, Zap, Globe, Star, Users, Award, CheckCircle, TrendingUp, Clock, Database, PieChart, Activity, Target } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIDataAnalyticsPro = () => {
  const features = [
    {
      title: "Real-time Analytics",
      description: "Process and analyze data in real-time with advanced AI algorithms",
      icon: <Activity className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Predictive Modeling",
      description: "Build accurate predictive models using machine learning",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Visualization",
      description: "Create stunning interactive dashboards and reports",
      icon: <PieChart className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Insights",
      description: "Get AI-powered insights and recommendations automatically",
      icon: <Brain className="w-6 h-6" />,
=======
import { ArrowRight, BarChart3, Zap, Shield, Brain, Users, Clock, CheckCircle, Star, Sparkles, Monitor, Mic, Mail, Smartphone, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIDataAnalyticsProPage = () => {
  const features = [
    {
      title: "Real-time Data Processing",
      description: "Process and analyze data in real-time with AI-powered insights and predictions",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Advanced Machine Learning",
      description: "Built-in ML algorithms for predictive analytics and pattern recognition",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Interactive Dashboards",
      description: "Create stunning visualizations and interactive dashboards with drag-and-drop tools",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with role-based access control and data encryption",
      icon: <Shield className="w-8 h-8" />,
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
<<<<<<< HEAD
    "40% faster data processing",
    "99.9% accuracy in predictions",
    "Real-time dashboard updates",
    "Automated report generation",
    "Multi-source data integration",
    "Advanced security protocols"
=======
    "Process data 10x faster than traditional methods",
    "Get insights in minutes, not hours",
    "Predict trends with 95% accuracy",
    "Integrate with 200+ data sources",
    "Scale to handle petabytes of data",
    "24/7 monitoring and support"
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
<<<<<<< HEAD
        title="AI Data Analytics Pro - Advanced Analytics Platform | Zion Tech Group"
        description="Transform your data into actionable insights with our AI-powered analytics platform. Real-time processing, predictive modeling, and automated insights for modern businesses."
        keywords="AI data analytics, business intelligence, predictive analytics, data visualization, machine learning, real-time analytics"
=======
        title="AI Data Analytics Pro - Zion Tech Group | Advanced Data Analysis Platform"
        description="Transform your data into actionable insights with our AI-powered analytics platform. Real-time processing, machine learning, and interactive dashboards for enterprise-grade data analysis."
        keywords="AI data analytics, data analysis, machine learning, business intelligence, data visualization, predictive analytics"
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
        canonical="https://ziontechgroup.com/ai-data-analytics-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
<<<<<<< HEAD
            <BarChart3 className="w-4 h-4 text-cyan-400 mr-2" />
=======
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Analytics</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Data Analytics Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
<<<<<<< HEAD
            Transform your data into actionable insights with our advanced AI-powered analytics platform. 
            Get real-time processing, predictive modeling, and automated insights that drive business growth.
=======
            Transform your data into actionable insights with our AI-powered analytics platform. 
            Process, analyze, and visualize data with enterprise-grade security and performance.
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
<<<<<<< HEAD
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
=======
              icon={<Sparkles className="w-5 h-5" />}
            >
              Start Free Trial
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
<<<<<<< HEAD
              icon={<BarChart3 className="w-5 h-5" />}
            >
              View Demo
=======
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
<<<<<<< HEAD
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to turn your data into business intelligence and actionable insights.
=======
              Advanced Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to turn your data into powerful insights and drive business growth.
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
<<<<<<< HEAD
              <FuturisticCard
=======
              <div
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
<<<<<<< HEAD
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
=======
                <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
<<<<<<< HEAD
        <ResponsiveContainer>
=======
        <div className="max-w-7xl mx-auto">
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Data Analytics Pro?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
              Experience the power of AI-driven analytics that delivers measurable results.
=======
              Join thousands of businesses already using our platform to make data-driven decisions.
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
<<<<<<< HEAD
              <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses using AI Data Analytics Pro to make data-driven decisions and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Your Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<Target className="w-5 h-5" />}
              >
                View Pricing
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
=======
              <div
                key={index}
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Start analyzing your data with AI-powered insights today. Get started with a free trial.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default AIDataAnalyticsPro;
=======
export default AIDataAnalyticsProPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-bf00
