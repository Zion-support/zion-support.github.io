import React from 'react';
import Link from 'next/link';
import FeatureCard from '../../components/FeatureCard';
import PricingTier from '../../components/PricingTier';
import TestimonialCard from '../../components/TestimonialCard';

export const metadata = {
  title: 'AI-Powered CRM Platform | Zion Tech Group',
  description: 'Revolutionary CRM with AI-powered lead scoring, automated follow-ups, predictive analytics, and intelligent sales insights. Boost conversion rates by 40% with our smart CRM solution.',
  keywords: 'AI CRM, customer relationship management, lead scoring, sales automation, predictive analytics, sales intelligence'
};

function FeatureCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function PricingTier({ name, price, features, popular = false }: {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div className={`p-8 rounded-2xl border-2 ${popular ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'} relative`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="text-4xl font-bold text-gray-900 mb-2">
          {price}
          <span className="text-lg font-normal text-gray-600">/month</span>
        </div>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
        popular 
          ? 'bg-blue-600 text-white hover:bg-blue-700' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
      }`}>
        Get Started
      </button>
    </div>
  );
}

function TestimonialCard({ content, author, role, company }: {
  content: string;
  author: string;
  role: string;
  company: string;
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      <p className="text-gray-600 mb-4 italic">"{content}"</p>
      <div>
        <div className="font-semibold text-gray-900">{author}</div>
        <div className="text-sm text-gray-500">{role} at {company}</div>
      </div>
    </div>
  );
}

export default function AIPoweredCRMPage() {
  const features = [
    {
      title: "AI Lead Scoring",
      description: "Automatically score and prioritize leads using machine learning algorithms that analyze behavior patterns and engagement levels.",
      icon: "🎯"
    },
    {
      title: "Predictive Analytics",
      description: "Get insights into customer behavior and sales trends with advanced predictive models that help you make data-driven decisions.",
      icon: "📊"
    },
    {
      title: "Automated Follow-ups",
      description: "Never miss a follow-up with intelligent automation that sends personalized messages at the optimal time for each prospect.",
      icon: "🤖"
    },
    {
      title: "Smart Email Sequences",
      description: "Create and manage sophisticated email campaigns that adapt based on recipient behavior and engagement patterns.",
      icon: "📧"
    },
    {
      title: "Real-time Insights",
      description: "Monitor your sales pipeline in real-time with comprehensive dashboards and customizable reports.",
      icon: "📈"
    },
    {
      title: "Integration Hub",
      description: "Seamlessly connect with your existing tools including email platforms, calendar systems, and marketing automation.",
      icon: "🔗"
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      price: "$99",
      features: [
        "Up to 1,000 contacts",
        "Basic AI lead scoring",
        "Email automation",
        "Standard reporting",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$299",
      features: [
        "Up to 10,000 contacts",
        "Advanced AI features",
        "Predictive analytics",
        "Custom integrations",
        "Priority support",
        "Advanced reporting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      features: [
        "Unlimited contacts",
        "Full AI suite",
        "Custom AI models",
        "White-label options",
        "Dedicated support",
        "Custom development"
      ]
    }
  ];

  const testimonials = [
    {
      content: "The AI lead scoring has increased our conversion rate by 40%. We can now focus on the most promising prospects.",
      author: "Sarah Johnson",
      role: "Sales Director",
      company: "TechCorp"
    },
    {
      content: "The predictive analytics help us forecast sales accurately and plan our resources better. Game changer!",
      author: "Michael Chen",
      role: "VP of Sales",
      company: "GrowthCo"
    },
    {
      content: "The automated follow-ups ensure we never miss an opportunity. Our team productivity has increased significantly.",
      author: "Emily Rodriguez",
      role: "Sales Manager",
      company: "InnovateLabs"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI-Powered CRM Platform
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your sales process with intelligent automation, predictive analytics, and AI-driven insights that boost conversion rates by 40%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started Today
              </Link>
              <Link
                href="#features"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 backdrop-blur-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered CRM platform combines cutting-edge technology with intuitive design to revolutionize your sales process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include our core AI features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <PricingTier
                key={index}
                name={tier.name}
                price={tier.price}
                features={tier.features}
                popular={tier.popular}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about our AI CRM platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                content={testimonial.content}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of companies already using our AI-powered CRM to boost their sales performance.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}