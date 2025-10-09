import React from 'react';
import { Mail, Target, Send, BarChart, Users, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIEmailMarketingPage: React.FC = () => {
  const features = [
    {
      icon: Mail,
      title: "AI Content Generation",
      description: 'Automatically create compelling email content that resonates with your audience'
    },
    {
      icon: Target,
      title: "Smart Segmentation",
      description: 'AI-powered audience segmentation for highly targeted campaigns'
    },
    {
      icon: Send,
      title: "Optimal Timing",
      description: 'AI determines the best time to send emails for maximum engagement'
    },
    {
      icon: BarChart,
      title: "Performance Analytics",
      description: 'Comprehensive analytics and insights to optimize your email campaigns'
    },
    {
      icon: Users,
      title: "Audience Insights",
      description: 'Deep understanding of your audience behavior and preferences'
    },
    {
      icon: TrendingUp,
      title: "ROI Optimization",
      description: 'Maximize your return on investment with AI-driven optimizations'
    }
  ];

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Email Marketing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your email marketing with AI-powered content generation, smart segmentation, and automated optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Revolutionize Your Email Marketing?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to learn how our AI email marketing solutions can boost your engagement and ROI.
            </p>
            <a
              href="/contact"
              className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors inline-block"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default AIEmailMarketingPage;