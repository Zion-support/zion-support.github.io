"use client";
import React from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle, FileText, Clock, Users, Shield } from "lucide-react";

const AIContentGenerationPage: React.FC = () => {
  const features = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "AI-Powered Content Creation",
      description:
        "Generate high-quality, engaging content for blogs, articles, social media, and marketing materials using advanced AI algorithms.",
      benefits: [
        "SEO-optimized content",
        "Multiple content types",
        "Brand voice consistency",
        "Plagiarism-free content",
      ],
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Rapid Content Production",
      description:
        "Create content 10x faster than traditional methods while maintaining quality and relevance to your audience.",
      benefits: [
        "Instant generation",
        "Bulk content creation",
        "Template library",
        "Quick iterations",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Audience Targeting",
      description:
        "Generate content tailored to specific demographics, industries, and customer personas for maximum engagement.",
      benefits: [
        "Persona-based content",
        "Industry-specific tone",
        "Demographic targeting",
        "Engagement optimization",
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      description:
        "Built-in quality checks ensure your content meets professional standards and brand guidelines.",
      benefits: [
        "Grammar checking",
        "Tone analysis",
        "Brand compliance",
        "Quality scoring",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses and content creators",
      features: [
        "1,000 content pieces/month",
        "Basic AI templates",
        "Standard quality checks",
        "Email support",
        "5 team members",
        "Basic analytics",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and marketing teams",
      features: [
        "10,000 content pieces/month",
        "Advanced AI templates",
        "Premium quality checks",
        "Priority support",
        "25 team members",
        "Advanced analytics",
        "API access",
        "Custom templates",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations with complex content needs",
      features: [
        "Unlimited content pieces",
        "Custom AI models",
        "White-label solution",
        "Dedicated support",
        "Unlimited team members",
        "Custom analytics",
        "Full API access",
        "Custom integrations",
        "SLA guarantee",
      ],
      popular: false,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Helmet>
          <title>AI Content Generation | Zion Tech Group</title>
          <meta name="description" content="AI-powered content generation platform for businesses" />
          <meta property="og:title" content="AI Content Generation | Zion Tech Group" />
          <meta property="og:description" content="AI-powered content generation platform for businesses" />
        </Helmet>

        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              AI Content Generation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your content strategy with our advanced AI-powered content
              generation platform. Create engaging, high-quality content at scale
              for blogs, social media, marketing materials, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>10x Faster Content Creation</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>SEO-Optimized Output</span>
              </div>
              <div className="flex items-center text-green-400">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>Brand Voice Consistency</span>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Pricing Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 ${
                    plan.popular ? "ring-2 ring-purple-500" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-purple-500 text-white text-center py-2 px-4 rounded-full text-sm font-semibold mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI content generation platform
              to create better content faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIContentGenerationPage;