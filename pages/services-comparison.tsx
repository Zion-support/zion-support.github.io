import Head from 'next/head';
import { Check, X, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ServicesComparison() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = [
    {
      id: 'cloud-cost-guard',
      name: 'Cloud Cost Guard',
      category: 'FinOps',
      description: 'Anomaly detection and cost optimization for cloud infrastructure',
      pricing: '$299–$1,499/month',
      features: {
        'Anomaly Detection': true,
        'Cost Optimization': true,
        'Budget Alerts': true,
        'Multi-Cloud Support': true,
        'Real-time Monitoring': true,
        'Custom Dashboards': true,
        'API Integration': true,
        '24/7 Support': true
      },
      pros: ['Immediate cost savings', 'Easy setup', 'Multi-cloud support'],
      cons: ['Requires cloud expertise', 'Monthly subscription']
    },
    {
      id: 'llm-evaluation',
      name: 'LLM Evaluation Suite',
      category: 'AI Safety',
      description: 'Comprehensive evaluation and safety testing for large language models',
      pricing: '$799–$3,500/month',
      features: {
        'Anomaly Detection': false,
        'Cost Optimization': false,
        'Budget Alerts': false,
        'Multi-Cloud Support': false,
        'Real-time Monitoring': true,
        'Custom Dashboards': true,
        'API Integration': true,
        '24/7 Support': true,
        'Bias Detection': true,
        'Safety Testing': true,
        'Prompt Optimization': true,
        'Compliance Monitoring': true
      },
      pros: ['Comprehensive safety testing', 'Regulatory compliance', 'Advanced analytics'],
      cons: ['Higher cost', 'Complex setup', 'Requires AI expertise']
    },
    {
      id: 'customer-feedback',
      name: 'Customer Feedback App',
      category: 'Customer Experience',
      description: 'Automated feedback collection and sentiment analysis platform',
      pricing: '$149–$799/month',
      features: {
        'Anomaly Detection': false,
        'Cost Optimization': false,
        'Budget Alerts': false,
        'Multi-Cloud Support': false,
        'Real-time Monitoring': true,
        'Custom Dashboards': true,
        'API Integration': true,
        '24/7 Support': false,
        'Survey Builder': true,
        'Sentiment Analysis': true,
        'Auto-Routing': true,
        'Analytics Dashboard': true
      },
      pros: ['Easy to use', 'Quick setup', 'Affordable pricing'],
      cons: ['Limited customization', 'Basic analytics', 'No 24/7 support']
    },
    {
      id: 'api-rate-limiter',
      name: 'API Rate Limiter',
      category: 'API Management',
      description: 'Intelligent rate limiting and API monetization platform',
      pricing: '$199–$999/month',
      features: {
        'Anomaly Detection': true,
        'Cost Optimization': false,
        'Budget Alerts': false,
        'Multi-Cloud Support': true,
        'Real-time Monitoring': true,
        'Custom Dashboards': true,
        'API Integration': true,
        '24/7 Support': true,
        'Rate Limiting': true,
        'Usage Analytics': true,
        'Monetization': true,
        'Security Monitoring': true
      },
      pros: ['High performance', 'Developer-friendly', 'Comprehensive analytics'],
      cons: ['Technical complexity', 'Requires API knowledge']
    }
  ];

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const selectedServicesData = services.filter(service => selectedServices.includes(service.id));

  return (
    <>
      <Head>
        <title>Services Comparison - Zion Tech Group</title>
        <meta name="description" content="Compare our technology services side-by-side to find the perfect solution for your business needs." />
        <meta name="keywords" content="services comparison, technology solutions, AI services, micro SaaS comparison" />
        <link rel="canonical" href="https://ziontechgroup.com/services-comparison" />
        <meta property="og:title" content="Services Comparison - Zion Tech Group" />
        <meta property="og:description" content="Compare our technology services side-by-side to find the perfect solution for your business needs." />
        <meta property="og:url" content="https://ziontechgroup.com/services-comparison" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Services <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Comparison</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Compare our services side-by-side to find the perfect solution for your business needs.
            </p>
          </div>

          {/* Service Selection */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Select Services to Compare</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                    selectedServices.includes(service.id)
                      ? 'border-blue-400 bg-blue-500/20'
                      : 'border-white/20 bg-white/5 hover:border-white/40'
                  }`}
                >
                  <h3 className="font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-300 mb-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-medium">{service.pricing}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm">4.8</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          {selectedServices.length > 0 && (
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-12 overflow-x-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Feature Comparison</h2>
              
              <div className="min-w-full">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-4 px-4 text-white font-semibold">Features</th>
                      {selectedServicesData.map((service) => (
                        <th key={service.id} className="text-center py-4 px-4 text-white font-semibold min-w-[200px]">
                          <div>
                            <div className="font-bold">{service.name}</div>
                            <div className="text-sm text-gray-300">{service.pricing}</div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(services[0].features).map((feature) => (
                      <tr key={feature} className="border-b border-white/10">
                        <td className="py-4 px-4 text-white font-medium">{feature}</td>
                        {selectedServicesData.map((service) => (
                          <td key={service.id} className="text-center py-4 px-4">
                            {service.features[feature as keyof typeof service.features] ? (
                              <Check className="w-6 h-6 text-green-400 mx-auto" />
                            ) : (
                              <X className="w-6 h-6 text-red-400 mx-auto" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Detailed Comparison */}
          {selectedServices.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {selectedServicesData.map((service) => (
                <div key={service.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                      {service.category}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Pros</h4>
                    <ul className="space-y-2">
                      {service.pros.map((pro, index) => (
                        <li key={index} className="flex items-center gap-2 text-green-300">
                          <Check className="w-4 h-4" />
                          <span className="text-sm">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Cons</h4>
                    <ul className="space-y-2">
                      {service.cons.map((con, index) => (
                        <li key={index} className="flex items-center gap-2 text-red-300">
                          <X className="w-4 h-4" />
                          <span className="text-sm">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          )}

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Need Help Choosing?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our experts can help you select the right combination of services for your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Get Expert Consultation
              </Link>
              <Link href="/services-catalog" className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Browse All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}