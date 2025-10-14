import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, Zap, BarChart3, Users, CheckCircle, ArrowRight, Brain, Target, Globe, AlertCircle } from "lucide-react";

const AICustomerSentimentTrackerPage = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "Real-time Sentiment Analysis",
      description: "Advanced AI analyzes customer feedback, reviews, and interactions in real-time to provide instant sentiment insights."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Multi-channel Monitoring",
      description: "Track sentiment across all channels including social media, email, chat, reviews, and support tickets."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "Advanced Analytics",
      description: "Get detailed insights with trend analysis, sentiment scoring, and predictive analytics for customer satisfaction."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Customer Segmentation",
      description: "Segment customers based on sentiment patterns and behavior to create targeted engagement strategies."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Automated Alerts",
      description: "Receive instant notifications when sentiment drops or spikes, allowing for immediate response and action."
    },
    {
      icon: <Globe className="w-8 h-8 text-red-400" />,
      title: "Global Monitoring",
      description: "Monitor sentiment across different regions, languages, and cultural contexts for comprehensive insights."
    }
  ];

  const benefits = [
    "Improve customer satisfaction by 40%",
    "Reduce customer churn by 35%",
    "Increase response time to issues by 60%",
    "Enhance brand reputation management",
    "Identify trends and patterns early",
    "Make data-driven customer decisions"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Customer Sentiment Tracker - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered customer sentiment tracking and analysis to improve customer satisfaction and business outcomes." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.h1 
            className="text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI Customer Sentiment Tracker
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Understand your customers better with our advanced AI-powered sentiment analysis. 
            Track, analyze, and respond to customer emotions across all touchpoints.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
              Start Tracking Sentiment
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition-colors">
              View Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Powerful Sentiment Tracking Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Track Customer Sentiment?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Customer sentiment is a leading indicator of business success. Our AI-powered platform 
                helps you understand, predict, and respond to customer emotions in real-time.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
              <div className="text-center">
                <Heart className="w-16 h-16 text-red-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Real-time Insights</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sentiment Accuracy</span>
                    <span className="text-2xl font-bold text-green-400">94%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Response Time</span>
                    <span className="text-2xl font-bold text-blue-400">2 min</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Customer Satisfaction</span>
                    <span className="text-2xl font-bold text-purple-400">+40%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Understand Your Customers Better?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start tracking customer sentiment today and transform your customer experience with AI-powered insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors">
              Start Sentiment Tracking
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold rounded-lg transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerSentimentTrackerPage;