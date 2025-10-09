import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Megaphone, Target, BarChart, Mail, Camera, PenTool, CheckCircle, Zap, Users, TrendingUp } from 'lucide-react';

const MarketingToolsPage: React.FC = () => {
  const tools = [
    {
      icon: Megaphone,
      title: 'Social Media AI',
      description: 'AI-powered social media management and content optimization',
      features: ['Auto-posting', 'Content optimization', 'Engagement analysis'],
      price: 'Starting at $149/month'
    },
    {
      icon: Target,
      title: 'Ad Campaign Manager',
      description: 'Intelligent ad creation and optimization across platforms',
      features: ['Auto-optimization', 'A/B testing', 'ROI tracking'],
      price: 'Starting at $199/month'
    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Comprehensive marketing analytics and performance tracking',
      features: ['Real-time metrics', 'Custom reports', 'Predictive insights'],
      price: 'Starting at $99/month'
    },
    {
      icon: Mail,
      title: 'Email Marketing AI',
      description: 'Automated email campaigns with personalization',
      features: ['Smart segmentation', 'Auto-personalization', 'Send optimization'],
      price: 'Starting at $79/month'
    },
    {
      icon: Camera,
      title: 'Content Creator AI',
      description: 'AI-generated visual content and video production',
      features: ['Auto-generated images', 'Video editing', 'Brand consistency'],
      price: 'Starting at $299/month'
    },
    {
      icon: PenTool,
      title: 'Copywriting Assistant',
      description: 'AI-powered content creation and copy optimization',
      features: ['SEO optimization', 'Tone adjustment', 'Performance prediction'],
      price: 'Starting at $129/month'
    }
  ];

  const features = [
    'AI-powered content generation',
    'Automated campaign optimization',
    'Real-time performance tracking',
    'Cross-platform integration',
    'Advanced audience targeting',
    'Predictive analytics',
    'ROI optimization',
    '24/7 campaign monitoring'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Marketing Tools
          </h1>
          <p className="text-lg sm:text-xl text-cyan-400 mb-8 font-medium">
            AI-Powered Marketing Solutions
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Revolutionize your marketing strategy with our comprehensive suite of AI-powered tools. 
            From content creation to campaign optimization, we provide everything you need to scale your marketing efforts.
          </p>
        </section>

        {/* Tools Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Our Marketing Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="text-4xl mb-4 text-center">
                  <tool.icon className="w-12 h-12 mx-auto text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {tool.title}
                </h3>
                <p className="text-gray-300 mb-4 text-center leading-relaxed">
                  {tool.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-lg font-bold text-pink-400 mb-4">
                    {tool.price}
                  </div>
                  <button className="cyber-button w-full">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Why Choose Our Marketing Tools?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-cyan-400" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Proven Marketing Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-pink-400 mb-2">300%</div>
                <div className="text-gray-300">Increase in Engagement</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">250%</div>
                <div className="text-gray-300">ROI Improvement</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">80%</div>
                <div className="text-gray-300">Time Saved</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300">Campaign Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform Integration */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Platform Integration
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Facebook</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-500 to-sky-700 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Twitter</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-700 rounded-lg flex items-center justify-center mb-4">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">Instagram</h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-700 rounded-lg flex items-center justify-center mb-4">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-8 sm:p-12 cyber-card">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of marketers who have already revolutionized their campaigns with our AI-powered tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MarketingToolsPage;
