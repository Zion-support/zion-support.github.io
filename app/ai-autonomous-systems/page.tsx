import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Cpu, 
  Zap, 
  Shield, 
  ArrowRight,
  Star,
  Users,
  BarChart3,
  Brain,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Clock,
  DollarSign,
  Target,
  Settings,
  Activity
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AIAutonomousSystemsPage = () => {
  const features = [
    {
      title: 'Intelligent Decision Making',
      description: 'AI systems that make autonomous decisions based on real-time data analysis and machine learning algorithms.',
      icon: <Brain className="w-6 h-6" />,
      benefits: [
        'Real-time decision processing',
        'Adaptive learning algorithms',
        'Multi-criteria optimization',
        'Self-improving systems'
      ]
    },
    {
      title: 'Autonomous Process Control',
      description: 'Self-managing systems that control and optimize processes without human intervention.',
      icon: <Settings className="w-6 h-6" />,
      benefits: [
        '24/7 autonomous operation',
        'Predictive maintenance',
        'Dynamic resource allocation',
        'Error self-correction'
      ]
    },
    {
      title: 'Intelligent Monitoring',
      description: 'Advanced monitoring systems that detect anomalies and respond automatically to changing conditions.',
      icon: <Activity className="w-6 h-6" />,
      benefits: [
        'Anomaly detection',
        'Predictive alerts',
        'Automated responses',
        'Performance optimization'
      ]
    },
    {
      title: 'Self-Healing Systems',
      description: 'Systems that automatically detect and repair issues, ensuring continuous operation and reliability.',
      icon: <Shield className="w-6 h-6" />,
      benefits: [
        'Automatic fault detection',
        'Self-repair capabilities',
        'Redundancy management',
        'Zero-downtime operation'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small autonomous systems',
      features: [
        'Basic AI decision making',
        'Standard monitoring',
        'Email support',
        'Monthly updates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,999',
      period: '/month',
      description: 'Ideal for complex autonomous operations',
      features: [
        'Advanced AI algorithms',
        'Real-time monitoring',
        'Priority support',
        'Custom integrations',
        '24/7 monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$7,999',
      period: '/month',
      description: 'For large-scale autonomous deployments',
      features: [
        'Custom AI models',
        'White-label solution',
        '24/7 dedicated support',
        'Advanced security',
        'Custom development'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Shield className="w-6 h-6" /> },
    { number: '60%', label: 'Cost Reduction', icon: <DollarSign className="w-6 h-6" /> },
    { number: '85%', label: 'Efficiency Gain', icon: <Zap className="w-6 h-6" /> },
    { number: '200+', label: 'Deployed Systems', icon: <Bot className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      company: 'Tech Innovations Inc',
      role: 'CTO',
      content: 'Our autonomous systems have reduced operational costs by 60% while improving efficiency by 85%. The AI decision-making is incredibly sophisticated.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      company: 'Manufacturing Solutions',
      role: 'Operations Director',
      content: 'The self-healing capabilities are remarkable. We\'ve had zero downtime since implementing these systems six months ago.',
      rating: 5
    },
    {
      name: 'Emily Watson',
      company: 'Smart City Corp',
      role: 'Systems Engineer',
      content: 'The autonomous monitoring and control systems have transformed our city infrastructure. Everything runs seamlessly without human intervention.',
      rating: 5
    }
  ];

  const useCases = [
    {
      title: 'Smart Manufacturing',
      description: 'Autonomous production lines that self-optimize, self-maintain, and adapt to changing demands in real-time.',
      icon: <Settings className="w-8 h-8" />,
      results: '40% production increase, 50% maintenance reduction'
    },
    {
      title: 'Autonomous Vehicles',
      description: 'AI-powered vehicle systems that navigate, make decisions, and operate independently in complex environments.',
      icon: <Bot className="w-8 h-8" />,
      results: '99.9% safety record, 30% fuel efficiency'
    },
    {
      title: 'Smart Infrastructure',
      description: 'Self-managing infrastructure systems that monitor, maintain, and optimize city services autonomously.',
      icon: <Activity className="w-8 h-8" />,
      results: '60% cost savings, 90% reliability improvement'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Autonomous Systems - Self-Managing AI Solutions | Zion Tech Group"
        description="Revolutionary AI autonomous systems that operate independently. Achieve 99.9% uptime, 60% cost reduction, and 85% efficiency gains with self-managing AI."
        keywords="autonomous systems, AI automation, self-managing systems, intelligent automation, autonomous AI, smart systems"
        canonical="https://ziontechgroup.com/ai-autonomous-systems"
      />
      
      <Helmet>
        <title>AI Autonomous Systems - Self-Managing AI Solutions</title>
        <meta name="description" content="Revolutionary AI autonomous systems for modern businesses" />
      </Helmet>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <ResponsiveContainer className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Zap className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Self-Managing AI Systems</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              AI Autonomous Systems
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Revolutionary AI systems that operate independently, make intelligent decisions, and self-manage 
              with 99.9% uptime and 85% efficiency gains.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={Zap}
                iconPosition="left"
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={Bot}
                iconPosition="left"
              >
                Watch Demo
              </FuturisticButton>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Autonomous Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our cutting-edge AI technology provides comprehensive autonomous operation with unmatched intelligence and reliability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  className="group"
                  glowColor={index % 2 === 0 ? 'cyan' : 'purple'}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI autonomous systems deliver results across various industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <FuturisticCard
                  key={index}
                  className="text-center group"
                  glowColor={index % 3 === 0 ? 'cyan' : index % 3 === 1 ? 'purple' : 'pink'}
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="text-cyan-400 font-medium text-sm">
                    {useCase.results}
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your autonomous systems needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard
                  key={index}
                  className={`relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}
                  glowColor={plan.popular ? 'cyan' : 'purple'}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButton
                    href="/contact"
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="lg"
                    className="w-full"
                    icon={ArrowRight}
                    iconPosition="right"
                  >
                    Get Started
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Industry Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what industry experts say about our AI autonomous systems
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Deploy Autonomous AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join industry leaders already using our AI autonomous systems to achieve unprecedented efficiency and reliability. 
              Start your transformation today.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/ai-services"
                variant="outline"
                size="lg"
                icon={Zap}
                iconPosition="right"
              >
                View All AI Services
              </FuturisticButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AIAutonomousSystemsPage;