import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {

  ArrowRight, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Database, 
  Server, 
  Lock, 
  BarChart3, 
  Users, 
  Globe, 
  Code, 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Clock, 
  Users2, 
  Target, 
  Rocket, 
  Cpu, 
  Database2, 
  ShieldCheck, 
  Globe2, 
  Zap2, 
  Brain2, 
  Cloud2, 
  Lock2,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  DollarSign,
  Calendar,
  Award,
  Lightbulb,
  Cpu as CpuIcon,
  Network,
  Factory,
  Leaf,
  Car,
  ShoppingCart,
  GraduationCap,
  Building2,
  Satellite,
  Wifi,
  Truck,
  Banknote,
  Gamepad2,
  Microscope,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Globe as GlobeIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  Lock as LockIcon,
  Database as DatabaseIcon,
  Server as ServerIcon,
  BarChart3 as BarChart3Icon,
  Users as UsersIcon,
  Code as CodeIcon,
  Search as SearchIcon,
  Filter as FilterIcon,
  Star as StarIcon,
  TrendingUp as TrendingUpIcon,
  Clock as ClockIcon,
  Users2 as Users2Icon,
  Target as TargetIcon,
  Rocket as RocketIcon,
  Cpu as CpuIcon2,
  Database2 as Database2Icon,
  ShieldCheck as ShieldCheckIcon,
  Globe2 as Globe2Icon,
  Zap2 as Zap2Icon,
  Brain2 as Brain2Icon,
  Cloud2 as Cloud2Icon,
  Lock2 as Lock2Icon
} from 'lucide-react';

import { zion2027AdvancedMicroSaasServices } from '../data/zion-2027-advanced-micro-saas-services';
import { zion2027EmergingTechnologyServices } from '../data/zion-2027-emerging-technology-services';

export default function AdvancedServicesShowcase2027() {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');

  const title = 'Advanced Services Showcase 2027 — Zion Tech Group';
  const description = 'Discover our cutting-edge AI, quantum computing, and emerging technology micro SAAS solutions for 2027.';

  // Combine all services
  const allServices = [...zion2027AdvancedMicroSaasServices, ...zion2027EmergingTechnologyServices];

  // Get unique categories
  const categories = ['all', ...new Set(allServices.map(service => service.category))];

  // Filter and sort services
  const filteredServices = allServices;
    .filter(service =>
      (selectedCategory === 'all' || service.category === selectedCategory) &&
      (service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       service.tagline.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {

      switch (sortBy) {

        case 'popularity':
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
        case 'price':
          return parseInt(a.price.replace('$', '').replace(',', '')) - parseInt(b.price.replace('$', '').replace(',', ''));
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'newest':
          return new Date(b.launchDate || '2027-01-01').getTime() - new Date(a.launchDate || '2027-01-01').getTime();
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {

    const iconMap: { [key: string]: any } = {

      'AI & Fintech': BrainIcon,
      'AI & Healthcare': BrainIcon,
      'IoT & Edge Computing': GlobeIcon,
      'AI & Legal Tech': BrainIcon,
      'AI & Supply Chain': Truck,
      'AI & Marketing': BrainIcon,
      'Cybersecurity & Critical Infrastructure': ShieldIcon,
      'AI & Human Resources': UsersIcon,
      'AI & Space Technology': Rocket,
      'AI & Education': GraduationCap,
      'Blockchain & Quantum Computing': CpuIcon,
      'Metaverse & Virtual Reality': Gamepad2,
      'AI & Manufacturing': Factory,
      'AI & Energy Management': ZapIcon,
      'AI & Transportation': Car,
      'AI & Financial Services': Banknote,
      'AI & Retail': ShoppingCart,
      'AI & Telecommunications': Wifi,
      'AI & Agriculture': Leaf
    };
    return iconMap[category] || BrainIcon;
  };

  const getCategoryColor = (category: string) => {

    const colorMap: { [key: string]: string } = {

      'AI & Fintech': 'from-green-600 to-emerald-700',
      'AI & Healthcare': 'from-blue-600 to-cyan-700',
      'IoT & Edge Computing': 'from-purple-600 to-indigo-700',
      'AI & Legal Tech': 'from-slate-600 to-gray-700',
      'AI & Supply Chain': 'from-orange-600 to-red-700',
      'AI & Marketing': 'from-pink-600 to-rose-700',
      'Cybersecurity & Critical Infrastructure': 'from-red-600 to-orange-700',
      'AI & Human Resources': 'from-indigo-600 to-blue-700',
      'AI & Space Technology': 'from-purple-600 to-violet-700',
      'AI & Education': 'from-teal-600 to-cyan-700',
      'Blockchain & Quantum Computing': 'from-blue-600 to-indigo-700',
      'Metaverse & Virtual Reality': 'from-purple-600 to-pink-700',
      'AI & Manufacturing': 'from-gray-600 to-slate-700',
      'AI & Energy Management': 'from-yellow-600 to-orange-700',
      'AI & Transportation': 'from-blue-600 to-cyan-700',
      'AI & Financial Services': 'from-green-600 to-emerald-700',
      'AI & Retail': 'from-pink-600 to-rose-700',
      'AI & Telecommunications': 'from-indigo-600 to-purple-700',
      'AI & Agriculture': 'from-green-600 to-lime-700'
    };
    return colorMap[category] || 'from-blue-600 to-indigo-700';
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Advanced Services Showcase 2027
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              Discover our revolutionary micro SAAS solutions powered by cutting-edge AI, quantum computing, and emerging technologies. 
              Transform your business with autonomous systems that deliver unprecedented ROI and competitive advantages.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users2 className="h-4 w-4" />
                <span>10,000+ Active Customers</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <TrendingUp className="h-4 w-4 text-green-500" />
                <span>99.9% Uptime</span>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#services"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Explore Services
              </a>
              <Link
                to="/contact"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Get in Touch <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
              Ready to Transform Your Business?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600 text-center">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-500 font-medium"
              >
                Visit Our Website <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section id="services" className="bg-white py-12 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="popularity">Popularity</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {filteredServices.map((service) => {

              const CategoryIcon = getCategoryIcon(service.category);
              const categoryColor = getCategoryColor(service.category);
              
              return (
                <div key={service.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {/* Service Header */}
                  <div className={`bg-gradient-to-r ${categoryColor} p-6 text-white`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      {service.popular && (
                        <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                    <p className="text-white/90 text-sm">{service.tagline}</p>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    {/* Pricing */}
                    <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-green-600" />
                        <span className="text-2xl font-bold text-gray-900">{service.price}</span>
                        <span className="text-gray-600">{service.period}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Trial: {service.trialDays} days</div>
                        <div className="text-sm text-gray-600">Setup: {service.setupTime}</div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 5).map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 5 && (
                          <li className="text-sm text-blue-600 font-medium">
                            +{service.features.length - 5} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Market Information */}
                    <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="h-4 w-4 text-blue-600" />
                        <span className="font-semibold text-blue-900">Market Position</span>
                      </div>
                      <p className="text-sm text-blue-800">{service.marketPosition}</p>
                    </div>

                    {/* ROI and Growth */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <div className="text-sm font-semibold text-green-900">ROI</div>
                        <div className="text-xs text-green-700">{service.roi}</div>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="text-sm font-semibold text-purple-900">Growth</div>
                        <div className="text-xs text-purple-700">{service.growthRate}</div>
                      </div>
                    </div>

                    {/* Technology Stack */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Technology Stack:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.technology.slice(0, 6).map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                        {service.technology.length > 6 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            +{service.technology.length - 6}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Customer Metrics */}
                    <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-lg">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{service.customers.toLocaleString()}</div>
                        <div className="text-xs text-gray-600">Customers</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{service.rating}</div>
                        <div className="text-xs text-gray-600">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{service.reviews.toLocaleString()}</div>
                        <div className="text-xs text-gray-600">Reviews</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-blue-700 transition-colors duration-200"
                      >
                        Learn More
                      </a>
                      <Link
                        to="/contact"
                        className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-center font-medium hover:bg-gray-200 transition-colors duration-200"
                      >
                        Contact Sales
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <Search className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
              Ready to Transform Your Business with AI and Quantum Computing?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already leveraging our cutting-edge micro SAAS solutions. 
              Get started with a free trial and see the difference autonomous AI can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Start Free Trial
              </Link>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white mb-8">
              Get in Touch with Zion Tech Group
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300 text-center">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
              >
                Visit Our Website <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}