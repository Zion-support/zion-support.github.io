'use client',
import React from 'react',
import { PenTool, FileText, Zap, Target, Clock, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin, Brain, Users, BarChart  } from 'lucide-react',
import Link from 'next/link',
const AIWritingAssistantPage: React.FC = React.memo(() => {
  const features = [
    {
      icon: PenTool,
      title: 'AI Content Generation',
      description: 'Generate high-quality articles, blog posts, marketing copy, and social media content using advanced GPT-4 technology.',
      benefit: '10x faster content creation'
    },
    {
      icon: FileText,
      title: 'Multi-Format Support',
      description: 'Create content in any format: blog posts, emails, ads, product descriptions, press releases, and more.',
      benefit: '50+ content templates'
    },
    {
      icon: Zap,
      title: 'Smart Optimization',
      description: 'Automatically optimize content for SEO, readability, and engagement with AI-powered suggestions and improvements.',
      benefit: '40% better engagement rates'
    },
    {
      icon: Target,
      title: 'Brand Voice Training',
      description: 'Train the AI to match your brand voice, tone, and style for consistent messaging across all content.',
      benefit: '100% brand consistency'
    },
    {
      icon: Clock,
      title: 'Real-time Collaboration',
      description: 'Work with your team in real-time with live editing, comments, and version control for seamless collaboration.',
      benefit: '50% faster team workflows'
    },
    {
      icon: Brain,
      title: 'Content Intelligence',
      description: 'Get AI insights on content performance, audience engagement, and optimization opportunities.',
      benefit: 'Data-driven content strategy'
    }
  ]
  const pricingPlans = [
    {
      name: 'Writer',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual creators',
      features: [
        '10,000 words per month',
        'Basic AI writing',
        '5 content templates',
        'Standard support',
        'Basic SEO optimization',
        'Single user account',
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        '50,000 words per month',
        'Advanced AI writing',
        '50+ content templates',
        'Priority support',
        'Advanced SEO tools',
        'Team collaboration',
        'Brand voice training',
        'Content analytics',
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'Premium AI models',
        'Custom templates',
        'Dedicated support',
        'API access',
        'Custom integrations',
        'White-label options',
        'Advanced analytics',
      ],
      popular: false;
    }
  ]
  const useCases = [
    {
      title: 'Blog Content',
      description: 'Create engaging blog posts that rank high in search engines and drive traffic to your website.',
      icon: FileText,
      results: '300% increase in organic traffic'
    },
    {
      title: 'Marketing Copy',
      description: 'Generate compelling ad copy, email campaigns, and social media posts that convert.',
      icon: Target,
      results: '45% higher conversion rates'
    },
    {
      title: 'Product Descriptions',
      description: 'Write persuasive product descriptions that highlight benefits and drive sales.',
      icon: Zap,
      results: '60% more product sales'
    },
    {
      title: 'Email Marketing',
      description: 'Create personalized email sequences that nurture leads and increase customer retention.',
      icon: Mail,
      results: '35% higher open rates'
    }
  ]
  const testimonials = [
    {
      name: 'Jessica Martinez',
      company: 'Content Marketing Pro',
      role: 'Content Manager',
      content: 'AI Writing Assistant helped us scale our content production by 500% while maintaining quality. Our blog traffic tripled in 6 months.',
      rating: 5;
    },
    {
      name: 'David Kim',
      company: 'E-commerce Solutions',
      role: 'Marketing Director',
      content: 'The brand voice training feature is incredible. All our content now sounds consistent and professional across all channels.',
      rating: 5;
    },
    {
      name: 'Lisa Thompson',
      company: 'Digital Agency',
      role: 'Creative Director',
      content: 'We can now deliver client content 3x faster. The AI suggestions help us improve our writing and stay ahead of deadlines.',
      rating: 5;
    }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6">
            <PenTool className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Writing Assistant;
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Create Amazing Content 10x Faster;
          </p>
          <p className="text-lg text-gray-500 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your content creation with our AI-powered writing assistant. Generate high-quality;
            blog posts, marketing copy, emails, and more in minutes, not hours. Boost engagement and;
            drive results with intelligent content optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a;
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950;
            </a>
            <Link;
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Free Trial;
            </Link>
          </div>
        </div>
        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-cyan-400 mb-2">10x</div>
            <div className="text-white font-semibold mb-2">Faster Writing</div>
            <div className="text-gray-500 text-sm">Create content in minutes, not hours</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
            <div className="text-white font-semibold mb-2">Better Engagement</div>
            <div className="text-gray-500 text-sm">AI optimization increases reader engagement</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-white font-semibold mb-2">Templates</div>
            <div className="text-gray-500 text-sm">Ready-to-use content templates</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
            <div className="text-white font-semibold mb-2">Brand Consistent</div>
            <div className="text-gray-500 text-sm">Maintain your unique brand voice</div>
          </div>
        </div>
        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Powerful AI Writing Features;
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-500 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">{feature.benefit}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Use Cases Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Perfect for Every Content Need;
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center">
                <useCase.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-500 mb-4 leading-relaxed">{useCase.description}</p>
                <div className="text-cyan-400 font-semibold text-sm">{useCase.results}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Simple, Transparent Pricing;
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${
                plan.popular;
                  ? 'border-cyan-400 scale-105',
                  : 'border-slate-700 hover:border-cyan-500/50'
              }`}>
                {plan.popular && (
                  <div className="bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4">
                    Most Popular;
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-500 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-500">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button role="button" className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular;
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover: from-cyan-500 hover:to-purple-600',
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started;
                </button>
              </div>
            ))}
          </div>
        </section>
        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            What Our Users Say;
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-500 mb-4 italic">{testimonial.content}</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-600 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Join thousands of content creators, marketers, and businesses using AI Writing Assistant;
            to create better content faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a;
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950;
            </a>
            <Link;
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
            >
              Start Free Trial;
            </Link>
          </div>
        </section>
      </section>
    </div>
  )
}
)
// Focus management utility;
const focusElement = (element: HTMLElement | null) => {
  if (element) {
    element.focus()
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
// Skip to main content functionality;
const skipToMain = () => {
  const main = document.querySelector('main')
  if (main) {
    focusElement(main)
  }
}
export default AIWritingAssistantPage;