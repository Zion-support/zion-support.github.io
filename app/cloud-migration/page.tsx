import { use State } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Cloud, CheckCircle, Star, Clock, Bar Chart3, Sparkles, Target, Shield, Message Circle, Mail, Phone, MapPin, Play, Settings, Database, Search, Server, Network, Database as Database Icon } from 'lucide-react';

export default function Cloud Migration Page() {

  const features = [
    {
      icon: <C loud class Name="w-6h-6t ext-cyan-400" />,
      title: 'Multi-Cloud Strategy',
      description: 'Comprehensive cloud migration strategy supporting A WS, Azure, Google Cloud, and hybrid environments.',
      benefits: ['A WS expertise', 'Azure migration', 'Google Cloud setup', 'Hybrid cloud solutions']
    },
    {
      icon: <S hield class Name="w-6h-6t ext-emerald-400" />,
      title: 'Security-First Approach',
      description: 'Enterprise-grade security with zero-downtime migration and comprehensive compliance validation.',
      benefits: ['Zero-downtime migration', 'Security compliance', 'Data encryption', 'Access controls']
    },
    {
      icon: <B ar Chart3 class Name="w-6h-6t ext-purple-400" />,
      title: 'Cost Optimization',
      description: 'Intelligent resource allocation and cost monitoring to reduce cloud expenses by up to 40%.',
      benefits: ['Cost analysis', 'Resource optimization', 'Auto-scaling', 'Budget monitoring']
    },
    {
      icon: <Z ap class Name="w-6h-6t ext-pink-400" />,
      title: 'Performance Enhancement',
      description: 'Optimize application performance with advanced monitoring, caching, and load balancing.',
      benefits: ['Performance monitoring', 'Load balancing', 'Caching strategies', 'Auto-scaling']
    },
    {
      icon: <D atabase class Name="w-6h-6t ext-orange-400" />,
      title: 'Database Migration',
      description: 'Seamless database migration with minimal downtime and data integrity guarantees.',
      benefits: ['Zero data loss', 'Schema migration', 'Data validation', 'Backup strategies']
    },
    {
      icon: <N etwork class Name="w-6h-6t ext-red-400" />,
      title: 'Network Architecture',
      description: 'Design and implement robust cloud network architecture with high availability and scalability.',
      benefits: ['V PC design', 'Load balancing', 'C DN setup', 'Global distribution']
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
        'S LA guarantees'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      role: 'C TO',
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
      icon: <S earch class Name="w-8h-8t ext-cyan-400" />,
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Strategy Design',
      description: 'Custom migration strategy tailored to your business needs and technical requirements.',
      icon: <T arget class Name="w-8h-8t ext-emerald-400" />,
      duration: '1 week'
    },
    {
      step: '03',
      title: 'Pre-Migration Setup',
      description: 'Cloud environment preparation, security configuration, and testing environment setup.',
      icon: <S ettings class Name="w-8h-8t ext-purple-400" />,
      duration: '2-3 weeks'
    },
    {
      step: '04',
      title: 'Data Migration',
      description: 'Secure data transfer with zero data loss guarantee and real-time validation.',
      icon: <D atabase class Name="w-8h-8t ext-pink-400" />,
      duration: '1-2 weeks'
    },
    {
      step: '05',
      title: 'Application Migration',
      description: 'Application deployment, configuration, and optimization in the cloud environment.',
      icon: <S erver class Name="w-8h-8t ext-orange-400" />,
      duration: '2-4 weeks'
    },
    {
      step: '06',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing, performance optimization, and security validation.',
      icon: <C heck Circle class Name="w-8h-8t ext-red-400" />,
      duration: '1-2 weeks'
    }
  ]

  const cloud Providers = [
    {
      name: 'Amazon Web Services',
      icon: <C loud class Name="w-8h-8t ext-orange-400" />,
      description: 'Leading cloud platform with comprehensive services and global reach',
      features: ['E C2, S3, R DS', 'Lambda functions', 'Cloud Front C DN', 'Auto Scaling']
    },
    {
      name: 'Microsoft Azure',
      icon: <C loud class Name="w-8h-8t ext-blue-400" />,
      description: 'Enterprise-focused cloud platform with strong Microsoft integration',
      features: ['Virtual Machines', 'Azure S QL', 'App Service', 'Active Directory']
    },
    {
      name: 'Google Cloud Platform',
      icon: <C loud class Name="w-8h-8t ext-green-400" />,
      description: 'A I and machine learning focused cloud with advanced analytics',
      features: ['Compute Engine', 'Big Query', 'A I/M L services', 'Kubernetes Engine']
    },
    {
      name: 'Hybrid Cloud',
      icon: <N etwork class Name="w-8h-8t ext-purple-400" />,
      description: 'Best of both worlds with on-premises and cloud integration',
      features: ['Hybrid connectivity', 'Data synchronization', 'Unified management', 'Flexible deployment']
    }
  ]

  return (

      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>Cloud Migration Services - Expert Cloud Transformation | Zion Tech Group</t itle>
        <m eta name="description" content="Transform your business with our expert cloud migration services. A WS, Azure, Google Cloud migration with zero downtime. Starting at $2,500. Free consultation available." / / />
        <m eta name="keywords" content="cloud migration, A WS migration, Azure migration, Google Cloud migration, cloud transformation, cloud consulting, infrastructure migration" / / />
        <m eta name="robots" content="index, follow" / / />
        <l ink rel="canonical" href="https://ziontechgroup.com/cloud-migration" />
      </H elmet>

      <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900 pt-20">
        </d iv>
        {/* Hero Section */}
        <s ection class Name="r elative py-20px-4overflow-hidden" />
          {/* Animated Background */}

          <d iv class Name="a bsolute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)]animate-pulse" / />
          <d iv class Name="a bsolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animation Delay: '1 s' }} / />

          {/* Floating Elements */}

          <d iv class Name="a bsolute top-20 left-10 w-16 h-16 bg-cyan-400/20 rounded-fullblur-xlanimate-bounce" style="{{" animation Delay: '0.5 s' }} / />
          <d iv class Name="a bsolute top-40 right-20 w-12 h-12 bg-purple-400/20 rounded-fullblur-xlanimate-bounce" style="{{" animation Delay: '1.5 s' }} / />
          <d iv class Name="a bsolute bottom-20 left-1/4 w-8 h-8 bg-pink-400/20 rounded-fullblur-xlanimate-bounce" style="{{" animation Delay: '2.5 s' }} / />
          <d iv class Name="r elative max-w-7 xlmx-autotext-center">
        </d iv>
            <d iv class Name="i nline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
        </d iv>
              <S parkles class Name="w-4h-4" / />
              <s pan>Expert Cloud Transformation</s pan>
            </d iv>

            <h1 c lass Name="t ext-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" />
              Cloud

              <b r / />
              <s pan class Name="b g-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">Migration
              </s pan>
            </h1>

            <p c lass Name="t ext-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Transform your business with expert cloud migration services. 

              <b r / />
              <s pan class Name="t ext-cyan-400font-semibold">Zero downtime • 40% cost reduction • 99.9% uptime • Enterprise security</s pan>
            </p>

            <d iv class Name="f lex flex-col sm:flex-row gap-6justify-centermb-16">
        </d iv>
              <b utton class Name="g roup bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
                <s pan>Get Free Assessment</s pan>
                <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
              </b utton>
              <b utton class Name="g roup border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                <P lay class Name="w-5h-5" / />
                <s pan>Watch Case Study</s pan>
              </b utton>
            </d iv>

            {/* Trust Indicators */}

            <d iv class Name="f lex flex-wrap justify-center items-center gap-8text-gray-400text-sm">
        </d iv>
              <d iv class Name="f lexitems-centerspace-x-2">
        </d iv>
                <C heck Circle class Name="w-4h-4t ext-green-400" / />
                <s pan>500+ Migrations</s pan>
              </d iv>
              <d iv class Name="f lexitems-centerspace-x-2">
        </d iv>
                <S tar class Name="w-4h-4t ext-yellow-400" / />
                <s pan>4.9/5 Rating</s pan>
              </d iv>
              <d iv class Name="f lexitems-centerspace-x-2">
        </d iv>
                <S hield class Name="w-4h-4t ext-blue-400" / />
                <s pan>Zero Data Loss</s pan>
              </d iv>
              <d iv class Name="f lexitems-centerspace-x-2">
        </d iv>
                <C lock class Name="w-4h-4t ext-purple-400" / />
                <s pan>24/7 Support</s pan>
              </d iv>
          </d iv>
        </s ection>

        {/* Features Section */}

        <s ection class Name="p y-20px-4relative" />
          <d iv class Name="a bsolute inset-0 bg-gradient-to-rfrom-cyan-500/5to-purple-500/5" / />
          <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Comprehensive <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Migration Services</s pan>
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

                From assessment to optimization, we handle every aspect of your cloud migration journey.

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
              {features.map((feature, index) => (

                <d iv key="{index}" class Name="g roup bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                  <d iv class Name="f lex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                  </d iv>
                  <h3 c lass Name="t ext-2 xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{feature.title}
                  </h3>
                  <p c lass Name="t ext-gray-300mb-6leading-relaxed" />

                    {feature.description}

                  </p>
                  <d iv class Name="s pace-y-2">
        </d iv>

                    {feature.benefits.map((benefit, benefit Index) => (

                      <d iv key="{benefit Index}" class Name="f lex items-center space-x-2text-gray-400text-sm" />
                        <C heck Circle class Name="w-4h-4t ext-green-400" / />
                        <s pan>{benefit}</s pan>
                      </d iv>

                    ))}

                  </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Migration Process Section */}

        <s ection class Name="p y-20 px-4 bg-gradient-to-br from-slate-800/50to-purple-900/50relative" />
          <d iv class Name="a bsoluteinset-0bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" / />
          <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Our Proven <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Migration Process</s pan>
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

                A systematic approach that ensures successful cloud migration with minimal risk and maximum value.

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
              {migration Steps.map((step, index) => (

                <d iv key="{index}" class Name="g roup bg-white/10 backdrop-blur-lg rounded-2 xl p-6 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                  <d iv class Name="f lex items-centerjustify-betweenmb-4">
        </d iv>
                    <d iv class Name="f lex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl group-hover:scale-110transition-transformduration-300">{step.icon}
                    </d iv>
                    <d iv class Name="t ext-3 xlfont-boldtext-cyan-400">{step.step}</d iv>
                  <h3 c lass Name="t ext-xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{step.title}
                  </h3>
                  <p c lass Name="t ext-gray-300mb-4leading-relaxed" />

                    {step.description}

                  </p>
                  <d iv class Name="t ext-cyan-400text-smfont-semibold">Duration: {step.duration}
                  </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Cloud Providers Section */}

        <s ection class Name="p y-20px-4relative" />
          <d iv class Name="a bsolute inset-0 bg-gradient-to-r from-purple-500/5via-cyan-500/5to-pink-500/5" / />
          <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Multi-Cloud <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Expertise</s pan>
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

                Certified experts in all major cloud platforms with deep experience in complex migrations.

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {cloud Providers.map((provider, index) => (

                <d iv key="{index}" class Name="g roup bg-white/10 backdrop-blur-lg rounded-2 xl p-6 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                  <d iv class Name="f lex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{provider.icon}
                  </d iv>
                  <h3 c lass Name="t ext-xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{provider.name}
                  </h3>
                  <p c lass Name="t ext-gray-300mb-4leading-relaxed" />

                    {provider.description}

                  </p>
                  <d iv class Name="s pace-y-1">
        </d iv>

                    {provider.features.map((feature, feature Index) => (

                      <d iv key="{feature Index}" class Name="t ext-cyan-400text-sm">• {feature}
                      </d iv>

                    ))}

                  </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Pricing Section */}

        <s ection class Name="p y-20px-4relative" />
          <d iv class Name="a bsolute inset-0 bg-gradient-to-r from-purple-500/5via-cyan-500/5to-pink-500/5" / />
          <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Transparent <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Pricing</s pan>
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

                Choose the migration package that fits your needs. All packages include our core migration services.

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
              {pricing Plans.map((plan, index) => (
                <d iv key="{index}" class Name="{`g roup" relative bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2 xl shadow-cyan-500/20' 
                    : 'border-white/20 hover: border-cyan-400/30'
                }`} />
                  {plan.popular && (

                    <d iv class Name="a bsolute -top-4 left-1/2transform-translate-x-1/2">
        </d iv>
                      <d iv class Name="b g-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                      </d iv>

                  )}

                  <d iv class Name="t ext-centermb-8">
        </d iv>
                    <h3 c lass Name="t ext-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                    <p c lass Name="t ext-gray-300mb-6">{plan.description}</p>
                    <d iv class Name="f lexitems-baselinejustify-center" />
                      <s pan class Name="t ext-5 xlfont-boldtext-white">{plan.price}</s pan>
                      <s pan class Name="t ext-gray-400ml-2">{plan.period}</s pan>
                    </d iv>

                  <d iv class Name="s pace-y-4mb-8">
        </d iv>
                    {plan.features.map((feature, feature Index) => (

                      <d iv key="{feature Index}" class Name="f lexitems-centerspace-x-3" />
                        <C heck Circle class Name="w-5 h-5t ext-green-400flex-shrink-0" / />
                        <s pan class Name="t ext-gray-300">{feature}</s pan>
                      </d iv>

                    ))}
                  </d iv>
                  
                  <b utton class Name="{`w-f ull" py-4 rounded-xl font-semibold transition-all duration-300 ${
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

        <s ection class Name="p y-20 px-4 bg-gradient-to-br from-purple-900/50to-pink-900/50relative" />
          <d iv class Name="a bsoluteinset-0bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1)_0%,transparent_50%)]" / />
          <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-centermb-16">
        </d iv>
              <h2 c lass Name="t ext-4 xl md:text-5 xl font-boldtext-whitemb-6" />
                Trusted by <s pan class Name="b g-gradient-to-r from-purple-400 to-pink-400bg-clip-texttext-transparent">500+ Companies</s pan>
              </h2>
              <p c lass Name="t ext-xl text-gray-300 max-w-4xlmx-auto" />

                See what our clients say about their cloud migration experience with Zion Tech Group.

              </p>
            </d iv>

            <d iv class Name="g rid grid-cols-1md:grid-cols-3gap-8">
        </d iv>
              {testimonials.map((testimonial, index) => (

                <d iv key="{index}" class Name="b g-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20transition-allduration-300" />
                  <d iv class Name="f lexitems-centermb-4">
        </d iv>

                    {[...Array(testimonial.rating)].map((_, i) => (
                      <S tar key="{i}" class Name="w-5 h-5t ext-yellow-400fill-current" />
                    ))}

                  </d iv>
                  <p c lass Name="t ext-gray-300mb-6leading-relaxed">"{testimonial.content}"</p>
                  <d iv class Name="f lexitems-centerspace-x-4">
        </d iv>
                    <d iv class Name="w-12 h-12 b g-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-centertext-whitefont-bold">{testimonial.avatar}
                    </d iv>
                    <d iv />
                      <d iv class Name="f ont-semiboldtext-white">{testimonial.name}</d iv>
                      <d iv class Name="t ext-gray-400text-sm">{testimonial.role}, {testimonial.company}</d iv>
                  </d iv>

              ))}

            </d iv>
        </s ection>

        {/* C TA Section */}

        <s ection class Name="p y-20px-4relative" />
          <d iv class Name="a bsolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" / />
          <d iv class Name="r elative max-w-7xlmx-auto">
        </d iv>
            <d iv class Name="t ext-center" />
              <d iv class Name="b g-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden">
        </d iv>
                <d iv class Name="a bsolute top-0 left-0 w-full h-fullbg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]animate-pulse" / />
                <d iv class Name="r elativez-10">
        </d iv>
                  <h2 c lass Name="t ext-4 xl sm:text-5 xl md:text-6 xl font-bold text-whitemb-6leading-tight" />
                    Ready to Transform Your <s pan class Name="b g-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">Infrastructure?</s pan>
                  </h2>

                  <p c lass Name="t ext-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
                    Join hundreds of companies who have successfully migrated to the cloud with our expert guidance. 
                    Get your free cloud readiness assessment today.
                  </p>

                  <d iv class Name="f lex flex-col sm:flex-row gap-6justify-centermb-8">
        </d iv>
                    <b utton class Name="g roup bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                      <s pan>Get Free Assessment</s pan>
                      <A rrow Right class Name="w-5 h-5g roup-hover:translate-x-1transition-transform" />
                    </b utton>
                    <L ink to="/contact" class Name="g roup border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                      <s pan>Contact Expert</s pan>
                      <M essage Circle class Name="w-5 h-5g roup-hover:scale-110transition-transform" / />
                    </L ink>
                  </d iv>

                  {/* Contact Information */}

                  <d iv class Name="g rid grid-cols-1 md:grid-cols-3gap-6text-white/80">
        </d iv>
                    <d iv class Name="f lex items-centerjustify-centerspace-x-3">
        </d iv>
                      <P hone class Name="w-5h-5t ext-cyan-300" / />
                      <s pan class Name="t ext-sm">+1 302 464 0950</s pan>
                    </d iv>
                    <d iv class Name="f lex items-centerjustify-centerspace-x-3">
        </d iv>
                      <M ail class Name="w-5h-5t ext-purple-300" / />
                      <s pan class Name="t ext-sm">kleber@ziontechgroup.com</s pan>
                    </d iv>
                    <d iv class Name="f lex items-centerjustify-centerspace-x-3">
        </d iv>
                      <M ap Pin class Name="w-5h-5t ext-pink-300" / />
                      <s pan class Name="t ext-sm">Middletown D E 19709</s pan>
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
