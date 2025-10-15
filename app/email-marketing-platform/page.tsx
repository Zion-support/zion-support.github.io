import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Shield, Database } from 'lucide-react';import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import EnhancedSEO from '../components/EnhancedSEO';

const EmailMarketingPlatformPage = () => {
  const features = [
    {
      title: "Drag & Drop Email Builder",
      description: "Create stunning emails with our intuitive drag-and-drop email builder",
      icon: <Mail className="w-8 h-8" />,
      benefits: ["Pre-built templates", "Custom designs", "Mobile responsive", "A/B testing"]
    },
    {
      title: "Advanced Segmentation",
      description: "Target the right audience with powerful segmentation and personalization",
      icon: <Target className="w-8 h-8" />,
      benefits: ["Behavioral targeting", "Demographic filters", "Custom segments", "Dynamic content"]
    },
    {
      title: "Automation Workflows",
      description: "Create sophisticated email automation workflows to nurture leads",
      icon: <div className="w-6 h-6 bg-yellow-500 rounded" />,
      benefits: ["Welcome series", "Drip campaigns", "Abandoned cart", "Birthday emails"]
    },
    {
      title: "Analytics & Reporting",
      description: "Track performance with detailed analytics and actionable insights",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Open rates", "Click tracking", "Revenue attribution", "ROI analysis"]
    },
    {
      title: "List Management",
      description: "Manage your subscriber lists with advanced tools and compliance features",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Import/Export", "List cleaning", "GDPR compliance", "Unsubscribe management"]
    },
    {
      title: "Integration Hub",
      description: "Connect with your favorite tools for seamless data flow and automation",
      icon: <Database className="w-8 h-8" />,
      benefits: ["CRM integration", "E-commerce platforms", "Analytics tools", "API access"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$39",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 subscribers",
        "Unlimited emails",
        "Basic templates",
        "Email support",
        "Mobile app access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Ideal for growing businesses and marketers",
      features: [
        "Up to 10,000 subscribers",
        "Advanced automation",
        "Custom templates",
        "Priority support",
        "A/B testing",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited subscribers",
        "Advanced automation",
        "Custom integrations",
        "Dedicated support",
        "Advanced security",
        "Custom development"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Increase Engagement",
      description: "Boost email engagement rates by up to 50% with personalization",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Save Time",
      description: "Automate your email marketing and save hours every week",
      icon: <div className="w-6 h-6 bg-yellow-500 rounded" />
    },
    {
      title: "Better ROI",
      description: "Track and optimize your email marketing ROI with detailed analytics",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Easy to Use",
      description: "Intuitive interface that makes email marketing accessible to everyone",
      icon: <div className="w-6 h-6 bg-purple-500 rounded" />
    }
  ];

  return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Email Marketing Platform - Zion Tech Group | Advanced Email Marketing & Automation"
        description="Powerful email marketing platform with drag-and-drop builder, automation workflows, _advanced segmentation, and analytics. Boost your email marketing ROI."
        keywords="email marketing platform, _email automation, _email builder, _email segmentation, _email analytics, marketing automation"
        canonical="https://ziontechgroup.com/email-marketing-platform"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Email Marketing Platform
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Create, _send, and track email campaigns that drive results. Our comprehensive platform 
            makes email marketing easy and effective for businesses of all sizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<div className="w-6 h-6 bg-blue-500 rounded" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<div className="w-6 h-6 bg-indigo-500 rounded" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Powerful Email Marketing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Everything you need to create, _send, and optimize your email campaigns.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (<FuturisticCard key={index} className="h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                </div>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Choose the plan that fits your business size and email marketing needs. No hidden fees, no surprises.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <FuturisticCard key={index} className={`h-full ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="sm"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Email Marketing Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Join thousands of businesses who have transformed their email marketing with our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Start your free trial today and see how our email marketing platform can boost your ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<div className="w-6 h-6 bg-blue-500 rounded" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<div className="w-6 h-6 bg-indigo-500 rounded" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default EmailMarketingPlatformPage;