import React from 'react'
import { Helmet } from 'react-helmet-async'

const AiCybersecurityPage: React.FC = () => {
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
const AICybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced AI algorithms that detect and prevent cyber threats in real-time, including zero-day attacks and advanced persistent threats.',
      benefits: ['Real-time detection', 'Zero-day protection', '99.9% accuracy']
    },
    {
      icon: Shield,
      title: 'Automated Response',
      description: 'Intelligent automated response system that instantly contains threats, isolates affected systems, and initiates recovery procedures.',
      benefits: ['Instant containment', 'Auto-recovery', 'Minimal downtime']
    },
    {
      icon: Eye,
      title: 'Continuous Monitoring',
      description: '24/7 monitoring of your entire infrastructure with AI-powered analysis of network traffic, user behavior, and system activities.',
      benefits: ['24/7 surveillance', 'Behavioral analysis', 'Anomaly detection']
    },
    {
      icon: BarChart,
      title: 'Security Analytics',
      description: 'Comprehensive security analytics and reporting with threat intelligence, risk assessment, and compliance monitoring.',
      benefits: ['Threat intelligence', 'Risk scoring', 'Compliance reports']
    },
    {
      icon: Zap,
      title: 'Vulnerability Management',
      description: 'Automated vulnerability scanning, prioritization, and patching with AI-powered risk assessment and remediation guidance.',
      benefits: ['Auto-scanning', 'Risk prioritization', 'Patch management']
    },
    {
      icon: Lock,
      title: 'Zero Trust Architecture',
      description: 'Implement zero trust security model with identity verification, device trust, and least privilege access controls.',
      benefits: ['Identity verification', 'Device trust', 'Least privilege']
    }
  ];
  const pricingPlans = [
    {
      name: 'Essential',
      price: '$799',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 50 endpoints',
        'Basic threat detection',
        'Email security',
        '24/7 monitoring',
        'Email support',
        'Basic reporting',
        'Standard compliance'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,999',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 500 endpoints',
        'Advanced AI detection',
        'All security modules',
        'Real-time response',
        'Priority support',
        'Advanced analytics',
        'Custom compliance',
        'Incident response'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited endpoints',
        'Custom AI models',
        'Full security suite',
        'Dedicated SOC team',
        'Dedicated support',
        'Custom development',
        'Advanced compliance',
        'Penetration testing',
        'SLA guarantee'
      ],
      popular: false
    }
  ];
  const stats = [
    { number: '99.9%', label: 'Threat Detection' },
    { number: '24/7', label: 'Monitoring' },
    { number: '60%', label: 'Faster Response' },
    { number: '100%', label: 'Compliance' }
  ];
  const threats = [
    {
      title: 'Ransomware Protection',
      description: 'Advanced AI detection and prevention of ransomware attacks with automated backup and recovery systems.',
      icon: Shield
    },
    {
      title: 'Phishing Detection',
      description: 'AI-powered email security that detects and blocks sophisticated phishing attempts and social engineering attacks.',
      icon: Eye
    },
    {
      title: 'Insider Threat Detection',
      description: 'Behavioral analysis to identify and prevent insider threats, data exfiltration, and unauthorized access.',
      icon: Users
    },
    {
      title: 'Network Security',
      description: 'Comprehensive network monitoring and protection with AI-powered intrusion detection and prevention systems.',
      icon: Globe
    }
  ];
  return (
    <>
      <Helmet>
        <title>AI Cybersecurity - Zion Tech Group</title>
        <meta name="description" content="AI Cybersecurity services by Zion Tech Group. Advanced AI and IT solutions for your business." />
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'
const AiCybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']},
    {icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']},
    {icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']},
    {icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  }];

const benefits = [
];
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology';
  ]
return (
    <>
  <Helmet />
        <title>Ai Cybersecurity - Zion Tech Group</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced AI Cybersecurity solutions by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AiCybersecurityPage
      <Helmet>
        <title>Ai Cybersecurity - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" /></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Ai Cybersecurity</h1>
            <p>
              Advanced AI-powered ai cybersecurity solution for modern businesses.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">Get Started
              </button>
              <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">View Demo,
              </button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p>
                Advanced AI technology that drives results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {
    feature.benefits && (
                    <ul>
                      {feature.benefits.map((benefit, idx) => (
  }
                        <li>
                          <CheckCircle>

                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution?</h2>
              <p>
                Proven results that drive business growth and efficiency
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                    <CheckCircle>
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Contact our experts to discuss your requirements and get started today.</p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">Contact Us
                </button>
                <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
  )
}
export default AiCybersecurityPage
