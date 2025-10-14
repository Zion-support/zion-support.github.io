import React from 'react';
import { ArrowRight, BarChart3, CheckCircle  } from "lucide-react";
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
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Predictive Modeling",
      description: "Build accurate predictive models using machine learning",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Data Visualization",
      description: "Create stunning interactive dashboards and reports",
      icon: <PieChart className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Automated Insights",
      description: "Get AI-powered insights and recommendations automatically",
      icon: <Brain className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
    }
  ];

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO title="AI Data Analytics Pro - Advanced Analytics Platform | Zion Tech Group"
        description="Transform your data into actionable insights with our AI-powered analytics platform. Real-time processing, predictive modeling, and automated insights for modern businesses."
        keywords="AI data analytics, business intelligence, predictive analytics, data visualization, machine learning, real-time analytics"
        canonical="https://ziontechgroup.com/ai-data-analytics-pro"
      />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div></>
          <div></>
        </>
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <BarChart3 className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Analytics</>
          </>
          <h1 className="text-4 xl md:text-6 xl lg:text-7 xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Data Analytics Pro
            </>
          </>
          <p >
            Transform your data into actionable insights with our advanced AI-powered analytics platform. 
            Get real-time processing, predictive modeling, and automated insights that drive business growth.
          </>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
            </>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              View Demo
            </>
          </>
        </>
      </>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer >
          <div className="text-center mb-16">
            <h2 className="text-3 xl md:text-4 xl lg:text-5 xl font-bold text-white mb-6">
              Powerful Analytics Features
            </>
            <p >
              Everything you need to turn your data into business intelligence and actionable insights.
            </>
          </>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FuturisticCard key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2 xl hover:shadow-cyan-500/10"
              >
                <div >
                  {feature.icon}
                </>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </>
                <p >
                  {feature.description}
                </>
              </>
            ))}
          </>
        </>
      </>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer >
          <div className="text-center mb-16">
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-4">
              Why Choose AI Data Analytics Pro?
            </>
            <p >
              Experience the power of AI-driven analytics that delivers measurable results.
            </>
          </>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</>
              </>
            ))}
          </>
        </>
      </>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer >
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2 xl p-12">
            <h2 className="text-3 xl md:text-4 xl lg:text-5 xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </>
            <p >
              Join thousands of businesses using AI Data Analytics Pro to make data-driven decisions and drive growth.
            </>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Your Free Trial
              </>
              <FuturisticButton
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<Target className="w-5 h-5" />}
              >
                View Pricing
              </>
            </>
          </>
        </>
      </>
ursor/fix-errors-and-merge-to-main-94 a7
    </>
  );
};

export default AIDataAnalyticsPro;
ursor/fix-errors-and-merge-to-main-94 a7
