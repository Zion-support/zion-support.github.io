import React from 'react';
import Link from 'next/link';
import { CheckCircle, Star, Users, Zap, Shield, Globe, TrendingUp, Award, Clock, Brain, Cloud, Database, Network, Target, Phone, Mail, ArrowRight } from 'lucide-react';
import SEOHead from '../src/components/seo/SEOHead';

const Pricing = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Pricing - Zion Tech Group",
    "url": "https://ziontechgroup.com/pricing",
    "description": "Transparent pricing for AI services, IT solutions, and micro SaaS development. Enterprise and startup-friendly plans available.",
    "publisher": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  const pricingPlans = [
    {
      name: "Startup",
      price: "$2,999",
      period: "/month",
      description: "Perfect for startups and small businesses",
      features: [
        "AI Content Generation Suite",
        "Basic IT Support",
        "Micro SaaS MVP Development",
        "Email Support",
        "Monthly Performance Reports",
        "Basic Security Implementation"
      ],
      popular: false,
      cta: "Get Started",
      href: "/contact"
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced AI Services",
        "Comprehensive IT Solutions",
        "Custom Micro SaaS Development",
        "Priority Support",
        "Weekly Performance Reports",
        "Advanced Security & Compliance",
        "Dedicated Account Manager",
        "Custom Integrations"
      ],
      popular: true,
      cta: "Most Popular",
      href: "/contact"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations",
      features: [
        "Full AI Suite with Custom Models",
        "Complete IT Infrastructure",
        "Enterprise Micro SaaS Solutions",
        "24/7 Dedicated Support",
        "Real-time Analytics Dashboard",
        "Enterprise Security & Compliance",
        "Dedicated Technical Team",
        "Custom Development & Integration",
        "SLA Guarantees",
        "Training & Documentation"
      ],
      popular: false,
      cta: "Contact Sales",
      href: "/contact"
    }
  ];

  const addOnServices = [
    {
      name: "AI Model Training",
      price: "$1,999",
      description: "Custom AI model training for specific business needs"
    },
    {
      name: "Security Audit",
      price: "$2,499",
      description: "Comprehensive security assessment and recommendations"
    },
    {
      name: "Performance Optimization",
      price: "$1,499",
      description: "System performance analysis and optimization"
    },
    {
      name: "Migration Services",
      price: "$3,999",
      description: "Complete system migration and data transfer"
    }
  ];

  return (
    <>
      <SEOHead
        title="Pricing - Zion Tech Group"
        description="Transparent pricing for AI services, IT solutions, and micro SaaS development. Enterprise and startup-friendly plans available."
        keywords="pricing, AI services pricing, IT solutions cost, micro SaaS development pricing, enterprise pricing"
        structuredData={structuredData}
      />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Transparent <span className="text-blue-600">Pricing</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Choose the perfect plan for your business needs. All plans include our core services with flexible add-ons available.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`rounded-2xl border-2 p-8 relative ${plan.popular ? 'border-blue-500 shadow-lg' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={plan.href} className="block">
                    <div className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-colors ${
                      plan.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}>
                      {plan.cta}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Add-on Services</h2>
              <p className="text-lg text-gray-600">
                Enhance your plan with additional specialized services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOnServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-3">{service.price}</div>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change my plan anytime?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the next billing cycle.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer custom pricing?</h3>
                <p className="text-gray-600">Absolutely! Our Enterprise plan is fully customizable. Contact us to discuss your specific requirements and get a tailored quote.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What's included in support?</h3>
                <p className="text-gray-600">All plans include email support. Professional and Enterprise plans include priority support and dedicated account management.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a setup fee?</h3>
                <p className="text-gray-600">No setup fees for Startup and Professional plans. Enterprise plans may include setup costs depending on complexity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Have questions about our pricing? Our team is here to help you choose the perfect plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Sales
              </Link>
              <Link href="/services" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Services
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Pricing;