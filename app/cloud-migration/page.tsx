import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { ArrowRight, HardDrive, Laptop, Tablet, Router } from 'lucide-react';

export default function CloudMigrationPage() {

  const features = [
    {
      icon: <Cloud className="w-6h-6text-cyan-400" />,
      title: 'Multi-Cloud Strategy',
      description: 'Comprehensive cloud migration strategy supporting AWS, Azure, Google Cloud, and hybrid environments.',
      benefits: ['AWS expertise', 'Azure migration', 'Google Cloud setup', 'Hybrid cloud solutions']
    },
    {
      icon: <Shield className="w-6h-6text-emerald-400" />,
      title: 'Security-First Approach',
      description: 'Enterprise-grade security with zero-downtime migration and comprehensive compliance validation.',
      benefits: ['Zero-downtime migration', 'Security compliance', 'Data encryption', 'Access controls']
    },
    {
      icon: <BarChart3 className="w-6h-6text-purple-400" />,
      title: 'Cost Optimization',
      description: 'Intelligent resource allocation and cost monitoring to reduce cloud expenses by up to 40%.',
      benefits: ['Cost analysis', 'Resource optimization', 'Auto-scaling', 'Budget monitoring']
    },
    {
      icon: <Zap className="w-6h-6text-pink-400" />,
      title: 'Performance Enhancement',
      description: 'Optimize application performance with advanced monitoring, caching, and load balancing.',
      benefits: ['Performance monitoring', 'Load balancing', 'Caching strategies', 'Auto-scaling']
    },
    {
      icon: <Database className="w-6h-6text-orange-400" />,
      title: 'Database Migration',
      description: 'Seamless database migration with minimal downtime and data integrity guarantees.',
      benefits: ['Zero data loss', 'Schema migration', 'Data validation', 'Backup strategies']
    },
    {
      icon: <Network className="w-6h-6text-red-400" />,
      title: 'Network Architecture',
      description: 'Design and implement robust cloud network architecture with high availability and scalability.',
      benefits: ['VPC design', 'Load balancing', 'CDN setup', 'Global distribution']
    }
  ]

  const pricingPlans = [
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
        'SLA guarantees'
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
      content: 'The migration team was exceptional. They handled our complex legacy systems with expertise and delivered ahead of schedule.',
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
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and cloud readiness assessment.',
      icon: <Search className="w-8h-8text-cyan-400" />,
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Strategy Design',
      description: 'Custom migration strategy tailored to your business needs and technical requirements.',
      icon: <Target className="w-8h-8text-emerald-400" />,
      duration: '1 week'
    },
    {
      step: '03',
      title: 'Pre-Migration Setup',
      description: 'Cloud environment preparation, security configuration, and testing environment setup.',
      icon: <Settings className="w-8h-8text-purple-400" />,
      duration: '2-3 weeks'
    },
    {
      step: '04',
      title: 'Data Migration',
      description: 'Secure data transfer with zero data loss guarantee and real-time validation.',
      icon: <Database className="w-8h-8text-pink-400" />,
      duration: '1-2 weeks'
    },
    {
      step: '05',
      title: 'Application Migration',
      description: 'Application deployment, configuration, and optimization in the cloud environment.',
      icon: <Server className="w-8h-8text-orange-400" />,
      duration: '2-4 weeks'
    },
    {
      step: '06',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing, performance optimization, and security validation.',
      icon: <CheckCircle className="w-8h-8text-red-400" />,
      duration: '1-2 weeks'
    }
  ]

  const cloudProviders = [
    {
      name: 'Amazon Web Services',
      icon: <Cloud className="w-8h-8text-orange-400" />,
      description: 'Leading cloud platform with comprehensive services and global reach',
      features: ['EC2, S3, RDS', 'Lambda functions', 'CloudFront CDN', 'Auto Scaling']
    },
    {
      name: 'Microsoft Azure',
      icon: <Cloud className="w-8h-8text-blue-400" />,
      description: 'Enterprise-focused cloud platform with strong Microsoft integration',
      features: ['Virtual Machines', 'Azure SQL', 'App Service', 'Active Directory']
    },
    {
      name: 'Google Cloud Platform',
      icon: <Cloud className="w-8h-8text-green-400" />,
      description: 'AI and machine learning focused cloud with advanced analytics',
      features: ['Compute Engine', 'BigQuery', 'AI/ML services', 'Kubernetes Engine']
    },
    {
      name: 'Hybrid Cloud',
      icon: <Network className="w-8h-8text-purple-400" />,
      description: 'Best of both worlds with on-premises and cloud integration',
      features: ['Hybrid connectivity', 'Data synchronization', 'Unified management', 'Flexible deployment']
    }
  ]

  return (

      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>Cloud Migration Services - Expert Cloud Transformation | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our expert cloud migration services. AWS, Azure, Google Cloud migration with zero downtime. Starting at $2,500. Free consultation available." / / />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud migration, cloud transformation, cloud consulting, infrastructure migration" / / />
        <meta name="robots" content="index, follow" / / />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-migration" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20px-4overflow-hidden" />
          {/* Animated Background */}
          <div className="absolute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)]animate-pulse" />
          <div className="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }} / />

          {/* Floating Elements */}

          <div className="absolute top-20 left-10 w-16 h-16 bg-cyan-400/20 rounded-fullblur-xlanimate-bounce" style="{{" animationDelay: '0.5 s' }} / />
          <div className="absolute top-40 right-20 w-12 h-12 bg-purple-400/20 rounded-fullblur-xlanimate-bounce" style="{{" animationDelay: '1.5 s' }} / />
          <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-pink-400/20 rounded-fullblur-xlanimate-bounce" style="{{" animationDelay: '2.5 s' }} / />
          <div className="relative max-w-7xlmx-autotext-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
              <Sparkles className="w-4h-4" />
              <span   />Expert Cloud Transformation</span>
            </div>

            <h1 className="text-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" />
              Cloud

              <br / />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">Migration
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Transform your business with expert cloud migration services.

              <br / />
              <span className="text-cyan-400font-semibold">Zero downtime • 40% cost reduction • 99.9% uptime • Enterprise security</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6justify-centermb-16">
              <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
                <span>Get Free Assessment</span>
                <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
              </button>
              <button className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                <Play className="w-5h-5" />
                <span   />Watch Case Study</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8text-gray-400text-sm">
              <div className="flex items-centerspace-x-2">
                <CheckCircle className="w-4h-4text-green-400" />
                <span   />500+ Migrations</span>
              </div>
              <div className="flex items-centerspace-x-2">
                <Star className="w-4h-4text-yellow-400" />
                <span   />4.9/5 Rating</span>
              </div>
              <div className="flex items-centerspace-x-2">
                <Shield className="w-4h-4text-blue-400" />
                <span   />Zero Data Loss</span>
              </div>
              <div className="flex items-centerspace-x-2">
                <Clock className="w-4h-4text-purple-400" />
                <span   />24/7 Support</span>
              </div>
          </div>
        </section>

        {/* Features Section */}

        <section className="py-20px-4relative" />
          <div className="absolute inset-0 bg-gradient-to-rfrom-cyan-500/5to-purple-500/5" />
          <div className="relative max-w-7xlmx-auto">
            <div className="text-centermb-16">
              <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
                Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Migration Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              From assessment to optimization, we handle every aspect of your cloud migration journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
              {features.map((feature, index) => (

                <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                  </div>
                  <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-cyan-400 transition-colors"  />{feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6leading-relaxed">
              {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (

                      <div key="{benefitIndex}" className="flex items-center space-x-2text-gray-400text-sm" />
                        <CheckCircle className="w-4h-4text-green-400" />
                        <span   />{benefit}</span>
                      </div>

                    ))}

                  </div>
              ))}

            </div>
        </section>

        {/* Migration Process Section */}

        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50to-purple-900/50relative" />
          <div className="absoluteinset-0bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xlmx-auto">
            <div className="text-centermb-16">
              <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
                Our Proven <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Migration Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              A systematic approach that ensures successful cloud migration with minimal risk and maximum value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
              {migrationSteps.map((step, index) => (

                <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-6 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                  <div className="flex items-centerjustify-betweenmb-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl group-hover:scale-110transition-transformduration-300"  />{step.icon}
                    </div>
                    <div className="text-3 xlfont-boldtext-cyan-400"   />{step.step}</div>
                  <h3 className="text-xl font-bold text-white mb-4group-hover:text-cyan-400 transition-colors"  />{step.title}
                  </h3>
                  <p className="text-gray-300 mb-4leading-relaxed">
              {step.description}
                  </p>
                  <div className="text-cyan-400text-smfont-semibold">Duration: {step.duration}
                  </div>
              ))}

            </div>
        </section>

        {/* Cloud Providers Section */}

        <section className="py-20px-4relative" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5via-cyan-500/5to-pink-500/5" />
          <div className="relative max-w-7xlmx-auto">
            <div className="text-centermb-16">
              <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
                Multi-Cloud <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Expertise</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              Certified experts in all major cloud platforms with deep experience in complex migrations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
              {cloudProviders.map((provider, index) => (

                <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-6 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{provider.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4group-hover:text-cyan-400 transition-colors"  />{provider.name}
                  </h3>
                  <p className="text-gray-300 mb-4leading-relaxed">
              {provider.description}
                  </p>
                  <div className="space-y-1">
                    {provider.features.map((feature, featureIndex) => (

                      <div key="{featureIndex}" className="text-cyan-400text-sm">• {feature}
                      </div>

                    ))}

                  </div>
              ))}

            </div>
        </section>

        {/* Pricing Section */}

        <section className="py-20px-4relative" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5via-cyan-500/5to-pink-500/5" />
          <div className="relative max-w-7xlmx-auto">
            <div className="text-centermb-16">
              <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
                Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              Choose the migration package that fits your needs. All packages include our core migration services.
              </p>
            </div>

            <div className="grid grid-cols-1md:grid-cols-3gap-8">
              {pricingPlans.map((plan, index) => (
                <div key="{index}" className="{`group" relative bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? 'border-cyan-400/50 shadow-2 xl shadow-cyan-500/20'
                    : 'border-white/20 hover: border-cyan-400/30'
                }`} />
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2transform-translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold"  />Most Popular
                      </div>
                  )}

                  <div className="text-centermb-8">
                    <h3 className="text-2 xl font-bold text-white mb-2"   />{plan.name}</h3>
                    <p className="text-gray-300 mb-6">
              {plan.description}</p>
                    <div className="flex items-baselinejustify-center">
                      <span className="text-5 xlfont-bold text-white"   />{plan.price}</span>
                      <span className="text-gray-400ml-2"   />{plan.period}</span>
                    </div>

                  <div className="space-y-4mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key="{featureIndex}" className="flex items-centerspace-x-3" />
                        <CheckCircle className="w-5 h-5text-green-400flex-shrink-0" />
                        <span className="text-gray-300"   />{feature}</span>
                      </div>

                    ))}
                  </div>

                  <button className="{`w-full" py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}  />{plan.cta}

                  </button>
                </div>

              ))}

            </div>
        </section>

        {/* Testimonials Section */}

        <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50to-pink-900/50relative" />
          <div className="absoluteinset-0bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xlmx-auto">
            <div className="text-centermb-16">
              <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
                Trusted by <span className="bg-gradient-to-r from-purple-400 to-pink-400bg-clip-texttext-transparent"   />500+ Companies</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              See what our clients say about their cloud migration experience with Zion Tech Group.
              </p>
            </div>

            <div className="grid grid-cols-1md:grid-cols-3gap-8">
              {testimonials.map((testimonial, index) => (

                <div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20transition-allduration-300" />
                  <div className="flex items-centermb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="w-5 h-5text-yellow-400fill-current" />
                    ))}

                  </div>
                  <p className="text-gray-300 mb-6leading-relaxed">
              "{testimonial.content}"</p>
                  <div className="flex items-centerspace-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-centertext-whitefont-bold"  />{testimonial.avatar}
                    </div>
                    <div />
                      <div className="font-semiboldtext-white"   />{testimonial.name}</div>
                      <div className="text-gray-400text-sm"   />{testimonial.role}, {testimonial.company}</div>
                  </div>
              ))}

            </div>
        </section>

        {/* CTA Section */}

        <section className="py-20px-4relative" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" />
          <div className="relative max-w-7xlmx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden">
                <div className="absolute top-0 left-0 w-full h-fullbg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)]animate-pulse" />
                <div className="relativez-10">
                  <h2 className="text-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6leading-tight" />
                    Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent"   />Infrastructure?</span>
                  </h2>

                  <p className="text-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
              Join hundreds of companies who have successfully migrated to the cloud with our expert guidance.
                    Get your free cloud readiness assessment today.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6justify-centermb-8">
                    <button className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                      <span>Get Free Assessment</span>
                      <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
                    </button>
                    <Link to="/contact" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" >

          <span    />
        </Link>Contact Expert</span>
                      <MessageCircle className="w-5 h-5group-hover:scale-110transition-transform" />
                    </Link>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-3gap-6text-white/80">
                    <div className="flex items-centerjustify-centerspace-x-3">
                      <Phone className="w-5h-5text-cyan-300" />
                      <span className="text-sm"   />+1 302 464 0950</span>
                    </div>
                    <div className="flex items-centerjustify-centerspace-x-3">
                      <Mail className="w-5h-5text-purple-300" />
                      <span className="text-sm"   />kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-centerjustify-centerspace-x-3">
                      <MapPin className="w-5h-5text-pink-300" />
                      <span className="text-sm"   />Middletown DE 19709</span>
                    </div>
                </div>
            </div>
        </section>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>

      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
);
}
