import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

const AISocialMediaSchedulerPage: React.FC = () => {
  const features = [
    'AI-powered content generation and optimization',
    'Multi-platform posting (Facebook, Instagram, Twitter, LinkedIn)',
    'Intelligent posting time optimization',
    'Hashtag research and optimization',
    'Visual content creation and editing',
    'Engagement tracking and analytics',
    'Automated response management',
    'Influencer collaboration tools',
    'Content calendar and planning',
    'Brand voice consistency monitoring'
  ];

  const benefits = [
    'Increase social media engagement by 45%',
    'Save 20+ hours per week on social media tasks',
    'Improve content quality and consistency',
    'Boost follower growth by 60%',
    'Enhance brand awareness and reach',
    'Automate 80% of social media management',
    'Improve posting timing and frequency',
    'Generate more leads and conversions'
  ];

  const pricing = [
    {
      plan: 'Starter',
      price: '$99/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 3 social media accounts',
        'Basic AI content generation',
        'Standard scheduling',
        'Email support',
        'Mobile app access',
        'Basic analytics'
      ]
    },
    {
      plan: 'Professional',
      price: '$199/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10 social media accounts',
        'Advanced AI features',
        'Custom content templates',
        'Priority support',
        'API access',
        'Advanced analytics',
        'Team collaboration'
      ]
    },
    {
      plan: 'Enterprise',
      price: '$499/month',
      description: 'For large organizations',
      features: [
        'Unlimited social media accounts',
        'Full AI capabilities',
        'Custom development',
        'Dedicated support',
        'White-label options',
        'On-premise deployment',
        'Advanced security'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Social Media Scheduler Platform - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered social media management with content generation, scheduling, and analytics. Increase engagement by 45%." />
        <meta name="keywords" content="AI social media management, content generation, social media scheduling, social media automation, engagement optimization, social media analytics" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-social-media-scheduler" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full mb-6">
            <MessageSquare className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Social Media Scheduler Platform
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Revolutionize Social Media Management with AI
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your social media presence with our AI-powered platform that generates content, 
            optimizes posting times, and automates engagement. Boost your social media performance like never before.
          </p>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-cyan-400 mb-2">45%</div>
              <div className="text-white font-medium">Higher Engagement</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-pink-400 mb-2">60%</div>
              <div className="text-white font-medium">Follower Growth</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">80%</div>
              <div className="text-white font-medium">Task Automation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">20+</div>
              <div className="text-white font-medium">Hours Saved</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-rose-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Demo
            </a>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-green-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Proven Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-lg p-6 border border-pink-500/30">
                <TrendingUp className="w-8 h-8 text-pink-400 mb-4" />
                <p className="text-white font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Flexible Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 border ${
                plan.plan === 'Professional' 
                  ? 'border-pink-500 bg-gradient-to-br from-pink-500/20 to-rose-500/20' 
                  : 'border-white/20'
              }`}>
                {plan.plan === 'Professional' && (
                  <div className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold text-center mb-6">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.plan}</h3>
                <div className="text-4xl font-bold text-cyan-400 mb-4">{plan.price}</div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-white">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+13024640950"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.plan === 'Professional'
                      ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white hover:from-pink-700 hover:to-rose-700'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Market Comparison */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Market Comparison
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="overflow-x-auto">
              <table className="w-full text-white">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-4">Feature</th>
                    <th className="text-center py-4 px-4">Our Platform</th>
                    <th className="text-center py-4 px-4">Hootsuite</th>
                    <th className="text-center py-4 px-4">Buffer</th>
                    <th className="text-center py-4 px-4">Sprout Social</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4">AI Content Generation</td>
                    <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-green-400 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><span className="text-red-400">✗</span></td>
                    <td className="text-center py-4 px-4"><span className="text-red-400">✗</span></td>
                    <td className="text-center py-4 px-4"><span className="text-red-400">✗</span></td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4">Optimal Posting Times</td>
                    <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-green-400 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><span className="text-red-400">✗</span></td>
                    <td className="text-center py-4 px-4"><span className="text-red-400">✗</span></td>
                    <td className="text-center py-4 px-4"><span className="text-red-400">✗</span></td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4">Hashtag Optimization</td>
                    <td className="text-center py-4 px-4"><CheckCircle className="w-5 h-5 text-green-400 mx-auto" /></td>
                    <td className="text-center py-4 px-4"><span className="text-red-400">✗</span></td>
                    <td className="text-center py-4 px-4"><span className="text-red-400">✗</span></td>
                    <td className="text-center py-4 px-4"><span className="text-red-400">✗</span></td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4">Starting Price</td>
                    <td className="text-center py-4 px-4 font-bold text-cyan-400">$99/month</td>
                    <td className="text-center py-4 px-4">$49/month</td>
                    <td className="text-center py-4 px-4">$6/month</td>
                    <td className="text-center py-4 px-4">$249/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our AI-powered social media management platform 
            to boost engagement and grow their audience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-rose-700 transition-all duration-300 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email: kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AISocialMediaSchedulerPage;
