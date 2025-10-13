import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  CpuChipIcon, 
  ChartBarIcon, 
  ShieldCheckIcon, 
  CogIcon,
  LightBulbIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function AIServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Services - Zion Tech Group",
    "description": "Comprehensive AI services including machine learning, natural language processing, computer vision, and predictive analytics.",
    "url": "https://ziontechgroup.com/ai-services",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "299",
      "priceCurrency": "USD"
    }
  };

  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Strategy & Consulting',
      description: 'Develop comprehensive AI strategies tailored to your business objectives and industry requirements.',
      features: ['AI Readiness Assessment', 'Technology Roadmap', 'ROI Analysis', 'Implementation Planning'],
      price: 'Starting at $299/month'
    },
    {
      icon: ChartBarIcon,
      title: 'Machine Learning Solutions',
      description: 'Build and deploy custom machine learning models that solve your specific business challenges.',
      features: ['Custom Model Development', 'Data Pipeline Design', 'Model Training & Optimization', 'Production Deployment'],
      price: 'Starting at $499/month'
    },
    {
      icon: LightBulbIcon,
      title: 'Natural Language Processing',
      description: 'Implement advanced NLP solutions for text analysis, sentiment analysis, and conversational AI.',
      features: ['Text Classification', 'Sentiment Analysis', 'Language Translation', 'Chatbot Development'],
      price: 'Starting at $399/month'
    },
    {
      icon: CogIcon,
      title: 'Computer Vision',
      description: 'Develop computer vision applications for image recognition, object detection, and visual analytics.',
      features: ['Image Classification', 'Object Detection', 'Facial Recognition', 'Visual Search'],
      price: 'Starting at $599/month'
    },
    {
      icon: ShieldCheckIcon,
      title: 'AI Security & Compliance',
      description: 'Ensure your AI systems are secure, compliant, and ethically designed.',
      features: ['AI Security Audits', 'Bias Detection', 'Privacy Protection', 'Compliance Monitoring'],
      price: 'Starting at $399/month'
    },
    {
      icon: ArrowRightIcon,
      title: 'AI Integration Services',
      description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.',
      features: ['API Development', 'System Integration', 'Data Migration', 'Performance Optimization'],
      price: 'Starting at $349/month'
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "Basic AI consultation",
        "Simple ML models",
        "Email support",
        "5 hours of development/month"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "per month",
      description: "Ideal for growing businesses with AI needs",
      features: [
        "Advanced AI solutions",
        "Custom ML models",
        "Priority support",
        "20 hours of development/month",
        "Monthly strategy sessions"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "per month",
      description: "For large organizations with complex AI requirements",
      features: [
        "Full AI suite",
        "Custom development",
        "24/7 dedicated support",
        "Unlimited development hours",
        "Dedicated AI team",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOHead 
        title="AI Services - Zion Tech Group"
        description="Comprehensive AI services including machine learning, natural language processing, computer vision, and predictive analytics."
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with our comprehensive AI services. From strategy and consulting 
              to implementation and optimization, we help you harness the power of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200">
                Get Started
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-gray-900 transition-colors duration-200">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to accelerate your digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <service.icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-purple-600">{service.price}</span>
                  <button className="text-purple-600 hover:text-purple-800 font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your AI Service Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing options to match your AI needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white rounded-xl shadow-lg p-8 ${tier.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <StarIcon className="h-4 w-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                  tier.popular 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Let our AI experts help you identify opportunities and implement solutions that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-purple-600 bg-white hover:bg-gray-100 transition-colors duration-200">
              Start Your AI Journey
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-lg text-white hover:bg-white hover:text-purple-600 transition-colors duration-200">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}