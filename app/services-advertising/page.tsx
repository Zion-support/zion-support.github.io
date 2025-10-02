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
  TrendingUp,
  Award,
  Target,
  Rocket,
  Globe
} from 'lucide-react';
import { comprehensiveServices2026, getServicesByCategory, getPopularServices, getNewServices } from '../../data/comprehensive-services-2026';

export default function ServicesAdvertising() {
  const title = 'Zion Tech Group Services — Revolutionary AI, Micro SaaS & IT Solutions';
  const description = 'Discover our comprehensive portfolio of cutting-edge AI services, innovative micro SaaS solutions, and enterprise IT services. Real implementations with transparent pricing, fast delivery, and proven ROI.';
  
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
        <link rel="canonical" href="https://ziontechgroup.com/services-advertising" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="flex items-center justify-center mb-6">
                <Rocket className="h-12 w-12 text-yellow-300 mr-4" />
                <span className="text-2xl font-bold text-yellow-300">Revolutionary Technology Solutions</span>
              </div>
              <h1 className="text-5xl font-bold tracking-tight sm:text-7xl mb-8">
                Transform Your Business with
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Cutting-Edge AI & Technology
                </span>
              </h1>
              <p className="text-2xl leading-8 text-blue-100 mb-12">
                Discover our comprehensive portfolio of innovative AI services, micro SaaS solutions, and enterprise IT services. 
                Real implementations with transparent pricing, industry-leading delivery times, and proven ROI.
              </p>
              
              {/* Contact Info Prominent */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-6">Ready to Get Started? Contact Us Today!</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Phone className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                    <h3 className="font-semibold mb-2">Call Us Now</h3>
                    <a href="tel:+13024640950" className="text-2xl font-bold text-yellow-300 hover:text-white transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                  <div className="text-center">
                    <Mail className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                    <h3 className="font-semibold mb-2">Email Us</h3>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-lg font-bold text-yellow-300 hover:text-white transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="text-center">
                    <MapPin className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
                    <h3 className="font-semibold mb-2">Visit Us</h3>
                    <div className="text-yellow-300">
                      <div>364 E Main St STE 1008</div>
                      <div>Middletown DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 transform hover:-translate-y-1"
                >
                  Call Now for Free Consultation
                </a>
                <a 
                  href="/comprehensive-services"
                  className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 font-bold py-4 px-8 rounded-xl transition-all duration-300 border-2 border-white/30 hover:border-white/50"
                >
                  View All Services →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver real, innovative solutions that transform businesses and drive measurable results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Expertise</h3>
                <p className="text-gray-600">100+ successful implementations with Fortune 500 companies and startups alike</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real Solutions</h3>
                <p className="text-gray-600">No mockups or demos - we deliver fully functional, production-ready systems</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <Rocket className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
                <p className="text-gray-600">Industry-leading delivery times with 24-48 hour quote response</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
                <DollarSign className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Transparent Pricing</h3>
                <p className="text-gray-600">Clear, upfront pricing with no hidden fees or surprises</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Service Categories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions across multiple domains
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category) => (
                <div key={category.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 bg-${category.color}-100 rounded-2xl flex items-center justify-center mb-6`}>
                    <category.icon className={`h-8 w-8 text-${category.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.id}</h3>
                  <p className="text-gray-600 mb-4">{category.count} innovative services</p>
                  <Link 
                    href="/comprehensive-services"
                    className={`inline-flex items-center text-sm font-medium text-${category.color}-600 hover:text-${category.color}-500`}
                  >
                    Explore Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New Services 2026 */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-green-500 mr-3" />
                <h2 className="text-4xl font-bold text-gray-900">New Services 2026</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Revolutionary new services that push the boundaries of technology and innovation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newServices.slice(0, 6).map((service) => (
                <div key={service.id} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex items-center text-sm text-green-600">
                      <Star className="h-4 w-4 mr-1" />
                      NEW 2026
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.tagline}</p>
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
                      <div className="text-xl font-bold text-blue-600">{service.pricing.starter}</div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.delivery}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      Market average: {service.marketPrice}
                    </div>
                    <a 
                      href={`tel:+13024640950`}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block font-semibold"
                    >
                      Get Quote Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-yellow-500 mr-3" />
                <h2 className="text-4xl font-bold text-gray-900">Most Popular Services</h2>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most requested and highly-rated services that deliver exceptional results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularServices.slice(0, 6).map((service) => (
                <div key={service.id} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl">{service.icon}</div>
                    <div className="flex items-center text-sm text-yellow-600">
                      <Star className="h-4 w-4 mr-1" />
                      POPULAR
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.tagline}</p>
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
                      <div className="text-xl font-bold text-blue-600">{service.pricing.starter}</div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.delivery}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-4">
                      Market average: {service.marketPrice}
                    </div>
                    <a 
                      href={`tel:+13024640950`}
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-center block font-semibold"
                    >
                      Get Quote Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Information */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Transparent Pricing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Clear, upfront pricing with no hidden fees. All prices include setup, training, and 24/7 support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Basic Services</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">$99 - $299</div>
                <div className="text-sm text-gray-600 mb-6">per month</div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ AI Content Generation</li>
                  <li>✓ Email Marketing Automation</li>
                  <li>✓ Social Media Management</li>
                  <li>✓ Basic Analytics</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Professional</h3>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">POPULAR</span>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-4">$399 - $1,299</div>
                <div className="text-sm text-gray-600 mb-6">per month</div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Advanced AI Analytics</li>
                  <li>✓ Workflow Automation</li>
                  <li>✓ CRM Integration</li>
                  <li>✓ Priority Support</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">$2,499 - $15,000</div>
                <div className="text-sm text-gray-600 mb-6">per month</div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Custom AI Solutions</li>
                  <li>✓ Multi-cloud Orchestration</li>
                  <li>✓ 24/7 Dedicated Support</li>
                  <li>✓ Custom Integrations</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Solutions</h3>
                <div className="text-3xl font-bold text-orange-600 mb-4">Contact Us</div>
                <div className="text-sm text-gray-600 mb-6">for pricing</div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Tailored Solutions</li>
                  <li>✓ Industry-specific AI</li>
                  <li>✓ Dedicated Team</li>
                  <li>✓ White-label Options</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-blue-100 rounded-xl p-6 max-w-4xl mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Special Offer: 30% Off First 3 Months</h3>
                <p className="text-gray-700 mb-4">
                  Get 30% off your first 3 months when you sign up for any annual plan. 
                  Includes free setup, training, and 24/7 support.
                </p>
                <a 
                  href="tel:+13024640950"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Call Now: +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of companies that have accelerated their digital transformation with our AI and technology solutions. 
              Get a free consultation and custom quote within 24-48 hours.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <Phone className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-2">Call Us</h3>
                <a href="tel:+13024640950" className="text-2xl font-bold text-yellow-300 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
                <p className="text-blue-100 mt-2">Available 24/7</p>
              </div>
              <div className="text-center">
                <Mail className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-2">Email Us</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-lg font-bold text-yellow-300 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
                <p className="text-blue-100 mt-2">Response within 2 hours</p>
              </div>
              <div className="text-center">
                <MapPin className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                <div className="text-yellow-300">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown DE 19709</div>
                </div>
                <p className="text-blue-100 mt-2">Delaware, USA</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 transform hover:-translate-y-1"
              >
                Call Now for Free Consultation
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 font-bold py-4 px-8 rounded-xl transition-all duration-300 border-2 border-white/30 hover:border-white/50"
              >
                Email Us Your Requirements
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}