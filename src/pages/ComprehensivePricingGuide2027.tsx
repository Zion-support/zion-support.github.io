import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  TrendingUp, 
  Brain, 
  Server, 
  Globe, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  DollarSign,
  CreditCard,
  Wallet,
  Coins,
  PiggyBank,
  Calculator,
  BarChart3,
  Target,
  Award,
  Users,
  Clock,
  Calendar,
  Check,
  X,
  Rocket,
  Heart,
  Factory,
  Store,
  GraduationCap,
  Truck,
  Leaf,
  Building,
  Atom,
  Dna,
  Eye,
  Network
} from 'lucide-react';
import { INNOVATIVE_MICRO_SAAS_SERVICES_2025 } from '@/data/innovativeMicroSaasServices2025';
import { EMERGING_TECH_SERVICES_2025 } from '@/data/emergingTechServices2025';
import { INDUSTRY_SPECIFIC_SERVICES_2025 } from '@/data/industrySpecificServices2025';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const pricingTiers = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses and startups',
    price: 29,
    features: [
      'Basic features',
      'Email support',
      '1 user',
      'Standard integrations',
      'Community forum access'
    ],
    color: 'from-zion-cyan to-zion-blue',
    popular: false
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses and teams',
    price: 99,
    features: [
      'Advanced features',
      'Priority support',
      'Up to 10 users',
      'Advanced integrations',
      'API access',
      'Custom branding',
      'Analytics dashboard'
    ],
    color: 'from-zion-purple to-zion-cyan',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For large organizations with complex needs',
    price: 299,
    features: [
      'Custom features',
      '24/7 dedicated support',
      'Unlimited users',
      'Custom integrations',
      'White-label options',
      'Advanced security',
      'SLA guarantees',
      'Dedicated account manager'
    ],
    color: 'from-zion-blue to-zion-purple',
    popular: false
  }
];

const serviceCategories = [
  {
    name: 'AI & Analytics',
    icon: <Brain className="w-6 h-6" />,
    services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('AI') || s.category.includes('Analytics')),
    color: 'from-purple-600 to-pink-600',
    description: 'Advanced AI solutions for business intelligence, automation, and insights'
  },
  {
    name: 'Emerging Technologies',
    icon: <Rocket className="w-6 h-6" />,
    services: EMERGING_TECH_SERVICES_2025,
    color: 'from-blue-600 to-cyan-600',
    description: 'Cutting-edge technologies like quantum computing, neuromorphic computing, and DNA computing'
  },
  {
    name: 'Industry Solutions',
    icon: <Building className="w-6 h-6" />,
    services: INDUSTRY_SPECIFIC_SERVICES_2025,
    color: 'from-green-600 to-emerald-600',
    description: 'Tailored AI solutions for healthcare, finance, manufacturing, and more'
  },
  {
    name: 'Micro SaaS',
    icon: <Zap className="w-6 h-6" />,
    services: INNOVATIVE_MICRO_SAAS_SERVICES_2025.filter(s => s.category.includes('Micro SaaS') || s.category.includes('SaaS')),
    color: 'from-orange-600 to-red-600',
    description: 'Productized SaaS solutions for specific business needs and niches'
  }
];

const industries = [
  { name: 'Healthcare', icon: Heart, color: 'from-red-500 to-pink-500', avgPrice: '$8,999' },
  { name: 'Financial Services', icon: DollarSign, color: 'from-green-500 to-emerald-500', avgPrice: '$6,999' },
  { name: 'Manufacturing', icon: Factory, color: 'from-blue-500 to-cyan-500', avgPrice: '$5,999' },
  { name: 'Retail', icon: Store, color: 'from-purple-500 to-indigo-500', avgPrice: '$3,999' },
  { name: 'Education', icon: GraduationCap, color: 'from-yellow-500 to-orange-500', avgPrice: '$2,999' },
  { name: 'Transportation', icon: Truck, color: 'from-gray-500 to-slate-500', avgPrice: '$4,999' },
  { name: 'Energy', icon: Zap, color: 'from-yellow-400 to-orange-500', avgPrice: '$7,999' },
  { name: 'Agriculture', icon: Leaf, color: 'from-green-400 to-emerald-500', avgPrice: '$3,999' },
  { name: 'Construction', icon: Building, color: 'from-blue-600 to-indigo-600', avgPrice: '$5,999' }
];

const ComprehensivePricingGuide2027: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const allServices = [
    ...INNOVATIVE_MICRO_SAAS_SERVICES_2025,
    ...EMERGING_TECH_SERVICES_2025,
    ...INDUSTRY_SPECIFIC_SERVICES_2025
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(s => {
        if (selectedCategory === 'AI & Analytics') {
          return s.category.includes('AI') || s.category.includes('Analytics');
        } else if (selectedCategory === 'Emerging Technologies') {
          return s.category.includes('Quantum') || s.category.includes('Neuromorphic') || s.category.includes('DNA') || s.category.includes('Photonic');
        } else if (selectedCategory === 'Industry Solutions') {
          return s.industry && s.industry !== '';
        } else if (selectedCategory === 'Micro SaaS') {
          return s.category.includes('Micro SaaS') || s.category.includes('SaaS');
        }
        return true;
      });

  const industryFilteredServices = selectedIndustry === 'all' 
    ? filteredServices 
    : filteredServices.filter(s => s.industry === selectedIndustry);

  const getPriceRange = (services: any[]) => {
    if (services.length === 0) return 'N/A';
    const prices = services.map(s => s.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return `$${min.toLocaleString()} - $${max.toLocaleString()}/month`;
  };

  const getAverageROI = (services: any[]) => {
    if (services.length === 0) return 'N/A';
    const rois = services.map(s => parseInt(s.roi.replace('%', '')));
    const avg = rois.reduce((a, b) => a + b, 0) / rois.length;
    return `${Math.round(avg)}%`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <SEO 
        title="Comprehensive Pricing Guide 2027 - Zion Tech Group"
        description="Complete pricing information for our AI, Micro SaaS, Emerging Technologies, and Industry-Specific solutions. Get detailed pricing, ROI analysis, and service comparisons."
      />

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
          >
            Comprehensive Pricing Guide 2027
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Discover transparent pricing for our complete portfolio of AI-powered solutions, emerging technologies, and industry-specific platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-slate-800/50 px-4 py-2 rounded-full">
              <span className="text-cyan-400 font-semibold">{allServices.length}+</span> Services
            </div>
            <div className="bg-slate-800/50 px-4 py-2 rounded-full">
              <span className="text-blue-400 font-semibold">{industries.length}</span> Industries
            </div>
            <div className="bg-slate-800/50 px-4 py-2 rounded-full">
              <span className="text-green-400 font-semibold">99.9%</span> Uptime
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Standard Pricing Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-slate-900/60 border rounded-2xl p-8 ${
                  tier.popular ? 'border-cyan-400 shadow-lg shadow-cyan-400/20' : 'border-slate-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-slate-400 mb-6">{tier.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${tier.price}</span>
                    <span className="text-slate-400">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                    Get Started
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Service Categories & Pricing</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/60 border border-slate-700 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mr-4`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                    <p className="text-sm text-slate-400">{category.description}</p>
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Services:</span>
                    <span className="text-cyan-400 font-medium">{category.services.length}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Price Range:</span>
                    <span className="text-green-400 font-medium">{getPriceRange(category.services)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Avg. ROI:</span>
                    <span className="text-purple-400 font-medium">{getAverageROI(category.services)}</span>
                  </div>
                </div>
                <Link
                  to={`/services?category=${encodeURIComponent(category.name)}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                >
                  View Services <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Industry-Specific Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900/60 border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/40 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${industry.color} flex items-center justify-center mr-3`}>
                    <industry.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{industry.name}</h3>
                    <p className="text-sm text-slate-400">AI Solutions</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Starting Price:</span>
                    <span className="text-cyan-400 font-medium">{industry.avgPrice}/month</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Services:</span>
                    <span className="text-slate-300">
                      {allServices.filter(s => s.industry === industry.name).length}
                    </span>
                  </div>
                </div>
                <Link
                  to={`/services?industry=${encodeURIComponent(industry.name)}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                >
                  Explore Solutions <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Comparison */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Service Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-slate-800/60 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-slate-700/50">
                  <th className="px-6 py-4 text-left text-slate-300 font-semibold">Service</th>
                  <th className="px-6 py-4 text-left text-slate-300 font-semibold">Category</th>
                  <th className="px-6 py-4 text-left text-slate-300 font-semibold">Price Range</th>
                  <th className="px-6 py-4 text-left text-slate-300 font-semibold">ROI</th>
                  <th className="px-6 py-4 text-left text-slate-300 font-semibold">Innovation Level</th>
                </tr>
              </thead>
              <tbody>
                {industryFilteredServices.slice(0, 10).map((service, index) => (
                  <tr key={service.id} className="border-t border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium">{service.title}</div>
                      <div className="text-sm text-slate-400 line-clamp-2">{service.description}</div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className="text-xs">
                        {service.category}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-cyan-400 font-medium">
                      {service.marketPrice}
                    </td>
                    <td className="px-6 py-4 text-green-400 font-medium">
                      {service.roi}
                    </td>
                    <td className="px-6 py-4">
                      <Badge 
                        className={`text-xs ${
                          service.innovationLevel === 'Revolutionary' ? 'bg-purple-500/20 text-purple-400' :
                          service.innovationLevel === 'Cutting-edge' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-cyan-500/20 text-cyan-400'
                        }`}
                      >
                        {service.innovationLevel}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {industryFilteredServices.length > 10 && (
            <div className="text-center mt-8">
              <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10">
                View All Services
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-slate-900/60 border border-cyan-400/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-center mb-8">ROI Calculator</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Calculate Your Return on Investment</h3>
                <p className="text-slate-400 mb-6">
                  Use our ROI calculator to estimate the potential returns from implementing our AI solutions.
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Current Annual Revenue</label>
                    <input
                      type="number"
                      placeholder="$1,000,000"
                      className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Service Category</label>
                    <select className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none">
                      <option>AI & Analytics</option>
                      <option>Emerging Technologies</option>
                      <option>Industry Solutions</option>
                      <option>Micro SaaS</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4">Estimated Results</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Monthly Investment:</span>
                    <span className="text-cyan-400 font-medium">$2,999</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Annual Investment:</span>
                    <span className="text-cyan-400 font-medium">$35,988</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Expected ROI:</span>
                    <span className="text-green-400 font-medium">400%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Annual Return:</span>
                    <span className="text-green-400 font-medium">$143,952</span>
                  </div>
                  <div className="pt-3 border-t border-slate-700">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Net Profit:</span>
                      <span className="text-green-400">$107,964</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-slate-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <div className="max-w-4xl mx-auto bg-slate-900/60 border border-cyan-400/15 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="font-semibold">Phone</div>
                <a href="tel:+13024640950" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="font-semibold">Email</div>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="font-semibold">Office</div>
                <div className="text-slate-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </div>
              </div>
            </div>
            <div className="text-slate-300 mb-6">
              Visit our website at{' '}
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="text-cyan-300 hover:text-cyan-200 transition-colors">
                ziontechgroup.com
              </a>
              {' '}to explore our complete service portfolio and get a personalized quote.
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Request Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricingGuide2027;
