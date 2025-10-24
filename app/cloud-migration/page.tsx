<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { ArrowRight } from 'lucide-react';
import { Cloud } from 'lucide-react';
export default function CloudMigration() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Cloud Migration - Zion Tech Group</title>
        <meta name="description" content="Cloud Migration solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Cloud Migration</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive cloud migration solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
=======
import React from 'react';
import { Cloud, Shield, Zap, Target, TrendingUp, CheckCircle, ArrowRight, Star, Award, Globe, Server, Database, Users, Clock } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const CloudMigrationPage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
=======
=======
    {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      icon: Cloud,
      title: 'Seamless Migration',
      description: 'Zero-downtime migration to cloud platforms with minimal business disruption',
      benefits: ['Zero downtime', 'Data integrity', 'Rollback capability']
    },
<<<<<<< HEAD
    {
=======
    {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      icon: Database,
      title: 'Data Migration',
      description: 'Secure and efficient migration of databases and data warehouses',
      benefits: ['Data validation', 'Incremental sync', 'Backup & recovery']
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
    },
<<<<<<< HEAD
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
<<<<<<< HEAD
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
=======
=======
    {}
      icon: Server,
      title: 'Infrastructure Setup',
      description: 'Complete cloud infrastructure setup and configuration',
      benefits: ['Auto-scaling', 'Load balancing', 'Security configuration']
    },
    {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security throughout the migration process',
      benefits: ['Data encryption', 'Access controls', 'Compliance']
    },
<<<<<<< HEAD
    {
=======
    {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize your cloud infrastructure for maximum performance and cost efficiency.',
      benefits: ['Auto-scaling', 'Load balancing', 'Performance monitoring', 'Cost optimization']
    },
<<<<<<< HEAD
    {
=======
    {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      icon: Target,
      title: 'Multi-Cloud Strategy',
      description: 'Design and implement multi-cloud architectures for maximum flexibility and redundancy.',
      benefits: ['Vendor independence', 'Disaster recovery', 'Cost optimization', 'Flexibility']
    }
  ];

  const migrationSteps = [
    {
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of current infrastructure and migration strategy',
      icon: CheckCircle,
      features: ['Infrastructure audit', 'Cost analysis', 'Migration timeline']
    },
<<<<<<< HEAD
    {
      step: '2',
      title: 'Planning',
      description: 'Create detailed migration plan with timelines and rollback strategies'
    },
    {
      title: 'Optimization & Support',
      description: 'Post-migration optimization and ongoing support',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
      icon: Shield,
      title: 'Secure Analytics',
      description: 'Enterprise-grade security for your sensitive data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
=======
      icon: Shield,
      title: 'Secure Cloud Migration',
      description: 'Safe and secure migration of your applications and data to the cloud',
    },
    {
      icon: Zap,
      title: 'Zero Downtime Migration',
      description: 'Seamless migration with minimal to zero downtime for your business',
    },
    {
      icon: Brain,
      title: 'AI-Powered Migration',
      description: 'Intelligent migration planning and execution powered by AI technology',
    },
    {
      icon: Globe,
      title: 'Multi-Cloud Support',
      description: 'Support for migration to AWS, Azure, GCP, and other cloud platforms'
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
    {}
      step: '02',
      title: 'Architecture Design',
      description: 'Design optimal cloud architecture tailored to your business needs.',
      duration: '1-2 weeks'},
    {}
      step: '03',
      title: 'Migration',
      description: 'Execute the migration with zero downtime and data integrity',
      duration: '2-4 weeks',
      icon: Cloud;
    },
    {}
      step: '04',
      title: 'Optimization',
      description: 'Optimize performance and provide ongoing support and monitoring.',
      icon: TrendingUp;
      duration: 'Ongoing'}
  ];

  const pricingPlans = [
    {}
      name: 'Assessment',
      price: '$5,000',
      description: 'Comprehensive infrastructure assessment and migration planning',
      features: [
        'Infrastructure audit',
        'Migration strategy',
        'Cost analysis',
        'Timeline planning',
        'Risk assessment'
      ],
      popular: false;
    },
    {}
      name: 'Standard Migration',
      price: '$15,000',
      description: 'Complete migration service for small to medium businesses',
      features: [
        'Everything in Assessment',
        'Data migration',
        'Application migration',
        'Testing and validation',
        '30 days support'
      ],
      popular: true;
    },
    {}
      name: 'Enterprise Migration',
      price: 'Custom',
      description: 'Full-service migration for large enterprises',
      features: [
        'Everything in Standard',
        'Custom architecture design',
        'Multi-cloud strategy',
        'Advanced security setup',
        '6 months support',
        'Dedicated team'
      ],
      popular: false;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    }
  ];

  const benefits = [
<<<<<<< HEAD
<<<<<<< HEAD
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration solutions." />
        <meta name="keywords" content="cloud migration, AWS, Azure, Google Cloud" />
      </Helmet>

<<<<<<< HEAD
=======
    {
      title: 'Cost Reduction',
      description: 'Reduce infrastructure costs by up to 40% with cloud optimization.',
      icon: TrendingUp,
      percentage: '40%'
    },
    {
      title: 'Improved Performance',
      description: 'Achieve 99.9% uptime with cloud infrastructure.',
      icon: Zap,
      percentage: '99.9%'
    },
    {
      title: 'Enhanced Security',
      description: 'Enterprise-grade security with automated updates and monitoring.',
      icon: Shield,
      percentage: '100%'
    },
    {
      title: 'Scalability',
      description: 'Scale resources up or down based on demand automatically.',
      icon: Target,
      percentage: 'Unlimited'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="cyber-grid"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-5xl font-bold text-white neon-text">
                Cloud Migration
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Seamlessly migrate your infrastructure to the cloud with our expert migration services. 
              Reduce costs by 40%, improve scalability, and enhance security with zero downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Start Migration
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/demo"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              >
                Free Assessment
              </Link>
=======
    {}
      title: 'Cost Reduction',
      description: 'Reduce infrastructure costs by up to 40% with cloud optimization.',
      percentage: '40%'},
    {}
      title: 'Improved Performance',
      description: 'Achieve 99.9% uptime with cloud infrastructure.',
      percentage: '99.9%'},
    {}
      title: 'Enhanced Security',
      description: 'Enterprise-grade security with automated updates and monitoring.',
      percentage: '100%'},
    {}
      title: 'Scalability',
      description: 'Scale resources up or down based on demand automatically.',
      percentage: 'Unlimited'}
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      <main className="pt-24 pb-16 px-4"></main>
        <div className="max-w-7xl mx-auto">{/* Hero Section */}</div>
          <section className="text-center mb-16"></section>
            <div className="flex items-center justify-center mb-6"></section>
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4"></div>
                <Cloud className="w-8 h-8 text-white" />
              <h1 className="text-5xl font-bold text-white neon-text">Cloud Migration</h1><p className="text-xl text-gray-300 mb-8 leading-relaxed">Seamlessly migrate your infrastructure to the cloud with our expert migration services.</p>
              Reduce costs by 40%, improve scalability, and enhance security with zero downtime.</p>
              </div>
              <h1 className="text-5xl font-bold text-white neon-text"></h1>
                Cloud Migration;
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed"></p>
              Seamlessly migrate your infrastructure to the cloud with our expert migration services.
              Reduce costs by 40%, improve scalability, and enhance security with zero downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg"
              ></a>
                Start Migration;
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a;
                href="/demo"
                className="cyber-button-outline inline-flex items-center justify-center px-8 py-4 text-lg font-semibold"
              ></a>
                Free Assessment;
              </a>)
            </div>)
          </section>)
),
          {/* Features Section */}
          <section className="py-20 bg-slate-800/50"></section>
            <div className="container mx-auto px-4"></section>
              <div className="text-center mb-16"></div>
                <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Cloud Migration</h2><p className="text-xl text-gray-300 max-w-3xl mx-auto">Our cloud migration services cover every aspect of your infrastructure transition,</p>
                  from planning to optimization.<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
                  <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                      <feature.icon className="w-8 h-8 text-white" />
                <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Cloud Migration</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                  Our cloud migration services cover every aspect of your infrastructure transition)
                  from planning to optimization.
                </p>
              </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
                {features.map((feature, index) => (}
                  <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300"></div>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <ul className="space-y-2"></ul>
                      {feature.benefits.map((benefit, benefitIndex) => (}
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400"></li>
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" >{benefit}</CheckCircle>
                        </CheckCircle>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Migration Process Section */}
          <section className="py-16 px-4 bg-slate-800/50"></section>
                <h2 className="text-4xl font-bold text-white mb-4">Our Migration Process</h2>
                <p className="text-xl text-gray-300">A proven methodology for successful cloud migrations</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
                {migrationSteps.map((step, index) => (}
                  <div key={index} className="cyber-card p-6"></div>
                    <div className="flex items-center mb-4"></div>
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4"></div>
            <div className="max-w-6xl mx-auto"></section>
              <div className="text-center mb-12"></div>
                <h2 className="text-4xl font-bold text-white mb-4">Our Migration Process</h2><p className="text-xl text-gray-300">A proven methodology for successful cloud migrations</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{migrationSteps.map((step, index) => (</div>
                  <div key={index} className="cyber-card p-6"></div>
                    <div className="flex items-center mb-4"></div>
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4"></div>
                        <span className="text-white font-bold text-lg">{step.step}</span>
                      </div>
                      {step.icon && (}
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center"></div>
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                      )}
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 mb-4">{step.description}</p><div className="text-cyan-400 font-semibold">Duration: {step.duration}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16 px-4"></section>
              <div className="grid grid-cols-1 lg: grid-cols-2 gap-12 items-center">,
                <div>,
                  <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Cloud Migration?</h2>,
                  <div className="space-y-6">,
                    {benefits.map((benefit, index) => (
                  <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Cloud Migration?</h2>
                  <div className="space-y-6"></div>
                    {benefits.map((benefit, index) => (}
                      <div key={index} className="flex items-start"></div>
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1"></div>
            <div className="max-w-6xl mx-auto"></section>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>
                <div></div>
                  <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Cloud Migration?</h2><div className="space-y-6">{benefits.map((benefit, index) => (</div>
                      <div key={index} className="flex items-start"></div>
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1"></div>
                          <CheckCircle className="w-5 h-5 text-white" />
                        </div>
                        <div></div>
                          <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3><p className="text-gray-300">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="cyber-card p-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-6">Ready for Cloud Migration?</h3><p className="text-gray-300 mb-6">Get a free assessment of your current infrastructure and migration readiness.</p>
                    Our experts will provide a detailed migration plan and cost estimate.</p>
                  </p>
                  <div className="space-y-4"></div>
                    <a
                      href="/contact"
                      className="cyber-button w-full inline-flex items-center justify-center py-3"
                    ></a>
                      Get Free Assessment;
                    </a>
                    <a;
                      href="/demo"
                      className="cyber-button-outline w-full inline-flex items-center justify-center py-3"
                    ></a>
                      Schedule Consultation;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-16 px-4 bg-slate-800/50"></section>
            <div className="max-w-6xl mx-auto"></section>
              <div className="text-center mb-12"></div>
                <h2 className="text-4xl font-bold text-white mb-4">Transparent Migration Pricing</h2><p className="text-xl text-gray-300">Choose the migration package that fits your needs</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>{plan.popular && (</div>
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                <h2 className="text-4xl font-bold text-white mb-4">Transparent Migration Pricing</h2>
                <p className="text-xl text-gray-300">Choose the migration package that fits your needs</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
                {pricingPlans.map((plan, index) => (}
                  <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}></div>
                    {plan.popular && (}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"></span>
                          Most Popular;
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-6"></div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-cyan-400 mb-2"></div>
                        {plan.price}
                        <span className="text-lg text-gray-400"> {plan.period}</span>
                      </div>
                      <p className="text-gray-300">{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8"></ul>
                      {plan.features.map((feature, idx) => (}
                        <li key={idx} className="flex items-center text-gray-300"></li>
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" >{feature}</CheckCircle>
                        </CheckCircle>
                      ))}
                    </ul>
                    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${}
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}>Get Started</button>
                      plan.popular;
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover: from-cyan-600 hover:to-purple-700'}
                        : 'bg-slate-700 text-white hover:bg-slate-600'}
                    }`}>
                      Get Started;
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></section>
            <div className="max-w-4xl mx-auto text-center"></section>
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Migrate to the Cloud?</h2><p className="text-xl text-gray-300 mb-8">Join hundreds of businesses that have successfully migrated to the cloud with our expert team.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="cyber-button px-8 py-4 text-lg">Start Your Migration<button className="cyber-button-outline px-8 py-4 text-lg">Contact Our Experts</button>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
                <button className="cyber-button px-8 py-4 text-lg"></button>
                  Start Your Migration;
                </button>
                <button className="cyber-button-outline px-8 py-4 text-lg"></button>
                  Contact Our Experts;
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer /></Foote>
    </div>
import React from 'react';
import { Helmet } from 'react-helmet-async';

const CloudMigrationPage: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
        <title>Cloud Migration Services - Zion Tech Group</title>
        <meta name="description" content="Expert cloud migration services to help your business transition to the cloud seamlessly." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4 py-16 pt-24"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
              Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Migration</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Expert cloud migration services to help your business transition to the cloud seamlessly and efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Migration Planning</h3>
              <p className="text-gray-300 mb-4"></p>
                Comprehensive assessment and planning to ensure a smooth cloud migration process.
              </p>
              <ul className="space-y-2 text-gray-300"></ul>
                <li>• Infrastructure Assessment</li>
                <li>• Migration Strategy</li>
                <li>• Risk Analysis</li>
                <li>• Timeline Planning</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Data Migration</h3>
              <p className="text-gray-300 mb-4"></p>
                Secure and efficient migration of your data to cloud platforms.
              </p>
              <ul className="space-y-2 text-gray-300"></ul>
                <li>• Database Migration</li>
                <li>• File Transfer</li>
                <li>• Data Validation</li>
                <li>• Backup & Recovery</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Application Migration</h3>
              <p className="text-gray-300 mb-4"></p>
                Seamless migration of your applications to cloud environments.
              </p>
              <ul className="space-y-2 text-gray-300"></ul>
                <li>• Application Assessment</li>
                <li>• Code Refactoring</li>
                <li>• Testing & Validation</li>
                <li>• Performance Optimization</li>
              </ul>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Cloud Migration</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cloud migration services cover every aspect of your infrastructure transition, 
              from planning to optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Cloud Migration
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional cloud migration solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
<<<<<<< HEAD
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
=======
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

          {/* Migration Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Our Migration Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our experts help you migrate to the cloud safely and efficiently
            </p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
=======
      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Accelerate Your Cloud Journey
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Don't let outdated infrastructure hold your business back. Our cloud migration 
            services will help you modernize, scale, and compete in the digital economy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Start Your Migration
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </section>
        </div>
      </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Cloud Migration?</h2>
            <p className="text-xl text-gray-300">Proven benefits that drive business value</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4">{benefit.description}</p>
                <div className="text-3xl font-bold text-cyan-400">{benefit.percentage}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Transparent Migration Pricing</h2>
            <p className="text-xl text-gray-300">Choose the migration package that fits your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-400"> {plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  Get Started
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
                </button>
              </div>
            </div>
          </div>
        </section>
=======
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Cloud Migration
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced cloud migration solutions. 
            Powered by cutting-edge AI technology and industry expertise.
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our cloud migration solutions deliver unmatched performance, security, and scalability.
          </p>
        </div></div></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <feature.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div></div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Our Cloud Migration Solutions?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div></div></div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contact our experts to discuss your cloud migration needs and get a customized solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </button>
          </div></div>
        </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      </div>
      <Footer />
    </>
<<<<<<< HEAD
=======
      </section>

      <Footer />

const CloudMigrationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Cloud Migration</h1>
        <p className="text-gray-300 mb-8">Coming Soon - Seamless cloud migration services</p>
        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
  );
};

export default CloudMigrationPage;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
export default CloudMigrationPage;
export default CloudMigrationPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
=======
  );
};

export default CloudMigrationPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======


  return (
    <>
      <title>CloudMigration - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">CloudMigration</h1>
            <p className="text-lg text-gray-300 mb-8">Professional cloudmigration services coming soon.</p>

              Contact Us

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
