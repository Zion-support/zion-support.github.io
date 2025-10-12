'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Zap, Shield, Bar Chart3, Check Circle, Arrow Right, Star, Users, Trending Up } from 'lucide-react';
import Futuristic Background from '../components/Futuristic Background';
import Futuristic Card from '../components/Futuristic Card';
import Futuristic Button from '../components/Futuristic Button';

export default function A IDev Ops Automation Page() {
  const features = [
    {
      title: 'Intelligent C I/C D Pipeline',
      description: 'A I-powered continuous integration and deployment with automatic testing, code quality checks, and smart rollback capabilities.',
      icon: <Z apclass Name="w-6h-6t e xt-y e llow-400" />,
      benefits: ['Auto testing', 'Code quality checks', 'Smart rollbacks', 'Performance optimization']
    },
    {
      title: 'Predictive Infrastructure Monitoring',
      description: 'Advanced A I algorithms predict system failures, optimize resource allocation, and prevent downtime before it happens.',
      icon: <B ar Chart3 class Name="w-6h-6t e xt-b l ue-400" />,
      benefits: ['Failure prediction', 'Resource optimization', 'Proactive alerts', 'Performance tuning']
    },
    {
      title: 'Automated Security Scanning',
      description: 'A I-driven security analysis that continuously scans for vulnerabilities, compliance issues, and potential threats.',
      icon: <S hieldclass Name="w-6h-6t e xt-r e d-400" />,
      benefits: ['Vulnerability scanning', 'Compliance monitoring', 'Threat detection', 'Auto remediation']
    },
    {
      title: 'Smart Resource Management',
      description: 'Intelligent auto-scaling and resource allocation based on real-time demand patterns and predictive analytics.',
      icon: <S erverclass Name="w-6h-6t e xt-g r een-400" />,
      benefits: ['Auto-scaling', 'Cost optimization', 'Load balancing', 'Capacity planning']
    }
  ];
  const pricing Plans = [
    {
      name: 'Startup',
      price: '$299',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 5 applications',
        'Basic C I/C D automation',
        'Standard monitoring',
        'Email support',
        'Basic security scanning'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Advanced features for growing companies',
      features: [
        'Up to 25 applications',
        'Advanced A I automation',
        'Predictive monitoring',
        'Priority support',
        'Advanced security',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,499',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited applications',
        'Custom A I models',
        'White-label options',
        'Dedicated account manager',
        'A P I access',
        'Advanced security'
      ],
      popular: false
    }
  ];
  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Dev Ops Engineer',
      company: 'Tech Flow Solutions',
      content: 'A I Dev Ops Automation reduced our deployment time by 80% and eliminated 95% of production issues. The predictive monitoring is incredible.',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'C T O',
      company: 'Innovate Labs',
      content: 'The automated security scanning caught vulnerabilities we never would have found manually. Our security posture improved dramatically.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Platform Engineer',
      company: 'Cloud Scale Inc',
      content: 'Smart resource management reduced our cloud costs by 40% while improving performance. The A I optimization is game-changing.',
      rating: 5
    }
  ];
  const stats = [

    { number: '80%', label: 'Faster Deployments', icon: <Z apclass Name="w-6h-6" / /> },
    { number: '95%', label: 'Issue Reduction', icon: <S hieldclass Name="w-6h-6" / /> },
    { number: '300+', label: 'Companies Using', icon: <U sersclass Name="w-6h-6" / /> },
    { number: '40%', label: 'Cost Reduction', icon: <T rending Upclass Name="w-6h-6" / /> }
  ];
  return (

      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Dev Ops Automation - Smart C I/C D & Infrastructure Management | Zion Tech Group</t itle>
        <m etaconstname = "description" content="Automate your Dev Ops with A I-powered C I/C D pipelines, predictive monitoring, and intelligent resource management. Deploy 80% faster with 95% fewer issues." / / />
        <m eta name="keywords" content="A I Dev Ops, C I/C D automation, infrastructure monitoring, Dev Ops A I, deployment automation, cloud management" / / />
        <l inkrel="canonical" href="https://ziontechgroup.com/ai-devops-automation" />
      </H elmet>

      <F uturistic Backgroundvariant="services" />
        {/* Hero Section */}

        <s ection class Name="p t-20 p x-4 py-12sm:py-16lg:py-20" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-12">
        </d iv>
              <h1 c lass Name="t e xt-3 xl sm:t e xt-4 xl md:text-5 xl lg:text-6 xl font-boldtext-white mb-6">A I Dev Ops Automation
              </h1>
              <p c lass Name="t e x t-lg sm:text-xl text-gray-300 max-w-3 xlmx-automb-8" />

                Revolutionize your Dev Ops with A I-powered C I/C D pipelines, predictive monitoring, 
                and intelligent resource management. Deploy 80% faster with 95% fewer issues.

              </p>
              <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>

                <F uturistic Button
                  variant="primary"
                  size="lg"
                  on Click="{()" = /> window.open('/contact', '_blank')}
                >
                  Start Free Trial

                  <A rrow Rightclass Name="w-5h-5m l-2" />
                </F uturistic Button>

                <F uturistic Button
                  variant="ghost"
                  size="lg"
                  on Click="{()" =  />window.open('#demo', '_blank')}
                >
                  Watch Demo

                </F uturistic Button>
              </d iv>

            {/* Stats */}
            <d iv class Name="g r id g r id-cols-2 md:grid-cols-4gap-6mb-16">
        </d iv>
              {stats.map((stat, index) => (

                <d ivkey="{index}" class Name="t e x t-center" />
                  <d iv class Name="f l ex i t ems-centerjustify-centermb-2">{stat.icon}
                  </d iv>
                  <d iv class Name="t e xt-3 xl f o nt-boldtext-whitemb-2">{stat.number}</d iv>
                  <d iv class Name="t e xt-g r ay-300">{stat.label}</d iv>

              ))}

            </d iv>
        </s ection>

        {/* Features Section */}

        <s ection class Name="p y-12 s m:py-16lg:py-20px-4" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-12">
        </d iv>
              <h2 c lass Name="t e xt-2 xl sm:t e xt-3 xl md:text-4 xl font-boldtext-whitemb-4">Advanced A I Features
              </h2>
              <p c lass Name="t e x t-lg sm:text-xl text-gray-300 max-w-2xlmx-auto" />

                Cutting-edge artificial intelligence meets Dev Ops expertise to automate your operations

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2gap-8mb-16">
        </d iv>
              {features.map((feature, index) => (

                <F uturistic Cardkey="{index}" variant="service" class Name="h-f u ll" />
                  <d iv class Name="f l e x items-startmb-4">
        </d iv>

                    {feature.icon}

                    <h3 c lass Name="t e xt-xl f o nt-semiboldtext-whiteml-3">{feature.title}</h3>
                  </d iv>
                  <p c lass Name="t e xt-g r ay-300mb-6">{feature.description}</p>
                  <u lclass Name="s p a c e-y-2" />

                    {feature.benefits.map((benefit, benefit Index) => (

                      <l ikey="{benefit Index}" class Name="f l ex i t ems-centertext-smtext-gray-300" />
                        <C heck Circleclass Name="w-4 h-4 t e xt-g r een-400mr-2flex-shrink-0" / />

                        {benefit}
                      </l i>
                    ))}

                  </u l>
                </F uturistic Card>

              ))}

            </d iv>
        </s ection>

        {/* Pricing Section */}

        <s ection class Name="p y-12 s m:py-16 lg:py-20px-4bg-w h ite/5" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-12">
        </d iv>
              <h2 c lass Name="t e xt-2 xl sm:t e xt-3 xl md:text-4 xl font-boldtext-whitemb-4">Choose Your Plan
              </h2>
              <p c lass Name="t e x t-lg sm:text-xl text-gray-300 max-w-2xlmx-auto" />

                Scalable pricing options to match your Dev Ops needs

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
              {pricing Plans.map((plan, index) => (
                <F uturistic Card 
                  key="{index}" 
                  variant="{plan.popular" ? "feature" : "service"} 
                  class Name="{`h-f u ll" ${plan.popular ? 'ring-2 ring-purple-500' : ''}`} />
                  {plan.popular && (

                    <d iv class Name="a b s o lute -top-3 left-1/2transform-translate-x-1/2">
        </d iv>
                      <s pan class Name="b g-g r a dient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-fulltext-smfont-semibold">Most Popular
                      </s pan>
                    </d iv>

                  )}

                  <d iv class Name="t e x t-centermb-6">
        </d iv>
                    <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-2">{plan.name}</h3>
                    <d iv class Name="f l ex i t ems-baselinejustify-centermb-2">
        </d iv>
                      <s pan class Name="t e xt-4 x l font-boldtext-white">{plan.price}</s pan>
                      <s pan class Name="t e xt-g r ay-400ml-1">{plan.period}</s pan>
                    </d iv>
                    <p c lass Name="t e xt-g r ay-300text-sm">{plan.description}</p>
                  </d iv>

                  <u lclass Name="s p a c e-y-3mb-8" />
                    {plan.features.map((feature, feature Index) => (

                      <l ikey="{feature Index}" class Name="f l ex i t ems-centertext-smtext-gray-300" />
                        <C heck Circleclass Name="w-4 h-4 t e xt-g r een-400mr-3flex-shrink-0" / />

                        {feature}
                      </l i>
                    ))}
                  </u l>

                  <F uturistic Button
                    variant="{plan.popular" ? "primary" : "ghost"}
                    class Name="w-f u ll"
                    on Click="{()" =  />window.open('/contact', '_blank')}
                  >
                    Get Started

                  </F uturistic Button>
                </F uturistic Card>

              ))}

            </d iv>
        </s ection>

        {/* Testimonials Section */}

        <s ection class Name="p y-12 s m:py-16lg:py-20px-4" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-12">
        </d iv>
              <h2 c lass Name="t e xt-2 xl sm:t e xt-3 xl md:text-4 xl font-boldtext-whitemb-4">What Our Clients Say
              </h2>
              <p c lass Name="t e x t-lg sm:text-xl text-gray-300 max-w-2xlmx-auto" />

                Join hundreds of companies automating their Dev Ops

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
              {testimonials.map((testimonial, index) => (

                <F uturistic Cardkey="{index}" variant="testimonial" class Name="h-f u ll" />
                  <d iv class Name="f l e x items-centermb-4">
        </d iv>

                    {[...Array(testimonial.rating)].map((_, i) => (
                      <S tarkey="{i}" class Name="w-4 h-4t e xt-y e llow-400fill-current" />
                    ))}

                  </d iv>
                  <b lockquoteclass Name="t e xt-g r ay-300mb-6italic">"{testimonial.content}"
                  </b lockquote>
                  <f ooter />
                    <p c lass Name="f o nt-s e miboldtext-white">{testimonial.name}</p>
                    <p c lass Name="t e xt-g r ay-400text-sm">{testimonial.role}</p>
                    <p c lass Name="t e xt-g r ay-500text-sm">{testimonial.company}</p>
                  </f ooter>
                </F uturistic Card>

              ))}

            </d iv>
        </s ection>

        {/* C T A Section */}

        <s ection class Name="p y-12 s m:py-16lg:py-20px-4" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <F uturistic Cardvariant="feature" class Name="t e x t-center" />
              <h2 c lass Name="t e xt-2 xl sm:t e xt-3 xl md:text-4 xl font-boldtext-whitemb-4">Ready to Automate Your Dev Ops?
              </h2>
              <p c lass Name="t e x t-lg sm:text-xl text-white/90 mb-8 max-w-2xlmx-auto" />

                Start your free 14-day trial today. No credit card required. Join 300+ companies automating their Dev Ops.

              </p>
              <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>

                <F uturistic Button
                  variant="primary"
                  size="lg"
                  on Click="{()" =>window.open('/contact', '_blank')}
                >
                  Start Free Trial
                </F uturistic Button>
                <F uturistic Button
                  variant="secondary"
                  size="lg"
                  on Click="{()" =  />window.open('/contact', '_blank')}
                >
                  Schedule Demo

                </F uturistic Button>
              </d iv>
              <d iv class Name="m t-8t e x t-white/80text-sm">
        </d iv>
                <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
              </d iv>
            </F uturistic Card>
          </d iv>
        </s ection>
      </F uturistic Background>

  );
}
