import { Phone, Mail } from 'lucide-react';
'use client'
import { Brain, BarChart, Target } from 'lucide-react'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { Building } from 'lucide-react'
import { CheckCircle, Phone, Mail, PhoneIcon, MailIcon } from 'lucide-react'

const AILeadGenerationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Lead Scoring',
      description: 'Intelligent lead scoring using machine learning to identify high-value prospects and prioritize sales efforts.',
      benefits: ['9 5% accuracy', 'Real-time scoring', 'Behavioral analysis']
   },
    {icon: Target,
      title: 'Smart Prospecting',
      description: 'AI-powered prospecting that finds ideal customers based on your ideal customer profile and market data.',
      benefits: ['Automated research', 'Contact discovery', 'Intent signals']
   },
    {icon: Mail,
      title: 'Email Sequences',
      description: 'Personalized email sequences that automatically follow up with prospects and nurture leads through the sales funnel.',
      benefits: ['Personalization', 'A/B testing', 'Auto-optimization']
   },
    {icon: BarChart,
      title: 'Lead Analytics',
      description: 'Comprehensive analytics on lead quality, conversion rates, and campaign performance to optimize your strategy.',
      benefits: ['Conversion tracking', 'ROI analysis', 'Performance insights']
   },
    {icon: Zap,
      title: 'CRM Integration',
      description: 'Seamless integration with popular CRMs to automatically sync leads and track the entire sales process.',
      benefits: ['Auto-sync', 'Real-time updates', 'Pipeline management']
   },
    {icon: Users,
      title: 'Team Collaboration',
      description: 'Collaborative features that allow your team to work together on lead generation and follow-up activities.',
      benefits: ['Team workflows', 'Lead assignment', 'Activity tracking']
    }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000leads/month',
        'Basic AI scoring',
        'Email sequences',
        'CRM integration',
        'Email support',
        'Basic analytics'
      ],
      popular: false
   },
    {name: 'Professional',
      price: '$49 9',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to10,000leads/month',
        'Advanced AI algorithms',
        'Multi-channel outreach',
        'Advanced analytics',
        'Priority support',
        'A/B testing',
        'Team collaboration'
      ],
      popular: true
   },
    {name: 'Enterprise',
      price: '$1,29 9',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited leads',
        'Custom AI models',
        'All channels',
        'Custom integrations',
        'Dedicated support',
        'Custom development',
        'Advanced compliance',
        'SLA guarantee'
      ],
      popular: false
    }
  ]
  const stats = [
    { number: '300%', label: 'More Qualified Leads' },
    { number: '85%', label: 'Time Savings' },
    { number: '95%', label: 'Lead Accuracy' },
    { number: '50+', label: 'CRM Integrations' }
  ]
  const useCases = [
    {
      title: 'B2B Lead Generation',
      description: 'Generate high-quality B2B leads using AI-powered company research, contact discovery, and intent signals.',
      icon: Building
   },
    {title: 'E-commerce Prospecting',
      description: 'Find and engage potential customers for e-commerce businesses with personalized outreach and retargeting.',
      icon: ShoppingCart
   },
    {title: 'SaaS Trial Conversion',
      description: 'Convert free trial users into paying customers with intelligent lead nurturing and personalized follow-ups.',
      icon: Cloud
   },
    {title: 'Real Estate Leads',
      description: 'Generate qualified real estate leads with AI-powered market analysis and automated follow-up sequences.',
      icon: Home
    }
  ]
  return (
  <SEOOptimizertitle=&quot;AI Lead Generation Platform - ZionTechGroup&quot;
        description=&quot;Generate 30 0% more qualified leads with AI-powered prospecting, lead scoring, and automated outreach.85% time savingsand95%accuracy.&quot;
        keywords={['AI lead generation', 'lead scoring', 'prospecting', 'sales automation', 'leadnurturing']}
        canonicalUrl=&quot;https://ziontechgroup.com/ai-lead-generation&quot;
      />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
        <Navigation />
        <main className=&quot;pt-16&quot;>
          {/* Hero Section */}
          <section className=&quot;container mx-auto px-4 py-16 text-center&quot;></section>
            <div className=&quot;max-w-4xl mx-auto&quot;></div>
              <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6 neon-text&quot;>
                AI Lead Generation Platform
              </h1>
              <p className=&quot;text-xl md:text-2xl text-cyan-400 mb-8&quot;>
                Generate 300% more qualified leads with AI
              </p>
              <p className=&quot;text-lg text-gray-300 mb-12 max-w-3xl mx-auto&quot;>
                Our AI-powered lead generation platform helps businesses find, score, and nurture high-quality leads,
with intelligent automation and personalized outreach.
            </p><divclassName=&quot;flex flex-colsm:flex-row gap-4 justify-center items-centermb-16&quot;></div><ahref=&quot;tel:+13024640950&quot;
                 className=&quot;cyber-button flexitems-centerspace-x-2&quot;
                ><PhoneIconclassName=&quot;w-5h-5&quot; /><spa n>Call (302)464-0950</spa></a><ahref=&quot;mailto:kleber@ziontechgroup.com&quot;
                 className=&quot;cyber-button flexitems-centerspace-x-2&quot;
                  style={{background: 'linear-gradient(45 deg, #8 b5cf6, #ec4899)'}}
                ><MailIconclassName=&quot;w-5h-5&quot; /><spa n>GetFreeDemo</spa></a></di>{/* Stats */}
            <divclassName=&quot;grid grid-cols-2 md:grid-cols-4 gap-8mb-16&quot;></div>{stats.map((statindex) => (
               <divkey={index}className=&quot;cyber-cardp-6text-center&quot;></div><divclassName=&quot;text-3 xlmd:text-4 xl font-boldtext-cyan-400mb-2neon-text&quot;></div>{stat.number}
                  </di><divclassName=&quot;text-gray-300font-medium&quot;></div>{stat.label}</di></di>))}
            </di></di></sectio>{/* FeaturesSection */}
        <sectionclassName=&quot;container mx-auto px-4py-16&quot;><spanclassName=&quot;text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text&quot;></className=&quot;text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text&quot;>Powerful Lead Generation Features
          </h><divclassName=&quot;grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8&quot;></div>{features.map((featureindex) => (
             <divkey={index}className=&quot;cyber-card p-6 hover:scale-105transition-allduration-300&quot;></div><feature.iconclassName=&quot;w-12h-12text-cyan-400mb-4&quot; /><h3className=&quot;text-xl font-boldtext-whitemb-3&quot;>{feature.title}</h><pclassName=&quot;text-gray-300mb-4&quot;>{feature.description}</p><ulclassName=&quot;space-y-2&quot;>{feature.benefits.map((benefitidx) => (
                   <likey={idx}className=&quot;flex items-center space-x-2 text-smtext-cyan-400&quot;><CheckCircleclassName=&quot;w-4h-4&quot; /><spa n>{benefit}</spa></l>))}
                </u></di>))}
          </di></sectio>{/* Use CasesSection */}
        <sectionclassName=&quot;container mx-auto px-4py-16&quot;><spanclassName=&quot;text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text&quot;></className=&quot;text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text&quot;>Perfect for Every Industry
          </h><divclassName=&quot;grid grid-cols-1md:grid-cols-2gap-8&quot;></div>{useCases.map((useCaseindex) => (
             <divkey={index}className=&quot;cyber-card p-6 hover:scale-105transition-allduration-300&quot;></div><useCase.iconclassName=&quot;w-12h-12text-cyan-400mb-4&quot; /><h3className=&quot;text-xl font-boldtext-whitemb-3&quot;>{useCase.title}</h><pclassName=&quot;text-gray-300&quot;>{useCase.description}</p></di>))}
          </di></sectio>{/* PricingSection */}
        <sectionclassName=&quot;container mx-auto px-4py-16&quot;><spanclassName=&quot;text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text&quot;></className=&quot;text-3 xlmd:text-4 xl font-bold text-white text-center mb-12neon-text&quot;>Simple, Transparent Pricing
          </h><divclassName=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xlmx-auto&quot;></div>{pricingPlans.map((planindex) => (
             <divkey={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400scale-10 5'  : ''
                }`}
                ></div>{plan.popular && (
                  <divclassName=&quot;absolute -top-4 left-1/2transform-translate-x-1/2&quot;></div><spanclassName=&quot;bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold&quot;></className=&quot;bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold&quot;>Most Popular
                    </spa></di>)}
                <divclassName=&quot;text-centermb-6&quot;></div><h3className=&quot;text-2 xl font-boldtext-whitemb-2&quot;>{plan.name}</h><pclassName=&quot;text-gray-400mb-4&quot;>{plan.description}</p><divclassName=&quot;flexitems-baselinejustify-center&quot;></div><spanclassName=&quot;text-4 xl font-boldtext-cyan-400&quot;>{plan.price}</spa><spanclassName=&quot;text-gray-400ml-1&quot;>{plan.period}</spa></di></di><ulclassName=&quot;space-y-3mb-8&quot;>{plan.features.map((featureidx) => (
                   <likey={idx}className=&quot;flexitems-centerspace-x-3&quot;><CheckCircleclassName=&quot;w-5 h-5 text-cyan-400flex-shrink-0&quot; /><spanclassName=&quot;text-gray-300&quot;>{feature}</spa></l>))}
                </u><ahref=&quot;tel:+13024640950&quot;
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className=&quot;container mx-auto px-4 py-16 text-center&quot;></section>
            <div className=&quot;cyber-card p-12 max-w-4xl mx-auto&quot;></div>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 neon-text&quot;>
                Ready to 3x Your Lead Generation?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Join 2,500+ companies already using our AI lead generation platform
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
                <a,
href=&quot;tel:+13024640950&quot;
                  className=&quot;cyber-button flex items-center justify-center space-x-2&quot;
                >
                  <PhoneIcon className=&quot;w-5 h-5&quot; />
                  <span>Call (302) 464-0950</span>
                </a>
                <a,
href=&quot;mailto:kleber@ziontechgroup.com&quot;
                  className=&quot;cyber-button flex items-center justify-center space-x-2&quot;
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <MailIcon className=&quot;w-5 h-5&quot; />
                  <span>Schedule Demo</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
export default AILeadGenerationPage
