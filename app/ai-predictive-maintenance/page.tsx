'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Settings, 
  AlertTriangle, 
  TrendingUp, 
  Shield, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Users,
  Star,
  BarChart3,
  Cpu,
  Wrench
} from 'lucide-react';

const AIPredictiveMaintenancePage: React.FC = () => {
  const features = [
    {
      icon: AlertTriangle,
      title: 'Failure Prediction',
      description: 'Predict equipment failures up to 30 days in advance with 95% accuracy using advanced machine learning algorithms',
      benefits: ['95% prediction accuracy', '30-day advance warning', 'Real-time monitoring', 'Risk scoring']
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Comprehensive analytics dashboard showing equipment health, efficiency trends, and optimization opportunities',
      benefits: ['Real-time dashboards', 'Historical analysis', 'Trend identification', 'Performance metrics']
    },
    {
      icon: Settings,
      title: 'Maintenance Scheduling',
      description: 'Intelligent scheduling system that optimizes maintenance windows based on usage patterns and failure predictions',
      benefits: ['Optimal scheduling', 'Resource optimization', 'Downtime minimization', 'Cost reduction']
    },
    {
      icon: Shield,
      title: 'Cost Optimization',
      description: 'Reduce maintenance costs by up to 40% through predictive insights and optimized resource allocation',
      benefits: ['40% cost reduction', 'Resource optimization', 'Inventory management', 'ROI tracking']
    },
    {
      icon: Zap,
      title: 'IoT Integration',
      description: 'Seamless integration with existing IoT sensors and equipment for real-time data collection and analysis',
      benefits: ['Sensor integration', 'Real-time data', 'Multi-vendor support', 'Scalable architecture']
    },
    {
      icon: Cpu,
      title: 'Machine Learning',
      description: 'Advanced ML models that continuously learn from equipment data to improve prediction accuracy over time',
      benefits: ['Continuous learning', 'Model improvement', 'Pattern recognition', 'Adaptive algorithms']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$599',
      period: '/month',
      description: 'Perfect for small manufacturing facilities with basic equipment monitoring needs',
      features: [
        'Up to 50 equipment units',
        'Basic failure prediction',
        'Email alerts',
        'Standard reporting',
        'Email support',
        '95% uptime SLA'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for medium-sized operations with complex equipment and advanced monitoring requirements',
      features: [
        'Up to 200 equipment units',
        'Advanced failure prediction',
        'Real-time alerts & notifications',
        'Advanced analytics & reporting',
        'Priority support',
        '99% uptime SLA',
        'Custom integrations',
        'Mobile app access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'Complete predictive maintenance solution for large industrial operations',
      features: [
        'Unlimited equipment units',
        'AI-powered failure prediction',
        'Multi-channel alerts',
        'Enterprise analytics & BI',
        '24/7 dedicated support',
        '99.9% uptime SLA',
        'Custom ML models',
        'API access',
        'White-label options',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Manufacturing Equipment',
      description: 'Monitor production lines, CNC machines, and assembly equipment to prevent costly downtime',
      metrics: 'Reduce unplanned downtime by 60%',
      icon: Settings
    },
    {
      title: 'HVAC Systems',
      description: 'Predict HVAC failures in commercial buildings to maintain optimal climate control',
      metrics: 'Save 35% on energy costs',
      icon: Zap
    },
    {
      title: 'Fleet Management',
      description: 'Monitor vehicle health and predict maintenance needs for transportation fleets',
      metrics: 'Extend vehicle life by 25%',
      icon: TrendingUp
    },
    {
      title: 'Data Centers',
      description: 'Ensure critical infrastructure uptime with predictive maintenance for servers and cooling systems',
      metrics: 'Achieve 99.99% uptime',
      icon: Cpu
    }
  ];

  const benefits = [
    {
      title: 'Reduce Downtime',
      description: 'Prevent unexpected equipment failures that can cost thousands per hour',
      value: '60% reduction in unplanned downtime'
    },
    {
      title: 'Lower Maintenance Costs',
      description: 'Optimize maintenance schedules and reduce unnecessary repairs',
      value: '40% reduction in maintenance costs'
    },
    {
      title: 'Extend Equipment Life',
      description: 'Proactive maintenance extends equipment lifespan significantly',
      value: '25% longer equipment life'
    },
    {
      title: 'Improve Safety',
      description: 'Prevent equipment failures that could pose safety risks to workers',
      value: '90% reduction in safety incidents'
    }
  ];

  const testimonials = [
    {
      name: 'David Martinez',
      company: 'Industrial Solutions Inc',
      role: 'Plant Manager',
      content: 'The AI predictive maintenance system has revolutionized our operations. We\'ve reduced unplanned downtime by 65% and saved over $2M in the first year.',
      rating: 5,
      avatar: '👨‍🔧'
    },
    {
      name: 'Jennifer Liu',
      company: 'Tech Manufacturing Corp',
      role: 'Maintenance Director',
      content: 'The accuracy of failure predictions is incredible. We can now schedule maintenance during planned downtime instead of emergency repairs.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Robert Thompson',
      company: 'Global Logistics',
      role: 'Fleet Operations Manager',
      content: 'Our fleet maintenance costs dropped by 45% after implementing the predictive maintenance system. The ROI was immediate.',
      rating: 5,
      avatar: '👨‍💻'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Predictive Maintenance - Zion Tech Group | Prevent Equipment Failures with AI</title>
        <meta name="description" content="Prevent equipment failures with AI-powered predictive maintenance. 95% accuracy, 30-day advance warning, reduce downtime by 60% and costs by 40%." />
        <meta name="keywords" content="predictive maintenance, AI maintenance, equipment monitoring, failure prediction, IoT maintenance, industrial AI" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-predictive-maintenance" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text">
                AI Predictive Maintenance
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Prevent equipment failures before they happen. Our AI-powered predictive maintenance system 
                predicts failures up to 30 days in advance with 95% accuracy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button w-full sm:w-auto text-center"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  📧 Get Free Assessment
                </a>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Prediction Accuracy</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">30</div>
                <div className="text-gray-300">Days Advance Warning</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">60%</div>
                <div className="text-gray-300">Downtime Reduction</div>
              </div>
              <div className="cyber-card hologram-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                <div className="text-gray-300">Cost Savings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Advanced Predictive Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of AI and machine learning to predict and prevent equipment failures
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                      <feature.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Proven Business Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your maintenance operations with measurable results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-8 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-4">{benefit.value}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven solutions across various industries and equipment types
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="cyber-card hologram-card p-8">
                  <div className="flex items-start mb-6">
                    <div className="bg-purple-500/20 p-3 rounded-lg mr-4">
                      <useCase.icon className="w-8 h-8 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{useCase.title}</h3>
                      <p className="text-cyan-400 font-semibold">{useCase.metrics}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your predictive maintenance needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card hologram-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
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

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600' 
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how leading companies are transforming their maintenance operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card hologram-card p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Prevent Equipment Failures?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get a free equipment assessment and see how predictive maintenance can transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button w-full sm:w-auto text-center"
                >
                  📞 Call: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  📧 Schedule Assessment
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
                <p>⏰ Mon-Fri: 9AM-6PM EST | 24/7 Emergency Support Available</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPredictiveMaintenancePage;