import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import { services, getServicesByCategory } from '../data/services';
import { CheckCircle, Star, Zap, Shield, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const PricingPage: NextPage = () => {
  const microSaasServices = getServicesByCategory('micro-saas');
  const itServices = getServicesByCategory('it-services');
  const aiServices = getServicesByCategory('ai-services');

  const formatPrice = (price: number) => {
    if (price >= 1000) {
      return `$${(price / 1000).toFixed(0)}K`;
    }
    return `$${price}`;
  };

  const getPricingTier = (service: any) => {
    const avgPrice = (service.pricing.starter + service.pricing.professional + service.pricing.enterprise) / 3;
    if (avgPrice <= 100) return 'starter';
    if (avgPrice <= 1000) return 'professional';
    return 'enterprise';
  };

  const ServiceCard = ({ service, category }: { service: any; category: string }) => (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl">{service.icon}</div>
        <div className="text-sm text-gray-500 capitalize">{category}</div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
      <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
      
      <div className="mb-4">
        <div className="text-3xl font-bold text-blue-600">
          {formatPrice(service.pricing.starter)}
        </div>
        <div className="text-sm text-gray-500">Starting from</div>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {service.features.slice(0, 3).map((feature: string, index: number) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          {service.benefits.slice(0, 2).map((benefit: string, index: number) => (
            <li key={index} className="flex items-center">
              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
      
      <Link 
        href={service.link}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-center block"
      >
        Learn More
      </Link>
    </div>
  );

  const PricingTier = ({ title, description, icon: Icon, services, color }: any) => (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-6">
        <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-4`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="space-y-4">
        {services.slice(0, 6).map((service: any) => (
          <div key={service.id} className="border-b border-gray-200 pb-3">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-gray-900">{service.name}</h4>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
              <div className="text-right">
                <div className="font-bold text-blue-600">{formatPrice(service.pricing.starter)}</div>
                <div className="text-xs text-gray-500">starting</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <Link 
          href={`/services/${title.toLowerCase().replace(' ', '-')}`}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-center block"
        >
          View All {title} Services
        </Link>
      </div>
    </div>
  );

  return (
    <MainLayout
      title="Pricing - Zion Tech Group"
      description="Transparent pricing for all our technology solutions. Choose from our comprehensive range of micro SaaS, IT services, and AI solutions."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
            Competitive pricing for cutting-edge technology solutions. No hidden fees, no surprises. 
            Choose the perfect plan for your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">50+</div>
              <div className="text-gray-300">Services Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">24/7</div>
              <div className="text-gray-300">Support Included</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400">30-Day</div>
              <div className="text-gray-300">Money Back Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of technology solutions across three main categories
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <PricingTier
              title="Micro SaaS"
              description="Affordable, focused software solutions for specific business needs"
              icon={Zap}
              services={microSaasServices}
              color="bg-blue-600"
            />
            <PricingTier
              title="IT Services"
              description="Comprehensive IT infrastructure and enterprise solutions"
              icon={Shield}
              services={itServices}
              color="bg-green-600"
            />
            <PricingTier
              title="AI Services"
              description="Cutting-edge artificial intelligence and machine learning solutions"
              icon={Globe}
              services={aiServices}
              color="bg-purple-600"
            />
          </div>
        </div>
      </section>

      {/* Detailed Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Detailed Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse all our services with transparent pricing and detailed feature comparisons
            </p>
          </div>

          {/* Micro SaaS Services */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Micro SaaS Solutions</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {microSaasServices.map((service) => (
                <ServiceCard key={service.id} service={service} category="micro-saas" />
              ))}
            </div>
          </div>

          {/* IT Services */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">IT Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itServices.map((service) => (
                <ServiceCard key={service.id} service={service} category="it-services" />
              ))}
            </div>
          </div>

          {/* AI Services */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service) => (
                <ServiceCard key={service.id} service={service} category="ai-services" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We deliver exceptional value with our comprehensive technology solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Expertise</h3>
              <p className="text-blue-100">500+ successful projects delivered</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-blue-100">98% client satisfaction rate</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-blue-100">Quick turnaround times</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
              <p className="text-blue-100">Enterprise-grade security</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized quote and consultation. We'll help you choose the perfect solution for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Get Free Quote
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">
              Schedule Consultation
            </Link>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Contact Information:</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-600">
              <div className="flex items-center">
                <span className="font-semibold">Phone:</span>
                <span className="ml-2">+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold">Email:</span>
                <span className="ml-2">kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PricingPage;