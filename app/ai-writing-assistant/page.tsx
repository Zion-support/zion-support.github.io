'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, PenTool, FileText, Zap, Brain, Target, Users, BarChart, Clock, Shield, Sparkles } from 'lucide-react';

const AIWritingAssistantPage: React.FC = () => {
  const features = [
    {
      icon: <PenTool className="w-8 h-8 text-cyan-400" />,
      title: "AI-Powered Writing",
      description: "Generate high-quality content using advanced AI that understands context and tone."
    },
    {
      icon: <FileText className="w-8 h-8 text-blue-400" />,
      title: "50+ Templates",
      description: "Pre-built templates for blogs, emails, reports, social media, and more."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "One-Click Generation",
      description: "Create professional content in seconds with our intelligent writing engine."
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "Smart Editing",
      description: "AI-powered editing suggestions for grammar, style, and clarity improvements."
    },
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: "SEO Optimization",
      description: "Automatically optimize content for search engines and better rankings."
    },
    {
      icon: <Users className="w-8 h-8 text-red-400" />,
      title: "Team Collaboration",
      description: "Share and collaborate on content with your team in real-time."
    }
  ];

  const useCases = [
    {
      title: "Blog Writing",
      description: "Create engaging blog posts that drive traffic and engage your audience.",
      icon: "📝",
      examples: ["How-to guides", "Industry insights", "Product reviews", "News articles"]
    },
    {
      title: "Email Marketing",
      description: "Write compelling email campaigns that convert prospects into customers.",
      icon: "📧",
      examples: ["Newsletters", "Promotional emails", "Follow-up sequences", "Welcome series"]
    },
    {
      title: "Social Media",
      description: "Generate engaging social media content across all platforms.",
      icon: "📱",
      examples: ["Facebook posts", "Twitter updates", "LinkedIn articles", "Instagram captions"]
    },
    {
      title: "Business Documents",
      description: "Create professional business documents and reports.",
      icon: "📊",
      examples: ["Proposals", "Reports", "Presentations", "Case studies"]
    }
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "month",
      description: "Perfect for trying out our AI writing assistant",
      features: [
        "5 AI-generated articles per month",
        "Basic templates",
        "Standard support",
        "Basic editing tools"
      ],
      cta: "Start Free",
      popular: false
    },
    {
      name: "Starter",
      price: "$29",
      period: "month",
      description: "Ideal for individual content creators",
      features: [
        "50 AI-generated articles per month",
        "All templates",
        "Priority support",
        "Advanced editing tools",
        "SEO optimization"
      ],
      cta: "Get Started",
      popular: true
    },
    {
      name: "Professional",
      price: "$79",
      period: "month",
      description: "Perfect for small teams and agencies",
      features: [
        "Unlimited AI-generated articles",
        "All templates",
        "Priority support",
        "Advanced editing tools",
        "SEO optimization",
        "Team collaboration",
        "Brand voice training"
      ],
      cta: "Get Started",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Content Marketing Manager",
      content: "This AI writing assistant has revolutionized our content creation process. We're producing 3x more content with better quality.",
      rating: 5
    },
    {
      name: "Mike Chen",
      title: "Blogger & Entrepreneur",
      content: "The quality of AI-generated content is incredible. It saves me hours every week and the SEO optimization is spot-on.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      title: "Marketing Director",
      content: "Our team productivity has increased dramatically. The AI understands our brand voice and creates content that resonates with our audience.",
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
              AI <span className="text-cyan-400">Writing Assistant</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Create compelling content in seconds with our advanced AI writing assistant. 
              Generate blogs, emails, social media posts, and more with professional quality and SEO optimization.
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
                Try Demo
              </Link>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10x</div>
              <div className="text-gray-300">Faster Writing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
              <div className="text-gray-300">Templates</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-gray-300">Quality Score</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">100k+</div>
              <div className="text-gray-300">Articles Created</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful AI Writing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI writing assistant combines advanced natural language processing 
              with creative intelligence to produce high-quality content that engages and converts.
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

      {/* Use Cases Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Content for Every Need
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're writing blogs, emails, or social media content, 
              our AI assistant adapts to your specific needs and style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-lg text-center hover:bg-slate-800/70 transition-colors duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {useCase.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex}>• {example}</li>
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
              Start with our free plan and upgrade as your content needs grow. 
              All plans include our core AI writing capabilities.
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
                  href="/contact"
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
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of content creators, marketers, and businesses 
              who trust our AI writing assistant for their content needs.
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
            Ready to Transform Your Writing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start creating better content faster with our AI writing assistant. 
            Join thousands of users who are already saving time and improving their content quality.
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

export default AIWritingAssistantPage;