import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Shield, Zap, BarChart3, Users, CheckCircle } from 'lucide-react';

const AiPoweredEmailAnalyzerPage: React.FC = () => {
  const features = [
    {
      icon: Mail,
      title: 'Smart Email Analysis',
      description: 'AI-powered email content analysis for sentiment, intent, and classification.',
      benefits: ['Sentiment analysis', 'Intent detection', 'Auto-categorization']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Advanced threat detection and compliance monitoring for email communications.',
      benefits: ['Spam detection', 'Phishing prevention', 'Compliance checks']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Instant email analysis and response suggestions for improved productivity.',
      benefits: ['Instant analysis', 'Auto-responses', 'Priority scoring']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Comprehensive email analytics and insights for better communication strategies.',
      benefits: ['Performance metrics', 'Trend analysis', 'ROI tracking']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered Email Analyzer - Zion Tech Group</title>
        <meta 
          name="description" 
          content="Revolutionary AI-powered email analysis solutions for improved communication, security, and productivity."
        />
        <meta 
          name="keywords" 
          content="AI email analyzer, email analysis, email security, email automation, communication AI, email insights"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI-Powered Email Analyzer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your email communication with intelligent analysis, 
              automated responses, and advanced security features.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-purple-400">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 border border-purple-500/30">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to Revolutionize Email?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join organizations that use AI to enhance their email communication 
              and improve productivity across teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiPoweredEmailAnalyzerPage;