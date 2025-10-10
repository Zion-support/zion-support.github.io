'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Wrench, 
  Brain, 
  AlertTriangle, 
  BarChart3, 
  Shield, 
  CheckCircle, 
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Settings,
  Zap,
  TrendingUp,
  Activity
} from 'lucide-react';

const AIPredictiveMaintenancePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Predictions',
      description: 'Machine learning algorithms predict equipment failures with 95% accuracy up to 30 days in advance'
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Continuous monitoring of equipment sensors with instant alerts and anomaly detection'
    },
    {
      icon: TrendingUp,
      title: 'Cost Optimization',
      description: 'Reduce maintenance costs by 40% and increase equipment uptime by 25%'
    },
    {
      icon: Shield,
      title: 'Safety Enhancement',
      description: 'Prevent catastrophic failures and ensure worker safety with proactive maintenance'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into equipment health, maintenance schedules, and performance metrics'
    },
    {
      icon: Settings,
      title: 'Integration Ready',
      description: 'Seamless integration with existing CMMS, ERP, and IoT systems'
    }
  ];

  const industries = [
    {
      title: 'Manufacturing',
      description: 'Predictive maintenance for production lines, CNC machines, and industrial equipment',
      icon: '🏭',
      savings: '35% cost reduction'
    },
    {
      title: 'Energy & Utilities',
      description: 'Monitor turbines, generators, and power distribution equipment',
      icon: '⚡',
      savings: '50% downtime reduction'
    },
    {
      title: 'Transportation',
      description: 'Fleet maintenance for vehicles, aircraft, and railway systems',
      icon: '🚛',
      savings: '30% maintenance costs'
    },
    {
      title: 'Healthcare',
      description: 'Medical equipment monitoring and facility maintenance',
      icon: '🏥',
      savings: '40% equipment failures'
    },
    {
      title: 'Oil & Gas',
      description: 'Pipeline monitoring, drilling equipment, and refinery maintenance',
      icon: '🛢️',
      savings: '45% safety incidents'
    },
    {
      title: 'Data Centers',
      description: 'Server and cooling system maintenance for optimal uptime',
      icon: '💻',
      savings: '99.9% uptime guarantee'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$599/month',
      description: 'Perfect for small facilities',
      features: [
        'Up to 50 equipment units',
        'Basic AI predictions',
        'Email alerts',
        'Standard integrations',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299/month',
      description: 'Ideal for growing operations',
      features: [
        'Up to 200 equipment units',
        'Advanced AI algorithms',
        'Real-time alerts',
        'Custom integrations',
        'Weekly reports',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited equipment',
        'Custom AI models',
        '24/7 monitoring',
        'Dedicated support',
        'Real-time dashboards',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const benefits = [
    '95% prediction accuracy',
    '40% cost reduction',
    '25% uptime increase',
    'Zero unplanned downtime',
    'Real-time monitoring',
    'Easy integration'
  ];

  return (
    <>
      <Helmet>
        <title>AI Predictive Maintenance - Zion Tech Group | Smart Equipment Monitoring</title>
        <meta name="description" content="Prevent equipment failures with AI-powered predictive maintenance. 95% accuracy, 40% cost reduction, and real-time monitoring for industrial equipment." />
        <meta name="keywords" content="AI predictive maintenance, equipment monitoring, IoT sensors, machine learning, industrial AI, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Predictive Maintenance
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Prevent equipment failures with AI-powered predictive maintenance. Achieve 95% prediction accuracy, 
              40% cost reduction, and zero unplanned downtime with our intelligent monitoring system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call: (302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Free Assessment
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Advanced Predictive Capabilities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Industry Applications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{industry.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{industry.description}</p>
                  <div className="text-cyan-400 font-semibold">{industry.savings}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Proven Results
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Flexible Pricing Plans
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
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
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white' 
                      : 'border border-white/20 text-white hover:bg-white/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Your Maintenance?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your equipment monitoring needs and create a custom predictive maintenance solution that saves costs and prevents failures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call: (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 px-4 bg-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-semibold">Phone</div>
                  <div>+1 (302) 464-0950</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div>kleber@ziontechgroup.com</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-semibold">Address</div>
                  <div>364 E Main St STE 1008<br />Middletown, DE 19709</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Clock className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-semibold">Hours</div>
                  <div>Mon-Fri: 9AM-6PM EST<br />24/7 Emergency Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPredictiveMaintenancePage;
