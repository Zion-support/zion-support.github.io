import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  CheckCircle,
  ArrowRight,
  Brain,
  Target,
  Globe
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const AIPoweredEmailAnalyzerPage = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "AI-Powered Sentiment Analysis",
      description: "Advanced machine learning algorithms analyze email tone, sentiment, and emotional context to help you craft perfect responses."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Smart Response Suggestions",
      description: "Get intelligent, context-aware response suggestions that match your communication style and business objectives."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "Email Performance Analytics",
      description: "Track open rates, response times, and engagement metrics with detailed analytics and actionable insights."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with GDPR compliance, data encryption, and secure cloud storage for all email data."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Real-time Processing",
      description: "Instant analysis and suggestions as you type, with lightning-fast processing powered by advanced AI models."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Team Collaboration",
      description: "Share insights across teams, set up approval workflows, and maintain consistent communication standards."
    }
  ];

  const benefits = [
    "Increase email response rates by 40%",
    "Reduce email composition time by 60%",
    "Improve customer satisfaction scores",
    "Enhance team communication efficiency",
    "Ensure compliance with industry standards",
    "Gain valuable communication insights"
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered Email Analyzer - Zion Tech Group</title>
        <meta name="description" content="Revolutionize your email communication with our AI-powered analyzer. Get sentiment analysis, smart suggestions, and performance insights for better email management." />
        <meta name="keywords" content="AI email analyzer, email sentiment analysis, email automation, email insights, communication AI" />
      </Helmet>
      <SEOHead 
        title="AI-Powered Email Analyzer"
        description="Revolutionize your email communication with our AI-powered analyzer. Get sentiment analysis, smart suggestions, and performance insights for better email management."
        keywords="AI email analyzer, email sentiment analysis, email automation, email insights, communication AI"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered Email Analyzer
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Transform your email communication with intelligent analysis, smart suggestions, 
                and performance insights. Our AI-powered platform helps you craft perfect emails 
                every time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Intelligent Email Features</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to master email communication
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See the impact of AI-powered email analysis
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Email Communication?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of professionals using our AI email analyzer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPoweredEmailAnalyzerPage;