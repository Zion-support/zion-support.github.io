import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BarChart, TrendingUp, Users, Zap, Shield, Clock, CheckCircle, ArrowRight, Star, Award, Brain, Target } from 'lucide-react';

const AIAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Real-time Analytics',
      description: 'Monitor your business performance with live dashboards and instant data updates across all channels.',
      color: 'text-blue-400'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictions based on machine learning analysis of your data.',
      color: 'text-purple-400'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast trends, customer behavior, and business outcomes with advanced predictive modeling.',
      color: 'text-green-400'
    },
    {
      icon: Target,
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards with drag-and-drop widgets tailored to your specific needs.',
      color: 'text-orange-400'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Share insights and reports with your team through collaborative workspaces and automated alerts.',
      color: 'text-cyan-400'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with role-based access control, data encryption, and compliance features.',
      color: 'text-pink-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        '5 data sources',
        'Basic dashboards',
        'Email reports',
        'Standard support',
        '1 year data retention'
      ],
      color: 'border-blue-400',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '20 data sources',
        'Advanced AI insights',
        'Custom dashboards',
        'Priority support',
        '3 years data retention',
        'API access'
      ],
      color: 'border-purple-400',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited data sources',
        'Custom AI models',
        'White-label solution',
        '24/7 dedicated support',
        'Unlimited data retention',
        'On-premise deployment'
      ],
      color: 'border-orange-400',
      buttonColor: 'bg-orange-600 hover:bg-orange-700'
    }
  ];

  const integrations = [
    { name: 'Google Analytics', logo: '📊' },
    { name: 'Salesforce', logo: '☁️' },
    { name: 'HubSpot', logo: '🎯' },
    { name: 'Stripe', logo: '💳' },
    { name: 'Shopify', logo: '🛒' },
    { name: 'Facebook Ads', logo: '📱' },
    { name: 'LinkedIn', logo: '💼' },
    { name: 'Twitter', logo: '🐦' },
    { name: 'Instagram', logo: '📸' },
    { name: 'YouTube', logo: '📺' },
    { name: 'TikTok', logo: '🎵' },
    { name: 'Pinterest', logo: '📌' }
  ];

  const testimonials = [
    {
      name: 'David Kim',
      company: 'E-commerce Plus',
      role: 'CEO',
      content: 'Our revenue increased by 40% after implementing AI insights. The predictive analytics helped us optimize our marketing spend.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      company: 'Marketing Agency',
      role: 'Director of Analytics',
      content: 'The real-time dashboards give us instant visibility into campaign performance. Our clients love the detailed reports.',
      rating: 5
    },
    {
      name: 'Robert Martinez',
      company: 'SaaS Startup',
      role: 'Head of Growth',
      content: 'AI-powered insights helped us identify our most valuable customer segments. Customer acquisition cost dropped by 35%.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Business Intelligence
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            AI Analytics Dashboard
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Transform data into actionable insights with AI
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Get real-time business intelligence with predictive analytics, custom reports, and automated insights. 
            Make data-driven decisions with our advanced AI-powered analytics platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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
              Get Free Demo
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-300 text-sm">Revenue Increase</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Data Sources</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">Real-time</div>
              <div className="text-gray-300 text-sm">Updates</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Powerful Analytics Features
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Everything you need to turn data into business insights
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="quantum-card p-6 energy-pulse">
                <div className={`w-12 h-12 ${feature.color} mb-4`}>
                  <feature.icon className="w-full h-full" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Connect Your Data Sources
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Integrate with 50+ popular platforms and data sources
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="quantum-card p-6 text-center energy-pulse">
                <div className="text-4xl mb-3">{integration.logo}</div>
                <div className="text-white font-medium text-sm">{integration.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Start with a free trial, upgrade as you grow
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`quantum-card p-8 energy-pulse relative ${plan.color} ${plan.popular ? 'ring-2 ring-purple-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 ${plan.buttonColor} text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center`}>
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            See how companies are using AI analytics to drive growth
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="quantum-card p-6 energy-pulse">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="quantum-card p-12 energy-pulse">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Data into Insights?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your free trial today. No credit card required. Get AI-powered insights in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto"
              >
                📞 Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                📧 Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIAnalyticsDashboardPage;