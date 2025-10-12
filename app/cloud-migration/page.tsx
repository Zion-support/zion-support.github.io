import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, HardDrive, Laptop, Tablet, Router } from 'lucide-react'
export default function CloudMigrationPage() {

  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Multi-Cloud Strategy',
      description: 'Comprehensive cloud migration strategy supporting AWS, Azure, Google Cloud, and hybrid environments.',
      benefits: ['AWS expertise', 'Azure migration', 'Google Cloud setup', 'Hybrid cloud solutions']
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      title: 'Security-First Approach',
      description: 'Enterprise-grade security with zero-downtime migration and comprehensive compliance validation.',
      benefits: ['Zero-downtime migration', 'Security compliance', 'Data encryption', 'Access controls']
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: 'Cost Optimization',
      description: 'Intelligent resource allocation and cost monitoring to reduce cloud expenses by up to 40%.',
      benefits: ['Cost analysis', 'Resource optimization', 'Auto-scaling', 'Budget monitoring']
    },
    {
      icon: <Zap className="w-6 h-6 text-pink-400" />,
      title: 'Performance Enhancement',
      description: 'Optimize application performance with advanced monitoring, caching, and load balancing.',
      benefits: ['Performance monitoring', 'Load balancing', 'Caching strategies', 'Auto-scaling']
    },
    {
      icon: <Database className="w-6 h-6 text-orange-400" />,
      title: 'Database Migration',
      description: 'Seamless database migration with minimal downtime and data integrity guarantees.',
      benefits: ['Zero data loss', 'Schema migration', 'Data validation', 'Backup strategies']
    },
    {
      icon: <Network className="w-6 h-6 text-red-400" />,
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
      content: 'Zion\'s cloud migration reduced our infrastructure costs by 45% while improving performance by 60%. The zero-downtime migration was flawless.',
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
      content: 'Our applications now run 3x faster in the cloud. The cost savings alone paid for the migration in 6 months.',
      rating: 5,
      avatar: 'LC'
    }
  ]

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of your current infrastructure and cloud readiness assessment.',
      icon: <Search className="w-8 h-8 text-cyan-400" />,
      duration: '1-2 weeks'
    },
    {
      step: '02',
      title: 'Strategy Design',
      description: 'Custom migration strategy tailored to your business needs and technical requirements.',
      icon: <Target className="w-8 h-8 text-emerald-400" />,
      duration: '1 week'
    },
    {
      step: '03',
      title: 'Pre-Migration Setup',
      description: 'Cloud environment preparation, security configuration, and testing environment setup.',
      icon: <Settings className="w-8 h-8 text-purple-400" />,
      duration: '2-3 weeks'
    },
    {
      step: '04',
      title: 'Data Migration',
      description: 'Secure data transfer with zero data loss guarantee and real-time validation.',
      icon: <Database className="w-8 h-8 text-pink-400" />,
      duration: '1-2 weeks'
    },
    {
      step: '05',
      title: 'Application Migration',
      description: 'Application deployment, configuration, and optimization in the cloud environment.',
      icon: <Server className="w-8 h-8 text-orange-400" />,
      duration: '2-4 weeks'
    },
    {
      step: '06',
      title: 'Testing & Optimization',
      description: 'Comprehensive testing, performance optimization, and security validation.',
      icon: <CheckCircle className="w-8 h-8 text-red-400" />,
      duration: '1-2 weeks'
    }
  ]

  const cloudProviders = [
    {
      name: 'Amazon Web Services',
      icon: <Cloud className="w-8 h-8 text-orange-400" />,
      description: 'Leading cloud platform with comprehensive services and global reach',
      features: ['EC2, S3, RDS', 'Lambda functions', 'CloudFront CDN', 'Auto Scaling']
    },
    {
      name: 'Microsoft Azure',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      description: 'Enterprise-focused cloud platform with strong Microsoft integration',
      features: ['Virtual Machines', 'Azure SQL', 'App Service', 'Active Directory']
    },
    {
      name: 'Google Cloud Platform',
      icon: <Cloud className="w-8 h-8 text-green-400" />,
      description: 'AI and machine learning focused cloud with advanced analytics',
      features: ['Compute Engine', 'BigQuery', 'AI/ML services', 'Kubernetes Engine']
    },
    {
      name: 'Hybrid Cloud',
      icon: <Network className="w-8 h-8 text-purple-400" />,
      description: 'Best of both worlds with on-premises and cloud integration',
      features: ['Hybrid connectivity', 'Data synchronization', 'Unified management', 'Flexible deployment']
    }
  ]

  return (
    <>
      <Helmet>
        <title>Cloud Migration Services - Expert Cloud Transformation | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our expert cloud migration services. AWS, Azure, Google Cloud migration with zero downtime. Starting at $2,500. Free consultation available." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud migration, cloud transformation, cloud consulting, infrastructure migration" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-migration" />
      </Helmet>

      <div>
        </Cloud>
        </Shield>
        </BarChart3>
        </Zap>
        </Database>
        </Network>
        </Search>
        </Target>
        </Settings>
        </Database>
        </Server>
        </CheckCircle>
        </Cloud>
        </Cloud>
        </Cloud>
        </Network>
        </meta>
        </meta>
        </meta>
        </link>
        </Sparkles>
        </br>
        </br>
        </ArrowRight>
        </Play>
        </CheckCircle>
        </Star>
        </Shield>
        </Clock>
        </CheckCircle>
        </CheckCircle>
        </Star>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </ArrowRight>
        </MessageCircle>
        </div>
        </div>
        </Phone>
        </div>
        </Mail>
        </div>
        </MapPin>
        {/* Hero Section */}
        <section>
          {/* Animated Background */}
          <div>
          <div>
          
          {/* Floating Elements */}
          <div>
          <div>
          <div>
          
          <div>
            <div>
              <Sparkles className="w-4 h-4" />
              <span>Expert Cloud Transformation</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Cloud
              <br></br>
              <span>
                Migration
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with expert cloud migration services. 
              <br></br>
              <span>Zero downtime • 40% cost reduction • 99.9% uptime • Enterprise security</span>
            </p>
            
            <div>
              <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105">
                <span>Get Free Assessment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm">
                <Play className="w-5 h-5" />
                <span>Watch Case Study</span>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div>
              <div>
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>500+ Migrations</span>
              </div>
              <div>
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div>
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Zero Data Loss</span>
              </div>
              <div>
                <Clock className="w-4 h-4 text-purple-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section>
          <div>
          <div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive <span>Migration Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                From assessment to optimization, we handle every aspect of your cloud migration journey.
              </p>
            </div>
            
            <div>
              {features.map((feature, index) => (
                <div>
                  <div>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Process Section */}
        <section>
          <div>
          <div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Proven <span>Migration Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                A systematic approach that ensures successful cloud migration with minimal risk and maximum value.
              </p>
            </div>
            
            <div>
              {migrationSteps.map((step, index) => (
                <div>
                  <div>
                    <div>
                      {step.icon}
                    </div>
                    <div>{step.step}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div>
                    Duration: {step.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section>
          <div>
          <div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Multi-Cloud <span>Expertise</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Certified experts in all major cloud platforms with deep experience in complex migrations.
              </p>
            </div>
            
            <div>
              {cloudProviders.map((provider, index) => (
                <div>
                  <div>
                    {provider.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {provider.name}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {provider.description}
                  </p>
                  <div>
                    {provider.features.map((feature, featureIndex) => (
                      <div>
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section>
          <div>
          <div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transparent <span>Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Choose the migration package that fits your needs. All packages include our core migration services.
              </p>
            </div>
            
            <div>
              {pricingPlans.map((plan, index) => (
                <div>
                  {plan.popular && (
                    <div>
                      <div>
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div>
                      <span>{plan.price}</span>
                      <span>{plan.period}</span>
                    </div>
                  </div>
                  
                  <div>
                    {plan.features.map((feature, featureIndex) => (
                      <div>
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section>
          <div>
          <div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by <span>500+ Companies</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                See what our clients say about their cloud migration experience with Zion Tech Group.
              </p>
            </div>
            
            <div>
              {testimonials.map((testimonial, index) => (
                <div>
                  <div>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div>
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div>{testimonial.name}</div>
                      <div>{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div>
          <div>
            <div>
              <div>
                <div>
                
                <div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Ready to Transform Your <span>Infrastructure?</span>
                  </h2>
                  
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                    Join hundreds of companies who have successfully migrated to the cloud with our expert guidance. 
                    Get your free cloud readiness assessment today.
                  </p>
                  
                  <div>
                    <button className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                      <span>Get Free Assessment</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <Link;
to="/contact" 
                      className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                    >
                      <span>Contact Expert</span>
                      <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Contact Information */}
                  <div>
                    <div>
                      <Phone className="w-5 h-5 text-cyan-300" />
                      <span>+1 302 464 0950</span>
                    </div>
                    <div>
                      <Mail className="w-5 h-5 text-purple-300" />
                      <span>kleber@ziontechgroup.com</span>
                    </div>
                    <div>
                      <MapPin className="w-5 h-5 text-pink-300" />
                      <span>Middletown DE 19709</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}