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

const ComprehensivePricingGuide2030: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'AI & Machine Learning', 'Quantum Computing', 'Cybersecurity', 'Cloud & Infrastructure', 'Digital Transformation', 'Healthcare Tech', 'Sustainability', 'Space Tech'];

  const priceRanges = [
    { value: 'All', label: 'All Prices' },
    { value: 'budget', label: 'Under $5,000/month' },
    { value: 'mid', label: '$5,000 - $25,000/month' },
    { value: 'premium', label: '$25,000 - $75,000/month' },
    { value: 'enterprise', label: '$75,000+/month' }
  ];

  const pricingPlans2030 = [
    {
      id: 'quantum-ai-orchestrator',
      name: 'Quantum AI Orchestrator',
      category: 'AI & Machine Learning',
      description: 'Next-generation quantum AI platform for enterprise orchestration and decision making',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      plans: [
        {
          name: 'Quantum Starter',
          price: '$25,000',
          period: 'month',
          features: ['Basic quantum AI algorithms', 'Up to 10 quantum qubits', 'Standard support', 'Basic integrations'],
          limitations: ['Limited quantum access', 'Basic algorithms', 'Community support']
        },
        {
          name: 'Quantum Professional',
          price: '$50,000',
          period: 'month',
          features: ['Advanced quantum AI algorithms', 'Up to 100 quantum qubits', 'Priority support', 'Custom integrations', 'Advanced analytics'],
          limitations: ['Standard quantum access', 'Advanced algorithms', 'Phone support']
        },
        {
          name: 'Quantum Enterprise',
          price: '$100,000',
          period: 'month',
          features: ['Full quantum AI platform', 'Unlimited quantum qubits', '24/7 dedicated support', 'Custom development', 'White-label options'],
          limitations: ['None', 'Full customization', 'Dedicated quantum team']
        }
      ],
      roi: '800-1200%',
      implementation: '16-24 weeks',
      support: '24/7'
    },
    {
      id: 'quantum-cybersecurity-suite',
      name: 'Quantum Cybersecurity Suite 2030',
      category: 'Cybersecurity',
      description: 'Quantum-resistant AI cybersecurity with predictive threat intelligence',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      plans: [
        {
          name: 'Quantum Basic',
          price: '$15,000',
          period: 'month',
          features: ['Basic quantum encryption', 'AI threat detection', 'Standard support', 'Basic compliance'],
          limitations: ['Limited quantum features', 'Basic threat intelligence', 'Community support']
        },
        {
          name: 'Quantum Advanced',
          price: '$35,000',
          period: 'month',
          features: ['Full quantum encryption', 'AI threat prediction', 'Priority support', 'Advanced compliance', 'Custom rules'],
          limitations: ['Standard quantum features', 'Advanced threat intelligence', 'Phone support']
        },
        {
          name: 'Quantum Enterprise',
          price: '$75,000',
          period: 'month',
          features: ['Complete quantum security', 'AI-powered response', '24/7 dedicated support', 'Custom development', 'Full compliance'],
          limitations: ['None', 'Full customization', 'Dedicated security team']
        }
      ],
      roi: '600-900%',
      implementation: '12-18 weeks',
      support: '24/7'
    },
    {
      id: 'quantum-cloud-platform',
      name: 'Quantum Cloud Platform',
      category: 'Cloud & Infrastructure',
      description: 'Hybrid quantum-classical cloud infrastructure for next-generation computing',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-600',
      plans: [
        {
          name: 'Quantum Starter',
          price: '$20,000',
          period: 'month',
          features: ['Basic quantum access', 'Hybrid algorithms', 'Standard support', 'Basic templates'],
          limitations: ['Limited quantum time', 'Basic algorithms', 'Community support']
        },
        {
          name: 'Quantum Professional',
          price: '$45,000',
          period: 'month',
          features: ['Advanced quantum access', 'Full hybrid algorithms', 'Priority support', 'Custom algorithms', 'Advanced monitoring'],
          limitations: ['Standard quantum time', 'Advanced algorithms', 'Phone support']
        },
        {
          name: 'Quantum Enterprise',
          price: '$90,000',
          period: 'month',
          features: ['Full quantum platform', 'Complete hybrid orchestration', '24/7 dedicated support', 'Custom development', 'Full automation'],
          limitations: ['None', 'Full customization', 'Dedicated quantum team']
        }
      ],
      roi: '500-800%',
      implementation: '20-28 weeks',
      support: '24/7'
    },
    {
      id: 'digital-transformation-2030',
      name: 'Digital Transformation 2030',
      category: 'Digital Transformation',
      description: 'Complete digital transformation with quantum and AI technologies',
      icon: Rocket,
      color: 'from-orange-500 to-red-600',
      plans: [
        {
          name: 'Quantum Strategy',
          price: '$50,000',
          period: 'month',
          features: ['Quantum strategy development', 'AI transformation roadmap', 'Change management plan', 'ROI analysis'],
          limitations: ['Strategy only', 'Basic implementation', 'Standard support']
        },
        {
          name: 'Quantum Implementation',
          price: '$150,000',
          period: 'month',
          features: ['Full quantum strategy + implementation', 'Technology deployment', 'Change management', 'Training programs', 'Priority support'],
          limitations: ['Standard implementation', 'Advanced support', 'Phone support']
        },
        {
          name: 'Quantum Transformation',
          price: '$300,000',
          period: 'month',
          features: ['Complete quantum transformation', 'Custom development', '24/7 dedicated support', 'Ongoing optimization', 'Full customization'],
          limitations: ['None', 'Full customization', 'Dedicated transformation team']
        }
      ],
      roi: '1000-1500%',
      implementation: '24-36 weeks',
      support: '24/7'
    },
    {
      id: 'healthcare-tech-2030',
      name: 'Healthcare Tech 2030',
      category: 'Healthcare Tech',
      description: 'AI-powered healthcare with quantum computing and advanced diagnostics',
      icon: Heart,
      color: 'from-pink-500 to-red-600',
      plans: [
        {
          name: 'Quantum Clinic',
          price: '$25,000',
          period: 'month',
          features: ['Basic quantum diagnostics', 'AI treatment planning', 'Standard support', 'Basic compliance'],
          limitations: ['Limited quantum features', 'Basic AI features', 'Community support']
        },
        {
          name: 'Quantum Hospital',
          price: '$75,000',
          period: 'month',
          features: ['Advanced quantum diagnostics', 'Full AI treatment planning', 'Priority support', 'Full compliance', 'Custom integrations'],
          limitations: ['Standard quantum features', 'Advanced AI features', 'Phone support']
        },
        {
          name: 'Quantum Enterprise',
          price: '$150,000',
          period: 'month',
          features: ['Complete quantum healthcare platform', 'AI-powered diagnostics', '24/7 dedicated support', 'Custom development', 'Full customization'],
          limitations: ['None', 'Full customization', 'Dedicated healthcare team']
        }
      ],
      roi: '700-1000%',
      implementation: '18-24 weeks',
      support: '24/7'
    },
    {
      id: 'space-tech-platform',
      name: 'Space Tech Platform',
      category: 'Space Tech',
      description: 'AI and quantum computing solutions for space exploration and satellite operations',
      icon: Globe,
      color: 'from-indigo-500 to-purple-600',
      plans: [
        {
          name: 'Space Starter',
          price: '$40,000',
          period: 'month',
          features: ['Basic satellite AI', 'Quantum communications', 'Standard support', 'Basic space optimization'],
          limitations: ['Limited space features', 'Basic communications', 'Community support']
        },
        {
          name: 'Space Professional',
          price: '$100,000',
          period: 'month',
          features: ['Advanced satellite AI', 'Full quantum communications', 'Priority support', 'Advanced space optimization', 'Custom algorithms'],
          limitations: ['Standard space features', 'Advanced communications', 'Phone support']
        },
        {
          name: 'Space Enterprise',
          price: '$200,000',
          period: 'month',
          features: ['Complete space platform', 'Full quantum communications', '24/7 dedicated support', 'Custom development', 'Full customization'],
          limitations: ['None', 'Full customization', 'Dedicated space team']
        }
      ],
      roi: '900-1200%',
      implementation: '24-32 weeks',
      support: '24/7'
    }
  ];

  const filteredPlans = pricingPlans2030.filter(plan => {
    const matchesCategory = selectedCategory === 'All' || plan.category === selectedCategory;
    const matchesSearch = plan.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         plan.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesPrice = true;
    if (selectedPriceRange !== 'All') {
      const maxPrice = plan.plans[plan.plans.length - 1].price.replace('$', '').replace(',', '');
      const priceNum = parseInt(maxPrice);
      
      switch (selectedPriceRange) {
        case 'budget':
          matchesPrice = priceNum < 5000;
          break;
        case 'mid':
          matchesPrice = priceNum >= 5000 && priceNum < 25000;
          break;
        case 'premium':
          matchesPrice = priceNum >= 25000 && priceNum < 75000;
          break;
        case 'enterprise':
          matchesPrice = priceNum >= 75000;
          break;
      }
    }
    
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const pricingBenefits = [
    {
      icon: Star,
      title: 'Quantum Advantage',
      description: 'Access to quantum computing power for exponential performance gains'
    },
    {
      icon: Clock,
      title: 'Future-Proof Technology',
      description: 'Built for 2030 and beyond with cutting-edge quantum and AI capabilities'
    },
    {
      icon: Users,
      title: '24/7 Quantum Support',
      description: 'Round-the-clock expert support from quantum computing specialists'
    },
    {
      icon: Shield,
      title: 'Quantum-Safe Security',
      description: 'Bank-level security with quantum-resistant encryption standards'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Comprehensive Pricing Guide 2030 - Zion Tech Group</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive pricing guide for 2030. Quantum computing, AI evolution, space technology, and revolutionary solutions pricing." />
        <meta name="keywords" content="pricing guide 2030, quantum computing pricing, AI evolution pricing, space technology pricing, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-6">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive Pricing Guide
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                2030
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Transparent pricing for our revolutionary quantum computing, AI evolution, and space technology 
              solutions designed for 2030 and beyond. Choose the plan that fits your future needs.
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">Quantum</div>
              <div className="text-slate-300 text-sm">Computing</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">800%+</div>
              <div className="text-slate-300 text-sm">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
            <div className="text-2xl font-bold text-white mb-1">Future</div>
              <div className="text-slate-300 text-sm">Ready</div>
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
            Why Choose Our 2030 Pricing?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingBenefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
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
                placeholder="Search 2030 pricing plans..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800/70 border border-purple-400/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 rounded-xl bg-slate-800/70 border border-purple-400/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none text-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Price Range Filter */}
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="px-4 py-3 rounded-xl bg-slate-800/70 border border-purple-400/20 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 outline-none text-white"
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
                      index === 1 ? 'border-purple-500/50 bg-purple-500/5' : 'border-slate-700'
                    }`}>
                      {index === 1 && (
                        <div className="inline-block px-3 py-1 bg-purple-500 text-white text-xs rounded-full mb-4">
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
                              <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
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
                            ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
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
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready for 2030?
            </h2>
            <p className="text-slate-300 mb-6">
              Contact our sales team for custom quantum computing solutions, volume discounts, and enterprise packages. 
              We'll help you find the perfect plan for your future technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/schedule-demo"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200"
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

export default ComprehensivePricingGuide2030;