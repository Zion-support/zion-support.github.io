import React from 'react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { CheckCircle, Star, Zap, Shield, Users, BarChart, Clock, Mail, Phone, Target, TrendingUp, ArrowRight, Play, Download, MessageSquare, Calendar, FileText } from 'lucide-react';

const CRMPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'AI Lead Scoring',
      description: 'Our AI analyzes customer behavior, engagement patterns, and demographics to automatically score leads and prioritize sales efforts.',
      benefits: ['95% accuracy in lead qualification', '40% increase in conversion rates', 'Reduced manual lead analysis time']
    },
    {
      icon: Mail,
      title: 'Automated Email Sequences',
      description: 'Create intelligent email campaigns that adapt based on customer behavior, engagement, and preferences.',
      benefits: ['300% higher email open rates', 'Automated follow-up sequences', 'Personalized content delivery']
    },
    {
      icon: BarChart,
      title: 'Sales Pipeline Management',
      description: 'Visual pipeline management with AI insights, forecasting, and automated stage progression recommendations.',
      benefits: ['Real-time pipeline visibility', 'Accurate sales forecasting', 'Automated stage progression']
    },
    {
      icon: Users,
      title: 'Customer Behavior Analytics',
      description: 'Deep insights into customer interactions, preferences, and buying patterns to optimize your sales strategy.',
      benefits: ['360-degree customer view', 'Behavioral pattern analysis', 'Predictive customer insights']
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel Communication',
      description: 'Unified communication hub for email, phone, chat, and social media with AI-powered response suggestions.',
      benefits: ['Unified communication history', 'AI response suggestions', 'Multi-channel tracking']
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics dashboard with AI insights, performance metrics, and optimization recommendations.',
      benefits: ['Real-time performance tracking', 'AI-powered insights', 'ROI optimization']
    }
  ];

  const integrations = [
    { name: 'Salesforce', icon: '🔗' },
    { name: 'HubSpot', icon: '🔗' },
    { name: 'Mailchimp', icon: '📧' },
    { name: 'Slack', icon: '💬' },
    { name: 'Microsoft Teams', icon: '👥' },
    { name: 'Zapier', icon: '⚡' },
    { name: 'Google Workspace', icon: '📊' },
    { name: 'Shopify', icon: '🛒' },
    { name: 'WooCommerce', icon: '🛍️' },
    { name: 'Facebook Ads', icon: '📱' },
    { name: 'Google Ads', icon: '🔍' },
    { name: 'LinkedIn', icon: '💼' }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 contacts',
        'Basic AI features',
        'Email marketing (10,000 emails/month)',
        'Standard integrations',
        'Email support',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI features',
        'Unlimited email marketing',
        'All integrations',
        'Priority support',
        'Advanced analytics',
        'Custom fields',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited contacts',
        'Full AI capabilities',
        'White-label options',
        'Custom integrations',
        '24/7 dedicated support',
        'Custom development',
        'On-premise deployment',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      role: 'Sales Director',
      company: 'GrowthTech Solutions',
      content: 'The AI lead scoring has been a game-changer. We\'ve increased our conversion rate by 40% and our sales team is much more efficient.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      role: 'Marketing Manager',
      company: 'Digital Innovations',
      content: 'The automated email sequences are incredible. Our open rates increased by 300% and we\'re closing more deals than ever.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'CEO',
      company: 'StartupHub',
      content: 'This CRM has everything we need in one platform. The AI insights help us make better decisions and grow faster.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
                Smart CRM Platform
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                Advanced customer relationship management with AI insights, automated follow-ups, 
                and sales forecasting. Increase conversion rates by 40% with intelligent lead scoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
                  Start Free Trial
                </a>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  30-day free trial
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  No setup fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Cancel anytime
                </div>
              </div>
            </div>
            <div className="cyber-card hologram-card p-8">
              <div className="aspect-video bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Play className="w-16 h-16 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">See It In Action</h3>
              <p className="text-gray-300 mb-4">
                Watch our 3-minute demo to see how AI can transform your customer relationships and boost sales.
              </p>
              <button className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-green-700 hover:to-blue-700 transition-all flex items-center justify-center">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our Smart CRM Platform?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">40% Higher Conversion</h3>
              <p className="text-gray-300 text-sm">
                AI-powered lead scoring and automated follow-ups increase conversion rates by 40% on average.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">95% Lead Accuracy</h3>
              <p className="text-gray-300 text-sm">
                AI lead scoring provides 95% accuracy in lead qualification, helping you focus on high-value prospects.
              </p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300 text-sm">
                Bank-level security with SOC 2 compliance, end-to-end encryption, and regular security audits.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful AI Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            Seamless Integrations
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Connect with 50+ popular tools and platforms to streamline your workflow and maximize productivity.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="cyber-card hologram-card p-4 text-center hover:scale-105 transition-all duration-300">
                <div className="text-3xl mb-2">{integration.icon}</div>
                <div className="text-sm text-gray-300 font-medium">{integration.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 text-center ${
                tier.popular ? 'ring-2 ring-green-500 relative' : ''
              }`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 mb-4">{tier.description}</p>
                <div className="text-4xl font-bold text-cyan-400 mb-6">
                  {tier.price}<span className="text-lg text-gray-400">{tier.period}</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                    tier.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                      : 'bg-gray-600 text-white hover:bg-gray-700'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="cyber-card hologram-card p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Sales Process?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that have already transformed their sales with AI-powered CRM. 
              Start your free trial today and see the difference.
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
                Start Free Trial
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              ✓ 30-day free trial • ✓ No credit card required • ✓ Setup in 5 minutes
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CRMPage;