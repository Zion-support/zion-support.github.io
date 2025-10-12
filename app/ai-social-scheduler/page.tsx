import { Helmet } from 'react-helmet-async'
import { Calendar, Share2, TrendingUp, BarChart3, Zap, CheckCirc l e, ArrowRight, Star, Clock, Globe, Brain } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react';
import { Share2, ArrowRight} from 'lucide-react';
import { Link } from 'react-router-dom';

const AISocialSchedulerPa g e: React.FC = () => {
  constfeatures= [
    {
      icon: <BrainclassName="w-5h-5ml-2" />,
      title: 'AI Content Generation',
      description: 'Generate engaging social media posts using AI that understan d s your brand voice and audience preferenc e s.',
      benefits: ['Brand voice training', 'Audience analysis', 'Content optimizati o n', 'Multi-platformadaptation']
    },
    {
      icon: <CalendarclassName="w-5h-5ml-2" />,
      title: 'Smart Scheduling',
      description: 'AI determines optimal posting times based on your audience activity patterns and engagement data.',
      benefits: ['Optimal timing', 'Audience insights', 'Engagement prediction', 'Cross-platformsync']
    },
    {
      icon: <TrendingUpclassName="w-5h-5ml-2" />,
      title: 'Performan c e Analytics',
      description: 'Comprehensi v e analytics with AI-poweredinsightsto improve your social media strategy.',
      benefits: ['Engagement metrics', 'ROI tracking', 'Trend analysis', 'Competitor insights']
    },
    {
      icon: <Share2className="w-5h-5ml-2" />,
      title: 'Multi-PlatformManagement',
      description: 'Manage all your social media accounts from one dashboard with platform-specificoptimizatio n.',
      benefits: ['Unified dashboard', 'Platform optimizati o n', 'Bulk posting', 'Content adaptation']
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: 'Automated Engagement',
      description: 'AI-poweredauto-responsesand engagement tools to maintain active social media presence.',
      benefits: ['Auto-responses', 'Comment management', 'Hashtag optimizati o n', 'Community building']
    },
    {
      icon: <BarChart3className="w-5h-5ml-2" />,
      title: 'Campaign Management',
      description: 'Plan, execute, and track social media campaigns with AI-drivenrecommendation s.',
      benefits: ['Campaign planning', 'A/B testing', 'Performan c e tracking', 'Budget optimizati o n']
    }
  ]

  const pricingPlans= [
    {
      name: 'Starter',
      price: '$39',
      period: '/month',
      description: 'Perfect for individua l s and small businesses',
      features: [
        'Up to 3 social accounts',
        '50 posts per month',
        'Basic AI content generation',
        'Standard analytics',
        'Email support';
      ],
      popular: false;
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
        'Team collaborati o n',
        'Priority support',
        'API access';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizatio n s and agencies',
      features: [
        'Unlimited accounts',
        'White-labeloptions',
        'Custom integratio n s',
        'Dedicated support',
        'Advanced analytics',
        'Custom AI training';
      ],
      popular: false;
    }
  ]

  const testimonials= [
    {
      name: 'Maria Garcia',
      company: 'Digital Marketing Agency',
      content: 'AI Social Scheduler increased our client engagement by 150%. The AI content generation is incredibly effective.',
      rating: 5,
      avatar: 'MG';
    },
    {
      name: 'Tom Anderson',
      company: 'E-commerceBrand',
      content: 'The optimal timing feature alone increased our reach by 200%. Best social media tool we've ever used.',
      rating: 5,
      avatar: 'TA';
    },
    {
      name: 'Sarah Kim',
      company: 'Content Creator',
      content: 'Saves me 10+ hours per week on content planning. The AI understan d s my brand voice perfectly.',
      rating: 5,
      avatar: 'SK';
    }
  ]

  conststats= [
    { number: '150%', label: 'Engagement Increase', icon: <TrendingUpclassName="w-5h-5ml-2" /> ,},
    { number: '200%', label: 'Reach Improveme n t', icon: <GlobeclassName="w-5h-5ml-2" /> ,},
    { number: '10 hrs', label: 'Time Saved/Week', icon: <ClockclassName="w-5h-5ml-2" /> ,},
    { number: '50 K+', label: 'Posts Scheduled', icon: <CalendarclassName="w-5h-5ml-2" /> ,}
  ]

return (
    <>
      <Helmet></Helmet>
        <title />AI Social Scheduler - Smart Social Media Management | Zion Tech Group</title>
        <meta name="description" content="Revolutiona r y AI-poweredsocialmedia management with content generation, smart scheduling, and performan c e analytics. Increase engagement by 150% and save 10+ hours per week." />
        <meta name="keywords" content="AI social media scheduler, social media automation, content generation, social media analytics, social media management, AI content creation" />
        <meta name="robots" content="index, follow" />
        <linkrel="canonical" href="https://ziontechgro u p.com/ai-social-scheduler"  />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Share2className="w-5h-5ml-2" />
            <span />AI-PoweredSocialMedia Management</span>
          </div>
          
          <h1 className="w-5h-5ml-2" />
            AI Social;
            <br />
            <span className="w-5h-5ml-2" />Scheduler Pro;
            </span>
          </h1>
          
          <p className="w-5h-5ml-2">Transform your social media presence with AI-poweredcontentgeneration, 
            smart scheduling, and performan c e analytics that increase engagement by 150%.;
          </p>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Linkto="/contact" className="groupbg-gradient-to-rfrom-pink-500to-cyan-600text-whitepx-10py-4rounded-xlfont-semiboldhover:from-pink-600hover:to-cyan-700transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lgshadow-pink-500/25hover:shadow-pink-500/40transformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
            <Linkto="#demo" className="groupborder-2border-pink-400text-pink-400px-10py-4rounded-xlfont-semiboldhover:bg-pink-400hover:text-gray-900transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
              <span />Watch Demo</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
          </div>
      </section>

      {/* Stats Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {stats.map((stat, index) => ())
              <divkey="{index}" className="text-centerbg-white/5backdrop-blur-smrounded-2xlp-6borderborder-white/10" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{stat.icon}>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{stat.number}>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{stat.label}>
                </div>
            ))}
          </div>
      </section>

      {/* Features Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Powerful <span className="w-5h-5ml-2" />Features</span>
            </h2>
            <p className="w-5h-5ml-2">Our AI-poweredsocialmedia scheduler uses advanced machine learning to create, 
              schedule, and optimize your social media content across all platforms.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {features.map((feature, index) => ())
              <divkey="{index}" className="groupbg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:bg-white/20transition-allduration-300hover:scale-105" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{feature.icon}>
                </div>
                <h3 className="w-5h-5ml-2" />{feature.title}
                </h3>
                <p className="w-5h-5ml-2">{feature.description}
                </p>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  {feature.benefits.map((benefit, benefitInd e x) => ())
                    <divkey="{benefitInd e x}" className="flexitems-centerspace-x-2text-gray-400text-sm" />
                      <CheckCirc leclassName="w-5h-5ml-2" />
                      <span />{benefit}</span>
                    </div>
                  ))}
                </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Affordable <span className="w-5h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5h-5ml-2">Choose the perfect plan for your social media management needs. All plans include our core AI features;
              with flexible options for businesses of all sizes.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {pricingPla n s.map((plan, index) => ())
              <divkey="{index}" className="{`relative" bg-white/10 backdrop-blur-lgrounded-2xl p-8bordertransition-allduration-300hover:scale-105 ${>
                plan.popular;
                  ? 'border-pink-400/50 shadow-2xlshadow-pink-500/20';
                  : 'border-white/20 hover: border-white/40';
              }`} />
                {plan.popular && ()
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Most Popular>
                    </div>
                )}
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                  <p className="w-5h-5ml-2">{plan.description}</p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <span className="w-5h-5ml-2" />{plan.price}</span>
                    <span className="w-5h-5ml-2" />{plan.period}</span>
                  </div>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  {plan.features.map((feature, featureInd e x) => ())
                    <divkey="{featureInd e x}" className="flexitems-centerspace-x-3" />
                      <CheckCirc leclassName="w-5h-5ml-2" />
                      <span className="w-5h-5ml-2" />{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className="{`block" w-fulltext-centerpy-3rounded-xlfont-semiboldtransition-allduration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-rfrom-pink-500to-cyan-600text-whitehover:from-pink-600hover:to-cyan-700shadow-lgshadow-pink-500/25';
                      : 'border-2border-pink-400text-pink-400hover: bg-pink-400hover:text-gray-900';
                  }`}
                  />Get Started;
                </Link>
              </div>
            ))}
          </div>
      </section>

      {/* Testimonia l s Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Loved by <span className="w-5h-5ml-2" />Marketers</span>
            </h2>
            <p className="w-5h-5ml-2">See how AI Social Scheduler is transformi n g social media management for businesses and creators worldwide.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {testimonia l s.map((testimoni a l, index) => ())
              <divkey="{index}" className="bg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.avatar}>
                  </div>
                  <div />
                    <h4 className="w-5h-5ml-2" />{testimoni a l.name}</h4>
                    <p className="w-5h-5ml-2">{testimoni a l.company}</p>
                  </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  {[...Array(testimoni a l.rating)].map((_, i) => ())
                    <Starkey="{i}" className="w-5h-5text-yellow-400fill-current"  />
                  ))}
                </div>
                <p className="w-5h-5ml-2">"{testimoni a l.content}"</p>
              </div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <h2 className="w-5h-5ml-2" />
            Ready to Transform Your;
            <br />
            <span className="w-5h-5ml-2" />Social Media Strategy?;
            </span>
          </h2>
          <p className="w-5h-5ml-2">Join thousands of marketers already increasing engagement and saving time with AI Social Scheduler.;
            Start your free trial today - no credit card required.;
          </p>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Linkto="/contact" className="groupbg-whitetext-pink-600px-10py-4rounded-xlfont-boldtext-lghover:bg-gray-100transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lghover:shadow-xltransformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
            <Linkto="/pricing" className="groupborder-2border-whitetext-whitepx-10py-4rounded-xlfont-boldtext-lghover:bg-white/10transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
              <span />View All Plans</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
          </div>
      </section>
    </>
  )
}

export default AISocialSchedulerPa g e;