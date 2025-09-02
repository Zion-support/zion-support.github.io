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
  CheckCircle,
  Star,
  TrendingUp,
  Clock,
  Award,
  MessageCircle,
  Eye,
  FileText,
  Settings,
  Link as LinkIcon,
  CheckSquare,
  ShoppingCart,
  UserCheck,
  AlertTriangle,
  Wifi,
  Link2,
  Glasses,
  Bot,
  Filter,
  Search,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Calendar,
  Target,
  Lightbulb,
  Cpu,
  Layers,
  Activity,
  Zap as ZapIcon,
  Globe as GlobeIcon,
  Shield as ShieldIcon,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import PageTransition from '../src/components/PageTransition';
import { services, serviceCategories, Service } from '../data/services';

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const title = 'Services — Zion Tech Group';
  const description = 'Comprehensive technology solutions including AI, IT services, SaaS platforms, cybersecurity, IoT, blockchain, AR/VR, and automation services.';

  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      MessageCircle, Eye, FileText, TrendingUp, Cloud, Settings, LinkIcon, Database,
      Users, CheckSquare, ShoppingCart, UserCheck, Shield, Lock, AlertTriangle,
      Wifi, Link2, Glasses, Bot, Brain, Code, Zap, Globe, Target, Activity
    };
    return iconMap[iconName] || Code;
  };

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; hover: string } } = {
      blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-300', hover: 'hover:bg-blue-700' },
      purple: { bg: 'bg-purple-600', text: 'text-purple-600', border: 'border-purple-300', hover: 'hover:bg-purple-700' },
      green: { bg: 'bg-green-600', text: 'text-green-600', border: 'border-green-300', hover: 'hover:bg-green-700' },
      indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-300', hover: 'hover:bg-indigo-700' },
      sky: { bg: 'bg-sky-600', text: 'text-sky-600', border: 'border-sky-300', hover: 'hover:bg-sky-700' },
      orange: { bg: 'bg-orange-600', text: 'text-orange-600', border: 'border-orange-300', hover: 'hover:bg-orange-700' },
      teal: { bg: 'bg-teal-600', text: 'text-teal-600', border: 'border-teal-300', hover: 'hover:bg-teal-700' },
      emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-300', hover: 'hover:bg-emerald-700' },
      red: { bg: 'bg-red-600', text: 'text-red-600', border: 'border-red-300', hover: 'hover:bg-red-700' },
      gray: { bg: 'bg-gray-600', text: 'text-gray-600', border: 'border-gray-300', hover: 'hover:bg-gray-700' },
      yellow: { bg: 'bg-yellow-600', text: 'text-yellow-600', border: 'border-yellow-300', hover: 'hover:bg-yellow-700' },
      cyan: { bg: 'bg-cyan-600', text: 'text-cyan-600', border: 'border-cyan-300', hover: 'hover:bg-cyan-700' },
      violet: { bg: 'bg-violet-600', text: 'text-violet-600', border: 'border-violet-300', hover: 'hover:bg-violet-700' },
      pink: { bg: 'bg-pink-600', text: 'text-pink-600', border: 'border-pink-300', hover: 'hover:bg-pink-700' },
      lime: { bg: 'bg-lime-600', text: 'text-lime-600', border: 'border-lime-300', hover: 'hover:bg-lime-700' }
    };
    return colorMap[color] || colorMap.blue;
  };

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center mb-4">
              <Award className="h-6 w-6 text-blue-600 mr-2" />
              <span className="text-base font-semibold leading-7 text-blue-600">
                Comprehensive Technology Solutions
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Services
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600">
              From AI-powered solutions to cybersecurity, we deliver cutting-edge technology services 
              that transform businesses and drive innovation across industries.
            </p>
            
            {/* Contact Info */}
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-blue-600">+1 302 464 0950</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-white border-b">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
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
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Services ({services.length})
              </button>
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {filteredServices.map((service) => {
              const IconComponent = getIconComponent(service.icon);
              const colors = getColorClasses(service.color);
              const isExpanded = expandedService === service.id;

              return (
                <div
                  key={service.id}
                  className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-gray-300"
                >
                  <div className="flex items-center gap-x-3 mb-6">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg} ${colors.hover} transition-colors`}>
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h2>
                      <p className={`text-sm ${colors.text} font-medium`}>
                        {service.category}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>

                  {/* Pricing */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center mb-2">
                      <DollarSign className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-sm font-medium text-gray-700">Pricing</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div>Starting: <span className="font-semibold text-green-600">{service.pricing.starting}</span></div>
                      <div>Average: <span className="font-semibold text-blue-600">{service.pricing.average}</span></div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, isExpanded ? service.features.length : 3).map((feature, index) => (
                        <li key={index} className="flex items-center gap-x-3">
                          <CheckCircle className={`h-4 w-4 ${colors.text}`} />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <button
                          onClick={() => setExpandedService(isExpanded ? null : service.id)}
                          className="flex items-center text-sm text-blue-600 hover:text-blue-500 transition-colors"
                        >
                          {isExpanded ? (
                            <>
                              <ChevronUp className="h-4 w-4 mr-1" />
                              Show Less
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-4 w-4 mr-1" />
                              Show {service.features.length - 3} More
                            </>
                          )}
                        </button>
                      )}
                    </ul>
                  </div>

                  {/* Benefits */}
                  {isExpanded && (
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-x-3">
                            <Target className="h-4 w-4 text-green-600" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies */}
                  {isExpanded && (
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Delivery Time and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{service.deliveryTime}</span>
                    </div>
                    <Link
                      to="/contact"
                      className={`inline-flex items-center text-sm font-semibold ${colors.text} hover:opacity-80 transition-colors group`}
                      aria-label={`Get started with ${service.title}`}
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Zion Tech Group?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We deliver exceptional results through our proven expertise, cutting-edge technology, and client-focused approach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Expert Team
              </h3>
              <p className="text-gray-600">
                Certified professionals with 10+ years of experience in cutting-edge technologies
              </p>
            </div>
            <div className="text-center group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors mb-4">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Agile development process ensuring rapid deployment and time-to-market
              </p>
            </div>
            <div className="text-center group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Security First
              </h3>
              <p className="text-gray-600">
                Enterprise-grade security and compliance with industry standards
              </p>
            </div>
            <div className="text-center group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Round-the-clock support and maintenance for all our solutions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Proven Delivery Process
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We follow a systematic approach that ensures quality, speed, and successful outcomes for every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Discovery & Analysis
              </h3>
              <p className="text-gray-600">
                Deep dive into your business needs, requirements, and technical constraints
              </p>
            </div>
            <div className="text-center group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Strategy & Planning
              </h3>
              <p className="text-gray-600">
                Create detailed project roadmap, architecture design, and resource allocation
              </p>
            </div>
            <div className="text-center group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Development & Testing
              </h3>
              <p className="text-gray-600">
                Agile development with continuous testing, quality assurance, and feedback loops
              </p>
            </div>
            <div className="text-center group">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Deployment & Support
              </h3>
              <p className="text-gray-600">
                Seamless deployment, training, and ongoing support with performance monitoring
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by Industry Leaders
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              Our track record speaks for itself with successful projects across various industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-blue-100">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Let's discuss your project requirements and discover how our cutting-edge technology solutions can help you achieve your business goals.
            </p>
            
            {/* Contact Information */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center">
                <Phone className="h-5 w-5 text-blue-600 mr-2" />
                <a href="tel:+13024640950" className="text-gray-700 hover:text-blue-600 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-5 w-5 text-blue-600 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">Middletown, DE</span>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group rounded-md bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-all duration-200 hover:scale-105"
                aria-label="Contact us to get started"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 inline group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/"
                className="text-sm font-semibold leading-6 text-gray-600 hover:text-blue-600 transition-colors group"
                aria-label="Back to homepage"
              >
                Back to Home{' '}
                <span
                  aria-hidden="true"
                  className="group-hover:translate-x-1 transition-transform inline-block"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
