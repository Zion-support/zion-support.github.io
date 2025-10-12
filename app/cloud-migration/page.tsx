import { use State } from 'react'
import { Link } from 'react-router-dom'
import { Arrow Right, Zap, Cloud, Check Circle, Star, Clock, Bar Chart3, Sparkles, Target, Shield, Message Circle, Mail, Phone, Map Pin, Play, Settings, Database, Search, Server, Network, Database as Database Icon } from 'lucide-react';

export default function Cloud Migration Page() {

  const features = [
    {
      icon: <C loudclass Name="w-6h-6t e xt-c y an-400" />,
      title: 'Multi-Cloud Strategy',
      description: 'Comprehensive cloud migration strategy supporting A W S, Azure, Google Cloud, and hybrid environments.',
      benefits: ['A W S expertise', 'Azure migration', 'Google Cloud setup', 'Hybrid cloud solutions']
    },
    {
      icon: <S hieldclass Name="w-6h-6t e xt-e m erald-400" />,
      title: 'Security-First Approach',
      description: 'Enterprise-grade security with zero-downtime migration and comprehensive compliance validation.',
      benefits: ['Zero-downtime migration', 'Security compliance', 'Data encryption', 'Access controls']
    },
    {
      icon: <B ar Chart3 class Name="w-6h-6t e xt-p u rple-400" />,
      title: 'Cost Optimization',
      description: 'Intelligent resource allocation and cost monitoring to reduce cloud expenses by up to 40%.',
      benefits: ['Cost analysis', 'Resource optimization', 'Auto-scaling', 'Budget monitoring']
    },
    {
      icon: <Z apclass Name="w-6h-6t e xt-p i nk-400" />,
      title: 'Performance Enhancement',
      description: 'Optimize application performance with advanced monitoring, caching, and load balancing.',
      benefits: ['Performance monitoring', 'Load balancing', 'Caching strategies', 'Auto-scaling']
    },
    {
      icon: <D atabaseclass Name="w-6h-6t e xt-o r ange-400" />,
      title: 'Database Migration',
      description: 'Seamless database migration with minimal downtime and data integrity guarantees.',
      benefits: ['Zero data loss', 'Schema migration', 'Data validation', 'Backup strategies']
    },
    {
      icon: <N etworkclass Name="w-6h-6t e xt-r e d-400" />,
      title: 'Network Architecture',
      description: 'Design and implement robust cloud network architecture with high availability and scalability.',
      benefits: ['V P C design', 'Load balancing', 'C D N setup', 'Global distribution']
    }
  ]

  const pricing Plans = [
    {
      name: 'Assessment',
      price: '$2,500',
      period: 'one-time',
      description: 'Comprehensive cloud readiness assessment and migration planning',
      features: [
        'Current infrastructure audit',
        'Cloud readiness assessment',
        'Migration strategy planning',
        'Cost analysis and optimization',
        'Security compliance review',
        'Timeline and roadmap creation',
        'Risk assessment and mitigation',
        'Detailed migration report'
      ],
      popular: false,
      cta: 'Get Assessment'
    },
    {
      name: 'Standard Migration',
      price: '$15,000',
      period: 'project',
      description: 'Complete cloud migration for small to medium businesses',
      features: [
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
      features: [
        'Complex multi-cloud migration',
        'Legacy system modernization',
        'Custom application development',
        'Advanced security implementation',
        '24/7 dedicated support',
        'Unlimited post-migration support',
        'Custom integrations',
        'White-label solutions',
        'Dedicated project manager',
        'S L A guarantees'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'C T O',
      company: 'Tech Flow Solutions',
      content: 'Zion's cloud migration reduced our infrastructure costs by 45% while improving performance by 60%. The zero-downtime migration was flawless.',
      rating: 5,
      avatar: 'M R'
    },
    {
      name: 'James Wilson',
      role: 'I T Director',
      company: 'Enterprise Corp',
      content: 'The migration team was exceptional. They handled our complex legacy systems with expertise and delivered ahead of schedule.',
      rating: 5,
      avatar: 'J W'
    },
    {
      name: 'Lisa Chen',
      role: 'V P of Engineering',
      company: 'Startup Hub',
      content: 'Our applications now run 3 x faster in the cloud. The cost savings alone paid for the migration in 6 months.',
      rating: 5,
      avatar: 'L C'
    }
  ]

  const migration Steps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and cloud readiness assessment.',
      icon: <S earchclass Name="w-8h-8t e xt-c y an-400" />,
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Strategy Design',
      description: 'Custom migration strategy tailored to your business needs and technical requirements.',
      icon: <T argetclass Name="w-8h-8t e xt-e m erald-400" />,
      duration: '1 week'
    },
    {
      step: '03',
      title: 'Pre-Migration Setup',
      description: 'Cloud environment preparation, security configuration, and testing environment setup.',
      icon: <S ettingsclass Name="w-8h-8t e xt-p u rple-400" />,
      duration: '2-3 weeks'
    },
    {
      step: '04',
      title: 'Data Migration',
      description: 'Secure data transfer with zero data loss guarantee and real-time validation.',
      icon: <D atabaseclass Name="w-8h-8t e xt-p i nk-400" />,
      duration: '1-2 weeks'
    },
    {
      step: '05',
      title: 'Application Migration',
      description: 'Application deployment, configuration, and optimization in the cloud environment.',
      icon: <S erverclass Name="w-8h-8t e xt-o r ange-400" />,
      duration: '2-4 weeks'
    },
    {
      step: '06',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing, performance optimization, and security validation.',
      icon: <C heck Circleclass Name="w-8h-8t e xt-r e d-400" />,
      duration: '1-2 weeks'
    }
  ]

  const cloud Providers = [
    {
      name: 'Amazon Web Services',
      icon: <C loudclass Name="w-8h-8t e xt-o r ange-400" />,
      description: 'Leading cloud platform with comprehensive services and global reach',
      features: ['E C2, S3, R D S', 'Lambda functions', 'Cloud Front C D N', 'Auto Scaling']
    },
    {
      name: 'Microsoft Azure',
      icon: <C loudclass Name="w-8h-8t e xt-b l ue-400" />,
      description: 'Enterprise-focused cloud platform with strong Microsoft integration',
      features: ['Virtual Machines', 'Azure S Q L', 'App Service', 'Active Directory']
    },
    {
      name: 'Google Cloud Platform',
      icon: <C loudclass Name="w-8h-8t e xt-g r een-400" />,
      description: 'A I and machine learning focused cloud with advanced analytics',
      features: ['Compute Engine', 'Big Query', 'A I/M L services', 'Kubernetes Engine']
    },
    {
      name: 'Hybrid Cloud',
      icon: <N etworkclass Name="w-8h-8t e xt-p u rple-400" />,
      description: 'Best of both worlds with on-premises and cloud integration',
      features: ['Hybrid connectivity', 'Data synchronization', 'Unified management', 'Flexible deployment']
    }
  ]

  return (

      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>Cloud Migration Services - Expert Cloud Transformation | Zion Tech Group</t itle>
        <m eta name="description" content="Transform your business with our expert cloud migration services. A W S, Azure, Google Cloud migration with zero downtime. Starting at $2,500. Free consultation available." / / />
        <m eta name="keywords" content="cloud migration, A W S migration, Azure migration, Google Cloud migration, cloud transformation, cloud consulting, infrastructure migration" / / />
        <m eta name="robots" content="index, follow" / / />
        <l inkrel="canonical" href="https://ziontechgroup.com/cloud-migration" />
      </H elmet>

      <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900 pt-20">
        </d iv>
        {/* Hero Section */}
        <s ection class Name="r e l a tive py-20px-4overflow-hidden" />
          {/* Animated Background */}

          <d iv class Name="a b s o lute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)]animate-pulse" / />
          <d iv class Name="a b s o lute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animation Delay: '1 s' }} / />

          {/* Floating Elements */}

          <d iv class Name="a b s o lute top-20 left-10 w-16 h-16 bg-cyan-400/20 rounded-fullblur-xlanimate-bounce" style="{{" animation Delay: '0.5 s' }} / />
          <d iv class Name="a b s o lute top-40 right-20 w-12 h-12 bg-purple-400/20 rounded-fullblur-xlanimate-bounce" style="{{" animation Delay: '1.5 s' }} / />
          <d iv class Name="a b s o lute bottom-20 left-1/4 w-8 h-8 bg-pink-400/20 rounded-fullblur-xlanimate-bounce" style="{{" animation Delay: '2.5 s' }} / />
          <d iv class Name="r e l a tive max-w-7 xlmx-autotext-center">
        </d iv>
            <d iv class Name="i n l i ne-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
        </d iv>
              <S parklesclass Name="w-4h-4" / />
              <s pan>Expert Cloud Transformation</s pan>
            </d iv>

            <h1 c lass Name="t e x t-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" />
              Cloud

              <b r / />
              <s pan class Name="b g-g r a dient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">Migration
              </s pan>
            </h1>

            <p c lass Name="t e x t-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Transform your business with expert cloud migration services. 

              <b r / />
              <s pan class Name="t e xt-c y an-400font-semibold">Zero downtime • 40% cost reduction • 99.9% uptime • Enterprise security</s pan>
            </p>

            <d iv class Name="f l ex f l ex-col sm:flex-row gap-6justify-centermb-16">
        </d iv>
              <b utton class Name="g r o u p bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
                <s pan>Get Free Assessment</s pan>
                <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
              </b utton>
              <b utton class Name="g r o u p border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                <P layclass Name="w-5h-5" / />
                <s pan>Watch Case Study</s pan>
              </b utton>
            </d iv>

            {/* Trust Indicators */}

            <d iv class Name="f l ex f l ex-wrap justify-center items-center gap-8text-gray-400text-sm">
        </d iv>
              <d iv class Name="f l e x items-centerspace-x-2">
        </d iv>
                <C heck Circleclass Name="w-4h-4t e xt-g r een-400" / />
                <s pan>500+ Migrations</s pan>
              </d iv>
              <d iv class Name="f l e x items-centerspace-x-2">
        </d iv>
                <S tarclass Name="w-4h-4t e xt-y e llow-400" / />
                <s pan>4.9/5 Rating</s pan>
              </d iv>
              <d iv class Name="f l e x items-centerspace-x-2">
        </d iv>
                <S hieldclass Name="w-4h-4t e xt-b l ue-400" / />
                <s pan>Zero Data Loss</s pan>
              </d iv>
              <d iv class Name="f l e x items-centerspace-x-2">
        </d iv>
                <C lockclass Name="w-4h-4t e xt-p u rple-400" / />
                <s pan>24/7 Support</s pan>
              </d iv>
          </d iv>
        </s ection>

        {/* Features Section */}

        <s ection class Name="p y-20p x-4r e lative" />
          <d iv class Name="a b s o lute inset-0 bg-gradient-to-rfrom-cyan-500/5to-purple-500/5" / />
          <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
                Comprehensive <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Migration Services</s pan>
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

                From assessment to optimization, we handle every aspect of your cloud migration journey.

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
              {features.map((feature, index) => (

                <d ivkey="{index}" class Name="g r o u p bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                  <d iv class Name="f l ex i t ems-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                  </d iv>
                  <h3 c lass Name="t e xt-2 xl f o nt-bold text-white mb-4group-hover:text-cyan-400transition-colors">{feature.title}
                  </h3>
                  <p c lass Name="t e xt-g r ay-300mb-6leading-relaxed" />

                    {feature.description}

                  </p>
                  <d iv class Name="s p a c e-y-2">
        </d iv>

                    {feature.benefits.map((benefit, benefit Index) => (

                      <d ivkey="{benefit Index}" class Name="f l ex i t ems-center space-x-2text-gray-400text-sm" />
                        <C heck Circleclass Name="w-4h-4t e xt-g r een-400" / />
                        <s pan>{benefit}</s pan>
                      </d iv>

                    ))}

                  </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Migration Process Section */}

        <s ection class Name="p y-20 p x-4 bg-g r adient-to-br from-slate-800/50to-purple-900/50relative" />
          <d iv class Name="a b s o luteinset-0bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" / />
          <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
                Our Proven <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Migration Process</s pan>
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

                A systematic approach that ensures successful cloud migration with minimal risk and maximum value.

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
              {migration Steps.map((step, index) => (

                <d ivkey="{index}" class Name="g r o u p bg-white/10 backdrop-blur-lg rounded-2 xl p-6 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                  <d iv class Name="f l ex i t ems-centerjustify-betweenmb-4">
        </d iv>
                    <d iv class Name="f l ex i t ems-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl group-hover:scale-110transition-transformduration-300">{step.icon}
                    </d iv>
                    <d iv class Name="t e xt-3 x l font-boldtext-cyan-400">{step.step}</d iv>
                  <h3 c lass Name="t e xt-xl f o nt-bold text-white mb-4group-hover:text-cyan-400transition-colors">{step.title}
                  </h3>
                  <p c lass Name="t e xt-g r ay-300mb-4leading-relaxed" />

                    {step.description}

                  </p>
                  <d iv class Name="t e xt-c y an-400text-smfont-semibold">Duration: {step.duration}
                  </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Cloud Providers Section */}

        <s ection class Name="p y-20p x-4r e lative" />
          <d iv class Name="a b s o lute inset-0 bg-gradient-to-r from-purple-500/5via-cyan-500/5to-pink-500/5" / />
          <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
                Multi-Cloud <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Expertise</s pan>
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

                Certified experts in all major cloud platforms with deep experience in complex migrations.

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {cloud Providers.map((provider, index) => (

                <d ivkey="{index}" class Name="g r o u p bg-white/10 backdrop-blur-lg rounded-2 xl p-6 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                  <d iv class Name="f l ex i t ems-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{provider.icon}
                  </d iv>
                  <h3 c lass Name="t e xt-xl f o nt-bold text-white mb-4group-hover:text-cyan-400transition-colors">{provider.name}
                  </h3>
                  <p c lass Name="t e xt-g r ay-300mb-4leading-relaxed" />

                    {provider.description}

                  </p>
                  <d iv class Name="s p a c e-y-1">
        </d iv>

                    {provider.features.map((feature, feature Index) => (

                      <d ivkey="{feature Index}" class Name="t e xt-c y an-400text-sm">• {feature}
                      </d iv>

                    ))}

                  </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Pricing Section */}

        <s ection class Name="p y-20p x-4r e lative" />
          <d iv class Name="a b s o lute inset-0 bg-gradient-to-r from-purple-500/5via-cyan-500/5to-pink-500/5" / />
          <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
                Transparent <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Pricing</s pan>
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

                Choose the migration package that fits your needs. All packages include our core migration services.

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
              {pricing Plans.map((plan, index) => (
                <d ivkey="{index}" class Name="{`g r o u p" relative bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2 xl shadow-cyan-500/20' 
                    : 'border-white/20 hover: border-cyan-400/30'
                }`} />
                  {plan.popular && (

                    <d iv class Name="a b s o lute -top-4 left-1/2transform-translate-x-1/2">
        </d iv>
                      <d iv class Name="b g-g r a dient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                      </d iv>

                  )}

                  <d iv class Name="t e x t-centermb-8">
        </d iv>
                    <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-2">{plan.name}</h3>
                    <p c lass Name="t e xt-g r ay-300mb-6">{plan.description}</p>
                    <d iv class Name="f l e x items-baselinejustify-center" />
                      <s pan class Name="t e xt-5 x l font-boldtext-white">{plan.price}</s pan>
                      <s pan class Name="t e xt-g r ay-400ml-2">{plan.period}</s pan>
                    </d iv>

                  <d iv class Name="s p a c e-y-4mb-8">
        </d iv>
                    {plan.features.map((feature, feature Index) => (

                      <d ivkey="{feature Index}" class Name="f l e x items-centerspace-x-3" />
                        <C heck Circleclass Name="w-5 h-5t e xt-g r een-400flex-shrink-0" / />
                        <s pan class Name="t e xt-g r ay-300">{feature}</s pan>
                      </d iv>

                    ))}
                  </d iv>
                  
                  <b utton class Name="{`w-f u ll" py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}  />{plan.cta}

                  </b utton>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Testimonials Section */}

        <s ection class Name="p y-20 p x-4 bg-g r adient-to-br from-purple-900/50to-pink-900/50relative" />
          <d iv class Name="a b s o luteinset-0bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1)_0%,transparent_50%)]" / />
          <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
                Trusted by <s pan class Name="b g-g r a dient-to-r from-purple-400 to-pink-400bg-clip-texttext-transparent">500+ Companies</s pan>
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

                See what our clients say about their cloud migration experience with Zion Tech Group.

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
              {testimonials.map((testimonial, index) => (

                <d ivkey="{index}" class Name="b g-w h i te/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20transition-allduration-300" />
                  <d iv class Name="f l e x items-centermb-4">
        </d iv>

                    {[...Array(testimonial.rating)].map((_, i) => (
                      <S tarkey="{i}" class Name="w-5 h-5t e xt-y e llow-400fill-current" />
                    ))}

                  </d iv>
                  <p c lass Name="t e xt-g r ay-300mb-6leading-relaxed">"{testimonial.content}"</p>
                  <d iv class Name="f l e x items-centerspace-x-4">
        </d iv>
                    <d iv class Name="w-12 h-12 b g-g r a dient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-centertext-whitefont-bold">{testimonial.avatar}
                    </d iv>
                    <d iv />
                      <d iv class Name="f o nt-s e miboldtext-white">{testimonial.name}</d iv>
                      <d iv class Name="t e xt-g r ay-400text-sm">{testimonial.role}, {testimonial.company}</d iv>
                  </d iv>

              ))}

            </d iv>
        </s ection>

        {/* C T A Section */}

        <s ection class Name="p y-20p x-4r e lative" />
          <d iv class Name="a b s o lute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" / />
          <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t e x t-center" />
              <d iv class Name="b g-g r a dient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden">
        </d iv>
                <d iv class Name="a b s o lute top-0 left-0 w-full h-fullbg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]animate-pulse" / />
                <d iv class Name="r e l a tivez-10">
        </d iv>
                  <h2 c lass Name="t e xt-4 xl sm:t e xt-5 xl md:text-6 xl font-bold text-white mb-6leading-tight" />
                    Ready to Transform Your <s pan class Name="b g-g r a dient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">Infrastructure?</s pan>
                  </h2>

                  <p c lass Name="t e xt-xl sm:t e xt-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
                    Join hundreds of companies who have successfully migrated to the cloud with our expert guidance. 
                    Get your free cloud readiness assessment today.
                  </p>

                  <d iv class Name="f l ex f l ex-col sm:flex-row gap-6justify-centermb-8">
        </d iv>
                    <b utton class Name="g r o u p bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                      <s pan>Get Free Assessment</s pan>
                      <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
                    </b utton>
                    <L ink to="/contact" class Name="g r o u p border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                      <s pan>Contact Expert</s pan>
                      <M essage Circleclass Name="w-5 h-5g r o u p-hover:scale-110transition-transform" / />
                    </L ink>
                  </d iv>

                  {/* Contact Information */}

                  <d iv class Name="g r id g r id-cols-1 md:grid-cols-3gap-6text-white/80">
        </d iv>
                    <d iv class Name="f l ex i t ems-centerjustify-centerspace-x-3">
        </d iv>
                      <P honeclass Name="w-5h-5t e xt-c y an-300" / />
                      <s pan class Name="t e xt-sm">+1 302 464 0950</s pan>
                    </d iv>
                    <d iv class Name="f l ex i t ems-centerjustify-centerspace-x-3">
        </d iv>
                      <M ailclass Name="w-5h-5t e xt-p u rple-300" / />
                      <s pan class Name="t e xt-sm">kleber@ziontechgroup.com</s pan>
                    </d iv>
                    <d iv class Name="f l ex i t ems-centerjustify-centerspace-x-3">
        </d iv>
                      <M ap Pinclass Name="w-5h-5t e xt-p i nk-300" / />
                      <s pan class Name="t e xt-sm">Middletown D E 19709</s pan>
                    </d iv>
                </d iv>
            </d iv>
        </s ection>
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

  );
}
