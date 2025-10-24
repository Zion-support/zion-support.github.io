<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Cloud } from 'lucide-react';
export default function GDataAnalyticsZionTechGroupPage() {

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
=======
import { CheckCircle, Star, Shield, Clock, TrendingUp, Globe, BarChart, Sparkles, Phone, Cloud, Server, Database, Lock, ArrowUp, RefreshCw, Settings } from 'lucide-react';

const CloudMigrationServicesPage: React.FC = () => {
  const features = [
    {
      icon: Cloud;
      title: 'Multi-Cloud Strategy',
      description: 'Comprehensive cloud migration strategy supporting AWS, Azure, Google Cloud, and hybrid environments',
      benefits: ['Vendor-agnostic approach', 'Cost optimization', 'Risk mitigation', 'Flexibility & scalability']
    },
    {
      icon: Shield;
      title: 'Security-First Migration',
      description: 'Bank-level security throughout the migration process with zero-downtime deployment',
      benefits: ['End-to-end encryption', 'Compliance adherence', 'Zero data loss', 'Audit trail maintenance']
    },
    {
      icon: RefreshCw;
      title: 'Automated Migration',
      description: 'AI-powered migration automation with intelligent workload assessment and optimization',
      benefits: ['90% automation rate', 'Faster migration', 'Reduced errors', 'Cost savings']
    },
    {
      icon: BarChart;
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization of cloud resources for maximum efficiency',
      benefits: ['Real-time monitoring', 'Auto-scaling', 'Cost optimization', 'Performance tuning']
    },
    {
      icon: Database;
      title: 'Database Migration',
      description: 'Seamless database migration with minimal downtime and data integrity guarantees',
      benefits: ['Zero-downtime migration', 'Data validation', 'Backup & recovery', 'Performance optimization']
    },
    {
      icon: Lock;
      title: 'Compliance & Governance',
      description: 'Ensure compliance with industry standards and implement robust governance frameworks',
      benefits: ['GDPR compliance', 'SOC 2 certification', 'HIPAA compliance', 'Governance frameworks']
    }
  ];

  const migrationTypes = [
    {
      name: 'Lift & Shift',
      description: 'Move applications to cloud with minimal changes',
      icon: ArrowUp;
      benefits: ['Fastest migration', 'Minimal risk', 'Quick ROI', 'Preserve existing architecture']
    },
    {
      name: 'Replatforming',
      description: 'Optimize applications for cloud-native features',
      icon: RefreshCw;
      benefits: ['Cloud optimization', 'Better performance', 'Cost reduction', 'Enhanced scalability']
    },
    {
      name: 'Refactoring',
      description: 'Completely redesign applications for cloud',
      icon: Settings;
      benefits: ['Maximum cloud benefits', 'Modern architecture', 'Best performance', 'Future-proof design']
    },
    {
      name: 'Hybrid Cloud',
      description: 'Combine on-premises and cloud infrastructure',
      icon: Server;
      benefits: ['Flexibility', 'Gradual migration', 'Risk mitigation', 'Cost control']
    },
    {
      name: 'Multi-Cloud',
      description: 'Distribute workloads across multiple cloud providers',
      icon: Globe;
      benefits: ['Vendor independence', 'Risk distribution', 'Best-of-breed services', 'Cost optimization']
    },
    {
      name: 'Cloud-Native',
      description: 'Build new applications using cloud-native technologies',
      icon: Sparkles;
      benefits: ['Microservices architecture', 'Containerization', 'DevOps integration', 'Auto-scaling']
    }
  ];

  const pricingPlans = [
    {
      name: 'Assessment',
      price: '$5,000',
      period: 'one-time',
      description: 'Comprehensive cloud readiness assessment',
      features: [
        'Infrastructure audit',
        'Workload analysis',
        'Cost estimation',
        'Migration roadmap',
        'Risk assessment',
        'Recommendations report'
      ],
      popular: false;
    },
    {
      name: 'Standard Migration',
      price: '$25,000',
      period: 'per project',
      description: 'Complete migration for small to medium workloads',
      features: [
        'Up to 50 servers',
        'Database migration',
        'Application migration',
        'Security implementation',
        'Testing & validation',
        '30 days support'
      ],
      popular: true;
    },
    {
      name: 'Enterprise Migration'
      price: 'Custom',
      period: 'per project',
      description: 'Large-scale enterprise migration with custom requirements',
      features: [
        'Unlimited servers',
        'Custom architecture',
        'Dedicated team',
        '24/7 support',
        'SLA guarantee',
        'Ongoing optimization'
      ],
      popular: false;
    }
  ];

  const testimonials = [
    {
      name: 'Mark Thompson',
      role: 'CTO',
      company: 'Financial Services Inc.',
      content: 'Cloud migration services reduced our infrastructure costs by 40% and improved performance by 60%. Excellent work!',
      rating: 5;
    },
    {
      name: 'Sarah Johnson',
      role: 'IT Director',
      company: 'Healthcare Solutions',
      content: 'Zero-downtime migration with complete data integrity. Our business never missed a beat during the transition.',
      rating: 5;
    },
    {
      name: 'David Chen',
      role: 'VP of Engineering',
      company: 'E-commerce Platform',
      content: 'The automated migration process was flawless. We saved months of manual work and achieved 99.9% uptime.',
      rating: 5;
    }
  ];

  const stats = [
    { icon: Server, value: '500+', label: 'Servers Migrated' },
    { icon: Database, value: '100+', label: 'Databases Migrated' },
    { icon: TrendingUp, value: '40%', label: 'Average Cost Reduction' },
    { icon: Clock, value: '99.9%', label: 'Uptime Guarantee' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></div>
      <Helmet></Helmet>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
        <title>Cloud Migration Services - Zion Tech Group</title>
        <meta name="description" content="Cloud Migration Services solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Cloud Migration Services</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive cloud migration services solutions designed to meet your business needs.
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
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

const CloudMigrationServicesPage: React.FC = () => {
  const features = [
    {
<<<<<<< HEAD
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
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
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration Services - Zion Tech Group</title>
        <meta name="description" content="Expert cloud migration services for seamless transitions." />
        <meta name="keywords" content="cloud migration, AWS, Azure, Google Cloud, migration" />
      </Helmet>

<<<<<<< HEAD
<<<<<<< HEAD
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Cloud Migration Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Expert cloud migration services for seamless transitions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
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
=======
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4"></section>
        <div className="max-w-7xl mx-auto text-center"></section>
          <div className="inline-flex items-center bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
            <Sparkles className="w-4 h-4 mr-2" >Professional Cloud Migration<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">Cloud Migration Services</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Seamlessly migrate your infrastructure to the cloud with our expert team. Zero-downtime deployment,</p>
            security-first approach, and automated migration processes. Reduce costs by 40% while improving performance.</p>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">{stats.map((stat, index) => (</div>
            <Sparkles className="w-4 h-4 mr-2" />
            Professional Cloud Migration;
          </div>
          <h1 className="text-4xl sm: text-5xl md:text-6xl font-bold text-white mb-6 neon-text"></h1>
            Cloud Migration Services;)
          </h1>)
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">)
            Seamlessly migrate your infrastructure to the cloud with our expert team. Zero-downtime deployment),
            security-first approach, and automated migration processes. Reduce costs by 40% while improving performance.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md: grid-cols-4 gap-6 mb-12">,
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card"></div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card"></div>
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-blue-400 mb-1">{stat.value}</div><div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"></div>
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            ></a>
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950;
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com?subject=Cloud Migration Services Consultation"
              className="border-2 border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
            ></a>
              Get Free Consultation;
            </a>
          </div>
        </div>,
      </section>,
,
      {/* Migration Types Section */}
      <section className="py-16 px-4"></section>
          <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text"></h2>
            Migration Strategies;
          </h2>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {migrationTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover: bg-white/20 transition-all duration-300 cyber-card">,
                <type.icon className="w-12 h-12 text-blue-400 mb-4" />,
                <h3 className="text-xl font-bold text-white mb-3">{type.name}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <ul className="space-y-2"></ul>
                  {type.benefits.map((benefit, benefitIndex) => (
        <div className="max-w-7xl mx-auto"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">Migration Strategies</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{migrationTypes.map((type, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card"></div>
                <type.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{type.name}</h3><p className="text-gray-300 mb-4">{type.description}</p><ul className="space-y-2">{type.benefits.map((benefit, benefitIndex) => (</ul>
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{benefit}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></section>
          <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text"></h2>
            Our Expertise;
          </h2>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">,
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover: bg-white/20 transition-all duration-300 cyber-card">,
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />,
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2"></ul>
                  {feature.benefits.map((benefit, benefitIndex) => (
        <div className="max-w-7xl mx-auto"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">Our Expertise</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card"></div>
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3><p className="text-gray-300 mb-4">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{benefit}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">Transparent Pricing</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</div><div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-blue-400 scale-105' : ''} cyber-card`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-blue-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
          <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text"></h2>
            Transparent Pricing;
          </h2>,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 relative ${plan.popular ? 'ring-2 ring-blue-400 scale-105' : ''} cyber-card`}></div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-blue-400 text-slate-900 px-4 py-1 rounded-full text-sm font-medium"></span>
                      Most Popular;
                    </span>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span><span className="text-gray-300 ml-1">{plan.period}</span><ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) => (</ul>
                    <li key={featureIndex} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" >{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
                <a;
                  href={`mailto:kleber@ziontechgroup.com?subject=Cloud Migration Services - ${plan.name}`}
                  className={`w-full block text-center py-3 rounded-lg font-medium transition-all ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover: from-blue-600 hover:to-purple-700'}
                      : 'bg-white/20 text-white hover:bg-white/30'}
                  }`}
                ></a>
                  Get Started;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></section>
          <h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text"></h2>
            What Our Clients Say;
          </h2>,
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">,
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card"></div>
                <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (<Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div></div>
                  <div className="font-semibold text-white">{testimonial.name}<div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
        <div className="max-w-7xl mx-auto"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">What Our Clients Say</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card"></div>
                <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (</div><Star key={i} className="w-5 h-5 text-yellow-400 fill-current" >))}<p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div></div>
                  <div className="font-semibold text-white">{testimonial.name}</div><div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                </div>
              ))}
            </div>
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
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
<<<<<<< HEAD
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
=======
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Cloud Migration Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced cloud migration services. 
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
            Why Choose Our Cloud Migration Services?
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

<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
      <Footer />
    </>
  );
=======
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600"></section>
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-6"></h2>
            Ready to Migrate to the Cloud?
          </h2>
          <p className="text-xl text-blue-100 mb-8"></p>
            Join hundreds of businesses that have successfully migrated to the cloud with our expert services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a;
        <div className="max-w-4xl mx-auto text-center"></section>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Migrate to the Cloud?</h2><p className="text-xl text-blue-100 mb-8">Join hundreds of businesses that have successfully migrated to the cloud with our expert services.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            ></a>
              Call (302) 464-0950;
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            ></a>
              Email Us;
            </a>
          </div>
        </div>
      </section>,
    </div>);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
};

export default CloudMigrationServicesPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function CloudmigrationservicesPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Cloud Migration Services - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Cloud Migration Services</h1>
        <p className="text-lgtext-gray-300mb-8">Professional cloud migration services services coming soon.</p>
          Contact Us

  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
export default function CloudmigrationservicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Cloud Migration Services - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Cloud Migration Services</h1>
          <p className="text-lg text-gray-300 mb-8">Professional cloud migration services services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
