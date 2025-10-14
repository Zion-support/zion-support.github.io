import React from 'react';
import { CheckCircle  } from "lucide-react";
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AISentimentAnalysisPro = () => {
  const features = [
    {
      title: "Real-time Sentiment Tracking",
      description: "Monitor customer sentiment across all channels in real-time",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Multi-language Support",
      description: "Analyze sentiment in 50+ languages with high accuracy",
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Emotion Detection",
      description: "Detect emotions like joy, anger, fear, and sadness in text",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Trend Analysis",
      description: "Identify sentiment trends and patterns over time",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
    }
  ];

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO title="AI Sentiment Analysis Pro - Customer Sentiment Intelligence | Zion Tech Group"
        description="Understand customer sentiment with AI-powered analysis. Real-time monitoring, emotion detection, and trend analysis for better customer insights."
        keywords="sentiment analysis, customer sentiment, emotion detection, social media monitoring, customer insights, AI analytics"
        canonical="https://ziontechgroup.com/ai-sentiment-analysis-pro"
      />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div></>
          <div></>
        </>
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <TrendingUp className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Sentiment Intelligence</>
          </>
          <h1 className="text-4 xl md:text-6 xl lg:text-7 xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Sentiment Analysis Pro
            </>
          </>
          <p >
            Understand customer sentiment with AI-powered analysis. 
            Real-time monitoring, emotion detection, and trend analysis for better customer insights.
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
              icon={<TrendingUp className="w-5 h-5" />}
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
              Advanced Sentiment Features
            </>
            <p >
              Everything you need to understand and analyze customer sentiment effectively.
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
              Why Choose AI Sentiment Analysis Pro?
            </>
            <p >
              Experience intelligent sentiment analysis that delivers actionable insights.
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
              Ready to Understand Your Customers?
            </>
            <p >
              Join leading companies using AI Sentiment Analysis Pro to gain customer insights.
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
    </>
  );
};

export default AISentimentAnalysisPro;
