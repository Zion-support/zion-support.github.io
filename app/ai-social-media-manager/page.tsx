'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Share2, BarChart3, Calendar, Users, Zap, Target, ArrowRight, Star, CheckSquare, Globe, Smartphone, Heart } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
const AISocialMediaManagerPage: React.FC = () => {
  const features = [
    {
      icon: Share2,
      title: 'AI Content Creation',
      description: 'Generate engaging social media content with AI-powered writing, image creation, and video editing',
      benefits: ['Auto-generated captions', 'Trend-based content', 'Multi-platform optimization', 'Brand voice consistency']
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Optimize posting times and schedule content across all platforms automatically',
      benefits: ['Optimal timing analysis', 'Cross-platform posting', 'Content calendar', 'Automated scheduling']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track performance with AI-driven insights and predictive analytics',
      benefits: ['Engagement prediction', 'ROI tracking', 'Audience insights', 'Performance optimization']
    },
    {
      icon: Users,
      title: 'Community Management',
      description: 'AI-powered community management with automated responses and sentiment analysis',
      benefits: ['Auto-responses', 'Sentiment monitoring', 'Crisis detection', 'Engagement optimization']
    }
  ]
  const platforms = [
    { name: 'Facebook', icon: '📘', users: '2.9B', engagement: '+45%' },
    { name: 'Instagram', icon: '📷', users: '2B', engagement: '+67%' },
    { name: 'Twitter', icon: '🐦', users: '450M', engagement: '+23%' },
    { name: 'LinkedIn', icon: '💼', users: '930M', engagement: '+89%' },
    { name: 'TikTok', icon: '🎵', users: '1B', engagement: '+156%' },
    { name: 'YouTube', icon: '📺', users: '2.7B', engagement: '+34%' }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$45',
      period: '/month',
      description: 'Perfect for small businesses and influencers',
      features: [
        '3 social media accounts',
        '30 posts per month',
        'Basic analytics',
        'Content calendar',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10 social media accounts',
        'Unlimited posts',
        'Advanced analytics',
        'AI content generation',
        'Priority support',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited accounts',
        'White-label solution',
        'Custom AI models',
        'Dedicated support',
        'API access',
        'Advanced reporting'
      ],
      popular: false
    }
  ]
  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Marketing Director',
      company: 'Fashion Forward',
      content: 'Our social media engagement increased by 200% since using AI Social Media Manager. The AI content creation saves us hours every week.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'CEO',
      company: 'TechStartup',
      content: 'The analytics and insights are incredible. We can now predict which content will perform best before we even post it.',
      rating: 5
    },
    {
      name: 'Amanda Wilson',
      role: 'Social Media Manager',
      company: 'Creative Agency',
      content: 'Managing multiple client accounts is now effortless. The AI handles content creation while we focus on strategy.',
      rating: 5
    }
  ]
  return (
    <div> </div><Helmet> </Helmet><title>AI Social Media Manager - Zion Tech Group</title>
        <meta> </meta><meta> </meta></Helmet>
      
      <Navigation> </Navigation><main>{/* Hero Section */}
        </main><section> </section><div> </div><div> </div><Share2>AI-Powered Social Media Management
            </Share2></div>
            <h1>AI Social Media Manager
            </h1></h1>
            <p>Transform your social media presence with AI-powered content creation, smart scheduling, and advanced analytics. 
              Boost engagement by 200% and save 10+ hours per week.
            </p></p>
            <div> </div><button>Start Free Trial
                </button><ArrowRight> </ArrowRight></button>
              <button>Watch Demo
              </button></button>
            </div>
            <div>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime
            </div></div>
          </div>
        </section>

        {/* Features Section */}
        <section> </section><div> </div><div> </div><h2>Powerful AI Features
              </h2></h2>
              <p>Leverage artificial intelligence to create, schedule, and optimize your social media content across all platforms.
              </p></p>
            </div>
            <div>{features.map((feature, index) => (
                </div><div> </div><div> </div><feature> </feature></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul>{feature.benefits.map((benefit, idx) => (
                      </ul><li> </li><CheckSquare>{benefit}
                      </CheckSquare></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section> </section><div> </div><div> </div><h2>Manage All Your Platforms
              </h2></h2>
              <p>Connect and manage all your social media accounts from one powerful dashboard.
              </p></p>
            </div>
            <div>{platforms.map((platform, index) => (
                </div><div> </div><div className="text-4xl mb-4">{platform.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{platform.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{platform.users} users</p>
                  <div> </div><Target>{platform.engagement} engagement
                  </Target></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section> </section><div> </div><div> </div><h2>Simple, Transparent Pricing
              </h2></h2>
              <p>Choose the plan that fits your social media needs. All plans include our core AI features.
              </p></p>
            </div>
            <div>{pricingPlans.map((plan, index) => (
                </div><div>{plan.popular && (
                    </div><div>Most Popular
                    </div></div>
                  )}
                  <div> </div><h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div> </div><span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul>{plan.features.map((feature, idx) => (
                      </ul><li> </li><CheckSquare>{feature}
                      </CheckSquare></li>
                    ))}
                  </ul>
                  <button>{plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button></button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section> </section><div> </div><div> </div><h2>What Our Customers Say
              </h2></h2>
              <p>Join thousands of businesses who have transformed their social media with AI.
              </p></p>
            </div>
            <div>{testimonials.map((testimonial, index) => (
                </div><div> </div><div>{[...Array(testimonial.rating)].map((_, i) => (
                      </div><Star>))}
                  </Star></div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div> </div><div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section> </section><div> </div><div> </div><h2>Ready to Transform Your Social Media?
              </h2></h2>
              <p>Start your free trial today and experience the power of AI-driven social media management.
              </p></p>
              <div> </div><button>Start Free Trial
                  </button><ArrowRight> </ArrowRight></button>
                <button>Schedule Demo
                </button></button>
              </div>
              <div>Questions? Call us at </div><a href="tel:+13024640950" className="text-pink-400 hover:text-pink-300">(302) 464-0950</a> or email <a href="mailto:kleber@ziontechgroup.com" className="text-pink-400 hover:text-pink-300">kleber@ziontechgroup.com</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer> </Footer></div>
  )
}
export default AISocialMediaManagerPage