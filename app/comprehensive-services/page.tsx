import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Brain, 
  Code, 
  Cloud, 
  Shield, 
  BarChart3, 
  Settings, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';
import { comprehensiveServices2026, getServicesByCategory, getPopularServices, getNewServices } from '../../data/comprehensive-services-2026';

export default function ComprehensiveServices() {
  const title = 'Comprehensive Services Catalog 2026 — Zion Tech Group';
  const description = 'Explore our complete catalog of innovative micro SAAS, AI services, IT solutions, and cutting-edge technology services. Real implementations with transparent pricing and fast delivery.';
  
  const categories = [
    { id: 'Micro SAAS', icon: Code, color: 'orange', count: getServicesByCategory('Micro SAAS').length },
    { id: 'AI Services', icon: Brain, color: 'blue', count: getServicesByCategory('AI Services').length },
    { id: 'IT Services', icon: Settings, color: 'green', count: getServicesByCategory('IT Services').length },
    { id: 'Cloud Solutions', icon: Cloud, color: 'purple', count: getServicesByCategory('Cloud Solutions').length },
    { id: 'Security', icon: Shield, color: 'red', count: getServicesByCategory('Security').length },
    { id: 'Analytics', icon: BarChart3, color: 'indigo', count: getServicesByCategory('Analytics').length },
    { id: 'Automation', icon: Zap, color: 'yellow', count: getServicesByCategory('Automation').length },
    { id: 'Development', icon: Code, color: 'teal', count: getServicesByCategory('Development').length }
  ];

  const popularServices = getPopularServices();
  const newServices = getNewServices();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/comprehensive-services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-yellow-300 mr-3" />
                <span className="text-lg font-semibold text-yellow-300">Comprehensive Services Catalog 2026</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Innovative Technology Solutions
              </h1>
              <p className="mt-6 text-xl leading-8 text-blue-100">
                Discover our complete portfolio of cutting-edge micro SAAS, AI services, IT solutions, and automation platforms. 
                Real implementations with transparent pricing and industry-leading delivery times.
              </p>
              
              {/* Contact Info */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
                <a href="tel:+13024640950" className="flex items-center hover:text-yellow-300 transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="flex items-center hover:text-yellow-300 transition-colors">
                  <Mail className="h-4 w-4 mr-2" />
                  kleber@ziontechgroup.com
                </a>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  364 E Main St STE 1008, Middletown DE 19709
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{comprehensiveServices2026.length}</div>
                <div className="text-sm text-gray-600">Total Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{popularServices.length}</div>
                <div className="text-sm text-gray-600">Popular Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">{newServices.length}</div>
                <div className="text-sm text-gray-600">New Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">24-48h</div>
                <div className="text-sm text-gray-600">Quote Response</div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Service Categories</h2>
              <p className="mt-4 text-lg text-gray-600">
                Explore our comprehensive range of technology solutions across multiple categories
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <div key={category.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 bg-${category.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                    <category.icon className={`h-6 w-6 text-${category.color}-600`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.id}</h3>
                  <p className="text-sm text-gray-600 mb-3">{category.count} services available</p>
                  <Link 
                    href={`#${category.id.toLowerCase().replace(' ', '-')}`}
                    className={`inline-flex items-center text-sm font-medium text-${category.color}-600 hover:text-${category.color}-500`}
                  >
                    View Services
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-yellow-500 mr-2" />
                <h2 className="text-3xl font-bold text-gray-900">Most Popular Services</h2>
              </div>
              <p className="text-lg text-gray-600">
                Our most requested and highly-rated services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.map((service) => (
                <div key={service.id} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl">{service.icon}</div>
                    <div className="flex items-center text-sm text-green-600">
                      <Star className="h-4 w-4 mr-1" />
                      Popular
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.tagline}</p>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-lg font-semibold text-blue-600">{service.pricing.starter}</div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.delivery}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      Market average: {service.marketPrice}
                    </div>
                    <Link 
                      href={service.link}
                      className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Services by Category */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Complete Service Catalog</h2>
              <p className="mt-4 text-lg text-gray-600">
                Browse all our services organized by category
              </p>
            </div>
            
            {categories.map((category) => {
              const categoryServices = getServicesByCategory(category.id as any);
              return (
                <div key={category.id} id={category.id.toLowerCase().replace(' ', '-')} className="mb-16">
                  <div className="flex items-center mb-8">
                    <div className={`w-10 h-10 bg-${category.color}-100 rounded-lg flex items-center justify-center mr-4`}>
                      <category.icon className={`h-5 w-5 text-${category.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.id}</h3>
                    <span className="ml-4 text-sm text-gray-500">({categoryServices.length} services)</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryServices.map((service) => (
                      <div key={service.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-3">
                          <div className="text-2xl">{service.icon}</div>
                          {service.isNew && (
                            <div className="flex items-center text-xs text-green-600">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              New
                            </div>
                          )}
                        </div>
                        
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h4>
                        <p className="text-sm text-gray-600 mb-3">{service.tagline}</p>
                        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{service.description}</p>
                        
                        <div className="space-y-2 mb-4">
                          {service.features.slice(0, 2).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-xs text-gray-600">
                              <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                        
                        <div className="border-t pt-3">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-sm font-semibold text-blue-600">{service.pricing.starter}</div>
                            <div className="flex items-center text-xs text-gray-500">
                              <Clock className="h-3 w-3 mr-1" />
                              {service.delivery}
                            </div>
                          </div>
                          <Link 
                            href={service.link}
                            className={`inline-flex items-center text-sm font-medium text-${category.color}-600 hover:text-${category.color}-500`}
                          >
                            View Details
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Contact us today for a free consultation and custom quote. Most engagements start with a 30-60 minute call 
                and a detailed proposal within 48 hours.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Phone className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <a href="tel:+13024640950" className="text-blue-100 hover:text-yellow-300 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="text-center">
                  <Mail className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-blue-100 hover:text-yellow-300 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="text-center">
                  <MapPin className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                  <h3 className="font-semibold mb-2">Visit Us</h3>
                  <div className="text-blue-100">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-700 rounded-xl p-6 max-w-4xl mx-auto">
                <h3 className="text-xl font-semibold mb-4">Why Choose Zion Tech Group?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    <span>Real implementations, not mockups</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    <span>Transparent pricing with no hidden fees</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    <span>Fast delivery with industry-leading timelines</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    <span>24/7 support and maintenance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    <span>Proven track record with 100+ clients</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                    <span>Cutting-edge technology and innovation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}