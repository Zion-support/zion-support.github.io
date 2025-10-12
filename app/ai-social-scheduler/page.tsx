import {Helmet} from 'react-helmet-async'
import {Calendar, Share2, TrendingUp, BarChart3, Zap, CheckCircle, ArrowRight, Star, Clock, Globe, Brain} from 'lucide-react'
import {Link} from 'react-router-dom'
import React from 'react';
import {Share2, ArrowRight} from 'lucide-react';
import {Link} from 'react-router-dom';

const AISocial Scheduler Page: React.FC = () => {
  constfeatures = [
    {
      icon: <Brainclass Name ="w-8h-8text-cyan-400" / />,
      title: 'AI Content Generation',
      description: 'Generate engaging social media posts using AI that understands your brand voice and audience preferences.',
      benefits: ['Brand voice training', 'Audience analysis', 'Content optimization', 'Multi-platform adaptation']
    },
    {
      icon: <Calendarclass Name ="w-8h-8text-emerald-400" / />,
      title: 'Smart Scheduling',
      description: 'AI determines optimal posting times based on your audience activity patterns and engagement data.',
      benefits: ['Optimal timing', 'Audience insights', 'Engagement prediction', 'Cross-platform sync']
    },
    {
      icon: <Trending Upclass Name="w-8h-8text-purple-400" / />,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics with AI-powered insights to improve your social media strategy.',
      benefits: ['Engagement metrics', 'ROI tracking', 'Trend analysis', 'Competitor insights']
    },
    {
      icon: <Share2class Name ="w-8h-8text-red-400" / />,
      title: 'Multi- Platform Management',
      description: 'Manage all your social media accounts from one dashboard with platform-specific optimization.',
      benefits: ['Unified dashboard', 'Platform optimization', 'Bulk posting', 'Content adaptation']
    },
    {
      icon: <Zapclass Name ="w-8h-8text-orange-400" / />,
      title: 'Automated Engagement',
      description: 'AI-powered auto-responses and engagement tools to maintain active social media presence.',
      benefits: ['Auto-responses', 'Comment management', 'Hashtag optimization', 'Community building']
    },
    {
      icon: <Bar Chart3class Name="w-8h-8text-pink-400" / />,
      title: 'Campaign Management',
      description: 'Plan, execute, and track social media campaigns with AI-driven recommendations.',
      benefits: ['Campaign planning', 'A/B testing', 'Performance tracking', 'Budget optimization']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        'Up to 3 social accounts',
        '50 posts per month',
        'Basic AI content generation',
        'Standard analytics',
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
        'Up to 10 social accounts',
        'Unlimited posts',
        'Advanced AI features',
        'Team collaboration',
        'Priority support',
        'API access'
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
        'White-label options',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics',
        'Custom AI training'
      ],
      popular: false
    }
  ]

  consttestimonials = [
    {
      name: 'Maria Garcia',
      company: 'Digital Marketing Agency',
      content: 'AI Social Scheduler increased our client engagement by 150%. The AI content generation is incredibly effective.',
      rating: 5,
      avatar: 'MG'
    },
    {
      name: 'Tom Anderson',
      company: 'E-commerce Brand',
      content: 'The optimal timing feature alone increased our reach by 200%. Best social media tool we\'ve ever used.',
      rating: 5,
      avatar: 'TA'
    },
    {
      name: 'Sarah Kim',
      company: 'Content Creator',
      content: 'Saves me 10+ hours per week on content planning. The AI understands my brand voice perfectly.',
      rating: 5,
      avatar: 'SK'
    }
  ]

  conststats = [
    { number: '150%', label: 'Engagement Increase', icon: <Trending Upclass Name="w-6h-6text-cyan-400" / /> },
    { number: '200%', label: 'Reach Improvement', icon: <Globeclass Name ="w-6h-6text-emerald-400" / /> },
    { number: '10 hrs', label: 'Time Saved/Week', icon: <Clockclass Name ="w-6h-6text-purple-400" / /> },
    { number: '50 K+', label: 'Posts Scheduled', icon: <Calendarclass Name ="w-6h-6text-orange-400" / /> }
  ]

  return (
    <>
      <Helmet />
        <title   />AISocial Scheduler - SmartSocial MediaManagement | ZionTech Group</title>
        <meta name ="description" content="Revolutionary AI-poweredsocial mediamanagement withcontent generation, smartscheduling, andperformance analytics. Increaseengagement by 150% andsave 10+ hoursper week." / / />
        <meta name ="keywords" content="AIsocial mediascheduler, socialmedia automation, contentgeneration, socialmedia analytics, socialmedia management, AIcontent creation" / / />
        <meta name ="robots" content="index, follow" / / />
        <linkrel ="canonical" href="https://ziontechgroup.com/ai-social-scheduler" / />
      </Helmet>

      {/* HeroSection */}
      <sectionclassName ="relativepy-20 px-4 overflow-hiddenbg-gradient-to-brfrom-slate-900via-pink-900to-slate-900" />
        <div className ="absoluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(236,72,153,0.3)_0%,transparent_50%)]" / />
        <div className ="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.3)_0%,transparent_50%)]" / />
        <div className ="relative max-w-7 xlmx-autotext-center" />
          <div className ="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 text-pink-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-pink-400/30" />
            <Share2class Name ="w-4h-4" / />
            <span   />AI- Powered Social Media Management</span>
          </div>
          
          <h1className ="text-4 xl sm:text-6 xl md:text-7 xl font-bold text-whitemb-8leading-tight" />
            AI Social
            <br / />
            <spanclassName ="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400bg-clip-texttext-transparent"  />Scheduler Pro
            </span>
          </h1>
          
          <pclassName ="text-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed" />
            Transform your social media presence with AI-powered content generation, 
            smart scheduling, and performance analytics that increase engagement by 150%.
          </p>
          
          <div className ="flex flex-col sm:flex-row gap-6justify-centermb-16" />
            <Link to ="/contact" className="group bg-gradient-to-r from-pink-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40transformhover:scale-105" />
              <span   />Start Free Trial</span>
              <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
            <Link to ="#demo" className="group border-2 border-pink-400 text-pink-400 px-10 py-4 rounded-xl font-semibold hover:bg-pink-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span   />Watch Demo</span>
              <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <sectionclassName ="py-20px-4bg-gray-900" />
        <div className ="max-w-7xlmx-auto" />
          <div className ="grid grid-cols-2md:grid-cols-4gap-8" />
            {stats.map((stat, index) => (
              <divkey ="{index}" className="text-centerbg-white/5 backdrop-blur-smrounded-2 xlp-6borderborder-white/10" />
                <div className ="flexjustify-centermb-4"  />{stat.icon}
                </div>
                <div className ="text-3 xlmd:text-4 xlfont-boldtext-whitemb-2"  />{stat.number}
                </div>
                <div className ="text-gray-300text-sm"  />{stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <sectionclassName ="py-20 px-4 bg-gradient-to-brfrom-slate-800/50to-pink-900/50" />
        <div className ="max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Powerful <spanclassName ="bg-gradient-to-r from-pink-400 to-cyan-400bg-clip-texttext-transparent"   />Features</span>
            </h2>
            <pclassName ="text-xl text-gray-300 max-w-4xlmx-auto" />
              Our AI-powered social media scheduler uses advanced machine learning to create, 
              schedule, and optimize your social media content across all platforms.
            </p>
          </div>
          
          <div className ="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8" />
            {features.map((feature, index) => (
              <divkey ="{index}" className="groupbg-white/10 backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <div className ="flexitems-centerjustify-centerw-16 h-16 bg-gradient-to-rfrom-pink-500 to-cyan-600 rounded-2 xlmb-6 group-hover:scale-110transition-transformduration-300"  />{feature.icon}
                </div>
                <h3className ="text-2 xlfont-boldtext-whitemb-4group-hover:text-pink-400transition-colors"  />{feature.title}
                </h3>
                <pclassName ="text-gray-300mb-6leading-relaxed" />
                  {feature.description}
                </p>
                <div className ="space-y-2" />
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <divkey ="{benefitIndex}" className="flexitems-centerspace-x-2text-gray-400text-sm" />
                      <Check Circleclass Name="w-4h-4text-green-400" / />
                      <span   />{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <sectionclassName ="py-20px-4bg-gray-900" />
        <div className ="max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Affordable <spanclassName ="bg-gradient-to-r from-pink-400 to-cyan-400bg-clip-texttext-transparent"   />Pricing</span>
            </h2>
            <pclassName ="text-xl text-gray-300 max-w-4xlmx-auto" />
              Choose the perfect plan for your social media management needs. All plans include our core AI features 
              with flexible options for businesses of all sizes.
            </p>
          </div>
          
          <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
            {pricing Plans.map((plan, index) => (
              <divkey ="{index}" className="{`relative" bg-white/10 backdrop-blur-lgrounded-2 xlp-8 bordertransition-allduration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-pink-400/50 shadow-2 xlshadow-pink-500/20' 
                  : 'border-white/20 hover: border-white/40'
              }`} />
                {plan.popular && (
                  <div className ="absolute -top-4 left-1/2transform-translate-x-1/2" />
                    <div className ="bg-gradient-to-rfrom-pink-500 to-cyan-600 text-whitepx-6 py-2 rounded-fulltext-smfont-semibold"  />MostPopular
                    </div>
                  </div>
                )}
                
                <div className ="text-centermb-8" />
                  <h3className ="text-2 xl font-boldtext-whitemb-2"   />{plan.name}</h3>
                  <pclassName ="text-gray-300mb-4" />{plan.description}</p>
                  <div className ="flexitems-baselinejustify-center" />
                    <spanclassName ="text-5 xlfont-boldtext-white"   />{plan.price}</span>
                    <spanclassName ="text-gray-400ml-2"   />{plan.period}</span>
                  </div>
                </div>
                
                <div className ="space-y-4mb-8" />
                  {plan.features.map((feature, featureIndex) => (
                    <divkey ="{featureIndex}" className="flexitems-centerspace-x-3" />
                      <Check Circleclass Name="w-5 h-5text-green-400flex-shrink-0" / />
                      <spanclassName ="text-gray-300"   />{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link to ="/contact" 
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-500 to-cyan-600 text-whitehover:from-pink-600 hover:to-cyan-700 shadow-lg shadow-pink-500/25'
                      : 'border-2 border-pink-400 text-pink-400 hover: bg-pink-400 hover:text-gray-900'
                  }`}
                  />Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <sectionclassName ="py-20 px-4 bg-gradient-to-brfrom-pink-900/50to-purple-900/50" />
        <div className ="max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Loved by <spanclassName ="bg-gradient-to-r from-pink-400 to-purple-400bg-clip-texttext-transparent"   />Marketers</span>
            </h2>
            <pclassName ="text-xl text-gray-300 max-w-4xlmx-auto" />
              See how AI Social Scheduler is transforming social media management for businesses and creators worldwide.
            </p>
          </div>
          
          <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
            {testimonials.map((testimonial, index) => (
              <divkey ="{index}" className="bg-white/10 backdrop-blur-lgrounded-2 xlp-8borderborder-white/20" />
                <div className ="flexitems-centermb-4" />
                  <div className ="w-12 h-12 bg-gradient-to-rfrom-pink-500 to-cyan-600 rounded-fullflex items-centerjustify-centertext-whitefont-boldmr-4"  />{testimonial.avatar}
                  </div>
                  <div />
                    <h4className ="text-whitefont-semibold"   />{testimonial.name}</h4>
                    <pclassName ="text-gray-400text-sm" />{testimonial.company}</p>
                  </div>
                </div>
                <div className ="flexitems-centermb-4" />
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
      <sectionclassName ="py-20 px-4 bg-gradient-to-r from-pink-600via-purple-600to-cyan-600" />
        <div className ="max-w-7 xlmx-autotext-center" />
          <h2className ="text-4 xl sm:text-5 xl md:text-6 xl font-boldtext-whitemb-6" />
            Ready to Transform Your
            <br / />
            <spanclassName ="bg-gradient-to-r from-pink-300 to-cyan-300bg-clip-texttext-transparent"  />Social Media Strategy?
            </span>
          </h2>
          <pclassName ="text-xl sm:text-2 xl text-white/90 mb-8 max-w-4xlmx-auto" />
            Join thousands of marketers already increasing engagement and saving time with AI Social Scheduler. 
            Start your free trial today - no credit card required.
          </p>
          <div className ="flex flex-col sm:flex-rowgap-6justify-center" />
            <Link to ="/contact" className="group bg-white text-pink-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
              <span   />Start Free Trial</span>
              <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
            <Link to ="/pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span   />View All Plans</span>
              <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default AISocial Scheduler Page;