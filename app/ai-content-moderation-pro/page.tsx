import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../layout';

export default function AIContentModerationPro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" / />,
      title: 'AI-Powered Detection',
      description: 'Advanced machine learning models detect harmful content with 99.7% accuracy'
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" / />,
      title: 'Real-time Protection',
      description: 'Instant content analysis and moderation to keep your platform safe'
    },
    {
      icon: <Eye className="w-6 h-6 text-yellow-400" / />,
      title: 'Multi-format Support',
      description: 'Text, images, videos, and audio content moderation in one platform'
    },
    {
      icon: <Globe className="w-6 h-6 text-green-400" / />,
      title: 'Global Compliance',
      description: 'Meets international content standards and regulatory requirements'
    }
  ]

  const capabilities = [
    {
      category: 'Content Types',
      items: ['Text & Comments', 'Images & Videos', 'Audio & Voice', 'Live Streams', 'User Profiles', 'Chat Messages']
    },
    {
      category: 'Detection Categories',
      items: ['Hate Speech', 'Spam & Scam', 'Violence', 'Adult Content', 'Terrorism', 'Self-Harm']
    },
    {
      category: 'Languages',
      items: ['English', 'Spanish', 'French', 'German', 'Chinese', '50+ More Languages']
    },
    {
      category: 'Platforms',
      items: ['Social Media', 'E-commerce', 'Forums', 'Gaming', 'Streaming', 'Custom APIs']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small platforms',
      features: [
        'Up to 10,000 content checks/month',
        'Basic AI moderation',
        'Text & image analysis',
        'Email support',
        'Standard response time'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing platforms',
      features: [
        'Up to 100,000 content checks/month',
        'Advanced AI models',
        'All content types',
        'Priority support',
        'Custom rules engine',
        'Analytics dashboard'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large-scale platforms',
      features: [
        'Unlimited content checks',
        'Custom AI training',
        'White-label solution',
        'Dedicated support',
        'Compliance reporting',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'David Kim',
      company: 'SocialFlow Platform',
      content: 'AI Content Moderation Pro reduced our moderation workload by 85% while improving accuracy significantly.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'E-commerce Plus',
      content: 'The real-time detection saved us from multiple PR disasters. Essential for any growing platform.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Gaming Community Hub',
      content: 'Multi-language support is incredible. We can now moderate content in 15+ languages automatically.',
      rating: 5
    }
  ]

  return (
    <Layout
      title="AI Content Moderation Pro - Advanced Content Safety Platform | Zion Tech Group"
      description="Protect your platform with AI-powered content moderation. Real-time detection, multi-format support, and 99.7% accuracy. Start your free trial today."
      keywords="AI content moderation, content safety, platform protection, automated moderation, content filtering"
     />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8" />
          <div className="max-w-7 xl mx-auto" />
            <div className="text-center" />
              <div className="inline-flex items-center px-4 py-2 bg-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6" />
                <Shield className="w-4 h-4 mr-2" / />
                Advanced Content Safety
              </div>
              <h1 className="text-4 xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6"  />AI Content Moderation Pro
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3 xl mx-auto mb-8">
                Protect your platform with industry-leading AI content moderation. Real-time detection, 
                multi-format support, and 99.7% accuracy to keep your community safe and compliant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" />
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                 />
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" / />
                </Link>
                <Link
                  to="#demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  />Watch Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8" />
          <div className="max-w-7 xl mx-auto" />
            <div className="text-center mb-16" />
              <h2 className="text-3 xl sm:text-4 xl font-bold text-white mb-4"  />Advanced Content Safety Features
              </h2>
              <p className="text-lg text-gray-300 max-w-2 xl mx-auto">
                Comprehensive AI-powered protection for all your content needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" />
              {features.map((feature, index) => (
                <div key="{index}" className="bg-gradient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-300" />
                  <div className="flex items-center mb-4" />
                    {feature.icon}
                    <h3 className="text-xl font-semibold text-white ml-3"  >{feature.title}</h3>
                  </div>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30" />
          <div className="max-w-7 xl mx-auto" />
            <div className="text-center mb-16" />
              <h2 className="text-3 xl sm:text-4 xl font-bold text-white mb-4"  />Comprehensive Moderation Capabilities
              </h2>
              <p className="text-lg text-gray-300 max-w-2 xl mx-auto">
                Handle any content type, language, or platform with our advanced AI
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" />
              {capabilities.map((capability, index) => (
                <div key="{index}" className="bg-slate-800/50 rounded-xl p-6 border border-slate-700" />
                  <h3 className="text-xl font-semibold text-white mb-4"  >{capability.category}</h3>
                  <ul className="space-y-2" />
                    {capability.items.map((item, itemIndex) => (
                      <li key="{itemIndex}" className="flex items-center text-gray-300" />
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" / />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8" />
          <div className="max-w-7 xl mx-auto" />
            <div className="text-center mb-16" />
              <h2 className="text-3 xl sm:text-4 xl font-bold text-white mb-4"  />Flexible Pricing Plans
              </h2>
              <p className="text-lg text-gray-300 max-w-2 xl mx-auto">
                Choose the plan that scales with your platform
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" />
              {pricingPlans.map((plan, index) => (
                <div key="{index}" className="{`bg-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-red-400/40 scale-105 shadow-2 xl shadow-red-500/20' 
                    : 'border-red-500/20 hover: border-red-400/40'
                }`} />
                  {plan.popular && (
                    <div className="inline-flex items-center px-3 py-1 bg-red-500/20 rounded-full text-red-400 text-sm font-medium mb-4" />
                      <Star className="w-4 h-4 mr-1" / />
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2 xl font-bold text-white mb-2"  >{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6" />
                    <span className="text-4 xl font-bold text-white"  >{plan.price}</span>
                    <span className="text-gray-400"  >{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key="{featureIndex}" className="flex items-center text-gray-300" />
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" / />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="{`w-full" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white hover:from-red-600 hover:to-purple-700'
                        : 'border-2 border-red-400 text-red-400 hover: bg-red-400/10'
                    }`}
                    />Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/30 to-purple-900/30" />
          <div className="max-w-7 xl mx-auto" />
            <div className="text-center mb-12" />
              <h2 className="text-3 xl font-bold text-white mb-4"  />Trusted by Leading Platforms
              </h2>
              <p className="text-gray-300">
                See how our AI content moderation protects platforms worldwide
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" />
              {testimonials.map((testimonial, index) => (
                <div key="{index}" className="bg-slate-800/50 rounded-xl p-6 border border-slate-700" />
                  <div className="flex items-center mb-4" />
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="w-5 h-5 text-yellow-400 fill-current" / />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div />
                    <div className="font-semibold text-white"  >{testimonial.name}</div>
                    <div className="text-sm text-gray-400"  >{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8" />
          <div className="max-w-4 xl mx-auto text-center" />
            <div className="bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-2 xl p-8 border border-red-500/30" />
              <h2 className="text-3 xl font-bold text-white mb-4"  />Protect Your Platform Today
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join thousands of platforms using AI Content Moderation Pro to keep their communities safe
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" />
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all duration-300"
                  />Start Your Free Trial
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  />Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};