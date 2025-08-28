import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  DollarSign,
  TrendingUp,
  Target,
  Users,
  Shield,
  Clock,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  BarChart3,
  Zap,
  Globe,
  Award,
  Calculator,
  PieChart,
  TrendingDown,
  ArrowUpRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SEO } from '../components/SEO';
import { COMPREHENSIVE_PRICING_GUIDE_2031 } from '../data/comprehensivePricingGuide2031';

export default function ComprehensivePricingGuide2031() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('overview');

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  const formatPrice = (price: string) => {
    return price.replace('$', '').split(' - ').map(p => `$${parseInt(p.replace(/,/g, '')).toLocaleString()}`).join(' - ');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Comprehensive Pricing Guide 2031 - Zion Tech Group"
        description="Explore our detailed pricing guide for 2031 with market analysis, competitive pricing, ROI calculations, and implementation timelines for all technology services."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Pricing Guide
              </span>
              <br />
              2031
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive pricing strategy, market analysis, and ROI calculations for our cutting-edge technology services. 
              Make informed decisions with transparent, competitive pricing.
            </p>
            
            {/* Key Market Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {COMPREHENSIVE_PRICING_GUIDE_2031.marketOverview.marketSize}
                </div>
                <div className="text-gray-400">Market Size</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {COMPREHENSIVE_PRICING_GUIDE_2031.marketOverview.growthRate}
                </div>
                <div className="text-gray-400">Growth Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                  500%+
                </div>
                <div className="text-gray-400">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                  4-16
                </div>
                <div className="text-gray-400">Weeks Setup</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-700 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-white font-semibold">Call Sales</div>
                <div className="text-gray-300">+1 302 464 0950</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <div>
                <div className="text-white font-semibold">Email Sales</div>
                <div className="text-gray-300">kleber@ziontechgroup.com</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5 text-purple-400" />
              <div>
                <div className="text-white font-semibold">Visit Office</div>
                <div className="text-gray-300">364 E Main St STE 1008 Middletown DE 19709</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { id: 'overview', label: 'Market Overview', icon: BarChart3 },
              { id: 'pricing', label: 'Service Pricing', icon: DollarSign },
              { id: 'tiers', label: 'Pricing Tiers', icon: Target },
              { id: 'competition', label: 'Competitive Analysis', icon: TrendingUp },
              { id: 'roi', label: 'ROI Calculator', icon: Calculator },
              { id: 'implementation', label: 'Implementation', icon: Clock }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Market Overview Tab */}
      {activeTab === 'overview' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Market <span className="text-cyan-400">Overview</span> 2031
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understanding the technology landscape and market dynamics to provide you with the most competitive and valuable solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Market Statistics */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <BarChart3 className="w-6 h-6 mr-3 text-cyan-400" />
                    Market Statistics
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Market Size:</span>
                      <span className="text-cyan-400 font-bold">{COMPREHENSIVE_PRICING_GUIDE_2031.marketOverview.marketSize}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Growth Rate:</span>
                      <span className="text-blue-400 font-bold">{COMPREHENSIVE_PRICING_GUIDE_2031.marketOverview.growthRate}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Year:</span>
                      <span className="text-purple-400 font-bold">{COMPREHENSIVE_PRICING_GUIDE_2031.marketOverview.year}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <TrendingUp className="w-6 h-6 mr-3 text-green-400" />
                    Key Trends
                  </h3>
                  <ul className="space-y-3">
                    {COMPREHENSIVE_PRICING_GUIDE_2031.marketOverview.keyTrends.map((trend, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{trend}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pricing Strategy */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Target className="w-6 h-6 mr-3 text-yellow-400" />
                    Pricing Strategy
                  </h3>
                  <div className="mb-4">
                    <p className="text-gray-300 mb-4">
                      <strong className="text-white">{COMPREHENSIVE_PRICING_GUIDE_2031.pricingStrategy.approach}</strong>
                    </p>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Factors:</h4>
                  <ul className="space-y-2">
                    {COMPREHENSIVE_PRICING_GUIDE_2031.pricingStrategy.factors.map((factor, index) => (
                      <li key={index} className="flex items-start">
                        <ArrowRight className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Award className="w-6 h-6 mr-3 text-purple-400" />
                    Our Guarantees
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(COMPREHENSIVE_PRICING_GUIDE_2031.guarantees).map(([key, value]) => (
                      <div key={key} className="flex items-start">
                        <Shield className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-white font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          <div className="text-gray-300 text-sm">{value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Service Pricing Tab */}
      {activeTab === 'pricing' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Service <span className="text-cyan-400">Pricing</span> by Category
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive pricing breakdown across all technology service categories with market analysis and competitive positioning.
              </p>
            </motion.div>

            <div className="space-y-6">
              {Object.entries(COMPREHENSIVE_PRICING_GUIDE_2031.serviceCategories).map(([category, data]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 overflow-hidden"
                >
                  <button
                    onClick={() => toggleCategory(category)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{category}</h3>
                        <p className="text-gray-400">Market Range: {data.marketRange}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-cyan-400 font-bold">{data.averagePrice}</div>
                        <div className="text-gray-400 text-sm">Average Price</div>
                      </div>
                      {expandedCategory === category ? (
                        <ChevronUp className="w-6 h-6 text-cyan-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-cyan-400" />
                      )}
                    </div>
                  </button>

                  {expandedCategory === category && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 border-t border-slate-600"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-white">Market Analysis</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-400">Market Share:</span>
                              <span className="text-cyan-400 font-semibold">{data.marketShare}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-400">Growth Rate:</span>
                              <span className="text-green-400 font-semibold">{data.growthRate}</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-white">ROI & Performance</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-gray-400">ROI Range:</span>
                              <span className="text-green-400 font-semibold">{data.roi}</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-white">Competitors</h4>
                          <div className="space-y-1">
                            {data.competitors.slice(0, 3).map((competitor, index) => (
                              <div key={index} className="text-gray-300 text-sm">• {competitor}</div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-lg font-semibold text-white">Our Advantage</h4>
                          <div className="space-y-2">
                            <div className="text-cyan-400 text-sm">• Competitive Pricing</div>
                            <div className="text-cyan-400 text-sm">• Superior Support</div>
                            <div className="text-cyan-400 text-sm">• Faster Implementation</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Tiers Tab */}
      {activeTab === 'tiers' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Pricing <span className="text-cyan-400">Tiers</span> & Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs, from starter solutions to enterprise-grade implementations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(COMPREHENSIVE_PRICING_GUIDE_2031.pricingTiers).map(([tier, data], index) => (
                <motion.div
                  key={tier}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br rounded-xl p-8 border-2 transition-all duration-300 hover:transform hover:scale-105 ${
                    tier === 'enterprise'
                      ? 'from-cyan-500/20 to-blue-600/20 border-cyan-500'
                      : tier === 'professional'
                      ? 'from-blue-500/20 to-purple-600/20 border-blue-500'
                      : 'from-slate-800 to-slate-700 border-slate-600'
                  }`}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 capitalize">{tier}</h3>
                    <p className="text-gray-300">{data.description}</p>
                  </div>

                  <div className="mb-8">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{data.priceRange}</div>
                    <div className="text-gray-400 text-sm">Starting price</div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Features:</h4>
                    <ul className="space-y-3">
                      {data.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <div className="text-sm text-gray-400 mb-2">Target Market:</div>
                    <div className="text-white">{data.targetMarket}</div>
                  </div>

                  <div className="mb-8">
                    <div className="text-sm text-gray-400 mb-2">Expected ROI:</div>
                    <div className="text-green-400 font-semibold">{data.roi}</div>
                  </div>

                  <Link
                    to="/contact"
                    className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Competitive Analysis Tab */}
      {activeTab === 'competition' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-cyan-400">Competitive</span> Analysis
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understanding how we stack up against the competition and why Zion Tech Group is your best choice.
              </p>
            </motion.div>

            <div className="space-y-12">
              {/* Market Leaders */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Market Leaders</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {Object.entries(COMPREHENSIVE_PRICING_GUIDE_2031.competitiveAnalysis.marketLeaders).map(([company, data], index) => (
                    <motion.div
                      key={company}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600"
                    >
                      <div className="text-center mb-6">
                        <h4 className="text-xl font-bold text-white mb-2">{company}</h4>
                        <div className="text-2xl font-bold text-cyan-400">{data.marketShare}</div>
                        <div className="text-gray-400 text-sm">Market Share</div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h5 className="text-white font-semibold mb-2">Strengths:</h5>
                          <ul className="space-y-1">
                            {data.strengths.map((strength, strengthIndex) => (
                              <li key={strengthIndex} className="flex items-start">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{strength}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h5 className="text-white font-semibold mb-2">Weaknesses:</h5>
                          <ul className="space-y-1">
                            {data.weaknesses.map((weakness, weaknessIndex) => (
                              <li key={weaknessIndex} className="flex items-start">
                                <TrendingDown className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{weakness}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Our Advantages */}
              <div className="text-center">
                <h3 className="text-3xl font-bold text-white mb-8">Why Choose Zion Tech Group?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl p-6 border border-cyan-500"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Innovation First</h4>
                    <p className="text-gray-300">Cutting-edge technology and AI-powered solutions that keep you ahead of the competition.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl p-6 border border-blue-500"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Personal Service</h4>
                    <p className="text-gray-300">Dedicated support and personalized solutions tailored to your specific business needs.</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-xl p-6 border border-purple-500"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">Proven Results</h4>
                    <p className="text-gray-300">Track record of delivering exceptional ROI and transforming businesses across industries.</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ROI Calculator Tab */}
      {activeTab === 'roi' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-cyan-400">ROI</span> Calculator
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Calculate the return on investment for our technology services and see how they can transform your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* ROI Factors */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <Calculator className="w-6 h-6 mr-3 text-cyan-400" />
                    ROI Calculation Factors
                  </h3>
                  <ul className="space-y-3">
                    {COMPREHENSIVE_PRICING_GUIDE_2031.roiCalculator.factors.map((factor, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <PieChart className="w-6 h-6 mr-3 text-blue-400" />
                    Calculation Method
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {COMPREHENSIVE_PRICING_GUIDE_2031.roiCalculator.calculationMethod}
                  </p>
                  <div className="text-sm text-gray-400">
                    Our ROI calculations include risk adjustments and are based on real-world implementation data from similar projects.
                  </div>
                </div>
              </div>

              {/* Example Calculations */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Example ROI Calculations</h3>
                {Object.entries(COMPREHENSIVE_PRICING_GUIDE_2031.roiCalculator.exampleCalculations).map(([service, data], index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-6 border border-slate-600"
                  >
                    <h4 className="text-lg font-bold text-white mb-4">{service}</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-400">Investment</div>
                        <div className="text-cyan-400 font-bold">{data.investment}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Annual Savings</div>
                        <div className="text-green-400 font-bold">{data.annualSavings}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Payback Period</div>
                        <div className="text-blue-400 font-bold">{data.paybackPeriod}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">3-Year ROI</div>
                        <div className="text-purple-400 font-bold">{data.threeYearROI}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Implementation Tab */}
      {activeTab === 'implementation' && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-cyan-400">Implementation</span> & Timeline
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Understand our implementation process, timelines, and support options to ensure successful project delivery.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {Object.entries(COMPREHENSIVE_PRICING_GUIDE_2031.implementationTimeline).map(([timeline, data], index) => (
                <motion.div
                  key={timeline}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br rounded-xl p-8 border-2 transition-all duration-300 hover:transform hover:scale-105 ${
                    timeline === 'enterprise'
                      ? 'from-cyan-500/20 to-blue-600/20 border-cyan-500'
                      : timeline === 'accelerated'
                      ? 'from-blue-500/20 to-purple-600/20 border-blue-500'
                      : 'from-slate-800 to-slate-700 border-slate-600'
                  }`}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 capitalize">{timeline}</h3>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{data.duration}</div>
                    <div className="text-gray-400 text-sm">Duration</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Implementation Phases:</h4>
                    <ul className="space-y-3">
                      {data.phases.map((phase, phaseIndex) => (
                        <li key={phaseIndex} className="flex items-start">
                          <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                            <span className="text-white text-sm font-bold">{phaseIndex + 1}</span>
                          </div>
                          <span className="text-gray-300 text-sm">{phase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <div className="text-sm text-gray-400 mb-2">Additional Costs:</div>
                    <div className="text-white font-semibold">{data.costs}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Support & Maintenance */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-green-400" />
                  Included Support
                </h3>
                <ul className="space-y-3">
                  {COMPREHENSIVE_PRICING_GUIDE_2031.supportAndMaintenance.included.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 border border-slate-600">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Star className="w-6 h-6 mr-3 text-yellow-400" />
                  Premium Support Options
                </h3>
                <div className="space-y-6">
                  {Object.entries(COMPREHENSIVE_PRICING_GUIDE_2031.supportAndMaintenance.pricing).map(([plan, price]) => (
                    <div key={plan} className="flex justify-between items-center">
                      <span className="text-gray-300">{plan}</span>
                      <span className="text-cyan-400 font-bold">{price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our sales team for a personalized quote and discover how our technology solutions can transform your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Sales Team
              </Link>
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">+1 302 464 0950</div>
                <div className="text-gray-300">Call Us Directly</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">kleber@ziontechgroup.com</div>
                <div className="text-gray-300">Email Sales Team</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Global Support</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}