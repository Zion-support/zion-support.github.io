import React from 'react'
import {Link} from 'react-router-dom'
import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight, Share2} from 'lucide-react';

export default function AISocial Media Scheduler Page() {
  constfeatures = [
    {
      icon: <Calendarclass Name ="w-6h-6text-cyan-400" / />,
      title: 'Smart Scheduling',
      description: 'AI-powered optimal posting times based on audience engagement patterns'
    },
    {
      icon: <Bar Chart3class Name="w-6h-6text-emerald-400" / />,
      title: 'Analytics Dashboard',
      description: 'Comprehensive performance metrics and ROI tracking across all platforms'
    },
    {
      icon: <Usersclass Name ="w-6h-6text-purple-400" / />,
      title: 'Audience Insights',
      description: 'AI-driven audience analysis and content personalization recommendations'
    },
    {
      icon: <Zapclass Name ="w-6h-6text-orange-400" / />,
      title: 'Auto- Posting',
      description: 'Seamless cross-platform content distribution with smart formatting'
    },
    {
      icon: <Targetclass Name ="w-6h-6text-pink-400" / />,
      title: 'Content Optimization',
      description: 'AI suggestions for hashtags, captions, and optimal posting times'
    },
    {
      icon: <Shieldclass Name ="w-6h-6text-red-400" / />,
      title: 'Brand Safety',
      description: 'Automated content moderation and brand compliance checking'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and individuals',
      features: [
        '3 social media accounts',
        '50 posts per month',
        'Basic analytics',
        'Email support',
        'Content calendar',
        'Hashtag suggestions'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10 social media accounts',
        'Unlimited posts',
        'Advanced analytics',
        'Priority support',
        'Team collaboration',
        'AI content suggestions',
        'Competitor analysis',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited accounts',
        'Unlimited posts',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced AI features',
        'API access',
        'Custom reporting'
      ],
      popular: false
    }
  ]

  consttestimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Digital Marketing Agency',
      content: 'Increased our social media engagement by 300% in just 2 months. The AI scheduling is incredibly accurate.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Mike Chen',
      company: 'E-commerce Store',
      content: 'The analytics dashboard gives us insights we never had before. ROI tracking is spot-on.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Content Creator',
      content: 'Saves me 10+ hours per week. The AI content suggestions are always on-brand and engaging.',
      rating: 5,
      avatar: 'ER'
    }
  ]

  return (
    <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title   />AISocial MediaScheduler - ZionTech Group | AutomatedSocial MediaManagement</title>
        <meta name ="description" content="Revolutionary AI-poweredsocial mediascheduler withsmart posting, analytics, andaudience insights. Increaseengagement by 300% withautomated contentoptimization. Startingat $29/month." / / />
        <meta name ="keywords" content="AIsocial mediascheduler, automatedposting, socialmedia management, contentoptimization, socialmedia analytics, AImarketing tools" / / />
        <meta name ="robots" content="index, follow" / / />
        <linkrel ="canonical" href="https://ziontechgroup.com/micro-saas/ai-social-media-scheduler" / />
      </Helmet>

      {/* HeroSection */}
      <sectionclassName ="relativepy-20px-4overflow-hidden" />
        <div className ="absoluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1)_0%,transparent_50%)]" / />
        <div className ="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)]" / />
        <div className ="relative max-w-7 xlmx-autotext-center" />
          <div className ="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30" />
            <Share2class Name ="w-4h-4" / />
            <span   />AI- Powered Social Media Management</span>
          </div>
          
          <h1className ="text-4 xl sm:text-6 xl md:text-7 xl font-bold text-whitemb-8leading-tight" />
            AI Social Media
            <br / />
            <spanclassName ="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent"  />Scheduler
            </span>
          </h1>
          
          <pclassName ="text-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed" />
            Transform your social media presence with AI-powered scheduling, content optimization, 
            and analytics. Increase engagement by up to 300% with intelligent automation.
          </p>
          
          <div className ="flex flex-col sm:flex-row gap-6justify-centermb-16" />
            <Link to ="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
              <span   />Start Free Trial</span>
              <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
            <Link to ="#pricing" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span   />View Pricing</span>
              <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
          </div>

          {/* Key Stats */}
          <div className ="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xlmx-auto" />
            <div className ="text-center" />
              <div className ="text-3 xl font-boldtext-cyan-400mb-2"   />300%</div>
              <div className ="text-gray-300text-sm"   />Avg. Engagement Increase</div>
            </div>
            <div className ="text-center" />
              <div className ="text-3 xl font-boldtext-purple-400mb-2"   />10+</div>
              <div className ="text-gray-300text-sm"   />Platforms Supported</div>
            </div>
            <div className ="text-center" />
              <div className ="text-3 xl font-boldtext-pink-400mb-2"   />50 K+</div>
              <div className ="text-gray-300text-sm"   />Active Users</div>
            </div>
            <div className ="text-center" />
              <div className ="text-3 xl font-boldtext-emerald-400mb-2"   />99.9%</div>
              <div className ="text-gray-300text-sm"   />Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <sectionclassName ="py-20px-4relative" />
        <div className ="absolute inset-0 bg-gradient-to-br from-purple-500/5via-cyan-500/5to-pink-500/5" / />
        <div className ="relative max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Powerful Features for <spanclassName ="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Social Success</span>
            </h2>
            <pclassName ="text-xl text-gray-300 max-w-4xlmx-auto" />
              Everything you need to manage, optimize, and grow your social media presence with AI-powered intelligence.
            </p>
          </div>
          
          <div className ="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8" />
            {features.map((feature, index) => (
              <divkey ="{index}" className="groupbg-white/10 backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20 hover:bg-white/20 transition-allduration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                <div className ="flexitems-centerjustify-centerw-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xlmb-6 group-hover:scale-110transition-transformduration-300"  />{feature.icon}
                </div>
                <h3className ="text-2 xlfont-boldtext-whitemb-4group-hover:text-cyan-400transition-colors"  />{feature.title}
                </h3>
                <pclassName ="text-gray-300leading-relaxed" />
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <sectionid ="pricing" className="py-20 px-4 bg-gradient-to-br from-slate-800/50to-purple-900/50relative" />
        <div className ="relative max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Simple, Transparent <spanclassName ="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Pricing</span>
            </h2>
            <pclassName ="text-xl text-gray-300 max-w-4xlmx-auto" />
              Choose the plan that fits your needs. All plans include our core AI features and 24/7 support.
            </p>
          </div>
          
          <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
            {pricing Plans.map((plan, index) => (
              <divkey ="{index}" className="{`relative" bg-white/10 backdrop-blur-lgrounded-2 xlp-8 bordertransition-allduration-300 hover:scale-105 hover:shadow-2 xl${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-brfrom-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: border-cyan-400/30'
              }`} />
                {plan.popular && (
                  <div className ="absolute -top-4 left-1/2transform-translate-x-1/2" />
                    <div className ="bg-gradient-to-r from-cyan-500 to-purple-600 text-whitepx-6 py-2 rounded-fulltext-smfont-semibold"  />MostPopular
                    </div>
                  </div>
                )}
                
                <div className ="text-centermb-8" />
                  <h3className ="text-2 xl font-boldtext-whitemb-2"   />{plan.name}</h3>
                  <pclassName ="text-gray-300text-smmb-4" />{plan.description}</p>
                  <div className ="flexitems-baselinejustify-center" />
                    <spanclassName ="text-5 xlfont-boldtext-cyan-400"   />{plan.price}</span>
                    <spanclassName ="text-gray-300ml-2"   />{plan.period}</span>
                  </div>
                </div>
                
                <ulclassName ="space-y-4mb-8" />
                  {plan.features.map((feature, featureIndex) => (
                    <likey ="{featureIndex}" className="flexitems-centerspace-x-3" />
                      <Check Circleclass Name="w-5 h-5text-green-400flex-shrink-0" / />
                      <spanclassName ="text-gray-300"   />{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to ="/contact"
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-whitehover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}
                  />Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <sectionclassName ="py-20px-4relative" />
        <div className ="relative max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Trusted by <spanclassName ="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />50,000+</span> Users
            </h2>
            <pclassName ="text-xl text-gray-300 max-w-4xlmx-auto" />
              See what our customers are saying about their success with our AI social media scheduler.
            </p>
          </div>
          
          <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
            {testimonials.map((testimonial, index) => (
              <divkey ="{index}" className="bg-white/10 backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20 hover:bg-white/20transition-allduration-300" />
                <div className ="flexitems-centermb-4" />
                  <div className ="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-fullflex items-centerjustify-centertext-whitefont-boldmr-4"  />{testimonial.avatar}
                  </div>
                  <div />
                    <div className ="font-semiboldtext-white"   />{testimonial.name}</div>
                    <div className ="text-gray-400text-sm"   />{testimonial.company}</div>
                  </div>
                </div>
                <div className ="flexmb-4" />
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Starkey ="{i}" className="w-5 h-5text-yellow-400fill-current" / />
                  ))}
                </div>
                <pclassName ="text-gray-300italic" />"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <sectionclassName ="py-20px-4relative" />
        <div className ="absolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" / />
        <div className ="relative max-w-7xlmx-auto" />
          <div className ="text-center" />
            <div className ="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden" />
              <div className ="relativez-10" />
                <h2className ="text-4 xl sm:text-5 xl md:text-6 xl font-bold text-whitemb-6leading-tight" />
                  Ready to Transform Your <spanclassName ="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent"   />Social Media?</span>
                </h2>
                
                <pclassName ="text-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed" />
                  Join thousands of businesses already using our AI-powered social media scheduler 
                  to increase engagement, save time, and grow their online presence.
                </p>
                
                <div className ="flex flex-col sm:flex-row gap-6justify-centermb-8" />
                  <Link to ="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                    <span   />Start Free Trial</span>
                    <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
                  </Link>
                  <Link to ="#pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                    <span   />View All Plans</span>
                    <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
                  </Link>
                </div>
                
                <div className ="text-white/80text-sm" />
                  <p />✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}