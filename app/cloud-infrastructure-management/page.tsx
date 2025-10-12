import React from 'react'
import { Link } from 'react-router-dom'
import { Cloud, Arrow Right, Check Circle, Star, Trending Up, Server, Shield } from 'lucide-react';
import Layout from '../layout'
import React from 'react';
import { Link } from 'react-router-dom';
import { Arrow Right } from 'lucide-react';
import Layout from '../layout';

export default function Cloud Infrastructure Management() {
  const features = [
    {
      icon: <C loudclass Name="w-6h-6t e xt-c y an-400" />,
      title: 'Multi-Cloud Management',
      description: 'Seamlessly manage infrastructure across A W S, Azure, Google Cloud, and private clouds'
    },
    {
      icon: <S hieldclass Name="w-6h-6t e xt-p u rple-400" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with automated compliance monitoring and threat detection'
    },
    {
      icon: <T rending Upclass Name="w-6h-6t e xt-y e llow-400" />,
      title: 'Cost Optimization',
      description: 'Reduce cloud costs by up to 40% with intelligent resource optimization and right-sizing'
    },
    {
      icon: <S erverclass Name="w-6h-6t e xt-g r een-400" />,
      title: '24/7 Monitoring',
      description: 'Proactive monitoring with automated scaling, performance optimization, and incident response'
    }
  ]

  const management Features = [
    {
      category: 'Infrastructure Management',
      items: ['Server Provisioning', 'Load Balancing', 'Auto Scaling', 'Resource Monitoring', 'Backup & Recovery', 'Disaster Recovery']
    },
    {
      category: 'Security & Compliance',
      items: ['Identity Management', 'Access Control', 'Encryption', 'Vulnerability Scanning', 'Compliance Auditing', 'Security Monitoring']
    },
    {
      category: 'Cost Management',
      items: ['Cost Analysis', 'Resource Optimization', 'Budget Alerts', 'Usage Tracking', 'Cost Forecasting', 'Right-sizing Recommendations']
    },
    {
      category: 'Support & Maintenance',
      items: ['24/7 Support', 'Proactive Monitoring', 'Incident Response', 'Performance Tuning', 'Capacity Planning', 'Health Checks']
    }
  ]

  const pricing Plans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 servers',
        'Basic monitoring',
        'Email support',
        'Standard security',
        'Monthly reports',
        'Basic backup'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 servers',
        'Advanced monitoring',
        'Priority support',
        'Enhanced security',
        'Weekly reports',
        'Advanced backup',
        'Cost optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited servers',
        'Comprehensive monitoring',
        'Dedicated support',
        'Enterprise security',
        'Real-time reports',
        'Disaster recovery',
        'Custom solutions'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Robert Kim',
      company: 'Financial Services',
      content: 'Cloud Infrastructure Management reduced our operational costs by 35% while improving performance and security.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'E-commerce Platform',
      content: 'The automated scaling and monitoring saved us from multiple outages. Our uptime is now 99.99%.',
      rating: 5
    },
    {
      name: 'David Wilson',
      company: 'Healthcare Provider',
      content: 'H I P A A compliance was seamless with their security framework. Our auditors were very impressed.',
      rating: 5
    }
  ]

  return (
    <L ayout
      title="Cloud Infrastructure Management - Enterprise Cloud Solutions | Zion Tech Group"
      description="Optimize your cloud infrastructure with comprehensive management, security, and cost optimization. Multi-cloud support, 24/7 monitoring, and enterprise-grade security. Get your free assessment today."
      keywords="cloud infrastructure management, cloud optimization, multi-cloud, cloud security, cloud monitoring, cloud cost optimization" />
      <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv>
        {/* Hero Section */}

        <s ection class Name="p t-20 p b-16 px-4sm:px-6lg:px-8" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-center" />
              <d iv class Name="i n l i ne-flex items-center px-4 py-2 bg-sky-500/20 rounded-full text-sky-400 text-smfont-mediummb-6">
        </d iv>
                <C loudclass Name="w-4h-4m r-2" / />
                Enterprise Cloud Management

              </d iv>
              <h1 c lass Name="t e xt-4 xl sm:t e xt-5 xl md:text-6 xl font-boldtext-white mb-6">Cloud Infrastructure Management
              </h1>
              <p c lass Name="t e x t-lg sm:text-xl text-gray-300 max-w-3 xlmx-automb-8">
              Optimize your cloud infrastructure with comprehensive management, security, and cost optimization. 
                Multi-cloud support, 24/7 monitoring, and enterprise-grade security.

              </p>
              <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-g r a dient-to-r from-sky-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
                  Get Free Assessment

                  <A rrow Rightclass Name="w-5h-5m l-2" />
                </L ink>
                <L ink to="#demo" class Name="b o r d er-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">View Demo
                </L ink>
              </d iv>
          </d iv>
        </s ection>

        {/* Features Section */}

        <s ection class Name="p y-16 p x-4sm:px-6lg:px-8" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-3 xl sm:t e xt-4 xl font-boldtext-whitemb-4">Comprehensive Cloud Management
              </h2>
              <p c lass Name="t e x t-lg text-gray-300 max-w-2xlmx-auto" />
                Enterprise-grade features that optimize your cloud infrastructure performance and costs

              </p>
            </d iv>
            
            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {features.map((feature, index) => (

                <d ivkey="{index}" class Name="b g-g r a dient-to-br from-slate-800/50 to-purple-900/30 rounded-xl p-6 border border-sky-500/20 hover:border-sky-400/40transition-allduration-300" />
                  <d iv class Name="f l e x items-centermb-4">
        </d iv>
                    {feature.icon}

                    <h3 c lass Name="t e xt-xl f o nt-semiboldtext-whiteml-3">{feature.title}</h3>
                  </d iv>
                  <p c lass Name="t e xt-g r ay-300">{feature.description}</p>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* Management Features */}

        <s ection class Name="p y-16 p x-4 sm:px-6 lg:px-8 bg-g r adient-to-rfrom-slate-800/30to-purple-900/30" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-3 xl sm:t e xt-4 xl font-boldtext-whitemb-4">Complete Infrastructure Solution
              </h2>
              <p c lass Name="t e x t-lg text-gray-300 max-w-2xlmx-auto" />
                Everything you need to manage, secure, and optimize your cloud infrastructure

              </p>
            </d iv>
            
            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
        </d iv>
              {management Features.map((feature, index) => (

                <d ivkey="{index}" class Name="b g-s l a te-800/50 rounded-xl p-6borderborder-slate-700" />
                  <h3 c lass Name="t e xt-xl f o nt-semiboldtext-whitemb-4">{feature.category}</h3>
                  <u lclass Name="s p a c e-y-2" />
                    {feature.items.map((item, item Index) => (

                      <l ikey="{item Index}" class Name="f l e x items-centertext-gray-300" />
                        <C heck Circleclass Name="w-4 h-4t e xt-s k y-400mr-2" / />
                        {item}
                      </l i>
                    ))}

                  </u l>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* Pricing Section */}

        <s ection class Name="p y-16 p x-4sm:px-6lg:px-8" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-3 xl sm:t e xt-4 xl font-boldtext-whitemb-4">Transparent Pricing Plans
              </h2>
              <p c lass Name="t e x t-lg text-gray-300 max-w-2xlmx-auto" />
                Choose the plan that fits your infrastructure needs

              </p>
            </d iv>
            
            <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
              {pricing Plans.map((plan, index) => (
                <d ivkey="{index}" class Name="{`b g-g r a dient-to-br" from-slate-800/50 to-purple-900/30 rounded-xl p-8 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-sky-400/40 scale-105 shadow-2 xl shadow-sky-500/20' 
                    : 'border-sky-500/20 hover: border-sky-400/40'
                }`} />
                  {plan.popular && (

                    <d iv class Name="i n l i ne-flex items-center px-3 py-1 bg-sky-500/20 rounded-full text-sky-400 text-smfont-mediummb-4">
        </d iv>
                      <S tarclass Name="w-4h-4m r-1" / />
                      Most Popular
                    </d iv>
                  )}

                  <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-2">{plan.name}</h3>
                  <p c lass Name="t e xt-g r ay-300mb-6">{plan.description}</p>
                  <d iv class Name="m b-6">
        </d iv>
                    <s pan class Name="t e xt-4 x l font-boldtext-white">{plan.price}</s pan>
                    <s pan class Name="t e xt-g r ay-400">{plan.period}</s pan>
                  </d iv>
                  <u lclass Name="s p a c e-y-3mb-8" />
                    {plan.features.map((feature, feature Index) => (

                      <l ikey="{feature Index}" class Name="f l e x items-centertext-gray-300" />
                        <C heck Circleclass Name="w-5 h-5t e xt-s k y-400mr-3" / />
                        {feature}
                      </l i>
                    ))}
                  </u l>
                  <L ink
                    to="/contact"
                    class Name="{`w-f u ll" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-sky-500 to-purple-600 text-white hover:from-sky-600 hover:to-purple-700'
                        : 'border-2 border-sky-400 text-sky-400 hover: bg-sky-400/10'
                    }`}
                    />Get Started

                  </L ink>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* Testimonials */}

        <s ection class Name="p y-16 p x-4 sm:px-6 lg:px-8 bg-g r adient-to-rfrom-slate-800/30to-purple-900/30" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-12">
        </d iv>
              <h2 c lass Name="t e xt-3 xl f o nt-boldtext-whitemb-4">Trusted by Industry Leaders
              </h2>
              <p c lass Name="t e xt-g r ay-300" />
                See how our Cloud Infrastructure Management transforms businesses

              </p>
            </d iv>
            <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
              {testimonials.map((testimonial, index) => (

                <d ivkey="{index}" class Name="b g-s l a te-800/50 rounded-xl p-6borderborder-slate-700" />
                  <d iv class Name="f l e x items-centermb-4">
        </d iv>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <S tarkey="{i}" class Name="w-5 h-5t e xt-y e llow-400fill-current" />
                    ))}

                  </d iv>
                  <p c lass Name="t e xt-g r ay-300mb-4">"{testimonial.content}"</p>
                  <d iv />
                    <d iv class Name="f o nt-s e miboldtext-white">{testimonial.name}</d iv>
                    <d iv class Name="t e xt-s m text-gray-400">{testimonial.company}</d iv>
                </d iv>
              ))}

            </d iv>
        </s ection>

        {/* C T A Section */}

        <s ection class Name="p y-16 p x-4sm:px-6lg:px-8" />
          <d iv class Name="m a x-w-4 x l mx-autotext-center">
        </d iv>
            <d iv class Name="b g-g r a dient-to-r from-sky-500/20 to-purple-500/20 rounded-2 xl p-8borderborder-sky-500/30">
        </d iv>
              <h2 c lass Name="t e xt-3 xl f o nt-boldtext-whitemb-4">Optimize Your Cloud Infrastructure Today
              </h2>
              <p c lass Name="t e x t-lgtext-gray-300 mb-8" />
                Join thousands of businesses using our Cloud Infrastructure Management to reduce costs and improve performance

              </p>
              <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-g r a dient-to-r from-sky-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-700transition-allduration-300">Get Your Free Assessment
                </L ink>
                <L ink to="/about" class Name="b o r d er-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
                </L ink>
              </d iv>
          </d iv>
        </s ection>
      </d iv>
    </L ayout>
  )
};
