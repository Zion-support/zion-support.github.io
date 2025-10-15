'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';
import FuturisticBackground from '../components/FuturisticBackground';
import NeonButton from '../components/NeonButton';
import AnimatedCard from '../components/AnimatedCard';
import { 
  Shield, 
  AlertTriangle, 
  Lock, 
  Eye, 
  Zap, 
  Globe,
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Clock,
  Target,
  Activity
} from 'lucide-react';

const ZionSecurityShieldPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Real-time Threat Detection',
      description: 'Advanced AI-powered threat detection that monitors your systems 24/7 for any suspicious activity.',
      benefits: ['AI threat analysis', 'Behavioral monitoring', 'Anomaly detection', 'Instant alerts']
    },
    {
      icon: AlertTriangle,
      title: 'Automated Incident Response',
      description: 'Automatically respond to security threats with predefined actions and escalation procedures.',
      benefits: ['Auto-quarantine', 'Threat isolation', 'Escalation protocols', 'Response automation']
    },
    {
      icon: Lock,
      title: 'Vulnerability Scanning',
      description: 'Comprehensive vulnerability assessments across your entire infrastructure and applications.',
      benefits: ['Continuous scanning', 'CVSS scoring', 'Patch recommendations', 'Risk prioritization']
    },
    {
      icon: Eye,
      title: 'Compliance Monitoring',
      description: 'Ensure compliance with industry standards like GDPR, HIPAA, SOX, and PCI DSS.',
      benefits: ['Multi-standard support', 'Compliance dashboards', 'Audit trails', 'Reporting tools']
    },
    {
      icon: Zap,
      title: 'Security Analytics',
      description: 'Advanced security analytics with machine learning to identify patterns and predict threats.',
      benefits: ['ML threat prediction', 'Pattern analysis', 'Risk scoring', 'Trend identification']
    },
    {
      icon: Globe,
      title: 'Multi-cloud Protection',
      description: 'Protect your assets across AWS, Azure, GCP, and on-premises environments.',
      benefits: ['Cloud-native security', 'Cross-platform monitoring', 'Unified dashboard', 'Centralized management']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 49,
      period: 'month',
      description: 'Perfect for small businesses',
      features: [
        '5 assets monitoring',
        'Basic threat detection',
        'Email alerts',
        'Standard reports',
        'Email support',
        'Basic compliance checks'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 129,
      period: 'month',
      description: 'Ideal for growing companies',
      features: [
        '25 assets monitoring',
        'Advanced threat detection',
        'SMS + Email alerts',
        'Custom reports',
        'Priority support',
        'API access',
        'Advanced compliance',
        'Incident response automation'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 299,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited assets',
        'Full threat detection',
        'Custom alert channels',
        'Advanced analytics',
        '24/7 support',
        'Dedicated account manager',
        'Custom compliance frameworks',
        'White-label options'
      ],
      popular: false
    }
  ];

  const securityStats = [
    { number: '99.9%', label: 'Threat Detection Accuracy' },
    { number: '< 30s', label: 'Average Response Time' },
    { number: '1,800+', label: 'Protected Assets' },
    { number: '24/7', label: 'Monitoring Coverage' }
  ];

  return (
    <>
      <SEOHead 
        title="Zion Security Shield - Advanced Cybersecurity Platform"
        description="Protect your business with Zion Security Shield - the most advanced cybersecurity platform. Real-time threat detection, automated response, and compliance monitoring."
        keywords="cybersecurity, threat detection, security monitoring, compliance, vulnerability scanning, incident response"
      />
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        <FuturisticBackground />
        
        {/* Hero Section */}
        <section className="relative z-10 py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>Advanced Cybersecurity Platform</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Zion Security Shield
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed">
                Advanced cybersecurity platform with real-time threat detection, automated incident response, 
                and comprehensive compliance monitoring. Protect your business from evolving cyber threats.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <NeonButton href="/contact" size="lg">
                  Start Free Trial
                </NeonButton>
                <NeonButton href="/demo" variant="secondary" size="lg">
                  Security Assessment
                </NeonButton>
              </div>
              
              {/* Security Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {securityStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative z-10 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Security Features</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security solutions designed to protect your business from all angles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <AnimatedCard key={index} glowColor="cyan">
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white group-hover:text-red-300 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="relative z-10 py-16 lg:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Pricing</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security plan that fits your business needs and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <AnimatedCard 
                  key={plan.name} 
                  glowColor={plan.popular ? 'purple' : 'cyan'} 
                  className={plan.popular ? 'ring-2 ring-purple-400' : ''}
                >
                  <div className="space-y-6">
                    {plan.popular && (
                      <div className="text-center">
                        <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-white">${plan.price}</span>
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <NeonButton 
                      href="/contact" 
                      variant={plan.popular ? 'accent' : 'primary'} 
                      size="lg" 
                      className="w-full"
                    >
                      Get Protected
                    </NeonButton>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 lg:mb-12">
              Don't wait for a security breach. Start protecting your business with Zion Security Shield today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <NeonButton href="/contact" size="lg">
                Start Free Trial
              </NeonButton>
              <NeonButton href="/demo" variant="secondary" size="lg">
                Security Assessment
              </NeonButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionSecurityShieldPage;