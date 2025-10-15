'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const PricingPage: React.FC = () => {
  const microSaaSPricing = [
    {
      category: "AI Accounting Assistant",
      plans: [
        {
          name: "Starter",
          price: "$99/month",
          features: ["Up to 100 transactions", "Basic reporting", "Email support"],
          popular: false
        },
        {
          name: "Professional",
          price: "$199/month",
          features: ["Up to 500 transactions", "Advanced analytics", "Priority support", "API access"],
          popular: true
        },
        {
          name: "Enterprise",
          price: "$399/month",
          features: ["Unlimited transactions", "Custom integrations", "Dedicated support", "White-label options"],
          popular: false
        }
      ]
    },
    {
      category: "AI CRM Assistant",
      plans: [
        {
          name: "Starter",
          price: "$79/month",
          features: ["Up to 1,000 contacts", "Basic automation", "Email support"],
          popular: false
        },
        {
          name: "Professional",
          price: "$149/month",
          features: ["Up to 10,000 contacts", "Advanced AI features", "Priority support", "API access"],
          popular: true
        },
        {
          name: "Enterprise",
          price: "$299/month",
          features: ["Unlimited contacts", "Custom integrations", "Dedicated support", "White-label options"],
          popular: false
        }
      ]
    },
    {
      category: "AI Content Generation Pro",
      plans: [
        {
          name: "Starter",
          price: "$199/month",
          features: ["10,000 words/month", "Basic templates", "Email support"],
          popular: false
        },
        {
          name: "Professional",
          price: "$399/month",
          features: ["50,000 words/month", "Advanced AI models", "Priority support", "API access"],
          popular: true
        },
        {
          name: "Enterprise",
          price: "$799/month",
          features: ["Unlimited words", "Custom AI training", "Dedicated support", "White-label options"],
          popular: false
        }
      ]
    }
  ];

  const aiServicesPricing = [
    {
      service: "Machine Learning Models",
      price: "Starting at $3,500/month",
      features: ["Custom algorithm development", "Real-time model training", "A/B testing framework", "Model performance monitoring"]
    },
    {
      service: "Natural Language Processing",
      price: "Starting at $2,800/month",
      features: ["Sentiment analysis", "Text classification", "Language translation", "Conversational AI"]
    },
    {
      service: "Computer Vision",
      price: "Starting at $4,200/month",
      features: ["Image classification", "Object detection", "Facial recognition", "OCR processing"]
    },
    {
      service: "Predictive Analytics",
      price: "Starting at $3,000/month",
      features: ["Time series forecasting", "Demand prediction", "Risk assessment", "Anomaly detection"]
    },
    {
      service: "AI Automation",
      price: "Starting at $2,500/month",
      features: ["Process automation", "Workflow optimization", "Intelligent routing", "Decision automation"]
    },
    {
      service: "AI Consulting",
      price: "Starting at $1,500/month",
      features: ["AI strategy development", "Technology assessment", "Implementation planning", "ROI analysis"]
    }
  ];

  const itServicesPricing = [
    {
      service: "Cloud Infrastructure",
      price: "Starting at $1,500/month",
      features: ["Scalable architecture", "High availability", "Security compliance", "Cost optimization"]
    },
    {
      service: "Cybersecurity Solutions",
      price: "Starting at $2,200/month",
      features: ["Threat detection", "Vulnerability assessment", "Security monitoring", "Incident response"]
    },
    {
      service: "IT Consulting",
      price: "Starting at $1,200/month",
      features: ["Technology assessment", "Strategic planning", "Vendor selection", "Implementation guidance"]
    },
    {
      service: "Network Solutions",
      price: "Starting at $1,800/month",
      features: ["Network design", "Security implementation", "Performance optimization", "Monitoring and maintenance"]
    },
    {
      service: "Data Management",
      price: "Starting at $2,000/month",
      features: ["Data storage", "Data processing", "Analytics and reporting", "Data security"]
    },
    {
      service: "IT Support",
      price: "Starting at $1,000/month",
      features: ["24/7 support", "Remote assistance", "System maintenance", "Software updates"]
    },
    {
      service: "Cloud Migration",
      price: "Starting at $5,000",
      features: ["Zero-downtime migration", "Automated migration tools", "Data integrity verification", "Performance optimization"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for our AI and IT services. Choose the perfect plan for your business needs with flexible options and enterprise solutions." />
        <meta name="keywords" content="pricing, AI services pricing, IT services pricing, micro SaaS pricing, cloud services pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All our services come with flexible pricing 
              options and enterprise solutions tailored to your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Custom Quote
              </Link>
              <Link 
                to="/demo" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Micro SaaS Pricing */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Micro SaaS Solutions
            </h2>
            {microSaaSPricing.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">{category.category}</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {category.plans.map((plan, planIndex) => (
                    <div key={planIndex} className={`bg-white border-2 rounded-lg p-8 ${plan.popular ? 'border-blue-500 relative' : 'border-gray-200'}`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                            Most Popular
                          </span>
                        </div>
                      )}
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                      <div className="mb-6">
                        <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-500">/month</span>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircleIcon className="w-5 h-5 text-blue-500 mr-3" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link 
                        to="/contact" 
                        className={`w-full block text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                          plan.popular 
                            ? 'bg-blue-600 text-white hover:bg-blue-700' 
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                      >
                        Get Started
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              AI Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServicesPricing.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.service}</h3>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              IT Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServicesPricing.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.service}</h3>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We offer custom enterprise solutions tailored to your specific needs. 
              Contact us for a personalized quote and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Get Custom Quote
              </Link>
              <Link 
                to="/demo" 
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium"
              >
                Schedule Consultation
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-blue-100">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;