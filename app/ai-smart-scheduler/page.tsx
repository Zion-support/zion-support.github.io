import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, CheckCircle, Calendar, Clock, Users, Zap, Shield, BarChart3, Phone, Mail, MapPin } from 'lucide-react'
import { NeonText, NeonCard, NeonButton } from '../components/NeonEffects'

export default function AISmartSchedulerPage() {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-cyan-400" />,
      title: 'Smart Meeting Optimization',
      description: 'AI learns your preferences and automatically finds the best meeting times for all participants'
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-400" />,
      title: 'Time Zone Management',
      description: 'Automatically handles time zone conversions and suggests optimal times for global teams'
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: 'Team Coordination',
      description: 'Coordinate complex meetings with multiple participants and resource requirements'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-400" />,
      title: 'Conflict Resolution',
      description: 'Intelligently resolves scheduling conflicts and suggests alternative times'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Security & Privacy',
      description: 'Enterprise-grade security with end-to-end encryption and compliance standards'
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
      title: 'Analytics & Insights',
      description: 'Detailed analytics on meeting patterns, productivity, and optimization opportunities'
    }
  ]

  const benefits = [
    'Save 5+ hours per week on scheduling tasks',
    'Reduce meeting conflicts by 90%',
    'Improve meeting attendance rates by 25%',
    'Optimize team productivity and collaboration',
    'Eliminate double-booking incidents',
    'Streamline calendar management across platforms'
  ]

  const pricing = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 10 team members',
        'Basic AI optimization',
        'Calendar integration',
        'Email notifications',
        'Basic analytics',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 team members',
        'Advanced AI optimization',
        'Multi-calendar support',
        'Custom meeting templates',
        'Advanced analytics',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited team members',
        'AI-powered insights',
        'Custom integrations',
        'Advanced security',
        'Dedicated support',
        'Custom reporting',
        'White-label options'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>AI Smart Scheduler - Zion Tech Group | Intelligent Meeting Optimization</title>
        <meta name="description" content="Revolutionize your scheduling with AI Smart Scheduler. Automatically optimize meetings, reduce conflicts, and boost team productivity. Save 5+ hours per week." />
        <meta name="keywords" content="AI scheduler, meeting optimization, calendar management, team productivity, Zion Tech Group" />
      </Helmet>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase bg-cyan-400/10 px-3 py-1 rounded-full">
              AI Services
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <NeonText intensity="high">AI Smart Scheduler</NeonText>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Intelligent scheduling that learns from your patterns and optimizes meetings automatically. 
            Reduce scheduling friction by 80% and never miss important meetings again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <NeonButton 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="group"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </NeonButton>
            <NeonButton 
              variant="secondary" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Schedule Demo
            </NeonButton>
          </div>
          <div className="text-center">
            <p className="text-cyan-400 font-semibold text-lg">Starting at $79/month</p>
            <p className="text-gray-400 text-sm">Market Price: $120-200/month</p>
          </div>
        </div>

        {/* Key Benefits */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <NeonText intensity="medium">Key Benefits</NeonText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Transform your scheduling process with AI-powered intelligence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <NeonCard key={index} className="flex items-center group hover:scale-105 transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                <span className="text-gray-300 font-medium">{benefit}</span>
              </NeonCard>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <NeonText intensity="medium">Powerful Features</NeonText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Everything you need to optimize your scheduling workflow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <NeonCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </NeonCard>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <NeonText intensity="medium">Simple Pricing</NeonText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose the plan that fits your team size and needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <NeonCard key={index} className={`relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <NeonButton 
                    variant={plan.popular ? "primary" : "secondary"}
                    size="lg"
                    onClick={() => window.location.href = '/contact'}
                    className="w-full"
                  >
                    Get Started
                  </NeonButton>
                </div>
              </NeonCard>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            <NeonText intensity="high">Ready to Transform Your Scheduling?</NeonText>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about AI Smart Scheduler and how it can benefit your organization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Call Us</p>
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Email Us</p>
              <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-white font-semibold">Visit Us</p>
              <p className="text-gray-300 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NeonButton 
              variant="accent" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Get Free Consultation
            </NeonButton>
            <NeonButton 
              variant="secondary" 
              size="lg"
              onClick={() => window.location.href = '/services'}
              className="border-2 border-white text-white hover:bg-white/10"
            >
              View All Services
            </NeonButton>
          </div>
        </section>
      </div>
    </div>
  )
}