import Head from 'next/head';
import Link from 'next/link';
import { Search, Filter, ArrowRight, Star, Clock, DollarSign } from 'lucide-react';
import { useState } from 'react';

export default function ServicesCatalog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const services = [
    {
      id: 1,
      name: 'Cloud Cost Guard (FinOps Assistant)',
      category: 'micro-saas',
      description: 'Anomaly detection, rightsizing, forecasting and budget guardrails across AWS/Azure/GCP.',
      pricing: '$299–$1499/month',
      rating: 4.9,
      delivery: '2-4 weeks',
      features: ['Anomaly Detection', 'Cost Optimization', 'Budget Alerts', 'Multi-Cloud Support']
    },
    {
      id: 2,
      name: 'LLM Evaluation & Safety Suite',
      category: 'ai-services',
      description: 'Prompt evaluation, bias/toxicity checks, jailbreak tests and guardrail policies.',
      pricing: '$799–$3500/month',
      rating: 4.8,
      delivery: '3-6 weeks',
      features: ['Bias Detection', 'Safety Testing', 'Prompt Optimization', 'Compliance Monitoring']
    },
    {
      id: 3,
      name: 'Customer Feedback & NPS Micro-App',
      category: 'micro-saas',
      description: 'Embed surveys, analyze sentiment and route issues to the right team automatically.',
      pricing: '$149–$799/month',
      rating: 4.7,
      delivery: '1-3 weeks',
      features: ['Survey Builder', 'Sentiment Analysis', 'Auto-Routing', 'Analytics Dashboard']
    },
    {
      id: 4,
      name: 'API Rate Limiter & Analytics',
      category: 'micro-saas',
      description: 'Intelligent rate limiting, usage analytics, and API monetization for SaaS platforms.',
      pricing: '$199–$999/month',
      rating: 4.6,
      delivery: '2-4 weeks',
      features: ['Rate Limiting', 'Usage Analytics', 'Monetization', 'Security Monitoring']
    },
    {
      id: 5,
      name: 'Smart Document Processing',
      category: 'ai-services',
      description: 'AI-powered OCR, data extraction, and document workflow automation for businesses.',
      pricing: '$399–$1999/month',
      rating: 4.8,
      delivery: '4-8 weeks',
      features: ['OCR Technology', 'Data Extraction', 'Workflow Automation', 'Integration APIs']
    },
    {
      id: 6,
      name: 'Cybersecurity Threat Intelligence',
      category: 'it-services',
      description: 'Real-time threat monitoring, vulnerability assessment, and security incident response.',
      pricing: '$599–$2999/month',
      rating: 4.9,
      delivery: '2-6 weeks',
      features: ['Threat Detection', 'Vulnerability Scanning', 'Incident Response', 'Compliance Reporting']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: services.length },
    { id: 'micro-saas', name: 'Micro SaaS', count: services.filter(s => s.category === 'micro-saas').length },
    { id: 'ai-services', name: 'AI Services', count: services.filter(s => s.category === 'ai-services').length },
    { id: 'it-services', name: 'IT Services', count: services.filter(s => s.category === 'it-services').length }
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>Services Catalog - Zion Tech Group | 350+ Technology Solutions</title>
        <meta name="description" content="Explore our comprehensive catalog of 350+ technology services including micro SaaS products, AI services, and IT solutions. Find the perfect solution for your business needs." />
        <meta name="keywords" content="services catalog, micro SaaS, AI services, IT solutions, technology services, business solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/services-catalog" />
        <meta property="og:title" content="Services Catalog - Zion Tech Group | 350+ Technology Solutions" />
        <meta property="og:description" content="Explore our comprehensive catalog of 350+ technology services including micro SaaS products, AI services, and IT solutions." />
        <meta property="og:url" content="https://ziontechgroup.com/services-catalog" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Services Catalog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive collection of 350+ technology services designed to solve specific business challenges and drive growth.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {service.category.replace('-', ' ').toUpperCase()}
                    </span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium text-gray-700">{service.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.delivery}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {service.pricing}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We offer custom solutions tailored to your specific needs. Contact us to discuss your requirements.
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}