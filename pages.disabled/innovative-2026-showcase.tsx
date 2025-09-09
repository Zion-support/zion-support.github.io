import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  Cpu, 
  Database, 
  Network, 
  Server, 
  Lock, 
  Globe,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Search
} from 'lucide-react';
import { innovative2026MicroSaasServices } from '../../data/innovative-2026-micro-saas-services';
import { innovative2026ITServices } from '../../data/innovative-2026-it-services';
import { innovative2026AIServices } from '../../data/innovative-2026-ai-services';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    id: 'micro-saas',
    title: '🚀 Micro SaaS Solutions',
    icon: Zap,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Innovative micro SaaS services for modern businesses',
    services: innovative2026MicroSaasServices,
    count: innovative2026MicroSaasServices.length
  },
  {
    id: 'it-services',
    title: '💻 IT Infrastructure & Services',
    icon: Cpu,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Next-generation IT solutions powered by quantum and AI',
    services: innovative2026ITServices,
    count: innovative2026ITServices.length
  },
  {
    id: 'ai-services',
    title: '🧠 Advanced AI Solutions',
    icon: Brain,
    color: 'from-emerald-600 via-green-600 to-lime-600',
    description: 'Revolutionary AI platforms with consciousness and creativity',
    services: innovative2026AIServices,
    count: innovative2026AIServices.length
  }
];

export default function Innovative2026Showcase() {
  const [selectedCategory, setSelectedCategory] = useState('micro-saas');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = serviceCategories
    .find(cat => cat.id === selectedCategory)
    ?.services.filter(service =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Futuristic Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-bounce"></div>
        </div>
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-8">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Innovative 2026
                </span>
                <br />
                <span className="text-white">Services Showcase</span>
              </h1>
              <p className="text-xl leading-8 text-gray-300 mb-12 max-w-3xl mx-auto">
                Discover our revolutionary micro SaaS, IT infrastructure, and AI solutions that are transforming industries and driving the future of technology.
              </p>
              
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-blue-400" />
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white font-semibold">{contactInfo.mobile}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-purple-400" />
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white font-semibold">{contactInfo.email}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-cyan-400" />
                    <div>
                      <p className="text-sm text-gray-400">Address</p>
                      <p className="text-white font-semibold text-sm">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {serviceCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/50'
                      : 'bg-white/10 backdrop-blur-md text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <category.icon className="h-6 w-6" />
                    <span>{category.title}</span>
                    <span className="bg-white/20 px-2 py-1 rounded-full text-sm">
                      {category.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Search Bar */}
        <section className="py-8">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <Search className="h-6 w-6 text-gray-400" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  {/* Service Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{service.category}</p>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-gray-400 text-sm flex items-start">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Pricing</h4>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="text-center">
                        <p className="text-gray-400">Starter</p>
                        <p className="text-white font-semibold">{service.pricing.starter}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-400">Pro</p>
                        <p className="text-white font-semibold">{service.pricing.professional}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-400">Enterprise</p>
                        <p className="text-white font-semibold">{service.pricing.enterprise}</p>
                      </div>
                    </div>
                  </div>

                  {/* Market Info */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Market Size:</span>
                      <span className="text-white font-semibold">{service.marketSize}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="text-gray-400">Target Market:</span>
                      <span className="text-white text-xs text-right">{service.targetMarket}</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="flex space-x-3">
                    <Link
                      to={service.website}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-xl font-semibold text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 inline ml-2" />
                    </Link>
                    <a
                      href={`tel:${service.contactInfo.phone}`}
                      className="bg-white/10 backdrop-blur-md text-white px-4 py-3 rounded-xl hover:bg-white/20 transition-all duration-300"
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Competitive Advantage */}
                  <div className="mt-4 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                    <p className="text-blue-300 text-xs">
                      <strong>Competitive Edge:</strong> {service.competitiveAdvantage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let's discuss how our innovative 2026 services can help you achieve unprecedented growth and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${contactInfo.mobile}`}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/50"
              >
                <Phone className="h-5 w-5 inline mr-2" />
                Call Now: {contactInfo.mobile}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <Mail className="h-5 w-5 inline mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}