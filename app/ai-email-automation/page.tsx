import React from 'react'
import { ArrowRight, Mail, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'AI Email Automation - Smart Email Marketing | Zion Tech Group'
      description: 'Revolutionary AI-powered email automation with content generation, smart segmentation, and performance analytics. Increase revenue by 300% and save 20+ hours per week.'
  keywords: 'AI email automation, email marketing, email generation, lead scoring, email analytics, marketing automation, AI content creation'
  robots: 'index, follow'
  openGraph: {
    title: 'AI Email Automation - Smart Email Marketing | Zion Tech Group'
      description: 'Revolutionary AI-powered email automation with content generation, smart segmentation, and performance analytics.'
    type: 'website'
    url: 'https://ziontechgroup.com/ai-email-automation'
      }
}

const AIEmailAutomationPage: React.FC = () => {
  const features = [
    {
      icon: 'Brain'
    title: 'AI Email Generation'
      description: 'Generate personalized, high-converting emails using AI that understands your audience and brand voice.'
      benefits: ['Personalized content', 'A/B testing', 'Brand voice training', 'Multi-language support'  ];
    }
  {
    icon: 'Send'
    title: 'Smart Automation'
      description: 'Create complex email workflows with AI-powered triggers, segmentation, and behavioral targeting.'
    ];
  const pricingPlans = [
  {
      name: 'Starter'
    price: ''
      period: '/month'
    description: 'Perfect for small businesses and startups'
      features: [
        'Up to 5,000 contacts'
        '10,000 emails/month'
        'Basic AI features'
        'Email templates'
        'Email support'
        ];
      popular: false
    },
    {
      name: 'Professional'
      price: ''
      period: '/month'
      description: 'Ideal for growing businesses and agencies'
      features: [
        'Up to 25,000 contacts'
        '50,000 emails/month'
        'Advanced AI features'
        'A/B testing'
        'Priority support'
        'API access'
        ];
      popular: true
    },
    {
      name: 'Enterprise'
      price: ''
      period: '/month'
      description: 'For large organizations with high volume needs'
      features: [
        'Unlimited contacts'
        'Unlimited emails'
        'Full AI suite'
        'Custom integrations'
        'Dedicated support'
        'White-label options'
        ];
      popular: false
    }
    ];
  const testimonials = [
    {
      name: 'Jennifer Lee'
    company: 'E-commerce Store'
      content: 'AI Email Automation increased our email revenue by 300%. The AI-generated content is incredibly effective.'
    rating: 5,
      avatar: 'JL'
      }
    {
      name: 'Mark Thompson'
    company: 'SaaS Company'
      content: 'The lead scoring feature helped us identify high-value prospects and increased our conversion rate by 150%.'
    rating: 5,
      avatar: 'MT'
      }
    {
      name: 'Lisa Chen'
    company: 'Marketing Agency'
      content: 'Saves us 20+ hours per week on email campaigns. The automation features are incredibly powerful.'
    rating: 5,
      avatar: 'LC'}
    ];
  const stats = [
    { number: '300%', label: 'Revenue Increase', icon: 'DollarSign'     }
    { number: '150%', label: 'Conversion Boost', icon: 'TrendingUp'     }
    { number: '20hrs', label: 'Time Saved/Week', icon: 'Clock'     }
    { number: '95%', label: 'Deliverability Rate', icon: 'Shield' }
    ];
    return (
    <>
      {/* Hero Section */}
      <section className="...">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_0%,transparent_50%)]" />
        <div className="...">
          <div className="...">
            <Mail className="w-8 h-8" />
            <span>AI-Powered Email Marketing</span>
          </div>
          <h1 className="...">
            AI Email
            <br />
            <span className="...">
              Automation Pro
            </span>
          </h1>
          <p className="...">
            Transform your email marketing with AI-powered automation
            content generation, and performance optimization that increases revenue by 300%.
          </p>
          
          <div className="...">
            <Link 
              href="/contact" 
              className="...">
              <span>Start Free Trial</span>
              <ArrowRight className="w-8 h-8" />
            </Link>
            <Link 
              href="#demo" 
              className="...">
              <span>Watch Demo</span>
              <ArrowRight className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            {stats.map((stat, index) => (
              <div key={index} className="...">
                <div className="...">
                  <div className="w-8 h-8 text-blue-400">{stat.icon}</div>
                </div>
                <div className="...">
                  {stat.number}
                </div>
                <div className="...">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Advanced <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="...">
              Our AI-powered email automation platform uses machine learning to create
              send, and optimize email campaigns that drive real business results.
            </p>
          </div>
          <div className="...">
            {features.map((feature, index) => (
              <div key={index} className="...">
                <div className="...">
                  <div className="w-8 h-8 text-white">{feature.icon}</div>
                </div>
                <h3 className="...">
                  {feature.title}
                </h3>
                <p className="...">
                  {feature.description}
                </p>
                <div className="...">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="...">
                      <CheckCircle className="w-8 h-8" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Transparent <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
            </h2>
            <p className="...">
              Choose the perfect plan for your email marketing needs. All plans include our core AI features
              with scalable options for businesses of all sizes.
            </p>
          </div>
          <div className="...">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover: scale-105 ${
                plan.popular
                  ? 'border-blue-400/50 shadow-2xl shadow-blue-500/20'
                  : 'border-white/20 hover: border-white/40'}`}>
                {plan.popular && (
                  <div className="...">
                    <div className="...">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="...">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="...">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <div className="...">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="...">
                      <CheckCircle className="w-8 h-8" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href="/contact" 
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover: from-blue-600 hover:to-cyan-700 shadow-lg shadow-blue-500/25'
                      : 'border-2 border-blue-400 text-blue-400 hover: bg-blue-400 hover:text-gray-900'}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Trusted by <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Marketers</span>
            </h2>
            <p className="...">
              See how AI Email Automation is transforming email marketing for businesses worldwide.
            </p>
          </div>
          <div className="...">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="...">
                <div className="...">
                  <div className="...">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="...">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">&quot;{testimonial.content}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="...">
        <div className="...">
          <h2 className="...">
            Ready to Revolutionize Your
            <br />
            <span className="...">
              Email Marketing?
            </span>
          </h2>
          <p className="...">
            Join thousands of marketers already increasing revenue and saving time with AI Email Automation.
            Start your free trial today - no credit card required.
          </p>
          <div className="...">
            <Link
              href="/contact"
              className="...">
              <span>Start Free Trial</span>
              <ArrowRight className="w-8 h-8" />
            </Link>
            <Link 
              href="/pricing" 
              className="...">
              <span>View All Plans</span>
              <ArrowRight className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </section>
</>
  )
}
export default AIEmailAutomationPage
}