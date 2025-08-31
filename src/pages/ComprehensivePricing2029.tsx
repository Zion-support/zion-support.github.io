import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle,
  Star,
  Phone,
  Mail,
  Globe,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Brain,
  Shield,
  Atom,
  Rocket,
  PenTool,
  MessageSquare,
  Car,
  Building2,
  Coins,
  Heart,
  Truck,
  FileText,
  Target,
  TrendingUp,
  Zap,
  Users,
  Database,
  Lock,
  Cloud,
  Cpu,
  Network,
  Smartphone,
  BarChart3,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  GitFork,
  Eye,
  Calendar,
  DollarSign,
  Award,
  Globe2,
  Workflow,
  Lightbulb
} from 'lucide-react';
import { newMicroSaasServices, serviceCategories } from '../data/newMicroSaasServices';

const ComprehensivePricing2029: React.FC = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');

  const filteredServices = selectedCategory === 'all' 
    ? newMicroSaasServices
    : newMicroSaasServices.filter(service => service.category === selectedCategory);

  const sortedServices = [...filteredServices].sort((a, b) => {
    switch (sortBy) {
      case 'name':
        return a.title.localeCompare(b.title);
      case 'price':
        return parseFloat(a.pricing.split('$')[1]) - parseFloat(b.pricing.split('$')[1]);
      case 'category':
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const PricingCard: React.FC<{ service: any; index: number }> = ({ service, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      {/* Header */}
      <div className={`bg-gradient-to-r ${service.color} p-6 text-white relative`}>
        {service.featured && (
          <div className="absolute top-4 right-4 bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
            <Star className="w-4 h-4 inline mr-1" />
            Featured
          </div>
        )}
        <div className="flex items-center mb-4">
          <service.icon className="w-12 h-12 mr-4" />
          <div>
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-white/90 text-sm">{service.category}</p>
          </div>
        </div>
        <p className="text-white/90 text-sm">{service.description}</p>
      </div>

      {/* Pricing Tiers */}
      <div className="p-6">
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Pricing Tiers</h4>
          <div className="space-y-3">
            {Object.entries(service.pricingDetails).map(([tier, price]) => (
              <div key={tier} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="capitalize font-medium text-gray-900 dark:text-white">{tier}</span>
                </div>
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Market Comparison */}
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">Market Average:</span>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{service.marketPrice}</span>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Key Benefits</h4>
          <div className="space-y-2">
            {service.benefits.slice(0, 3).map((benefit: string, idx: number) => (
              <div key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                <Target className="w-4 h-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Contact Information</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Phone className="w-4 h-4 mr-2" />
              <a href={`tel:${service.contactInfo.phone}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                {service.contactInfo.phone}
              </a>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Mail className="w-4 h-4 mr-2" />
              <a href={`mailto:${service.contactInfo.email}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                {service.contactInfo.email}
              </a>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Globe className="w-4 h-4 mr-2" />
              <a 
                href={service.contactInfo.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {service.contactInfo.website.replace('https://', '')}
                <ExternalLink className="w-3 h-3 ml-1 inline" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex space-x-3">
          <a
            href={`mailto:${service.contactInfo.email}?subject=Quote Request for ${service.title}`}
            className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Get Quote
          </a>
          <a
            href={`tel:${service.contactInfo.phone}`}
            className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg font-medium text-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
          >
            Call Now
          </a>
        </div>
      </div>
    </motion.div>
  );

  const PricingTable: React.FC = () => (
    <div className="overflow-x-auto">
      <table className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <thead>
          <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <th className="px-6 py-4 text-left">Service</th>
            <th className="px-6 py-4 text-center">Starter</th>
            <th className="px-6 py-4 text-center">Professional</th>
            <th className="px-6 py-4 text-center">Enterprise</th>
            <th className="px-6 py-4 text-center">Market Average</th>
            <th className="px-6 py-4 text-center">Contact</th>
          </tr>
        </thead>
        <tbody>
          {sortedServices.map((service, index) => (
            <tr key={service.id} className={`${index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-700' : 'bg-white dark:bg-gray-800'}`}>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <div className={`bg-gradient-to-r ${service.color} p-2 rounded-lg mr-3`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{service.title}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{service.category}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="font-semibold text-gray-900 dark:text-white">
                  {service.pricingDetails.starter.split(' - ')[0]}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {service.pricingDetails.starter.split(' - ')[1]}
                </div>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="font-semibold text-gray-900 dark:text-white">
                  {service.pricingDetails.professional.split(' - ')[0]}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {service.pricingDetails.professional.split(' - ')[1]}
                </div>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="font-semibold text-gray-900 dark:text-white">
                  {service.pricingDetails.enterprise.split(' - ')[0]}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {service.pricingDetails.enterprise.split(' - ')[1]}
                </div>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {service.marketPrice}
                </div>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="flex flex-col space-y-2">
                  <a
                    href={`tel:${service.contactInfo.phone}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    {service.contactInfo.phone}
                  </a>
                  <a
                    href={`mailto:${service.contactInfo.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    Email
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              2029 Comprehensive Pricing Guide
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion Tech Group
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Pricing 2029
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Transparent pricing for our revolutionary micro-SaaS solutions. Compare our competitive rates 
              with market averages and discover how our AI-powered services can transform your business.
            </p>
            
            {/* Contact CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-4 text-white">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Category Filter */}
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Filter by Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="all">All Categories</option>
                  {serviceCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="flex-shrink-0">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="category">Category</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Pricing Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of micro-SaaS solutions, each designed to deliver 
              exceptional value and ROI for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service, index) => (
              <PricingCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Detailed Pricing Comparison
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compare all our services side-by-side with transparent pricing and market comparisons.
            </p>
          </div>

          <PricingTable />
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a personalized consultation and custom pricing for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Pricing Consultation Request"
                className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Request Custom Quote
              </a>
              <a
                href="tel:+13024640950"
                className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Call Now: +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ComprehensivePricing2029;