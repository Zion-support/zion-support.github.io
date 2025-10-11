<<<<<<< HEAD
'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import {CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe}}from 'lucide-react';
const CloudMigrationPage: React.FC = () => {,
=======
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Cloud, Shield, Zap, Database, CheckCircle, Star, ArrowRight, Users, BarChart, Clock, Server, Globe } from 'lucide-react'

const CloudMigrationPage: React.FC = () => {
>>>>>>> origin/main
  const features = [
    {
<<<<<<< HEAD
<<<<<<< HEAD
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

=======
      icon: Shield,
      title: 'Secure Cloud Migration',
<<<<<<< HEAD
      description: 'Safe and secure migration of your applications and data to the cloud',},
    {}];
=======
      description: 'Safe and secure migration of your applications and data to the cloud'
=======
      icon: Cloud,
      title: 'Multi-Cloud Strategy',
      description: 'Comprehensive cloud migration strategy across AWS, Azure, and Google Cloud',
      details: ['Cloud Assessment', 'Migration Planning', 'Cost Optimization', 'Performance Tuning']
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with full compliance during migration',
      details: ['Data Encryption', 'Access Controls', 'Compliance Audits', 'Security Monitoring']
    },
    {
      icon: Zap,
      title: 'Zero-Downtime Migration',
      description: 'Seamless migration with minimal business disruption',
      details: ['Live Migration', 'Rollback Plans', 'Testing Environments', 'Monitoring']
    },
    {
      icon: Database,
      title: 'Data Migration',
      description: 'Safe and secure transfer of all your data and applications',
      details: ['Data Validation', 'Backup Strategies', 'Data Integrity', 'Recovery Plans']
    },
    {
      icon: Server,
      title: 'Infrastructure Setup',
      description: 'Complete cloud infrastructure setup and configuration',
      details: ['Auto-scaling', 'Load Balancing', 'Monitoring', 'Backup Systems']
    },
    {
      icon: Globe,
      title: 'Global Deployment',
      description: 'Deploy your applications across multiple regions worldwide',
      details: ['Multi-Region Setup', 'CDN Configuration', 'Latency Optimization', 'Global Monitoring']
    }
<<<<<<< HEAD
  ];];];
>>>>>>> origin/main
=======
  ]
<<<<<<< HEAD
>>>>>>> origin/main
>>>>>>> origin/main
  const benefits = [
    'Advanced cloud migration technology',
    'Real-time migration monitoring',
    'Enterprise-grade security and compliance',
    'Scalable and flexible migration solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
<<<<<<< HEAD
<<<<<<< HEAD
    'Proven track record of success'
<<<<<<< HEAD
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
=======
  ]
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)</div>
      <Helmet />
        <title>Cloud Migration | Zion Tech Group</title>
        <meta name="description" content="Professional Cloud Migration services by Zion Tech Group. Advanced AI and IT solutions for your business." />
<meta name="keywords" content="cloud migration, cloud services, IT services, Zion Tech Group, cloud computing" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Cloud Migration;</h1>
  </
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your business with our advanced cloud migration solutions.</p>
=======
    'Proven track record of success';
  ];
=======
    'Proven track record of success'
  ]
>>>>>>> origin/main
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      </div><Helmet>
        </Helmet><title>Cloud Migration | Zion Tech Group</title>
        <meta name="description" content="Professional Cloud Migration services by Zion Tech Group. Advanced AI and IT solutions for your business." />
<<<<<<< HEAD

=======
<meta name="keywords" content="cloud migration, cloud services, IT services, Zion Tech Group, cloud computing" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Cloud Migration
  </
>>>>>>> main
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our advanced cloud migration solutions. 
>>>>>>> origin/main
            Powered by cutting-edge AI technology and industry expertise.
          </p>
<<<<<<< HEAD
>>>>>>> origin/main
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        </section>
=======
<<<<<<< HEAD
      {/* Features Section */} <section className="py-20 px-4 sm: px-6 lg:px-8">,</section>
>>>>>>> origin/main
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
              Why Choose Our Cloud Migration?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our cloud migration solutions deliver unmatched performance, security, and scalability.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
            {features.map((feature, index) => (
              <div key={index}className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover: bg-white/20 transition-all duration-300">,</div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
=======
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        </section>< className="$2 />
          </div><div className="text-center mb-16">
            </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Cloud Migration?
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cloud migration solutions deliver unmatched performance, security, and scalability.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              </div><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                </div><div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  </div><feature.icon className="h-6 w-6 text-white" />
>>>>>>> origin/main
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description</p>}</p>
              </div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
<<<<<<< HEAD
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              ))
=======
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}
                <p className="text-gray-300">{feature.description}
            ))}
<<<<<<< HEAD
          </div>
        </div>
      </section>
      {/* Benefits Section */} <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">,</section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
              Key Benefits,
  </
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the power of our cloud migration solutions for your business.</p>
=======
      {/* Benefits Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-white/5">
        </section>< className="$2 />
          </div><div className="text-center mb-16">
            </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits,
  
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
              Experience the power of our cloud migration solutions for your business.
>>>>>>> origin/main
=======

  const pricingPlans = [
    {
      name: 'Assessment',
      price: '$2,999',
      period: 'one-time',
      description: 'Comprehensive cloud readiness assessment',
      features: [
        'Current infrastructure analysis',
        'Cloud readiness report',
        'Migration roadmap',
        'Cost estimation',
        'Security assessment',
        'Recommendations'
      ],
      popular: false
    },
    {
      name: 'Standard Migration',
      price: '$9,999',
      period: 'one-time',
      description: 'Complete migration for small to medium businesses',
      features: [
        'Up to 10 applications',
        'Data migration',
        'Security setup',
        'Testing & validation',
        'Go-live support',
        '30 days support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Migration',
      price: 'Custom',
      period: 'quote',
      description: 'Large-scale enterprise migration',
      features: [
        'Unlimited applications',
        'Custom architecture',
        'Dedicated team',
        '24/7 support',
        'SLA guarantee',
        'Ongoing optimization'
      ],
      popular: false
    }
  ]

  const stats = [
    { value: '99.9%', label: 'Uptime Guarantee', icon: <Clock className="w-8 h-8 text-green-400" /> },
    { value: '50%', label: 'Cost Reduction', icon: <BarChart className="w-8 h-8 text-blue-400" /> },
    { value: '3x', label: 'Performance Improvement', icon: <Zap className="w-8 h-8 text-purple-400" /> },
    { value: '24/7', label: 'Support Available', icon: <Users className="w-8 h-8 text-cyan-400" /> }
  ]

  const migrationSteps = [
    {
      step: '01',
      title: 'Assessment & Planning',
      description: 'Analyze current infrastructure and create detailed migration plan'
    },
    {
      step: '02',
      title: 'Environment Setup',
      description: 'Configure cloud environment and security settings'
    },
    {
      step: '03',
      title: 'Data Migration',
      description: 'Transfer data and applications to cloud infrastructure'
    },
    {
      step: '04',
      title: 'Testing & Validation',
      description: 'Comprehensive testing to ensure everything works perfectly'
    },
    {
      step: '05',
      title: 'Go-Live & Support',
      description: 'Deploy to production with ongoing monitoring and support'
    }
  ]

  const testimonials = [
    {
      name: 'Robert Kim',
      role: 'CTO, FinanceFirst',
      content: 'Cloud migration reduced our infrastructure costs by 60% and improved performance by 300%.',
      rating: 5,
      company: 'FinanceFirst'
    },
    {
      name: 'Jennifer Martinez',
      role: 'IT Director, RetailMax',
      content: 'The migration was seamless with zero downtime. Our team was impressed with the professionalism.',
      rating: 5,
      company: 'RetailMax'
    },
    {
      name: 'David Chen',
      role: 'CEO, TechStart',
      content: 'ROI was achieved in 6 months. The cloud infrastructure is more reliable than our on-premise setup.',
      rating: 5,
      company: 'TechStart'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Cloud Migration</span> Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Seamlessly migrate your infrastructure to the cloud with zero downtime. 
              Reduce costs by 50% and improve performance by 300%.
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Free Assessment
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,</div>
            {benefits.map((benefit, index) => (
<<<<<<< HEAD
              <div key={index}className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit</span>}</span>
=======
              </div><div key={index} className="flex items-center space-x-3">
                </div><CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
>>>>>>> origin/main
=======
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
              </div>
>>>>>>> origin/main
            ))}
          </div>
        </div>
<<<<<<< HEAD
          </div>
        </div>
      </div>
    </div>
  ),
<<<<<<< HEAD
};

export default CloudMigrationPage;
=======
}
export default CloudMigrationPage
>>>>>>> origin/main
  </button>
  </button>
  </h2>
  </section>
  </h1>
  </div>
  </div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        </section>
=======
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Migration Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end cloud migration solutions tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
<<<<<<< HEAD
<<<<<<< HEAD
=======
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Migration Process
            </h2>
            <p className="text-xl text-gray-300">
              A proven 5-step process that ensures successful cloud migration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {migrationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Migration Packages
            </h2>
            <p className="text-xl text-gray-300">
              Choose the migration package that fits your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                plan.popular ? 'ring-2 ring-cyan-400 bg-white/15' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transform hover:scale-105' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  {plan.name === 'Enterprise Migration' ? 'Get Quote' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              See how we've helped companies successfully migrate to the cloud.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        </section>
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

<<<<<<< HEAD
export default PagePage;
=======
export default CloudMigrationPage;
=======
<div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          <p className="text-xl text-purple-100 mb-8">
            Contact our experts to discuss your cloud migration needs and get a customized solution.
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Migrate to the Cloud?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get a free assessment and discover how cloud migration can transform your business.
          </p>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Free Assessment
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
<<<<<<< HEAD
export default CloudMigrationPage</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></button></p></p></p></p></p></h1></h2></h2></h2></h2></h3></section></section>
>>>>>>> origin/main
>>>>>>> origin/main
=======

export default CloudMigrationPage
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
