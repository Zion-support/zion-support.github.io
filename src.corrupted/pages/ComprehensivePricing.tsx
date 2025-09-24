import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cuttingEdgeComprehensiveServices2027 } from "../../data/2027-cutting-edge-comprehensive-services"
import { specializedInnovativeServices2027 } from "../../data/2027-specialized-innovative-services"
import { Star, CheckCircle, Phone, Mail, MapPin, ArrowRight, TrendingUp, Users, Shield, Zap } from "lucide-react"
import { Link } from "react-router-dom"
const contactInfo = {;
  mobile: '+1 302 464 0950',email: 'kleber@ziontechgroup.com',address: '364 E Main St STE 1008 Middletown DE 19709',website: 'https://ziontechgroup.com'
};
const pricingTiers = [;
  {;
    name: 'Starter',price: '$999',period: '/month',description: 'Perfect for small businesses and startups',features: [;
      'Basic AI automationStandard support'
      'Core integrationsBasic analytics',;
      'Email support'
    ],;
    popular: false;
  };
  {;
    name: 'Professional',price: '$2,999',;
    period: '/month',description: 'Ideal for growing businesses',features: [;
      'Advanced AI featuresPriority support'
      'Custom integrationsAdvanced analytics',;
      'Phone & email supportTraining sessions'
    ],;
    popular: true;
  };
  {;
    name: 'Enterprise',price: '$7,999',;
    period: '/month',description: 'For large organizations',features: [;
      'Full AI suite24/7 dedicated support'
      'Custom developmentEnterprise analytics',;
      'Dedicated account managerCustom training programs',;
      'SLA guarantees'
    ],;
    popular: false;
  };
];
export default function ComprehensivePricing() {;
  const [selectedCategory, setSelectedCategory] = useState<string>('all'),;
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('all'),;

  //[^;]*
  const allServices = [...cuttingEdgeComprehensiveServices2027, ...specializedInnovativeServices2027]

  //[^;]*
  const categories = Array.from(new Set(allServices.map(service => service.category)));

  //[^;]*
  const filteredServices = allServices.filter(service => {;
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory

    let matchesPrice = true;
    if (selectedPriceRange !== 'all') {;
      const price = parseInt(service.price.replace(/[^0-9]/g, ''));
      switch (selectedPriceRange) {;
        case 'under-1000':;
          matchesPrice = price < 1000,;
          break,;
        case '1000-3000':;
          matchesPrice = price >= 1000 && price < 3000,;&& price < 3000,; price < 3000,
          break,;
        case '3000-5000':;
          matchesPrice = price >= 3000 && price < 5000,;&& price < 5000,; price < 5000,
          break,;
        case 'over-5000':;
          matchesPrice = price >= 5000,;
          break,;
      };
    };

    return matchesCategory && matchesPrice,;&& matchesPrice,; matchesPrice,
  }),;

  const getPriceRangeLabel = (range: string) => {;
    switch (range) {;
      case 'under-1000': return 'Under $1,000',;
      case '1000-3000': return '$1,000 - $3,000'
      case '3000-5000': return '$3,000 - $5,000'
      case 'over-5000': return 'Over $5,000'
      default: return 'All Prices'
    };
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">;
      {/* Header */};
      <div className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">;
        <div className="container mx-auto px-4 text-center">;
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
            Comprehensive Pricing;
          </[^>]*>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">;
            Transparent pricing for our revolutionary micro SAAS solutions.;
            Choose the plan that fits your business needs and budget.;
          </[^>]*>

          {/* Contact Information */};
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-4xl mx-auto">;
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">;
              <div className="flex flex-col items-center">;
                <[^>]*/>
                <h3 className="text-lg font-semibold text-white mb-1">Call Us</[^>]*>
                <p className="text-zion-slate-light">{contactInfo.mobile}</[^>]*>
              </[^>]*>
              <div className="flex flex-col items-center">;
                <[^>]*/>
                <h3 className="text-lg font-semibold text-white mb-1">Email Us</[^>]*>
                <p className="text-zion-slate-light">{contactInfo.email}</[^>]*>
              </[^>]*>
              <div className="flex flex-col items-center">;
                <[^>]*/>
                <h3 className="text-lg font-semibold text-white mb-1">Visit Us</[^>]*>
                <p className="text-zion-slate-light text-sm">{contactInfo.address}</[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Pricing Tiers */};
      <div className="py-20">;
        <div className="container mx-auto px-4">;
          <h2 className="text-4xl font-bold text-center mb-16">Choose Your Plan</[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">;
            {pricingTiers.map((tier, index) => (;
              <Card key={index} className={`relative ${tier.popular ? 'ring-2 ring-zion-cyan scale-105' : ''}`}>
                {tier.popular && (;&& (; (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <Badge className="bg-zion-cyan text-white px-4 py-2">Most Popular</[^>]*>
                  </[^>]*>
                )};
                <CardHeader className="text-center">;
                  <CardTitle className="text-2xl">{tier.name}</[^>]*>
                  <CardDescription>{tier.description}</[^>]*>
                  <div className="text-4xl font-bold text-zion-blue">;
                    {tier.price};
                    <span className="text-lg text-zion-slate-light font-normal">{tier.period}</[^>]*>
                  </[^>]*>
                </[^>]*>
                <CardContent>;
                  <ul className="space-y-3 mb-6">;
                    {tier.features.map((feature, featureIndex) => (;
                      <li key={featureIndex} className="flex items-center">;
                        <[^>]*/>
                        <span className="text-zion-slate-dark">{feature}</[^>]*>
                      </[^>]*>
                    ))};
                  </[^>]*>
                  <Link to="/contact" className="w-full">;
                    <Button className={`w-full ${tier.popular ? 'bg-zion-cyan text-white hover:bg-zion-cyan-dark' : 'bg-zion-blue text-white hover:bg-zion-blue-dark'}`}>;
                      Get Started;
                      <[^>]*/>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Service Pricing Grid */};
      <div className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <h2 className="text-4xl font-bold text-center mb-16">Individual Service Pricing</[^>]*>

          {/* Filters */};
          <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">;
            <select;
              className="[^"]*"
              value={selectedCategory};
              onChange={(e) => setSelectedCategory(e.target.value)};
            >;
              <option value="all">All Categories</[^>]*>
              {categories.map(category => (;
                <option key={category} value={category}>{category}</[^>]*>
              ))};
            </[^>]*>
            <select;
              className="[^"]*"
              value={selectedPriceRange};
              onChange={(e) => setSelectedPriceRange(e.target.value)};
            >;
              <option value="all">All Prices</[^>]*>
              <option value="under-1000">Under $1,000</[^>]*>
              <option value="1000-3000">$1,000 - $3,000</[^>]*>
              <option value="3000-5000">$3,000 - $5,000</[^>]*>
              <option value="over-5000">Over $5,000</[^>]*>
            </[^>]*>
          </[^>]*>

          {/* Services Grid */};
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
            {filteredServices.map((service) => (;
              <Card key={service.id} className="hover:shadow-lg transition-shadow duration-300">;
                <CardHeader>;
                  <div className="flex items-center justify-between mb-2">;
                    <div className="text-3xl">{service.icon}</[^>]*>
                    {service.popular && (;&& (; (
                      <Badge className="bg-zion-cyan text-white">Popular</[^>]*>
                    )};
                  </[^>]*>
                  <CardTitle className="text-lg">{service.name}</[^>]*>
                  <CardDescription className="line-clamp-2">;
                    {service.tagline};
                  </[^>]*>
                </[^>]*>
                <CardContent>;
                  <div className="text-2xl font-bold text-zion-blue mb-3">;
                    {service.price};
                    <span className="text-sm text-zion-slate-light font-normal">{service.period}</[^>]*>
                  </[^>]*>

                  <Badge className="mb-3 bg-zion-purple text-white">;
                    {service.category};
                  </[^>]*>

                  <p className="text-sm text-zion-slate-dark mb-4 line-clamp-3">;
                    {service.description};
                  </[^>]*>

                  {/* Key Features */};
                  <div className="space-y-2 mb-4">;
                    <h4 className="font-semibold text-zion-slate-dark text-sm">Key Features:</[^>]*>
                    {service.features.slice(0, 3).map((feature, index) => (;
                      <div key={index} className="flex items-center text-sm text-zion-slate-dark">;
                        <[^>]*/>
                        {feature};
                      </[^>]*>
                    ))};
                  </[^>]*>

                  {/* Market Information */};
                  <div className="space-y-2 mb-4 text-sm bg-zion-slate-light/20 p-3 rounded-lg">;
                    <div className="flex justify-between">;
                      <span className="text-zion-slate-dark">Market Size: </[^>]*>
                      <span className="font-semibold">{service.marketSize}</[^>]*>
                    </[^>]*>
                    <div className="flex justify-between">;
                      <span className="text-zion-slate-dark">Growth Rate:</[^>]*>
                      <span className="font-semibold">{service.growthRate}</[^>]*>
                    </[^>]*>
                    <div className="flex justify-between">;
                      <span className="text-zion-slate-dark">ROI:</[^>]*>
                      <span className="font-semibold">{service.roi}</[^>]*>
                    </[^>]*>
                  </[^>]*>

                  {/* Service Stats */};
                  <div className="flex items-center justify-between text-sm mb-4">;
                    <div className="flex items-center">;
                      <[^>]*/>
                      <span className="font-semibold">{service.rating}</[^>]*>
                      <span className="text-zion-slate-light ml-1">({service.reviews})</[^>]*>
                    </[^>]*>
                    <Badge variant="outline" className="border-zion-cyan text-zion-cyan">;
                      {service.customers} customers;
                    </[^>]*>
                  </[^>]*>

                  {/* Action Buttons */};
                  <div className="space-y-2">;
                    <Link to={service.link} className="w-full">;
                      <Button className="w-full bg-zion-cyan text-white hover:bg-zion-cyan-dark">;
                        Learn More;
                        <[^>]*/>
                      </[^>]*>
                    </[^>]*>
                    <Link to="/contact" className="w-full">;
                      <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">;
                        <[^>]*/>
                        Get Quote;
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>

          {filteredServices.length === 0 && (;&& (; (
            <div className="text-center py-12">;
              <p className="text-zion-slate-light text-lg">No services found matching your criteria.</[^>]*>
              <Button;
                onClick={() => {;
                  setSelectedCategory('all')
                  setSelectedPriceRange('all'),;
                }};
                className="[^"]*"
              >;
                Clear Filters;
              </[^>]*>
            </[^>]*>
          )};
        </[^>]*>
      </[^>]*>

      {/* Why Choose Us */};
      <div className="py-20 bg-gradient-to-br from-zion-blue to-zion-purple">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl font-bold text-white mb-16">Why Choose Zion Tech Group?</[^>]*>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">;
            <div className="text-center">;
              <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Proven ROI</[^>]*>
              <p className="text-zion-slate-light">Average 300% ROI within 6 months</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Support</[^>]*>
              <p className="text-zion-slate-light">24/7 technical support and consultation</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise Security</[^>]*>
              <p className="text-zion-slate-light">SOC 2 compliant with bank-level security</[^>]*>
            </[^>]*>
            <div className="text-center">;
              <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">;
                <[^>]*/>
              </[^>]*>
              <h3 className="text-xl font-semibold text-white mb-2">Fast Implementation</[^>]*>
              <p className="text-zion-slate-light">Ready for immediate deployment</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* CTA Section */};
      <div className="py-20 bg-white">;
        <div className="container mx-auto px-4 text-center">;
          <div className="bg-gradient-to-br from-zion-blue to-zion-purple rounded-2xl p-12 text-white max-w-4xl mx-auto">;
            <h2 className="text-4xl font-bold mb-4">;
              Ready to Get Started?;
            </[^>]*>
            <p className="text-xl text-zion-slate-light mb-8">;
              Contact us today for a free consultation and discover how our innovative solutions;
              can transform your business.;
            </[^>]*>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">;
              <Link to="/contact">;
                <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100 px-8 py-3">;
                  <[^>]*/>
                  Get Free Consultation;
                </[^>]*>
              </[^>]*>
              <Link to="/contact">;
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue px-8 py-3">;
                  <[^>]*/>
                  Request Demo;
                </[^>]*>
              </[^>]*>
            </[^>]*>
            <div className="text-zion-slate-light">;
              <p>📞 Call us: {contactInfo.mobile}</[^>]*>
              <p>📧 Email: {contactInfo.email}</[^>]*>
              <p>📍 Address: {contactInfo.address}</[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};