import React from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Shield, 
  Heart, 
  Truck, 
  FileText, 
  Wrench, 
  TrendingUp, 
  Star, 
  Check, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  ExternalLink,
  Zap,
  Target,
  Award,
  Users,
  Globe
} from 'lucide-react';
import { REVOLUTIONARY_MICRO_SAAS_SERVICES_2025 } from '../../data/revolutionaryMicroSaasServices2025';

export default function RevolutionaryMicroSaasShowcase() {
  const categories = [
    { name: 'AI Analytics', icon: Brain, color: 'bg-blue-500' },
    { name: 'FinTech', icon: Shield, color: 'bg-green-500' },
    { name: 'HealthTech', icon: Heart, color: 'bg-red-500' },
    { name: 'Supply Chain', icon: Truck, color: 'bg-orange-500' },
    { name: 'Content Marketing', icon: FileText, color: 'bg-purple-500' },
    { name: 'Industrial AI', icon: Wrench, color: 'bg-gray-500' }
  ];

  const stats = [
    { label: 'Total Services', value: '15+', icon: Target },
    { label: 'Average AI Score', value: '94%', icon: Brain },
    { label: 'Customer Rating', value: '4.8/5', icon: Star },
    { label: 'Global Reach', value: '50+ Countries', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6">
            <Brain className="w-4 h-4 mr-2" />
            Revolutionary AI Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary Micro SAAS Services 2025
          </h1>
          <p className="text-indigo-100 text-xl mb-8 max-w-4xl mx-auto">
            Discover our comprehensive suite of 15+ cutting-edge AI-powered micro SAAS solutions. 
            From customer analytics to predictive maintenance, we provide real solutions with proven ROI 
            and market-leading accuracy rates.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <stat.icon className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-indigo-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-gray-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-indigo-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-indigo-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-indigo-400" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <Link 
                href="https://ziontechgroup.com" 
                className="text-indigo-400 hover:text-indigo-300 font-semibold"
              >
                Visit Our Website →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Revolutionary AI Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Each service is designed with cutting-edge AI technology, proven market pricing, 
              and comprehensive support to deliver exceptional value to your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVOLUTIONARY_MICRO_SAAS_SERVICES_2025.map((service) => (
              <div key={service.id} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <div className="flex items-center mb-2">
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                        {service.category}
                      </span>
                      <span className="ml-2 text-sm text-gray-500">{service.subcategory}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-indigo-600">
                      {service.currency}{service.price}
                    </div>
                    <div className="text-sm text-gray-500">/{service.pricingModel}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-indigo-600">{service.aiScore}%</div>
                    <div className="text-xs text-gray-500">AI Score</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="text-lg font-bold text-gray-900">{service.rating}</span>
                    </div>
                    <div className="text-xs text-gray-500">{service.reviewCount} reviews</div>
                  </div>
                </div>

                {/* Market Info */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">Market Price:</span>
                      <span className="font-semibold text-gray-900">{service.marketPrice}</span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">ROI:</span>
                      <span className="font-semibold text-green-600">{service.roi}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Setup Time:</span>
                      <span className="font-semibold text-gray-900">{service.setupTime}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <Link 
                    href={service.website}
                    className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors inline-flex items-center justify-center"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <div className="flex space-x-2">
                    <a 
                      href={`tel:${service.contactPhone}`}
                      className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center justify-center text-sm"
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      Call
                    </a>
                    <a 
                      href={`mailto:${service.contactEmail}`}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center text-sm"
                    >
                      <Mail className="w-4 h-4 mr-1" />
                      Email
                    </a>
                  </div>
                </div>

                {/* Free Trial Badge */}
                {service.freeTrial && (
                  <div className="mt-3 text-center">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {service.trialPeriod} Free Trial
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Our AI Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Zap className="w-6 h-6 text-indigo-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Proven ROI</h3>
              </div>
              <p className="text-gray-600">
                Our services deliver measurable returns on investment, with average ROI of 300%+ within 12 months.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Award className="w-6 h-6 text-indigo-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Market Leading</h3>
              </div>
              <p className="text-gray-600">
                Industry-leading accuracy rates and performance metrics that outperform competitors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Users className="w-6 h-6 text-indigo-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Expert Support</h3>
              </div>
              <p className="text-gray-600">
                24/7 support from AI specialists and dedicated account managers for seamless implementation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Shield className="w-6 h-6 text-indigo-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Enterprise Security</h3>
              </div>
              <p className="text-gray-600">
                SOC 2, ISO 27001, and industry-specific compliance standards for maximum security.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Target className="w-6 h-6 text-indigo-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Quick Setup</h3>
              </div>
              <p className="text-gray-600">
                Fast implementation with most services ready in 1-2 weeks, not months.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Globe className="w-6 h-6 text-indigo-600 mr-3" />
                <h3 className="text-lg font-semibold text-gray-900">Global Scale</h3>
              </div>
              <p className="text-gray-600">
                Serving businesses worldwide with localized support and multi-language capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-indigo-100 text-xl mb-8">
            Join thousands of businesses already using our AI services to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a 
              href="tel:+13024640950"
              className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}