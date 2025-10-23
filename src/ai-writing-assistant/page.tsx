'use client'
import { Brain, Target } from 'lucide-react'
import React from 'react'
import { PenTool, FileText } from 'lucide-react'
import { CheckCircle, Star, Phone } from 'lucide-react'

constAIWritingAssistantPage: React.FC= () =>{constfeatures= [
    {
      icon: PenTool,
      title: 'AI Content Generation',
      description: 'Generate high-quality articles, blog posts, marketing copy, and social media content using advanced GPT-4 technology.',
      benefit: '10 x faster content creation'
   },
    {icon: FileText,
      title: 'Multi-Format Support',
      description: 'Create content in anyformat: blog posts, emails, ads, product descriptions, press releases, and more.',
      benefit: '5 0+ content templates'
   },
    {icon: Zap,
      title: 'Smart Optimization',
      description: 'Automatically optimize content for SEO, readability, and engagement with AI-powered suggestions and improvements.',
      benefit: '4 0% better engagement rates'
   },
    {icon: Target,
      title: 'Brand Voice Training',
      description: 'Train the AI to match your brand voice, tone, and style for consistent messaging across all content.',
      benefit: '10 0% brand consistency'
   },
    {icon: Clock,
      title: 'Real-time Collaboration',
      description: 'Work with your team in real-time with live editing, comments, and version control for seamless collaboration.',
      benefit: '5 0% faster team workflows'
   },
    {icon: Brain,
      title: 'Content Intelligence',
      description: 'Get AI insights on content performance, audience engagement, and optimization opportunities.',
      benefit: 'Data-driven content strategy'
    }
  ]

  constpricingPlans= [
    {name: 'Writer',
      price: '$2 9',
      period: '/month',
      description: 'Perfect for individual creators',
      features: [
        '1 0,000words per month',
        'Basic AI writing',
        '5 content templates',
        'Standard support',
        'Basic SEO optimization',
        'Single user account'
      ],
      popular: false
   },
    {name: 'Professional',
      price: '$7 9',
      period: '/month',
      description: 'Ideal for small teams',
      features: [
        '5 0,000words per month',
        'Advanced AI writing',
        '5 0+ content templates',
        'Priority support',
        'Advanced SEO tools',
        'Team collaboration',
        'Brand voice training',
        'Content analytics'
      ],
      popular: true
   },
    {name: 'Enterprise',
      price: '$19 9',
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
        'Advanced analytics'
      ],
      popular: false
    }
  ]

  constuseCases= [
    {title: 'Blog Content',
      description: 'Create engaging blog posts that rank high in search engines and drive traffic to your website.',
      icon: FileText,
      results: '30 0% increase in organic traffic'
   },
    {title: 'Marketing Copy',
      description: 'Generate compelling ad copy, email campaigns, and social media posts that convert.',
      icon: Target,
      results: '4 5% higher conversion rates'
   },
    {title: 'Product Descriptions',
      description: 'Write persuasive product descriptions that highlight benefits and drive sales.',
      icon: Zap,
      results: '6 0% more product sales'
   },
    {title: 'Email Marketing',
      description: 'Create personalized email sequences that nurture leads and increase customer retention.',
      icon: Mail,
      results: '35% higher open rates'
    }
  ]

  consttestimonials= [
    {name: 'Jessica Martinez',
      company: 'Content Marketing Pro',
      role: 'Content Manager',
      content: 'AI Writing Assistant helped us scale our content production by 50 0% while maintaining quality. Our blog traffic tripled in6months.',
      rating:5},
    {name: 'David Kim',
      company: 'E-commerce Solutions',
      role: 'Marketing Director',
      content: 'The brand voice training feature is incredible. All our content now sounds consistent and professional across all channels.',
      rating:5},
    {name: 'Lisa Thompson',
      company: 'Digital Agency',
      role: 'Creative Director',
      content: 'We can now deliver client content 3x faster. The AI suggestions help us improve our writing and stay ahead of deadlines.',
      rating: 5
    }
  ]

const Page = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Page
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
=======
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      {/* Hero Section */}
      <section className=&quot;container mx-auto px-4 py-16 pt-24&quot;></section>
        <div className=&quot;text-center mb-16&quot;></div>
          <div className=&quot;inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-6&quot;></div>
            <PenTool className=&quot;w-10 h-10 text-white&quot; />
          </div>
          <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;>
            AI Writing Assistant
          </h1>
          <p className=&quot;text-xl md:text-2xl text-cyan-400 mb-8 font-medium&quot;>
            Create Amazing Content 10x Faster
          </p>
          <p className=&quot;text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed&quot;>
            Transform your content creation with our AI-powered writing assistant. Generate high-quality
            blog posts, marketing copy, emails, and more in minutes, not hours. Boost engagement and
            drive results with intelligent content optimization.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;></div>
            <a
              href=&quot;tel:+13024640950&quot;
              className=&quot;bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center&quot;
            >
              <Phone className=&quot;w-5 h-5 mr-2&quot; />
              Call: (302) 464-0950
            </a>
            <a
              href=&quot;/contact&quot;
              className=&quot;border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300&quot;
            >
              Start Free Trial
            </a>
          </div>
        </div>
        {/* Key Benefits */}
        <div className=&quot;grid grid-cols-1 md:grid-cols-4 gap-8 mb-16&quot;></div>
          <div className=&quot;text-center&quot;></div>
            <div className=&quot;text-4xl font-bold text-cyan-400 mb-2&quot;>10x</div>
            <div className=&quot;text-white font-semibold mb-2&quot;>Faster Writing</div>
            <div className=&quot;text-gray-300 text-sm&quot;>Create content in minutes, not hours</div>
          </div>
          <div className=&quot;text-center&quot;></div>
            <div className=&quot;text-4xl font-bold text-purple-400 mb-2&quot;>40%</div>
            <div className=&quot;text-white font-semibold mb-2&quot;>Better Engagement</div>
            <div className=&quot;text-gray-300 text-sm&quot;>AI optimization increases reader engagement</div>
          </div>
          <div className=&quot;text-center&quot;></div>
            <div className=&quot;text-4xl font-bold text-green-400 mb-2&quot;>50+</div>
            <div className=&quot;text-white font-semibold mb-2&quot;>Templates</div>
            <div className=&quot;text-gray-300 text-sm&quot;>Ready-to-use content templates</div>
          </div>
          <div className=&quot;text-center&quot;></div>
            <div className=&quot;text-4xl font-bold text-orange-400 mb-2&quot;>100%</div>
            <div className=&quot;text-white font-semibold mb-2&quot;>Brand Consistent</div>
            <div className=&quot;text-gray-300 text-sm&quot;>Maintain your unique brand voice</div>
          </div>
        </div>
        {/* Features Section */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-12 text-center&quot;>
            Powerful AI Writing Features
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
            {features.map((feature, index) => (
              <div key={index} className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300&quot;></div>
                <feature.icon className=&quot;w-12 h-12 text-cyan-400 mb-4&quot; />
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{feature.title}</h3>
                <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>{feature.description}</p>
                <div className=&quot;text-cyan-400 font-semibold text-sm&quot;>{feature.benefit}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Use Cases Section */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-12 text-center&quot;>
            Perfect for Every Content Need
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
            {useCases.map((useCase, index) => (
              <div key={index} className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 text-center&quot;></div>
                <useCase.icon className=&quot;w-12 h-12 text-cyan-400 mx-auto mb-4&quot; />
                <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{useCase.title}</h3>
                <p className=&quot;text-gray-300 mb-4 leading-relaxed&quot;>{useCase.description}</p>
                <div className=&quot;text-cyan-400 font-semibold text-sm&quot;>{useCase.results}</div>
              </div>
            ))}
          </div>
        </section>
        {/* Pricing Section */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-12 text-center&quot;>
            Simple, Transparent Pricing
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto&quot;></div>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-cyan-400 scale-105' 
                  : 'border-slate-700 hover:border-cyan-500/50'
              }`}></div>
                {plan.popular && (
                  <div className=&quot;bg-cyan-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold text-center mb-4&quot;></div>
                    Most Popular
                  </div>
                )}
                <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{plan.name}</h3>
                <p className=&quot;text-gray-300 mb-6&quot;>{plan.description}</p>
                <div className=&quot;mb-6&quot;></div>
                  <span className=&quot;text-4xl font-bold text-white&quot;>{plan.price}</span>
                  <span className=&quot;text-gray-300&quot;>{plan.period}</span>
                </div>
                <ul className=&quot;space-y-3 mb-8&quot;>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 flex-shrink-0&quot; />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white hover:from-cyan-500 hover:to-purple-600'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>
        {/* Testimonials */}
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-12 text-center&quot;>
            What Our Users Say
          </h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8&quot;></div>
            {testimonials.map((testimonial, index) => (
              <div key={index} className=&quot;bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20&quot;></div>
                <div className=&quot;flex items-center mb-4&quot;></div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className=&quot;w-5 h-5 text-yellow-400 fill-current&quot; />
                  ))}
                </div>
                <p className=&quot;text-gray-300 mb-4 italic&quot;>&quot;{testimonial.content}&quot;</p>
                <div></div>
                  <div className=&quot;font-semibold text-white&quot;>{testimonial.name}</div>
                  <div className=&quot;text-cyan-400 text-sm&quot;>{testimonial.role}</div>
                  <div className=&quot;text-gray-400 text-sm&quot;>{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className=&quot;text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg p-12 border border-cyan-500/20&quot;></section>
          <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6&quot;>
            Ready to Transform Your Content Creation?
          </h2>
          <p className=&quot;text-lg text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
            Join thousands of content creators, marketers, and businesses using AI Writing Assistant
            to create better content faster.
          </p>
          <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center&quot;></div>
            <a
              href=&quot;tel:+13024640950&quot;
              className=&quot;bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center&quot;
            >
              <Phone className=&quot;w-5 h-5 mr-2&quot; />
              Call: (302) 464-0950
            </a>
            <a
              href=&quot;/contact&quot;
              className=&quot;border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300&quot;
            >
              Start Free Trial
            </a>
          </div>
        </section>
      </section>
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
    </div>
  )
}

export default Page;