import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cuttingEdgeComprehensiveServices2027 } from '../../data/2027-cutting-edge-comprehensive-services';
import { specializedInnovativeServices2027 } from '../../data/2027-specialized-innovative-services';
import { Star, CheckCircle, Phone, Mail, MapPin, ArrowRight, TrendingUp, Users, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const pricingTiers = [
  {
    name: 'Starter',
    price: '$999',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: [
      'Basic AI automation',
      'Standard support',
      'Core integrations',
      'Basic analytics',
      'Email support'
    ],
    popular: false
  },
  {
    name: 'Professional',
    price: '$2,999',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      'Advanced AI features',
      'Priority support',
      'Custom integrations',
      'Advanced analytics',
      'Phone & email support',
      'Training sessions'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: '$7,999',
    period: '/month',
    description: 'For large organizations',
    features: [
      'Full AI suite',
      '24/7 dedicated support',
      'Custom development',
      'Enterprise analytics',
      'Dedicated account manager',
      'Custom training programs',
      'SLA guarantees'
    ],
    popular: false
  }
];

export default function ComprehensivePricing() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all');

  // Combine all services
  const allServices = [...cuttingEdgeComprehensiveServices2027, ...specializedInnovativeServices2027];

  // Get unique categories
  const categories = Array.from(new Set(allServices.map(service => service.category)));

  // Filter services based on selection
  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;

    let matchesPrice = true;
    if (selectedPriceRange !== 'all') {
      const price = parseInt(service.price.replace(/[^0-9]/g, ''));
      switch (selectedPriceRange) {
        case 'under-1000':
          matchesPrice = price < 1000;
          break;
        case '1000-3000':
          matchesPrice = price >= 1000 && price < 3000;
          break;
        case '3000-5000':
          matchesPrice = price >= 3000 && price < 5000;
          break;
        case 'over-5000':
          matchesPrice = price >= 5000;
          break;
      }
    }

    return matchesCategory && matchesPrice;
  });

  const getPriceRangeLabel = (range: string) => {
    switch (range) {
      case 'under-1000': return 'Under $1,000';
      case '1000-3000': return '$1,000 - $3,000';
      case '3000-5000': return '$3,000 - $5,000';
      case 'over-5000': return 'Over $5,000';
      default: return 'All Prices';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Header */}
      <div className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Pricing
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transparent pricing for our revolutionary micro SAAS solutions.
            Choose the plan that fits your business needs and budget.
          </p>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 text-zion-cyan mb-2"/>
                <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                <p className="text-zion-slate-light">{contactInfo.mobile}</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 text-zion-cyan mb-2"/>
                <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                <p className="text-zion-slate-light">{contactInfo.email}</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 text-zion-cyan mb-2"/>
                <h3 className="text-lg font-semibold text-white mb-1">Visit Us</h3>
                <p className="text-zion-slate-light text-sm">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? 'ring-2 ring-zion-cyan scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-zion-cyan text-white px-4 py-2">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="text-4xl font-bold text-zion-blue">
                    {tier.price}
                    <span className="text-lg text-zion-slate-light font-normal">{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0"/>
                        <span className="text-zion-slate-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="w-full">
                    <Button className={`w-full ${tier.popular ? 'bg-zion-cyan text-white hover:bg-zion-cyan-dark' : 'bg-zion-blue text-white hover:bg-zion-blue-dark'}`}>
                      Get Started
                      <ArrowRight className="h-4 w-4 ml-2"/>
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Service Pricing Grid */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Individual Service Pricing</h2>

          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
            <select
              className="flex-1 px-4 py-3 rounded-lg border border-zion-slate-light bg-white text-zion-slate-dark focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select
              className="flex-1 px-4 py-3 rounded-lg border border-zion-slate-light bg-white text-zion-slate-dark focus:outline-none focus:ring-2 focus:ring-zion-cyan"
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
            >
              <option value="all">All Prices</option>
              <option value="under-1000">Under $1,000</option>
              <option value="1000-3000">$1,000 - $3,000</option>
              <option value="3000-5000">$3,000 - $5,000</option>
              <option value="over-5000">Over $5,000</option>
            </select>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-3xl">{service.icon}</div>
                    {service.popular && (
                      <Badge className="bg-zion-cyan text-white">Popular</Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {service.tagline}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-zion-blue mb-3">
                    {service.price}
                    <span className="text-sm text-zion-slate-light font-normal">{service.period}</span>
                  </div>

                  <Badge className="mb-3 bg-zion-purple text-white">
                    {service.category}
                  </Badge>

                  <p className="text-sm text-zion-slate-dark mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-zion-slate-dark text-sm">Key Features:</h4>
                    {service.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-zion-slate-dark">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0"/>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Market Information */}
                  <div className="space-y-2 mb-4 text-sm bg-zion-slate-light/20 p-3 rounded-lg">
                    <div className="flex justify-between">
                      <span className="text-zion-slate-dark">Market Size:</span>
                      <span className="font-semibold">{service.marketSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-slate-dark">Growth Rate:</span>
                      <span className="font-semibold">{service.growthRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-slate-dark">ROI:</span>
                      <span className="font-semibold">{service.roi}</span>
                    </div>
                  </div>

                  {/* Service Stats */}
                  <div className="flex items-center justify-between text-sm mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1"/>
                      <span className="font-semibold">{service.rating}</span>
                      <span className="text-zion-slate-light ml-1">({service.reviews})</span>
                    </div>
                    <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                      {service.customers} customers
                    </Badge>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <Link to={service.link} className="w-full">
                      <Button className="w-full bg-zion-cyan text-white hover:bg-zion-cyan-dark">
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-2"/>
                      </Button>
                    </Link>
                    <Link to="/contact" className="w-full">
                      <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                        <Phone className="h-4 w-4 mr-2"/>
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <p className="text-zion-slate-light text-lg">No services found matching your criteria.</p>
              <Button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedPriceRange('all');
                }}
                className="mt-4 bg-zion-cyan text-white hover:bg-zion-cyan-dark"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-gradient-to-br from-zion-blue to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-16">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-zion-cyan"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven ROI</h3>
              <p className="text-zion-slate-light">Average 300% ROI within 6 months</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-zion-cyan"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Support</h3>
              <p className="text-zion-slate-light">24/7 technical support and consultation</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-zion-cyan"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light">SOC 2 compliant with bank-level security</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-8 w-8 text-zion-cyan"/>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Fast Implementation</h3>
              <p className="text-zion-slate-light">Ready for immediate deployment</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-zion-blue to-zion-purple rounded-2xl p-12 text-white max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Contact us today for a free consultation and discover how our innovative solutions
              can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100 px-8 py-3">
                  <Phone className="h-5 w-5 mr-2"/>
                  Get Free Consultation
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue px-8 py-3">
                  <Mail className="h-5 w-5 mr-2"/>
                  Request Demo
                </Button>
              </Link>
            </div>
            <div className="text-zion-slate-light">
              <p>📞 Call us: {contactInfo.mobile}</p>
              <p>📧 Email: {contactInfo.email}</p>
              <p>📍 Address: {contactInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}