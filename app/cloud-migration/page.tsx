import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { ArrowRight, HardDrive, Laptop, Tablet, Router } from 'lucide-react';

export default function CloudMigrationPa g e() {

  constfeatures= [
    {
      icon: <CloudclassName="w-5h-5ml-2" />,
      title: 'Multi-CloudStrategy',
      description: 'Comprehensi v e cloud migration strategy supporting AWS, Azure, Google Cloud, and hybrid environmen t s.',
      benefits: ['AWS expertise', 'Azure migration', 'Google Cloud setup', 'Hybrid cloud solutions']
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'Security-FirstApproach',
      description: 'Enterprise-gradesecuritywith zero-downtimemigrationand comprehensi v e compliance validation.',
      benefits: ['Zero-downtimemigration', 'Security compliance', 'Data encryption', 'Access controls']
    },
    {
      icon: <BarChart3className="w-5h-5ml-2" />,
      title: 'Cost Optimizati o n',
      description: 'Intellige n t resource allocation and cost monitoring to reduce cloud expenses by up to 40%.',
      benefits: ['Cost analysis', 'Resource optimizati o n', 'Auto-scaling', 'Budget monitoring']
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: 'Performan c e Enhanceme n t',
      description: 'Optimize applicati o n performan c e with advanced monitoring, caching, and load balancing.',
      benefits: ['Performan c e monitoring', 'Load balancing', 'Caching strategies', 'Auto-scaling']
    },
    {
      icon: <DatabaseclassName="w-5h-5ml-2" />,
      title: 'Database Migration',
      description: 'Seamless database migration with minimal downtime and data integrity guarantees.',
      benefits: ['Zero data loss', 'Schema migration', 'Data validation', 'Backup strategies']
    },
    {
      icon: <NetworkclassName="w-5h-5ml-2" />,
      title: 'Network Architectu r e',
      description: 'Design and implement robust cloud network architectu r e with high availabili t y and scalabili t y.',
      benefits: ['VPC design', 'Load balancing', 'CDN setup', 'Global distributi o n']
    }
  ]

  const pricingPlans= [
    {
      name: 'Assessment',
      price: '$2,500',
      period: 'one-time',
      description: 'Comprehensi v e cloud readiness assessment and migration planning',
      features: [
        'Current infrastructu r e audit',
        'Cloud readiness assessment',
        'Migration strategy planning',
        'Cost analysis and optimizati o n',
        'Security compliance review',
        'Timeline and roadmap creation',
        'Risk assessment and mitigation',
        'Detailed migration report';
      ],
      popular: false,
      cta: 'Get Assessment';
    },
    {
      name: 'Standard Migration',
      price: '$15,000',
      period: 'project',
      description: 'Complete cloud migration for small to medium businesses',
      features: [
        'Full infrastructu r e migration',
        'Applicati o n modernizati o n',
        'Database migration',
        'Security implementati o n',
        'Performan c e optimizati o n',
        '30 days post-migrationsupport',
        'Documentati o n and training',
        'Monitoring setup';
      ],
      popular: true,
      cta: 'Start Migration';
    },
    {
      name: 'Enterprise Migration',
      price: 'Custom',
      period: 'project',
      description: 'Large-scaleenterprisecloud transformati o n with dedicated support',
      features: [
        'Complex multi-cloudmigration',
        'Legacy system modernizati o n',
        'Custom applicati o n developme n t',
        'Advanced security implementati o n',
        '24/7 dedicated support',
        'Unlimited post-migrationsupport',
        'Custom integratio n s',
        'White-labelsolutions',
        'Dedicated project manager',
        'SLA guarantees';
      ],
      popular: false,
      cta: 'Contact Sales';
    }
  ]

  const testimonials= [
    {
      name: 'Maria Rodriguez',
      role: 'CTO',
      company: 'TechFlow Solutions',
      content: 'Zion's cloud migration reduced our infrastructu r e costs by 45% while improving performan c e by 60%. The zero-downtimemigrationwas flawless.',
      rating: 5,
      avatar: 'MR';
    },
    {
      name: 'James Wilson',
      role: 'IT Director',
      company: 'Enterprise Corp',
      content: 'The migration team was exception a l. They handled our complex legacy systems with expertise and delivered ahead of schedule.',
      rating: 5,
      avatar: 'JW';
    },
    {
      name: 'Lisa Chen',
      role: 'VP of Engineeri n g',
      company: 'StartupHub',
      content: 'Our applicatio n s now run 3 x faster in the cloud. The cost savings alone paid for the migration in 6 months.',
      rating: 5,
      avatar: 'LC';
    }
  ]

  const migrationSteps= [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensi v e analysis of your current infrastructu r e and cloud readiness assessment.',
      icon: <SearchclassName="w-5h-5ml-2" />,
      duration: '1-2weeks';
    },
    {
      step: '02',
      title: 'Strategy Design',
      description: 'Custom migration strategy tailored to your business needs and technical requiremen t s.',
      icon: <TargetclassName="w-5h-5ml-2" />,
      duration: '1 week';
    },
    {
      step: '03',
      title: 'Pre-MigrationSetup',
      description: 'Cloud environme n t preparati o n, security configurati o n, and testing environme n t setup.',
      icon: <SettingsclassName="w-5h-5ml-2" />,
      duration: '2-3weeks';
    },
    {
      step: '04',
      title: 'Data Migration',
      description: 'Secure data transfer with zero data loss guarantee and real-timevalidation.',
      icon: <DatabaseclassName="w-5h-5ml-2" />,
      duration: '1-2weeks';
    },
    {
      step: '05',
      title: 'Applicati o n Migration',
      description: 'Applicati o n deployment, configurati o n, and optimizati o n in the cloud environme n t.',
      icon: <ServerclassName="w-5h-5ml-2" />,
      duration: '2-4weeks';
    },
    {
      step: '06',
      title: 'Testing & Optimizati o n',
      description: 'Comprehensi v e testing, performan c e optimizati o n, and security validation.',
      icon: <CheckCirc leclassName="w-5h-5ml-2" />,
      duration: '1-2weeks';
    }
  ]

  const cloudProviders= [
    {
      name: 'Amazon Web Services',
      icon: <CloudclassName="w-5h-5ml-2" />,
      description: 'Leading cloud platform with comprehensi v e services and global reach',
      features: ['EC2, S3, RDS', 'Lambda functions', 'CloudFront CDN', 'Auto Scaling']
    },
    {
      name: 'Microsoft Azure',
      icon: <CloudclassName="w-5h-5ml-2" />,
      description: 'Enterprise-focusedcloudplatform with strong Microsoft integrati o n',
      features: ['Virtual Machines', 'Azure SQL', 'App Service', 'Active Directory']
    },
    {
      name: 'Google Cloud Platform',
      icon: <CloudclassName="w-5h-5ml-2" />,
      description: 'AI and machine learning focused cloud with advanced analytics',
      features: ['Compute Engine', 'BigQuery', 'AI/ML services', 'Kubernetes Engine']
    },
    {
      name: 'Hybrid Cloud',
      icon: <NetworkclassName="w-5h-5ml-2" />,
      description: 'Best of both worlds with on-premisesandcloud integrati o n',
      features: ['Hybrid connectivi t y', 'Data synchronizati o n', 'Unified management', 'Flexible deployment']
    }
  ]

return (
    <>
      <Helmet></Helmet>
        <title />Cloud Migration Services - Expert Cloud Transformati o n | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our expert cloud migration services. AWS, Azure, Google Cloud migration with zero downtime. Starting at $2,500. Free consultati o n available." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud migration, cloud transformati o n, cloud consulting, infrastructu r e migration" />
        <meta name="robots" content="index, follow" />
        <linkrel="canonical" href="https://ziontechgro u p.com/cloud-migration"  />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          {/* Animated Background */}
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDel a y: '1 s' ,}}  />
          {/* Floating Elements */}
          <div className="absolutetop-20left-10w-16h-16bg-cyan-400/20rounded-fullblur-xlanimate-bounce" style="{{" animationDel a y: '0.5 s' ,}}  />
          <div className="absolutetop-40right-20w-12h-12bg-purple-400/20rounded-fullblur-xlanimate-bounce" style="{{" animationDel a y: '1.5 s' ,}}  />
          <div className="absolutebottom-20left-1/4w-8h-8bg-pink-400/20rounded-fullblur-xlanimate-bounce" style="{{" animationDel a y: '2.5 s' ,}}  />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <SparklesclassName="w-5h-5ml-2" />
              <span />Expert Cloud Transformati o n</span>
            </div>
            
            <h1 className="w-5h-5ml-2" />
              Cloud;
              <br />
              <span className="w-5h-5ml-2" />Migration;
              </span>
            </h1>
            
            <p className="w-5h-5ml-2" />
              Transform your business with expert cloud migration services.;
              <br />
              <span className="w-5h-5ml-2" />Zero downtime • 40% cost reduction • 99.9% uptime • Enterprise security</span>
            </p>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <button className="w-5h-5ml-2" />
                <span />Get Free Assessment</span>
                <ArrowRight className="w-5h-5ml-2" />
              </button>
              <button className="w-5h-5ml-2" />
                <PlayclassName="w-5h-5ml-2" />
                <span />Watch Case Study</span>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <CheckCirc leclassName="w-5h-5ml-2" />
                <span />500+ Migrations</span>
              </div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <StarclassName="w-5h-5ml-2" />
                <span />4.9/5 Rating</span>
              </div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <ShieldclassName="w-5h-5ml-2" />
                <span />Zero Data Loss</span>
              </div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <ClockclassName="w-5h-5ml-2" />
                <span />24/7 Support</span>
              </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Comprehensi v e <span className="w-5h-5ml-2" />Migration Services</span>
              </h2>
              <p className="w-5h-5ml-2">From assessment to optimizati o n, we handle every aspect of your cloud migration journey.;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {features.map((feature, index) => ())
                <divkey="{index}" className="groupbg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:bg-white/20transition-allduration-300hover:scale-105hover:shadow-2xlhover:shadow-cyan-500/10" />
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

        {/* Migration Process Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Our Proven <span className="w-5h-5ml-2" />Migration Process</span>
              </h2>
              <p className="w-5h-5ml-2">A systematic approach that ensures successful cloud migration with minimal risk and maximum value.;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {migrationSte p s.map((step, index) => ())
                <divkey="{index}" className="groupbg-white/10backdrop-blur-lgrounded-2xlp-6borderborder-white/20hover:bg-white/20transition-allduration-300hover:scale-105" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{step.icon}>
                    </div>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{step.step}</div>
                  <h3 className="w-5h-5ml-2" />{step.title}
                  </h3>
                  <p className="w-5h-5ml-2">{step.description}
                  </p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Duration: {step.duration,}>
                  </div>
              ))}
            </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Multi-Cloud <span className="w-5h-5ml-2" />Expertise</span>
              </h2>
              <p className="w-5h-5ml-2">Certified experts in all major cloud platforms with deep experience in complex migrations.;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {cloudProvide r s.map((provider, index) => ())
                <divkey="{index}" className="groupbg-white/10backdrop-blur-lgrounded-2xlp-6borderborder-white/20hover:bg-white/20transition-allduration-300hover:scale-105" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{provider.icon}>
                  </div>
                  <h3 className="w-5h-5ml-2" />{provider.name}
                  </h3>
                  <p className="w-5h-5ml-2">{provider.description}
                  </p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {provider.features.map((feature, featureInd e x) => ())
                      <divkey="{featureInd e x}" className="text-cyan-400text-sm"  />• {feature}>
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
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Transpare n t <span className="w-5h-5ml-2" />Pricing</span>
              </h2>
              <p className="w-5h-5ml-2">Choose the migration package that fits your needs. All packages include our core migration services.;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {pricingPla n s.map((plan, index) => ())
                <divkey="{index}" className="{`group" relative bg-white/10 backdrop-blur-lgrounded-2xl p-8bordertransition-allduration-300hover:scale-105 ${>
                  plan.popular;
                    ? 'border-cyan-400/50 shadow-2xlshadow-cyan-500/20';
                    : 'border-white/20 hover: border-cyan-400/30';
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
                  
                  <button className="{`w-full" py-4rounded-xlfont-semiboldtransition-allduration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-rfrom-cyan-500to-purple-600text-whitehover:from-cyan-600hover:to-purple-700shadow-lgshadow-cyan-500/25';
                      : 'border-2border-cyan-400text-cyan-400hover: bg-cyan-400hover:text-gray-900';
                  }`}  />{plan.cta}
                  </button>
                </div>
              ))}
            </div>
        </section>

        {/* Testimonia l s Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Trusted by <span className="w-5h-5ml-2" />500+ Companies</span>
              </h2>
              <p className="w-5h-5ml-2">See what our clients say about their cloud migration experience with Zion Tech Group.;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {testimonia l s.map((testimoni a l, index) => ())
                <divkey="{index}" className="bg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:bg-white/20transition-allduration-300" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {[...Array(testimoni a l.rating)].map((_, i) => ())
                      <Starkey="{i}" className="w-5h-5text-yellow-400fill-current"  />
                    ))}
                  </div>
                  <p className="w-5h-5ml-2">"{testimoni a l.content}"</p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.avatar}>
                    </div>
                    <div />
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.name}</div>
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.role}, {testimoni a l.company}</div>
                  </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <h2 className="w-5h-5ml-2" />
                    Ready to Transform Your <span className="w-5h-5ml-2" />Infrastructu r e?</span>
                  </h2>
                  
                  <p className="w-5h-5ml-2">Join hundreds of companies who have successful l y migrated to the cloud with our expert guidance.;
                    Get your free cloud readiness assessment today.;
                  </p>
                  
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <button className="w-5h-5ml-2" />
                      <span />Get Free Assessment</span>
                      <ArrowRight className="w-5h-5ml-2" />
                    </button>
                    <Linkto="/contact" className="groupborder-2border-whitetext-whitepx-10py-4rounded-xlfont-boldtext-lghover:bg-white/10transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
                      <span />Contact Expert</span>
                      <MessageCirc leclassName="w-5h-5ml-2" />
                    </Link>
                  </div>
                  
                  {/* Contact Informati o n */}
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <PhoneclassName="w-5h-5ml-2" />
                      <span className="w-5h-5ml-2" />+1 302 464 0950</span>
                    </div>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <MailclassName="w-5h-5ml-2" />
                      <span className="w-5h-5ml-2" />kleber@ziontechgro u p.com</span>
                    </div>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <MapPinclassName="w-5h-5ml-2" />
                      <span className="w-5h-5ml-2" />Middletown DE 19709</span>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </>
  );
}