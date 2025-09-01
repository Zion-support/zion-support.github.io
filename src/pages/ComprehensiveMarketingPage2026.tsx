import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {

  Brain, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network, 
  Lock, 
  Code, 
  Rocket, 
  Users, 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Play, 
  BookOpen, 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin,
  BarChart3,
  Building2,
  Car,
  Factory,
  Leaf,
  Palette,
  Briefcase,
  GraduationCap,
  Heart,
  Truck,
  ShoppingCart,
  Lightbulb,
  Wrench,
  Target,
  Award,
  ChevronRight,
  ExternalLink,
  Calendar,
  Users2,
  Globe2,
  ShieldCheck,
  Zap2,
  Database2,
  Network2,
  Code2,
  Rocket2,
  Brain2,
  Cloud2
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES_CATALOG_2025, calculateCategoryCounts, getFeaturedServices, getTrendingServices } from '../data/comprehensiveServicesCatalog2025';

const ComprehensiveMarketingPage2026: React.FC = () => {

  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const stats = calculateCategoryCounts();
  const featuredServices = getFeaturedServices();
  const trendingServices = getTrendingServices();

  const industries = [
    { id: 'all', name: 'All Industries', icon: Globe2, count: stats.totalServices },
    { id: 'healthcare', name: 'Healthcare', icon: Heart, count: (stats.categories['AI & Healthcare'] || 0) + (stats.categories['AI & Legal Tech'] || 0) },
    { id: 'finance', name: 'Finance', icon: DollarSign, count: (stats.categories['AI & FinTech'] || 0) + (stats.categories['AI & Financial Services'] || 0) },
    { id: 'manufacturing', name: 'Manufacturing', icon: Factory, count: (stats.categories['AI & Manufacturing'] || 0) + (stats.categories['AI & Supply Chain'] || 0) + (stats.categories['AI & Robotics'] || 0) },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingCart, count: (stats.categories['AI & Retail'] || 0) + (stats.categories['AI & E-commerce'] || 0) },
    { id: 'education', name: 'Education', icon: GraduationCap, count: (stats.categories['AI & Education'] || 0) + (stats.categories['Training & Education'] || 0) },
    { id: 'legal', name: 'Legal Tech', icon: Building2, count: stats.categories['AI & Legal Tech'] || 0 },
    { id: 'real-estate', name: 'Real Estate', icon: Building2, count: stats.categories['AI & Real Estate'] || 0 },
    { id: 'marketing', name: 'Marketing', icon: Target, count: (stats.categories['AI & Marketing'] || 0) + (stats.categories['AI & Content Creation'] || 0) },
    { id: 'transportation', name: 'Transportation', icon: Car, count: (stats.categories['AI & Transportation'] || 0) + (stats.categories['AI & Logistics'] || 0) },
    { id: 'energy', name: 'Energy & Utilities', icon: Lightbulb, count: (stats.categories['AI & Energy'] || 0) + (stats.categories['AI & Climate'] || 0) },
    { id: 'agriculture', name: 'Agriculture', icon: Leaf, count: stats.categories['AI & Agriculture'] || 0 },
    { id: 'technology', name: 'Technology', icon: Cpu, count: (stats.categories['AI & Analytics'] || 0) + (stats.categories['AI & Business Intelligence'] || 0) + (stats.categories['Cloud & DevOps'] || 0) + (stats.categories['Cybersecurity'] || 0) }
  ];

  const getIndustryServices = (industryId: string) => {

    if (industryId === 'all') return COMPREHENSIVE_SERVICES_CATALOG_2025;
    
    const industryMapping: Record<string, string[]> = {

      'healthcare': ['AI & Healthcare', 'AI & Legal Tech'],
      'finance': ['AI & FinTech', 'AI & Financial Services'],
      'manufacturing': ['AI & Manufacturing', 'AI & Supply Chain', 'AI & Robotics'],
      'retail': ['AI & Retail', 'AI & E-commerce'],
      'education': ['AI & Education', 'Training & Education'],
      'legal': ['AI & Legal Tech'],
      'real-estate': ['AI & Real Estate'],
      'marketing': ['AI & Marketing', 'AI & Content Creation'],
      'transportation': ['AI & Transportation', 'AI & Logistics'],
      'energy': ['AI & Energy', 'AI & Climate'],
      'agriculture': ['AI & Agriculture'],
      'technology': ['AI & Analytics', 'AI & Business Intelligence', 'Cloud & DevOps', 'Cybersecurity']
    };

    const categories = industryMapping[industryId] || [];
    return COMPREHENSIVE_SERVICES_CATALOG_2025.filter(service => 
      categories.includes(service.category)
    );
  };

  const currentServices = getIndustryServices(selectedIndustry);

  return (
    <>
      <div className="min-h-screen bg-futuristic">
        {/* Hero Section */}
        <section className="bg-futuristic min-h-[70vh] flex items-center relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-40 h-40 border border-zion-cyan rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 border border-zion-blue rounded-full animate-pulse delay-2000"></div>
          </div>

          <div className="container-responsive relative z-10">
            <motion.div
              className="text-center max-w-5xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="heading-responsive font-bold mb-6">
                <span className="text-gradient">Transform Your Business</span>
                <br />
                <span className="text-white">With Zion Tech Group's 2026 Services</span>
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 leading-relaxed max-w-4xl mx-auto">
                Discover our comprehensive portfolio of {stats.totalServices} innovative micro SAAS services, 
                cutting-edge IT solutions, and AI-powered platforms designed to drive growth, efficiency, 
                and competitive advantage across all industries.
              </p>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">{stats.totalServices}+</div>
                  <div className="text-sm text-zion-slate-light">Services Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-purple mb-2">25+</div>
                  <div className="text-sm text-zion-slate-light">Industries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-green mb-2">99.9%</div>
                  <div className="text-sm text-zion-slate-light">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-orange mb-2">24/7</div>
                  <div className="text-sm text-zion-slate-light">Expert Support</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn-futuristic text-lg px-8 py-4"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="btn-neon text-lg px-8 py-4"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +1 302 464 0950
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-8 text-zion-slate-light">
                <p className="mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  kleber@ziontechgroup.com
                </p>
                <p>
                  <MapPin className="w-4 h-4 inline mr-2" />
                  364 E Main St STE 1008, Middletown DE 19709
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Selection */}
        <section className="py-16 bg-zion-slate-dark">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Solutions for Every Industry
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our comprehensive service portfolio is designed to address the unique challenges 
                and opportunities across diverse industry verticals.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {industries.map((industry) => (
                <motion.button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`p-6 rounded-xl text-center transition-all duration-300 ${

                    selectedIndustry === industry.id
                      ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-slate-light/10 text-zion-slate-light hover:bg-zion-slate-light/20 hover:text-white'
                  }`}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <industry.icon className="w-8 h-8 mx-auto mb-3" />
                  <div className="font-semibold mb-1">{industry.name}</div>
                  <div className="text-sm opacity-75">{industry.count} services</div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-16 bg-zion-slate-darker">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Featured Services
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Our most innovative and high-impact solutions that deliver exceptional ROI 
                and transformative business outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                  className="card-futuristic group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-zion-cyan">
                          ${service.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-zion-slate-light">
                          per month
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-zion-slate-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-zion-cyan font-medium">
                        {service.category}
                      </span>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-zion-cyan/20 text-zion-cyan">
                        {service.innovationLevel}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-zion-green">
                        <TrendingUp className="w-4 h-4" />
                        <span>ROI: {service.roi}</span>
                      </div>
                      <div className="text-zion-slate-light">
                        Market: {service.marketPrice}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-white">Key Benefits:</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-zion-slate-light"
                          >
                            <CheckCircle className="w-3 h-3 text-zion-cyan" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                    <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{service.estimatedDelivery}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-zion-cyan" />
                        <span>{service.supportLevel}</span>
                      </div>
                    </div>

                    <a
                      href={`/contact?service=${service.id}`}
                      className="btn-futuristic text-sm px-4 py-2"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href="/comprehensive-services-2026"
                className="btn-neon text-lg px-8 py-4"
              >
                View All Services
                <ExternalLink className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Current Industry Services */}
        {selectedIndustry !== 'all' && (
          <section className="py-16 bg-zion-slate-dark">
            <div className="container-responsive">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {industries.find(i => i.id === selectedIndustry)?.name} Solutions
                </h2>
                <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                  Specialized services and solutions designed specifically for the {industries.find(i => i.id === selectedIndustry)?.name.toLowerCase()} industry.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentServices.slice(0, 6).map((service, index) => (
                  <motion.div
                    key={service.id}
                    className="card-futuristic group"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-pink rounded-xl flex items-center justify-center">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-zion-cyan">
                            ${service.price.toLocaleString()}
                          </div>
                          <div className="text-sm text-zion-slate-light">
                            per month
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-zion-slate-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-zion-cyan font-medium">
                          {service.category}
                        </span>
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-zion-purple/20 text-zion-purple">
                          {service.innovationLevel}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1 text-zion-green">
                          <TrendingUp className="w-4 h-4" />
                          <span>ROI: {service.roi}</span>
                        </div>
                        <div className="text-zion-slate-light">
                          Market: {service.marketPrice}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-white">Use Cases:</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {service.useCases.slice(0, 2).map((useCase, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-sm text-zion-slate-light"
                            >
                              <CheckCircle className="w-3 h-3 text-zion-cyan" />
                              {useCase}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-zion-cyan/20">
                      <div className="flex items-center gap-4 text-sm text-zion-slate-light">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{service.estimatedDelivery}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-zion-cyan" />
                          <span>{service.supportLevel}</span>
                        </div>
                      </div>

                      <a
                        href={`/contact?service=${service.id}`}
                        className="btn-futuristic text-sm px-4 py-2"
                      >
                        Get Quote
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              {currentServices.length > 6 && (
                <div className="text-center mt-12">
                  <a
                    href="/comprehensive-services-2026"
                    className="btn-neon text-lg px-8 py-4"
                  >
                    View All {industries.find(i => i.id === selectedIndustry)?.name} Services
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Why Choose Zion Tech Group */}
        <section className="py-16 bg-zion-slate-darker">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver 
                solutions that drive real business transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {

                  icon: Brain2,
                  title: 'AI-First Approach',
                  description: 'Leverage the latest AI and machine learning technologies for competitive advantage',
                  color: 'from-zion-cyan to-zion-blue'
                },
                {

                  icon: ShieldCheck,
                  title: 'Enterprise Security',
                  description: 'Bank-grade security with SOC 2, ISO 27001, and GDPR compliance',
                  color: 'from-zion-red to-zion-orange'
                },
                {

                  icon: Zap2,
                  title: 'Rapid Implementation',
                  description: 'Quick deployment with average delivery times of 4-12 weeks',
                  color: 'from-zion-yellow to-zion-orange'
                },
                {

                  icon: Users2,
                  title: 'Expert Support',
                  description: '24/7 technical support and dedicated account management',
                  color: 'from-zion-green to-zion-cyan'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Overview */}
        <section className="py-16 bg-zion-slate-dark">
          <div className="container-responsive">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Transparent Pricing
              </h2>
              <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
                Competitive pricing tiers designed to fit businesses of all sizes, 
                with clear ROI expectations and flexible deployment options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {

                  name: 'Budget',
                  range: '$100 - $1,000',
                  description: 'Perfect for startups and small businesses',
                  count: stats.pricingTiers.find(t => t.id === 'budget')?.count || 0,
                  color: 'from-zion-green to-zion-cyan'
                },
                {

                  name: 'Mid-Range',
                  range: '$1,000 - $5,000',
                  description: 'Ideal for growing businesses and scale-ups',
                  count: stats.pricingTiers.find(t => t.id === 'mid-range')?.count || 0,
                  color: 'from-zion-blue to-zion-purple'
                },
                {

                  name: 'Enterprise',
                  range: '$5,000 - $15,000',
                  description: 'Built for large enterprises and corporations',
                  count: stats.pricingTiers.find(t => t.id === 'enterprise')?.count || 0,
                  color: 'from-zion-purple to-zion-pink'
                },
                {

                  name: 'Premium',
                  range: '$15,000+',
                  description: 'Custom solutions for industry leaders',
                  count: stats.pricingTiers.find(t => t.id === 'premium')?.count || 0,
                  color: 'from-zion-orange to-zion-red'
                }
              ].map((tier, index) => (
                <motion.div
                  key={index}
                  className="card-futuristic text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <DollarSign className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">{tier.range}</div>
                  <p className="text-zion-slate-light mb-4">{tier.description}</p>
                  <div className="text-sm text-zion-slate-light">
                    {tier.count} services available
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-zion-slate-darker">
          <div className="container-responsive">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-zion-slate-light mb-8">
                Join hundreds of businesses that have already transformed their operations 
                with Zion Tech Group's innovative solutions. Get started today with a 
                free consultation and discover how we can help you achieve your goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="/contact"
                  className="btn-futuristic text-lg px-8 py-4"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="btn-neon text-lg px-8 py-4"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +1 302 464 0950
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-zion-cyan mb-2">Free Consultation</div>
                  <div className="text-zion-slate-light">No obligation assessment of your needs</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zion-purple mb-2">Custom Solutions</div>
                  <div className="text-zion-slate-light">Tailored to your specific requirements</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-zion-green mb-2">Proven Results</div>
                  <div className="text-zion-slate-light">Track record of successful implementations</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComprehensiveMarketingPage2026;