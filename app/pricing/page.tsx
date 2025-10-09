import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Phone, ArrowRight, Mail, ExternalLink, Brain, Zap, Cloud, Rocket, Award } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [billingPeriod, setBillingPeriod] = useState<'month' | 'year'>('month');

  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'support@ziontechgroup.com',
    website: 'ziontechgroup.com'
  };

  const serviceCategories = [
    { id: 'all', name: 'All Services' },
    { id: 'ai', name: 'AI Services' },
    { id: 'micro-saas', name: 'Micro SAAS' },
    { id: 'it', name: 'IT Services' },
    { id: 'emerging-tech', name: 'Emerging Tech' }
  ];

  const services = [
    {
      id: 'ai-marketing',
      name: 'AI Marketing Automation',
      description: 'Automated marketing campaigns with AI-powered personalization and optimization.',
      category: 'ai',
      icon: '🤖',
      popular: true,
      new: false,
      pricing: { starting: 2999, period: 'month', custom: false },
      marketPrice: { min: 2000, max: 5000 },
      features: ['Campaign Automation', 'Personalization', 'A/B Testing', 'Analytics Dashboard'],
      benefits: ['300% ROI Increase', '50% Time Savings'],
      useCases: ['E-commerce', 'SaaS'],
      contact: {
        demo: 'https://demo.ziontechgroup.com/ai-marketing'
      }
    },
    {
      id: 'ai-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent process automation to streamline your business operations.',
      category: 'ai',
      icon: '⚡',
      popular: false,
      new: true,
      pricing: { starting: 1999, period: 'month', custom: false },
      marketPrice: { min: 1500, max: 4000 },
      features: ['Process Automation', 'Smart Routing', 'Exception Handling', 'Real-time Monitoring'],
      benefits: ['80% Efficiency Gain', 'Error Reduction'],
      useCases: ['Manufacturing', 'Healthcare'],
      contact: {
        demo: 'https://demo.ziontechgroup.com/ai-automation'
      }
    },
    {
      id: 'micro-saas-platform',
      name: 'Micro SAAS Platform',
      description: 'Custom micro SAAS solutions built for your specific business needs.',
      category: 'micro-saas',
      icon: '🚀',
      popular: true,
      new: false,
      pricing: { starting: 4999, period: 'month', custom: false },
      marketPrice: { min: 3000, max: 8000 },
      features: ['Custom Development', 'User Management', 'Payment Integration', 'Analytics'],
      benefits: ['Scalable Architecture', 'Quick Deployment'],
      useCases: ['Startups', 'SMBs'],
      contact: {
        demo: 'https://demo.ziontechgroup.com/micro-saas'
      }
    },
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and GCP expertise.',
      category: 'it',
      icon: '☁️',
      popular: false,
      new: false,
      pricing: { starting: 1499, period: 'month', custom: false },
      marketPrice: { min: 1000, max: 3000 },
      features: ['Cloud Migration', 'Auto-scaling', 'Security', 'Monitoring'],
      benefits: ['99.9% Uptime', 'Cost Optimization'],
      useCases: ['Enterprise', 'E-commerce'],
      contact: {
        demo: 'https://demo.ziontechgroup.com/cloud'
      }
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing Solutions',
      description: 'Next-generation quantum computing applications for complex problem solving.',
      category: 'emerging-tech',
      icon: '🔬',
      popular: false,
      new: true,
      pricing: { starting: 0, period: 'one-time', custom: true },
      marketPrice: { min: 50000, max: 200000 },
      features: ['Quantum Algorithms', 'Optimization', 'Simulation', 'Research Support'],
      benefits: ['Exponential Speed', 'Future-Proof'],
      useCases: ['Research', 'Finance'],
      contact: {
        demo: 'https://demo.ziontechgroup.com/quantum'
      }
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare Solutions',
      description: 'AI-powered healthcare applications for diagnosis and treatment optimization.',
      category: 'ai',
      icon: '🏥',
      popular: false,
      new: false,
      pricing: { starting: 7999, period: 'month', custom: false },
      marketPrice: { min: 5000, max: 15000 },
      features: ['Diagnostic AI', 'Treatment Planning', 'Patient Monitoring', 'Compliance'],
      benefits: ['Improved Outcomes', 'Reduced Costs'],
      useCases: ['Hospitals', 'Clinics'],
      contact: {
        demo: 'https://demo.ziontechgroup.com/ai-healthcare'
      }
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  const formatPrice = (pricing: typeof services[0]['pricing']) => {
    if (pricing.custom) {
      return 'Custom Pricing';
    }
    
    let price = pricing.starting;
    if (billingPeriod === 'year' && pricing.period === 'month') {
      price = price * 12 * 0.8; // 20% discount for annual billing
    }
    
    const period = billingPeriod === 'year' && pricing.period === 'month' ? 'year' : pricing.period;
    return `$${Math.round(price).toLocaleString()}/${period === 'month' ? 'mo' : period === 'year' ? 'yr' : 'one-time'}`;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai': return Brain;
      case 'micro-saas': return Zap;
      case 'it': return Cloud;
      case 'emerging-tech': return Rocket;
      default: return Star;
    }
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Transparent pricing for AI and IT solutions. Choose from our comprehensive service offerings with competitive rates." />
        <meta name="keywords" content="AI pricing, IT services pricing, enterprise AI, business automation pricing, technology consulting" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-24">
          {/* Header */}
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Transparent Pricing
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Competitive pricing for all our AI, IT, and Micro SAAS solutions. 
                Choose the perfect plan for your business needs.
              </p>
              
              {/* Contact Info Banner */}
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-white font-medium">{contactInfo.phone}</div>
                      <div className="text-gray-400 text-sm">Call for custom pricing</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-white font-medium">{contactInfo.email}</div>
                      <div className="text-gray-400 text-sm">Email for quotes</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <ExternalLink className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-white font-medium">{contactInfo.website}</div>
                      <div className="text-gray-400 text-sm">Visit our site</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Billing Toggle */}
              <div className="flex items-center justify-center space-x-4 mb-8">
                <span className={`text-sm font-medium ${billingPeriod === 'month' ? 'text-white' : 'text-gray-400'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setBillingPeriod(billingPeriod === 'month' ? 'year' : 'month')}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      billingPeriod === 'year' ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-sm font-medium ${billingPeriod === 'year' ? 'text-white' : 'text-gray-400'}`}>
                  Annual <span className="text-green-400">(20% off)</span>
                </span>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                All Services
              </button>
              {serviceCategories.map((category) => {
                const Icon = getCategoryIcon(category.id);
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{category.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredServices.map((service, index) => {
                const CategoryIcon = getCategoryIcon(service.category);
                return (
                  <div
                    key={service.id}
                    className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 ${
                      service.popular ? 'ring-2 ring-cyan-400' : ''
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-4xl">{service.icon}</div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <CategoryIcon className="w-5 h-5 text-cyan-400" />
                            <span className="text-xs text-cyan-400 font-medium uppercase tracking-wide">
                              {serviceCategories.find(cat => cat.id === service.category)?.name}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mt-1">
                            {service.name}
                          </h3>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        {service.popular && (
                          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs px-2 py-1 rounded-full font-bold flex items-center">
                            <Star className="w-3 h-3 mr-1" />
                            Popular
                          </span>
                        )}
                        {service.new && (
                          <span className="bg-gradient-to-r from-green-400 to-cyan-500 text-black text-xs px-2 py-1 rounded-full font-bold flex items-center">
                            <Zap className="w-3 h-3 mr-1" />
                            New
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>

                    {/* Pricing */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-lg">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-2">
                          {formatPrice(service.pricing)}
                        </div>
                        {service.marketPrice && (
                          <div className="text-sm text-gray-400 mb-2">
                            Market: ${service.marketPrice.min.toLocaleString()}-${service.marketPrice.max.toLocaleString()}
                          </div>
                        )}
                        {billingPeriod === 'year' && service.pricing.period === 'month' && (
                          <div className="text-sm text-green-400 font-medium">
                            Save 20% with annual billing
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="text-xs text-gray-300 flex items-center">
                            <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-green-400 mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        Key Benefits
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.benefits.slice(0, 2).map((benefit, idx) => (
                          <div key={idx} className="text-xs text-gray-300 bg-slate-800/50 rounded px-2 py-1">
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact Actions */}
                    <div className="space-y-3">
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group"
                      >
                        <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Call Now
                      </a>
                      <div className="grid grid-cols-2 gap-2">
                        <a
                          href={`mailto:${contactInfo.email}?subject=Inquiry about ${service.name}`}
                          className="bg-slate-800 text-cyan-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group"
                        >
                          <Mail className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                          Email
                        </a>
                        <a
                          href={service.contact.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-slate-800 text-purple-400 py-2 px-3 rounded-lg font-medium hover:bg-slate-700 transition-all duration-300 flex items-center justify-center text-sm group"
                        >
                          <ExternalLink className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                          Demo
                        </a>
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <h4 className="text-xs font-semibold text-gray-400 mb-2">Perfect For:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.useCases.slice(0, 2).map((useCase, idx) => (
                          <span key={idx} className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enterprise CTA */}
            <div className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Need Custom Solutions?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We offer custom enterprise solutions tailored to your specific needs. 
                Contact us for a personalized quote and consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}?subject=Custom Enterprise Solution Inquiry`}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </a>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PricingPage;
