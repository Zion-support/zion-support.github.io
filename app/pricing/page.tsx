import React from 'react';
// Metadata handled by React Helmet
import { Link } from 'react-router-dom';

export const metadata: Metadata = {
  title: 'Pricing Plans | Zion Tech Group - Transparent Pricing for AI & IT Services',
  description: 'Transparent pricing for AI services, micro SaaS development, and IT solutions. Choose the perfect plan for your business needs. Starting from $29/month.',
  keywords: 'Zion Tech Group pricing, AI services pricing, micro SaaS pricing, IT services pricing, transparent pricing',
};

export default function PricingPage() {
  const serviceCategories = [
    {
      title: "AI-Powered Content Tools",
      description: "Advanced content optimization and generation tools",
      plans: [
        {
          name: "Starter",
          price: "$29/month",
          features: [
            "HeadlineMaster AI - 100 headlines/month",
            "Basic email subject line optimization",
            "Standard content analysis",
            "Email support"
          ]
        },
        {
          name: "Professional",
          price: "$79/month",
          features: [
            "Unlimited headline generation",
            "Advanced email optimization",
            "Podcast transcription (5 hours/month)",
            "A/B testing capabilities",
            "Priority support"
          ]
        },
        {
          name: "Enterprise",
          price: "$199/month",
          features: [
            "Unlimited everything",
            "Custom AI model training",
            "API access",
            "White-label solutions",
            "Dedicated account manager"
          ]
        }
      ]
    },
    {
      title: "Telemedicine Platform",
      description: "Comprehensive healthcare communication solutions",
      plans: [
        {
          name: "Starter",
          price: "$299/month",
          features: [
            "Up to 100 consultations/month",
            "Basic appointment scheduling",
            "Patient portal",
            "HIPAA compliance",
            "Email support"
          ]
        },
        {
          name: "Professional",
          price: "$799/month",
          features: [
            "Up to 500 consultations/month",
            "Advanced scheduling features",
            "EHR integration",
            "Analytics dashboard",
            "Priority support",
            "Custom branding"
          ]
        },
        {
          name: "Enterprise",
          price: "Custom pricing",
          features: [
            "Unlimited consultations",
            "Multi-location support",
            "Advanced analytics",
            "API integration",
            "Dedicated account manager",
            "Custom development"
          ]
        }
      ]
    },
    {
      title: "Remote Collaboration Suite",
      description: "Complete remote work platform for distributed teams",
      plans: [
        {
          name: "Starter",
          price: "$25/user/month",
          features: [
            "Up to 25 video participants",
            "Basic messaging and file sharing",
            "Simple project management",
            "5GB storage per user",
            "Email support"
          ]
        },
        {
          name: "Professional",
          price: "$45/user/month",
          features: [
            "Up to 100 video participants",
            "Advanced messaging and collaboration",
            "Full project management suite",
            "100GB storage per user",
            "Priority support",
            "Advanced integrations"
          ]
        },
        {
          name: "Enterprise",
          price: "$75/user/month",
          features: [
            "Unlimited video participants",
            "Advanced security and compliance",
            "Custom integrations and APIs",
            "Unlimited storage",
            "Dedicated account manager",
            "Custom training and onboarding"
          ]
        }
      ]
    },
    {
      title: "API Integration Platform",
      description: "Enterprise-grade API management and integration solutions",
      plans: [
        {
          name: "Developer",
          price: "$99/month",
          features: [
            "Up to 10 API endpoints",
            "Basic authentication",
            "1M API calls/month",
            "Email support",
            "Basic monitoring"
          ]
        },
        {
          name: "Professional",
          price: "$499/month",
          features: [
            "Up to 100 API endpoints",
            "Advanced authentication",
            "10M API calls/month",
            "Priority support",
            "Advanced monitoring",
            "Custom connectors"
          ]
        },
        {
          name: "Enterprise",
          price: "Custom pricing",
          features: [
            "Unlimited API endpoints",
            "Enterprise security features",
            "Unlimited API calls",
            "Dedicated support team",
            "Custom monitoring and alerts",
            "White-label solutions"
          ]
        }
      ]
    },
    {
      title: "AI Customer Insights Platform",
      description: "Advanced customer analytics and behavioral intelligence",
      plans: [
        {
          name: "Starter",
          price: "$299/month",
          features: [
            "Up to 10,000 customer profiles",
            "Basic behavioral analytics",
            "Standard sentiment analysis",
            "Monthly reporting",
            "Email support"
          ]
        },
        {
          name: "Professional",
          price: "$799/month",
          features: [
            "Up to 100,000 customer profiles",
            "Advanced behavioral analytics",
            "Real-time sentiment monitoring",
            "Predictive analytics models",
            "Priority support",
            "Custom dashboards"
          ]
        },
        {
          name: "Enterprise",
          price: "Custom pricing",
          features: [
            "Unlimited customer profiles",
            "Advanced AI models",
            "Real-time intelligence",
            "Custom model development",
            "Dedicated account manager",
            "White-label solutions"
          ]
        }
      ]
    }
  ];

  const additionalServices = [
    {
      name: "AI Services Consulting",
      description: "Strategic AI implementation and optimization",
      pricing: "$200/hour",
      features: ["AI strategy development", "Technology assessment", "Implementation planning", "Training and support"]
    },
    {
      name: "Micro SaaS Development",
      description: "Custom micro SaaS application development",
      pricing: "Starting from $15,000",
      features: ["Full-stack development", "UI/UX design", "API integration", "Deployment and maintenance"]
    },
    {
      name: "IT Infrastructure Services",
      description: "Cloud migration, DevOps, and infrastructure management",
      pricing: "Starting from $5,000/month",
      features: ["Cloud architecture design", "DevOps automation", "Security implementation", "24/7 monitoring"]
    },
    {
      name: "Blockchain Solutions",
      description: "Custom blockchain development and smart contracts",
      pricing: "Starting from $25,000",
      features: ["Smart contract development", "DApp creation", "Blockchain integration", "Security auditing"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business needs. All our services come with 
            transparent pricing, no hidden fees, and flexible terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Custom Quote
            </Link>
            <Link 
              href="/contact" 
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        {/* Service Categories */}
        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
              <p className="text-lg text-gray-600">{category.description}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {category.plans.map((plan, planIndex) => (
                <div 
                  key={planIndex} 
                  className={`bg-white rounded-xl shadow-lg p-8 relative ${
                    planIndex === 1 ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`}
                >
                  {planIndex === 1 && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-blue-600 mb-2">{plan.price}</div>
                    {plan.price !== "Custom pricing" && (
                      <p className="text-gray-500 text-sm">Billed monthly</p>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-green-500 mr-3">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                      planIndex === 1
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {plan.price === "Custom pricing" ? 'Contact Sales' : 'Start Free Trial'}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Additional Services */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Additional Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {service.pricing}
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/contact"
                  className="inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Can I change plans anytime?</h3>
              <p className="text-blue-100">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Do you offer custom pricing?</h3>
              <p className="text-blue-100">Absolutely! For enterprise clients with specific needs, we offer custom pricing and tailored solutions. Contact us for a personalized quote.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">What's included in support?</h3>
              <p className="text-blue-100">All plans include email support. Professional and Enterprise plans include priority support, and Enterprise includes dedicated account management.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Are there any setup fees?</h3>
              <p className="text-blue-100">No setup fees for any of our subscription plans. Custom development projects may have separate pricing based on scope and requirements.</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need Help Choosing the Right Plan?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our team of experts is here to help you find the perfect solution for your business needs. 
            Contact us for a free consultation and personalized recommendation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:+13024640950" 
              className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              📞 Call: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              ✉️ Email: kleber@ziontechgroup.com
            </a>
          </div>
          <p className="text-gray-500">
            📍 364 E Main St STE 1008, Middletown, DE 19709
          </p>
        </div>
      </div>
    </div>
  );
}