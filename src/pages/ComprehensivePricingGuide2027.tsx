import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, Shield, Cloud, Zap, Rocket, Cpu, TrendingUp, 
  Target, Users, CheckCircle, ArrowRight, Star, Globe,
  Lock, Leaf, Heart, Database, Network, Eye, Search,
  Filter, Grid, List, DollarSign, Calculator, Award,
  Calendar, Clock, CheckCircle2, X
} from 'lucide-react';

const ComprehensivePricingGuide2027: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI & Machine Learning', 'Cybersecurity', 'Cloud & Infrastructure', 'Digital Transformation', 'Healthcare Tech', 'Sustainability', 'Micro SaaS'];

  const priceRanges = [
    { value: 'All', label: 'All Prices' },
    { value: 'budget', label: 'Under $1,000/month' },
    { value: 'mid', label: '$1,000 - $5,000/month' },
    { value: 'premium', label: '$5,000 - $15,000/month' },
    { value: 'enterprise', label: '$15,000+/month' }
  ];

  const pricingPlans = [
    {
      id: 'ai-enterprise-orchestrator',
      name: 'AI Enterprise Orchestrator',
      category: 'AI & Machine Learning',
      description: 'Multi-agent AI coordination platform for enterprise workflow automation',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      plans: [
        {
          name: 'Starter',
          price: '$8,000',
          period: 'month',
          features: ['Up to 5 AI agents', 'Basic workflow automation', 'Email support', 'Standard integrations'],
          limitations: ['Max 100 workflows', 'Basic reporting', 'Community forum']
        },
        {
          name: 'Professional',
          price: '$15,000',
          period: 'month',
          features: ['Up to 25 AI agents', 'Advanced workflow automation', 'Priority support', 'Custom integrations', 'Advanced analytics'],
          limitations: ['Max 500 workflows', 'Advanced reporting', 'Phone support']
        },
        {
          name: 'Enterprise',
          price: '$25,000',
          period: 'month',
          features: ['Unlimited AI agents', 'Full workflow automation', '24/7 dedicated support', 'Custom development', 'White-label options'],
          limitations: ['None', 'Full customization', 'Dedicated account manager']
        }
      ],
      roi: '300-500%',
      implementation: '8-12 weeks',
      support: '24/7'
    },
    {
      id: 'ai-cybersecurity-suite',
      name: 'AI Cybersecurity Suite',
      category: 'Cybersecurity',
      description: 'Next-generation AI-powered threat detection and response',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      plans: [
        {
          name: 'Basic',
          price: '$5,000',
          period: 'month',
          features: ['Basic threat detection', 'Email alerts', 'Standard support', 'Basic reporting'],
          limitations: ['Max 100 endpoints', 'Basic threat intelligence', 'Community support']
        },
        {
          name: 'Advanced',
          price: '$12,000',
          period: 'month',
          features: ['Advanced threat detection', 'Automated response', 'Priority support', 'Advanced reporting', 'Custom rules'],
          limitations: ['Max 500 endpoints', 'Advanced threat intelligence', 'Phone support']
        },
        {
          name: 'Enterprise',
          price: '$20,000',
          period: 'month',
          features: ['Full threat detection', 'AI-powered response', '24/7 dedicated support', 'Custom development', 'Compliance reporting'],
          limitations: ['None', 'Full customization', 'Dedicated security team']
        }
      ],
      roi: '400-600%',
      implementation: '6-10 weeks',
      support: '24/7'
    },
    {
      id: 'cloud-devops-revolution',
      name: 'Cloud DevOps Revolution',
      category: 'Cloud & Infrastructure',
      description: 'Next-generation cloud infrastructure and DevOps automation',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-600',
      plans: [
        {
          name: 'Starter',
          price: '$3,000',
          period: 'month',
          features: ['Basic CI/CD pipeline', 'Cloud monitoring', 'Email support', 'Standard templates'],
          limitations: ['Max 3 environments', 'Basic automation', 'Community support']
        },
        {
          name: 'Professional',
          price: '$10,000',
          period: 'month',
          features: ['Advanced CI/CD pipeline', 'Multi-cloud support', 'Priority support', 'Custom automation', 'Advanced monitoring'],
          limitations: ['Max 10 environments', 'Advanced automation', 'Phone support']
        },
        {
          name: 'Enterprise',
          price: '$18,000',
          period: 'month',
          features: ['Full CI/CD pipeline', 'Multi-cloud orchestration', '24/7 dedicated support', 'Custom development', 'Full automation'],
          limitations: ['None', 'Full customization', 'Dedicated DevOps team']
        }
      ],
      roi: '200-350%',
      implementation: '6-10 weeks',
      support: '24/7'
    },
    {
      id: 'digital-transformation-2027',
      name: 'Digital Transformation 2027',
      category: 'Digital Transformation',
      description: 'Comprehensive digital transformation strategy and implementation',
      icon: Rocket,
      color: 'from-orange-500 to-red-600',
      plans: [
        {
          name: 'Strategy',
          price: '$25,000',
          period: 'month',
          features: ['Digital strategy development', 'Technology roadmap', 'Change management plan', 'ROI analysis'],
          limitations: ['Strategy only', 'Basic implementation', 'Standard support']
        },
        {
          name: 'Implementation',
          price: '$50,000',
          period: 'month',
          features: ['Full strategy + implementation', 'Technology deployment', 'Change management', 'Training programs', 'Priority support'],
          limitations: ['Standard implementation', 'Advanced support', 'Phone support']
        },
        {
          name: 'Transformation',
          price: '$100,000',
          period: 'month',
          features: ['Complete transformation', 'Custom development', '24/7 dedicated support', 'Ongoing optimization', 'Full customization'],
          limitations: ['None', 'Full customization', 'Dedicated transformation team']
        }
      ],
      roi: '600-1000%',
      implementation: '16-24 weeks',
      support: '24/7'
    },
    {
      id: 'healthcare-tech-platform',
      name: 'Healthcare Tech Platform',
      category: 'Healthcare Tech',
      description: 'AI-powered healthcare technology platform for modern medical facilities',
      icon: Heart,
      color: 'from-pink-500 to-red-600',
      plans: [
        {
          name: 'Clinic',
          price: '$8,000',
          period: 'month',
          features: ['Patient management', 'Basic AI diagnostics', 'Email support', 'Standard compliance'],
          limitations: ['Max 50 patients/day', 'Basic AI features', 'Community support']
        },
        {
          name: 'Hospital',
          price: '$20,000',
          period: 'month',
          features: ['Full patient management', 'Advanced AI diagnostics', 'Priority support', 'Full compliance', 'Custom integrations'],
          limitations: ['Max 500 patients/day', 'Advanced AI features', 'Phone support']
        },
        {
          name: 'Enterprise',
          price: '$35,000',
          period: 'month',
          features: ['Complete healthcare platform', 'AI-powered diagnostics', '24/7 dedicated support', 'Custom development', 'Full customization'],
          limitations: ['None', 'Full customization', 'Dedicated healthcare team']
        }
      ],
      roi: '350-500%',
      implementation: '12-16 weeks',
      support: '24/7'
    },
    {
      id: 'micro-saas-suite',
      name: 'Micro SaaS Suite',
      category: 'Micro SaaS',
      description: 'Collection of focused, AI-powered micro SaaS solutions',
      icon: Zap,
      color: 'from-indigo-500 to-purple-600',
      plans: [
        {
          name: 'Individual',
          price: '$500',
          period: 'month',
          features: ['3 micro SaaS tools', 'Basic AI features', 'Email support', 'Standard templates'],
          limitations: ['Max 3 tools', 'Basic AI features', 'Community support']
        },
        {
          name: 'Business',
          price: '$1,500',
          period: 'month',
          features: ['10 micro SaaS tools', 'Advanced AI features', 'Priority support', 'Custom integrations', 'Advanced analytics'],
          limitations: ['Max 10 tools', 'Advanced AI features', 'Phone support']
        },
        {
          name: 'Enterprise',
          price: '$3,000',
          period: 'month',
          features: ['All micro SaaS tools', 'Full AI features', '24/7 dedicated support', 'Custom development', 'White-label options'],
          limitations: ['None', 'Full customization', 'Dedicated account manager']
        }
      ],
      roi: '150-300%',
      implementation: '2-4 weeks',
      support: '24/7'
    }
  ];

  const filteredPlans = pricingPlans.filter(plan => {
    const matchesCategory = selectedCategory === 'All' || plan.category === selectedCategory;
    const matchesSearch = plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         plan.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesPrice = true;
    if (selectedPriceRange !== 'All') {
      const maxPrice = plan.plans[plan.plans.length - 1].price.replace('$', '').replace(',', '');
      const priceNum = parseInt(maxPrice);
      
      switch (selectedPriceRange) {
        case 'budget':
          matchesPrice = priceNum < 1000;
          break;
        case 'mid':
          matchesPrice = priceNum >= 1000 && priceNum < 5000;
          break;
        case 'premium':
          matchesPrice = priceNum >= 5000 && priceNum < 15000;
          break;
        case 'enterprise':
          matchesPrice = priceNum >= 15000;
          break;
      }
    }
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const pricingBenefits = [
    {
      icon: Star,
      title: 'Proven ROI',
      description: 'All our services deliver measurable returns on investment'
    },
    {
      icon: Clock,
      title: 'Fast Implementation',
      description: 'Quick deployment with minimal business disruption'
    },
    {
      icon: Users,
      title: '24/7 Support',
      description: 'Round-the-clock expert support and maintenance'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance standards'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>Comprehensive Pricing Guide 2027 - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive pricing guide for 2027. Transparent pricing for AI, cybersecurity, cloud, and digital transformation services." />
        <meta name="keywords" content="pricing guide 2027, technology pricing, AI services pricing, Zion Tech Group pricing" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mb-6">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide
              <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                2027
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transparent pricing for all our technology services. Choose the plan that fits your business 
              needs and budget, with flexible options for every organization size.
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">Transparent</div>
              <div className="text-slate-300 text-sm">Pricing</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">400%+</div>
              <div className="text-slate-300 text-sm">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
            <div className="text-2xl font-bold text-white mb-1">Flexible</div>
              <div className="text-slate-300 text-sm">Plans</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">24/7</div>
              <div className="text-slate-300 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our Pricing?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingBenefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search pricing plans..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/70 border border-green-400/20 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-xl bg-slate-800/70 border border-green-400/20 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-3 rounded-xl bg-slate-800/70 border border-green-400/20 focus:border-green-400 focus:ring-2 focus:ring-green-400/20 outline-none text-white"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {filteredPlans.map((plan) => (
              <div key={plan.id} className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                {/* Plan Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{plan.name}</h2>
                      <p className="text-slate-300 text-lg">{plan.description}</p>
                      <div className="flex items-center space-x-4 mt-3 text-sm">
                        <span className="text-green-400">ROI: {plan.roi}</span>
                        <span className="text-blue-400">Implementation: {plan.implementation}</span>
                        <span className="text-purple-400">Support: {plan.support}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing Tiers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {plan.plans.map((tier, index) => (
                    <div key={index} className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 ${
                      index === 1 ? 'border-green-500/50 bg-green-500/5' : 'border-slate-700'
                    }`}>
                      {index === 1 && (
                        <div className="inline-block px-3 py-1 bg-green-500 text-white text-xs rounded-full mb-4">
                          Most Popular
                        </div>
                      )}
                      
                      <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                      <div className="mb-4">
                        <span className="text-3xl font-bold text-white">{tier.price}</span>
                        <span className="text-slate-400">/{tier.period}</span>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Features:</h4>
                        <ul className="space-y-2">
                          {tier.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-slate-300 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {tier.limitations.length > 0 && (
                        <div className="mb-6">
                          <h4 className="text-slate-400 font-semibold mb-3">Limitations:</h4>
                          <ul className="space-y-2">
                            {tier.limitations.map((limitation, limitationIndex) => (
                              <li key={limitationIndex} className="flex items-center space-x-2">
                                <X className="w-4 h-4 text-slate-500 flex-shrink-0" />
                                <span className="text-slate-500 text-sm">{limitation}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <Link
                        to="/schedule-demo"
                        className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-all duration-200 ${
                          index === 1
                            ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                            : 'bg-slate-700 text-white hover:bg-slate-600'
                        }`}
                      >
                        Get Started
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {filteredPlans.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2 text-white">No pricing plans found</h3>
              <p className="text-slate-400">Try adjusting your search criteria or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-slate-300 mb-6">
              Contact our sales team for custom pricing, volume discounts, and enterprise solutions. 
              We'll help you find the perfect plan for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
              >
                Schedule Demo
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all duration-200"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2027;
