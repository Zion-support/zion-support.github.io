import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Cloud, CheckCircle, Star, Clock, BarChart3, Sparkles, Target, Shield, MessageCircle, Mail, Phone, MapPin, Play, Settings, Database, Search, Server, Network, Database as DatabaseIcon  } from 'lucide-react';
export default function CloudMigrationPage() {
}
  const f eat ures = [
    {
}
      i con: <Cloud c las sNa me="w-6h-6t e xt-c yan-400" />,
      t itle: 'Multi-Cloud Strategy',
      description: 'Comprehensive cloud migration strategy supporting AWS, Azure, Google Cloud, and hybrid environments.',
      benefits: ['AWS expertise', 'Azure migration', 'Google Cloud setup', 'Hybrid cloud solutions']
    },
    {
      i con: <Shield c las sNa me="w-6h-6t e xt-e mer ald-400" />,
      t itle: 'Security-First Approach',
      description: 'Enterprise-grade security with zero-downtime migration and comprehensive compliance validation.',
      benefits: ['Zero-downtime migration', 'Security compliance', 'Data encryption', 'Access controls']
    },
    {
      i con: <BarChart3 c las sNa me="w-6h-6t e xt-p urp le-400" />,
      t itle: 'Cost Optimization',
      description: 'Intelligent r esource allocation and cost monitoring to reduce cloud expenses by up to 40%.',
      benefits: ['Cost analysis', 'Resource optimization', 'Auto-scaling', 'Budget monitoring']
    },
    {
      i con: <Zap c las sNa me="w-6h-6t e xt-p ink-400" />,
      t itle: 'Performance Enhance ment',
      description: 'Optimize application performance with advanced monitoring, caching, and load balancing.',
      benefits: ['Performance monitoring', 'Load balancing', 'Caching strategies', 'Auto-scaling']
    },
    {
      i con: <Database c las sNa me="w-6h-6t e xt-o ran ge-400" />,
      t itle: 'Database Migration',
      description: 'Seamless database migration with minimal downtime and data integrity guar antees.',
      benefits: ['Zero data loss', 'Schema migration', 'Data validation', 'Backup strategies']
    },
    {
      i con: <Network c las sNa me="w-6h-6t e xt-red-400" />,
      t itle: 'Network Architectu re',
      description: 'Design and implement robust cloud network architectu re with high availability and scalability.',
      benefits: ['VPC design', 'Load balancing', 'CDN setup', 'Global distribution']
    }
  ]
  const pricingPlans = [
    {
      name: 'Assessment',
      price: '$2,500',
      period: 'one-time',
      description: 'Comprehensive cloud readiness a ssessment and migration planning',
      f eat ures: [
        'Current infrastructure audit',
        'Cloud readiness a ssessment',
        'Migration strategy planning',
        'Cost analysis and optimization',
        'Security compliance review',
        'Timeline and roadmap creation',
        'Risk a ssessment and mitigation',
        'Detailed migration report'
      ],
      popular: false,
      cta: 'Get Assessment'
    },
    {
      name: 'Standard Migration',
      price: '$15,000',
      period: 'project',
      description: 'Comp lete cloud migration for small to medium businesses',
      f eat ures: [
        'Full infrastructure migration',
        'Application modernization',
        'Database migration',
        'Security implementation',
        'Performance optimization',
        '30 days post-migration support',
        'Documentation and training',
        'Monitoring setup'
      ],
      popular: true,
      cta: 'Start Migration'
    },
    {
      name: 'Enterprise Migration',
      price: 'Custom',
      period: 'project',
      description: 'Large-scale enterprise cloud transformation with dedicated support',
      f eat ures: [
        'Comp lex multi-cloud migration',
        'Legacy system modernization',
        'Custom application development',
        'Advanced security implementation',
        '24/7 dedicated support',
        'Unlimited post-migration support',
        'Custom integrations',
        'White-label solutions',
        'Dedicated project manager',
        'SLA guar antees'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]
  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'CTO',
      company: 'TechFlow Solutions',
      content: 'Zion's cloud migration reduced our infrastructure costs by 45% while improving performance by 60%. The zero-downtime migration was flawless.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'James Wilson',
      role: 'IT Director',
      company: 'Enterprise Corp',
      content: 'The migration team was exceptional. They handled our comp lex legacy systems with expertise and delivered ahead of schedule.',
      rating: 5,
      avatar: 'JW'
    },
    {
      name: 'Lisa Chen',
      role: 'VP of Engineering',
      company: 'StartupHub',
      content: 'Our applications now run 3 x faster in the cloud. The cost savings alone paid for the migration in 6 months.',
      rating: 5,
      avatar: 'LC'
    }
  ]
  const migrationSteps = [
    {
      step: '01',
      t itle: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and cloud readiness a ssessment.',
      i con: <Search c las sNa me="w-8h-8t e xt-c yan-400" />,
      d uration: '1-2 weeks'
    },
    {
      step: '02',
      t itle: 'Strategy Design',
      description: 'Custom migration strategy tailored to your business needs and technical r equ ire ments.',
      i con: <Target c las sNa me="w-8h-8t e xt-e mer ald-400" />,
      d uration: '1 week'
    },
    {
      step: '03',
      t itle: 'Pre-Migration Setup',
      description: 'Cloud environment preparation, security configu ration, and testing environment setup.',
      i con: <Settings c las sNa me="w-8h-8t e xt-p urp le-400" />,
      d uration: '2-3 weeks'
    },
    {
      step: '04',
      t itle: 'Data Migration',
      description: 'Secu re data transfer with zero data loss guar antee and real-time validation.',
      i con: <Database c las sNa me="w-8h-8t e xt-p ink-400" />,
      d uration: '1-2 weeks'
    },
    {
      step: '05',
      t itle: 'Application Migration',
      description: 'Application deployment, configu ration, and optimization in the cloud environment.',
      i con: <Server c las sNa me="w-8h-8t e xt-o ran ge-400" />,
      d uration: '2-4 weeks'
    },
    {
      step: '06',
      t itle: 'Testing & Optimization',
      description: 'Comprehensive testing, performance optimization, and security validation.',
      i con: <CheckCircle c las sNa me="w-8h-8t e xt-red-400" />,
      d uration: '1-2 weeks'
    }
  ]
  const cloudProviders = [
    {
      name: 'A maz on W eb Serv ices',
      i con: <Cloud c las sNa me="w-8h-8t e xt-o ran ge-400" />,
      description: 'Leading cloud platform with comprehensive serv ices and global reach',
      f eat ures: ['EC2, S3, RDS', 'Lambda functions', 'CloudFront CDN', 'Auto Scaling']
    },
    {
      name: 'M icr oso ft Azure',
      i con: <Cloud c las sNa me="w-8h-8t e xt-b lue-400" />,
      description: 'Enterprise-focused cloud platform with strong M icr oso ft integration',
      f eat ures: ['Virtual Machines', 'Azure SQL', 'App Serv ice', 'Active Directory']
    },
    {
      name: 'Google Cloud Platform',
      i con: <Cloud c las sNa me="w-8h-8t e xt-g reen-400" />,
      description: 'AI and machine learning focused cloud with advanced analytics',
      f eat ures: ['Compute Engine', 'BigQuery', 'AI/ML serv ices', 'Kubernetes Engine']
    },
    {
      name: 'Hybrid Cloud',
      i con: <Network c las sNa me="w-8h-8t e xt-p urp le-400" />,
      description: 'Best of both worlds with on-premises and cloud integration',
      f eat ures: ['Hybrid connectivity', 'Data synchronization', 'Unified management', 'Flexible deployment']
    }
  ]
  return (
    <>
    </>
      <Helmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <meta name="description" content="Professional 5G data analytics serv ices by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <t itle>Cloud Migration Serv ices - Expert Cloud Transformation | Zion Tech Group</t itle>
        <meta name="description" content="Transform your business with our expert cloud migration serv ices. AWS, Azure, Google Cloud migration with zero downtime. Starting at $2,500. Free consultation available." / / />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud migration, cloud transformation, cloud consulting, infrastructure migration" / / />
        <meta name="robots" content="index, follow" / / />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-migration" />
      </Helmet>
    </>
      <d iv c las sNa me="m in-h-scre en bg-grad ient-to-br from-s late-900 via-p urp le-900to-s late-900 pt-20">
        </d iv>
        {/* H ero Section */}
        <section c las sNa me="r e lative py-20-px-4-o ver flow-h idd en" />
          {/* Animated Back gro und */}
    <>
          </><d iv c las sNa me="a b solute i nset-0bg-[radial-grad ient(c ircle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)]a nimate-pulse" / />          <d iv c las sNa me="a b solute i nset-0bg-[radial-grad ient(c ircle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]a nimate-pulse" style="{{" a nimationDelay: '1 s' }} / />
    </>
          {/* Floating E lements */}
    <>
          </><d iv c las sNa me="a b solute t op-20 l eft-10 w-16 h-16 bg-c yan-400/20 rounded-fullblur-xlanimate-bounce" style="{{" a nimationDelay: '0.5 s' }} / />
          <d iv c las sNa me="a b solute t op-40 right-20 w-12 h-12 bg-p urp le-400/20 rounded-fullblur-xlanimate-bounce" style="{{" a nimationDelay: '1.5 s' }} / />
          <d iv c las sNa me="a b solute bottom-20 l eft-1/4 w-8 h-8 bg-p ink-400/20 rounded-fullblur-xlanimate-bounce" style="{{" a nimationDelay: '2.5 s' }} / />
          <d iv c las sNa me="r e lative m ax-w-7 x lmx-a uto text-c ente-r">
        </d iv>
            <d iv c las sNa me="i nline-f lex items-c enter space-x-2 bg-grad ient-to-r from-c yan-500/20 to-p urp le-500/20 t ext-c ya-n-400 px-6 py-3 rounded-full t ext-s-m font-medium mb-8-borderborder-c yan-400/30">
        </d iv>
              <Sparkles c las sNa me="w-4h-4" / />
              <span>Expert Cloud Transformation</span>            </d iv>
    </>
            <h1 c las sNa me="t e xt-4xl sm:t ext-6 xl md:t ext-7 xl font-bold t ext-whit-e mb-8-leading-tight" />
              Cloud
    <>
              </><br / />
              <span c las sNa me="b g-grad ient-to-r from-c yan-400 via-p urp le-400 to-p ink-400bg-clip-t exttext-transpare-n-t">Migration
              </span>
            </h1>
    </>
            <p c las sNa me="t e xt-lg sm:t ext-x-l md:t ext-2 xl t ext-gra-y-300 mb-12 m ax-w-4 x lmx-a utoleading-relaxed">
              Transform your business with expert cloud migration serv ices. 
    <>
              </><br / />
              <span c las sNa me="t e xt-c yan-400font-s emi bold">Zero downtime * 40% cost reduction * 99.9% uptime * Enterprise security</span>
            </p>
    </>
    <>
            </><d iv c las sNa me="f lex f lex-c ol sm:f lex-row g ap-6j ust ify-c entermb-16">
        </d iv>              <butt on c las sNa me="g roup bg-grad ient-to-r from-c yan-500 to-p urp le-600 t ext-whit-e px-10 py-4 rounded-xl font-s emi bold hover:from-c yan-600 hover:to-p urp le-700 transition-all d uration-300 f lex items-c enter j ust ify-c enter space-x-2 shadow-lg shadow-c yan-500/25 hover:shadow-c yan-500/40transformhover:scale-105" />
                <span>Get Free Assessment</span>
                <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
              </butt on>
              <butt on c las sNa me="g roup border-2 border-c yan-400 t ext-c ya-n-400 px-10 py-4 rounded-xl font-s emi bold hover:bg-c yan-400 hover:t ext-gra-y-900 transition-all d uration-300 f lex items-c enter j ust ify-c enterspace-x-2back drop-b lur-sm" />
                <Play c las sNa me="w-5h-5" />
                <span   />W atch Case Study</span>              </butt on>
            </d iv>
    </>
            {/* Trust I ndicators */}
    <>
            </><d iv c las sNa me="f lex f lex-w rap j ust ify-c enter items-c enter g ap-8t ext-gra-y-400t ext-s-m">
        </d iv>
              <d iv c las sNa me="f lexitems-c enterspace-x-2">
        </d iv>
                <CheckCircle c las sNa me="w-4h-4t e xt-g reen-400" / />
                <span>500+ Migrations</span>
              </d iv>
              <d iv c las sNa me="f lexitems-c enterspace-x-2">
        </d iv>
                <Star c las sNa me="w-4h-4t e xt-y ellow-400" / />
                <span>4.9/5 Rating</span>
              </d iv>
              <d iv c las sNa me="f lexitems-c enterspace-x-2">
        </d iv>
                <Shield c las sNa me="w-4h-4t e xt-b lue-400" / />
                <span>Zero Data Loss</span>
              </d iv>
              <d iv c las sNa me="f lexitems-c enterspace-x-2">
        </d iv>
                <Clock c las sNa me="w-4h-4t e xt-p urp le-400" / />
                <span>24/7 Support</span>              </d iv>
          </d iv>
        </section>
    </>
        {/* Feat ures Section */}
    <>
        </><section c las sNa me="p y-20px-4-relative" />
          <d iv c las sNa me="a b solute i nset-0 bg-grad ient-to-r from-c yan-500/5to-p urp le-500/5" / />
          <d iv c las sNa me="r e lative m ax-w-7x lmx-a uto">
        </d iv>
            <d iv c las sNa me="t e xt-c entermb-16">
        </d iv>
              <h2 c las sNa me="t e xt-4 xl md:t ext-5 xl font-bold text-white-m-b-6" />
                Comprehensive <span c las sNa me="b g-grad ient-to-r from-c yan-400 to-p urp le-400bg-clip-t exttext-transpare-n-t">Migration Serv ices</span>
              </h2>
              <p c las sNa me="t e xt-xl t ext-gra-y-300 m ax-w-4x lmx-a uto" />
    </>
                From a ssessment to optimization, we handle every aspect of your cloud migration journey.
    <>              </p>
            </d iv>
    </>
            <d iv c las sNa me="g rid grid-c ols-1 md:grid-c ols-2lg:grid-c ols-3g ap-8">
              {f eat ures.map((f eat ure, index) => (
    <>
                </><d iv key="{index}" c las sNa me="g roup bg-white/10 back drop-b lur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all d uration-300 hover:scale-105 hover:shadow-2xlho ver:shadow-c yan-500/10" />
                  <d iv c las sNa me="f lex items-c enter j ust ify-c enter w-16 h-16 bg-grad ient-to-r from-c yan-500 to-p urp le-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformd uration-300">{f eat ure.i con}
                  </d iv>
              ))}
    <>
            </d iv>
        </section>
    </>
        {/* Migration Process Section */}
    <>
        </><section c las sNa me="p y-20 px-4 bg-grad ient-to-br from-s late-800/50to-p urp le-900/50relative" />
              {migrationSteps.map((step, index) => (
    <>
                </><d iv key="{index}" c las sNa me="g roup bg-white/10 back drop-b lur-lg rounded-2 xl p-6 border border-white/20 hover:bg-white/20 transition-alld uration-300hover:scale-105" />
                  <d iv c las sNa me="f lex items-c enterj ust ify-b etween mb-4">
              ))}
    <>
            </d iv>
        </section>
    </>
        {/* Cloud Providers Section */}
    <>
        </><section c las sNa me="p y-20px-4-relative" />
              {cloudProviders.map((provider, index) => (
    <>
                </><d iv key="{index}" c las sNa me="g roup bg-white/10 back drop-b lur-lg rounded-2 xl p-6 border border-white/20 hover:bg-white/20 transition-alld uration-300hover:scale-105" />
                  <d iv c las sNa me="f lex items-c enter j ust ify-c enter w-16 h-16 bg-grad ient-to-r from-c yan-500 to-p urp le-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformd uration-300">{provider.i con}
                  </d iv>
              ))}
    <>
            </d iv>
        </section>
    </>
        {/* Pricing Section */}
    <>
        </><section c las sNa me="p y-20px-4-relative" />
              {pricingPlans.map((plan, index) => (
                <d iv key="{index}" c las sNa me="{`g roup" relative bg-white/10 back drop-b lur-lg rounded-2 xl p-8 border transition-all d uration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-c yan-400/50 shadow-2 xl shadow-c yan-500/20' 
                    : 'border-white/20 hover: border-c yan-400/30'
                }`} />
                  {plan.popular && (
              {testimonials.map((testimonial, index) => (
    <>
                </><d iv key="{index}" c las sNa me="b g-white/10 back drop-b lur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20transition-alld uration-300" />
                  <d iv c las sNa me="f lex items-c entermb-4">                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" c las sNa me="w-5 h-5t e xt-y ellow-400f ill-current" />
                    ))}
    <>
                  </d iv>
                  <p c las sNa me="t e xt-gray-300 mb-6-leading-relaxed">
              "{testimonial.content}"</p>
                  <d iv c las sNa me="f lex items-c enterspace-x-4">
                    <d iv c las sNa me="w-12 h-12 b g-grad ient-to-r from-c yan-500 to-p urp le-600 rounded-full f lex items-c enter j ust ify-c entert ext-whitefon-t-bold"  />{testimonial.avatar}
                    </d iv>
                    <d iv />
                      <d iv c las sNa me="f ont-s emi bol dte xt-whit-e"   />{testimonial.name}</d iv>
                      <d iv c las sNa me="t e xt-gray-400t ext-s-m"   />{testimonial.role}, {testimonial.company}</d iv>
                  </d iv>              ))}
    <>
            </d iv>
        </section>
    </>
        {/* C TA Section */}
    <>
        </><section c las sNa me="p y-20px-4-relative" />
          <d iv c las sNa me="a b solute i nset-0 bg-grad ient-to-r from-c yan-500/10via-p urp le-500/10to-p ink-500/10" / />
          <d iv c las sNa me="r e lative m ax-w-7x lmx-a uto">
        </d iv>
            <d iv c las sNa me="t e xt-c enter" />
              <d iv c las sNa me="b g-grad ient-to-r from-c yan-600 via-p urp le-600 to-p ink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverf low-h idd en">
        </d iv>
                <d iv c las sNa me="a b solute t op-0 l eft-0 w-full h-full bg-[radial-grad ient(c ircle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]a nimate-pulse" / />
                <d iv c las sNa me="r e lativez-10">
        </d iv>
                  <h2 c las sNa me="t e xt-4 xl sm:t ext-5 xl md:t ext-6 xl font-bold t ext-whitem-b-6leading-tight" />
                    R eady to Transform Y our <span c las sNa me="b g-grad ient-to-r from-c yan-300 to-p ink-300bg-clip-t exttext-transpare-n-t">Infrastructure?</span>                  </h2>
    </>
                  <p c las sNa me="t e xt-xl sm:t ext-2 xl t ext-whit-e/90 mb-8 sm:mb-12 m ax-w-4 x lmx-a utoleading-relaxed">
                    Join hundreds of companies who have successfully migrated to the cloud with our expert guidance. 
                    Get your free cloud readiness a ssessment today.
                  </p>
    <>
                  </><d iv c las sNa me="f lex f lex-c ol sm:f lex-row g ap-6j ust ify-c entermb-8">
        </d iv>                    <butt on c las sNa me="g roup bg-white t ext-c ya-n-600 px-10 py-4 rounded-xl font-bold t ext-l-g hover:bg-gray-100 transition-all d uration-300 f lex items-c enter j ust ify-c enter space-x-2 shadow-lg hover:shadow-xltr ansformho ver:scale-105" />
                      <span>Get Free Assessment</span>
                      <ArrowRight c las sNa me="w-5 h-5g roup-hover:tran slate-x-1transition-transform" />
                    </butt on>
                    <Link to="/contact" c las sNa me="g roup border-2 border-white t ext-whit-e px-10 py-4 rounded-xl font-bold t ext-l-g hover:bg-white/10 transition-all d uration-300 f lex items-c enter j ust ify-c enterspace-x-2back drop-b lur-sm" >
          <span    />
        </Link>Contact Expert</span>
                      <MessageCircle c las sNa me="w-5 h-5g roup-hover:scale-110transition-transform" />                    </Link>
                  </d iv>
    </>
                  {/* Contact Information */}
    <>
                  </><d iv c las sNa me="g rid grid-c ols-1 md:grid-c ols-3g ap-6t ext-whit-e/80">
        </d iv>
                    <d iv c las sNa me="f lex items-c enterj ust ify-c enterspace-x-3">
        </d iv>
                      <Phone c las sNa me="w-5h-5t e xt-c yan-300" / />
                      <span c las sNa me="t e xt-sm">+1 302 464 0950</span>
                    </d iv>
                    <d iv c las sNa me="f lex items-c enterj ust ify-c enterspace-x-3">
        </d iv>
                      <Mail c las sNa me="w-5h-5t e xt-p urp le-300" / />
                      <span c las sNa me="t e xt-sm">kleber@ziontechgroup.com</span>
                    </d iv>
                    <d iv c las sNa me="f lex items-c enterj ust ify-c enterspace-x-3">
        </d iv>
                      <MapPin c las sNa me="w-5h-5t e xt-p ink-300" / />
                      <span c las sNa me="t e xt-sm">M iddlet own DE 19709</span>                    </d iv>
                </d iv>
            </d iv>
        </section>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
      </d iv>
    </>
  );
}
    </>