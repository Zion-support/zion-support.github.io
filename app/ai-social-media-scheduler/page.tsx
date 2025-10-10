'use client',
import React, { useState, useCallback, memo } from 'react',
import { Helmet } from 'react-helmet-async';
import { Calendar, Target, Clock, CheckCircle, Brain, Share2, TrendingUp, BarChart, MessageSquare } from 'lucide-react',

const [isLoaded, setIsLoaded] = useState(false),

  React.useEffect(() => {}
    setIsLoaded(true),
  }, []),

const features = [
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times based on your audience engagement patterns',
      color: 'text-purple-400',
    },
      title: 'Content Generation',
      description: 'Generate engaging posts, captions, and hashtags using advanced AI technology',
      color: 'text-blue-400',
    },
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and insights to track performance across all platforms',
      color: 'text-green-400',
    },
      title: 'Multi-Platform Support',
      description: 'Schedule and manage content across Instagram, Facebook, Twitter, LinkedIn, and TikTok',
      color: 'text-orange-400',
    }
  ],

const pricingPlans = [
      price: '$19',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 3 social accounts',
        '30 posts per month',
        'Basic scheduling',
        'Email support',
        'Basic analytics',
        '1 user'
      ],
    {
      name: 'Professional'
    {}
      name: 'Professional',
>>>>>>> origin/merge-error-fixes
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10 social accounts',
        'Unlimited posts',
        'AI content generation',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'Custom branding'
      ],
    {
      name: 'Enterprise'
    {}
      name: 'Enterprise',
>>>>>>> origin/merge-error-fixes
      price: '$149',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited social accounts',
        'Unlimited posts',
        'Advanced AI features',
        '24/7 dedicated support',
        'White-label solution',
        'Custom integrations',
        'Advanced reporting'
      ],
  ],

const useCases = [
    {}
      title: 'Content Planning',
      description: 'Plan and schedule your content calendar weeks in advance',
      icon: Calendar,
      result: '3x efficiency',
    },
    {}
      title: 'Engagement Boost',
      description: 'Increase engagement with AI-optimized posting times and content',
      icon: TrendingUp,
      result: '150% more',
    },
    {}
      title: 'Brand Consistency',
      description: 'Maintain consistent brand voice across all platforms',
      icon: Target,
      result: '100% consistent',
    },
    {}
      title: 'Time Saving',
      description: 'Save hours every week with automated scheduling and content generation',
      icon: Clock,
      result: '10 hours/week',
    }
  ],

const supportedPlatforms = [
    { name: 'Instagram', icon: '📸', color: 'text-pink-400' },
    { name: 'Facebook', icon: '📘', color: 'text-blue-400' },
    { name: 'Twitter', icon: '🐦', color: 'text-sky-400' },
    { name: 'LinkedIn', icon: 'briefcase', color: 'text-blue-600' },
    { name: 'TikTok', icon: 'music', color: 'text-black' },
    { name: 'YouTube', icon: '📺', color: 'text-red-400' }
  ],

      <Helmet>
        <title>AI Social Media Scheduler - Smart Content Management | Zion Tech Group</title>
        <meta name="description" content="Streamline your social media with AI-powered scheduling, content generation, and analytics. Manage all platforms from one dashboard." />
        <meta name="keywords" content="social media scheduler, content management, social media automation, AI content generation, social media analytics" />
        <meta property="og: title" content="AI Social Media Scheduler - Smart Content Management" />
        <meta property="og:description" content="Streamline your social media with AI-powered scheduling and content generation." />
          </p>

              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            </a>
          </div>,
        </section>,
,
        {/* Key Benefits */}
        <section className="mb-16">
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20"></div>
              <div className="text-3xl font-bold text-blue-400 mb-2">6</div><div className="text-white font-semibold mb-2">Platforms</div><div className="text-gray-400 text-sm">Manage all major social media platforms</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-green-500/20"></div>
              <div className="text-3xl font-bold text-green-400 mb-2">150%</div><div className="text-white font-semibold mb-2">More Engagement</div><div className="text-gray-400 text-sm">AI-optimized posting times and content</div>
            </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
                <div className="flex items-start space-x-4">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-white font-semibold mb-2">Automation</div>
              <div className="text-gray-400 text-sm">Never miss a post with automated scheduling</div>,
            </div>,
          </div>,
        </section>,
,
        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover: border-purple-500/50 transition-all duration-300">,
                <div className="flex items-start space-x-4">,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) => (</section>
              </div><div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"></div>
                <div className="flex items-start space-x-4"></div>
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3><p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Supported Platforms */}
        <section className="mb-16">
                <div className="text-4xl mb-2">{platform.icon}</div>
                <div className={`font-medium ${platform.color}`}>{platform.name}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
          <h2 className="text-3xl font-bold text-white text-center mb-12">Supported Platforms</h2><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">{supportedPlatforms.map((platform, index) => (</section>
              </div><div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center"></div>
                <div className="text-4xl mb-2">{platform.icon}</div><div className={`font-medium ${platform.color}`}>{platform.name}</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <useCase.icon className="w-8 h-8 text-purple-400" />
                  <div className="text-sm font-semibold text-green-400">{useCase.result}<h3 className="text-lg font-semibold text-white mb-2">{useCase.title}<p className="text-gray-400 text-sm">{useCase.description}</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Perfect For</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover: border-purple-500/50 transition-all duration-300">,
                <div className="flex items-center justify-between mb-4">,
                  <useCase.icon className="w-8 h-8 text-purple-400" />,
                  <div className="text-sm font-semibold text-green-400">{useCase.result}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
          <h2 className="text-3xl font-bold text-white text-center mb-12">Perfect For</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{useCases.map((useCase, index) => (</section>
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"></div>
                <div className="flex items-center justify-between mb-4"></div>
                  <useCase.icon className="w-8 h-8 text-purple-400" />
                  <div className="text-sm font-semibold text-green-400">{useCase.result}</div><h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3><p className="text-gray-400 text-sm">{useCase.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
                    <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h2>
              <div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'} hover:border-purple-500/50 transition-all duration-300`}>
                {plan.popular && (}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                    </div>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                  href="/contact"
                  }`}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-12 rounded-lg border border-purple-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Social Media?</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join 5,000+ businesses already using our AI Social Media Scheduler to grow their presence.</p>
          </p>
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
          </div>
        </section>
      </div>
    </div>
  ),
}),

AISocialMediaScheduler.displayName = 'AISocialMediaScheduler',
,
export default AISocialMediaScheduler,