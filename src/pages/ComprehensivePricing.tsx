import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle  } from '@/components/ui/card';
import { Badge  } from '@/components/ui/badge';
import { Button  } from '@/components/ui/button';
import { cuttingEdgeComprehensiveServices2027  } from '../../data/2027-cutting-edge-comprehensive-services';
import { specializedInnovativeServices2027  } from '../../data/2027-specialized-innovative-services';
import { Star, CheckCircle, Phone, Mail, MapPin, ArrowRight, TrendingUp, Users, Shield, Zap  } from 'lucide-react';
import { Link  } from 'react-router-dom';

import { Link } from "react-router-dom";

const pricingTiers = [
  {
    name: 'Starter',
    price: '$999',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features[
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
    features[
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
    features[
      'Full AI suite',
      '24/7 dedicated support',
      'Custom development',
      'Enterprise analytics',
      'Dedicated account manager',
      'Custom training programs',
      'SLA guarantees'
    ],
    popular: false
  {/* Removed stray closing brace */}
];

export default function ComprehensivePricing(...args: any[]): any {
  const [selectedCategory, setSelectedCategory] = useState<any>('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState<any>('all');

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-slate-300">Benefits:</h4>
              <div className="space-y-1">
                {service.benefits.slice(0, 3).map((benefit, index) => (<div key={index} className="flex items-center text-sm text-slate-300">
                    <Star className="h-4 w-4 text-yellow-400 mr-2 flex-shrink-0"/>
                    {benefit}
                  </div>))}
              </div>
            </div>

  const getPriceRangeLabel = (range: string)  => {
    switch (range) {
      case 'under-1000': return 'Under $1,000';
      case '1000-3000': return '$1,000 - $3,000';
      case '3000-5000': return '$3,000 - $5,000';
      case 'over-5000': return 'Over $5,000';
      default: return 'All Prices';
    }
  };

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-purple-200">Key Features:</h4>
              <div className="space-y-1">
                {service.features.slice(0, 5).map((feature, index) => (<div key={index} className="flex items-center text-sm text-purple-200">
                    <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0"/>
                    {feature}
                  </div>))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-purple-200">AI Models:</h4>
              <div className="space-y-1">
                {service.aiModels.slice(0, 3).map((model, index) => (<div key={index} className="flex items-center text-sm text-purple-200">
                    <Brain className="h-4 w-4 text-purple-400 mr-2 flex-shrink-0"/>
                    {model}
                  </div>))}
              </div>
            </div>

            <div className="pt-4 border-t border-purple-600/30">
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-purple-300">AI Score:</span>
                  <div className="text-white font-semibold">{service.aiScore}/100</div>
                </div>
                <div>
                  <span className="text-purple-300">Accuracy:</span>
                  <div className="text-green-400 font-semibold">{service.accuracy}</div>
                </div>
                <div>
                  <span className="text-purple-300">Real-time:</span>
                  <div className="text-green-400 font-semibold">
                    {service.realTimeProcessing ? 'Yes' : 'No'}
                  </div>
                </div>
                <div>
                  <span className="text-purple-300">Multi-language:</span>
                  <div className="text-green-400 font-semibold">
                    {service.multilingualSupport ? 'Yes' : 'No'}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-300" onClick={() => window.open(service.contactInfo.website, '_blank')}>
                  Get Started
                </Button>
                <Button size="sm" variant="outline" className="border-purple-500 text-purple-300 hover:border-pink-500 hover:text-pink-400" onClick={() => window.open(`mailto:${service.contactInfo.email}`)}>
                  Contact
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>))}
    </div>);
    const renderITPricing = () => (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {enhancedITServices2025.map((service) => (<Card key={service.id} className="group relative overflow-hidden bg-gradient-to-br from-blue-800/50 to-indigo-700/50 border-blue-600/30 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
                {getCategoryIcon(service.category)}
              </div>
              <Badge variant="outline" className="border-blue-500 text-blue-300">
                {service.category}
              </Badge>
            </div>
            <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
              {service.name}
            </CardTitle>
            <CardDescription className="text-blue-200">
              {service.description}
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">
                ${service.hourlyRate}/hour
              </div>
              <div className="text-sm text-blue-300 mb-4">
                Project Rate: ${service.projectRate.toLocaleString()}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-blue-200">Key Features:</h4>
              <div className="space-y-1">
                {service.features.slice(0, 5).map((feature, index) => (<div key={index} className="flex items-center text-sm text-blue-200">
                    <Check className="h-4 w-4 text-green-400 mr-2 flex-shrink-0"/>
                    {feature}
                  </div>))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-blue-200">Technologies:</h4>
              <div className="space-y-1">
                {service.technologies.slice(0, 3).map((tech, index) => (<div key={index} className="flex items-center text-sm text-blue-200">
                    <Code className="h-4 w-4 text-blue-400 mr-2 flex-shrink-0"/>
                    {tech}
                  </div>))}
              </div>
            </div>

            <div className="pt-4 border-t border-blue-600/30">
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-blue-300">Response Time:</span>
                  <div className="text-white font-semibold">{service.responseTime}</div>
                </div>
                <div>
                  <span className="text-blue-300">SLA:</span>
                  <div className="text-green-400 font-semibold">{service.sla}</div>
                </div>
                <div>
                  <span className="text-blue-300">Delivery:</span>
                  <div className="text-white font-semibold">{service.deliveryTime}</div>
                </div>
                <div>
                  <span className="text-blue-300">Support:</span>
                  <div className="text-green-400 font-semibold">{service.support}</div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold transition-all duration-300" onClick={() => window.open(service.contactInfo.website, '_blank')}>
                  Get Started
                </Button>
                <Button size="sm" variant="outline" className="border-blue-500 text-blue-300 hover:border-indigo-500 hover:text-indigo-400" onClick={() => window.open(`mailto:${service.contactInfo.email}`)}>
                  Contact
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>))}
    </div>);
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              {" "}Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transparent pricing for all our micro SAAS, AI, and IT services. Choose the perfect solution for your business needs.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-gray-300">Billing Cycle:</span>
            <div className="bg-slate-800 rounded-lg p-1">
              <button onClick={() => setBillingCycle('monthly')} className={`px-4 py-2 rounded-md transition-all duration-300 ${billingCycle === 'monthly'
            ? 'bg-blue-600 text-white'
            : 'text-gray-300 hover:text-white'}`}>
                Monthly
              </button>
              <button onClick={() => setBillingCycle('annual')} className={`px-4 py-2 rounded-md transition-all duration-300 ${billingCycle === 'annual'
            ? 'bg-blue-600 text-white'
            : 'text-gray-300 hover:text-white'}`}>
                Annual (Save 20%)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md: anygrid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index)  => (
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
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team to discuss pricing, customization, and implementation for your business
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-slate-300">
              <Phone className="h-5 w-5 text-blue-400"/>
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-300">
              <Mail className="h-5 w-5 text-blue-400"/>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-slate-300">
              <MapPin className="h-5 w-5 text-blue-400"/>
              <span>364 E Main St STE 1008 Middletown DE 19709</span>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service)  => (
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
                    <h4 className="font-semibold text-zion-slate-dark text-sm">Key Features: any</h4>
                    {service.features.slice(0, 3).map((feature, index)  => (
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
      </section>
    </div>);
};
export default ComprehensivePricing;
