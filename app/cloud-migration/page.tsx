import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Zap, Cloud, CheckCircle, Star, Clock, Users, 
  BarChart3, Sparkles, Target, Award, Lightbulb, Globe, Shield, 
  MessageCircle, Mail, Phone, MapPin, Play, Pause, Download, Upload,
  Edit, Copy, Share, Bookmark, Heart, ThumbsUp, RefreshCw, Settings,
  Palette, Type, Image, Video, Music, Code, Database, Lock,
  Server, HardDrive, Wifi, Database as DbIcon, Cpu, MemoryStick,
  Monitor, Smartphone, Laptop, Router, HardDriveIcon, Network
} from 'lucide-react'

export default function CloudMigrationPage() {
  const [selectedPlan, setSelectedPlan] = useState('enterprise')

  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Multi-Cloud Strategy',
      description: 'Comprehensive cloud migration across AWS, Azure, and Google Cloud with optimal architecture design.',
      benefits: ['Cloud assessment', 'Architecture design', 'Cost optimization', 'Performance tuning']
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      title: 'Zero-Downtime Migration',
      description: 'Seamless migration with zero business disruption using advanced migration techniques.',
      benefits: ['Blue-green deployment', 'Rollback capabilities', 'Data integrity', 'Service continuity']
    },
    {
      icon: <Database className="w-6 h-6 text-purple-400" />,
      title: 'Data Migration',
      description: 'Secure and efficient data migration with validation, transformation, and synchronization.',
      benefits: ['Data validation', 'ETL processes', 'Real-time sync', 'Data integrity checks']
    },
    {
      icon: <Settings className="w-6 h-6 text-pink-400" />,
      title: 'Application Modernization',
      description: 'Transform legacy applications to cloud-native architecture with microservices and containers.',
      benefits: ['Containerization', 'Microservices', 'API development', 'DevOps integration']
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-orange-400" />,
      title: 'Performance Optimization',
      description: 'Optimize cloud resources for maximum performance, cost efficiency, and scalability.',
      benefits: ['Resource optimization', 'Cost analysis', 'Performance monitoring', 'Auto-scaling']
    },
    {
      icon: <Lock className="w-6 h-6 text-red-400" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security implementation with compliance monitoring and threat protection.',
      benefits: ['Security hardening', 'Compliance audit', 'Threat detection', 'Data encryption']
    }
  ]

  const pricingPlans = [
    {
      name: 'Small Business',
      price: '$5,000',
      period: 'one-time',
      description: 'Perfect for small businesses with basic cloud needs',
      features: [
        'Cloud assessment & planning',
        'Basic migration (up to 10 servers)',
        'Data migration & validation',
        'Basic security setup',
        '30 days support',
        'Migration documentation',
        'Training session'
      ],
      popular: false,
      cta: 'Get Quote'
    },
    {
      name: 'Enterprise',
      price: '$25,000',
      period: 'one-time',
      description: 'Comprehensive migration for growing enterprises',
      features: [
        'Full cloud strategy & planning',
        'Complete migration (up to 100 servers)',
        'Application modernization',
        'Advanced security & compliance',
        '90 days support',
        'Performance optimization',
        'Team training & documentation',
        'Monitoring & alerting setup',
        'Disaster recovery planning'
      ],
      popular: true,
      cta: 'Get Quote'
    },
    {
      name: 'Custom Enterprise',
      price: 'Custom',
      period: 'project-based',
      description: 'Tailored solutions for large organizations',
      features: [
        'Custom cloud architecture',
        'Unlimited migration scope',
        'Full application modernization',
        'Enterprise security & compliance',
        '12 months support',
        'Dedicated project manager',
        'Custom integrations',
        'White-label solutions',
        'Ongoing optimization',
        '24/7 monitoring',
        'SLA guarantees'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  const testimonials = [
    {
      name: 'James Wilson',
      role: 'CTO',
      company: 'TechCorp Industries',
      content: 'The cloud migration was flawless. We achieved 40% cost savings and improved performance by 60%.',
      rating: 5,
      avatar: 'JW'
    },
    {
      name: 'Lisa Anderson',
      role: 'IT Director',
      company: 'Global Services Ltd.',
      content: 'Zero downtime migration exceeded our expectations. The team was professional and efficient throughout.',
      rating: 5,
      avatar: 'LA'
    },
    {
      name: 'Michael Brown',
      role: 'VP of Engineering',
      company: 'InnovateTech Solutions',
      content: 'Application modernization transformed our legacy systems. We now have scalable, cloud-native architecture.',
      rating: 5,
      avatar: 'MB'
    }
  ]

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Comprehensive analysis of current infrastructure and cloud readiness assessment.',
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      details: ['Infrastructure audit', 'Cost analysis', 'Security assessment', 'Migration roadmap']
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Design optimal cloud architecture tailored to your business requirements.',
      icon: <Settings className="w-8 h-8 text-emerald-400" />,
      details: ['Cloud provider selection', 'Architecture planning', 'Security design', 'Scalability planning']
    },
    {
      step: '03',
      title: 'Migration Execution',
      description: 'Execute migration with zero downtime using advanced migration techniques.',
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      details: ['Data migration', 'Application deployment', 'Testing & validation', 'Go-live support']
    },
    {
      step: '04',
      title: 'Optimization & Support',
      description: 'Continuous optimization and ongoing support to ensure peak performance.',
      icon: <Zap className="w-8 h-8 text-pink-400" />,
      details: ['Performance tuning', 'Cost optimization', 'Monitoring setup', 'Ongoing support']
    }
  ]

  const cloudProviders = [
    {
      name: 'Amazon Web Services',
      logo: 'AWS',
      features: ['EC2, S3, RDS', 'Lambda functions', 'Auto-scaling', 'Global infrastructure'],
      color: 'from-orange-500 to-yellow-500'
    },
    {
      name: 'Microsoft Azure',
      logo: 'Azure',
      features: ['Virtual Machines', 'Azure SQL', 'Functions', 'Hybrid cloud'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Google Cloud',
      logo: 'GCP',
      features: ['Compute Engine', 'Cloud Storage', 'BigQuery', 'AI/ML services'],
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Cloud Migration Services - Expert Cloud Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our expert cloud migration services. Zero-downtime migration, multi-cloud strategy, and enterprise security. Starting at $5,000." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud, cloud services, infrastructure migration, cloud consulting" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/cloud-migration" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-40 right-20 w-12 h-12 bg-purple-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-pink-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2.5s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Cloud className="w-4 h-4" />
              <span>Expert Cloud Migration Services</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Cloud
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Migration
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with seamless cloud migration. Zero downtime, enterprise security, and optimized performance.
              <br />
              <span className="text-cyan-400 font-semibold">AWS • Azure • Google Cloud • 100% success rate</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105">
                <span>Get Free Assessment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm">
                <Play className="w-5 h-5" />
                <span>View Case Studies</span>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>500+ Successful Migrations</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>100% Success Rate</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Migration Process Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Proven <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Migration Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                A systematic approach to ensure successful cloud migration with zero business disruption.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="text-cyan-400 text-sm font-bold mb-2">Step {step.step}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud Providers Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Multi-Cloud <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Certified experts in all major cloud platforms with proven migration experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cloudProviders.map((provider, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${provider.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-lg">{provider.logo}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {provider.name}
                  </h3>
                  <div className="space-y-2">
                    {provider.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-cyan-400 text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Migration Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Everything you need for a successful cloud migration with enterprise-grade security and performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
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

        {/* Pricing Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Flexible pricing options to fit businesses of all sizes. All projects include our core migration services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-400/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
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
        <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">500+ Companies</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                See what our clients say about their cloud migration experience with Zion Tech Group.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
                
                <div className="relative z-10">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Ready to Migrate to the <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Cloud?</span>
                  </h2>
                  
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                    Join hundreds of companies that have successfully migrated to the cloud with our expert guidance. 
                    Get your free assessment today.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                    <button className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                      <span>Get Free Assessment</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <Link 
                      to="/contact" 
                      className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                    >
                      <span>Contact Our Experts</span>
                      <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
                    <div className="flex items-center justify-center space-x-3">
                      <Phone className="w-5 h-5 text-cyan-300" />
                      <span className="text-sm">+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <Mail className="w-5 h-5 text-purple-300" />
                      <span className="text-sm">kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <MapPin className="w-5 h-5 text-pink-300" />
                      <span className="text-sm">Middletown DE 19709</span>
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