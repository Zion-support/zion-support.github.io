import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckIcon, 
  ArrowRightIcon, 
  DocumentTextIcon,
  SparklesIcon,
  ClockIcon,
  GlobeAltIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

export default function AiContentGenerator() {
  const features = [
    "Generate high-quality content in 30+ languages",
    "SEO-optimized content with keyword suggestions",
    "Multiple content types: blogs, social media, ads, emails",
    "AI-powered content templates and frameworks",
    "Plagiarism detection and originality scoring",
    "Brand voice customization and tone adjustment",
    "Content calendar and scheduling tools",
    "Team collaboration and approval workflows"
  ];

  const contentTypes = [
    {
      title: "Blog Posts",
      description: "Long-form articles with SEO optimization",
      price: "$0.10/word",
      icon: "📝"
    },
    {
      title: "Social Media",
      description: "Posts for all major platforms",
      price: "$0.05/post",
      icon: "📱"
    },
    {
      title: "Email Marketing",
      description: "Newsletters and promotional emails",
      price: "$0.15/email",
      icon: "📧"
    },
    {
      title: "Product Descriptions",
      description: "E-commerce product copy",
      price: "$0.08/description",
      icon: "🛍️"
    },
    {
      title: "Ad Copy",
      description: "Google Ads, Facebook, LinkedIn ads",
      price: "$0.20/ad",
      icon: "📢"
    },
    {
      title: "Website Copy",
      description: "Landing pages and web content",
      price: "$0.12/word",
      icon: "🌐"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      description: "Perfect for individuals and small teams",
      features: [
        "10,000 words/month",
        "5 content types",
        "Basic templates",
        "Email support",
        "Standard quality"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "50,000 words/month",
        "All content types",
        "Advanced templates",
        "Priority support",
        "Premium quality",
        "SEO optimization",
        "Brand voice training",
        "Team collaboration"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited words",
        "Custom content types",
        "API access",
        "Dedicated support",
        "Custom integrations",
        "White-label solution",
        "Advanced analytics",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Save 80% Time",
      description: "Generate content 10x faster than manual writing",
      icon: "⚡"
    },
    {
      title: "Increase Engagement",
      description: "AI-optimized content drives 3x more engagement",
      icon: "📈"
    },
    {
      title: "SEO Optimized",
      description: "Built-in SEO tools improve search rankings",
      icon: "🔍"
    },
    {
      title: "Consistent Quality",
      description: "Maintain high standards across all content",
      icon: "✨"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Generator - Zion Tech Group | Automated Content Creation</title>
        <meta name="description" content="Generate high-quality content with AI. Blog posts, social media, emails, and more. 30+ languages, SEO optimization, and brand voice customization. Starting at $19/month." />
        <meta name="keywords" content="AI content generator, automated content creation, blog writing, social media content, SEO content, content marketing" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <DocumentTextIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              AI Content Generator
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Create High-Quality Content in Minutes
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Generate engaging blog posts, social media content, emails, and more with our 
              advanced AI. Support for 30+ languages, SEO optimization, and brand voice 
              customization. Save 80% of your content creation time.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="#demo" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Try Demo
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-sm mb-2">Trusted by 1,000+ content creators</p>
              <div className="flex justify-center items-center gap-8 opacity-60">
                <div className="text-2xl font-bold text-white">HubSpot</div>
                <div className="text-2xl font-bold text-white">Mailchimp</div>
                <div className="text-2xl font-bold text-white">Canva</div>
                <div className="text-2xl font-bold text-white">Buffer</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-pulse delay-500"></div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Content Generator?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful features that make content creation effortless and effective
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Content Types We Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Generate any type of content your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:border-purple-400 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300 mb-4 group-hover:text-white transition-colors">
                  {type.description}
                </p>
                <div className="text-purple-400 font-semibold text-lg">
                  {type.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create amazing content with AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckIcon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your content needs. All plans include 14-day free trial.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-400 ring-2 ring-purple-400/20' 
                  : 'border-white/20 hover:border-purple-400'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                      : 'border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white'
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Content Creation?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Join thousands of content creators already using our AI platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Try Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Need Help Getting Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Our content experts are here to help you create amazing content
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <MapPinIcon className="w-6 h-6 text-purple-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}