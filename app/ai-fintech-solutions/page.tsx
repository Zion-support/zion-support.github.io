'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  DollarSign, 
  Brain, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Clock,
  Users,
  Zap,
  Target,
  FileText,
  BarChart,
  Cpu,
  Eye,
  Mic,
  Database,
  Globe,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  PieChart,
  Activity,
  Lock
} from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AiFintechSolutionsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 'ai-fraud-detection',
      name: 'AI Fraud Detection System',
      description: 'Advanced AI-powered fraud detection and prevention system with real-time monitoring and 99.9% accuracy',
      price: '$1,999/month',
      marketPrice: '$4000-15000/month',
      features: [
        'Real-time transaction monitoring',
        'Behavioral pattern analysis',
        'Machine learning fraud models',
        'Cross-channel fraud detection',
        'Automated risk scoring',
        'Regulatory compliance reporting'
      ],
      benefits: [
        'Reduce fraud losses by 85%',
        'Decrease false positives by 60%',
        'Real-time threat detection',
        'Compliance with PCI DSS'
      ],
      category: 'Security',
      popular: true,
      icon: Shield
    },
    {
      id: 'ai-trading-algorithms',
      name: 'AI Trading Algorithms',
      description: 'Sophisticated AI trading algorithms for algorithmic trading, portfolio optimization, and market analysis',
      price: '$3,999/month',
      marketPrice: '$8000-30000/month',
      features: [
        'Algorithmic trading strategies',
        'Portfolio optimization',
        'Market sentiment analysis',
        'Risk management algorithms',
        'Backtesting and simulation',
        'Real-time market data processing'
      ],
      benefits: [
        'Increase trading returns by 40%',
        'Reduce risk exposure by 50%',
        '24/7 automated trading',
        'Data-driven investment decisions'
      ],
      category: 'Trading',
      popular: true,
      icon: TrendingUp
    },
    {
      id: 'ai-credit-scoring',
      name: 'AI Credit Scoring Platform',
      description: 'Advanced AI credit scoring system using alternative data and machine learning for accurate risk assessment',
      price: '$2,499/month',
      marketPrice: '$5000-20000/month',
      features: [
        'Alternative data analysis',
        'Machine learning credit models',
        'Real-time credit decisions',
        'Risk segmentation',
        'Regulatory compliance',
        'API integration capabilities'
      ],
      benefits: [
        'Improve approval rates by 35%',
        'Reduce default rates by 45%',
        'Faster credit decisions',
        'Better risk assessment'
      ],
      category: 'Lending',
      popular: true,
      icon: Target
    },
    {
      id: 'ai-wealth-management',
      name: 'AI Wealth Management',
      description: 'Intelligent wealth management platform with robo-advisory services and personalized investment strategies',
      price: '$1,999/month',
      marketPrice: '$4000-18000/month',
      features: [
        'Robo-advisory services',
        'Personalized investment strategies',
        'Risk profiling and assessment',
        'Tax optimization strategies',
        'Goal-based investing',
        'Client portfolio management'
      ],
      benefits: [
        'Lower management fees by 70%',
        'Personalized investment advice',
        'Automated rebalancing',
        'Better client outcomes'
      ],
      category: 'Wealth Management',
      popular: false,
      icon: PieChart
    },
    {
      id: 'ai-insurance-underwriting',
      name: 'AI Insurance Underwriting',
      description: 'AI-powered insurance underwriting platform for automated risk assessment and policy pricing',
      price: '$2,999/month',
      marketPrice: '$6000-25000/month',
      features: [
        'Automated risk assessment',
        'Dynamic pricing models',
        'Claims prediction algorithms',
        'Customer segmentation',
        'Regulatory compliance',
        'Integration with insurance systems'
      ],
      benefits: [
        'Reduce underwriting time by 80%',
        'Improve pricing accuracy by 50%',
        'Lower operational costs',
        'Better risk assessment'
      ],
      category: 'Insurance',
      popular: true,
      icon: FileText
    },
    {
      id: 'ai-payment-processing',
      name: 'AI Payment Processing',
      description: 'Intelligent payment processing system with fraud detection, optimization, and analytics',
      price: '$1,499/month',
      marketPrice: '$3000-12000/month',
      features: [
        'Payment optimization',
        'Fraud detection and prevention',
        'Transaction analytics',
        'Multi-currency support',
        'Payment method optimization',
        'Real-time processing'
      ],
      benefits: [
        'Increase payment success rates by 25%',
        'Reduce processing costs by 30%',
        'Better fraud protection',
        'Enhanced user experience'
      ],
      category: 'Payments',
      popular: true,
      icon: CreditCard
    },
    {
      id: 'ai-regulatory-compliance',
      name: 'AI Regulatory Compliance',
      description: 'AI-powered regulatory compliance platform for automated monitoring and reporting',
      price: '$2,199/month',
      marketPrice: '$4500-18000/month',
      features: [
        'Automated compliance monitoring',
        'Regulatory reporting automation',
        'Risk assessment and management',
        'Audit trail generation',
        'Policy management',
        'Integration with regulatory systems'
      ],
      benefits: [
        'Reduce compliance costs by 60%',
        'Improve accuracy by 90%',
        'Automated reporting',
        'Better risk management'
      ],
      category: 'Compliance',
      popular: false,
      icon: Lock
    },
    {
      id: 'ai-customer-insights',
      name: 'AI Customer Insights Platform',
      description: 'Advanced customer analytics and insights platform for financial services',
      price: '$1,799/month',
      marketPrice: '$3500-15000/month',
      features: [
        'Customer behavior analysis',
        'Churn prediction and prevention',
        'Personalized product recommendations',
        'Customer lifetime value prediction',
        'Sentiment analysis',
        'Cross-selling optimization'
      ],
      benefits: [
        'Increase customer retention by 40%',
        'Boost cross-selling by 55%',
        'Better customer understanding',
        'Improved customer experience'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'Security', name: 'Security', count: services.filter(s => s.category === 'Security').length },
    { id: 'Trading', name: 'Trading', count: services.filter(s => s.category === 'Trading').length },
    { id: 'Lending', name: 'Lending', count: services.filter(s => s.category === 'Lending').length },
    { id: 'Wealth Management', name: 'Wealth Management', count: services.filter(s => s.category === 'Wealth Management').length },
    { id: 'Insurance', name: 'Insurance', count: services.filter(s => s.category === 'Insurance').length },
    { id: 'Payments', name: 'Payments', count: services.filter(s => s.category === 'Payments').length },
    { id: 'Compliance', name: 'Compliance', count: services.filter(s => s.category === 'Compliance').length },
    { id: 'Analytics', name: 'Analytics', count: services.filter(s => s.category === 'Analytics').length }
  ];

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory
  );

  return (
    <>
      <Helmet>
        <title>AI Fintech Solutions - Zion Tech Group | Advanced Financial AI Technology</title>
        <meta name="description" content="Revolutionary AI fintech solutions including fraud detection, algorithmic trading, credit scoring, and wealth management. Transform financial services with cutting-edge AI technology." />
        <meta name="keywords" content="AI fintech, financial AI, fintech technology, fraud detection AI, algorithmic trading, credit scoring AI, wealth management AI, financial analytics" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 py-20">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-4">
                💰 Trusted by 150+ Financial Institutions
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              AI Fintech Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionize financial services with cutting-edge AI technology. From fraud detection to algorithmic trading, 
              we provide comprehensive AI solutions that enhance security, efficiency, and customer experience.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-gray-300">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>PCI DSS Compliant</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Bank-Grade Security</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Real-Time Processing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                <span>Regulatory Compliance</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="tel:+13024640950" 
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                  </div>
                  {service.popular && (
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{service.category}</span>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-green-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    to="/contact"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                  <Link 
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-slate-800/50 to-purple-900/50 rounded-3xl p-12 border border-cyan-500/20 mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Financial Services with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join 150+ financial institutions that have already transformed their operations with our AI solutions. 
                Get started with a free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center group shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="tel:+13024640950" 
                  className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
              </div>
              <div className="text-sm text-gray-400">
                <p>✓ Free consultation • ✓ PCI DSS compliant • ✓ Bank-grade security • ✓ 24/7 support</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default AiFintechSolutionsPage;