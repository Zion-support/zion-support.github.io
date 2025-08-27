import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Star, Brain, Zap, Shield, Globe, Heart, DollarSign, BookOpen, TrendingUp, Briefcase, Users, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { ENHANCED_SERVICES_2025, EnhancedService2025 } from "../data/enhanced-services-2025";

const categoryIcons: Record<string, React.ReactNode> = {
  "AI & Autonomous Systems": <Brain className="h-5 w-5" />,
  "Quantum Computing": <Zap className="h-5 w-5" />,
  "Cybersecurity": <Shield className="h-5 w-5" />,
  "Edge Computing & IoT": <Globe className="h-5 w-5" />,
  "Healthcare AI": <Heart className="h-5 w-5" />,
  "Financial AI": <DollarSign className="h-5 w-5" />,
  "Legal AI": <BookOpen className="h-5 w-5" />,
  "Marketing AI": <TrendingUp className="h-5 w-5" />,
  "Supply Chain AI": <Briefcase className="h-5 w-5" />,
  "Education AI": <Users className="h-5 w-5" />
};

export default function ComprehensivePricingGuide2025() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  const categories = ["All", ...Array.from(new Set(ENHANCED_SERVICES_2025.map(service => service.category)))];

  const filteredServices = ENHANCED_SERVICES_2025.filter(service => 
    selectedCategory === "All" || service.category === selectedCategory
  );

  const sortedServices = [...filteredServices].sort((a, b) => a.price - b.price);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700">
      <SEO 
        title="2025 Comprehensive Pricing Guide - Zion Tech Group" 
        description="Complete pricing guide for all our AI-powered, quantum computing, and cutting-edge technology services. Compare features, pricing, and find the perfect solution for your business needs." 
        keywords="pricing guide, AI services pricing, quantum computing pricing, cybersecurity pricing, edge computing pricing, Zion Tech Group pricing" 
        url="https://ziontechgroup.com/pricing-guide-2025"
      />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            2025 Comprehensive Pricing Guide
          </h1>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto mb-8">
            Transparent pricing for all our cutting-edge technology services. Find the perfect solution that fits your budget and business requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg">
                Get Custom Quote
              </Button>
            </Link>
            <Link to="/enhanced-services-2025">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Info Banner */}
      <div className="bg-zion-blue-dark py-4 px-4 border-b border-zion-blue-light">
        <div className="container mx-auto text-center text-white">
          <p className="text-lg">
            <strong>Contact Us:</strong> Mobile: +1 302 464 0950 | Email: kleber@ziontechgroup.com | 
            Address: 364 E Main St STE 1008 Middletown DE 19709
          </p>
        </div>
      </div>

      {/* Filters and View Toggle */}
      <div className="bg-zinc-800 py-6 px-4 border-b border-zinc-700">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-zion-purple text-white"
                      : "bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  viewMode === "grid"
                    ? "bg-zion-purple text-white"
                    : "bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  viewMode === "table"
                    ? "bg-zion-purple text-white"
                    : "bg-zinc-700 text-zinc-300 hover:bg-zinc-600"
                }`}
              >
                Table View
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Content */}
      <div className="container mx-auto px-4 py-12">
        {viewMode === "grid" ? (
          <PricingGrid services={sortedServices} />
        ) : (
          <PricingTable services={sortedServices} />
        )}
      </div>

      {/* Pricing FAQ */}
      <div className="bg-zinc-800 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">What payment options do you offer?</h3>
              <p className="text-zinc-300">We accept all major credit cards, bank transfers, and can arrange custom payment plans for enterprise clients. All prices are in USD.</p>
            </div>
            <div className="bg-zinc-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer volume discounts?</h3>
              <p className="text-zinc-300">Yes! We provide significant discounts for annual contracts and volume purchases. Contact us for custom enterprise pricing.</p>
            </div>
            <div className="bg-zinc-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Can I cancel my subscription?</h3>
              <p className="text-zinc-300">All our services come with a 30-day money-back guarantee. You can cancel at any time with no long-term commitments.</p>
            </div>
            <div className="bg-zinc-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer custom solutions?</h3>
              <p className="text-zinc-300">Absolutely! We specialize in custom AI and technology solutions tailored to your specific business needs and requirements.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you choose the perfect solution and get you up and running quickly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg">
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg">
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function PricingGrid({ services }: { services: EnhancedService2025[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {services.map((service) => (
        <PricingCard key={service.id} service={service} />
      ))}
    </div>
  );
}

function PricingCard({ service }: { service: EnhancedService2025 }) {
  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-zinc-200 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Header */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          {categoryIcons[service.category]}
          <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
            {service.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <div className="text-3xl font-bold mb-2">${service.price.toLocaleString()}</div>
        <div className="text-sm opacity-90">per month</div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-500 fill-current" />
            <span className="font-medium">{service.rating}</span>
            <span className="text-zinc-500 text-sm">({service.reviewCount})</span>
          </div>
          <div className="flex items-center gap-1">
            <Brain className="h-4 w-4 text-purple-500" />
            <span className="font-medium">{service.aiScore}</span>
            <span className="text-zinc-500 text-sm">AI Score</span>
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h4 className="font-semibold text-zinc-800 mb-3">What's Included:</h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-zinc-600">
                <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Trial & Setup */}
        <div className="bg-zinc-50 p-4 rounded-lg mb-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-zinc-500">Free Trial:</span>
              <span className="ml-2 font-medium text-zinc-800">{service.trialDays} days</span>
            </div>
            <div>
              <span className="text-zinc-500">Setup Time:</span>
              <span className="ml-2 font-medium text-zinc-800">{service.setupTime}</span>
            </div>
          </div>
        </div>

        {/* Action */}
        <Link to="/contact" className="block">
          <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

function PricingTable({ services }: { services: EnhancedService2025[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
            <th className="px-6 py-4 text-left font-semibold">Service</th>
            <th className="px-6 py-4 text-center font-semibold">Category</th>
            <th className="px-6 py-4 text-center font-semibold">Price</th>
            <th className="px-6 py-4 text-center font-semibold">Rating</th>
            <th className="px-6 py-4 text-center font-semibold">AI Score</th>
            <th className="px-6 py-4 text-center font-semibold">Trial</th>
            <th className="px-6 py-4 text-center font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service, index) => (
            <tr key={service.id} className={`border-b border-zinc-200 ${index % 2 === 0 ? 'bg-white' : 'bg-zinc-50'}`}>
              <td className="px-6 py-4">
                <div>
                  <h4 className="font-semibold text-zinc-800">{service.title}</h4>
                  <p className="text-sm text-zinc-600 line-clamp-2">{service.description}</p>
                </div>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  {categoryIcons[service.category]}
                  <span className="text-sm text-zinc-700">{service.category}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="text-xl font-bold text-zion-purple">${service.price.toLocaleString()}</div>
                <div className="text-sm text-zinc-500">per month</div>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="flex items-center justify-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="font-medium">{service.rating}</span>
                </div>
                <div className="text-sm text-zinc-500">({service.reviewCount})</div>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="flex items-center justify-center gap-1">
                  <Brain className="h-4 w-4 text-purple-500" />
                  <span className="font-medium">{service.aiScore}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-center">
                <div className="text-sm font-medium text-zinc-800">{service.trialDays} days</div>
                <div className="text-xs text-zinc-500">free trial</div>
              </td>
              <td className="px-6 py-4 text-center">
                <Link to="/contact">
                  <Button size="sm" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                    Get Started
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}