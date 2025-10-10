'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Zap, DollarSign, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react';

const FinancialITPage: React.FC = () => {
  const features = [
    {
      icon: DollarSign,
      title: 'Financial Analytics',
      description: 'Advanced analytics and reporting for financial data with real-time insights and predictions.',
      benefits: ['Real-time reporting', 'Predictive analytics', 'Risk assessment']
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Ensure regulatory compliance and data security with enterprise-grade financial solutions.',
      benefits: ['Regulatory compliance', 'Data encryption', 'Audit trails']
    },
    {
      icon: BarChart,
      title: 'Portfolio Management',
      description: 'Comprehensive portfolio management tools with automated rebalancing and risk monitoring.',
      benefits: ['Automated rebalancing', 'Risk monitoring', 'Performance tracking']
    },
    {
      icon: Clock,
      title: 'Real-Time Trading',
      description: 'High-frequency trading systems with ultra-low latency and advanced order management.',
      benefits: ['Ultra-low latency', 'Order management', 'Market data integration']
    },
    {
      icon: Users,
      title: 'Client Management',
      description: 'Complete client relationship management with personalized financial services.',
      benefits: ['Client profiles', 'Service customization', 'Communication tools']
    },
    {
      icon: Zap,
      title: 'Automated Processing',
      description: 'Automate financial processes with AI-powered decision making and workflow optimization.',
      benefits: ['Process automation', 'AI decision making', 'Workflow optimization']
    }
  ];

  const benefits = [
    'Improve financial decision making',
    'Reduce operational costs by 40%',
    'Enhance regulatory compliance',
    'Increase trading efficiency by 60%',
    'Better risk management',
    'Streamlined financial operations'
  ];

  const useCases = [
    {
      title: 'Investment Banking',
      description: 'Advanced trading systems and risk management for investment banks',
      icon: '🏦'
    },
    {
      title: 'Asset Management',
      description: 'Portfolio management and client services for asset managers',
      icon: '📈'
    },
    {
      title: 'Insurance',
      description: 'Underwriting and claims processing with AI-powered risk assessment',
      icon: '🛡️'
    },
    {
      title: 'Fintech',
      description: 'Digital banking and payment solutions for modern financial services',
      icon: '💳'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Financial IT - Zion Tech Group | Financial Technology Solutions</title>
        <meta name="description" content="Transform your financial operations with advanced IT solutions. Improve efficiency, compliance, and decision making with Zion Tech Group's financial technology services." />
        <meta name="keywords" content="financial IT, fintech, trading systems, portfolio management, compliance, financial analytics" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Financial IT
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your financial operations with cutting-edge IT solutions. 
            Improve efficiency, ensure compliance, and enhance decision making with our financial technology expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Get Financial IT Demo
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Financial Technology Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our financial IT solutions combine advanced technology with deep financial expertise 
              to deliver powerful tools for modern financial institutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Financial IT?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of modern financial technology with measurable improvements in efficiency and compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our financial IT solutions are designed for various financial institutions and use cases.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discover how our financial IT solutions can revolutionize your operations. 
            Get started with a free consultation and demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinancialITPage;