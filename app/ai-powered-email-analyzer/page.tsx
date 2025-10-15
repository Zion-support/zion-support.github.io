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

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams and individuals",
      features: [
        "Up to 1,000 emails/month",
        "Basic sentiment analysis",
        "Response suggestions",
        "Email templates",
        "Basic analytics",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 emails/month",
        "Advanced AI analysis",
        "Custom response templates",
        "Team collaboration",
        "Advanced analytics",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited emails",
        "Custom AI models",
        "White-label solution",
        "Advanced security",
        "Custom integrations",
        "Dedicated support",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "95%", label: "Accuracy Rate" },
    { number: "2.5x", label: "Faster Response Time" },
    { number: "40%", label: "Increase in Engagement" },
    { number: "10k+", label: "Happy Customers" }
  ];
  return (
    <>
      <SEOHead 
        title="AI-Powered Email Analyzer - Zion Tech Group"
        description="Revolutionize email communication with AI-powered sentiment analysis, smart response suggestions, and intelligent email management."
        keywords="AI email analyzer, email sentiment analysis, smart email responses, email automation, AI communication"
      />
      <Helmet>
        <title>AI-Powered Email Analyzer - Intelligent Email Management | Zion Tech Group</title>
        <meta name="description" content="Transform your email communication with our AI-powered analyzer. Get sentiment analysis, smart responses, and 40% increase in engagement." />
        <meta name="keywords" content="AI email analyzer, email sentiment analysis, smart email responses, email automation, AI communication, email management" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI-Powered Email Analyzer
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your email communication with AI-powered sentiment analysis, smart response suggestions, 
                and intelligent email management that increases engagement by 40%.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <Mail className="mr-2 w-5 h-5" />
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">AI-Powered Features</h2>
              <p className="text-xl text-gray-300">Intelligent email analysis and management</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300"
                >
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Proven Results</h2>
              <p className="text-xl text-gray-300">Measurable impact on email communication</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Email Communication?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of professionals using our AI-powered email analyzer to improve communication and increase engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-indigo-400 text-indigo-400 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-400 hover:text-slate-900 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPoweredEmailAnalyzerPage;
