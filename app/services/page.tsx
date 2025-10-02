import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Brain, Zap, Shield, Cloud, BarChart3, Users, Target, Globe, Database, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | Zion Tech Group - AI, Micro SaaS, and IT Solutions',
  description: 'Comprehensive AI services, micro SaaS solutions, and IT consulting. Transform your business with cutting-edge technology and automation.',
  keywords: 'AI services, micro SaaS, IT consulting, cloud migration, DevOps, enterprise software, automation',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive technology solutions designed to accelerate your digital transformation 
            and drive business growth.
          </p>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {/* AI Services */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">AI Services</h3>
            <p className="text-gray-600 mb-4">
              Advanced artificial intelligence solutions including machine learning, 
              natural language processing, and predictive analytics.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-gray-700">
              <li>• Machine Learning Models</li>
              <li>• Natural Language Processing</li>
              <li>• Predictive Analytics</li>
              <li>• Computer Vision</li>
            </ul>
            <Link 
              href="/services/ai-services" 
              className="text-blue-600 font-semibold hover:text-blue-700"
            >
              Learn More →
            </Link>
          </div>

          {/* Micro SaaS */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Micro SaaS</h3>
            <p className="text-gray-600 mb-4">
              Specialized software-as-a-service solutions designed for specific business 
              needs with rapid deployment and scalability.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-gray-700">
              <li>• AI Content Optimization Suite</li>
              <li>• Lead Scoring API</li>
              <li>• Financial Forecasting</li>
              <li>• Inventory Management</li>
            </ul>
            <Link 
              href="/services/micro-saas" 
              className="text-purple-600 font-semibold hover:text-purple-700"
            >
              Learn More →
            </Link>
          </div>

          {/* IT Services */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">IT Services</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive IT consulting and implementation services including cloud 
              migration, DevOps, and cybersecurity solutions.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-gray-700">
              <li>• Cloud Migration</li>
              <li>• DevOps Automation</li>
              <li>• Cybersecurity</li>
              <li>• Data Analytics</li>
            </ul>
            <Link 
              href="/services/it-services" 
              className="text-green-600 font-semibold hover:text-green-700"
            >
              Learn More →
            </Link>
          </div>

          {/* Cloud Solutions */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
              <Cloud className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Cloud Solutions</h3>
            <p className="text-gray-600 mb-4">
              Scalable cloud infrastructure and platform solutions for modern 
              enterprise applications and data management.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-gray-700">
              <li>• AWS/Azure Migration</li>
              <li>• Container Orchestration</li>
              <li>• Serverless Architecture</li>
              <li>• Cloud Security</li>
            </ul>
            <Link 
              href="/services/cloud-solutions" 
              className="text-cyan-600 font-semibold hover:text-cyan-700"
            >
              Learn More →
            </Link>
          </div>

          {/* Data Analytics */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Data Analytics</h3>
            <p className="text-gray-600 mb-4">
              Advanced data analytics and business intelligence solutions to 
              transform raw data into actionable insights.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-gray-700">
              <li>• Business Intelligence</li>
              <li>• Data Visualization</li>
              <li>• Predictive Modeling</li>
              <li>• Real-time Analytics</li>
            </ul>
            <Link 
              href="/services/data-analytics" 
              className="text-orange-600 font-semibold hover:text-orange-700"
            >
              Learn More →
            </Link>
          </div>

          {/* Enterprise Solutions */}
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold mb-3">Enterprise Solutions</h3>
            <p className="text-gray-600 mb-4">
              Custom enterprise software solutions designed to streamline operations 
              and enhance productivity across your organization.
            </p>
            <ul className="space-y-2 mb-6 text-sm text-gray-700">
              <li>• Custom Software Development</li>
              <li>• Enterprise Integration</li>
              <li>• Workflow Automation</li>
              <li>• Digital Transformation</li>
            </ul>
            <Link 
              href="/services/enterprise-solutions" 
              className="text-indigo-600 font-semibold hover:text-indigo-700"
            >
              Learn More →
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Let's discuss how our services can help transform your business and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              href="/case-studies" 
              className="border border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
import { services, serviceCategories } from './services-data';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  BarChart3,
  Brain,
  Cpu,
  Cloud,
  Database,
  Lock,
  TrendingUp,
  Award,
  Target,
  Rocket,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Headphones
} from 'lucide-react';

export const metadata = {
  title: 'Services — Zion Tech Group Revolutionary AI & IT Solutions',
  description: 'Comprehensive AI services including Quantum Computing, Autonomous Enterprise Systems, AI ROI Optimization, and cutting-edge technology solutions.',
  keywords: 'AI services, quantum computing, autonomous enterprise, AI ROI optimization, enterprise AI solutions, AI transformation services',
  openGraph: {
    title: 'Services — Zion Tech Group Revolutionary AI & IT Solutions',
    description: 'Comprehensive AI services including Quantum Computing, Autonomous Enterprise Systems, AI ROI Optimization, and cutting-edge technology solutions.',
    type: 'website',
    url: 'https://ziontechgroup.com/services',
    images: [
      {
        url: '/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group AI Services - Revolutionary Solutions',
      },
    ],
  },
};

export default function ServicesPage() {
  const groupedServices = services.reduce<Record<string, typeof services>>((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Revolutionary AI, IT & Micro SaaS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge AI solutions, comprehensive IT services, and innovative micro SaaS platforms. 
            From Fortune 500 enterprises to growing startups, we deliver measurable results and immediate ROI.
          </p>
          
          {/* Contact Information Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-8">
            <h2 className="text-2xl font-bold mb-6">Ready to Get Started? Contact Us Today!</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 mb-3" />
                <h4 className="font-bold mb-2">Call Us</h4>
                <a href="tel:+13024640950" className="text-lg font-semibold hover:underline">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 mb-3" />
                <h4 className="font-bold mb-2">Email Us</h4>
                <a href="mailto:kleber@ziontechgroup.com" className="text-lg font-semibold hover:underline">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 mb-3" />
                <h4 className="font-bold mb-2">Visit Us</h4>
                <div className="text-lg font-semibold">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">AI & IT Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">$2M+</div>
              <div className="text-gray-600">Average Client Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of AI, IT, and micro SaaS solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category) => (
              <div key={category.name} className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="text-5xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="text-sm text-blue-600 font-semibold">
                    {category.count} Solutions Available
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {Object.entries(groupedServices).map(([category, categoryServices]) => (
            <div key={category} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{category}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {categoryServices.length} innovative solutions designed to transform your business
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryServices.map((service) => (
                  <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                    <div className="text-center mb-6">
                      <div className="text-5xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                    </div>
                    
                    {/* Pricing & ROI */}
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-gray-600">Our Price:</span>
                        <span className="text-lg font-bold text-blue-600">{service.pricing}</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-gray-600">Market Price:</span>
                        <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-gray-600">ROI:</span>
                        <span className="text-sm font-bold text-green-600">{service.roi}</span>
                      </div>
                    </div>
                    
                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-700 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.benefits.slice(0, 4).map((benefit, index) => (
                          <div key={index} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Implementation Info */}
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-6">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.implementationTime}
                      </div>
                      <div className="flex items-center">
                        <Headphones className="w-4 h-4 mr-1" />
                        {service.supportLevel}
                      </div>
                    </div>
                    
                    <Link 
                      href={`/services/${service.slug}`} 
                      className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      Learn More & Get Started
                      <ArrowRight className="inline w-4 h-4 ml-2" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ companies already using our solutions to drive growth and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Get Started Today
              <Rocket className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/case-studies" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              <span>ziontechgroup.com</span>
            </div>
            <div className="flex items-center">
              <span>📧 kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center">
              <span>📞 +1 302 464 0950</span>
            </div>
            <div className="flex items-center">
              <span>📍 364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>
    </div>
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-06a2
  );
}