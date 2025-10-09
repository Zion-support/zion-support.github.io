'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, PenTool, Image, Video, FileText, Zap, Brain, Target, Users, BarChart, Globe } from 'lucide-react';

const AIContentStudioPage: React.FC = () => {
  const features = [
    {
      icon: <PenTool className="w-8 h-8 text-cyan-400" />,
      title: "AI Writing Assistant",
      description: "Generate high-quality content for blogs, social media, emails, and more with advanced AI."
    },
    {
      icon: <Image className="w-8 h-8 text-blue-400" />,
      title: "AI Image Generation",
      description: "Create stunning visuals and graphics using AI-powered image generation technology."
    },
    {
      icon: <Video className="w-8 h-8 text-green-400" />,
      title: "Video Creation",
      description: "Produce engaging videos with AI-powered editing, voiceovers, and automated production."
    },
    {
      icon: <FileText className="w-8 h-8 text-yellow-400" />,
      title: "Content Templates",
      description: "Access 100+ professionally designed templates for all types of content and campaigns."
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: "One-Click Publishing",
      description: "Publish content directly to social media platforms, blogs, and websites with one click."
    },
    {
      icon: <Brain className="w-8 h-8 text-red-400" />,
      title: "Brand Voice Training",
      description: "Train AI to match your brand voice and maintain consistency across all content."
    }
  ];

  const contentTypes = [
    {
      title: "Blog Content",
      description: "Create engaging blog posts, articles, and long-form content that drives traffic.",
      icon: "📝",
      features: ["SEO optimization", "Topic research", "Content outlines", "Proofreading"]
    },
    {
      title: "Social Media",
      description: "Generate posts, captions, and stories for all major social media platforms.",
      icon: "📱",
      features: ["Platform optimization", "Hashtag suggestions", "Visual content", "Scheduling"]
    },
    {
      title: "Email Marketing",
      description: "Create compelling email campaigns, newsletters, and automated sequences.",
      icon: "📧",
      features: ["Subject line optimization", "Personalization", "A/B testing", "Deliverability"]
    },
    {
      title: "Video Content",
      description: "Produce videos, animations, and multimedia content for all platforms.",
      icon: "🎥",
      features: ["Script generation", "Voice synthesis", "Video editing", "Thumbnail creation"]
    }
  ];

  const pricingPlans = [
    {
      name: "Creator",
      price: "$299",
      period: "month",
      description: "Perfect for individual content creators and freelancers",
      features: [
        "Unlimited content generation",
        "All content types",
        "Basic templates",
        "Email support",
        "Mobile app"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Studio",
      price: "$599",
      period: "month",
      description: "Ideal for small teams and agencies",
      features: [
        "Everything in Creator",
        "Team collaboration",
        "Advanced templates",
        "Priority support",
        "Brand voice training",
        "Analytics dashboard"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "month",
      description: "Comprehensive solution for large organizations",
      features: [
        "Everything in Studio",
        "Unlimited users",
        "Custom integrations",
        "Dedicated support",
        "White-label options",
        "API access"
      ],
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Content Marketing Manager, TechCorp",
      content: "AI Content Studio has revolutionized our content creation process. We're producing 5x more content with better quality and engagement.",
      rating: 5
    },
    {
      name: "Michael Chen",
      title: "Creative Director, AgencyXYZ",
      content: "The AI image generation is incredible. We can create custom visuals for any campaign in minutes instead of hours. It's a game-changer.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      title: "Social Media Manager, BrandCo",
      content: "Our social media engagement has increased by 200% since using AI Content Studio. The content is more engaging and perfectly optimized for each platform.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-cyan-400">Content Studio</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Create stunning content at scale with our all-in-one AI content studio. 
              Generate text, images, videos, and more with professional quality and brand consistency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                href="#demo"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">5x</div>
              <div className="text-gray-300">Faster Creation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">100+</div>
              <div className="text-gray-300">Templates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">200%</div>
              <div className="text-gray-300">More Engagement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">AI-Powered</div>
              <div className="text-gray-300">Quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Content Creation Suite
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Content Studio combines multiple content creation tools into one powerful platform, 
              making it easy to create professional content at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-colors duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Content for Every Platform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create optimized content for every platform and channel with specialized tools 
              and templates designed for maximum engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contentTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-lg text-center hover:bg-slate-800/70 transition-colors duration-300">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our free trial and scale as your content needs grow. 
              All plans include our core AI content creation features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-700/50 p-8 rounded-lg ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="bg-cyan-400 text-slate-900 text-sm font-semibold px-4 py-2 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.cta === "Contact Sales" ? "/contact" : "/contact"}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    plan.popular
                      ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                      : 'bg-slate-600 hover:bg-slate-500 text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how content creators, marketers, and businesses are using AI Content Studio 
              to create better content faster and drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Amazing Content?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of creators using AI Content Studio to produce professional content at scale. 
            Start your free trial today and see the difference AI can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIContentStudioPage;