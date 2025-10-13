import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Brain, Zap, ArrowRight, CheckCircle, Star, Users, Award, BarChart3 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIFraudDetectionProPage = () => {
  const features = [
    {
      title: "Advanced Fraud Detection",
      description: "AI-powered fraud detection with machine learning algorithms and real-time analysis",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["Real-time detection", "Pattern recognition", "Anomaly detection"]
    },
    {
      title: "Multi-Channel Monitoring",
      description: "Comprehensive monitoring across all channels and transaction types",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Payment monitoring", "Account protection", "Transaction analysis"]
    },
    {
      title: "Predictive Risk Assessment",
      description: "Predict and prevent fraud before it happens with advanced risk scoring",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Risk scoring", "Predictive models", "Behavioral analysis"]
    }
  ];

  const stats = [
    { number: "99.9%", label: "Detection Rate", icon: <Award className="w-6 h-6" /> },
    { number: "50ms", label: "Response Time", icon: <Zap className="w-6 h-6" /> },
    { number: "95%", label: "False Positive Reduction", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Monitoring", icon: <Users className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="AI Fraud Detection Pro - Zion Tech Group | Advanced Fraud Prevention"
        description="Protect your business with AI-powered fraud detection. Real-time monitoring, predictive analytics, and advanced risk assessment for comprehensive fraud prevention."
        keywords="AI fraud detection, fraud prevention, risk assessment, fraud monitoring, security AI, fraud analytics"
        canonical="https://ziontechgroup.com/ai-fraud-detection-pro"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Fraud Detection Pro
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Protect your business with AI-powered fraud detection. Real-time monitoring, 
            predictive analytics, and advanced risk assessment for comprehensive fraud prevention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton href="/contact" variant="primary" size="lg">
              Get Started Today
            </FuturisticButton>
            <FuturisticButton href="/demo" variant="outline" size="lg">
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Advanced Fraud Prevention
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered fraud detection platform provides comprehensive protection and monitoring
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="p-8">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Protect Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already using our AI fraud detection platform for comprehensive protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton href="/contact" variant="primary" size="lg">
              Start Your Fraud Protection Journey
            </FuturisticButton>
            <FuturisticButton href="/pricing" variant="outline" size="lg">
              View Pricing
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIFraudDetectionProPage;