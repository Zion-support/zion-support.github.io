import { Users, TrendingUp, BarChart3, Globe, ArrowRight, CheckCircle, Star, Target, Zap } from 'lucide-react';
import { Users, BarChart3, TrendingUp, Target, Zap, Globe, Shield, Award, ArrowRight } from 'lucide-react';
      icon: Users,
      icon: Target,
      title: 'Multi-Touch Attribution',
      description: 'Track customer journey across all touchpoints and channels',
      benefits: ['Complete customer journey visibility', 'Accurate ROI measurement', 'Data-driven decision making']
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Live performance metrics and conversion tracking',
      benefits: ['Instant performance insights', 'Live campaign optimization', 'Real-time reporting']
    },
    {
      icon: Shield,
      title: 'Fraud Prevention',
      description: 'Advanced fraud detection and prevention systems',
      benefits: ['Click fraud detection', 'Conversion validation', 'Revenue protection']
    },
    {
      icon: Zap,
      title: 'AI-Powered Optimization',
      description: 'Machine learning algorithms for campaign optimization',
      benefits: ['Automated bid management', 'Smart budget allocation', 'Performance prediction']
      title: "Real-time Analytics",
      description: "Live performance metrics and conversion tracking"
    },
    {
      icon: Users,
      title: "Partner Management",
      description: "Comprehensive affiliate and partner relationship management"
    },
    {
      icon: BarChart3,
      title: "Advanced Reporting",
      description: "Detailed insights and customizable reporting dashboards"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Support for international markets and multiple currencies"
    },
    {
      icon: Target,
      title: "Smart Optimization",
      description: "AI-powered recommendations to maximize conversion rates"
    }
  ];

  const attributionModels = [
    {
      name: 'First-Touch Attribution',
      description: 'Credits the first interaction that led to conversion',
      bestFor: 'Brand awareness campaigns'
    },
    {
      name: 'Last-Touch Attribution',
      description: 'Credits the final interaction before conversion',
      bestFor: 'Direct response campaigns'
    },
    {
      name: 'Linear Attribution',
      description: 'Distributes credit equally across all touchpoints',
      bestFor: 'Multi-channel marketing'
    },
    {
      name: 'Time-Decay Attribution',
      description: 'Gives more credit to recent interactions',
      bestFor: 'Long sales cycles'
    },
    {
      name: 'Data-Driven Attribution',
      description: 'Uses machine learning for optimal credit distribution',
      bestFor: 'Advanced analytics needs'
    {
      title: "Affiliate Tracking",
      description: "Complete tracking of affiliate performance and commissions",
      features: ["Click tracking", "Conversion monitoring", "Commission calculation", "Payment processing"]
    },
    {
      title: "Campaign Management",
      description: "Manage multiple marketing campaigns and track performance",
      features: ["Campaign creation", "Budget allocation", "Performance tracking", "A/B testing"]
    },
    {
      title: "Customer Journey Mapping",
      description: "Visualize and analyze customer touchpoints and interactions",
      features: ["Journey visualization", "Touchpoint analysis", "Conversion paths", "Drop-off identification"]
    },
    {
      title: "Revenue Attribution",
      description: "Accurately attribute revenue to marketing efforts and channels",
      features: ["Revenue tracking", "Channel performance", "ROI calculation", "Profitability analysis"]
    }
  ];

  const benefits = [
    {
      title: "Revenue Growth",
      description: "Increase revenue by optimizing marketing spend",
      metric: "25-40%"
    },
    {
      title: "ROI Improvement",
      description: "Better understanding of marketing effectiveness",
      metric: "3x"
    },
    {
      title: "Cost Reduction",
      description: "Eliminate wasteful spending on underperforming channels",
      metric: "30%"
    },
    {
      title: "Customer Insights",
      description: "Deeper understanding of customer behavior and preferences",
      metric: "5x"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium">
              <Users className="w-4 h-4 mr-2" />
              Affiliate Marketing Excellence
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Affiliate Attribution Hub
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Maximize your affiliate marketing ROI with our comprehensive attribution platform. 
            Track, analyze, and optimize every customer interaction across all channels.
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors duration-200"
            >
              Get Started
              <Zap className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services/affiliate-marketing"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold transition-colors duration-200"
            >
              Learn More
            </Link>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Powerful Attribution Features
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Everything you need to track, analyze, and optimize your affiliate marketing campaigns
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-300">
                      <Award className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Attribution Models Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Advanced Attribution Models
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Choose the attribution model that best fits your marketing strategy and business goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attributionModels.map((model, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <h3 className="text-xl font-semibold text-white mb-3">{model.name}</h3>
                <p className="text-slate-400 mb-4">{model.description}</p>
                <div className="bg-purple-500/10 rounded-lg p-3">
                  <p className="text-sm text-purple-400 font-medium">Best for:</p>
                  <p className="text-sm text-slate-300">{model.bestFor}</p>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-indigo-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Complete Attribution Solution
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our platform provides end-to-end affiliate attribution management, 
                from tracking to optimization and everything in between.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <Target className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Platform Benefits</h3>
                  <p className="text-gray-300">Transform your affiliate marketing</p>
                </div>
                
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{benefit}</span>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Advanced Capabilities</h2>
            <p className="text-xl text-gray-400">Powerful tools to optimize your marketing attribution and affiliate programs</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-semibold mb-4">{capability.title}</h3>
                <p className="text-gray-400 text-lg mb-6">{capability.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {capability.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our affiliate attribution platform is designed to work across all industries, 
              with specialized solutions for your specific business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </div>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose Our Attribution Hub?
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Proven results and comprehensive features for affiliate marketing success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Increased ROI</h3>
                  <p className="text-slate-400">Optimize campaigns based on accurate attribution data to maximize your return on investment.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Global Reach</h3>
                  <p className="text-slate-400">Track and manage affiliate campaigns across multiple countries and currencies.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <BarChart3 className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Advanced Analytics</h3>
                  <p className="text-slate-400">Deep insights into customer behavior and campaign performance with customizable dashboards.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Fraud Protection</h3>
                  <p className="text-slate-400">Advanced fraud detection systems to protect your revenue and maintain campaign integrity.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Real-Time Optimization</h3>
                  <p className="text-slate-400">AI-powered campaign optimization that adjusts bids and budgets in real-time for maximum performance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Partner Management</h3>
                  <p className="text-slate-400">Comprehensive tools to manage affiliate relationships and track partner performance.</p>
                </div>
              </div>
            </div>
      {/* Integration Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Marketing Tool Integration</h2>
            <p className="text-xl text-gray-400">Works with your existing marketing and analytics tools</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Google Analytics", "Google Ads", "Facebook Ads", "LinkedIn Ads", "Twitter Ads", "TikTok Ads",
              "Shopify", "WooCommerce", "Magento", "Salesforce", "HubSpot", "Mailchimp"
            ].map((tool, index) => (
              <div
                key={index}
                className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50 hover:border-pink-500/50 transition-colors duration-200"
              >
                <div className="text-gray-300 font-medium">{tool}</div>
              </div>
            ))}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Affiliate Marketing?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Join leading brands that use our attribution hub to maximize their affiliate marketing ROI 
            and gain complete visibility into their customer acquisition funnel.
              className="inline-flex items-center px-8 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-colors duration-200"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center px-8 py-4 rounded-lg border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-semibold transition-colors duration-200"
            >
              View Success Stories
}
}
