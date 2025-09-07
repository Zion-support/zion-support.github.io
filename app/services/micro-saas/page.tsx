import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Micro SaaS Development | Zion Tech Group',
  description: 'Complete micro SaaS solutions including productivity tools, automation platforms, analytics dashboards, and specialized business applications. From MVP to scale.',
  keywords: 'micro SaaS, SaaS development, productivity tools, automation platforms, business applications',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Micro SaaS Development | Zion Tech Group',
    description: 'Complete micro SaaS solutions including productivity tools, automation platforms, analytics dashboards, and specialized business applications.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Micro SaaS Development | Zion Tech Group',
    description: 'Complete micro SaaS solutions including productivity tools, automation platforms, analytics dashboards, and specialized business applications.',
  },
};

export default function MicroSaaSPage() {
  const features = [
    {
      title: "Core Features",
      items: [
        "Multi-tenant architecture",
        "Authentication (email, OAuth)",
        "Billing integration (Stripe)",
        "Admin dashboard + analytics",
        "In-app onboarding"
      ]
    },
    {
      title: "Growth Stack",
      items: [
        "SEO-ready marketing site",
        "Blog + documentation",
        "Email campaigns",
        "Referral + affiliate systems"
      ]
    },
    {
      title: "Operations & Reliability",
      items: [
        "CI/CD pipelines",
        "Observability & monitoring",
        "Error budgets & SLOs",
        "On-call setup"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "MVP Sprint",
      price: "$8k–$20k",
      duration: "2–4 weeks",
      features: [
        "MVP scope definition",
        "Stripe billing integration",
        "Basic analytics",
        "Core functionality"
      ]
    },
    {
      name: "Growth",
      price: "$20k–$60k",
      duration: "6–10 weeks",
      features: [
        "SEO + content strategy",
        "CRM + email automation",
        "Advanced analytics",
        "Observability setup"
      ]
    },
    {
      name: "Scale",
      price: "$60k+",
      duration: "Custom timeline",
      features: [
        "Custom roadmap",
        "SRE + security hardening",
        "Multi-region deployment",
        "SLA guarantees"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Micro SaaS Development
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Complete micro SaaS solutions including productivity tools, automation platforms, 
            analytics dashboards, and specialized business applications. From MVP to scale.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Build</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We design, build, launch and operate revenue-generating micro SaaS products end-to-end.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business needs and growth stage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">{plan.price}</div>
                <div className="text-sm text-gray-500 mb-6">{plan.duration}</div>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Your Micro SaaS?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project and create a custom solution that drives real business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}