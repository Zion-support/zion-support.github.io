'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const products: MicroSaasProduct[] = [
    {
      id: '1',
      icon: '📊',
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights and predictive modeling',
      features: [
        'Real-time data visualization & dashboards',
        'Custom dashboard builder with drag-and-drop',
        'AI-powered insights & recommendations',
        'Advanced reporting & automated alerts',
        'API integration with 100+ data sources',
        'Mobile-responsive dashboard & app',
        'Predictive analytics & forecasting',
        'White-label customization options'
      ],
      price: '$89/month',
      users: 'Up to 25 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: '💬',
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP, sentiment analysis, and multi-language support',
      features: [
        'Advanced AI chatbot with GPT-4 integration',
        'Multi-channel support (web, mobile, social, WhatsApp)',
        'Sentiment analysis & mood tracking',
        'Live chat integration & handoff',
        'Knowledge base management & training',
        'Performance analytics & optimization',
        'Voice & video call support',
        'Custom branding & white-labeling'
      ],
      price: '$149/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Communication'
    },
    {
      id: '3',
      icon: '🔐',
      title: 'Zion Security Shield',
      description: 'Enterprise-grade cybersecurity monitoring with AI threat detection, automated response, and compliance management',
      features: [
        'Real-time threat monitoring & detection',
        'AI-powered behavioral analysis',
        'Automated incident response & remediation',
        'Compliance reporting (SOC2, GDPR, HIPAA)',
        'Vulnerability scanning & assessment',
        'Security analytics dashboard',
        '24/7 security operations center',
        'Custom security policies & rules'
      ],
      price: '$299/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '4',
      icon: '☁️',
      title: 'Zion Cloud Vault',
      description: 'Intelligent cloud backup and disaster recovery with AI-powered optimization and automated failover',
      features: [
        'Automated cloud backup & synchronization',
        'Disaster recovery planning & testing',
        'Version control & file history tracking',
        'AI-powered storage optimization',
        'Cross-platform sync (Windows, Mac, Linux)',
        'Advanced encryption & security',
        'Bandwidth throttling & scheduling',
        'Multi-cloud provider support'
      ],
      price: '$79/month',
      users: 'Up to 30 users',
      popular: false,
      category: 'Storage'
    },
    {
      id: '5',
      icon: '📈',
      title: 'Zion Performance AI',
      description: 'Advanced application performance monitoring with AI-powered optimization recommendations and predictive scaling',
      features: [
        'Real-time performance monitoring',
        'AI-powered optimization suggestions',
        'Error tracking & alerting system',
        'User experience analytics & heatmaps',
        'Database performance insights',
        'Mobile app performance tracking',
        'Predictive scaling recommendations',
        'Custom performance metrics & KPIs'
      ],
      price: '$129/month',
      users: 'Up to 40 users',
      popular: false,
      category: 'Monitoring'
    },
    {
      id: '6',
      icon: '🤖',
      title: 'Zion AI Workflow',
      description: 'Intelligent business process automation with custom AI models, workflow optimization, and no-code automation',
      features: [
        'Visual workflow builder & designer',
        'AI-powered process optimization',
        'Custom automation rules & triggers',
        'Integration with 200+ tools & APIs',
        'Advanced analytics & reporting',
        'Multi-tenant architecture',
        'No-code automation creation',
        'Machine learning model training'
      ],
      price: '$199/month',
      users: 'Up to 75 users',
      popular: true,
      category: 'AI'
    },
    {
      id: '7',
      icon: '📧',
      title: 'Zion Email Marketing AI',
      description: 'AI-powered email marketing platform with advanced segmentation, personalization, and automated campaign optimization',
      features: [
        'AI-powered content generation & optimization',
        'Advanced audience segmentation & targeting',
        'Automated campaign optimization & A/B testing',
        'Email deliverability optimization',
        'Template library & custom designs',
        'Advanced analytics & ROI tracking',
        'Multi-channel marketing automation',
        'GDPR compliance & data protection'
      ],
      price: '$99/month',
      users: 'Up to 60 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '8',
      icon: '💰',
      title: 'Zion Finance AI',
      description: 'Intelligent financial management and accounting automation platform with AI-powered insights and forecasting',
      features: [
        'Automated bookkeeping & transaction categorization',
        'AI-powered expense tracking & analysis',
        'Financial forecasting & budgeting',
        'Invoice generation & automated billing',
        'Tax preparation assistance & filing',
        'Multi-currency support & conversion',
        'Real-time financial dashboards',
        'Integration with banks & payment systems'
      ],
      price: '$179/month',
      users: 'Up to 20 users',
      popular: false,
      category: 'Finance'
    },
    {
      id: '9',
      icon: '📱',
      title: 'Zion Mobile App Builder',
      description: 'No-code mobile app development platform with AI-powered design suggestions and automated testing',
      features: [
        'Drag-and-drop app builder',
        'AI-powered design suggestions',
        'Cross-platform deployment (iOS/Android)',
        'Automated testing & quality assurance',
        'App store optimization & publishing',
        'Real-time preview & debugging',
        'Backend integration & APIs',
        'Push notifications & analytics'
      ],
      price: '$249/month',
      users: 'Up to 10 apps',
      popular: false,
      category: 'Development'
    },
    {
      id: '10',
      icon: '🎯',
      title: 'Zion Lead Generation AI',
      description: 'AI-powered lead generation and qualification platform with automated outreach and scoring',
      features: [
        'AI-powered lead identification & scoring',
        'Automated outreach & follow-up sequences',
        'Multi-channel lead capture forms',
        'CRM integration & synchronization',
        'Lead nurturing & drip campaigns',
        'Advanced analytics & conversion tracking',
        'A/B testing & optimization',
        'Custom lead qualification rules'
      ],
      price: '$159/month',
      users: 'Up to 1000 leads/month',
      popular: true,
      category: 'Sales'
    },
    {
      id: '11',
      icon: '📚',
      title: 'Zion Learning Management AI',
      description: 'Intelligent learning management system with AI-powered course recommendations and automated assessments',
      features: [
        'AI-powered course recommendations',
        'Automated assessment & grading',
        'Interactive content creation tools',
        'Progress tracking & analytics',
        'Gamification & achievement system',
        'Multi-language support',
        'Mobile learning app',
        'Integration with video platforms'
      ],
      price: '$199/month',
      users: 'Up to 500 learners',
      popular: false,
      category: 'Education'
    },
    {
      id: '12',
      icon: '🏥',
      title: 'Zion Health Analytics',
      description: 'AI-powered health data analytics platform with predictive health insights and wellness recommendations',
      features: [
        'Health data integration & analysis',
        'Predictive health insights & alerts',
        'Wellness recommendations & tracking',
        'Telemedicine integration',
        'Medication management & reminders',
        'Health goal setting & monitoring',
        'Privacy-compliant data handling',
        'Integration with wearables & devices'
      ],
      price: '$299/month',
      users: 'Up to 200 patients',
      popular: false,
      category: 'Healthcare'
    }
  ];

  const categories = ['All', 'Analytics', 'Communication', 'Security', 'Storage', 'Monitoring', 'AI', 'Marketing', 'Finance', 'Development', 'Sales', 'Education', 'Healthcare'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-500" />, value: '10K+', label: 'Active Users' },
    { icon: <TrendingUp className="w-8 h-8 text-green-500" />, value: '99.9%', label: 'Uptime' },
    { icon: <Shield className="w-8 h-8 text-purple-500" />, value: '100%', label: 'Secure' },
    { icon: <Zap className="w-8 h-8 text-orange-500" />, value: '5min', label: 'Setup Time' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to solve specific business problems. Quick setup, affordable pricing, powerful features." />
        <meta name="keywords" content="micro SaaS, business tools, analytics, customer chat, security, cloud backup, performance monitoring" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Micro SaaS
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready-to-use business tools that solve specific problems. No complex setup, no long-term commitments - just powerful solutions that work.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                    : 'border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className={`bg-slate-800/50 rounded-2xl p-8 border transition-all duration-300 ${
                product.popular ? 'border-cyan-500' : 'border-cyan-500/20 hover:border-cyan-500/40'
              }`}>
                {product.popular && (
                  <div className="flex justify-center mb-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                    <span>{product.users}</span>
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mt-4">{product.price}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex space-x-3">
                  <Link
                    to="/contact"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center"
                  >
                    Get Started
                  </Link>
                  <button className="flex-1 border border-cyan-500 text-cyan-400 font-semibold py-3 px-6 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SaaS products are designed for quick deployment, easy integration, and immediate value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Quick Setup</h3>
              <p className="text-gray-300">Get up and running in minutes with our streamlined onboarding process.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Secure & Reliable</h3>
              <p className="text-gray-300">Enterprise-grade security and 99.9% uptime guarantee for all our solutions.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Scalable</h3>
              <p className="text-gray-300">Grow with confidence - our solutions scale with your business needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our collection of micro SaaS solutions or contact us for a custom solution tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Pricing</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;