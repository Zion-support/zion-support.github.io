'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { PenTool, Brain, Zap, Target, CheckCircle, Star, ArrowRight, Users, BarChart, Clock, FileText, Image, Video, Mic } from 'lucide-react'

const AiContentGeneratorPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Writing',
      description: 'Advanced AI that creates high-quality content in any style or tone',
      details: ['Natural Language Generation', 'Style Adaptation', 'Tone Matching', 'Brand Voice']
    },
    {
      icon: FileText,
      title: 'Multiple Content Types',
      description: 'Generate blogs, articles, social media posts, emails, and more',
      details: ['Blog Posts', 'Social Media', 'Email Campaigns', 'Product Descriptions']
    },
    {
      icon: Image,
      title: 'Visual Content',
      description: 'Create stunning images and graphics to accompany your content',
      details: ['AI Image Generation', 'Custom Graphics', 'Brand Templates', 'Stock Photos']
    },
    {
      icon: Video,
      title: 'Video Scripts',
      description: 'Generate engaging video scripts and storyboards',
      details: ['YouTube Scripts', 'Tutorial Videos', 'Marketing Videos', 'Storyboards']
    },
    {
      icon: Target,
      title: 'SEO Optimization',
      description: 'Automatically optimize content for search engines',
      details: ['Keyword Integration', 'Meta Descriptions', 'Title Optimization', 'SEO Scoring']
    },
    {
      icon: Zap,
      title: 'Bulk Generation',
      description: 'Create hundreds of pieces of content in minutes',
      details: ['Batch Processing', 'Template System', 'Auto-scheduling', 'Content Calendar']
    }
    ];
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        '1,000 words/month',
        'Basic AI models',
        '5 content types',
        'Standard templates',
        'Email support',
        '1 user'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for content creators and agencies',
      features: [
        '10,000 words/month',
        'Advanced AI models',
        'All content types',
        'Custom templates',
        'Priority support',
        '3 users',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large teams and organizations',
      features: [
        'Unlimited words',
        'Premium AI models',
        'All features included',
        'White-label solution',
        'Dedicated support'
        'Unlimited users'
        'Custom integrations'
        ];
      popular: false
    }
    ];
  const stats = [
    { value: '10x', label: 'Faster Content Creation', icon: <Clock className="w-8 h-8 text-green-400" />     }
    { value: '95%', label: 'Content Quality Score', icon: <Star className="w-8 h-8 text-blue-400" />     }
    { value: '80%', label: 'Time Savings', icon: <Zap className="w-8 h-8 text-purple-400" />     }
    { value: '50+', label: 'Content Types', icon: <FileText className="w-8 h-8 text-cyan-400" /> }
    ];
  const contentTypes = [
    {
      title: 'Blog Posts'
      description: 'Long-form articles optimized for SEO and engagement'
      icon: <FileText className="w-8 h-8 text-green-400" />
        }
    {
      title: 'Social Media'
      description: 'Captions, posts, and stories for all platforms'
      icon: <Users className="w-8 h-8 text-blue-400" />
        }
    {
      title: 'Email Marketing'
      description: 'Newsletters, campaigns, and automated sequences'
      icon: <Target className="w-8 h-8 text-yellow-400" />
        }
    {
      title: 'Product Descriptions'
      description: 'Compelling product copy that converts'
      icon: <BarChart className="w-8 h-8 text-purple-400" />
    }
    ];
  const testimonials = [
    {
      name: 'Sarah Johnson'
      role: 'Content Manager, TechBlog'
      content: 'AI Content Generator increased our content output by 500% while maintaining quality.'
      rating: 5,
      company: 'TechBlog'
        }
    {
      name: 'Mike Chen'
      role: 'Marketing Director, E-commerce Plus'
      content: 'The SEO optimization feature improved our organic traffic by 200% in 3 months.'
      rating: 5,
      company: 'E-commerce Plus'
        }
    {
      name: 'Lisa Rodriguez'
      role: 'Founder, Creative Agency'
      content: 'We can now serve 3x more clients with the same team. Game-changing tool!'
      rating: 5,
      company: 'Creative Agency'
    }
    ];
  return (
    <div className="...">
      <Navigation />
      
      {/* Hero Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h1 className="...">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Content Generator</span>
            </h1>
            <p className="...">
              Create high-quality content 10x faster with AI. Generate blogs, social media posts
              emails, and more with just a few clicks.
            </p>
            <div className="...">
              <button className="...">
                Start Free Trial
              </button>
              <button className="...">
                Try Demo
              </button>
            </div>
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
                  {stat.icon}
                </div>
                <div className="...">
                  {stat.value}
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
              Powerful AI Features
            </h2>
            <p className="...">
              Everything you need to create professional content at scale.
            </p>
          </div>
          
          <div className="...">
            {features.map((feature, index) => (
              <div key={index} className="...">
                <div className="...">
                  <div className="...">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="...">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="...">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="...">
        <div className="...">
          <div className="...">
            <h2 className="...">
              Content Types
            </h2>
            <p className="...">
              Generate any type of content your business needs.
            </p>
          </div>
          
          <div className="...">
            {contentTypes.map((type, index) => (
              <div key={index} className="...">
                <div className="...">
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-gray-300">{type.description}</p>
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
              Simple Pricing
            </h2>
            <p className="...">
              Choose the plan that fits your content needs.
            </p>
          </div>
          
          <div className="...">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                plan.popular ? 'ring-2 ring-cyan-400 bg-white/15' : ''
              }`}>
                {plan.popular && (
                  <div className="...">
                    <span className="...">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="...">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="...">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="...">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="...">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transform hover:scale-105' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Start Free Trial
                </button>
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
              What Our Users Say
            </h2>
            <p className="...">
              Join thousands of content creators using our AI platform.
            </p>
          </div>
          
          <div className="...">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="...">
                <div className="...">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="...">
        <div className="...">
          <h2 className="...">
            Ready to Create Amazing Content?
          </h2>
          <p className="...">
            Start your free trial today and experience the power of AI content generation.
          </p>
          <div className="...">
            <button className="...">
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="...">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AiContentGeneratorPage