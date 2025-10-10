'use client';
import React from 'react';
import { MessageSquare, Brain, BarChart, Users, TrendingUp, Target, CheckCircle, ArrowRight, Star, Award, Shield, Smartphone, Monitor, Laptop, Settings, FileText, PieChart, Zap, Clock, DollarSign, ThumbsUp, ThumbsDown, AlertTriangle, Filter } from 'lucide-react';

const AiCustomerFeedbackAnalyzerPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Sentiment Analysis',
      description: 'Advanced natural language processing to understand customer emotions and sentiment in real-time',
      benefits: ['Emotion detection', 'Sentiment scoring', 'Tone analysis', 'Context understanding']
    },
    {
      icon: BarChart,
      title: 'Intelligent Analytics',
      description: 'Comprehensive analytics dashboard with AI-powered insights and trend predictions',
      benefits: ['Trend identification', 'Pattern recognition', 'Predictive analytics', 'Custom reporting']
    },
    {
      icon: Users,
      title: 'Customer Segmentation',
      description: 'AI-driven customer categorization based on feedback patterns and behavior analysis',
      benefits: ['Behavioral segmentation', 'Demographic analysis', 'Engagement scoring', 'Persona creation']
    },
    {
      icon: Zap,
      title: 'Automated Insights',
      description: 'AI-generated actionable insights and recommendations to improve customer experience',
      benefits: ['Action recommendations', 'Priority scoring', 'Improvement suggestions', 'ROI predictions']
    },
    {
      icon: Target,
      title: 'Issue Detection',
      description: 'Proactive identification of potential problems and customer pain points before they escalate',
      benefits: ['Early warning system', 'Issue categorization', 'Severity assessment', 'Escalation management']
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Monitor customer satisfaction trends and track improvements over time',
      benefits: ['Satisfaction tracking', 'Improvement measurement', 'Benchmarking', 'Goal setting']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$59',
      period: '/month',
      description: 'Perfect for small businesses starting their feedback analysis journey',
      features: [
        'Up to 1,000 feedback entries/month',
        'Basic sentiment analysis',
        'Simple analytics dashboard',
        'Email support',
        'Standard integrations',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses with comprehensive feedback analysis needs',
      features: [
        'Up to 10,000 feedback entries/month',
        'Advanced AI analysis',
        'Comprehensive analytics',
        'Priority support',
        'Advanced integrations',
        'Custom dashboards',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with enterprise-level feedback analysis requirements',
      features: [
        'Unlimited feedback entries',
        'Premium AI features',
        'Custom analytics',
        '24/7 phone support',
        'White-label options',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced security'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Rachel Green',
      role: 'Customer Experience Director',
      company: 'RetailPlus',
      content: 'AI Customer Feedback Analyzer helped us identify key pain points and improve customer satisfaction by 45%. The insights are incredibly accurate and actionable.',
      rating: 5
    },
    {
      name: 'Tom Anderson',
      role: 'VP of Operations',
      company: 'ServiceCorp',
      content: 'The automated insights and trend analysis have transformed how we approach customer feedback. Our response time improved by 60% and customer retention by 35%.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      role: 'Head of Product',
      company: 'TechInnovate',
      content: 'The AI sentiment analysis and customer segmentation features have given us unprecedented insights into our customer base. Product development decisions are now data-driven.',
      rating: 5
    }
  ];

  const useCases = [
    {
      icon: MessageSquare,
      title: 'E-commerce',
      description: 'Analyze product reviews, support tickets, and customer surveys to improve product offerings',
      benefits: ['Product feedback analysis', 'Review sentiment tracking', 'Support ticket insights', 'Customer journey optimization']
    },
    {
      icon: Settings,
      title: 'SaaS',
      description: 'Monitor user feedback, feature requests, and support interactions to guide product development',
      benefits: ['Feature request analysis', 'User satisfaction tracking', 'Churn prediction', 'Product roadmap insights']
    },
    {
      icon: Users,
      title: 'Healthcare',
      description: 'Analyze patient feedback, satisfaction surveys, and service reviews to improve care quality',
      benefits: ['Patient satisfaction analysis', 'Service quality insights', 'Care improvement recommendations', 'Compliance monitoring']
    },
    {
      icon: FileText,
      title: 'Financial Services',
      description: 'Process customer feedback from multiple channels to enhance service delivery and compliance',
      benefits: ['Compliance monitoring', 'Service quality analysis', 'Risk assessment', 'Regulatory insights']
    }
  ];

  const integrations = [
    { name: 'SurveyMonkey', icon: FileText, description: 'Survey data integration' },
    { name: 'Zendesk', icon: MessageSquare, description: 'Support ticket analysis' },
    { name: 'Google Analytics', icon: BarChart, description: 'Website feedback tracking' },
    { name: 'Slack', icon: MessageSquare, description: 'Team notifications' },
    { name: 'Salesforce', icon: Users, description: 'CRM integration' },
    { name: 'HubSpot', icon: Target, description: 'Marketing automation' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4 mr-2" />
              AI-Powered Feedback Analysis
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              AI Customer Feedback Analyzer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform customer feedback into actionable insights with AI-powered sentiment analysis, 
            trend detection, and automated recommendations. Improve customer satisfaction and drive growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Call (302) 464-0950</span>
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50K+</div>
              <div className="text-sm text-gray-300">Feedback Entries Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">45%</div>
              <div className="text-sm text-gray-300">Satisfaction Improvement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-sm text-gray-300">Faster Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">95%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to analyze customer feedback and drive meaningful improvements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI feedback analyzer works across all industries and feedback channels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-gray-300 mb-6">{useCase.description}</p>
                <ul className="space-y-2 text-left">
                  {useCase.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with your favorite tools and platforms for a unified feedback analysis experience
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={integration.name}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <integration.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                <p className="text-sm text-gray-400">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your feedback volume and analysis needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 ${
                  plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses who have transformed their customer feedback analysis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Feedback Analysis?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Start your free trial today and discover the power of AI-driven feedback insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
            >
              <span>Call (302) 464-0950</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiCustomerFeedbackAnalyzerPage;