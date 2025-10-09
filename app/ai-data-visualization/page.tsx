'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { BarChart, PieChart, TrendingUp, Eye, Brain, Zap, Shield, Users, CheckCircle, Phone, Mail, ArrowRight, Database, Globe, Settings } from 'lucide-react';

const AIDataVisualizationPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards that bring your data to life with real-time updates and customizable widgets.',
      benefits: ['Real-time updates', 'Custom widgets', 'Drag-and-drop interface']
    },
    {
      icon: PieChart,
      title: 'Advanced Chart Types',
      description: 'Visualize data with 50+ chart types including heatmaps, treemaps, scatter plots, and advanced statistical charts.',
      benefits: ['50+ chart types', 'Statistical analysis', 'Custom styling']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Leverage AI to predict trends, identify patterns, and forecast future outcomes with machine learning algorithms.',
      benefits: ['Trend prediction', 'Pattern recognition', 'Forecasting models']
    },
    {
      icon: Eye,
      title: 'Visual Storytelling',
      description: 'Transform complex data into compelling visual narratives that engage and inform your audience.',
      benefits: ['Story templates', 'Animation effects', 'Export options']
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and insights automatically generated from your data patterns.',
      benefits: ['Auto insights', 'Smart recommendations', 'Anomaly detection']
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Process and visualize data in real-time with lightning-fast performance and sub-second response times.',
      benefits: ['Real-time updates', 'High performance', 'Scalable processing']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for individuals and small teams getting started with data visualization',
      features: [
        'Up to 10 dashboards',
        'Basic chart types',
        '1GB data storage',
        'Standard templates',
        'Email support',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses with advanced visualization needs',
      features: [
        'Unlimited dashboards',
        'All chart types',
        '10GB data storage',
        'Advanced templates',
        'Priority support',
        'Advanced integrations',
        'Custom branding',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations with complex data requirements',
      features: [
        'Unlimited everything',
        'Custom chart development',
        'Unlimited data storage',
        'Custom templates',
        'Dedicated support',
        'Custom integrations',
        'White-label solution',
        'On-premise deployment',
        'SLA guarantees'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Alex Thompson',
      role: 'Data Analyst',
      company: 'FinanceCorp',
      content: 'The AI insights feature has revolutionized how we analyze our financial data. We discovered patterns we never knew existed.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'Marketing Director',
      company: 'RetailMax',
      content: 'Creating beautiful, interactive dashboards is now effortless. Our stakeholders love the visual storytelling capabilities.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'CTO',
      company: 'TechStart',
      content: 'The real-time processing capabilities are incredible. We can now make data-driven decisions instantly.',
      rating: 5
    }
  ];

  const stats = [
    { number: '50+', label: 'Chart Types' },
    { number: '99.9%', label: 'Uptime' },
    { number: '10x', label: 'Faster Insights' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Data Visualization - Zion Tech Group"
        description="Transform data into actionable insights with AI-powered visualization, interactive dashboards, and 100+ data sources. Get 10x faster insights with real-time processing."
        keywords={['AI data visualization', 'interactive dashboards', 'predictive analytics', 'data storytelling', 'business intelligence']}
        canonicalUrl="https://ziontechgroup.com/ai-data-visualization"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Data Visualization
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform complex data into stunning, interactive visualizations that tell compelling stories and drive intelligent decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Powerful Visualization Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-gray-900 p-8 rounded-lg ${
                  plan.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-cyan-400 text-gray-900 text-sm font-bold px-3 py-1 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Visualize Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI-powered data visualization to make smarter decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-cyan-600 text-cyan-400 hover:bg-cyan-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Free Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIDataVisualizationPage;