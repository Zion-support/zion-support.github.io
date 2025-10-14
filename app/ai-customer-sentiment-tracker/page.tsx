import React from "react";
import { Helmet } from "react-helmet-async";
import { Heart, TrendingUp, MessageSquare, Zap, BarChart3, Users, CheckCircle, ArrowRight, Brain, Target, Globe, Smile, AlertCircle } from "lucide-react";

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
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive dashboards with visualizations, trends, and actionable insights for data-driven decisions."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Automated Alerts",
      description: "Get instant notifications when sentiment drops or critical issues arise, enabling proactive customer service."
    }
  ];

  const benefits = [
    "Improve customer satisfaction by 40%",
    "Reduce churn rate by 25%",
    "Increase customer lifetime value",
    "Identify and resolve issues faster",
    "Enhance brand reputation",
    "Make data-driven decisions"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Customer Sentiment Tracker - Zion Tech Group</title>
        <meta name="description" content="Track and analyze customer sentiment with our AI-powered platform. Monitor feedback across all channels and improve customer satisfaction with real-time insights." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">AI Customer Sentiment Tracker</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Understand your customers better with our AI-powered sentiment analysis platform. 
            Monitor feedback across all channels and take proactive action to improve satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Start Tracking
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
              <Heart className="mr-2 w-5 h-5" />
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Sentiment Analysis</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to understand and improve customer sentiment
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Track Customer Sentiment?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Understanding customer sentiment is crucial for business success. Our AI platform 
                helps you stay ahead of issues and maintain high customer satisfaction.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
              <div className="text-center">
                <TrendingUp className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Tracking?</h3>
                <p className="text-gray-300 mb-6">
                  Join thousands of businesses using our platform to improve customer satisfaction.
                </p>
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                  Start Tracking Now
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Improve Customer Satisfaction Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't let negative sentiment go unnoticed. Start tracking customer sentiment 
              and take proactive action to improve satisfaction and retention.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                Start Tracking
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICustomerSentimentTrackerPage;</Brain></Target></BarChart3></Zap></meta></ArrowRight></ArrowRight></ArrowRight></Heart></CheckCircle></TrendingUp>