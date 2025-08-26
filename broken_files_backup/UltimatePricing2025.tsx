import React, { useState } from 'react';
import { SEO } from "@/components/SEO";
import { Link } from 'react-router-dom';
import {
  Check,
  Star,
  Zap,
  Shield,
  Brain,
  Rocket,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Database,
  Cloud,
  Scale,
  Briefcase,
  Users,
  Globe,
  Lock,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import ultimateInnovativeServices2025 from '../../data/2025-ultimate-innovative-services-expansion';
export default function UltimatePricing2025() {
  const [selectedPlan, setSelectedPlan] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const categories = [
    'all',
    'Financial Technology',
    'Research & Development',
    'IoT & Cybersecurity',
    'Supply Chain & Logistics',
    'Quantum Computing',
    'Business Operations',
    'Healthcare',
    'Marketing',
    'Cloud Infrastructure',
    'Legal Technology'
  ];
  const filteredServices = ultimateInnovativeServices2025.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category.includes(selectedCategory);
    return matchesCategory;
  });
  const getCategoryIcon = (category: string) => {
    if (category.includes('Financial')) return <TrendingUp className="w-6 h-6" />;
    if (category.includes('Research')) return <Brain className="w-6 h-6" />;
    if (category.includes('IoT')) return <Shield className="w-6 h-6" />;
    if (category.includes('Supply Chain')) return <Database className="w-6 h-6" />;
    if (category.includes('Quantum')) return <Zap className="w-6 h-6" />;
    if (category.includes('Business')) return <Briefcase className="w-6 h-6" />;
    if (category.includes('Healthcare')) return <Users className="w-6 h-6" />;
    if (category.includes('Marketing')) return <Globe className="w-6 h-6" />;
    if (category.includes('Cloud')) return <Cloud className="w-6 h-6" />;
    if (category.includes('Legal')) return <Scale className="w-6 h-6" />;
    return <Rocket className="w-6 h-6" />;
  };
  const getCategoryColor = (category: string) => {
    if (category.includes('Financial')) return 'from-emerald-500 to-teal-500';
    if (category.includes('Research')) return 'from-blue-500 to-cyan-500';
    if (category.includes('IoT')) return 'from-green-500 to-emerald-500';
    if (category.includes('Supply Chain')) return 'from-orange-500 to-red-500';
    if (category.includes('Quantum')) return 'from-purple-500 to-indigo-500';
    if (category.includes('Business')) return 'from-teal-500 to-cyan-500';
    if (category.includes('Healthcare')) return 'from-red-500 to-pink-500';
    if (category.includes('Marketing')) return 'from-yellow-500 to-orange-500';
    if (category.includes('Cloud')) return 'from-gray-500 to-blue-500';
    if (category.includes('Legal')) return 'from-indigo-500 to-purple-500';
    return 'from-blue-500 to-purple-500';
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title="Ultimate Pricing 2025 | Zion Tech Group"
        description="Comprehensive pricing for our revolutionary AI-powered, quantum-secure, and autonomous business solutions. Find the perfect plan for your business needs."
        keywords="pricing, AI services, quantum computing, autonomous systems, business solutions, Zion Tech Group"
      />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ultimate Pricing
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                2025
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Transparent, competitive pricing for our revolutionary AI-powered, quantum-secure, and autonomous business solutions.
              Choose the perfect plan to transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Speak with Sales
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Information Banner */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-y border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <div>
                <p className="text-sm text-gray-300">Phone</p>
                <a href="tel:+13024640950" className="text-blue-400 font-semibold hover:text-blue-300">
                  +1 302 464 0950
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-sm text-gray-300">Email</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 font-semibold hover:text-purple-300">
                  kleber@ziontechgroup.com
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-5 h-5 text-pink-400" />
              <div>
                <p className="text-sm text-gray-300">Address</p>
                <p className="text-pink-400 font-semibold">
                  364 E Main St STE 1008<br />Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing Tiers Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Flexible Pricing Tiers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose from our three flexible pricing tiers designed to meet businesses of all sizes.
            All plans include our core features with additional capabilities as you scale.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Starter Plan */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-blue-400 mb-2">$999</div>
              <div className="text-gray-400">per month</div>
              <p className="text-sm text-gray-300 mt-4">
                Perfect for small businesses and startups
              </p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Core AI features</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Basic security</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Email support</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Standard integrations</span>
              </li>
            </ul>
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors w-full justify-center"
              >
                Get Started
              </Link>
            </div>
          </div>
          {/* Professional Plan */}
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-8 border-2 border-blue-400/50 relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold rounded-full">
                Most Popular
              </span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-400 mb-2">$2,499</div>
              <div className="text-gray-400">per month</div>
              <p className="text-sm text-gray-300 mt-4">
                Ideal for growing businesses and mid-market companies
              </p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Everything in Starter</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Advanced AI capabilities</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Quantum security</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Priority support</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Advanced integrations</span>
              </li>
            </ul>
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors w-full justify-center"
              >
                Get Started
              </Link>
            </div>
          </div>
          {/* Enterprise Plan */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-purple-400 mb-2">Custom</div>
              <div className="text-gray-400">pricing</div>
              <p className="text-sm text-gray-300 mt-4">
                Tailored solutions for large enterprises
              </p>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Everything in Professional</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Custom AI models</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Dedicated support</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">Custom integrations</span>
              </li>
              <li className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">SLA guarantees</span>
              </li>
            </ul>
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors w-full justify-center"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Filter Services by Category
            </h3>
            <p className="text-gray-300">
              Explore our services organized by industry and technology focus
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                {category === 'all' ? 'All Categories' : category}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Services Pricing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Service Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${getCategoryColor(service.category)}`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-sm text-gray-400">{service.category}</p>
                  </div>
                </div>
                {service.popular && (
                  <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-semibold rounded-full">
                    Popular
                  </span>
                )}
              </div>
              {/* Tagline */}
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {service.tagline}
              </p>
              {/* Pricing Tiers */}
              <div className="mb-6 space-y-4">
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  Pricing Tiers
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-gray-300">Starter</span>
                    <span className="text-blue-400 font-semibold">{service.pricingTiers.starter}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-gray-300">Professional</span>
                    <span className="text-purple-400 font-semibold">{service.pricingTiers.professional}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-gray-300">Enterprise</span>
                    <span className="text-pink-400 font-semibold">{service.pricingTiers.enterprise}</span>
                  </div>
                </div>
              </div>
              {/* ROI and Market Info */}
              <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-sm text-gray-300 mb-2">
                  <strong>ROI:</strong> {service.roi}
                </p>
                <p className="text-xs text-gray-400">
                  <strong>Market Size:</strong> {service.marketSize} | <strong>Growth:</strong> {service.growthRate}
                </p>
              </div>
              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Special Features */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">Special Features</h4>
                <div className="flex flex-wrap gap-2">
                  {service.specialFeatures.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-md border border-purple-400/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/contact"
                  className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 border border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              {/* Contact Information */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-2">Need custom pricing?</p>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm">
                    <a
                      href="tel:+13024640950"
                      className="inline-flex items-center justify-center px-3 py-2 bg-green-600/20 text-green-300 rounded-md border border-green-400/30 hover:bg-green-600/30 transition-colors"
                    >
                      <Phone className="w-3 h-3 mr-1" />
                      Call Sales
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="inline-flex items-center justify-center px-3 py-2 bg-blue-600/20 text-blue-300 rounded-md border border-blue-400/30 hover:bg-blue-600/30 transition-colors"
                    >
                      <Mail className="w-3 h-3 mr-1" />
                      Email Sales
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* No Results Message */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 text-xl mb-4">
              No services found in this category
            </div>
            <button
              onClick={() => setSelectedCategory('all')}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              View All Services
            </button>
          </div>
        )}
      </div>
      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-t border-blue-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Contact our sales team today to discuss your specific needs and get a custom quote.
              We'll help you find the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Custom Quote
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Speak with Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}